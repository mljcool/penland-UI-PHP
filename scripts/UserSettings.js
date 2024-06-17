document.addEventListener('DOMContentLoaded', function (e) {
    {
        const a = document.querySelector('#formAccountDeactivation'),
            i = a.querySelector('.deactivate-account'),
            s =
                (
                    a &&
                    FormValidation.formValidation(a, {
                        fields: {
                            accountActivation: {
                                validators: {
                                    notEmpty: {
                                        message:
                                            'Please confirm you want to delete account',
                                    },
                                },
                            },
                        },
                        plugins: {
                            trigger: new FormValidation.plugins.Trigger(),
                            bootstrap5: new FormValidation.plugins.Bootstrap5({
                                eleValidClass: '',
                            }),
                            submitButton: new FormValidation.plugins.SubmitButton(),
                            fieldStatus: new FormValidation.plugins.FieldStatus({
                                onStatusChanged: function (e) {
                                    e
                                        ? i.removeAttribute('disabled')
                                        : i.setAttribute('disabled', 'disabled');
                                },
                            }),
                            autoFocus: new FormValidation.plugins.AutoFocus(),
                        },
                        init: (e) => {
                            e.on('plugins.message.placed', function (e) {
                                e.element.parentElement.classList.contains(
                                    'input-group'
                                ) &&
                                    e.element.parentElement.insertAdjacentElement(
                                        'afterend',
                                        e.messageElement
                                    );
                            });
                        },
                    }),
                    document.querySelector('#accountActivation'));
        i &&
            (i.onclick = function () {
                1 == s.checked &&
                    Swal.fire({
                        text: 'Are you sure you would like to deactivate your account?',
                        icon: 'warning',
                        showCancelButton: !0,
                        confirmButtonText: 'Yes',
                        customClass: {
                            confirmButton: 'btn btn-primary me-2',
                            cancelButton: 'btn btn-label-secondary',
                        },
                        buttonsStyling: !1,
                    }).then(function (e) {
                        e.value
                            ? Swal.fire({
                                icon: 'success',
                                title: 'Deleted!',
                                text: 'Your file has been deleted.',
                                customClass: { confirmButton: 'btn btn-success' },
                            })
                            : e.dismiss === Swal.DismissReason.cancel &&
                            Swal.fire({
                                title: 'Cancelled',
                                text: 'Deactivation Cancelled!!',
                                icon: 'error',
                                customClass: { confirmButton: 'btn btn-success' },
                            });
                    });
            });
        var t = document.querySelector('#phoneNumber'),
            n = document.querySelector('#zipCode');
        t && new Cleave(t, { phone: !0, phoneRegionCode: 'US' }),
            n && new Cleave(n, { delimiter: '', numeral: !0 });
        let e = document.getElementById('uploadedAvatar');
        const l = document.querySelector('.account-file-input'),
            c = document.querySelector('.account-image-reset');
        if (e) {
            const r = e.src;
            (l.onchange = () => {
                l.files[0] && (e.src = window.URL.createObjectURL(l.files[0]));
            }),
                (c.onclick = () => {
                    (l.value = ''), (e.src = r);
                });
        }
    }
}),
    $(function () {
        var e = $('.select2');
        e.length &&
            e.each(function () {
                var e = $(this);
                e.wrap('<div class="position-relative"></div>'),
                    e.select2({ dropdownParent: e.parent() });
            });
    });

document.addEventListener('DOMContentLoaded', function (e) {
    {
        const t = document.querySelector('#formPasswordSettings')
        t &&
            FormValidation.formValidation(t, {
                fields: {
                    currentPassword: {
                        validators: {
                            notEmpty: { message: 'Please current password' },
                            stringLength: {
                                min: 8,
                                message: 'Password must be more than 8 characters',
                            },
                        },
                    },
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
                                message:
                                    'The password and its confirm are not the same',
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
                        rowSelector: '.col-md-6',
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
            })
    }
});


$(document).ready(function(){
    getItemStoreAvatar();
    $('#submitProfileDetails').click(function(event) {

        var imageInput = document.getElementById('upload');
        var file = imageInput.files[0];
        
        if (file) {
          var reader = new FileReader();
          reader.onload = function(e) {
            var base64Image = e.target.result.split(',')[1]; // Extract base64 part
            uploadImageToDataverse(base64Image, file.name);
          };
          reader.readAsDataURL(file);
        }
      });
})
  
  function uploadImageToDataverse(base64Image, fileName) {

    const userDetails = getLoginDetails();
    const contactid = userDetails[1].contactid;
    const contactLink = userDetails[1]['@odata.editLink'];
    const avatarData = {
      'file': base64Image,
      'filename': fileName,
      'contactID': contactid,
      contactLink,
    };

    $.ajax({
        ...requestOptions(Upload_User_Photo, avatarData),
        success: function (data) {
           console.log('Upload_User_Photo:', data);
           setItemStore('MyAvatar', data.hso_photo)
           getItemStoreAvatar();
        },
        complete: function () {
        },
     });
  }