// COLLAPSIBLE
var coll = document.getElementsByClassName('collapsible_filter');
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener('click', function() {
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

function StudioFilterList(name) {
  const container = $('.list-of-studios');
  const classPlain = removeSpacesAndConvertToLowercase(name);
  container.append(`<label class="mcui-checkbox">
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

let badges = [];
let filterByStudios = [];

function removeSpacesAndConvertToLowercase(inputString) {
  return inputString.replace(/\s+/g, '').toLowerCase();
}
function AppendBadgeSearches() {
  const container = $('.badge-searches');

  if (badges.length) {
    container.html('');
    badges.forEach(function(searchName) {
      container.append(`<div class="badges">
                      <span>${searchName}</span>
                      <i onclick="removeItem('${searchName}')"  class="fas fa-times remove-search"></i>
                      </div>`);
    });
    setTimeout(() => {
      elasticSearchByStudio(badges);
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
    console.log('onRemoving');
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

function removeItem(itemName) {
  const classPlain = removeSpacesAndConvertToLowercase(itemName);
  const checkboxes = document.getElementsByClassName(classPlain);
  checkboxes[0].checked = false;
  badges = badges.filter((_data) => _data !== itemName);
  AppendBadgeSearches();
}

window.addEventListener('load', () => {
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
  filterByStudios.forEach(function(item, index, array) {
    StudioFilterList(item);
  });

  for (let index = 0; index < 6; index++) {
    $('.card-results-sections').prepend(` <div class="card-loading is-loading">
                <div class="image"></div>
                <div class="content">
                <h2></h2>
                <p></p>
                </div>
            </div>
            `);
  }
  setTimeout(() => {
    const elementLoadingRemove = $('.card-loading');
    for (let index = 0; index < elementLoadingRemove.length; index++) {
      console.log(elementLoadingRemove[index]);
      elementLoadingRemove[index].remove();
    }

    if (randomWorkshops.length) {
      // randomWorkshops.forEach(function(item,index) {
      //   $(
      //     '.card-results-sections'
      //   ).append(` <div data-uid="${item.id}" class="card-item" data-aos="fade-up">
      //       <div class="card-content">
      //         <div class="card-img-container">
      //           <div class="card-fav">
      //             <i class="far fa-heart"></i>
      //           </div>
      //           <img src="https://picsum.photos/200/300?random=${index}" />
      //         </div>
      //         <div class="card-item-details">
      //           <span class="type-item">${item.workshopName}</span>
      //           <span class="type-item-author">${item.instructorName}</span>
      //           <span class="type-item-dates">${item.date}</span>
      //         </div>
      //       </div>
      //     </div>`);
      // });
      // AOS.init({
      //   offset: -70,
      //   once: true,
      //   mirror: false,
      // });
    }
  }, 1500);
});

$(document).ready(function() {
  $('body')
    .on('click', '.check-input-studios', function(e) {
      const valueCheckbox = e.currentTarget.value;
      if (e.currentTarget.checked) {
          console.log('checkbox', e.currentTarget.value);
        badges.push(valueCheckbox);
        console.log('checkbox', badges);
      } else {
        badges = badges.filter(_data => _data !== valueCheckbox)
        console.log('unchecked', e.currentTarget.value);
      }
      AppendBadgeSearches();
    })
    .on('click', '.card-item', function(e) {
      console.log('e', e.currentTarget.dataset.uid);
      const  workshopID = e.currentTarget.dataset.uid;
      window.location.href = '/penland-web/details.php?workshopID='+workshopID;
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
$(function() {
  $('#daterange').val(formatCurrentDate() + '-' + formatCurrentDate());

  $('input[name="daterange"]').daterangepicker(
    {
      opens: 'center',
      drops: 'up',
      showISOWeekNumbers: true,
    },
    function(start, end, label) {
      console.log(
        'A new date selection was made: ' +
          start.format('YYYY-MM-DD') +
          ' to ' +
          end.format('YYYY-MM-DD')
      );
    }
  );
});

// AOS.init();
