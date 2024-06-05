<!DOCTYPE html>
<html  lang="en"
  class="light-style "
  dir="ltr"
  data-theme="theme-default">
  <head>
  <?php 
    include_once('./header.php');
  ?>
  </head>
  <body>

  <?php include_once('./home-navigition.php'); ?>

    <div class="container-fluid workshop-detail-page">
      <!-- START BODY PAGE -->
      <div class="row workshop-header-details">
        <div class="top-header-page-section">
          <div class="nav-breadcrumbs">
            <a>Home</a> / <a>View All Workshops</a>
          </div>
          <div class="workshop-details">
            <div class="workshop-title" data-aos="fade-right">
              <h1 class="w-details-title">Getting Details...</h1>
            </div>
            <div class="with-workshop-title" data-aos="fade-up">
              with<span class="instructor w-details-instructor">Heather Peters</span>
            </div>
            <ul class="workshop-date-details">
              <li class="with-workshop-date">
                Summer Session : May 26-31, 2024
              </li>
              <li class="with-workshop-session">Studio : Book & Paper</li>
              <li class="with-workshop-level">Level : Beginner</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="row workshops-context-section">
        <div class="workshop-overview">
          <div class="over-view-context">
            <div class="par-context">
              <h3>Workshop Overview</h3>
              <p class="mshied_description">
                This workshop will begin by processing a variety of fibers to
                make Western-style paper. Using a Hollander beater to break down
                fibers, we will explore various ways to form sheets. This will
                be followed by an in-depth, practical analysis of drying
                techniques. Then we will dive into an exploration of pigments,
                natural dyes, and other color techniques both wet and dry paper.
                <br />
                <br />
                The outcome will be beautiful, individualized sheets and
                standalone paper art pieces with an ethereal, elemental
                presence. Looking at paper through a historical lens, we will
                talk about the importance of creating unique substrates and
                discuss ways of bringing papermaking into a variety of studio
                practices and set-ups. This workshop is perfect for new
                papermakers, and it will also be informative for those with
                <br />
                experience.
              </p>
              <br />
              <div class="action-section-overview">
                Join us for this engaging workshop and
                <a class="penland-link">enroll by February 20th</a>. <br />
                <a class="now-accepting"
                  >Now Accepting Scholarships <i>&#8594;</i></a
                >
              </div>
              <div class="registration-actions">
                <a style="display:none;" class="register-now" onclick="onProceedToReg()" href="javascript:void(0)">Register Now</a>
                <!-- <a class="register-now" onclick="onRegisterNow()" href="/penland-web/cart-items.php">Register Now</a> -->
              </div>
            </div>
          </div>
          <div class="slider-image-workshop" >
            <div
              id="owl-carousel"
              class="owl-carousel owl-carousel-overview owl-theme"
            >
              <div class="item"><img src="./assets/over-view-1.png" /></div>
              <div class="item"><img src="./assets/over-view-1.png" /></div>
              <div class="item"><img src="./assets/over-view-1.png" /></div>
              <div class="item"><img src="./assets/over-view-1.png" /></div>
              <div class="item"><img src="./assets/over-view-1.png" /></div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="inner-section-instructor">
          <div class="instructor-context">
            <div class="img-instructor">
              <img
                data-aos="flip-left"
                data-aos-offset="200"
                data-aos-delay="10"
                data-aos-duration="800"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
                src="./assets/heather.png"
              />
            </div>
            <div class="instructor-details-art">
              <h3
                data-aos="fade-left"
                data-aos-offset="200"
                data-aos-delay="10"
                data-aos-duration="800"
                class="details-instructor-title"
              >
                Teaching Artist
              </h3>
              <span
                class="instructor-name details-instructor-name"
                data-aos="fade-left"
                data-aos-offset="200"
                data-aos-delay="10"
                data-aos-duration="900"
                >Heather Peters</span
              >
              <p
                data-aos="fade-left"
                data-aos-offset="200"
                data-aos-delay="10"
                data-aos-duration="950"
                class="details-instructor-description"
              >
                Heather Peters is an artist and writer whose work explores the
                ideas of time and materiality through an investigation into the
                historical, physical and scientific nature of art materials,
                working with time-based materials such a hand-bound books,
                handmade paper, chromatography, video and cyanotype, she creates
                uniquely immersive pieces that bleed out from a center point and
                catch the viewer in a web of interactive understanding.
              </p>
              <a href="#" class="explore-artist-work"
                >Explore Artist Work <i>&#8594;</i></a
              >
            </div>
          </div>
        </div>
      </div>

      <div class="row workshop-studio-section">
        <div class="studion-wrapper-context">
          <div class="studio-context">
            <div class="studio-wrapper">
              <h3
                class="studio-name details-studio-name"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="20"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
              >
                The Book & Paper Studio
              </h3>
              <p class="details-studio-description">
                The book studio is very flexible, but is particularly well
                equipped for book construction techniques (including Eastern and
                Western traditions and adhesive and non-adhesive binding), pop
                up and kinetic books, boxmaking, leatherwork, dying and
                decoration techniques, and book design. Materials and techniques
                are combined in a myriad of ways, and instructors often ground
                technical exploration with conversations about historic and/org
                current context, design, or idea generation.
              </p>
              <a href="#" class="explore-studio"
                >Explore the Studio <i>&#8594;</i></a
              >
            </div>
          </div>
          <div class="studio-image-showcase" data-aos="fade-up">
            <img src="./assets/over-view-studio.png" />
          </div>
        </div>
      </div>

      <!-- <div class="row reg-scholarship-section">
        <div class="reg-context-wrapper">
          <div class="reg-information">
            <h3 class="reg-header">Registration & Scholarship Information</h3>
            <p>
              Penland welcomes serious students of all levels of
              experience-absolute beginners to professionals. We seek a diverse
              student population representing varied experiences, backgrounds,
              races, professions, and age groups (minimum age 18).
              <br />
              <br />
              Penland is an intentionally inclusive community that values the
              creative <br />energy that arises from diverse artistic visions
              and approaches. Our scholarship program exists to make our
              workshops accessible to those who are not able to participate
              without financial assistance and to create educational
              opportunities for people who have been underrepresented at Penland
              and in the craft world.
            </p>
            <a class="penland-link">Tuition and Fees <i>&#8594;</i></a>
            <a class="penland-link">Scholarship Information <i>&#8594;</i></a>
          </div>
          <div class="reg-scholarship-date-info">
            <div class="date-details">
              <div class="date-schedule-list">
                <div class="s-dates">
                  <h3 class="title-date-header">Scholarship Dates</h3>
                  <ul class="date-list">
                    <li>
                      <span class="reg-date">October 15, 2024</span>
                      <span>Scholarships Applications Open</span>
                    </li>
                    <li>
                      <span class="reg-date">November 15, 2024</span>
                      <span>Scholarships Application Dates</span>
                    </li>
                  </ul>
                </div>
                <div class="r-dates">
                  <h3 class="title-date-header">Registration Dates</h3>
                  <ul class="date-list">
                    <li>
                      <span class="reg-date">January 5-10, 2024</span>
                      <span
                        >Scholarships Enrollment Perios for Scholarship
                        Students</span
                      >
                    </li>
                    <li>
                      <span class="reg-date">January 15-20, 2024</span>
                      <span>Regular Enroll Perios. Open to all students</span>
                    </li>
                    <li>
                      <span class="reg-date">April 30, 2024</span>
                      <span>Last day enroll in workshops</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="acion-footer ">
                <a href="#">More Registration Information</a>
              </div>
            </div>
          </div>
        </div>
      </div> -->

      <div class="row explore-more-workshopt-section">
        <div class="explore-wrapper">
          <div class="explore-header">
            <h3>
              Explore More Workshops
            </h3>
            <a href="#" class="view-all-workshops">
              View All Workshops <i>&#8594;</i>
            </a>
          </div>
          <div class="slider-image-explore-workshop">
            <div
              id="owl-demo"
              class="owl-carousel owl-carousel-explore-more owl-theme"
            ></div>
          </div>
        </div>
      </div>

      <div class="have-any-question-section">
        <div class="have-any-wrapper">
          <div class="with-context-image-question">
            <div class="imag-question-up">
              <img src="./assets/question-mark-up.png" />
            </div>
            <div class="help-details">
              <h3>Have Any Questions?</h3>
              <p>
                Send us an email at <a>info@penland.org</a> or call us at <br />
                <a>832-765-2359</a> and we will be happy to assist you!
              </p>
              <a class="penland-link">Contact Details <i>&#8594;</i></a>
            </div>
          </div>

          <div class="imag-question-down">
            <img src="./assets/question-mark.png" />
          </div>
        </div>
      </div>

      <!-- END BODY PAGE -->
    </div>

    <?php include_once('./footer.php'); ?>
  <?php include_once('./wip-modal.php'); ?>
  </body>
</html>

<?php include_once('./scriptJS.php'); ?>
<script>
  $(document).ready(function() {


    $('.owl-carousel-explore-more').owlCarousel({
      items: 4, //10 items above 1000px browser width
      navigation: true, // Show next and prev buttons
      itemsDesktop: [1000, 4], //5 items between 1000px and 901px
      itemsDesktopSmall: [900, 3], // betweem 900px and 601px
      itemsTablet: [600, 2], //2 items between 600 and 0;
      itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet
      autoWidth: false,
      nav: true,
      navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>',
      ],
    });
    AOS.init({
      once: true,
      mirror: false,
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 900, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
    });
  });
</script>
