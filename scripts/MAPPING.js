function getCurrentData(root = "dynamicDetails", subData = "personalInfo") {
  const getMyFullDetail = getMyFullDetails();

  return getMyFullDetail[root][subData];
}

function getDetailsUserFromAPI() {
  const userDetails = getDynamicDetailsFromAPI();
  return userDetails[0];
}


function personalInfoPayload() {
    return getCurrentData();
}

function workShopItemsPayload(remarks = "") {
  const workshops = getCurrentData("paymentDetails", "items");
  const appID = applcationLookupID();
  const UID = FuseUtils.generateGUID();
  const user = getDetailsUserFromAPI();

  //
  // [@odata.editLink]
  return workshops.map((_data) => {
    return {
      cr711_itemuid: UID,
      cr711_student: user["@odata.editLink"],
      cr711_status: 1, //PENDING
      cr711_registrationstatus: adminApprovalStatus,
      cr711_ApplicationID: appID,
      cr711_workshop: _data["@odata.editLink"],
      cr711_startdate: _data.startDate,
      cr711_enddate: _data["mshied_enddate"],
      cr711_remarks: remarks,
      cr711_temporarypriceapplicationfee: _data.cr711_applicationfee,
      cr711_temporarypricetuitionfee: _data.cr711_tuitionfee,
    };
  });
}

function applicationPayload() {
  const adminApprovalStatus = `mshied_registrationstatuses(0d815a73-ad14-ed11-b83d-0022480a72f6)`;
  return {
    cr711_Applicationstatus: adminApprovalStatus,
    cr711_ApplicationID: "APP-" + FuseUtils.generateGUID(),
    cr711_Contact: "",
  };
}

function housingPayload() {
  const housing = getCurrentData("dynamicDetails", "housing").housing;
  housing.cr711_ApplicationID = applcationLookupID();
  return housing;
}

function membersPayload() {
  const members = getCurrentData("dynamicDetails", "housing").members;

  return members;
}
