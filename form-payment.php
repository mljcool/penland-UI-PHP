<style>
   .item-card-fee {
      padding: 1rem;
      border: 1px solid #d8d8d8;
      border-radius: 7px;
   }
   .pay-card {
      height: 100%
   }
</style>

<div id="payment-link" class="content">
   <div class="content-header mb-3">
      <h6 class="mb-0">Payment</h6>
   </div>
   <div class="row g-3">
      <div class="row ">
         <div class="col-md-6">
            <div class="card pay-card border rounded p-4 mb-3 mt-2 pb-3 white-background">
               <!-- Gift wrap -->
               <div class="bg-lighter rounded p-3">
                  <p class="mb-2">
                     To check the PAYMENT &amp; CANCELLATION and more information
                     please click below.
                  </p>
                  <a href="javascript:void(0)" class="fw-medium">Registration Information</a>
               </div>

               <hr class="mx-n4">

               <!-- Price Details -->
               <h6>Payment Details</h6>
               <dl class="row mb-0">
                  <dt class="col-6 fw-normal">Total Application Fee</dt>
                  <dd class="col-6 text-end total-application-fee">$10,428.00</dd>

                  <dt class="col-6 fw-normal">Housing &amp; Meals</dt>
                  <dd class="col-6 text-end total-h-and-m">$1,400.00</dd>


                  <dt class="col-6 fw-normal" style="display:none;">Total Tuition Fee</dt>
                  <dd style="display:none;" class="col-6 text-end total-tuition-fee">$0</dd>

                  <dt class="col-6 fw-normal">Due Now</dt>
                  <dd class="col-6 text-end due-now">$10,428.00</dd>

                  <dt class="col-6 fw-normal">Tax</dt>
                  <dd class="col-6 text-end">$0.00</dd>
               </dl>

               <hr class="mx-n4">
               <dl class="row mb-0">
                  <dt class="col-6">Total</dt>
                  <dd class="col-6 fw-medium text-end mb-0 over-all-total">$11,828.00</dd>
               </dl>
               <dl>
                  <div class="row py-4 my-2">
                     <div class="col-md-6 mb-md-0 mb-2">
                        <div class="form-check custom-option custom-option-basic checked">
                           <label
                              class="form-check-label custom-option-content form-check-input-payment d-flex gap-3 align-items-center"
                              for="customRadioVisa">
                              <input name="customRadioTemp" class="form-check-input pay-types fee-is-full" type="radio"
                                 value="full" id="customRadioVisa">
                              <span class="custom-option-body">
                                 <span style="white-space: nowrap" class="ms-3">Full Payment</span>
                              </span>
                           </label>
                        </div>
                     </div>
                     <div class="col-md-6 mb-md-0 mb-2">
                        <div class="form-check custom-option custom-option-basic">
                           <label
                              class="form-check-label custom-option-content form-check-input-payment d-flex gap-3 align-items-center"
                              for="customRadioPaypal">
                              <input name="customRadioTemp" class="form-check-input pay-types fee-is-deposit"
                                 type="radio" value="deposit" id="customRadioPaypal">
                              <span class="custom-option-body">
                                 <span style="white-space: nowrap" class="ms-3">Deposit Now</span>
                              </span>
                           </label>
                        </div>
                     </div>
                  </div>
               </dl>
            </div>
         </div>
         <div class="col-md-6">
            <div class="card border pay-card rounded p-4 mb-3 mt-2 pb-3 white-background">
               <div class="col-12 item-card-fee mt-2">
                  <!-- <label class="form-label w-100" for="cardnumber">Google Pay</label> -->
                  <div id="payment-request-button">
                     <!-- A Stripe Element will be inserted here. -->
                  </div>
                  <script async
                     src="https://js.stripe.com/v3/buy-button.js">
                     </script>
                     
                     <stripe-buy-button
                     buy-button-id="buy_btn_1PNrVNFRQc06DqEhHEybSsxs"
                     customer-email="cool@gmail.com"
                     client-reference-id="89895551188556"
                     publishable-key="pk_test_51P6GMmFRQc06DqEhbN6KzrTt13krDHaEEHj0DhxnO5QPgbwAnXN3nFJ5mnR7PEeJyosrdbeCJj2lrT1YBswGsOfm00Q56wNeF2"
                     >
                     </stripe-buy-button>
               </div>
               <div class="col-md-12 p-2 mb-4">
                  <hr />
                  <strong>OR Enter Credit Card Info</strong>
               </div>
               <div class="row g-3 item-card-fee">
                  <!-- <label class="form-label w-100" for="cardnumber">Card Details</label> -->
                  <!-- <div id="card-element" class="form-control"></div> -->
                  <div class="col-12">
                     <label class="form-label" for="billings-card-num">Card number</label>
                     <div class="input-group input-group-merge">
                        <input type="text" id="billings-card-num" class="form-control billing-card-mask"
                           placeholder="7465 8374 5837 5067" aria-describedby="paymentCard" />
                        <span class="input-group-text cursor-pointer p-1" id="paymentCard"><span
                              class="card-type"></span></span>
                     </div>
                  </div>
                  <div class="col-md-6">
                     <label class="form-label" for="billings-card-name">Name</label>
                     <input type="text" id="billings-card-name" class="form-control" placeholder="John Doe" />
                  </div>
                  <div class="col-md-3">
                     <label class="form-label" for="billings-card-date">EXP. Date</label>
                     <input type="text" id="billings-card-date" class="form-control billing-expiry-date-mask"
                        placeholder="MM/YY" />
                  </div>
                  <div class="col-md-3">
                     <label class="form-label" for="billings-card-cvv">CVV</label>
                     <input type="text" id="billings-card-cvv" class="form-control billing-cvv-mask" maxlength="3"
                        placeholder="965" />
                  </div>
               </div>

               <div class="col-12 mt-5">
                  <label class="switch">
                     <input type="checkbox" class="switch-input" />
                     <span class="switch-toggle-slider">
                        <span class="switch-on"></span>
                        <span class="switch-off"></span>
                     </span>
                     <span class="switch-label">Save card for future billing?</span>
                  </label>
               </div>
            </div>
         </div>
      </div>

      <div class="col-12 d-flex justify-content-between mt-5">
         <button class="btn btn-primary btn-prev">
            <i class="bx bx-chevron-left bx-sm ms-sm-n2"></i>
            <span class="align-middle d-sm-inline-block d-none">Previous</span>
         </button>
         <button class="btn btn-primary btn-next">
            <span class="align-middle d-sm-inline-block d-none me-sm-1 me-0">Next</span>
            <i class="bx bx-chevron-right bx-sm me-sm-n2"></i>
         </button>
      </div>
   </div>
</div>

<script>
   // Set your publishable key
   var stripe = Stripe('pk_test_pGlXo9F6Y0utPXbtfPiiqO1h');
   // Create an instance of Elements
   var elements = stripe.elements();
   const paymentRequest = stripe.paymentRequest({
      country: 'US',
      currency: 'usd',
      total: {
         label: 'Demo total',
         amount: 1099,
      },
      requestPayerName: true,
      requestPayerEmail: true,
   });

   const prButton = elements.create('paymentRequestButton', {
      paymentRequest,
      style: {
         paymentRequestButton: {
            type: 'default',
            // One of 'default', 'book', 'buy', or 'donate'
            // Defaults to 'default'

            theme: 'dark',
            // One of 'dark', 'light', or 'light-outline'
            // Defaults to 'dark'

            height: '44px',
            // Defaults to '40px'. The width is always '100%'.
         },
      },
   });

   (async () => {
      // Check the availability of the Payment Request API first.
      const result = await paymentRequest.canMakePayment();
      if (result) {
         prButton.mount('#payment-request-button');
      } else {
         document.getElementById('payment-request-button').style.display =
            'none';
      }
   })();
</script>