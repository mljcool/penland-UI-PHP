function isSuccesLinkNewPassword() {
   Swal.fire({
      text: 'Your password changed successfully.',
      icon: 'success',
      showCancelButton: false,
      confirmButtonText: 'close',
      customClass: {
         confirmButton: 'btn btn-primary me-2',
         cancelButton: 'btn btn-label-secondary',
      },
      buttonsStyling: !1,
   }).then(function (e) {
      window.location.href = '/login';
   });
}

function deleteLink() {
   const tokenIDs = getURLParameters('tokenID');
   const payload = {
      tokenID: tokenIDs,
   };
   $.ajax({
      ...requestOptions(Delete_Expired_Password_Link, payload),
      success: function (data) {
         if (data) {
            setTimeout(() => {
                window.location.href = '/login';
            }, 600);
         }
      },
      error: function () {
         genericError();
      },
   });
}

function linkIsExpired() {
   Swal.fire({
      text: 'The secure link is expired or invalid.',
      icon: 'warning',
      showCancelButton: false,
      confirmButtonText: 'close',
      customClass: {
         confirmButton: 'btn btn-primary me-2',
         cancelButton: 'btn btn-label-secondary',
      },
      buttonsStyling: !1,
   }).then(function (e) {
      deleteLink();
   });
}

function mismatchPassword() {
   Swal.fire({
      text: 'password does not match.',
      icon: 'error',
      showCancelButton: false,
      confirmButtonText: 'close',
      customClass: {
         confirmButton: 'btn btn-primary me-2',
         cancelButton: 'btn btn-label-secondary',
      },
      buttonsStyling: !1,
   });
}

function loadingBlockUISetPassword() {
   const messageStr = `Please wait validating credentials...`;
   $('.set-forgot-password-conainter').block({
      message: HTMLelementProp.blockUIElementExtended(messageStr),
      css: {
         backgroundColor: 'transparent',
         border: '0',
      },
      overlayCSS: {
         backgroundColor: '#fff',
         opacity: 0.8,
      },
   });
}

function validatingLinkExpiration() {
   const messageStr = `Please wait validating Link...`;
   $('.set-forgot-password-conainter').block({
      message: HTMLelementProp.blockUIElementExtended(messageStr),
      css: {
         backgroundColor: 'transparent',
         border: '0',
      },
      overlayCSS: {
         backgroundColor: '#fff',
         opacity: 0.8,
      },
   });
}

function hasOneHourPassed(targetDate) {
   const currentTime = new Date();
   const targetTime = new Date(targetDate);

   targetTime.setTime(targetTime.getTime() + 3600000);

   return currentTime > targetTime;
}

function validateTokenByExpiration() {
   validatingLinkExpiration();
   const tokenIDs = getURLParameters('tokenID');
   const payload = {
      tokenID: tokenIDs,
      newPassword: '',
   };
   $.ajax({
      ...requestOptions(User_Set_New_Password, payload),
      success: function (data) {
         const targetDate = (data || {}).createdon;
         $('.hso_email').html((data || {}).hso_email);
         if (hasOneHourPassed(targetDate)) {
            console.log('More than one hour has passed since the target date.');
            linkIsExpired();
         }
      },
      complete: function () {
         $('.set-forgot-password-conainter').unblock();
      },
      error: function () {
         genericError();
      },
   });
}
var formData;

function formValidationExtra(theForm) {
   return FormValidation.formValidation(theForm, {
      fields: {
         newPassword: {
            validators: {
               notEmpty: { message: 'Please enter new password' },
               stringLength: {
                  min: 8,
                  message: 'Password must be more than 8 characters',
               },
            },
         },
         confirmPassword: {
            validators: {
               notEmpty: { message: 'Please confirm new password' },
               identical: {
                  compare: function () {
                     return t.querySelector('[name="newPassword"]').value;
                  },
                  message: 'The password and its confirm are not the same',
               },
               stringLength: {
                  min: 8,
                  message: 'Password must be more than 8 characters',
               },
            },
         },
      },
      plugins: {
         trigger: new FormValidation.plugins.Trigger(),
         bootstrap5: new FormValidation.plugins.Bootstrap5({
            eleValidClass: '',
            rowSelector: '.form-password-toggle',
         }),
         submitButton: new FormValidation.plugins.SubmitButton(),
         autoFocus: new FormValidation.plugins.AutoFocus(),
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
   });
}
var isPassValid = false;

function validatePasswordReset(password) {
   const errorMessage = document.getElementById('errorMessage');

   const pLength = password.length >= 8;
   const puppercase = /[A-Z]/.test(password);
   const plowercase = /[a-z]/.test(password);
   const psymbol = /[@$!%*?&]/.test(password);
   document.getElementById('minLength').innerHTML =
      password.length >= 8
         ? '<i class="fas fa-check text-success"></i> Minimum 8 characters'
         : '<i class="fas fa-times text-danger"></i> Minimum 8 characters';
   document.getElementById('uppercase').innerHTML = /[A-Z]/.test(password)
      ? '<i class="fas fa-check text-success"></i> At least one uppercase letter'
      : '<i class="fas fa-times text-danger"></i> At least one uppercase letter';
   document.getElementById('lowercase').innerHTML = /[a-z]/.test(password)
      ? '<i class="fas fa-check text-success"></i> At least one lowercase letter'
      : '<i class="fas fa-times text-danger"></i> At least one lowercase letter';
   document.getElementById('symbol').innerHTML = /[@$!%*?&]/.test(password)
      ? '<i class="fas fa-check text-success"></i> At least one symbol (@$!%*?&)'
      : '<i class="fas fa-times text-danger"></i> At least one symbol (@$!%*?&)';

   isPassValid = pLength && puppercase && plowercase && psymbol;
   if (pLength && puppercase && plowercase && psymbol) {
      errorMessage.textContent = 'Strong Password';
      errorMessage.classList.remove('text-danger');
      errorMessage.classList.add('text-success');
   } else {
      errorMessage.textContent = 'Weak Password';
      errorMessage.classList.remove('text-success');
      errorMessage.classList.add('text-danger');
   }
}

function proceedToChangePassword() {
   const p1 = $('#newPassword').val();
   const p2 = $('#confirmPassword').val();
   if (p1 !== p2) {
      mismatchPassword();
      return;
   }

   const tokenIDs = getURLParameters('tokenID');
   console.log('tokenIDs', tokenIDs);
   const payload = {
      tokenID: tokenIDs,
      newPassword: p1,
   };
   loadingBlockUISetPassword();
   $.ajax({
      ...requestOptions(User_Set_New_Password, payload),
      success: function (data) {
         if (data) {
            isSuccesLinkNewPassword();
            deleteLink();
         }
      },
      complete: function () {
         $('.set-forgot-password-conainter').unblock();
      },
      error: function () {
         genericError();
      },
   });
}

$(document).ready(function () {
   const t = document.querySelector('#resetPasswordForm');
   let formPassword;
   if (t) {
      validateTokenByExpiration();
      formPassword = formValidationExtra(t);
   }

   $('.setNewPassword').click(function () {
      formPassword.validate().then((_res) => {
         if (_res === 'Valid' && isPassValid) {
            console.log('_res', _res);
            console.log('isPassValid', isPassValid);
            proceedToChangePassword();
         }
      });
   });
});
