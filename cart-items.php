<!DOCTYPE html>
<html lang="en">
  <head>
    <?php  include_once('./header.php'); ?>
  </head>
  <body>
    <?php include_once('./home-navigition.php'); ?>

    <div class="container-fluid">

    <div class="container-xxl flex-grow-1 ">
        <div class="row ">
            <!-- <h1>WORKSHOPS & New Student Form</h1>
            <label>(TEST ENVIRONMENT 👩‍💻)</label> -->
            <?php include_once('./banner-test-env.php') ?>
          
          </div>
      </div>

  <!-- START BODY PAGE -->
  <div class="container-xxl flex-grow-1 ">
    <div class="row section-cart-items mb-4">
      <div class="workshop-item-wrapper">
        <div id="checkout-cart" class="content">
          <div class="row">
            <!-- Cart left -->
            <div class="col-xl-8 mb-3 mb-xl-0">
              <!-- Offer alert -->
              <div class="alert alert-success mb-3" role="alert">
                <div class="d-flex">
                  <span
                    class="badge badge-center rounded-pill bg-success border-label-success p-3 me-2"
                    ><i class="bx bx-bookmarks fs-4 bx-tada"></i
                  ></span>
                  <div class="flex-grow-1 ps-1">
                    <div class="fw-medium fs-5 mb-2">Available Offers</div>
                    <ul class="list-unstyled mb-0">
                      <li>
                        - 10% Instant Discount for Returning student with good
                        conduct.
                      </li>
                      <li>- 25% Discount offer for scholarships.</li>
                    </ul>
                  </div>
                </div>
                <button
                  type="button"
                  class="btn-close btn-pinned"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                ></button>
              </div>

              <!-- Shopping bag -->
              <h5>My Cart <span class="count-items">(0 Items)</span></h5>
              <ul class="list-group mb-3 cart-item-list-wrapper">
          
          
              </ul>
              <!-- <a href="/penland-web" class="btn btn-primary">Browse more workshop.</a> -->
              <!-- Wishlist -->
              <div class="list-group">
                <a
                  href="/penland-web/"
                  class="btn btn-primary list-group-item d-flex justify-content-between"
                >
                  <span>Add more workshops</span>
                  <i class="bx bx-sm bx-chevron-right scaleX-n1-rtl"></i>
                </a>
              </div>
            </div>

            <!-- Cart right -->
            <div class="col-xl-4">
              <div class="border rounded p-4 mb-3 pb-3">
                <!-- Offer -->
                <!-- <h6>Offer</h6>
                <div class="row g-3 mb-3">
                  <div class="col-8 col-xxl-8 col-xl-12">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter Promo Code"
                      aria-label="Enter Promo Code"
                    />
                  </div>
                  <div class="col-4 col-xxl-4 col-xl-12">
                    <div class="d-grid">
                      <button type="button" class="btn btn-label-primary">
                        Apply
                      </button>
                    </div>
                  </div>
                </div> -->

                <!-- Gift wrap -->
                <div class="bg-lighter rounded p-3">
                  <p class="fw-medium mb-2">Registration Process.</p>
                  <p class="mb-2">
                    To check the PAYMENT & CANCELLATION and more information
                    please click below.
                  </p>
                  <a href="javascript:void(0)" class="fw-medium"
                    >Registration Information</a
                  >
                </div>
                <!-- <hr class="mx-n4" /> -->
                <!-- <div>
                  <button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#priceRangeFeedModal"
                    class="btn btn-sm btn-label-primary mt-md-3 d-flex gap-2 align-items-center"
                  >
                     Additional Product
                    <i class="bx bx-info-circle bx-flashing"></i>
                  </button>
                </div> -->
                <hr class="mx-n4" />

                <!-- Price Details -->
                <h6>Payment  Details</h6>
                <dl class="row mb-0">
                <dt class="col-6 fw-normal">Total Amount Fee</dt>
                  <dd class="col-6 text-end total-application-fee">$00.00</dd>

                  <dt class="col-6 fw-normal" style="display:none;">Total Tuition Fee</dt>
                  <dd class="col-6 text-end total-tuition-fee" style="display:none;">$00.00</dd>

                  <dt class="col-6 fw-normal">Due Now</dt>
                  <dd class="col-6 text-end due-now">$00.00</dd>

                  <dt class="col-6 fw-normal">Tax</dt>
                  <dd class="col-6 text-end">$0.00</dd>

                
                  <!-- <dt class="col-6 fw-normal">Supply Charges</dt>
                  <dd class="col-6 text-end">
                    <s class="text-muted">$5.00</s>
                    <span class="badge bg-label-success ms-1">Free</span>
                  </dd> -->
                </dl>

                <hr class="mx-n4" />
                <dl class="row mb-0">
                  <dt class="col-6">Total</dt>
                  <dd class="col-6 fw-medium text-end mb-0 over-all-total">$1198.00</dd>
                </dl>
              
              </div>
              <div class="d-grid">
                <button
              
                  class="btn btn-primary btn-next on-continue-registration"
                >
                  Continue Registration
                </button>
              </div>
            </div>
          </div>
        </div>
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
