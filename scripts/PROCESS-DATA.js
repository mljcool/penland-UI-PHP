var timelines = ['account', 'personal', 'housing', 'payments', 'workshops'];
let message = {
   account: `Your account save successfully! 👍`,
   personal: `Your personal information save successfully! 👍`,
   housing: `Your housing save successfully! 👍`,
   payments: `Your payments save successfully! 👍`,
   workshops: `Your workshops save successfully! 👍`,
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
   console.log('Starting sequential promise calls...');
   const results = [];

   try {
      for (let [index, task] of timelines.entries()) {
         const result = await asyncTask(index, task).then((response) => {
            console.log('response:', response);

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

function PopulateOptionsAndForm() {
   const homeLanguage = $('.dd-mshied_homelanguage');
   const raceEthicityEl = $('.dd-mshied_race_');
   const prefLangEl = $('.dd-mshied_preferredlanguage');
   const stateEl = $('.dd-address1_stateorprovince');
   const countryEl = $('.dd-address1_country');

   if (prefLangEl.length) {
      homeLanguage.html('');
      homeLanguage.append('<option label=""></option>');

      prefLangEl.html();
      prefLangEl.append('<option label=""></option>');
      preferredLanguage.forEach(function (_data) {
         homeLanguage.append(
            `<option value="${_data.value}">${_data.name}</option>`
         );
         prefLangEl.append(
            `<option value="${_data.value}">${_data.name}</option>`
         );
      });

      raceEthicityEl.html('');
      raceEthicityEl.append('<option label=""></option>');
      raceEthicity.forEach(function (_data) {
         raceEthicityEl.append(
            `<option value="${_data.value}">${_data.name}</option>`
         );
      });

      stateEl.html();
      stateEl.append('<option label=""></option>');
      STATES.forEach(function (_data) {
         stateEl.append(
            `<option value="${_data.value}">${_data.name}</option>`
         );
      });

      countryEl.html();
      countryEl.append('<option label=""></option>');
      COUNTRY.forEach(function (_data) {
         countryEl.append(
            `<option value="${_data.value}">${_data.name}</option>`
         );
      });
      console.log('POPULATE LANGAUGES1');
      PopulateForm();
   }
}

$(document).ready(function () {
   $('.final-button-steps').click(function () {
      // fireDummyAsyncCall();
      // startAddLoadingEachSections();
      // startRegistrationProcess();
      const contactData = personalInfoPayload();
      const enrollmentData = getEnrollmentPayload();
      const salesOrderData = salesOrderPyaload();
      const productData = productsPayload();
      // $.ajax({
      //    ...requestOptions(REGISTER_ACCOUNT, contactData),
      //    success: function (data) {
      //       console.log('dynamicsAPIResult:', data);
      //       setItemStore("dynamicsAPIResult", data);
      //    },
      //    error: function () {},
      // });

      // $.ajax({
      //    ...requestOptions(
      //       Registration_Create_Sales_Order_Portal,
      //       salesOrderData
      //    ),
      //    success: function (data) {
      //       console.log('salerOrder:', data);
      //       setItemStore('salesOrder', data);
      //    },
      //    error: function () {},
      // });

      // $.ajax({
      //    ...requestOptions(
      //       Registration_Enrollment_Portal,
      //       enrollmentData
      //    ),
      //    success: function (data) {
      //       console.log('enrollmentData:', data);
      //       setItemStore('enrollmentData', data);
      //    },
      //    error: function () {},
      // });

      $.ajax({
         ...requestOptions(
            Registration_Add_Products_to_Sales_Order,
            productData
         ),
         success: function (data) {
            console.log('productData:', data);
            setItemStore('productData', data);
         },
         error: function () {},
      });
      // console.log('salesOrderData', salesOrderData);
      // console.log('contactData', contactData);
      // console.log('enrollmentData', enrollmentData);
      console.log('productData', productData);
   });

   // POPULATE FORM FIELDS
   PopulateOptionsAndForm();
});
