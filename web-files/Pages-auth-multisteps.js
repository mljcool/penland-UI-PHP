'use strict';

$(function () {
  var e = $('.select2');
  e.length &&
    e.each(function () {
      var e = $(this);
      e.wrap('<div class="position-relative"></div>'),
        e.select2({
          placeholder: 'Select an country',
          dropdownParent: e.parent(),
        });
    });
}),
  document.addEventListener('DOMContentLoaded', function (e) {
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

    var n = document.querySelector('#multiStepsValidation');
    if (null !== n) {
      var a = n.querySelector('#multiStepsForm');
      const c = a.querySelector('#accountDetailsValidation');
      var i = a.querySelector('#personalInfoValidation'),
        s = a.querySelector('#billingLinksValidation'),
        r = [].slice.call(a.querySelectorAll('.btn-next')),
        a = [].slice.call(a.querySelectorAll('.btn-prev')),
        o = document.querySelector('.multi-steps-exp-date'),
        l = document.querySelector('.multi-steps-cvv'),
        m = document.querySelector('.multi-steps-mobile'),
        u = document.querySelector('.multi-steps-pincode'),
        d = document.querySelector('.multi-steps-card');
      o && new Cleave(o, { date: !0, delimiter: '/', datePattern: ['m', 'y'] }),
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
      const p = FormValidation.formValidation(c, {
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
              regexp: {
                regexp: /^[a-zA-Z0-9 ]+$/,
                message:
                  'The name can only consist of alphabetical, number and space',
              },
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
      }).on('core.form.valid', function (e) {
        console.log('core.form.valid', e);
        const formProps = e.formValidation
        const  username =  formProps.elements.multiStepsUsername[0].value;
        const  email =  formProps.elements.multiStepsEmail[0].value;
        const  password =  formProps.elements.multiStepsConfirmPass[0].value;
        console.log('username', username);
        console.log('email', email);
        console.log('password', password);
        const payload = {
          emailaddress1: email,
          adx_identity_username: username,
          adx_identity_passwordhash: password,
        }
          webapi.safeAjax({
            type: 'POST',
            url: 'https://prod-44.westus.logic.azure.com:443/workflows/7a121b6f6eab490ab8a51584106bd7ad/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=NeZyr9S2SId0HbBDd6FNDtDoTzLpvr8K-29TT3Ex16E',
            contentType:  'application/json',
            data: JSON.stringify(payload),
            success: function(res, status, xhr){
                console.log({ res, status, xhr })
            },
            error: function(res, status, xhr){
              console.log({ res, status, xhr })
            }
          })
        t.next();
        
      }).registerValidator('checkPassword', strongPassword);
      r.forEach((e) => {
        e.addEventListener('click', (e) => {
          switch (t._currentIndex) {
            case 0:
              p.validate().then((res) => {
                console.log('_isValid', res);
         
              });
              break;
            case 1:
              g.validate();
              break;
            case 2:
              v.validate();
          }
        });
      }),
        a.forEach((e) => {
          e.addEventListener('click', (e) => {
            console.log('e>>> click 2', e)
            switch (t._currentIndex) {
              case 2:
              case 1:
                t.previous();
            }
          });
        });
    }
  });
