let instructorData = {};

//GET WORKSHOP OVERVIEW

function setHTMLElement(dataWorkshop) {
   $('.w-details-title').html(dataWorkshop.mshied_name);
   $('.with-workshop-level').html(dataWorkshop.workshopLevel);
   // $('.w-details-instructor').html(dataWorkshop.instructor);
   $('.with-workshop-date').html(
      dataWorkshop.workShopOverview[
         '_cr711_defaultsessionpricelist_value@OData.Community.Display.V1.FormattedValue'
      ]
   );

   // $('.details-studio-name').html(dataWorkshop.studioTitle);
   // $('.details-studio-description').html(dataWorkshop.studioDescription);
}

function setSelectedWorkshops(workshopID) {
   const dataWorkshopLocal = hasLocalListOfWorkShops();
   const dataWorkshop = dataWorkshopLocal.find(
      (_data) => _data.mshied_courseid === workshopID
   );
   $('.mshied_description').html(dataWorkshop.mshied_description);
   setItemStore('currentSelectedWorkShop', dataWorkshop);
   getInstructorAndStudioDetails(dataWorkshop);
}
//.inner-section-instructor
function loadingUIDetailsInstructor() {
   $('.inner-section-instructor').block({
      message:
         '<div class="d-flex justify-content-center"><p class="me-2 mb-0 text-black">Please wait a moment while I retrieve the instructor details..</p> <div class="sk-wave sk-primary m-0"><div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div></div> </div>',
      css: {
         backgroundColor: 'transparent',
         border: '0',
      },
      overlayCSS: {
         backgroundColor: '#fff',
         opacity: 1,
      },
   });
}

function getInstructorAndStudioDetails(dataWorkshop) {
   const _data = dataWorkshop;
   const jsonData = {
      requestParams: {
         instructorID: _data._hso_instructor_value,
         studioID: _data._cr711_bystudio_value,
      },
   };
   loadingUIDetailsInstructor();

   $.get({
      url: Get_Instructor_and_Studio_Details,
      data: jsonData,
      contentType: 'application/json',
      success: function (response = []) {
         console.log('Get_Instructor_and_Studio_Details', response);
         if (response.length) {
            const instructor = response[0];
            const studioData = response[1];
            $('.details-instructor-name').html(instructor.fullname);
            $('.w-details-instructor').html(instructor.fullname);
            $('.details-instructor-title').html(instructor.jobtitle);
            $('.details-instructor-description').html(
               instructor.cr711_workprofile
            );
            $('.cr711_photourl').attr('src', instructor.cr711_photourl);

            $('.cr711_imagepreview').attr('src', studioData.cr711_imagepreview);
            $('.new_maintype').html(studioData.new_maintype);
            $('.new_description').html(studioData.new_description);
            // console.log();
         }
      },
      complete: function (data) {
         $('.inner-section-instructor').unblock();
      },
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
         const notFull = workshops['hso_enrollmentlimit'] >= 1;
         isNotFull = status === 'Open' && notFull;
         $('.register-now').css('display', 'block');
         if (isNotFull) {
            $('.register-now').html('Register Now');
         } else {
            $('.register-now').html('Join Waitlist');
         }
      },
      complete: function (data) {
         console.log('HERE');
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
            console.log('getOverView', response);
            if (workshops.length && response.value.length) {
               const responseValue = response.value[0];
               const objStrworkshopID = '_hso_setaworkshop_value';
               const objStrSessionID = '_hso_setupanactivesession_value';
               const mshied_courseid = responseValue[objStrworkshopID];
               const sessionID = responseValue[objStrSessionID];

               workshops.forEach(function (_data, index) {
                  if (_data.mshied_courseid === mshied_courseid) {
                     _data.workShopOverview = responseValue;
                     _data.rawFeePrice = responseValue['pl.price'];
                     setHTMLElement(_data);
                  }
                  if (index === workshops.length - 1) {
                     setItemStore('workshopItems', workshops);
                     setSelectedWorkshops(courseID);
                     getDetailedSession(sessionID);
                  }
               });
            } else {
               $('.workshop-header-details').unblock();
               MessageDataBeingComposed();
               // $('.workshop-header-details').html('<h5 class="warning-title-overview" style="max-width:550px;margin-top:2rem;">We appreciate your interest in the workshop. The data required for this session is currently being composed and prepared by our team. We are working diligently to ensure that everything is accurate and ready for your use.</h5>')
            }
         },
         complete: function (data) {},
         error: function (xhr, status, error) {},
      });
   }, 100);
}

function MessageDataBeingComposed() {
   $('.workshop-header-details').block({
      message: HTMLMessageDataBeingComposed(),
      centerY: false,
      css: {
         backgroundColor: 'transparent',
         border: '0',
         top: '50px',
         cursor: 'default',
      },
      overlayCSS: {
         backgroundColor: '#f9f9f9',
         opacity: 0.8,
         cursor: 'default',
      },
   });
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
