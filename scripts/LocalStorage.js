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
        const mshiedName = dataWorkshop.mshied_name;
        const hsoworkshoplevel =
          'Level: ' +
          ifNoLevel(
            dataWorkshop[
              'hso_workshoplevel@OData.Community.Display.V1.FormattedValue'
            ]
          );
        const hsoinstructorValue = ifNoInstructor(
          dataWorkshop[
            '_hso_instructor_value@OData.Community.Display.V1.FormattedValue'
          ]
        );
        const mshiedStartdate = ifNoStartDate(
          dataWorkshop[
            'mshied_startdate@OData.Community.Display.V1.FormattedValue'
          ]
        );

        $('.w-details-title').html(mshiedName);
        $('.with-workshop-level').html(hsoworkshoplevel);
        $('.w-details-instructor').html(hsoinstructorValue);
        $('.with-workshop-date').html('Summer Session' + mshiedStartdate);
        console.log('urlParams', workshopID);
        console.log('dataWorkshop', dataWorkshop);
      }
    }
  }

  console.log('localStorage', workShopItems);
});
