var timelines = ["account", "personal", "housing", "payments", "workshops"];

function loadingBlockUI(propBody) {
  $(".body-timeline-" + propBody).block({
    message: HTMLelementProp.blockUISummaryElement,
    css: {
      backgroundColor: "transparent",
      border: "0",
    },
    overlayCSS: {
      backgroundColor: "#fff",
      opacity: 0.8,
    },
  });
}

function loadingBlockUISmile(propBody) {
  $(".body-timeline-" + propBody).block({
    message: HTMLelementProp.blockUIExistELementSmile,
    css: {
      backgroundColor: "transparent",
      border: "0",
      cursor: "default",
    },
    overlayCSS: {
      backgroundColor: "#fff",
      opacity: 0.9,
      cursor: "default",
    },
  });
}

function smoothSroll(value) {
  $("html, body").animate(
    {
      scrollTop: $(".wrapper-timeline-" + value).offset().top,
    },
    900
  );
}

// Function to simulate an asynchronous task with a delay
function asyncTask(index, value) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);

      setCheckIcon(value);
      $(".body-timeline-" + value).unblock();
      loadingBlockUISmile(value);
      console.log(`Task ${value} completed`);

      if (timelines.length === index + 1) {
        messageSuccess();
      }

      if (index < timelines.length) {
        console.log(index);
        setTimeout(() => {
            const sectionScroll =timelines[index + 1];
          smoothSroll(sectionScroll);
        }, 1000);
      }
    }, Math.random() * 5000); // Simulating a random delay
  });
}

// Sequential promise calls using async/await
async function sequentialPromiseCalls(timelines) {
  console.log("Starting sequential promise calls...");
  const results = [];

  try {
    for (let [index, task] of timelines.entries()) {
      const result = await asyncTask(index, task);
      results.push(result);
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

function setCheckIcon(_data) {
  $(".icon-timeline-" + _data).html(
    `<i class='bx bx-check-circle color-success fa-2x' ></i>`
  );
}

function bottomScrollSuccess(value) {
  
  $("html, body").animate(
    {
      scrollTop: $("."+value).offset().top,
    },
    2000
  );
}

function messageSuccess() {
  $(".wrapper-timeline-success").css("display", "block");
  bottomScrollSuccess('wrapper-timeline-success');

  setTimeout(() => {
    $(".message-success").show("slow").slideDown();
    setTimeout(() => {
        bottomScrollSuccess('success-wrapper-body');
    }, 600);
  }, 600);
}

$(document).ready(function () {
  $(".final-button-steps").click(function () {
    const scrollPos = $(".wrapper-timeline-account").offset().top;
    $(window).scrollTop(scrollPos);

    sequentialPromiseCalls(timelines);
    timelines.forEach((_data) => {
      console.log("An _data:", _data);
      loadingBlockUI(_data);
      $(".icon-timeline-" + _data).html(
        `<i class="bx bx-loader bx-spin fa-2x"></i>`
      );
    });
  });
});
