$(document).ready(function () {
   const workshopID = getURLParameters('id');
   console.log(workshopID);
   const workshopDetailsURL = ['dashboard-workshop'];
   const isViewDetails = AuthGuard(workshopDetailsURL);
   if (isViewDetails) {
      const myWorkshop = getMyWorkshopAndEnrollment();
      if (myWorkshop.length) {
         const findMyWorkshop = myWorkshop.find(
            (_data) => _data.id === workshopID
         );
         const objW = findMyWorkshop;
         console.log('workshopDetailsURL', findMyWorkshop);
         htmlEL('imageurl').attr('src', objW.imageurl);
         htmlEL('workShopName').html(objW.workShopName);
         htmlEL('courseNumber').html(objW.courseNumber);
         htmlEL('studioType').html(objW.studioType);
         htmlEL('workshoplevel').html(objW.workshoplevel);
         htmlEL('hsoWorkshoptype').html(objW.hsoWorkshoptype);
         htmlEL('sessionName').html(objW.sessionName);
         htmlEL('start_date').html(objW.start_date);
         htmlEL('startTime').html(objW.startTime);
         htmlEL('end_date').html(objW.end_date);
         htmlEL('endTime').html(objW.endTime);
         htmlEL('statusType').html(rendeStatus(objW.status));
         GetMySalesOrderDetails(objW.salesOrderID);
      }
   }
});

function rendeStatus(a) {
   const status = {
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
   return (
      '<span class="badge ' +
      status[a].class +
      '">' +
      status[a].title +
      '</span>'
   );
}

function AddloadingToMySalesOrder() {
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
      'housing-and-meals',
      true
   );
}

function remapDataOnSaleOrder(response = []) {
   const salesOrder = response.find(
      (_data) => _data['@odata.type'] == '#Microsoft.Dynamics.CRM.salesorder'
   );


   htmlEL('sessionPriceList').html(salesOrder['_pricelevelid_value@OData.Community.Display.V1.FormattedValue']);
   htmlEL('salerOrderName').html(salesOrder['name']);
   htmlEL('orderNumber').html(salesOrder['ordernumber']);

   const products = response.filter(
    (_data) => _data['@odata.type'] == '#Microsoft.Dynamics.CRM.salesorderdetail'
 );
    const priceperunitFormatted = `priceperunit@OData.Community.Display.V1.FormattedValue`;
    const _uomid_value = `_uomid_value@OData.Community.Display.V1.FormattedValue`;
    const newProduct = products.map(_data =>({
        id: _data['salesorderdetailid'],
        productname: _data['productname'],
        priceperunit: _data[priceperunitFormatted],
        priceperunitRaw: _data['priceperunit'],
        quantity: _data['quantity'],
        total: _data['quantity'],
        unit: _data[_uomid_value],
    }))
 setTimeout(() => {
     OrderTable(newProduct)
 }, 500);
 
 console.log('salesOrder', salesOrder)
 console.log('products', products)
}

function GetMySalesOrderDetails(salesOrderID) {
   const jsonData = {
      requestParams: {
         salesOrderID,
      },
   };
   $.get({
      url: Get_Sales_Order_And_Products_Workshop_Details,
      data: jsonData,
      contentType: 'application/json',
      success: function (response = []) {
         if (response.length) {
            console.log('GetMySalesOrderDetails', response);
            remapDataOnSaleOrder(response);
         }
      },
      complete: function (data) {
         setTimeout(() => {
            $('.housing-and-meals').unblock();
         }, 500);
      },
      error: function (xhr, status, error) {},
   });
}


function OrderTable(responseData) {
    var e = $('.datatables-order-details');
    e.length &&
       e.DataTable({
          data: responseData,
          columns: [
             { data: '' },
             { data: 'productname' },
             { data: 'priceperunit' },
             { data: 'quantity' },
             { data: 'total' },
          ],
          columnDefs: [
             {
                className: 'control',
                searchable: !1,
                orderable: !1,
                responsivePriority: 2,
                targets: 0,
                render: function (e, t, a, r) {
                   return '';
                },
             },
             {
                targets: 1,
                responsivePriority: 1,
                searchable: !1,
                orderable: !1,
                render: function (e, t, a, r) {
                   var n = a.productname;
                      return '<span class="text-body">' + n + '</span>';
                },
             },
             {
                targets: 2,
                searchable: !1,
                orderable: !1,
                render: function (e, t, a, r) {
                   return '<span class="badge rounded-pill bg-label-secondary">' + a.unit + '</span>';
                },
             },
             {
                targets: 3,
                searchable: !1,
                orderable: !1,
                render: function (e, t, a, r) {
                   return '<span class="text-body">' + a.priceperunit + '</span>';
                },
             },
             {
                targets: 4,
                searchable: !1,
                orderable: !1,
                render: function (e, t, a, r) {
                   return '<h6 class="mb-0">$' + a.quantity * a.priceperunitRaw + '</h6>';
                },
             },
          ],
          order: [2, ''],
          dom: 't',
          responsive: {
             details: {
                display: $.fn.dataTable.Responsive.display.modal({
                   header: function (e) {
                      return 'Details of ' + e.data().productname;
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
                   return !!a && $('<table class="table"/><tbody />').append(a);
                },
             },
          },
       }),
       setTimeout(() => {
          $('.dataTables_filter .form-control').removeClass('form-control-sm'),
             $('.dataTables_length .form-select').removeClass('form-select-sm');
       }, 300);
 }