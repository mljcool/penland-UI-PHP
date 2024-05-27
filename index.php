<!DOCTYPE html>
<html
  lang="en"
  class="light-style layout-navbar-fixed layout-menu-fixed "
  dir="ltr"
  data-theme="theme-default"
>
  <head>
  <?php 
    include_once('./header.php');
  ?>
  </head>
  <body>
    <?php include_once('./home-navigition.php'); ?>

    <div class="container-fluid search-container">
      <div class="container-xxl flex-grow-1 container-p-y">
        <div class="row ">
            <!-- <h1>WORKSHOPS & New Student Form</h1>
            <label>(TEST ENVIRONMENT 👩‍💻)</label> -->
            <?php include_once('./banner-test-env.php') ?>
          
          </div>
      </div>
      <!-- START BODY PAGE -->
      <div id="browse-workshop-section" class="section_find-a-work-shops row">
        <div class="filter-section">
          <div id="current-filters">
            <div class="current-filter-controls">
              <div class="current-header-filter">
                <div class="icon-filter">
                  <svg
                    fill="#242424"
                    width="20px"
                    height="25px"
                    viewBox="0 0 32 32"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0" />

                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />

                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M30 6.749h-28c-0.69 0-1.25 0.56-1.25 1.25s0.56 1.25 1.25 1.25v0h28c0.69 0 1.25-0.56 1.25-1.25s-0.56-1.25-1.25-1.25v0zM24 14.75h-16c-0.69 0-1.25 0.56-1.25 1.25s0.56 1.25 1.25 1.25v0h16c0.69 0 1.25-0.56 1.25-1.25s-0.56-1.25-1.25-1.25v0zM19 22.75h-6.053c-0.69 0-1.25 0.56-1.25 1.25s0.56 1.25 1.25 1.25v0h6.053c0.69 0 1.25-0.56 1.25-1.25s-0.56-1.25-1.25-1.25v0z"
                      />
                    </g>
                  </svg>
                </div>
                <div class="filter-control-label">Filter Workshops</div>
              </div>
              <div class="reset-filter-container">
                <span>Reset All</span>
                <i
                  id="onremove-items"
                  class="fas fa-refresh remove-all-searches"
                  onclick="removeAll()"
                ></i>
              </div>
              <div class="badge-searches">
              
              </div>
            </div>
          </div>

          <!-- FILTER CATEGORY -->
          <div class="filter-category">
            <div class="filter-type-categories">
              <div class="filter-type-label">
                <span>By Studio</span>
              </div>
              <div class="list-of-studios">
                <!-- DATA WILL APPEND HERE -->
              </div>
            </div>

            <!-- START DATE RANGE -->
            <div class="filter-by-date-range">
              <div class="filter-type-label">
                <span> By Date Range</span>
              </div>
              <span class="label-date-range">
                Looking for a specific date range?
              </span>
              <input
                id="daterange"
                type="text"
                name="daterange"
                value="01/01/2024 - 01/15/2042"
              />
            </div>
            <!-- END DATE RANGE -->

            <!--START COLLAPSEABLE FILTER -->
            <!-- <div class="filter-type-categories">
              <div class="filter-type-label">
                <span>By Session type</span>
              </div>

              <div class="filter-collpaseable">
                <div class="filter-fall">
                  <div class="filter-type-sub-label collapsible_filter">
                    <span>Fall Sessions </span>
                    <span class="penland_pm">+</span>
                  </div>
                  <div class="filter-list-of-fall-session content_collapsible">
                    <label class="mcui-checkbox">
                      <input type="checkbox" />
                      <div class="checkbox-wrapped">
                        <svg
                          class="mcui-check"
                          viewBox="-2 -2 35 35"
                          aria-hidden="true"
                        >
                          <title>checkmark-circle</title>
                          <polyline
                            points="7.57 15.87 12.62 21.07 23.43 9.93"
                          />
                        </svg>
                      </div>
                      <div class="label-checkbox">
                        Weekend Session: 2 Studio Days
                      </div>
                    </label>
                  </div>
                </div>
              </div>

              <div class="filter-collpaseable">
                <div class="filter-fall">
                  <div class="filter-type-sub-label collapsible_filter">
                    <span>Spring Sessions </span>
                    <span class="penland_pm">+</span>
                  </div>
                  <div class="filter-list-of-fall-session content_collapsible">
                    <label class="mcui-checkbox">
                      <input type="checkbox" />
                      <div class="checkbox-wrapped">
                        <svg
                          class="mcui-check"
                          viewBox="-2 -2 35 35"
                          aria-hidden="true"
                        >
                          <title>checkmark-circle</title>
                          <polyline
                            points="7.57 15.87 12.62 21.07 23.43 9.93"
                          />
                        </svg>
                      </div>
                      <div class="label-checkbox">
                        Concrete:8-Week
                      </div>
                    </label>
                  </div>
                </div>
              </div>

              <div class="filter-collpaseable">
                <div class="filter-fall">
                  <div class="filter-type-sub-label collapsible_filter">
                    <span>Summer Sessions </span>
                    <span class="penland_pm">+</span>
                  </div>
                  <div class="filter-list-of-fall-session content_collapsible">
                    <label class="mcui-checkbox">
                      <input type="checkbox" />
                      <div class="checkbox-wrapped">
                        <svg
                          class="mcui-check"
                          viewBox="-2 -2 35 35"
                          aria-hidden="true"
                        >
                          <title>checkmark-circle</title>
                          <polyline
                            points="7.57 15.87 12.62 21.07 23.43 9.93"
                          />
                        </svg>
                      </div>
                      <div class="label-checkbox">
                        Weekend Session: 2 Studio Days
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div> -->
            <!--END COLLAPSEABLE FILTER -->
          </div>
        </div>
        <div class="search-results-sections">


        <div style="width: 95%" class="input-group input-group-merge mb-4">
          <span class="input-group-text" id="basic-addon-search31"
            ><i class="bx bx-search"></i
          ></span>
          <input
            type="search"
            class="form-control "
            id="elastic-search"
            placeholder="Discover courses by searching with criteria such as Name, Instructor, or Start Date (either by Year only or full Date)" 
            aria-label="Search..."
            aria-describedby="basic-addon-search31"
          />
        </div>


    


          <div class="card-results-sections"></div>
          <div class="search-footer-view-more">
            <div class="progress-container">
              <span class="counter-item-label">
                You've viewed 24 of 29 items
              </span>
              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style="width: 25%"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div class="view-action">
              <button class="view-btn">View More</button>
            </div>
          </div>
        </div>
      </div>

      <!-- END BODY PAGE -->
    </div>

    
  <?php include_once('./footer.php'); ?>
  <?php include_once('./wip-modal.php'); ?>
</body>
</html>
<?php include_once('./scriptJS.php'); ?>
