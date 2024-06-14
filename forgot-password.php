<!DOCTYPE html>
<html
  lang="en"
  class="light-style layout-navbar-fixed layout-menu-fixed "
  dir="ltr"
  data-theme="theme-default"
>
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
    <div class="card" id="authenticate-card">
      <div class="card-body">

        <p class="mb-4 mt-2">
          Please sign-in to your account
        </p>

        <h4 class="mb-2">Forgot Password? 🔒</h4>
        <p class="mb-4">Enter your email and we'll send you instructions to reset your password</p>
        <form id="formAuthentication" class="mb-3" action="auth-reset-password-basic.html" method="GET">
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="text" class="form-control" id="email" name="email" placeholder="Enter your email" autofocus>
          </div>
          <button class="btn btn-primary d-grid w-100">Send Reset Link</button>
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
