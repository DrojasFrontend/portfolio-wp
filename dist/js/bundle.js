/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/bundle.js":
/*!**************************!*\
  !*** ./src/js/bundle.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_banner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/banner */ "./src/js/components/banner.js");
/* harmony import */ var _components_slick_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/slick-carousel */ "./src/js/components/slick-carousel.js");
// bundle.js


console.log("bundle");

/***/ }),

/***/ "./src/js/components/banner.js":
/*!*************************************!*\
  !*** ./src/js/components/banner.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
// Banner.js

jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scroll(function () {
  var wScroll = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).scrollTop();
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.banner__content').css({
    'transform': 'translate3d(0px, ' + wScroll / 30 + '%, 0px)'
  });
});

/***/ }),

/***/ "./src/js/components/slick-carousel.js":
/*!*********************************************!*\
  !*** ./src/js/components/slick-carousel.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slick */ "./src/js/components/slick.js");
/* harmony import */ var _slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_slick__WEBPACK_IMPORTED_MODULE_1__);
// slider.js


jquery__WEBPACK_IMPORTED_MODULE_0___default()(".testimonial-slick").slick({
  fade: false,
  arrows: false,
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 3000,
  autoplay: true,
  autoplaySpeed: 3000,
  useTransform: true
});

/***/ }),

/***/ "./src/js/components/slick.js":
/*!************************************!*\
  !*** ./src/js/components/slick.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.8.1
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */

/* global window, document, define, jQuery, setInterval, clearInterval */
;

(function (factory) {
  'use strict';

  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "jquery")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  'use strict';

  var Slick = window.Slick || {};

  Slick = function () {
    var instanceUid = 0;

    function Slick(element, settings) {
      var _ = this,
          dataSettings;

      _.defaults = {
        accessibility: true,
        adaptiveHeight: false,
        appendArrows: $(element),
        appendDots: $(element),
        arrows: true,
        asNavFor: null,
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        autoplay: false,
        autoplaySpeed: 3000,
        centerMode: false,
        centerPadding: '50px',
        cssEase: 'ease',
        customPaging: function customPaging(slider, i) {
          return $('<button type="button" />').text(i + 1);
        },
        dots: false,
        dotsClass: 'slick-dots',
        draggable: true,
        easing: 'linear',
        edgeFriction: 0.35,
        fade: false,
        focusOnSelect: false,
        focusOnChange: false,
        infinite: true,
        initialSlide: 0,
        lazyLoad: 'ondemand',
        mobileFirst: false,
        pauseOnHover: true,
        pauseOnFocus: true,
        pauseOnDotsHover: false,
        respondTo: 'window',
        responsive: null,
        rows: 1,
        rtl: false,
        slide: '',
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: true,
        swipeToSlide: false,
        touchMove: true,
        touchThreshold: 5,
        useCSS: true,
        useTransform: true,
        variableWidth: false,
        vertical: false,
        verticalSwiping: false,
        waitForAnimate: true,
        zIndex: 1000
      };
      _.initials = {
        animating: false,
        dragging: false,
        autoPlayTimer: null,
        currentDirection: 0,
        currentLeft: null,
        currentSlide: 0,
        direction: 1,
        $dots: null,
        listWidth: null,
        listHeight: null,
        loadIndex: 0,
        $nextArrow: null,
        $prevArrow: null,
        scrolling: false,
        slideCount: null,
        slideWidth: null,
        $slideTrack: null,
        $slides: null,
        sliding: false,
        slideOffset: 0,
        swipeLeft: null,
        swiping: false,
        $list: null,
        touchObject: {},
        transformsEnabled: false,
        unslicked: false
      };
      $.extend(_, _.initials);
      _.activeBreakpoint = null;
      _.animType = null;
      _.animProp = null;
      _.breakpoints = [];
      _.breakpointSettings = [];
      _.cssTransitions = false;
      _.focussed = false;
      _.interrupted = false;
      _.hidden = 'hidden';
      _.paused = true;
      _.positionProp = null;
      _.respondTo = null;
      _.rowCount = 1;
      _.shouldClick = true;
      _.$slider = $(element);
      _.$slidesCache = null;
      _.transformType = null;
      _.transitionType = null;
      _.visibilityChange = 'visibilitychange';
      _.windowWidth = 0;
      _.windowTimer = null;
      dataSettings = $(element).data('slick') || {};
      _.options = $.extend({}, _.defaults, settings, dataSettings);
      _.currentSlide = _.options.initialSlide;
      _.originalSettings = _.options;

      if (typeof document.mozHidden !== 'undefined') {
        _.hidden = 'mozHidden';
        _.visibilityChange = 'mozvisibilitychange';
      } else if (typeof document.webkitHidden !== 'undefined') {
        _.hidden = 'webkitHidden';
        _.visibilityChange = 'webkitvisibilitychange';
      }

      _.autoPlay = $.proxy(_.autoPlay, _);
      _.autoPlayClear = $.proxy(_.autoPlayClear, _);
      _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
      _.changeSlide = $.proxy(_.changeSlide, _);
      _.clickHandler = $.proxy(_.clickHandler, _);
      _.selectHandler = $.proxy(_.selectHandler, _);
      _.setPosition = $.proxy(_.setPosition, _);
      _.swipeHandler = $.proxy(_.swipeHandler, _);
      _.dragHandler = $.proxy(_.dragHandler, _);
      _.keyHandler = $.proxy(_.keyHandler, _);
      _.instanceUid = instanceUid++; // A simple way to check for HTML strings
      // Strict HTML recognition (must start with <)
      // Extracted from jQuery v1.11 source

      _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;

      _.registerBreakpoints();

      _.init(true);
    }

    return Slick;
  }();

  Slick.prototype.activateADA = function () {
    var _ = this;

    _.$slideTrack.find('.slick-active').attr({
      'aria-hidden': 'false'
    }).find('a, input, button, select').attr({
      'tabindex': '0'
    });
  };

  Slick.prototype.addSlide = Slick.prototype.slickAdd = function (markup, index, addBefore) {
    var _ = this;

    if (typeof index === 'boolean') {
      addBefore = index;
      index = null;
    } else if (index < 0 || index >= _.slideCount) {
      return false;
    }

    _.unload();

    if (typeof index === 'number') {
      if (index === 0 && _.$slides.length === 0) {
        $(markup).appendTo(_.$slideTrack);
      } else if (addBefore) {
        $(markup).insertBefore(_.$slides.eq(index));
      } else {
        $(markup).insertAfter(_.$slides.eq(index));
      }
    } else {
      if (addBefore === true) {
        $(markup).prependTo(_.$slideTrack);
      } else {
        $(markup).appendTo(_.$slideTrack);
      }
    }

    _.$slides = _.$slideTrack.children(this.options.slide);

    _.$slideTrack.children(this.options.slide).detach();

    _.$slideTrack.append(_.$slides);

    _.$slides.each(function (index, element) {
      $(element).attr('data-slick-index', index);
    });

    _.$slidesCache = _.$slides;

    _.reinit();
  };

  Slick.prototype.animateHeight = function () {
    var _ = this;

    if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
      var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);

      _.$list.animate({
        height: targetHeight
      }, _.options.speed);
    }
  };

  Slick.prototype.animateSlide = function (targetLeft, callback) {
    var animProps = {},
        _ = this;

    _.animateHeight();

    if (_.options.rtl === true && _.options.vertical === false) {
      targetLeft = -targetLeft;
    }

    if (_.transformsEnabled === false) {
      if (_.options.vertical === false) {
        _.$slideTrack.animate({
          left: targetLeft
        }, _.options.speed, _.options.easing, callback);
      } else {
        _.$slideTrack.animate({
          top: targetLeft
        }, _.options.speed, _.options.easing, callback);
      }
    } else {
      if (_.cssTransitions === false) {
        if (_.options.rtl === true) {
          _.currentLeft = -_.currentLeft;
        }

        $({
          animStart: _.currentLeft
        }).animate({
          animStart: targetLeft
        }, {
          duration: _.options.speed,
          easing: _.options.easing,
          step: function step(now) {
            now = Math.ceil(now);

            if (_.options.vertical === false) {
              animProps[_.animType] = 'translate(' + now + 'px, 0px)';

              _.$slideTrack.css(animProps);
            } else {
              animProps[_.animType] = 'translate(0px,' + now + 'px)';

              _.$slideTrack.css(animProps);
            }
          },
          complete: function complete() {
            if (callback) {
              callback.call();
            }
          }
        });
      } else {
        _.applyTransition();

        targetLeft = Math.ceil(targetLeft);

        if (_.options.vertical === false) {
          animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
        } else {
          animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
        }

        _.$slideTrack.css(animProps);

        if (callback) {
          setTimeout(function () {
            _.disableTransition();

            callback.call();
          }, _.options.speed);
        }
      }
    }
  };

  Slick.prototype.getNavTarget = function () {
    var _ = this,
        asNavFor = _.options.asNavFor;

    if (asNavFor && asNavFor !== null) {
      asNavFor = $(asNavFor).not(_.$slider);
    }

    return asNavFor;
  };

  Slick.prototype.asNavFor = function (index) {
    var _ = this,
        asNavFor = _.getNavTarget();

    if (asNavFor !== null && _typeof(asNavFor) === 'object') {
      asNavFor.each(function () {
        var target = $(this).slick('getSlick');

        if (!target.unslicked) {
          target.slideHandler(index, true);
        }
      });
    }
  };

  Slick.prototype.applyTransition = function (slide) {
    var _ = this,
        transition = {};

    if (_.options.fade === false) {
      transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
    } else {
      transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
    }

    if (_.options.fade === false) {
      _.$slideTrack.css(transition);
    } else {
      _.$slides.eq(slide).css(transition);
    }
  };

  Slick.prototype.autoPlay = function () {
    var _ = this;

    _.autoPlayClear();

    if (_.slideCount > _.options.slidesToShow) {
      _.autoPlayTimer = setInterval(_.autoPlayIterator, _.options.autoplaySpeed);
    }
  };

  Slick.prototype.autoPlayClear = function () {
    var _ = this;

    if (_.autoPlayTimer) {
      clearInterval(_.autoPlayTimer);
    }
  };

  Slick.prototype.autoPlayIterator = function () {
    var _ = this,
        slideTo = _.currentSlide + _.options.slidesToScroll;

    if (!_.paused && !_.interrupted && !_.focussed) {
      if (_.options.infinite === false) {
        if (_.direction === 1 && _.currentSlide + 1 === _.slideCount - 1) {
          _.direction = 0;
        } else if (_.direction === 0) {
          slideTo = _.currentSlide - _.options.slidesToScroll;

          if (_.currentSlide - 1 === 0) {
            _.direction = 1;
          }
        }
      }

      _.slideHandler(slideTo);
    }
  };

  Slick.prototype.buildArrows = function () {
    var _ = this;

    if (_.options.arrows === true) {
      _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
      _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

      if (_.slideCount > _.options.slidesToShow) {
        _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

        _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

        if (_.htmlExpr.test(_.options.prevArrow)) {
          _.$prevArrow.prependTo(_.options.appendArrows);
        }

        if (_.htmlExpr.test(_.options.nextArrow)) {
          _.$nextArrow.appendTo(_.options.appendArrows);
        }

        if (_.options.infinite !== true) {
          _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
        }
      } else {
        _.$prevArrow.add(_.$nextArrow).addClass('slick-hidden').attr({
          'aria-disabled': 'true',
          'tabindex': '-1'
        });
      }
    }
  };

  Slick.prototype.buildDots = function () {
    var _ = this,
        i,
        dot;

    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      _.$slider.addClass('slick-dotted');

      dot = $('<ul />').addClass(_.options.dotsClass);

      for (i = 0; i <= _.getDotCount(); i += 1) {
        dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
      }

      _.$dots = dot.appendTo(_.options.appendDots);

      _.$dots.find('li').first().addClass('slick-active');
    }
  };

  Slick.prototype.buildOut = function () {
    var _ = this;

    _.$slides = _.$slider.children(_.options.slide + ':not(.slick-cloned)').addClass('slick-slide');
    _.slideCount = _.$slides.length;

    _.$slides.each(function (index, element) {
      $(element).attr('data-slick-index', index).data('originalStyling', $(element).attr('style') || '');
    });

    _.$slider.addClass('slick-slider');

    _.$slideTrack = _.slideCount === 0 ? $('<div class="slick-track"/>').appendTo(_.$slider) : _.$slides.wrapAll('<div class="slick-track"/>').parent();
    _.$list = _.$slideTrack.wrap('<div class="slick-list"/>').parent();

    _.$slideTrack.css('opacity', 0);

    if (_.options.centerMode === true || _.options.swipeToSlide === true) {
      _.options.slidesToScroll = 1;
    }

    $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

    _.setupInfinite();

    _.buildArrows();

    _.buildDots();

    _.updateDots();

    _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

    if (_.options.draggable === true) {
      _.$list.addClass('draggable');
    }
  };

  Slick.prototype.buildRows = function () {
    var _ = this,
        a,
        b,
        c,
        newSlides,
        numOfSlides,
        originalSlides,
        slidesPerSection;

    newSlides = document.createDocumentFragment();
    originalSlides = _.$slider.children();

    if (_.options.rows > 0) {
      slidesPerSection = _.options.slidesPerRow * _.options.rows;
      numOfSlides = Math.ceil(originalSlides.length / slidesPerSection);

      for (a = 0; a < numOfSlides; a++) {
        var slide = document.createElement('div');

        for (b = 0; b < _.options.rows; b++) {
          var row = document.createElement('div');

          for (c = 0; c < _.options.slidesPerRow; c++) {
            var target = a * slidesPerSection + (b * _.options.slidesPerRow + c);

            if (originalSlides.get(target)) {
              row.appendChild(originalSlides.get(target));
            }
          }

          slide.appendChild(row);
        }

        newSlides.appendChild(slide);
      }

      _.$slider.empty().append(newSlides);

      _.$slider.children().children().children().css({
        'width': 100 / _.options.slidesPerRow + '%',
        'display': 'inline-block'
      });
    }
  };

  Slick.prototype.checkResponsive = function (initial, forceUpdate) {
    var _ = this,
        breakpoint,
        targetBreakpoint,
        respondToWidth,
        triggerBreakpoint = false;

    var sliderWidth = _.$slider.width();

    var windowWidth = window.innerWidth || $(window).width();

    if (_.respondTo === 'window') {
      respondToWidth = windowWidth;
    } else if (_.respondTo === 'slider') {
      respondToWidth = sliderWidth;
    } else if (_.respondTo === 'min') {
      respondToWidth = Math.min(windowWidth, sliderWidth);
    }

    if (_.options.responsive && _.options.responsive.length && _.options.responsive !== null) {
      targetBreakpoint = null;

      for (breakpoint in _.breakpoints) {
        if (_.breakpoints.hasOwnProperty(breakpoint)) {
          if (_.originalSettings.mobileFirst === false) {
            if (respondToWidth < _.breakpoints[breakpoint]) {
              targetBreakpoint = _.breakpoints[breakpoint];
            }
          } else {
            if (respondToWidth > _.breakpoints[breakpoint]) {
              targetBreakpoint = _.breakpoints[breakpoint];
            }
          }
        }
      }

      if (targetBreakpoint !== null) {
        if (_.activeBreakpoint !== null) {
          if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
            _.activeBreakpoint = targetBreakpoint;

            if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
              _.unslick(targetBreakpoint);
            } else {
              _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);

              if (initial === true) {
                _.currentSlide = _.options.initialSlide;
              }

              _.refresh(initial);
            }

            triggerBreakpoint = targetBreakpoint;
          }
        } else {
          _.activeBreakpoint = targetBreakpoint;

          if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
            _.unslick(targetBreakpoint);
          } else {
            _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);

            if (initial === true) {
              _.currentSlide = _.options.initialSlide;
            }

            _.refresh(initial);
          }

          triggerBreakpoint = targetBreakpoint;
        }
      } else {
        if (_.activeBreakpoint !== null) {
          _.activeBreakpoint = null;
          _.options = _.originalSettings;

          if (initial === true) {
            _.currentSlide = _.options.initialSlide;
          }

          _.refresh(initial);

          triggerBreakpoint = targetBreakpoint;
        }
      } // only trigger breakpoints during an actual break. not on initialize.


      if (!initial && triggerBreakpoint !== false) {
        _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
      }
    }
  };

  Slick.prototype.changeSlide = function (event, dontAnimate) {
    var _ = this,
        $target = $(event.currentTarget),
        indexOffset,
        slideOffset,
        unevenOffset; // If target is a link, prevent default action.


    if ($target.is('a')) {
      event.preventDefault();
    } // If target is not the <li> element (ie: a child), find the <li>.


    if (!$target.is('li')) {
      $target = $target.closest('li');
    }

    unevenOffset = _.slideCount % _.options.slidesToScroll !== 0;
    indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

    switch (event.data.message) {
      case 'previous':
        slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;

        if (_.slideCount > _.options.slidesToShow) {
          _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
        }

        break;

      case 'next':
        slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;

        if (_.slideCount > _.options.slidesToShow) {
          _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
        }

        break;

      case 'index':
        var index = event.data.index === 0 ? 0 : event.data.index || $target.index() * _.options.slidesToScroll;

        _.slideHandler(_.checkNavigable(index), false, dontAnimate);

        $target.children().trigger('focus');
        break;

      default:
        return;
    }
  };

  Slick.prototype.checkNavigable = function (index) {
    var _ = this,
        navigables,
        prevNavigable;

    navigables = _.getNavigableIndexes();
    prevNavigable = 0;

    if (index > navigables[navigables.length - 1]) {
      index = navigables[navigables.length - 1];
    } else {
      for (var n in navigables) {
        if (index < navigables[n]) {
          index = prevNavigable;
          break;
        }

        prevNavigable = navigables[n];
      }
    }

    return index;
  };

  Slick.prototype.cleanUpEvents = function () {
    var _ = this;

    if (_.options.dots && _.$dots !== null) {
      $('li', _.$dots).off('click.slick', _.changeSlide).off('mouseenter.slick', $.proxy(_.interrupt, _, true)).off('mouseleave.slick', $.proxy(_.interrupt, _, false));

      if (_.options.accessibility === true) {
        _.$dots.off('keydown.slick', _.keyHandler);
      }
    }

    _.$slider.off('focus.slick blur.slick');

    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
      _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);

      if (_.options.accessibility === true) {
        _.$prevArrow && _.$prevArrow.off('keydown.slick', _.keyHandler);
        _.$nextArrow && _.$nextArrow.off('keydown.slick', _.keyHandler);
      }
    }

    _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);

    _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);

    _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);

    _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

    _.$list.off('click.slick', _.clickHandler);

    $(document).off(_.visibilityChange, _.visibility);

    _.cleanUpSlideEvents();

    if (_.options.accessibility === true) {
      _.$list.off('keydown.slick', _.keyHandler);
    }

    if (_.options.focusOnSelect === true) {
      $(_.$slideTrack).children().off('click.slick', _.selectHandler);
    }

    $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);
    $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);
    $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);
    $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);
  };

  Slick.prototype.cleanUpSlideEvents = function () {
    var _ = this;

    _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));

    _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));
  };

  Slick.prototype.cleanUpRows = function () {
    var _ = this,
        originalSlides;

    if (_.options.rows > 0) {
      originalSlides = _.$slides.children().children();
      originalSlides.removeAttr('style');

      _.$slider.empty().append(originalSlides);
    }
  };

  Slick.prototype.clickHandler = function (event) {
    var _ = this;

    if (_.shouldClick === false) {
      event.stopImmediatePropagation();
      event.stopPropagation();
      event.preventDefault();
    }
  };

  Slick.prototype.destroy = function (refresh) {
    var _ = this;

    _.autoPlayClear();

    _.touchObject = {};

    _.cleanUpEvents();

    $('.slick-cloned', _.$slider).detach();

    if (_.$dots) {
      _.$dots.remove();
    }

    if (_.$prevArrow && _.$prevArrow.length) {
      _.$prevArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display', '');

      if (_.htmlExpr.test(_.options.prevArrow)) {
        _.$prevArrow.remove();
      }
    }

    if (_.$nextArrow && _.$nextArrow.length) {
      _.$nextArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display', '');

      if (_.htmlExpr.test(_.options.nextArrow)) {
        _.$nextArrow.remove();
      }
    }

    if (_.$slides) {
      _.$slides.removeClass('slick-slide slick-active slick-center slick-visible slick-current').removeAttr('aria-hidden').removeAttr('data-slick-index').each(function () {
        $(this).attr('style', $(this).data('originalStyling'));
      });

      _.$slideTrack.children(this.options.slide).detach();

      _.$slideTrack.detach();

      _.$list.detach();

      _.$slider.append(_.$slides);
    }

    _.cleanUpRows();

    _.$slider.removeClass('slick-slider');

    _.$slider.removeClass('slick-initialized');

    _.$slider.removeClass('slick-dotted');

    _.unslicked = true;

    if (!refresh) {
      _.$slider.trigger('destroy', [_]);
    }
  };

  Slick.prototype.disableTransition = function (slide) {
    var _ = this,
        transition = {};

    transition[_.transitionType] = '';

    if (_.options.fade === false) {
      _.$slideTrack.css(transition);
    } else {
      _.$slides.eq(slide).css(transition);
    }
  };

  Slick.prototype.fadeSlide = function (slideIndex, callback) {
    var _ = this;

    if (_.cssTransitions === false) {
      _.$slides.eq(slideIndex).css({
        zIndex: _.options.zIndex
      });

      _.$slides.eq(slideIndex).animate({
        opacity: 1
      }, _.options.speed, _.options.easing, callback);
    } else {
      _.applyTransition(slideIndex);

      _.$slides.eq(slideIndex).css({
        opacity: 1,
        zIndex: _.options.zIndex
      });

      if (callback) {
        setTimeout(function () {
          _.disableTransition(slideIndex);

          callback.call();
        }, _.options.speed);
      }
    }
  };

  Slick.prototype.fadeSlideOut = function (slideIndex) {
    var _ = this;

    if (_.cssTransitions === false) {
      _.$slides.eq(slideIndex).animate({
        opacity: 0,
        zIndex: _.options.zIndex - 2
      }, _.options.speed, _.options.easing);
    } else {
      _.applyTransition(slideIndex);

      _.$slides.eq(slideIndex).css({
        opacity: 0,
        zIndex: _.options.zIndex - 2
      });
    }
  };

  Slick.prototype.filterSlides = Slick.prototype.slickFilter = function (filter) {
    var _ = this;

    if (filter !== null) {
      _.$slidesCache = _.$slides;

      _.unload();

      _.$slideTrack.children(this.options.slide).detach();

      _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

      _.reinit();
    }
  };

  Slick.prototype.focusHandler = function () {
    var _ = this;

    _.$slider.off('focus.slick blur.slick').on('focus.slick blur.slick', '*', function (event) {
      event.stopImmediatePropagation();
      var $sf = $(this);
      setTimeout(function () {
        if (_.options.pauseOnFocus) {
          _.focussed = $sf.is(':focus');

          _.autoPlay();
        }
      }, 0);
    });
  };

  Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function () {
    var _ = this;

    return _.currentSlide;
  };

  Slick.prototype.getDotCount = function () {
    var _ = this;

    var breakPoint = 0;
    var counter = 0;
    var pagerQty = 0;

    if (_.options.infinite === true) {
      if (_.slideCount <= _.options.slidesToShow) {
        ++pagerQty;
      } else {
        while (breakPoint < _.slideCount) {
          ++pagerQty;
          breakPoint = counter + _.options.slidesToScroll;
          counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }
      }
    } else if (_.options.centerMode === true) {
      pagerQty = _.slideCount;
    } else if (!_.options.asNavFor) {
      pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
    } else {
      while (breakPoint < _.slideCount) {
        ++pagerQty;
        breakPoint = counter + _.options.slidesToScroll;
        counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
      }
    }

    return pagerQty - 1;
  };

  Slick.prototype.getLeft = function (slideIndex) {
    var _ = this,
        targetLeft,
        verticalHeight,
        verticalOffset = 0,
        targetSlide,
        coef;

    _.slideOffset = 0;
    verticalHeight = _.$slides.first().outerHeight(true);

    if (_.options.infinite === true) {
      if (_.slideCount > _.options.slidesToShow) {
        _.slideOffset = _.slideWidth * _.options.slidesToShow * -1;
        coef = -1;

        if (_.options.vertical === true && _.options.centerMode === true) {
          if (_.options.slidesToShow === 2) {
            coef = -1.5;
          } else if (_.options.slidesToShow === 1) {
            coef = -2;
          }
        }

        verticalOffset = verticalHeight * _.options.slidesToShow * coef;
      }

      if (_.slideCount % _.options.slidesToScroll !== 0) {
        if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
          if (slideIndex > _.slideCount) {
            _.slideOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth * -1;
            verticalOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight * -1;
          } else {
            _.slideOffset = _.slideCount % _.options.slidesToScroll * _.slideWidth * -1;
            verticalOffset = _.slideCount % _.options.slidesToScroll * verticalHeight * -1;
          }
        }
      }
    } else {
      if (slideIndex + _.options.slidesToShow > _.slideCount) {
        _.slideOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * _.slideWidth;
        verticalOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * verticalHeight;
      }
    }

    if (_.slideCount <= _.options.slidesToShow) {
      _.slideOffset = 0;
      verticalOffset = 0;
    }

    if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {
      _.slideOffset = _.slideWidth * Math.floor(_.options.slidesToShow) / 2 - _.slideWidth * _.slideCount / 2;
    } else if (_.options.centerMode === true && _.options.infinite === true) {
      _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
    } else if (_.options.centerMode === true) {
      _.slideOffset = 0;
      _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
    }

    if (_.options.vertical === false) {
      targetLeft = slideIndex * _.slideWidth * -1 + _.slideOffset;
    } else {
      targetLeft = slideIndex * verticalHeight * -1 + verticalOffset;
    }

    if (_.options.variableWidth === true) {
      if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
        targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
      } else {
        targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
      }

      if (_.options.rtl === true) {
        if (targetSlide[0]) {
          targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
        } else {
          targetLeft = 0;
        }
      } else {
        targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
      }

      if (_.options.centerMode === true) {
        if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
          targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
        } else {
          targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
        }

        if (_.options.rtl === true) {
          if (targetSlide[0]) {
            targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
          } else {
            targetLeft = 0;
          }
        } else {
          targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
        }

        targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
      }
    }

    return targetLeft;
  };

  Slick.prototype.getOption = Slick.prototype.slickGetOption = function (option) {
    var _ = this;

    return _.options[option];
  };

  Slick.prototype.getNavigableIndexes = function () {
    var _ = this,
        breakPoint = 0,
        counter = 0,
        indexes = [],
        max;

    if (_.options.infinite === false) {
      max = _.slideCount;
    } else {
      breakPoint = _.options.slidesToScroll * -1;
      counter = _.options.slidesToScroll * -1;
      max = _.slideCount * 2;
    }

    while (breakPoint < max) {
      indexes.push(breakPoint);
      breakPoint = counter + _.options.slidesToScroll;
      counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
    }

    return indexes;
  };

  Slick.prototype.getSlick = function () {
    return this;
  };

  Slick.prototype.getSlideCount = function () {
    var _ = this,
        slidesTraversed,
        swipedSlide,
        centerOffset;

    centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

    if (_.options.swipeToSlide === true) {
      _.$slideTrack.find('.slick-slide').each(function (index, slide) {
        if (slide.offsetLeft - centerOffset + $(slide).outerWidth() / 2 > _.swipeLeft * -1) {
          swipedSlide = slide;
          return false;
        }
      });

      slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;
      return slidesTraversed;
    } else {
      return _.options.slidesToScroll;
    }
  };

  Slick.prototype.goTo = Slick.prototype.slickGoTo = function (slide, dontAnimate) {
    var _ = this;

    _.changeSlide({
      data: {
        message: 'index',
        index: parseInt(slide)
      }
    }, dontAnimate);
  };

  Slick.prototype.init = function (creation) {
    var _ = this;

    if (!$(_.$slider).hasClass('slick-initialized')) {
      $(_.$slider).addClass('slick-initialized');

      _.buildRows();

      _.buildOut();

      _.setProps();

      _.startLoad();

      _.loadSlider();

      _.initializeEvents();

      _.updateArrows();

      _.updateDots();

      _.checkResponsive(true);

      _.focusHandler();
    }

    if (creation) {
      _.$slider.trigger('init', [_]);
    }

    if (_.options.accessibility === true) {
      _.initADA();
    }

    if (_.options.autoplay) {
      _.paused = false;

      _.autoPlay();
    }
  };

  Slick.prototype.initADA = function () {
    var _ = this,
        numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow),
        tabControlIndexes = _.getNavigableIndexes().filter(function (val) {
      return val >= 0 && val < _.slideCount;
    });

    _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
      'aria-hidden': 'true',
      'tabindex': '-1'
    }).find('a, input, button, select').attr({
      'tabindex': '-1'
    });

    if (_.$dots !== null) {
      _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function (i) {
        var slideControlIndex = tabControlIndexes.indexOf(i);
        $(this).attr({
          'role': 'tabpanel',
          'id': 'slick-slide' + _.instanceUid + i,
          'tabindex': -1
        });

        if (slideControlIndex !== -1) {
          var ariaButtonControl = 'slick-slide-control' + _.instanceUid + slideControlIndex;

          if ($('#' + ariaButtonControl).length) {
            $(this).attr({
              'aria-describedby': ariaButtonControl
            });
          }
        }
      });

      _.$dots.attr('role', 'tablist').find('li').each(function (i) {
        var mappedSlideIndex = tabControlIndexes[i];
        $(this).attr({
          'role': 'presentation'
        });
        $(this).find('button').first().attr({
          'role': 'tab',
          'id': 'slick-slide-control' + _.instanceUid + i,
          'aria-controls': 'slick-slide' + _.instanceUid + mappedSlideIndex,
          'aria-label': i + 1 + ' of ' + numDotGroups,
          'aria-selected': null,
          'tabindex': '-1'
        });
      }).eq(_.currentSlide).find('button').attr({
        'aria-selected': 'true',
        'tabindex': '0'
      }).end();
    }

    for (var i = _.currentSlide, max = i + _.options.slidesToShow; i < max; i++) {
      if (_.options.focusOnChange) {
        _.$slides.eq(i).attr({
          'tabindex': '0'
        });
      } else {
        _.$slides.eq(i).removeAttr('tabindex');
      }
    }

    _.activateADA();
  };

  Slick.prototype.initArrowEvents = function () {
    var _ = this;

    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow.off('click.slick').on('click.slick', {
        message: 'previous'
      }, _.changeSlide);

      _.$nextArrow.off('click.slick').on('click.slick', {
        message: 'next'
      }, _.changeSlide);

      if (_.options.accessibility === true) {
        _.$prevArrow.on('keydown.slick', _.keyHandler);

        _.$nextArrow.on('keydown.slick', _.keyHandler);
      }
    }
  };

  Slick.prototype.initDotEvents = function () {
    var _ = this;

    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      $('li', _.$dots).on('click.slick', {
        message: 'index'
      }, _.changeSlide);

      if (_.options.accessibility === true) {
        _.$dots.on('keydown.slick', _.keyHandler);
      }
    }

    if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.slideCount > _.options.slidesToShow) {
      $('li', _.$dots).on('mouseenter.slick', $.proxy(_.interrupt, _, true)).on('mouseleave.slick', $.proxy(_.interrupt, _, false));
    }
  };

  Slick.prototype.initSlideEvents = function () {
    var _ = this;

    if (_.options.pauseOnHover) {
      _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));

      _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));
    }
  };

  Slick.prototype.initializeEvents = function () {
    var _ = this;

    _.initArrowEvents();

    _.initDotEvents();

    _.initSlideEvents();

    _.$list.on('touchstart.slick mousedown.slick', {
      action: 'start'
    }, _.swipeHandler);

    _.$list.on('touchmove.slick mousemove.slick', {
      action: 'move'
    }, _.swipeHandler);

    _.$list.on('touchend.slick mouseup.slick', {
      action: 'end'
    }, _.swipeHandler);

    _.$list.on('touchcancel.slick mouseleave.slick', {
      action: 'end'
    }, _.swipeHandler);

    _.$list.on('click.slick', _.clickHandler);

    $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

    if (_.options.accessibility === true) {
      _.$list.on('keydown.slick', _.keyHandler);
    }

    if (_.options.focusOnSelect === true) {
      $(_.$slideTrack).children().on('click.slick', _.selectHandler);
    }

    $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));
    $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));
    $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);
    $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
    $(_.setPosition);
  };

  Slick.prototype.initUI = function () {
    var _ = this;

    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow.show();

      _.$nextArrow.show();
    }

    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      _.$dots.show();
    }
  };

  Slick.prototype.keyHandler = function (event) {
    var _ = this; //Dont slide if the cursor is inside the form fields and arrow keys are pressed


    if (!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
      if (event.keyCode === 37 && _.options.accessibility === true) {
        _.changeSlide({
          data: {
            message: _.options.rtl === true ? 'next' : 'previous'
          }
        });
      } else if (event.keyCode === 39 && _.options.accessibility === true) {
        _.changeSlide({
          data: {
            message: _.options.rtl === true ? 'previous' : 'next'
          }
        });
      }
    }
  };

  Slick.prototype.lazyLoad = function () {
    var _ = this,
        loadRange,
        cloneRange,
        rangeStart,
        rangeEnd;

    function loadImages(imagesScope) {
      $('img[data-lazy]', imagesScope).each(function () {
        var image = $(this),
            imageSource = $(this).attr('data-lazy'),
            imageSrcSet = $(this).attr('data-srcset'),
            imageSizes = $(this).attr('data-sizes') || _.$slider.attr('data-sizes'),
            imageToLoad = document.createElement('img');

        imageToLoad.onload = function () {
          image.animate({
            opacity: 0
          }, 100, function () {
            if (imageSrcSet) {
              image.attr('srcset', imageSrcSet);

              if (imageSizes) {
                image.attr('sizes', imageSizes);
              }
            }

            image.attr('src', imageSource).animate({
              opacity: 1
            }, 200, function () {
              image.removeAttr('data-lazy data-srcset data-sizes').removeClass('slick-loading');
            });

            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
          });
        };

        imageToLoad.onerror = function () {
          image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');

          _.$slider.trigger('lazyLoadError', [_, image, imageSource]);
        };

        imageToLoad.src = imageSource;
      });
    }

    if (_.options.centerMode === true) {
      if (_.options.infinite === true) {
        rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
        rangeEnd = rangeStart + _.options.slidesToShow + 2;
      } else {
        rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
        rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
      }
    } else {
      rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
      rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);

      if (_.options.fade === true) {
        if (rangeStart > 0) rangeStart--;
        if (rangeEnd <= _.slideCount) rangeEnd++;
      }
    }

    loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);

    if (_.options.lazyLoad === 'anticipated') {
      var prevSlide = rangeStart - 1,
          nextSlide = rangeEnd,
          $slides = _.$slider.find('.slick-slide');

      for (var i = 0; i < _.options.slidesToScroll; i++) {
        if (prevSlide < 0) prevSlide = _.slideCount - 1;
        loadRange = loadRange.add($slides.eq(prevSlide));
        loadRange = loadRange.add($slides.eq(nextSlide));
        prevSlide--;
        nextSlide++;
      }
    }

    loadImages(loadRange);

    if (_.slideCount <= _.options.slidesToShow) {
      cloneRange = _.$slider.find('.slick-slide');
      loadImages(cloneRange);
    } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
      cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
      loadImages(cloneRange);
    } else if (_.currentSlide === 0) {
      cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
      loadImages(cloneRange);
    }
  };

  Slick.prototype.loadSlider = function () {
    var _ = this;

    _.setPosition();

    _.$slideTrack.css({
      opacity: 1
    });

    _.$slider.removeClass('slick-loading');

    _.initUI();

    if (_.options.lazyLoad === 'progressive') {
      _.progressiveLazyLoad();
    }
  };

  Slick.prototype.next = Slick.prototype.slickNext = function () {
    var _ = this;

    _.changeSlide({
      data: {
        message: 'next'
      }
    });
  };

  Slick.prototype.orientationChange = function () {
    var _ = this;

    _.checkResponsive();

    _.setPosition();
  };

  Slick.prototype.pause = Slick.prototype.slickPause = function () {
    var _ = this;

    _.autoPlayClear();

    _.paused = true;
  };

  Slick.prototype.play = Slick.prototype.slickPlay = function () {
    var _ = this;

    _.autoPlay();

    _.options.autoplay = true;
    _.paused = false;
    _.focussed = false;
    _.interrupted = false;
  };

  Slick.prototype.postSlide = function (index) {
    var _ = this;

    if (!_.unslicked) {
      _.$slider.trigger('afterChange', [_, index]);

      _.animating = false;

      if (_.slideCount > _.options.slidesToShow) {
        _.setPosition();
      }

      _.swipeLeft = null;

      if (_.options.autoplay) {
        _.autoPlay();
      }

      if (_.options.accessibility === true) {
        _.initADA();

        if (_.options.focusOnChange) {
          var $currentSlide = $(_.$slides.get(_.currentSlide));
          $currentSlide.attr('tabindex', 0).focus();
        }
      }
    }
  };

  Slick.prototype.prev = Slick.prototype.slickPrev = function () {
    var _ = this;

    _.changeSlide({
      data: {
        message: 'previous'
      }
    });
  };

  Slick.prototype.preventDefault = function (event) {
    event.preventDefault();
  };

  Slick.prototype.progressiveLazyLoad = function (tryCount) {
    tryCount = tryCount || 1;

    var _ = this,
        $imgsToLoad = $('img[data-lazy]', _.$slider),
        image,
        imageSource,
        imageSrcSet,
        imageSizes,
        imageToLoad;

    if ($imgsToLoad.length) {
      image = $imgsToLoad.first();
      imageSource = image.attr('data-lazy');
      imageSrcSet = image.attr('data-srcset');
      imageSizes = image.attr('data-sizes') || _.$slider.attr('data-sizes');
      imageToLoad = document.createElement('img');

      imageToLoad.onload = function () {
        if (imageSrcSet) {
          image.attr('srcset', imageSrcSet);

          if (imageSizes) {
            image.attr('sizes', imageSizes);
          }
        }

        image.attr('src', imageSource).removeAttr('data-lazy data-srcset data-sizes').removeClass('slick-loading');

        if (_.options.adaptiveHeight === true) {
          _.setPosition();
        }

        _.$slider.trigger('lazyLoaded', [_, image, imageSource]);

        _.progressiveLazyLoad();
      };

      imageToLoad.onerror = function () {
        if (tryCount < 3) {
          /**
           * try to load the image 3 times,
           * leave a slight delay so we don't get
           * servers blocking the request.
           */
          setTimeout(function () {
            _.progressiveLazyLoad(tryCount + 1);
          }, 500);
        } else {
          image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');

          _.$slider.trigger('lazyLoadError', [_, image, imageSource]);

          _.progressiveLazyLoad();
        }
      };

      imageToLoad.src = imageSource;
    } else {
      _.$slider.trigger('allImagesLoaded', [_]);
    }
  };

  Slick.prototype.refresh = function (initializing) {
    var _ = this,
        currentSlide,
        lastVisibleIndex;

    lastVisibleIndex = _.slideCount - _.options.slidesToShow; // in non-infinite sliders, we don't want to go past the
    // last visible index.

    if (!_.options.infinite && _.currentSlide > lastVisibleIndex) {
      _.currentSlide = lastVisibleIndex;
    } // if less slides than to show, go to start.


    if (_.slideCount <= _.options.slidesToShow) {
      _.currentSlide = 0;
    }

    currentSlide = _.currentSlide;

    _.destroy(true);

    $.extend(_, _.initials, {
      currentSlide: currentSlide
    });

    _.init();

    if (!initializing) {
      _.changeSlide({
        data: {
          message: 'index',
          index: currentSlide
        }
      }, false);
    }
  };

  Slick.prototype.registerBreakpoints = function () {
    var _ = this,
        breakpoint,
        currentBreakpoint,
        l,
        responsiveSettings = _.options.responsive || null;

    if ($.type(responsiveSettings) === 'array' && responsiveSettings.length) {
      _.respondTo = _.options.respondTo || 'window';

      for (breakpoint in responsiveSettings) {
        l = _.breakpoints.length - 1;

        if (responsiveSettings.hasOwnProperty(breakpoint)) {
          currentBreakpoint = responsiveSettings[breakpoint].breakpoint; // loop through the breakpoints and cut out any existing
          // ones with the same breakpoint number, we don't want dupes.

          while (l >= 0) {
            if (_.breakpoints[l] && _.breakpoints[l] === currentBreakpoint) {
              _.breakpoints.splice(l, 1);
            }

            l--;
          }

          _.breakpoints.push(currentBreakpoint);

          _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;
        }
      }

      _.breakpoints.sort(function (a, b) {
        return _.options.mobileFirst ? a - b : b - a;
      });
    }
  };

  Slick.prototype.reinit = function () {
    var _ = this;

    _.$slides = _.$slideTrack.children(_.options.slide).addClass('slick-slide');
    _.slideCount = _.$slides.length;

    if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
      _.currentSlide = _.currentSlide - _.options.slidesToScroll;
    }

    if (_.slideCount <= _.options.slidesToShow) {
      _.currentSlide = 0;
    }

    _.registerBreakpoints();

    _.setProps();

    _.setupInfinite();

    _.buildArrows();

    _.updateArrows();

    _.initArrowEvents();

    _.buildDots();

    _.updateDots();

    _.initDotEvents();

    _.cleanUpSlideEvents();

    _.initSlideEvents();

    _.checkResponsive(false, true);

    if (_.options.focusOnSelect === true) {
      $(_.$slideTrack).children().on('click.slick', _.selectHandler);
    }

    _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

    _.setPosition();

    _.focusHandler();

    _.paused = !_.options.autoplay;

    _.autoPlay();

    _.$slider.trigger('reInit', [_]);
  };

  Slick.prototype.resize = function () {
    var _ = this;

    if ($(window).width() !== _.windowWidth) {
      clearTimeout(_.windowDelay);
      _.windowDelay = window.setTimeout(function () {
        _.windowWidth = $(window).width();

        _.checkResponsive();

        if (!_.unslicked) {
          _.setPosition();
        }
      }, 50);
    }
  };

  Slick.prototype.removeSlide = Slick.prototype.slickRemove = function (index, removeBefore, removeAll) {
    var _ = this;

    if (typeof index === 'boolean') {
      removeBefore = index;
      index = removeBefore === true ? 0 : _.slideCount - 1;
    } else {
      index = removeBefore === true ? --index : index;
    }

    if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
      return false;
    }

    _.unload();

    if (removeAll === true) {
      _.$slideTrack.children().remove();
    } else {
      _.$slideTrack.children(this.options.slide).eq(index).remove();
    }

    _.$slides = _.$slideTrack.children(this.options.slide);

    _.$slideTrack.children(this.options.slide).detach();

    _.$slideTrack.append(_.$slides);

    _.$slidesCache = _.$slides;

    _.reinit();
  };

  Slick.prototype.setCSS = function (position) {
    var _ = this,
        positionProps = {},
        x,
        y;

    if (_.options.rtl === true) {
      position = -position;
    }

    x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
    y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';
    positionProps[_.positionProp] = position;

    if (_.transformsEnabled === false) {
      _.$slideTrack.css(positionProps);
    } else {
      positionProps = {};

      if (_.cssTransitions === false) {
        positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';

        _.$slideTrack.css(positionProps);
      } else {
        positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';

        _.$slideTrack.css(positionProps);
      }
    }
  };

  Slick.prototype.setDimensions = function () {
    var _ = this;

    if (_.options.vertical === false) {
      if (_.options.centerMode === true) {
        _.$list.css({
          padding: '0px ' + _.options.centerPadding
        });
      }
    } else {
      _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);

      if (_.options.centerMode === true) {
        _.$list.css({
          padding: _.options.centerPadding + ' 0px'
        });
      }
    }

    _.listWidth = _.$list.width();
    _.listHeight = _.$list.height();

    if (_.options.vertical === false && _.options.variableWidth === false) {
      _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);

      _.$slideTrack.width(Math.ceil(_.slideWidth * _.$slideTrack.children('.slick-slide').length));
    } else if (_.options.variableWidth === true) {
      _.$slideTrack.width(5000 * _.slideCount);
    } else {
      _.slideWidth = Math.ceil(_.listWidth);

      _.$slideTrack.height(Math.ceil(_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length));
    }

    var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();

    if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);
  };

  Slick.prototype.setFade = function () {
    var _ = this,
        targetLeft;

    _.$slides.each(function (index, element) {
      targetLeft = _.slideWidth * index * -1;

      if (_.options.rtl === true) {
        $(element).css({
          position: 'relative',
          right: targetLeft,
          top: 0,
          zIndex: _.options.zIndex - 2,
          opacity: 0
        });
      } else {
        $(element).css({
          position: 'relative',
          left: targetLeft,
          top: 0,
          zIndex: _.options.zIndex - 2,
          opacity: 0
        });
      }
    });

    _.$slides.eq(_.currentSlide).css({
      zIndex: _.options.zIndex - 1,
      opacity: 1
    });
  };

  Slick.prototype.setHeight = function () {
    var _ = this;

    if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
      var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);

      _.$list.css('height', targetHeight);
    }
  };

  Slick.prototype.setOption = Slick.prototype.slickSetOption = function () {
    /**
     * accepts arguments in format of:
     *
     *  - for changing a single option's value:
     *     .slick("setOption", option, value, refresh )
     *
     *  - for changing a set of responsive options:
     *     .slick("setOption", 'responsive', [{}, ...], refresh )
     *
     *  - for updating multiple values at once (not responsive)
     *     .slick("setOption", { 'option': value, ... }, refresh )
     */
    var _ = this,
        l,
        item,
        option,
        value,
        refresh = false,
        type;

    if ($.type(arguments[0]) === 'object') {
      option = arguments[0];
      refresh = arguments[1];
      type = 'multiple';
    } else if ($.type(arguments[0]) === 'string') {
      option = arguments[0];
      value = arguments[1];
      refresh = arguments[2];

      if (arguments[0] === 'responsive' && $.type(arguments[1]) === 'array') {
        type = 'responsive';
      } else if (typeof arguments[1] !== 'undefined') {
        type = 'single';
      }
    }

    if (type === 'single') {
      _.options[option] = value;
    } else if (type === 'multiple') {
      $.each(option, function (opt, val) {
        _.options[opt] = val;
      });
    } else if (type === 'responsive') {
      for (item in value) {
        if ($.type(_.options.responsive) !== 'array') {
          _.options.responsive = [value[item]];
        } else {
          l = _.options.responsive.length - 1; // loop through the responsive object and splice out duplicates.

          while (l >= 0) {
            if (_.options.responsive[l].breakpoint === value[item].breakpoint) {
              _.options.responsive.splice(l, 1);
            }

            l--;
          }

          _.options.responsive.push(value[item]);
        }
      }
    }

    if (refresh) {
      _.unload();

      _.reinit();
    }
  };

  Slick.prototype.setPosition = function () {
    var _ = this;

    _.setDimensions();

    _.setHeight();

    if (_.options.fade === false) {
      _.setCSS(_.getLeft(_.currentSlide));
    } else {
      _.setFade();
    }

    _.$slider.trigger('setPosition', [_]);
  };

  Slick.prototype.setProps = function () {
    var _ = this,
        bodyStyle = document.body.style;

    _.positionProp = _.options.vertical === true ? 'top' : 'left';

    if (_.positionProp === 'top') {
      _.$slider.addClass('slick-vertical');
    } else {
      _.$slider.removeClass('slick-vertical');
    }

    if (bodyStyle.WebkitTransition !== undefined || bodyStyle.MozTransition !== undefined || bodyStyle.msTransition !== undefined) {
      if (_.options.useCSS === true) {
        _.cssTransitions = true;
      }
    }

    if (_.options.fade) {
      if (typeof _.options.zIndex === 'number') {
        if (_.options.zIndex < 3) {
          _.options.zIndex = 3;
        }
      } else {
        _.options.zIndex = _.defaults.zIndex;
      }
    }

    if (bodyStyle.OTransform !== undefined) {
      _.animType = 'OTransform';
      _.transformType = '-o-transform';
      _.transitionType = 'OTransition';
      if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
    }

    if (bodyStyle.MozTransform !== undefined) {
      _.animType = 'MozTransform';
      _.transformType = '-moz-transform';
      _.transitionType = 'MozTransition';
      if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
    }

    if (bodyStyle.webkitTransform !== undefined) {
      _.animType = 'webkitTransform';
      _.transformType = '-webkit-transform';
      _.transitionType = 'webkitTransition';
      if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
    }

    if (bodyStyle.msTransform !== undefined) {
      _.animType = 'msTransform';
      _.transformType = '-ms-transform';
      _.transitionType = 'msTransition';
      if (bodyStyle.msTransform === undefined) _.animType = false;
    }

    if (bodyStyle.transform !== undefined && _.animType !== false) {
      _.animType = 'transform';
      _.transformType = 'transform';
      _.transitionType = 'transition';
    }

    _.transformsEnabled = _.options.useTransform && _.animType !== null && _.animType !== false;
  };

  Slick.prototype.setSlideClasses = function (index) {
    var _ = this,
        centerOffset,
        allSlides,
        indexOffset,
        remainder;

    allSlides = _.$slider.find('.slick-slide').removeClass('slick-active slick-center slick-current').attr('aria-hidden', 'true');

    _.$slides.eq(index).addClass('slick-current');

    if (_.options.centerMode === true) {
      var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;
      centerOffset = Math.floor(_.options.slidesToShow / 2);

      if (_.options.infinite === true) {
        if (index >= centerOffset && index <= _.slideCount - 1 - centerOffset) {
          _.$slides.slice(index - centerOffset + evenCoef, index + centerOffset + 1).addClass('slick-active').attr('aria-hidden', 'false');
        } else {
          indexOffset = _.options.slidesToShow + index;
          allSlides.slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2).addClass('slick-active').attr('aria-hidden', 'false');
        }

        if (index === 0) {
          allSlides.eq(allSlides.length - 1 - _.options.slidesToShow).addClass('slick-center');
        } else if (index === _.slideCount - 1) {
          allSlides.eq(_.options.slidesToShow).addClass('slick-center');
        }
      }

      _.$slides.eq(index).addClass('slick-center');
    } else {
      if (index >= 0 && index <= _.slideCount - _.options.slidesToShow) {
        _.$slides.slice(index, index + _.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false');
      } else if (allSlides.length <= _.options.slidesToShow) {
        allSlides.addClass('slick-active').attr('aria-hidden', 'false');
      } else {
        remainder = _.slideCount % _.options.slidesToShow;
        indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

        if (_.options.slidesToShow == _.options.slidesToScroll && _.slideCount - index < _.options.slidesToShow) {
          allSlides.slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder).addClass('slick-active').attr('aria-hidden', 'false');
        } else {
          allSlides.slice(indexOffset, indexOffset + _.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false');
        }
      }
    }

    if (_.options.lazyLoad === 'ondemand' || _.options.lazyLoad === 'anticipated') {
      _.lazyLoad();
    }
  };

  Slick.prototype.setupInfinite = function () {
    var _ = this,
        i,
        slideIndex,
        infiniteCount;

    if (_.options.fade === true) {
      _.options.centerMode = false;
    }

    if (_.options.infinite === true && _.options.fade === false) {
      slideIndex = null;

      if (_.slideCount > _.options.slidesToShow) {
        if (_.options.centerMode === true) {
          infiniteCount = _.options.slidesToShow + 1;
        } else {
          infiniteCount = _.options.slidesToShow;
        }

        for (i = _.slideCount; i > _.slideCount - infiniteCount; i -= 1) {
          slideIndex = i - 1;
          $(_.$slides[slideIndex]).clone(true).attr('id', '').attr('data-slick-index', slideIndex - _.slideCount).prependTo(_.$slideTrack).addClass('slick-cloned');
        }

        for (i = 0; i < infiniteCount + _.slideCount; i += 1) {
          slideIndex = i;
          $(_.$slides[slideIndex]).clone(true).attr('id', '').attr('data-slick-index', slideIndex + _.slideCount).appendTo(_.$slideTrack).addClass('slick-cloned');
        }

        _.$slideTrack.find('.slick-cloned').find('[id]').each(function () {
          $(this).attr('id', '');
        });
      }
    }
  };

  Slick.prototype.interrupt = function (toggle) {
    var _ = this;

    if (!toggle) {
      _.autoPlay();
    }

    _.interrupted = toggle;
  };

  Slick.prototype.selectHandler = function (event) {
    var _ = this;

    var targetElement = $(event.target).is('.slick-slide') ? $(event.target) : $(event.target).parents('.slick-slide');
    var index = parseInt(targetElement.attr('data-slick-index'));
    if (!index) index = 0;

    if (_.slideCount <= _.options.slidesToShow) {
      _.slideHandler(index, false, true);

      return;
    }

    _.slideHandler(index);
  };

  Slick.prototype.slideHandler = function (index, sync, dontAnimate) {
    var targetSlide,
        animSlide,
        oldSlide,
        slideLeft,
        targetLeft = null,
        _ = this,
        navTarget;

    sync = sync || false;

    if (_.animating === true && _.options.waitForAnimate === true) {
      return;
    }

    if (_.options.fade === true && _.currentSlide === index) {
      return;
    }

    if (sync === false) {
      _.asNavFor(index);
    }

    targetSlide = index;
    targetLeft = _.getLeft(targetSlide);
    slideLeft = _.getLeft(_.currentSlide);
    _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

    if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
      if (_.options.fade === false) {
        targetSlide = _.currentSlide;

        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
          _.animateSlide(slideLeft, function () {
            _.postSlide(targetSlide);
          });
        } else {
          _.postSlide(targetSlide);
        }
      }

      return;
    } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > _.slideCount - _.options.slidesToScroll)) {
      if (_.options.fade === false) {
        targetSlide = _.currentSlide;

        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
          _.animateSlide(slideLeft, function () {
            _.postSlide(targetSlide);
          });
        } else {
          _.postSlide(targetSlide);
        }
      }

      return;
    }

    if (_.options.autoplay) {
      clearInterval(_.autoPlayTimer);
    }

    if (targetSlide < 0) {
      if (_.slideCount % _.options.slidesToScroll !== 0) {
        animSlide = _.slideCount - _.slideCount % _.options.slidesToScroll;
      } else {
        animSlide = _.slideCount + targetSlide;
      }
    } else if (targetSlide >= _.slideCount) {
      if (_.slideCount % _.options.slidesToScroll !== 0) {
        animSlide = 0;
      } else {
        animSlide = targetSlide - _.slideCount;
      }
    } else {
      animSlide = targetSlide;
    }

    _.animating = true;

    _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

    oldSlide = _.currentSlide;
    _.currentSlide = animSlide;

    _.setSlideClasses(_.currentSlide);

    if (_.options.asNavFor) {
      navTarget = _.getNavTarget();
      navTarget = navTarget.slick('getSlick');

      if (navTarget.slideCount <= navTarget.options.slidesToShow) {
        navTarget.setSlideClasses(_.currentSlide);
      }
    }

    _.updateDots();

    _.updateArrows();

    if (_.options.fade === true) {
      if (dontAnimate !== true) {
        _.fadeSlideOut(oldSlide);

        _.fadeSlide(animSlide, function () {
          _.postSlide(animSlide);
        });
      } else {
        _.postSlide(animSlide);
      }

      _.animateHeight();

      return;
    }

    if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
      _.animateSlide(targetLeft, function () {
        _.postSlide(animSlide);
      });
    } else {
      _.postSlide(animSlide);
    }
  };

  Slick.prototype.startLoad = function () {
    var _ = this;

    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow.hide();

      _.$nextArrow.hide();
    }

    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      _.$dots.hide();
    }

    _.$slider.addClass('slick-loading');
  };

  Slick.prototype.swipeDirection = function () {
    var xDist,
        yDist,
        r,
        swipeAngle,
        _ = this;

    xDist = _.touchObject.startX - _.touchObject.curX;
    yDist = _.touchObject.startY - _.touchObject.curY;
    r = Math.atan2(yDist, xDist);
    swipeAngle = Math.round(r * 180 / Math.PI);

    if (swipeAngle < 0) {
      swipeAngle = 360 - Math.abs(swipeAngle);
    }

    if (swipeAngle <= 45 && swipeAngle >= 0) {
      return _.options.rtl === false ? 'left' : 'right';
    }

    if (swipeAngle <= 360 && swipeAngle >= 315) {
      return _.options.rtl === false ? 'left' : 'right';
    }

    if (swipeAngle >= 135 && swipeAngle <= 225) {
      return _.options.rtl === false ? 'right' : 'left';
    }

    if (_.options.verticalSwiping === true) {
      if (swipeAngle >= 35 && swipeAngle <= 135) {
        return 'down';
      } else {
        return 'up';
      }
    }

    return 'vertical';
  };

  Slick.prototype.swipeEnd = function (event) {
    var _ = this,
        slideCount,
        direction;

    _.dragging = false;
    _.swiping = false;

    if (_.scrolling) {
      _.scrolling = false;
      return false;
    }

    _.interrupted = false;
    _.shouldClick = _.touchObject.swipeLength > 10 ? false : true;

    if (_.touchObject.curX === undefined) {
      return false;
    }

    if (_.touchObject.edgeHit === true) {
      _.$slider.trigger('edge', [_, _.swipeDirection()]);
    }

    if (_.touchObject.swipeLength >= _.touchObject.minSwipe) {
      direction = _.swipeDirection();

      switch (direction) {
        case 'left':
        case 'down':
          slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide + _.getSlideCount()) : _.currentSlide + _.getSlideCount();
          _.currentDirection = 0;
          break;

        case 'right':
        case 'up':
          slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide - _.getSlideCount()) : _.currentSlide - _.getSlideCount();
          _.currentDirection = 1;
          break;

        default:
      }

      if (direction != 'vertical') {
        _.slideHandler(slideCount);

        _.touchObject = {};

        _.$slider.trigger('swipe', [_, direction]);
      }
    } else {
      if (_.touchObject.startX !== _.touchObject.curX) {
        _.slideHandler(_.currentSlide);

        _.touchObject = {};
      }
    }
  };

  Slick.prototype.swipeHandler = function (event) {
    var _ = this;

    if (_.options.swipe === false || 'ontouchend' in document && _.options.swipe === false) {
      return;
    } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
      return;
    }

    _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ? event.originalEvent.touches.length : 1;
    _.touchObject.minSwipe = _.listWidth / _.options.touchThreshold;

    if (_.options.verticalSwiping === true) {
      _.touchObject.minSwipe = _.listHeight / _.options.touchThreshold;
    }

    switch (event.data.action) {
      case 'start':
        _.swipeStart(event);

        break;

      case 'move':
        _.swipeMove(event);

        break;

      case 'end':
        _.swipeEnd(event);

        break;
    }
  };

  Slick.prototype.swipeMove = function (event) {
    var _ = this,
        edgeWasHit = false,
        curLeft,
        swipeDirection,
        swipeLength,
        positionOffset,
        touches,
        verticalSwipeLength;

    touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

    if (!_.dragging || _.scrolling || touches && touches.length !== 1) {
      return false;
    }

    curLeft = _.getLeft(_.currentSlide);
    _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
    _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;
    _.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));
    verticalSwipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));

    if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
      _.scrolling = true;
      return false;
    }

    if (_.options.verticalSwiping === true) {
      _.touchObject.swipeLength = verticalSwipeLength;
    }

    swipeDirection = _.swipeDirection();

    if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
      _.swiping = true;
      event.preventDefault();
    }

    positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);

    if (_.options.verticalSwiping === true) {
      positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
    }

    swipeLength = _.touchObject.swipeLength;
    _.touchObject.edgeHit = false;

    if (_.options.infinite === false) {
      if (_.currentSlide === 0 && swipeDirection === 'right' || _.currentSlide >= _.getDotCount() && swipeDirection === 'left') {
        swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
        _.touchObject.edgeHit = true;
      }
    }

    if (_.options.vertical === false) {
      _.swipeLeft = curLeft + swipeLength * positionOffset;
    } else {
      _.swipeLeft = curLeft + swipeLength * (_.$list.height() / _.listWidth) * positionOffset;
    }

    if (_.options.verticalSwiping === true) {
      _.swipeLeft = curLeft + swipeLength * positionOffset;
    }

    if (_.options.fade === true || _.options.touchMove === false) {
      return false;
    }

    if (_.animating === true) {
      _.swipeLeft = null;
      return false;
    }

    _.setCSS(_.swipeLeft);
  };

  Slick.prototype.swipeStart = function (event) {
    var _ = this,
        touches;

    _.interrupted = true;

    if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
      _.touchObject = {};
      return false;
    }

    if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
      touches = event.originalEvent.touches[0];
    }

    _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
    _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;
    _.dragging = true;
  };

  Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function () {
    var _ = this;

    if (_.$slidesCache !== null) {
      _.unload();

      _.$slideTrack.children(this.options.slide).detach();

      _.$slidesCache.appendTo(_.$slideTrack);

      _.reinit();
    }
  };

  Slick.prototype.unload = function () {
    var _ = this;

    $('.slick-cloned', _.$slider).remove();

    if (_.$dots) {
      _.$dots.remove();
    }

    if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
      _.$prevArrow.remove();
    }

    if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
      _.$nextArrow.remove();
    }

    _.$slides.removeClass('slick-slide slick-active slick-visible slick-current').attr('aria-hidden', 'true').css('width', '');
  };

  Slick.prototype.unslick = function (fromBreakpoint) {
    var _ = this;

    _.$slider.trigger('unslick', [_, fromBreakpoint]);

    _.destroy();
  };

  Slick.prototype.updateArrows = function () {
    var _ = this,
        centerOffset;

    centerOffset = Math.floor(_.options.slidesToShow / 2);

    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow && !_.options.infinite) {
      _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

      _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

      if (_.currentSlide === 0) {
        _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');

        _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
      } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {
        _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');

        _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
      } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {
        _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');

        _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
      }
    }
  };

  Slick.prototype.updateDots = function () {
    var _ = this;

    if (_.$dots !== null) {
      _.$dots.find('li').removeClass('slick-active').end();

      _.$dots.find('li').eq(Math.floor(_.currentSlide / _.options.slidesToScroll)).addClass('slick-active');
    }
  };

  Slick.prototype.visibility = function () {
    var _ = this;

    if (_.options.autoplay) {
      if (document[_.hidden]) {
        _.interrupted = true;
      } else {
        _.interrupted = false;
      }
    }
  };

  $.fn.slick = function () {
    var _ = this,
        opt = arguments[0],
        args = Array.prototype.slice.call(arguments, 1),
        l = _.length,
        i,
        ret;

    for (i = 0; i < l; i++) {
      if (_typeof(opt) == 'object' || typeof opt == 'undefined') _[i].slick = new Slick(_[i], opt);else ret = _[i].slick[opt].apply(_[i].slick, args);
      if (typeof ret != 'undefined') return ret;
    }

    return _;
  };
});

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./src/js/bundle.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Daniel\Local Sites\portfolioweb\app\public\wp-content\themes\portfolio-wordpress\src\js\bundle.js */"./src/js/bundle.js");


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9iYW5uZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvc2xpY2stY2Fyb3VzZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvc2xpY2suanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwialF1ZXJ5XCIiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsIiQiLCJ3aW5kb3ciLCJzY3JvbGwiLCJ3U2Nyb2xsIiwic2Nyb2xsVG9wIiwiY3NzIiwic2xpY2siLCJmYWRlIiwiYXJyb3dzIiwiZG90cyIsImluZmluaXRlIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJzcGVlZCIsImF1dG9wbGF5IiwiYXV0b3BsYXlTcGVlZCIsInVzZVRyYW5zZm9ybSIsImZhY3RvcnkiLCJkZWZpbmUiLCJTbGljayIsImluc3RhbmNlVWlkIiwiZWxlbWVudCIsInNldHRpbmdzIiwiXyIsImRhdGFTZXR0aW5ncyIsImRlZmF1bHRzIiwiYWNjZXNzaWJpbGl0eSIsImFkYXB0aXZlSGVpZ2h0IiwiYXBwZW5kQXJyb3dzIiwiYXBwZW5kRG90cyIsImFzTmF2Rm9yIiwicHJldkFycm93IiwibmV4dEFycm93IiwiY2VudGVyTW9kZSIsImNlbnRlclBhZGRpbmciLCJjc3NFYXNlIiwiY3VzdG9tUGFnaW5nIiwic2xpZGVyIiwiaSIsInRleHQiLCJkb3RzQ2xhc3MiLCJkcmFnZ2FibGUiLCJlYXNpbmciLCJlZGdlRnJpY3Rpb24iLCJmb2N1c09uU2VsZWN0IiwiZm9jdXNPbkNoYW5nZSIsImluaXRpYWxTbGlkZSIsImxhenlMb2FkIiwibW9iaWxlRmlyc3QiLCJwYXVzZU9uSG92ZXIiLCJwYXVzZU9uRm9jdXMiLCJwYXVzZU9uRG90c0hvdmVyIiwicmVzcG9uZFRvIiwicmVzcG9uc2l2ZSIsInJvd3MiLCJydGwiLCJzbGlkZSIsInNsaWRlc1BlclJvdyIsInN3aXBlIiwic3dpcGVUb1NsaWRlIiwidG91Y2hNb3ZlIiwidG91Y2hUaHJlc2hvbGQiLCJ1c2VDU1MiLCJ2YXJpYWJsZVdpZHRoIiwidmVydGljYWwiLCJ2ZXJ0aWNhbFN3aXBpbmciLCJ3YWl0Rm9yQW5pbWF0ZSIsInpJbmRleCIsImluaXRpYWxzIiwiYW5pbWF0aW5nIiwiZHJhZ2dpbmciLCJhdXRvUGxheVRpbWVyIiwiY3VycmVudERpcmVjdGlvbiIsImN1cnJlbnRMZWZ0IiwiY3VycmVudFNsaWRlIiwiZGlyZWN0aW9uIiwiJGRvdHMiLCJsaXN0V2lkdGgiLCJsaXN0SGVpZ2h0IiwibG9hZEluZGV4IiwiJG5leHRBcnJvdyIsIiRwcmV2QXJyb3ciLCJzY3JvbGxpbmciLCJzbGlkZUNvdW50Iiwic2xpZGVXaWR0aCIsIiRzbGlkZVRyYWNrIiwiJHNsaWRlcyIsInNsaWRpbmciLCJzbGlkZU9mZnNldCIsInN3aXBlTGVmdCIsInN3aXBpbmciLCIkbGlzdCIsInRvdWNoT2JqZWN0IiwidHJhbnNmb3Jtc0VuYWJsZWQiLCJ1bnNsaWNrZWQiLCJleHRlbmQiLCJhY3RpdmVCcmVha3BvaW50IiwiYW5pbVR5cGUiLCJhbmltUHJvcCIsImJyZWFrcG9pbnRzIiwiYnJlYWtwb2ludFNldHRpbmdzIiwiY3NzVHJhbnNpdGlvbnMiLCJmb2N1c3NlZCIsImludGVycnVwdGVkIiwiaGlkZGVuIiwicGF1c2VkIiwicG9zaXRpb25Qcm9wIiwicm93Q291bnQiLCJzaG91bGRDbGljayIsIiRzbGlkZXIiLCIkc2xpZGVzQ2FjaGUiLCJ0cmFuc2Zvcm1UeXBlIiwidHJhbnNpdGlvblR5cGUiLCJ2aXNpYmlsaXR5Q2hhbmdlIiwid2luZG93V2lkdGgiLCJ3aW5kb3dUaW1lciIsImRhdGEiLCJvcHRpb25zIiwib3JpZ2luYWxTZXR0aW5ncyIsImRvY3VtZW50IiwibW96SGlkZGVuIiwid2Via2l0SGlkZGVuIiwiYXV0b1BsYXkiLCJwcm94eSIsImF1dG9QbGF5Q2xlYXIiLCJhdXRvUGxheUl0ZXJhdG9yIiwiY2hhbmdlU2xpZGUiLCJjbGlja0hhbmRsZXIiLCJzZWxlY3RIYW5kbGVyIiwic2V0UG9zaXRpb24iLCJzd2lwZUhhbmRsZXIiLCJkcmFnSGFuZGxlciIsImtleUhhbmRsZXIiLCJodG1sRXhwciIsInJlZ2lzdGVyQnJlYWtwb2ludHMiLCJpbml0IiwicHJvdG90eXBlIiwiYWN0aXZhdGVBREEiLCJmaW5kIiwiYXR0ciIsImFkZFNsaWRlIiwic2xpY2tBZGQiLCJtYXJrdXAiLCJpbmRleCIsImFkZEJlZm9yZSIsInVubG9hZCIsImxlbmd0aCIsImFwcGVuZFRvIiwiaW5zZXJ0QmVmb3JlIiwiZXEiLCJpbnNlcnRBZnRlciIsInByZXBlbmRUbyIsImNoaWxkcmVuIiwiZGV0YWNoIiwiYXBwZW5kIiwiZWFjaCIsInJlaW5pdCIsImFuaW1hdGVIZWlnaHQiLCJ0YXJnZXRIZWlnaHQiLCJvdXRlckhlaWdodCIsImFuaW1hdGUiLCJoZWlnaHQiLCJhbmltYXRlU2xpZGUiLCJ0YXJnZXRMZWZ0IiwiY2FsbGJhY2siLCJhbmltUHJvcHMiLCJsZWZ0IiwidG9wIiwiYW5pbVN0YXJ0IiwiZHVyYXRpb24iLCJzdGVwIiwibm93IiwiTWF0aCIsImNlaWwiLCJjb21wbGV0ZSIsImNhbGwiLCJhcHBseVRyYW5zaXRpb24iLCJzZXRUaW1lb3V0IiwiZGlzYWJsZVRyYW5zaXRpb24iLCJnZXROYXZUYXJnZXQiLCJub3QiLCJ0YXJnZXQiLCJzbGlkZUhhbmRsZXIiLCJ0cmFuc2l0aW9uIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwic2xpZGVUbyIsImJ1aWxkQXJyb3dzIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInJlbW92ZUF0dHIiLCJ0ZXN0IiwiYWRkIiwiYnVpbGREb3RzIiwiZG90IiwiZ2V0RG90Q291bnQiLCJmaXJzdCIsImJ1aWxkT3V0Iiwid3JhcEFsbCIsInBhcmVudCIsIndyYXAiLCJzZXR1cEluZmluaXRlIiwidXBkYXRlRG90cyIsInNldFNsaWRlQ2xhc3NlcyIsImJ1aWxkUm93cyIsImEiLCJiIiwiYyIsIm5ld1NsaWRlcyIsIm51bU9mU2xpZGVzIiwib3JpZ2luYWxTbGlkZXMiLCJzbGlkZXNQZXJTZWN0aW9uIiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJyb3ciLCJnZXQiLCJhcHBlbmRDaGlsZCIsImVtcHR5IiwiY2hlY2tSZXNwb25zaXZlIiwiaW5pdGlhbCIsImZvcmNlVXBkYXRlIiwiYnJlYWtwb2ludCIsInRhcmdldEJyZWFrcG9pbnQiLCJyZXNwb25kVG9XaWR0aCIsInRyaWdnZXJCcmVha3BvaW50Iiwic2xpZGVyV2lkdGgiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJtaW4iLCJoYXNPd25Qcm9wZXJ0eSIsInVuc2xpY2siLCJyZWZyZXNoIiwidHJpZ2dlciIsImV2ZW50IiwiZG9udEFuaW1hdGUiLCIkdGFyZ2V0IiwiY3VycmVudFRhcmdldCIsImluZGV4T2Zmc2V0IiwidW5ldmVuT2Zmc2V0IiwiaXMiLCJwcmV2ZW50RGVmYXVsdCIsImNsb3Nlc3QiLCJtZXNzYWdlIiwiY2hlY2tOYXZpZ2FibGUiLCJuYXZpZ2FibGVzIiwicHJldk5hdmlnYWJsZSIsImdldE5hdmlnYWJsZUluZGV4ZXMiLCJuIiwiY2xlYW5VcEV2ZW50cyIsIm9mZiIsImludGVycnVwdCIsInZpc2liaWxpdHkiLCJjbGVhblVwU2xpZGVFdmVudHMiLCJvcmllbnRhdGlvbkNoYW5nZSIsInJlc2l6ZSIsImNsZWFuVXBSb3dzIiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwic3RvcFByb3BhZ2F0aW9uIiwiZGVzdHJveSIsInJlbW92ZSIsImZhZGVTbGlkZSIsInNsaWRlSW5kZXgiLCJvcGFjaXR5IiwiZmFkZVNsaWRlT3V0IiwiZmlsdGVyU2xpZGVzIiwic2xpY2tGaWx0ZXIiLCJmaWx0ZXIiLCJmb2N1c0hhbmRsZXIiLCJvbiIsIiRzZiIsImdldEN1cnJlbnQiLCJzbGlja0N1cnJlbnRTbGlkZSIsImJyZWFrUG9pbnQiLCJjb3VudGVyIiwicGFnZXJRdHkiLCJnZXRMZWZ0IiwidmVydGljYWxIZWlnaHQiLCJ2ZXJ0aWNhbE9mZnNldCIsInRhcmdldFNsaWRlIiwiY29lZiIsImZsb29yIiwib2Zmc2V0TGVmdCIsIm91dGVyV2lkdGgiLCJnZXRPcHRpb24iLCJzbGlja0dldE9wdGlvbiIsIm9wdGlvbiIsImluZGV4ZXMiLCJtYXgiLCJwdXNoIiwiZ2V0U2xpY2siLCJnZXRTbGlkZUNvdW50Iiwic2xpZGVzVHJhdmVyc2VkIiwic3dpcGVkU2xpZGUiLCJjZW50ZXJPZmZzZXQiLCJhYnMiLCJnb1RvIiwic2xpY2tHb1RvIiwicGFyc2VJbnQiLCJjcmVhdGlvbiIsImhhc0NsYXNzIiwic2V0UHJvcHMiLCJzdGFydExvYWQiLCJsb2FkU2xpZGVyIiwiaW5pdGlhbGl6ZUV2ZW50cyIsInVwZGF0ZUFycm93cyIsImluaXRBREEiLCJudW1Eb3RHcm91cHMiLCJ0YWJDb250cm9sSW5kZXhlcyIsInZhbCIsInNsaWRlQ29udHJvbEluZGV4IiwiaW5kZXhPZiIsImFyaWFCdXR0b25Db250cm9sIiwibWFwcGVkU2xpZGVJbmRleCIsImVuZCIsImluaXRBcnJvd0V2ZW50cyIsImluaXREb3RFdmVudHMiLCJpbml0U2xpZGVFdmVudHMiLCJhY3Rpb24iLCJpbml0VUkiLCJzaG93IiwidGFnTmFtZSIsIm1hdGNoIiwia2V5Q29kZSIsImxvYWRSYW5nZSIsImNsb25lUmFuZ2UiLCJyYW5nZVN0YXJ0IiwicmFuZ2VFbmQiLCJsb2FkSW1hZ2VzIiwiaW1hZ2VzU2NvcGUiLCJpbWFnZSIsImltYWdlU291cmNlIiwiaW1hZ2VTcmNTZXQiLCJpbWFnZVNpemVzIiwiaW1hZ2VUb0xvYWQiLCJvbmxvYWQiLCJvbmVycm9yIiwic3JjIiwic2xpY2UiLCJwcmV2U2xpZGUiLCJuZXh0U2xpZGUiLCJwcm9ncmVzc2l2ZUxhenlMb2FkIiwibmV4dCIsInNsaWNrTmV4dCIsInBhdXNlIiwic2xpY2tQYXVzZSIsInBsYXkiLCJzbGlja1BsYXkiLCJwb3N0U2xpZGUiLCIkY3VycmVudFNsaWRlIiwiZm9jdXMiLCJwcmV2Iiwic2xpY2tQcmV2IiwidHJ5Q291bnQiLCIkaW1nc1RvTG9hZCIsImluaXRpYWxpemluZyIsImxhc3RWaXNpYmxlSW5kZXgiLCJjdXJyZW50QnJlYWtwb2ludCIsImwiLCJyZXNwb25zaXZlU2V0dGluZ3MiLCJ0eXBlIiwic3BsaWNlIiwic29ydCIsImNsZWFyVGltZW91dCIsIndpbmRvd0RlbGF5IiwicmVtb3ZlU2xpZGUiLCJzbGlja1JlbW92ZSIsInJlbW92ZUJlZm9yZSIsInJlbW92ZUFsbCIsInNldENTUyIsInBvc2l0aW9uIiwicG9zaXRpb25Qcm9wcyIsIngiLCJ5Iiwic2V0RGltZW5zaW9ucyIsInBhZGRpbmciLCJvZmZzZXQiLCJzZXRGYWRlIiwicmlnaHQiLCJzZXRIZWlnaHQiLCJzZXRPcHRpb24iLCJzbGlja1NldE9wdGlvbiIsIml0ZW0iLCJ2YWx1ZSIsImFyZ3VtZW50cyIsIm9wdCIsImJvZHlTdHlsZSIsImJvZHkiLCJzdHlsZSIsIldlYmtpdFRyYW5zaXRpb24iLCJ1bmRlZmluZWQiLCJNb3pUcmFuc2l0aW9uIiwibXNUcmFuc2l0aW9uIiwiT1RyYW5zZm9ybSIsInBlcnNwZWN0aXZlUHJvcGVydHkiLCJ3ZWJraXRQZXJzcGVjdGl2ZSIsIk1velRyYW5zZm9ybSIsIk1velBlcnNwZWN0aXZlIiwid2Via2l0VHJhbnNmb3JtIiwibXNUcmFuc2Zvcm0iLCJ0cmFuc2Zvcm0iLCJhbGxTbGlkZXMiLCJyZW1haW5kZXIiLCJldmVuQ29lZiIsImluZmluaXRlQ291bnQiLCJjbG9uZSIsInRvZ2dsZSIsInRhcmdldEVsZW1lbnQiLCJwYXJlbnRzIiwic3luYyIsImFuaW1TbGlkZSIsIm9sZFNsaWRlIiwic2xpZGVMZWZ0IiwibmF2VGFyZ2V0IiwiaGlkZSIsInN3aXBlRGlyZWN0aW9uIiwieERpc3QiLCJ5RGlzdCIsInIiLCJzd2lwZUFuZ2xlIiwic3RhcnRYIiwiY3VyWCIsInN0YXJ0WSIsImN1clkiLCJhdGFuMiIsInJvdW5kIiwiUEkiLCJzd2lwZUVuZCIsInN3aXBlTGVuZ3RoIiwiZWRnZUhpdCIsIm1pblN3aXBlIiwiZmluZ2VyQ291bnQiLCJvcmlnaW5hbEV2ZW50IiwidG91Y2hlcyIsInN3aXBlU3RhcnQiLCJzd2lwZU1vdmUiLCJlZGdlV2FzSGl0IiwiY3VyTGVmdCIsInBvc2l0aW9uT2Zmc2V0IiwidmVydGljYWxTd2lwZUxlbmd0aCIsInBhZ2VYIiwiY2xpZW50WCIsInBhZ2VZIiwiY2xpZW50WSIsInNxcnQiLCJwb3ciLCJ1bmZpbHRlclNsaWRlcyIsInNsaWNrVW5maWx0ZXIiLCJmcm9tQnJlYWtwb2ludCIsImZuIiwiYXJncyIsIkFycmF5IiwicmV0IiwiYXBwbHkiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosRTs7Ozs7Ozs7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c0JsSyxJQUF0QixDQUEyQmdOLFNBQTNCLEVBQXNDLENBQXRDLENBRlg7QUFBQSxRQUdJMUIsQ0FBQyxHQUFHOVUsQ0FBQyxDQUFDMkgsTUFIVjtBQUFBLFFBSUk1RyxDQUpKO0FBQUEsUUFLSTZaLEdBTEo7O0FBTUEsU0FBSzdaLENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBRytULENBQWhCLEVBQW1CL1QsQ0FBQyxFQUFwQixFQUF3QjtBQUNwQixVQUFJLFFBQU8wVixHQUFQLEtBQWMsUUFBZCxJQUEwQixPQUFPQSxHQUFQLElBQWMsV0FBNUMsRUFDSXpXLENBQUMsQ0FBQ2UsQ0FBRCxDQUFELENBQUtoQyxLQUFMLEdBQWEsSUFBSWEsS0FBSixDQUFVSSxDQUFDLENBQUNlLENBQUQsQ0FBWCxFQUFnQjBWLEdBQWhCLENBQWIsQ0FESixLQUdJbUUsR0FBRyxHQUFHNWEsQ0FBQyxDQUFDZSxDQUFELENBQUQsQ0FBS2hDLEtBQUwsQ0FBVzBYLEdBQVgsRUFBZ0JvRSxLQUFoQixDQUFzQjdhLENBQUMsQ0FBQ2UsQ0FBRCxDQUFELENBQUtoQyxLQUEzQixFQUFrQzJiLElBQWxDLENBQU47QUFDSixVQUFJLE9BQU9FLEdBQVAsSUFBYyxXQUFsQixFQUErQixPQUFPQSxHQUFQO0FBQ2xDOztBQUNELFdBQU81YSxDQUFQO0FBQ0gsR0FmRDtBQWlCSCxDQWo3RkMsQ0FBRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCRCx3QiIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIvLyBidW5kbGUuanNcclxuaW1wb3J0IFwiLi9jb21wb25lbnRzL2Jhbm5lclwiO1xyXG5pbXBvcnQgXCIuL2NvbXBvbmVudHMvc2xpY2stY2Fyb3VzZWxcIjtcclxuXHJcbmNvbnNvbGUubG9nKFwiYnVuZGxlXCIpO1xyXG4iLCIvLyBCYW5uZXIuanNcclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuXHJcbiQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcbiAgY29uc3Qgd1Njcm9sbCA9ICQodGhpcykuc2Nyb2xsVG9wKCk7XHJcbiAgJCgnLmJhbm5lcl9fY29udGVudCcpLmNzcyh7XHJcbiAgICAndHJhbnNmb3JtJyA6ICd0cmFuc2xhdGUzZCgwcHgsICcrIHdTY3JvbGwgLzMwICsnJSwgMHB4KSdcclxuICB9KTtcclxufSkiLCIvLyBzbGlkZXIuanNcclxuaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xyXG5pbXBvcnQgXCIuL3NsaWNrXCI7XHJcblxyXG4kKFwiLnRlc3RpbW9uaWFsLXNsaWNrXCIpLnNsaWNrKHtcclxuICBmYWRlOiBmYWxzZSxcclxuICBhcnJvd3M6IGZhbHNlLFxyXG4gIGRvdHM6IHRydWUsXHJcbiAgaW5maW5pdGU6IHRydWUsXHJcbiAgc2xpZGVzVG9TaG93OiAxLFxyXG4gIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gIHNwZWVkOiAzMDAwLFxyXG4gIGF1dG9wbGF5OiB0cnVlLFxyXG4gIGF1dG9wbGF5U3BlZWQ6IDMwMDAsXHJcbiAgdXNlVHJhbnNmb3JtOiB0cnVlXHJcbn0pO1xyXG4iLCIvKlxuICAgICBfIF8gICAgICBfICAgICAgIF9cbiBfX198IChfKSBfX198IHwgX18gIChfKV9fX1xuLyBfX3wgfCB8LyBfX3wgfC8gLyAgfCAvIF9ffFxuXFxfXyBcXCB8IHwgKF9ffCAgIDwgXyB8IFxcX18gXFxcbnxfX18vX3xffFxcX19ffF98XFxfKF8pLyB8X19fL1xuICAgICAgICAgICAgICAgICAgIHxfXy9cblxuIFZlcnNpb246IDEuOC4xXG4gIEF1dGhvcjogS2VuIFdoZWVsZXJcbiBXZWJzaXRlOiBodHRwOi8va2Vud2hlZWxlci5naXRodWIuaW9cbiAgICBEb2NzOiBodHRwOi8va2Vud2hlZWxlci5naXRodWIuaW8vc2xpY2tcbiAgICBSZXBvOiBodHRwOi8vZ2l0aHViLmNvbS9rZW53aGVlbGVyL3NsaWNrXG4gIElzc3VlczogaHR0cDovL2dpdGh1Yi5jb20va2Vud2hlZWxlci9zbGljay9pc3N1ZXNcblxuICovXG4vKiBnbG9iYWwgd2luZG93LCBkb2N1bWVudCwgZGVmaW5lLCBqUXVlcnksIHNldEludGVydmFsLCBjbGVhckludGVydmFsICovXG47KGZ1bmN0aW9uKGZhY3RvcnkpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICBkZWZpbmUoWydqcXVlcnknXSwgZmFjdG9yeSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoJ2pxdWVyeScpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBmYWN0b3J5KGpRdWVyeSk7XG4gICAgfVxuXG59KGZ1bmN0aW9uKCQpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgdmFyIFNsaWNrID0gd2luZG93LlNsaWNrIHx8IHt9O1xuXG4gICAgU2xpY2sgPSAoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIGluc3RhbmNlVWlkID0gMDtcblxuICAgICAgICBmdW5jdGlvbiBTbGljayhlbGVtZW50LCBzZXR0aW5ncykge1xuXG4gICAgICAgICAgICB2YXIgXyA9IHRoaXMsIGRhdGFTZXR0aW5ncztcblxuICAgICAgICAgICAgXy5kZWZhdWx0cyA9IHtcbiAgICAgICAgICAgICAgICBhY2Nlc3NpYmlsaXR5OiB0cnVlLFxuICAgICAgICAgICAgICAgIGFkYXB0aXZlSGVpZ2h0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBhcHBlbmRBcnJvd3M6ICQoZWxlbWVudCksXG4gICAgICAgICAgICAgICAgYXBwZW5kRG90czogJChlbGVtZW50KSxcbiAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXG4gICAgICAgICAgICAgICAgYXNOYXZGb3I6IG51bGwsXG4gICAgICAgICAgICAgICAgcHJldkFycm93OiAnPGJ1dHRvbiBjbGFzcz1cInNsaWNrLXByZXZcIiBhcmlhLWxhYmVsPVwiUHJldmlvdXNcIiB0eXBlPVwiYnV0dG9uXCI+UHJldmlvdXM8L2J1dHRvbj4nLFxuICAgICAgICAgICAgICAgIG5leHRBcnJvdzogJzxidXR0b24gY2xhc3M9XCJzbGljay1uZXh0XCIgYXJpYS1sYWJlbD1cIk5leHRcIiB0eXBlPVwiYnV0dG9uXCI+TmV4dDwvYnV0dG9uPicsXG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDMwMDAsXG4gICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogJzUwcHgnLFxuICAgICAgICAgICAgICAgIGNzc0Vhc2U6ICdlYXNlJyxcbiAgICAgICAgICAgICAgICBjdXN0b21QYWdpbmc6IGZ1bmN0aW9uKHNsaWRlciwgaSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJCgnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgLz4nKS50ZXh0KGkgKyAxKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRvdHNDbGFzczogJ3NsaWNrLWRvdHMnLFxuICAgICAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBlYXNpbmc6ICdsaW5lYXInLFxuICAgICAgICAgICAgICAgIGVkZ2VGcmljdGlvbjogMC4zNSxcbiAgICAgICAgICAgICAgICBmYWRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBmb2N1c09uU2VsZWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBmb2N1c09uQ2hhbmdlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpbml0aWFsU2xpZGU6IDAsXG4gICAgICAgICAgICAgICAgbGF6eUxvYWQ6ICdvbmRlbWFuZCcsXG4gICAgICAgICAgICAgICAgbW9iaWxlRmlyc3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBwYXVzZU9uRm9jdXM6IHRydWUsXG4gICAgICAgICAgICAgICAgcGF1c2VPbkRvdHNIb3ZlcjogZmFsc2UsXG4gICAgICAgICAgICAgICAgcmVzcG9uZFRvOiAnd2luZG93JyxcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBudWxsLFxuICAgICAgICAgICAgICAgIHJvd3M6IDEsXG4gICAgICAgICAgICAgICAgcnRsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzbGlkZTogJycsXG4gICAgICAgICAgICAgICAgc2xpZGVzUGVyUm93OiAxLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICBzcGVlZDogNTAwLFxuICAgICAgICAgICAgICAgIHN3aXBlOiB0cnVlLFxuICAgICAgICAgICAgICAgIHN3aXBlVG9TbGlkZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgdG91Y2hNb3ZlOiB0cnVlLFxuICAgICAgICAgICAgICAgIHRvdWNoVGhyZXNob2xkOiA1LFxuICAgICAgICAgICAgICAgIHVzZUNTUzogdHJ1ZSxcbiAgICAgICAgICAgICAgICB1c2VUcmFuc2Zvcm06IHRydWUsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVXaWR0aDogZmFsc2UsXG4gICAgICAgICAgICAgICAgdmVydGljYWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHZlcnRpY2FsU3dpcGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgd2FpdEZvckFuaW1hdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgekluZGV4OiAxMDAwXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBfLmluaXRpYWxzID0ge1xuICAgICAgICAgICAgICAgIGFuaW1hdGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgZHJhZ2dpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGF1dG9QbGF5VGltZXI6IG51bGwsXG4gICAgICAgICAgICAgICAgY3VycmVudERpcmVjdGlvbjogMCxcbiAgICAgICAgICAgICAgICBjdXJyZW50TGVmdDogbnVsbCxcbiAgICAgICAgICAgICAgICBjdXJyZW50U2xpZGU6IDAsXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAxLFxuICAgICAgICAgICAgICAgICRkb3RzOiBudWxsLFxuICAgICAgICAgICAgICAgIGxpc3RXaWR0aDogbnVsbCxcbiAgICAgICAgICAgICAgICBsaXN0SGVpZ2h0OiBudWxsLFxuICAgICAgICAgICAgICAgIGxvYWRJbmRleDogMCxcbiAgICAgICAgICAgICAgICAkbmV4dEFycm93OiBudWxsLFxuICAgICAgICAgICAgICAgICRwcmV2QXJyb3c6IG51bGwsXG4gICAgICAgICAgICAgICAgc2Nyb2xsaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzbGlkZUNvdW50OiBudWxsLFxuICAgICAgICAgICAgICAgIHNsaWRlV2lkdGg6IG51bGwsXG4gICAgICAgICAgICAgICAgJHNsaWRlVHJhY2s6IG51bGwsXG4gICAgICAgICAgICAgICAgJHNsaWRlczogbnVsbCxcbiAgICAgICAgICAgICAgICBzbGlkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzbGlkZU9mZnNldDogMCxcbiAgICAgICAgICAgICAgICBzd2lwZUxlZnQ6IG51bGwsXG4gICAgICAgICAgICAgICAgc3dpcGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgJGxpc3Q6IG51bGwsXG4gICAgICAgICAgICAgICAgdG91Y2hPYmplY3Q6IHt9LFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybXNFbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB1bnNsaWNrZWQ6IGZhbHNlXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAkLmV4dGVuZChfLCBfLmluaXRpYWxzKTtcblxuICAgICAgICAgICAgXy5hY3RpdmVCcmVha3BvaW50ID0gbnVsbDtcbiAgICAgICAgICAgIF8uYW5pbVR5cGUgPSBudWxsO1xuICAgICAgICAgICAgXy5hbmltUHJvcCA9IG51bGw7XG4gICAgICAgICAgICBfLmJyZWFrcG9pbnRzID0gW107XG4gICAgICAgICAgICBfLmJyZWFrcG9pbnRTZXR0aW5ncyA9IFtdO1xuICAgICAgICAgICAgXy5jc3NUcmFuc2l0aW9ucyA9IGZhbHNlO1xuICAgICAgICAgICAgXy5mb2N1c3NlZCA9IGZhbHNlO1xuICAgICAgICAgICAgXy5pbnRlcnJ1cHRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgXy5oaWRkZW4gPSAnaGlkZGVuJztcbiAgICAgICAgICAgIF8ucGF1c2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIF8ucG9zaXRpb25Qcm9wID0gbnVsbDtcbiAgICAgICAgICAgIF8ucmVzcG9uZFRvID0gbnVsbDtcbiAgICAgICAgICAgIF8ucm93Q291bnQgPSAxO1xuICAgICAgICAgICAgXy5zaG91bGRDbGljayA9IHRydWU7XG4gICAgICAgICAgICBfLiRzbGlkZXIgPSAkKGVsZW1lbnQpO1xuICAgICAgICAgICAgXy4kc2xpZGVzQ2FjaGUgPSBudWxsO1xuICAgICAgICAgICAgXy50cmFuc2Zvcm1UeXBlID0gbnVsbDtcbiAgICAgICAgICAgIF8udHJhbnNpdGlvblR5cGUgPSBudWxsO1xuICAgICAgICAgICAgXy52aXNpYmlsaXR5Q2hhbmdlID0gJ3Zpc2liaWxpdHljaGFuZ2UnO1xuICAgICAgICAgICAgXy53aW5kb3dXaWR0aCA9IDA7XG4gICAgICAgICAgICBfLndpbmRvd1RpbWVyID0gbnVsbDtcblxuICAgICAgICAgICAgZGF0YVNldHRpbmdzID0gJChlbGVtZW50KS5kYXRhKCdzbGljaycpIHx8IHt9O1xuXG4gICAgICAgICAgICBfLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgXy5kZWZhdWx0cywgc2V0dGluZ3MsIGRhdGFTZXR0aW5ncyk7XG5cbiAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gXy5vcHRpb25zLmluaXRpYWxTbGlkZTtcblxuICAgICAgICAgICAgXy5vcmlnaW5hbFNldHRpbmdzID0gXy5vcHRpb25zO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGRvY3VtZW50Lm1vekhpZGRlbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBfLmhpZGRlbiA9ICdtb3pIaWRkZW4nO1xuICAgICAgICAgICAgICAgIF8udmlzaWJpbGl0eUNoYW5nZSA9ICdtb3p2aXNpYmlsaXR5Y2hhbmdlJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGRvY3VtZW50LndlYmtpdEhpZGRlbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBfLmhpZGRlbiA9ICd3ZWJraXRIaWRkZW4nO1xuICAgICAgICAgICAgICAgIF8udmlzaWJpbGl0eUNoYW5nZSA9ICd3ZWJraXR2aXNpYmlsaXR5Y2hhbmdlJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXy5hdXRvUGxheSA9ICQucHJveHkoXy5hdXRvUGxheSwgXyk7XG4gICAgICAgICAgICBfLmF1dG9QbGF5Q2xlYXIgPSAkLnByb3h5KF8uYXV0b1BsYXlDbGVhciwgXyk7XG4gICAgICAgICAgICBfLmF1dG9QbGF5SXRlcmF0b3IgPSAkLnByb3h5KF8uYXV0b1BsYXlJdGVyYXRvciwgXyk7XG4gICAgICAgICAgICBfLmNoYW5nZVNsaWRlID0gJC5wcm94eShfLmNoYW5nZVNsaWRlLCBfKTtcbiAgICAgICAgICAgIF8uY2xpY2tIYW5kbGVyID0gJC5wcm94eShfLmNsaWNrSGFuZGxlciwgXyk7XG4gICAgICAgICAgICBfLnNlbGVjdEhhbmRsZXIgPSAkLnByb3h5KF8uc2VsZWN0SGFuZGxlciwgXyk7XG4gICAgICAgICAgICBfLnNldFBvc2l0aW9uID0gJC5wcm94eShfLnNldFBvc2l0aW9uLCBfKTtcbiAgICAgICAgICAgIF8uc3dpcGVIYW5kbGVyID0gJC5wcm94eShfLnN3aXBlSGFuZGxlciwgXyk7XG4gICAgICAgICAgICBfLmRyYWdIYW5kbGVyID0gJC5wcm94eShfLmRyYWdIYW5kbGVyLCBfKTtcbiAgICAgICAgICAgIF8ua2V5SGFuZGxlciA9ICQucHJveHkoXy5rZXlIYW5kbGVyLCBfKTtcblxuICAgICAgICAgICAgXy5pbnN0YW5jZVVpZCA9IGluc3RhbmNlVWlkKys7XG5cbiAgICAgICAgICAgIC8vIEEgc2ltcGxlIHdheSB0byBjaGVjayBmb3IgSFRNTCBzdHJpbmdzXG4gICAgICAgICAgICAvLyBTdHJpY3QgSFRNTCByZWNvZ25pdGlvbiAobXVzdCBzdGFydCB3aXRoIDwpXG4gICAgICAgICAgICAvLyBFeHRyYWN0ZWQgZnJvbSBqUXVlcnkgdjEuMTEgc291cmNlXG4gICAgICAgICAgICBfLmh0bWxFeHByID0gL14oPzpcXHMqKDxbXFx3XFxXXSs+KVtePl0qKSQvO1xuXG5cbiAgICAgICAgICAgIF8ucmVnaXN0ZXJCcmVha3BvaW50cygpO1xuICAgICAgICAgICAgXy5pbml0KHRydWUpO1xuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gU2xpY2s7XG5cbiAgICB9KCkpO1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmFjdGl2YXRlQURBID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLiRzbGlkZVRyYWNrLmZpbmQoJy5zbGljay1hY3RpdmUnKS5hdHRyKHtcbiAgICAgICAgICAgICdhcmlhLWhpZGRlbic6ICdmYWxzZSdcbiAgICAgICAgfSkuZmluZCgnYSwgaW5wdXQsIGJ1dHRvbiwgc2VsZWN0JykuYXR0cih7XG4gICAgICAgICAgICAndGFiaW5kZXgnOiAnMCdcbiAgICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmFkZFNsaWRlID0gU2xpY2sucHJvdG90eXBlLnNsaWNrQWRkID0gZnVuY3Rpb24obWFya3VwLCBpbmRleCwgYWRkQmVmb3JlKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmICh0eXBlb2YoaW5kZXgpID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgIGFkZEJlZm9yZSA9IGluZGV4O1xuICAgICAgICAgICAgaW5kZXggPSBudWxsO1xuICAgICAgICB9IGVsc2UgaWYgKGluZGV4IDwgMCB8fCAoaW5kZXggPj0gXy5zbGlkZUNvdW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgXy51bmxvYWQoKTtcblxuICAgICAgICBpZiAodHlwZW9mKGluZGV4KSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCAmJiBfLiRzbGlkZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgJChtYXJrdXApLmFwcGVuZFRvKF8uJHNsaWRlVHJhY2spO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChhZGRCZWZvcmUpIHtcbiAgICAgICAgICAgICAgICAkKG1hcmt1cCkuaW5zZXJ0QmVmb3JlKF8uJHNsaWRlcy5lcShpbmRleCkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKG1hcmt1cCkuaW5zZXJ0QWZ0ZXIoXy4kc2xpZGVzLmVxKGluZGV4KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoYWRkQmVmb3JlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgJChtYXJrdXApLnByZXBlbmRUbyhfLiRzbGlkZVRyYWNrKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChtYXJrdXApLmFwcGVuZFRvKF8uJHNsaWRlVHJhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgXy4kc2xpZGVzID0gXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpO1xuXG4gICAgICAgIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKS5kZXRhY2goKTtcblxuICAgICAgICBfLiRzbGlkZVRyYWNrLmFwcGVuZChfLiRzbGlkZXMpO1xuXG4gICAgICAgIF8uJHNsaWRlcy5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbGVtZW50KSB7XG4gICAgICAgICAgICAkKGVsZW1lbnQpLmF0dHIoJ2RhdGEtc2xpY2staW5kZXgnLCBpbmRleCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIF8uJHNsaWRlc0NhY2hlID0gXy4kc2xpZGVzO1xuXG4gICAgICAgIF8ucmVpbml0KCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmFuaW1hdGVIZWlnaHQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuICAgICAgICBpZiAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA9PT0gMSAmJiBfLm9wdGlvbnMuYWRhcHRpdmVIZWlnaHQgPT09IHRydWUgJiYgXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdmFyIHRhcmdldEhlaWdodCA9IF8uJHNsaWRlcy5lcShfLmN1cnJlbnRTbGlkZSkub3V0ZXJIZWlnaHQodHJ1ZSk7XG4gICAgICAgICAgICBfLiRsaXN0LmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIGhlaWdodDogdGFyZ2V0SGVpZ2h0XG4gICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hbmltYXRlU2xpZGUgPSBmdW5jdGlvbih0YXJnZXRMZWZ0LCBjYWxsYmFjaykge1xuXG4gICAgICAgIHZhciBhbmltUHJvcHMgPSB7fSxcbiAgICAgICAgICAgIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uYW5pbWF0ZUhlaWdodCgpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMucnRsID09PSB0cnVlICYmIF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRhcmdldExlZnQgPSAtdGFyZ2V0TGVmdDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXy50cmFuc2Zvcm1zRW5hYmxlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogdGFyZ2V0TGVmdFxuICAgICAgICAgICAgICAgIH0sIF8ub3B0aW9ucy5zcGVlZCwgXy5vcHRpb25zLmVhc2luZywgY2FsbGJhY2spO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICB0b3A6IHRhcmdldExlZnRcbiAgICAgICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQsIF8ub3B0aW9ucy5lYXNpbmcsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBpZiAoXy5jc3NUcmFuc2l0aW9ucyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnRMZWZ0ID0gLShfLmN1cnJlbnRMZWZ0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJCh7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1TdGFydDogXy5jdXJyZW50TGVmdFxuICAgICAgICAgICAgICAgIH0pLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICBhbmltU3RhcnQ6IHRhcmdldExlZnRcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBfLm9wdGlvbnMuc3BlZWQsXG4gICAgICAgICAgICAgICAgICAgIGVhc2luZzogXy5vcHRpb25zLmVhc2luZyxcbiAgICAgICAgICAgICAgICAgICAgc3RlcDogZnVuY3Rpb24obm93KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3cgPSBNYXRoLmNlaWwobm93KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbVByb3BzW18uYW5pbVR5cGVdID0gJ3RyYW5zbGF0ZSgnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm93ICsgJ3B4LCAwcHgpJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyhhbmltUHJvcHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltUHJvcHNbXy5hbmltVHlwZV0gPSAndHJhbnNsYXRlKDBweCwnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm93ICsgJ3B4KSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3MoYW5pbVByb3BzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICBfLmFwcGx5VHJhbnNpdGlvbigpO1xuICAgICAgICAgICAgICAgIHRhcmdldExlZnQgPSBNYXRoLmNlaWwodGFyZ2V0TGVmdCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICBhbmltUHJvcHNbXy5hbmltVHlwZV0gPSAndHJhbnNsYXRlM2QoJyArIHRhcmdldExlZnQgKyAncHgsIDBweCwgMHB4KSc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbVByb3BzW18uYW5pbVR5cGVdID0gJ3RyYW5zbGF0ZTNkKDBweCwnICsgdGFyZ2V0TGVmdCArICdweCwgMHB4KSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKGFuaW1Qcm9wcyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgXy5kaXNhYmxlVHJhbnNpdGlvbigpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIF8ub3B0aW9ucy5zcGVlZCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXROYXZUYXJnZXQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBhc05hdkZvciA9IF8ub3B0aW9ucy5hc05hdkZvcjtcblxuICAgICAgICBpZiAoIGFzTmF2Rm9yICYmIGFzTmF2Rm9yICE9PSBudWxsICkge1xuICAgICAgICAgICAgYXNOYXZGb3IgPSAkKGFzTmF2Rm9yKS5ub3QoXy4kc2xpZGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhc05hdkZvcjtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYXNOYXZGb3IgPSBmdW5jdGlvbihpbmRleCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGFzTmF2Rm9yID0gXy5nZXROYXZUYXJnZXQoKTtcblxuICAgICAgICBpZiAoIGFzTmF2Rm9yICE9PSBudWxsICYmIHR5cGVvZiBhc05hdkZvciA9PT0gJ29iamVjdCcgKSB7XG4gICAgICAgICAgICBhc05hdkZvci5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSAkKHRoaXMpLnNsaWNrKCdnZXRTbGljaycpO1xuICAgICAgICAgICAgICAgIGlmKCF0YXJnZXQudW5zbGlja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5zbGlkZUhhbmRsZXIoaW5kZXgsIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmFwcGx5VHJhbnNpdGlvbiA9IGZ1bmN0aW9uKHNsaWRlKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgdHJhbnNpdGlvbiA9IHt9O1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb25bXy50cmFuc2l0aW9uVHlwZV0gPSBfLnRyYW5zZm9ybVR5cGUgKyAnICcgKyBfLm9wdGlvbnMuc3BlZWQgKyAnbXMgJyArIF8ub3B0aW9ucy5jc3NFYXNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdHJhbnNpdGlvbltfLnRyYW5zaXRpb25UeXBlXSA9ICdvcGFjaXR5ICcgKyBfLm9wdGlvbnMuc3BlZWQgKyAnbXMgJyArIF8ub3B0aW9ucy5jc3NFYXNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3ModHJhbnNpdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGUpLmNzcyh0cmFuc2l0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hdXRvUGxheSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLmF1dG9QbGF5Q2xlYXIoKTtcblxuICAgICAgICBpZiAoIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKSB7XG4gICAgICAgICAgICBfLmF1dG9QbGF5VGltZXIgPSBzZXRJbnRlcnZhbCggXy5hdXRvUGxheUl0ZXJhdG9yLCBfLm9wdGlvbnMuYXV0b3BsYXlTcGVlZCApO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmF1dG9QbGF5Q2xlYXIgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8uYXV0b1BsYXlUaW1lcikge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChfLmF1dG9QbGF5VGltZXIpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmF1dG9QbGF5SXRlcmF0b3IgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBzbGlkZVRvID0gXy5jdXJyZW50U2xpZGUgKyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG5cbiAgICAgICAgaWYgKCAhXy5wYXVzZWQgJiYgIV8uaW50ZXJydXB0ZWQgJiYgIV8uZm9jdXNzZWQgKSB7XG5cbiAgICAgICAgICAgIGlmICggXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSApIHtcblxuICAgICAgICAgICAgICAgIGlmICggXy5kaXJlY3Rpb24gPT09IDEgJiYgKCBfLmN1cnJlbnRTbGlkZSArIDEgKSA9PT0gKCBfLnNsaWRlQ291bnQgLSAxICkpIHtcbiAgICAgICAgICAgICAgICAgICAgXy5kaXJlY3Rpb24gPSAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCBfLmRpcmVjdGlvbiA9PT0gMCApIHtcblxuICAgICAgICAgICAgICAgICAgICBzbGlkZVRvID0gXy5jdXJyZW50U2xpZGUgLSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCBfLmN1cnJlbnRTbGlkZSAtIDEgPT09IDAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLmRpcmVjdGlvbiA9IDE7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfLnNsaWRlSGFuZGxlciggc2xpZGVUbyApO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYnVpbGRBcnJvd3MgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hcnJvd3MgPT09IHRydWUgKSB7XG5cbiAgICAgICAgICAgIF8uJHByZXZBcnJvdyA9ICQoXy5vcHRpb25zLnByZXZBcnJvdykuYWRkQ2xhc3MoJ3NsaWNrLWFycm93Jyk7XG4gICAgICAgICAgICBfLiRuZXh0QXJyb3cgPSAkKF8ub3B0aW9ucy5uZXh0QXJyb3cpLmFkZENsYXNzKCdzbGljay1hcnJvdycpO1xuXG4gICAgICAgICAgICBpZiggXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyApIHtcblxuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2staGlkZGVuJykucmVtb3ZlQXR0cignYXJpYS1oaWRkZW4gdGFiaW5kZXgnKTtcbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cucmVtb3ZlQ2xhc3MoJ3NsaWNrLWhpZGRlbicpLnJlbW92ZUF0dHIoJ2FyaWEtaGlkZGVuIHRhYmluZGV4Jyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoXy5odG1sRXhwci50ZXN0KF8ub3B0aW9ucy5wcmV2QXJyb3cpKSB7XG4gICAgICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5wcmVwZW5kVG8oXy5vcHRpb25zLmFwcGVuZEFycm93cyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKF8uaHRtbEV4cHIudGVzdChfLm9wdGlvbnMubmV4dEFycm93KSkge1xuICAgICAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cuYXBwZW5kVG8oXy5vcHRpb25zLmFwcGVuZEFycm93cyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3dcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stZGlzYWJsZWQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAndHJ1ZScpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5hZGQoIF8uJG5leHRBcnJvdyApXG5cbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1oaWRkZW4nKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cih7XG4gICAgICAgICAgICAgICAgICAgICAgICAnYXJpYS1kaXNhYmxlZCc6ICd0cnVlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICd0YWJpbmRleCc6ICctMSdcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmJ1aWxkRG90cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGksIGRvdDtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmRvdHMgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICBfLiRzbGlkZXIuYWRkQ2xhc3MoJ3NsaWNrLWRvdHRlZCcpO1xuXG4gICAgICAgICAgICBkb3QgPSAkKCc8dWwgLz4nKS5hZGRDbGFzcyhfLm9wdGlvbnMuZG90c0NsYXNzKTtcblxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8PSBfLmdldERvdENvdW50KCk7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGRvdC5hcHBlbmQoJCgnPGxpIC8+JykuYXBwZW5kKF8ub3B0aW9ucy5jdXN0b21QYWdpbmcuY2FsbCh0aGlzLCBfLCBpKSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfLiRkb3RzID0gZG90LmFwcGVuZFRvKF8ub3B0aW9ucy5hcHBlbmREb3RzKTtcblxuICAgICAgICAgICAgXy4kZG90cy5maW5kKCdsaScpLmZpcnN0KCkuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYnVpbGRPdXQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy4kc2xpZGVzID1cbiAgICAgICAgICAgIF8uJHNsaWRlclxuICAgICAgICAgICAgICAgIC5jaGlsZHJlbiggXy5vcHRpb25zLnNsaWRlICsgJzpub3QoLnNsaWNrLWNsb25lZCknKVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stc2xpZGUnKTtcblxuICAgICAgICBfLnNsaWRlQ291bnQgPSBfLiRzbGlkZXMubGVuZ3RoO1xuXG4gICAgICAgIF8uJHNsaWRlcy5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbGVtZW50KSB7XG4gICAgICAgICAgICAkKGVsZW1lbnQpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtc2xpY2staW5kZXgnLCBpbmRleClcbiAgICAgICAgICAgICAgICAuZGF0YSgnb3JpZ2luYWxTdHlsaW5nJywgJChlbGVtZW50KS5hdHRyKCdzdHlsZScpIHx8ICcnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgXy4kc2xpZGVyLmFkZENsYXNzKCdzbGljay1zbGlkZXInKTtcblxuICAgICAgICBfLiRzbGlkZVRyYWNrID0gKF8uc2xpZGVDb3VudCA9PT0gMCkgP1xuICAgICAgICAgICAgJCgnPGRpdiBjbGFzcz1cInNsaWNrLXRyYWNrXCIvPicpLmFwcGVuZFRvKF8uJHNsaWRlcikgOlxuICAgICAgICAgICAgXy4kc2xpZGVzLndyYXBBbGwoJzxkaXYgY2xhc3M9XCJzbGljay10cmFja1wiLz4nKS5wYXJlbnQoKTtcblxuICAgICAgICBfLiRsaXN0ID0gXy4kc2xpZGVUcmFjay53cmFwKFxuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJzbGljay1saXN0XCIvPicpLnBhcmVudCgpO1xuICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcygnb3BhY2l0eScsIDApO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSB8fCBfLm9wdGlvbnMuc3dpcGVUb1NsaWRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgJCgnaW1nW2RhdGEtbGF6eV0nLCBfLiRzbGlkZXIpLm5vdCgnW3NyY10nKS5hZGRDbGFzcygnc2xpY2stbG9hZGluZycpO1xuXG4gICAgICAgIF8uc2V0dXBJbmZpbml0ZSgpO1xuXG4gICAgICAgIF8uYnVpbGRBcnJvd3MoKTtcblxuICAgICAgICBfLmJ1aWxkRG90cygpO1xuXG4gICAgICAgIF8udXBkYXRlRG90cygpO1xuXG5cbiAgICAgICAgXy5zZXRTbGlkZUNsYXNzZXModHlwZW9mIF8uY3VycmVudFNsaWRlID09PSAnbnVtYmVyJyA/IF8uY3VycmVudFNsaWRlIDogMCk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5kcmFnZ2FibGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uJGxpc3QuYWRkQ2xhc3MoJ2RyYWdnYWJsZScpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmJ1aWxkUm93cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcywgYSwgYiwgYywgbmV3U2xpZGVzLCBudW1PZlNsaWRlcywgb3JpZ2luYWxTbGlkZXMsc2xpZGVzUGVyU2VjdGlvbjtcblxuICAgICAgICBuZXdTbGlkZXMgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICAgIG9yaWdpbmFsU2xpZGVzID0gXy4kc2xpZGVyLmNoaWxkcmVuKCk7XG5cbiAgICAgICAgaWYoXy5vcHRpb25zLnJvd3MgPiAwKSB7XG5cbiAgICAgICAgICAgIHNsaWRlc1BlclNlY3Rpb24gPSBfLm9wdGlvbnMuc2xpZGVzUGVyUm93ICogXy5vcHRpb25zLnJvd3M7XG4gICAgICAgICAgICBudW1PZlNsaWRlcyA9IE1hdGguY2VpbChcbiAgICAgICAgICAgICAgICBvcmlnaW5hbFNsaWRlcy5sZW5ndGggLyBzbGlkZXNQZXJTZWN0aW9uXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBmb3IoYSA9IDA7IGEgPCBudW1PZlNsaWRlczsgYSsrKXtcbiAgICAgICAgICAgICAgICB2YXIgc2xpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBmb3IoYiA9IDA7IGIgPCBfLm9wdGlvbnMucm93czsgYisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yKGMgPSAwOyBjIDwgXy5vcHRpb25zLnNsaWRlc1BlclJvdzsgYysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gKGEgKiBzbGlkZXNQZXJTZWN0aW9uICsgKChiICogXy5vcHRpb25zLnNsaWRlc1BlclJvdykgKyBjKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3JpZ2luYWxTbGlkZXMuZ2V0KHRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQob3JpZ2luYWxTbGlkZXMuZ2V0KHRhcmdldCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlLmFwcGVuZENoaWxkKHJvdyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5ld1NsaWRlcy5hcHBlbmRDaGlsZChzbGlkZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF8uJHNsaWRlci5lbXB0eSgpLmFwcGVuZChuZXdTbGlkZXMpO1xuICAgICAgICAgICAgXy4kc2xpZGVyLmNoaWxkcmVuKCkuY2hpbGRyZW4oKS5jaGlsZHJlbigpXG4gICAgICAgICAgICAgICAgLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd3aWR0aCc6KDEwMCAvIF8ub3B0aW9ucy5zbGlkZXNQZXJSb3cpICsgJyUnLFxuICAgICAgICAgICAgICAgICAgICAnZGlzcGxheSc6ICdpbmxpbmUtYmxvY2snXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5jaGVja1Jlc3BvbnNpdmUgPSBmdW5jdGlvbihpbml0aWFsLCBmb3JjZVVwZGF0ZSkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGJyZWFrcG9pbnQsIHRhcmdldEJyZWFrcG9pbnQsIHJlc3BvbmRUb1dpZHRoLCB0cmlnZ2VyQnJlYWtwb2ludCA9IGZhbHNlO1xuICAgICAgICB2YXIgc2xpZGVyV2lkdGggPSBfLiRzbGlkZXIud2lkdGgoKTtcbiAgICAgICAgdmFyIHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGggfHwgJCh3aW5kb3cpLndpZHRoKCk7XG5cbiAgICAgICAgaWYgKF8ucmVzcG9uZFRvID09PSAnd2luZG93Jykge1xuICAgICAgICAgICAgcmVzcG9uZFRvV2lkdGggPSB3aW5kb3dXaWR0aDtcbiAgICAgICAgfSBlbHNlIGlmIChfLnJlc3BvbmRUbyA9PT0gJ3NsaWRlcicpIHtcbiAgICAgICAgICAgIHJlc3BvbmRUb1dpZHRoID0gc2xpZGVyV2lkdGg7XG4gICAgICAgIH0gZWxzZSBpZiAoXy5yZXNwb25kVG8gPT09ICdtaW4nKSB7XG4gICAgICAgICAgICByZXNwb25kVG9XaWR0aCA9IE1hdGgubWluKHdpbmRvd1dpZHRoLCBzbGlkZXJXaWR0aCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5yZXNwb25zaXZlICYmXG4gICAgICAgICAgICBfLm9wdGlvbnMucmVzcG9uc2l2ZS5sZW5ndGggJiZcbiAgICAgICAgICAgIF8ub3B0aW9ucy5yZXNwb25zaXZlICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgIHRhcmdldEJyZWFrcG9pbnQgPSBudWxsO1xuXG4gICAgICAgICAgICBmb3IgKGJyZWFrcG9pbnQgaW4gXy5icmVha3BvaW50cykge1xuICAgICAgICAgICAgICAgIGlmIChfLmJyZWFrcG9pbnRzLmhhc093blByb3BlcnR5KGJyZWFrcG9pbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfLm9yaWdpbmFsU2V0dGluZ3MubW9iaWxlRmlyc3QgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uZFRvV2lkdGggPCBfLmJyZWFrcG9pbnRzW2JyZWFrcG9pbnRdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0QnJlYWtwb2ludCA9IF8uYnJlYWtwb2ludHNbYnJlYWtwb2ludF07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uZFRvV2lkdGggPiBfLmJyZWFrcG9pbnRzW2JyZWFrcG9pbnRdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0QnJlYWtwb2ludCA9IF8uYnJlYWtwb2ludHNbYnJlYWtwb2ludF07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0YXJnZXRCcmVha3BvaW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKF8uYWN0aXZlQnJlYWtwb2ludCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0QnJlYWtwb2ludCAhPT0gXy5hY3RpdmVCcmVha3BvaW50IHx8IGZvcmNlVXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLmFjdGl2ZUJyZWFrcG9pbnQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEJyZWFrcG9pbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXy5icmVha3BvaW50U2V0dGluZ3NbdGFyZ2V0QnJlYWtwb2ludF0gPT09ICd1bnNsaWNrJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8udW5zbGljayh0YXJnZXRCcmVha3BvaW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zID0gJC5leHRlbmQoe30sIF8ub3JpZ2luYWxTZXR0aW5ncyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5icmVha3BvaW50U2V0dGluZ3NbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRCcmVha3BvaW50XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluaXRpYWwgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSBfLm9wdGlvbnMuaW5pdGlhbFNsaWRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLnJlZnJlc2goaW5pdGlhbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyQnJlYWtwb2ludCA9IHRhcmdldEJyZWFrcG9pbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfLmFjdGl2ZUJyZWFrcG9pbnQgPSB0YXJnZXRCcmVha3BvaW50O1xuICAgICAgICAgICAgICAgICAgICBpZiAoXy5icmVha3BvaW50U2V0dGluZ3NbdGFyZ2V0QnJlYWtwb2ludF0gPT09ICd1bnNsaWNrJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy51bnNsaWNrKHRhcmdldEJyZWFrcG9pbnQpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zID0gJC5leHRlbmQoe30sIF8ub3JpZ2luYWxTZXR0aW5ncyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmJyZWFrcG9pbnRTZXR0aW5nc1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0QnJlYWtwb2ludF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluaXRpYWwgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IF8ub3B0aW9ucy5pbml0aWFsU2xpZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBfLnJlZnJlc2goaW5pdGlhbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlckJyZWFrcG9pbnQgPSB0YXJnZXRCcmVha3BvaW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKF8uYWN0aXZlQnJlYWtwb2ludCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBfLmFjdGl2ZUJyZWFrcG9pbnQgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMgPSBfLm9yaWdpbmFsU2V0dGluZ3M7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbml0aWFsID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IF8ub3B0aW9ucy5pbml0aWFsU2xpZGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXy5yZWZyZXNoKGluaXRpYWwpO1xuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyQnJlYWtwb2ludCA9IHRhcmdldEJyZWFrcG9pbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBvbmx5IHRyaWdnZXIgYnJlYWtwb2ludHMgZHVyaW5nIGFuIGFjdHVhbCBicmVhay4gbm90IG9uIGluaXRpYWxpemUuXG4gICAgICAgICAgICBpZiggIWluaXRpYWwgJiYgdHJpZ2dlckJyZWFrcG9pbnQgIT09IGZhbHNlICkge1xuICAgICAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdicmVha3BvaW50JywgW18sIHRyaWdnZXJCcmVha3BvaW50XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuY2hhbmdlU2xpZGUgPSBmdW5jdGlvbihldmVudCwgZG9udEFuaW1hdGUpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KSxcbiAgICAgICAgICAgIGluZGV4T2Zmc2V0LCBzbGlkZU9mZnNldCwgdW5ldmVuT2Zmc2V0O1xuXG4gICAgICAgIC8vIElmIHRhcmdldCBpcyBhIGxpbmssIHByZXZlbnQgZGVmYXVsdCBhY3Rpb24uXG4gICAgICAgIGlmKCR0YXJnZXQuaXMoJ2EnKSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHRhcmdldCBpcyBub3QgdGhlIDxsaT4gZWxlbWVudCAoaWU6IGEgY2hpbGQpLCBmaW5kIHRoZSA8bGk+LlxuICAgICAgICBpZighJHRhcmdldC5pcygnbGknKSkge1xuICAgICAgICAgICAgJHRhcmdldCA9ICR0YXJnZXQuY2xvc2VzdCgnbGknKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHVuZXZlbk9mZnNldCA9IChfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgIT09IDApO1xuICAgICAgICBpbmRleE9mZnNldCA9IHVuZXZlbk9mZnNldCA/IDAgOiAoXy5zbGlkZUNvdW50IC0gXy5jdXJyZW50U2xpZGUpICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuXG4gICAgICAgIHN3aXRjaCAoZXZlbnQuZGF0YS5tZXNzYWdlKSB7XG5cbiAgICAgICAgICAgIGNhc2UgJ3ByZXZpb3VzJzpcbiAgICAgICAgICAgICAgICBzbGlkZU9mZnNldCA9IGluZGV4T2Zmc2V0ID09PSAwID8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDogXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAtIGluZGV4T2Zmc2V0O1xuICAgICAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAgICAgICAgIF8uc2xpZGVIYW5kbGVyKF8uY3VycmVudFNsaWRlIC0gc2xpZGVPZmZzZXQsIGZhbHNlLCBkb250QW5pbWF0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICduZXh0JzpcbiAgICAgICAgICAgICAgICBzbGlkZU9mZnNldCA9IGluZGV4T2Zmc2V0ID09PSAwID8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDogaW5kZXhPZmZzZXQ7XG4gICAgICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgICAgICAgICAgXy5zbGlkZUhhbmRsZXIoXy5jdXJyZW50U2xpZGUgKyBzbGlkZU9mZnNldCwgZmFsc2UsIGRvbnRBbmltYXRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ2luZGV4JzpcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBldmVudC5kYXRhLmluZGV4ID09PSAwID8gMCA6XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEuaW5kZXggfHwgJHRhcmdldC5pbmRleCgpICogXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuXG4gICAgICAgICAgICAgICAgXy5zbGlkZUhhbmRsZXIoXy5jaGVja05hdmlnYWJsZShpbmRleCksIGZhbHNlLCBkb250QW5pbWF0ZSk7XG4gICAgICAgICAgICAgICAgJHRhcmdldC5jaGlsZHJlbigpLnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmNoZWNrTmF2aWdhYmxlID0gZnVuY3Rpb24oaW5kZXgpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBuYXZpZ2FibGVzLCBwcmV2TmF2aWdhYmxlO1xuXG4gICAgICAgIG5hdmlnYWJsZXMgPSBfLmdldE5hdmlnYWJsZUluZGV4ZXMoKTtcbiAgICAgICAgcHJldk5hdmlnYWJsZSA9IDA7XG4gICAgICAgIGlmIChpbmRleCA+IG5hdmlnYWJsZXNbbmF2aWdhYmxlcy5sZW5ndGggLSAxXSkge1xuICAgICAgICAgICAgaW5kZXggPSBuYXZpZ2FibGVzW25hdmlnYWJsZXMubGVuZ3RoIC0gMV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKHZhciBuIGluIG5hdmlnYWJsZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPCBuYXZpZ2FibGVzW25dKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4ID0gcHJldk5hdmlnYWJsZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHByZXZOYXZpZ2FibGUgPSBuYXZpZ2FibGVzW25dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuY2xlYW5VcEV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmRvdHMgJiYgXy4kZG90cyAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICAkKCdsaScsIF8uJGRvdHMpXG4gICAgICAgICAgICAgICAgLm9mZignY2xpY2suc2xpY2snLCBfLmNoYW5nZVNsaWRlKVxuICAgICAgICAgICAgICAgIC5vZmYoJ21vdXNlZW50ZXIuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCB0cnVlKSlcbiAgICAgICAgICAgICAgICAub2ZmKCdtb3VzZWxlYXZlLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgZmFsc2UpKTtcblxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy4kZG90cy5vZmYoJ2tleWRvd24uc2xpY2snLCBfLmtleUhhbmRsZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgXy4kc2xpZGVyLm9mZignZm9jdXMuc2xpY2sgYmx1ci5zbGljaycpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYXJyb3dzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIF8uJHByZXZBcnJvdyAmJiBfLiRwcmV2QXJyb3cub2ZmKCdjbGljay5zbGljaycsIF8uY2hhbmdlU2xpZGUpO1xuICAgICAgICAgICAgXy4kbmV4dEFycm93ICYmIF8uJG5leHRBcnJvdy5vZmYoJ2NsaWNrLnNsaWNrJywgXy5jaGFuZ2VTbGlkZSk7XG5cbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdyAmJiBfLiRwcmV2QXJyb3cub2ZmKCdrZXlkb3duLnNsaWNrJywgXy5rZXlIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cgJiYgXy4kbmV4dEFycm93Lm9mZigna2V5ZG93bi5zbGljaycsIF8ua2V5SGFuZGxlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBfLiRsaXN0Lm9mZigndG91Y2hzdGFydC5zbGljayBtb3VzZWRvd24uc2xpY2snLCBfLnN3aXBlSGFuZGxlcik7XG4gICAgICAgIF8uJGxpc3Qub2ZmKCd0b3VjaG1vdmUuc2xpY2sgbW91c2Vtb3ZlLnNsaWNrJywgXy5zd2lwZUhhbmRsZXIpO1xuICAgICAgICBfLiRsaXN0Lm9mZigndG91Y2hlbmQuc2xpY2sgbW91c2V1cC5zbGljaycsIF8uc3dpcGVIYW5kbGVyKTtcbiAgICAgICAgXy4kbGlzdC5vZmYoJ3RvdWNoY2FuY2VsLnNsaWNrIG1vdXNlbGVhdmUuc2xpY2snLCBfLnN3aXBlSGFuZGxlcik7XG5cbiAgICAgICAgXy4kbGlzdC5vZmYoJ2NsaWNrLnNsaWNrJywgXy5jbGlja0hhbmRsZXIpO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9mZihfLnZpc2liaWxpdHlDaGFuZ2UsIF8udmlzaWJpbGl0eSk7XG5cbiAgICAgICAgXy5jbGVhblVwU2xpZGVFdmVudHMoKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uJGxpc3Qub2ZmKCdrZXlkb3duLnNsaWNrJywgXy5rZXlIYW5kbGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZm9jdXNPblNlbGVjdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgJChfLiRzbGlkZVRyYWNrKS5jaGlsZHJlbigpLm9mZignY2xpY2suc2xpY2snLCBfLnNlbGVjdEhhbmRsZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgJCh3aW5kb3cpLm9mZignb3JpZW50YXRpb25jaGFuZ2Uuc2xpY2suc2xpY2stJyArIF8uaW5zdGFuY2VVaWQsIF8ub3JpZW50YXRpb25DaGFuZ2UpO1xuXG4gICAgICAgICQod2luZG93KS5vZmYoJ3Jlc2l6ZS5zbGljay5zbGljay0nICsgXy5pbnN0YW5jZVVpZCwgXy5yZXNpemUpO1xuXG4gICAgICAgICQoJ1tkcmFnZ2FibGUhPXRydWVdJywgXy4kc2xpZGVUcmFjaykub2ZmKCdkcmFnc3RhcnQnLCBfLnByZXZlbnREZWZhdWx0KTtcblxuICAgICAgICAkKHdpbmRvdykub2ZmKCdsb2FkLnNsaWNrLnNsaWNrLScgKyBfLmluc3RhbmNlVWlkLCBfLnNldFBvc2l0aW9uKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuY2xlYW5VcFNsaWRlRXZlbnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uJGxpc3Qub2ZmKCdtb3VzZWVudGVyLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgdHJ1ZSkpO1xuICAgICAgICBfLiRsaXN0Lm9mZignbW91c2VsZWF2ZS5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIGZhbHNlKSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmNsZWFuVXBSb3dzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLCBvcmlnaW5hbFNsaWRlcztcblxuICAgICAgICBpZihfLm9wdGlvbnMucm93cyA+IDApIHtcbiAgICAgICAgICAgIG9yaWdpbmFsU2xpZGVzID0gXy4kc2xpZGVzLmNoaWxkcmVuKCkuY2hpbGRyZW4oKTtcbiAgICAgICAgICAgIG9yaWdpbmFsU2xpZGVzLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAgICAgICBfLiRzbGlkZXIuZW1wdHkoKS5hcHBlbmQob3JpZ2luYWxTbGlkZXMpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmNsaWNrSGFuZGxlciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLnNob3VsZENsaWNrID09PSBmYWxzZSkge1xuICAgICAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKHJlZnJlc2gpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5hdXRvUGxheUNsZWFyKCk7XG5cbiAgICAgICAgXy50b3VjaE9iamVjdCA9IHt9O1xuXG4gICAgICAgIF8uY2xlYW5VcEV2ZW50cygpO1xuXG4gICAgICAgICQoJy5zbGljay1jbG9uZWQnLCBfLiRzbGlkZXIpLmRldGFjaCgpO1xuXG4gICAgICAgIGlmIChfLiRkb3RzKSB7XG4gICAgICAgICAgICBfLiRkb3RzLnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBfLiRwcmV2QXJyb3cgJiYgXy4kcHJldkFycm93Lmxlbmd0aCApIHtcblxuICAgICAgICAgICAgXy4kcHJldkFycm93XG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1kaXNhYmxlZCBzbGljay1hcnJvdyBzbGljay1oaWRkZW4nKVxuICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdhcmlhLWhpZGRlbiBhcmlhLWRpc2FibGVkIHRhYmluZGV4JylcbiAgICAgICAgICAgICAgICAuY3NzKCdkaXNwbGF5JywnJyk7XG5cbiAgICAgICAgICAgIGlmICggXy5odG1sRXhwci50ZXN0KCBfLm9wdGlvbnMucHJldkFycm93ICkpIHtcbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIF8uJG5leHRBcnJvdyAmJiBfLiRuZXh0QXJyb3cubGVuZ3RoICkge1xuXG4gICAgICAgICAgICBfLiRuZXh0QXJyb3dcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRpc2FibGVkIHNsaWNrLWFycm93IHNsaWNrLWhpZGRlbicpXG4gICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ2FyaWEtaGlkZGVuIGFyaWEtZGlzYWJsZWQgdGFiaW5kZXgnKVxuICAgICAgICAgICAgICAgIC5jc3MoJ2Rpc3BsYXknLCcnKTtcblxuICAgICAgICAgICAgaWYgKCBfLmh0bWxFeHByLnRlc3QoIF8ub3B0aW9ucy5uZXh0QXJyb3cgKSkge1xuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKF8uJHNsaWRlcykge1xuXG4gICAgICAgICAgICBfLiRzbGlkZXNcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLXNsaWRlIHNsaWNrLWFjdGl2ZSBzbGljay1jZW50ZXIgc2xpY2stdmlzaWJsZSBzbGljay1jdXJyZW50JylcbiAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignYXJpYS1oaWRkZW4nKVxuICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdkYXRhLXNsaWNrLWluZGV4JylcbiAgICAgICAgICAgICAgICAuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoJ3N0eWxlJywgJCh0aGlzKS5kYXRhKCdvcmlnaW5hbFN0eWxpbmcnKSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKS5kZXRhY2goKTtcblxuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5kZXRhY2goKTtcblxuICAgICAgICAgICAgXy4kbGlzdC5kZXRhY2goKTtcblxuICAgICAgICAgICAgXy4kc2xpZGVyLmFwcGVuZChfLiRzbGlkZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgXy5jbGVhblVwUm93cygpO1xuXG4gICAgICAgIF8uJHNsaWRlci5yZW1vdmVDbGFzcygnc2xpY2stc2xpZGVyJyk7XG4gICAgICAgIF8uJHNsaWRlci5yZW1vdmVDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKTtcbiAgICAgICAgXy4kc2xpZGVyLnJlbW92ZUNsYXNzKCdzbGljay1kb3R0ZWQnKTtcblxuICAgICAgICBfLnVuc2xpY2tlZCA9IHRydWU7XG5cbiAgICAgICAgaWYoIXJlZnJlc2gpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdkZXN0cm95JywgW19dKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5kaXNhYmxlVHJhbnNpdGlvbiA9IGZ1bmN0aW9uKHNsaWRlKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgdHJhbnNpdGlvbiA9IHt9O1xuXG4gICAgICAgIHRyYW5zaXRpb25bXy50cmFuc2l0aW9uVHlwZV0gPSAnJztcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyh0cmFuc2l0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShzbGlkZSkuY3NzKHRyYW5zaXRpb24pO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmZhZGVTbGlkZSA9IGZ1bmN0aW9uKHNsaWRlSW5kZXgsIGNhbGxiYWNrKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLmNzc1RyYW5zaXRpb25zID09PSBmYWxzZSkge1xuXG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGVJbmRleCkuY3NzKHtcbiAgICAgICAgICAgICAgICB6SW5kZXg6IF8ub3B0aW9ucy56SW5kZXhcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGVJbmRleCkuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICAgICAgfSwgXy5vcHRpb25zLnNwZWVkLCBfLm9wdGlvbnMuZWFzaW5nLCBjYWxsYmFjayk7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgXy5hcHBseVRyYW5zaXRpb24oc2xpZGVJbmRleCk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShzbGlkZUluZGV4KS5jc3Moe1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgICAgICBfLmRpc2FibGVUcmFuc2l0aW9uKHNsaWRlSW5kZXgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoKTtcbiAgICAgICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZmFkZVNsaWRlT3V0ID0gZnVuY3Rpb24oc2xpZGVJbmRleCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5jc3NUcmFuc2l0aW9ucyA9PT0gZmFsc2UpIHtcblxuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKHNsaWRlSW5kZXgpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4IC0gMlxuICAgICAgICAgICAgfSwgXy5vcHRpb25zLnNwZWVkLCBfLm9wdGlvbnMuZWFzaW5nKTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBfLmFwcGx5VHJhbnNpdGlvbihzbGlkZUluZGV4KTtcblxuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKHNsaWRlSW5kZXgpLmNzcyh7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICAgICAgICB6SW5kZXg6IF8ub3B0aW9ucy56SW5kZXggLSAyXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmZpbHRlclNsaWRlcyA9IFNsaWNrLnByb3RvdHlwZS5zbGlja0ZpbHRlciA9IGZ1bmN0aW9uKGZpbHRlcikge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoZmlsdGVyICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlc0NhY2hlID0gXy4kc2xpZGVzO1xuXG4gICAgICAgICAgICBfLnVubG9hZCgpO1xuXG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZGV0YWNoKCk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlc0NhY2hlLmZpbHRlcihmaWx0ZXIpLmFwcGVuZFRvKF8uJHNsaWRlVHJhY2spO1xuXG4gICAgICAgICAgICBfLnJlaW5pdCgpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZm9jdXNIYW5kbGVyID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uJHNsaWRlclxuICAgICAgICAgICAgLm9mZignZm9jdXMuc2xpY2sgYmx1ci5zbGljaycpXG4gICAgICAgICAgICAub24oJ2ZvY3VzLnNsaWNrIGJsdXIuc2xpY2snLCAnKicsIGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgdmFyICRzZiA9ICQodGhpcyk7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICBpZiggXy5vcHRpb25zLnBhdXNlT25Gb2N1cyApIHtcbiAgICAgICAgICAgICAgICAgICAgXy5mb2N1c3NlZCA9ICRzZi5pcygnOmZvY3VzJyk7XG4gICAgICAgICAgICAgICAgICAgIF8uYXV0b1BsYXkoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0sIDApO1xuXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZ2V0Q3VycmVudCA9IFNsaWNrLnByb3RvdHlwZS5zbGlja0N1cnJlbnRTbGlkZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcbiAgICAgICAgcmV0dXJuIF8uY3VycmVudFNsaWRlO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXREb3RDb3VudCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICB2YXIgYnJlYWtQb2ludCA9IDA7XG4gICAgICAgIHZhciBjb3VudGVyID0gMDtcbiAgICAgICAgdmFyIHBhZ2VyUXR5ID0gMDtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgICAgICAgKytwYWdlclF0eTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgd2hpbGUgKGJyZWFrUG9pbnQgPCBfLnNsaWRlQ291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgKytwYWdlclF0eTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtQb2ludCA9IGNvdW50ZXIgKyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXIgKz0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgOiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcGFnZXJRdHkgPSBfLnNsaWRlQ291bnQ7XG4gICAgICAgIH0gZWxzZSBpZighXy5vcHRpb25zLmFzTmF2Rm9yKSB7XG4gICAgICAgICAgICBwYWdlclF0eSA9IDEgKyBNYXRoLmNlaWwoKF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIC8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgd2hpbGUgKGJyZWFrUG9pbnQgPCBfLnNsaWRlQ291bnQpIHtcbiAgICAgICAgICAgICAgICArK3BhZ2VyUXR5O1xuICAgICAgICAgICAgICAgIGJyZWFrUG9pbnQgPSBjb3VudGVyICsgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuICAgICAgICAgICAgICAgIGNvdW50ZXIgKz0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgOiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhZ2VyUXR5IC0gMTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZ2V0TGVmdCA9IGZ1bmN0aW9uKHNsaWRlSW5kZXgpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICB0YXJnZXRMZWZ0LFxuICAgICAgICAgICAgdmVydGljYWxIZWlnaHQsXG4gICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9IDAsXG4gICAgICAgICAgICB0YXJnZXRTbGlkZSxcbiAgICAgICAgICAgIGNvZWY7XG5cbiAgICAgICAgXy5zbGlkZU9mZnNldCA9IDA7XG4gICAgICAgIHZlcnRpY2FsSGVpZ2h0ID0gXy4kc2xpZGVzLmZpcnN0KCkub3V0ZXJIZWlnaHQodHJ1ZSk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gKF8uc2xpZGVXaWR0aCAqIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpICogLTE7XG4gICAgICAgICAgICAgICAgY29lZiA9IC0xXG5cbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSB0cnVlICYmIF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID09PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2VmID0gLTEuNTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2VmID0gLTJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9ICh2ZXJ0aWNhbEhlaWdodCAqIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpICogY29lZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgIT09IDApIHtcbiAgICAgICAgICAgICAgICBpZiAoc2xpZGVJbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA+IF8uc2xpZGVDb3VudCAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzbGlkZUluZGV4ID4gXy5zbGlkZUNvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gKChfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC0gKHNsaWRlSW5kZXggLSBfLnNsaWRlQ291bnQpKSAqIF8uc2xpZGVXaWR0aCkgKiAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsT2Zmc2V0ID0gKChfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC0gKHNsaWRlSW5kZXggLSBfLnNsaWRlQ291bnQpKSAqIHZlcnRpY2FsSGVpZ2h0KSAqIC0xO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5zbGlkZU9mZnNldCA9ICgoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKSAqIF8uc2xpZGVXaWR0aCkgKiAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsT2Zmc2V0ID0gKChfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpICogdmVydGljYWxIZWlnaHQpICogLTE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoc2xpZGVJbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPiBfLnNsaWRlQ291bnQpIHtcbiAgICAgICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gKChzbGlkZUluZGV4ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdykgLSBfLnNsaWRlQ291bnQpICogXy5zbGlkZVdpZHRoO1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsT2Zmc2V0ID0gKChzbGlkZUluZGV4ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdykgLSBfLnNsaWRlQ291bnQpICogdmVydGljYWxIZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgPSAwO1xuICAgICAgICAgICAgdmVydGljYWxPZmZzZXQgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gKChfLnNsaWRlV2lkdGggKiBNYXRoLmZsb29yKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpKSAvIDIpIC0gKChfLnNsaWRlV2lkdGggKiBfLnNsaWRlQ291bnQpIC8gMik7XG4gICAgICAgIH0gZWxzZSBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUgJiYgXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ICs9IF8uc2xpZGVXaWR0aCAqIE1hdGguZmxvb3IoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIpIC0gXy5zbGlkZVdpZHRoO1xuICAgICAgICB9IGVsc2UgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gMDtcbiAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgKz0gXy5zbGlkZVdpZHRoICogTWF0aC5mbG9vcihfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGFyZ2V0TGVmdCA9ICgoc2xpZGVJbmRleCAqIF8uc2xpZGVXaWR0aCkgKiAtMSkgKyBfLnNsaWRlT2Zmc2V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0TGVmdCA9ICgoc2xpZGVJbmRleCAqIHZlcnRpY2FsSGVpZ2h0KSAqIC0xKSArIHZlcnRpY2FsT2Zmc2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52YXJpYWJsZVdpZHRoID09PSB0cnVlKSB7XG5cbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyB8fCBfLm9wdGlvbnMuaW5maW5pdGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0U2xpZGUgPSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS5lcShzbGlkZUluZGV4KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0U2xpZGUgPSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS5lcShzbGlkZUluZGV4ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMucnRsID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldFNsaWRlWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldExlZnQgPSAoXy4kc2xpZGVUcmFjay53aWR0aCgpIC0gdGFyZ2V0U2xpZGVbMF0ub2Zmc2V0TGVmdCAtIHRhcmdldFNsaWRlLndpZHRoKCkpICogLTE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9ICAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IHRhcmdldFNsaWRlWzBdID8gdGFyZ2V0U2xpZGVbMF0ub2Zmc2V0TGVmdCAqIC0xIDogMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93IHx8IF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0U2xpZGUgPSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS5lcShzbGlkZUluZGV4KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRTbGlkZSA9IF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oJy5zbGljay1zbGlkZScpLmVxKHNsaWRlSW5kZXggKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICsgMSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5ydGwgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldFNsaWRlWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gKF8uJHNsaWRlVHJhY2sud2lkdGgoKSAtIHRhcmdldFNsaWRlWzBdLm9mZnNldExlZnQgLSB0YXJnZXRTbGlkZS53aWR0aCgpKSAqIC0xO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9ICAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IHRhcmdldFNsaWRlWzBdID8gdGFyZ2V0U2xpZGVbMF0ub2Zmc2V0TGVmdCAqIC0xIDogMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ICs9IChfLiRsaXN0LndpZHRoKCkgLSB0YXJnZXRTbGlkZS5vdXRlcldpZHRoKCkpIC8gMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXRMZWZ0O1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXRPcHRpb24gPSBTbGljay5wcm90b3R5cGUuc2xpY2tHZXRPcHRpb24gPSBmdW5jdGlvbihvcHRpb24pIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgcmV0dXJuIF8ub3B0aW9uc1tvcHRpb25dO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXROYXZpZ2FibGVJbmRleGVzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgYnJlYWtQb2ludCA9IDAsXG4gICAgICAgICAgICBjb3VudGVyID0gMCxcbiAgICAgICAgICAgIGluZGV4ZXMgPSBbXSxcbiAgICAgICAgICAgIG1heDtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgbWF4ID0gXy5zbGlkZUNvdW50O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnJlYWtQb2ludCA9IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAqIC0xO1xuICAgICAgICAgICAgY291bnRlciA9IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAqIC0xO1xuICAgICAgICAgICAgbWF4ID0gXy5zbGlkZUNvdW50ICogMjtcbiAgICAgICAgfVxuXG4gICAgICAgIHdoaWxlIChicmVha1BvaW50IDwgbWF4KSB7XG4gICAgICAgICAgICBpbmRleGVzLnB1c2goYnJlYWtQb2ludCk7XG4gICAgICAgICAgICBicmVha1BvaW50ID0gY291bnRlciArIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcbiAgICAgICAgICAgIGNvdW50ZXIgKz0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgOiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluZGV4ZXM7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdldFNsaWNrID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdldFNsaWRlQ291bnQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBzbGlkZXNUcmF2ZXJzZWQsIHN3aXBlZFNsaWRlLCBjZW50ZXJPZmZzZXQ7XG5cbiAgICAgICAgY2VudGVyT2Zmc2V0ID0gXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUgPyBfLnNsaWRlV2lkdGggKiBNYXRoLmZsb29yKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyKSA6IDA7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5zd2lwZVRvU2xpZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suZmluZCgnLnNsaWNrLXNsaWRlJykuZWFjaChmdW5jdGlvbihpbmRleCwgc2xpZGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2xpZGUub2Zmc2V0TGVmdCAtIGNlbnRlck9mZnNldCArICgkKHNsaWRlKS5vdXRlcldpZHRoKCkgLyAyKSA+IChfLnN3aXBlTGVmdCAqIC0xKSkge1xuICAgICAgICAgICAgICAgICAgICBzd2lwZWRTbGlkZSA9IHNsaWRlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHNsaWRlc1RyYXZlcnNlZCA9IE1hdGguYWJzKCQoc3dpcGVkU2xpZGUpLmF0dHIoJ2RhdGEtc2xpY2staW5kZXgnKSAtIF8uY3VycmVudFNsaWRlKSB8fCAxO1xuXG4gICAgICAgICAgICByZXR1cm4gc2xpZGVzVHJhdmVyc2VkO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdvVG8gPSBTbGljay5wcm90b3R5cGUuc2xpY2tHb1RvID0gZnVuY3Rpb24oc2xpZGUsIGRvbnRBbmltYXRlKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uY2hhbmdlU2xpZGUoe1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdpbmRleCcsXG4gICAgICAgICAgICAgICAgaW5kZXg6IHBhcnNlSW50KHNsaWRlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCBkb250QW5pbWF0ZSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbihjcmVhdGlvbikge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoISQoXy4kc2xpZGVyKS5oYXNDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKSkge1xuXG4gICAgICAgICAgICAkKF8uJHNsaWRlcikuYWRkQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJyk7XG5cbiAgICAgICAgICAgIF8uYnVpbGRSb3dzKCk7XG4gICAgICAgICAgICBfLmJ1aWxkT3V0KCk7XG4gICAgICAgICAgICBfLnNldFByb3BzKCk7XG4gICAgICAgICAgICBfLnN0YXJ0TG9hZCgpO1xuICAgICAgICAgICAgXy5sb2FkU2xpZGVyKCk7XG4gICAgICAgICAgICBfLmluaXRpYWxpemVFdmVudHMoKTtcbiAgICAgICAgICAgIF8udXBkYXRlQXJyb3dzKCk7XG4gICAgICAgICAgICBfLnVwZGF0ZURvdHMoKTtcbiAgICAgICAgICAgIF8uY2hlY2tSZXNwb25zaXZlKHRydWUpO1xuICAgICAgICAgICAgXy5mb2N1c0hhbmRsZXIoKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNyZWF0aW9uKSB7XG4gICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignaW5pdCcsIFtfXSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uaW5pdEFEQSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBfLm9wdGlvbnMuYXV0b3BsYXkgKSB7XG5cbiAgICAgICAgICAgIF8ucGF1c2VkID0gZmFsc2U7XG4gICAgICAgICAgICBfLmF1dG9QbGF5KCk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5pbml0QURBID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgICAgICBudW1Eb3RHcm91cHMgPSBNYXRoLmNlaWwoXy5zbGlkZUNvdW50IC8gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyksXG4gICAgICAgICAgICAgICAgdGFiQ29udHJvbEluZGV4ZXMgPSBfLmdldE5hdmlnYWJsZUluZGV4ZXMoKS5maWx0ZXIoZnVuY3Rpb24odmFsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAodmFsID49IDApICYmICh2YWwgPCBfLnNsaWRlQ291bnQpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIF8uJHNsaWRlcy5hZGQoXy4kc2xpZGVUcmFjay5maW5kKCcuc2xpY2stY2xvbmVkJykpLmF0dHIoe1xuICAgICAgICAgICAgJ2FyaWEtaGlkZGVuJzogJ3RydWUnLFxuICAgICAgICAgICAgJ3RhYmluZGV4JzogJy0xJ1xuICAgICAgICB9KS5maW5kKCdhLCBpbnB1dCwgYnV0dG9uLCBzZWxlY3QnKS5hdHRyKHtcbiAgICAgICAgICAgICd0YWJpbmRleCc6ICctMSdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKF8uJGRvdHMgIT09IG51bGwpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlcy5ub3QoXy4kc2xpZGVUcmFjay5maW5kKCcuc2xpY2stY2xvbmVkJykpLmVhY2goZnVuY3Rpb24oaSkge1xuICAgICAgICAgICAgICAgIHZhciBzbGlkZUNvbnRyb2xJbmRleCA9IHRhYkNvbnRyb2xJbmRleGVzLmluZGV4T2YoaSk7XG5cbiAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoe1xuICAgICAgICAgICAgICAgICAgICAncm9sZSc6ICd0YWJwYW5lbCcsXG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdzbGljay1zbGlkZScgKyBfLmluc3RhbmNlVWlkICsgaSxcbiAgICAgICAgICAgICAgICAgICAgJ3RhYmluZGV4JzogLTFcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChzbGlkZUNvbnRyb2xJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICB2YXIgYXJpYUJ1dHRvbkNvbnRyb2wgPSAnc2xpY2stc2xpZGUtY29udHJvbCcgKyBfLmluc3RhbmNlVWlkICsgc2xpZGVDb250cm9sSW5kZXhcbiAgICAgICAgICAgICAgICAgICBpZiAoJCgnIycgKyBhcmlhQnV0dG9uQ29udHJvbCkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICdhcmlhLWRlc2NyaWJlZGJ5JzogYXJpYUJ1dHRvbkNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgXy4kZG90cy5hdHRyKCdyb2xlJywgJ3RhYmxpc3QnKS5maW5kKCdsaScpLmVhY2goZnVuY3Rpb24oaSkge1xuICAgICAgICAgICAgICAgIHZhciBtYXBwZWRTbGlkZUluZGV4ID0gdGFiQ29udHJvbEluZGV4ZXNbaV07XG5cbiAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoe1xuICAgICAgICAgICAgICAgICAgICAncm9sZSc6ICdwcmVzZW50YXRpb24nXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJ2J1dHRvbicpLmZpcnN0KCkuYXR0cih7XG4gICAgICAgICAgICAgICAgICAgICdyb2xlJzogJ3RhYicsXG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdzbGljay1zbGlkZS1jb250cm9sJyArIF8uaW5zdGFuY2VVaWQgKyBpLFxuICAgICAgICAgICAgICAgICAgICAnYXJpYS1jb250cm9scyc6ICdzbGljay1zbGlkZScgKyBfLmluc3RhbmNlVWlkICsgbWFwcGVkU2xpZGVJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgJ2FyaWEtbGFiZWwnOiAoaSArIDEpICsgJyBvZiAnICsgbnVtRG90R3JvdXBzLFxuICAgICAgICAgICAgICAgICAgICAnYXJpYS1zZWxlY3RlZCc6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICd0YWJpbmRleCc6ICctMSdcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSkuZXEoXy5jdXJyZW50U2xpZGUpLmZpbmQoJ2J1dHRvbicpLmF0dHIoe1xuICAgICAgICAgICAgICAgICdhcmlhLXNlbGVjdGVkJzogJ3RydWUnLFxuICAgICAgICAgICAgICAgICd0YWJpbmRleCc6ICcwJ1xuICAgICAgICAgICAgfSkuZW5kKCk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBpPV8uY3VycmVudFNsaWRlLCBtYXg9aStfLm9wdGlvbnMuc2xpZGVzVG9TaG93OyBpIDwgbWF4OyBpKyspIHtcbiAgICAgICAgICBpZiAoXy5vcHRpb25zLmZvY3VzT25DaGFuZ2UpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShpKS5hdHRyKHsndGFiaW5kZXgnOiAnMCd9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKGkpLnJlbW92ZUF0dHIoJ3RhYmluZGV4Jyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgXy5hY3RpdmF0ZUFEQSgpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5pbml0QXJyb3dFdmVudHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hcnJvd3MgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgXy4kcHJldkFycm93XG4gICAgICAgICAgICAgICAub2ZmKCdjbGljay5zbGljaycpXG4gICAgICAgICAgICAgICAub24oJ2NsaWNrLnNsaWNrJywge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAncHJldmlvdXMnXG4gICAgICAgICAgICAgICB9LCBfLmNoYW5nZVNsaWRlKTtcbiAgICAgICAgICAgIF8uJG5leHRBcnJvd1xuICAgICAgICAgICAgICAgLm9mZignY2xpY2suc2xpY2snKVxuICAgICAgICAgICAgICAgLm9uKCdjbGljay5zbGljaycsIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ25leHQnXG4gICAgICAgICAgICAgICB9LCBfLmNoYW5nZVNsaWRlKTtcblxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93Lm9uKCdrZXlkb3duLnNsaWNrJywgXy5rZXlIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cub24oJ2tleWRvd24uc2xpY2snLCBfLmtleUhhbmRsZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmluaXREb3RFdmVudHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5kb3RzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgICQoJ2xpJywgXy4kZG90cykub24oJ2NsaWNrLnNsaWNrJywge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdpbmRleCdcbiAgICAgICAgICAgIH0sIF8uY2hhbmdlU2xpZGUpO1xuXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLiRkb3RzLm9uKCdrZXlkb3duLnNsaWNrJywgXy5rZXlIYW5kbGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZG90cyA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMucGF1c2VPbkRvdHNIb3ZlciA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgICQoJ2xpJywgXy4kZG90cylcbiAgICAgICAgICAgICAgICAub24oJ21vdXNlZW50ZXIuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCB0cnVlKSlcbiAgICAgICAgICAgICAgICAub24oJ21vdXNlbGVhdmUuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCBmYWxzZSkpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuaW5pdFNsaWRlRXZlbnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmICggXy5vcHRpb25zLnBhdXNlT25Ib3ZlciApIHtcblxuICAgICAgICAgICAgXy4kbGlzdC5vbignbW91c2VlbnRlci5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIHRydWUpKTtcbiAgICAgICAgICAgIF8uJGxpc3Qub24oJ21vdXNlbGVhdmUuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCBmYWxzZSkpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuaW5pdGlhbGl6ZUV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLmluaXRBcnJvd0V2ZW50cygpO1xuXG4gICAgICAgIF8uaW5pdERvdEV2ZW50cygpO1xuICAgICAgICBfLmluaXRTbGlkZUV2ZW50cygpO1xuXG4gICAgICAgIF8uJGxpc3Qub24oJ3RvdWNoc3RhcnQuc2xpY2sgbW91c2Vkb3duLnNsaWNrJywge1xuICAgICAgICAgICAgYWN0aW9uOiAnc3RhcnQnXG4gICAgICAgIH0sIF8uc3dpcGVIYW5kbGVyKTtcbiAgICAgICAgXy4kbGlzdC5vbigndG91Y2htb3ZlLnNsaWNrIG1vdXNlbW92ZS5zbGljaycsIHtcbiAgICAgICAgICAgIGFjdGlvbjogJ21vdmUnXG4gICAgICAgIH0sIF8uc3dpcGVIYW5kbGVyKTtcbiAgICAgICAgXy4kbGlzdC5vbigndG91Y2hlbmQuc2xpY2sgbW91c2V1cC5zbGljaycsIHtcbiAgICAgICAgICAgIGFjdGlvbjogJ2VuZCdcbiAgICAgICAgfSwgXy5zd2lwZUhhbmRsZXIpO1xuICAgICAgICBfLiRsaXN0Lm9uKCd0b3VjaGNhbmNlbC5zbGljayBtb3VzZWxlYXZlLnNsaWNrJywge1xuICAgICAgICAgICAgYWN0aW9uOiAnZW5kJ1xuICAgICAgICB9LCBfLnN3aXBlSGFuZGxlcik7XG5cbiAgICAgICAgXy4kbGlzdC5vbignY2xpY2suc2xpY2snLCBfLmNsaWNrSGFuZGxlcik7XG5cbiAgICAgICAgJChkb2N1bWVudCkub24oXy52aXNpYmlsaXR5Q2hhbmdlLCAkLnByb3h5KF8udmlzaWJpbGl0eSwgXykpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy4kbGlzdC5vbigna2V5ZG93bi5zbGljaycsIF8ua2V5SGFuZGxlcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZvY3VzT25TZWxlY3QgPT09IHRydWUpIHtcbiAgICAgICAgICAgICQoXy4kc2xpZGVUcmFjaykuY2hpbGRyZW4oKS5vbignY2xpY2suc2xpY2snLCBfLnNlbGVjdEhhbmRsZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgJCh3aW5kb3cpLm9uKCdvcmllbnRhdGlvbmNoYW5nZS5zbGljay5zbGljay0nICsgXy5pbnN0YW5jZVVpZCwgJC5wcm94eShfLm9yaWVudGF0aW9uQ2hhbmdlLCBfKSk7XG5cbiAgICAgICAgJCh3aW5kb3cpLm9uKCdyZXNpemUuc2xpY2suc2xpY2stJyArIF8uaW5zdGFuY2VVaWQsICQucHJveHkoXy5yZXNpemUsIF8pKTtcblxuICAgICAgICAkKCdbZHJhZ2dhYmxlIT10cnVlXScsIF8uJHNsaWRlVHJhY2spLm9uKCdkcmFnc3RhcnQnLCBfLnByZXZlbnREZWZhdWx0KTtcblxuICAgICAgICAkKHdpbmRvdykub24oJ2xvYWQuc2xpY2suc2xpY2stJyArIF8uaW5zdGFuY2VVaWQsIF8uc2V0UG9zaXRpb24pO1xuICAgICAgICAkKF8uc2V0UG9zaXRpb24pO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5pbml0VUkgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hcnJvd3MgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICBfLiRwcmV2QXJyb3cuc2hvdygpO1xuICAgICAgICAgICAgXy4kbmV4dEFycm93LnNob3coKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5kb3RzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgXy4kZG90cy5zaG93KCk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5rZXlIYW5kbGVyID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG4gICAgICAgICAvL0RvbnQgc2xpZGUgaWYgdGhlIGN1cnNvciBpcyBpbnNpZGUgdGhlIGZvcm0gZmllbGRzIGFuZCBhcnJvdyBrZXlzIGFyZSBwcmVzc2VkXG4gICAgICAgIGlmKCFldmVudC50YXJnZXQudGFnTmFtZS5tYXRjaCgnVEVYVEFSRUF8SU5QVVR8U0VMRUNUJykpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAzNyAmJiBfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uY2hhbmdlU2xpZGUoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBfLm9wdGlvbnMucnRsID09PSB0cnVlID8gJ25leHQnIDogICdwcmV2aW91cydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09PSAzOSAmJiBfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uY2hhbmdlU2xpZGUoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBfLm9wdGlvbnMucnRsID09PSB0cnVlID8gJ3ByZXZpb3VzJyA6ICduZXh0J1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUubGF6eUxvYWQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBsb2FkUmFuZ2UsIGNsb25lUmFuZ2UsIHJhbmdlU3RhcnQsIHJhbmdlRW5kO1xuXG4gICAgICAgIGZ1bmN0aW9uIGxvYWRJbWFnZXMoaW1hZ2VzU2NvcGUpIHtcblxuICAgICAgICAgICAgJCgnaW1nW2RhdGEtbGF6eV0nLCBpbWFnZXNTY29wZSkuZWFjaChmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgIHZhciBpbWFnZSA9ICQodGhpcyksXG4gICAgICAgICAgICAgICAgICAgIGltYWdlU291cmNlID0gJCh0aGlzKS5hdHRyKCdkYXRhLWxhenknKSxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VTcmNTZXQgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtc3Jjc2V0JyksXG4gICAgICAgICAgICAgICAgICAgIGltYWdlU2l6ZXMgID0gJCh0aGlzKS5hdHRyKCdkYXRhLXNpemVzJykgfHwgXy4kc2xpZGVyLmF0dHIoJ2RhdGEtc2l6ZXMnKSxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VUb0xvYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICAgICAgICAgICAgICAgIGltYWdlVG9Mb2FkLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAuYW5pbWF0ZSh7IG9wYWNpdHk6IDAgfSwgMTAwLCBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbWFnZVNyY1NldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3NyY3NldCcsIGltYWdlU3JjU2V0ICk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGltYWdlU2l6ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3NpemVzJywgaW1hZ2VTaXplcyApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3NyYycsIGltYWdlU291cmNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYW5pbWF0ZSh7IG9wYWNpdHk6IDEgfSwgMjAwLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ2RhdGEtbGF6eSBkYXRhLXNyY3NldCBkYXRhLXNpemVzJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLWxvYWRpbmcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2xhenlMb2FkZWQnLCBbXywgaW1hZ2UsIGltYWdlU291cmNlXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBpbWFnZVRvTG9hZC5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCAnZGF0YS1sYXp5JyApXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoICdzbGljay1sb2FkaW5nJyApXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoICdzbGljay1sYXp5bG9hZC1lcnJvcicgKTtcblxuICAgICAgICAgICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignbGF6eUxvYWRFcnJvcicsIFsgXywgaW1hZ2UsIGltYWdlU291cmNlIF0pO1xuXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGltYWdlVG9Mb2FkLnNyYyA9IGltYWdlU291cmNlO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcmFuZ2VTdGFydCA9IF8uY3VycmVudFNsaWRlICsgKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyICsgMSk7XG4gICAgICAgICAgICAgICAgcmFuZ2VFbmQgPSByYW5nZVN0YXJ0ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdyArIDI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJhbmdlU3RhcnQgPSBNYXRoLm1heCgwLCBfLmN1cnJlbnRTbGlkZSAtIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMiArIDEpKTtcbiAgICAgICAgICAgICAgICByYW5nZUVuZCA9IDIgKyAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIgKyAxKSArIF8uY3VycmVudFNsaWRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmFuZ2VTdGFydCA9IF8ub3B0aW9ucy5pbmZpbml0ZSA/IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKyBfLmN1cnJlbnRTbGlkZSA6IF8uY3VycmVudFNsaWRlO1xuICAgICAgICAgICAgcmFuZ2VFbmQgPSBNYXRoLmNlaWwocmFuZ2VTdGFydCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpO1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJhbmdlU3RhcnQgPiAwKSByYW5nZVN0YXJ0LS07XG4gICAgICAgICAgICAgICAgaWYgKHJhbmdlRW5kIDw9IF8uc2xpZGVDb3VudCkgcmFuZ2VFbmQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxvYWRSYW5nZSA9IF8uJHNsaWRlci5maW5kKCcuc2xpY2stc2xpZGUnKS5zbGljZShyYW5nZVN0YXJ0LCByYW5nZUVuZCk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5sYXp5TG9hZCA9PT0gJ2FudGljaXBhdGVkJykge1xuICAgICAgICAgICAgdmFyIHByZXZTbGlkZSA9IHJhbmdlU3RhcnQgLSAxLFxuICAgICAgICAgICAgICAgIG5leHRTbGlkZSA9IHJhbmdlRW5kLFxuICAgICAgICAgICAgICAgICRzbGlkZXMgPSBfLiRzbGlkZXIuZmluZCgnLnNsaWNrLXNsaWRlJyk7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAocHJldlNsaWRlIDwgMCkgcHJldlNsaWRlID0gXy5zbGlkZUNvdW50IC0gMTtcbiAgICAgICAgICAgICAgICBsb2FkUmFuZ2UgPSBsb2FkUmFuZ2UuYWRkKCRzbGlkZXMuZXEocHJldlNsaWRlKSk7XG4gICAgICAgICAgICAgICAgbG9hZFJhbmdlID0gbG9hZFJhbmdlLmFkZCgkc2xpZGVzLmVxKG5leHRTbGlkZSkpO1xuICAgICAgICAgICAgICAgIHByZXZTbGlkZS0tO1xuICAgICAgICAgICAgICAgIG5leHRTbGlkZSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbG9hZEltYWdlcyhsb2FkUmFuZ2UpO1xuXG4gICAgICAgIGlmIChfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgY2xvbmVSYW5nZSA9IF8uJHNsaWRlci5maW5kKCcuc2xpY2stc2xpZGUnKTtcbiAgICAgICAgICAgIGxvYWRJbWFnZXMoY2xvbmVSYW5nZSk7XG4gICAgICAgIH0gZWxzZVxuICAgICAgICBpZiAoXy5jdXJyZW50U2xpZGUgPj0gXy5zbGlkZUNvdW50IC0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgY2xvbmVSYW5nZSA9IF8uJHNsaWRlci5maW5kKCcuc2xpY2stY2xvbmVkJykuc2xpY2UoMCwgXy5vcHRpb25zLnNsaWRlc1RvU2hvdyk7XG4gICAgICAgICAgICBsb2FkSW1hZ2VzKGNsb25lUmFuZ2UpO1xuICAgICAgICB9IGVsc2UgaWYgKF8uY3VycmVudFNsaWRlID09PSAwKSB7XG4gICAgICAgICAgICBjbG9uZVJhbmdlID0gXy4kc2xpZGVyLmZpbmQoJy5zbGljay1jbG9uZWQnKS5zbGljZShfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICogLTEpO1xuICAgICAgICAgICAgbG9hZEltYWdlcyhjbG9uZVJhbmdlKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5sb2FkU2xpZGVyID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uc2V0UG9zaXRpb24oKTtcblxuICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyh7XG4gICAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgIH0pO1xuXG4gICAgICAgIF8uJHNsaWRlci5yZW1vdmVDbGFzcygnc2xpY2stbG9hZGluZycpO1xuXG4gICAgICAgIF8uaW5pdFVJKCk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5sYXp5TG9hZCA9PT0gJ3Byb2dyZXNzaXZlJykge1xuICAgICAgICAgICAgXy5wcm9ncmVzc2l2ZUxhenlMb2FkKCk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUubmV4dCA9IFNsaWNrLnByb3RvdHlwZS5zbGlja05leHQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5jaGFuZ2VTbGlkZSh7XG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ25leHQnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5vcmllbnRhdGlvbkNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLmNoZWNrUmVzcG9uc2l2ZSgpO1xuICAgICAgICBfLnNldFBvc2l0aW9uKCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnBhdXNlID0gU2xpY2sucHJvdG90eXBlLnNsaWNrUGF1c2UgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5hdXRvUGxheUNsZWFyKCk7XG4gICAgICAgIF8ucGF1c2VkID0gdHJ1ZTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucGxheSA9IFNsaWNrLnByb3RvdHlwZS5zbGlja1BsYXkgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5hdXRvUGxheSgpO1xuICAgICAgICBfLm9wdGlvbnMuYXV0b3BsYXkgPSB0cnVlO1xuICAgICAgICBfLnBhdXNlZCA9IGZhbHNlO1xuICAgICAgICBfLmZvY3Vzc2VkID0gZmFsc2U7XG4gICAgICAgIF8uaW50ZXJydXB0ZWQgPSBmYWxzZTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucG9zdFNsaWRlID0gZnVuY3Rpb24oaW5kZXgpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYoICFfLnVuc2xpY2tlZCApIHtcblxuICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2FmdGVyQ2hhbmdlJywgW18sIGluZGV4XSk7XG5cbiAgICAgICAgICAgIF8uYW5pbWF0aW5nID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAgICAgXy5zZXRQb3NpdGlvbigpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfLnN3aXBlTGVmdCA9IG51bGw7XG5cbiAgICAgICAgICAgIGlmICggXy5vcHRpb25zLmF1dG9wbGF5ICkge1xuICAgICAgICAgICAgICAgIF8uYXV0b1BsYXkoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy5pbml0QURBKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLmZvY3VzT25DaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyICRjdXJyZW50U2xpZGUgPSAkKF8uJHNsaWRlcy5nZXQoXy5jdXJyZW50U2xpZGUpKTtcbiAgICAgICAgICAgICAgICAgICAgJGN1cnJlbnRTbGlkZS5hdHRyKCd0YWJpbmRleCcsIDApLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucHJldiA9IFNsaWNrLnByb3RvdHlwZS5zbGlja1ByZXYgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5jaGFuZ2VTbGlkZSh7XG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ3ByZXZpb3VzJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucHJldmVudERlZmF1bHQgPSBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnByb2dyZXNzaXZlTGF6eUxvYWQgPSBmdW5jdGlvbiggdHJ5Q291bnQgKSB7XG5cbiAgICAgICAgdHJ5Q291bnQgPSB0cnlDb3VudCB8fCAxO1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgICRpbWdzVG9Mb2FkID0gJCggJ2ltZ1tkYXRhLWxhenldJywgXy4kc2xpZGVyICksXG4gICAgICAgICAgICBpbWFnZSxcbiAgICAgICAgICAgIGltYWdlU291cmNlLFxuICAgICAgICAgICAgaW1hZ2VTcmNTZXQsXG4gICAgICAgICAgICBpbWFnZVNpemVzLFxuICAgICAgICAgICAgaW1hZ2VUb0xvYWQ7XG5cbiAgICAgICAgaWYgKCAkaW1nc1RvTG9hZC5sZW5ndGggKSB7XG5cbiAgICAgICAgICAgIGltYWdlID0gJGltZ3NUb0xvYWQuZmlyc3QoKTtcbiAgICAgICAgICAgIGltYWdlU291cmNlID0gaW1hZ2UuYXR0cignZGF0YS1sYXp5Jyk7XG4gICAgICAgICAgICBpbWFnZVNyY1NldCA9IGltYWdlLmF0dHIoJ2RhdGEtc3Jjc2V0Jyk7XG4gICAgICAgICAgICBpbWFnZVNpemVzICA9IGltYWdlLmF0dHIoJ2RhdGEtc2l6ZXMnKSB8fCBfLiRzbGlkZXIuYXR0cignZGF0YS1zaXplcycpO1xuICAgICAgICAgICAgaW1hZ2VUb0xvYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICAgICAgICAgICAgaW1hZ2VUb0xvYWQub25sb2FkID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoaW1hZ2VTcmNTZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdzcmNzZXQnLCBpbWFnZVNyY1NldCApO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbWFnZVNpemVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdzaXplcycsIGltYWdlU2l6ZXMgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCAnc3JjJywgaW1hZ2VTb3VyY2UgKVxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignZGF0YS1sYXp5IGRhdGEtc3Jjc2V0IGRhdGEtc2l6ZXMnKVxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLWxvYWRpbmcnKTtcblxuICAgICAgICAgICAgICAgIGlmICggXy5vcHRpb25zLmFkYXB0aXZlSGVpZ2h0ID09PSB0cnVlICkge1xuICAgICAgICAgICAgICAgICAgICBfLnNldFBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2xhenlMb2FkZWQnLCBbIF8sIGltYWdlLCBpbWFnZVNvdXJjZSBdKTtcbiAgICAgICAgICAgICAgICBfLnByb2dyZXNzaXZlTGF6eUxvYWQoKTtcblxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaW1hZ2VUb0xvYWQub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgaWYgKCB0cnlDb3VudCA8IDMgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAqIHRyeSB0byBsb2FkIHRoZSBpbWFnZSAzIHRpbWVzLFxuICAgICAgICAgICAgICAgICAgICAgKiBsZWF2ZSBhIHNsaWdodCBkZWxheSBzbyB3ZSBkb24ndCBnZXRcbiAgICAgICAgICAgICAgICAgICAgICogc2VydmVycyBibG9ja2luZyB0aGUgcmVxdWVzdC5cbiAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5wcm9ncmVzc2l2ZUxhenlMb2FkKCB0cnlDb3VudCArIDEgKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgNTAwICk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQXR0ciggJ2RhdGEtbGF6eScgKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCAnc2xpY2stbG9hZGluZycgKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCAnc2xpY2stbGF6eWxvYWQtZXJyb3InICk7XG5cbiAgICAgICAgICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2xhenlMb2FkRXJyb3InLCBbIF8sIGltYWdlLCBpbWFnZVNvdXJjZSBdKTtcblxuICAgICAgICAgICAgICAgICAgICBfLnByb2dyZXNzaXZlTGF6eUxvYWQoKTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaW1hZ2VUb0xvYWQuc3JjID0gaW1hZ2VTb3VyY2U7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2FsbEltYWdlc0xvYWRlZCcsIFsgXyBdKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnJlZnJlc2ggPSBmdW5jdGlvbiggaW5pdGlhbGl6aW5nICkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcywgY3VycmVudFNsaWRlLCBsYXN0VmlzaWJsZUluZGV4O1xuXG4gICAgICAgIGxhc3RWaXNpYmxlSW5kZXggPSBfLnNsaWRlQ291bnQgLSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93O1xuXG4gICAgICAgIC8vIGluIG5vbi1pbmZpbml0ZSBzbGlkZXJzLCB3ZSBkb24ndCB3YW50IHRvIGdvIHBhc3QgdGhlXG4gICAgICAgIC8vIGxhc3QgdmlzaWJsZSBpbmRleC5cbiAgICAgICAgaWYoICFfLm9wdGlvbnMuaW5maW5pdGUgJiYgKCBfLmN1cnJlbnRTbGlkZSA+IGxhc3RWaXNpYmxlSW5kZXggKSkge1xuICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSBsYXN0VmlzaWJsZUluZGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgbGVzcyBzbGlkZXMgdGhhbiB0byBzaG93LCBnbyB0byBzdGFydC5cbiAgICAgICAgaWYgKCBfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyApIHtcbiAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gMDtcblxuICAgICAgICB9XG5cbiAgICAgICAgY3VycmVudFNsaWRlID0gXy5jdXJyZW50U2xpZGU7XG5cbiAgICAgICAgXy5kZXN0cm95KHRydWUpO1xuXG4gICAgICAgICQuZXh0ZW5kKF8sIF8uaW5pdGlhbHMsIHsgY3VycmVudFNsaWRlOiBjdXJyZW50U2xpZGUgfSk7XG5cbiAgICAgICAgXy5pbml0KCk7XG5cbiAgICAgICAgaWYoICFpbml0aWFsaXppbmcgKSB7XG5cbiAgICAgICAgICAgIF8uY2hhbmdlU2xpZGUoe1xuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ2luZGV4JyxcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGN1cnJlbnRTbGlkZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIGZhbHNlKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnJlZ2lzdGVyQnJlYWtwb2ludHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsIGJyZWFrcG9pbnQsIGN1cnJlbnRCcmVha3BvaW50LCBsLFxuICAgICAgICAgICAgcmVzcG9uc2l2ZVNldHRpbmdzID0gXy5vcHRpb25zLnJlc3BvbnNpdmUgfHwgbnVsbDtcblxuICAgICAgICBpZiAoICQudHlwZShyZXNwb25zaXZlU2V0dGluZ3MpID09PSAnYXJyYXknICYmIHJlc3BvbnNpdmVTZXR0aW5ncy5sZW5ndGggKSB7XG5cbiAgICAgICAgICAgIF8ucmVzcG9uZFRvID0gXy5vcHRpb25zLnJlc3BvbmRUbyB8fCAnd2luZG93JztcblxuICAgICAgICAgICAgZm9yICggYnJlYWtwb2ludCBpbiByZXNwb25zaXZlU2V0dGluZ3MgKSB7XG5cbiAgICAgICAgICAgICAgICBsID0gXy5icmVha3BvaW50cy5sZW5ndGgtMTtcblxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zaXZlU2V0dGluZ3MuaGFzT3duUHJvcGVydHkoYnJlYWtwb2ludCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEJyZWFrcG9pbnQgPSByZXNwb25zaXZlU2V0dGluZ3NbYnJlYWtwb2ludF0uYnJlYWtwb2ludDtcblxuICAgICAgICAgICAgICAgICAgICAvLyBsb29wIHRocm91Z2ggdGhlIGJyZWFrcG9pbnRzIGFuZCBjdXQgb3V0IGFueSBleGlzdGluZ1xuICAgICAgICAgICAgICAgICAgICAvLyBvbmVzIHdpdGggdGhlIHNhbWUgYnJlYWtwb2ludCBudW1iZXIsIHdlIGRvbid0IHdhbnQgZHVwZXMuXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlKCBsID49IDAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiggXy5icmVha3BvaW50c1tsXSAmJiBfLmJyZWFrcG9pbnRzW2xdID09PSBjdXJyZW50QnJlYWtwb2ludCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmJyZWFrcG9pbnRzLnNwbGljZShsLDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbC0tO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgXy5icmVha3BvaW50cy5wdXNoKGN1cnJlbnRCcmVha3BvaW50KTtcbiAgICAgICAgICAgICAgICAgICAgXy5icmVha3BvaW50U2V0dGluZ3NbY3VycmVudEJyZWFrcG9pbnRdID0gcmVzcG9uc2l2ZVNldHRpbmdzW2JyZWFrcG9pbnRdLnNldHRpbmdzO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF8uYnJlYWtwb2ludHMuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICggXy5vcHRpb25zLm1vYmlsZUZpcnN0ICkgPyBhLWIgOiBiLWE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnJlaW5pdCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLiRzbGlkZXMgPVxuICAgICAgICAgICAgXy4kc2xpZGVUcmFja1xuICAgICAgICAgICAgICAgIC5jaGlsZHJlbihfLm9wdGlvbnMuc2xpZGUpXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1zbGlkZScpO1xuXG4gICAgICAgIF8uc2xpZGVDb3VudCA9IF8uJHNsaWRlcy5sZW5ndGg7XG5cbiAgICAgICAgaWYgKF8uY3VycmVudFNsaWRlID49IF8uc2xpZGVDb3VudCAmJiBfLmN1cnJlbnRTbGlkZSAhPT0gMCkge1xuICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSBfLmN1cnJlbnRTbGlkZSAtIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgXy5yZWdpc3RlckJyZWFrcG9pbnRzKCk7XG5cbiAgICAgICAgXy5zZXRQcm9wcygpO1xuICAgICAgICBfLnNldHVwSW5maW5pdGUoKTtcbiAgICAgICAgXy5idWlsZEFycm93cygpO1xuICAgICAgICBfLnVwZGF0ZUFycm93cygpO1xuICAgICAgICBfLmluaXRBcnJvd0V2ZW50cygpO1xuICAgICAgICBfLmJ1aWxkRG90cygpO1xuICAgICAgICBfLnVwZGF0ZURvdHMoKTtcbiAgICAgICAgXy5pbml0RG90RXZlbnRzKCk7XG4gICAgICAgIF8uY2xlYW5VcFNsaWRlRXZlbnRzKCk7XG4gICAgICAgIF8uaW5pdFNsaWRlRXZlbnRzKCk7XG5cbiAgICAgICAgXy5jaGVja1Jlc3BvbnNpdmUoZmFsc2UsIHRydWUpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZm9jdXNPblNlbGVjdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgJChfLiRzbGlkZVRyYWNrKS5jaGlsZHJlbigpLm9uKCdjbGljay5zbGljaycsIF8uc2VsZWN0SGFuZGxlcik7XG4gICAgICAgIH1cblxuICAgICAgICBfLnNldFNsaWRlQ2xhc3Nlcyh0eXBlb2YgXy5jdXJyZW50U2xpZGUgPT09ICdudW1iZXInID8gXy5jdXJyZW50U2xpZGUgOiAwKTtcblxuICAgICAgICBfLnNldFBvc2l0aW9uKCk7XG4gICAgICAgIF8uZm9jdXNIYW5kbGVyKCk7XG5cbiAgICAgICAgXy5wYXVzZWQgPSAhXy5vcHRpb25zLmF1dG9wbGF5O1xuICAgICAgICBfLmF1dG9QbGF5KCk7XG5cbiAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ3JlSW5pdCcsIFtfXSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgIT09IF8ud2luZG93V2lkdGgpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChfLndpbmRvd0RlbGF5KTtcbiAgICAgICAgICAgIF8ud2luZG93RGVsYXkgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBfLndpbmRvd1dpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XG4gICAgICAgICAgICAgICAgXy5jaGVja1Jlc3BvbnNpdmUoKTtcbiAgICAgICAgICAgICAgICBpZiggIV8udW5zbGlja2VkICkgeyBfLnNldFBvc2l0aW9uKCk7IH1cbiAgICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucmVtb3ZlU2xpZGUgPSBTbGljay5wcm90b3R5cGUuc2xpY2tSZW1vdmUgPSBmdW5jdGlvbihpbmRleCwgcmVtb3ZlQmVmb3JlLCByZW1vdmVBbGwpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHR5cGVvZihpbmRleCkgPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgcmVtb3ZlQmVmb3JlID0gaW5kZXg7XG4gICAgICAgICAgICBpbmRleCA9IHJlbW92ZUJlZm9yZSA9PT0gdHJ1ZSA/IDAgOiBfLnNsaWRlQ291bnQgLSAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaW5kZXggPSByZW1vdmVCZWZvcmUgPT09IHRydWUgPyAtLWluZGV4IDogaW5kZXg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDwgMSB8fCBpbmRleCA8IDAgfHwgaW5kZXggPiBfLnNsaWRlQ291bnQgLSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBfLnVubG9hZCgpO1xuXG4gICAgICAgIGlmIChyZW1vdmVBbGwgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oKS5yZW1vdmUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKS5lcShpbmRleCkucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBfLiRzbGlkZXMgPSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSk7XG5cbiAgICAgICAgXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmRldGFjaCgpO1xuXG4gICAgICAgIF8uJHNsaWRlVHJhY2suYXBwZW5kKF8uJHNsaWRlcyk7XG5cbiAgICAgICAgXy4kc2xpZGVzQ2FjaGUgPSBfLiRzbGlkZXM7XG5cbiAgICAgICAgXy5yZWluaXQoKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0Q1NTID0gZnVuY3Rpb24ocG9zaXRpb24pIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBwb3NpdGlvblByb3BzID0ge30sXG4gICAgICAgICAgICB4LCB5O1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMucnRsID09PSB0cnVlKSB7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IC1wb3NpdGlvbjtcbiAgICAgICAgfVxuICAgICAgICB4ID0gXy5wb3NpdGlvblByb3AgPT0gJ2xlZnQnID8gTWF0aC5jZWlsKHBvc2l0aW9uKSArICdweCcgOiAnMHB4JztcbiAgICAgICAgeSA9IF8ucG9zaXRpb25Qcm9wID09ICd0b3AnID8gTWF0aC5jZWlsKHBvc2l0aW9uKSArICdweCcgOiAnMHB4JztcblxuICAgICAgICBwb3NpdGlvblByb3BzW18ucG9zaXRpb25Qcm9wXSA9IHBvc2l0aW9uO1xuXG4gICAgICAgIGlmIChfLnRyYW5zZm9ybXNFbmFibGVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3MocG9zaXRpb25Qcm9wcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwb3NpdGlvblByb3BzID0ge307XG4gICAgICAgICAgICBpZiAoXy5jc3NUcmFuc2l0aW9ucyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvblByb3BzW18uYW5pbVR5cGVdID0gJ3RyYW5zbGF0ZSgnICsgeCArICcsICcgKyB5ICsgJyknO1xuICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKHBvc2l0aW9uUHJvcHMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvblByb3BzW18uYW5pbVR5cGVdID0gJ3RyYW5zbGF0ZTNkKCcgKyB4ICsgJywgJyArIHkgKyAnLCAwcHgpJztcbiAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyhwb3NpdGlvblByb3BzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXREaW1lbnNpb25zID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLiRsaXN0LmNzcyh7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICgnMHB4ICcgKyBfLm9wdGlvbnMuY2VudGVyUGFkZGluZylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uJGxpc3QuaGVpZ2h0KF8uJHNsaWRlcy5maXJzdCgpLm91dGVySGVpZ2h0KHRydWUpICogXy5vcHRpb25zLnNsaWRlc1RvU2hvdyk7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLiRsaXN0LmNzcyh7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IChfLm9wdGlvbnMuY2VudGVyUGFkZGluZyArICcgMHB4JylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIF8ubGlzdFdpZHRoID0gXy4kbGlzdC53aWR0aCgpO1xuICAgICAgICBfLmxpc3RIZWlnaHQgPSBfLiRsaXN0LmhlaWdodCgpO1xuXG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UgJiYgXy5vcHRpb25zLnZhcmlhYmxlV2lkdGggPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfLnNsaWRlV2lkdGggPSBNYXRoLmNlaWwoXy5saXN0V2lkdGggLyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KTtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2sud2lkdGgoTWF0aC5jZWlsKChfLnNsaWRlV2lkdGggKiBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS5sZW5ndGgpKSk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChfLm9wdGlvbnMudmFyaWFibGVXaWR0aCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay53aWR0aCg1MDAwICogXy5zbGlkZUNvdW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uc2xpZGVXaWR0aCA9IE1hdGguY2VpbChfLmxpc3RXaWR0aCk7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmhlaWdodChNYXRoLmNlaWwoKF8uJHNsaWRlcy5maXJzdCgpLm91dGVySGVpZ2h0KHRydWUpICogXy4kc2xpZGVUcmFjay5jaGlsZHJlbignLnNsaWNrLXNsaWRlJykubGVuZ3RoKSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG9mZnNldCA9IF8uJHNsaWRlcy5maXJzdCgpLm91dGVyV2lkdGgodHJ1ZSkgLSBfLiRzbGlkZXMuZmlyc3QoKS53aWR0aCgpO1xuICAgICAgICBpZiAoXy5vcHRpb25zLnZhcmlhYmxlV2lkdGggPT09IGZhbHNlKSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS53aWR0aChfLnNsaWRlV2lkdGggLSBvZmZzZXQpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRGYWRlID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgdGFyZ2V0TGVmdDtcblxuICAgICAgICBfLiRzbGlkZXMuZWFjaChmdW5jdGlvbihpbmRleCwgZWxlbWVudCkge1xuICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IChfLnNsaWRlV2lkdGggKiBpbmRleCkgKiAtMTtcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMucnRsID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgJChlbGVtZW50KS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IHRhcmdldExlZnQsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4IC0gMixcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiB0YXJnZXRMZWZ0LFxuICAgICAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgICAgIHpJbmRleDogXy5vcHRpb25zLnpJbmRleCAtIDIsXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgXy4kc2xpZGVzLmVxKF8uY3VycmVudFNsaWRlKS5jc3Moe1xuICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4IC0gMSxcbiAgICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNldEhlaWdodCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA9PT0gMSAmJiBfLm9wdGlvbnMuYWRhcHRpdmVIZWlnaHQgPT09IHRydWUgJiYgXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdmFyIHRhcmdldEhlaWdodCA9IF8uJHNsaWRlcy5lcShfLmN1cnJlbnRTbGlkZSkub3V0ZXJIZWlnaHQodHJ1ZSk7XG4gICAgICAgICAgICBfLiRsaXN0LmNzcygnaGVpZ2h0JywgdGFyZ2V0SGVpZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRPcHRpb24gPVxuICAgIFNsaWNrLnByb3RvdHlwZS5zbGlja1NldE9wdGlvbiA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBhY2NlcHRzIGFyZ3VtZW50cyBpbiBmb3JtYXQgb2Y6XG4gICAgICAgICAqXG4gICAgICAgICAqICAtIGZvciBjaGFuZ2luZyBhIHNpbmdsZSBvcHRpb24ncyB2YWx1ZTpcbiAgICAgICAgICogICAgIC5zbGljayhcInNldE9wdGlvblwiLCBvcHRpb24sIHZhbHVlLCByZWZyZXNoIClcbiAgICAgICAgICpcbiAgICAgICAgICogIC0gZm9yIGNoYW5naW5nIGEgc2V0IG9mIHJlc3BvbnNpdmUgb3B0aW9uczpcbiAgICAgICAgICogICAgIC5zbGljayhcInNldE9wdGlvblwiLCAncmVzcG9uc2l2ZScsIFt7fSwgLi4uXSwgcmVmcmVzaCApXG4gICAgICAgICAqXG4gICAgICAgICAqICAtIGZvciB1cGRhdGluZyBtdWx0aXBsZSB2YWx1ZXMgYXQgb25jZSAobm90IHJlc3BvbnNpdmUpXG4gICAgICAgICAqICAgICAuc2xpY2soXCJzZXRPcHRpb25cIiwgeyAnb3B0aW9uJzogdmFsdWUsIC4uLiB9LCByZWZyZXNoIClcbiAgICAgICAgICovXG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLCBsLCBpdGVtLCBvcHRpb24sIHZhbHVlLCByZWZyZXNoID0gZmFsc2UsIHR5cGU7XG5cbiAgICAgICAgaWYoICQudHlwZSggYXJndW1lbnRzWzBdICkgPT09ICdvYmplY3QnICkge1xuXG4gICAgICAgICAgICBvcHRpb24gPSAgYXJndW1lbnRzWzBdO1xuICAgICAgICAgICAgcmVmcmVzaCA9IGFyZ3VtZW50c1sxXTtcbiAgICAgICAgICAgIHR5cGUgPSAnbXVsdGlwbGUnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoICQudHlwZSggYXJndW1lbnRzWzBdICkgPT09ICdzdHJpbmcnICkge1xuXG4gICAgICAgICAgICBvcHRpb24gPSAgYXJndW1lbnRzWzBdO1xuICAgICAgICAgICAgdmFsdWUgPSBhcmd1bWVudHNbMV07XG4gICAgICAgICAgICByZWZyZXNoID0gYXJndW1lbnRzWzJdO1xuXG4gICAgICAgICAgICBpZiAoIGFyZ3VtZW50c1swXSA9PT0gJ3Jlc3BvbnNpdmUnICYmICQudHlwZSggYXJndW1lbnRzWzFdICkgPT09ICdhcnJheScgKSB7XG5cbiAgICAgICAgICAgICAgICB0eXBlID0gJ3Jlc3BvbnNpdmUnO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCB0eXBlb2YgYXJndW1lbnRzWzFdICE9PSAndW5kZWZpbmVkJyApIHtcblxuICAgICAgICAgICAgICAgIHR5cGUgPSAnc2luZ2xlJztcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIHR5cGUgPT09ICdzaW5nbGUnICkge1xuXG4gICAgICAgICAgICBfLm9wdGlvbnNbb3B0aW9uXSA9IHZhbHVlO1xuXG5cbiAgICAgICAgfSBlbHNlIGlmICggdHlwZSA9PT0gJ211bHRpcGxlJyApIHtcblxuICAgICAgICAgICAgJC5lYWNoKCBvcHRpb24gLCBmdW5jdGlvbiggb3B0LCB2YWwgKSB7XG5cbiAgICAgICAgICAgICAgICBfLm9wdGlvbnNbb3B0XSA9IHZhbDtcblxuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICB9IGVsc2UgaWYgKCB0eXBlID09PSAncmVzcG9uc2l2ZScgKSB7XG5cbiAgICAgICAgICAgIGZvciAoIGl0ZW0gaW4gdmFsdWUgKSB7XG5cbiAgICAgICAgICAgICAgICBpZiggJC50eXBlKCBfLm9wdGlvbnMucmVzcG9uc2l2ZSApICE9PSAnYXJyYXknICkge1xuXG4gICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucy5yZXNwb25zaXZlID0gWyB2YWx1ZVtpdGVtXSBdO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICBsID0gXy5vcHRpb25zLnJlc3BvbnNpdmUubGVuZ3RoLTE7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gbG9vcCB0aHJvdWdoIHRoZSByZXNwb25zaXZlIG9iamVjdCBhbmQgc3BsaWNlIG91dCBkdXBsaWNhdGVzLlxuICAgICAgICAgICAgICAgICAgICB3aGlsZSggbCA+PSAwICkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiggXy5vcHRpb25zLnJlc3BvbnNpdmVbbF0uYnJlYWtwb2ludCA9PT0gdmFsdWVbaXRlbV0uYnJlYWtwb2ludCApIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucy5yZXNwb25zaXZlLnNwbGljZShsLDEpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGwtLTtcblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zLnJlc3BvbnNpdmUucHVzaCggdmFsdWVbaXRlbV0gKTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIHJlZnJlc2ggKSB7XG5cbiAgICAgICAgICAgIF8udW5sb2FkKCk7XG4gICAgICAgICAgICBfLnJlaW5pdCgpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0UG9zaXRpb24gPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5zZXREaW1lbnNpb25zKCk7XG5cbiAgICAgICAgXy5zZXRIZWlnaHQoKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfLnNldENTUyhfLmdldExlZnQoXy5jdXJyZW50U2xpZGUpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uc2V0RmFkZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ3NldFBvc2l0aW9uJywgW19dKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0UHJvcHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBib2R5U3R5bGUgPSBkb2N1bWVudC5ib2R5LnN0eWxlO1xuXG4gICAgICAgIF8ucG9zaXRpb25Qcm9wID0gXy5vcHRpb25zLnZlcnRpY2FsID09PSB0cnVlID8gJ3RvcCcgOiAnbGVmdCc7XG5cbiAgICAgICAgaWYgKF8ucG9zaXRpb25Qcm9wID09PSAndG9wJykge1xuICAgICAgICAgICAgXy4kc2xpZGVyLmFkZENsYXNzKCdzbGljay12ZXJ0aWNhbCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy4kc2xpZGVyLnJlbW92ZUNsYXNzKCdzbGljay12ZXJ0aWNhbCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJvZHlTdHlsZS5XZWJraXRUcmFuc2l0aW9uICE9PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICAgIGJvZHlTdHlsZS5Nb3pUcmFuc2l0aW9uICE9PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICAgIGJvZHlTdHlsZS5tc1RyYW5zaXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy51c2VDU1MgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLmNzc1RyYW5zaXRpb25zID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggXy5vcHRpb25zLmZhZGUgKSB7XG4gICAgICAgICAgICBpZiAoIHR5cGVvZiBfLm9wdGlvbnMuekluZGV4ID09PSAnbnVtYmVyJyApIHtcbiAgICAgICAgICAgICAgICBpZiggXy5vcHRpb25zLnpJbmRleCA8IDMgKSB7XG4gICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucy56SW5kZXggPSAzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgXy5vcHRpb25zLnpJbmRleCA9IF8uZGVmYXVsdHMuekluZGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJvZHlTdHlsZS5PVHJhbnNmb3JtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIF8uYW5pbVR5cGUgPSAnT1RyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zZm9ybVR5cGUgPSAnLW8tdHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNpdGlvblR5cGUgPSAnT1RyYW5zaXRpb24nO1xuICAgICAgICAgICAgaWYgKGJvZHlTdHlsZS5wZXJzcGVjdGl2ZVByb3BlcnR5ID09PSB1bmRlZmluZWQgJiYgYm9keVN0eWxlLndlYmtpdFBlcnNwZWN0aXZlID09PSB1bmRlZmluZWQpIF8uYW5pbVR5cGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm9keVN0eWxlLk1velRyYW5zZm9ybSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBfLmFuaW1UeXBlID0gJ01velRyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zZm9ybVR5cGUgPSAnLW1vei10cmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2l0aW9uVHlwZSA9ICdNb3pUcmFuc2l0aW9uJztcbiAgICAgICAgICAgIGlmIChib2R5U3R5bGUucGVyc3BlY3RpdmVQcm9wZXJ0eSA9PT0gdW5kZWZpbmVkICYmIGJvZHlTdHlsZS5Nb3pQZXJzcGVjdGl2ZSA9PT0gdW5kZWZpbmVkKSBfLmFuaW1UeXBlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvZHlTdHlsZS53ZWJraXRUcmFuc2Zvcm0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgXy5hbmltVHlwZSA9ICd3ZWJraXRUcmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2Zvcm1UeXBlID0gJy13ZWJraXQtdHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNpdGlvblR5cGUgPSAnd2Via2l0VHJhbnNpdGlvbic7XG4gICAgICAgICAgICBpZiAoYm9keVN0eWxlLnBlcnNwZWN0aXZlUHJvcGVydHkgPT09IHVuZGVmaW5lZCAmJiBib2R5U3R5bGUud2Via2l0UGVyc3BlY3RpdmUgPT09IHVuZGVmaW5lZCkgXy5hbmltVHlwZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChib2R5U3R5bGUubXNUcmFuc2Zvcm0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgXy5hbmltVHlwZSA9ICdtc1RyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zZm9ybVR5cGUgPSAnLW1zLXRyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zaXRpb25UeXBlID0gJ21zVHJhbnNpdGlvbic7XG4gICAgICAgICAgICBpZiAoYm9keVN0eWxlLm1zVHJhbnNmb3JtID09PSB1bmRlZmluZWQpIF8uYW5pbVR5cGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm9keVN0eWxlLnRyYW5zZm9ybSAhPT0gdW5kZWZpbmVkICYmIF8uYW5pbVR5cGUgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfLmFuaW1UeXBlID0gJ3RyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zZm9ybVR5cGUgPSAndHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNpdGlvblR5cGUgPSAndHJhbnNpdGlvbic7XG4gICAgICAgIH1cbiAgICAgICAgXy50cmFuc2Zvcm1zRW5hYmxlZCA9IF8ub3B0aW9ucy51c2VUcmFuc2Zvcm0gJiYgKF8uYW5pbVR5cGUgIT09IG51bGwgJiYgXy5hbmltVHlwZSAhPT0gZmFsc2UpO1xuICAgIH07XG5cblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRTbGlkZUNsYXNzZXMgPSBmdW5jdGlvbihpbmRleCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGNlbnRlck9mZnNldCwgYWxsU2xpZGVzLCBpbmRleE9mZnNldCwgcmVtYWluZGVyO1xuXG4gICAgICAgIGFsbFNsaWRlcyA9IF8uJHNsaWRlclxuICAgICAgICAgICAgLmZpbmQoJy5zbGljay1zbGlkZScpXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLWFjdGl2ZSBzbGljay1jZW50ZXIgc2xpY2stY3VycmVudCcpXG4gICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuXG4gICAgICAgIF8uJHNsaWRlc1xuICAgICAgICAgICAgLmVxKGluZGV4KVxuICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1jdXJyZW50Jyk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG5cbiAgICAgICAgICAgIHZhciBldmVuQ29lZiA9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgJSAyID09PSAwID8gMSA6IDA7XG5cbiAgICAgICAgICAgIGNlbnRlck9mZnNldCA9IE1hdGguZmxvb3IoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIpO1xuXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPj0gY2VudGVyT2Zmc2V0ICYmIGluZGV4IDw9IChfLnNsaWRlQ291bnQgLSAxKSAtIGNlbnRlck9mZnNldCkge1xuICAgICAgICAgICAgICAgICAgICBfLiRzbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZShpbmRleCAtIGNlbnRlck9mZnNldCArIGV2ZW5Db2VmLCBpbmRleCArIGNlbnRlck9mZnNldCArIDEpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaW5kZXhPZmZzZXQgPSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICsgaW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIGFsbFNsaWRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKGluZGV4T2Zmc2V0IC0gY2VudGVyT2Zmc2V0ICsgMSArIGV2ZW5Db2VmLCBpbmRleE9mZnNldCArIGNlbnRlck9mZnNldCArIDIpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuXG4gICAgICAgICAgICAgICAgICAgIGFsbFNsaWRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgLmVxKGFsbFNsaWRlcy5sZW5ndGggLSAxIC0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stY2VudGVyJyk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID09PSBfLnNsaWRlQ291bnQgLSAxKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgYWxsU2xpZGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAuZXEoXy5vcHRpb25zLnNsaWRlc1RvU2hvdylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stY2VudGVyJyk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXy4kc2xpZGVzXG4gICAgICAgICAgICAgICAgLmVxKGluZGV4KVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stY2VudGVyJyk7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPD0gKF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpKSB7XG5cbiAgICAgICAgICAgICAgICBfLiRzbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgLnNsaWNlKGluZGV4LCBpbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYWxsU2xpZGVzLmxlbmd0aCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgICAgICBhbGxTbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIHJlbWFpbmRlciA9IF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3c7XG4gICAgICAgICAgICAgICAgaW5kZXhPZmZzZXQgPSBfLm9wdGlvbnMuaW5maW5pdGUgPT09IHRydWUgPyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICsgaW5kZXggOiBpbmRleDtcblxuICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID09IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAmJiAoXy5zbGlkZUNvdW50IC0gaW5kZXgpIDwgXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICAgICAgICAgIGFsbFNsaWRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKGluZGV4T2Zmc2V0IC0gKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLSByZW1haW5kZXIpLCBpbmRleE9mZnNldCArIHJlbWFpbmRlcilcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICBhbGxTbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZShpbmRleE9mZnNldCwgaW5kZXhPZmZzZXQgKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5sYXp5TG9hZCA9PT0gJ29uZGVtYW5kJyB8fCBfLm9wdGlvbnMubGF6eUxvYWQgPT09ICdhbnRpY2lwYXRlZCcpIHtcbiAgICAgICAgICAgIF8ubGF6eUxvYWQoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0dXBJbmZpbml0ZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGksIHNsaWRlSW5kZXgsIGluZmluaXRlQ291bnQ7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLm9wdGlvbnMuY2VudGVyTW9kZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHtcblxuICAgICAgICAgICAgc2xpZGVJbmRleCA9IG51bGw7XG5cbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5maW5pdGVDb3VudCA9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKyAxO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGluZmluaXRlQ291bnQgPSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvciAoaSA9IF8uc2xpZGVDb3VudDsgaSA+IChfLnNsaWRlQ291bnQgLVxuICAgICAgICAgICAgICAgICAgICAgICAgaW5maW5pdGVDb3VudCk7IGkgLT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZUluZGV4ID0gaSAtIDE7XG4gICAgICAgICAgICAgICAgICAgICQoXy4kc2xpZGVzW3NsaWRlSW5kZXhdKS5jbG9uZSh0cnVlKS5hdHRyKCdpZCcsICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtc2xpY2staW5kZXgnLCBzbGlkZUluZGV4IC0gXy5zbGlkZUNvdW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnByZXBlbmRUbyhfLiRzbGlkZVRyYWNrKS5hZGRDbGFzcygnc2xpY2stY2xvbmVkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBpbmZpbml0ZUNvdW50ICArIF8uc2xpZGVDb3VudDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlSW5kZXggPSBpO1xuICAgICAgICAgICAgICAgICAgICAkKF8uJHNsaWRlc1tzbGlkZUluZGV4XSkuY2xvbmUodHJ1ZSkuYXR0cignaWQnLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLXNsaWNrLWluZGV4Jywgc2xpZGVJbmRleCArIF8uc2xpZGVDb3VudClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmRUbyhfLiRzbGlkZVRyYWNrKS5hZGRDbGFzcygnc2xpY2stY2xvbmVkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suZmluZCgnLnNsaWNrLWNsb25lZCcpLmZpbmQoJ1tpZF0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoJ2lkJywgJycpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5pbnRlcnJ1cHQgPSBmdW5jdGlvbiggdG9nZ2xlICkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiggIXRvZ2dsZSApIHtcbiAgICAgICAgICAgIF8uYXV0b1BsYXkoKTtcbiAgICAgICAgfVxuICAgICAgICBfLmludGVycnVwdGVkID0gdG9nZ2xlO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZWxlY3RIYW5kbGVyID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgdmFyIHRhcmdldEVsZW1lbnQgPVxuICAgICAgICAgICAgJChldmVudC50YXJnZXQpLmlzKCcuc2xpY2stc2xpZGUnKSA/XG4gICAgICAgICAgICAgICAgJChldmVudC50YXJnZXQpIDpcbiAgICAgICAgICAgICAgICAkKGV2ZW50LnRhcmdldCkucGFyZW50cygnLnNsaWNrLXNsaWRlJyk7XG5cbiAgICAgICAgdmFyIGluZGV4ID0gcGFyc2VJbnQodGFyZ2V0RWxlbWVudC5hdHRyKCdkYXRhLXNsaWNrLWluZGV4JykpO1xuXG4gICAgICAgIGlmICghaW5kZXgpIGluZGV4ID0gMDtcblxuICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgXy5zbGlkZUhhbmRsZXIoaW5kZXgsIGZhbHNlLCB0cnVlKTtcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICB9XG5cbiAgICAgICAgXy5zbGlkZUhhbmRsZXIoaW5kZXgpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zbGlkZUhhbmRsZXIgPSBmdW5jdGlvbihpbmRleCwgc3luYywgZG9udEFuaW1hdGUpIHtcblxuICAgICAgICB2YXIgdGFyZ2V0U2xpZGUsIGFuaW1TbGlkZSwgb2xkU2xpZGUsIHNsaWRlTGVmdCwgdGFyZ2V0TGVmdCA9IG51bGwsXG4gICAgICAgICAgICBfID0gdGhpcywgbmF2VGFyZ2V0O1xuXG4gICAgICAgIHN5bmMgPSBzeW5jIHx8IGZhbHNlO1xuXG4gICAgICAgIGlmIChfLmFuaW1hdGluZyA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMud2FpdEZvckFuaW1hdGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gdHJ1ZSAmJiBfLmN1cnJlbnRTbGlkZSA9PT0gaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzeW5jID09PSBmYWxzZSkge1xuICAgICAgICAgICAgXy5hc05hdkZvcihpbmRleCk7XG4gICAgICAgIH1cblxuICAgICAgICB0YXJnZXRTbGlkZSA9IGluZGV4O1xuICAgICAgICB0YXJnZXRMZWZ0ID0gXy5nZXRMZWZ0KHRhcmdldFNsaWRlKTtcbiAgICAgICAgc2xpZGVMZWZ0ID0gXy5nZXRMZWZ0KF8uY3VycmVudFNsaWRlKTtcblxuICAgICAgICBfLmN1cnJlbnRMZWZ0ID0gXy5zd2lwZUxlZnQgPT09IG51bGwgPyBzbGlkZUxlZnQgOiBfLnN3aXBlTGVmdDtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSAmJiBfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gZmFsc2UgJiYgKGluZGV4IDwgMCB8fCBpbmRleCA+IF8uZ2V0RG90Q291bnQoKSAqIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCkpIHtcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRTbGlkZSA9IF8uY3VycmVudFNsaWRlO1xuICAgICAgICAgICAgICAgIGlmIChkb250QW5pbWF0ZSAhPT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAgICAgICAgIF8uYW5pbWF0ZVNsaWRlKHNsaWRlTGVmdCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZSh0YXJnZXRTbGlkZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF8ucG9zdFNsaWRlKHRhcmdldFNsaWRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSAmJiBfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSAmJiAoaW5kZXggPCAwIHx8IGluZGV4ID4gKF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCkpKSB7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0U2xpZGUgPSBfLmN1cnJlbnRTbGlkZTtcbiAgICAgICAgICAgICAgICBpZiAoZG9udEFuaW1hdGUgIT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgICAgICAgICBfLmFuaW1hdGVTbGlkZShzbGlkZUxlZnQsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5wb3N0U2xpZGUodGFyZ2V0U2xpZGUpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZSh0YXJnZXRTbGlkZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBfLm9wdGlvbnMuYXV0b3BsYXkgKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKF8uYXV0b1BsYXlUaW1lcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGFyZ2V0U2xpZGUgPCAwKSB7XG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgYW5pbVNsaWRlID0gXy5zbGlkZUNvdW50IC0gKF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFuaW1TbGlkZSA9IF8uc2xpZGVDb3VudCArIHRhcmdldFNsaWRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRhcmdldFNsaWRlID49IF8uc2xpZGVDb3VudCkge1xuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGFuaW1TbGlkZSA9IDA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFuaW1TbGlkZSA9IHRhcmdldFNsaWRlIC0gXy5zbGlkZUNvdW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYW5pbVNsaWRlID0gdGFyZ2V0U2xpZGU7XG4gICAgICAgIH1cblxuICAgICAgICBfLmFuaW1hdGluZyA9IHRydWU7XG5cbiAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2JlZm9yZUNoYW5nZScsIFtfLCBfLmN1cnJlbnRTbGlkZSwgYW5pbVNsaWRlXSk7XG5cbiAgICAgICAgb2xkU2xpZGUgPSBfLmN1cnJlbnRTbGlkZTtcbiAgICAgICAgXy5jdXJyZW50U2xpZGUgPSBhbmltU2xpZGU7XG5cbiAgICAgICAgXy5zZXRTbGlkZUNsYXNzZXMoXy5jdXJyZW50U2xpZGUpO1xuXG4gICAgICAgIGlmICggXy5vcHRpb25zLmFzTmF2Rm9yICkge1xuXG4gICAgICAgICAgICBuYXZUYXJnZXQgPSBfLmdldE5hdlRhcmdldCgpO1xuICAgICAgICAgICAgbmF2VGFyZ2V0ID0gbmF2VGFyZ2V0LnNsaWNrKCdnZXRTbGljaycpO1xuXG4gICAgICAgICAgICBpZiAoIG5hdlRhcmdldC5zbGlkZUNvdW50IDw9IG5hdlRhcmdldC5vcHRpb25zLnNsaWRlc1RvU2hvdyApIHtcbiAgICAgICAgICAgICAgICBuYXZUYXJnZXQuc2V0U2xpZGVDbGFzc2VzKF8uY3VycmVudFNsaWRlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgXy51cGRhdGVEb3RzKCk7XG4gICAgICAgIF8udXBkYXRlQXJyb3dzKCk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBpZiAoZG9udEFuaW1hdGUgIT09IHRydWUpIHtcblxuICAgICAgICAgICAgICAgIF8uZmFkZVNsaWRlT3V0KG9sZFNsaWRlKTtcblxuICAgICAgICAgICAgICAgIF8uZmFkZVNsaWRlKGFuaW1TbGlkZSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIF8ucG9zdFNsaWRlKGFuaW1TbGlkZSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgXy5wb3N0U2xpZGUoYW5pbVNsaWRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF8uYW5pbWF0ZUhlaWdodCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRvbnRBbmltYXRlICE9PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIF8uYW5pbWF0ZVNsaWRlKHRhcmdldExlZnQsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIF8ucG9zdFNsaWRlKGFuaW1TbGlkZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8ucG9zdFNsaWRlKGFuaW1TbGlkZSk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc3RhcnRMb2FkID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYXJyb3dzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgXy4kcHJldkFycm93LmhpZGUoKTtcbiAgICAgICAgICAgIF8uJG5leHRBcnJvdy5oaWRlKCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZG90cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgIF8uJGRvdHMuaGlkZSgpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBfLiRzbGlkZXIuYWRkQ2xhc3MoJ3NsaWNrLWxvYWRpbmcnKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc3dpcGVEaXJlY3Rpb24gPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgeERpc3QsIHlEaXN0LCByLCBzd2lwZUFuZ2xlLCBfID0gdGhpcztcblxuICAgICAgICB4RGlzdCA9IF8udG91Y2hPYmplY3Quc3RhcnRYIC0gXy50b3VjaE9iamVjdC5jdXJYO1xuICAgICAgICB5RGlzdCA9IF8udG91Y2hPYmplY3Quc3RhcnRZIC0gXy50b3VjaE9iamVjdC5jdXJZO1xuICAgICAgICByID0gTWF0aC5hdGFuMih5RGlzdCwgeERpc3QpO1xuXG4gICAgICAgIHN3aXBlQW5nbGUgPSBNYXRoLnJvdW5kKHIgKiAxODAgLyBNYXRoLlBJKTtcbiAgICAgICAgaWYgKHN3aXBlQW5nbGUgPCAwKSB7XG4gICAgICAgICAgICBzd2lwZUFuZ2xlID0gMzYwIC0gTWF0aC5hYnMoc3dpcGVBbmdsZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoKHN3aXBlQW5nbGUgPD0gNDUpICYmIChzd2lwZUFuZ2xlID49IDApKSB7XG4gICAgICAgICAgICByZXR1cm4gKF8ub3B0aW9ucy5ydGwgPT09IGZhbHNlID8gJ2xlZnQnIDogJ3JpZ2h0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChzd2lwZUFuZ2xlIDw9IDM2MCkgJiYgKHN3aXBlQW5nbGUgPj0gMzE1KSkge1xuICAgICAgICAgICAgcmV0dXJuIChfLm9wdGlvbnMucnRsID09PSBmYWxzZSA/ICdsZWZ0JyA6ICdyaWdodCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoc3dpcGVBbmdsZSA+PSAxMzUpICYmIChzd2lwZUFuZ2xlIDw9IDIyNSkpIHtcbiAgICAgICAgICAgIHJldHVybiAoXy5vcHRpb25zLnJ0bCA9PT0gZmFsc2UgPyAncmlnaHQnIDogJ2xlZnQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsU3dpcGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKChzd2lwZUFuZ2xlID49IDM1KSAmJiAoc3dpcGVBbmdsZSA8PSAxMzUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdkb3duJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICd1cCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJ3ZlcnRpY2FsJztcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc3dpcGVFbmQgPSBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIHNsaWRlQ291bnQsXG4gICAgICAgICAgICBkaXJlY3Rpb247XG5cbiAgICAgICAgXy5kcmFnZ2luZyA9IGZhbHNlO1xuICAgICAgICBfLnN3aXBpbmcgPSBmYWxzZTtcblxuICAgICAgICBpZiAoXy5zY3JvbGxpbmcpIHtcbiAgICAgICAgICAgIF8uc2Nyb2xsaW5nID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBfLmludGVycnVwdGVkID0gZmFsc2U7XG4gICAgICAgIF8uc2hvdWxkQ2xpY2sgPSAoIF8udG91Y2hPYmplY3Quc3dpcGVMZW5ndGggPiAxMCApID8gZmFsc2UgOiB0cnVlO1xuXG4gICAgICAgIGlmICggXy50b3VjaE9iamVjdC5jdXJYID09PSB1bmRlZmluZWQgKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIF8udG91Y2hPYmplY3QuZWRnZUhpdCA9PT0gdHJ1ZSApIHtcbiAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdlZGdlJywgW18sIF8uc3dpcGVEaXJlY3Rpb24oKSBdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aCA+PSBfLnRvdWNoT2JqZWN0Lm1pblN3aXBlICkge1xuXG4gICAgICAgICAgICBkaXJlY3Rpb24gPSBfLnN3aXBlRGlyZWN0aW9uKCk7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoIGRpcmVjdGlvbiApIHtcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ2Rvd24nOlxuXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlQ291bnQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zLnN3aXBlVG9TbGlkZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5jaGVja05hdmlnYWJsZSggXy5jdXJyZW50U2xpZGUgKyBfLmdldFNsaWRlQ291bnQoKSApIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSArIF8uZ2V0U2xpZGVDb3VudCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIF8uY3VycmVudERpcmVjdGlvbiA9IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgICAgICAgICAgY2FzZSAndXAnOlxuXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlQ291bnQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zLnN3aXBlVG9TbGlkZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5jaGVja05hdmlnYWJsZSggXy5jdXJyZW50U2xpZGUgLSBfLmdldFNsaWRlQ291bnQoKSApIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSAtIF8uZ2V0U2xpZGVDb3VudCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIF8uY3VycmVudERpcmVjdGlvbiA9IDE7XG5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuXG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoIGRpcmVjdGlvbiAhPSAndmVydGljYWwnICkge1xuXG4gICAgICAgICAgICAgICAgXy5zbGlkZUhhbmRsZXIoIHNsaWRlQ291bnQgKTtcbiAgICAgICAgICAgICAgICBfLnRvdWNoT2JqZWN0ID0ge307XG4gICAgICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ3N3aXBlJywgW18sIGRpcmVjdGlvbiBdKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGlmICggXy50b3VjaE9iamVjdC5zdGFydFggIT09IF8udG91Y2hPYmplY3QuY3VyWCApIHtcblxuICAgICAgICAgICAgICAgIF8uc2xpZGVIYW5kbGVyKCBfLmN1cnJlbnRTbGlkZSApO1xuICAgICAgICAgICAgICAgIF8udG91Y2hPYmplY3QgPSB7fTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc3dpcGVIYW5kbGVyID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKChfLm9wdGlvbnMuc3dpcGUgPT09IGZhbHNlKSB8fCAoJ29udG91Y2hlbmQnIGluIGRvY3VtZW50ICYmIF8ub3B0aW9ucy5zd2lwZSA9PT0gZmFsc2UpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSBpZiAoXy5vcHRpb25zLmRyYWdnYWJsZSA9PT0gZmFsc2UgJiYgZXZlbnQudHlwZS5pbmRleE9mKCdtb3VzZScpICE9PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgXy50b3VjaE9iamVjdC5maW5nZXJDb3VudCA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQgJiYgZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzICE9PSB1bmRlZmluZWQgP1xuICAgICAgICAgICAgZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzLmxlbmd0aCA6IDE7XG5cbiAgICAgICAgXy50b3VjaE9iamVjdC5taW5Td2lwZSA9IF8ubGlzdFdpZHRoIC8gXy5vcHRpb25zXG4gICAgICAgICAgICAudG91Y2hUaHJlc2hvbGQ7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8udG91Y2hPYmplY3QubWluU3dpcGUgPSBfLmxpc3RIZWlnaHQgLyBfLm9wdGlvbnNcbiAgICAgICAgICAgICAgICAudG91Y2hUaHJlc2hvbGQ7XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmRhdGEuYWN0aW9uKSB7XG5cbiAgICAgICAgICAgIGNhc2UgJ3N0YXJ0JzpcbiAgICAgICAgICAgICAgICBfLnN3aXBlU3RhcnQoZXZlbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdtb3ZlJzpcbiAgICAgICAgICAgICAgICBfLnN3aXBlTW92ZShldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgICAgICAgICAgXy5zd2lwZUVuZChldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zd2lwZU1vdmUgPSBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGVkZ2VXYXNIaXQgPSBmYWxzZSxcbiAgICAgICAgICAgIGN1ckxlZnQsIHN3aXBlRGlyZWN0aW9uLCBzd2lwZUxlbmd0aCwgcG9zaXRpb25PZmZzZXQsIHRvdWNoZXMsIHZlcnRpY2FsU3dpcGVMZW5ndGg7XG5cbiAgICAgICAgdG91Y2hlcyA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQgIT09IHVuZGVmaW5lZCA/IGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlcyA6IG51bGw7XG5cbiAgICAgICAgaWYgKCFfLmRyYWdnaW5nIHx8IF8uc2Nyb2xsaW5nIHx8IHRvdWNoZXMgJiYgdG91Y2hlcy5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGN1ckxlZnQgPSBfLmdldExlZnQoXy5jdXJyZW50U2xpZGUpO1xuXG4gICAgICAgIF8udG91Y2hPYmplY3QuY3VyWCA9IHRvdWNoZXMgIT09IHVuZGVmaW5lZCA/IHRvdWNoZXNbMF0ucGFnZVggOiBldmVudC5jbGllbnRYO1xuICAgICAgICBfLnRvdWNoT2JqZWN0LmN1clkgPSB0b3VjaGVzICE9PSB1bmRlZmluZWQgPyB0b3VjaGVzWzBdLnBhZ2VZIDogZXZlbnQuY2xpZW50WTtcblxuICAgICAgICBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoID0gTWF0aC5yb3VuZChNYXRoLnNxcnQoXG4gICAgICAgICAgICBNYXRoLnBvdyhfLnRvdWNoT2JqZWN0LmN1clggLSBfLnRvdWNoT2JqZWN0LnN0YXJ0WCwgMikpKTtcblxuICAgICAgICB2ZXJ0aWNhbFN3aXBlTGVuZ3RoID0gTWF0aC5yb3VuZChNYXRoLnNxcnQoXG4gICAgICAgICAgICBNYXRoLnBvdyhfLnRvdWNoT2JqZWN0LmN1clkgLSBfLnRvdWNoT2JqZWN0LnN0YXJ0WSwgMikpKTtcblxuICAgICAgICBpZiAoIV8ub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmcgJiYgIV8uc3dpcGluZyAmJiB2ZXJ0aWNhbFN3aXBlTGVuZ3RoID4gNCkge1xuICAgICAgICAgICAgXy5zY3JvbGxpbmcgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8udG91Y2hPYmplY3Quc3dpcGVMZW5ndGggPSB2ZXJ0aWNhbFN3aXBlTGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpcGVEaXJlY3Rpb24gPSBfLnN3aXBlRGlyZWN0aW9uKCk7XG5cbiAgICAgICAgaWYgKGV2ZW50Lm9yaWdpbmFsRXZlbnQgIT09IHVuZGVmaW5lZCAmJiBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoID4gNCkge1xuICAgICAgICAgICAgXy5zd2lwaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBwb3NpdGlvbk9mZnNldCA9IChfLm9wdGlvbnMucnRsID09PSBmYWxzZSA/IDEgOiAtMSkgKiAoXy50b3VjaE9iamVjdC5jdXJYID4gXy50b3VjaE9iamVjdC5zdGFydFggPyAxIDogLTEpO1xuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsU3dpcGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcG9zaXRpb25PZmZzZXQgPSBfLnRvdWNoT2JqZWN0LmN1clkgPiBfLnRvdWNoT2JqZWN0LnN0YXJ0WSA/IDEgOiAtMTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgc3dpcGVMZW5ndGggPSBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoO1xuXG4gICAgICAgIF8udG91Y2hPYmplY3QuZWRnZUhpdCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBpZiAoKF8uY3VycmVudFNsaWRlID09PSAwICYmIHN3aXBlRGlyZWN0aW9uID09PSAncmlnaHQnKSB8fCAoXy5jdXJyZW50U2xpZGUgPj0gXy5nZXREb3RDb3VudCgpICYmIHN3aXBlRGlyZWN0aW9uID09PSAnbGVmdCcpKSB7XG4gICAgICAgICAgICAgICAgc3dpcGVMZW5ndGggPSBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoICogXy5vcHRpb25zLmVkZ2VGcmljdGlvbjtcbiAgICAgICAgICAgICAgICBfLnRvdWNoT2JqZWN0LmVkZ2VIaXQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIF8uc3dpcGVMZWZ0ID0gY3VyTGVmdCArIHN3aXBlTGVuZ3RoICogcG9zaXRpb25PZmZzZXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLnN3aXBlTGVmdCA9IGN1ckxlZnQgKyAoc3dpcGVMZW5ndGggKiAoXy4kbGlzdC5oZWlnaHQoKSAvIF8ubGlzdFdpZHRoKSkgKiBwb3NpdGlvbk9mZnNldDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsU3dpcGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy5zd2lwZUxlZnQgPSBjdXJMZWZ0ICsgc3dpcGVMZW5ndGggKiBwb3NpdGlvbk9mZnNldDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gdHJ1ZSB8fCBfLm9wdGlvbnMudG91Y2hNb3ZlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8uYW5pbWF0aW5nID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLnN3aXBlTGVmdCA9IG51bGw7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBfLnNldENTUyhfLnN3aXBlTGVmdCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnN3aXBlU3RhcnQgPSBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIHRvdWNoZXM7XG5cbiAgICAgICAgXy5pbnRlcnJ1cHRlZCA9IHRydWU7XG5cbiAgICAgICAgaWYgKF8udG91Y2hPYmplY3QuZmluZ2VyQ291bnQgIT09IDEgfHwgXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIF8udG91Y2hPYmplY3QgPSB7fTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChldmVudC5vcmlnaW5hbEV2ZW50ICE9PSB1bmRlZmluZWQgJiYgZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRvdWNoZXMgPSBldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXNbMF07XG4gICAgICAgIH1cblxuICAgICAgICBfLnRvdWNoT2JqZWN0LnN0YXJ0WCA9IF8udG91Y2hPYmplY3QuY3VyWCA9IHRvdWNoZXMgIT09IHVuZGVmaW5lZCA/IHRvdWNoZXMucGFnZVggOiBldmVudC5jbGllbnRYO1xuICAgICAgICBfLnRvdWNoT2JqZWN0LnN0YXJ0WSA9IF8udG91Y2hPYmplY3QuY3VyWSA9IHRvdWNoZXMgIT09IHVuZGVmaW5lZCA/IHRvdWNoZXMucGFnZVkgOiBldmVudC5jbGllbnRZO1xuXG4gICAgICAgIF8uZHJhZ2dpbmcgPSB0cnVlO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS51bmZpbHRlclNsaWRlcyA9IFNsaWNrLnByb3RvdHlwZS5zbGlja1VuZmlsdGVyID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLiRzbGlkZXNDYWNoZSAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICBfLnVubG9hZCgpO1xuXG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZGV0YWNoKCk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlc0NhY2hlLmFwcGVuZFRvKF8uJHNsaWRlVHJhY2spO1xuXG4gICAgICAgICAgICBfLnJlaW5pdCgpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUudW5sb2FkID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgICQoJy5zbGljay1jbG9uZWQnLCBfLiRzbGlkZXIpLnJlbW92ZSgpO1xuXG4gICAgICAgIGlmIChfLiRkb3RzKSB7XG4gICAgICAgICAgICBfLiRkb3RzLnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8uJHByZXZBcnJvdyAmJiBfLmh0bWxFeHByLnRlc3QoXy5vcHRpb25zLnByZXZBcnJvdykpIHtcbiAgICAgICAgICAgIF8uJHByZXZBcnJvdy5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLiRuZXh0QXJyb3cgJiYgXy5odG1sRXhwci50ZXN0KF8ub3B0aW9ucy5uZXh0QXJyb3cpKSB7XG4gICAgICAgICAgICBfLiRuZXh0QXJyb3cucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBfLiRzbGlkZXNcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2xpY2stc2xpZGUgc2xpY2stYWN0aXZlIHNsaWNrLXZpc2libGUgc2xpY2stY3VycmVudCcpXG4gICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAndHJ1ZScpXG4gICAgICAgICAgICAuY3NzKCd3aWR0aCcsICcnKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUudW5zbGljayA9IGZ1bmN0aW9uKGZyb21CcmVha3BvaW50KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcigndW5zbGljaycsIFtfLCBmcm9tQnJlYWtwb2ludF0pO1xuICAgICAgICBfLmRlc3Ryb3koKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUudXBkYXRlQXJyb3dzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgY2VudGVyT2Zmc2V0O1xuXG4gICAgICAgIGNlbnRlck9mZnNldCA9IE1hdGguZmxvb3IoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIpO1xuXG4gICAgICAgIGlmICggXy5vcHRpb25zLmFycm93cyA9PT0gdHJ1ZSAmJlxuICAgICAgICAgICAgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAmJlxuICAgICAgICAgICAgIV8ub3B0aW9ucy5pbmZpbml0ZSApIHtcblxuICAgICAgICAgICAgXy4kcHJldkFycm93LnJlbW92ZUNsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAnZmFsc2UnKTtcbiAgICAgICAgICAgIF8uJG5leHRBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgIGlmIChfLmN1cnJlbnRTbGlkZSA9PT0gMCkge1xuXG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93LmFkZENsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAndHJ1ZScpO1xuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXy5jdXJyZW50U2xpZGUgPj0gXy5zbGlkZUNvdW50IC0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAmJiBfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gZmFsc2UpIHtcblxuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5hZGRDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ3RydWUnKTtcbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICdmYWxzZScpO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKF8uY3VycmVudFNsaWRlID49IF8uc2xpZGVDb3VudCAtIDEgJiYgXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcblxuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5hZGRDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ3RydWUnKTtcbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICdmYWxzZScpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS51cGRhdGVEb3RzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLiRkb3RzICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgIF8uJGRvdHNcbiAgICAgICAgICAgICAgICAuZmluZCgnbGknKVxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgIC5lbmQoKTtcblxuICAgICAgICAgICAgXy4kZG90c1xuICAgICAgICAgICAgICAgIC5maW5kKCdsaScpXG4gICAgICAgICAgICAgICAgLmVxKE1hdGguZmxvb3IoXy5jdXJyZW50U2xpZGUgLyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpKVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stYWN0aXZlJyk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS52aXNpYmlsaXR5ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmICggXy5vcHRpb25zLmF1dG9wbGF5ICkge1xuXG4gICAgICAgICAgICBpZiAoIGRvY3VtZW50W18uaGlkZGVuXSApIHtcblxuICAgICAgICAgICAgICAgIF8uaW50ZXJydXB0ZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgXy5pbnRlcnJ1cHRlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgICQuZm4uc2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgb3B0ID0gYXJndW1lbnRzWzBdLFxuICAgICAgICAgICAgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSksXG4gICAgICAgICAgICBsID0gXy5sZW5ndGgsXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgcmV0O1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdCA9PSAnb2JqZWN0JyB8fCB0eXBlb2Ygb3B0ID09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgICAgIF9baV0uc2xpY2sgPSBuZXcgU2xpY2soX1tpXSwgb3B0KTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICByZXQgPSBfW2ldLnNsaWNrW29wdF0uYXBwbHkoX1tpXS5zbGljaywgYXJncyk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHJldCAhPSAndW5kZWZpbmVkJykgcmV0dXJuIHJldDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gXztcbiAgICB9O1xuXG59KSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTsiXSwic291cmNlUm9vdCI6IiJ9