let instructorData = {};

//GET WORKSHOP OVERVIEW

function setHTMLElement(dataWorkshop) {
   $('.w-details-title').html(dataWorkshop.mshied_name);
   $('.with-workshop-level').html(dataWorkshop.workshopLevel);
   $('.w-details-instructor').html(dataWorkshop.instructor);
   $('.with-workshop-date').html(
      dataWorkshop.workShopOverview[
         '_cr711_defaultsessionpricelist_value@OData.Community.Display.V1.FormattedValue'
      ]
   );

   $('.details-studio-name').html(dataWorkshop.studioTitle);
   $('.details-studio-description').html(dataWorkshop.studioDescription);
}

function setSelectedWorkshops(workshopID) {
   const dataWorkshopLocal = hasLocalListOfWorkShops();
   const dataWorkshop = dataWorkshopLocal.find(
      (_data) => _data.mshied_courseid === workshopID
   );
   $('.mshied_description').html(dataWorkshop.mshied_description);
   localStorage.setItem(
      'currentSelectedWorkShop',
      JSON.stringify(dataWorkshop)
   );
   getInstructorDetails(dataWorkshop);
}

function getInstructorDetails(dataWorkshop) {
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
      complete: function (data) {},
      error: function (xhr, status, error) {},
   });
}

function getGalleries(courseID = '') {
   const jsonData = {
      requestParams: {
         courseID: courseID,
      },
   };
   $.get({
      url: GET_Workshop_Images,
      data: jsonData,
      contentType: 'application/json',
      success: function (response = []) {
         console.log('getGalleries', response);
         if (response.length) {
            $('.owl-carousel-overview').html('');
            response.forEach(function (_data) {
               $('.owl-carousel-overview').append(
                  `<div class="item"><img style="height: 434.787px; width:323.949px; " data-uid="${_data.hso_imagesshowcaseid}" title="${_data.hso_name}" alt="${_data.hso_name}" src="${_data.hso_imageurl}" /></div>`
               );
            });
            $('.owl-carousel-overview').owlCarousel(OwlCarouselOverview);
         }
      },
      complete: function (data) {},
      error: function (xhr, status, error) {},
   });
}

var isNotFull = false;

function onProceedToReg() {
   if (isNotFull) {
      onRegisterNow();
   } else {
      onWaitlist();
   }
}

function getDetailedSession(sessionID = '') {
   const workshops = getCurrentSelectedWorkShop();
   console.log('getCurrentSelectedWorkShop', workshops);
   const jsonData = {
      requestParams: {
         sessionID: sessionID,
      },
   };

   const statuses = `mshied_coursesectionstatus@OData.Community.Display.V1.FormattedValue`;

   $.get({
      url: GET_Detailed_Workshop_Session,
      data: jsonData,
      contentType: 'application/json',
      success: function (response = []) {
         const status = response[0][statuses];

         console.log('_status', status);
         console.log('mshied_name', workshops['mshied_name']);
         console.log('getDetailedSession', response);
         const notFull = workshops['hso_enrollmentlimit'] >= 1;
         console.log('notFull', notFull);
         console.log('hso_enrollmentlimit', status === 'Open' && notFull);
         isNotFull = status === 'Open' && notFull;
         console.log('isNotFull', isNotFull);
         $('.register-now').css('display', 'block');
         if(isNotFull){
            $('.register-now').html('Register Now');
         } else {
            $('.register-now').html('Join to waitlist');
         }
      },
      complete: function (data) {
         $('.workshop-header-details').unblock();
      },
      error: function (xhr, status, error) {},
   });
}

function getOverView(courseID = '') {
   const jsonData = {
      requestParams: {
         courseID: courseID,
      },
   };
   getGalleries(courseID);
   setTimeout(() => {
      $.get({
         url: SESSION_URL,
         data: jsonData,
         contentType: 'application/json',
         success: function (response = []) {
            const workshops = hasLocalListOfWorkShops();

            if (workshops.length && response.value.length) {
               const _hso_setaworkshop_value =
                  response.value[0]['_hso_setaworkshop_value'];

               const sessionID =
                  response.value[0]['_hso_setupanactivesession_value'];
               console.log('sessionID', sessionID);
           
               workshops.forEach(function (_data, index) {
                  if (_data.mshied_courseid === _hso_setaworkshop_value) {
                     _data['workShopOverview'] = response.value[0];
                     _data['rawFeePrice'] = response.value[0]['pl.price'];
                     setHTMLElement(_data);
                  }
                  if (index === workshops.length - 1) {
                     localStorage.setItem(
                        'workshopItems',
                        JSON.stringify(workshops)
                     );
                     setSelectedWorkshops(courseID);
                     getDetailedSession(sessionID);
                  }
               });
               //localStorage.setItem('workshopItems', JSON.stringify(workShopData));
            }
         },
         complete: function (data) {},
         error: function (xhr, status, error) {},
      });
   }, 100);
}

function loadingUIDetails() {
   $('.workshop-header-details').block({
      message:
         '<div class="d-flex justify-content-center"><p class="me-2 mb-0">Please wait...</p> <div class="sk-wave sk-primary m-0"><div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div></div> </div>',
      css: {
         backgroundColor: 'transparent',
         border: '0',
      },
      overlayCSS: {
         backgroundColor: '#fff',
         opacity: 0.8,
      },
   });
}

$(document).ready(function () {
   getProducts();

   const workshopDetails = $('.workshop-details');

   if (workshopDetails.length) {
      loadingUIDetails();
      const workshopID = getURLParameters();
      if (workshopID) {
         const dataWorkshopLocal = hasLocalListOfWorkShops();

         if (dataWorkshopLocal.length) {
            getOverView(workshopID);
         }
      }

      const workShopItems = JSON.parse(localStorage.getItem('workshopItems'));
      if (workShopItems.length) {
         workShopItems.forEach(function (dataWorkshop) {
            const mshiedName = dataWorkshop.mshied_name;

            $(
               '.owl-carousel-explore-more'
            ).append(`<div class="item"> <div data-uid="${dataWorkshop.mshied_courseid}" class="card-item">
               <div class="card-content">
                 <div class="card-img-container">
                   <div class="card-fav">
                     <i class="far fa-heart"></i>
                   </div>
                   <img src="${dataWorkshop.imageURL}" />
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
   }
});
