const premiere = document.getElementById("premiere-preview");
const fitness = document.getElementById("fitness-preview");
const music = document.getElementById("music-preview");
const newsletter = document.getElementById("newsletter-preview");
const breakout = document.getElementById("breakout-preview");
let wrapper = document.querySelector(".project-info-wrapper");
let dev = document.getElementById("dev-icons");

projectNames = [premiere, fitness, music, newsletter, breakout];

icons = [
  "html5",
  "css3",
  "bootstrap",
  "javascript",
  "express",
  "mongodb",
  "nodejs",
  "git",
  "bitbucket",
  "protractor",
];

// loop through project names and generate mouseover & mouseout effects
function createAnimations() {
  projectNames.forEach((project) => {
    project.addEventListener("mouseover", function () {
      project.style.background = "#f6f5f5";
      project.querySelector(".project-info-wrapper").classList.add("visible");
    });
  });

  projectNames.forEach((project) => {
    project.addEventListener("mouseout", function () {
      project.style.backgroundImage = `url(../img/projects/${project}.jpg)`;
      project.style.background = "";
      project
        .querySelector(".project-info-wrapper")
        .classList.remove("visible");
    });
  });
}

createAnimations();

// loop through dev icons and generate logo and text
function createDevIcons() {
  icons.forEach((tech) => {
    const listItem = document.createElement("div");
    listItem.innerHTML = `
    <div class="mx-2 text-center">
      <div class="icon-container">
        <img class="tech-logos" src="../img/icons/${tech}.svg" alt="logo" />
      </div>
      <p>${tech}</p>
    </div>
    </div>
      `;

    dev.appendChild(listItem);
  });
}

createDevIcons();

const enquiry = document.querySelector(".enquiry");
const form = document.querySelector(".contact-form");

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
