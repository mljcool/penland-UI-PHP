function redirecToCartDetails() {
  setTimeout(() => {
    window.location.href = "/penland-web/cart-items.php";
    // window.location.href = "/cart-items";  //FOR PORTAL
  }, 200);
}

function onRegisterNow() {
  const workshopID = getURLParameters();
  const myCart = getMyCartDetails();
  const checkItemFirst = myCart.items.some(
    (_id) => _id.mshied_courseid === workshopID
  );
  console.log(checkItemFirst);

  if (!checkItemFirst) {
    const dataWorkshopLocal = getCurrentSelectedWorkShop();
    myCart.items.push(dataWorkshopLocal);
    updateMyDetails("cart", myCart);
    redirecToCartDetails();
  } else {
    redirecToCartDetails();
  }
}

function countCartItems(countItems) {
  $(".count-items").html(
    `(${countItems} ${countItems > 1 ? `Items` : `Item`} )`
  );
}

function removeItem(uid) {
  const myCartItems = getMyCartDetails();
  const newItems = myCartItems.items.filter(
    (_data) => _data.mshied_courseid !== uid
  );
  myCartItems.items = newItems;
  updateMyDetails("cart", myCartItems);
  countCartItems(myCartItems.items.length);
  $(".cart-item-" + uid).slideUp("slow", function () {
    $(this).remove();
  });
}

function addHTMLELementCartItems() {
  const myCart = getMyCartDetails();
  const cart = myCart.items;
  if (cart.length) {
    computeValueOfCart();
    countCartItems(cart.length);
    $(".cart-item-list-wrapper").html("");
    cart.forEach(function (_item) {
      $(".cart-item-list-wrapper").append(HTMLelementProp.appendItemToCart(_item));
    });
  }
}

function setRadioTypePayment() {
  const myCart = getMyCartDetails();
  $(".fee-is-" + myCart.payType).prop("checked", true);
}

function MessateAlertIformation() {
  Swal.fire({
    title: "Payment option",
    text: "Please select your payment option full or deposit!",
    icon: "info",
    customClass: {
      confirmButton: "btn btn-primary",
    },
    buttonsStyling: false,
  });
}

$(document).ready(function () {
  addHTMLELementCartItems();
  setRadioTypePayment();

  $(".on-continue-registration").click(function () {
    const myCartDetails = getMyCartDetails();
    if (!myCartDetails.payType) {
      MessateAlertIformation();
      return;
    }
    $("#modalContinueRegister").modal("show");
  });

  $(".pay-types").change(function () {
    if (this.checked) {
      const payType = $(this).val();
      const myCartDetails = getMyCartDetails();
      myCartDetails.payType = payType;
      updateMyDetails("cart", myCartDetails);
    }
  });
});
