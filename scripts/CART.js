let cart = {
  items: [],
  subTotal: 0,
  total: 0,
  payType: "",
  dynamicDetails: {
    account: {},
    personalInfo: {},
    housing: {},
    paymentStripe: {},
    terms: false,
  }
};

function redirecToCartDetails() {
  setTimeout(() => {
    window.location.href = "/penland-web/cart-items.php";
  }, 200);
}

function onRegisterNow() {
  const workshopID = getURLParameters();
  alert(workshopID);
  const checkItemFirst = cart.items.some(
    (_id) => _id.mshied_courseid === workshopID
  );
  if (!checkItemFirst) {
    const dataWorkshopLocal = getCurrentSelectedWorkShop();
    console.log("localStorage", dataWorkshopLocal);
    cart.items.push(dataWorkshopLocal);
    setItemStore("myCart", cart);
    redirecToCartDetails();
  } else {
    redirecToCartDetails();
  }
}

function MessateAlertIformation(){
    Swal.fire({
        title: 'Payment option',
        text: 'Please select your payment option full or deposit!',
        type: 'info',
        customClass: {
          confirmButton: 'btn btn-primary'
        },
        buttonsStyling: false
      })
}

$(document).ready(function () {
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
      console.log(payType);
      const myCartDetails = getMyCartDetails();
      myCartDetails.payType = payType;
      setItemStore("myCart", myCartDetails);
    }
  });
});
