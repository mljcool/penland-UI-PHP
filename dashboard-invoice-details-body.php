<style>
   .card {
      border: 1px solid #d9dee3;
   }
   .card-wrapper{
    padding: 2px 2rem;
    background: '#fafafa';
   }
</style>
<div class="content-wrapper">
   <div class="container-xxl flex-grow-1">
        <div class="row mt-3">
            <div class="col-lg-12 col-md-12">
                <a href="/penland-web/dashboard-invoice.php" type="button" class="btn btn-label-secondary ">
                    <i class='bx bx-left-arrow-alt' ></i> Back
                </a>
            </div>
        </div>
      <div class="card mb-4  mt-3 card-wrapper">
         <!-- <span class="text-muted fw-light">User Profile /</span> Profile -->
         <!-- <div class="container-weather">
           <div class="background-weather">
              <div class="Circle1"></div>
              <div class="Circle2"></div>
              <div class="Circle3"></div>
              <div class="content-weather">
                 <h1 class="Condition">
                    <i class="bx bx-sun"></i>Sunny
                 </h1>
                 <h1 class="Temp">72<span id="F">&#8457;</span></h1>
                 <h1 class="Time">09:35</h1>
                 <h1 class="Location">
                    <i class='bx bx-map'></i>Texas, City
                 </h1>
              </div>
           </div>
        </div> -->
    
         <!-- Header -->
         <div class="row mt-4">
            <div class="col-lg-12 col-md-12">
               <div class="card mb-4">
                  <div class="card-widget-separator-wrapper">
                     <div class="card-body card-widget-separator">
                        <div class="row gy-4 gy-sm-1">
                           <div class="col-sm-6 col-lg-3">
                              <div
                                 class="d-flex justify-content-between align-items-start card-widget-1 border-end pb-3 pb-sm-0">
                                 <div>
                                    <h5 class="mb-1 invoiceID">....</h5>
                                    <p class="mb-0">Invoice ID</p>
                                 </div>
                                 <div class="avatar me-lg-4" style="cursor:default;">
                                    <span class="avatar-initial rounded bg-label-secondary">
                                       <i class="bx bx-file bx-sm"></i>
                                    </span>
                                 </div>
                              </div>
                              <hr class="d-none d-sm-block d-lg-none me-4">
                           </div>
                           <div class="col-sm-6 col-lg-3">
                              <div
                                 class="d-flex justify-content-between align-items-start card-widget-2 border-end pb-3 pb-sm-0">
                                 <div>
                                    <h6 class="mb-1 invoiceName">......</h6>
                                    <p class="mb-0">Invoice Name</p>

                                 </div>
                                 <div class="avatar me-lg-4" style="cursor:default;">
                                    <span class="avatar-initial rounded bg-label-secondary">
                                       <i class="bx bx-file bx-sm"></i>
                                    </span>
                                 </div>
                              </div>
                              <hr class="d-none d-sm-block d-lg-none">
                           </div>
                           <div class="col-sm-6 col-lg-3">
                              <div
                                 class="d-flex justify-content-between align-items-start border-end pb-3 pb-sm-0 card-widget-3">
                                 <div>
                                    <h5 class="mb-1 invoiceStatus">....</h5>
                                    <p class="mb-0">Status</p>
                                 </div>
                                 <div class="avatar me-sm-4" style="cursor:default;">
                                    <span class="invoiceStatus-color avatar-initial rounded bg-label-secondary">
                                       <i class="bx bx-check-double bx-sm"></i>
                                    </span>
                                 </div>
                              </div>
                           </div>
                           <div class="col-sm-6 col-lg-3">
                              <div class="d-flex justify-content-between align-items-start">
                                 <div>
                                    <h5 class="mb-1 invoiceTotalAmount">$00.00</h5>
                                    <p class="mb-0">Total Amount</p>
                                 </div>
                                 <button id="id_paynow" type="button" class="btn btn-primary ">
                                    <i class="bx bxs-wallet bx-sm bx-tada me-1"></i>
                                    Pay now</button>

                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <!--/ Header -->

         <!-- User Profile Content -->
         <div class="row">
            <div class="col-xl-3 col-lg-6 col-md-6">
               <!-- About User -->
               <div class="card mb-4">
                  <div class="card-body " style="font-size:14px">

                     <ul class="list-unstyled mb-4 mt-3">
                        <li class="d-flex align-items-center mb-3">
                           <i class="bx bx-user"></i><span class="fw-medium mx-2">Customer:</span>
                           <span class="u_fullname">______</span>
                        </li>
                        <li class="d-flex align-items-center mb-3">
                           <i class="bx bx-check"></i><span class="fw-medium mx-2">Price List:</span>
                           <span class="_pricelevelid_value">______</span>
                        </li>
                     </ul>

                  </div>
               </div>
               <!--/ About User -->
               <!-- Profile Overview -->
               <div class="card mb-4">
                  <div class="card-body" style="font-size:14px">
                     <ul class="list-unstyled mt-2 mb-0">
                        <li class="d-flex align-items-center mb-3">
                           <i class="bx bxs-graduation"></i><span class="fw-medium mx-2">Detail Amount:</span>
                           <span class="totallineitemamount">0</span>
                        </li>
                        <li class="d-flex align-items-center mb-3">
                           <i class="bx bxs-graduation"></i><span class="fw-medium mx-2">(-) Discount (%):</span>
                           <span class="discountpercentage">0</span>
                        </li>

                        <li class="d-flex align-items-center mb-3">
                           <i class="bx bxs-graduation"></i><span class="fw-medium mx-2">(-) Discount:</span>
                           <span class="discountamount">0</span>
                        </li>
                        <li class="d-flex align-items-center mb-3">
                           <i class="bx bxs-graduation"></i><span class="fw-medium mx-2">(+) Total Tax</span>
                           <span class="invoiceFormattedTax">0</span>
                        </li>
                        <li class="d-flex align-items-center mb-3">
                           <i class="bx bxs-graduation"></i><span class="fw-medium mx-2">Total Amount</span>
                           <span class="invoiceTotalAmount">0</span>
                        </li>
                     </ul>
                  </div>
               </div>
               <!--/ Profile Overview -->
            </div>
            <div class="col-xl-9 col-lg-12 col-md-12">

               <!-- DataTable -->
               <div class="card invoicelist_card mb-4" style="min-height:300px;">
                  <div class="card-datatable table-responsive">
                     <table class="products-table table border-top">
                        <thead>
                           <tr>
                              <th></th>
                              <th>Product Name</th>
                              <th>Unit</th>
                              <th>Price Per Unit</th>
                              <th>Quantity</th>
                              <th class="text-truncate">Discount</th>
                              <th>Amount</th>
                           </tr>
                        </thead>
                     </table>
                  </div>
               </div>
               <!--/ Projects table -->
               <!-- SALES INFORMATION -->
               <div class="card mb-4">
                  <div class="card-header">
                     <h6 class="card-title m-0">SALES INFORMATION</h6>
                  </div>
                  <div class="card-body">
                     <small class="text-muted text-uppercase">Description</small>
                     <div class="row mb-3 g-3 bg-label-secondary px-4 pt-2 rounded-2 mx-0 mt-0">
                        <div class="col-12 d-flex justify-content-between align-items-start border-bottom p-0 pb-2">
                           <h6 class="mb-3 p-2 invoiceDescription">.....</h6>
                        </div>
                     </div>
                  </div>
                  <!-- SALES INFORMATION -->
               </div>
            </div>
         </div>
      </div>
   </div>