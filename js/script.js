const premiere = document.getElementById("premiere-preview");
const fitness = document.getElementById("fitness-preview");
const music = document.getElementById("music-preview");
const newsletter = document.getElementById("newsletter-preview");

let wrapper = document.querySelector(".project-info-wrapper");

const enquiry = document.querySelector(".enquiry");
const form = document.querySelector(".contact-form");

// hover on project - premiere
premiere.addEventListener("mouseover", function () {
  premiere.style.background = "#f6f5f5";
  wrapper.classList.add("visible");
});

premiere.addEventListener("mouseout", function () {
  premiere.style.backgroundImage = "url(../img/projects/underbelly.jpg)";
  premiere.style.background = "";
  wrapper.classList.remove("visible");
});

// hover on project - fitness
fitness.addEventListener("mouseover", function () {
  fitness.style.background = "#f6f5f5";
  fitness.querySelector(".project-info-wrapper").classList.add("visible");
});

fitness.addEventListener("mouseout", function () {
  fitness.style.backgroundImage = "url(../img/projects/pmd.jpg)";
  fitness.style.background = "";
  fitness.querySelector(".project-info-wrapper").classList.remove("visible");
});

// hover on project - music
music.addEventListener("mouseover", function () {
  music.style.background = "#f6f5f5";
  music.querySelector(".project-info-wrapper").classList.add("visible");
});

music.addEventListener("mouseout", function () {
  music.style.backgroundImage = "url(../img/projects/music.png)";
  music.style.background = "";
  music.querySelector(".project-info-wrapper").classList.remove("visible");
});

// hover on project - newsletter
newsletter.addEventListener("mouseover", function () {
  newsletter.style.background = "#f6f5f5";
  newsletter.querySelector(".project-info-wrapper").classList.add("visible");
});

newsletter.addEventListener("mouseout", function () {
  newsletter.style.backgroundImage = "url(../img/projects/newsletter.png)";
  newsletter.style.background = "";
  newsletter.querySelector(".project-info-wrapper").classList.remove("visible");
});

// Event listeners
form.addEventListener("submit", function (e) {
  // e.preventDefault()

  //   checkEmail(email)
  const form = (document.getElementById("enquiry").className =
    "contact-form sent");

  console.log("submit clicked");
});

$(window).on("load", function () {
  $(".loader .inner").fadeOut(500, function () {
    $(".loader").fadeOut(750);
  });
});

$(document).ready(function () {
  $("#slides").superslides({
    animation: "fade",
    play: 5000,
    pagination: false,
  });

  $(".owl-carousel").owlCarousel({
    loop: true,
    items: 4,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 2,
      },
      768: {
        items: 3,
      },
      938: {
        items: 4,
      },
    },
  });

  const nav = $("#navigation");
  const navTop = nav.offset().top;

  $(window).on("scroll", stickyNavigation);

  function stickyNavigation() {
    var body = $("body");

    if ($(window).scrollTop() >= navTop) {
      body.css("padding-top", nav.outerHeight() + "px");
      body.addClass("fixedNav");
    } else {
      body.css("padding-top", 0);
      body.removeClass("fixedNav");
    }
  }

  // scrolling to nav items, small and large screens

  function myFunction(media) {
    if (media.matches) {
      $("#navigation li a").click(function (e) {
        e.preventDefault();
        var targetElement = $(this).attr("href");
        var targetPosition = $(targetElement).offset().top;
        $("html").animate({ scrollTop: targetPosition - 190 }, "slow");
      });
    } else {
      $("#navigation li a").click(function (e) {
        e.preventDefault();
        var targetElement = $(this).attr("href");
        var targetPosition = $(targetElement).offset().top;
        $("html").animate({ scrollTop: targetPosition - 50 }, "slow");
      });
    }
  }

  var media = window.matchMedia("(max-width: 900px)");
  myFunction(media); // Call listener function at run time
  media.addListener(myFunction); // Attach listener function on state changes

  $("#filters a").click(function () {
    $("#filters .current").removeClass("current");
    $(this).addClass("current");

    var selector = $(this).attr("data-filter");

    $(".projects").isotope({
      filter: selector,
      animationOptions: {
        duration: 1500,
        easing: "linear",
        queue: false,
      },
    });
    return false;
  });
});
