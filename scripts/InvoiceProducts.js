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

function DataTableProductList(products) {
   var a,
      e = $('.products-table');
   e.length &&
      (a = e.DataTable({
         //  ajax: assetsPath + 'json/invoice-list.json',
         data: products,
         columns: [
            { data: '' },
            { data: 'name' },
            { data: 'unit' },
            { data: 'price' },
            { data: 'qty' },
            { data: 'discount' },
            { data: 'amount' },
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
                  return `<span class="fw-medium"><i class='bx bx-package'></i> ${t.name}</span>`;
               },
            },
            {
               targets: 2,
               render: function (a, e, t, s) {
                  return `<span class="fw-medium">${t.unit}</span>`;
               },
            },
            {
               targets: 3,
               responsivePriority: 4,
               render: function (a, e, t, s) {
                  return `<span class="fw-medium">${t.price}</span>`;
               },
            },
            {
               targets: 4,
               render: function (a, e, t, s) {
                  return `<span class="fw-medium">${t.qty}</span>`;
               },
            },
            {
               targets: 5,
               render: function (a, e, t, s) {
                  return `<span class="fw-medium">${t.discount}</span>`;
               },
            },
            {
               targets: 6,
               orderable: !1,
               render: function (a, e, t, s) {
                  return `<span class="fw-medium">${t.amount}</span>`;
               },
            },
         ],
         order: [[1, 'desc']],
         dom: '<"row mx-1"<"col-12 col-md-6 d-flex align-items-center justify-content-center justify-content-md-start gap-3"l<"dt-action-buttons text-xl-end text-lg-start text-md-end text-start mt-md-0 mt-3"B>><"col-12 col-md-6 d-flex align-items-center justify-content-end flex-column flex-md-row pe-3 gap-md-3"f<"invoice_status mb-3 mb-md-0">>>t<"row mx-2"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
         language: {
            sLengthMenu: '_MENU_',
            search: '',
            searchPlaceholder: 'Search Product',
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
      $('.products-table tbody').on('click', '.delete-record', function () {
         a.row($(this).parents('tr')).remove().draw();
      }),
      setTimeout(() => {
         $('.dataTables_filter .form-control').removeClass('form-control-sm'),
            $('.dataTables_length .form-select').removeClass('form-select-sm');
      }, 300);
}
