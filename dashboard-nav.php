<nav class="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
   id="layout-navbar">
   <div class="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
      <a class="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
         <i class="bx bx-menu bx-sm"></i>
      </a>
   </div>

   <div class="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
      <!-- Search -->
      <div class="navbar-nav align-items-center">
         <div class="nav-item navbar-search-wrapper mb-0">
            <a class="nav-item nav-link search-toggler px-0" href="javascript:void(0);">
               <img class="dashboard-logo" src="./assets/Penland-logo.png" />
            </a>
         </div>
      </div>
      <!-- /Search -->

      <ul class="navbar-nav flex-row align-items-center ms-auto">
         <!-- Language -->

         <!-- /Language -->

         <!-- Quick links  -->
         <li class="nav-item dropdown-shortcuts navbar-dropdown dropdown me-2 me-xl-0">
            <a class="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown"
               data-bs-auto-close="outside" aria-expanded="false">
               <i class="bx bx-grid-alt bx-sm"></i>
            </a>
            <div class="dropdown-menu dropdown-menu-end py-0">
               <div class="dropdown-menu-header border-bottom">
                  <div class="dropdown-header d-flex align-items-center py-3">
                     <h5 class="text-body mb-0 me-auto">Menu</h5>
                     <a href="/" class="dropdown-shortcuts-add text-body" data-bs-toggle="tooltip"
                        data-bs-placement="top" aria-label="Menus"
                        data-bs-original-title="Explore Workshops."><i
                           class="menu-icon tf-icons bx bx-spreadsheet"></i></a>
                  </div>
               </div>
               <div class="dropdown-shortcuts-list scrollable-container ps ps--active-y">
                  <div class="row row-bordered overflow-visible g-0">
                     <div class="dropdown-shortcuts-item col">
                        <span class="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                           <i class="bx bx-pie-chart-alt-2 fs-4"></i>
                        </span>
                        <a href="/dashboard-panel.php" class="stretched-link">Dashboard</a>
                        <small class="text-muted mb-0">User Profile</small>
                     </div>
                     <div class="dropdown-shortcuts-item col">
                        <span class="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                           <i class="bx bx-food-menu fs-4"></i>
                        </span>
                        <a href="/dashboard-invoice.php" class="stretched-link">Finance</a>
                        <small class="text-muted mb-0">Payment & Invoice </small>
                     </div>
                  </div>

                  <!-- <div class="row row-bordered overflow-visible g-0">
                     <div class="dropdown-shortcuts-item col">
                        <span class="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                           <i class="bx bx-calendar fs-4"></i>
                        </span>
                        <a data-bs-toggle="modal" data-bs-target="#swinganimationModal"
                           class="stretched-link">Calendar</a>
                        <small class="text-muted mb-0">Events Calendar</small>
                     </div>

                     <div class="dropdown-shortcuts-item col">
                        <span class="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                           <i class="bx bx-cog fs-4"></i>
                        </span>
                        <a data-bs-toggle="modal" data-bs-target="#swinganimationModal"
                           class="stretched-link">Correspondences</a>
                        <small class="text-muted mb-0">View</small>
                     </div>
                  </div>
                  <div class="row row-bordered overflow-visible g-0">
                     <div class="dropdown-shortcuts-item col">
                        <span class="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                           <i class="bx bx-file-find fs-4"></i>
                        </span>
                        <a data-bs-toggle="modal" data-bs-target="#swinganimationModal" class="stretched-link">Files &
                           Docs</a>
                        <small class="text-muted mb-0">View</small>
                     </div>
                     <div class="dropdown-shortcuts-item col">
                        <span class="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                           <i class="bx bx-help-circle fs-4"></i>
                        </span>
                        <a data-bs-toggle="modal" data-bs-target="#swinganimationModal"
                           class="stretched-link">Penland</a>
                        <small class="text-muted mb-0">Community</small>
                     </div>
                  </div> -->
                  <div class="ps__rail-x" style="left: 0px; bottom: 0px">
                     <div class="ps__thumb-x" tabindex="0" style="left: 0px; width: 0px"></div>
                  </div>
                  <div class="ps__rail-y" style="top: 0px; right: 0px; height: 480px">
                     <div class="ps__thumb-y" tabindex="0" style="top: 0px; height: 365px"></div>
                  </div>
               </div>
            </div>
         </li>
         <!-- Quick links -->

         <!-- Style Switcher -->

         <!-- / Style Switcher-->

         <!-- Notification -->
         <!-- <li class="nav-item dropdown-notifications navbar-dropdown dropdown me-3 me-xl-1">
            <a class="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown"
               data-bs-auto-close="outside" aria-expanded="false">
               <i class="bx bx-bell bx-sm"></i>
               <span class="badge bg-danger rounded-pill badge-notifications">5</span>
            </a>
            <ul class="dropdown-menu dropdown-menu-end py-0">
               <li class="dropdown-menu-header border-bottom">
                  <div class="dropdown-header d-flex align-items-center py-3">
                     <h5 class="text-body mb-0 me-auto">Notification</h5>
                     <a href="javascript:void(0)" class="dropdown-notifications-all text-body" data-bs-toggle="tooltip"
                        data-bs-placement="top" aria-label="Mark all as read"
                        data-bs-original-title="Mark all as read"><i class="bx fs-4 bx-envelope-open"></i></a>
                  </div>
               </li>
               <li class="dropdown-notifications-list scrollable-container ps ps--active-y">
                  <ul class="list-group list-group-flush">
                     <li class="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                        <div class="d-flex">
                           <div class="flex-shrink-0 me-3">
                              <div class="avatar">
                                 <img src="./assets/avatar.png" alt="" class="w-px-40 h-auto rounded-circle" />
                              </div>
                           </div>
                           <div class="flex-grow-1">
                              <h6 class="mb-1">Congratulation Jhon 🎉</h6>
                              <p class="mb-0">Your Scholarship Approved</p>
                              <small class="text-muted">1h ago</small>
                           </div>
                           <div class="flex-shrink-0 dropdown-notifications-actions">
                              <a href="javascript:void(0)" class="dropdown-notifications-read"><span
                                    class="badge badge-dot"></span></a>
                              <a href="javascript:void(0)" class="dropdown-notifications-archive"><span
                                    class="bx bx-x"></span></a>
                           </div>
                        </div>
                     </li>

                     <li class="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                        <div class="d-flex">
                           <div class="flex-shrink-0 me-3">
                              <div class="avatar">
                                 <img src="./assets/avatar.png" alt="" class="w-px-40 h-auto rounded-circle" />
                              </div>
                           </div>
                           <div class="flex-grow-1">
                              <h6 class="mb-1">New Message ✉️</h6>
                              <p class="mb-0">You have new message from Leah</p>
                              <small class="text-muted">1h ago</small>
                           </div>
                           <div class="flex-shrink-0 dropdown-notifications-actions">
                              <a href="javascript:void(0)" class="dropdown-notifications-read"><span
                                    class="badge badge-dot"></span></a>
                              <a href="javascript:void(0)" class="dropdown-notifications-archive"><span
                                    class="bx bx-x"></span></a>
                           </div>
                        </div>
                     </li>
                     <li class="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                        <div class="d-flex">
                           <div class="flex-shrink-0 me-3">
                              <div class="avatar">
                                 <span class="avatar-initial rounded-circle bg-label-success"><i
                                       class="bx bx-cart"></i></span>
                              </div>
                           </div>
                           <div class="flex-grow-1">
                              <h6 class="mb-1">Whoo! You have new order 🛒</h6>
                              <p class="mb-0">ACME Inc. made new order $1,154</p>
                              <small class="text-muted">1 day ago</small>
                           </div>
                           <div class="flex-shrink-0 dropdown-notifications-actions">
                              <a href="javascript:void(0)" class="dropdown-notifications-read"><span
                                    class="badge badge-dot"></span></a>
                              <a href="javascript:void(0)" class="dropdown-notifications-archive"><span
                                    class="bx bx-x"></span></a>
                           </div>
                        </div>
                     </li>
                     <li class="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                        <div class="d-flex">
                           <div class="flex-shrink-0 me-3">
                              <div class="avatar">
                                 <img src="../../assets/img/avatars/9.png" alt=""
                                    class="w-px-40 h-auto rounded-circle" />
                              </div>
                           </div>
                           <div class="flex-grow-1">
                              <h6 class="mb-1">Application has been approved 🚀</h6>
                              <p class="mb-0">
                                 Your ABC project application has been approved.
                              </p>
                              <small class="text-muted">2 days ago</small>
                           </div>
                           <div class="flex-shrink-0 dropdown-notifications-actions">
                              <a href="javascript:void(0)" class="dropdown-notifications-read"><span
                                    class="badge badge-dot"></span></a>
                              <a href="javascript:void(0)" class="dropdown-notifications-archive"><span
                                    class="bx bx-x"></span></a>
                           </div>
                        </div>
                     </li>
                     <li class="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                        <div class="d-flex">
                           <div class="flex-shrink-0 me-3">
                              <div class="avatar">
                                 <span class="avatar-initial rounded-circle bg-label-success"><i
                                       class="bx bx-pie-chart-alt"></i></span>
                              </div>
                           </div>
                           <div class="flex-grow-1">
                              <h6 class="mb-1">Monthly report is generated</h6>
                              <p class="mb-0">
                                 July monthly financial report is generated
                              </p>
                              <small class="text-muted">3 days ago</small>
                           </div>
                           <div class="flex-shrink-0 dropdown-notifications-actions">
                              <a href="javascript:void(0)" class="dropdown-notifications-read"><span
                                    class="badge badge-dot"></span></a>
                              <a href="javascript:void(0)" class="dropdown-notifications-archive"><span
                                    class="bx bx-x"></span></a>
                           </div>
                        </div>
                     </li>

                     <li class="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                        <div class="d-flex">
                           <div class="flex-shrink-0 me-3">
                              <div class="avatar">
                                 <img src="../../assets/img/avatars/6.png" alt=""
                                    class="w-px-40 h-auto rounded-circle" />
                              </div>
                           </div>
                           <div class="flex-grow-1">
                              <h6 class="mb-1">New message from Jane</h6>
                              <p class="mb-0">Your have new message from Jane</p>
                              <small class="text-muted">5 days ago</small>
                           </div>
                           <div class="flex-shrink-0 dropdown-notifications-actions">
                              <a href="javascript:void(0)" class="dropdown-notifications-read"><span
                                    class="badge badge-dot"></span></a>
                              <a href="javascript:void(0)" class="dropdown-notifications-archive"><span
                                    class="bx bx-x"></span></a>
                           </div>
                        </div>
                     </li>

                  </ul>
                  <div class="ps__rail-x" style="left: 0px; bottom: -528px">
                     <div class="ps__thumb-x" tabindex="0" style="left: 0px; width: 0px"></div>
                  </div>
                  <div class="ps__rail-y" style="top: 528px; right: 0px; height: 480px">
                     <div class="ps__thumb-y" tabindex="0" style="top: 252px; height: 228px"></div>
                  </div>
               </li>
               <li class="dropdown-menu-footer border-top p-3">
                  <button class="btn btn-primary text-uppercase w-100">
                     view all notifications
                  </button>
               </li>
            </ul>
         </li> -->
         <!--/ Notification -->
         <!-- User -->
         <li class="nav-item navbar-dropdown dropdown-user dropdown">
            <a class="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
               <div class="avatar avatar-online">
                  <img src="./assets/Avatar.png" alt="" class="w-px-40 h-auto rounded-circle hso_photo" />
               </div>
            </a>
            <ul class="dropdown-menu dropdown-menu-end">
               <li>
                  <a class="dropdown-item" style="pointer-events: none;" >
                     <div class="d-flex">
                        <div class="flex-shrink-0 me-3">
                           <div class="avatar avatar-online">
                              <img src="./assets/Avatar.png" alt="" class="w-px-40 h-auto rounded-circle hso_photo" />
                           </div>
                        </div>
                        <div class="flex-grow-1">
                           <span class="fw-medium d-block u_fullname">-----</span>
                           <small class="text-muted acctType">---</small>
                        </div>
                     </div>
                  </a>
               </li>
               <li>
                  <div class="dropdown-divider"></div>
               </li>
               <li>
                  <a class="dropdown-item" href="dashboard-user-profile.php">
                     <i class="bx bx-user me-2"></i>
                     <span class="align-middle">My Profile</span>
                  </a>
               </li>
               <!-- <li>
                  <a class="dropdown-item" href="pages-account-settings-account.html">
                     <i class="bx bx-cog me-2"></i>
                     <span class="align-middle">Settings</span>
                  </a>
               </li> -->
               <!-- <li>
            <a class="dropdown-item" href="pages-account-settings-billing.html">
              <span class="d-flex align-items-center align-middle">
                <i class="flex-shrink-0 bx bx-credit-card me-2"></i>
                <span class="flex-grow-1 align-middle">Billing</span>
                <span
                  class="flex-shrink-0 badge badge-center rounded-pill bg-danger w-px-20 h-px-20"
                  >4</span
                >
              </span>
            </a>
          </li> -->

               <li>
                  <div class="dropdown-divider"></div>
               </li>
               <li>
                  <a class="dropdown-item" href="javascript:void(0)" id="user-logout">
                     <i class="bx bx-power-off me-2"></i>
                     <span class="align-middle">Log Out</span>
                  </a>
               </li>
            </ul>
         </li>
         <!--/ User -->
      </ul>
   </div>

   <!-- Search Small Screens -->
</nav>