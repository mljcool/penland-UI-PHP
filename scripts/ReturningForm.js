$(function () {
   var e = $('.select2');
   e.length &&
      e.each(function () {
         var e = $(this);
         e.wrap('<div class="position-relative"></div>'),
            e.select2({
               placeholder: 'Please select...',
               dropdownParent: e.parent(),
            });
      });
}),
   document.addEventListener('DOMContentLoaded', function (e) {
      const returningStudentform = $('.cast-returning-student-form');
      if (returningStudentform.length) {
         var mStepValidation = document.querySelector(
            '#multiStepsValidationReturningForm'
         );
         if (null !== mStepValidation) {
            var multiStepsForm = mStepValidation.querySelector(
               '#multiStepsFormReturningStudent'
            );
            var s = multiStepsForm.querySelector('#housing-info'),
               termsInfo = multiStepsForm.querySelector('#terms-info'),
               btnNext = [].slice.call(
                  multiStepsForm.querySelectorAll('.btn-next')
               ),
               multiStepsForm = [].slice.call(
                  multiStepsForm.querySelectorAll('.btn-prev')
               );

            let tForm = new Stepper(mStepValidation, { linear: !0 });

            const housingForm = FormHousingDetailsValidation(s);
            const termsInfoForm = FormTermsAndConditionValidation(termsInfo);

            btnNext.forEach((e) => {
               e.addEventListener('click', (e) => {
                  switch (tForm._currentIndex) {
                     case 0:
                        updateFormSteps(1);
                        tForm.next();
                        // housingForm.validate().then((_res) => {
                        //    if (_res === 'Valid') {
                        //       // saveHousingInformation(tForm);
                        //       loadingBlockUINewStudentForm();
                        //       saveHousingDetailsLocal();
                        //       updateFormSteps(FORM_STEPS.PAYMENT);
                        //       setTimeout(() => {
                        //          initializeHousingData();
                        //          PopulateForm();
                        //          $('.new-student-form').unblock();
                        //          tForm.next();
                        //       }, 1000);
                        //       return;
                        //    }
                        // });
                        break;

                     case 1:
                        updateFormSteps(2);
                        tForm.next();
                        // loadingBlockUINewStudentForm();
                        // updateFormSteps(FORM_STEPS.TERMS);
                        // setTimeout(() => {
                        //    $('.new-student-form').unblock();
                        //    tForm.next();
                        // }, 1000);
                        break;

                     case 2:
                        updateFormSteps(3);
                        tForm.next();
                        // termsInfoForm.validate().then((_res) => {
                        //    if (_res === 'Valid') {
                        //       loadingBlockUINewStudentForm();
                        //       updateTermsAgreement();
                        //       updateFormSteps(FORM_STEPS.CONFIRMATION);
                        //       setTimeout(() => {
                        //          summaryReviewSections();
                        //          $('.new-student-form').unblock();
                        //          tForm.next();
                        //       }, 1000);
                        //    }
                        // });
                        break;

                     default:
                        tForm.next();
                  }
               });
            }),
               multiStepsForm.forEach((e) => {
                  e.addEventListener('click', (e) => {
                     tForm.previous();
                     updateFormSteps(tForm._currentIndex);
                  });
               });
            console.log('getCurrenIndex', getCurrenIndex());
            // tForm.to(6);
            tForm.to(getCurrenIndex());
         }
      }
   });

function returninSetCodePrefix(data) {
   const user = getLoginDetails()[1];
   const attr = `_hso_setaworkshop_value@OData.Community.Display.V1.FormattedValue`;
   const codex = user.firstname + '-' + data.workShopOverview[attr];
   $('.dd-firstname').html(user.fullname);
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

function studentIDFormated() {
   if (checkHasSession()) {
      const data = getUserTokenDetails();
      return `contacts(${data.contactID})`;
   }
   return '';
}

function returningGetEnrollmentPayload() {
   let enrollmentItems = [];
   const myCart = getMyCartDetails();
   const salesOrder = getSalesOrderDetails();
   const PORTAL = 1;

   if (myCart.items.length) {
      myCart.items.forEach((_data) => {
         const overView = _data.workShopOverview;
         enrollmentItems.push({
            hso_processtype: PORTAL,
            mshied_studentid: studentIDFormated(),
            mshied_begindate: _data.mshied_startdate,
            mshied_enddate: _data.mshied_enddate,
            mshied_name: returninSetCodePrefix(_data),
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

function returningSalesOrderPayload() {
   const PORTAL = 1;
   const myCart = getMyCartDetails();
   const defaultPrice = myCart.items;
   const pricelevels =
      defaultPrice[0]['workShopOverview'][
         '_cr711_defaultsessionpricelist_value'
      ];
   const getUserDatails = getLoginDetails()[1];
   return {
      name: 'REGISTRATION-' + getUserDatails.fullname,
      customerid: studentIDFormated(),
      pricelevelid: `pricelevels(${pricelevels})`,
      hso_processtype: PORTAL,
      transactioncurrencyid: US_CURRENCIES,
   };
}

function returningProductsPayload() {
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
function ReturningStartRegistrationEnrollment() {
   startAddLoadingEachSections();
   returningCreateSalesOrder();

   function returningCreateSalesOrder() {
      const salesOrderData = returningSalesOrderPayload();

      $.ajax({
         ...requestOptions(
            Registration_Create_Sales_Order_Portal,
            salesOrderData
         ),
         success: function (data) {
            console.log('Task 3 completed: ');
            console.log('salerOrder:', data);
            setItemStore('salesOrder', data);
            returningAddProductToSalesOrder();
         },
         error: function () {},
      });
   }

   function returningAddProductToSalesOrder() {
      const productData = returningProductsPayload();

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

   function finalFormBottomSection() {
      const elementSection = $('.final-section-returning-students');
      elementSection.html('');
      const element = `<div class="card-footer text-muted" style="width: 100%; text-align: center;">
                        <a href="/penland-web" class="btn btn-primary">Browse more workshop.</a>
                    </div>`;
      elementSection.html(element);
   }

   function dummyThreeSavePaymentDetails() {
      asyncTask(1, 'sample').then(() => {
         console.log('Task 5 completed: ');
         afterEachCallStoploadingBySection('payments');
         smoothSrollToNextBlock('workshops');
         returningCreateEnrollment();
      });
   }

   function returningCreateEnrollment() {
      const enrollmentData = returningGetEnrollmentPayload();

      $.ajax({
         ...requestOptions(Registration_Enrollment_Portal, enrollmentData),
         success: function (data) {
            console.log('Task 6 completed: ');
            console.log('enrollmentData:', data);
            setItemStore('enrollmentData', data);
            afterEachCallStoploadingBySection('workshops');
            finalMessageSuccess();
            finalFormBottomSection();
            resetData();
         },

         error: function () {},
      });
   }
}

$(document).ready(function () {
   const myCart = getMyCartDetails();
   const invoiceURL = ['new-student', 'returning-student'];
   const isInRegistrationForms = AuthGuard(invoiceURL);
   if (!myCart.items.length && isInRegistrationForms) {
      redirectTo('index');
   }
   $('.final-button-steps-retuning-student').click(function () {
      ReturningStartRegistrationEnrollment();
   });
});
