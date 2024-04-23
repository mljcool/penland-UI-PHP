function setDataUI(workshopData = []) {
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

  const duration = 600; // ms
  const delay = 300; // ms
//   let delayOf = 0;
//   let duration = 5;
  workshopData.forEach(function (item, index) {
//     delayOf += index + 5;
//     duration += index + 6;


    $(
      '.card-results-sections'
    ).append(` <div data-uid="${item.mshied_courseid}" style="min-height: 476.66px; 
    --animation-order: ${index};
    animation-name: fadeInCard; 
    animation-duration: 350ms;
    animation-delay: calc(var(--animation-order) * 400ms);
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
  AOS.init();
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
    success: function (response) {
      console.log('Response:', response);
      setDataUI(response);
    },
    error: function (xhr, status, error) {
      console.error('Error:', error);
    },
  });
}

setTimeout(() => {
  // $("#browse-workshop-section").block({
  //     message:
  //       '<div class="d-flex justify-content-center"><p class="me-2 mb-0">Please wait...</p> <div class="sk-wave sk-primary m-0"><div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div></div> </div>',
  //     timeout: 1000,
  //     css: {
  //       backgroundColor: "transparent",
  //       border: "0"
  //     },
  //     overlayCSS: {
  //       backgroundColor: "#fff",
  //       opacity: 0.8
  //     }
  //   })
  getListOfWorkShops();
}, 20);
