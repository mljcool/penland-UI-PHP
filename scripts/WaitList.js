function getUserDetailsFirstname() {
   if (checkHasSession()) {
      return getLoginDetails()[1].firstname;
   }
   const userDetails = getMyDynamicDetails();
   return userDetails.personalInfo.contact.firstname;
}

function setCodePrefixWaitList(data) {
   const userFirstName = getUserDetailsFirstname();
   const attr = `_hso_setaworkshop_value@OData.Community.Display.V1.FormattedValue`;
   const codex = userFirstName + '-' + data.workShopOverview[attr];
   return codex;
}

function waitListPluralForm(attr, workShopOverview) {
   const waitlistID = '7bc86ef5-64c6-e811-a987-000d3a161ff6';

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
         'mshied_registrationstatuses(' + waitlistID + ')',
   };
   return data[attr];
}

function reformAndParseValueContact() {
   const contactData = personalInfoPayload();
   contactData.contact.hso_blackindigenousorpersonofcolor = parseInt(
      contactData.contact.hso_blackindigenousorpersonofcolor
   );
   contactData.contact.hso_lgbtqiaidentification = parseInt(
      contactData.contact.hso_lgbtqiaidentification
   );
   contactData.contact.mshied_homelanguage = parseInt(
      contactData.contact.mshied_homelanguage
   );
   contactData.contact.mshied_limitedlanguageproficiency = parseInt(
      contactData.contact.mshied_limitedlanguageproficiency
   );
   contactData.contact.mshied_preferredlanguage = parseInt(
      contactData.contact.mshied_preferredlanguage
   );
   contactData.contact.mshied_disability = parseInt(
      contactData.contact.mshied_disability
   );
   contactData.contact.mshied_race_ = parseInt(
      contactData.contact.mshied_race_
   );
   return contactData;
}

function loadingBlockUIWaitList() {
   $('.waiting-list-container').block({
      message: HTMLelementProp.blockUISummaryElement,
      centerY: false,
      css: {
         backgroundColor: 'transparent',
         border: '0',
         top: '200px',
      },
      overlayCSS: {
         backgroundColor: '#f9f9f9',
         opacity: 0.8,
      },
   });
}

function displayMessage() {
   $('.waiting-list-container').unblock();
   const data = getUserDetailsStore();
   console.log('fullname', data.fullname);
   $('.waiting-list-container').block({
      message: HTMLMessageWaitList(data.fullname),
      centerY: false,
      css: {
         backgroundColor: 'transparent',
         border: '0',
         top: '50px',
         cursor: 'default',
      },
      overlayCSS: {
         backgroundColor: '#f9f9f9',
         opacity: 0.8,
         cursor: 'default',
      },
   });
}

function contactDetailsBySession() {
   if (checkHasSession()) {
      const data = getUserTokenDetails();
      return `contacts(${data.contactID})`;
   }
   const waitlistData = getDataContactWaitlist();
   return waitlistData['@odata.editLink'];
}

function waitListEnrollmentPayload() {
   const _data = getCurrentSelectedWorkShop();
   const overView = _data.workShopOverview;
   const PORTAL = 1;
   const payload = {
      hso_processtype: PORTAL,
      mshied_studentid: contactDetailsBySession(),
      mshied_begindate: _data.mshied_startdate,
      mshied_enddate: _data.mshied_enddate,
      mshied_name: setCodePrefixWaitList(_data),
      mshied_courseid: _data['@odata.editLink'],
      mshied_registrationstatusid: waitListPluralForm(
         'mshied_registrationstatusid',
         overView
      ),
      mshied_coursesectionid: waitListPluralForm(
         'mshied_coursesectionid',
         overView
      ),
      hso_enrollmentsessionpricelist: waitListPluralForm(
         'hso_enrollmentsessionpricelist',
         overView
      ),
      hso_enrollmentworkshopfee: waitListPluralForm(
         'hso_enrollmentworkshopfee',
         overView
      ),
   };

   return payload;
}

function emptyCart() {
   const myCart = getMyCartDetails();
   const currentWorkshop = getCurrentSelectedWorkShop();
   myCart.items = myCart.items.filter(
      (_id) => _id.mshied_courseid !== currentWorkshop.mshied_courseid
   );
   updateMyDetails('cart', myCart);
}

function createEnrollmentWaitList() {
   const enrollmentData = waitListEnrollmentPayload();

   $.ajax({
      ...requestOptions(Join_to_waitlist_Create_Enrollment, enrollmentData),
      success: function (data) {
         console.log('Task 6 completed: ');
         console.log('enrollmentData:', data);
         setItemStore('enrollmentDataWaitlist', data);
         displayMessage();
      },
      complete: function () {
         emptyCart();
      },
   });
}

function onRegisterToWaitlist() {
   updateDynmicContactDetailsForm();
   const contactData = reformAndParseValueContact();
   console.log('enrollmentData', contactData);

   $.ajax({
      ...requestOptions(Join_to_waitlist_Create_Contact, contactData),
      success: function (data) {
         setItemStore('dynamicsAPIResultWaitlist', data);
         createEnrollmentWaitList();
      },
      error: function () {},
   });
}

function additionalMaskInputs() {
   if ($('.dd-birthdate').length) {
      new Cleave('.dd-birthdate', {
         date: true,
         delimiter: '/',
         datePattern: ['m', 'd', 'Y'],
      });

      $('#bs-datepicker-basic').datepicker();
      new Cleave('.phone-number-mask', {
         phone: true,
         phoneRegionCode: 'US',
      });
   }
}

function redirectoHomeIfEmpty() {
   const listToGuard = ['waiting-list-cart'];
   const isGuarded = AuthGuard(listToGuard);
   if (isGuarded) {
      const myCart = getMyCartDetails();
      const isEmpty = myCart.items.filter(
         (_id) => _id.hso_enrollmentlimit === 0
      ).length;
      console.log('isEmpty', isEmpty);
      !isEmpty && redirectTo('/');
   }
}

$(document).ready(function () {
   let hasSessionValue = checkHasSession();
   let personalInfoForm = null;
   redirectoHomeIfEmpty();
   if (hasSessionValue) {
      $('#for-guest-only').css('display', 'none');
   } else {
      const isWaitingList = $('.waiting-list-container');
      if(isWaitingList.length){
         additionalMaskInputs();
         const waitListform = document.querySelector('#personalInfoValidation');
         personalInfoForm = FormPersonalDetailsValidation(waitListform);
      }
   }
   $('.on-continue-waitlist-program').click(function () {
      if (checkHasSession()) {
         loadingBlockUIWaitList();
         createEnrollmentWaitList();
         return;
      }

      personalInfoForm.validate().then((_res) => {
         console.log('_res', _res);
         if (_res === 'Valid') {
            // loadingBlockUIWaitList();
            // onRegisterToWaitlist();
         }
      });
   });
});
