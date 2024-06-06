

function DataTable(apiData) {

   var a,
      e = $('.invoice-list-table');
   e.length &&
      (a = e.DataTable({
         //  ajax: assetsPath + 'json/invoice-list.json',
         data: apiData,
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
                     '<a href="dashboard-invoice-preview.php"><span class="fw-medium">' +
                     t.invoice_id +
                     '</span></a>'
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
                  satus= t.invoice_status;
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
               .every(function () {
                  var e = this,
                     t = $(
                        '<select id="UserRole" class="form-select"><option value=""> Select Status </option></select>'
                     )
                        .appendTo('.invoice_status')
                        .on('change', function () {
                           var a = $.fn.dataTable.util.escapeRegex(
                              $(this).val()
                           );
                           e.search(a ? '^' + a + '$' : '', !0, !1).draw();
                        });
                  e.data()
                     .unique()
                     .sort()
                     .each(function (a, e) {
                        t.append(
                           '<option value="' +
                              a +
                              '" class="text-capitalize">' +
                              a +
                              '</option>'
                        );
                     });
               });
         },
      })),
      e.on('draw.dt', function () {
         [].slice
            .call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
            .map(function (a) {
               return new bootstrap.Tooltip(a, { boundary: document.body });
            });
      }),
      $('.invoice-list-table tbody').on('click', '.delete-record', function () {
         a.row($(this).parents('tr')).remove().draw();
      }),
      setTimeout(() => {
         $('.dataTables_filter .form-control').removeClass('form-control-sm'),
            $('.dataTables_length .form-select').removeClass('form-select-sm');
      }, 300);
}

function getInvoiceList(customerID = '') {
   const jsonData = {
      requestParams: {
         customerID,
         invoiceID: '',
      },
   };

   $.get({
      url: Get_User_Invoices,
      data: jsonData,
      contentType: 'application/json',
      success: function (response = []) {
         console.log('getInvoiceList', response);
         if (response.length) {
            const formatted =
               'statecode@OData.Community.Display.V1.FormattedValue';
            const pricelevelidValue =
               '_pricelevelid_value@OData.Community.Display.V1.FormattedValue';
            const responseMap = response.map((_data) => ({
               name: _data.name,
               invoice_id: _data.invoicenumber,
               invoiceID: _data.invoiceid,
               issued_date: moment(_data.createdon).format('MMM DD, YYYY'),
               price_list: _data[pricelevelidValue],
               total: _data.totalamount,
               invoice_status: _data[formatted],
               invoice_stateCode: _data[formatted],
               balance: _data.totalamount,
               due_date: moment(_data.createdon).format('MMM DD, YYYY'),
               action: 1,
            }));

            DataTable(responseMap);
         }
      },
      complete: function (data) {
         setTimeout(() => {
            $('.invoicelist_card').unblock();
         }, 1000);
      },
      error: function (xhr, status, error) {},
   });
}

function AddloadingToInvoice() {
   $('.invoicelist_card').block({
      message: `<div class="d-flex justify-content-center">
                    <div class="sk-wave sk-primary">
                        <div class="sk-wave-rect"></div>
                        <div class="sk-wave-rect"></div>
                        <div class="sk-wave-rect"></div>
                        <div class="sk-wave-rect"></div>
                        <div class="sk-wave-rect"></div>
                    </div>
              </div>`,
      css: {
         backgroundColor: 'transparent',
         border: '0',
      },
      overlayCSS: {
         backgroundColor: '#fff',
         opacity: 0.8,
      },
   });
}

function shapeInvoiceDetails(invoiceData = []) {
   const details = invoiceData[0];
   const formatted = 'statecode@OData.Community.Display.V1.FormattedValue';
   const formattedCurrency =
      'totalamount@OData.Community.Display.V1.FormattedValue';
   htmlEL('invoiceName').html(details.name);
   htmlEL('invoiceID').html(details.invoicenumber);
   htmlEL('invoiceStatus').html(details[formatted]);
   htmlEL('invoiceTotalAmount').html(details[formattedCurrency]);
   if (details[formatted] === 'Paid') {
      htmlEL('id_paynow').css('display', 'none');
   }
}

function invoiceDetails() {
   const invoiceID = getURLParameters('invoiceID');
   if (invoiceID) {
      const jsonData = {
         requestParams: {
            customerID: '',
            invoiceID: invoiceID,
         },
      };

      $.get({
         url: Get_User_Invoices,
         data: jsonData,
         contentType: 'application/json',
         success: function (response = []) {
            if (response.length) {
               shapeInvoiceDetails(response);
            }
            console.log('invoiceDetails', response);
         },
         complete: function (data) {},
         error: function (xhr, status, error) {},
      });
   }
}

function initializePopOver() {
   const popoverTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="popover"]')
   );
   popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl, {
         html: true,
         sanitize: false,
      });
   });
}

$(document).ready(function () {
   invoiceDetails();
   initializePopOver();
   const isInvoicePage = $('.invoice-list-table');
   if (isInvoicePage.length) {
      AddloadingToInvoice();
      const data = getUserTokenDetails();
      console.log('userDetails', data);
      getInvoiceList(data.contactID);
   }
   var tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
   );
   tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
   });
});
