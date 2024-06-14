<div id="accountDetailsValidation" class="content">
  <div class="content-header mb-3">
    <h6 class="mb-0">Account Details</h6>
    <small>Enter Your Account Details.</small>
  </div>
  <div class="row g-3">
    <div class="col-md-6">
      <label class="form-label" for="multiStepsUsername">Username</label>
      <input
        type="text"
        id="multiStepsUsername"
        class="form-control dd-adx_identity_username"
        placeholder="johndoe"
        name="multiStepsUsername"
      />
    </div>
    <div class="col-md-6">
      <label class="form-label" for="multiStepsEmail">Email</label>
      <input
        type="email"
        id="multiStepsEmail"
        name="multiStepsEmail"
        class="form-control dd-emailaddress1"
        placeholder="john.doe@email.com"
        aria-label="john.doe"
      />
    </div>
    <div class="col-md-6 form-password-toggle">
      <label class="form-label" for="password">Password</label>
      <div class="input-group input-group-merge">
        <input
          type="password"
          id="password_1"
          name="multiStepsPass"
          class="form-control dd-adx_identity_passwordhash_22"
          placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
          aria-describedby="multiStepsPass2"
        />
        <span class="input-group-text cursor-pointer" id="multiStepsPass2"
          ><i class="bx bx-hide"></i
        ></span>
      </div>
    </div>
    <div class="col-md-6 form-password-toggle">
      <label class="form-label" for="multiStepsConfirmPass">Confirm Password</label>
      <div class="input-group input-group-merge">
        <input
          type="password"
          id="multiStepsConfirmPass"
          class="form-control dd-adx_identity_passwordhash"
          placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
          aria-describedby="confirm-password2"
          name="multiStepsConfirmPass"
        />
        <span class="input-group-text cursor-pointer" id="confirm-password2"
          ><i class="bx bx-hide"></i
        ></span>
      </div>
    </div>
    <div class="col-12 d-flex justify-content-between">
      <button style="visibility: hidden" class="btn btn-label-secondary btn-prev" disabled>
        <i class="bx bx-chevron-left bx-sm ms-sm-n2"></i>
        <span class="align-middle d-sm-inline-block d-none">Previous</span>
      </button>
      <button class="btn btn-primary btn-next">
        <span class="align-middle d-sm-inline-block d-none me-sm-1 me-0"
          >Next</span
        >
        <i class="bx bx-chevron-right bx-sm me-sm-n2"></i>
      </button>
    </div>
  </div>
</div>
