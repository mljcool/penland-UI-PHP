const ifNoInstructor = (instructorName) => {
  const name = "Instructor Not Assigned";
  if (instructorName) {
    return instructorName;
  }
  return name;
};

const ifNoStartDate = (dateStartParams) => {
  const dateStart = "No confirmed starting date";
  if (dateStartParams) {
    return dateStartParams;
  }
  return dateStart;
};

const ifNoLevel = (level) => {
  const label = "No predetermined level";
  if (level) {
    return level;
  }
  return label;
};

const ifNoFees = (fees) => {
  const label = "0.00";
  return fees ? fees : label;
};

const ifNosemester = (semester) => {
  const label = "Semester not yet indicated";
  return semester ? semester : label;
};

const ifNoFeesRawValues = (fees) => {
  const label = 0;
  return fees ? fees : label;
};

function IworkShopModel(workshopData = []) {
  if (!workshopData) {
    return workshopData;
  }
  return workshopData.map((_data) => {
    _data.workshopLevel = ifNoLevel(
      _data["hso_workshoplevel@OData.Community.Display.V1.FormattedValue"]
    );

    _data.instructor = ifNoInstructor(
      _data["_hso_instructor_value@OData.Community.Display.V1.FormattedValue"]
    );

    _data.startDate = ifNoStartDate(
      _data["mshied_startdate@OData.Community.Display.V1.FormattedValue"]
    );

    _data.startDateHumanReadable = moment(_data.startDate).format(
      "MMMM d, YYYY"
    );

    _data.semester = ifNosemester(
      _data[
        "_cr711_semesterandsession_value@OData.Community.Display.V1.FormattedValue"
      ]
    );
    //STUDIO

    _data.studioTitle =
      _data[
        "new_cr711_newtable_workshop_mshied_course.cr711_displaytitleofthestudio"
      ];

    _data.studioDescription =
      _data["new_cr711_newtable_workshop_mshied_course.new_description"];

    _data.applicationFee = ifNoFees(
      _data[
        "cr711_applicationfee_base@OData.Community.Display.V1.FormattedValue"
      ]
    );
    _data.tuitionFee = ifNoFees(
      _data["cr711_tuitionfee_base@OData.Community.Display.V1.FormattedValue"]
    );

    // RAW VALUES
    _data.applicationFeeRawValue = ifNoFeesRawValues(
      _data["cr711_applicationfee"]
    );
    _data.tuitionFeeRawValue = ifNoFeesRawValues(_data["cr711_tuitionfee"]);

    const hasStudio =
      _data[
        "new_cr711_newtable_workshop_mshied_course.new_studiotypes@OData.Community.Display.V1.FormattedValue"
      ];

    if (hasStudio) {
      _data.studioType = hasStudio.split("; ");
    } else {
      _data.studioType = [];
    }

    return _data;
  });
}

let datails = {
  hasInitialize: false,
  cartDetails: {
    items: [],
    subTotal: 0,
    total: 0,
    payType: "",
  },
  dynamicDetails: {
    formWizardCurrentSteps: 1,
    personalInfo: {
      contact: {
        firstname: "",
        middlename: "",
        lastname: "",
        birthdate: "",
        emailaddress1: "",
        emailaddress2: "",
        emailaddress3: "",
        gendercode: 1,
        mobilephone: "",
        address1_postalcode: "",
        address1_city: "",
        address1_stateorprovince: "",
        address1_country: "",
        adx_identity_passwordhash: "",
        adx_identity_username: "",
      },
    },
    housing: {},
    paymentStripe: {},
    terms: false,
  },
};

$(document).ready(function () {
  // SHAPE CLIENT DETAILS INFORMATION

  const ifInitialized = getMyFullDetails();
  if (ifInitialized && ifInitialized.hasInitialize) {
    return;
  }

  setItemStore("myDetails", datails);
});
