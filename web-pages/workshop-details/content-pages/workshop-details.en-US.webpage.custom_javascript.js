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
                    <img src="/Over-view-1.png" />
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

  $('.owl-carousel-overview').owlCarousel({
    navigation: true, // Show next and prev buttons
    slideSpeed: 300,
    paginationSpeed: 400,
    items: 1,
    itemsDesktop: false,
    itemsDesktopSmall: false,
    itemsTablet: false,
    itemsMobile: false,
  });

  $('.owl-carousel-explore-more').owlCarousel({
    items: 4, //10 items above 1000px browser width
    navigation: true, // Show next and prev buttons
    itemsDesktop: [1000, 4], //5 items between 1000px and 901px
    itemsDesktopSmall: [900, 3], // betweem 900px and 601px
    itemsTablet: [600, 2], //2 items between 600 and 0;
    itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet
    autoWidth: false,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    ],
  });

  AOS.init({
    once: true,
    mirror: false,
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 900, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
  });
});
