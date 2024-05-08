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
  appendItemToCart: function (_item) {
    return `<li class="list-group-item p-4 cart-item-${_item.mshied_courseid}">
      <div class="d-flex gap-3">
        <div class="flex-shrink-0 d-flex align-items-center">
          <img
            src="./assets/Over-view-1.png"
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
              <span class="me-1">Semester:</span>
              <a href="javascript:void(0)" class="me-3"><i class='bx bxs-calendar-event'></i> ${_item.semester}</a>
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
                <span class="badge rounded-pill bg-label-info mb-2">Application Fee   <span class="text-primary">${_item.applicationFee}</span> </span>
                <span class="badge rounded-pill bg-label-info "> Tuition Fee <span class="text-primary">${_item.tuitionFee}</span> </span>
                </div>
                <button
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
            src="./assets/Over-view-1.png"
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
              <span class="me-1">Semester:</span>
              <a href="javascript:void(0)" class="me-3"><i class='bx bxs-calendar-event'></i> ${_item.semester}</a>
            </div>
            </div>
            <div class="col-md-4">
              <div class="text-md-end">
                <div class="my-2 my-md-4 mb-md-5 d-flex flex-column ">
                <span class="badge rounded-pill bg-label-info mb-2">Application Fee   <span class="text-primary">${_item.applicationFee}</span> </span>
                <span class="badge rounded-pill bg-label-info "> Tuition Fee <span class="text-primary">${_item.tuitionFee}</span> </span>
                </div>
                <button
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
};

var FORM_STEPS = {
  ACCOUNT: 1,
  PERSONAL: 2,
  HOUSING: 3,
  TERMS: 4,
  PAYMENT: 5,
  CONFIRMATION: 6,
};

var FORM_INDEX = {
  ACCOUNT: 0,
  PERSONAL: 1,
  HOUSING: 2,
  TERMS: 3,
  PAYMENT: 4,
  CONFIRMATION: 5,
};
