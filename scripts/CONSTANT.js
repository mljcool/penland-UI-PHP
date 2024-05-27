var longMessage = {
   userExist: `It seems like you already have an account with us <br/> <b>Username</b> or <b>Email</b> exist in datasource. If you've forgotten your login details, you can reset your password or retrieve your username. If you need further assistance, feel free to reach out to our support team.`,
};

var HTMLelementProp = {
   blockUIExistELement: `<div class="d-flex justify-content-center">
    <p class="me-2 mb-0" style="color: #2e2e2e;"> Please wait while we revalidate the account details...</p>
    <div class="sk-wave sk-primary m-0">
      <div class="sk-rect sk-wave-rect"></div>
      <div class="sk-rect sk-wave-rect"></div>
      <div class="sk-rect sk-wave-rect"></div>
      <div class="sk-rect sk-wave-rect"></div>
      <div class="sk-rect sk-wave-rect"></div>
    </div>
  </div>`,
   blockUISummaryElement: `<div class="d-flex justify-content-center">
  <p class="me-2 mb-0" style="color: #2e2e2e;"> Please hold on as we are currently saving your data....</p>
  <div class="sk-wave sk-primary m-0">
    <div class="sk-rect sk-wave-rect"></div>
    <div class="sk-rect sk-wave-rect"></div>
    <div class="sk-rect sk-wave-rect"></div>
    <div class="sk-rect sk-wave-rect"></div>
    <div class="sk-rect sk-wave-rect"></div>
  </div>
</div>`,
   blockUIExistELementSmile: (message = '') => {
      return `<div class="d-flex justify-content-center">
    <p class="me-2 mb-0" style="color: #2e2e2e;"> <h4 class="mt-2">${message}</h4></p>
    
    </div>`;
   },

   appendItemToCart: function (_item) {
      return `<li class="list-group-item p-4 cart-item-${_item.mshied_courseid}">
      <div class="d-flex gap-3">
        <div class="flex-shrink-0 d-flex align-items-center">
          <img
            src="${_item.imageURL}"
            alt="google home"
            class="w-px-100"
            style="border-radius: 8px"
          />
        </div>
        <div class="flex-grow-1">
          <div class="row">
            <div class="col-md-8">
              <p class="me-3">
                <a href="javascript:void(0)" class="text-body fs-5"
                  >${_item.mshied_name}</a
                >
              </p>
              <div class="text-muted mb-2 d-flex flex-wrap">
                <span class="me-1">Code:</span>
                <span class="badge bg-label-info">${_item.mshied_coursenumber}</span>
              </div>
              <div class="text-muted mb-2 d-flex flex-wrap">
                <span class="me-1">Instructor:</span>
                <a href="javascript:void(0)" class="me-3"
                  >${_item.instructor}</a
                >
              </div>
              <div class="text-muted mb-2 d-flex flex-wrap">
                <span class="me-1">Registration starts:</span>
                <span href="javascript:void(0)" class="me-3"><i class="bx bxs-calendar "></i> ${_item.startDateHumanReadable}</span>
              </div>
              <div class="text-muted mb-2 d-flex flex-wrap">
              <span class="me-1">Level:</span>
              <span href="javascript:void(0)" class="me-3"><i class='bx bx-bullseye fa-lg' ></i>${_item.workshopLevel}</span>
              </div>
              <div class="text-muted mb-2 d-flex flex-wrap">
              <span class="me-1">Session:</span>
              <span href="javascript:void(0)" class="me-3"><i class='bx bxs-calendar-event'></i> ${_item.workShopOverview['_cr711_defaultsessionpricelist_value@OData.Community.Display.V1.FormattedValue']}</span>
              
            </div>
            </div>
            <div class="col-md-4">
              <div class="text-md-end">
                <button
                  onclick="removeItem('${_item.mshied_courseid}');"
                  type="button"
                  class="btn-close btn-pinned"
                  aria-label="Close"
                ></button>
                <div class="my-2 my-md-4 mb-md-5 d-flex flex-column ">
                <span class="badge rounded-pill bg-label-info mb-2"><span class="text-primary">${_item.workShopOverview['pl.price@OData.Community.Display.V1.FormattedValue']}</span> </span>

                </div>
                <button
                  style="display: none;"
                  type="button"
                  class="btn btn-sm btn-label-primary mt-md-3"
                >
                  Supply List
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>`;
   },
   cartSummary: function (_item) {
      return `<li class="list-group-item p-4 cart-item-${_item.mshied_courseid}">
      <div class="d-flex gap-3">
        <div class="flex-shrink-0 d-flex align-items-center">
          <img
          src="${_item.imageURL}"
            alt="google home"
            class="w-px-100"
            style="border-radius: 8px"
          />
        </div>
        <div class="flex-grow-1">
          <div class="row">
            <div class="col-md-8">
              <p class="me-3">
                <a href="javascript:void(0)" class="text-body fs-5"
                  >${_item.mshied_name}</a
                >
              </p>
              <div class="text-muted mb-2 d-flex flex-wrap">
                <span class="me-1">Code:</span>
                <span class="badge bg-label-info">${_item.mshied_coursenumber}</span>
              </div>
              <div class="text-muted mb-2 d-flex flex-wrap">
                <span class="me-1">Instructor:</span>
                <a href="javascript:void(0)" class="me-3"
                  >${_item.instructor}</a
                >
              </div>
              <div class="text-muted mb-2 d-flex flex-wrap">
                <span class="me-1">Registration starts:</span>
                <a href="javascript:void(0)" class="me-3"><i class="bx bxs-calendar "></i> ${_item.startDateHumanReadable}</a>
              </div>
              <div class="text-muted mb-2 d-flex flex-wrap">
              <span class="me-1">Session:</span>
              <a href="javascript:void(0)" class="me-3"><i class='bx bxs-calendar-event'></i> ${_item.workShopOverview['_cr711_defaultsessionpricelist_value@OData.Community.Display.V1.FormattedValue']}</a>
            </div>
            </div>
            <div class="col-md-4">
              <div class="text-md-end">
                <div class="my-2 my-md-4 mb-md-5 d-flex flex-column ">
                <span class="badge rounded-pill bg-label-info mb-2">   <span class="text-primary">${_item.workShopOverview['pl.price@OData.Community.Display.V1.FormattedValue']}</span> </span>
               
                </div>
                <button
                  style="display:none;"
                  type="button"
                  class="btn btn-sm btn-label-primary mt-md-3"
                >
                  Supply List
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>`;
   },

   arrayOfWorkshops: (item, index, msAnimate) => {
      return `<did data-uid="${item.mshied_courseid}" style="min-height: 476.66px; mind-width:258px;
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
                <img src="${item.imageURL}" />
              </div>
              <div class="card-item-details">
                <span class="type-item">${item.mshied_name}</span>
                <span class="type-item-author">${item.instructor}</span>
                <span class="type-item-dates">${item.startDate}</span>
              </div>
            </div>
          </div>`;
   },
   blockUISearchResult: `<div class="d-flex justify-content-center"><p class="me-2 mb-0">Please wait...</p> <div class="sk-wave sk-primary m-0"><div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div></div> </div>`,
};

var FORM_STEPS = {
   ACCOUNT: 1,
   PERSONAL: 2,
   HOUSING: 3,
   PAYMENT: 4,
   TERMS: 5,
   CONFIRMATION: 6,
};

var FORM_INDEX = {
   ACCOUNT: 0,
   PERSONAL: 1,
   HOUSING: 2,
   PAYMENT: 3,
   TERMS: 4,
   CONFIRMATION: 5,
};
