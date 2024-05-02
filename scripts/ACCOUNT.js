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

$(document).ready(function () {
  PopulateForm();
  $(".final-button-steps").click(function () {
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
  });
});
