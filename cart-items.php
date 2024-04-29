<!DOCTYPE html>
<html lang="en">
  <head>
    <?php  include_once('./header.php'); ?>
  </head>
  <body>
    <?php include_once('./home-navigition.php'); ?>

    <div class="container-fluid">
  <div class="row top-section-program">
    <h1>WORKSHOPS & Cart</h1>
    <label>(TEST ENVIRONMENT 👩‍💻)</label>
  </div>

  <!-- START BODY PAGE -->
  <div class="row section-cart-items">
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

            <!-- Wishlist -->
            <div class="list-group">
              <a
                href="/penland-web/"
                class="list-group-item d-flex justify-content-between"
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
              <h6>Offer</h6>
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
              </div>

              <!-- Gift wrap -->
              <div class="bg-lighter rounded p-3">
                <p class="fw-medium mb-2">Only 2 spaces left, register soon!</p>
                <p class="mb-2">
                  To check the PAYMENT & CANCELLATION and more information
                  please click below.
                </p>
                <a href="javascript:void(0)" class="fw-medium"
                  >Registration Information</a
                >
              </div>
              <hr class="mx-n4" />
              <div>
                <button
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#priceRangeFeedModal"
                  class="btn btn-sm btn-label-primary mt-md-3 d-flex gap-2 align-items-center"
                >
                  About Housing & Fees
                  <i class="bx bx-info-circle bx-flashing"></i>
                </button>
              </div>
              <hr class="mx-n4" />

              <!-- Price Details -->
              <h6>Price Details</h6>
              <dl class="row mb-0">
                <dt class="col-6 fw-normal">Subtotal</dt>
                <dd class="col-6 text-end">$1198.00</dd>

                <dt class="col-6 fw-normal">Tax</dt>
                <dd class="col-6 text-end">$0.00</dd>

                <dt class="col-6 fw-normal">Due Now</dt>
                <dd class="col-6 text-end">$1198.00</dd>

                <dt class="col-6 fw-normal">Supply Charges</dt>
                <dd class="col-6 text-end">
                  <s class="text-muted">$5.00</s>
                  <span class="badge bg-label-success ms-1">Free</span>
                </dd>
              </dl>

              <hr class="mx-n4" />
              <dl class="row mb-0">
                <dt class="col-6">Total</dt>
                <dd class="col-6 fw-medium text-end mb-0">$1198.00</dd>
              </dl>
              <dl>
                <div class="row py-4 my-2">
                  <div class="col-md-6 mb-md-0 mb-2">
                    <div
                      class="form-check custom-option custom-option-basic checked"
                    >
                      <label
                        class="form-check-label custom-option-content form-check-input-payment d-flex gap-3 align-items-center"
                        for="customRadioVisa"
                      >
                        <input
                          name="customRadioTemp"
                          class="form-check-input pay-types"
                          type="radio"
                          value="full"
                          id="customRadioVisa"
                        />
                        <span class="custom-option-body">
                          <span style="white-space: nowrap" class="ms-3"
                            >Full Payment</span
                          >
                        </span>
                      </label>
                    </div>
                  </div>
                  <div class="col-md-6 mb-md-0 mb-2">
                    <div class="form-check custom-option custom-option-basic">
                      <label
                        class="form-check-label custom-option-content form-check-input-payment d-flex gap-3 align-items-center"
                        for="customRadioPaypal"
                      >
                        <input
                          name="customRadioTemp"
                          class="form-check-input pay-types"
                          type="radio"
                          value="deposit"
                          id="customRadioPaypal"
                        />
                        <span class="custom-option-body">
                          <span style="white-space: nowrap" class="ms-3"
                            >Deposit Now</span
                          >
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
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

  <!-- MODAL START HERE -->

  <div
    class="modal fade"
    id="modalContinueRegister"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog modal-sm" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">I am</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="selected-item">
            <a href="/penland-web/login.php" class="item-select-as">
              <div class="icon-v">
                <img src="./assets/Returning-student.png" />
              </div>
              <div class="select-as-label">A returning student</div>
            </a>
            <a href="/penland-web/new-student.php" class="item-select-as">
              <div class="icon-v">
                <img src="./assets/New-student.png" />
              </div>
              <div class="select-as-label">A new student</div>
            </a>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- MODAL END HERE -->

  <!-- END BODY PAGE -->
</div>


    <?php include_once('./footer.php'); ?>
    <?php include_once('./wip-modal.php'); ?>
  </body>
</html>

<?php include_once('./scriptJS.php'); ?>
