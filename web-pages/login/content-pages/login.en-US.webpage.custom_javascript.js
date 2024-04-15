

    $(document).ready(function(){
        shell.getTokenDeferred().done(function (token) {
            var _RequestVerificationToken = token
            $("#__RequestVerificationToken").val(_RequestVerificationToken)
        })
    })