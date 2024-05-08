function initializeHousingData() {
  var formRepeater = $(".form-repeater");
  const dataToDynamics = getMyDynamicDetails();
  const housing = dataToDynamics.housing;
  const housingData = housing.housing;
  const members = dataToDynamics.housing.members;
  const setListVal = members.length ? members : [];
  var row = 2;
  var col = 1;
  if (Object.entries(housingData).length) {
    const forADA = housingData.cr711_adahousingneeded;
    $("#cr711_preference").val(housingData.cr711_preference).change();
    $("#cr711_housingoption").val(housingData.cr711_housingoption).change();
    $("#cr711_offcampusmealplans")
      .val(housingData.cr711_offcampusmealplans)
      .change();
    $("#inlineRadio" + forADA).prop("checked", true);
  }

  $("#defaultCheck1").prop("checked", dataToDynamics.terms);
  const revalidateDataList = setListVal.length
    ? setListVal.map((_data) => {
        delete _data.cr711_housingsource;
        return _data;
      })
    : [];

  formRepeater.on("submit", function (e) {
    e.preventDefault();
  });
  formRepeater
    .repeater({
      initEmpty: false,
      show: function (e) {
        var fromControl = $(this).find(".form-control, .form-select");
        var formLabel = $(this).find(".form-label");

        fromControl.each(function (i) {
          var id = "form-repeater-" + row + "-" + col;
          $(fromControl[i]).attr("id", id);
          $(formLabel[i]).attr("for", id);
          col++;
        });

        row++;

        $(this).slideDown();
        if ($(".form-repeater div[data-repeater-item]").length <= 5) {
          $(this).slideDown();
        } else {
          $(this).remove();
        }
      },
      hide: function (e) {
        const name = $(this).val();
        //   confirm("Are you sure you want to remove this member?"+name) &&
        $(this).slideUp(e);
      },
    })
    .setList(revalidateDataList);
}

$(document).ready(function () {
  initializeHousingData();
});
