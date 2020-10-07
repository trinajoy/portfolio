const dev = document.getElementById("dev-icons");
const container = document.getElementById("flex-container")

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

  function createProjects() {
    fetch("data/project-info.json")
      .then((response) => response.json())
      .then((data) => {
        data.forEach((project) => {
          const listItem = document.createElement("div");

          listItem.innerHTML = `

          <div class="project-wrapper">
            <div class="project-box" id="project-box">
              <div class="project-props" id="${project.id}-preview">
                <div class="project-info-wrapper">
                  <div class="project-info">
                    <h2>${project.title}</h2>
                      <ul class="tech-stack" id="${project.id}-tech-stack">
                      </ul>
                  </div>

                  <div class="project-links">
                    <ul>
                      <li>
                        <a href="${project.link}" >
                          <i class="fa fa-link links"></i>
                        </a>
                      </li>
                      <li>
                        <a href="${project.git}">
                          <i class="fab fa-github"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          `;

          container.appendChild(listItem);

          createTechList(project,project.id);
        
          createAnimations(project.id)
          
        });
       
      });
  }

  createProjects();

  // insert li items into ul `project-tech-stack` div 
  function createTechList(project,id) {

    project.tech.forEach((element) => {

     const divID =  (`${id}-tech-stack`);

      const ul = document.getElementById(divID);
      const li = document.createElement("li");

      li.innerHTML = `
        <span> ${element} </span>
      `
      ul.appendChild(li);
    });
  }

  // loop through project names and generate mouseover & mouseout effects
  function createAnimations(project) {

    const element = document.getElementById(`${project}-preview`)

    element.addEventListener("mouseover", function () {
      element.style.background = "#f6f5f5";
      element.querySelector(".project-info-wrapper").classList.add("visible");
    });

    element.addEventListener("mouseout", function () {
      element.style.backgroundImage = `url(../img/projects/${project}.jpg)`;
      element.style.background = "";
      element.querySelector(".project-info-wrapper").classList.remove("visible");
    });
  }
  

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

// contact form event listeners
form.addEventListener("submit", function (e) {
  // e.preventDefault()

  //   checkEmail(email)
  const form = (document.getElementById("enquiry").className =
    "contact-form sent");

  console.log("submit clicked");
});

// scrolling

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

  // filtering

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
