function isSuccesLink() {
    Swal.fire({
        text: 'Link was sent successfully. Please check your email.',
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



function loadingBlockUI() {
    $('.forgot-password-conainter').block({
        message: HTMLelementProp.blockUIElementExtended(),
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

$(document).ready(function () {
    $('.on-send-link').click(function () {
        const userEmail = $('#email-reset').val();

        const payload = {
            email: userEmail,
        }
        loadingBlockUI();
        $.ajax({
            ...requestOptions(User_Send_Password_Reset_Link, payload),
            success: function (data) {
                if (data) {
                    isSuccesLink();
                }
            },
            complete:function(){
                $('.forgot-password-conainter').unblock();
            },
            error: function () {
                genericError();
            },
        });

    })
})