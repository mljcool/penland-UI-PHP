<div id="housing-info" class="content">
  <div class="content-header mb-3">
    <h6 class="mb-0">Housing Details</h6>
    <small>Enter Housing Details.</small>
    <button type="button" data-bs-toggle="modal" data-bs-target="#priceRangeFeedModal"
      class="btn btn-sm btn-label-primary mt-md-3 d-flex gap-2 align-items-center">
      About Housing & Fees
      <i class="bx bx-info-circle bx-flashing"></i>
    </button>
  </div>
  <div class="row">
    <p>
      <em>Please select your preference below and you will be placed in
        housing and bathrooms with other students with the same housing
        preferenceFor gender-specific housing, please choose either male and
        female.Gender Inclusive Housing is a housing option that allows
        students to share a space with fellow students regardless of their
        sex, gender identity, or gender expression. ..</em>
    </p>
  </div>
  <div class="row g-3">
    <div class="col-md-6">
      <label class="form-label" for="housing-preference">Select Housing Preference</label>
      <select class="select2" name="cr711_preference" id="cr711_preference">
        <option label=""></option>
        <option value="1">
          On-Campus Housing (You will be asked to select your level of
          housing on the next page.)
        </option>
        <option value="2">
          Off-Campus Housing (If off-campus, please select a meal plan
          below)
        </option>
      </select>
    </div>
    <div class="col-md-6">
      <label class="form-label" for="housing-option">Housing Options</label>
      <select class="select2" id="cr711_housingoption" name="cr711_housingoption">
        <option label=" "></option>
        >
        <option value="1">Female Housing</option>
        <option value="2">Male Housing</option>
        <option value="3">Off Campus Housing</option>
        <option value="4">Gender-Inclusive Housing</option>
      </select>
    </div>
    <div class="col-md-6 off-campus">
      <label class="form-label" for="off-campus-meal-plans">Off-Campus Student Meal Plans:</label>
      <select class="select2" id="cr711_offcampusmealplans" name="cr711_offcampusmealplans">
        <option label=""></option>
        <option value="1">Off Campus Housing - All Meals</option>
        <option value="2">Off Campus Housing - Lunch and Dinner</option>
        <option value="3">Off Campus Housing - Breakfast only</option>
        <option value="4">Off Campus Housing - Lunch only</option>
        <option value="5">Off Campus Housing - Dinner only</option>
        <option value="6">Off Campus Housing - No Meals</option>
        <option value="7">Off Campus Housing - Breakfast and Lunch</option>
      </select>
    </div>
    <div class="col-md-6">
      <small class="text-dark fw-medium d-block">ADA Housing needed</small>
      <div class="form-check form-check-inline mt-3">
        <input class="form-check-input" type="radio" name="cr711_adahousingneeded" id="inlineRadio1" value="1" />
        <label class="form-check-label" for="inlineRadio1">Yes</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="cr711_adahousingneeded" id="inlineRadio2" value="2" />
        <label class="form-check-label" for="inlineRadio2">No</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="cr711_adahousingneeded" id="inlineRadio3" value="3" />
        <label class="form-check-label" for="inlineRadio3">Not Selected</label>
      </div>
    </div>
    <!-- <div class="col-md-6">
      <label class="form-label" for="TagifyBasic">here someone you'd like to be housed with? List name here and press
        enter
      </label>
      <input id="TagifyBasic" class="form-control" name="TagifyBasic" value="" />
    </div> -->

    <hr />
    <div class="card mb-4">
      <div class="card-header d-flex justify-content-between align-items-center">
        <p class="card-title m-0">If a housing option is not shown below, it is currently sold out. If you would like to be placed on the waitlist for a particular housing option, please complete the housing waitlist form.</p>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-md mb-md-0 mb-2">
            <div class="form-check custom-option custom-option-icon" style="height: 100%;">
              <label class="form-check-label custom-option-content" for="customCheckboxIcon1">
                <span class="custom-option-body">
                  <i class="bx bx-home"></i>
                  <span class="custom-option-title"> $4242.00 </span>
                  <small> Double Room/Bath Shared with Roomate </small>
                </span>
                <input class="form-check-input" type="checkbox" value="" id="customCheckboxIcon1" checked />
              </label>
            </div>
          </div>
          <div class="col-md mb-md-0 mb-2">
            <div class="form-check custom-option custom-option-icon" style="height: 100%;">
              <label class="form-check-label custom-option-content" for="customCheckboxIcon2">
                <span class="custom-option-body">
                  <i class="bx bx-home"></i>
                  <span class="custom-option-title"> $4172.00 </span>
                  <small> Double Room/Common Bath </small>
                </span>
                <input class="form-check-input" type="checkbox" value="" id="customCheckboxIcon2"  />
              </label>
            </div>
          </div>
          <div class="col-md mb-md-0 mb-2">
            <div class="form-check custom-option custom-option-icon" style="height: 100%;">
              <label class="form-check-label custom-option-content" for="customCheckboxIcon3">
                <span class="custom-option-body">
                  <i class="bx bx-home"></i>
                  <span class="custom-option-title"> $2297.00 </span>
                  <small> Off-Campus Housing - All Meals </small>
                </span>
                <input class="form-check-input" type="checkbox" value="" id="customCheckboxIcon3"  />
              </label>
            </div>
          </div>
          <div class="col-md mb-md-0 mb-2">
            <div class="form-check custom-option custom-option-icon" style="height: 100%;">
              <label class="form-check-label custom-option-content" for="customCheckboxIcon4">
                <span class="custom-option-body">
                  <i class="bx bx-home"></i>
                  <span class="custom-option-title"> $1117.00 </span>
                  <small> Off-Campus Housing - Dinner Only </small>
                </span>
                <input class="form-check-input" type="checkbox" value="" id="customCheckboxIcon4"  />
              </label>
            </div>
          </div>
        </div>
        <div class="row mt-2">

          <div class="col-md mb-md-0  mb-2">
            <div class="form-check custom-option custom-option-icon" style="height: 100%;">
              <label class="form-check-label custom-option-content" for="customCheckboxIcon18">
                <span class="custom-option-body">
                  <i class="bx bx-home"></i>
                  <span class="custom-option-title"> $2013.00 </span>
                  <small>
                    Off-Campus Housing - Lunch & Dinner</small>
                </span>
                <input class="form-check-input" type="checkbox" value="" id="customCheckboxIcon18"  />
              </label>
            </div>
          </div>
          <div class="col-md mb-md-0 mb-2">
            <div class="form-check custom-option custom-option-icon" style="height: 100%;">
              <label class="form-check-label custom-option-content" for="customCheckboxIcon6">
                <span class="custom-option-body">
                  <i class="bx bx-home"></i>
                  <span class="custom-option-title"> $1117.00 </span>
                  <small> Off-Campus Housing - Dinner Only </small>
                </span>
                <input class="form-check-input" type="checkbox" value="" id="customCheckboxIcon6"  />
              </label>
            </div>
          </div>
          <div class="col-md mb-md-0 mb-2">
            <div class="form-check custom-option custom-option-icon" style="height: 100%;">
              <label class="form-check-label custom-option-content" for="customCheckboxIcon7">
                <span class="custom-option-body">
                  <i class="bx bx-home"></i>
                  <span class="custom-option-title"> $3756.00 </span>
                  <small> Quad Dorm (3-4 people per room) </small>
                </span>
                <input class="form-check-input" type="checkbox" value="" id="customCheckboxIcon7"  />
              </label>
            </div>
          </div>
          <div class="col-md">
            <div class="form-check custom-option custom-option-icon" style="height: 100%;">
              <label class="form-check-label custom-option-content" for="customCheckboxIcon8">
                <span class="custom-option-body">
                  <i class="bx bx-home"></i>
                  <span class="custom-option-title"> $4472.00 </span>
                  <small>
                    Single Room/Common Bath (bathroom shared by 2
                    rooms)
                  </small>
                </span>
                <input class="form-check-input" type="checkbox" value="" id="customCheckboxIcon8"  />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div class="divider">
      <div class="divider-text">
        Here someone you'd like to be housed with? Max(5)
      </div>
    </div>

    <div class="row form-repeater">
      <div data-repeater-list="group-a">
        <div data-repeater-item>
          <div class="row form-repeater-list">
            <div class="mb-3 col-lg-6 col-xl-3 col-12 mb-0 col-md-6">
              <label class="form-label" for="form-repeater-1-1">First Name</label>
              <input type="text" name="cr711_firstname" data-type="cr711_firstname" id="form-repeater-1-1"
                class="form-control" placeholder="John " validator="required" />
            </div>
            <div class="mb-3 col-lg-6 col-xl-3 col-12 mb-0 col-md-6">
              <label class="form-label" for="form-repeater-1-2">Last Name</label>
              <input type="text" name="cr711_lastname" data-type="cr711_lastname" id="form-repeater-1-2"
                class="form-control" placeholder=" Doe" validator="required" />
            </div>
            <div class="mb-3 col-lg-6 col-xl-2 col-12 mb-0 col-md-6">
              <label class="form-label" for="form-repeater-1-3">Gender</label>
              <select data-type="cr711_gender" name="cr711_gender" id="form-repeater-1-3" class="form-select"
                validator="required">
                <option value="1">Male</option>
                <option value="2">Female</option>
              </select>
            </div>
            <div class="mb-3 col-md-6 col-lg-12 col-xl-2 col-12 d-flex align-items-center mb-0">
              <button class="btn btn-sm btn-label-danger mt-4" data-repeater-delete>
                <i class="bx bx-x me-1"></i>
                <span class="align-middle">Remove</span>
              </button>
            </div>
          </div>
          <hr />
        </div>
      </div>
      <div class="mb-0 d-flex flex-column align-items-center">
        <button class="btn btn-secondary" data-repeater-create>
          <i class="bx bx-plus me-1"></i>
          <span class="align-middle">Add</span>
        </button>
      </div>
    </div>

    <!-- <div class="row">
      <button class="btn btn-primary " onclick="getListValues();">
        GET VALUES
      </button>
    </div> -->

    <div class="col-12 d-flex justify-content-between">
      <button class="btn btn-primary btn-prev">
        <i class="bx bx-chevron-left bx-sm ms-sm-n2"></i>
        <span class="align-middle d-sm-inline-block d-none">Previous</span>
      </button>
      <button class="btn btn-primary btn-next">
        <span class="align-middle d-sm-inline-block d-none me-sm-1 me-0">Next</span>
        <i class="bx bx-chevron-right bx-sm me-sm-n2"></i>
      </button>
    </div>
  </div>
</div>