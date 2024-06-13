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
            <div style="display:none;" id="id_message-warning" class="alert alert-danger  alert-dismissible" role="alert">
              <p class="mb-0">Invalid Username or Password</p>
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
              </button>
            </div>
              
              <p class="mb-4 mt-2">
                Please sign-in to your account
              </p>

              <div
                id="formAuthentication"
                class="mb-3 fv-plugins-bootstrap5 fv-plugins-framework"
                novalidate="novalidate"
              >
                <div class="mb-3 fv-plugins-icon-container">
                  <label for="email" class="form-label">Email</label>
                  <input
                    type="text"
                    class="form-control"
                    id="email"
                    name="email-username"
                    placeholder="Enter your email or username"
                    autofocus=""
                  />
                  <div
                    class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"
                  ></div>
                </div>
                <div
                  class="mb-3 form-password-toggle fv-plugins-icon-container"
                >
                  <div class="d-flex justify-content-between">
                    <label class="form-label" for="password">Password</label>
                    <a href="/forgot-password">
                      <small>Forgot Password?</small>
                    </a>
                  </div>
                  <div class="input-group input-group-merge has-validation">
                    <input
                      type="password"
                      id="password"
                      class="form-control"
                      name="password"
                      placeholder="············"
                      aria-describedby="password"
                    />
                    <span class="input-group-text cursor-pointer"
                      ><i class="bx bx-hide"></i
                    ></span>
                  </div>
                  <div
                    class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"
                  ></div>
                </div>

                <div class="mb-3">
                  <button class="btn btn-primary d-grid w-100 login-user" type="button">
                    Sign in
                  </button>
                  
                </div>
                <input type="hidden" />
              </form>
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
