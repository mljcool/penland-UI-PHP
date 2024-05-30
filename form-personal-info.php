<div id="personalInfoValidation" class="content">
  <div class="content-header mb-3">
    <!-- <h6 class="mb-0">Personal and Contact information.</h6> -->
    <small>Personal and Contact information.</small>
  </div>
  <div class="row g-3">
    <div class="col">
    <div class="col">
        <fieldset>
          <legend>Personal Information</legend>
          <div class="col-md-9">
            <label class="form-label" for="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" class="form-control dd-firstname" placeholder="John" />
          </div>
          <div class="col-md-9 mt-3">
            <label class="form-label" for="middleName">Middle Name</label>
            <input type="text" id="middleName" name="middleName" class="form-control dd-middlename" placeholder="Middle" />
          </div>
          <div class="col-md-9 mt-3">
            <label class="form-label" for="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" class="form-control dd-lastname" placeholder="Doe" />
          </div>
          <div class="col-md-9 mt-3">
            <label for="bs-datepicker-basic" class="form-label">DOB</label>
            <input type="text" id="bs-datepicker-basic" name="userDob" placeholder="MM/DD/YYYY" class="form-control dd-birthdate" />
          </div>
          <div class="col-md-9 mt-3">
            <label class="form-label" for="gender">Gender</label>
            <select class="select2 w-auto dd-gendercode" name="gender" id="gender" data-style="btn-transparent" data-icon-base="bx"
              data-tick-icon="bx-check text-white">
              <option label=""></option>
              <option value="1">Male</option>
              <option value="2">Female</option>
              <option value="3">Non-Binary</option>
              <option value="4">I prefer not to answer</option>
            </select>
          </div>
          <div class="col-md-9 mt-3">
            <label class="form-label" for="gender">Home Language</label>
            <select class="select2 w-auto dd-mshied_homelanguage" name="dd-mshied_homelanguage" id="mshied_homelanguage" data-style="btn-transparent" data-icon-base="bx"
              data-tick-icon="bx-check text-white">
              <option label=""></option>
          
            </select>
          </div>
          <div class="col-md-9 mt-3">
            <label class="form-label" for="mshied_preferredlanguage">Peferred Language</label>
            <select class="select2 w-auto dd-mshied_preferredlanguage" name="dd-mshied_preferredlanguage" id="mshied_preferredlanguage" data-style="btn-transparent" data-icon-base="bx"
              data-tick-icon="bx-check text-white">
              <option label=""></option>
          
            </select>
          </div>
        </fieldset>
      </div>
      <div class="col mt-3">
        <fieldset>
          <legend>Demographics</legend>
          <div class="col-md-9 mt-3">
            <label class="form-label" for="mshied_race_">Race/Ethnicity</label>
            <select class="select2 w-auto dd-mshied_race_" name="mshied_race_" id="mshied_race_" data-style="btn-transparent" data-icon-base="bx"
              data-tick-icon="bx-check text-white">
             
            </select>
          </div>
          <div class="col-md-9 mt-3">
            <label class="form-label" for="gender">Black, Indigenous, or Person of Color</label>
            <select class="select2 w-auto dd-hso_blackindigenousorpersonofcolor" name="dd-hso_blackindigenousorpersonofcolor" id="hso_blackindigenousorpersonofcolor" data-style="btn-transparent" data-icon-base="bx"
              data-tick-icon="bx-check text-white">
              <option label=""></option>
              <option value="1">Yes</option>
              <option value="2">No</option>
              <option value="2">Prefer not to answer</option>
            </select>
          </div>
          <div class="col-md-9 mt-3">
            <label class="form-label" for="hso_lgbtqiaidentification">LGBTQIA+ Identification</label>
            <select class="select2 w-auto dd-hso_lgbtqiaidentification" name="dd-mshied_preferredlanguage" id="hso_lgbtqiaidentification" data-style="btn-transparent" data-icon-base="bx"
              data-tick-icon="bx-check text-white">
              <option label=""></option>
              <option value="1">Yes</option>
              <option value="2">No</option>
              <option value="2">Prefer not to answer</option>
          
            </select>
          </div>
          <div class="col-md-9 mt-3">
            <label class="form-label" for="mshied_limitedlanguageproficiency">Limited Language Proficiency+ Identification</label>
            <select class="select2 w-auto dd-mshied_limitedlanguageproficiency" name="dd-mshied_preferredlanguage" id="mshied_limitedlanguageproficiency" data-style="btn-transparent" data-icon-base="bx"
              data-tick-icon="bx-check text-white">
              <option label=""></option>
              <option value="494280000">Limited</option>
              <option value="494280001">Limited Monitored</option>
              <option value="494280002">Not Limited</option>
          
            </select>
          </div>
          <div class="col-md-9 mt-3">
            <label class="form-label" for="hso_lgbtqiaidentification">Accommodations</label>
            <input type="text" name="hso_lgbtqiaidentification" id="hso_lgbtqiaidentification" class="form-control dd-hso_lgbtqiaidentification" placeholder="here..." />
          </div>
          <div class="col-md-9 mt-3">
            <label class="form-label" for="hso_lgbtqiaidentification">Disability</label>
            <select class="select2 w-auto dd-mshied_disability" name="dd-mshied_disability" id="mshied_disability" data-style="btn-transparent" data-icon-base="bx"
              data-tick-icon="bx-check text-white">
              <option label=""></option>
              <option value="1">Yes</option>
              <option value="2">No</option>
              <option value="2">Prefer not to answer</option>
          
            </select>
          </div>
        </fieldset>
      </div>
    </div>
    <div class="col ">
      <fieldset>
        <legend>Contact Information</legend>
        <div class="row">
          <div class="col-md-9">
            <label class="form-label" for="phone-number">Phone Number</label>
            <div class="input-group">
              <span class="input-group-text">US (+1)</span>
              <input class="form-control phone-number-mask dd-mobilephone" type="text" name="phoneNumber"
                placeholder="Enter Phone Number" />
            </div>
          </div>
          <div class="col-md-9 mt-3">
            <label class="form-label" for="emailTwo">email</label>
            <input type="email" name="emailTwo" id="emailTwo" class="form-control dd-emailaddress2" placeholder="sample@email.co" />
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-md-9 mt-3">
            <label class="form-label" for="mailing-address">Mailing Address</label>
            <input type="email" id="mailing-address" name="mailingAddress" class="form-control dd-emailaddress3"
              placeholder="Mailing Address..." />
          </div>
          <div class="col-md-9 mt-3">
            <label class="form-label" for="city">City</label>
            <input type="text" name="cityAddress" id="city" class="form-control dd-address1_city" placeholder="city Address..." />
          </div>
          <div class="col-md-9 mt-3">
            <label class="form-label" for="state-province">State/Province</label>
            <select class="select2 w-auto dd-address1_stateorprovince" id="address1_stateorprovince" data-style="btn-transparent" name="stateProvince"
              data-icon-base="bx" data-tick-icon="bx-check text-white" data-allow-clear="true">
              
            </select>
          </div>
          <div class="col-md-9 mt-3">
            <label class="form-label" for="Postcode">Zip/Postcode</label>
            <input type="text" id="Postcode" name="zipcode" class="form-control dd-address1_postalcode"
              placeholder="ZIP Postcode..." />
          </div>
          <div class="col-md-9 mt-3">
            <label class="form-label" for="country-code">Country</label>
            <select class="select2 w-auto dd-address1_country" id="address1_country" data-style="btn-transparent" name="country"
              data-icon-base="bx" data-tick-icon="bx-check text-white" data-allow-clear="true">
              
            </select>
          </div>
        </div>
      </fieldset>
    </div>

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