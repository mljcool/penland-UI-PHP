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
    ).append(` <div data-uid="${item.mshied_courseid}" style="min-height: 476.66px; 
    --animation-order: ${index};
    animation-name: fadeInCard; 
    animation-duration: 350ms;
    animation-delay: calc(var(--animation-order) * ${msAnimate});
    animation-fill-mode: both;
    animation-timing-function: ease-in-out;
    " class="card-item "  
        data-aos-once="true">
            <div class="card-content">
              <div class="card-img-container">
                <div class="card-fav">
                  <i class="far fa-heart"></i>
                </div>
                <img src="https://picsum.photos/200/300?random=${index}" />
              </div>
              <div class="card-item-details">
                <span class="type-item">${item.mshied_name}</span>
                <span class="type-item-author">${item.instructor}</span>
                <span class="type-item-dates">${item.startDate}</span>
              </div>
            </div>
          </div>`);
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
    message:
      '<div class="d-flex justify-content-center"><p class="me-2 mb-0">Please wait...</p> <div class="sk-wave sk-primary m-0"><div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div></div> </div>',
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
