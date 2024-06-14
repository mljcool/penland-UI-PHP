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

        <div class="container-xxl flex-grow-1">
            <div class="row ">
                <!-- <h1>WORKSHOPS & New Student Form</h1>
        <label>(TEST ENVIRONMENT 👩‍💻)</label> -->
                <?php include_once('./banner-test-env.php') ?>

            </div>

            <div class="row new-student-form cast-returning-student-form">
                <div class="bs-stepper vertical wizard-modern wizard-modern-vertical wizard-numbered  mt-2 card mb-4"
                    id="multiStepsValidationReturningForm" style="flex-direction: row; background:white;">
                    <div class="bs-stepper-header">

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
                                    <span class="bs-stepper-subtitle">Cancellation/ Terms and Conditions</span>
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
                        <div class="card p-0 mb-4">
                            <div class="card-body d-flex flex-column flex-md-row justify-content-between">
                                <div style="padding:8px !important;"
                                    class="card-body d-flex align-items-md-center flex-column text-md-center">
                                    <div style="width:100%!important; margin-bottom: 0;" class=" d-flex" role="alert">
                                        <span
                                            class="badge badge-center rounded-pill bg-primary border-label-primary  me-2"><i
                                                class="bx bxs-user"></i></span>
                                        <div class="d-flex flex-column ps-1 focus-banner-container">
                                            <h6 class="alert-heading d-flex align-items-center fw-bold mb-1">
                                                Returning Student Form
                                            </h6>
                                            <span class="mb-0">Please carefully review your details.</span>
                                        </div>
                                    </div>
                                    <!-- <h4 class="mb-1">
                                           Returning Student Form
                                        </h4> -->

                                </div>
                            </div>
                        </div>
                        <form id="multiStepsFormReturningStudent" onSubmit="return false">

                            <!-- Housing Details -->
                            <?php include_once('./form-housing-details.php'); ?>


                            <!-- Payment Links -->
                            <?php include_once('./form-payment.php'); ?>


                            <!-- Terms and condition -->
                            <?php include_once('./form-terms-condition.php'); ?>

                            <!-- Review Form -->
                            <?php include_once('./returning-review-form.php'); ?>
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