function redirecToCartDetails() {
  setTimeout(() => {
    window.location.href = "/penland-web/cart-items.php";
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
      $(
        ".cart-item-list-wrapper"
      ).append(`<li class="list-group-item p-4 cart-item-${_item.mshied_courseid}">
            <div class="d-flex gap-3">
              <div class="flex-shrink-0 d-flex align-items-center">
                <img
                  src="./assets/Over-view-1.png"
                  alt="google home"
                  class="w-px-100"
                  style="border-radius: 8px"
                />
              </div>
              <div class="flex-grow-1">
                <div class="row">
                  <div class="col-md-8">
                    <p class="me-3">
                      <a href="javascript:void(0)" class="text-body fs-5"
                        >${_item.mshied_name}</a
                      >
                    </p>
                    <div class="text-muted mb-2 d-flex flex-wrap">
                      <span class="me-1">Code:</span>
                      <span class="badge bg-label-info">${_item.mshied_coursenumber}</span>
                    </div>
                    <div class="text-muted mb-2 d-flex flex-wrap">
                      <span class="me-1">Instructor:</span>
                      <a href="javascript:void(0)" class="me-3"
                        >${_item.instructor}</a
                      >
                    </div>
                    <div class="text-muted mb-2 d-flex flex-wrap">
                      <span class="me-1">Registration starts:</span>
                      <a href="javascript:void(0)" class="me-3"><i class="bx bxs-calendar "></i> ${_item.startDateHumanReadable}</a>
                    </div>
                    <div class="text-muted mb-2 d-flex flex-wrap">
                    <span class="me-1">Semester:</span>
                    <a href="javascript:void(0)" class="me-3"><i class='bx bxs-calendar-event'></i> ${_item.semester}</a>
                  </div>
                  </div>
                  <div class="col-md-4">
                    <div class="text-md-end">
                      <button
                        onclick="removeItem('${_item.mshied_courseid}');"
                        type="button"
                        class="btn-close btn-pinned"
                        aria-label="Close"
                      ></button>
                      <div class="my-2 my-md-4 mb-md-5 d-flex flex-column ">
                      <span class="badge rounded-pill bg-label-info mb-2">Application Fee   <span class="text-primary">${_item.applicationFee}</span> </span>
                      <span class="badge rounded-pill bg-label-info "> Tuition Fee <span class="text-primary">${_item.tuitionFee}</span> </span>
                      </div>
                      <button
                        type="button"
                        class="btn btn-sm btn-label-primary mt-md-3"
                      >
                        Supply List
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>`);
    });
  }
}

function setRadioTypePayment(){
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
    const myCartDetails = getMyDetails().cartDetails;
    if (!myCartDetails.payType) {
      MessateAlertIformation();
      return;
    }
    $("#modalContinueRegister").modal("show");
  });

  $(".pay-types").change(function () {
    if (this.checked) {
      const payType = $(this).val();
      const myCartDetails = getMyDetails().cartDetails;
      myCartDetails.payType = payType;
      updateMyDetails("cart", myCartDetails);
    }
  });
});
