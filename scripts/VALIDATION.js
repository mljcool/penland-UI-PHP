$(document).ready(function () {
  console.log("HERE/...",$(".dd-birthdate").length);
  if ($(".dd-birthdate").length) {
    new Cleave(".dd-birthdate", {
      date: true,
      delimiter: "/",
      datePattern: ["m", "d", "Y"],
    });
  }
});
