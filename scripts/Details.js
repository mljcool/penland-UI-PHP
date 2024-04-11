$(document).ready(function() {
  if (randomWorkshopsCarousel.length) {
    randomWorkshopsCarousel.forEach(function(item) {
      $(
        '.owl-carousel-explore-more'
      ).append(`<div class="item"> <div data-uid="${item.id}" class="card-item">
              <div class="card-content">
                <div class="card-img-container">
                  <div class="card-fav">
                    <i class="far fa-heart"></i>
                  </div>
                  <img src="./assets/over-view-1.png" />
                </div>
                <div class="card-item-details">
                  <span class="type-item">${item.workshopName}</span>
                  <span class="type-item-author">${item.instructorName}</span>
                  <span class="type-item-dates">${item.date}</span>
                </div>
              </div>
            </div></div>`);
    });
  }
});
