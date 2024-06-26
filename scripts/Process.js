// COLLAPSIBLE
var coll = document.getElementsByClassName('collapsible_filter');
var i;

for (i = 0; i < coll.length; i++) {
   coll[i].addEventListener('click', function () {
      this.classList.toggle('active');
      var content = this.nextElementSibling;
      if (content.style.maxHeight) {
         content.style.maxHeight = null;
      } else {
         content.style.maxHeight = content.scrollHeight + 'px';
      }
   });
}

function onMobileTap() {
   let checkBox = document.getElementById('drop-down-cbox');
   let menu = document.getElementById('menu');

   if (checkBox.checked) {
      menu.classList.add('show-mobile-nav');
   } else {
      if (menu.classList.contains('show-mobile-nav')) {
         menu.classList.remove('show-mobile-nav');
      }
   }
}

var containerStudio = $('.list-of-studios');

function clearStudioHTML() {
   containerStudio.html('');
}

function StudioFilterList(name) {
   const classPlain = removeSpacesAndConvertToLowercase(name);
   containerStudio.append(`<label class="mcui-checkbox">
                <input type="checkbox" class="check-input-studios ${classPlain}" value="${name}"  name="${name}" />
                <div class="checkbox-wrapped">
                  <svg
                    class="mcui-check"
                    viewBox="-2 -2 35 35"
                    aria-hidden="true">
                    <title>checkmark-circle</title>
                    <polyline points="7.57 15.87 12.62 21.07 23.43 9.93" />
                  </svg>
                </div>
                <div class="label-checkbox">${name}</div>
              </label>`);
}

var filterByStudios = [];
var APIDataStudios = [];
let badges = [];

function removeSpacesAndConvertToLowercase(inputString) {
   return inputString.replace(/\s+/g, '').toLowerCase();
}

function AppendBadgeSearches() {
   const container = $('.badge-searches');

   if (badges.length) {
      container.html('');
      badges.forEach(function (searchName) {
         container.append(`<div class="badges">
                      <span>${searchName}</span>
                      <i onclick="removeItemBadge('${searchName}')"  class="fas fa-times remove-search"></i>
                      </div>`);
      });
      setTimeout(() => {
        
        const formAFilter = [];
         const filterGet = APIDataStudios.filter((_data) =>
            badges.includes(_data.new_maintype)
         );

         filterGet.forEach((element) => {
            formAFilter.push(element.FormattedLabel);
         });
         if (formAFilter.length) {
            const newSet = formAFilter.flat();
            var uniqSet = [...new Set(newSet)];
         }
         elasticSearchByStudio(uniqSet);
      }, 500);
      return;
   }
   if (badges.length === 0) {
      container.html('');
      setTimeout(() => {
         elasticSearchByStudio([]);
      }, 500);
   }
}

function onremoveItemsLoading() {
   let removeItems = document.getElementById('onremove-items');
   if (removeItems.classList.contains('onRemoving')) {
      removeItems.classList.remove('onRemoving');
   } else {
      removeItems.classList.add('onRemoving');
   }
}

function resetAllCheckBoxes() {
   const checkboxes = document.getElementsByClassName('check-input-studios');
   for (var i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = false;
   }
}

function removeAll() {
   onremoveItemsLoading();
   setTimeout(() => {
      badges = [];
      AppendBadgeSearches();
      resetAllCheckBoxes();
      onremoveItemsLoading();
   }, 2500);
}

function removeSekeletonLoader() {
   setTimeout(() => {
      const elementLoadingRemove = $('.card-loading');
      for (let index = 0; index < elementLoadingRemove.length; index++) {
         elementLoadingRemove[index].remove();
      }
   }, 100);
}

function removeItemBadge(itemName) {
   const classPlain = removeSpacesAndConvertToLowercase(itemName);
   const checkboxes = document.getElementsByClassName(classPlain);
   checkboxes[0].checked = false;
   badges = badges.filter((_data) => _data !== itemName);
   AppendBadgeSearches();
}

function getStudios() {
   
   $.get({
      url: STUDIOS_URL,
      contentType: 'application/json',
      success: function (response = []) {
         const studios = IStudios(response);
         if (studios.length) {
            APIDataStudios = studios;
            filterByStudios = [];
            clearStudioHTML();

            studios.forEach((_data) => {
               filterByStudios.push(_data.new_maintype);
            });
            defaultStudios(filterByStudios);
         }

         localStorage.setItem('allStudio', JSON.stringify(studios));
      },
      complete: function (data) {},
      error: function (xhr, status, error) {
         console.error('Error:', error);
      },
   });
}

function defaultStudios(studios = []) {
   studios.forEach(function (item, index, array) {
      StudioFilterList(item);
   });
}



$(document).ready(function () {
   filterByStudios = [
      'Book',
      'Paper',
      'Clay',
      'Drawing & Painting',
      'Glass',
      'Iron',
      'Metal',
      'Photography',
      'Printmaking',
      'Letterpress',
      'Printmaking',
   ];
   defaultStudios(filterByStudios);

   setTimeout(() => {
      const searchlength = $('#elastic-search').length;
      if(searchlength){
         getStudios();
      }
    }, 20);

   for (let index = 0; index < 6; index++) {
      $('.card-results-sections')
         .prepend(` <div class="card-loading is-loading">
                <div class="image"></div>
                <div class="content">
                <h2></h2>
                <p></p>
                </div>
            </div>
            `);
   }
});

$(document).ready(function () {
   $('body')
      .on('click', '.check-input-studios', function (e) {
         const valueCheckbox = e.currentTarget.value;
         if (e.currentTarget.checked) {
            badges.push(valueCheckbox);
            console.log('badges', badges);
         } else {
            badges = badges.filter((_data) => _data !== valueCheckbox);
         }
         AppendBadgeSearches();
      })
      .on('click', '.card-item', function (e) {
         const workshopID = e.currentTarget.dataset.uid;
         window.location.href =
            '/penland-web/details.php?workshopID=' + workshopID;

         // FOR PORTAL DYNAMICS
         // window.location.href = '/workshop-details?workshopID='+workshopID
      });
});

// DATE RANGE

function formatCurrentDate() {
   // Get current date
   let now = new Date();
   // Get the day, month, and year from the current date
   let day = now.getDate();
   let month = now.getMonth() + 1; // getMonth() is zero-based, so add 1
   let year = now.getFullYear();
   // Pad the month and day with leading zeros if necessary
   day = day < 10 ? '0' + day : day;
   month = month < 10 ? '0' + month : month;
   // Format the date as MM/DD/YYYY
   return month + '/' + day + '/' + year;
}

$(function () {
   $('#daterange').val(formatCurrentDate() + '-' + formatCurrentDate());

   $('input[name="daterange"]')
      .daterangepicker(
         {
            opens: 'center',
            drops: 'up',
            showISOWeekNumbers: true,
         },
         function (start, end, label) {
            const startDate = new Date(start);
            const endDate = new Date(end);
            const newvalue = filterByDateRange(
               workShopData,
               startDate,
               endDate
            );
            $('.card-results-sections').empty();
            setTimeout(() => {
               setDataUI(newvalue);
            }, 500);
         }
      )
      .on('cancel.daterangepicker', function (ev, picker) {
         const newvalue = filterByDateRange(workShopData, undefined, undefined);
         $('.card-results-sections').empty();
         setTimeout(() => {
            setDataUI(newvalue);
         }, 500);
      });
});

// AOS.init();
