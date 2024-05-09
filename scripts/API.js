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
    $(
      '.card-results-sections'
    ).append(HTMLelementProp.arrayOfWorkshops(item, index, msAnimate));
  });
}

function getListOfWorkShops() {
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
  console.log('searhObjectByArrayStudio', newvalue);

  $('.card-results-sections').empty();
  setTimeout(() => {
    setDataUI(newvalue, '150ms');
  }, 500);
}

function elasticSearch(searchName) {
  const newvalue = FuseUtils.filterArrayByString(workShopData, searchName);
  console.log('newvalue', newvalue);

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

setTimeout(() => {
  getListOfWorkShops();
}, 20);


// GETTING INSTRUCTOR DETAILS




