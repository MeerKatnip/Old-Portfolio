'use strict';

var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

$(document).ready(function() {
  /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
  /* contact form init  */
  /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
  $('#contactform').submit(function() {
    var action = $(this).attr('action');
    $('#result').slideUp(300, function() {
      $('#result').hide();
      $('#submit').attr('disabled', 'disabled');
      $.post(
        action,
        {
          name: $('#name').val(),
          email: $('#email').val(),
          phone: $('#phone').val(),
          comments: $('#comments').val(),
        },
        function(data) {
          document.getElementById('result').innerHTML = data;
          $('#result').slideDown('slow');
          $('#submit').removeAttr('disabled');
          if (data.match('success') != null) $('#contactform').slideUp('slow');
        },
      );
    });

    return false;
  });

  // close menu on click
  $('.navbar-collapse a').on('click', function(e) {
    $('.navbar-collapse.in').collapse('toggle');
  });

  // bind touchstart
  $('.gallery-inner img').bind('touchstart', function() {
    $(this).addClass('.gallery-inner  .captionWrapper');
  });

  $('.gallery-inner  img').bind('touchend', function() {
    $(this).removeClass('.gallery-inner  .captionWrapper');
  });

  // parallax init on desktop only
  if (isMobile) {
    $('.captionWrapper.valign').css({
      top: '120px',
    });

    $('.parallaxLetter').css({
      display: 'none',
    });
  } else {
    $(window).stellar({
      responsive: true,
      horizontalOffset: 0,
      horizontalScrolling: false,
    });
  }

  // fitvids init
  $('body').fitVids();

  // isotope for gallery
  var $container = $('.gallery');
  $container.isotope({
    filter: '*', // IF YOU WANT TO DISPLAY AT FIRST ONLY ONE FILTER, FOR EXAMPLE DESIGNS: SUBSTIUTE '*' WITH '.designs',
    itemSelector: '.gallery-inner',
    masonry: {
      columnWidth: '.grid-sizer, .grid-sizer-two-columns, .grid-sizer-three-columns, .grid-sizer-four-columns',
    },
  });

  $container.imagesLoaded(function() {
    $container.isotope('layout');
  });

  $('#filters').on('click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $container.isotope({ filter: filterValue });
  });

  // masonry 3 columns
  var $container2 = $('.blogPostsWrapper');
  $container2.imagesLoaded(function() {
    $container2.isotope({
      itemSelector: '.blogPost',
      masonry: {
        columnWidth: '.grid-sizer-blog-3',
      },
    });
  });

  //    masonry 2 columns
  var $container3 = $('.blogPostsWrapper2');
  $container3.imagesLoaded(function() {
    $container3.isotope({
      itemSelector: '.blogPost2',
      masonry: {
        columnWidth: '.grid-sizer-blog-2',
      },
    });
  });

  var $container4 = $('.gallery-ecommerce');
  $container4.imagesLoaded(function() {
    $container4.isotope({
      itemSelector: '.ShoppingRelated',
      masonry: {
        columnWidth: '.grid-sizer-three-columns',
      },
    });
  });

  /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
  /* overlay portfolio */
  /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
  $('a.overlay-ajax').click(function() {
    var url = $(this).attr('href');
    $('.overlay-section').load(url + ' #transmitter');
    $('.overlay-close img').tooltip();
    return false;
  });

  /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
  /* smoothscroll */
  /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
  smoothScroll.init({
    speed: 1000,
    offset: 70,
  });

  /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
  /* scrollreveal */
  /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
  if (!isMobile) {
    window.scrollReveal = new scrollReveal();
  }

  /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
  /* owl-carousels */
  /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
  $('#owl-team').owlCarousel({
    singleItem: true,
    autoPlay: true,
    navigation: true,
    navigationText: ["<i class='fa fa-angle-left fa-4x'></i>", "<i class='fa fa-angle-right fa-4x'></i>"],
  });

  $('#owl-clients').owlCarousel({
    items: 3,
    navigation: false,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [980, 2],
    itemsTablet: [768, 2],
    itemsMobile: [479, 1],
  });

  $('#owl-testimonials').owlCarousel({
    singleItem: true,
    autoPlay: true,
  });

  $('#owl-item').owlCarousel({
    singleItem: true,
    autoPlay: true,
    navigation: true,
    navigationText: [
      "<i class='fa fa-angle-left fa-2x middleNav'></i>",
      "<i class='fa fa-angle-right fa-2x middleNav'></i>",
    ],
  });

  $('#owl-featured').owlCarousel({
    items: 3,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [980, 2],
    itemsTablet: [768, 2],
    itemsMobile: [479, 1],
    navigation: true,
    navigationText: [
      "<i class='fa fa-angle-left fa-2x featuredNav'></i>",
      "<i class='fa fa-angle-right fa-2x featuredNav'></i>",
    ],
  });

  $('#owl-blog-single').owlCarousel({
    singleItem: true,
    navigation: true,
    navigationText: [
      "<i class='fa fa-angle-left fa-2x blogNav'></i>",
      "<i class='fa fa-angle-right fa-2x blogNav'></i>",
    ],
  });

  $('.owl-ecommerce2', '.owl-ecommerce', '.owl-ecommerce3').owlCarousel({
    singleItem: false,
    items: 4,
    navigation: false,
  });

  /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
  /* timers */
  /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
  $('#text-separator-timers').waypoint(
    function() {
      // first timer
      $('.timer1').countTo({
        from: 0, // the number you want to start
        to: 8679, // the number you want to reach
        speed: 4000,
        refreshInterval: 100,
      });

      // second timer
      $('.timer2').countTo({
        from: 0, // the number you want to start
        to: 340, // the number you want to reach
        speed: 2500,
        refreshInterval: 50,
      });

      // third timer
      $('.timer3').countTo({
        from: 0, // the number you want to start
        to: 100, // the number you want to reach
        speed: 2000,
        refreshInterval: 10,
      });

      // fourth timer
      $('.timer4').countTo({
        from: 0, // the number you want to start
        to: 3456, // the number you want to reach
        speed: 4000,
        refreshInterval: 10,
      });
    },
    { offset: 500 },
  );

  /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
  /* shortcodes */
  /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

  $('#myTab a').click(function(e) {
    e.preventDefault();
    $(this).tab('show');
  });

  $('#myTabPills a').click(function(e) {
    e.preventDefault();
    $(this).tab('show');
  });

  $('.SearchTrigger').on('click', function() {
    $('.SearchInput').addClass('ActiveSearchInput');
    $('.SearchInput').css({
      opacity: 1,
      '-moz-transition': 'width 0.5s ease-out',
      '-webkit-transition': 'width 0.5s ease-out',
      transition: 'width 0.5s ease-out',
    });
  });

  $('.SearchCloseTrigger').on('click', function() {
    $('.SearchInput').css({
      opacity: 0,
      '-moz-transition': 'width 0.5s ease-out',
      '-webkit-transition': 'width 0.5s ease-out',
      transition: 'width 0.5s ease-out',
    });
    setTimeout(function() {
      $('.SearchInput').removeClass('ActiveSearchInput');
    }, 500);
  });

  $('.CubeWrapper').on({
    mouseenter: function() {
      $(this).removeClass('show-front');
      $(this).addClass('show-bottom');
    },
    mouseleave: function() {
      $(this).removeClass('show-bottom');
      $(this).addClass('show-front');
    },
  });

  (function($, window, undefined) {
    // outside the scope of the jQuery plugin to
    // keep track of all dropdowns
    var $allDropdowns = $();

    // if instantlyCloseOthers is true, then it will instantly
    // shut other nav items when a new one is hovered over
    $.fn.dropdownHover = function(options) {
      // don't do anything if touch is supported
      // (plugin causes some issues on mobile)
      if ('ontouchstart' in document) return this; // don't want to affect chaining

      // the element we really care about
      // is the dropdown-toggle's parent
      $allDropdowns = $allDropdowns.add(this.parent());

      return this.each(function() {
        var $this = $(this),
          $parent = $this.parent(),
          defaults = {
            delay: 500,
            hoverDelay: 0,
            instantlyCloseOthers: true,
          },
          data = {
            delay: $(this).data('delay'),
            hoverDelay: $(this).data('hover-delay'),
            instantlyCloseOthers: $(this).data('close-others'),
          },
          showEvent = 'show.bs.dropdown',
          hideEvent = 'hide.bs.dropdown',
          // shownEvent  = 'shown.bs.dropdown',
          // hiddenEvent = 'hidden.bs.dropdown',
          settings = $.extend(true, {}, defaults, options, data),
          timeout,
          timeoutHover;

        $parent.hover(
          function(event) {
            // so a neighbor can't open the dropdown
            if (!$parent.hasClass('open') && !$this.is(event.target)) {
              // stop this event, stop executing any code
              // in this callback but continue to propagate
              return true;
            }

            openDropdown(event);
          },
          function() {
            // clear timer for hover event
            window.clearTimeout(timeoutHover);
            timeout = window.setTimeout(function() {
              $this.attr('aria-expanded', 'false');
              $parent.removeClass('open');
              $this.trigger(hideEvent);
            }, settings.delay);
          },
        );

        // this helps with button groups!
        $this.hover(function(event) {
          // this helps prevent a double event from firing.
          // see https://github.com/CWSpear/bootstrap-hover-dropdown/issues/55
          if (!$parent.hasClass('open') && !$parent.is(event.target)) {
            // stop this event, stop executing any code
            // in this callback but continue to propagate
            return true;
          }

          openDropdown(event);
        });

        // handle submenus
        $parent.find('.dropdown-submenu').each(function() {
          var $this = $(this);
          var subTimeout;
          $this.hover(
            function() {
              window.clearTimeout(subTimeout);
              $this.children('.dropdown-menu').show();
              // always close submenu siblings instantly
              $this
                .siblings()
                .children('.dropdown-menu')
                .hide();
            },
            function() {
              var $submenu = $this.children('.dropdown-menu');
              subTimeout = window.setTimeout(function() {
                $submenu.hide();
              }, settings.delay);
            },
          );
        });

        function openDropdown(event) {
          // clear dropdown timeout here so it doesnt close before it should
          window.clearTimeout(timeout);
          // restart hover timer
          window.clearTimeout(timeoutHover);

          // delay for hover event.
          timeoutHover = window.setTimeout(function() {
            $allDropdowns.find(':focus').blur();

            if (settings.instantlyCloseOthers === true) $allDropdowns.removeClass('open');

            // clear timer for hover event
            window.clearTimeout(timeoutHover);
            $this.attr('aria-expanded', 'true');
            $parent.addClass('open');
            $this.trigger(showEvent);
          }, settings.hoverDelay);
        }
      });
    };

    $(document).ready(function() {
      // apply dropdownHover to all elements with the data-hover="dropdown" attribute
      $('[data-hover="dropdown"]').dropdownHover();
    });
  })(jQuery, window);
});
