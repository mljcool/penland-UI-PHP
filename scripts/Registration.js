function setCodePrefix(data) {
   const userDetails = getMyDynamicDetails();
   const userFirstName = userDetails.personalInfo.contact.firstname;
   const attr = `_hso_setaworkshop_value@OData.Community.Display.V1.FormattedValue`;
   const codex = userFirstName + '-' + data.workShopOverview[attr];
   return codex;
}

function pluralForm(attr, workShopOverview) {
   const current = '75c86ef5-64c6-e811-a987-000d3a161ff6';

   const data = {
      mshied_coursesectionid:
         'mshied_coursesections(' +
         workShopOverview['_hso_setupanactivesession_value'] +
         ')',
      hso_enrollmentworkshopfee:
         'products(' + workShopOverview['_cr711_defaultfee_value'] + ')',
      hso_enrollmentsessionpricelist:
         'pricelevels(' +
         workShopOverview['_cr711_defaultsessionpricelist_value'] +
         ')',

      mshied_registrationstatusid:
         'mshied_registrationstatuses(' + current + ')',
   };
   return data[attr];
}

function getEnrollmentPayload() {
   let enrollmentItems = [];
   const myCart = getMyCartDetails();
   const getUserDatails = getDynamicDetailsFromAPI();
   const salesOrder = getSalesOrderDetails();
   const PORTAL = 1;

   if (myCart.items.length) {
      myCart.items.forEach((_data) => {
         const overView = _data.workShopOverview;
         enrollmentItems.push({
            hso_processtype: PORTAL,
            mshied_studentid: getUserDatails[0]['@odata.editLink'],
            mshied_begindate: _data.mshied_startdate,
            mshied_enddate: _data.mshied_enddate,
            mshied_name: setCodePrefix(_data),
            mshied_courseid: _data['@odata.editLink'],
            mshied_registrationstatusid: pluralForm(
               'mshied_registrationstatusid',
               overView
            ),
            mshied_coursesectionid: pluralForm(
               'mshied_coursesectionid',
               overView
            ),
            hso_enrollmentsessionpricelist: pluralForm(
               'hso_enrollmentsessionpricelist',
               overView
            ),
            hso_enrollmentworkshopfee: pluralForm(
               'hso_enrollmentworkshopfee',
               overView
            ),
            hso_enrollmentsalesorder: salesOrder['@odata.editLink'],
         });
      });
   }
   return enrollmentItems;
}

function salesOrderPayload() {
   const PORTAL = 1;
   const myCart = getMyCartDetails();
   const defaultPrice = myCart.items;
   const pricelevels =
      defaultPrice[0]['workShopOverview'][
         '_cr711_defaultsessionpricelist_value'
      ];
   const getUserDatails = getDynamicDetailsFromAPI();
   return {
      name: 'REGISTRATION-' + getUserDatails[0].fullname,
      customerid: getUserDatails[0]['@odata.editLink'],
      pricelevelid: `pricelevels(${pricelevels})`,
      hso_processtype: PORTAL,
      transactioncurrencyid: US_CURRENCIES,
   };
}

function productsPayload() {
   const productList = [];

   const myCart = getMyCartDetails();
   const prodStore = getProductionListStore();
   const salesOrder = getSalesOrderDetails();
   const productName =
      '_cr711_defaultfee_value@OData.Community.Display.V1.FormattedValue';
   if (myCart.items.length) {
      myCart.items.forEach((_data) => {
         const overView = _data.workShopOverview;
         productList.push({
            salesorderid: salesOrder['@odata.editLink'],
            productid: `products(${overView['_cr711_defaultfee_value']})`,
            quantity: 1,
            shipto_freighttermscode: 1,
            priceperunit: overView['pl.price'],
            salesorderdetailname: overView[productName],
            uomid: `uoms(4ccbfb2e-b6e7-ee11-904c-000d3a36b7bd)`,
         });
      });
   }

   //CHANGE TO API
   if (myCart.productList.length) {
      myCart.productList.forEach((_data) => {
         const selectStore = prodStore.find(
            (_store) => _store['@odata.editLink'] === _data
         );
         productList.push({
            salesorderdetailname: selectStore.name,
            salesorderid: salesOrder['@odata.editLink'],
            productid: _data,
            quantity: 1,
            shipto_freighttermscode: 1,
            priceperunit: selectStore.price,
            uomid: `uoms(${selectStore._defaultuomid_value})`,
         });
      });
   }
   return productList;
}

// THE MAIN REGISTRATION CORE FUNCTION
function startRegistrationEnrollment() {
   startAddLoadingEachSections();

   const checkAsIsForAccount = () => {
      asyncTask(1, 'sample').then(() => {
         console.log('Task 1 completed: ');
         afterEachCallStoploadingBySection('account');
         smoothSrollToNextBlock('personal');
         createContactDetails();
      });
   };

   checkAsIsForAccount();

   function createContactDetails() {
      const contactData = personalInfoPayload();

      $.ajax({
         ...requestOptions(REGISTER_ACCOUNT, contactData),
         success: function (data) {
            console.log('Task 2 completed: ');
            console.log('dynamicsAPIResult:', data);
            setItemStore('dynamicsAPIResult', data);
            afterEachCallStoploadingBySection('personal');
            smoothSrollToNextBlock('housing');
            createSalesOrder();
         },
         error: function () {},
      });
   }

   function createSalesOrder() {
      const salesOrderData = salesOrderPayload();

      $.ajax({
         ...requestOptions(
            Registration_Create_Sales_Order_Portal,
            salesOrderData
         ),
         success: function (data) {
            console.log('Task 3 completed: ');
            console.log('salerOrder:', data);
            setItemStore('salesOrder', data);
            addProductToSalesOrder();
         },
         error: function () {},
      });
   }

   function addProductToSalesOrder() {
      const productData = productsPayload();

      $.ajax({
         ...requestOptions(
            Registration_Add_Products_to_Sales_Order,
            productData
         ),
         success: function (data) {
            console.log('Task 4 completed: ');
            console.log('productData:', data);
            setItemStore('productData', data);
            afterEachCallStoploadingBySection('housing');
            smoothSrollToNextBlock('payments');
            dummyThreeSavePaymentDetails();
         },
         error: function () {},
      });
   }

   function dummyThreeSavePaymentDetails() {
      asyncTask(1, 'sample').then(() => {
         console.log('Task 5 completed: ');
         afterEachCallStoploadingBySection('payments');
         smoothSrollToNextBlock('workshops');
         createEnrollment();
      });
   }

   function createEnrollment() {
      const enrollmentData = getEnrollmentPayload();

      $.ajax({
         ...requestOptions(Registration_Enrollment_Portal, enrollmentData),
         success: function (data) {
            console.log('Task 6 completed: ');
            console.log('enrollmentData:', data);
            setItemStore('enrollmentData', data);
            afterEachCallStoploadingBySection('workshops');
            finalMessageSuccess();
         },
         error: function () {},
      });
   }
}
