function getCurrentData(root = 'dynamicDetails', subData = 'personalInfo') {
   const getMyFullDetail = getMyFullDetails();

   return getMyFullDetail[root][subData];
}

function getDetailsUserFromAPI() {
   const userDetails = getDynamicDetailsFromAPI();
   return userDetails[0];
}

function personalInfoPayload() {
   const data = getCurrentData();
   data.contact.gendercode = parseInt(data.contact.gendercode);
   data.contact.hso_blackindigenousorpersonofcolor = parseInt(
      data.contact.hso_blackindigenousorpersonofcolor
   );
   data.contact.hso_lgbtqiaidentification = parseInt(
      data.contact.hso_lgbtqiaidentification
   );
   data.contact.mshied_homelanguage = parseInt(
      data.contact.mshied_homelanguage
   );
   data.contact.mshied_limitedlanguageproficiency = parseInt(
      data.contact.mshied_limitedlanguageproficiency
   );
   data.contact.mshied_preferredlanguage = parseInt(
      data.contact.mshied_preferredlanguage
   );
   data.contact.mshied_disability = parseInt(
      data.contact.mshied_disability
   );
   data.contact.mshied_race_ = parseInt(
      data.contact.mshied_race_
   );
   return data;
}

function workShopItemsPayload(remarks = '') {
   const workshops = getCurrentData('paymentDetails', 'items');
   const appID = applcationLookupID();
   const UID = FuseUtils.generateGUID();
   const user = getDetailsUserFromAPI();

   return workshops.map((_data) => {
      return {
         cr711_itemuid: UID,
         cr711_student: user['@odata.editLink'],
         cr711_status: 1, //PENDING
         cr711_registrationstatus: '',
         cr711_ApplicationID: appID,
         cr711_workshop: _data['@odata.editLink'],
         cr711_startdate: _data.startDate,
         cr711_enddate: _data['mshied_enddate'],
         cr711_remarks: remarks,
         cr711_temporarypriceapplicationfee: _data.cr711_applicationfee,
         cr711_temporarypricetuitionfee: _data.cr711_tuitionfee,
      };
   });
}

function applicationPayload() {
   const adminApprovalStatus = `mshied_registrationstatuses(0d815a73-ad14-ed11-b83d-0022480a72f6)`;
   const user = getDetailsUserFromAPI();

   return {
      cr711_Applicationstatus: adminApprovalStatus,
      cr711_ApplicationID: 'APP-' + FuseUtils.generateGUID(),
      cr711_Contact: user['@odata.editLink'],
   };
}

function housingPayload() {
   const housing = getCurrentData('dynamicDetails', 'housing').housing;
   const contactAPI = getDetailsUserFromAPI();
   housing.cr711_ApplicationID = applcationLookupID();
   housing.cr711_contactPath = contactAPI['@odata.editLink'];
   housing.cr711_contactId = contactAPI.contactid;

   return housing;
}

function membersPayload() {
   const members = getCurrentData('dynamicDetails', 'housing').members;
   const source = getHousingDetailsFromAPI();
   return members.map((_data) => {
      _data.cr711_housingsource = source['@odata.editLink'];
      return _data;
   });
}
