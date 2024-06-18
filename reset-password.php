<!DOCTYPE html>
<html lang="en" class="light-style layout-navbar-fixed layout-menu-fixed " dir="ltr" data-theme="theme-default">

<head>
    <?php 
            include_once('./header.php');
        ?>
</head>

<body>
    <?php include_once('./home-navigition.php'); ?>

    <div class="container-fluid">
        <div class="row ">
            <?php include_once('./banner-test-env.php') ?>
        </div>
    </div>

    <!-- START BODY PAGE -->
    <div class="row penland-login-form">
        <div class="penland-authentication-form login-penland">
            <div class="card set-forgot-password-conainter" id="authenticate-card">
                <div class="card-body">

                    <h4 class="mb-2">Reset Password 🔒</h4>
                    <p class="mb-4">for <span class="fw-medium hso_email">john.doe@email.com</span></p>
                    <form id="resetPasswordForm" class="mb-3" onsubmit="return false">
                        <div class="mb-3 form-password-toggle">
                            <label class="form-label" for="newPassword">New Password</label>
                            <div class="input-group input-group-merge">
                                <input type="password" id="newPassword" class="form-control" name="newPassword"
                                    placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                                    aria-describedby="password"   onkeyup="validatePasswordReset(this.value)"/>
                                <span class="input-group-text cursor-pointer"><i class="bx bx-hide"></i></span>
                            </div>
                        </div>
                        <div class="mb-3 form-password-toggle">
                            <label class="form-label" for="confirmPassword">Confirm Password</label>
                            <div class="input-group input-group-merge">
                                <input type="password" id="confirmPassword" class="form-control"
                                    name="confirmPassword"
                                    placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                                    aria-describedby="password" />
                                <span class="input-group-text cursor-pointer"><i class="bx bx-hide"></i></span>
                            </div>
                        </div>
                        <button class="btn btn-primary d-grid w-100 mb-3 setNewPassword">
                            Set new password
                        </button>
                        <div class="col-12 mb-4">
                            <p class="fw-medium mt-2">Password Requirements:</p>
                            <ul class="ps-3 mb-0">
                                <li id="minLength"><i class="fas fa-times
             text-danger"></i> Minimum 8 characters</li>
                                <li id="uppercase"><i class="fas fa-times
             text-danger"></i> At least one uppercase
                                    letter</li>
                                <li id="lowercase"><i class="fas fa-times
             text-danger"></i> At least one lowercase
                                    letter</li>
                                <li id="symbol"><i class="fas fa-times
             text-danger"></i>
                                    At least one symbol (@$!%*?&)
                                </li>
                            </ul>
                            <span id="errorMessage" class="font-weight-bold
 text-danger"></span>
                        </div>
                    </form>
                    <div class="text-center">
                        <a href="/login" class="d-flex align-items-center justify-content-center">
                            <i class="bx bx-chevron-left scaleX-n1-rtl bx-sm"></i>
                            Back to login
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- END BODY PAGE -->
    </div>

</body>

<?php include_once('./footer.php'); ?>

</html>
<?php include_once('./scriptJS.php'); ?>