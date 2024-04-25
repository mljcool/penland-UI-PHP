let instructorData = {};
$(document).ready(function () {
  const workShopItems = JSON.parse(localStorage.getItem('workshopItems'));
  
  const urlParams = new URLSearchParams(window.location.search);
  const workshopID = urlParams.get('workshopID');
  if (workshopID) {
    if (Array.isArray(workShopItems) && !!workShopItems.length) {
      const dataWorkshop = workShopItems.find(
        (_data) => _data.mshied_courseid === workshopID
      );
      if (dataWorkshop) {
        $('.w-details-title').html(dataWorkshop.mshied_name);
        $('.with-workshop-level').html(dataWorkshop.workshopLevel);
        $('.w-details-instructor').html(dataWorkshop.instructor);
        $('.with-workshop-date').html('Summer Session' + dataWorkshop.startDate);
        
        $('.details-studio-name').html(dataWorkshop.studioTitle);
        $('.details-studio-description').html(dataWorkshop.studioDescription);

        console.log('urlParams', workshopID);
        console.log('dataWorkshop', dataWorkshop);
        
        const jsonData = {
          requestParams: {
            instructorID: dataWorkshop._hso_instructor_value,
          },
        };
        $.get({
          url: INSTRUCTOR,
          data: jsonData,
          contentType: 'application/json',
          success: function (response = []) {
             instructorData = response[0];
             $('.details-instructor-name').html(instructorData.fullname);
             $('.details-instructor-title').html(instructorData.jobtitle);
             $('.details-instructor-description').html(instructorData.description);
          },
          complete: function (data) {
          },
          error: function (xhr, status, error) {
          },
        });

      }
    }
  }

  console.log('localStorage', workShopItems);
});
