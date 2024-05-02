<!DOCTYPE html>
<html lang="en" class="light-style docs-page">
  <head>
    <?php 
    include_once('./header.php');
  ?>
  </head>
  <body>
    <?php include_once('./home-navigition.php'); ?>

    <div class="container-fluid">
      <div class="row top-section-program">
        <h1>WORKSHOPS & New Student Form</h1>
        <label>(TEST ENVIRONMENT 👩‍💻)</label>
      </div>

      <!-- TEST BUTTON API CALL -->
      <!-- <div class="row p-6">
          <div class="col-md-3">
          <button class="btn btn-primary" onclick="checkUserExist()">TEST API</button>
          </div> 
      </div>  -->

  
      <!-- START BODY PAGE   -->
      <!-- BYPASS bs-stepper vertical wizard-modern wizard-modern-vertical wizard-numbered  mt-2 card mb-4 -->
      <!-- ORIGINAL CLASS bs-stepper vertical   mt-2 card mb-4 -->
      <div class="row new-student-form">
        <div
          class="bs-stepper vertical wizard-modern wizard-modern-vertical wizard-numbered  mt-2 card mb-4"
          id="multiStepsValidation"
          style="flex-direction: row; background:white;"
        >
          <div class="bs-stepper-header" >
            <div class="step" data-target="#accountDetailsValidation">
              <button type="button" class="step-trigger">
                <span class="bs-stepper-circle">1</span>
                <span class="bs-stepper-label mt-1">
                  <span class="bs-stepper-title">Account Details</span>
                  <span class="bs-stepper-subtitle">Setup Account Details</span>
                </span>
              </button>
            </div>

            <div class="line">
              <!-- <i class="bx bx-chevron-right"></i> -->
            </div>
            <div class="step" data-target="#personal-info">
              <button type="button" class="step-trigger">
                <span class="bs-stepper-circle">2</span>
                <span class="bs-stepper-label mt-1">
                  <span class="bs-stepper-title">Personal Info</span>
                  <span class="bs-stepper-subtitle">Add personal info</span>
                </span>
              </button>
            </div>

            <div class="line">
              <!-- <i class="bx bx-chevron-right"></i> -->
            </div>

            <div class="step" data-target="#housing-info">
              <button type="button" class="step-trigger">
                <span class="bs-stepper-circle">3</span>
                <span class="bs-stepper-label mt-1">
                  <span class="bs-stepper-title">Housing</span>
                  <span class="bs-stepper-subtitle">Housing Details</span>
                </span>
              </button>
            </div>

            <div class="line">
              <!-- <i class="bx bx-chevron-right"></i> -->
            </div>

            <div class="step" data-target="#terms-info">
              <button type="button" class="step-trigger">
                <span class="bs-stepper-circle">4</span>
                <span class="bs-stepper-label mt-1">
                  <span class="bs-stepper-title">Terms and Conditions</span>
                  <span class="bs-stepper-subtitle"
                    >Cancellation/ Terms and Conditions</span
                  >
                </span>
              </button>
            </div>
            <div class="line">
              <!-- <i class="bx bx-chevron-right"></i> -->
            </div>

            <div class="step" data-target="#payment-link">
              <button type="button" class="step-trigger">
                <span class="bs-stepper-circle">5</span>
                <span class="bs-stepper-label mt-1">
                  <span class="bs-stepper-title">Payment</span>
                  <span class="bs-stepper-subtitle">Payment Method</span>
                </span>
              </button>
            </div>

            <div class="line">
              <!-- <i class="bx bx-chevron-right"></i> -->
            </div>

            <div class="step" data-target="#review-details">
              <button type="button" class="step-trigger">
                <span class="bs-stepper-circle">5</span>
                <span class="bs-stepper-label mt-1">
                  <span class="bs-stepper-title">Confirmation</span>
                  <span class="bs-stepper-subtitle">Submit & Review</span>
                </span>
              </button>
            </div>
          </div>
          <div class="bs-stepper-content">
            <form id="multiStepsForm" onSubmit="return false">
              <!-- Account Details -->
              <?php include_once('./form-account-details.php'); ?>

              <!-- Personal Info -->
              <?php include_once('./form-personal-info.php'); ?>

              <!-- Housing Details -->
              <?php include_once('./form-housing-details.php'); ?>

              <!-- Terms and condition -->
              <?php include_once('./form-terms-condition.php'); ?>

              <!-- Payment Links -->
              <?php include_once('./form-payment.php'); ?>

              <!-- Review Form -->
              <?php include_once('./form-review-details.php'); ?>
            </form>
          </div>
        </div>
      </div>

      <!-- END BODY PAGE -->
    </div>

    <!--START Modal -->

    <?php include_once('./form-modal-prices.php'); ?>

    <!--END Modal -->

    <?php include_once('./footer.php'); ?>
    <?php include_once('./wip-modal.php'); ?>
  </body>
</html>
<?php include_once('./scriptJS.php'); ?>

<script>
  $(document).ready(function () {
    $('#bs-datepicker-basic').datepicker();
    new Cleave('.phone-number-mask', {
      phone: true,
      phoneRegionCode: 'US',
    });

    const tagifyBasicEl = document.querySelector('#TagifyBasic');
    const TagifyBasic = new Tagify(tagifyBasicEl);

  

  });

  const wizardModernVertical = document.querySelector(
    '.wizard-modern-vertical'
  );

  if (
    typeof wizardModernVertical !== undefined &&
    wizardModernVertical !== null
  ) {
    const wizardModernVerticalBtnNextList = [].slice.call(
        wizardModernVertical.querySelectorAll('.btn-next')
      ),
      wizardModernVerticalBtnPrevList = [].slice.call(
        wizardModernVertical.querySelectorAll('.btn-prev')
      ),
      wizardModernVerticalBtnSubmit =
        wizardModernVertical.querySelector('.btn-submit');

    const modernVerticalStepper = new Stepper(wizardModernVertical, {
      linear: false,
    });
    if (wizardModernVerticalBtnNextList) {
      wizardModernVerticalBtnNextList.forEach((wizardModernVerticalBtnNext) => {
        wizardModernVerticalBtnNext.addEventListener('click', (event) => {
          const.log('EVENTS >>>', event)
          modernVerticalStepper.next();
        });
      });
    }
    if (wizardModernVerticalBtnPrevList) {
      wizardModernVerticalBtnPrevList.forEach((wizardModernVerticalBtnPrev) => {
        wizardModernVerticalBtnPrev.addEventListener('click', (event) => {
          modernVerticalStepper.previous();
        });
      });
    }
    if (wizardModernVerticalBtnSubmit) {
      wizardModernVerticalBtnSubmit.addEventListener('click', (event) => {
        // alert('Submitted..!!');
      });
    }
  }
</script>

<!-- END UI THEM SCRIPT -->
