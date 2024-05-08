// API PROCESSES

function loadingBlockUI() {
  $(".new-student-form").block({
    message: HTMLelementProp.blockUIExistELement,
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

function savePersonalInformation(passWizard) {
  loadingBlockUI();
  const dataToDynamics = getMyDynamicDetails();
  const contactData = dataToDynamics.personalInfo.contact;
  contactData.gendercode = parseInt(contactData.gendercode);

  console.log("dataToDynamics", contactData);
  $(".new-student-form").unblock();
  $.ajax({
    url: REGISTER_ACCOUNT,
    type: "POST",
    data: JSON.stringify({ contact: contactData }),
    dataType: "json",
    contentType: "application/json",
    success: function (data) {
      if (data.length) {
        passWizard.to(FORM_STEPS.HOUSING);
        updateFormSteps(FORM_STEPS.HOUSING);
        setItemStore("dynamicsAPIResult", data);
      }
    },
    complete: function () {
      $(".new-student-form").unblock();
    },
    error: function () {
      generiErrorMessage();
    },
  });
}

function getHousingPayload() {
  const dataToDynamics = getMyDynamicDetails();
  const contactAPI = getDynamicDetailsFromAPI();

  const contactid = contactAPI[0].contactid;
  const contactDataID = contactAPI[0]["@odata.id"];
  const contactPath = contactAPI[0]["@odata.editLink"];
  const offCampusMealPlang = $("#cr711_offcampusmealplans").val();
  const housingOption = $("#cr711_housingoption").val();
  const housingPreference = $("#cr711_preference").val();
  const adaHousing = $("input[name='cr711_adahousingneeded']:checked").val();

  const housingPrefText = {
    1: "On-Campus",
    2: "Off-Campus",
  };
  const contact = dataToDynamics.personalInfo.contact;
  const housingTypes = housingPrefText[housingPreference];

  const formPayload = {
    housing: {
      cr711_adahousingneeded: parseInt(adaHousing),
      cr711_contactPath: contactPath,
      cr711_contactId: contactid,
      cr711_housingtype: housingTypes,
      cr711_housingoption: parseInt(housingOption),
      cr711_offcampusmealplans: parseInt(offCampusMealPlang),
      cr711_preference: parseInt(housingPreference),
      cr711_studenthousingid: "",
    },
  };
  return formPayload;
}

function getListValues() {
  const hasItem = $(".form-repeater div[data-repeater-item]").length;
  let repeaterValues = hasItem
    ? $(".form-repeater").repeaterVal()
    : { "group-a": [] };
  const source = getHousingDetailsFromAPI();
  const memberFormList = repeaterValues["group-a"];
  let shapePayload = [];

  if (memberFormList.length) {
    shapePayload = memberFormList
      .map((_data) => {
        _data.cr711_gender = parseInt(_data.cr711_gender);
        _data.cr711_housingsource = source["@odata.editLink"];
        return _data;
      })
      .filter(
        (_data) =>
          _data.cr711_firstname || _data.cr711_lastname || _data.cr711_firstname
      );
  }
  return shapePayload;
}

function saveHousingDetailsLocal() {
  console.log("ListValues", getListValues());
  const dataToDynamics = getMyDynamicDetails();
  dataToDynamics.housing = getHousingPayload();
  dataToDynamics.housing.members = getListValues();

  updateMyDetails("dynamics", dataToDynamics);
}

function SaveHousingMembers() {
  const remapItems = getListValues();
  // const saveItems = (index) => {
  //   if (index < remapItems.length) {
  //     $.ajax({
  //       url: ADD_HOUSING_MEMBERS,
  //       type: "POST",
  //       data: JSON.stringify(remapItems[index]),
  //       dataType: "json",
  //       contentType: "application/json",
  //       success: function (response) {
  //         console.log("Item saved: " + response);
  //         saveItems(index + 1); // Recursive call to save next item
  //       },
  //       error: function () {
  //         generiErrorMessage();
  //         $(".new-student-form").unblock();
  //       },
  //     });
  //   } else {
  //     $(".new-student-form").unblock();
  //     console.log("All items saved successfully!");
  //     saveHousingDetailsLocal();

  //   }
  // };
  // saveItems(0);
}

function saveHousingInformation(passWizard) {
  loadingBlockUI();
  const housingPayload = getHousingPayload();
  $.ajax({
    url: ADD_HOUSING,
    type: "POST",
    data: JSON.stringify(housingPayload),
    dataType: "json",
    contentType: "application/json",
    success: function (data) {
      console.log(data);
      const isObject = typeof data === "object";
      if (isObject && data.hasOwnProperty("statecode")) {
        passWizard.to(FORM_STEPS.TERMS);
        updateFormSteps(FORM_STEPS.TERMS);
        setItemStore("housingAPIResult", data);
        SaveHousingMembers();
      }
    },
    error: function () {
      generiErrorMessage();
    },
  });
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
            passWizard.to(FORM_STEPS.ACCOUNT);
            updateFormSteps(FORM_STEPS.ACCOUNT);
          });
      } else {
        updateFormSteps(FORM_STEPS.PERSONAL);
        ifUserNotExistUpdateInfo(payload.contact);
      }
    },
    complete: function () {
      $(".new-student-form").unblock();
      passWizard.next();
    },
    error: function () {
      generiErrorMessage();
      passWizard.to(FORM_STEPS.ACCOUNT);
    },
  });
}

function updateTermsAgreement() {
  const dataToDynamics = getMyDynamicDetails();
  dataToDynamics.terms = true;
  updateMyDetails("dynamics", dataToDynamics);
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
      cr711_registrationprocedure: 1,
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
    if (
      ["address1_stateorprovince", "gendercode", "address1_country"].includes(
        key
      )
    ) {
      $(".dd-" + key)
        .val(contact[key])
        .change();
      setTimeout(() => {
        const valueByText = $(".dd-" + key + " option:selected").text();
        $(".dd-" + key + "-summary").val(valueByText);
      }, 200);
    } else {
      $(".dd-" + key).val(contact[key]);
      $(".dd-" + key).html(contact[key]);
    
    }
  });
}

function updateDynmicContactDetailsForm() {
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
 
});
