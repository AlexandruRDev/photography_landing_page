/**** Hover over scalling imgs ****/

$(".scaleImg").hover(
  function() {
    $(this).addClass("hoverScaleImg");
  },
  function() {
    $(this).removeClass("hoverScaleImg");
  }
);

/**** Hover over scalling text ****/

$(".scaleText").hover(
  function() {
    $(this).addClass("hoverScaleText");
  },
  function() {
    $(this).removeClass("hoverScaleText");
  }
);

/**** Owl Carousel ****/

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 30,
  nav: true,
  dots: false,
  autoWidth: true,
  navText: [
    "<i class='fa fa-chevron-left'></i>",
    "<i class='fa fa-chevron-right'></i>"
  ],
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 2
    }
  }
});

/**** Form button display text on click ****/

const formBtn = document.getElementById("fabuttonClick");
const formMsg = document.getElementById("formBtnMessage");
formMsg.innerHTML = "";

formBtn.addEventListener("click", function() {
  formMsg.innerHTML = `
      <div>
        Thank your message was sent!
      </div>
    `;
});

/**** Smooth scrolling navigation ****/
$("a").click(function() {
  var pageId = $(this).attr("data-page");
  $("html, body").animate({ scrollTop: $("#" + pageId).offset().top }, 1000);
});

/**** Smooth to top ****/
//Make sure the user has scrolled at least double the height of the browser
var toggleHeight = $(window).outerHeight() * 0.2;

$(window).scroll(function() {
  if ($(window).scrollTop() > toggleHeight) {
    //Adds active class to make button visible
    $(".m-backtotop").addClass("active");

    //Just some cool text changes
    $("h1 span").text("TA-DA! Now hover it and hit dat!");
  } else {
    //Removes active class to make button visible
    $(".m-backtotop").removeClass("active");

    //Just some cool text changes
    $("h1 span").text("(start scrolling)");
  }
});

//Scrolls the user to the top of the page again
$(".m-backtotop").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});
