document.addEventListener('DOMContentLoaded', function (e) {
    {
        const a = document.querySelector('#formAccountSettings'),
            i = a.querySelector('.deactivate-account'),
            s =
                (a && FormPersonalDetailsValidation(a),
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
        const l = document.querySelector('.account-file-input');
        // c = document.querySelector('.account-image-reset');
        if (e) {
            const r = e.src;
            l.onchange = () => {
                l.files[0] && (e.src = window.URL.createObjectURL(l.files[0]));
            };
            // (c.onclick = () => {
            //     (l.value = ''), (e.src = r);
            // });
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
        const t = document.querySelector('#formPasswordSettings');
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
            });
    }
});


function alertifPasswordWrong() {
    Swal.fire({
        text: 'Oops! We could not find macthing credentials.',
        icon: 'error',
        showCancelButton: false,
        confirmButtonText: 'close',
        customClass: {
            confirmButton: 'btn btn-primary me-2',
            cancelButton: 'btn btn-label-secondary',
        },
        buttonsStyling: !1,
    })
}

function alertifPasswordSuccess() {
    Swal.fire({
        title: "Password Changed!",
        text: "Your password has been changed successfully.",
        icon: 'success',
        showCancelButton: false,
        confirmButtonText: 'close',
        customClass: {
            confirmButton: 'btn btn-primary me-2',
            cancelButton: 'btn btn-label-secondary',
        },
        buttonsStyling: !1,
    })
}

function loadingBlockUI(className = 'user-profile-settings') {
    $('.' + className).block({
        message: HTMLelementProp.blockUISummaryElement,
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

function dateOFBirthInput() {
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

$(document).ready(function () {

    getItemStoreAvatar();
    dateOFBirthInput();
    $('#submitProfileDetails').click(function () {
        loadingBlockUI();
        updateDynmicContactDetailsForm();

        Promise.all([uploadImageToDataverse(), getUserDatails()]).then(
            (response) => {
                console.log('response', response);
                if (response.length) {
                    $('.user-profile-settings').unblock();
                }
            }
        );
    });

    $('.changePassword').click(function () {

        const currentPassword = $('#currentPassword').val();
        const newPassword = $('#newPassword').val();
        const userDetails = getLoginDetails();
        const contactid = userDetails[1].contactid;
        const payload = {
            currentPassword,
            newPassword,
            contactID: contactid
        }
        loadingBlockUI('change-password');
        $.ajax({
            ...requestOptions(Update_User_Password, payload),
            success: function (data) {
                if (!data) {
                    alertifPasswordWrong();
                } else{
                    alertifPasswordSuccess();
                    // frm.reset();
                }
                console.log('Update_User_Password:', data);
            },
            complete: function () {
                $('.change-password').unblock();
            },
            error: function (xhr, status, error) { 
                genericError();
             },
        });

    })
});



function validatePassword(password) {

    const errorMessage = document.getElementById('errorMessage');

    // Check each condition and update the corresponding label
    const pLength = password.length >= 8;
    const puppercase = /[A-Z]/.test(password);
    const plowercase = /[a-z]/.test(password);
    const psymbol = /[@$!%*?&]/.test(password);
    document.getElementById('minLength').innerHTML =
        password.length >= 8 ?
            '<i class="fas fa-check text-success"></i> Minimum 8 characters' :
            '<i class="fas fa-times text-danger"></i> Minimum 8 characters';
    document.getElementById('uppercase').innerHTML =
        /[A-Z]/.test(password) ?
            '<i class="fas fa-check text-success"></i> At least one uppercase letter' :
            '<i class="fas fa-times text-danger"></i> At least one uppercase letter';
    document.getElementById('lowercase').innerHTML =
        /[a-z]/.test(password) ?
            '<i class="fas fa-check text-success"></i> At least one lowercase letter' :
            '<i class="fas fa-times text-danger"></i> At least one lowercase letter';
    document.getElementById('symbol').innerHTML =
        /[@$!%*?&]/.test(password) ?
            '<i class="fas fa-check text-success"></i> At least one symbol (@$!%*?&)' :
            '<i class="fas fa-times text-danger"></i> At least one symbol (@$!%*?&)';

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

function getUserDatails() {
    return new Promise((resolve, reject) => {
        const dataToDynamics = getMyDynamicDetails();
        const userDetails = getLoginDetails();
        const contactid = userDetails[1].contactid;


        const contactData = dataToDynamics.personalInfo.contact;
        contactData.gendercode = parseInt(contactData.gendercode);
        contactData.mshied_race_ = parseInt(contactData.mshied_race_);
        contactData.hso_blackindigenousorpersonofcolor = parseInt(
            contactData.hso_blackindigenousorpersonofcolor
        );
        contactData.mshied_preferredlanguage = parseInt(
            contactData.mshied_preferredlanguage
        );
        contactData.hso_lgbtqiaidentification = parseInt(
            contactData.hso_lgbtqiaidentification
        );
        contactData.mshied_limitedlanguageproficiency = parseInt(
            contactData.mshied_limitedlanguageproficiency
        );
        contactData.mshied_homelanguage = parseInt(
            contactData.mshied_homelanguage
        );
        contactData.mshied_disability = parseInt(contactData.mshied_disability);

        const preservData = Object.assign({}, contactData);
        preservData.contactID = contactid;

        $.ajax({
            ...requestOptions(Update_User_Profile, preservData),
            success: function (data) {
                resolve(true);
            },
            error: reject,
        });
    });
}

function uploadImageToDataverse() {
    return new Promise((resolve, reject) => {
        const savePhoto = (base64Image, fileName) => {
            const userDetails = getLoginDetails();
            const contactid = userDetails[1].contactid;
            const contactLink = userDetails[1]['@odata.editLink'];
            const avatarData = {
                file: base64Image,
                filename: fileName,
                contactID: contactid,
                contactLink,
            };

            $.ajax({
                ...requestOptions(Upload_User_Photo, avatarData),
                success: function (data) {
                    console.log('Update_User_Profile:', data);
                    setItemStore('MyAvatar', data.hso_photo);
                    resolve(true);
                },
                error: reject,
            });
        };

        var imageInput = document.getElementById('upload');
        var file = imageInput.files[0];

        if (file) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var base64Image = e.target.result.split(',')[1]; // Extract base64 part
                savePhoto(base64Image, file.name);
            };
            reader.readAsDataURL(file);
        } else {
            resolve(true);
        }
    });
}
