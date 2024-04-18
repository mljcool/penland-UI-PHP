<div id="housing-info" class="content">
                <div class="content-header mb-3">
                  <h6 class="mb-0">Housing Details</h6>
                  <small>Enter Housing Details.</small>
                </div>
                <div class="row g-3">
                  <div class="col-md-6">
                    <label class="form-label" for="housing-preference"
                      >Select Housing Preference</label
                    >
                    <select class="select2" id="housing-preference">
                      <option label=""></option>
                      <option
                        value="On-Campus Housing (You will be asked to select your level of housing on the next page.)"
                        >On-Campus Housing (You will be asked to select your
                        level of housing on the next page.)
                      </option>
                      <option
                        value="Off-Campus Housing (If off-campus please select a meal plan below)"
                        >Off-Campus Housing (If off-campus, please select a meal
                        plan below)
                      </option>
                    </select>
                  </div>
                  <div class="col-md-6">
                    <label class="form-label" for="country"
                      >Housing Options</label
                    >
                    <select class="select2" id="country-icons">
                      <option label=" "></option>
                      ><option value="Female Housing">Female Housing</option
                      ><option value="Male Housing">Male Housing</option>
                      <option value="Off Campus Housing"
                        >Off Campus Housing</option
                      >
                      <option value="Gender-Inclusive Housing"
                        >Gender-Inclusive Housing</option
                      >
                    </select>
                  </div>
                  <div class="col-md-6">
                    <label class="form-label" for="off-campus"
                      >Off-Campus Student Meal Plans:</label
                    >
                    <select class="select2" id="off-campus">
                      <option label=""></option
                      ><option value="Off Campus Housing - All Meals"
                        >Off Campus Housing - All Meals</option
                      ><option value="Off Campus Housing - Lunch and Dinner"
                        >Off Campus Housing - Lunch and Dinner</option
                      ><option value="Off Campus Housing - Breakfast only"
                        >Off Campus Housing - Breakfast only</option
                      ><option value="Off Campus Housing - Lunch only"
                        >Off Campus Housing - Lunch only</option
                      ><option value="Off Campus Housing - Dinner only"
                        >Off Campus Housing - Dinner only</option
                      ><option value="Off Campus Housing - No Meals"
                        >Off Campus Housing - No Meals</option
                      ><option value="Off Campus Housing - Breakfast and Lunch"
                        >Off Campus Housing - Breakfast and Lunch</option
                      >
                    </select>
                  </div>
                  <div class="col-md-6">
                    <small class="text-dark fw-medium d-block"
                      >ADA Housing needed</small
                    >
                    <div class="form-check form-check-inline mt-3">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        value="option1"
                      />
                      <label class="form-check-label" for="inlineRadio1"
                        >Yes</label
                      >
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio2"
                        value="option2"
                      />
                      <label class="form-check-label" for="inlineRadio2"
                        >No</label
                      >
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio3"
                        value="option3"
                      />
                      <label class="form-check-label" for="inlineRadio3"
                        >Not Selected</label
                      >
                    </div>
                  </div>
                  <div class="col-md-6">
                    <label class="form-label" for="TagifyBasic"
                      >here someone you'd like to be housed with? List name here
                      and press enter
                    </label>
                    <input
                      id="TagifyBasic"
                      class="form-control"
                      name="TagifyBasic"
                      value=""
                    />
                  </div>
                  <div class="col-md-6 view-prices">
                    <label class="form-label" for="housing-preference">
                      (Please click here for Housing & Fees)
                    </label>
                    <a
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      >View
                    </a>
                  </div>
                  <div class="col-12 d-flex justify-content-between">
                    <button class="btn btn-primary btn-prev">
                      <i class="bx bx-chevron-left bx-sm ms-sm-n2"></i>
                      <span class="align-middle d-sm-inline-block d-none"
                        >Previous</span
                      >
                    </button>
                    <button class="btn btn-primary btn-next">
                      <span
                        class="align-middle d-sm-inline-block d-none me-sm-1 me-0"
                        >Next</span
                      >
                      <i class="bx bx-chevron-right bx-sm me-sm-n2"></i>
                    </button>
                  </div>
                </div>
              </div>