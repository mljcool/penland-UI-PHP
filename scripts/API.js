let workShopData = [];
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
  if (label) {
    return label;
  }
  return label;
};

function setDataUI(arrayWorkshops = [], msAnimate = '400ms') {
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
                <span class="type-item-author">${ifNoInstructor(
                  item[
                    '_hso_instructor_value@OData.Community.Display.V1.FormattedValue'
                  ]
                )}</span>
                <span class="type-item-dates">${ifNoStartDate(
                  item[
                    'mshied_startdate@OData.Community.Display.V1.FormattedValue'
                  ]
                )}</span>
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
      workShopData = response.map((_data) => {
        const hasStudio =
          _data[
            'new_cr711_newtable_workshop_mshied_course.new_studiotypes@OData.Community.Display.V1.FormattedValue'
          ];
        if (hasStudio) {
          _data.studioType = hasStudio.split('; ');
        } else {
          _data.studioType = [];
        }
        return _data;
      });
      setDataUI(workShopData);
      localStorage.setItem('workshopItems', JSON.stringify(workShopData));
    },
    error: function (xhr, status, error) {
      console.error('Error:', error);
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
