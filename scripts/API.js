let workShopData = [];

function setDataUI(arrayWorkshops = [], msAnimate = '400ms', apiError = false) {
   if (!arrayWorkshops.length || apiError) {
      const message = () => {
         let stringMessage = `Sorry, that filter combination has no results.
      Please try different criteria.`;
         if (apiError) {
            stringMessage = `Sorry, something went wrong with the data source`;
         }
         return stringMessage;
      };
      $('.card-results-sections').append(`<div class="no-results "  
      style="
     text-align: center;
     margin-top: 5rem;
     --animation-order: 1};
     animation-name: fadeInCard; 
     animation-duration: 350ms;
     animation-delay: calc(var(--animation-order) * ${msAnimate});
     animation-fill-mode: both;
     animation-timing-function: ease-in-out;
 ">
        <div>
        <i class="bx bx-file-find fa-10x"></i>
        <h3>${message()}</h3>
        </div>
        </div>`);
      return;
   }

   arrayWorkshops.forEach(function (item, index) {
      $('.card-results-sections').append(
         HTMLelementProp.arrayOfWorkshops(item, index, msAnimate)
      );
   });
}

function getListOfWorkShops() {
   localStorage.setItem('workshopItems', JSON.stringify([]));
   const jsonData = {
      requestParams: {
         requestType: 'work-shop-list',
         params: '',
      },
   };
   $.get({
      url: WORKSHOP_LIST,
      data: jsonData,
      contentType: 'application/json',
      success: function (response = []) {
         workShopData = IworkShopModel(response);
         setDataUI(workShopData, '', false);
         localStorage.setItem('workshopItems', JSON.stringify(workShopData));
      },
      complete: function (data) {
         removeSekeletonLoader();
         const isOKay = data.status;
         if (isOKay !== 200) {
            setDataUI(workShopData, '', true);
         }
      },
      error: function (xhr, status, error) {
         console.error('Error:', error);
         setDataUI([], '', true);
      },
   });
}

function debounce(func, wait, immediate) {
   var timeout;
   return function () {
      var context = this,
         args = arguments;
      var later = function () {
         timeout = null;
         if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
   };
}

function addBlockUI() {
   $('.search-results-sections').block({
      message: HTMLelementProp.blockUISearchResult,
      timeout: 1500,
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

function elasticSearchByStudio(badges = []) {
   const newvalue = searhObjectByArrayStudio(workShopData, badges);

   $('.card-results-sections').empty();
   setTimeout(() => {
      setDataUI(newvalue, '150ms');
   }, 500);
}

function elasticSearch(searchName) {
   const newvalue = FuseUtils.filterArrayByString(workShopData, searchName);

   $('.card-results-sections').empty();
   setTimeout(() => {
      setDataUI(newvalue, '150ms');
   }, 500);
}

$('input[type=search]').on('search', function () {
   elasticSearch('');
});

$('#elastic-search').keyup(
   debounce(function () {
      const searchText = $(this).val();
      elasticSearch(searchText);
   }, 500)
);

$(document).ready(function () {
   setTimeout(() => {
      const searchlength = $('#elastic-search').length;
      if (searchlength) {
         getListOfWorkShops();
      }
   }, 20);
});

// GETTING INSTRUCTOR DETAILS

function ifHousingOrMeals(data) {
   const prodType =
      data['_defaultuomid_value@OData.Community.Display.V1.FormattedValue'];
   let defaultIcon = `<i class="bx bx-home"></i>`;
   if (prodType === 'Meals') {
      defaultIcon = `<i class='bx bx-bowl-hot'></i>`;
   }
   return defaultIcon;
}

function addTotalProducts() {
   const prodList = getProductionListStore();
   const myProdList = getMyCartDetails();
   const sum = prodList
      .filter((_data) =>
         myProdList.productList?.includes(_data['@odata.editLink'])
      )
      .reduce(
         (total, obj) => {
            total.price += obj.price;
            return total;
         },
         { price: 0 }
      );
   myProdList.totalProductPrices = sum.price;
   myProdList.overAllTotal = sum.price + myProdList.total;
   myProdList.overAllTotalFormatted = converMoneyProperFormat(
      myProdList.overAllTotal
   );
   $('.overAlltotalFee').html(myProdList.overAllTotalFormatted);
   $('.over-all-total').html(myProdList.overAllTotalFormatted);
   $('.total-h-and-m').html(converMoneyProperFormat(sum.price));
   $('.total-r-cart').html(converMoneyProperFormat(myProdList.total));
   $('.total-r-hm').html(converMoneyProperFormat(sum.price));
   updateMyDetails('cart', myProdList);
}

function getProductsChecked() {
   const myProdList = getMyCartDetails();

   $('.product-checkboxes').change(function () {
      const valueProd = $(this).val();
      if ($(this).is(':checked')) {
         myProdList.productList.push(valueProd);
      } else {
         const setOnlyNewValue = myProdList.productList.filter(
            (_data) => _data !== valueProd
         );
         myProdList.productList = setOnlyNewValue;
      }

      myProdList.productList = myProdList.productList;
      updateMyDetails('cart', myProdList);
      getProductsWithFullDataSummaryReview();
      addTotalProducts();
   });
}

function getProductsWithFullDataSummaryReview() {
   const prodList = getProductionListStore();
   const myProdList = getMyCartDetails().productList;
   const productHTMLelemList = $('.append-review-product');
   productHTMLelemList.html('');
   prodList
      .filter((_data) => myProdList.includes(_data['@odata.editLink']))
      .forEach(function (_data, index) {
         productHTMLelemList.append(
            HTMLelementProp.listOfProductSummaryReview(_data)
         );
      });
}

function setProductToCheck(editLink) {
   const myProdList = getMyCartDetails().productList;
   const prods = myProdList.some((_data) => _data === editLink);
   return prods ? 'checked' : '';
}

function filterProductWithPriceAndSession(products) {
   const myCart = getMyCartDetails();
   const formattedValuePricingTitle =
      '_hso_workshoppricing_value@OData.Community.Display.V1.FormattedValue';

   const newProductList = products.filter((_data) => !!_data.price);

   const tempDataIDs = [];
   myCart.items.forEach((_data) => {
      tempDataIDs.push(_data._hso_workshoppricing_value);
   });

   // FILTER PRODUCTS BY SESSIONS
   const groupBySectionList = myCart.items
      .map((_data) => {
         _data.theProduct = newProductList.filter(
            (_prod) =>
               _prod._pricelevelid_value === _data._hso_workshoppricing_value
         );
         return _data;
      })
      .map((_data) => ({
         pricingID: _data._hso_workshoppricing_value,
         theProduct: _data.theProduct,
         sessionName: _data[formattedValuePricingTitle],
      }));

   return groupBySectionList;
}

function getProducts() {
   const prodWrapperElement = $('.products-session-wrapper');
   if (prodWrapperElement.length) {
      prodWrapperElement.html('');

      $.get({
         url: GET_PRODUCTS,
         contentType: 'application/json',
         success: function (response = []) {
            if (response.value.length) {
               const productList = response.value;
               const withPrice = filterProductWithPriceAndSession(productList);
           
               withPrice.forEach(function (_data, index) {
                  prodWrapperElement.append(
                     HTMLelementProp.listOfProductBySession(_data)
                  );

                  const productHTMLelemList = $('.pID-' + _data.pricingID);
                  productHTMLelemList.html('');
                  if (_data.theProduct.length) {
                     _data.theProduct.forEach(function (_data, index) {
                        productHTMLelemList.append(
                           HTMLelementProp.listOfProduct(_data)
                        );
                     });
                  } else {
                     productHTMLelemList.html(
                        '<div class="bg-lighter p-2 rounded mt-4 text-center"><p class="text-heading display-6">No housing and meals found for this session.</p></div>'
                     );
                  }
               });

               setItemStore('productsData', productList);
               setTimeout(() => {
                  getProductsWithFullDataSummaryReview();
                  addTotalProducts();
               }, 500);
            }

         },
         complete: function (data) {
            getProductsChecked();
         },
         error: function (xhr, status, error) {},
      });
   }
}
