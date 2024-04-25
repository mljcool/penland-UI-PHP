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
        console.log('urlParams', workshopID);
        console.log('dataWorkshop', dataWorkshop);
      }
    }
  }

  console.log('localStorage', workShopItems);
});
