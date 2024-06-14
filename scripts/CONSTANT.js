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
   waitListItemToCart: function (_item) {
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
              <span class="me-1">Level:</span>
              <span href="javascript:void(0)" class="me-3"><i class='bx bx-bullseye fa-lg' ></i>${_item.workshopLevel}</span>
              </div>
              <div class="text-muted mb-2 d-flex flex-wrap">
            
              
            </div>
            </div>
            <div class="col-md-4">
              <div class="text-md-end">
                <button
                  style="display: none;"
                  onclick="removeItem('${_item.mshied_courseid}');"
                  type="button"
                  class="btn-close btn-pinned"
                  aria-label="Close"
                ></button>
            
                <button
                   onclick="removeItemWaitList('${_item.mshied_courseid}');"
                
                  type="button"
                  class="btn btn-sm btn-label-secondary mt-md-3"
                >
                  Cancel
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
            alt="Penland Workshop"
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
   listOfProduct: (_data) => {
      return `<div class="col-md mb-md-0 mb-2 product-items">
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
        })" id="customCheckboxIcon${_data.productid}" ${setProductToCheck(
         _data['@odata.editLink']
      )} />
      </label>
    </div>
  </div>`;
   },
   listOfProductSummaryReview: (_data) => {
      return `<div class="col-md mb-md-0 mb-2 product-items-review">
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
</div>`;
   },
   listOfProductBySession: (_data) => {
      return `<div class="accordion m-3" id="accordionWithIcon">
    <div class="card accordion-item active">
       <h2 class="accordion-header d-flex align-items-center">
          <button type="button" class="accordion-button collapsed alert alert-primary"
             data-bs-toggle="collapse" data-bs-target="#accordionWithIcon-${_data.pricingID}" aria-expanded="true">
             <i class="bx bx-info-circle"></i>
             ${_data.sessionName}
          </button>
       </h2>
       <div id="accordionWithIcon-${_data.pricingID}" class="accordion-collapse collapse show">
          <div class="accordion-body">
             <div class="row append-all-products pID-${_data.pricingID}">
             </div>
          </div>
       </div>
    </div>
 </div>`;
   },
   blockUISearchResult: `<div class="d-flex justify-content-center"><p class="me-2 mb-0">Please wait...</p> <div class="sk-wave sk-primary m-0"><div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div></div> </div>`,
};

const HTMLMessageWaitList = (name) => {
   return `<div class="card">
   <div class="card-body">
      <h5 class="card-title">Thank You for Joining the Waitlist! 🥳</h5>
      <div class="logo-container d-flex flex-direction-column"
         style="align-items: center; width: 100%; flex-direction: column">
         <img class="dashboard-logo" src="./assets/Penland-logo.png" />
      </div>
      <p style="text-align: left; font-size: 16px" class="typing ">
         Hi
         <span class="name-of-applicant dd-firstname">${name}</span>,<br /><br />
         Thank you for expressing your interest and joining the waitlist for our workshop. We appreciate your enthusiasm
         and patience. You will be notified as soon as a spot becomes available.
         <br /><br />
         We look forward to having you with us!
         <br /><br />
         Best regards,<br />
         Penland School of Craft
      </p>
     
   </div>
   <div class="card-footer text-muted">
      <a href="/" class="btn btn-primary">Browse more workshop.</a>
    </div>
</div>`;
};

const HTMLMessageDataBeingComposed = () => {
   return `<div class="card">
   <div class="card-body">
   <h5 class="card-title">Workshop Data in Progress.</h5>
      <div class="logo-container d-flex flex-direction-column"
         style="align-items: center; width: 100%; flex-direction: column">
         <img class="dashboard-logo" src="./assets/Penland-logo.png" />
      </div>
      <br />
      <p style="text-align: left; font-size: 16px" class="typing ">
      We apologize for the inconvenience, but the data for this workshop is currently being composed and prepared. <br />Our team is working hard to ensure everything is accurate and ready for your use as soon as <br />possible. <br /><br />

      We appreciate your patience and understanding during this time. Please check back soon for updates. <br /><br />
      
      If you have any questions or need further assistance, please feel free to contact our support team. <br /><br />
      
      Thank you!
      </p>
     
   </div>
   <div class="card-footer text-muted">
      <a href="/" class="btn btn-primary">Browse a different workshop.</a>
    </div>
</div>`;
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

const OwlCarouselOverview = {
   navigation: false, // Show next and prev buttons
   slideSpeed: 300,
   paginationSpeed: 400,
   items: 1,
   itemsDesktop: false,
   itemsDesktopSmall: false,
   itemsTablet: false,
   itemsMobile: false,
   loop: true,
   center: true,
   autoWidth: false,
};

const US_CURRENCIES = `transactioncurrencies(76aa6017-b2d8-ee11-904d-000d3a343842)`;

const preferredLanguage = [
   {
      name: 'Arabic (Arabic Region)',
      value: '494281025',
   },
   {
      name: 'Basque (Basque)',
      value: '494281069',
   },
   {
      name: 'Bulgarian (Bulgaria)',
      value: '494281026',
   },
   {
      name: 'Catalan (Catalan)',
      value: '494281027',
   },
   {
      name: 'Chinese (PRC)',
      value: '494282052',
   },
   {
      name: 'Chinese (Taiwan)',
      value: '494281028',
   },
   {
      name: 'Chinese (Traditional - Hong Kong)',
      value: '494283076',
   },
   {
      name: 'Croatian (Croatia)',
      value: '494281050',
   },
   {
      name: 'Czech (Czech Republic)',
      value: '494281029',
   },
   {
      name: 'Danish (Denmark)',
      value: '494281030',
   },
   {
      name: 'Dutch (Netherlands)',
      value: '494281043',
   },
   {
      name: 'English (Australia)',
      value: '494283081',
   },
   {
      name: 'English (Canada)',
      value: '494284105',
   },
   {
      name: 'English (Great Britain)',
      value: '494282057',
   },
   {
      name: 'English (United States)',
      value: '494281033',
   },
   {
      name: 'Estonian (Estonia)',
      value: '494281061',
   },
   {
      name: 'Finnish (Finland)',
      value: '494281035',
   },
   {
      name: 'French (Canada)',
      value: '494283084',
   },
   {
      name: 'French (France)',
      value: '494281036',
   },
   {
      name: 'Galician (Galician)',
      value: '494281110',
   },
   {
      name: 'German (Germany)',
      value: '494281031',
   },
   {
      name: 'Greek (Greece)',
      value: '494281032',
   },
   {
      name: 'Hebrew (Israel)',
      value: '494281037',
   },
   {
      name: 'Hungarian (Hungary)',
      value: '494281038',
   },
   {
      name: 'Indonesian (Indonesia)',
      value: '494281057',
   },
   {
      name: 'Italian (Italy)',
      value: '494281040',
   },
   {
      name: 'Japanese (Japan)',
      value: '494281041',
   },
   {
      name: 'Korean (Korea)',
      value: '494281042',
   },
   {
      name: 'Latvian (Latvia)',
      value: '494281062',
   },
   {
      name: 'Lithuanian (Lithuania)',
      value: '494281063',
   },
   {
      name: 'Norwegian (Bokmål, Norway)',
      value: '494281044',
   },
   {
      name: 'Polish (Poland)',
      value: '494281045',
   },
   {
      name: 'Portuguese (Brazil)',
      value: '494281046',
   },
   {
      name: 'Portuguese (Portugal)',
      value: '494282070',
   },
   {
      name: 'Romanian (Romania)',
      value: '494281048',
   },
   {
      name: 'Russian (Russia)',
      value: '494281049',
   },
   {
      name: 'Serbian (Cyrillic, Serbia)',
      value: '494283098',
   },
   {
      name: 'Serbian (Rep. of Serbia and Rep. of Montenegro)',
      value: '494289242',
   },
   {
      name: 'Slovak (Slovakia)',
      value: '494281051',
   },
   {
      name: 'Slovenian (Slovenia)',
      value: '494281060',
   },
   {
      name: 'Spanish (Spain)',
      value: '494283082',
   },
   {
      name: 'Swedish (Sweden)',
      value: '494281053',
   },
   {
      name: 'Thai (Thailand)',
      value: '494281054',
   },
   {
      name: 'Turkish (Turkey)',
      value: '494281055',
   },
   {
      name: 'Ukrainian (Ukraine)',
      value: '494281058',
   },
   {
      name: 'Vietnamese (Vietnam)',
      value: '494281066',
   },
];

const raceEthicity = [
   { name: 'American or Asian American', value: '494280000' },
   { name: 'Black or African American ', value: '494280001' },
   { name: 'Hispanic, Latino, Latina, Latinx', value: '494280002' },
   { name: 'Native Hawaiian Or Other Pacific Islander', value: '494280003' },
   { name: 'Middle Eastern or North African', value: '494280004' },
   { name: 'White', value: '494280005' },
   { name: 'I prefer not to answer', value: '494280006' },
   { name: 'I prefer to self identify', value: '580000001' },
];

const STATES = [
   {
      name: 'Alaska',
      value: 'AK',
   },
   {
      name: 'Alabama',
      value: 'AL',
   },
   {
      name: 'Arkansas',
      value: 'AR',
   },
   {
      name: 'American Samoa',
      value: 'AS',
   },
   {
      name: 'Arizona',
      value: 'AZ',
   },
   {
      name: 'California',
      value: 'CA',
   },
   {
      name: 'Colorado',
      value: 'CO',
   },
   {
      name: 'Connecticut',
      value: 'CT',
   },
   {
      name: 'District of Columbia',
      value: 'DC',
   },
   {
      name: 'Delaware',
      value: 'DE',
   },
   {
      name: 'Florida',
      value: 'FL',
   },
   {
      name: 'Georgia',
      value: 'GA',
   },
   {
      name: 'Guam',
      value: 'GU',
   },
   {
      name: 'Hawaii',
      value: 'HI',
   },
   {
      name: 'Iowa',
      value: 'IA',
   },
   {
      name: 'Idaho',
      value: 'ID',
   },
   {
      name: 'Illinois',
      value: 'IL',
   },
   {
      name: 'Indiana',
      value: 'IN',
   },
   {
      name: 'Kansas',
      value: 'KS',
   },
   {
      name: 'Kentucky',
      value: 'KY',
   },
   {
      name: 'Louisiana',
      value: 'LA',
   },
   {
      name: 'Massachusetts',
      value: 'MA',
   },
   {
      name: 'Maryland',
      value: 'MD',
   },
   {
      name: 'Maine',
      value: 'ME',
   },
   {
      name: 'Michigan',
      value: 'MI',
   },
   {
      name: 'Minnesota',
      value: 'MN',
   },
   {
      name: 'Missouri',
      value: 'MO',
   },
   {
      name: 'Mississippi',
      value: 'MS',
   },
   {
      name: 'Montana',
      value: 'MT',
   },
   {
      name: 'North Carolina',
      value: 'NC',
   },
   {
      name: 'North Dakota',
      value: 'ND',
   },
   {
      name: 'Nebraska',
      value: 'NE',
   },
   {
      name: 'New Hampshire',
      value: 'NH',
   },
   {
      name: 'New Jersey',
      value: 'NJ',
   },
   {
      name: 'New Mexico',
      value: 'NM',
   },
   {
      name: 'Nevada',
      value: 'NV',
   },
   {
      name: 'New York',
      value: 'NY',
   },
   {
      name: 'Ohio',
      value: 'OH',
   },
   {
      name: 'Oklahoma',
      value: 'OK',
   },
   {
      name: 'Oregon',
      value: 'OR',
   },
   {
      name: 'Pennsylvania',
      value: 'PA',
   },
   {
      name: 'Puerto Rico',
      value: 'PR',
   },
   {
      name: 'Rhode Island',
      value: 'RI',
   },
   {
      name: 'South Carolina',
      value: 'SC',
   },
   {
      name: 'South Dakota',
      value: 'SD',
   },
   {
      name: 'Tennessee',
      value: 'TN',
   },
   {
      name: 'Texas',
      value: 'TX',
   },
   {
      name: 'Utah',
      value: 'UT',
   },
   {
      name: 'Virginia',
      value: 'VA',
   },
   {
      name: 'Virgin Islands',
      value: 'VI',
   },
   {
      name: 'Vermont',
      value: 'VT',
   },
   {
      name: 'Washington',
      value: 'WA',
   },
   {
      name: 'Wisconsin',
      value: 'WI',
   },
   {
      name: 'West Virginia',
      value: 'WV',
   },
   {
      name: 'Wyoming',
      value: 'WY',
   },
];

const COUNTRY = [
   {
      name: '',
      value: '',
   },
   {
      name: 'Afghanistan',
      value: 'AF',
   },
   {
      name: 'Åland Islands',
      value: 'AX',
   },
   {
      name: 'Albania',
      value: 'AL',
   },
   {
      name: 'Algeria',
      value: 'DZ',
   },
   {
      name: 'American Samoa',
      value: 'AS',
   },
   {
      name: 'Andorra',
      value: 'AD',
   },
   {
      name: 'Angola',
      value: 'AO',
   },
   {
      name: 'Anguilla',
      value: 'AI',
   },
   {
      name: 'Antarctica',
      value: 'AQ',
   },
   {
      name: 'Antigua and Barbuda',
      value: 'AG',
   },
   {
      name: 'Argentina',
      value: 'AR',
   },
   {
      name: 'Armenia',
      value: 'AM',
   },
   {
      name: 'Aruba',
      value: 'AW',
   },
   {
      name: 'Australia',
      value: 'AU',
   },
   {
      name: 'Austria',
      value: 'AT',
   },
   {
      name: 'Azerbaijan',
      value: 'AZ',
   },
   {
      name: 'Bahamas',
      value: 'BS',
   },
   {
      name: 'Bahrain',
      value: 'BH',
   },
   {
      name: 'Bangladesh',
      value: 'BD',
   },
   {
      name: 'Barbados',
      value: 'BB',
   },
   {
      name: 'Belarus',
      value: 'BY',
   },
   {
      name: 'Belgium',
      value: 'BE',
   },
   {
      name: 'Belize',
      value: 'BZ',
   },
   {
      name: 'Benin',
      value: 'BJ',
   },
   {
      name: 'Bermuda',
      value: 'BM',
   },
   {
      name: 'Bhutan',
      value: 'BT',
   },
   {
      name: 'Bolivia, Plurinational State of',
      value: 'BO',
   },
   {
      name: 'Bonaire, Sint Eustatius and Saba',
      value: 'BQ',
   },
   {
      name: 'Bosnia and Herzegovina',
      value: 'BA',
   },
   {
      name: 'Botswana',
      value: 'BW',
   },
   {
      name: 'Bouvet Island',
      value: 'BV',
   },
   {
      name: 'Brazil',
      value: 'BR',
   },
   {
      name: 'British Indian Ocean Territory',
      value: 'IO',
   },
   {
      name: 'Brunei Darussalam',
      value: 'BN',
   },
   {
      name: 'Bulgaria',
      value: 'BG',
   },
   {
      name: 'Burkina Faso',
      value: 'BF',
   },
   {
      name: 'Burundi',
      value: 'BI',
   },
   {
      name: 'Cambodia',
      value: 'KH',
   },
   {
      name: 'Cameroon',
      value: 'CM',
   },
   {
      name: 'Canada',
      value: 'CA',
   },
   {
      name: 'Cape Verde',
      value: 'CV',
   },
   {
      name: 'Cayman Islands',
      value: 'KY',
   },
   {
      name: 'Central African Republic',
      value: 'CF',
   },
   {
      name: 'Chad',
      value: 'TD',
   },
   {
      name: 'Chile',
      value: 'CL',
   },
   {
      name: 'China',
      value: 'CN',
   },
   {
      name: 'Christmas Island',
      value: 'CX',
   },
   {
      name: 'Cocos (Keeling) Islands',
      value: 'CC',
   },
   {
      name: 'Colombia',
      value: 'CO',
   },
   {
      name: 'Comoros',
      value: 'KM',
   },
   {
      name: 'Congo',
      value: 'CG',
   },
   {
      name: 'Congo, the Democratic Republic of the',
      value: 'CD',
   },
   {
      name: 'Cook Islands',
      value: 'CK',
   },
   {
      name: 'Costa Rica',
      value: 'CR',
   },
   {
      name: "Côte d'Ivoire",
      value: 'CI',
   },
   {
      name: 'Croatia',
      value: 'HR',
   },
   {
      name: 'Cuba',
      value: 'CU',
   },
   {
      name: 'Curaçao',
      value: 'CW',
   },
   {
      name: 'Cyprus',
      value: 'CY',
   },
   {
      name: 'Czech Republic',
      value: 'CZ',
   },
   {
      name: 'Denmark',
      value: 'DK',
   },
   {
      name: 'Djibouti',
      value: 'DJ',
   },
   {
      name: 'Dominica',
      value: 'DM',
   },
   {
      name: 'Dominican Republic',
      value: 'DO',
   },
   {
      name: 'Ecuador',
      value: 'EC',
   },
   {
      name: 'Egypt',
      value: 'EG',
   },
   {
      name: 'El Salvador',
      value: 'SV',
   },
   {
      name: 'Equatorial Guinea',
      value: 'GQ',
   },
   {
      name: 'Eritrea',
      value: 'ER',
   },
   {
      name: 'Estonia',
      value: 'EE',
   },
   {
      name: 'Ethiopia',
      value: 'ET',
   },
   {
      name: 'Falkland Islands (Malvinas)',
      value: 'FK',
   },
   {
      name: 'Faroe Islands',
      value: 'FO',
   },
   {
      name: 'Fiji',
      value: 'FJ',
   },
   {
      name: 'Finland',
      value: 'FI',
   },
   {
      name: 'France',
      value: 'FR',
   },
   {
      name: 'French Guiana',
      value: 'GF',
   },
   {
      name: 'French Polynesia',
      value: 'PF',
   },
   {
      name: 'French Southern Territories',
      value: 'TF',
   },
   {
      name: 'Gabon',
      value: 'GA',
   },
   {
      name: 'Gambia',
      value: 'GM',
   },
   {
      name: 'Georgia',
      value: 'GE',
   },
   {
      name: 'Germany',
      value: 'DE',
   },
   {
      name: 'Ghana',
      value: 'GH',
   },
   {
      name: 'Gibraltar',
      value: 'GI',
   },
   {
      name: 'Greece',
      value: 'GR',
   },
   {
      name: 'Greenland',
      value: 'GL',
   },
   {
      name: 'Grenada',
      value: 'GD',
   },
   {
      name: 'Guadeloupe',
      value: 'GP',
   },
   {
      name: 'Guam',
      value: 'GU',
   },
   {
      name: 'Guatemala',
      value: 'GT',
   },
   {
      name: 'Guernsey',
      value: 'GG',
   },
   {
      name: 'Guinea',
      value: 'GN',
   },
   {
      name: 'Guinea-Bissau',
      value: 'GW',
   },
   {
      name: 'Guyana',
      value: 'GY',
   },
   {
      name: 'Haiti',
      value: 'HT',
   },
   {
      name: 'Heard Island and McDonald Islands',
      value: 'HM',
   },
   {
      name: 'Holy See (Vatican City State)',
      value: 'VA',
   },
   {
      name: 'Honduras',
      value: 'HN',
   },
   {
      name: 'Hong Kong',
      value: 'HK',
   },
   {
      name: 'Hungary',
      value: 'HU',
   },
   {
      name: 'Iceland',
      value: 'IS',
   },
   {
      name: 'India',
      value: 'IN',
   },
   {
      name: 'Indonesia',
      value: 'ID',
   },
   {
      name: 'Iran, Islamic Republic of',
      value: 'IR',
   },
   {
      name: 'Iraq',
      value: 'IQ',
   },
   {
      name: 'Ireland',
      value: 'IE',
   },
   {
      name: 'Isle of Man',
      value: 'IM',
   },
   {
      name: 'Israel',
      value: 'IL',
   },
   {
      name: 'Italy',
      value: 'IT',
   },
   {
      name: 'Jamaica',
      value: 'JM',
   },
   {
      name: 'Japan',
      value: 'JP',
   },
   {
      name: 'Jersey',
      value: 'JE',
   },
   {
      name: 'Jordan',
      value: 'JO',
   },
   {
      name: 'Kazakhstan',
      value: 'KZ',
   },
   {
      name: 'Kenya',
      value: 'KE',
   },
   {
      name: 'Kiribati',
      value: 'KI',
   },
   {
      name: "Korea, Democratic People's Republic of",
      value: 'KP',
   },
   {
      name: 'Korea, Republic of',
      value: 'KR',
   },
   {
      name: 'Kuwait',
      value: 'KW',
   },
   {
      name: 'Kyrgyzstan',
      value: 'KG',
   },
   {
      name: "Lao People's Democratic Republic",
      value: 'LA',
   },
   {
      name: 'Latvia',
      value: 'LV',
   },
   {
      name: 'Lebanon',
      value: 'LB',
   },
   {
      name: 'Lesotho',
      value: 'LS',
   },
   {
      name: 'Liberia',
      value: 'LR',
   },
   {
      name: 'Libya',
      value: 'LY',
   },
   {
      name: 'Liechtenstein',
      value: 'LI',
   },
   {
      name: 'Lithuania',
      value: 'LT',
   },
   {
      name: 'Luxembourg',
      value: 'LU',
   },
   {
      name: 'Macao',
      value: 'MO',
   },
   {
      name: 'Macedonia, The Former Yugoslav Republic\n                of',
      value: 'MK',
   },
   {
      name: 'Madagascar',
      value: 'MG',
   },
   {
      name: 'Malawi',
      value: 'MW',
   },
   {
      name: 'Malaysia',
      value: 'MY',
   },
   {
      name: 'Maldives',
      value: 'MV',
   },
   {
      name: 'Mali',
      value: 'ML',
   },
   {
      name: 'Malta',
      value: 'MT',
   },
   {
      name: 'Marshall Islands',
      value: 'MH',
   },
   {
      name: 'Martinique',
      value: 'MQ',
   },
   {
      name: 'Mauritania',
      value: 'MR',
   },
   {
      name: 'Mauritius',
      value: 'MU',
   },
   {
      name: 'Mayotte',
      value: 'YT',
   },
   {
      name: 'Mexico',
      value: 'MX',
   },
   {
      name: 'Micronesia, Federated States of',
      value: 'FM',
   },
   {
      name: 'Moldova, Republic of',
      value: 'MD',
   },
   {
      name: 'Monaco',
      value: 'MC',
   },
   {
      name: 'Mongolia',
      value: 'MN',
   },
   {
      name: 'Montenegro',
      value: 'ME',
   },
   {
      name: 'Montserrat',
      value: 'MS',
   },
   {
      name: 'Morocco',
      value: 'MA',
   },
   {
      name: 'Mozambique',
      value: 'MZ',
   },
   {
      name: 'Myanmar',
      value: 'MM',
   },
   {
      name: 'Namibia',
      value: 'NA',
   },
   {
      name: 'Nauru',
      value: 'NR',
   },
   {
      name: 'Nepal',
      value: 'NP',
   },
   {
      name: 'Netherlands',
      value: 'NL',
   },
   {
      name: 'New Caledonia',
      value: 'NC',
   },
   {
      name: 'New Zealand',
      value: 'NZ',
   },
   {
      name: 'Nicaragua',
      value: 'NI',
   },
   {
      name: 'Niger',
      value: 'NE',
   },
   {
      name: 'Nigeria',
      value: 'NG',
   },
   {
      name: 'Niue',
      value: 'NU',
   },
   {
      name: 'Norfolk Island',
      value: 'NF',
   },
   {
      name: 'Northern Mariana Islands',
      value: 'MP',
   },
   {
      name: 'Norway',
      value: 'NO',
   },
   {
      name: 'Oman',
      value: 'OM',
   },
   {
      name: 'Pakistan',
      value: 'PK',
   },
   {
      name: 'Palau',
      value: 'PW',
   },
   {
      name: 'Palestinian Territory, Occupied',
      value: 'PS',
   },
   {
      name: 'Panama',
      value: 'PA',
   },
   {
      name: 'Papua New Guinea',
      value: 'PG',
   },
   {
      name: 'Paraguay',
      value: 'PY',
   },
   {
      name: 'Peru',
      value: 'PE',
   },
   {
      name: 'Philippines',
      value: 'PH',
   },
   {
      name: 'Pitcairn',
      value: 'PN',
   },
   {
      name: 'Poland',
      value: 'PL',
   },
   {
      name: 'Portugal',
      value: 'PT',
   },
   {
      name: 'Puerto Rico',
      value: 'PR',
   },
   {
      name: 'Qatar',
      value: 'QA',
   },
   {
      name: 'Réunion',
      value: 'RE',
   },
   {
      name: 'Romania',
      value: 'RO',
   },
   {
      name: 'Russian Federation',
      value: 'RU',
   },
   {
      name: 'Rwanda',
      value: 'RW',
   },
   {
      name: 'Saint Barthélemy',
      value: 'BL',
   },
   {
      name: 'Saint Helena, Ascension and Tristan da\n                Cunha',
      value: 'SH',
   },
   {
      name: 'Saint Kitts and Nevis',
      value: 'KN',
   },
   {
      name: 'Saint Lucia',
      value: 'LC',
   },
   {
      name: 'Saint Martin (French part)',
      value: 'MF',
   },
   {
      name: 'Saint Pierre and Miquelon',
      value: 'PM',
   },
   {
      name: 'Saint Vincent and the Grenadines',
      value: 'VC',
   },
   {
      name: 'Samoa',
      value: 'WS',
   },
   {
      name: 'San Marino',
      value: 'SM',
   },
   {
      name: 'Sao Tome and Principe',
      value: 'ST',
   },
   {
      name: 'Saudi Arabia',
      value: 'SA',
   },
   {
      name: 'Senegal',
      value: 'SN',
   },
   {
      name: 'Serbia',
      value: 'RS',
   },
   {
      name: 'Seychelles',
      value: 'SC',
   },
   {
      name: 'Sierra Leone',
      value: 'SL',
   },
   {
      name: 'Singapore',
      value: 'SG',
   },
   {
      name: 'Sint Maarten (Dutch part)',
      value: 'SX',
   },
   {
      name: 'Slovakia',
      value: 'SK',
   },
   {
      name: 'Slovenia',
      value: 'SI',
   },
   {
      name: 'Solomon Islands',
      value: 'SB',
   },
   {
      name: 'Somalia',
      value: 'SO',
   },
   {
      name: 'South Africa',
      value: 'ZA',
   },
   {
      name: 'South Georgia and the South Sandwich\n                Islands',
      value: 'GS',
   },
   {
      name: 'South Sudan',
      value: 'SS',
   },
   {
      name: 'Spain',
      value: 'ES',
   },
   {
      name: 'Sri Lanka',
      value: 'LK',
   },
   {
      name: 'Sudan',
      value: 'SD',
   },
   {
      name: 'Suriname',
      value: 'SR',
   },
   {
      name: 'Svalbard and Jan Mayen',
      value: 'SJ',
   },
   {
      name: 'Swaziland',
      value: 'SZ',
   },
   {
      name: 'Sweden',
      value: 'SE',
   },
   {
      name: 'Switzerland',
      value: 'CH',
   },
   {
      name: 'Syrian Arab Republic',
      value: 'SY',
   },
   {
      name: 'Taiwan, Province of China',
      value: 'TW',
   },
   {
      name: 'Tajikistan',
      value: 'TJ',
   },
   {
      name: 'Tanzania, United Republic of',
      value: 'TZ',
   },
   {
      name: 'Thailand',
      value: 'TH',
   },
   {
      name: 'Timor-Leste',
      value: 'TL',
   },
   {
      name: 'Togo',
      value: 'TG',
   },
   {
      name: 'Tokelau',
      value: 'TK',
   },
   {
      name: 'Tonga',
      value: 'TO',
   },
   {
      name: 'Trinidad and Tobago',
      value: 'TT',
   },
   {
      name: 'Tunisia',
      value: 'TN',
   },
   {
      name: 'Turkey',
      value: 'TR',
   },
   {
      name: 'Turkmenistan',
      value: 'TM',
   },
   {
      name: 'Turks and Caicos Islands',
      value: 'TC',
   },
   {
      name: 'Tuvalu',
      value: 'TV',
   },
   {
      name: 'Uganda',
      value: 'UG',
   },
   {
      name: 'Ukraine',
      value: 'UA',
   },
   {
      name: 'United Arab Emirates',
      value: 'AE',
   },
   {
      name: 'United Kingdom',
      value: 'GB',
   },
   {
      name: 'United States',
      value: 'US',
   },
   {
      name: 'United States Minor Outlying Islands',
      value: 'UM',
   },
   {
      name: 'Uruguay',
      value: 'UY',
   },
   {
      name: 'Uzbekistan',
      value: 'UZ',
   },
   {
      name: 'Vanuatu',
      value: 'VU',
   },
   {
      name: 'Venezuela, Bolivarian Republic of',
      value: 'VE',
   },
   {
      name: 'Viet Nam',
      value: 'VN',
   },
   {
      name: 'Virgin Islands, British',
      value: 'VG',
   },
   {
      name: 'Virgin Islands, U.S.',
      value: 'VI',
   },
   {
      name: 'Wallis and Futuna',
      value: 'WF',
   },
   {
      name: 'Western Sahara',
      value: 'EH',
   },
   {
      name: 'Yemen',
      value: 'YE',
   },
   {
      name: 'Zambia',
      value: 'ZM',
   },
   {
      name: 'Zimbabwe',
      value: 'ZW',
   },
];

const static_mshied_disability = [
   {
      name: 'Autism Spectrum Disorders',
      value: '494280000',
   },
   {
      name: 'Intellectual Disability',
      value: '494280001',
   },
   {
      name: 'Deaf-Blindness',
      value: '494280002',
   },
   {
      name: 'Hearing Impairment, Including Deafness',
      value: '494280003',
   },
   {
      name: 'Infant/Toddler With A Disability',
      value: '494280004',
   },
   {
      name: 'Medical Condition',
      value: '494280005',
   },
   {
      name: 'Motor Impairment',
      value: '494280006',
   },
   {
      name: 'Mental Impairment',
      value: '494280007',
   },
   {
      name: 'Orthopedic Impairment',
      value: '494280008',
   },
   {
      name: 'Multiple Disabilities',
      value: '494280009',
   },
   {
      name: 'Other',
      value: '494280010',
   },
   {
      name: 'Other Health Impairment',
      value: '494280011',
   },
   {
      name: 'Preschooler With A Disability',
      value: '494280012',
   },
   {
      name: 'Sensory Impairment',
      value: '494280013',
   },
   {
      name: 'Physical Disability',
      value: '494280014',
   },
   {
      name: 'Speech or Language Impairment',
      value: '494280015',
   },
   {
      name: 'Serious Emotional Disability',
      value: '494280016',
   },
   {
      name: 'Specific Learning Disability',
      value: '494280017',
   },
   {
      name: 'Traumatic Brain Injury',
      value: '494280018',
   },
   {
      name: 'Visual Impairment, Including Blindness',
      value: '494280019',
   },
];


const redirectList = ['returning-student'];