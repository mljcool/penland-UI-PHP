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
      var n = document.querySelector('#multiStepsValidation');
      if (null !== n) {
         var a = n.querySelector('#multiStepsForm');
         const c = a.querySelector('#accountDetailsValidation');
         var i = a.querySelector('#personalInfoValidation'),
            s = a.querySelector('#housing-info'),
            termsInfo = a.querySelector('#terms-info'),
            btnNext = [].slice.call(a.querySelectorAll('.btn-next')),
            a = [].slice.call(a.querySelectorAll('.btn-prev')),
            o = document.querySelector('.multi-steps-exp-date'),
            l = document.querySelector('.multi-steps-cvv'),
            m = document.querySelector('.multi-steps-mobile'),
            u = document.querySelector('.multi-steps-pincode'),
            d = document.querySelector('.multi-steps-card');
         o &&
            new Cleave(o, {
               date: !0,
               delimiter: '/',
               datePattern: ['m', 'y'],
            }),
            l && new Cleave(l, { numeral: !0, numeralPositiveOnly: !0 }),
            m && new Cleave(m, { phone: !0, phoneRegionCode: 'US' }),
            u && new Cleave(u, { delimiter: '', numeral: !0 }),
            d &&
               new Cleave(d, {
                  creditCard: !0,
                  onCreditCardTypeChanged: function (e) {
                     document.querySelector('.card-type').innerHTML =
                        '' != e && 'unknown' != e
                           ? '<img src="' +
                             assetsPath +
                             'img/icons/payments/' +
                             e +
                             '-cc.png" height="28"/>'
                           : '';
                  },
               });

         let t = new Stepper(n, { linear: !0 });
         const accountDetailsForm = FormAccounDetailsValidation(c);
         const personalInfoForm = FormPersonalDetailsValidation(i);
         const housingForm = FormHousingDetailsValidation(s);
         const termsInfoForm = FormTermsAndConditionValidation(termsInfo);

         btnNext.forEach((e) => {
            e.addEventListener('click', (e) => {
               switch (t._currentIndex) {
                  case FORM_INDEX.ACCOUNT:
                     accountDetailsForm.validate().then((_res) => {
                        if (_res === 'Valid') {
                           checkUserExist(t);
                        }
                     });
                     break;
                  case FORM_INDEX.PERSONAL:
                     personalInfoForm.validate().then((_res) => {
                        if (_res === 'Valid') {
                           loadingBlockUINewStudentForm();

                           setTimeout(() => {
                              updateDynmicContactDetailsForm();
                              updateFormSteps(FORM_STEPS.HOUSING);
                              $('.new-student-form').unblock();
                              t.next();
                              PopulateForm();
                           }, 2000);
                        }
                     });
                     break;

                  case FORM_INDEX.HOUSING:
                     housingForm.validate().then((_res) => {
                        if (_res === 'Valid') {
                           // saveHousingInformation(t);
                           const isPref = $('#cr711_preference').val();
                           const meals = $('#cr711_offcampusmealplans').val();
                           if (isPref === '2' && meals === '') {
                              ifOffCampusSelectedMessageAler();
                              return;
                           }
                           loadingBlockUINewStudentForm();
                           saveHousingDetailsLocal();
                           updateFormSteps(FORM_STEPS.CONFIRMATION);
                           setTimeout(() => {
                              initializeHousingData();
                              PopulateForm();
                              $('.new-student-form').unblock();
                              t.next();
                           }, 1000);
                           return;
                        }
                     });
                     break;
                  case FORM_INDEX.PAYMENT:
                     loadingBlockUINewStudentForm();
                     updateFormSteps(FORM_STEPS.CONFIRMATION);
                     setTimeout(() => {
                        $('.new-student-form').unblock();
                        t.next();
                     }, 1000);
                     break;
                  case FORM_INDEX.TERMS:
                     termsInfoForm.validate().then((_res) => {
                        if (_res === 'Valid') {
                           loadingBlockUINewStudentForm();
                           updateTermsAgreement();
                           updateFormSteps(FORM_STEPS.PAYMENT);
                           setTimeout(() => {
                              summaryReviewSections();
                              $('.new-student-form').unblock();
                              t.next();
                           }, 1000);
                        }
                     });
                     break;

                  default:
                     t.next();
               }
               //  updateFormSteps(t._currentIndex + 1);
            });
         }),
            a.forEach((e) => {
               e.addEventListener('click', (e) => {
                  t.previous();
                  updateFormSteps(t._currentIndex + 1);
               });
            });

         t.to(6);
         // t.to(getCurrenIndex());
      }
   });
