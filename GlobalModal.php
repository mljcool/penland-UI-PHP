<div class="modal fade" id="modalUserExist" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="alert alert-primary d-flex" role="alert">
          <span class="badge badge-center rounded-pill bg-primary border-label-primary p-3 me-2"><i
              style="font-size:2em;" class="bx bx-info-circle bx-tada fa-2x"></i></i></span>
          <div class="d-flex flex-column ps-1">
            <h6 class="alert-heading d-flex align-items-center fw-bold mb-1">
              Oops!!
            </h6>
            <span class="message-body-modal"></span>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">

          <span class="align-middle d-sm-inline-block d-none me-sm-1 me-0"> Login to my account?</span>
          <i class="bx bx-log-in  bx-sm me-sm-n2"></i>
        </button>
      </div>
    </div>
  </div>
</div>


<div class="modal fade" id="PaymentAdjusted" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="alert alert-primary d-flex" role="alert">
          <span class="badge badge-center rounded-pill bg-primary border-label-primary p-3 me-2"><i
              style="font-size:2em;" class="bx bx-info-circle bx-tada fa-2x"></i></i></span>
          <div class="d-flex flex-column ps-1">
            <h6 class="alert-heading d-flex align-items-center fw-bold mb-1">
              Please note.
            </h6>
            <span class="message-body-modal">
              Additional product may apply for housing and meals.
            </span>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">

          <span class="align-middle d-sm-inline-block d-none me-sm-1 me-0">OK</span>
          <i class="bx bx-log-in  bx-sm me-sm-n2"></i>
        </button>
      </div>
    </div>
  </div>
</div>


<div class="modal fade" id="WaitingListModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="alert alert-primary d-flex" role="alert">
          <span class="badge badge-center rounded-pill bg-primary border-label-primary p-3 me-2"><i
              style="font-size:2em;" class="bx bx-info-circle bx-tada fa-2x"></i></i></span>
          <div class="d-flex flex-column ps-1">
           
            <span class="message-body-modal">
              WIP.
            </span>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">

          <span class="align-middle d-sm-inline-block d-none me-sm-1 me-0">OK</span>
          <i class="bx bx-log-in  bx-sm me-sm-n2"></i>
        </button>
      </div>
    </div>
  </div>
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
            <a href="/penland-web/login.php?redirectURLPSIG=returning-student" class="item-select-as">
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