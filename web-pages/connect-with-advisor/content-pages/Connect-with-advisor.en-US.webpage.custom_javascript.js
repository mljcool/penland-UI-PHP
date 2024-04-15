$(document).ready(function() {
    var startField = $('#scheduledstart');
    var startFieldDescription = $('#scheduledstart_datepicker_description');
    var endField = $('#scheduledend');
    var endFieldDescription = $('#scheduledend_datepicker_description');

    var dateFormat = $('#scheduledstart_datepicker_description').attr('data-date-format');

    if (!startField.length || !endField.length) {
        return;
    }

    startFieldDescription.closest('.datetimepicker').datetimepicker().on('dp.change', function(e) {
        debugger;
        if (!e || !e.date 
   || e.date.format('YYYY-MM-DDTHH:mm:00.0000000\\Z') === (e.oldDate ? e.oldDate.format('YYYY-MM-DDTHH:mm:00.0000000\\Z') : '')) {
            return;
        }

        if (!endFieldDescription.val()) { // Blank end field
            var newDateTime = moment(startFieldDescription.val()).add(30, 'minutes');

            endField.val(newDateTime.format('YYYY-MM-DDTHH:mm:ss.0000000\\Z'));
            endFieldDescription.val(newDateTime.format(dateFormat));
        }
  else {
   var startDateTime = moment(startFieldDescription.val());
   var endDateTime = moment(endFieldDescription.val());
   var newDateTime = startDateTime.add(Math.abs(endDateTime.diff(e.oldDate.utc())), 'milliseconds');
   
   endField.val(newDateTime.format('YYYY-MM-DDTHH:mm:ss.0000000\\Z'));
            endFieldDescription.val(newDateTime.format(dateFormat));
  }
    });
});