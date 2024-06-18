class FuseUtils {
   /**
    * Filter array by string
    *
    * @param mainArr
    * @param searchText
    * @returns {any}
    */
   static filterArrayByString(mainArr, searchText) {
      if (searchText === '') {
         return mainArr;
      }

      searchText = searchText.toLowerCase();

      return mainArr.filter((itemObj) => {
         return this.searchInObj(itemObj, searchText);
      });
   }

   /**
    * Search in object
    *
    * @param itemObj
    * @param searchText
    * @returns {boolean}
    */
   static searchInObj(itemObj, searchText) {
      for (const prop in itemObj) {
         if (!itemObj.hasOwnProperty(prop)) {
            continue;
         }

         const value = itemObj[prop];

         if (typeof value === 'string') {
            if (this.searchInString(value, searchText)) {
               return true;
            }
         } else if (Array.isArray(value)) {
            if (this.searchInArray(value, searchText)) {
               return true;
            }
         }

         if (typeof value === 'object') {
            if (this.searchInObj(value, searchText)) {
               return true;
            }
         }
      }
   }

   /**
    * Search in array
    *
    * @param arr
    * @param searchText
    * @returns {boolean}
    */
   static searchInArray(arr, searchText) {
      for (const value of arr) {
         if (typeof value === 'string') {
            if (this.searchInString(value, searchText)) {
               return true;
            }
         }

         if (typeof value === 'object') {
            if (this.searchInObj(value, searchText)) {
               return true;
            }
         }
      }
   }

   /**
    * Search in string
    *
    * @param value
    * @param searchText
    * @returns {any}
    */
   static searchInString(value, searchText) {
      return value.toLowerCase().includes(searchText);
   }

   /**
    * Generate a unique GUID
    *
    * @returns {string}
    */
   static generateGUID() {
      function S4() {
         return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
      }

      return S4() + S4();
   }

   /**
    * Toggle in array
    *
    * @param item
    * @param array
    */
   static toggleInArray(item, array) {
      if (array.indexOf(item) === -1) {
         array.push(item);
      } else {
         array.splice(array.indexOf(item), 1);
      }
   }

   /**
    * Handleize
    *
    * @param text
    * @returns {string}
    */
   static handleize(text) {
      return text
         .toString()
         .toLowerCase()
         .replace(/\s+/g, '-') // Replace spaces with -
         .replace(/[^\w\-]+/g, '') // Remove all non-word chars
         .replace(/\-\-+/g, '-') // Replace multiple - with single -
         .replace(/^-+/, '') // Trim - from start of text
         .replace(/-+$/, ''); // Trim - from end of text
   }
}

function searhObjectByArrayStudio(mainArr = [], checkArray = []) {
   if (!checkArray.length) {
      return mainArr;
   }
   const filteredArray = mainArr.filter((item) =>
      item.studioType.some((type) => checkArray.includes(type))
   );
   return filteredArray;
}

function filterByDateRange(array, startDate, endDate) {
   if (!startDate && !endDate) {
      return array;
   }
   return array.filter((obj) => {
      const objStartDate = new Date(obj.mshied_startdate);
      const objEndDate = new Date(obj.mshied_enddate);
      return objStartDate >= startDate && objEndDate <= endDate;
   });
}

function getURLParameters(queryID = 'workshopID') {
   const urlParams = new URLSearchParams(window.location.search);
   return urlParams.get(queryID);
}

function parseStore(data) {
   return JSON.parse(data);
}

function setItemStore(name = '', data = []) {
   localStorage.setItem(name, JSON.stringify(data));
}

function getProductionListStore() {
   const productList = parseStore(localStorage.getItem('productsData'));
   return productList;
}

function getDataContactWaitlist() {
   const waitList = parseStore(
      localStorage.getItem('dynamicsAPIResultWaitlist')
   );
   return waitList;
}

function getMyWorkshopAndEnrollment() {
   const workshop = parseStore(localStorage.getItem('myWorkshopAndEnrollment'));
   return workshop;
}

function getSalesOrderDetails() {
   const salesOrder = parseStore(localStorage.getItem('salesOrder'));
   return salesOrder;
}

function getApplicationData() {
   const dynamicsAPIResult = parseStore(
      localStorage.getItem('applicationData')
   );
   return dynamicsAPIResult;
}

function applcationLookupID() {
   const appID = getApplicationData();
   return appID['@odata.editLink'];
}

function getDynamicDetailsFromAPI() {
   const dynamicsAPIResult = parseStore(
      localStorage.getItem('dynamicsAPIResult')
   );
   return dynamicsAPIResult;
}

function getHousingDetailsFromAPI() {
   const dynamicsAPIResult = parseStore(
      localStorage.getItem('housingAPIResult')
   );
   return dynamicsAPIResult;
}

function hasLocalListOfWorkShops() {
   const workShopItems = parseStore(localStorage.getItem('workshopItems'));
   if (Array.isArray(workShopItems) && !!workShopItems.length) {
      return workShopItems;
   }
   return false;
}

function getCurrentSelectedWorkShop() {
   const workShopItems = parseStore(
      localStorage.getItem('currentSelectedWorkShop')
   );

   return workShopItems;
}

function getMyFullDetails() {
   const myDetails = parseStore(localStorage.getItem('myDetails'));
   return myDetails;
}

function getUserTokenDetails() {
   const userToken = parseStore(localStorage.getItem('loginAccess'));
   return userToken;
}

function getLoginDetails() {
   const userToken = parseStore(localStorage.getItem('loginDetails'));
   return userToken;
}

function getMyDynamicDetails() {
   const myDetails = parseStore(localStorage.getItem('myDetails'));
   return (myDetails || {}).dynamicDetails;
}

function updateFormSteps(current = 0) {
   const dataToDynamics = getMyDynamicDetails();
   dataToDynamics.formWizardCurrentSteps = current;
   updateMyDetails('dynamics', dataToDynamics);
}

function getCurrenIndex() {
   const dataToDynamics = getMyDynamicDetails();
   return (dataToDynamics || {}).formWizardCurrentSteps;
}

// CURRENT FOR WAITLIST ONLY
function getUserDetailsStore() {
   if (checkHasSession()) {
      return getLoginDetails()[1];
   }
   return getDataContactWaitlist();
}

function getMyCartDetails() {
   const myDetails = parseStore(localStorage.getItem('myDetails'));
   return (myDetails || {}).paymentDetails;
}

function updateMyDetails(datType = 'cart', data) {
   const myDetails = getMyFullDetails();
   myDetails.hasInitialize = true;
   if (datType === 'cart') {
      myDetails.paymentDetails = data;
   } else {
      myDetails.dynamicDetails = data;
   }

   setItemStore('myDetails', myDetails);
}

function parserToFixedto(data) {
   if (!data) {
      return 0;
   }
   const amount = parseFloat(data.toFixed(2));
   return amount;
}

const converMoneyProperFormat = (money) => {
   const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
   });

   return formatter.format(money);
};

function computeValueOfCart() {
   const myCart = getMyCartDetails();
   const sum = myCart.items.reduce(
      (total, obj) => {
         total.rawFeePrice += obj.rawFeePrice;
         return total;
      },
      { rawFeePrice: 0, tuitionFeeRawValue: 0, applicationFeeRawValue: 0 }
   );

   const workshopFee = parserToFixedto(sum.rawFeePrice);
   const tuition = parserToFixedto(sum.tuitionFeeRawValue);
   const application = parserToFixedto(sum.applicationFeeRawValue);
   const dueNow = parserToFixedto(workshopFee);

   myCart.workshopFee = workshopFee;
   myCart.applicaiontFee = application;
   myCart.tutionFee = tuition;
   myCart.total = workshopFee;
   updateMyDetails('cart', myCart);

   $('.total-application-fee').html(converMoneyProperFormat(workshopFee));
   $('.total-tuition-fee').html('$' + application);
   $('.due-now').html(converMoneyProperFormat(dueNow));
   $('.over-all-total').html(converMoneyProperFormat(dueNow));
}

function generiErrorMessage() {
   Swal.fire({
      title: 'Error',
      text: 'Sorry, but something went wrong. Please contact the support team.',
      icon: 'error',
      confirmButtonText: 'ok',
   });
}

function ifOffCampusSelectedMessageAler() {
   Swal.fire({
      title: 'Info!',
      text: 'If off-campus option, required to please select a meal plan.',
      icon: 'info',
      customClass: {
         confirmButton: 'btn btn-primary',
      },
      buttonsStyling: false,
   });
}

function groupArr(data, n) {
   var group = [];
   for (var i = 0, j = 0; i < data.length; i++) {
      if (i >= n && i % n === 0) j++;
      group[j] = group[j] || [];
      group[j].push(data[i]);
   }
   return group;
}

function requestOptions(url, data) {
   return {
      url,
      type: 'POST',
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify(data),
   };
}

function fetchPostRequest(data = [], url) {
   const requestOptions = {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
   };

   return fetch(url, requestOptions);
}

function generateToken(n = 32) {
   var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
   var token = '';
   for (var i = 0; i < n; i++) {
      token += chars[Math.floor(Math.random() * chars.length)];
   }
   return token;
}

function initializePopOverAndToolTips() {
   const popoverTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="popover"]')
   );
   popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl, {
         html: true,
         sanitize: false,
      });
   });
   var tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
   );
   tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
   });
}

function PopulateOptionsAndForm() {
   const homeLanguage = $('.dd-mshied_homelanguage');
   const raceEthicityEl = $('.dd-mshied_race_');
   const prefLangEl = $('.dd-mshied_preferredlanguage');
   const stateEl = $('.dd-address1_stateorprovince');
   const countryEl = $('.dd-address1_country');
   const disabilityEl = $('.dd-mshied_disability');

   if (prefLangEl.length) {
      homeLanguage.html('');
      homeLanguage.append('<option label=""></option>');

      prefLangEl.html();
      prefLangEl.append('<option label=""></option>');
      preferredLanguage.forEach(function (_data) {
         homeLanguage.append(
            `<option value="${_data.value}">${_data.name}</option>`
         );
         prefLangEl.append(
            `<option value="${_data.value}">${_data.name}</option>`
         );
      });

      raceEthicityEl.html('');
      raceEthicityEl.append('<option label=""></option>');
      raceEthicity.forEach(function (_data) {
         raceEthicityEl.append(
            `<option value="${_data.value}">${_data.name}</option>`
         );
      });

      stateEl.html('');
      stateEl.append('<option label=""></option>');
      STATES.forEach(function (_data) {
         stateEl.append(
            `<option value="${_data.value}">${_data.name}</option>`
         );
      });

      countryEl.html('');
      countryEl.append('<option label=""></option>');
      COUNTRY.forEach(function (_data) {
         countryEl.append(
            `<option value="${_data.value}">${_data.name}</option>`
         );
      });

      disabilityEl.html('');
      disabilityEl.append('<option label=""></option>');
      static_mshied_disability.forEach(function (_data) {
         disabilityEl.append(
            `<option value="${_data.value}">${_data.name}</option>`
         );
      });
      PopulateForm();
   }
}

function htmlEL(el) {
   const htmlEL = el.split('_')[0] === 'id' ? '#' : '.';
   return $(htmlEL + el);
}

function loadingEffect() {
   $('#authenticate-card').block({
      message: '<div class="spinner-border text-primary" role="status"></div>',
      css: {
         backgroundColor: 'transparent',
         border: '0',
      },
      overlayCSS: {
         backgroundColor: '#fff',
         opacity: 0.8,
      },
   });
}

function wrappEntireHTML() {
   $('html').block({
      message: `<div class="d-flex justify-content-center">
               <div class="sk-swing sk-primary">
                  <div class="sk-swing-dot"></div>
                  <div class="sk-swing-dot"></div>
               </div>
            </div>`,
      css: {
         backgroundColor: 'transparent',
         border: '0',
      },
      overlayCSS: {
         backgroundColor: '#fff',
         opacity: 0.8,
      },
   });
}

function getPATHNameURL() {
   const newURL = window.location.pathname;
   return newURL.split('/');
}

function checkWordExists(str, word = 'login') {
   let regex = new RegExp(`\\b${word}\\b`, 'i'); // 'i' makes it case-insensitive
   return regex.test(str);
}

function redirectToDashboard() {
   const data = getUserTokenDetails();
   if (data) {
      window.location.href = '/dashboard-panel.php';
   }
}

function redirectTo(url) {

   if (url === '/') {
      console.log('UR:', url);
      window.location.href = '/';
      return;
   }

   window.location.href = '/' + url + '.php';
}

function loginPage() {
   window.location.href = '/login.php';
}

function redirectToLogin(lookIsDashboard = false, ifSomeBreach) {
   const data = getUserTokenDetails();
   if (!ifSomeBreach.length) {
      loginPage();
      return;
   }
   if (!data && lookIsDashboard) {
      loginPage();
   }
}

function checkHasSession() {
   const data = getUserTokenDetails();
   const isNull = data ? data.hasOwnProperty('cr711_tokenid') : false;
   return isNull && !!data.cr711_tokenid;
}

function initPopOver(content) {
   $('.conductBehavior')
      .popover({
         trigger: 'manual',
         content: function () {
            var data = `<p>${content}</p> <div class='d-flex justify-content-center'><button type='button' class='btn btn-sm btn-primary'>Write an email</button></div>`;
            return data;
         },
         html: true,
         sanitize: false,
         animation: true,
      })
      .on('click', function () {
         $(this).popover('show');
      });
}

function shapeMyProfile() {
   const userDetails = getLoginDetails();
   if (userDetails && userDetails.length) {
      const myProfile = userDetails[1];
      const acctType =
         'mshied_contacttype@OData.Community.Display.V1.FormattedValue';
      const statecode = 'statecode@OData.Community.Display.V1.FormattedValue';
      const prefLanguage =
         'mshied_preferredlanguage@OData.Community.Display.V1.FormattedValue';
      const formatJoinDate = moment(myProfile.createdon).format(
         'dddd, MMMM D, YYYY'
      );
      const country = COUNTRY.find(
         (_data) => _data.value === myProfile.address1_county
      );
      const stateProvince = STATES.find(
         (_data) => _data.value === myProfile.address1_stateorprovince
      );

      const stateName = (stateProvince || { name: 'N/A' }).name
      const countryName = (country || { name: 'N/A' }).name
      const gendercode = 'gendercode@OData.Community.Display.V1.FormattedValue';
      const conduct =
         'hso_conductflag@OData.Community.Display.V1.FormattedValue';
      htmlEL('u_fullname').html(myProfile.fullname);
      htmlEL('acctType').html(myProfile[acctType]);
      htmlEL('gendercode').html(myProfile[gendercode]);
      htmlEL('prefLanguage').html(myProfile[prefLanguage]);
      htmlEL('mobilephone').html(myProfile.mobilephone);
      htmlEL('statecode').html(myProfile[statecode]);
      htmlEL('emailaddress1').html(myProfile.emailaddress1);
      htmlEL('country').html(countryName);
      htmlEL('createdon').html(formatJoinDate);
      htmlEL('address1_city').html(myProfile.address1_city);
      htmlEL('address1_stateorprovince').html(stateName);

      //MORE COMPLEX
      const checkConduct = myProfile[conduct];
      const emoji = {
         None: '😇',
         Yellow: '😩',
         Red: '😡',
      };
      const message = {
         None: `All clear! You're as good as gold!`,
         Yellow: `Proceed with caution! You're teetering on the edge of mischief!`,
         Red: ` Danger zone! You've hit the red alert of naughtiness!`,
      };
      const titleCondcut = {
         None: `Good: 🌟 (None)`,
         Yellow: `Warning: ⚠️ (Yellow)`,
         Red: `Bad: 🚨 (Red)`,
      };
      htmlEL('conductStatus').html(`${emoji[checkConduct]}`);
      htmlEL('conductBehavior').attr('title', `${titleCondcut[checkConduct]}`);
      initPopOver(message[checkConduct]);


      const search_query = stateName;

      saveToStorage(myProfile);
      GetUserAvatar(myProfile.contactid);
      GetWeatherReport(search_query);
      checkAount(myProfile);
   }

}

function getItemStoreAvatar() {
   const MyAvatar = parseStore(localStorage.getItem('MyAvatar'));
   if (MyAvatar) {
      $('.hso_photo').attr('src', "data:image/jpg;base64," + MyAvatar);
   }
}

function GetWeatherReport(search_query = '') {

   const jsonData = {
      requestParams: {
         customerID: '',
         search_query,
      },
   };

   $.get({
      url: Weather_Report,
      data: jsonData,
      contentType: 'application/json',
      success: function (response = []) {
         console.log('Weather_Report', response);
         setItemStore('Weather_Report', response)
         const weatherPart = response.responses.weather.current;
         $('.tempNo').html(weatherPart.temp);
         $('.temperature').html(response.units.temperature);
         $('.icon_weather').attr('src', weatherPart.urlIcon);

      },
      complete: function (data) {

      },
      error: function (xhr, status, error) { },
   });
}


function GetUserAvatar(customerID = '') {
   const jsonData = {
      requestParams: {
         customerID,
      },
   };

   $.get({
      url: Get_User_Avatar,
      data: jsonData,
      contentType: 'application/json',
      success: function (response = []) {
         if (response.length) {
            console.log('Get_User_Avatar', response);
            setItemStore('MyAvatar', response[0].hso_photo)
            getItemStoreAvatar();
         }
      },
      complete: function (data) {

      },
      error: function (xhr, status, error) {
         genericError();
      },
   });
}


function genericError() {
   Swal.fire({
      title: "Yikes!",
      text: "something went wrong.",
      icon: 'error',
      showCancelButton: false,
      confirmButtonText: 'close',
      customClass: {
         confirmButton: 'btn btn-primary me-2',
         cancelButton: 'btn btn-label-secondary',
      },
      buttonsStyling: !1,
   })
}

function saveToStorage(newData = {}) {
   console.log('newData', newData);
   const preservData = Object.assign({}, newData)
   const formattedStr = `@OData.Community.Display.V1.FormattedValue`;
   const odata = `@odata.type`;
   preservData.birthdate = preservData['birthdate' + formattedStr];

   delete preservData['@odata.editLink'];
   delete preservData['@odata.etag'];
   delete preservData['@odata.id'];
   delete preservData['@odata.type'];
   delete preservData['mshied_contacttype' + formattedStr];
   delete preservData['hso_conductflag' + formattedStr];
   delete preservData['birthdate' + formattedStr];
   delete preservData['mshied_contacttype' + formattedStr];
   delete preservData['mshied_homelanguage' + formattedStr];
   delete preservData['mshied_disability' + formattedStr];
   delete preservData['mshied_limitedlanguageproficiency' + formattedStr];
   delete preservData['mshied_preferredlanguage' + formattedStr];
   delete preservData['mshied_race_' + formattedStr];
   delete preservData['hso_lgbtqiaidentification' + formattedStr];
   delete preservData['createdon' + formattedStr];
   delete preservData['hso_blackindigenousorpersonofcolor' + formattedStr];
   delete preservData['gendercode' + formattedStr];
   delete preservData['cr711_registrationprocedure' + formattedStr];
   delete preservData['cr711_registrationprocedure'];
   delete preservData['contactid' + odata];
   delete preservData['birthdate' + odata];
   delete preservData['createdon@odata.type'];
   delete preservData['createdon'];

   console.log('preservData', preservData);
   const myDetails = getMyFullDetails();

   myDetails.dynamicDetails.personalInfo.contact = preservData;
   myDetails.dynamicDetails.personalInfo.contact.adx_identity_username = '';
   myDetails.dynamicDetails.personalInfo.contact.adx_identity_passwordhash = '';
   setItemStore('myDetails', myDetails);
   setTimeout(() => {
      PopulateForm()
   }, 500);

}

function resetData() {
   const myCart = getMyCartDetails();
   myCart.items = [];
   myCart.productList = [];
   myCart.total = 0;
   myCart.totalProductPrices = 0;
   myCart.overAllTotalFormatted = '$0';
   myCart.workshopFee = 0;
   updateMyDetails('cart', myCart);
   updateFormSteps(0);
}

function padZero(num) {
   return num < 10 ? '0' + num : num;
}

function updateTime() {
   setInterval(function () {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      const ampm = hours >= 12 ? 'PM' : 'AM';

      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'

      const strTime = `${padZero(hours)}:${padZero(minutes)} ${ampm}`;

      $('.running-time').html(strTime);
   }, 1000);
}
updateTime();

// FOR ACCOUNT REVIEW 

function checkAountBlockUI(details) {
   const data = getUserDetailsStore();


   $('.dashboard-user-panel').block({
      message: HTMLMessageAccountStatus(data.fullname, details),
      centerY: false,
      css: {
         backgroundColor: 'transparent',
         border: '0',
         top: '50px',
         cursor: 'default',
      },
      overlayCSS: {
         backgroundColor: '#f9f9f9',
         opacity: 0.9,
         cursor: 'default',
      },
   })
}

function accountRejectedBlocUI(details){
   const data = getUserDetailsStore();
   $('.dashboard-user-panel').block({
      message: HTMLMessageAccountRejected(data.fullname, details),
      centerY: false,
      css: {
         backgroundColor: 'transparent',
         border: '0',
         top: '50px',
         cursor: 'default',
      },
      overlayCSS: {
         backgroundColor: '#f9f9f9',
         opacity: 1,
         cursor: 'default',
      },
   })
}

function checkAount(myProfile) {
   const accStatus = (myProfile || { }).cr711_registrationprocedure
   const createdon = (myProfile || { }).createdon
   const newDetails = {
      createdon: moment(createdon).format('MMM D'),
      accStatus 
   }
   if(accStatus === 3){
      accountRejectedBlocUI(newDetails)
      return;
   }
   console.log('accStatus', accStatus);
   if(accStatus == 1 || !accStatus){
      checkAountBlockUI(newDetails)
   }
}