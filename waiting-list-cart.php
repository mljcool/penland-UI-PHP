<!DOCTYPE html>
<html lang="en" class="light-style docs-page">
  <head>
    <?php  include_once('./header.php'); ?>
  </head>
  <body>
    <?php include_once('./home-navigition.php'); ?>

    <div class="container-fluid">

    <div class="container-xxl flex-grow-1 container-p-y">
        <div class="row ">
            <!-- <h1>WORKSHOPS & New Student Form</h1>
            <label>(TEST ENVIRONMENT 👩‍💻)</label> -->
            <?php include_once('./banner-test-env.php') ?>
          
          </div>
      </div>

  <!-- START BODY PAGE -->
  <div class="container-xxl flex-grow-1 container-p-y">



    <!-- START INSIDE BODY -->
    <div class="row section-cart-items">
    <div class="workshop-item-wrapper waiting-list-container">
        <div id="checkout-cart" class="content">
            <div class="row">
                <!-- Cart left -->
                <div class="col-xl-8 mb-3 mb-xl-0">
                    <!-- Offer alert -->
                    <div class="alert bg-lighter mb-3" role="alert">
                        <div class="d-flex">
                            <span class="badge badge-center rounded-pill bg-success border-label-success p-3 me-2"><i
                                    class="bx bx-time-five fs-4 bx-tada"> </i></span>
                            <div class="flex-grow-1 ps-1">
                                <div class="fw-medium fs-5 mb-2 cart-waitlist-title"> </div>
                                <ul class="list-unstyled mb-0">
                                    <p>Thank you for your interest in the waitlist. When space in a workshop or program
                                        becomes available, registration will open on the website. Everyone on the
                                        waitlist will
                                        be emailed to alert them of the opening. This ensures that everyone has an equal
                                        opportunity to register for the workshop or program.</p>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <!-- Shopping bag -->
                    <!-- <h5>My Cart <span class="count-items">(0 Items)</span></h5> -->
                    <ul class="list-group mb-3 cart-item-list-wrapper">


                    </ul>

                    <!-- Wishlist -->
                    <div class="list-group">
                        <li class="list-group-item p4">
                            <div id="personalInfoValidation" class="content ">
                                <div class="content-header mb-3">

                                    <small>Personal and Contact information.</small>
                                </div>
                                <div class="row g-3">
                                    <div class="col">
                                        <div class="col">
                                            <fieldset>
                                                <legend>Personal Information</legend>
                                                <div class="col-md-9">
                                                    <label class="form-label" for="firstName">First Name</label>
                                                    <input type="text" id="firstName" name="firstName"
                                                        class="form-control dd-firstname" placeholder="John" />
                                                </div>
                                                <div class="col-md-9 mt-3">
                                                    <label class="form-label" for="middleName">Middle Name</label>
                                                    <input type="text" id="middleName" name="middleName"
                                                        class="form-control dd-middlename" placeholder="Middle" />
                                                </div>
                                                <div class="col-md-9 mt-3">
                                                    <label class="form-label" for="lastName">Last Name</label>
                                                    <input type="text" id="lastName" name="lastName"
                                                        class="form-control dd-lastname" placeholder="Doe" />
                                                </div>
                                                <div class="col-md-9 mt-3">
                                                    <label for="bs-datepicker-basic" class="form-label">DOB</label>
                                                    <input type="text" id="bs-datepicker-basic" name="userDob"
                                                        placeholder="MM/DD/YYYY" class="form-control dd-birthdate" />
                                                </div>
                                                <div class="col-md-9 mt-3">
                                                    <label class="form-label" for="gender">Gender</label>
                                                    <select class="select2 w-auto dd-gendercode" name="gender"
                                                        id="gender" data-style="btn-transparent" data-icon-base="bx"
                                                        data-tick-icon="bx-check text-white">
                                                        <option label=""></option>
                                                        <option value="1">Male</option>
                                                        <option value="2">Female</option>
                                                        <option value="3">Non-Binary</option>
                                                        <option value="4">I prefer not to answer</option>
                                                    </select>
                                                </div>

                                                <div class="col-md-9 mt-3">
                                                    <label class="form-label" for="mshied_homelanguage">Home
                                                        Language</label>
                                                    <select class="select2 w-auto dd-mshied_homelanguage"
                                                        name="mshied_homelanguage" id="mshied_homelanguage"
                                                        data-style="btn-transparent" data-icon-base="bx"
                                                        data-tick-icon="bx-check text-white">

                                                    </select>
                                                </div>
                                                <div class="col-md-9 mt-3">
                                                    <label class="form-label" for="mshied_preferredlanguage">Peferred
                                                        Language</label>
                                                    <select class="select2 w-auto dd-mshied_preferredlanguage"
                                                        name="mshied_preferredlanguage" id="mshied_preferredlanguage"
                                                        data-style="btn-transparent" data-icon-base="bx"
                                                        data-tick-icon="bx-check text-white">

                                                    </select>
                                                </div>
                                            </fieldset>
                                        </div>
                                        <div class="col mt-3">
                                            <fieldset>
                                                <legend>Demographics</legend>
                                                <div class="col-md-9 mt-3">
                                                    <label class="form-label" for="mshied_race_">Race/Ethnicity</label>
                                                    <select class="select2 w-auto dd-mshied_race_" name="mshied_race_"
                                                        id="mshied_race_" data-style="btn-transparent"
                                                        data-icon-base="bx" data-tick-icon="bx-check text-white">

                                                    </select>
                                                </div>
                                                <div class="col-md-9 mt-3">
                                                    <label class="form-label"
                                                        for="hso_blackindigenousorpersonofcolor">Black, Indigenous, or
                                                        Person of
                                                        Color</label>
                                                    <select class="select2 w-auto dd-hso_blackindigenousorpersonofcolor"
                                                        name="hso_blackindigenousorpersonofcolor"
                                                        id="hso_blackindigenousorpersonofcolor"
                                                        data-style="btn-transparent" data-icon-base="bx"
                                                        data-tick-icon="bx-check text-white">
                                                        <option label=""></option>
                                                        <option value="1">Yes</option>
                                                        <option value="2">No</option>
                                                        <option value="3">Prefer not to answer</option>
                                                    </select>
                                                </div>
                                                <div class="col-md-9 mt-3">
                                                    <label class="form-label" for="hso_lgbtqiaidentification">LGBTQIA+
                                                        Identification</label>
                                                    <select class="select2 w-auto dd-hso_lgbtqiaidentification"
                                                        name="hso_lgbtqiaidentification" id="hso_lgbtqiaidentification"
                                                        data-style="btn-transparent" data-icon-base="bx"
                                                        data-tick-icon="bx-check text-white">
                                                        <option label=""></option>
                                                        <option value="1">Yes</option>
                                                        <option value="2">No</option>
                                                        <option value="3">Prefer not to answer</option>

                                                    </select>
                                                </div>
                                                <div class="col-md-9 mt-3">
                                                    <label class="form-label"
                                                        for="mshied_limitedlanguageproficiency">Limited Language
                                                        Proficiency+
                                                        Identification</label>
                                                    <select class="select2 w-auto dd-mshied_limitedlanguageproficiency"
                                                        name="mshied_limitedlanguageproficiency"
                                                        id="mshied_limitedlanguageproficiency"
                                                        data-style="btn-transparent" data-icon-base="bx"
                                                        data-tick-icon="bx-check text-white">
                                                        <option label=""></option>
                                                        <option value="494280000">Limited</option>
                                                        <option value="494280001">Limited Monitored</option>
                                                        <option value="494280002">Not Limited</option>

                                                    </select>
                                                </div>
                                                <div class="col-md-9 mt-3">
                                                    <label class="form-label"
                                                        for="mshied_accommodations">Accommodations</label>
                                                    <input type="text" name="mshied_accommodations"
                                                        id="mshied_accommodations"
                                                        class="form-control dd-mshied_accommodations"
                                                        placeholder="here..." />
                                                </div>
                                                <div class="col-md-9 mt-3">
                                                    <label class="form-label"
                                                        for="hso_lgbtqiaidentification">Disability</label>
                                                    <select class="select2 w-auto dd-mshied_disability"
                                                        name="mshied_disability" id="mshied_disability"
                                                        data-style="btn-transparent" data-icon-base="bx"
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
                                                        <input class="form-control phone-number-mask dd-mobilephone"
                                                            type="text" name="phoneNumber"
                                                            placeholder="Enter Phone Number" />
                                                    </div>
                                                </div>
                                                <div class="col-md-9 mt-3">
                                                    <label class="form-label" for="emailTwo">email</label>
                                                    <input type="email" name="emailTwo" id="emailTwo"
                                                        class="form-control dd-emailaddress2"
                                                        placeholder="sample@email.co" />
                                                </div>
                                            </div>
                                            <div class="row mt-3">
                                                <div class="col-md-9 mt-3">
                                                    <label class="form-label" for="mailing-address">Mailing
                                                        Address</label>
                                                    <input type="email" id="mailing-address" name="mailingAddress"
                                                        class="form-control dd-emailaddress3"
                                                        placeholder="Mailing Address..." />
                                                </div>
                                                <div class="col-md-9 mt-3">
                                                    <label class="form-label" for="city">City</label>
                                                    <input type="text" name="cityAddress" id="city"
                                                        class="form-control dd-address1_city"
                                                        placeholder="city Address..." />
                                                </div>
                                                <div class="col-md-9 mt-3">
                                                    <label class="form-label"
                                                        for="state-province">State/Province</label>
                                                    <select class="select2 w-auto dd-address1_stateorprovince"
                                                        id="address1_stateorprovince" data-style="btn-transparent"
                                                        name="stateProvince" data-icon-base="bx"
                                                        data-tick-icon="bx-check text-white" data-allow-clear="true">

                                                    </select>
                                                </div>
                                                <div class="col-md-9 mt-3">
                                                    <label class="form-label" for="Postcode">Zip/Postcode</label>
                                                    <input type="text" id="Postcode" name="zipcode"
                                                        class="form-control dd-address1_postalcode"
                                                        placeholder="ZIP Postcode..." />
                                                </div>
                                                <div class="col-md-9 mt-3">
                                                    <label class="form-label" for="country-code">Country</label>
                                                    <select class="select2 w-auto dd-address1_country"
                                                        id="address1_country" data-style="btn-transparent"
                                                        name="country" data-icon-base="bx"
                                                        data-tick-icon="bx-check text-white" data-allow-clear="true">

                                                    </select>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </div>


                </div>

                <!-- Cart right -->
                <div class="col-xl-4">
                    <div class="border rounded p-4 mb-3 pb-3">


                        <!-- Gift wrap -->
                        <div class="bg-lighter rounded p-3">
                            <p class="fw-medium mb-2">Price notice.</p>
                            <p class="mb-2">
                                Please note that the current price for this workshop may change by the time the workshop
                                re-opens.
                            </p>

                        </div>

                        <hr class="mx-n4" />

                        <!-- Price Details -->
                        <h6>Payment Details</h6>
                        <dl class="row mb-0">
                            <dt class="col-6 fw-normal">Workshop Fee</dt>
                            <dd class="col-6 text-end total-application-fee">$00.00</dd>
<!-- 
                            <dt class="col-6 fw-normal">Tax</dt>
                            <dd class="col-6 text-end">$0.00</dd> -->
                        </dl>

                        <hr class="mx-n4" />
                        <dl class="row mb-0">
                            <dt class="col-6">Total</dt>
                            <dd class="col-6 fw-medium text-end mb-0 over-all-total">$1198.00</dd>
                        </dl>

                    </div>
                    <div class="d-grid">
                        <button class="btn btn-primary btn-next on-continue-waitlist-program">
                            Continue Join Waitlist
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    <!-- END INSIDE BODY -->



</div>

  <!-- MODAL START HERE -->

  <div
    class="modal fade"
    id="modalContinueRegister"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog modal-sm" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">I am</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="selected-item">
            <a href="/penland-web/login.php" class="item-select-as">
              <div class="icon-v">
                <img src="./assets/Returning-student.png" />
              </div>
              <div class="select-as-label">A returning student</div>
            </a>
            <a href="#" onclick="onNewStudent()" class="item-select-as new-student-link-to-form">
              <div class="icon-v">
                <img src="./assets/New-student.png" />
              </div>
              <div class="select-as-label">A new student</div>
            </a>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- MODAL END HERE -->

  <!-- END BODY PAGE -->
</div>


    <?php include_once('./footer.php'); ?>
    <?php include_once('./wip-modal.php'); ?>
  </body>
</html>

<?php include_once('./scriptJS.php'); ?>
