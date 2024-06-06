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
         var mStepValidation = document.querySelector('#multiStepsValidation');
         if (null !== mStepValidation) {
            var multiStepsForm = mStepValidation.querySelector('#multiStepsFormReturningStudent');
            var s = multiStepsForm.querySelector('#housing-info'),
               termsInfo = multiStepsForm.querySelector('#terms-info'),
               btnNext = [].slice.call(multiStepsForm.querySelectorAll('.btn-next')),
               multiStepsForm = [].slice.call(multiStepsForm.querySelectorAll('.btn-prev'));

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
                  //  updateFormSteps(tForm._currentIndex + 1);
               });
            }),
               multiStepsForm.forEach((e) => {
                  e.addEventListener('click', (e) => {
                     tForm.previous();
                     updateFormSteps(tForm._currentIndex + 1);
                  });
               });
               console.log('getCurrenIndex', getCurrenIndex());
            // tForm.to(6);
            tForm.to(getCurrenIndex()+1);
         }
      }
   });
