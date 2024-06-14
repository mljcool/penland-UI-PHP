<div class="content-wrapper">
    <div class="container-xxl flex-grow-1">
        <div class=" mb-4">
            <!-- <span class="text-muted fw-light">User Profile /</span> Profile -->
            <div class="container-weather">
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
            </div>

            <!-- Header -->
            <div class="row">
                <div class="col-12">
                    <div class="card mb-4">
                        <div class="user-profile-header-banner area-banner">
                            <ul class="circles-banner">
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                            <img src="./assets/Profile-banner.png" alt="Penland Banner image" class="rounded-top" />
                        </div>
                        <div class="user-profile-header d-flex flex-column flex-sm-row text-sm-start text-center mb-4">
                            <div class="flex-shrink-0 mt-n2 mx-sm-0 mx-auto">
                                <img src="./assets/Avatar.png" alt="user image"
                                    class="d-block h-auto ms-0 ms-sm-4 rounded user-profile-img" />
                            </div>
                            <div class="flex-grow-1 mt-3 mt-sm-5"  style="z-index: 999;">
                                <div
                                    class="d-flex align-items-md-end align-items-sm-start align-items-center justify-content-md-between justify-content-start mx-4 flex-md-row flex-column gap-4">
                                    <div class="user-profile-info">
                                        <h4 class="u_fullname">------</h4>
                                        <ul
                                            class="list-inline mb-0 d-flex align-items-center flex-wrap justify-content-sm-start justify-content-center gap-2">
                                            <li class="list-inline-item fw-medium">
                                                <i class="bx bx-pen"></i> <span class="acctType"> Student</span>
                                            </li>
                                            <li class="list-inline-item fw-medium">
                                                <i class="bx bx-calendar-alt "></i> Joined: <span
                                                    class="createdon"></span>
                                            </li>
                                        </ul>
                                    </div>
                                    <button class="btn btn-primary text-nowrap conductBehavior" data-container="body"
                                        data-placement="center" title="Popover Title">

                                        <span style="font-size:25px;" class="conductStatus bx-tada"></span>
                                        </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--/ Header -->

            <!-- Navbar pills -->
            <!-- <div class="row">
        <div class="col-md-12">
          <ul class="nav nav-pills flex-column flex-sm-row mb-4">
            <li class="nav-item">
              <a class="nav-link active" href="javascript:void(0);"><i class="bx bx-user me-1"></i> Profile</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="pages-profile-teams.html"><i class="bx bx-book me-1"></i> My Courses</a>
            </li>
          </ul>
        </div>
      </div> -->
            <!--/ Navbar pills -->

            <!-- User Profile Content -->
            <div class="row">
                <div class="col-xl-3 col-lg-6 col-md-6">
                    <!-- About User -->
                    <div class="card mb-4">
                        <div class="card-body " style="font-size:13px">
                            <small class="text-muted text-uppercase">About</small>
                            <ul class="list-unstyled mb-4 mt-3">
                                <li class="d-flex align-items-center mb-3">
                                    <i class="bx bx-user"></i><span class="fw-medium mx-2">Full Name:</span>
                                    <span class="u_fullname">------</span>
                                </li>
                                <li class="d-flex align-items-center mb-3">
                                    <i class="bx bx-user"></i><span class="fw-medium mx-2">Gender:</span>
                                    <span class="gendercode">N/A</span>
                                </li>
                                <li class="d-flex align-items-center mb-3">
                                    <i class="bx bx-check"></i><span class="fw-medium mx-2">Status:</span>
                                    <span class="statecode">Active</span>
                                </li>
                                <li class="d-flex align-items-center mb-3">
                                    <i class="bx bx-star"></i><span class="fw-medium mx-2">Account Type:</span>
                                    <span class="acctType"> Student</span>
                                </li>
                                <li class="d-flex align-items-center mb-3">
                                    <i class="bx bx-flag"></i><span class="fw-medium mx-2">Country:</span> <span
                                        class="country">USA</span>
                                </li>
                                <li class="d-flex align-items-center mb-3">
                                    <i class="bx bx-detail"></i><span class="fw-medium mx-2">Pref. Languages:</span>
                                    <span class="prefLanguage">English</span>
                                </li>
                            </ul>
                            <small class="text-muted text-uppercase">Contacts</small>
                            <ul class="list-unstyled mb-4 mt-3">
                                <li class="d-flex align-items-center mb-3">
                                    <i class="bx bx-phone"></i><span class="fw-medium mx-2">Mobile:</span>
                                    <span class="mobilephone">(123) 456-7890</span>
                                </li>

                                <li class="d-flex align-items-center mb-3" style="font-size:13px">
                                    <i class="bx bx-envelope"></i><span class="fw-medium mx-2">Email:</span>

                                    <span class="emailaddress1">john.doe@example.com</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!--/ About User -->
                    <!-- Profile Overview -->
                    <div class="card mb-4">
                        <div class="card-body">
                            <small class="text-muted text-uppercase">Overview</small>
                            <ul class="list-unstyled mt-3 mb-0">
                                <li class="d-flex align-items-center mb-3">
                                    <i class="bx bx-check"></i><span class="fw-medium mx-2">Completed Workshops:</span>
                                    <span>99</span>
                                </li>
                                <li class="d-flex align-items-center mb-3">
                                    <i class="bx bx-check"></i><span class="fw-medium mx-2">Cancelled Workshops:</span>
                                    <span>5</span>
                                </li>

                                <li class="d-flex align-items-center">
                                    <i class="bx bxs-graduation"></i><span class="fw-medium mx-2">Scholarship:</span>
                                    <span>2</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!--/ Profile Overview -->
                </div>
                <div class="col-xl-9 col-lg-12 col-md-12">
                    <!-- Projects table -->
                    <!-- DataTable with Buttons -->
                    <div class="card workshoplist_card" style="min-height:400px;">
                        <div class="card-datatable table-responsive">
                            <table class="workshop-list table border-top">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Instructor</th>
                                        <th>Workshop</th>
                                        <th class="text-nowrap">Start Date</th>
                                        <th>End Date</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <!--/ Projects table -->
                </div>
            </div>
            <!--/ User Profile Content -->
        </div>
    </div>
</div>