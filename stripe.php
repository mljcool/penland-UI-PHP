<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <title>Payment</title>

    <script src="https://js.stripe.com/v3/"></script>
    <!-- Include Google Pay and Apple Pay SDKs -->
    <!-- <script src="https://pay.google.com/gp/p/js/pay.js"></script>
    <script src="https://applepay.cdn.apple.com/jsapi/v1/apple-pay-sdk.js"></script> -->
        <style>
            /* Add some basic styling to the form */
            .payment-form {
                width: 300px;
                margin: auto;
                padding: 20px;
                border: 1px solid #ccc;
                border-radius: 5px;
            }
        </style>
  </head>
  <body class="payment-form">
        <div id="payment-request-button">
        <!-- A Stripe Element will be inserted here. -->
        </div>
  </body>
</html>

<script>
// Set your publishable key
var stripe = Stripe('pk_test_pGlXo9F6Y0utPXbtfPiiqO1h',{
    apiVersion: "2018-05-21",
});

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

      height: '64px',
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
    document.getElementById('payment-request-button').style.display = 'none';
  }
})();

// // Create a card Element and inject it into the DOM
// var cardElement = elements.create('card');
// cardElement.mount('#card-element');

// // Handle real-time validation errors from the card Element
// cardElement.addEventListener('change', function(event) {
//     var displayError = document.getElementById('error-message');
//     if (event.error) {
//         displayError.textContent = event.error.message;
//     } else {
//         displayError.textContent = '';
//     }
// });

// // Handle form submission
// var form = document.getElementById('payment-form');
// form.addEventListener('submit', function(event) {
//     event.preventDefault();

//     // Disable the submit button to prevent multiple submissions
//     document.getElementById('submit-button').disabled = true;

//     // Create a token from the card Element
//     stripe.createToken(cardElement).then(function(result) {
//         if (result.error) {
//             // Inform the user if there was an error
//             var errorElement = document.getElementById('error-message');
//             errorElement.textContent = result.error.message;
//         } else {
//             // Send the token to your server to process the payment
//             stripeTokenHandler(result.token);
//         }
//     });
// });

// // Initiate Google Pay
// var googlePayButton = document.getElementById('google-pay-button');
// googlePayButton.addEventListener('click', function(event) {
//     // Handle Google Pay payment method selection
//     // You can use the Google Pay API to initiate payment process
// });

// // Initiate Apple Pay
// var applePayButton = document.getElementById('apple-pay-button');
// applePayButton.addEventListener('click', function(event) {
//     // Handle Apple Pay payment method selection
//     // You can use the Apple Pay API to initiate payment process
// });

// // Submit the token to your server
// function stripeTokenHandler(token) {
//     // You can add additional form data here before sending it to your server
//     var formData = new FormData();
//     formData.append('stripeToken', token.id);

//     // Send the token to your server using Fetch API or XMLHttpRequest
//     fetch('/process-payment', {
//         method: 'POST',
//         body: formData
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.text();
//     })
//     .then(responseText => {
//         // Handle successful response from server
//         console.log(responseText);
//     })
//     .catch(error => {
//         // Handle errors
//         console.error('There was a problem with your fetch operation:', error);
//     });
// }
</script>