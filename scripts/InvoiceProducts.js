const dataSample = [
   {
      invoice_id: 'INV-01000-Y6P7N0',
      issued_date: '12/13/2020',
      price_list: '1 Week - Summer 2024',
      total: 3428,
      avatar_image: false,
      invoice_status: 'Paid',
      balance: '$724',
      due_date: '04/23/2020',
      action: 1,
   },
   {
      invoice_id: 'INV-01000-Y6P7N0',
      issued_date: '07/17/2020',
      price_list: '2 Week - Summer 2024',
      total: 5219,
      avatar_image: true,
      invoice_status: 'Downloaded',
      balance: 0,
      due_date: '12/15/2020',
      action: 1,
   },
   {
      invoice_id: 'INV-01000-Y6P7N0',
      issued_date: '07/17/2020',
      price_list: 'Fall 6 Week 2024',
      total: 5219,
      avatar_image: true,
      invoice_status: 'Paid',
      balance: 0,
      due_date: '12/15/2020',
      action: 1,
   },
   {
      invoice_id: 'INV-01000-Y6P7N0',
      issued_date: '02/29/2021',
      price_list: 'Fall 6 Week 2024',
      total: 2483,
      avatar_image: true,
      invoice_status: 'Draft',
      balance: 0,
      due_date: '07/10/2020',
      action: 1,
   },
];

$(function () {
   var a,
      e = $('.products-table');
   e.length &&
      (a = e.DataTable({
         //  ajax: assetsPath + 'json/invoice-list.json',
         data: dataSample,
         columns: [
            { data: '' },
            { data: 'invoice_id' },
            { data: 'invoice_status' },
            { data: 'issued_date' },
            { data: 'price_list' },
            { data: 'total' },
            { data: 'balance' },
            { data: 'invoice_status' },
            { data: 'action' },
         ],
         columnDefs: [
            {
               className: 'control',
               responsivePriority: 2,
               searchable: !1,
               targets: 0,
               render: function (a, e, t, s) {
                  return '';
               },
            },
            {
               targets: 1,
               render: function (a, e, t, s) {
                  return (
                     `<a href="dashboard-invoice-preview.php"><span class="fw-medium">
                     <i class='bx bx-package'></i> ${t.invoice_id}</span></a>`
                  );
               },
            },
            {
               targets: 2,
               render: function (a, e, t, s) {
                  var n = t.name;
                  return `<span class="fw-medium">${n}</span>`;
               },
            },
            {
               targets: 3,
               responsivePriority: 4,
               render: function (a, e, t, s) {
                  return `<div class="d-flex justify-content-start align-items-center">
                              <div class="d-flex flex-column">
                                  <a href="pages-profile-user.html" class="text-body text-truncate">
                                      <span class="fw-medium">${t.price_list}</span>
                                  </a>
                              </div>
                           </div>`;
               },
            },
            {
               targets: 4,
               render: function (a, e, t, s) {
                  t = t.total;
                  return (
                     '<span class="d-none">' +
                     t +
                     '</span>' +
                     converMoneyProperFormat(t)
                  );
               },
            },
            {
               targets: 5,
               render: function (a, e, t, s) {
                  t = t.due_date;
                  return '<span class="d-none">' + t + '</span>' + t;
               },
            },
            {
               targets: 6,
               orderable: !1,
               render: function (a, e, t, s) {
                  console.log('Paid', t);
                  satus = t.invoice_status;
                  total = t.total;
                  return 'Paid' === satus
                     ? '<span class="badge bg-label-success"> Paid </span>'
                     : '<span class="d-none">' +
                          t +
                          '</span>' +
                          converMoneyProperFormat(total);
               },
            },
            { targets: 7, visible: !1 },
            {
               targets: -1,
               title: 'Actions',
               searchable: !1,
               orderable: !1,
               render: function (a, e, t, s) {
                  let invoiceID = t.invoiceID;
                  return `<div class="d-flex align-items-center">
                            
                          <div class="dropdown">
                              <a
                                  href="javascript:;"
                                  class="btn dropdown-toggle hide-arrow text-body p-0"
                                  data-bs-toggle="dropdown"
                                  ><i class="bx bx-dots-vertical-rounded"></i
                              ></a>
                              <div class="dropdown-menu dropdown-menu-end">
                                  <a href="/penland-web/dashboard-invoice-details.php?invoiceID=${invoiceID}" class="dropdown-item">View</a>
                                  <div class="dropdown-divider"></div>
                                  <a href="app-invoice-edit.html" class="dropdown-item">Download</a>
                              </div>
                          </div>
                          </div>
                          `;
               },
            },
         ],
         order: [[1, 'desc']],
         dom: '<"row mx-1"<"col-12 col-md-6 d-flex align-items-center justify-content-center justify-content-md-start gap-3"l<"dt-action-buttons text-xl-end text-lg-start text-md-end text-start mt-md-0 mt-3"B>><"col-12 col-md-6 d-flex align-items-center justify-content-end flex-column flex-md-row pe-3 gap-md-3"f<"invoice_status mb-3 mb-md-0">>>t<"row mx-2"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
         language: {
            sLengthMenu: '_MENU_',
            search: '',
            searchPlaceholder: 'Search Invoice',
         },
         buttons: [],
         responsive: {
            details: {
               display: $.fn.dataTable.Responsive.display.modal({
                  header: function (a) {
                     return 'Details of ' + a.data().full_name;
                  },
               }),
               type: 'column',
               renderer: function (a, e, t) {
                  t = $.map(t, function (a, e) {
                     return '' !== a.title
                        ? '<tr data-dt-row="' +
                             a.rowIndex +
                             '" data-dt-column="' +
                             a.columnIndex +
                             '"><td>' +
                             a.title +
                             ':</td> <td>' +
                             a.data +
                             '</td></tr>'
                        : '';
                  }).join('');
                  return !!t && $('<table class="table"/><tbody />').append(t);
               },
            },
         },
         initComplete: function () {
            this.api()
               .columns(7)
               .every(function () {});
         },
      })),
      $('.invoice-list-table tbody').on('click', '.delete-record', function () {
         a.row($(this).parents('tr')).remove().draw();
      }),
      setTimeout(() => {
         $('.dataTables_filter .form-control').removeClass('form-control-sm'),
            $('.dataTables_length .form-select').removeClass('form-select-sm');
      }, 300);
});
$(document).ready(function () {});
