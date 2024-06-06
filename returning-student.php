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

    <div class="container-xxl flex-grow-1 container-p-y">
    <div class="row ">
        <!-- <h1>WORKSHOPS & New Student Form</h1>
        <label>(TEST ENVIRONMENT 👩‍💻)</label> -->
        <?php include_once('./banner-test-env.php') ?>
      
      </div>

      <div class="row new-student-form cast-returning-student-form">
        <div
          class="bs-stepper vertical wizard-modern wizard-modern-vertical wizard-numbered  mt-2 card mb-4"
          id="multiStepsValidation"
          style="flex-direction: row; background:white;"
        >
          <div class="bs-stepper-header" >
       

            <div class="step" data-target="#housing-info">
              <button type="button" class="step-trigger">
                <span class="bs-stepper-circle">1</span>
                <span class="bs-stepper-label mt-1">
                  <span class="bs-stepper-title">Housing & Meals</span>
                  <span class="bs-stepper-subtitle">Additional Product</span>
                </span>
              </button>
            </div>

            
            <div class="line">
              <!-- <i class="bx bx-chevron-right"></i> -->
            </div>

            <div class="step" data-target="#payment-link">
              <button type="button" class="step-trigger">
                <span class="bs-stepper-circle">2</span>
                <span class="bs-stepper-label mt-1">
                  <span class="bs-stepper-title">Payment</span>
                  <span class="bs-stepper-subtitle">Payment Method</span>
                </span>
              </button>
            </div>

            <div class="line">
              <!-- <i class="bx bx-chevron-right"></i> -->
            </div>
            


            <div class="step" data-target="#terms-info">
              <button type="button" class="step-trigger">
                <span class="bs-stepper-circle">3</span>
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

          

            <div class="step" data-target="#review-details">
              <button type="button" class="step-trigger">
                <span class="bs-stepper-circle">4</span>
                <span class="bs-stepper-label mt-1">
                  <span class="bs-stepper-title">Confirmation</span>
                  <span class="bs-stepper-subtitle">Submit & Review</span>
                </span>
              </button>
            </div>
          </div>
          <div class="bs-stepper-content" style="background:#fafafa;">
            <form id="multiStepsFormReturningStudent" onSubmit="return false">
         
              <!-- Housing Details -->
              <?php include_once('./form-housing-details.php'); ?>


              <!-- Payment Links -->
              <?php include_once('./form-payment.php'); ?>

              
              <!-- Terms and condition -->
              <?php include_once('./form-terms-condition.php'); ?>

              <!-- Review Form -->
              <?php include_once('./form-review-details.php'); ?>
            </form>
          </div>
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



<!-- END UI THEM SCRIPT -->