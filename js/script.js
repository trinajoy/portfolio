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

  // scrolling to nav items, small and large screens

  function myFunction(media) {
    if (media.matches) {
      $('#navigation li a').click(function (e) {
        e.preventDefault()
        var targetElement = $(this).attr('href')
        var targetPosition = $(targetElement).offset().top
        $('html').animate({ scrollTop: targetPosition - 170 }, 'slow')
      })
    } else {
      $('#navigation li a').click(function (e) {
        e.preventDefault()
        var targetElement = $(this).attr('href')
        var targetPosition = $(targetElement).offset().top
        $('html').animate({ scrollTop: targetPosition - 50 }, 'slow')
      })
    }
  }

  var media = window.matchMedia('(max-width: 900px)')
  myFunction(media) // Call listener function at run time
  media.addListener(myFunction) // Attach listener function on state changes

  $('[data-fancybox]').fancybox()

  $('.items').isotope({
    filter: '*',
    animationOptions: {
      duration: 1500,
      easing: 'linear',
      queue: false,
    },
  })

  $('.fancybox')
    .attr('rel', 'gallery')
    .fancybox({
      beforeLoad: function () {
        var el,
          id = $(this.element).data('title-id')

        if (id) {
          el = $('#' + id)

          if (el.length) {
            this.title = el.html()
          }
        }
      },
    })

  $('#filters a').click(function () {
    $('#filters .current').removeClass('current')
    $(this).addClass('current')

    var selector = $(this).attr('data-filter')

    $('.projects').isotope({
      filter: selector,
      animationOptions: {
        duration: 1500,
        easing: 'linear',
        queue: false,
      },
    })
    return false
  })
})
