$(document).ready(function () {
  if ($(".dd-birthdate").length) {
    new Cleave(".dd-birthdate", {
      date: true,
      delimiter: "/",
      datePattern: ["m", "d", "Y"],
    });

    $('#bs-datepicker-basic').datepicker();
    new Cleave('.phone-number-mask', {
      phone: true,
      phoneRegionCode: 'US',
    });

    const tagifyBasicEl = document.querySelector('#TagifyBasic');
    new Tagify(tagifyBasicEl);
  }
});
