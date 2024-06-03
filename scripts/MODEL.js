const ifNoInstructor = (instructorName) => {
   const name = 'Instructor Not Assigned';
   if (instructorName) {
      return instructorName;
   }
   return name;
};

const ifNoStartDate = (dateStartParams) => {
   const dateStart = 'No confirmed starting date';
   if (dateStartParams) {
      return dateStartParams;
   }
   return dateStart;
};

const ifNoLevel = (level) => {
   const label = 'No predetermined level';
   if (level) {
      return level;
   }
   return label;
};

const ifNoFees = (fees) => {
   const label = '0.00';
   return fees ? fees : label;
};

const ifNosemester = (semester) => {
   const label = 'Session not yet indicated';
   return semester ? semester : label;
};

const ifNoFeesRawValues = (fees) => {
   const label = 0;
   return fees ? fees : label;
};

const isNoImage = (img) => {
   const src =
      'https://penland.org/wp-content/uploads/2017/03/peters-762x1024.jpg';
   return img ? img : src;
};

function IworkShopModel(workshopData = []) {
   if (!workshopData) {
      return workshopData;
   }
   return workshopData.map((_data) => {
      _data.workshopLevel = ifNoLevel(
         _data['hso_workshoplevel@OData.Community.Display.V1.FormattedValue']
      );

      _data.instructor = ifNoInstructor(
         _data[
            '_hso_instructor_value@OData.Community.Display.V1.FormattedValue'
         ]
      );

      _data.startDate = ifNoStartDate(
         _data['mshied_startdate@OData.Community.Display.V1.FormattedValue']
      );

      _data.startDateHumanReadable = moment(_data.startDate).format(
         'MMMM d, YYYY'
      );

      _data.semester = ifNosemester(
         _data[
            '_cr711_semesterandsession_value@OData.Community.Display.V1.FormattedValue'
         ]
      );
      //STUDIO

      _data.studioTitle =
         _data[
            'new_cr711_newtable_workshop_mshied_course.cr711_displaytitleofthestudio'
         ];

      _data.studioDescription =
         _data['new_cr711_newtable_workshop_mshied_course.new_description'];

      _data.applicationFee = ifNoFees(
         _data[
            'cr711_applicationfee_base@OData.Community.Display.V1.FormattedValue'
         ]
      );
      _data.tuitionFee = ifNoFees(
         _data[
            'cr711_tuitionfee_base@OData.Community.Display.V1.FormattedValue'
         ]
      );

      // CAMPUS

      _data.campusType =
         _data['hso_workshoptype@OData.Community.Display.V1.FormattedValue'];

      _data.sessionsPrices = ifNosemester(
         _data[
            '_hso_workshoppricing_value@OData.Community.Display.V1.FormattedValue'
         ]
      );

      // RAW VALUES
      _data.applicationFeeRawValue = ifNoFeesRawValues(
         _data['cr711_applicationfee']
      );
      _data.tuitionFeeRawValue = ifNoFeesRawValues(_data['cr711_tuitionfee']);
      _data.imageURL = isNoImage(_data['hso_imageurl']);

      const hasStudio =
         _data[
            'StudioTypes.new_studiotypes@OData.Community.Display.V1.FormattedValue'
         ];

      _data.cleanStudioSearch =
         _data[
            'StudioTypes.new_studiotypes@OData.Community.Display.V1.FormattedValue'
         ];

      if (hasStudio) {
         _data.studioType = hasStudio.split('; ');
      } else {
         _data.studioType = [];
      }

      return _data;
   });
}

function IStudios(studios = []) {
   return studios.map((_data) => ({
      new_maintype: _data['new_maintype'],
      cr711_studioid: _data['cr711_studioid'],
      FormattedLabel:
         _data[
            'new_studiotypes@OData.Community.Display.V1.FormattedValue'
         ].split('; '),
      FormattedValue: _data['new_studiotypes'],
   }));
}

let datails = {
   hasInitialize: false,
   paymentDetails: {
      items: [],
      productList: [],
      subTotal: 0,
      total: 0,
      applicaiontFee: 0,
      tax: 0,
      tutionFee: 0,
      payType: '',
   },
   dynamicDetails: {
      formWizardCurrentSteps: 1,
      personalInfo: {
         contact: {
            firstname: '',
            middlename: '',
            lastname: '',
            birthdate: '',
            emailaddress1: '',
            emailaddress2: '',
            emailaddress3: '',
            gendercode: '',
            mobilephone: '',
            address1_postalcode: '',
            address1_city: '',
            address1_stateorprovince: '',
            address1_country: '',
            adx_identity_passwordhash: '',
            adx_identity_username: '',
            cr711_registrationprocedure: 1,
            mshied_race_: '',
            hso_blackindigenousorpersonofcolor: '',
            mshied_accommodations: '',
            mshied_preferredlanguage: '',
            hso_lgbtqiaidentification: '',
            mshied_limitedlanguageproficiency: '',
            hso_lgbtqiaidentification: '',
            mshied_disability: '',
            mshied_accommodations: '',
            mshied_homelanguage: ''
         },
      },

      housing: {
         housing: {},
         members: [],
      },
      applicationID: FuseUtils.generateGUID(),
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

   setItemStore('myDetails', datails);
});
