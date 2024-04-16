<!DOCTYPE html>
<html lang="en">
  <head>
    <?php 
        include_once('./header.php');
    ?>
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
        <div class="item-header">
          <h3>Your Workshops</h3>
          <span class="total-workshop">2</span>
        </div>
        <div class="cart-wrapper">
          <div class="cart-item-section">
            <div class="item-list">
              <div class="item-card">
                <div class="image-container-cart">
                  <img class="img-item" src="./assets/Over-view-1.png" />
                </div>
                <div class="item-detail-wrapper">
                  <div class="product-title">
                    <span class="workshop-title"
                      >Case Binding Additional title here</span
                    >
                  </div>
                  <div class="all-details">
                    <div class="worksop-details">
                      <div class="details">
                        <span class="code">Code: R2403B</span>
                      </div>

                      <div class="instructor-section-card">
                        <span class="title-label">
                          Instructor
                        </span>
                        <div class="instructor-avatar-details">
                          <img class="img-item" src="./assets/Heather.png" />
                          <div class="name-instructor-and-contact">
                            <span class="instructor-name">Peter Heathens</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="lodgin-plus-meals">
                      <div class="home-and-food">
                        <span>
                          <i class="fas fa-home"></i>
                          Lodging
                        </span>
                        <span>
                          <i class="fas fa-utensils"></i>
                          Meals
                        </span>
                      </div>
                    </div>
                    <div class="row-pricing">
                      <div class="prices">
                        <div class="fee-row Tuition">
                          <div class="total-label">Tuition:</div>
                          <div>$2094.00</div>
                        </div>
                        <div class="fee-row Tuition">
                          <div class="total-label">Application Fee:</div>
                          <div>$2094.00</div>
                        </div>
                      </div>
                    </div>
                    <div class="actions-item">
                      <div>
                        <button class="remove" title="remove this item?">
                          <i class="far fa-trash-alt"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="cart-total-section">
            <!-- <h3>Cart Summary</h3> -->
            <div class="cart-total">
              <div class="action-header-cart">
                <button
                  class="btn-continue-registration"
                  data-bs-toggle="modal"
                  data-bs-target="#modalContinueRegister"
                >
                  Continue Registration
                </button>
                <div class="_orlabel">
                  or
                </div>
                <a class="additional-workshop" href="/">
                  <i class="fas fa-arrow-left"></i>Add More Workshops
                </a>
                <hr class="hr-border" />
              </div>
              <div class="computed-section">
                <div class="total-row Subtotal">
                  <div class="total-label">Subtotal</div>
                  <div>$1,470.00</div>
                </div>
                <div class="total-row Tax">
                  <div class="total-label">Tax</div>
                  <div>$0</div>
                </div>
                <div class="total-row total">
                  <div class="total-label">Total</div>
                  <div>$1,470.00</div>
                </div>
                <div class="total-row Due">
                  <div class="total-label">Due Now</div>
                  <div>$1,470.00</div>
                </div>
              </div>
              <div class="radio-selection">
                <div class="radio-input-payment">
                  <input type="radio" id="full" name="payMode" value="full" />
                  <label for="full">Full Payment</label>
                </div>
                <div class="radio-input-payment">
                  <input
                    type="radio"
                    id="deposit"
                    name="payMode"
                    value="deposit"
                  />
                  <label for="deposit">Deposit Now</label>
                </div>
              </div>
              <hr class="hr-border" />

              <div class="promo-code">
                <label>Enter a Promo Code</label>
                <input class="input-code" type="text" placeholder="Code here" />
                <button class="btn-promo-code">ADD PROMO CODE</button>
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
        <div class="modal-dialog modal-dialog modal-sm " role="document">
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
                <a href="#" class="item-select-as">
                  <div class="icon-v">
                    <img src="./assets/Returning-student.png" />
                  </div>
                  <div class="select-as-label">
                    A returning student
                  </div>
                </a>
                <a href="/penland-web/new-student.php" class="item-select-as">
                  <div class="icon-v">
                    <img src="./assets/New-student.png" />
                  </div>
                  <div class="select-as-label">
                    A new student
                  </div>
                </a>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-primary"
                data-bs-dismiss="modal"
              >
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
