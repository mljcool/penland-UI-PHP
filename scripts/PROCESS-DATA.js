var timelines = ['account', 'personal', 'housing', 'payments', 'workshops'];
let message = {
   account: `Your account save successfully! 🥳`,
   personal: `Your personal information save successfully! 🥳`,
   housing: `Your housing save successfully! 🥳`,
   payments: `Your payments save successfully! 🥳`,
   workshops: `Your workshops save successfully! 🥳`,
};

function loadingBlockUI(propBody) {
   $('.body-timeline-' + propBody).block({
      message: HTMLelementProp.blockUISummaryElement,
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

function loadingBlockUISmile(propBody) {
   $('.body-timeline-' + propBody).block({
      message: HTMLelementProp.blockUIExistELementSmile(message[propBody]),
      css: {
         backgroundColor: 'transparent',
         border: '0',
         cursor: 'default',
      },
      overlayCSS: {
         backgroundColor: '#fff',
         opacity: 0.9,
         cursor: 'default',
      },
   });
}

// Function to simulate an asynchronous task with a delay
function asyncTask(index, value) {
   return new Promise((resolve) => {
      setTimeout(() => {
         resolve(value);
      }, Math.random() * 5000); // Simulating a random delay
   });
}

// Sequential promise calls using async/await
async function sequentialPromiseCalls(timelines) {
   const results = [];

   try {
      for (let [index, task] of timelines.entries()) {
         const result = await asyncTask(index, task).then((response) => {

            setCheckIcon(response);
            $('.body-timeline-' + response).unblock();
            loadingBlockUISmile(response);

            if (index < timelines.length) {
               setTimeout(() => {
                  const sectionScroll = timelines[index + 1];
                  if (sectionScroll) {
                     smoothSrollToNextBlock(sectionScroll);
                  }
               }, 1000);
            }
            if (response === 'workshops') {
               setTimeout(() => {
                  finalMessageSuccess();
               }, 1200);
            }
         });
         results.push(result);
      }
   } catch (error) {
      console.error('An error occurred:', error);
   }
}

function setCheckIcon(_data) {
   $('.icon-timeline-' + _data).html(
      `<i class='bx bx-check-circle color-success fa-2x' ></i>`
   );
}

function smoothSrollToNextBlock(value) {
   $('html, body').animate(
      {
         scrollTop: $('.wrapper-timeline-' + value).offset().top,
      },
      300
   );
}

function extraScrollSmooth(value) {
   $('html, body').animate(
      {
         scrollTop: $('.' + value).offset().top,
      },
      900
   );
}

function finalMessageSuccess() {
   $('.wrapper-timeline-success').css('display', 'block');
   extraScrollSmooth('wrapper-timeline-success');

   setTimeout(() => {
      $('.message-success').show('slow').slideDown();
      setTimeout(() => {
         extraScrollSmooth('success-wrapper-body');
      }, 600);
   }, 600);
}

function fireDummyAsyncCall() {
   extraScrollSmooth('focus-banner-container');
   sequentialPromiseCalls(timelines);
   timelines.forEach((_data) => {
      loadingBlockUI(_data);
      $('.icon-timeline-' + _data).html(
         `<i class="bx bx-loader bx-spin fa-2x"></i>`
      );
   });
   $('.footer-btns').css('display', 'none');
}

function afterEachCallStoploadingBySection(sectionClass) {
   $('.body-timeline-' + sectionClass).unblock();
   setCheckIcon(sectionClass);
   loadingBlockUISmile(sectionClass);
}

function startAddLoadingEachSections() {
   extraScrollSmooth('focus-banner-container');
   timelines.forEach((_data) => {
      loadingBlockUI(_data);
      $('.icon-timeline-' + _data).html(
         `<i class="bx bx-loader bx-spin fa-2x"></i>`
      );
   });
   //    $('.footer-btns').css('display', 'none');
}

$(document).ready(function () {
   // POPULATE FORM FIELDS
   PopulateOptionsAndForm();

   $('.final-button-steps').click(function () {
      // fireDummyAsyncCall();
      // startRegistrationProcess();
      startRegistrationEnrollment();
   });
});
