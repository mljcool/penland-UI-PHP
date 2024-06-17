<div class="content-wrapper">
   <div class="container-xxl flex-grow-1">
      <div class="row mb-4 mt-4">
         <div class="col-md-12">
            <ul class="nav nav-pills flex-column flex-md-row mb-3">
               <li class="nav-item">
                  <a class="nav-link active" href="javascript:void(0);"
                     ><i class="bx bx-user me-1"></i> Account</a
                  >
               </li>
               <li class="nav-item">
                  <a
                     class="nav-link"
                     href="pages-account-settings-security.html"
                     ><i class="bx bx-lock-alt me-1"></i> Security</a
                  >
               </li>
            </ul>
            <div class="card mb-4">
               <h5 class="card-header">Profile Details</h5>
               <!-- Account -->
               <div class="card-body">
                  <div
                     class="d-flex align-items-start align-items-sm-center gap-4"
                  >
                     <img
                        src="./assets/Avatar.png"
                        alt="user-avatar"
                        class="d-block rounded"
                        height="100"
                        width="100"
                        id="uploadedAvatar"
                     />
                     <div class="button-wrapper">
                        <label
                           for="upload"
                           class="btn btn-primary me-2 mb-4"
                           tabindex="0"
                        >
                           <span class="d-none d-sm-block"
                              >Upload new photo</span
                           >
                           <i class="bx bx-upload d-block d-sm-none"></i>
                           <input
                              type="file"
                              id="upload"
                              class="account-file-input"
                              hidden
                              accept="image/png, image/jpeg"
                           />
                        </label>
                        <button
                           type="button"
                           class="btn btn-label-secondary account-image-reset mb-4"
                        >
                           <i class="bx bx-reset d-block d-sm-none"></i>
                           <span class="d-none d-sm-block">Reset</span>
                        </button>

                        <p class="text-muted mb-0">
                           Allowed JPG, GIF or PNG. Max size of 800K
                        </p>
                     </div>
                  </div>
               </div>
               <hr class="my-0" />
               <div class="card-body">
                  <form
                     id="formAccountSettings"
                     method="GET"
                     onsubmit="return false"
                  >
                     <div id="personalInfoValidation" class="row">
                        <div class="row g-3">
                           <div class="col">
                              <div class="col">
                                 <fieldset>
                                    <legend>Personal Information</legend>
                                    <div class="col-md-9">
                                       <label class="form-label" for="firstName"
                                          >First Name</label
                                       >
                                       <input
                                          type="text"
                                          id="firstName"
                                          name="firstName"
                                          class="form-control dd-firstname"
                                          placeholder="John"
                                       />
                                    </div>
                                    <div class="col-md-9 mt-3">
                                       <label
                                          class="form-label"
                                          for="middleName"
                                          >Middle Name</label
                                       >
                                       <input
                                          type="text"
                                          id="middleName"
                                          name="middleName"
                                          class="form-control dd-middlename"
                                          placeholder="Middle"
                                       />
                                    </div>
                                    <div class="col-md-9 mt-3">
                                       <label class="form-label" for="lastName"
                                          >Last Name</label
                                       >
                                       <input
                                          type="text"
                                          id="lastName"
                                          name="lastName"
                                          class="form-control dd-lastname"
                                          placeholder="Doe"
                                       />
                                    </div>
                                    <div class="col-md-9 mt-3">
                                       <label
                                          for="bs-datepicker-basic"
                                          class="form-label"
                                          >DOB</label
                                       >
                                       <input
                                          type="text"
                                          id="bs-datepicker-basic"
                                          name="userDob"
                                          placeholder="MM/DD/YYYY"
                                          class="form-control dd-birthdate"
                                       />
                                    </div>
                                    <div class="col-md-9 mt-3">
                                       <label class="form-label" for="gender"
                                          >Gender</label
                                       >
                                       <select
                                          class="select2 w-auto dd-gendercode"
                                          name="gender"
                                          id="gender"
                                          data-style="btn-transparent"
                                          data-icon-base="bx"
                                          data-tick-icon="bx-check text-white"
                                       >
                                          <option label=""></option>
                                          <option value="1">Male</option>
                                          <option value="2">Female</option>
                                          <option value="3">Non-Binary</option>
                                          <option value="4">
                                             I prefer not to answer
                                          </option>
                                       </select>
                                    </div>

                                    <div class="col-md-9 mt-3">
                                       <label
                                          class="form-label"
                                          for="mshied_homelanguage"
                                          >Home Language</label
                                       >
                                       <select
                                          class="select2 w-auto dd-mshied_homelanguage"
                                          name="mshied_homelanguage"
                                          id="mshied_homelanguage"
                                          data-style="btn-transparent"
                                          data-icon-base="bx"
                                          data-tick-icon="bx-check text-white"
                                       ></select>
                                    </div>
                                    <div class="col-md-9 mt-3">
                                       <label
                                          class="form-label"
                                          for="mshied_preferredlanguage"
                                          >Peferred Language</label
                                       >
                                       <select
                                          class="select2 w-auto dd-mshied_preferredlanguage"
                                          name="mshied_preferredlanguage"
                                          id="mshied_preferredlanguage"
                                          data-style="btn-transparent"
                                          data-icon-base="bx"
                                          data-tick-icon="bx-check text-white"
                                       ></select>
                                    </div>
                                 </fieldset>
                              </div>
                              <div class="col mt-3">
                                 <fieldset>
                                    <legend>Demographics</legend>
                                    <div class="col-md-9 mt-3">
                                       <label
                                          class="form-label"
                                          for="mshied_race_"
                                          >Race/Ethnicity</label
                                       >
                                       <select
                                          class="select2 w-auto dd-mshied_race_"
                                          name="mshied_race_"
                                          id="mshied_race_"
                                          data-style="btn-transparent"
                                          data-icon-base="bx"
                                          data-tick-icon="bx-check text-white"
                                       ></select>
                                    </div>
                                    <div class="col-md-9 mt-3">
                                       <label
                                          class="form-label"
                                          for="hso_blackindigenousorpersonofcolor"
                                          >Black, Indigenous, or Person of
                                          Color</label
                                       >
                                       <select
                                          class="select2 w-auto dd-hso_blackindigenousorpersonofcolor"
                                          name="hso_blackindigenousorpersonofcolor"
                                          id="hso_blackindigenousorpersonofcolor"
                                          data-style="btn-transparent"
                                          data-icon-base="bx"
                                          data-tick-icon="bx-check text-white"
                                       >
                                          <option label=""></option>
                                          <option value="1">Yes</option>
                                          <option value="2">No</option>
                                          <option value="3">
                                             Prefer not to answer
                                          </option>
                                       </select>
                                    </div>
                                    <div class="col-md-9 mt-3">
                                       <label
                                          class="form-label"
                                          for="hso_lgbtqiaidentification"
                                          >LGBTQIA+ Identification</label
                                       >
                                       <select
                                          class="select2 w-auto dd-hso_lgbtqiaidentification"
                                          name="hso_lgbtqiaidentification"
                                          id="hso_lgbtqiaidentification"
                                          data-style="btn-transparent"
                                          data-icon-base="bx"
                                          data-tick-icon="bx-check text-white"
                                       >
                                          <option label=""></option>
                                          <option value="1">Yes</option>
                                          <option value="2">No</option>
                                          <option value="3">
                                             Prefer not to answer
                                          </option>
                                       </select>
                                    </div>
                                    <div class="col-md-9 mt-3">
                                       <label
                                          class="form-label"
                                          for="mshied_limitedlanguageproficiency"
                                          >Limited Language Proficiency+
                                          Identification</label
                                       >
                                       <select
                                          class="select2 w-auto dd-mshied_limitedlanguageproficiency"
                                          name="mshied_limitedlanguageproficiency"
                                          id="mshied_limitedlanguageproficiency"
                                          data-style="btn-transparent"
                                          data-icon-base="bx"
                                          data-tick-icon="bx-check text-white"
                                       >
                                          <option label=""></option>
                                          <option value="494280000">
                                             Limited
                                          </option>
                                          <option value="494280001">
                                             Limited Monitored
                                          </option>
                                          <option value="494280002">
                                             Not Limited
                                          </option>
                                       </select>
                                    </div>
                                    <div class="col-md-9 mt-3">
                                       <label
                                          class="form-label"
                                          for="mshied_accommodations"
                                          >Accommodations</label
                                       >
                                       <input
                                          type="text"
                                          name="mshied_accommodations"
                                          id="mshied_accommodations"
                                          class="form-control dd-mshied_accommodations"
                                          placeholder="here..."
                                       />
                                    </div>
                                    <div class="col-md-9 mt-3">
                                       <label
                                          class="form-label"
                                          for="hso_lgbtqiaidentification"
                                          >Disability</label
                                       >
                                       <select
                                          class="select2 w-auto dd-mshied_disability"
                                          name="mshied_disability"
                                          id="mshied_disability"
                                          data-style="btn-transparent"
                                          data-icon-base="bx"
                                          data-tick-icon="bx-check text-white"
                                       >
                                          <option label=""></option>
                                          <option value="1">Yes</option>
                                          <option value="2">No</option>
                                          <option value="2">
                                             Prefer not to answer
                                          </option>
                                       </select>
                                    </div>
                                 </fieldset>
                              </div>
                           </div>
                           <div class="col">
                              <fieldset>
                                 <legend>Contact Information</legend>
                                 <div class="row">
                                    <div class="col-md-9">
                                       <label
                                          class="form-label"
                                          for="phone-number"
                                          >Phone Number</label
                                       >
                                       <div class="input-group">
                                          <span class="input-group-text"
                                             >US (+1)</span
                                          >
                                          <input
                                             class="form-control phone-number-mask dd-mobilephone"
                                             type="text"
                                             name="phoneNumber"
                                             placeholder="Enter Phone Number"
                                          />
                                       </div>
                                    </div>
                                    <div class="col-md-9 mt-3">
                                       <label class="form-label" for="emailTwo"
                                          >email</label
                                       >
                                       <input
                                          type="email"
                                          name="emailTwo"
                                          id="emailTwo"
                                          class="form-control dd-emailaddress2"
                                          placeholder="sample@email.co"
                                       />
                                    </div>
                                 </div>
                                 <div class="row mt-3">
                                    <div class="col-md-9 mt-3">
                                       <label
                                          class="form-label"
                                          for="mailing-address"
                                          >Mailing Address</label
                                       >
                                       <input
                                          type="email"
                                          id="mailing-address"
                                          name="mailingAddress"
                                          class="form-control dd-emailaddress3"
                                          placeholder="Mailing Address..."
                                       />
                                    </div>
                                    <div class="col-md-9 mt-3">
                                       <label class="form-label" for="city"
                                          >City</label
                                       >
                                       <input
                                          type="text"
                                          name="cityAddress"
                                          id="city"
                                          class="form-control dd-address1_city"
                                          placeholder="city Address..."
                                       />
                                    </div>
                                    <div class="col-md-9 mt-3">
                                       <label
                                          class="form-label"
                                          for="state-province"
                                          >State/Province</label
                                       >
                                       <select
                                          class="select2 w-auto dd-address1_stateorprovince"
                                          id="address1_stateorprovince"
                                          data-style="btn-transparent"
                                          name="stateProvince"
                                          data-icon-base="bx"
                                          data-tick-icon="bx-check text-white"
                                          data-allow-clear="true"
                                       ></select>
                                    </div>
                                    <div class="col-md-9 mt-3">
                                       <label class="form-label" for="Postcode"
                                          >Zip/Postcode</label
                                       >
                                       <input
                                          type="text"
                                          id="Postcode"
                                          name="zipcode"
                                          class="form-control dd-address1_postalcode"
                                          placeholder="ZIP Postcode..."
                                       />
                                    </div>
                                    <div class="col-md-9 mt-3">
                                       <label
                                          class="form-label"
                                          for="country-code"
                                          >Country</label
                                       >
                                       <select
                                          class="select2 w-auto dd-address1_country"
                                          id="address1_country"
                                          data-style="btn-transparent"
                                          name="country"
                                          data-icon-base="bx"
                                          data-tick-icon="bx-check text-white"
                                          data-allow-clear="true"
                                       ></select>
                                    </div>
                                 </div>
                              </fieldset>
                           </div>
                        </div>
                     </div>
                     <div class="mt-2">
                        <button type="submit" class="btn btn-primary me-2">
                           Save changes
                        </button>
                        <button type="reset" class="btn btn-label-secondary">
                           Cancel
                        </button>
                     </div>
                  </form>
               </div>
               <!-- /Account -->
            </div>
            <div class="card">
               <h5 class="card-header">Change Password</h5>
               <div class="card-body">
                  <form
                     id="formPasswordSettings"
                     method="GET"
                     onsubmit="return false"
                  >
                     <div class="row">
                        <div class="mb-3 col-md-6 form-password-toggle">
                           <label class="form-label" for="currentPassword"
                              >Current Password</label
                           >
                           <div class="input-group input-group-merge">
                              <input
                                 class="form-control"
                                 type="password"
                                 name="currentPassword"
                                 id="currentPassword"
                                 placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                              />
                              <span class="input-group-text cursor-pointer"
                                 ><i class="bx bx-hide"></i
                              ></span>
                           </div>
                        </div>
                     </div>
                     <div class="row">
                        <div class="mb-3 col-md-6 form-password-toggle">
                           <label class="form-label" for="newPassword"
                              >New Password</label
                           >
                           <div class="input-group input-group-merge">
                              <input
                                 class="form-control"
                                 type="password"
                                 id="newPassword"
                                 name="newPassword"
                                 placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                              />
                              <span class="input-group-text cursor-pointer"
                                 ><i class="bx bx-hide"></i
                              ></span>
                           </div>
                        </div>

                        <div class="mb-3 col-md-6 form-password-toggle">
                           <label class="form-label" for="confirmPassword"
                              >Confirm New Password</label
                           >
                           <div class="input-group input-group-merge">
                              <input
                                 class="form-control"
                                 type="password"
                                 name="confirmPassword"
                                 id="confirmPassword"
                                 placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                              />
                              <span class="input-group-text cursor-pointer"
                                 ><i class="bx bx-hide"></i
                              ></span>
                           </div>
                        </div>
                        <div class="col-12 mb-4">
                           <p class="fw-medium mt-2">Password Requirements:</p>
                           <ul class="ps-3 mb-0">
                              <li class="mb-1">
                                 Minimum 8 characters long - the more, the
                                 better
                              </li>
                              <li class="mb-1">
                                 At least one lowercase character
                              </li>
                              <li>
                                 At least one number, symbol, or whitespace
                                 character
                              </li>
                           </ul>
                        </div>
                        <div class="col-12 mt-1">
                           <button type="submit" class="btn btn-primary me-2">
                              Save changes
                           </button>
                           <button type="reset" class="btn btn-label-secondary">
                              Cancel
                           </button>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
            <div class="card mt-5">
               <h5 class="card-header">Delete Account</h5>
               <div class="card-body">
                  <div class="mb-3 col-12 mb-0">
                     <div class="alert alert-warning">
                        <h6 class="alert-heading fw-medium mb-1">
                           Are you sure you want to delete your account?
                        </h6>
                        <p class="mb-0">
                           Once you delete your account, there is no going back.
                           Please be certain.
                        </p>
                     </div>
                  </div>
                  <form id="formAccountDeactivation" onsubmit="return false">
                     <div class="form-check mb-3">
                        <input
                           class="form-check-input"
                           type="checkbox"
                           name="accountActivation"
                           id="accountActivation"
                        />
                        <label class="form-check-label" for="accountActivation"
                           >I confirm my account deactivation</label
                        >
                     </div>
                     <button
                        type="submit"
                        class="btn btn-danger deactivate-account"
                     >
                        Deactivate Account
                     </button>
                  </form>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>