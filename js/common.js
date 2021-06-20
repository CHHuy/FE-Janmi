/*!--------------------------------------------------------------------------------

 Theme Name: Frontend Seed 4
 Author:     trungnghia112 <trungnghia112@gmail.com>

 -----------------------------------------------------------------------------------*/

if (Modernizr.touch === true && $(window).width() <= 767) {
  //alert('Touch Screen');
} else {
}

;(function ($) {
  'use strict'

  /* ==================================================
  # Get scroll bar width
  ===================================================*/
  function getBarwidth() {
    // Create the measurement node
    let scrollDiv = document.createElement('div')
    scrollDiv.className = 'scrollbar-measure'
    document.body.appendChild(scrollDiv)

    // Get the scrollbar width
    let scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    //console.warn(scrollbarWidth); // Mac:  15

    // Delete the DIV
    document.body.removeChild(scrollDiv)
    return scrollbarWidth
  }

  /* ==================================================
  # Smooth Scroll
  ===================================================*/
  function scrollToAnchor() {
    $('.js-scroll-to').on('click', function (event) {
      let $anchor = $(this)
      let headerH = '0'
      $('html, body')
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr('href')).offset().top - headerH + 'px'
          },
          1000
        )
      event.preventDefault()
    })
  }

  /* ==================================================
  # Owl Carousel
  ===================================================*/
  function owlCarouselFunc() {
    $('.banner-carousel').on('initialized.owl.carousel', () => {
      setTimeout(() => {
        $('.owl-item.active .owl-slide-animated').addClass('is-transitioned')
        $('section').show()
      }, 200)
    })

    const $owlCarousel = $('.banner-carousel').owlCarousel({
      items: 1,
      loop: true,
      nav: true,
      navText: [
        '<svg width="16" height="60" viewBox="0 0 16 60" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
          '<path d="M14.3252 2.19098L1.8252 30.1041L14.3252 58.0182" stroke="white" stroke-width="3" stroke-linecap="round"/>\n' +
          '</svg>',
        '<svg width="16" height="60" viewBox="0 0 16 60" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
          '<path d="M1.82617 2.19098L14.3262 30.1051L1.82617 58.0191" stroke="white" stroke-width="3" stroke-linecap="round"/>\n' +
          '</svg>\n' /* icons from https://iconmonstr.com */
      ]
    })

    $owlCarousel.on('changed.owl.carousel', e => {
      $('.owl-slide-animated').removeClass('is-transitioned')

      const $currentOwlItem = $('.owl-item').eq(e.item.index)
      $currentOwlItem.find('.owl-slide-animated').addClass('is-transitioned')

      const $target = $currentOwlItem.find('.owl-slide-text')
      // doDotsCalculations($target)
    })

    /*    $owlCarousel.on('resize.owl.carousel', () => {
      setTimeout(() => {
        setOwlDotsPosition()
      }, 50)
    })*/

    /*if there isn't content underneath the carousel*/
    $owlCarousel.trigger('refresh.owl.carousel')

    // setOwlDotsPosition()

    /*    function setOwlDotsPosition() {
      const $target = $('.owl-item.active .owl-slide-text')
      doDotsCalculations($target)
    }*/

    // function doDotsCalculations(el) {
    //   const height = el.height()
    //   const { top, left } = el.position()
    //   const res = height + top + 20
    //
    //   $('.owl-carousel .owl-dots').css({
    //     top: `${res}px`,
    //     left: `${left}px`
    //   })
    // }
  }

  function productsCarouselFunc() {
    $('.product-carousel').owlCarousel({
      loop: true,
      margin: 10,
      dots: false,
      nav: true,
      navText: [
        '<svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
          '<g filter="url(#filter0_d)">\n' +
          '<circle r="24" transform="matrix(-1 0 0 1 42 42)" fill="white"/>\n' +
          '</g>\n' +
          '<mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="29" y="30" width="24" height="24">\n' +
          '<rect width="24" height="24" transform="matrix(-1 0 0 1 53 30)" fill="white"/>\n' +
          '</mask>\n' +
          '<g mask="url(#mask0)">\n' +
          '<path d="M45 48L38 41.5L45 35" stroke="#1552F0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
          '</g>\n' +
          '<defs>\n' +
          '<filter id="filter0_d" x="0" y="0" width="84" height="84" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
          '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
          '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>\n' +
          '<feMorphology radius="4" operator="dilate" in="SourceAlpha" result="effect1_dropShadow"/>\n' +
          '<feOffset/>\n' +
          '<feGaussianBlur stdDeviation="7"/>\n' +
          '<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"/>\n' +
          '<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>\n' +
          '<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>\n' +
          '</filter>\n' +
          '</defs>\n' +
          '</svg>',
        '<svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
          '<g filter="url(#filter0_d)">\n' +
          '<circle cx="42" cy="42" r="24" fill="white"/>\n' +
          '</g>\n' +
          '<mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="31" y="30" width="24" height="24">\n' +
          '<rect x="31" y="30" width="24" height="24" fill="white"/>\n' +
          '</mask>\n' +
          '<g mask="url(#mask0)">\n' +
          '<path d="M39 48L46 41.5L39 35" stroke="#1552F0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
          '</g>\n' +
          '<defs>\n' +
          '<filter id="filter0_d" x="0" y="0" width="84" height="84" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
          '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
          '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>\n' +
          '<feMorphology radius="4" operator="dilate" in="SourceAlpha" result="effect1_dropShadow"/>\n' +
          '<feOffset/>\n' +
          '<feGaussianBlur stdDeviation="7"/>\n' +
          '<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"/>\n' +
          '<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>\n' +
          '<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>\n' +
          '</filter>\n' +
          '</defs>\n' +
          '</svg>\n'
      ],
      responsive: {
        0: {
          items: 2
        },
        768: {
          items: 4
        },
        1365: {
          items: 6
        }
      }
    })

    $('.coop-carousel').owlCarousel({
      loop: true,
      margin: 10,
      dots: false,
      nav: true,
      navText: [
        '<svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
          '<g filter="url(#filter0_d)">\n' +
          '<circle r="24" transform="matrix(-1 0 0 1 42 42)" fill="white"/>\n' +
          '</g>\n' +
          '<mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="29" y="30" width="24" height="24">\n' +
          '<rect width="24" height="24" transform="matrix(-1 0 0 1 53 30)" fill="white"/>\n' +
          '</mask>\n' +
          '<g mask="url(#mask0)">\n' +
          '<path d="M45 48L38 41.5L45 35" stroke="#1552F0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
          '</g>\n' +
          '<defs>\n' +
          '<filter id="filter0_d" x="0" y="0" width="84" height="84" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
          '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
          '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>\n' +
          '<feMorphology radius="4" operator="dilate" in="SourceAlpha" result="effect1_dropShadow"/>\n' +
          '<feOffset/>\n' +
          '<feGaussianBlur stdDeviation="7"/>\n' +
          '<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"/>\n' +
          '<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>\n' +
          '<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>\n' +
          '</filter>\n' +
          '</defs>\n' +
          '</svg>',
        '<svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
          '<g filter="url(#filter0_d)">\n' +
          '<circle cx="42" cy="42" r="24" fill="white"/>\n' +
          '</g>\n' +
          '<mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="31" y="30" width="24" height="24">\n' +
          '<rect x="31" y="30" width="24" height="24" fill="white"/>\n' +
          '</mask>\n' +
          '<g mask="url(#mask0)">\n' +
          '<path d="M39 48L46 41.5L39 35" stroke="#1552F0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
          '</g>\n' +
          '<defs>\n' +
          '<filter id="filter0_d" x="0" y="0" width="84" height="84" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
          '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
          '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>\n' +
          '<feMorphology radius="4" operator="dilate" in="SourceAlpha" result="effect1_dropShadow"/>\n' +
          '<feOffset/>\n' +
          '<feGaussianBlur stdDeviation="7"/>\n' +
          '<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"/>\n' +
          '<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>\n' +
          '<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>\n' +
          '</filter>\n' +
          '</defs>\n' +
          '</svg>\n'
      ],
      responsive: {
        0: {
          items: 1
        },
        860: {
          items: 2
        },
        1365: {
          items: 4
        }
      }
    })
  }

  function countDown() {
    new FlipDown(1624665600, {
      headings: ['Ngày', 'Giờ', 'Phút', 'Giây']
    }).start()
  }

  function init() {
    scrollToAnchor()
    getBarwidth()
    owlCarouselFunc()
    productsCarouselFunc()
    countDown()
  }

  $(document).ready(function () {
    init()
  }) // end document ready function

  $(window).on('scroll', function () {})

  // if ($('.x-toTop').length) {
  //   let scrollTrigger = 100, // px
  //     backToTop = function () {
  //       let scrollTop = $(window).scrollTop();
  //       if (scrollTop > scrollTrigger) {
  //         $('.x-toTop').addClass('active');
  //       } else {
  //         $('.x-toTop').removeClass('active');
  //       }
  //     };
  //   backToTop();
  //   $(window).on('scroll', function () {
  //     backToTop();
  //   });
  // }
})(jQuery) // End jQuery
