<!DOCTYPE html>

<html lang="en" class="light-style layout-wide " dir="ltr" data-theme="theme-default" >

  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" />
    <title>Invoice (Print version) - </title>
    <link rel="stylesheet" href="./styles/App-invoice-print.css" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
    />
    <link
      href="https://fonts.cdnfonts.com/css/joanna-sans-nova"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="./styles/lib/Core.css" />
    <link rel="stylesheet" href="./styles/lib/Theme-default.css" />

</head>

<body>


<div class="invoice-print p-5">

  <div class="d-flex justify-content-between flex-row">
    <div class="mb-4">
      <div class="d-flex svg-illustration mb-3 gap-2">
        <span class="app-brand-logo demo">
                <img src="./assets/logo.png" width="200px" height="30px" />
        </span>
      </div>
      <p class="mb-1">Penland School of Craft, Post Office Box 37</p>
      <p class="mb-1">Penland NC 28765-0037 </p>
      <p class="mb-0">828.765.2359 | info@penland.org</p>
    </div>
    <div>
      <h4 class="invoiceIDPrint">Invoice #3492</h4>
      <div class="mb-2">
        <span>Date Issues:</span>
        <span class="fw-medium createdonPrint">---- --, ----</span>
      </div>
      <div>
        <span>Date Due:</span>
        <span class="fw-medium dueDatePrint">---- --, ----</span>
      </div>
    </div>
  </div>

  <hr />

  <div class="row d-flex justify-content-between mb-4">
    <div class="col-sm-6 w-50">
      <h6>Invoice To:</h6>
      <p class="mb-1 u_fullname">-----</p>
      <p class="mb-1 country">-------</p>
      <p class="mb-1 mobilephone">000-000-0000</p>
      <p class="mb-0 emailaddress1">peakyFBlinders@gmail.com</p>
    </div>
    <div class="col-sm-6 w-50">
      <h6>Bill To:</h6>
      <table>
        <tbody>
          <tr>
            <td class="pe-3">Total Due:</td>
            <td class="fw-medium invoiceTotalAmount">$00.00</td>
          </tr>
          <tr>
            <td class="pe-3">Bank name:</td>
            <td>Penland Bank</td>
          </tr>
          <tr>
            <td class="pe-3">Country:</td>
            <td>United States</td>
          </tr>
          <tr>
            <td class="pe-3">IBAN:</td>
            <td>ETD95476213874685</td>
          </tr>
          <tr>
            <td class="pe-3">SWIFT code:</td>
            <td>BR91905</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="table-responsive">
    <table class="table border-top m-0">
      <thead>
        <tr>
            <th>Product Name</th>
            <th>Unit</th>
            <th>Price Per Unit</th>
            <th>Quantity</th>
            <th class="text-truncate">Discount</th>
            <th>Amount</th>
        </tr>
      </thead>
      <tbody class="print-product-items">
        <!-- <tr>
          <td>Vuexy Admin Template</td>
          <td>HTML Admin Template</td>
          <td>$32</td>
          <td>1</td>
          <td>$32.00</td>
        </tr> -->
        <tr>
          <td colspan="4" class="align-top px-4 py-3">
            <p class="mb-2">
              <span class="me-1 fw-medium">Invoice Name:</span>
              <span class="invoiceName">------</span>
            </p>
            <span>Thanks for your business</span>
          </td>
          <td class="text-end px-4 py-3">
            <p class="mb-2">Subtotal:</p>
            <p class="mb-2">Discount:</p>
            <p class="mb-2">Tax:</p>
            <p class="mb-0">Total:</p>
          </td>
          <td class="px-4 py-3">
            <p class="fw-medium mb-2 invoiceTotalAmount">$00.00</p>
            <p class="fw-medium mb-2">$00.00</p>
            <p class="fw-medium mb-2 invoiceFormattedTax">$00.00</p>
            <p class="fw-medium mb-0 invoiceTotalAmount">$204.25</p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="row">
    <div class="col-12">
      <span class="fw-medium">Note:</span>
      <span>Penland School of Craft is a national craft education center dedicated to the creative life.</span>
    </div>
  </div>
</div>

  
</body>

</html>



<?php include_once('./scriptJS.php') ?>