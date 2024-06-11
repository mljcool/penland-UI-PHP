$(document).ready(function () {
   const isNewStudentform = $('.cast-new-student-form');
   if (isNewStudentform.length) {
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

         const tagifyBasicEl = document.querySelector('#TagifyBasic');
         new Tagify(tagifyBasicEl);
      }
   }
});

const strongPassword = function () {
   return {
      validate: function (input) {
         const value = input.value;
         if (value === '') {
            return {
               valid: true,
            };
         }

         // Check the password strength
         if (value.length < 8) {
            return {
               valid: false,
               message: 'The password must be more than 8 characters long',
            };
         }

         // The password does not contain any uppercase character
         if (value === value.toLowerCase()) {
            return {
               valid: false,
               message:
                  'The password must contain at least one upper case character',
            };
         }

         // The password does not contain any uppercase character
         if (value === value.toUpperCase()) {
            return {
               valid: false,
               message:
                  'The password must contain at least one lower case character',
            };
         }

         // The password does not contain any digit
         if (value.search(/[0-9]/) < 0) {
            return {
               valid: false,
               message: 'The password must contain at least one digit',
            };
         }

         return {
            valid: true,
         };
      },
   };
};

function FormAccounDetailsValidation(c) {
   return FormValidation.formValidation(c, {
      icon: {
         valid: 'glyphicon glyphicon-ok',
         invalid: 'glyphicon glyphicon-remove',
         validating: 'glyphicon glyphicon-refresh',
      },
      fields: {
         multiStepsUsername: {
            validators: {
               notEmpty: { message: 'Please enter username' },
               stringLength: {
                  min: 6,
                  max: 30,
                  message:
                     'The name must be more than 6 and less than 30 characters long',
               },
               // regexp: {
               //   regexp: /^[a-zA-Z0-9 ]+$/,
               //   message:
               //     "The name can only consist of alphabetical, number and space",
               // },
            },
         },
         multiStepsEmail: {
            validators: {
               notEmpty: { message: 'Please enter email address' },
               emailAddress: {
                  message: 'The value is not a valid email address',
               },
            },
         },
         multiStepsPass: {
            validators: {
               notEmpty: { message: 'Please enter password' },
               checkPassword: {
                  message: 'The password is too weak',
               },
            },
         },
         multiStepsConfirmPass: {
            validators: {
               notEmpty: { message: 'Confirm Password is required' },
               identical: {
                  compare: function () {
                     return c.querySelector('[name="multiStepsPass"]').value;
                  },
                  message: 'The password and its confirm are not the same',
               },
            },
         },
      },
      plugins: {
         trigger: new FormValidation.plugins.Trigger(),
         bootstrap5: new FormValidation.plugins.Bootstrap5({
            eleValidClass: '',
            rowSelector: '.col-md-6',
         }),
         autoFocus: new FormValidation.plugins.AutoFocus(),
         submitButton: new FormValidation.plugins.SubmitButton(),
      },
      init: (e) => {
         e.on('plugins.message.placed', function (e) {
            e.element.parentElement.classList.contains('input-group') &&
               e.element.parentElement.insertAdjacentElement(
                  'afterend',
                  e.messageElement
               );
         });
      },
   })
      .on('core.form.valid', function (e) {
         console.log('core.form.valid', e);
      })
      .registerValidator('checkPassword', strongPassword);
}

const validRegx = () => {
   return {
      regexp: /^[a-zA-Z ]+$/,
      message: `This field can only consist of alphabetical`,
   };
};

const notEmptyMessage = (name = '') => {
   return {
      message: `Please enter ${name}`,
   };
};

const notEmptyMessageRadios = (name = '') => {
   return {
      message: `${name}`,
   };
};
function FormPersonalDetailsValidation(c) {
   return FormValidation.formValidation(c, {
      icon: {
         valid: 'glyphicon glyphicon-ok',
         invalid: 'glyphicon glyphicon-remove',
         validating: 'glyphicon glyphicon-refresh',
      },
      fields: {
         firstName: {
            validators: {
               notEmpty: notEmptyMessage('First name'),
               regexp: validRegx(),
            },
         },
         middleName: {
            validators: {
               notEmpty: notEmptyMessage('Middle name'),
               regexp: validRegx(),
            },
         },
         lastName: {
            validators: {
               notEmpty: notEmptyMessage('Last name'),
               regexp: validRegx(),
            },
         },
         userDob: {
            validators: {
               notEmpty: notEmptyMessage('Date of Birth'),
            },
         },
         gender: {
            validators: {
               notEmpty: notEmptyMessage('Your Gender'),
            },
         },
         phoneNumber: {
            validators: {
               notEmpty: notEmptyMessage('Your Phone  number'),
            },
         },
         emailTwo: {
            validators: {
               notEmpty: notEmptyMessage('Your secondary  email'),
               emailAddress: {
                  message: 'The value is not a valid email address'
              }
            },
         },
         mailingAddress: {
            validators: {
               notEmpty: notEmptyMessage('Your Mailing  address'),
               emailAddress: {
                  message: 'The value is not a valid email address'
              }
            },
         },
         cityAddress: {
            validators: {
               notEmpty: notEmptyMessage('Your City'),
            },
         },
         stateProvince: {
            validators: {
               notEmpty: notEmptyMessage('State'),
            },
         },
         zipcode: {
            validators: {
               notEmpty: notEmptyMessage('your zip/postcode'),
            },
         },
         country: {
            validators: {
               notEmpty: notEmptyMessage('your zip/postcode'),
            },
         },
         mshied_homelanguage: {
            validators: {
               notEmpty: notEmptyMessage('Home Language'),
            },
         },
         mshied_preferredlanguage: {
            validators: {
               notEmpty: notEmptyMessage('Peferred Language'),
            },
         },
         hso_blackindigenousorpersonofcolor: {
            validators: {
               notEmpty: notEmptyMessage('LGBTQIA+ Identification'),
            },
         },
         hso_lgbtqiaidentification: {
            validators: {
               notEmpty: notEmptyMessage(
                  'Black, Indigenous, or Person of Color'
               ),
            },
         },
         mshied_accommodations: {
            validators: {
               notEmpty: notEmptyMessage('Accommodations'),
            },
         },
         mshied_limitedlanguageproficiency: {
            validators: {
               notEmpty: notEmptyMessage('Limited Language Proficiency'),
            },
         },
         mshied_disability: {
            validators: {
               notEmpty: notEmptyMessage('Disability'),
            },
         },
      },
      plugins: {
         trigger: new FormValidation.plugins.Trigger(),
         bootstrap5: new FormValidation.plugins.Bootstrap5({
            eleValidClass: '',
            rowSelector: '.col-md-9',
         }),
         autoFocus: new FormValidation.plugins.AutoFocus(),
         submitButton: new FormValidation.plugins.SubmitButton(),
      },
      init: (e) => {
         e.on('plugins.message.placed', function (e) {
            e.element.parentElement.classList.contains('input-group') &&
               e.element.parentElement.insertAdjacentElement(
                  'afterend',
                  e.messageElement
               );
         });
      },
   }).on('core.form.valid', function (e) {
      console.log('core.form.valid', e);
   });
}

function FormHousingDetailsValidation(c) {
   return FormValidation.formValidation(c, {
      icon: {
         valid: 'glyphicon glyphicon-ok',
         invalid: 'glyphicon glyphicon-remove',
         validating: 'glyphicon glyphicon-refresh',
      },
      fields: {
         cr711_preference: {
            validators: {
               notEmpty: notEmptyMessage('Your Housing Preference'),
            },
         },
         cr711_housingoption: {
            validators: {
               notEmpty: notEmptyMessage('Your Housing Option'),
            },
         },
         cr711_offcampusmealplans: {
            validators: {
               enabled: false,
               notEmpty: notEmptyMessage('Your Housing Option'),
            },
         },
         cr711_adahousingneeded: {
            validators: {
               notEmpty: notEmptyMessageRadios('Choose ADA Housing needed'),
            },
         },
      },
      plugins: {
         trigger: new FormValidation.plugins.Trigger(),
         bootstrap5: new FormValidation.plugins.Bootstrap5({
            eleValidClass: '',
            rowSelector: '.col-md-6',
         }),
         autoFocus: new FormValidation.plugins.AutoFocus(),
         submitButton: new FormValidation.plugins.SubmitButton(),
      },
      init: (e) => {
         e.on('plugins.message.placed', function (e) {
            e.element.parentElement.classList.contains('input-group') &&
               e.element.parentElement.insertAdjacentElement(
                  'afterend',
                  e.messageElement
               );
         });
      },
   }).on('core.form.valid', function (e) {
      console.log('core.form.valid', e);
   });
}

function FormTermsAndConditionValidation(c) {
   return FormValidation.formValidation(c, {
      fields: {
         termsAndCondition: {
            validators: {
               notEmpty: notEmptyMessageRadios(
                  'Please check Terms and Agreement.'
               ),
            },
         },
      },
      plugins: {
         trigger: new FormValidation.plugins.Trigger(),
         bootstrap5: new FormValidation.plugins.Bootstrap5({
            eleValidClass: '',
            rowSelector: '.col-md-6',
         }),
         autoFocus: new FormValidation.plugins.AutoFocus(),
         submitButton: new FormValidation.plugins.SubmitButton(),
      },
      init: (e) => {
         e.on('plugins.message.placed', function (e) {
            e.element.parentElement.classList.contains('input-group') &&
               e.element.parentElement.insertAdjacentElement(
                  'afterend',
                  e.messageElement
               );
         });
      },
   }).on('core.form.valid', function (e) {
      console.log('core.form.valid', e);
   });
}
