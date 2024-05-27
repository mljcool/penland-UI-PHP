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

function getURLParameters() {
   const urlParams = new URLSearchParams(window.location.search);
   const workshopID = urlParams.get('workshopID');
   return workshopID;
}

function parseStore(data) {
   return JSON.parse(data);
}

function setItemStore(name = '', data = []) {
   localStorage.setItem(name, JSON.stringify(data));
}

function getProductionListStore() {
   const productList = parseStore(
      localStorage.getItem('productsData')
   );
   return productList;
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
      localStorage.getItem('currentSelectedWorhShop')
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

const converMoneyProperFormat = (money) =>{
   const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    return formatter.format(money);;
}

function computeValueOfCart() {
   const myCart = getMyCartDetails();
   console.log('myCart', myCart);
   const sum = myCart.items.reduce(
      (total, obj) => {
         total.rawFeePrice +=obj.rawFeePrice;
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
