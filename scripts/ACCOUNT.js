// API PROCESSES

function loadingBlockUI() {
  $(".new-student-form").block({
    message: longMessage.blockUIExistELement,
    css: {
      backgroundColor: "transparent",
      border: "0",
    },
    overlayCSS: {
      backgroundColor: "#fff",
      opacity: 0.8,
    },
  });
}

function ifUserNotExistUpdateInfo(data) {
  const dataToDynamics = getMyDynamicDetails();
  const contact = dataToDynamics.personalInfo.contact;
  contact.emailaddress1 = data.emailaddress1;
  contact.emailaddress2 = data.emailaddress2;
  contact.adx_identity_username = data.username;
  contact.adx_identity_passwordhash = data.password;
  dataToDynamics.personalInfo.contact = contact;
  updateMyDetails("dynamics", dataToDynamics);
}

function checkUserExist(passWizard) {
  loadingBlockUI();
  const emaiAddress = $(".dd-emailaddress1").val();
  const username = $(".dd-adx_identity_username").val();
  const password = $(".dd-adx_identity_passwordhash").val();

  const payload = {
    contact: {
      emailaddress1: emaiAddress,
      emailaddress2: emaiAddress,
      username: username,
      password: password,
    },
  };

  $.ajax({
    url: CHECK_USER,
    type: "POST",
    data: JSON.stringify(payload),
    dataType: "json",
    contentType: "application/json",
    success: function (data) {
      if (data.length) {
        $(".message-body-modal").html(longMessage.userExist);
        $("#modalUserExist")
          .modal("show")
          .on("hidden.bs.modal", function (e) {
            passWizard.to(1);
            updateFormSteps(1)
          });
      } else {
        updateFormSteps(2)
        ifUserNotExistUpdateInfo(payload.contact);
        
      }
    },
    complete: function () {
      $(".new-student-form").unblock();
      passWizard.next();
    },
    error: function () {
      generiErrorMessage();
      passWizard.to(1);
    },
  });
}

function testAPI() {
  const payload = {
    contact: {
      firstname: "Thurman",
      middlename: "Catalina Schuppe",
      lastname: "Mante",
      birthdate: "07/13/1992",
      emailaddress1: "bert.hair@contoso.edu",
      gendercode: parseInt("2"),
      mobilephone: "562 222 2222",
      address1_postalcode: "91226-7549",
      address1_city: "West Lafayette",
      address1_stateorprovince: "OH",
      address1_country: "MU",
      adx_identity_passwordhash: "t0t9Gt82UOY6rwn",
      adx_identity_username: "WayneKing",
    },
  };

  $.ajax({
    url: REGISTER_ACCOUNT,
    type: "POST",
    data: JSON.stringify(payload),
    dataType: "json",
    contentType: "application/json",
    success: function (data) {
      console.log(data);
    },
  });
}

function PopulateForm() {
  const dataToDynamics = getMyDynamicDetails();
  const contact = dataToDynamics.personalInfo.contact;
  Object.keys(contact).forEach(function (key) {
    if (key === "adx_identity_passwordhash") {
      $(".dd-adx_identity_passwordhash_22").val(contact[key]);
    }
    if (["address1_stateorprovince", "gendercode"].includes(key)) {
      $(".dd-" + key)
        .val(contact[key])
        .change();
    } else {
      $(".dd-" + key).val(contact[key]);
    }
  });
}

function updateDynmicContactDetailsForm(){
    const dataToDynamics = getMyDynamicDetails();

    const objectToArray = Object.keys(dataToDynamics.personalInfo.contact).map(
      (key) => ({
        [key]: $(".dd-" + key).val(),
      })
    );

    const plainObject = objectToArray.reduce((acc, obj) => {
      return { ...acc, ...obj };
    }, {});

    dataToDynamics.personalInfo.contact = plainObject;
    updateMyDetails("dynamics", dataToDynamics);
    console.log("plainObject", plainObject);
}

$(document).ready(function () {
  PopulateForm();
  $(".final-button-steps").click(function () {
    
  });
});
