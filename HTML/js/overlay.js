(function() {
  var triggerBttn = document.getElementById('trigger-overlay'),
    triggerBttnTwo = document.getElementById('trigger-overlay-two'),
    triggerBttnThree = document.getElementById('trigger-overlay-three'),
    triggerBttnFour = document.getElementById('trigger-overlay-four'),
    triggerBttnFive = document.getElementById('trigger-overlay-five'),
    triggerBttnSix = document.getElementById('trigger-overlay-six'),
    triggerBttnSeven = document.getElementById('trigger-overlay-seven'),
    overlay = document.querySelector('div.overlay'),
    closeBttn = overlay.querySelector('a.overlay-close');
  (transEndEventNames = {
    WebkitTransition: 'webkitTransitionEnd',
    MozTransition: 'transitionend',
    OTransition: 'oTransitionEnd',
    msTransition: 'MSTransitionEnd',
    transition: 'transitionend',
  }),
    (transEndEventName = transEndEventNames[Modernizr.prefixed('transition')]),
    (support = { transitions: Modernizr.csstransitions });

  function toggleOverlay() {
    if (classie.has(overlay, 'open')) {
      classie.remove(overlay, 'open');
      classie.add(overlay, 'close');
      var onEndTransitionFn = function(ev) {
        if (support.transitions) {
          if (ev.propertyName !== 'visibility') return;
          this.removeEventListener(transEndEventName, onEndTransitionFn);
        }
        classie.remove(overlay, 'close');
      };

      if (support.transitions) {
        overlay.addEventListener(transEndEventName, onEndTransitionFn);
      } else {
        onEndTransitionFn();
      }

      $('body').removeClass('noscroll');
    } else if (!classie.has(overlay, 'close')) {
      classie.add(overlay, 'open');
      $('body').addClass('noscroll');
    }

    $('div.overlay').animate({ scrollTop: 0 }, 'slow');
  }

  //esc key to close overlay
  $(document).bind('keydown', function(e) {
    if (e.which == 27) {
      toggleOverlay();
    }
  });

  closeBttn.addEventListener('click', toggleOverlay);

  triggerBttn.addEventListener('click', toggleOverlay);
  triggerBttnTwo.addEventListener('click', toggleOverlay);
  triggerBttnThree.addEventListener('click', toggleOverlay);
  triggerBttnFour.addEventListener('click', toggleOverlay);
  triggerBttnFive.addEventListener('click', toggleOverlay);
  triggerBttnSix.addEventListener('click', toggleOverlay);
  triggerBttnSeven.addEventListener('click', toggleOverlay);

  return false;
})();
