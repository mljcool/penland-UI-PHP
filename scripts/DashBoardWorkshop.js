let fv, offCanvasEl;
function DataTableWorkshopList(workShopData = []) {
   var l,
      t,
      e = $('.workshop-list'),
      a = $('.dt-complex-header'),
      s = $('.dt-row-grouping'),
      n = $('.dt-multilingual'),
      r =
         (e.length &&
            ((l = e.DataTable({
               // ajax: assetsPath + 'json/table-datatable.json',
               data: workShopData,
               columns: [
                  {
                     data: '',
                  },
                  {
                     data: 'instructorDisplayName',
                  },
                  {
                     data: 'workShopName',
                  },

                  {
                     data: 'start_date',
                  },
                  {
                     data: 'end_date',
                  },
                  {
                     data: 'status',
                  },
                  {
                     data: 'action',
                  },
               ],
               columnDefs: [
                  {
                     className: 'control',
                     orderable: !1,
                     searchable: !1,
                     responsivePriority: 2,
                     targets: 0,
                     render: function (e, t, a, s) {
                        return '';
                     },
                  },
                  {
                     targets: 1,
                     responsivePriority: 4,
                     render: function (e, t, a, s) {
                        var n = a.avatar,
                           l = a.instructorDisplayName,
                           r = a.post;
                        return (
                           '<div class="d-flex justify-content-start align-items-center user-name"><div class="avatar-wrapper"><div class="avatar me-2">' +
                           ('<span class="avatar-initial rounded-circle bg-label-' +
                              [
                                 'success',
                                 'danger',
                                 'warning',
                                 'info',
                                 'dark',
                                 'primary',
                                 'secondary',
                              ][Math.floor(6 * Math.random())] +
                              '">' +
                              (n = (
                                 ((n =
                                    (l = a.instructorDisplayName).match(
                                       /\b\w/g
                                    ) || []).shift() || '') + (n.pop() || '')
                              ).toUpperCase()) +
                              '</span>') +
                           '</div></div><div class="d-flex flex-column"><span class="emp_name text-truncate">' +
                           l +
                           '</span></div></div>'
                        );
                     },
                  },
                  {
                     targets: 2,
                     render: function (a, e, t, s) {
                        var n = t.workShopName;
                        return `<small class="fw-medium">${n}</small>`;
                     },
                  },
                  {
                     targets: 3,
                     render: function (a, e, t, s) {
                        var n = t.start_date;
                        return `<span class="text-nowrap fw-medium">${n}</span>`;
                     },
                  },
                  {
                     targets: 4,
                     render: function (a, e, t, s) {
                        var n = t.end_date;
                        return `<span class="text-nowrap fw-medium">${n}</span>`;
                     },
                  },
                  {
                     targets: -2,
                     render: function (e, t, a, s) {
                        var a = a.status,
                           n = {
                              Current: {
                                 title: 'Current',
                                 class: 'bg-label-primary',
                              },
                              Complete: {
                                 title: 'Complete',
                                 class: ' bg-label-success',
                              },
                              Drop: {
                                 title: 'Drop',
                                 class: ' bg-label-danger',
                              },
                              Waitlisted: {
                                 title: 'Waitlisted',
                                 class: ' bg-label-warning',
                              },
                              None: {
                                 title: 'Not set',
                                 class: ' bg-label-secondary',
                              },
                           };
                        return void 0 === n[a]
                           ? e
                           : '<span class="badge ' +
                                n[a].class +
                                '">' +
                                n[a].title +
                                '</span>';
                     },
                  },
                  {
                     targets: -1,
                     title: 'Actions',
                     orderable: !1,
                     searchable: !1,
                     render: function (e, t, a, s) {
                        let id = a.id;
                        return `<button type="button" onclick="onViewDetails('${id}')" class="btn rounded-pill me-2 btn-primary btn-xs">View</button>`;
                        // return `<a href="/penland-web/dashboard-workshop.php" title="View" class="btn btn-sm btn-icon item-edit"><i class='bx bx-search-alt-2' ></i></a>`;
                     },
                  },
               ],
               order: [[2, 'desc']],
               dom: '<"card-header flex-column flex-md-row"<"head-label text-center"><"dt-action-buttons text-end pt-3 pt-md-0"B>><"row"<"col-sm-12 col-md-6"l><"col-sm-12 col-md-6 d-flex justify-content-center justify-content-md-end"f>>t<"row"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
               displayLength: 7,
               lengthMenu: [7, 10, 25, 50, 75, 100],
               buttons: [
                  {
                     extend: 'collection',
                     className: 'btn btn-label-primary dropdown-toggle me-2',
                     text: '<i class="bx bx-export me-sm-1"></i> <span class="d-none d-sm-inline-block">Export</span>',
                     buttons: [
                        {
                           extend: 'print',
                           text: '<i class="bx bx-printer me-1" ></i>Print',
                           className: 'dropdown-item',
                           exportOptions: {
                              columns: [3, 4, 5, 6, 7],
                              format: {
                                 body: function (e, t, a) {
                                    var s;
                                    return e.length <= 0
                                       ? e
                                       : ((e = $.parseHTML(e)),
                                         (s = ''),
                                         $.each(e, function (e, t) {
                                            void 0 !== t.classList &&
                                            t.classList.contains('user-name')
                                               ? (s +=
                                                    t.lastChild.firstChild
                                                       .textContent)
                                               : void 0 === t.innerText
                                               ? (s += t.textContent)
                                               : (s += t.innerText);
                                         }),
                                         s);
                                 },
                              },
                           },
                           customize: function (e) {
                              $(e.document.body)
                                 .css('color', config.colors.headingColor)
                                 .css('border-color', config.colors.borderColor)
                                 .css('background-color', config.colors.bodyBg),
                                 $(e.document.body)
                                    .find('table')
                                    .addClass('compact')
                                    .css('color', 'inherit')
                                    .css('border-color', 'inherit')
                                    .css('background-color', 'inherit');
                           },
                        },
                        {
                           extend: 'csv',
                           text: '<i class="bx bx-file me-1" ></i>Csv',
                           className: 'dropdown-item',
                           exportOptions: {
                              columns: [1, 2, 3, 4, 5],
                              format: {
                                 body: function (e, t, a) {
                                    var s;
                                    return e.length <= 0
                                       ? e
                                       : ((e = $.parseHTML(e)),
                                         (s = ''),
                                         $.each(e, function (e, t) {
                                            void 0 !== t.classList &&
                                            t.classList.contains('user-name')
                                               ? (s +=
                                                    t.lastChild.firstChild
                                                       .textContent)
                                               : void 0 === t.innerText
                                               ? (s += t.textContent)
                                               : (s += t.innerText);
                                         }),
                                         s);
                                 },
                              },
                           },
                        },
                        {
                           extend: 'excel',
                           text: '<i class="bx bxs-file-export me-1"></i>Excel',
                           className: 'dropdown-item',
                           exportOptions: {
                              columns: [1, 2, 3, 4, 5],
                              format: {
                                 body: function (e, t, a) {
                                    var s;
                                    return e.length <= 0
                                       ? e
                                       : ((e = $.parseHTML(e)),
                                         (s = ''),
                                         $.each(e, function (e, t) {
                                            void 0 !== t.classList &&
                                            t.classList.contains('user-name')
                                               ? (s +=
                                                    t.lastChild.firstChild
                                                       .textContent)
                                               : void 0 === t.innerText
                                               ? (s += t.textContent)
                                               : (s += t.innerText);
                                         }),
                                         s);
                                 },
                              },
                           },
                        },
                        {
                           extend: 'pdf',
                           text: '<i class="bx bxs-file-pdf me-1"></i>Pdf',
                           className: 'dropdown-item',
                           exportOptions: {
                              columns: [1, 2, 3, 4, 5],
                              format: {
                                 body: function (e, t, a) {
                                    var s;
                                    return e.length <= 0
                                       ? e
                                       : ((e = $.parseHTML(e)),
                                         (s = ''),
                                         $.each(e, function (e, t) {
                                            void 0 !== t.classList &&
                                            t.classList.contains('user-name')
                                               ? (s +=
                                                    t.lastChild.firstChild
                                                       .textContent)
                                               : void 0 === t.innerText
                                               ? (s += t.textContent)
                                               : (s += t.innerText);
                                         }),
                                         s);
                                 },
                              },
                           },
                        },
                        {
                           extend: 'copy',
                           text: '<i class="bx bx-copy me-1" ></i>Copy',
                           className: 'dropdown-item',
                           exportOptions: {
                              columns: [1, 2, 3, 4, 5],
                              format: {
                                 body: function (e, t, a) {
                                    var s;
                                    return e.length <= 0
                                       ? e
                                       : ((e = $.parseHTML(e)),
                                         (s = ''),
                                         $.each(e, function (e, t) {
                                            void 0 !== t.classList &&
                                            t.classList.contains('user-name')
                                               ? (s +=
                                                    t.lastChild.firstChild
                                                       .textContent)
                                               : void 0 === t.innerText
                                               ? (s += t.textContent)
                                               : (s += t.innerText);
                                         }),
                                         s);
                                 },
                              },
                           },
                        },
                     ],
                  },
               ],
               responsive: {
                  details: {
                     display: $.fn.dataTable.Responsive.display.modal({
                        header: function (e) {
                           return (
                              'Details of ' + e.data().instructorDisplayName
                           );
                        },
                     }),
                     type: 'column',
                     renderer: function (e, t, a) {
                        a = $.map(a, function (e, t) {
                           return '' !== e.title
                              ? '<tr data-dt-row="' +
                                   e.rowIndex +
                                   '" data-dt-column="' +
                                   e.columnIndex +
                                   '"><td>' +
                                   e.title +
                                   ':</td> <td>' +
                                   e.data +
                                   '</td></tr>'
                              : '';
                        }).join('');
                        return (
                           !!a && $('<table class="table"/><tbody />').append(a)
                        );
                     },
                  },
               },
            })),
            $('div.head-label').html(
               '<h5 class="card-title mb-0">Course you are taking</h5>'
            ),
            $('.dt-buttons > .btn-group > button').removeClass(
               'btn-secondary'
            )),
         101);
}

function formatDataToAllocateTableWorkshops(response = []) {
   const workshopName = `_mshied_courseid_value@OData.Community.Display.V1.FormattedValue`;

   const enrollMent = '#Microsoft.Dynamics.CRM.mshied_coursehistory';
   const mshied_course = '#Microsoft.Dynamics.CRM.mshied_course';

   const instructorName = `_hso_instructor_value@OData.Community.Display.V1.FormattedValue`;

   const regStatus = `_mshied_registrationstatusid_value@OData.Community.Display.V1.FormattedValue`;
   const theStudio = `_cr711_bystudio_value@OData.Community.Display.V1.FormattedValue`;
   const hso_workshoptype = `hso_workshoptype@OData.Community.Display.V1.FormattedValue`;
   const hso_workshoplevel = `hso_workshoplevel@OData.Community.Display.V1.FormattedValue`;

   const courses = response.filter(
      (_data) => _data['@odata.type'] === mshied_course
   );
   const workshopEnrollment = response.filter(
      (_data) => _data['@odata.type'] === enrollMent
   );

   console.log('courses', courses);
   console.log('workshopEnrollment', workshopEnrollment);

   const getCourseDetails = (courseid = '') => {
      return courses.find((_data) => _data.mshied_courseid === courseid);
   };
   const formatDates = (data, key) => {
      const dateFormatted = moment(data[key]).format('MMMM D, YYYY');
      return dateFormatted;
   };

   const timeOnly = (data, key) => {
      const dateFormatted = moment(data[key]).format('dddd @ h:mm A');
      return dateFormatted;
   };

   const remapData = workshopEnrollment.map((_data) => ({
      id: _data.mshied_coursehistoryid,
      avatar: '',
      imageurl: getCourseDetails(_data._mshied_courseid_value).hso_imageurl,
      instructorID: _data._hso_instructor_value,
      instructorDisplayName: getCourseDetails(_data._mshied_courseid_value)[
         instructorName
      ],
      workshoplevel: getCourseDetails(_data._mshied_courseid_value)[
         hso_workshoplevel
      ],
      salesOrderID: _data._hso_enrollmentsalesorder_value,
      workShopName: _data[workshopName],
      sessionName: _data.mshied_name,
      courseNumber: getCourseDetails(_data._mshied_courseid_value)
         .mshied_coursenumber,
      studioType: getCourseDetails(_data._mshied_courseid_value)[theStudio],
      hsoWorkshoptype: getCourseDetails(_data._mshied_courseid_value)[
         hso_workshoptype
      ],
      start_date: formatDates(
         getCourseDetails(_data._mshied_courseid_value),
         'mshied_startdate'
      ),
      startTime: timeOnly(
         getCourseDetails(_data._mshied_courseid_value),
         'mshied_startdate'
      ),
      endTime: timeOnly(
         getCourseDetails(_data._mshied_courseid_value),
         'mshied_enddate'
      ),
      end_date: formatDates(
         getCourseDetails(_data._mshied_courseid_value),
         'mshied_enddate'
      ),
      status: !!_data[regStatus] ? _data[regStatus] : 'None',
   }));

   setTimeout(() => {
      setItemStore('myWorkshopAndEnrollment', remapData);
      DataTableWorkshopList(remapData);
   }, 800);
}

function onViewDetails(id) {
   setTimeout(() => {
      window.location.href = '/dashboard-workshop.php?id=' + id;
   }, 500);
}

function workShopDashboardBLockUI(
   html,
   className = 'workshoplist_card',
   isAJAx = true
) {
   $('.' + className).block({
      message: html,
      css: {
         backgroundColor: 'transparent',
         border: '0',
         cursor: isAJAx ? 'wait' : 'default',
      },
      overlayCSS: {
         backgroundColor: '#fff',
         opacity: 0.8,
         cursor: isAJAx ? 'wait' : 'default',
      },
   });
}

function AddEmptyBlockUIMessage() {
   workShopDashboardBLockUI(
      `<div class="card">
      <div class="card-body">
         <h5 class="card-title">
         <i class='bx bx-note'></i>
         Your workshop items list is empty. </h5>
         <a href="/" class="btn btn-primary">Browse more workshop.</a>
      </div>
   
   </div>`,
   'workshoplist_card',
      false
   );
}

function AddloadingToMyWorkshopList() {
   workShopDashboardBLockUI(
      `<div class="d-flex justify-content-center">
        <div class="sk-chase sk-primary">
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            </div>
        </div>`,
        'workshoplist_card',
        true
   );
}

function GetMyWorkShops() {
   const data = getUserTokenDetails();
   console.log('datadata', data);
   let isEmpty = false;
   if (data && data.contactID) {
      const jsonData = {
         requestParams: {
            customerID: data.contactID,
         },
      };

      $.get({
         url: Get_User_Workshops_Enrollment,
         data: jsonData,
         contentType: 'application/json',
         success: function (response = []) {
            if (response.length) {
               formatDataToAllocateTableWorkshops(response);
            } else {
               isEmpty = true;
            }
         },
         complete: function (data) {
            setTimeout(() => {
               $('.workshoplist_card').unblock();
               if (isEmpty) {
                  AddEmptyBlockUIMessage();
               }
            }, 1000);
         },
         error: function (xhr, status, error) {},
      });
   }
}

$(document).ready(function () {
   const listToGuard = ['dashboard-panel'];
   const isDashboardPanel = AuthGuard(listToGuard);
   if (isDashboardPanel) {
      AddloadingToMyWorkshopList();
      GetMyWorkShops();
   }
});
