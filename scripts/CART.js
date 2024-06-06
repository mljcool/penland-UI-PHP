function redirecToCartDetails() {
   setTimeout(() => {
      window.location.href = '/penland-web/cart-items.php';
      // window.location.href = "/cart-items";  //FOR PORTAL
   }, 200);
}

function redirecToWaitlistCartDetails() {
   setTimeout(() => {
      window.location.href = '/penland-web/waiting-list-cart.php';
      // window.location.href = "/cart-items";  //FOR PORTAL
   }, 200);
}

function processItemsToCart(toURL) {
   const workshopID = getURLParameters();
   const myCart = getMyCartDetails();
   const dataWorkshopLocal = getCurrentSelectedWorkShop();
   const updateItems = () => {
      if (!!dataWorkshopLocal) {
         myCart.items.push(dataWorkshopLocal);
         updateMyDetails('cart', myCart);
      } else {
         MessateAlertDetailsIsNull();
      }
   };
   const redirecto = () => {
      if (toURL === 'waitlist') {
         redirecToWaitlistCartDetails();
      } else {
         redirecToCartDetails();
      }
   };

   if (myCart.items.length) {
      const checkItemFirst = myCart.items.some(
         (_id) => _id.mshied_courseid === workshopID
      );
      if (!checkItemFirst) {
         updateItems();
         redirecto();
      } else {
         redirecto();
      }
   } else {
      updateItems();
      redirecto();
   }
}

function onRegisterNow() {
   processItemsToCart('');
}

function onWaitlist() {
   processItemsToCart('waitlist');
}

function countCartItems(countItems) {
   $('.count-items').html(
      `(${countItems} ${countItems > 1 ? `Items` : `Item`} )`
   );
}

function removeItem(uid) {
   const myCartItems = getMyCartDetails();
   const newItems = myCartItems.items.filter(
      (_data) => _data.mshied_courseid !== uid
   );
   myCartItems.items = newItems;
   updateMyDetails('cart', myCartItems);
   countCartItems(myCartItems.items.length);
   $('.cart-item-' + uid).slideUp('slow', function () {
      $(this).remove();
   });
   setTimeout(() => {
      computeValueOfCart();
   }, 200);
}

function removeItemWaitList(uid) {
   const myCartItems = getMyCartDetails();
   const newItems = myCartItems.items.filter(
      (_data) => _data.mshied_courseid !== uid
   );
   myCartItems.items = newItems;
   updateMyDetails('cart', myCartItems);
   $('.cart-item-' + uid).slideUp('slow', function () {
      $(this).remove();
   });
   setTimeout(() => {
      window.location.href = '/penland-web/details.php?workshopID=' + uid;

      // FOR PORTAL DYNAMICS
      // window.location.href = '/workshop-details?workshopID='+workshopID
   }, 1000);
}

function filterWaitlistedItemsOnly(cart) {
   const currentWorkshop = getCurrentSelectedWorkShop();
   console.log('currentWorkshop', currentWorkshop.mshied_courseid);
   cart
      .filter(
         (_data) => _data.mshied_courseid === currentWorkshop.mshied_courseid
      )
      .forEach(function (_item) {
         $('.cart-item-list-wrapper').append(
            HTMLelementProp.waitListItemToCart(_item)
         );
      });
}

function addHTMLELementCartItems() {
   const myCart = getMyCartDetails();
   const cart = myCart.items;
   if (cart.length) {
      computeValueOfCart();
      countCartItems(cart.length);
      $('.cart-item-list-wrapper').html('');
      const isCartWaitlist = $('.cart-waitlist-title');

      if (isCartWaitlist.length) {
         filterWaitlistedItemsOnly(cart);
      } else {
         cart.forEach(function (_item) {
            $('.cart-item-list-wrapper').append(
               HTMLelementProp.appendItemToCart(_item)
            );
         });
      }
   }
}

function setRadioTypePayment() {
   const myCart = getMyCartDetails();
   $('.fee-is-' + myCart.payType).prop('checked', true);
}

function MessateAlertIformation() {
   Swal.fire({
      title: 'Payment option',
      text: 'Please select your payment option full or deposit!',
      icon: 'info',
      customClass: {
         confirmButton: 'btn btn-primary',
      },
      buttonsStyling: false,
   });
}
function MessateAlertDetailsIsNull() {
   Swal.fire({
      title: 'Oops!',
      text: 'Seems there is an issue withe workshop overview.',
      icon: 'info',
      customClass: {
         confirmButton: 'btn btn-primary',
      },
      buttonsStyling: false,
   });
}

function MessateAlertIformationCart() {
   Swal.fire({
      title: 'Oops!',
      text: 'Your cart is currenty empty!',
      icon: 'info',
      customClass: {
         confirmButton: 'btn btn-primary',
      },
      buttonsStyling: false,
   });
}

function onNewStudent() {
   $('#modalContinueRegister').modal('hide');
   $('#PaymentAdjusted')
      .modal('show')
      .on('hidden.bs.modal', function (e) {
         setTimeout(() => {
            window.location.href = '/penland-web/new-student.php';
            // window.location.href = "/cart-items";  //FOR PORTAL
         }, 200);
      });
}

function waitlistHTMLLabels() {
   const isCartWaitlist = $('.cart-waitlist-title');
   if (isCartWaitlist.length) {
      const myCartDetails = getMyCartDetails();
      const singleItem = myCartDetails.items[0];
      isCartWaitlist.html('Join Waitlist for: ' + singleItem['mshied_name']);
   }
}

$(document).ready(function () {
   waitlistHTMLLabels();
   addHTMLELementCartItems();
   setRadioTypePayment();

   $('.on-continue-registration').click(function () {
      const myCartDetails = getMyCartDetails();
      // if (!myCartDetails.payType) {
      //    MessateAlertIformation();
      //    return;
      // }
      if (myCartDetails.items.length === 0) {
         MessateAlertIformationCart();
         return;
      }

      if (checkHasSession()) {
         window.location.href = '/penland-web/returning-student.php';;
         return;
      }

      $('#modalContinueRegister').modal('show');
   });

   $('.pay-types').change(function () {
      if (this.checked) {
         const payType = $(this).val();
         const myCartDetails = getMyCartDetails();
         myCartDetails.payType = payType;
         updateMyDetails('cart', myCartDetails);
      }
   });
});
