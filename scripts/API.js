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
      .filter((_data) => myProdList.productList?.includes(_data['@odata.editLink']))
      .reduce(
         (total, obj) => {
            total.price += obj.price;
            return total;
         },
         { price: 0 }
      );
      console.log(sum);
      myProdList.totalProductPrices = sum.price;
      myProdList.overAllTotal = sum.price+myProdList.total;
      myProdList.overAllTotalFormatted = converMoneyProperFormat(myProdList.overAllTotal);
      $('.overAlltotalFee').html(myProdList.overAllTotalFormatted);
      updateMyDetails('cart', myProdList);

}

let productList = [];
function getProductsChecked() {
   $('.product-checkboxes').change(function () {
      const valueProd = $(this).val();
      if ($(this).is(':checked')) {
         console.log('Checkbox is checked!', valueProd);
         productList.push(valueProd);
      } else {
         productList = productList.filter((_data) => _data !== valueProd);
      }
      const myCart = getMyCartDetails();
      myCart.productList = productList;
      updateMyDetails('cart', myCart);
      getProductsWithFullData();
      addTotalProducts();
   });
}

function getProductsWithFullData() {
   const prodList = getProductionListStore();
   const myProdList = getMyCartDetails().productList;
   const productHTMLelemList = $('.append-review-product');
   prodList
      .filter((_data) => myProdList.includes(_data['@odata.editLink']))
      .forEach(function (_data, index) {
         productHTMLelemList.append(`<div class="col-md mb-md-0 mb-2 product-items-review">
<div class="form-check custom-option custom-option-icon" style="height: 100%;background: white;">
  <label class="form-check-label custom-option-content" for="customCheckboxIcon${
     _data.productid
  }">
    <span class="custom-option-body">
      ${ifHousingOrMeals(_data)}
      <span class="custom-option-title"> ${
         _data['price@OData.Community.Display.V1.FormattedValue']
      } </span>
      <small>${_data.name} </small>
    </span>
  </label>
</div>
</div>`);
      });
}

function setProductToCheck(editLink) {
   const myProdList = getMyCartDetails().productList;

   console.log('prodList', editLink);

   const prods = myProdList.some((_data) => _data === editLink);
   console.log('prods', prods);
   return prods ? 'checked' : '';
}

function getProducts() {
   const productHTMLelemList = $('.append-all-products');
   if (productHTMLelemList.length) {
      productHTMLelemList.html('');
      $.get({
         url: GET_PRODUCTS,
         contentType: 'application/json',
         success: function (response = []) {
            if (response.value.length) {
               response.value
                  .filter(
                     (_data) =>
                        !!_data[
                           'price@OData.Community.Display.V1.FormattedValue'
                        ]
                  )
                  .forEach(function (_data, index) {
                     productHTMLelemList.append(`<div class="col-md mb-md-0 mb-2 product-items">
          <div class="form-check custom-option custom-option-icon ${setProductToCheck(
             _data['@odata.editLink']
          )}" style="height: 100%;">
            <label class="form-check-label custom-option-content" for="customCheckboxIcon${
               _data.productid
            }">
              <span class="custom-option-body">
                ${ifHousingOrMeals(_data)}
                <span class="custom-option-title"> ${
                   _data['price@OData.Community.Display.V1.FormattedValue']
                } </span>
                <small>${_data.name} </small>
              </span>
              <input class="form-check-input product-checkboxes" type="checkbox" value="products(${
                 _data.productid
              })" id="customCheckboxIcon${_data.productid}" ${setProductToCheck(_data['@odata.editLink'])} />
            </label>
          </div>
        </div>`);
                  });
               const productsData = response.value;
               setItemStore('productsData', productsData);
               setTimeout(() => {
                  getProductsWithFullData();
                  addTotalProducts();
               }, 500);
            }

            console.log('GET_PRODUCTS', response);
         },
         complete: function (data) {
            getProductsChecked();
         },
         error: function (xhr, status, error) {},
      });
   }
}
