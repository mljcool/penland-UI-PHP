$(document).ready(function() {
  const workShopItems = JSON.parse(localStorage.getItem('workshopItems'));
  if (workShopItems.length) {
    workShopItems.forEach(function(dataWorkshop) {

      const mshiedName = dataWorkshop.mshied_name;

      $(
        '.owl-carousel-explore-more'
      ).append(`<div class="item"> <div data-uid="${dataWorkshop.mshied_courseid}" class="card-item">
              <div class="card-content">
                <div class="card-img-container">
                  <div class="card-fav">
                    <i class="far fa-heart"></i>
                  </div>
                  <img src="./assets/over-view-1.png" />
                </div>
                <div class="card-item-details">
                  <span class="type-item">${mshiedName}</span>
                  <span class="type-item-author">${dataWorkshop.instructor}</span>
                  <span  class="type-item-dates">${dataWorkshop.startDate}</span>
                </div>
              </div>
            </div></div>`);
    });
  }
});
