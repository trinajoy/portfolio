$(window).on('load', function () {
  $('.loader .inner').fadeOut(500, function () {
    $('.loader').fadeOut(750)
  })
})

$(document).ready(function () {
  $('#slides').superslides({
    animation: 'fade',
    play: 5000,
    pagination: false,
  })

  $('.owl-carousel').owlCarousel({
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
  })

  var skillsTopOffset = $('.skillsSection').offset().top

  const nav = $('#navigation')
  const navTop = nav.offset().top

  $(window).on('scroll', stickyNavigation)

  function stickyNavigation() {
    var body = $('body')

    if ($(window).scrollTop() >= navTop) {
      body.css('padding-top', nav.outerHeight() + 'px')
      body.addClass('fixedNav')
    } else {
      body.css('padding-top', 0)
      body.removeClass('fixedNav')
    }
  }

  $('#navigation li a').click(function (e) {
    e.preventDefault()
    var targetElement = $(this).attr('href')
    var targetPosition = $(targetElement).offset().top
    $('html, body').animate({ scrollTop: targetPosition - 50 }, 'slow')
  })
})
