function addHTMLELementCartItemsSummary() {
  const myCart = getMyCartDetails();
  const cart = myCart.items;
  if (cart.length) {
    $(".total-workshops").html(`(${cart.length})`);
    $(".cart-item-list-summary").html("");
    cart.forEach(function (_item) {
      $(".cart-item-list-summary").append(HTMLelementProp.cartSummary(_item));
    });
  }
}

function housingSummary() {
  const idToLabel = {
    cr711_offcampusmealplans: {
      1: "All Meals",
      2: "Lunch and Dinner",
      3: "Breakfast only",
      4: "Lunch only",
      5: "Dinner only",
      6: "No Meals",
      7: "Breakfast and Lunch",
    },
    cr711_housingoption: {
      1: "Female Housing",
      2: "Male Housing",
      3: "Off Campus Housing",
      4: "Gender-Inclusive Housing",
    },
    cr711_preference: {
      1: "On-Campus Housing",
      2: "Off-Campus Housing",
    },
    cr711_adahousingneeded: {
      1: "Yes",
      2: "No",
      3: "Not Selected",
    },
  };

  const appendListMembers = (item) => {
    const gender = {
      1: "male",
      2: "female",
    };
    return `<li class="list-group-item flex-fill p-2 text-heading">
  <h6 class="d-flex align-items-center gap-1">
  <i class='bx bx-${gender[item.cr711_gender]}'></i>${item.cr711_firstname} ${
      item.cr711_lastname
    }
  </h6>
</li>`;
  };

  const dataToDynamics = getMyDynamicDetails();
  const housing = dataToDynamics.housing;
  const housingData = housing.housing;
  const members = dataToDynamics.housing.members;
  const preference =
    idToLabel["cr711_preference"][housingData.cr711_preference];
  const options =
    idToLabel["cr711_housingoption"][housingData.cr711_housingoption];

  const meals =
    idToLabel["cr711_offcampusmealplans"][housingData.cr711_offcampusmealplans];
  const ada =
    idToLabel["cr711_adahousingneeded"][housingData.cr711_adahousingneeded];
  $(".summary_cr711_preference").html(preference);
  $(".summary_cr711_housingoption").html(options);
  housingData.cr711_preference;
  $(".summary_cr711_offcampusmealplans").html(meals);
  $(".summary_cr711_adahousingneeded").html(ada);

  $(".house-list-members")
    .append(` <li class="list-group-item flex-fill p-2 text-heading">
  <h6 class="d-flex align-items-center gap-1">
  <i class='bx bxs-home-alt-2' ></i>Housing Members
  </h6>
</li>`);

  if (members.length) {
    members.forEach(function (_item) {
      $(".house-list-members").append(appendListMembers(_item));
    });
  }
}

function summaryReviewSections() {
  addHTMLELementCartItemsSummary();
  housingSummary();
}

$(document).ready(function () {
  summaryReviewSections();
});
