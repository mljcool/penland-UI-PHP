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

    <footer class="footer-penland">
      <div class="footer-wrapper">
        <div class="footer-right-sections">
          <img class="footer-logo" src="./assets/footer-logo.png" />
          <div class="social-media">
            <a>
              <img
                title="Penalnd instagram"
                alt="Penalnd instagram"
                src="./assets/instagram.png"
            /></a>
            <a>
              <img
                title="Penalnd facebook"
                alt="Penalnd facebook"
                src="./assets/facebook.png"
            /></a>
            <a>
              <img
                title="Penalnd youtube"
                alt="Penalnd youtube"
                src="./assets/youtube.png"
            /></a>
            <a>
              <img
                title="Penalnd pinterest"
                alt="Penalnd pinterest"
                src="./assets/pinterest.png"
            /></a>
          </div>
          <div class="footer-contact-us-section-wrapper">
            <div class="footer-contact-us-section">
              <h3>Contact Us</h3>
              <a><span>(828) 765-2359</span></a>
              <a><span>info@penland.org</span></a>
              <a>
                <span>2687 Conley Ridge Road </span>
                <br />
                <span>
                  Bakersville, NC 28705
                </span>
              </a>
            </div>
            <div class="footer-gallery-visitor-schedule">
              <h3>Gallery + Visitor Center Hours</h3>
              <div class="schedule-table">
                <div class="gallery-date">
                  <span class="gallery-date-label">Wednesday - Saturday</span>
                  <span class="gallery-date-label">Sunday - Tuesday</span>
                </div>
                <div class="gallery-date">
                  <span class="gallery-date-label">11am-4pm EST</span>
                  <span class="gallery-date-label">Close</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-links">
          <div class="links-programs">
            <h3>Programs</h3>
            <ul>
              <li><a href="#">Workshops</a></li>
              <li><a href="#">Youth & Family</a></li>
              <li><a href="#">Teach at Penland</a></li>
              <li><a href="#">Scholarships</a></li>
              <li><a href="#">Cancellation & Refunds</a></li>
            </ul>
          </div>
          <div class="links-programs">
            <h3>Gallery</h3>
            <ul>
              <li><a href="#">Hours and Contact</a></li>
              <li><a href="#">Visit</a></li>
              <li><a href="#">Exhibitions</a></li>
              <li><a href="#">Shop Online</a></li>
            </ul>
          </div>
          <div class="links-programs">
            <h3>Support</h3>
            <ul>
              <li><a href="#">Ways to Give</a></li>
              <li><a href="#">Annual Benefit Auction</a></li>
              <li><a href="#">Donate Now</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </body>

  <?php include_once('./footer.php'); ?>

</html>
<?php include_once('./scriptJS.php'); ?>
