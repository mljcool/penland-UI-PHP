<!DOCTYPE html>
<html lang="en" class="light-style docs-page ">
  <head>
  <?php 
    include_once('./header.php');
  ?>
  </head>
  <body>
      <?php include_once('./home-navigition.php'); ?>

    <div class="container-fluid">
      <div class="row top-section-program">
        <h1>WORKSHOPS & New Student Form</h1>
        <label>(TEST ENVIRONMENT 👩‍💻)</label>
      </div>

      <!-- START BODY PAGE -->
      <div class="row new-student-form">
        <div class="bs-stepper vertical wizard-modern wizard-modern-vertical wizard-numbered mt-2 card mb-4" style="flex-direction: row;">
          <div class="bs-stepper-header">
            <div class="step" data-target="#account-details">
              <button type="button" class="step-trigger">
                <span class="bs-stepper-circle">1</span>
                <span class="bs-stepper-label mt-1">
                  <span class="bs-stepper-title">Account Details</span>
                  <span class="bs-stepper-subtitle">Setup Account Details</span>
                </span>
              </button>
            </div>
            <div class="line">
              <!-- <i class="bx bx-chevron-right"></i> -->
            </div>
            <div class="step" data-target="#personal-info">
              <button type="button" class="step-trigger">
                <span class="bs-stepper-circle">2</span>
                <span class="bs-stepper-label mt-1">
                  <span class="bs-stepper-title">Personal Info</span>
                  <span class="bs-stepper-subtitle">Add personal info</span>
                </span>
              </button>
            </div>
            <div class="line">
              <!-- <i class="bx bx-chevron-right"></i> -->
            </div>

            <div class="step" data-target="#housing-info">
              <button type="button" class="step-trigger">
                <span class="bs-stepper-circle">3</span>
                <span class="bs-stepper-label mt-1">
                  <span class="bs-stepper-title">Housing</span>
                  <span class="bs-stepper-subtitle">Housing Details</span>
                </span>
              </button>
            </div>
            <div class="line">
              <!-- <i class="bx bx-chevron-right"></i> -->
            </div>

            <div class="step" data-target="#terms-info">
              <button type="button" class="step-trigger">
                <span class="bs-stepper-circle">4</span>
                <span class="bs-stepper-label mt-1">
                  <span class="bs-stepper-title">Terms and Conditions</span>
                  <span class="bs-stepper-subtitle"
                    >Cancellation/ Terms and Conditions</span
                  >
                </span>
              </button>
            </div>
            <div class="line">
              <!-- <i class="bx bx-chevron-right"></i> -->
            </div>

            <div class="step" data-target="#payment-link">
              <button type="button" class="step-trigger">
                <span class="bs-stepper-circle">5</span>
                <span class="bs-stepper-label mt-1">
                  <span class="bs-stepper-title">Payment</span>
                  <span class="bs-stepper-subtitle">Payment Method</span>
                </span>
              </button>
            </div>
          </div>
          <div class="bs-stepper-content">
            <form onSubmit="return false">
              <!-- Account Details -->
              <div id="account-details" class="content">
                <div class="content-header mb-3">
                  <h6 class="mb-0">Account Details</h6>
                  <small>Enter Your Account Details.</small>
                </div>
                <div class="row g-3">
                  <div class="col-md-6">
                    <label class="form-label" for="username">Username</label>
                    <input
                      type="text"
                      id="username"
                      class="form-control"
                      placeholder="johndoe"
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="form-label" for="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      class="form-control"
                      placeholder="john.doe@email.com"
                      aria-label="john.doe"
                    />
                  </div>
                  <div class="col-md-6 form-password-toggle">
                    <label class="form-label" for="password">Password</label>
                    <div class="input-group input-group-merge">
                      <input
                        type="password"
                        id="password"
                        class="form-control"
                        placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                        aria-describedby="password2"
                      />
                      <span
                        class="input-group-text cursor-pointer"
                        id="password2"
                        ><i class="bx bx-hide"></i
                      ></span>
                    </div>
                  </div>
                  <div class="col-md-6 form-password-toggle">
                    <label class="form-label" for="confirm-password"
                      >Confirm Password</label
                    >
                    <div class="input-group input-group-merge">
                      <input
                        type="password"
                        id="confirm-password"
                        class="form-control"
                        placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                        aria-describedby="confirm-password2"
                      />
                      <span
                        class="input-group-text cursor-pointer"
                        id="confirm-password2"
                        ><i class="bx bx-hide"></i
                      ></span>
                    </div>
                  </div>
                  <div class="col-12 d-flex justify-content-between">
                    <button class="btn btn-label-secondary btn-prev" disabled>
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
              <!-- Personal Info -->
              <div id="personal-info" class="content">
                <div class="content-header mb-3">
                  <!-- <h6 class="mb-0">Personal and Contact information.</h6> -->
                  <small>Personal and Contact information.</small>
                </div>
                <div class="row g-3">
                  <div class="col">
                    <fieldset>
                      <legend>Personal Information</legend>
                      <div class="col-md-9">
                        <label class="form-label" for="first-name"
                          >First Name</label
                        >
                        <input
                          type="text"
                          id="first-name"
                          class="form-control"
                          placeholder="John"
                        />
                      </div>
                      <div class="col-md-9 mt-3">
                        <label class="form-label" for="middle-name"
                          >Middle Name</label
                        >
                        <input
                          type="text"
                          id="middle-name"
                          class="form-control"
                          placeholder="Middle"
                        />
                      </div>
                      <div class="col-md-9 mt-3">
                        <label class="form-label" for="last-name"
                          >Last Name</label
                        >
                        <input
                          type="text"
                          id="last-name"
                          class="form-control"
                          placeholder="Doe"
                        />
                      </div>
                      <div class="col-md-9 mt-3">
                        <label for="bs-datepicker-basic" class="form-label"
                          >DOB</label
                        >
                        <input
                          type="text"
                          id="bs-datepicker-basic"
                          placeholder="MM/DD/YYYY"
                          class="form-control"
                        />
                      </div>
                      <div class="col-md-9 mt-3">
                        <label class="form-label" for="gender">Gender</label>
                        <select
                          class="select2 w-auto"
                          id="gender"
                          data-style="btn-transparent"
                          data-icon-base="bx"
                          data-tick-icon="bx-check text-white"
                        >
                          <option label=""></option
                          ><option value="1">Male</option
                          ><option value="2">Female</option
                          ><option value="3">All-Gender</option
                          ><option value="4">Gender-Inclusive</option>
                        </select>
                      </div>
                    </fieldset>
                  </div>
                  <div class="col">
                    <fieldset>
                      <legend>Contact Information</legend>
                      <div class="row">
                        <div class="col-md-9">
                          <label class="form-label" for="first-name"
                            >Phone Number</label
                          >
                          <div class="input-group">
                            <span class="input-group-text">US (+1)</span>
                            <input
                              class="form-control phone-number-mask"
                              type="text"
                              placeholder="Enter Phone Number"
                            />
                          </div>
                        </div>
                        <div class="col-md-9 mt-3">
                          <label class="form-label" for="email-user"
                            >email</label
                          >
                          <input
                            type="email"
                            id="email-user"
                            class="form-control"
                            placeholder="sample@email.co"
                          />
                        </div>
                      </div>
                      <div class="row mt-3">
                        <div class="col-md-9 mt-3">
                          <label class="form-label" for="mailing-address"
                            >Mailing Address</label
                          >
                          <input
                            type="email"
                            id="mailing-address"
                            class="form-control"
                            placeholder="Mailing Address..."
                          />
                        </div>
                        <div class="col-md-9 mt-3">
                          <label class="form-label" for="city">City</label>
                          <input
                            type="text"
                            id="city"
                            class="form-control"
                            placeholder="city Address..."
                          />
                        </div>
                        <div class="col-md-9 mt-3">
                          <label class="form-label" for="state-province"
                            >State/Province</label
                          >
                          <select
                            class="select2 w-auto"
                            id="state-province"
                            data-style="btn-transparent"
                            data-icon-base="bx"
                            data-tick-icon="bx-check text-white"
                          >
                            <option label=""></option
                            ><option value="AK">Alaska</option
                            ><option value="AL">Alabama</option
                            ><option value="AR">Arkansas</option
                            ><option value="AS">American Samoa</option
                            ><option value="AZ">Arizona</option
                            ><option value="CA">California</option
                            ><option value="CO">Colorado</option
                            ><option value="CT">Connecticut</option
                            ><option value="DC">District of Columbia</option
                            ><option value="DE">Delaware</option
                            ><option value="FL">Florida</option
                            ><option value="GA">Georgia</option
                            ><option value="GU">Guam</option
                            ><option value="HI">Hawaii</option
                            ><option value="IA">Iowa</option
                            ><option value="ID">Idaho</option
                            ><option value="IL">Illinois</option
                            ><option value="IN">Indiana</option
                            ><option value="KS">Kansas</option
                            ><option value="KY">Kentucky</option
                            ><option value="LA">Louisiana</option
                            ><option value="MA">Massachusetts</option
                            ><option value="MD">Maryland</option
                            ><option value="ME">Maine</option
                            ><option value="MI">Michigan</option
                            ><option value="MN">Minnesota</option
                            ><option value="MO">Missouri</option
                            ><option value="MS">Mississippi</option
                            ><option value="MT">Montana</option
                            ><option value="NC">North Carolina</option
                            ><option value="ND">North Dakota</option
                            ><option value="NE">Nebraska</option
                            ><option value="NH">New Hampshire</option
                            ><option value="NJ">New Jersey</option
                            ><option value="NM">New Mexico</option
                            ><option value="NV">Nevada</option
                            ><option value="NY">New York</option
                            ><option value="OH">Ohio</option
                            ><option value="OK">Oklahoma</option
                            ><option value="OR">Oregon</option
                            ><option value="PA">Pennsylvania</option
                            ><option value="PR">Puerto Rico</option
                            ><option value="RI">Rhode Island</option
                            ><option value="SC">South Carolina</option
                            ><option value="SD">South Dakota</option
                            ><option value="TN">Tennessee</option
                            ><option value="TX">Texas</option
                            ><option value="UT">Utah</option
                            ><option value="VA">Virginia</option
                            ><option value="VI">Virgin Islands</option
                            ><option value="VT">Vermont</option
                            ><option value="WA">Washington</option
                            ><option value="WI">Wisconsin</option
                            ><option value="WV">West Virginia</option
                            ><option value="WY">Wyoming</option>
                          </select>
                        </div>
                        <div class="col-md-9 mt-3">
                          <label class="form-label" for="Postcode"
                            >Zip/Postcode</label
                          >
                          <input
                            type="text"
                            id="Postcode"
                            class="form-control"
                            placeholder="ZIP Postcode..."
                          />
                        </div>
                        <div class="col-md-9 mt-3">
                          <label class="form-label" for="country-code"
                            >Country</label
                          >
                          <select
                            class="select2 w-auto"
                            id="country-code"
                            data-style="btn-transparent"
                            data-icon-base="bx"
                            data-tick-icon="bx-check text-white"
                          >
                            <option label=""></option>
                            <option value="AF">Afghanistan</option>
                            <option value="AX">Åland Islands</option>
                            <option value="AL">Albania</option>
                            <option value="DZ">Algeria</option>
                            <option value="AS">American Samoa</option>
                            <option value="AD">Andorra</option>
                            <option value="AO">Angola</option>
                            <option value="AI">Anguilla</option>
                            <option value="AQ">Antarctica</option>
                            <option value="AG">Antigua and Barbuda</option>
                            <option value="AR">Argentina</option>
                            <option value="AM">Armenia</option>
                            <option value="AW">Aruba</option>
                            <option value="AU">Australia</option>
                            <option value="AT">Austria</option>
                            <option value="AZ">Azerbaijan</option>
                            <option value="BS">Bahamas</option>
                            <option value="BH">Bahrain</option>
                            <option value="BD">Bangladesh</option>
                            <option value="BB">Barbados</option>
                            <option value="BY">Belarus</option>
                            <option value="BE">Belgium</option>
                            <option value="BZ">Belize</option>
                            <option value="BJ">Benin</option>
                            <option value="BM">Bermuda</option>
                            <option value="BT">Bhutan</option>
                            <option value="BO"
                              >Bolivia, Plurinational State of</option
                            >
                            <option value="BQ"
                              >Bonaire, Sint Eustatius and Saba</option
                            >
                            <option value="BA">Bosnia and Herzegovina</option>
                            <option value="BW">Botswana</option>
                            <option value="BV">Bouvet Island</option>
                            <option value="BR">Brazil</option>
                            <option value="IO"
                              >British Indian Ocean Territory</option
                            >
                            <option value="BN">Brunei Darussalam</option>
                            <option value="BG">Bulgaria</option>
                            <option value="BF">Burkina Faso</option>
                            <option value="BI">Burundi</option>
                            <option value="KH">Cambodia</option>
                            <option value="CM">Cameroon</option>
                            <option value="CA">Canada</option>
                            <option value="CV">Cape Verde</option>
                            <option value="KY">Cayman Islands</option>
                            <option value="CF">Central African Republic</option>
                            <option value="TD">Chad</option>
                            <option value="CL">Chile</option>
                            <option value="CN">China</option>
                            <option value="CX">Christmas Island</option>
                            <option value="CC">Cocos (Keeling) Islands</option>
                            <option value="CO">Colombia</option>
                            <option value="KM">Comoros</option>
                            <option value="CG">Congo</option>
                            <option value="CD"
                              >Congo, the Democratic Republic of the</option
                            >
                            <option value="CK">Cook Islands</option>
                            <option value="CR">Costa Rica</option>
                            <option value="CI">Côte d'Ivoire</option>
                            <option value="HR">Croatia</option>
                            <option value="CU">Cuba</option>
                            <option value="CW">Curaçao</option>
                            <option value="CY">Cyprus</option>
                            <option value="CZ">Czech Republic</option>
                            <option value="DK">Denmark</option>
                            <option value="DJ">Djibouti</option>
                            <option value="DM">Dominica</option>
                            <option value="DO">Dominican Republic</option>
                            <option value="EC">Ecuador</option>
                            <option value="EG">Egypt</option>
                            <option value="SV">El Salvador</option>
                            <option value="GQ">Equatorial Guinea</option>
                            <option value="ER">Eritrea</option>
                            <option value="EE">Estonia</option>
                            <option value="ET">Ethiopia</option>
                            <option value="FK"
                              >Falkland Islands (Malvinas)</option
                            >
                            <option value="FO">Faroe Islands</option>
                            <option value="FJ">Fiji</option>
                            <option value="FI">Finland</option>
                            <option value="FR">France</option>
                            <option value="GF">French Guiana</option>
                            <option value="PF">French Polynesia</option>
                            <option value="TF"
                              >French Southern Territories</option
                            >
                            <option value="GA">Gabon</option>
                            <option value="GM">Gambia</option>
                            <option value="GE">Georgia</option>
                            <option value="DE">Germany</option>
                            <option value="GH">Ghana</option>
                            <option value="GI">Gibraltar</option>
                            <option value="GR">Greece</option>
                            <option value="GL">Greenland</option>
                            <option value="GD">Grenada</option>
                            <option value="GP">Guadeloupe</option>
                            <option value="GU">Guam</option>
                            <option value="GT">Guatemala</option>
                            <option value="GG">Guernsey</option>
                            <option value="GN">Guinea</option>
                            <option value="GW">Guinea-Bissau</option>
                            <option value="GY">Guyana</option>
                            <option value="HT">Haiti</option>
                            <option value="HM"
                              >Heard Island and McDonald Islands</option
                            >
                            <option value="VA"
                              >Holy See (Vatican City State)</option
                            >
                            <option value="HN">Honduras</option>
                            <option value="HK">Hong Kong</option>
                            <option value="HU">Hungary</option>
                            <option value="IS">Iceland</option>
                            <option value="IN">India</option>
                            <option value="ID">Indonesia</option>
                            <option value="IR"
                              >Iran, Islamic Republic of</option
                            >
                            <option value="IQ">Iraq</option>
                            <option value="IE">Ireland</option>
                            <option value="IM">Isle of Man</option>
                            <option value="IL">Israel</option>
                            <option value="IT">Italy</option>
                            <option value="JM">Jamaica</option>
                            <option value="JP">Japan</option>
                            <option value="JE">Jersey</option>
                            <option value="JO">Jordan</option>
                            <option value="KZ">Kazakhstan</option>
                            <option value="KE">Kenya</option>
                            <option value="KI">Kiribati</option>
                            <option value="KP"
                              >Korea, Democratic People's Republic of</option
                            >
                            <option value="KR">Korea, Republic of</option>
                            <option value="KW">Kuwait</option>
                            <option value="KG">Kyrgyzstan</option>
                            <option value="LA"
                              >Lao People's Democratic Republic</option
                            >
                            <option value="LV">Latvia</option>
                            <option value="LB">Lebanon</option>
                            <option value="LS">Lesotho</option>
                            <option value="LR">Liberia</option>
                            <option value="LY">Libya</option>
                            <option value="LI">Liechtenstein</option>
                            <option value="LT">Lithuania</option>
                            <option value="LU">Luxembourg</option>
                            <option value="MO">Macao</option>
                            <option value="MK"
                              >Macedonia, The Former Yugoslav Republic
                              of</option
                            >
                            <option value="MG">Madagascar</option>
                            <option value="MW">Malawi</option>
                            <option value="MY">Malaysia</option>
                            <option value="MV">Maldives</option>
                            <option value="ML">Mali</option>
                            <option value="MT">Malta</option>
                            <option value="MH">Marshall Islands</option>
                            <option value="MQ">Martinique</option>
                            <option value="MR">Mauritania</option>
                            <option value="MU">Mauritius</option>
                            <option value="YT">Mayotte</option>
                            <option value="MX">Mexico</option>
                            <option value="FM"
                              >Micronesia, Federated States of</option
                            >
                            <option value="MD">Moldova, Republic of</option>
                            <option value="MC">Monaco</option>
                            <option value="MN">Mongolia</option>
                            <option value="ME">Montenegro</option>
                            <option value="MS">Montserrat</option>
                            <option value="MA">Morocco</option>
                            <option value="MZ">Mozambique</option>
                            <option value="MM">Myanmar</option>
                            <option value="NA">Namibia</option>
                            <option value="NR">Nauru</option>
                            <option value="NP">Nepal</option>
                            <option value="NL">Netherlands</option>
                            <option value="NC">New Caledonia</option>
                            <option value="NZ">New Zealand</option>
                            <option value="NI">Nicaragua</option>
                            <option value="NE">Niger</option>
                            <option value="NG">Nigeria</option>
                            <option value="NU">Niue</option>
                            <option value="NF">Norfolk Island</option>
                            <option value="MP">Northern Mariana Islands</option>
                            <option value="NO">Norway</option>
                            <option value="OM">Oman</option>
                            <option value="PK">Pakistan</option>
                            <option value="PW">Palau</option>
                            <option value="PS"
                              >Palestinian Territory, Occupied</option
                            >
                            <option value="PA">Panama</option>
                            <option value="PG">Papua New Guinea</option>
                            <option value="PY">Paraguay</option>
                            <option value="PE">Peru</option>
                            <option value="PH">Philippines</option>
                            <option value="PN">Pitcairn</option>
                            <option value="PL">Poland</option>
                            <option value="PT">Portugal</option>
                            <option value="PR">Puerto Rico</option>
                            <option value="QA">Qatar</option>
                            <option value="RE">Réunion</option>
                            <option value="RO">Romania</option>
                            <option value="RU">Russian Federation</option>
                            <option value="RW">Rwanda</option>
                            <option value="BL">Saint Barthélemy</option>
                            <option value="SH"
                              >Saint Helena, Ascension and Tristan da
                              Cunha</option
                            >
                            <option value="KN">Saint Kitts and Nevis</option>
                            <option value="LC">Saint Lucia</option>
                            <option value="MF"
                              >Saint Martin (French part)</option
                            >
                            <option value="PM"
                              >Saint Pierre and Miquelon</option
                            >
                            <option value="VC"
                              >Saint Vincent and the Grenadines</option
                            >
                            <option value="WS">Samoa</option>
                            <option value="SM">San Marino</option>
                            <option value="ST">Sao Tome and Principe</option>
                            <option value="SA">Saudi Arabia</option>
                            <option value="SN">Senegal</option>
                            <option value="RS">Serbia</option>
                            <option value="SC">Seychelles</option>
                            <option value="SL">Sierra Leone</option>
                            <option value="SG">Singapore</option>
                            <option value="SX"
                              >Sint Maarten (Dutch part)</option
                            >
                            <option value="SK">Slovakia</option>
                            <option value="SI">Slovenia</option>
                            <option value="SB">Solomon Islands</option>
                            <option value="SO">Somalia</option>
                            <option value="ZA">South Africa</option>
                            <option value="GS"
                              >South Georgia and the South Sandwich
                              Islands</option
                            >
                            <option value="SS">South Sudan</option>
                            <option value="ES">Spain</option>
                            <option value="LK">Sri Lanka</option>
                            <option value="SD">Sudan</option>
                            <option value="SR">Suriname</option>
                            <option value="SJ">Svalbard and Jan Mayen</option>
                            <option value="SZ">Swaziland</option>
                            <option value="SE">Sweden</option>
                            <option value="CH">Switzerland</option>
                            <option value="SY">Syrian Arab Republic</option>
                            <option value="TW"
                              >Taiwan, Province of China</option
                            >
                            <option value="TJ">Tajikistan</option>
                            <option value="TZ"
                              >Tanzania, United Republic of</option
                            >
                            <option value="TH">Thailand</option>
                            <option value="TL">Timor-Leste</option>
                            <option value="TG">Togo</option>
                            <option value="TK">Tokelau</option>
                            <option value="TO">Tonga</option>
                            <option value="TT">Trinidad and Tobago</option>
                            <option value="TN">Tunisia</option>
                            <option value="TR">Turkey</option>
                            <option value="TM">Turkmenistan</option>
                            <option value="TC">Turks and Caicos Islands</option>
                            <option value="TV">Tuvalu</option>
                            <option value="UG">Uganda</option>
                            <option value="UA">Ukraine</option>
                            <option value="AE">United Arab Emirates</option>
                            <option value="GB">United Kingdom</option>
                            <option selected value="US">United States</option>
                            <option value="UM"
                              >United States Minor Outlying Islands</option
                            >
                            <option value="UY">Uruguay</option>
                            <option value="UZ">Uzbekistan</option>
                            <option value="VU">Vanuatu</option>
                            <option value="VE"
                              >Venezuela, Bolivarian Republic of</option
                            >
                            <option value="VN">Viet Nam</option>
                            <option value="VG">Virgin Islands, British</option>
                            <option value="VI">Virgin Islands, U.S.</option>
                            <option value="WF">Wallis and Futuna</option>
                            <option value="EH">Western Sahara</option>
                            <option value="YE">Yemen</option>
                            <option value="ZM">Zambia</option>
                            <option value="ZW">Zimbabwe</option>
                          </select>
                        </div>
                      </div>
                    </fieldset>
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

              <!-- Housing Details -->
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

              <!-- Terms and condition -->
              <div id="terms-info" class="content">
                <div class="content-header mb-3">
                  <h6 class="mb-0">Cancellation Policy</h6>
                </div>
                <div class="row g-3">
                  <div class="col-md-12">
                    <div class="terms-context">
                      <strong>
                        PLEASE READ THESE TERMS AND CONDITIONS CAREFULLY
                      </strong>
                      <p class="terms-wrapper fold">
                        Penland makes a substantial investment when planning a
                        workshop, and vacancies can be hard to fill even if
                        there is a waiting list, so we must charge cancellation
                        fees to offset the cost of these vacancies. All
                        cancellations must be made in writing, via email, to
                        <a href="mailto:registrar@penland.org" target="_blank"
                          >registrar@penland.org</a
                        >
                        If you cancel anytime up to 30 before the beginning of a
                        workshop, you will receive a refund minus the $50
                        nonrefundable processing fee and a cancellation fee
                        <b
                          >($250 for concentration and $100 for all other
                          workshops).</b
                        >
                        If you cancel less than 30 days before the beginning of
                        the workshop, refunds are not available. However, if you
                        test positive for COVID-19 within the 10 days prior to
                        your workshop, please contact the registrar. If it is
                        necessary for Penland to cancel a workshop for any
                        reason, students will be notified and offered another
                        class or a full refund. We cannot, however, be
                        responsible for nonrefundable airline tickets or other
                        travel expenses. <br />This policy also applies to
                        partial scholarship recipients.
                      </p>
                      <div>
                        <div class="form-check mt-3">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck1"
                          />
                          <label class="form-check-label" for="defaultCheck1">
                            I agree to the Privacy Policy and Terms of Service
                          </label>
                        </div>
                      </div>
                    </div>
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

              <!-- Social Links -->
              <div id="payment-link" class="content">
                <div class="content-header mb-3">
                  <h6 class="mb-0">Payment</h6>
                  <small>Proceed to checkout : </small>
                </div>
                <div class="row g-3">
                  <div class="row stripe-container">
                    <h3>Stripe will be implemented here</h3>
                    <img class="stripe-placeholder" src="./assets/stripe.png" />
                  </div>

                  <div class="col-12 d-flex justify-content-between">
                    <button class="btn btn-primary btn-prev">
                      <i class="bx bx-chevron-left bx-sm ms-sm-n2"></i>
                      <span class="align-middle d-sm-inline-block d-none"
                        >Previous</span
                      >
                    </button>
                    <button class="btn btn-success btn-submit">Submit</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <!-- END BODY PAGE -->
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div
        class="modal-dialog modal-dialog modal-lg modal-dialog-scrollable"
        role="document"
      >
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Housing & Fees</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="wpb_wrapper">
              <div class="wpb_text_column wpb_content_element ">
                <div class="wpb_wrapper">
                  <hr />
                  <strong
                    >Fees: Spring 2024 Concentration and Short Session</strong
                  >
                  <div
                    class="dalt-table-container"
                    style="margin-top: 20px; margin-bottom: 20px; width: auto; height: auto;"
                  >
                    <table
                      id="dalt-table-127"
                      class="dalt-table"
                      data-enable-sorting="0"
                      data-enable-manual-sorting="0"
                      data-show-position="0"
                      data-position-side="left"
                      data-position-label="#"
                      data-number-format="0"
                      data-order-desc-asc-1="0"
                      data-order-by-1="1"
                      data-order-data-type-1="auto"
                      data-order-date-format-1="ddmmyyyy"
                      data-order-desc-asc-2="0"
                      data-order-by-2="1"
                      data-order-data-type-2="auto"
                      data-order-date-format-2="ddmmyyyy"
                      data-order-desc-asc-3="0"
                      data-order-by-3="1"
                      data-order-data-type-3="auto"
                      data-order-date-format-3="ddmmyyyy"
                      data-order-desc-asc-4="0"
                      data-order-by-4="1"
                      data-order-data-type-4="auto"
                      data-order-date-format-4="ddmmyyyy"
                      data-order-desc-asc-5="0"
                      data-order-by-5="1"
                      data-order-data-type-5="auto"
                      data-order-date-format-5="ddmmyyyy"
                      data-table-width="0"
                      data-table-width-value="400"
                      data-table-minimum-width="710"
                      data-table-margin-top="20"
                      data-table-margin-bottom="20"
                      data-enable-container="1"
                      data-container-width="0"
                      data-container-height="0"
                      data-header-font-size="13"
                      data-header-font-family="'Open Sans', Helvetica, Arial, sans-serif"
                      data-header-font-weight="700"
                      data-header-font-style="normal"
                      data-header-background-color="#5e9fb6"
                      data-header-font-color="#FFFFFF"
                      data-header-link-color="#FFFFFF"
                      data-header-border-color="#5e9fb6"
                      data-header-position-alignment="left"
                      data-body-font-size="13"
                      data-body-font-family="'Open Sans', Helvetica, Arial, sans-serif"
                      data-body-font-weight="500"
                      data-body-font-style="normal"
                      data-even-rows-background-color="#FFFFFF"
                      data-odd-rows-background-color="#FCFCFC"
                      data-even-rows-font-color="#666666"
                      data-even-rows-link-color="#C3512F"
                      data-odd-rows-font-color="#666666"
                      data-odd-rows-link-color="#C3512F"
                      data-rows-border-color="#E1E1E1"
                      data-autocolors-priority="rows"
                      data-autocolors-affected-rows-1=""
                      data-autocolors-rows-background-color-1="#5e9fb6"
                      data-autocolors-rows-font-color-1="#ffffff"
                      data-autocolors-affected-rows-2=""
                      data-autocolors-rows-background-color-2="#FFFFFF"
                      data-autocolors-rows-font-color-2="#666666"
                      data-autocolors-affected-rows-3=""
                      data-autocolors-rows-background-color-3="#FFFFFF"
                      data-autocolors-rows-font-color-3="#666666"
                      data-autocolors-affected-rows-4=""
                      data-autocolors-rows-background-color-4="#FFFFFF"
                      data-autocolors-rows-font-color-4="#666666"
                      data-autocolors-affected-rows-5=""
                      data-autocolors-rows-background-color-5="#ffffff"
                      data-autocolors-rows-font-color-5="#666666"
                      data-autocolors-affected-columns-1=""
                      data-autocolors-columns-background-color-1="#FFFFFF"
                      data-autocolors-columns-font-color-1="#666666"
                      data-autocolors-affected-columns-2=""
                      data-autocolors-columns-background-color-2="#FFFFFF"
                      data-autocolors-columns-font-color-2="#666666"
                      data-autocolors-affected-columns-3=""
                      data-autocolors-columns-background-color-3="#FFFFFF"
                      data-autocolors-columns-font-color-3="#666666"
                      data-autocolors-affected-columns-4=""
                      data-autocolors-columns-background-color-4="#FFFFFF"
                      data-autocolors-columns-font-color-4="#666666"
                      data-autocolors-affected-columns-5=""
                      data-autocolors-columns-background-color-5="#FFFFFF"
                      data-autocolors-columns-font-color-5="#666666"
                      data-autoalignment-priority="rows"
                      data-autoalignment-affected-rows-left=""
                      data-autoalignment-affected-rows-center=""
                      data-autoalignment-affected-rows-right=""
                      data-autoalignment-affected-columns-left=""
                      data-autoalignment-affected-columns-center=""
                      data-autoalignment-affected-columns-right=""
                      data-tablet-breakpoint="989"
                      data-hide-tablet-list=""
                      data-tablet-header-font-size="11"
                      data-tablet-body-font-size="11"
                      data-tablet-hide-images="0"
                      data-phone-breakpoint="479"
                      data-hide-phone-list=""
                      data-phone-header-font-size="11"
                      data-phone-body-font-size="11"
                      data-phone-hide-images="0"
                      data-enable-cell-properties="0"
                      style="width: 100%; min-width: 500px; visibility: visible;"
                    >
                      <thead>
                        <tr>
                          <th
                            style='padding: 8px 12px; line-height: 19px; font-size: 13px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 700; font-style: normal; color: rgb(255, 255, 255); background-color: rgb(94, 159, 182); border-color: rgb(94, 159, 182);'
                          >
                            SPRING TUITION
                          </th>
                          <th
                            style='padding: 8px 12px; line-height: 19px; font-size: 13px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 700; font-style: normal; color: rgb(255, 255, 255); background-color: rgb(94, 159, 182); border-color: rgb(94, 159, 182);'
                          >
                            Concentration (8-Weeks)
                          </th>
                          <th
                            style='padding: 8px 12px; line-height: 19px; font-size: 13px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 700; font-style: normal; color: rgb(255, 255, 255); background-color: rgb(94, 159, 182); border-color: rgb(94, 159, 182);'
                          >
                            Short Session (4-Days)
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            Regular
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $5,817
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $1,049
                          </td>
                        </tr>
                        <tr>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            Hot glass
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            7,578
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $1,428
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <h4></h4>
                  <div
                    class="dalt-table-container"
                    style="margin-top: 20px; margin-bottom: 20px; width: auto; height: auto;"
                  >
                    <table
                      id="dalt-table-58"
                      class="dalt-table"
                      data-enable-sorting="0"
                      data-enable-manual-sorting="0"
                      data-show-position="0"
                      data-position-side="left"
                      data-position-label="#"
                      data-number-format="0"
                      data-order-desc-asc-1="0"
                      data-order-by-1="1"
                      data-order-data-type-1="auto"
                      data-order-date-format-1="ddmmyyyy"
                      data-order-desc-asc-2="0"
                      data-order-by-2="1"
                      data-order-data-type-2="auto"
                      data-order-date-format-2="ddmmyyyy"
                      data-order-desc-asc-3="0"
                      data-order-by-3="1"
                      data-order-data-type-3="auto"
                      data-order-date-format-3="ddmmyyyy"
                      data-order-desc-asc-4="0"
                      data-order-by-4="1"
                      data-order-data-type-4="auto"
                      data-order-date-format-4="ddmmyyyy"
                      data-order-desc-asc-5="0"
                      data-order-by-5="1"
                      data-order-data-type-5="auto"
                      data-order-date-format-5="ddmmyyyy"
                      data-table-width="0"
                      data-table-width-value="400"
                      data-table-minimum-width="710"
                      data-table-margin-top="20"
                      data-table-margin-bottom="20"
                      data-enable-container="1"
                      data-container-width="0"
                      data-container-height="0"
                      data-header-font-size="13"
                      data-header-font-family="'Open Sans', Helvetica, Arial, sans-serif"
                      data-header-font-weight="700"
                      data-header-font-style="normal"
                      data-header-background-color="#5e9fb6"
                      data-header-font-color="#FFFFFF"
                      data-header-link-color="#FFFFFF"
                      data-header-border-color="#5e9fb6"
                      data-header-position-alignment="left"
                      data-body-font-size="13"
                      data-body-font-family="'Open Sans', Helvetica, Arial, sans-serif"
                      data-body-font-weight="500"
                      data-body-font-style="normal"
                      data-even-rows-background-color="#FFFFFF"
                      data-odd-rows-background-color="#FCFCFC"
                      data-even-rows-font-color="#666666"
                      data-even-rows-link-color="#C3512F"
                      data-odd-rows-font-color="#666666"
                      data-odd-rows-link-color="#C3512F"
                      data-rows-border-color="#E1E1E1"
                      data-autocolors-priority="rows"
                      data-autocolors-affected-rows-1=""
                      data-autocolors-rows-background-color-1="#5e9fb6"
                      data-autocolors-rows-font-color-1="#ffffff"
                      data-autocolors-affected-rows-2=""
                      data-autocolors-rows-background-color-2="#FFFFFF"
                      data-autocolors-rows-font-color-2="#666666"
                      data-autocolors-affected-rows-3=""
                      data-autocolors-rows-background-color-3="#FFFFFF"
                      data-autocolors-rows-font-color-3="#666666"
                      data-autocolors-affected-rows-4=""
                      data-autocolors-rows-background-color-4="#FFFFFF"
                      data-autocolors-rows-font-color-4="#666666"
                      data-autocolors-affected-rows-5=""
                      data-autocolors-rows-background-color-5="#ffffff"
                      data-autocolors-rows-font-color-5="#666666"
                      data-autocolors-affected-columns-1=""
                      data-autocolors-columns-background-color-1="#FFFFFF"
                      data-autocolors-columns-font-color-1="#666666"
                      data-autocolors-affected-columns-2=""
                      data-autocolors-columns-background-color-2="#FFFFFF"
                      data-autocolors-columns-font-color-2="#666666"
                      data-autocolors-affected-columns-3=""
                      data-autocolors-columns-background-color-3="#FFFFFF"
                      data-autocolors-columns-font-color-3="#666666"
                      data-autocolors-affected-columns-4=""
                      data-autocolors-columns-background-color-4="#FFFFFF"
                      data-autocolors-columns-font-color-4="#666666"
                      data-autocolors-affected-columns-5=""
                      data-autocolors-columns-background-color-5="#FFFFFF"
                      data-autocolors-columns-font-color-5="#666666"
                      data-autoalignment-priority="rows"
                      data-autoalignment-affected-rows-left=""
                      data-autoalignment-affected-rows-center=""
                      data-autoalignment-affected-rows-right=""
                      data-autoalignment-affected-columns-left=""
                      data-autoalignment-affected-columns-center=""
                      data-autoalignment-affected-columns-right=""
                      data-tablet-breakpoint="989"
                      data-hide-tablet-list=""
                      data-tablet-header-font-size="11"
                      data-tablet-body-font-size="11"
                      data-tablet-hide-images="0"
                      data-phone-breakpoint="479"
                      data-hide-phone-list=""
                      data-phone-header-font-size="11"
                      data-phone-body-font-size="11"
                      data-phone-hide-images="0"
                      data-enable-cell-properties="0"
                      style="width: 100%; min-width: 500px; visibility: visible;"
                    >
                      <thead>
                        <tr>
                          <th
                            style='padding: 8px 12px; line-height: 19px; font-size: 13px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 700; font-style: normal; color: rgb(255, 255, 255); background-color: rgb(94, 159, 182); border-color: rgb(94, 159, 182);'
                          >
                            SPRING PARTIAL-SCHOLARSHIP TUITION (INCLUDES ROOM
                            &amp; BOARD)
                          </th>
                          <th
                            style='padding: 8px 12px; line-height: 19px; font-size: 13px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 700; font-style: normal; color: rgb(255, 255, 255); background-color: rgb(94, 159, 182); border-color: rgb(94, 159, 182);'
                          >
                            Concentration (8-Weeks)
                          </th>
                          <th
                            style='padding: 8px 12px; line-height: 19px; font-size: 13px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 700; font-style: normal; color: rgb(255, 255, 255); background-color: rgb(94, 159, 182); border-color: rgb(94, 159, 182);'
                          >
                            Short Session (4-Days)
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            Regular (~20-hr per week work requirement)
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $3,540
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $457
                          </td>
                        </tr>
                        <tr>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            Hot glass (~10-hr per week work requirement)
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $8,027
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $657
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p>
                    <em
                      >Students who receive a partial scholarship with work
                      requirement receive shared dormitory housing and meals at
                      no additional charge as part of their scholarship
                      package.<br /> </em
                    ><em
                      >All students pay a studio materials fee at the end of the
                      session.<br />
                    </em>
                  </p>
                  <p>&nbsp;</p>
                  <div
                    class="dalt-table-container"
                    style="margin-top: 20px; margin-bottom: 20px; width: auto; height: auto;"
                  >
                    <table
                      id="dalt-table-138"
                      class="dalt-table"
                      data-enable-sorting="0"
                      data-enable-manual-sorting="0"
                      data-show-position="0"
                      data-position-side="left"
                      data-position-label="#"
                      data-number-format="0"
                      data-order-desc-asc-1="0"
                      data-order-by-1="1"
                      data-order-data-type-1="auto"
                      data-order-date-format-1="ddmmyyyy"
                      data-order-desc-asc-2="0"
                      data-order-by-2="1"
                      data-order-data-type-2="auto"
                      data-order-date-format-2="ddmmyyyy"
                      data-order-desc-asc-3="0"
                      data-order-by-3="1"
                      data-order-data-type-3="auto"
                      data-order-date-format-3="ddmmyyyy"
                      data-order-desc-asc-4="0"
                      data-order-by-4="1"
                      data-order-data-type-4="auto"
                      data-order-date-format-4="ddmmyyyy"
                      data-order-desc-asc-5="0"
                      data-order-by-5="1"
                      data-order-data-type-5="auto"
                      data-order-date-format-5="ddmmyyyy"
                      data-table-width="0"
                      data-table-width-value="400"
                      data-table-minimum-width="710"
                      data-table-margin-top="20"
                      data-table-margin-bottom="20"
                      data-enable-container="1"
                      data-container-width="0"
                      data-container-height="0"
                      data-header-font-size="13"
                      data-header-font-family="'Open Sans', Helvetica, Arial, sans-serif"
                      data-header-font-weight="700"
                      data-header-font-style="normal"
                      data-header-background-color="#5e9fb6"
                      data-header-font-color="#FFFFFF"
                      data-header-link-color="#FFFFFF"
                      data-header-border-color="#5e9fb6"
                      data-header-position-alignment="left"
                      data-body-font-size="13"
                      data-body-font-family="'Open Sans', Helvetica, Arial, sans-serif"
                      data-body-font-weight="500"
                      data-body-font-style="normal"
                      data-even-rows-background-color="#FFFFFF"
                      data-odd-rows-background-color="#FCFCFC"
                      data-even-rows-font-color="#666666"
                      data-even-rows-link-color="#C3512F"
                      data-odd-rows-font-color="#666666"
                      data-odd-rows-link-color="#C3512F"
                      data-rows-border-color="#E1E1E1"
                      data-autocolors-priority="rows"
                      data-autocolors-affected-rows-1=""
                      data-autocolors-rows-background-color-1="#5e9fb6"
                      data-autocolors-rows-font-color-1="#ffffff"
                      data-autocolors-affected-rows-2=""
                      data-autocolors-rows-background-color-2="#FFFFFF"
                      data-autocolors-rows-font-color-2="#666666"
                      data-autocolors-affected-rows-3=""
                      data-autocolors-rows-background-color-3="#FFFFFF"
                      data-autocolors-rows-font-color-3="#666666"
                      data-autocolors-affected-rows-4=""
                      data-autocolors-rows-background-color-4="#FFFFFF"
                      data-autocolors-rows-font-color-4="#666666"
                      data-autocolors-affected-rows-5=""
                      data-autocolors-rows-background-color-5="#ffffff"
                      data-autocolors-rows-font-color-5="#666666"
                      data-autocolors-affected-columns-1=""
                      data-autocolors-columns-background-color-1="#FFFFFF"
                      data-autocolors-columns-font-color-1="#666666"
                      data-autocolors-affected-columns-2=""
                      data-autocolors-columns-background-color-2="#FFFFFF"
                      data-autocolors-columns-font-color-2="#666666"
                      data-autocolors-affected-columns-3=""
                      data-autocolors-columns-background-color-3="#FFFFFF"
                      data-autocolors-columns-font-color-3="#666666"
                      data-autocolors-affected-columns-4=""
                      data-autocolors-columns-background-color-4="#FFFFFF"
                      data-autocolors-columns-font-color-4="#666666"
                      data-autocolors-affected-columns-5=""
                      data-autocolors-columns-background-color-5="#FFFFFF"
                      data-autocolors-columns-font-color-5="#666666"
                      data-autoalignment-priority="rows"
                      data-autoalignment-affected-rows-left=""
                      data-autoalignment-affected-rows-center=""
                      data-autoalignment-affected-rows-right=""
                      data-autoalignment-affected-columns-left=""
                      data-autoalignment-affected-columns-center=""
                      data-autoalignment-affected-columns-right=""
                      data-tablet-breakpoint="989"
                      data-hide-tablet-list=""
                      data-tablet-header-font-size="11"
                      data-tablet-body-font-size="11"
                      data-tablet-hide-images="0"
                      data-phone-breakpoint="479"
                      data-hide-phone-list=""
                      data-phone-header-font-size="11"
                      data-phone-body-font-size="11"
                      data-phone-hide-images="0"
                      data-enable-cell-properties="0"
                      style="width: 100%; min-width: 500px; visibility: visible;"
                    >
                      <thead>
                        <tr>
                          <th
                            style='padding: 8px 12px; line-height: 19px; font-size: 13px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 700; font-style: normal; color: rgb(255, 255, 255); background-color: rgb(94, 159, 182); border-color: rgb(94, 159, 182);'
                          >
                            SPRING ROOM + ALL MEALS
                          </th>
                          <th
                            style='padding: 8px 12px; line-height: 19px; font-size: 13px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 700; font-style: normal; color: rgb(255, 255, 255); background-color: rgb(94, 159, 182); border-color: rgb(94, 159, 182);'
                          >
                            Concentration (8-Weeks)
                          </th>
                          <th
                            style='padding: 8px 12px; line-height: 19px; font-size: 13px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 700; font-style: normal; color: rgb(255, 255, 255); background-color: rgb(94, 159, 182); border-color: rgb(94, 159, 182);'
                          >
                            Short Session (4-days)
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            Quad
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $4,793
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $607
                          </td>
                        </tr>
                        <tr>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            Double/common bath
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $5,341
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $976
                          </td>
                        </tr>
                        <tr>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            Double/bath shared with roommate
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $5,436
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $1,175
                          </td>
                        </tr>
                        <tr>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            Single/communal bath
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $5,589
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $1,370
                          </td>
                        </tr>
                        <tr>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            Single/shared bath
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $5,737
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $1,520
                          </td>
                        </tr>
                        <tr>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            Single/private bath
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $6,035
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $1,919
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p>
                    <em
                      >*Common baths are shared by two rooms; communal baths are
                      shared by multiple rooms.</em
                    >
                  </p>
                  <p>&nbsp;</p>
                  <div
                    class="dalt-table-container"
                    style="margin-top: 20px; margin-bottom: 20px; width: auto; height: auto;"
                  >
                    <table
                      id="dalt-table-135"
                      class="dalt-table"
                      data-enable-sorting="0"
                      data-enable-manual-sorting="0"
                      data-show-position="0"
                      data-position-side="left"
                      data-position-label="#"
                      data-number-format="0"
                      data-order-desc-asc-1="0"
                      data-order-by-1="1"
                      data-order-data-type-1="auto"
                      data-order-date-format-1="ddmmyyyy"
                      data-order-desc-asc-2="0"
                      data-order-by-2="1"
                      data-order-data-type-2="auto"
                      data-order-date-format-2="ddmmyyyy"
                      data-order-desc-asc-3="0"
                      data-order-by-3="1"
                      data-order-data-type-3="auto"
                      data-order-date-format-3="ddmmyyyy"
                      data-order-desc-asc-4="0"
                      data-order-by-4="1"
                      data-order-data-type-4="auto"
                      data-order-date-format-4="ddmmyyyy"
                      data-order-desc-asc-5="0"
                      data-order-by-5="1"
                      data-order-data-type-5="auto"
                      data-order-date-format-5="ddmmyyyy"
                      data-table-width="0"
                      data-table-width-value="400"
                      data-table-minimum-width="710"
                      data-table-margin-top="20"
                      data-table-margin-bottom="20"
                      data-enable-container="1"
                      data-container-width="0"
                      data-container-height="0"
                      data-header-font-size="13"
                      data-header-font-family="'Open Sans', Helvetica, Arial, sans-serif"
                      data-header-font-weight="700"
                      data-header-font-style="normal"
                      data-header-background-color="#5e9fb6"
                      data-header-font-color="#FFFFFF"
                      data-header-link-color="#FFFFFF"
                      data-header-border-color="#5e9fb6"
                      data-header-position-alignment="left"
                      data-body-font-size="13"
                      data-body-font-family="'Open Sans', Helvetica, Arial, sans-serif"
                      data-body-font-weight="500"
                      data-body-font-style="normal"
                      data-even-rows-background-color="#FFFFFF"
                      data-odd-rows-background-color="#FCFCFC"
                      data-even-rows-font-color="#666666"
                      data-even-rows-link-color="#C3512F"
                      data-odd-rows-font-color="#666666"
                      data-odd-rows-link-color="#C3512F"
                      data-rows-border-color="#E1E1E1"
                      data-autocolors-priority="rows"
                      data-autocolors-affected-rows-1=""
                      data-autocolors-rows-background-color-1="#5e9fb6"
                      data-autocolors-rows-font-color-1="#ffffff"
                      data-autocolors-affected-rows-2=""
                      data-autocolors-rows-background-color-2="#FFFFFF"
                      data-autocolors-rows-font-color-2="#666666"
                      data-autocolors-affected-rows-3=""
                      data-autocolors-rows-background-color-3="#FFFFFF"
                      data-autocolors-rows-font-color-3="#666666"
                      data-autocolors-affected-rows-4=""
                      data-autocolors-rows-background-color-4="#FFFFFF"
                      data-autocolors-rows-font-color-4="#666666"
                      data-autocolors-affected-rows-5=""
                      data-autocolors-rows-background-color-5="#ffffff"
                      data-autocolors-rows-font-color-5="#666666"
                      data-autocolors-affected-columns-1=""
                      data-autocolors-columns-background-color-1="#FFFFFF"
                      data-autocolors-columns-font-color-1="#666666"
                      data-autocolors-affected-columns-2=""
                      data-autocolors-columns-background-color-2="#FFFFFF"
                      data-autocolors-columns-font-color-2="#666666"
                      data-autocolors-affected-columns-3=""
                      data-autocolors-columns-background-color-3="#FFFFFF"
                      data-autocolors-columns-font-color-3="#666666"
                      data-autocolors-affected-columns-4=""
                      data-autocolors-columns-background-color-4="#FFFFFF"
                      data-autocolors-columns-font-color-4="#666666"
                      data-autocolors-affected-columns-5=""
                      data-autocolors-columns-background-color-5="#FFFFFF"
                      data-autocolors-columns-font-color-5="#666666"
                      data-autoalignment-priority="rows"
                      data-autoalignment-affected-rows-left=""
                      data-autoalignment-affected-rows-center=""
                      data-autoalignment-affected-rows-right=""
                      data-autoalignment-affected-columns-left=""
                      data-autoalignment-affected-columns-center=""
                      data-autoalignment-affected-columns-right=""
                      data-tablet-breakpoint="989"
                      data-hide-tablet-list=""
                      data-tablet-header-font-size="11"
                      data-tablet-body-font-size="11"
                      data-tablet-hide-images="0"
                      data-phone-breakpoint="479"
                      data-hide-phone-list=""
                      data-phone-header-font-size="11"
                      data-phone-body-font-size="11"
                      data-phone-hide-images="0"
                      data-enable-cell-properties="0"
                      style="width: 100%; min-width: 500px; visibility: visible;"
                    >
                      <thead>
                        <tr>
                          <th
                            style='padding: 8px 12px; line-height: 19px; font-size: 13px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 700; font-style: normal; color: rgb(255, 255, 255); background-color: rgb(94, 159, 182); border-color: rgb(94, 159, 182);'
                          >
                            SPRING MEALS FOR OFF-CAMPUS STUDENTS
                          </th>
                          <th
                            style='padding: 8px 12px; line-height: 19px; font-size: 13px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 700; font-style: normal; color: rgb(255, 255, 255); background-color: rgb(94, 159, 182); border-color: rgb(94, 159, 182);'
                          >
                            Concentration (8-Weeks)
                          </th>
                          <th
                            style='padding: 8px 12px; line-height: 19px; font-size: 13px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 700; font-style: normal; color: rgb(255, 255, 255); background-color: rgb(94, 159, 182); border-color: rgb(94, 159, 182);'
                          >
                            Short Session (4-days)
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            All meals
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $2,873
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $432
                          </td>
                        </tr>
                        <tr>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            Lunch &amp; Dinner
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $2,511
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $330
                          </td>
                        </tr>
                        <tr>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            Lunch only
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $1,117
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $146
                          </td>
                        </tr>
                        <tr>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            Dinner Only
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $1,394
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $186
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <hr />
                  <strong>Fees: Summer 2024 Sessions</strong>
                  <div
                    class="dalt-table-container"
                    style="margin-top: 20px; margin-bottom: 20px; width: auto; height: auto;"
                  >
                    <table
                      id="dalt-table-12"
                      class="dalt-table"
                      data-enable-sorting="0"
                      data-enable-manual-sorting="0"
                      data-show-position="0"
                      data-position-side="left"
                      data-position-label="#"
                      data-number-format="0"
                      data-order-desc-asc-1="0"
                      data-order-by-1="1"
                      data-order-data-type-1="auto"
                      data-order-date-format-1="ddmmyyyy"
                      data-order-desc-asc-2="0"
                      data-order-by-2="1"
                      data-order-data-type-2="auto"
                      data-order-date-format-2="ddmmyyyy"
                      data-order-desc-asc-3="0"
                      data-order-by-3="1"
                      data-order-data-type-3="auto"
                      data-order-date-format-3="ddmmyyyy"
                      data-order-desc-asc-4="0"
                      data-order-by-4="1"
                      data-order-data-type-4="auto"
                      data-order-date-format-4="ddmmyyyy"
                      data-order-desc-asc-5="0"
                      data-order-by-5="1"
                      data-order-data-type-5="auto"
                      data-order-date-format-5="ddmmyyyy"
                      data-table-width="0"
                      data-table-width-value="400"
                      data-table-minimum-width="710"
                      data-table-margin-top="20"
                      data-table-margin-bottom="20"
                      data-enable-container="1"
                      data-container-width="0"
                      data-container-height="0"
                      data-header-font-size="13"
                      data-header-font-family="'Open Sans', Helvetica, Arial, sans-serif"
                      data-header-font-weight="700"
                      data-header-font-style="normal"
                      data-header-background-color="#5e9fb6"
                      data-header-font-color="#FFFFFF"
                      data-header-link-color="#FFFFFF"
                      data-header-border-color="#5e9fb6"
                      data-header-position-alignment="left"
                      data-body-font-size="13"
                      data-body-font-family="'Open Sans', Helvetica, Arial, sans-serif"
                      data-body-font-weight="500"
                      data-body-font-style="normal"
                      data-even-rows-background-color="#FFFFFF"
                      data-odd-rows-background-color="#FCFCFC"
                      data-even-rows-font-color="#666666"
                      data-even-rows-link-color="#C3512F"
                      data-odd-rows-font-color="#666666"
                      data-odd-rows-link-color="#C3512F"
                      data-rows-border-color="#E1E1E1"
                      data-autocolors-priority="rows"
                      data-autocolors-affected-rows-1=""
                      data-autocolors-rows-background-color-1="#5e9fb6"
                      data-autocolors-rows-font-color-1="#ffffff"
                      data-autocolors-affected-rows-2=""
                      data-autocolors-rows-background-color-2="#FFFFFF"
                      data-autocolors-rows-font-color-2="#666666"
                      data-autocolors-affected-rows-3=""
                      data-autocolors-rows-background-color-3="#FFFFFF"
                      data-autocolors-rows-font-color-3="#666666"
                      data-autocolors-affected-rows-4=""
                      data-autocolors-rows-background-color-4="#FFFFFF"
                      data-autocolors-rows-font-color-4="#666666"
                      data-autocolors-affected-rows-5=""
                      data-autocolors-rows-background-color-5="#ffffff"
                      data-autocolors-rows-font-color-5="#666666"
                      data-autocolors-affected-columns-1=""
                      data-autocolors-columns-background-color-1="#FFFFFF"
                      data-autocolors-columns-font-color-1="#666666"
                      data-autocolors-affected-columns-2=""
                      data-autocolors-columns-background-color-2="#FFFFFF"
                      data-autocolors-columns-font-color-2="#666666"
                      data-autocolors-affected-columns-3=""
                      data-autocolors-columns-background-color-3="#FFFFFF"
                      data-autocolors-columns-font-color-3="#666666"
                      data-autocolors-affected-columns-4=""
                      data-autocolors-columns-background-color-4="#FFFFFF"
                      data-autocolors-columns-font-color-4="#666666"
                      data-autocolors-affected-columns-5=""
                      data-autocolors-columns-background-color-5="#FFFFFF"
                      data-autocolors-columns-font-color-5="#666666"
                      data-autoalignment-priority="rows"
                      data-autoalignment-affected-rows-left=""
                      data-autoalignment-affected-rows-center=""
                      data-autoalignment-affected-rows-right=""
                      data-autoalignment-affected-columns-left=""
                      data-autoalignment-affected-columns-center=""
                      data-autoalignment-affected-columns-right=""
                      data-tablet-breakpoint="989"
                      data-hide-tablet-list=""
                      data-tablet-header-font-size="11"
                      data-tablet-body-font-size="11"
                      data-tablet-hide-images="0"
                      data-phone-breakpoint="479"
                      data-hide-phone-list=""
                      data-phone-header-font-size="11"
                      data-phone-body-font-size="11"
                      data-phone-hide-images="0"
                      data-enable-cell-properties="0"
                      style="width: 100%; min-width: 500px; visibility: visible;"
                    >
                      <thead>
                        <tr>
                          <th
                            style='padding: 8px 12px; line-height: 19px; font-size: 13px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 700; font-style: normal; color: rgb(255, 255, 255); background-color: rgb(94, 159, 182); border-color: rgb(94, 159, 182);'
                          >
                            SUMMER TUITION
                          </th>
                          <th
                            style='padding: 8px 12px; line-height: 19px; font-size: 13px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 700; font-style: normal; color: rgb(255, 255, 255); background-color: rgb(94, 159, 182); border-color: rgb(94, 159, 182);'
                          >
                            Sessions 1 &amp; 7
                          </th>
                          <th
                            style='padding: 8px 12px; line-height: 19px; font-size: 13px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 700; font-style: normal; color: rgb(255, 255, 255); background-color: rgb(94, 159, 182); border-color: rgb(94, 159, 182);'
                          >
                            Session 2-6
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            Regular
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $1,184
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $2,094
                          </td>
                        </tr>
                        <tr>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            Hot Glass
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $1,612
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $2,749
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <h4></h4>
                  <div
                    class="dalt-table-container"
                    style="margin-top: 20px; margin-bottom: 20px; width: auto; height: auto;"
                  >
                    <table
                      id="dalt-table-157"
                      class="dalt-table"
                      data-enable-sorting="0"
                      data-enable-manual-sorting="0"
                      data-show-position="0"
                      data-position-side="left"
                      data-position-label="#"
                      data-number-format="0"
                      data-order-desc-asc-1="0"
                      data-order-by-1="1"
                      data-order-data-type-1="auto"
                      data-order-date-format-1="ddmmyyyy"
                      data-order-desc-asc-2="0"
                      data-order-by-2="1"
                      data-order-data-type-2="auto"
                      data-order-date-format-2="ddmmyyyy"
                      data-order-desc-asc-3="0"
                      data-order-by-3="1"
                      data-order-data-type-3="auto"
                      data-order-date-format-3="ddmmyyyy"
                      data-order-desc-asc-4="0"
                      data-order-by-4="1"
                      data-order-data-type-4="auto"
                      data-order-date-format-4="ddmmyyyy"
                      data-order-desc-asc-5="0"
                      data-order-by-5="1"
                      data-order-data-type-5="auto"
                      data-order-date-format-5="ddmmyyyy"
                      data-table-width="0"
                      data-table-width-value="400"
                      data-table-minimum-width="710"
                      data-table-margin-top="20"
                      data-table-margin-bottom="20"
                      data-enable-container="1"
                      data-container-width="0"
                      data-container-height="0"
                      data-header-font-size="13"
                      data-header-font-family="'Open Sans', Helvetica, Arial, sans-serif"
                      data-header-font-weight="700"
                      data-header-font-style="normal"
                      data-header-background-color="#5e9fb6"
                      data-header-font-color="#FFFFFF"
                      data-header-link-color="#FFFFFF"
                      data-header-border-color="#5e9fb6"
                      data-header-position-alignment="left"
                      data-body-font-size="13"
                      data-body-font-family="'Open Sans', Helvetica, Arial, sans-serif"
                      data-body-font-weight="500"
                      data-body-font-style="normal"
                      data-even-rows-background-color="#FFFFFF"
                      data-odd-rows-background-color="#FCFCFC"
                      data-even-rows-font-color="#666666"
                      data-even-rows-link-color="#C3512F"
                      data-odd-rows-font-color="#666666"
                      data-odd-rows-link-color="#C3512F"
                      data-rows-border-color="#E1E1E1"
                      data-autocolors-priority="rows"
                      data-autocolors-affected-rows-1=""
                      data-autocolors-rows-background-color-1="#5e9fb6"
                      data-autocolors-rows-font-color-1="#ffffff"
                      data-autocolors-affected-rows-2=""
                      data-autocolors-rows-background-color-2="#FFFFFF"
                      data-autocolors-rows-font-color-2="#666666"
                      data-autocolors-affected-rows-3=""
                      data-autocolors-rows-background-color-3="#FFFFFF"
                      data-autocolors-rows-font-color-3="#666666"
                      data-autocolors-affected-rows-4=""
                      data-autocolors-rows-background-color-4="#FFFFFF"
                      data-autocolors-rows-font-color-4="#666666"
                      data-autocolors-affected-rows-5=""
                      data-autocolors-rows-background-color-5="#ffffff"
                      data-autocolors-rows-font-color-5="#666666"
                      data-autocolors-affected-columns-1=""
                      data-autocolors-columns-background-color-1="#FFFFFF"
                      data-autocolors-columns-font-color-1="#666666"
                      data-autocolors-affected-columns-2=""
                      data-autocolors-columns-background-color-2="#FFFFFF"
                      data-autocolors-columns-font-color-2="#666666"
                      data-autocolors-affected-columns-3=""
                      data-autocolors-columns-background-color-3="#FFFFFF"
                      data-autocolors-columns-font-color-3="#666666"
                      data-autocolors-affected-columns-4=""
                      data-autocolors-columns-background-color-4="#FFFFFF"
                      data-autocolors-columns-font-color-4="#666666"
                      data-autocolors-affected-columns-5=""
                      data-autocolors-columns-background-color-5="#FFFFFF"
                      data-autocolors-columns-font-color-5="#666666"
                      data-autoalignment-priority="rows"
                      data-autoalignment-affected-rows-left=""
                      data-autoalignment-affected-rows-center=""
                      data-autoalignment-affected-rows-right=""
                      data-autoalignment-affected-columns-left=""
                      data-autoalignment-affected-columns-center=""
                      data-autoalignment-affected-columns-right=""
                      data-tablet-breakpoint="989"
                      data-hide-tablet-list=""
                      data-tablet-header-font-size="11"
                      data-tablet-body-font-size="11"
                      data-tablet-hide-images="0"
                      data-phone-breakpoint="479"
                      data-hide-phone-list=""
                      data-phone-header-font-size="11"
                      data-phone-body-font-size="11"
                      data-phone-hide-images="0"
                      data-enable-cell-properties="0"
                      style="width: 100%; min-width: 500px; visibility: visible;"
                    >
                      <thead>
                        <tr>
                          <th
                            style='padding: 8px 12px; line-height: 19px; font-size: 13px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 700; font-style: normal; color: rgb(255, 255, 255); background-color: rgb(94, 159, 182); border-color: rgb(94, 159, 182);'
                          >
                            SUMMER TUITION--PARTIAL SCHOLARSHIP (INCLUDES ROOM +
                            ALL MEALS)
                          </th>
                          <th
                            style='padding: 8px 12px; line-height: 19px; font-size: 13px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 700; font-style: normal; color: rgb(255, 255, 255); background-color: rgb(94, 159, 182); border-color: rgb(94, 159, 182);'
                          >
                            Sessions 1 &amp; 7
                          </th>
                          <th
                            style='padding: 8px 12px; line-height: 19px; font-size: 13px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 700; font-style: normal; color: rgb(255, 255, 255); background-color: rgb(94, 159, 182); border-color: rgb(94, 159, 182);'
                          >
                            Session 2-6
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            Regular
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $526
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $930
                          </td>
                        </tr>
                        <tr>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            Hot Glass
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $792
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $1,446
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p>
                    <em
                      >Students who receive a partial scholarship receive shared
                      dormitory housing and meals at no additional charge as
                      part of their scholarship package.<br /> </em
                    ><em
                      ><strong
                        >NOTE: Beginning with summer 2024, tuition includes the
                        cost of shared materials, instructor demo materials, and
                        hazmat disposal. Students are, however, still
                        responsible for the cost of materials used for their own
                        production. Payment for these materials will be due at
                        the end of the session prior to departing
                        campus.</strong
                      ></em
                    >
                  </p>
                  <p>&nbsp;</p>
                  <div
                    class="dalt-table-container"
                    style="margin-top: 20px; margin-bottom: 20px; width: auto; height: auto;"
                  >
                    <table
                      id="dalt-table-209"
                      class="dalt-table"
                      data-enable-sorting="0"
                      data-enable-manual-sorting="0"
                      data-show-position="0"
                      data-position-side="left"
                      data-position-label="#"
                      data-number-format="0"
                      data-order-desc-asc-1="0"
                      data-order-by-1="1"
                      data-order-data-type-1="auto"
                      data-order-date-format-1="ddmmyyyy"
                      data-order-desc-asc-2="0"
                      data-order-by-2="1"
                      data-order-data-type-2="auto"
                      data-order-date-format-2="ddmmyyyy"
                      data-order-desc-asc-3="0"
                      data-order-by-3="1"
                      data-order-data-type-3="auto"
                      data-order-date-format-3="ddmmyyyy"
                      data-order-desc-asc-4="0"
                      data-order-by-4="1"
                      data-order-data-type-4="auto"
                      data-order-date-format-4="ddmmyyyy"
                      data-order-desc-asc-5="0"
                      data-order-by-5="1"
                      data-order-data-type-5="auto"
                      data-order-date-format-5="ddmmyyyy"
                      data-table-width="0"
                      data-table-width-value="400"
                      data-table-minimum-width="710"
                      data-table-margin-top="20"
                      data-table-margin-bottom="20"
                      data-enable-container="1"
                      data-container-width="0"
                      data-container-height="0"
                      data-header-font-size="13"
                      data-header-font-family="'Open Sans', Helvetica, Arial, sans-serif"
                      data-header-font-weight="700"
                      data-header-font-style="normal"
                      data-header-background-color="#5e9fb6"
                      data-header-font-color="#FFFFFF"
                      data-header-link-color="#FFFFFF"
                      data-header-border-color="#5e9fb6"
                      data-header-position-alignment="left"
                      data-body-font-size="13"
                      data-body-font-family="'Open Sans', Helvetica, Arial, sans-serif"
                      data-body-font-weight="500"
                      data-body-font-style="normal"
                      data-even-rows-background-color="#FFFFFF"
                      data-odd-rows-background-color="#FCFCFC"
                      data-even-rows-font-color="#666666"
                      data-even-rows-link-color="#C3512F"
                      data-odd-rows-font-color="#666666"
                      data-odd-rows-link-color="#C3512F"
                      data-rows-border-color="#E1E1E1"
                      data-autocolors-priority="rows"
                      data-autocolors-affected-rows-1=""
                      data-autocolors-rows-background-color-1="#5e9fb6"
                      data-autocolors-rows-font-color-1="#ffffff"
                      data-autocolors-affected-rows-2=""
                      data-autocolors-rows-background-color-2="#FFFFFF"
                      data-autocolors-rows-font-color-2="#666666"
                      data-autocolors-affected-rows-3=""
                      data-autocolors-rows-background-color-3="#FFFFFF"
                      data-autocolors-rows-font-color-3="#666666"
                      data-autocolors-affected-rows-4=""
                      data-autocolors-rows-background-color-4="#FFFFFF"
                      data-autocolors-rows-font-color-4="#666666"
                      data-autocolors-affected-rows-5=""
                      data-autocolors-rows-background-color-5="#ffffff"
                      data-autocolors-rows-font-color-5="#666666"
                      data-autocolors-affected-columns-1=""
                      data-autocolors-columns-background-color-1="#FFFFFF"
                      data-autocolors-columns-font-color-1="#666666"
                      data-autocolors-affected-columns-2=""
                      data-autocolors-columns-background-color-2="#FFFFFF"
                      data-autocolors-columns-font-color-2="#666666"
                      data-autocolors-affected-columns-3=""
                      data-autocolors-columns-background-color-3="#FFFFFF"
                      data-autocolors-columns-font-color-3="#666666"
                      data-autocolors-affected-columns-4=""
                      data-autocolors-columns-background-color-4="#FFFFFF"
                      data-autocolors-columns-font-color-4="#666666"
                      data-autocolors-affected-columns-5=""
                      data-autocolors-columns-background-color-5="#FFFFFF"
                      data-autocolors-columns-font-color-5="#666666"
                      data-autoalignment-priority="rows"
                      data-autoalignment-affected-rows-left=""
                      data-autoalignment-affected-rows-center=""
                      data-autoalignment-affected-rows-right=""
                      data-autoalignment-affected-columns-left=""
                      data-autoalignment-affected-columns-center=""
                      data-autoalignment-affected-columns-right=""
                      data-tablet-breakpoint="989"
                      data-hide-tablet-list=""
                      data-tablet-header-font-size="11"
                      data-tablet-body-font-size="11"
                      data-tablet-hide-images="0"
                      data-phone-breakpoint="479"
                      data-hide-phone-list=""
                      data-phone-header-font-size="11"
                      data-phone-body-font-size="11"
                      data-phone-hide-images="0"
                      data-enable-cell-properties="0"
                      style="width: 100%; min-width: 500px; visibility: visible;"
                    >
                      <thead>
                        <tr>
                          <th
                            style='padding: 8px 12px; line-height: 19px; font-size: 13px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 700; font-style: normal; color: rgb(255, 255, 255); background-color: rgb(94, 159, 182); border-color: rgb(94, 159, 182);'
                          >
                            SUMMER ROOM + ALL MEALS
                          </th>
                          <th
                            style='padding: 8px 12px; line-height: 19px; font-size: 13px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 700; font-style: normal; color: rgb(255, 255, 255); background-color: rgb(94, 159, 182); border-color: rgb(94, 159, 182);'
                          >
                            Session 1 &amp; 7
                          </th>
                          <th
                            style='padding: 8px 12px; line-height: 19px; font-size: 13px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 700; font-style: normal; color: rgb(255, 255, 255); background-color: rgb(94, 159, 182); border-color: rgb(94, 159, 182);'
                          >
                            Session 2-6
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            Hostel (up to 13 per room)
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $595
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $1,159
                          </td>
                        </tr>
                        <tr>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            Quad dorm (3-4 per room)
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $646
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $1,282
                          </td>
                        </tr>
                        <tr>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            Double/common bath
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $1,025
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $1,865
                          </td>
                        </tr>
                        <tr>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            Double/bath shared with roommate
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $1,229
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $2,251
                          </td>
                        </tr>
                        <tr>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            Single/communal bath*
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $1,428
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $2,672
                          </td>
                        </tr>
                        <tr>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            Single/common bath*
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $1,582
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $2,877
                          </td>
                        </tr>
                        <tr>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            Single/private bath
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $1,991
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $3,651
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p>
                    <em
                      >*Common baths are shared by two rooms; communal baths are
                      shared by multiple rooms.</em
                    >
                  </p>
                  <p>&nbsp;</p>
                  <div
                    class="dalt-table-container"
                    style="margin-top: 20px; margin-bottom: 20px; width: auto; height: auto;"
                  >
                    <table
                      id="dalt-table-18"
                      class="dalt-table"
                      data-enable-sorting="0"
                      data-enable-manual-sorting="0"
                      data-show-position="0"
                      data-position-side="left"
                      data-position-label="#"
                      data-number-format="0"
                      data-order-desc-asc-1="0"
                      data-order-by-1="1"
                      data-order-data-type-1="auto"
                      data-order-date-format-1="ddmmyyyy"
                      data-order-desc-asc-2="0"
                      data-order-by-2="1"
                      data-order-data-type-2="auto"
                      data-order-date-format-2="ddmmyyyy"
                      data-order-desc-asc-3="0"
                      data-order-by-3="1"
                      data-order-data-type-3="auto"
                      data-order-date-format-3="ddmmyyyy"
                      data-order-desc-asc-4="0"
                      data-order-by-4="1"
                      data-order-data-type-4="auto"
                      data-order-date-format-4="ddmmyyyy"
                      data-order-desc-asc-5="0"
                      data-order-by-5="1"
                      data-order-data-type-5="auto"
                      data-order-date-format-5="ddmmyyyy"
                      data-table-width="0"
                      data-table-width-value="400"
                      data-table-minimum-width="710"
                      data-table-margin-top="20"
                      data-table-margin-bottom="20"
                      data-enable-container="1"
                      data-container-width="0"
                      data-container-height="0"
                      data-header-font-size="13"
                      data-header-font-family="'Open Sans', Helvetica, Arial, sans-serif"
                      data-header-font-weight="700"
                      data-header-font-style="normal"
                      data-header-background-color="#5e9fb6"
                      data-header-font-color="#FFFFFF"
                      data-header-link-color="#FFFFFF"
                      data-header-border-color="#5e9fb6"
                      data-header-position-alignment="left"
                      data-body-font-size="13"
                      data-body-font-family="'Open Sans', Helvetica, Arial, sans-serif"
                      data-body-font-weight="500"
                      data-body-font-style="normal"
                      data-even-rows-background-color="#FFFFFF"
                      data-odd-rows-background-color="#FCFCFC"
                      data-even-rows-font-color="#666666"
                      data-even-rows-link-color="#C3512F"
                      data-odd-rows-font-color="#666666"
                      data-odd-rows-link-color="#C3512F"
                      data-rows-border-color="#E1E1E1"
                      data-autocolors-priority="rows"
                      data-autocolors-affected-rows-1=""
                      data-autocolors-rows-background-color-1="#5e9fb6"
                      data-autocolors-rows-font-color-1="#ffffff"
                      data-autocolors-affected-rows-2=""
                      data-autocolors-rows-background-color-2="#FFFFFF"
                      data-autocolors-rows-font-color-2="#666666"
                      data-autocolors-affected-rows-3=""
                      data-autocolors-rows-background-color-3="#FFFFFF"
                      data-autocolors-rows-font-color-3="#666666"
                      data-autocolors-affected-rows-4=""
                      data-autocolors-rows-background-color-4="#FFFFFF"
                      data-autocolors-rows-font-color-4="#666666"
                      data-autocolors-affected-rows-5=""
                      data-autocolors-rows-background-color-5="#ffffff"
                      data-autocolors-rows-font-color-5="#666666"
                      data-autocolors-affected-columns-1=""
                      data-autocolors-columns-background-color-1="#FFFFFF"
                      data-autocolors-columns-font-color-1="#666666"
                      data-autocolors-affected-columns-2=""
                      data-autocolors-columns-background-color-2="#FFFFFF"
                      data-autocolors-columns-font-color-2="#666666"
                      data-autocolors-affected-columns-3=""
                      data-autocolors-columns-background-color-3="#FFFFFF"
                      data-autocolors-columns-font-color-3="#666666"
                      data-autocolors-affected-columns-4=""
                      data-autocolors-columns-background-color-4="#FFFFFF"
                      data-autocolors-columns-font-color-4="#666666"
                      data-autocolors-affected-columns-5=""
                      data-autocolors-columns-background-color-5="#FFFFFF"
                      data-autocolors-columns-font-color-5="#666666"
                      data-autoalignment-priority="rows"
                      data-autoalignment-affected-rows-left=""
                      data-autoalignment-affected-rows-center=""
                      data-autoalignment-affected-rows-right=""
                      data-autoalignment-affected-columns-left=""
                      data-autoalignment-affected-columns-center=""
                      data-autoalignment-affected-columns-right=""
                      data-tablet-breakpoint="989"
                      data-hide-tablet-list=""
                      data-tablet-header-font-size="11"
                      data-tablet-body-font-size="11"
                      data-tablet-hide-images="0"
                      data-phone-breakpoint="479"
                      data-hide-phone-list=""
                      data-phone-header-font-size="11"
                      data-phone-body-font-size="11"
                      data-phone-hide-images="0"
                      data-enable-cell-properties="0"
                      style="width: 100%; min-width: 500px; visibility: visible;"
                    >
                      <thead>
                        <tr>
                          <th
                            style='padding: 8px 12px; line-height: 19px; font-size: 13px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 700; font-style: normal; color: rgb(255, 255, 255); background-color: rgb(94, 159, 182); border-color: rgb(94, 159, 182);'
                          >
                            SUMMER MEALS FOR OFF-CAMPUS STUDENTS
                          </th>
                          <th
                            style='padding: 8px 12px; line-height: 19px; font-size: 13px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 700; font-style: normal; color: rgb(255, 255, 255); background-color: rgb(94, 159, 182); border-color: rgb(94, 159, 182);'
                          >
                            Session 1 &amp; 7
                          </th>
                          <th
                            style='padding: 8px 12px; line-height: 19px; font-size: 13px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 700; font-style: normal; color: rgb(255, 255, 255); background-color: rgb(94, 159, 182); border-color: rgb(94, 159, 182);'
                          >
                            Sessions 2-6
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            All meals
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $467
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $851
                          </td>
                        </tr>
                        <tr>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            Lunch and dinner
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $356
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $646
                          </td>
                        </tr>
                        <tr>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            Breakfast and lunch
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $266
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $495
                          </td>
                        </tr>
                        <tr>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            Lunch only
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $158
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $291
                          </td>
                        </tr>
                        <tr>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            Dinner only
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $201
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $356
                          </td>
                        </tr>
                        <tr>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            Breakfast only
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $108
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $205
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <strong>Cancellation and Refunds</strong>
                  <p dir="ltr">
                    Please read our cancellation and refund policy
                    <a
                      href="https://penland.org/workshops/cancellation-refunds/"
                      target="_blank"
                      rel="noopener"
                      ><strong>here</strong></a
                    >.
                  </p>
                  <strong>
                    Fees: Fall 2024 Concentration, Short Session, and Weekend
                  </strong>
                  <div
                    class="dalt-table-container"
                    style="margin-top: 20px; margin-bottom: 20px; width: auto; height: auto;"
                  >
                    <table
                      id="dalt-table-24"
                      class="dalt-table"
                      data-enable-sorting="0"
                      data-enable-manual-sorting="0"
                      data-show-position="0"
                      data-position-side="left"
                      data-position-label="#"
                      data-number-format="0"
                      data-order-desc-asc-1="0"
                      data-order-by-1="1"
                      data-order-data-type-1="auto"
                      data-order-date-format-1="ddmmyyyy"
                      data-order-desc-asc-2="0"
                      data-order-by-2="1"
                      data-order-data-type-2="auto"
                      data-order-date-format-2="ddmmyyyy"
                      data-order-desc-asc-3="0"
                      data-order-by-3="1"
                      data-order-data-type-3="auto"
                      data-order-date-format-3="ddmmyyyy"
                      data-order-desc-asc-4="0"
                      data-order-by-4="1"
                      data-order-data-type-4="auto"
                      data-order-date-format-4="ddmmyyyy"
                      data-order-desc-asc-5="0"
                      data-order-by-5="1"
                      data-order-data-type-5="auto"
                      data-order-date-format-5="ddmmyyyy"
                      data-table-width="0"
                      data-table-width-value="400"
                      data-table-minimum-width="710"
                      data-table-margin-top="20"
                      data-table-margin-bottom="20"
                      data-enable-container="1"
                      data-container-width="0"
                      data-container-height="0"
                      data-header-font-size="13"
                      data-header-font-family="'Open Sans', Helvetica, Arial, sans-serif"
                      data-header-font-weight="700"
                      data-header-font-style="normal"
                      data-header-background-color="#5e9fb6"
                      data-header-font-color="#FFFFFF"
                      data-header-link-color="#FFFFFF"
                      data-header-border-color="#5e9fb6"
                      data-header-position-alignment="left"
                      data-body-font-size="13"
                      data-body-font-family="'Open Sans', Helvetica, Arial, sans-serif"
                      data-body-font-weight="500"
                      data-body-font-style="normal"
                      data-even-rows-background-color="#FFFFFF"
                      data-odd-rows-background-color="#FCFCFC"
                      data-even-rows-font-color="#666666"
                      data-even-rows-link-color="#C3512F"
                      data-odd-rows-font-color="#666666"
                      data-odd-rows-link-color="#C3512F"
                      data-rows-border-color="#E1E1E1"
                      data-autocolors-priority="rows"
                      data-autocolors-affected-rows-1=""
                      data-autocolors-rows-background-color-1="#5e9fb6"
                      data-autocolors-rows-font-color-1="#ffffff"
                      data-autocolors-affected-rows-2=""
                      data-autocolors-rows-background-color-2="#FFFFFF"
                      data-autocolors-rows-font-color-2="#666666"
                      data-autocolors-affected-rows-3=""
                      data-autocolors-rows-background-color-3="#FFFFFF"
                      data-autocolors-rows-font-color-3="#666666"
                      data-autocolors-affected-rows-4=""
                      data-autocolors-rows-background-color-4="#FFFFFF"
                      data-autocolors-rows-font-color-4="#666666"
                      data-autocolors-affected-rows-5=""
                      data-autocolors-rows-background-color-5="#ffffff"
                      data-autocolors-rows-font-color-5="#666666"
                      data-autocolors-affected-columns-1=""
                      data-autocolors-columns-background-color-1="#FFFFFF"
                      data-autocolors-columns-font-color-1="#666666"
                      data-autocolors-affected-columns-2=""
                      data-autocolors-columns-background-color-2="#FFFFFF"
                      data-autocolors-columns-font-color-2="#666666"
                      data-autocolors-affected-columns-3=""
                      data-autocolors-columns-background-color-3="#FFFFFF"
                      data-autocolors-columns-font-color-3="#666666"
                      data-autocolors-affected-columns-4=""
                      data-autocolors-columns-background-color-4="#FFFFFF"
                      data-autocolors-columns-font-color-4="#666666"
                      data-autocolors-affected-columns-5=""
                      data-autocolors-columns-background-color-5="#FFFFFF"
                      data-autocolors-columns-font-color-5="#666666"
                      data-autoalignment-priority="rows"
                      data-autoalignment-affected-rows-left=""
                      data-autoalignment-affected-rows-center=""
                      data-autoalignment-affected-rows-right=""
                      data-autoalignment-affected-columns-left=""
                      data-autoalignment-affected-columns-center=""
                      data-autoalignment-affected-columns-right=""
                      data-tablet-breakpoint="989"
                      data-hide-tablet-list=""
                      data-tablet-header-font-size="11"
                      data-tablet-body-font-size="11"
                      data-tablet-hide-images="0"
                      data-phone-breakpoint="479"
                      data-hide-phone-list=""
                      data-phone-header-font-size="11"
                      data-phone-body-font-size="11"
                      data-phone-hide-images="0"
                      data-enable-cell-properties="0"
                      style="width: 100%; min-width: 500px; visibility: visible;"
                    >
                      <thead>
                        <tr>
                          <th
                            style='padding: 8px 12px; line-height: 19px; font-size: 13px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 700; font-style: normal; color: rgb(255, 255, 255); background-color: rgb(94, 159, 182); border-color: rgb(94, 159, 182);'
                          >
                            FALL TUITION
                          </th>
                          <th
                            style='padding: 8px 12px; line-height: 19px; font-size: 13px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 700; font-style: normal; color: rgb(255, 255, 255); background-color: rgb(94, 159, 182); border-color: rgb(94, 159, 182);'
                          >
                            Concentration (6-weeks)
                          </th>
                          <th
                            style='padding: 8px 12px; line-height: 19px; font-size: 13px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 700; font-style: normal; color: rgb(255, 255, 255); background-color: rgb(94, 159, 182); border-color: rgb(94, 159, 182);'
                          >
                            Short Session (4-days)
                          </th>
                          <th
                            style='padding: 8px 12px; line-height: 19px; font-size: 13px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 700; font-style: normal; color: rgb(255, 255, 255); background-color: rgb(94, 159, 182); border-color: rgb(94, 159, 182);'
                          >
                            Weekend Session
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            Regular
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $4,863
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $1,184
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $814
                          </td>
                        </tr>
                        <tr>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            Hot Glass
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $6,337
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            N/A
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            N/A
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <h4></h4>
                  <div
                    class="dalt-table-container"
                    style="margin-top: 20px; margin-bottom: 20px; width: auto; height: auto;"
                  >
                    <table
                      id="dalt-table-176"
                      class="dalt-table"
                      data-enable-sorting="0"
                      data-enable-manual-sorting="0"
                      data-show-position="0"
                      data-position-side="left"
                      data-position-label="#"
                      data-number-format="0"
                      data-order-desc-asc-1="0"
                      data-order-by-1="1"
                      data-order-data-type-1="auto"
                      data-order-date-format-1="ddmmyyyy"
                      data-order-desc-asc-2="0"
                      data-order-by-2="1"
                      data-order-data-type-2="auto"
                      data-order-date-format-2="ddmmyyyy"
                      data-order-desc-asc-3="0"
                      data-order-by-3="1"
                      data-order-data-type-3="auto"
                      data-order-date-format-3="ddmmyyyy"
                      data-order-desc-asc-4="0"
                      data-order-by-4="1"
                      data-order-data-type-4="auto"
                      data-order-date-format-4="ddmmyyyy"
                      data-order-desc-asc-5="0"
                      data-order-by-5="1"
                      data-order-data-type-5="auto"
                      data-order-date-format-5="ddmmyyyy"
                      data-table-width="0"
                      data-table-width-value="400"
                      data-table-minimum-width="710"
                      data-table-margin-top="20"
                      data-table-margin-bottom="20"
                      data-enable-container="1"
                      data-container-width="0"
                      data-container-height="0"
                      data-header-font-size="13"
                      data-header-font-family="'Open Sans', Helvetica, Arial, sans-serif"
                      data-header-font-weight="700"
                      data-header-font-style="normal"
                      data-header-background-color="#5e9fb6"
                      data-header-font-color="#FFFFFF"
                      data-header-link-color="#FFFFFF"
                      data-header-border-color="#5e9fb6"
                      data-header-position-alignment="left"
                      data-body-font-size="13"
                      data-body-font-family="'Open Sans', Helvetica, Arial, sans-serif"
                      data-body-font-weight="500"
                      data-body-font-style="normal"
                      data-even-rows-background-color="#FFFFFF"
                      data-odd-rows-background-color="#FCFCFC"
                      data-even-rows-font-color="#666666"
                      data-even-rows-link-color="#C3512F"
                      data-odd-rows-font-color="#666666"
                      data-odd-rows-link-color="#C3512F"
                      data-rows-border-color="#E1E1E1"
                      data-autocolors-priority="rows"
                      data-autocolors-affected-rows-1=""
                      data-autocolors-rows-background-color-1="#5e9fb6"
                      data-autocolors-rows-font-color-1="#ffffff"
                      data-autocolors-affected-rows-2=""
                      data-autocolors-rows-background-color-2="#FFFFFF"
                      data-autocolors-rows-font-color-2="#666666"
                      data-autocolors-affected-rows-3=""
                      data-autocolors-rows-background-color-3="#FFFFFF"
                      data-autocolors-rows-font-color-3="#666666"
                      data-autocolors-affected-rows-4=""
                      data-autocolors-rows-background-color-4="#FFFFFF"
                      data-autocolors-rows-font-color-4="#666666"
                      data-autocolors-affected-rows-5=""
                      data-autocolors-rows-background-color-5="#ffffff"
                      data-autocolors-rows-font-color-5="#666666"
                      data-autocolors-affected-columns-1=""
                      data-autocolors-columns-background-color-1="#FFFFFF"
                      data-autocolors-columns-font-color-1="#666666"
                      data-autocolors-affected-columns-2=""
                      data-autocolors-columns-background-color-2="#FFFFFF"
                      data-autocolors-columns-font-color-2="#666666"
                      data-autocolors-affected-columns-3=""
                      data-autocolors-columns-background-color-3="#FFFFFF"
                      data-autocolors-columns-font-color-3="#666666"
                      data-autocolors-affected-columns-4=""
                      data-autocolors-columns-background-color-4="#FFFFFF"
                      data-autocolors-columns-font-color-4="#666666"
                      data-autocolors-affected-columns-5=""
                      data-autocolors-columns-background-color-5="#FFFFFF"
                      data-autocolors-columns-font-color-5="#666666"
                      data-autoalignment-priority="rows"
                      data-autoalignment-affected-rows-left=""
                      data-autoalignment-affected-rows-center=""
                      data-autoalignment-affected-rows-right=""
                      data-autoalignment-affected-columns-left=""
                      data-autoalignment-affected-columns-center=""
                      data-autoalignment-affected-columns-right=""
                      data-tablet-breakpoint="989"
                      data-hide-tablet-list=""
                      data-tablet-header-font-size="11"
                      data-tablet-body-font-size="11"
                      data-tablet-hide-images="0"
                      data-phone-breakpoint="479"
                      data-hide-phone-list=""
                      data-phone-header-font-size="11"
                      data-phone-body-font-size="11"
                      data-phone-hide-images="0"
                      data-enable-cell-properties="0"
                      style="width: 100%; min-width: 500px; visibility: visible;"
                    >
                      <thead>
                        <tr>
                          <th
                            style='padding: 8px 12px; line-height: 19px; font-size: 13px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 700; font-style: normal; color: rgb(255, 255, 255); background-color: rgb(94, 159, 182); border-color: rgb(94, 159, 182);'
                          >
                            FALL TUITION: PARTIAL SCHOLARSHIP (INCLUDES ROOM +
                            ALL MEALS)
                          </th>
                          <th
                            style='padding: 8px 12px; line-height: 19px; font-size: 13px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 700; font-style: normal; color: rgb(255, 255, 255); background-color: rgb(94, 159, 182); border-color: rgb(94, 159, 182);'
                          >
                            Concentration (6-Weeks)
                          </th>
                          <th
                            style='padding: 8px 12px; line-height: 19px; font-size: 13px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 700; font-style: normal; color: rgb(255, 255, 255); background-color: rgb(94, 159, 182); border-color: rgb(94, 159, 182);'
                          >
                            Short Session (4-days)
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            Regular (~20-hr per week work requirement)
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $4,105
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $766
                          </td>
                        </tr>
                        <tr>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            Hot glass (~10-hr per week work requirement)
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $7,108
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            N/A
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p>
                    <em
                      >Students who receive a partial scholarship with work
                      requirement receive shared dormitory housing and meals at
                      no additional charge as part of their scholarship
                      package.<br /> </em
                    ><em
                      ><strong>Note:</strong>
                      <strong
                        >tuition includes the cost of shared materials,
                        instructor demo materials, and hazmat disposal. Students
                        are, however, still responsible for the cost of
                        materials used for their own production. Payment for
                        these materials will be due at the end of the session
                        prior to departing campus.</strong
                      ></em
                    >
                  </p>
                  <p>&nbsp;</p>
                  <div
                    class="dalt-table-container"
                    style="margin-top: 20px; margin-bottom: 20px; width: auto; height: auto;"
                  >
                    <table
                      id="dalt-table-28"
                      class="dalt-table"
                      data-enable-sorting="0"
                      data-enable-manual-sorting="0"
                      data-show-position="0"
                      data-position-side="left"
                      data-position-label="#"
                      data-number-format="0"
                      data-order-desc-asc-1="0"
                      data-order-by-1="1"
                      data-order-data-type-1="auto"
                      data-order-date-format-1="ddmmyyyy"
                      data-order-desc-asc-2="0"
                      data-order-by-2="1"
                      data-order-data-type-2="auto"
                      data-order-date-format-2="ddmmyyyy"
                      data-order-desc-asc-3="0"
                      data-order-by-3="1"
                      data-order-data-type-3="auto"
                      data-order-date-format-3="ddmmyyyy"
                      data-order-desc-asc-4="0"
                      data-order-by-4="1"
                      data-order-data-type-4="auto"
                      data-order-date-format-4="ddmmyyyy"
                      data-order-desc-asc-5="0"
                      data-order-by-5="1"
                      data-order-data-type-5="auto"
                      data-order-date-format-5="ddmmyyyy"
                      data-table-width="0"
                      data-table-width-value="400"
                      data-table-minimum-width="710"
                      data-table-margin-top="20"
                      data-table-margin-bottom="20"
                      data-enable-container="1"
                      data-container-width="0"
                      data-container-height="0"
                      data-header-font-size="13"
                      data-header-font-family="'Open Sans', Helvetica, Arial, sans-serif"
                      data-header-font-weight="700"
                      data-header-font-style="normal"
                      data-header-background-color="#5e9fb6"
                      data-header-font-color="#FFFFFF"
                      data-header-link-color="#FFFFFF"
                      data-header-border-color="#5e9fb6"
                      data-header-position-alignment="left"
                      data-body-font-size="13"
                      data-body-font-family="'Open Sans', Helvetica, Arial, sans-serif"
                      data-body-font-weight="500"
                      data-body-font-style="normal"
                      data-even-rows-background-color="#FFFFFF"
                      data-odd-rows-background-color="#FCFCFC"
                      data-even-rows-font-color="#666666"
                      data-even-rows-link-color="#C3512F"
                      data-odd-rows-font-color="#666666"
                      data-odd-rows-link-color="#C3512F"
                      data-rows-border-color="#E1E1E1"
                      data-autocolors-priority="rows"
                      data-autocolors-affected-rows-1=""
                      data-autocolors-rows-background-color-1="#5e9fb6"
                      data-autocolors-rows-font-color-1="#ffffff"
                      data-autocolors-affected-rows-2=""
                      data-autocolors-rows-background-color-2="#FFFFFF"
                      data-autocolors-rows-font-color-2="#666666"
                      data-autocolors-affected-rows-3=""
                      data-autocolors-rows-background-color-3="#FFFFFF"
                      data-autocolors-rows-font-color-3="#666666"
                      data-autocolors-affected-rows-4=""
                      data-autocolors-rows-background-color-4="#FFFFFF"
                      data-autocolors-rows-font-color-4="#666666"
                      data-autocolors-affected-rows-5=""
                      data-autocolors-rows-background-color-5="#ffffff"
                      data-autocolors-rows-font-color-5="#666666"
                      data-autocolors-affected-columns-1=""
                      data-autocolors-columns-background-color-1="#FFFFFF"
                      data-autocolors-columns-font-color-1="#666666"
                      data-autocolors-affected-columns-2=""
                      data-autocolors-columns-background-color-2="#FFFFFF"
                      data-autocolors-columns-font-color-2="#666666"
                      data-autocolors-affected-columns-3=""
                      data-autocolors-columns-background-color-3="#FFFFFF"
                      data-autocolors-columns-font-color-3="#666666"
                      data-autocolors-affected-columns-4=""
                      data-autocolors-columns-background-color-4="#FFFFFF"
                      data-autocolors-columns-font-color-4="#666666"
                      data-autocolors-affected-columns-5=""
                      data-autocolors-columns-background-color-5="#FFFFFF"
                      data-autocolors-columns-font-color-5="#666666"
                      data-autoalignment-priority="rows"
                      data-autoalignment-affected-rows-left=""
                      data-autoalignment-affected-rows-center=""
                      data-autoalignment-affected-rows-right=""
                      data-autoalignment-affected-columns-left=""
                      data-autoalignment-affected-columns-center=""
                      data-autoalignment-affected-columns-right=""
                      data-tablet-breakpoint="989"
                      data-hide-tablet-list=""
                      data-tablet-header-font-size="11"
                      data-tablet-body-font-size="11"
                      data-tablet-hide-images="0"
                      data-phone-breakpoint="479"
                      data-hide-phone-list=""
                      data-phone-header-font-size="11"
                      data-phone-body-font-size="11"
                      data-phone-hide-images="0"
                      data-enable-cell-properties="0"
                      style="width: 100%; min-width: 500px; visibility: visible;"
                    >
                      <thead>
                        <tr>
                          <th
                            style='padding: 8px 12px; line-height: 19px; font-size: 13px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 700; font-style: normal; color: rgb(255, 255, 255); background-color: rgb(94, 159, 182); border-color: rgb(94, 159, 182);'
                          >
                            FALL ROOM + ALL MEALS
                          </th>
                          <th
                            style='padding: 8px 12px; line-height: 19px; font-size: 13px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 700; font-style: normal; color: rgb(255, 255, 255); background-color: rgb(94, 159, 182); border-color: rgb(94, 159, 182);'
                          >
                            Concentration (6-Weeks)
                          </th>
                          <th
                            style='padding: 8px 12px; line-height: 19px; font-size: 13px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 700; font-style: normal; color: rgb(255, 255, 255); background-color: rgb(94, 159, 182); border-color: rgb(94, 159, 182);'
                          >
                            Short Session (4-days)
                          </th>
                          <th
                            style='padding: 8px 12px; line-height: 19px; font-size: 13px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 700; font-style: normal; color: rgb(255, 255, 255); background-color: rgb(94, 159, 182); border-color: rgb(94, 159, 182);'
                          >
                            Weekend Session
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            Quad
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $3,756
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $646
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $313
                          </td>
                        </tr>
                        <tr>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            Double/common bath
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $4,172
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $1,025
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $501
                          </td>
                        </tr>
                        <tr>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            Double/bath shared with roommate
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $4,242
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $1,229
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $606
                          </td>
                        </tr>
                        <tr>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            Single/communal bath*
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $4,359
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $1,428
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            N/A
                          </td>
                        </tr>
                        <tr>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            Single/common bath*
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $4,472
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $1,582
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            N/A
                          </td>
                        </tr>
                        <tr>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            Single/private bath
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $4,699
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $1,991
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            N/A
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p>
                    <em
                      >*Common baths are shared by two rooms; communal baths are
                      shared by multiple rooms.</em
                    >
                  </p>
                  <p>&nbsp;</p>
                  <div
                    class="dalt-table-container"
                    style="margin-top: 20px; margin-bottom: 20px; width: auto; height: auto;"
                  >
                    <table
                      id="dalt-table-30"
                      class="dalt-table"
                      data-enable-sorting="0"
                      data-enable-manual-sorting="0"
                      data-show-position="0"
                      data-position-side="left"
                      data-position-label="#"
                      data-number-format="0"
                      data-order-desc-asc-1="0"
                      data-order-by-1="1"
                      data-order-data-type-1="auto"
                      data-order-date-format-1="ddmmyyyy"
                      data-order-desc-asc-2="0"
                      data-order-by-2="1"
                      data-order-data-type-2="auto"
                      data-order-date-format-2="ddmmyyyy"
                      data-order-desc-asc-3="0"
                      data-order-by-3="1"
                      data-order-data-type-3="auto"
                      data-order-date-format-3="ddmmyyyy"
                      data-order-desc-asc-4="0"
                      data-order-by-4="1"
                      data-order-data-type-4="auto"
                      data-order-date-format-4="ddmmyyyy"
                      data-order-desc-asc-5="0"
                      data-order-by-5="1"
                      data-order-data-type-5="auto"
                      data-order-date-format-5="ddmmyyyy"
                      data-table-width="0"
                      data-table-width-value="400"
                      data-table-minimum-width="710"
                      data-table-margin-top="20"
                      data-table-margin-bottom="20"
                      data-enable-container="1"
                      data-container-width="0"
                      data-container-height="0"
                      data-header-font-size="13"
                      data-header-font-family="'Open Sans', Helvetica, Arial, sans-serif"
                      data-header-font-weight="700"
                      data-header-font-style="normal"
                      data-header-background-color="#5e9fb6"
                      data-header-font-color="#FFFFFF"
                      data-header-link-color="#FFFFFF"
                      data-header-border-color="#5e9fb6"
                      data-header-position-alignment="left"
                      data-body-font-size="13"
                      data-body-font-family="'Open Sans', Helvetica, Arial, sans-serif"
                      data-body-font-weight="500"
                      data-body-font-style="normal"
                      data-even-rows-background-color="#FFFFFF"
                      data-odd-rows-background-color="#FCFCFC"
                      data-even-rows-font-color="#666666"
                      data-even-rows-link-color="#C3512F"
                      data-odd-rows-font-color="#666666"
                      data-odd-rows-link-color="#C3512F"
                      data-rows-border-color="#E1E1E1"
                      data-autocolors-priority="rows"
                      data-autocolors-affected-rows-1=""
                      data-autocolors-rows-background-color-1="#5e9fb6"
                      data-autocolors-rows-font-color-1="#ffffff"
                      data-autocolors-affected-rows-2=""
                      data-autocolors-rows-background-color-2="#FFFFFF"
                      data-autocolors-rows-font-color-2="#666666"
                      data-autocolors-affected-rows-3=""
                      data-autocolors-rows-background-color-3="#FFFFFF"
                      data-autocolors-rows-font-color-3="#666666"
                      data-autocolors-affected-rows-4=""
                      data-autocolors-rows-background-color-4="#FFFFFF"
                      data-autocolors-rows-font-color-4="#666666"
                      data-autocolors-affected-rows-5=""
                      data-autocolors-rows-background-color-5="#ffffff"
                      data-autocolors-rows-font-color-5="#666666"
                      data-autocolors-affected-columns-1=""
                      data-autocolors-columns-background-color-1="#FFFFFF"
                      data-autocolors-columns-font-color-1="#666666"
                      data-autocolors-affected-columns-2=""
                      data-autocolors-columns-background-color-2="#FFFFFF"
                      data-autocolors-columns-font-color-2="#666666"
                      data-autocolors-affected-columns-3=""
                      data-autocolors-columns-background-color-3="#FFFFFF"
                      data-autocolors-columns-font-color-3="#666666"
                      data-autocolors-affected-columns-4=""
                      data-autocolors-columns-background-color-4="#FFFFFF"
                      data-autocolors-columns-font-color-4="#666666"
                      data-autocolors-affected-columns-5=""
                      data-autocolors-columns-background-color-5="#FFFFFF"
                      data-autocolors-columns-font-color-5="#666666"
                      data-autoalignment-priority="rows"
                      data-autoalignment-affected-rows-left=""
                      data-autoalignment-affected-rows-center=""
                      data-autoalignment-affected-rows-right=""
                      data-autoalignment-affected-columns-left=""
                      data-autoalignment-affected-columns-center=""
                      data-autoalignment-affected-columns-right=""
                      data-tablet-breakpoint="989"
                      data-hide-tablet-list=""
                      data-tablet-header-font-size="11"
                      data-tablet-body-font-size="11"
                      data-tablet-hide-images="0"
                      data-phone-breakpoint="479"
                      data-hide-phone-list=""
                      data-phone-header-font-size="11"
                      data-phone-body-font-size="11"
                      data-phone-hide-images="0"
                      data-enable-cell-properties="0"
                      style="width: 100%; min-width: 500px; visibility: visible;"
                    >
                      <thead>
                        <tr>
                          <th
                            style='padding: 8px 12px; line-height: 19px; font-size: 13px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 700; font-style: normal; color: rgb(255, 255, 255); background-color: rgb(94, 159, 182); border-color: rgb(94, 159, 182);'
                          >
                            FALL MEALS FOR OFF-CAMPUS STUDENTS
                          </th>
                          <th
                            style='padding: 8px 12px; line-height: 19px; font-size: 13px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 700; font-style: normal; color: rgb(255, 255, 255); background-color: rgb(94, 159, 182); border-color: rgb(94, 159, 182);'
                          >
                            Concentration (6-Weeks)
                          </th>
                          <th
                            style='padding: 8px 12px; line-height: 19px; font-size: 13px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 700; font-style: normal; color: rgb(255, 255, 255); background-color: rgb(94, 159, 182); border-color: rgb(94, 159, 182);'
                          >
                            Short Session (4-days)
                          </th>
                          <th
                            style='padding: 8px 12px; line-height: 19px; font-size: 13px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 700; font-style: normal; color: rgb(255, 255, 255); background-color: rgb(94, 159, 182); border-color: rgb(94, 159, 182);'
                          >
                            Weekend Session
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            All meals
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $2,297
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $467
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $222
                          </td>
                        </tr>
                        <tr>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            Lunch &amp; Dinner
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $2,013
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $356
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $163
                          </td>
                        </tr>
                        <tr>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            Lunch only
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $893
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $158
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $58
                          </td>
                        </tr>
                        <tr>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            Dinner Only
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $1,117
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $201
                          </td>
                          <td
                            style='font-size: 13px; padding: 4px 12px; line-height: 20px; font-family: "Open Sans", Helvetica, Arial, sans-serif; font-weight: 500; font-style: normal; border-color: rgb(225, 225, 225);'
                          >
                            $105
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <strong>Cancellation and Refunds</strong>
                  <p dir="ltr">
                    Please read our cancellation and refund policy
                    <a
                      href="https://penland.org/workshops/cancellation-refunds/"
                      target="_blank"
                      rel="noopener"
                      ><strong>here</strong></a
                    >.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-primary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>


    <?php include_once('./footer.php'); ?>
    <?php include_once('./wip-modal.php'); ?>
  </body>
</html>
<?php include_once('./scriptJS.php'); ?>

<script>
  $(document).ready(function() {
    $('#bs-datepicker-basic').datepicker();
    new Cleave('.phone-number-mask', {
      phone: true,
      phoneRegionCode: 'US',
    });

    const tagifyBasicEl = document.querySelector('#TagifyBasic');
    const TagifyBasic = new Tagify(tagifyBasicEl);

    const wizardNumbered = document.querySelector('.wizard-numbered');

    if (typeof wizardNumbered !== undefined && wizardNumbered !== null) {
      const wizardNumberedBtnNextList = [].slice.call(
          wizardNumbered.querySelectorAll('.btn-next')
        ),
        wizardNumberedBtnPrevList = [].slice.call(
          wizardNumbered.querySelectorAll('.btn-prev')
        ),
        wizardNumberedBtnSubmit = wizardNumbered.querySelector('.btn-submit');

      const numberedStepper = new Stepper(wizardNumbered, {
        linear: false,
      });
      if (wizardNumberedBtnNextList) {
        wizardNumberedBtnNextList.forEach((wizardNumberedBtnNext) => {
          wizardNumberedBtnNext.addEventListener('click', (event) => {
            numberedStepper.next();
          });
        });
      }
      if (wizardNumberedBtnPrevList) {
        wizardNumberedBtnPrevList.forEach((wizardNumberedBtnPrev) => {
          wizardNumberedBtnPrev.addEventListener('click', (event) => {
            numberedStepper.previous();
          });
        });
      }
      if (wizardNumberedBtnSubmit) {
        wizardNumberedBtnSubmit.addEventListener('click', (event) => {
          alert('Submitted..!!');
        });
      }
    }
  });

  const wizardModernVertical = document.querySelector('.wizard-modern-vertical');

if (typeof wizardModernVertical !== undefined && wizardModernVertical !== null) {
  const wizardModernVerticalBtnNextList = [].slice.call(wizardModernVertical.querySelectorAll('.btn-next')),
    wizardModernVerticalBtnPrevList = [].slice.call(wizardModernVertical.querySelectorAll('.btn-prev')),
    wizardModernVerticalBtnSubmit = wizardModernVertical.querySelector('.btn-submit');

  const modernVerticalStepper = new Stepper(wizardModernVertical, {
    linear: false
  });
  if (wizardModernVerticalBtnNextList) {
    wizardModernVerticalBtnNextList.forEach(wizardModernVerticalBtnNext => {
      wizardModernVerticalBtnNext.addEventListener('click', event => {
        modernVerticalStepper.next();
      });
    });
  }
  if (wizardModernVerticalBtnPrevList) {
    wizardModernVerticalBtnPrevList.forEach(wizardModernVerticalBtnPrev => {
      wizardModernVerticalBtnPrev.addEventListener('click', event => {
        modernVerticalStepper.previous();
      });
    });
  }
  if (wizardModernVerticalBtnSubmit) {
    wizardModernVerticalBtnSubmit.addEventListener('click', event => {
      alert('Submitted..!!');
    });
  }
}
</script>

<!-- END UI THEM SCRIPT -->
