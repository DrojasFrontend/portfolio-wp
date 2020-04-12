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
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header */ "./src/js/components/header.js");
/* harmony import */ var _components_slick_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/slick-carousel */ "./src/js/components/slick-carousel.js");
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

/***/ "./src/js/components/header.js":
/*!*************************************!*\
  !*** ./src/js/components/header.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scroll(function () {
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).scrollTop() > 100) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".header").addClass("active");
  } else {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".header").removeClass("active");
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9iYW5uZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3NsaWNrLWNhcm91c2VsLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3NsaWNrLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImpRdWVyeVwiIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCIkIiwid2luZG93Iiwic2Nyb2xsIiwid1Njcm9sbCIsInNjcm9sbFRvcCIsImNzcyIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJzbGljayIsImZhZGUiLCJhcnJvd3MiLCJkb3RzIiwiaW5maW5pdGUiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsInNwZWVkIiwiYXV0b3BsYXkiLCJhdXRvcGxheVNwZWVkIiwidXNlVHJhbnNmb3JtIiwiZmFjdG9yeSIsImRlZmluZSIsIlNsaWNrIiwiaW5zdGFuY2VVaWQiLCJlbGVtZW50Iiwic2V0dGluZ3MiLCJfIiwiZGF0YVNldHRpbmdzIiwiZGVmYXVsdHMiLCJhY2Nlc3NpYmlsaXR5IiwiYWRhcHRpdmVIZWlnaHQiLCJhcHBlbmRBcnJvd3MiLCJhcHBlbmREb3RzIiwiYXNOYXZGb3IiLCJwcmV2QXJyb3ciLCJuZXh0QXJyb3ciLCJjZW50ZXJNb2RlIiwiY2VudGVyUGFkZGluZyIsImNzc0Vhc2UiLCJjdXN0b21QYWdpbmciLCJzbGlkZXIiLCJpIiwidGV4dCIsImRvdHNDbGFzcyIsImRyYWdnYWJsZSIsImVhc2luZyIsImVkZ2VGcmljdGlvbiIsImZvY3VzT25TZWxlY3QiLCJmb2N1c09uQ2hhbmdlIiwiaW5pdGlhbFNsaWRlIiwibGF6eUxvYWQiLCJtb2JpbGVGaXJzdCIsInBhdXNlT25Ib3ZlciIsInBhdXNlT25Gb2N1cyIsInBhdXNlT25Eb3RzSG92ZXIiLCJyZXNwb25kVG8iLCJyZXNwb25zaXZlIiwicm93cyIsInJ0bCIsInNsaWRlIiwic2xpZGVzUGVyUm93Iiwic3dpcGUiLCJzd2lwZVRvU2xpZGUiLCJ0b3VjaE1vdmUiLCJ0b3VjaFRocmVzaG9sZCIsInVzZUNTUyIsInZhcmlhYmxlV2lkdGgiLCJ2ZXJ0aWNhbCIsInZlcnRpY2FsU3dpcGluZyIsIndhaXRGb3JBbmltYXRlIiwiekluZGV4IiwiaW5pdGlhbHMiLCJhbmltYXRpbmciLCJkcmFnZ2luZyIsImF1dG9QbGF5VGltZXIiLCJjdXJyZW50RGlyZWN0aW9uIiwiY3VycmVudExlZnQiLCJjdXJyZW50U2xpZGUiLCJkaXJlY3Rpb24iLCIkZG90cyIsImxpc3RXaWR0aCIsImxpc3RIZWlnaHQiLCJsb2FkSW5kZXgiLCIkbmV4dEFycm93IiwiJHByZXZBcnJvdyIsInNjcm9sbGluZyIsInNsaWRlQ291bnQiLCJzbGlkZVdpZHRoIiwiJHNsaWRlVHJhY2siLCIkc2xpZGVzIiwic2xpZGluZyIsInNsaWRlT2Zmc2V0Iiwic3dpcGVMZWZ0Iiwic3dpcGluZyIsIiRsaXN0IiwidG91Y2hPYmplY3QiLCJ0cmFuc2Zvcm1zRW5hYmxlZCIsInVuc2xpY2tlZCIsImV4dGVuZCIsImFjdGl2ZUJyZWFrcG9pbnQiLCJhbmltVHlwZSIsImFuaW1Qcm9wIiwiYnJlYWtwb2ludHMiLCJicmVha3BvaW50U2V0dGluZ3MiLCJjc3NUcmFuc2l0aW9ucyIsImZvY3Vzc2VkIiwiaW50ZXJydXB0ZWQiLCJoaWRkZW4iLCJwYXVzZWQiLCJwb3NpdGlvblByb3AiLCJyb3dDb3VudCIsInNob3VsZENsaWNrIiwiJHNsaWRlciIsIiRzbGlkZXNDYWNoZSIsInRyYW5zZm9ybVR5cGUiLCJ0cmFuc2l0aW9uVHlwZSIsInZpc2liaWxpdHlDaGFuZ2UiLCJ3aW5kb3dXaWR0aCIsIndpbmRvd1RpbWVyIiwiZGF0YSIsIm9wdGlvbnMiLCJvcmlnaW5hbFNldHRpbmdzIiwiZG9jdW1lbnQiLCJtb3pIaWRkZW4iLCJ3ZWJraXRIaWRkZW4iLCJhdXRvUGxheSIsInByb3h5IiwiYXV0b1BsYXlDbGVhciIsImF1dG9QbGF5SXRlcmF0b3IiLCJjaGFuZ2VTbGlkZSIsImNsaWNrSGFuZGxlciIsInNlbGVjdEhhbmRsZXIiLCJzZXRQb3NpdGlvbiIsInN3aXBlSGFuZGxlciIsImRyYWdIYW5kbGVyIiwia2V5SGFuZGxlciIsImh0bWxFeHByIiwicmVnaXN0ZXJCcmVha3BvaW50cyIsImluaXQiLCJwcm90b3R5cGUiLCJhY3RpdmF0ZUFEQSIsImZpbmQiLCJhdHRyIiwiYWRkU2xpZGUiLCJzbGlja0FkZCIsIm1hcmt1cCIsImluZGV4IiwiYWRkQmVmb3JlIiwidW5sb2FkIiwibGVuZ3RoIiwiYXBwZW5kVG8iLCJpbnNlcnRCZWZvcmUiLCJlcSIsImluc2VydEFmdGVyIiwicHJlcGVuZFRvIiwiY2hpbGRyZW4iLCJkZXRhY2giLCJhcHBlbmQiLCJlYWNoIiwicmVpbml0IiwiYW5pbWF0ZUhlaWdodCIsInRhcmdldEhlaWdodCIsIm91dGVySGVpZ2h0IiwiYW5pbWF0ZSIsImhlaWdodCIsImFuaW1hdGVTbGlkZSIsInRhcmdldExlZnQiLCJjYWxsYmFjayIsImFuaW1Qcm9wcyIsImxlZnQiLCJ0b3AiLCJhbmltU3RhcnQiLCJkdXJhdGlvbiIsInN0ZXAiLCJub3ciLCJNYXRoIiwiY2VpbCIsImNvbXBsZXRlIiwiY2FsbCIsImFwcGx5VHJhbnNpdGlvbiIsInNldFRpbWVvdXQiLCJkaXNhYmxlVHJhbnNpdGlvbiIsImdldE5hdlRhcmdldCIsIm5vdCIsInRhcmdldCIsInNsaWRlSGFuZGxlciIsInRyYW5zaXRpb24iLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJzbGlkZVRvIiwiYnVpbGRBcnJvd3MiLCJyZW1vdmVBdHRyIiwidGVzdCIsImFkZCIsImJ1aWxkRG90cyIsImRvdCIsImdldERvdENvdW50IiwiZmlyc3QiLCJidWlsZE91dCIsIndyYXBBbGwiLCJwYXJlbnQiLCJ3cmFwIiwic2V0dXBJbmZpbml0ZSIsInVwZGF0ZURvdHMiLCJzZXRTbGlkZUNsYXNzZXMiLCJidWlsZFJvd3MiLCJhIiwiYiIsImMiLCJuZXdTbGlkZXMiLCJudW1PZlNsaWRlcyIsIm9yaWdpbmFsU2xpZGVzIiwic2xpZGVzUGVyU2VjdGlvbiIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJjcmVhdGVFbGVtZW50Iiwicm93IiwiZ2V0IiwiYXBwZW5kQ2hpbGQiLCJlbXB0eSIsImNoZWNrUmVzcG9uc2l2ZSIsImluaXRpYWwiLCJmb3JjZVVwZGF0ZSIsImJyZWFrcG9pbnQiLCJ0YXJnZXRCcmVha3BvaW50IiwicmVzcG9uZFRvV2lkdGgiLCJ0cmlnZ2VyQnJlYWtwb2ludCIsInNsaWRlcldpZHRoIiwid2lkdGgiLCJpbm5lcldpZHRoIiwibWluIiwiaGFzT3duUHJvcGVydHkiLCJ1bnNsaWNrIiwicmVmcmVzaCIsInRyaWdnZXIiLCJldmVudCIsImRvbnRBbmltYXRlIiwiJHRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJpbmRleE9mZnNldCIsInVuZXZlbk9mZnNldCIsImlzIiwicHJldmVudERlZmF1bHQiLCJjbG9zZXN0IiwibWVzc2FnZSIsImNoZWNrTmF2aWdhYmxlIiwibmF2aWdhYmxlcyIsInByZXZOYXZpZ2FibGUiLCJnZXROYXZpZ2FibGVJbmRleGVzIiwibiIsImNsZWFuVXBFdmVudHMiLCJvZmYiLCJpbnRlcnJ1cHQiLCJ2aXNpYmlsaXR5IiwiY2xlYW5VcFNsaWRlRXZlbnRzIiwib3JpZW50YXRpb25DaGFuZ2UiLCJyZXNpemUiLCJjbGVhblVwUm93cyIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsInN0b3BQcm9wYWdhdGlvbiIsImRlc3Ryb3kiLCJyZW1vdmUiLCJmYWRlU2xpZGUiLCJzbGlkZUluZGV4Iiwib3BhY2l0eSIsImZhZGVTbGlkZU91dCIsImZpbHRlclNsaWRlcyIsInNsaWNrRmlsdGVyIiwiZmlsdGVyIiwiZm9jdXNIYW5kbGVyIiwib24iLCIkc2YiLCJnZXRDdXJyZW50Iiwic2xpY2tDdXJyZW50U2xpZGUiLCJicmVha1BvaW50IiwiY291bnRlciIsInBhZ2VyUXR5IiwiZ2V0TGVmdCIsInZlcnRpY2FsSGVpZ2h0IiwidmVydGljYWxPZmZzZXQiLCJ0YXJnZXRTbGlkZSIsImNvZWYiLCJmbG9vciIsIm9mZnNldExlZnQiLCJvdXRlcldpZHRoIiwiZ2V0T3B0aW9uIiwic2xpY2tHZXRPcHRpb24iLCJvcHRpb24iLCJpbmRleGVzIiwibWF4IiwicHVzaCIsImdldFNsaWNrIiwiZ2V0U2xpZGVDb3VudCIsInNsaWRlc1RyYXZlcnNlZCIsInN3aXBlZFNsaWRlIiwiY2VudGVyT2Zmc2V0IiwiYWJzIiwiZ29UbyIsInNsaWNrR29UbyIsInBhcnNlSW50IiwiY3JlYXRpb24iLCJoYXNDbGFzcyIsInNldFByb3BzIiwic3RhcnRMb2FkIiwibG9hZFNsaWRlciIsImluaXRpYWxpemVFdmVudHMiLCJ1cGRhdGVBcnJvd3MiLCJpbml0QURBIiwibnVtRG90R3JvdXBzIiwidGFiQ29udHJvbEluZGV4ZXMiLCJ2YWwiLCJzbGlkZUNvbnRyb2xJbmRleCIsImluZGV4T2YiLCJhcmlhQnV0dG9uQ29udHJvbCIsIm1hcHBlZFNsaWRlSW5kZXgiLCJlbmQiLCJpbml0QXJyb3dFdmVudHMiLCJpbml0RG90RXZlbnRzIiwiaW5pdFNsaWRlRXZlbnRzIiwiYWN0aW9uIiwiaW5pdFVJIiwic2hvdyIsInRhZ05hbWUiLCJtYXRjaCIsImtleUNvZGUiLCJsb2FkUmFuZ2UiLCJjbG9uZVJhbmdlIiwicmFuZ2VTdGFydCIsInJhbmdlRW5kIiwibG9hZEltYWdlcyIsImltYWdlc1Njb3BlIiwiaW1hZ2UiLCJpbWFnZVNvdXJjZSIsImltYWdlU3JjU2V0IiwiaW1hZ2VTaXplcyIsImltYWdlVG9Mb2FkIiwib25sb2FkIiwib25lcnJvciIsInNyYyIsInNsaWNlIiwicHJldlNsaWRlIiwibmV4dFNsaWRlIiwicHJvZ3Jlc3NpdmVMYXp5TG9hZCIsIm5leHQiLCJzbGlja05leHQiLCJwYXVzZSIsInNsaWNrUGF1c2UiLCJwbGF5Iiwic2xpY2tQbGF5IiwicG9zdFNsaWRlIiwiJGN1cnJlbnRTbGlkZSIsImZvY3VzIiwicHJldiIsInNsaWNrUHJldiIsInRyeUNvdW50IiwiJGltZ3NUb0xvYWQiLCJpbml0aWFsaXppbmciLCJsYXN0VmlzaWJsZUluZGV4IiwiY3VycmVudEJyZWFrcG9pbnQiLCJsIiwicmVzcG9uc2l2ZVNldHRpbmdzIiwidHlwZSIsInNwbGljZSIsInNvcnQiLCJjbGVhclRpbWVvdXQiLCJ3aW5kb3dEZWxheSIsInJlbW92ZVNsaWRlIiwic2xpY2tSZW1vdmUiLCJyZW1vdmVCZWZvcmUiLCJyZW1vdmVBbGwiLCJzZXRDU1MiLCJwb3NpdGlvbiIsInBvc2l0aW9uUHJvcHMiLCJ4IiwieSIsInNldERpbWVuc2lvbnMiLCJwYWRkaW5nIiwib2Zmc2V0Iiwic2V0RmFkZSIsInJpZ2h0Iiwic2V0SGVpZ2h0Iiwic2V0T3B0aW9uIiwic2xpY2tTZXRPcHRpb24iLCJpdGVtIiwidmFsdWUiLCJhcmd1bWVudHMiLCJvcHQiLCJib2R5U3R5bGUiLCJib2R5Iiwic3R5bGUiLCJXZWJraXRUcmFuc2l0aW9uIiwidW5kZWZpbmVkIiwiTW96VHJhbnNpdGlvbiIsIm1zVHJhbnNpdGlvbiIsIk9UcmFuc2Zvcm0iLCJwZXJzcGVjdGl2ZVByb3BlcnR5Iiwid2Via2l0UGVyc3BlY3RpdmUiLCJNb3pUcmFuc2Zvcm0iLCJNb3pQZXJzcGVjdGl2ZSIsIndlYmtpdFRyYW5zZm9ybSIsIm1zVHJhbnNmb3JtIiwidHJhbnNmb3JtIiwiYWxsU2xpZGVzIiwicmVtYWluZGVyIiwiZXZlbkNvZWYiLCJpbmZpbml0ZUNvdW50IiwiY2xvbmUiLCJ0b2dnbGUiLCJ0YXJnZXRFbGVtZW50IiwicGFyZW50cyIsInN5bmMiLCJhbmltU2xpZGUiLCJvbGRTbGlkZSIsInNsaWRlTGVmdCIsIm5hdlRhcmdldCIsImhpZGUiLCJzd2lwZURpcmVjdGlvbiIsInhEaXN0IiwieURpc3QiLCJyIiwic3dpcGVBbmdsZSIsInN0YXJ0WCIsImN1clgiLCJzdGFydFkiLCJjdXJZIiwiYXRhbjIiLCJyb3VuZCIsIlBJIiwic3dpcGVFbmQiLCJzd2lwZUxlbmd0aCIsImVkZ2VIaXQiLCJtaW5Td2lwZSIsImZpbmdlckNvdW50Iiwib3JpZ2luYWxFdmVudCIsInRvdWNoZXMiLCJzd2lwZVN0YXJ0Iiwic3dpcGVNb3ZlIiwiZWRnZVdhc0hpdCIsImN1ckxlZnQiLCJwb3NpdGlvbk9mZnNldCIsInZlcnRpY2FsU3dpcGVMZW5ndGgiLCJwYWdlWCIsImNsaWVudFgiLCJwYWdlWSIsImNsaWVudFkiLCJzcXJ0IiwicG93IiwidW5maWx0ZXJTbGlkZXMiLCJzbGlja1VuZmlsdGVyIiwiZnJvbUJyZWFrcG9pbnQiLCJmbiIsImFyZ3MiLCJBcnJheSIsInJldCIsImFwcGx5Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFD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LENBQVA7QUFDSCxHQWZEO0FBaUJILENBajdGQyxDQUFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJELHdCIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8vIGJ1bmRsZS5qc1xyXG5pbXBvcnQgXCIuL2NvbXBvbmVudHMvYmFubmVyXCI7XHJcbmltcG9ydCBcIi4vY29tcG9uZW50cy9oZWFkZXJcIjtcclxuaW1wb3J0IFwiLi9jb21wb25lbnRzL3NsaWNrLWNhcm91c2VsXCI7XHJcblxyXG5jb25zb2xlLmxvZyhcImJ1bmRsZVwiKTtcclxuIiwiLy8gQmFubmVyLmpzXHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcblxyXG4kKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xyXG4gIGNvbnN0IHdTY3JvbGwgPSAkKHRoaXMpLnNjcm9sbFRvcCgpO1xyXG4gICQoJy5iYW5uZXJfX2NvbnRlbnQnKS5jc3Moe1xyXG4gICAgJ3RyYW5zZm9ybScgOiAndHJhbnNsYXRlM2QoMHB4LCAnKyB3U2Nyb2xsIC8zMCArJyUsIDBweCknXHJcbiAgfSk7XHJcbn0pIiwiaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xyXG5cclxuJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoKSB7XHJcbiAgaWYgKCQodGhpcykuc2Nyb2xsVG9wKCkgPiAxMDApIHtcclxuICAgICQoXCIuaGVhZGVyXCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAkKFwiLmhlYWRlclwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICB9XHJcbn0pO1xyXG4iLCIvLyBzbGlkZXIuanNcclxuaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xyXG5pbXBvcnQgXCIuL3NsaWNrXCI7XHJcblxyXG4kKFwiLnRlc3RpbW9uaWFsLXNsaWNrXCIpLnNsaWNrKHtcclxuICBmYWRlOiBmYWxzZSxcclxuICBhcnJvd3M6IGZhbHNlLFxyXG4gIGRvdHM6IHRydWUsXHJcbiAgaW5maW5pdGU6IHRydWUsXHJcbiAgc2xpZGVzVG9TaG93OiAxLFxyXG4gIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gIHNwZWVkOiAzMDAwLFxyXG4gIGF1dG9wbGF5OiB0cnVlLFxyXG4gIGF1dG9wbGF5U3BlZWQ6IDMwMDAsXHJcbiAgdXNlVHJhbnNmb3JtOiB0cnVlXHJcbn0pO1xyXG4iLCIvKlxuICAgICBfIF8gICAgICBfICAgICAgIF9cbiBfX198IChfKSBfX198IHwgX18gIChfKV9fX1xuLyBfX3wgfCB8LyBfX3wgfC8gLyAgfCAvIF9ffFxuXFxfXyBcXCB8IHwgKF9ffCAgIDwgXyB8IFxcX18gXFxcbnxfX18vX3xffFxcX19ffF98XFxfKF8pLyB8X19fL1xuICAgICAgICAgICAgICAgICAgIHxfXy9cblxuIFZlcnNpb246IDEuOC4xXG4gIEF1dGhvcjogS2VuIFdoZWVsZXJcbiBXZWJzaXRlOiBodHRwOi8va2Vud2hlZWxlci5naXRodWIuaW9cbiAgICBEb2NzOiBodHRwOi8va2Vud2hlZWxlci5naXRodWIuaW8vc2xpY2tcbiAgICBSZXBvOiBodHRwOi8vZ2l0aHViLmNvbS9rZW53aGVlbGVyL3NsaWNrXG4gIElzc3VlczogaHR0cDovL2dpdGh1Yi5jb20va2Vud2hlZWxlci9zbGljay9pc3N1ZXNcblxuICovXG4vKiBnbG9iYWwgd2luZG93LCBkb2N1bWVudCwgZGVmaW5lLCBqUXVlcnksIHNldEludGVydmFsLCBjbGVhckludGVydmFsICovXG47KGZ1bmN0aW9uKGZhY3RvcnkpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICBkZWZpbmUoWydqcXVlcnknXSwgZmFjdG9yeSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoJ2pxdWVyeScpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBmYWN0b3J5KGpRdWVyeSk7XG4gICAgfVxuXG59KGZ1bmN0aW9uKCQpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgdmFyIFNsaWNrID0gd2luZG93LlNsaWNrIHx8IHt9O1xuXG4gICAgU2xpY2sgPSAoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIGluc3RhbmNlVWlkID0gMDtcblxuICAgICAgICBmdW5jdGlvbiBTbGljayhlbGVtZW50LCBzZXR0aW5ncykge1xuXG4gICAgICAgICAgICB2YXIgXyA9IHRoaXMsIGRhdGFTZXR0aW5ncztcblxuICAgICAgICAgICAgXy5kZWZhdWx0cyA9IHtcbiAgICAgICAgICAgICAgICBhY2Nlc3NpYmlsaXR5OiB0cnVlLFxuICAgICAgICAgICAgICAgIGFkYXB0aXZlSGVpZ2h0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBhcHBlbmRBcnJvd3M6ICQoZWxlbWVudCksXG4gICAgICAgICAgICAgICAgYXBwZW5kRG90czogJChlbGVtZW50KSxcbiAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXG4gICAgICAgICAgICAgICAgYXNOYXZGb3I6IG51bGwsXG4gICAgICAgICAgICAgICAgcHJldkFycm93OiAnPGJ1dHRvbiBjbGFzcz1cInNsaWNrLXByZXZcIiBhcmlhLWxhYmVsPVwiUHJldmlvdXNcIiB0eXBlPVwiYnV0dG9uXCI+UHJldmlvdXM8L2J1dHRvbj4nLFxuICAgICAgICAgICAgICAgIG5leHRBcnJvdzogJzxidXR0b24gY2xhc3M9XCJzbGljay1uZXh0XCIgYXJpYS1sYWJlbD1cIk5leHRcIiB0eXBlPVwiYnV0dG9uXCI+TmV4dDwvYnV0dG9uPicsXG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDMwMDAsXG4gICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogJzUwcHgnLFxuICAgICAgICAgICAgICAgIGNzc0Vhc2U6ICdlYXNlJyxcbiAgICAgICAgICAgICAgICBjdXN0b21QYWdpbmc6IGZ1bmN0aW9uKHNsaWRlciwgaSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJCgnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgLz4nKS50ZXh0KGkgKyAxKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRvdHNDbGFzczogJ3NsaWNrLWRvdHMnLFxuICAgICAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBlYXNpbmc6ICdsaW5lYXInLFxuICAgICAgICAgICAgICAgIGVkZ2VGcmljdGlvbjogMC4zNSxcbiAgICAgICAgICAgICAgICBmYWRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBmb2N1c09uU2VsZWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBmb2N1c09uQ2hhbmdlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpbml0aWFsU2xpZGU6IDAsXG4gICAgICAgICAgICAgICAgbGF6eUxvYWQ6ICdvbmRlbWFuZCcsXG4gICAgICAgICAgICAgICAgbW9iaWxlRmlyc3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBwYXVzZU9uRm9jdXM6IHRydWUsXG4gICAgICAgICAgICAgICAgcGF1c2VPbkRvdHNIb3ZlcjogZmFsc2UsXG4gICAgICAgICAgICAgICAgcmVzcG9uZFRvOiAnd2luZG93JyxcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBudWxsLFxuICAgICAgICAgICAgICAgIHJvd3M6IDEsXG4gICAgICAgICAgICAgICAgcnRsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzbGlkZTogJycsXG4gICAgICAgICAgICAgICAgc2xpZGVzUGVyUm93OiAxLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICBzcGVlZDogNTAwLFxuICAgICAgICAgICAgICAgIHN3aXBlOiB0cnVlLFxuICAgICAgICAgICAgICAgIHN3aXBlVG9TbGlkZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgdG91Y2hNb3ZlOiB0cnVlLFxuICAgICAgICAgICAgICAgIHRvdWNoVGhyZXNob2xkOiA1LFxuICAgICAgICAgICAgICAgIHVzZUNTUzogdHJ1ZSxcbiAgICAgICAgICAgICAgICB1c2VUcmFuc2Zvcm06IHRydWUsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVXaWR0aDogZmFsc2UsXG4gICAgICAgICAgICAgICAgdmVydGljYWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHZlcnRpY2FsU3dpcGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgd2FpdEZvckFuaW1hdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgekluZGV4OiAxMDAwXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBfLmluaXRpYWxzID0ge1xuICAgICAgICAgICAgICAgIGFuaW1hdGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgZHJhZ2dpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGF1dG9QbGF5VGltZXI6IG51bGwsXG4gICAgICAgICAgICAgICAgY3VycmVudERpcmVjdGlvbjogMCxcbiAgICAgICAgICAgICAgICBjdXJyZW50TGVmdDogbnVsbCxcbiAgICAgICAgICAgICAgICBjdXJyZW50U2xpZGU6IDAsXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAxLFxuICAgICAgICAgICAgICAgICRkb3RzOiBudWxsLFxuICAgICAgICAgICAgICAgIGxpc3RXaWR0aDogbnVsbCxcbiAgICAgICAgICAgICAgICBsaXN0SGVpZ2h0OiBudWxsLFxuICAgICAgICAgICAgICAgIGxvYWRJbmRleDogMCxcbiAgICAgICAgICAgICAgICAkbmV4dEFycm93OiBudWxsLFxuICAgICAgICAgICAgICAgICRwcmV2QXJyb3c6IG51bGwsXG4gICAgICAgICAgICAgICAgc2Nyb2xsaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzbGlkZUNvdW50OiBudWxsLFxuICAgICAgICAgICAgICAgIHNsaWRlV2lkdGg6IG51bGwsXG4gICAgICAgICAgICAgICAgJHNsaWRlVHJhY2s6IG51bGwsXG4gICAgICAgICAgICAgICAgJHNsaWRlczogbnVsbCxcbiAgICAgICAgICAgICAgICBzbGlkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzbGlkZU9mZnNldDogMCxcbiAgICAgICAgICAgICAgICBzd2lwZUxlZnQ6IG51bGwsXG4gICAgICAgICAgICAgICAgc3dpcGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgJGxpc3Q6IG51bGwsXG4gICAgICAgICAgICAgICAgdG91Y2hPYmplY3Q6IHt9LFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybXNFbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB1bnNsaWNrZWQ6IGZhbHNlXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAkLmV4dGVuZChfLCBfLmluaXRpYWxzKTtcblxuICAgICAgICAgICAgXy5hY3RpdmVCcmVha3BvaW50ID0gbnVsbDtcbiAgICAgICAgICAgIF8uYW5pbVR5cGUgPSBudWxsO1xuICAgICAgICAgICAgXy5hbmltUHJvcCA9IG51bGw7XG4gICAgICAgICAgICBfLmJyZWFrcG9pbnRzID0gW107XG4gICAgICAgICAgICBfLmJyZWFrcG9pbnRTZXR0aW5ncyA9IFtdO1xuICAgICAgICAgICAgXy5jc3NUcmFuc2l0aW9ucyA9IGZhbHNlO1xuICAgICAgICAgICAgXy5mb2N1c3NlZCA9IGZhbHNlO1xuICAgICAgICAgICAgXy5pbnRlcnJ1cHRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgXy5oaWRkZW4gPSAnaGlkZGVuJztcbiAgICAgICAgICAgIF8ucGF1c2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIF8ucG9zaXRpb25Qcm9wID0gbnVsbDtcbiAgICAgICAgICAgIF8ucmVzcG9uZFRvID0gbnVsbDtcbiAgICAgICAgICAgIF8ucm93Q291bnQgPSAxO1xuICAgICAgICAgICAgXy5zaG91bGRDbGljayA9IHRydWU7XG4gICAgICAgICAgICBfLiRzbGlkZXIgPSAkKGVsZW1lbnQpO1xuICAgICAgICAgICAgXy4kc2xpZGVzQ2FjaGUgPSBudWxsO1xuICAgICAgICAgICAgXy50cmFuc2Zvcm1UeXBlID0gbnVsbDtcbiAgICAgICAgICAgIF8udHJhbnNpdGlvblR5cGUgPSBudWxsO1xuICAgICAgICAgICAgXy52aXNpYmlsaXR5Q2hhbmdlID0gJ3Zpc2liaWxpdHljaGFuZ2UnO1xuICAgICAgICAgICAgXy53aW5kb3dXaWR0aCA9IDA7XG4gICAgICAgICAgICBfLndpbmRvd1RpbWVyID0gbnVsbDtcblxuICAgICAgICAgICAgZGF0YVNldHRpbmdzID0gJChlbGVtZW50KS5kYXRhKCdzbGljaycpIHx8IHt9O1xuXG4gICAgICAgICAgICBfLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgXy5kZWZhdWx0cywgc2V0dGluZ3MsIGRhdGFTZXR0aW5ncyk7XG5cbiAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gXy5vcHRpb25zLmluaXRpYWxTbGlkZTtcblxuICAgICAgICAgICAgXy5vcmlnaW5hbFNldHRpbmdzID0gXy5vcHRpb25zO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGRvY3VtZW50Lm1vekhpZGRlbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBfLmhpZGRlbiA9ICdtb3pIaWRkZW4nO1xuICAgICAgICAgICAgICAgIF8udmlzaWJpbGl0eUNoYW5nZSA9ICdtb3p2aXNpYmlsaXR5Y2hhbmdlJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGRvY3VtZW50LndlYmtpdEhpZGRlbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBfLmhpZGRlbiA9ICd3ZWJraXRIaWRkZW4nO1xuICAgICAgICAgICAgICAgIF8udmlzaWJpbGl0eUNoYW5nZSA9ICd3ZWJraXR2aXNpYmlsaXR5Y2hhbmdlJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXy5hdXRvUGxheSA9ICQucHJveHkoXy5hdXRvUGxheSwgXyk7XG4gICAgICAgICAgICBfLmF1dG9QbGF5Q2xlYXIgPSAkLnByb3h5KF8uYXV0b1BsYXlDbGVhciwgXyk7XG4gICAgICAgICAgICBfLmF1dG9QbGF5SXRlcmF0b3IgPSAkLnByb3h5KF8uYXV0b1BsYXlJdGVyYXRvciwgXyk7XG4gICAgICAgICAgICBfLmNoYW5nZVNsaWRlID0gJC5wcm94eShfLmNoYW5nZVNsaWRlLCBfKTtcbiAgICAgICAgICAgIF8uY2xpY2tIYW5kbGVyID0gJC5wcm94eShfLmNsaWNrSGFuZGxlciwgXyk7XG4gICAgICAgICAgICBfLnNlbGVjdEhhbmRsZXIgPSAkLnByb3h5KF8uc2VsZWN0SGFuZGxlciwgXyk7XG4gICAgICAgICAgICBfLnNldFBvc2l0aW9uID0gJC5wcm94eShfLnNldFBvc2l0aW9uLCBfKTtcbiAgICAgICAgICAgIF8uc3dpcGVIYW5kbGVyID0gJC5wcm94eShfLnN3aXBlSGFuZGxlciwgXyk7XG4gICAgICAgICAgICBfLmRyYWdIYW5kbGVyID0gJC5wcm94eShfLmRyYWdIYW5kbGVyLCBfKTtcbiAgICAgICAgICAgIF8ua2V5SGFuZGxlciA9ICQucHJveHkoXy5rZXlIYW5kbGVyLCBfKTtcblxuICAgICAgICAgICAgXy5pbnN0YW5jZVVpZCA9IGluc3RhbmNlVWlkKys7XG5cbiAgICAgICAgICAgIC8vIEEgc2ltcGxlIHdheSB0byBjaGVjayBmb3IgSFRNTCBzdHJpbmdzXG4gICAgICAgICAgICAvLyBTdHJpY3QgSFRNTCByZWNvZ25pdGlvbiAobXVzdCBzdGFydCB3aXRoIDwpXG4gICAgICAgICAgICAvLyBFeHRyYWN0ZWQgZnJvbSBqUXVlcnkgdjEuMTEgc291cmNlXG4gICAgICAgICAgICBfLmh0bWxFeHByID0gL14oPzpcXHMqKDxbXFx3XFxXXSs+KVtePl0qKSQvO1xuXG5cbiAgICAgICAgICAgIF8ucmVnaXN0ZXJCcmVha3BvaW50cygpO1xuICAgICAgICAgICAgXy5pbml0KHRydWUpO1xuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gU2xpY2s7XG5cbiAgICB9KCkpO1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmFjdGl2YXRlQURBID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLiRzbGlkZVRyYWNrLmZpbmQoJy5zbGljay1hY3RpdmUnKS5hdHRyKHtcbiAgICAgICAgICAgICdhcmlhLWhpZGRlbic6ICdmYWxzZSdcbiAgICAgICAgfSkuZmluZCgnYSwgaW5wdXQsIGJ1dHRvbiwgc2VsZWN0JykuYXR0cih7XG4gICAgICAgICAgICAndGFiaW5kZXgnOiAnMCdcbiAgICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmFkZFNsaWRlID0gU2xpY2sucHJvdG90eXBlLnNsaWNrQWRkID0gZnVuY3Rpb24obWFya3VwLCBpbmRleCwgYWRkQmVmb3JlKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmICh0eXBlb2YoaW5kZXgpID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgIGFkZEJlZm9yZSA9IGluZGV4O1xuICAgICAgICAgICAgaW5kZXggPSBudWxsO1xuICAgICAgICB9IGVsc2UgaWYgKGluZGV4IDwgMCB8fCAoaW5kZXggPj0gXy5zbGlkZUNvdW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgXy51bmxvYWQoKTtcblxuICAgICAgICBpZiAodHlwZW9mKGluZGV4KSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCAmJiBfLiRzbGlkZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgJChtYXJrdXApLmFwcGVuZFRvKF8uJHNsaWRlVHJhY2spO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChhZGRCZWZvcmUpIHtcbiAgICAgICAgICAgICAgICAkKG1hcmt1cCkuaW5zZXJ0QmVmb3JlKF8uJHNsaWRlcy5lcShpbmRleCkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKG1hcmt1cCkuaW5zZXJ0QWZ0ZXIoXy4kc2xpZGVzLmVxKGluZGV4KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoYWRkQmVmb3JlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgJChtYXJrdXApLnByZXBlbmRUbyhfLiRzbGlkZVRyYWNrKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChtYXJrdXApLmFwcGVuZFRvKF8uJHNsaWRlVHJhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgXy4kc2xpZGVzID0gXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpO1xuXG4gICAgICAgIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKS5kZXRhY2goKTtcblxuICAgICAgICBfLiRzbGlkZVRyYWNrLmFwcGVuZChfLiRzbGlkZXMpO1xuXG4gICAgICAgIF8uJHNsaWRlcy5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbGVtZW50KSB7XG4gICAgICAgICAgICAkKGVsZW1lbnQpLmF0dHIoJ2RhdGEtc2xpY2staW5kZXgnLCBpbmRleCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIF8uJHNsaWRlc0NhY2hlID0gXy4kc2xpZGVzO1xuXG4gICAgICAgIF8ucmVpbml0KCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmFuaW1hdGVIZWlnaHQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuICAgICAgICBpZiAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA9PT0gMSAmJiBfLm9wdGlvbnMuYWRhcHRpdmVIZWlnaHQgPT09IHRydWUgJiYgXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdmFyIHRhcmdldEhlaWdodCA9IF8uJHNsaWRlcy5lcShfLmN1cnJlbnRTbGlkZSkub3V0ZXJIZWlnaHQodHJ1ZSk7XG4gICAgICAgICAgICBfLiRsaXN0LmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIGhlaWdodDogdGFyZ2V0SGVpZ2h0XG4gICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hbmltYXRlU2xpZGUgPSBmdW5jdGlvbih0YXJnZXRMZWZ0LCBjYWxsYmFjaykge1xuXG4gICAgICAgIHZhciBhbmltUHJvcHMgPSB7fSxcbiAgICAgICAgICAgIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uYW5pbWF0ZUhlaWdodCgpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMucnRsID09PSB0cnVlICYmIF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRhcmdldExlZnQgPSAtdGFyZ2V0TGVmdDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXy50cmFuc2Zvcm1zRW5hYmxlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogdGFyZ2V0TGVmdFxuICAgICAgICAgICAgICAgIH0sIF8ub3B0aW9ucy5zcGVlZCwgXy5vcHRpb25zLmVhc2luZywgY2FsbGJhY2spO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICB0b3A6IHRhcmdldExlZnRcbiAgICAgICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQsIF8ub3B0aW9ucy5lYXNpbmcsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBpZiAoXy5jc3NUcmFuc2l0aW9ucyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnRMZWZ0ID0gLShfLmN1cnJlbnRMZWZ0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJCh7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1TdGFydDogXy5jdXJyZW50TGVmdFxuICAgICAgICAgICAgICAgIH0pLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICBhbmltU3RhcnQ6IHRhcmdldExlZnRcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBfLm9wdGlvbnMuc3BlZWQsXG4gICAgICAgICAgICAgICAgICAgIGVhc2luZzogXy5vcHRpb25zLmVhc2luZyxcbiAgICAgICAgICAgICAgICAgICAgc3RlcDogZnVuY3Rpb24obm93KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3cgPSBNYXRoLmNlaWwobm93KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbVByb3BzW18uYW5pbVR5cGVdID0gJ3RyYW5zbGF0ZSgnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm93ICsgJ3B4LCAwcHgpJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyhhbmltUHJvcHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltUHJvcHNbXy5hbmltVHlwZV0gPSAndHJhbnNsYXRlKDBweCwnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm93ICsgJ3B4KSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3MoYW5pbVByb3BzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICBfLmFwcGx5VHJhbnNpdGlvbigpO1xuICAgICAgICAgICAgICAgIHRhcmdldExlZnQgPSBNYXRoLmNlaWwodGFyZ2V0TGVmdCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICBhbmltUHJvcHNbXy5hbmltVHlwZV0gPSAndHJhbnNsYXRlM2QoJyArIHRhcmdldExlZnQgKyAncHgsIDBweCwgMHB4KSc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbVByb3BzW18uYW5pbVR5cGVdID0gJ3RyYW5zbGF0ZTNkKDBweCwnICsgdGFyZ2V0TGVmdCArICdweCwgMHB4KSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKGFuaW1Qcm9wcyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgXy5kaXNhYmxlVHJhbnNpdGlvbigpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIF8ub3B0aW9ucy5zcGVlZCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXROYXZUYXJnZXQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBhc05hdkZvciA9IF8ub3B0aW9ucy5hc05hdkZvcjtcblxuICAgICAgICBpZiAoIGFzTmF2Rm9yICYmIGFzTmF2Rm9yICE9PSBudWxsICkge1xuICAgICAgICAgICAgYXNOYXZGb3IgPSAkKGFzTmF2Rm9yKS5ub3QoXy4kc2xpZGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhc05hdkZvcjtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYXNOYXZGb3IgPSBmdW5jdGlvbihpbmRleCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGFzTmF2Rm9yID0gXy5nZXROYXZUYXJnZXQoKTtcblxuICAgICAgICBpZiAoIGFzTmF2Rm9yICE9PSBudWxsICYmIHR5cGVvZiBhc05hdkZvciA9PT0gJ29iamVjdCcgKSB7XG4gICAgICAgICAgICBhc05hdkZvci5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSAkKHRoaXMpLnNsaWNrKCdnZXRTbGljaycpO1xuICAgICAgICAgICAgICAgIGlmKCF0YXJnZXQudW5zbGlja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5zbGlkZUhhbmRsZXIoaW5kZXgsIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmFwcGx5VHJhbnNpdGlvbiA9IGZ1bmN0aW9uKHNsaWRlKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgdHJhbnNpdGlvbiA9IHt9O1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb25bXy50cmFuc2l0aW9uVHlwZV0gPSBfLnRyYW5zZm9ybVR5cGUgKyAnICcgKyBfLm9wdGlvbnMuc3BlZWQgKyAnbXMgJyArIF8ub3B0aW9ucy5jc3NFYXNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdHJhbnNpdGlvbltfLnRyYW5zaXRpb25UeXBlXSA9ICdvcGFjaXR5ICcgKyBfLm9wdGlvbnMuc3BlZWQgKyAnbXMgJyArIF8ub3B0aW9ucy5jc3NFYXNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3ModHJhbnNpdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGUpLmNzcyh0cmFuc2l0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hdXRvUGxheSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLmF1dG9QbGF5Q2xlYXIoKTtcblxuICAgICAgICBpZiAoIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKSB7XG4gICAgICAgICAgICBfLmF1dG9QbGF5VGltZXIgPSBzZXRJbnRlcnZhbCggXy5hdXRvUGxheUl0ZXJhdG9yLCBfLm9wdGlvbnMuYXV0b3BsYXlTcGVlZCApO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmF1dG9QbGF5Q2xlYXIgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8uYXV0b1BsYXlUaW1lcikge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChfLmF1dG9QbGF5VGltZXIpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmF1dG9QbGF5SXRlcmF0b3IgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBzbGlkZVRvID0gXy5jdXJyZW50U2xpZGUgKyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG5cbiAgICAgICAgaWYgKCAhXy5wYXVzZWQgJiYgIV8uaW50ZXJydXB0ZWQgJiYgIV8uZm9jdXNzZWQgKSB7XG5cbiAgICAgICAgICAgIGlmICggXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSApIHtcblxuICAgICAgICAgICAgICAgIGlmICggXy5kaXJlY3Rpb24gPT09IDEgJiYgKCBfLmN1cnJlbnRTbGlkZSArIDEgKSA9PT0gKCBfLnNsaWRlQ291bnQgLSAxICkpIHtcbiAgICAgICAgICAgICAgICAgICAgXy5kaXJlY3Rpb24gPSAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCBfLmRpcmVjdGlvbiA9PT0gMCApIHtcblxuICAgICAgICAgICAgICAgICAgICBzbGlkZVRvID0gXy5jdXJyZW50U2xpZGUgLSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCBfLmN1cnJlbnRTbGlkZSAtIDEgPT09IDAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLmRpcmVjdGlvbiA9IDE7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfLnNsaWRlSGFuZGxlciggc2xpZGVUbyApO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYnVpbGRBcnJvd3MgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hcnJvd3MgPT09IHRydWUgKSB7XG5cbiAgICAgICAgICAgIF8uJHByZXZBcnJvdyA9ICQoXy5vcHRpb25zLnByZXZBcnJvdykuYWRkQ2xhc3MoJ3NsaWNrLWFycm93Jyk7XG4gICAgICAgICAgICBfLiRuZXh0QXJyb3cgPSAkKF8ub3B0aW9ucy5uZXh0QXJyb3cpLmFkZENsYXNzKCdzbGljay1hcnJvdycpO1xuXG4gICAgICAgICAgICBpZiggXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyApIHtcblxuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2staGlkZGVuJykucmVtb3ZlQXR0cignYXJpYS1oaWRkZW4gdGFiaW5kZXgnKTtcbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cucmVtb3ZlQ2xhc3MoJ3NsaWNrLWhpZGRlbicpLnJlbW92ZUF0dHIoJ2FyaWEtaGlkZGVuIHRhYmluZGV4Jyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoXy5odG1sRXhwci50ZXN0KF8ub3B0aW9ucy5wcmV2QXJyb3cpKSB7XG4gICAgICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5wcmVwZW5kVG8oXy5vcHRpb25zLmFwcGVuZEFycm93cyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKF8uaHRtbEV4cHIudGVzdChfLm9wdGlvbnMubmV4dEFycm93KSkge1xuICAgICAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cuYXBwZW5kVG8oXy5vcHRpb25zLmFwcGVuZEFycm93cyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3dcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stZGlzYWJsZWQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAndHJ1ZScpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5hZGQoIF8uJG5leHRBcnJvdyApXG5cbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1oaWRkZW4nKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cih7XG4gICAgICAgICAgICAgICAgICAgICAgICAnYXJpYS1kaXNhYmxlZCc6ICd0cnVlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICd0YWJpbmRleCc6ICctMSdcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmJ1aWxkRG90cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGksIGRvdDtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmRvdHMgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICBfLiRzbGlkZXIuYWRkQ2xhc3MoJ3NsaWNrLWRvdHRlZCcpO1xuXG4gICAgICAgICAgICBkb3QgPSAkKCc8dWwgLz4nKS5hZGRDbGFzcyhfLm9wdGlvbnMuZG90c0NsYXNzKTtcblxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8PSBfLmdldERvdENvdW50KCk7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGRvdC5hcHBlbmQoJCgnPGxpIC8+JykuYXBwZW5kKF8ub3B0aW9ucy5jdXN0b21QYWdpbmcuY2FsbCh0aGlzLCBfLCBpKSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfLiRkb3RzID0gZG90LmFwcGVuZFRvKF8ub3B0aW9ucy5hcHBlbmREb3RzKTtcblxuICAgICAgICAgICAgXy4kZG90cy5maW5kKCdsaScpLmZpcnN0KCkuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYnVpbGRPdXQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy4kc2xpZGVzID1cbiAgICAgICAgICAgIF8uJHNsaWRlclxuICAgICAgICAgICAgICAgIC5jaGlsZHJlbiggXy5vcHRpb25zLnNsaWRlICsgJzpub3QoLnNsaWNrLWNsb25lZCknKVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stc2xpZGUnKTtcblxuICAgICAgICBfLnNsaWRlQ291bnQgPSBfLiRzbGlkZXMubGVuZ3RoO1xuXG4gICAgICAgIF8uJHNsaWRlcy5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbGVtZW50KSB7XG4gICAgICAgICAgICAkKGVsZW1lbnQpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtc2xpY2staW5kZXgnLCBpbmRleClcbiAgICAgICAgICAgICAgICAuZGF0YSgnb3JpZ2luYWxTdHlsaW5nJywgJChlbGVtZW50KS5hdHRyKCdzdHlsZScpIHx8ICcnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgXy4kc2xpZGVyLmFkZENsYXNzKCdzbGljay1zbGlkZXInKTtcblxuICAgICAgICBfLiRzbGlkZVRyYWNrID0gKF8uc2xpZGVDb3VudCA9PT0gMCkgP1xuICAgICAgICAgICAgJCgnPGRpdiBjbGFzcz1cInNsaWNrLXRyYWNrXCIvPicpLmFwcGVuZFRvKF8uJHNsaWRlcikgOlxuICAgICAgICAgICAgXy4kc2xpZGVzLndyYXBBbGwoJzxkaXYgY2xhc3M9XCJzbGljay10cmFja1wiLz4nKS5wYXJlbnQoKTtcblxuICAgICAgICBfLiRsaXN0ID0gXy4kc2xpZGVUcmFjay53cmFwKFxuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJzbGljay1saXN0XCIvPicpLnBhcmVudCgpO1xuICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcygnb3BhY2l0eScsIDApO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSB8fCBfLm9wdGlvbnMuc3dpcGVUb1NsaWRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgJCgnaW1nW2RhdGEtbGF6eV0nLCBfLiRzbGlkZXIpLm5vdCgnW3NyY10nKS5hZGRDbGFzcygnc2xpY2stbG9hZGluZycpO1xuXG4gICAgICAgIF8uc2V0dXBJbmZpbml0ZSgpO1xuXG4gICAgICAgIF8uYnVpbGRBcnJvd3MoKTtcblxuICAgICAgICBfLmJ1aWxkRG90cygpO1xuXG4gICAgICAgIF8udXBkYXRlRG90cygpO1xuXG5cbiAgICAgICAgXy5zZXRTbGlkZUNsYXNzZXModHlwZW9mIF8uY3VycmVudFNsaWRlID09PSAnbnVtYmVyJyA/IF8uY3VycmVudFNsaWRlIDogMCk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5kcmFnZ2FibGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uJGxpc3QuYWRkQ2xhc3MoJ2RyYWdnYWJsZScpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmJ1aWxkUm93cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcywgYSwgYiwgYywgbmV3U2xpZGVzLCBudW1PZlNsaWRlcywgb3JpZ2luYWxTbGlkZXMsc2xpZGVzUGVyU2VjdGlvbjtcblxuICAgICAgICBuZXdTbGlkZXMgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICAgIG9yaWdpbmFsU2xpZGVzID0gXy4kc2xpZGVyLmNoaWxkcmVuKCk7XG5cbiAgICAgICAgaWYoXy5vcHRpb25zLnJvd3MgPiAwKSB7XG5cbiAgICAgICAgICAgIHNsaWRlc1BlclNlY3Rpb24gPSBfLm9wdGlvbnMuc2xpZGVzUGVyUm93ICogXy5vcHRpb25zLnJvd3M7XG4gICAgICAgICAgICBudW1PZlNsaWRlcyA9IE1hdGguY2VpbChcbiAgICAgICAgICAgICAgICBvcmlnaW5hbFNsaWRlcy5sZW5ndGggLyBzbGlkZXNQZXJTZWN0aW9uXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBmb3IoYSA9IDA7IGEgPCBudW1PZlNsaWRlczsgYSsrKXtcbiAgICAgICAgICAgICAgICB2YXIgc2xpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBmb3IoYiA9IDA7IGIgPCBfLm9wdGlvbnMucm93czsgYisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yKGMgPSAwOyBjIDwgXy5vcHRpb25zLnNsaWRlc1BlclJvdzsgYysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gKGEgKiBzbGlkZXNQZXJTZWN0aW9uICsgKChiICogXy5vcHRpb25zLnNsaWRlc1BlclJvdykgKyBjKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3JpZ2luYWxTbGlkZXMuZ2V0KHRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQob3JpZ2luYWxTbGlkZXMuZ2V0KHRhcmdldCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlLmFwcGVuZENoaWxkKHJvdyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5ld1NsaWRlcy5hcHBlbmRDaGlsZChzbGlkZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF8uJHNsaWRlci5lbXB0eSgpLmFwcGVuZChuZXdTbGlkZXMpO1xuICAgICAgICAgICAgXy4kc2xpZGVyLmNoaWxkcmVuKCkuY2hpbGRyZW4oKS5jaGlsZHJlbigpXG4gICAgICAgICAgICAgICAgLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd3aWR0aCc6KDEwMCAvIF8ub3B0aW9ucy5zbGlkZXNQZXJSb3cpICsgJyUnLFxuICAgICAgICAgICAgICAgICAgICAnZGlzcGxheSc6ICdpbmxpbmUtYmxvY2snXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5jaGVja1Jlc3BvbnNpdmUgPSBmdW5jdGlvbihpbml0aWFsLCBmb3JjZVVwZGF0ZSkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGJyZWFrcG9pbnQsIHRhcmdldEJyZWFrcG9pbnQsIHJlc3BvbmRUb1dpZHRoLCB0cmlnZ2VyQnJlYWtwb2ludCA9IGZhbHNlO1xuICAgICAgICB2YXIgc2xpZGVyV2lkdGggPSBfLiRzbGlkZXIud2lkdGgoKTtcbiAgICAgICAgdmFyIHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGggfHwgJCh3aW5kb3cpLndpZHRoKCk7XG5cbiAgICAgICAgaWYgKF8ucmVzcG9uZFRvID09PSAnd2luZG93Jykge1xuICAgICAgICAgICAgcmVzcG9uZFRvV2lkdGggPSB3aW5kb3dXaWR0aDtcbiAgICAgICAgfSBlbHNlIGlmIChfLnJlc3BvbmRUbyA9PT0gJ3NsaWRlcicpIHtcbiAgICAgICAgICAgIHJlc3BvbmRUb1dpZHRoID0gc2xpZGVyV2lkdGg7XG4gICAgICAgIH0gZWxzZSBpZiAoXy5yZXNwb25kVG8gPT09ICdtaW4nKSB7XG4gICAgICAgICAgICByZXNwb25kVG9XaWR0aCA9IE1hdGgubWluKHdpbmRvd1dpZHRoLCBzbGlkZXJXaWR0aCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5yZXNwb25zaXZlICYmXG4gICAgICAgICAgICBfLm9wdGlvbnMucmVzcG9uc2l2ZS5sZW5ndGggJiZcbiAgICAgICAgICAgIF8ub3B0aW9ucy5yZXNwb25zaXZlICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgIHRhcmdldEJyZWFrcG9pbnQgPSBudWxsO1xuXG4gICAgICAgICAgICBmb3IgKGJyZWFrcG9pbnQgaW4gXy5icmVha3BvaW50cykge1xuICAgICAgICAgICAgICAgIGlmIChfLmJyZWFrcG9pbnRzLmhhc093blByb3BlcnR5KGJyZWFrcG9pbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfLm9yaWdpbmFsU2V0dGluZ3MubW9iaWxlRmlyc3QgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uZFRvV2lkdGggPCBfLmJyZWFrcG9pbnRzW2JyZWFrcG9pbnRdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0QnJlYWtwb2ludCA9IF8uYnJlYWtwb2ludHNbYnJlYWtwb2ludF07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uZFRvV2lkdGggPiBfLmJyZWFrcG9pbnRzW2JyZWFrcG9pbnRdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0QnJlYWtwb2ludCA9IF8uYnJlYWtwb2ludHNbYnJlYWtwb2ludF07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0YXJnZXRCcmVha3BvaW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKF8uYWN0aXZlQnJlYWtwb2ludCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0QnJlYWtwb2ludCAhPT0gXy5hY3RpdmVCcmVha3BvaW50IHx8IGZvcmNlVXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLmFjdGl2ZUJyZWFrcG9pbnQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEJyZWFrcG9pbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXy5icmVha3BvaW50U2V0dGluZ3NbdGFyZ2V0QnJlYWtwb2ludF0gPT09ICd1bnNsaWNrJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8udW5zbGljayh0YXJnZXRCcmVha3BvaW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zID0gJC5leHRlbmQoe30sIF8ub3JpZ2luYWxTZXR0aW5ncyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5icmVha3BvaW50U2V0dGluZ3NbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRCcmVha3BvaW50XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluaXRpYWwgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSBfLm9wdGlvbnMuaW5pdGlhbFNsaWRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLnJlZnJlc2goaW5pdGlhbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyQnJlYWtwb2ludCA9IHRhcmdldEJyZWFrcG9pbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfLmFjdGl2ZUJyZWFrcG9pbnQgPSB0YXJnZXRCcmVha3BvaW50O1xuICAgICAgICAgICAgICAgICAgICBpZiAoXy5icmVha3BvaW50U2V0dGluZ3NbdGFyZ2V0QnJlYWtwb2ludF0gPT09ICd1bnNsaWNrJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy51bnNsaWNrKHRhcmdldEJyZWFrcG9pbnQpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zID0gJC5leHRlbmQoe30sIF8ub3JpZ2luYWxTZXR0aW5ncyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmJyZWFrcG9pbnRTZXR0aW5nc1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0QnJlYWtwb2ludF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluaXRpYWwgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IF8ub3B0aW9ucy5pbml0aWFsU2xpZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBfLnJlZnJlc2goaW5pdGlhbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlckJyZWFrcG9pbnQgPSB0YXJnZXRCcmVha3BvaW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKF8uYWN0aXZlQnJlYWtwb2ludCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBfLmFjdGl2ZUJyZWFrcG9pbnQgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMgPSBfLm9yaWdpbmFsU2V0dGluZ3M7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbml0aWFsID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IF8ub3B0aW9ucy5pbml0aWFsU2xpZGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXy5yZWZyZXNoKGluaXRpYWwpO1xuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyQnJlYWtwb2ludCA9IHRhcmdldEJyZWFrcG9pbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBvbmx5IHRyaWdnZXIgYnJlYWtwb2ludHMgZHVyaW5nIGFuIGFjdHVhbCBicmVhay4gbm90IG9uIGluaXRpYWxpemUuXG4gICAgICAgICAgICBpZiggIWluaXRpYWwgJiYgdHJpZ2dlckJyZWFrcG9pbnQgIT09IGZhbHNlICkge1xuICAgICAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdicmVha3BvaW50JywgW18sIHRyaWdnZXJCcmVha3BvaW50XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuY2hhbmdlU2xpZGUgPSBmdW5jdGlvbihldmVudCwgZG9udEFuaW1hdGUpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KSxcbiAgICAgICAgICAgIGluZGV4T2Zmc2V0LCBzbGlkZU9mZnNldCwgdW5ldmVuT2Zmc2V0O1xuXG4gICAgICAgIC8vIElmIHRhcmdldCBpcyBhIGxpbmssIHByZXZlbnQgZGVmYXVsdCBhY3Rpb24uXG4gICAgICAgIGlmKCR0YXJnZXQuaXMoJ2EnKSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHRhcmdldCBpcyBub3QgdGhlIDxsaT4gZWxlbWVudCAoaWU6IGEgY2hpbGQpLCBmaW5kIHRoZSA8bGk+LlxuICAgICAgICBpZighJHRhcmdldC5pcygnbGknKSkge1xuICAgICAgICAgICAgJHRhcmdldCA9ICR0YXJnZXQuY2xvc2VzdCgnbGknKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHVuZXZlbk9mZnNldCA9IChfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgIT09IDApO1xuICAgICAgICBpbmRleE9mZnNldCA9IHVuZXZlbk9mZnNldCA/IDAgOiAoXy5zbGlkZUNvdW50IC0gXy5jdXJyZW50U2xpZGUpICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuXG4gICAgICAgIHN3aXRjaCAoZXZlbnQuZGF0YS5tZXNzYWdlKSB7XG5cbiAgICAgICAgICAgIGNhc2UgJ3ByZXZpb3VzJzpcbiAgICAgICAgICAgICAgICBzbGlkZU9mZnNldCA9IGluZGV4T2Zmc2V0ID09PSAwID8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDogXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAtIGluZGV4T2Zmc2V0O1xuICAgICAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAgICAgICAgIF8uc2xpZGVIYW5kbGVyKF8uY3VycmVudFNsaWRlIC0gc2xpZGVPZmZzZXQsIGZhbHNlLCBkb250QW5pbWF0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICduZXh0JzpcbiAgICAgICAgICAgICAgICBzbGlkZU9mZnNldCA9IGluZGV4T2Zmc2V0ID09PSAwID8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDogaW5kZXhPZmZzZXQ7XG4gICAgICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgICAgICAgICAgXy5zbGlkZUhhbmRsZXIoXy5jdXJyZW50U2xpZGUgKyBzbGlkZU9mZnNldCwgZmFsc2UsIGRvbnRBbmltYXRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ2luZGV4JzpcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBldmVudC5kYXRhLmluZGV4ID09PSAwID8gMCA6XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEuaW5kZXggfHwgJHRhcmdldC5pbmRleCgpICogXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuXG4gICAgICAgICAgICAgICAgXy5zbGlkZUhhbmRsZXIoXy5jaGVja05hdmlnYWJsZShpbmRleCksIGZhbHNlLCBkb250QW5pbWF0ZSk7XG4gICAgICAgICAgICAgICAgJHRhcmdldC5jaGlsZHJlbigpLnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmNoZWNrTmF2aWdhYmxlID0gZnVuY3Rpb24oaW5kZXgpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBuYXZpZ2FibGVzLCBwcmV2TmF2aWdhYmxlO1xuXG4gICAgICAgIG5hdmlnYWJsZXMgPSBfLmdldE5hdmlnYWJsZUluZGV4ZXMoKTtcbiAgICAgICAgcHJldk5hdmlnYWJsZSA9IDA7XG4gICAgICAgIGlmIChpbmRleCA+IG5hdmlnYWJsZXNbbmF2aWdhYmxlcy5sZW5ndGggLSAxXSkge1xuICAgICAgICAgICAgaW5kZXggPSBuYXZpZ2FibGVzW25hdmlnYWJsZXMubGVuZ3RoIC0gMV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKHZhciBuIGluIG5hdmlnYWJsZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPCBuYXZpZ2FibGVzW25dKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4ID0gcHJldk5hdmlnYWJsZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHByZXZOYXZpZ2FibGUgPSBuYXZpZ2FibGVzW25dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuY2xlYW5VcEV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmRvdHMgJiYgXy4kZG90cyAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICAkKCdsaScsIF8uJGRvdHMpXG4gICAgICAgICAgICAgICAgLm9mZignY2xpY2suc2xpY2snLCBfLmNoYW5nZVNsaWRlKVxuICAgICAgICAgICAgICAgIC5vZmYoJ21vdXNlZW50ZXIuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCB0cnVlKSlcbiAgICAgICAgICAgICAgICAub2ZmKCdtb3VzZWxlYXZlLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgZmFsc2UpKTtcblxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy4kZG90cy5vZmYoJ2tleWRvd24uc2xpY2snLCBfLmtleUhhbmRsZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgXy4kc2xpZGVyLm9mZignZm9jdXMuc2xpY2sgYmx1ci5zbGljaycpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYXJyb3dzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIF8uJHByZXZBcnJvdyAmJiBfLiRwcmV2QXJyb3cub2ZmKCdjbGljay5zbGljaycsIF8uY2hhbmdlU2xpZGUpO1xuICAgICAgICAgICAgXy4kbmV4dEFycm93ICYmIF8uJG5leHRBcnJvdy5vZmYoJ2NsaWNrLnNsaWNrJywgXy5jaGFuZ2VTbGlkZSk7XG5cbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdyAmJiBfLiRwcmV2QXJyb3cub2ZmKCdrZXlkb3duLnNsaWNrJywgXy5rZXlIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cgJiYgXy4kbmV4dEFycm93Lm9mZigna2V5ZG93bi5zbGljaycsIF8ua2V5SGFuZGxlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBfLiRsaXN0Lm9mZigndG91Y2hzdGFydC5zbGljayBtb3VzZWRvd24uc2xpY2snLCBfLnN3aXBlSGFuZGxlcik7XG4gICAgICAgIF8uJGxpc3Qub2ZmKCd0b3VjaG1vdmUuc2xpY2sgbW91c2Vtb3ZlLnNsaWNrJywgXy5zd2lwZUhhbmRsZXIpO1xuICAgICAgICBfLiRsaXN0Lm9mZigndG91Y2hlbmQuc2xpY2sgbW91c2V1cC5zbGljaycsIF8uc3dpcGVIYW5kbGVyKTtcbiAgICAgICAgXy4kbGlzdC5vZmYoJ3RvdWNoY2FuY2VsLnNsaWNrIG1vdXNlbGVhdmUuc2xpY2snLCBfLnN3aXBlSGFuZGxlcik7XG5cbiAgICAgICAgXy4kbGlzdC5vZmYoJ2NsaWNrLnNsaWNrJywgXy5jbGlja0hhbmRsZXIpO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9mZihfLnZpc2liaWxpdHlDaGFuZ2UsIF8udmlzaWJpbGl0eSk7XG5cbiAgICAgICAgXy5jbGVhblVwU2xpZGVFdmVudHMoKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uJGxpc3Qub2ZmKCdrZXlkb3duLnNsaWNrJywgXy5rZXlIYW5kbGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZm9jdXNPblNlbGVjdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgJChfLiRzbGlkZVRyYWNrKS5jaGlsZHJlbigpLm9mZignY2xpY2suc2xpY2snLCBfLnNlbGVjdEhhbmRsZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgJCh3aW5kb3cpLm9mZignb3JpZW50YXRpb25jaGFuZ2Uuc2xpY2suc2xpY2stJyArIF8uaW5zdGFuY2VVaWQsIF8ub3JpZW50YXRpb25DaGFuZ2UpO1xuXG4gICAgICAgICQod2luZG93KS5vZmYoJ3Jlc2l6ZS5zbGljay5zbGljay0nICsgXy5pbnN0YW5jZVVpZCwgXy5yZXNpemUpO1xuXG4gICAgICAgICQoJ1tkcmFnZ2FibGUhPXRydWVdJywgXy4kc2xpZGVUcmFjaykub2ZmKCdkcmFnc3RhcnQnLCBfLnByZXZlbnREZWZhdWx0KTtcblxuICAgICAgICAkKHdpbmRvdykub2ZmKCdsb2FkLnNsaWNrLnNsaWNrLScgKyBfLmluc3RhbmNlVWlkLCBfLnNldFBvc2l0aW9uKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuY2xlYW5VcFNsaWRlRXZlbnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uJGxpc3Qub2ZmKCdtb3VzZWVudGVyLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgdHJ1ZSkpO1xuICAgICAgICBfLiRsaXN0Lm9mZignbW91c2VsZWF2ZS5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIGZhbHNlKSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmNsZWFuVXBSb3dzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLCBvcmlnaW5hbFNsaWRlcztcblxuICAgICAgICBpZihfLm9wdGlvbnMucm93cyA+IDApIHtcbiAgICAgICAgICAgIG9yaWdpbmFsU2xpZGVzID0gXy4kc2xpZGVzLmNoaWxkcmVuKCkuY2hpbGRyZW4oKTtcbiAgICAgICAgICAgIG9yaWdpbmFsU2xpZGVzLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAgICAgICBfLiRzbGlkZXIuZW1wdHkoKS5hcHBlbmQob3JpZ2luYWxTbGlkZXMpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmNsaWNrSGFuZGxlciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLnNob3VsZENsaWNrID09PSBmYWxzZSkge1xuICAgICAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKHJlZnJlc2gpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5hdXRvUGxheUNsZWFyKCk7XG5cbiAgICAgICAgXy50b3VjaE9iamVjdCA9IHt9O1xuXG4gICAgICAgIF8uY2xlYW5VcEV2ZW50cygpO1xuXG4gICAgICAgICQoJy5zbGljay1jbG9uZWQnLCBfLiRzbGlkZXIpLmRldGFjaCgpO1xuXG4gICAgICAgIGlmIChfLiRkb3RzKSB7XG4gICAgICAgICAgICBfLiRkb3RzLnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBfLiRwcmV2QXJyb3cgJiYgXy4kcHJldkFycm93Lmxlbmd0aCApIHtcblxuICAgICAgICAgICAgXy4kcHJldkFycm93XG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1kaXNhYmxlZCBzbGljay1hcnJvdyBzbGljay1oaWRkZW4nKVxuICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdhcmlhLWhpZGRlbiBhcmlhLWRpc2FibGVkIHRhYmluZGV4JylcbiAgICAgICAgICAgICAgICAuY3NzKCdkaXNwbGF5JywnJyk7XG5cbiAgICAgICAgICAgIGlmICggXy5odG1sRXhwci50ZXN0KCBfLm9wdGlvbnMucHJldkFycm93ICkpIHtcbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIF8uJG5leHRBcnJvdyAmJiBfLiRuZXh0QXJyb3cubGVuZ3RoICkge1xuXG4gICAgICAgICAgICBfLiRuZXh0QXJyb3dcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRpc2FibGVkIHNsaWNrLWFycm93IHNsaWNrLWhpZGRlbicpXG4gICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ2FyaWEtaGlkZGVuIGFyaWEtZGlzYWJsZWQgdGFiaW5kZXgnKVxuICAgICAgICAgICAgICAgIC5jc3MoJ2Rpc3BsYXknLCcnKTtcblxuICAgICAgICAgICAgaWYgKCBfLmh0bWxFeHByLnRlc3QoIF8ub3B0aW9ucy5uZXh0QXJyb3cgKSkge1xuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKF8uJHNsaWRlcykge1xuXG4gICAgICAgICAgICBfLiRzbGlkZXNcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLXNsaWRlIHNsaWNrLWFjdGl2ZSBzbGljay1jZW50ZXIgc2xpY2stdmlzaWJsZSBzbGljay1jdXJyZW50JylcbiAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignYXJpYS1oaWRkZW4nKVxuICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdkYXRhLXNsaWNrLWluZGV4JylcbiAgICAgICAgICAgICAgICAuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoJ3N0eWxlJywgJCh0aGlzKS5kYXRhKCdvcmlnaW5hbFN0eWxpbmcnKSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKS5kZXRhY2goKTtcblxuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5kZXRhY2goKTtcblxuICAgICAgICAgICAgXy4kbGlzdC5kZXRhY2goKTtcblxuICAgICAgICAgICAgXy4kc2xpZGVyLmFwcGVuZChfLiRzbGlkZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgXy5jbGVhblVwUm93cygpO1xuXG4gICAgICAgIF8uJHNsaWRlci5yZW1vdmVDbGFzcygnc2xpY2stc2xpZGVyJyk7XG4gICAgICAgIF8uJHNsaWRlci5yZW1vdmVDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKTtcbiAgICAgICAgXy4kc2xpZGVyLnJlbW92ZUNsYXNzKCdzbGljay1kb3R0ZWQnKTtcblxuICAgICAgICBfLnVuc2xpY2tlZCA9IHRydWU7XG5cbiAgICAgICAgaWYoIXJlZnJlc2gpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdkZXN0cm95JywgW19dKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5kaXNhYmxlVHJhbnNpdGlvbiA9IGZ1bmN0aW9uKHNsaWRlKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgdHJhbnNpdGlvbiA9IHt9O1xuXG4gICAgICAgIHRyYW5zaXRpb25bXy50cmFuc2l0aW9uVHlwZV0gPSAnJztcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyh0cmFuc2l0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShzbGlkZSkuY3NzKHRyYW5zaXRpb24pO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmZhZGVTbGlkZSA9IGZ1bmN0aW9uKHNsaWRlSW5kZXgsIGNhbGxiYWNrKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLmNzc1RyYW5zaXRpb25zID09PSBmYWxzZSkge1xuXG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGVJbmRleCkuY3NzKHtcbiAgICAgICAgICAgICAgICB6SW5kZXg6IF8ub3B0aW9ucy56SW5kZXhcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGVJbmRleCkuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICAgICAgfSwgXy5vcHRpb25zLnNwZWVkLCBfLm9wdGlvbnMuZWFzaW5nLCBjYWxsYmFjayk7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgXy5hcHBseVRyYW5zaXRpb24oc2xpZGVJbmRleCk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShzbGlkZUluZGV4KS5jc3Moe1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgICAgICBfLmRpc2FibGVUcmFuc2l0aW9uKHNsaWRlSW5kZXgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoKTtcbiAgICAgICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZmFkZVNsaWRlT3V0ID0gZnVuY3Rpb24oc2xpZGVJbmRleCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5jc3NUcmFuc2l0aW9ucyA9PT0gZmFsc2UpIHtcblxuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKHNsaWRlSW5kZXgpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4IC0gMlxuICAgICAgICAgICAgfSwgXy5vcHRpb25zLnNwZWVkLCBfLm9wdGlvbnMuZWFzaW5nKTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBfLmFwcGx5VHJhbnNpdGlvbihzbGlkZUluZGV4KTtcblxuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKHNsaWRlSW5kZXgpLmNzcyh7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICAgICAgICB6SW5kZXg6IF8ub3B0aW9ucy56SW5kZXggLSAyXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmZpbHRlclNsaWRlcyA9IFNsaWNrLnByb3RvdHlwZS5zbGlja0ZpbHRlciA9IGZ1bmN0aW9uKGZpbHRlcikge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoZmlsdGVyICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlc0NhY2hlID0gXy4kc2xpZGVzO1xuXG4gICAgICAgICAgICBfLnVubG9hZCgpO1xuXG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZGV0YWNoKCk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlc0NhY2hlLmZpbHRlcihmaWx0ZXIpLmFwcGVuZFRvKF8uJHNsaWRlVHJhY2spO1xuXG4gICAgICAgICAgICBfLnJlaW5pdCgpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZm9jdXNIYW5kbGVyID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uJHNsaWRlclxuICAgICAgICAgICAgLm9mZignZm9jdXMuc2xpY2sgYmx1ci5zbGljaycpXG4gICAgICAgICAgICAub24oJ2ZvY3VzLnNsaWNrIGJsdXIuc2xpY2snLCAnKicsIGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgdmFyICRzZiA9ICQodGhpcyk7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICBpZiggXy5vcHRpb25zLnBhdXNlT25Gb2N1cyApIHtcbiAgICAgICAgICAgICAgICAgICAgXy5mb2N1c3NlZCA9ICRzZi5pcygnOmZvY3VzJyk7XG4gICAgICAgICAgICAgICAgICAgIF8uYXV0b1BsYXkoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0sIDApO1xuXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZ2V0Q3VycmVudCA9IFNsaWNrLnByb3RvdHlwZS5zbGlja0N1cnJlbnRTbGlkZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcbiAgICAgICAgcmV0dXJuIF8uY3VycmVudFNsaWRlO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXREb3RDb3VudCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICB2YXIgYnJlYWtQb2ludCA9IDA7XG4gICAgICAgIHZhciBjb3VudGVyID0gMDtcbiAgICAgICAgdmFyIHBhZ2VyUXR5ID0gMDtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgICAgICAgKytwYWdlclF0eTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgd2hpbGUgKGJyZWFrUG9pbnQgPCBfLnNsaWRlQ291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgKytwYWdlclF0eTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtQb2ludCA9IGNvdW50ZXIgKyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXIgKz0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgOiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcGFnZXJRdHkgPSBfLnNsaWRlQ291bnQ7XG4gICAgICAgIH0gZWxzZSBpZighXy5vcHRpb25zLmFzTmF2Rm9yKSB7XG4gICAgICAgICAgICBwYWdlclF0eSA9IDEgKyBNYXRoLmNlaWwoKF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIC8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgd2hpbGUgKGJyZWFrUG9pbnQgPCBfLnNsaWRlQ291bnQpIHtcbiAgICAgICAgICAgICAgICArK3BhZ2VyUXR5O1xuICAgICAgICAgICAgICAgIGJyZWFrUG9pbnQgPSBjb3VudGVyICsgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuICAgICAgICAgICAgICAgIGNvdW50ZXIgKz0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgOiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhZ2VyUXR5IC0gMTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZ2V0TGVmdCA9IGZ1bmN0aW9uKHNsaWRlSW5kZXgpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICB0YXJnZXRMZWZ0LFxuICAgICAgICAgICAgdmVydGljYWxIZWlnaHQsXG4gICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9IDAsXG4gICAgICAgICAgICB0YXJnZXRTbGlkZSxcbiAgICAgICAgICAgIGNvZWY7XG5cbiAgICAgICAgXy5zbGlkZU9mZnNldCA9IDA7XG4gICAgICAgIHZlcnRpY2FsSGVpZ2h0ID0gXy4kc2xpZGVzLmZpcnN0KCkub3V0ZXJIZWlnaHQodHJ1ZSk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gKF8uc2xpZGVXaWR0aCAqIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpICogLTE7XG4gICAgICAgICAgICAgICAgY29lZiA9IC0xXG5cbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSB0cnVlICYmIF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID09PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2VmID0gLTEuNTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2VmID0gLTJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9ICh2ZXJ0aWNhbEhlaWdodCAqIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpICogY29lZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgIT09IDApIHtcbiAgICAgICAgICAgICAgICBpZiAoc2xpZGVJbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA+IF8uc2xpZGVDb3VudCAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzbGlkZUluZGV4ID4gXy5zbGlkZUNvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gKChfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC0gKHNsaWRlSW5kZXggLSBfLnNsaWRlQ291bnQpKSAqIF8uc2xpZGVXaWR0aCkgKiAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsT2Zmc2V0ID0gKChfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC0gKHNsaWRlSW5kZXggLSBfLnNsaWRlQ291bnQpKSAqIHZlcnRpY2FsSGVpZ2h0KSAqIC0xO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5zbGlkZU9mZnNldCA9ICgoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKSAqIF8uc2xpZGVXaWR0aCkgKiAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsT2Zmc2V0ID0gKChfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpICogdmVydGljYWxIZWlnaHQpICogLTE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoc2xpZGVJbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPiBfLnNsaWRlQ291bnQpIHtcbiAgICAgICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gKChzbGlkZUluZGV4ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdykgLSBfLnNsaWRlQ291bnQpICogXy5zbGlkZVdpZHRoO1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsT2Zmc2V0ID0gKChzbGlkZUluZGV4ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdykgLSBfLnNsaWRlQ291bnQpICogdmVydGljYWxIZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgPSAwO1xuICAgICAgICAgICAgdmVydGljYWxPZmZzZXQgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gKChfLnNsaWRlV2lkdGggKiBNYXRoLmZsb29yKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpKSAvIDIpIC0gKChfLnNsaWRlV2lkdGggKiBfLnNsaWRlQ291bnQpIC8gMik7XG4gICAgICAgIH0gZWxzZSBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUgJiYgXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ICs9IF8uc2xpZGVXaWR0aCAqIE1hdGguZmxvb3IoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIpIC0gXy5zbGlkZVdpZHRoO1xuICAgICAgICB9IGVsc2UgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gMDtcbiAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgKz0gXy5zbGlkZVdpZHRoICogTWF0aC5mbG9vcihfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGFyZ2V0TGVmdCA9ICgoc2xpZGVJbmRleCAqIF8uc2xpZGVXaWR0aCkgKiAtMSkgKyBfLnNsaWRlT2Zmc2V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0TGVmdCA9ICgoc2xpZGVJbmRleCAqIHZlcnRpY2FsSGVpZ2h0KSAqIC0xKSArIHZlcnRpY2FsT2Zmc2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52YXJpYWJsZVdpZHRoID09PSB0cnVlKSB7XG5cbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyB8fCBfLm9wdGlvbnMuaW5maW5pdGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0U2xpZGUgPSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS5lcShzbGlkZUluZGV4KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0U2xpZGUgPSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS5lcShzbGlkZUluZGV4ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMucnRsID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldFNsaWRlWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldExlZnQgPSAoXy4kc2xpZGVUcmFjay53aWR0aCgpIC0gdGFyZ2V0U2xpZGVbMF0ub2Zmc2V0TGVmdCAtIHRhcmdldFNsaWRlLndpZHRoKCkpICogLTE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9ICAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IHRhcmdldFNsaWRlWzBdID8gdGFyZ2V0U2xpZGVbMF0ub2Zmc2V0TGVmdCAqIC0xIDogMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93IHx8IF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0U2xpZGUgPSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS5lcShzbGlkZUluZGV4KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRTbGlkZSA9IF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oJy5zbGljay1zbGlkZScpLmVxKHNsaWRlSW5kZXggKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICsgMSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5ydGwgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldFNsaWRlWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gKF8uJHNsaWRlVHJhY2sud2lkdGgoKSAtIHRhcmdldFNsaWRlWzBdLm9mZnNldExlZnQgLSB0YXJnZXRTbGlkZS53aWR0aCgpKSAqIC0xO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9ICAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IHRhcmdldFNsaWRlWzBdID8gdGFyZ2V0U2xpZGVbMF0ub2Zmc2V0TGVmdCAqIC0xIDogMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ICs9IChfLiRsaXN0LndpZHRoKCkgLSB0YXJnZXRTbGlkZS5vdXRlcldpZHRoKCkpIC8gMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXRMZWZ0O1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXRPcHRpb24gPSBTbGljay5wcm90b3R5cGUuc2xpY2tHZXRPcHRpb24gPSBmdW5jdGlvbihvcHRpb24pIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgcmV0dXJuIF8ub3B0aW9uc1tvcHRpb25dO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXROYXZpZ2FibGVJbmRleGVzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgYnJlYWtQb2ludCA9IDAsXG4gICAgICAgICAgICBjb3VudGVyID0gMCxcbiAgICAgICAgICAgIGluZGV4ZXMgPSBbXSxcbiAgICAgICAgICAgIG1heDtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgbWF4ID0gXy5zbGlkZUNvdW50O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnJlYWtQb2ludCA9IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAqIC0xO1xuICAgICAgICAgICAgY291bnRlciA9IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAqIC0xO1xuICAgICAgICAgICAgbWF4ID0gXy5zbGlkZUNvdW50ICogMjtcbiAgICAgICAgfVxuXG4gICAgICAgIHdoaWxlIChicmVha1BvaW50IDwgbWF4KSB7XG4gICAgICAgICAgICBpbmRleGVzLnB1c2goYnJlYWtQb2ludCk7XG4gICAgICAgICAgICBicmVha1BvaW50ID0gY291bnRlciArIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcbiAgICAgICAgICAgIGNvdW50ZXIgKz0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgOiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluZGV4ZXM7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdldFNsaWNrID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdldFNsaWRlQ291bnQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBzbGlkZXNUcmF2ZXJzZWQsIHN3aXBlZFNsaWRlLCBjZW50ZXJPZmZzZXQ7XG5cbiAgICAgICAgY2VudGVyT2Zmc2V0ID0gXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUgPyBfLnNsaWRlV2lkdGggKiBNYXRoLmZsb29yKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyKSA6IDA7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5zd2lwZVRvU2xpZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suZmluZCgnLnNsaWNrLXNsaWRlJykuZWFjaChmdW5jdGlvbihpbmRleCwgc2xpZGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2xpZGUub2Zmc2V0TGVmdCAtIGNlbnRlck9mZnNldCArICgkKHNsaWRlKS5vdXRlcldpZHRoKCkgLyAyKSA+IChfLnN3aXBlTGVmdCAqIC0xKSkge1xuICAgICAgICAgICAgICAgICAgICBzd2lwZWRTbGlkZSA9IHNsaWRlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHNsaWRlc1RyYXZlcnNlZCA9IE1hdGguYWJzKCQoc3dpcGVkU2xpZGUpLmF0dHIoJ2RhdGEtc2xpY2staW5kZXgnKSAtIF8uY3VycmVudFNsaWRlKSB8fCAxO1xuXG4gICAgICAgICAgICByZXR1cm4gc2xpZGVzVHJhdmVyc2VkO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdvVG8gPSBTbGljay5wcm90b3R5cGUuc2xpY2tHb1RvID0gZnVuY3Rpb24oc2xpZGUsIGRvbnRBbmltYXRlKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uY2hhbmdlU2xpZGUoe1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdpbmRleCcsXG4gICAgICAgICAgICAgICAgaW5kZXg6IHBhcnNlSW50KHNsaWRlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCBkb250QW5pbWF0ZSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbihjcmVhdGlvbikge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoISQoXy4kc2xpZGVyKS5oYXNDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKSkge1xuXG4gICAgICAgICAgICAkKF8uJHNsaWRlcikuYWRkQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJyk7XG5cbiAgICAgICAgICAgIF8uYnVpbGRSb3dzKCk7XG4gICAgICAgICAgICBfLmJ1aWxkT3V0KCk7XG4gICAgICAgICAgICBfLnNldFByb3BzKCk7XG4gICAgICAgICAgICBfLnN0YXJ0TG9hZCgpO1xuICAgICAgICAgICAgXy5sb2FkU2xpZGVyKCk7XG4gICAgICAgICAgICBfLmluaXRpYWxpemVFdmVudHMoKTtcbiAgICAgICAgICAgIF8udXBkYXRlQXJyb3dzKCk7XG4gICAgICAgICAgICBfLnVwZGF0ZURvdHMoKTtcbiAgICAgICAgICAgIF8uY2hlY2tSZXNwb25zaXZlKHRydWUpO1xuICAgICAgICAgICAgXy5mb2N1c0hhbmRsZXIoKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNyZWF0aW9uKSB7XG4gICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignaW5pdCcsIFtfXSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uaW5pdEFEQSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBfLm9wdGlvbnMuYXV0b3BsYXkgKSB7XG5cbiAgICAgICAgICAgIF8ucGF1c2VkID0gZmFsc2U7XG4gICAgICAgICAgICBfLmF1dG9QbGF5KCk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5pbml0QURBID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgICAgICBudW1Eb3RHcm91cHMgPSBNYXRoLmNlaWwoXy5zbGlkZUNvdW50IC8gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyksXG4gICAgICAgICAgICAgICAgdGFiQ29udHJvbEluZGV4ZXMgPSBfLmdldE5hdmlnYWJsZUluZGV4ZXMoKS5maWx0ZXIoZnVuY3Rpb24odmFsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAodmFsID49IDApICYmICh2YWwgPCBfLnNsaWRlQ291bnQpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIF8uJHNsaWRlcy5hZGQoXy4kc2xpZGVUcmFjay5maW5kKCcuc2xpY2stY2xvbmVkJykpLmF0dHIoe1xuICAgICAgICAgICAgJ2FyaWEtaGlkZGVuJzogJ3RydWUnLFxuICAgICAgICAgICAgJ3RhYmluZGV4JzogJy0xJ1xuICAgICAgICB9KS5maW5kKCdhLCBpbnB1dCwgYnV0dG9uLCBzZWxlY3QnKS5hdHRyKHtcbiAgICAgICAgICAgICd0YWJpbmRleCc6ICctMSdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKF8uJGRvdHMgIT09IG51bGwpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlcy5ub3QoXy4kc2xpZGVUcmFjay5maW5kKCcuc2xpY2stY2xvbmVkJykpLmVhY2goZnVuY3Rpb24oaSkge1xuICAgICAgICAgICAgICAgIHZhciBzbGlkZUNvbnRyb2xJbmRleCA9IHRhYkNvbnRyb2xJbmRleGVzLmluZGV4T2YoaSk7XG5cbiAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoe1xuICAgICAgICAgICAgICAgICAgICAncm9sZSc6ICd0YWJwYW5lbCcsXG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdzbGljay1zbGlkZScgKyBfLmluc3RhbmNlVWlkICsgaSxcbiAgICAgICAgICAgICAgICAgICAgJ3RhYmluZGV4JzogLTFcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChzbGlkZUNvbnRyb2xJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICB2YXIgYXJpYUJ1dHRvbkNvbnRyb2wgPSAnc2xpY2stc2xpZGUtY29udHJvbCcgKyBfLmluc3RhbmNlVWlkICsgc2xpZGVDb250cm9sSW5kZXhcbiAgICAgICAgICAgICAgICAgICBpZiAoJCgnIycgKyBhcmlhQnV0dG9uQ29udHJvbCkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICdhcmlhLWRlc2NyaWJlZGJ5JzogYXJpYUJ1dHRvbkNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgXy4kZG90cy5hdHRyKCdyb2xlJywgJ3RhYmxpc3QnKS5maW5kKCdsaScpLmVhY2goZnVuY3Rpb24oaSkge1xuICAgICAgICAgICAgICAgIHZhciBtYXBwZWRTbGlkZUluZGV4ID0gdGFiQ29udHJvbEluZGV4ZXNbaV07XG5cbiAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoe1xuICAgICAgICAgICAgICAgICAgICAncm9sZSc6ICdwcmVzZW50YXRpb24nXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJ2J1dHRvbicpLmZpcnN0KCkuYXR0cih7XG4gICAgICAgICAgICAgICAgICAgICdyb2xlJzogJ3RhYicsXG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdzbGljay1zbGlkZS1jb250cm9sJyArIF8uaW5zdGFuY2VVaWQgKyBpLFxuICAgICAgICAgICAgICAgICAgICAnYXJpYS1jb250cm9scyc6ICdzbGljay1zbGlkZScgKyBfLmluc3RhbmNlVWlkICsgbWFwcGVkU2xpZGVJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgJ2FyaWEtbGFiZWwnOiAoaSArIDEpICsgJyBvZiAnICsgbnVtRG90R3JvdXBzLFxuICAgICAgICAgICAgICAgICAgICAnYXJpYS1zZWxlY3RlZCc6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICd0YWJpbmRleCc6ICctMSdcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSkuZXEoXy5jdXJyZW50U2xpZGUpLmZpbmQoJ2J1dHRvbicpLmF0dHIoe1xuICAgICAgICAgICAgICAgICdhcmlhLXNlbGVjdGVkJzogJ3RydWUnLFxuICAgICAgICAgICAgICAgICd0YWJpbmRleCc6ICcwJ1xuICAgICAgICAgICAgfSkuZW5kKCk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBpPV8uY3VycmVudFNsaWRlLCBtYXg9aStfLm9wdGlvbnMuc2xpZGVzVG9TaG93OyBpIDwgbWF4OyBpKyspIHtcbiAgICAgICAgICBpZiAoXy5vcHRpb25zLmZvY3VzT25DaGFuZ2UpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShpKS5hdHRyKHsndGFiaW5kZXgnOiAnMCd9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKGkpLnJlbW92ZUF0dHIoJ3RhYmluZGV4Jyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgXy5hY3RpdmF0ZUFEQSgpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5pbml0QXJyb3dFdmVudHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hcnJvd3MgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgXy4kcHJldkFycm93XG4gICAgICAgICAgICAgICAub2ZmKCdjbGljay5zbGljaycpXG4gICAgICAgICAgICAgICAub24oJ2NsaWNrLnNsaWNrJywge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAncHJldmlvdXMnXG4gICAgICAgICAgICAgICB9LCBfLmNoYW5nZVNsaWRlKTtcbiAgICAgICAgICAgIF8uJG5leHRBcnJvd1xuICAgICAgICAgICAgICAgLm9mZignY2xpY2suc2xpY2snKVxuICAgICAgICAgICAgICAgLm9uKCdjbGljay5zbGljaycsIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ25leHQnXG4gICAgICAgICAgICAgICB9LCBfLmNoYW5nZVNsaWRlKTtcblxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93Lm9uKCdrZXlkb3duLnNsaWNrJywgXy5rZXlIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cub24oJ2tleWRvd24uc2xpY2snLCBfLmtleUhhbmRsZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmluaXREb3RFdmVudHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5kb3RzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgICQoJ2xpJywgXy4kZG90cykub24oJ2NsaWNrLnNsaWNrJywge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdpbmRleCdcbiAgICAgICAgICAgIH0sIF8uY2hhbmdlU2xpZGUpO1xuXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLiRkb3RzLm9uKCdrZXlkb3duLnNsaWNrJywgXy5rZXlIYW5kbGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZG90cyA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMucGF1c2VPbkRvdHNIb3ZlciA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgICQoJ2xpJywgXy4kZG90cylcbiAgICAgICAgICAgICAgICAub24oJ21vdXNlZW50ZXIuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCB0cnVlKSlcbiAgICAgICAgICAgICAgICAub24oJ21vdXNlbGVhdmUuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCBmYWxzZSkpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuaW5pdFNsaWRlRXZlbnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmICggXy5vcHRpb25zLnBhdXNlT25Ib3ZlciApIHtcblxuICAgICAgICAgICAgXy4kbGlzdC5vbignbW91c2VlbnRlci5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIHRydWUpKTtcbiAgICAgICAgICAgIF8uJGxpc3Qub24oJ21vdXNlbGVhdmUuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCBmYWxzZSkpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuaW5pdGlhbGl6ZUV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLmluaXRBcnJvd0V2ZW50cygpO1xuXG4gICAgICAgIF8uaW5pdERvdEV2ZW50cygpO1xuICAgICAgICBfLmluaXRTbGlkZUV2ZW50cygpO1xuXG4gICAgICAgIF8uJGxpc3Qub24oJ3RvdWNoc3RhcnQuc2xpY2sgbW91c2Vkb3duLnNsaWNrJywge1xuICAgICAgICAgICAgYWN0aW9uOiAnc3RhcnQnXG4gICAgICAgIH0sIF8uc3dpcGVIYW5kbGVyKTtcbiAgICAgICAgXy4kbGlzdC5vbigndG91Y2htb3ZlLnNsaWNrIG1vdXNlbW92ZS5zbGljaycsIHtcbiAgICAgICAgICAgIGFjdGlvbjogJ21vdmUnXG4gICAgICAgIH0sIF8uc3dpcGVIYW5kbGVyKTtcbiAgICAgICAgXy4kbGlzdC5vbigndG91Y2hlbmQuc2xpY2sgbW91c2V1cC5zbGljaycsIHtcbiAgICAgICAgICAgIGFjdGlvbjogJ2VuZCdcbiAgICAgICAgfSwgXy5zd2lwZUhhbmRsZXIpO1xuICAgICAgICBfLiRsaXN0Lm9uKCd0b3VjaGNhbmNlbC5zbGljayBtb3VzZWxlYXZlLnNsaWNrJywge1xuICAgICAgICAgICAgYWN0aW9uOiAnZW5kJ1xuICAgICAgICB9LCBfLnN3aXBlSGFuZGxlcik7XG5cbiAgICAgICAgXy4kbGlzdC5vbignY2xpY2suc2xpY2snLCBfLmNsaWNrSGFuZGxlcik7XG5cbiAgICAgICAgJChkb2N1bWVudCkub24oXy52aXNpYmlsaXR5Q2hhbmdlLCAkLnByb3h5KF8udmlzaWJpbGl0eSwgXykpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy4kbGlzdC5vbigna2V5ZG93bi5zbGljaycsIF8ua2V5SGFuZGxlcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZvY3VzT25TZWxlY3QgPT09IHRydWUpIHtcbiAgICAgICAgICAgICQoXy4kc2xpZGVUcmFjaykuY2hpbGRyZW4oKS5vbignY2xpY2suc2xpY2snLCBfLnNlbGVjdEhhbmRsZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgJCh3aW5kb3cpLm9uKCdvcmllbnRhdGlvbmNoYW5nZS5zbGljay5zbGljay0nICsgXy5pbnN0YW5jZVVpZCwgJC5wcm94eShfLm9yaWVudGF0aW9uQ2hhbmdlLCBfKSk7XG5cbiAgICAgICAgJCh3aW5kb3cpLm9uKCdyZXNpemUuc2xpY2suc2xpY2stJyArIF8uaW5zdGFuY2VVaWQsICQucHJveHkoXy5yZXNpemUsIF8pKTtcblxuICAgICAgICAkKCdbZHJhZ2dhYmxlIT10cnVlXScsIF8uJHNsaWRlVHJhY2spLm9uKCdkcmFnc3RhcnQnLCBfLnByZXZlbnREZWZhdWx0KTtcblxuICAgICAgICAkKHdpbmRvdykub24oJ2xvYWQuc2xpY2suc2xpY2stJyArIF8uaW5zdGFuY2VVaWQsIF8uc2V0UG9zaXRpb24pO1xuICAgICAgICAkKF8uc2V0UG9zaXRpb24pO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5pbml0VUkgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hcnJvd3MgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICBfLiRwcmV2QXJyb3cuc2hvdygpO1xuICAgICAgICAgICAgXy4kbmV4dEFycm93LnNob3coKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5kb3RzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgXy4kZG90cy5zaG93KCk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5rZXlIYW5kbGVyID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG4gICAgICAgICAvL0RvbnQgc2xpZGUgaWYgdGhlIGN1cnNvciBpcyBpbnNpZGUgdGhlIGZvcm0gZmllbGRzIGFuZCBhcnJvdyBrZXlzIGFyZSBwcmVzc2VkXG4gICAgICAgIGlmKCFldmVudC50YXJnZXQudGFnTmFtZS5tYXRjaCgnVEVYVEFSRUF8SU5QVVR8U0VMRUNUJykpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAzNyAmJiBfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uY2hhbmdlU2xpZGUoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBfLm9wdGlvbnMucnRsID09PSB0cnVlID8gJ25leHQnIDogICdwcmV2aW91cydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09PSAzOSAmJiBfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uY2hhbmdlU2xpZGUoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBfLm9wdGlvbnMucnRsID09PSB0cnVlID8gJ3ByZXZpb3VzJyA6ICduZXh0J1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUubGF6eUxvYWQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBsb2FkUmFuZ2UsIGNsb25lUmFuZ2UsIHJhbmdlU3RhcnQsIHJhbmdlRW5kO1xuXG4gICAgICAgIGZ1bmN0aW9uIGxvYWRJbWFnZXMoaW1hZ2VzU2NvcGUpIHtcblxuICAgICAgICAgICAgJCgnaW1nW2RhdGEtbGF6eV0nLCBpbWFnZXNTY29wZSkuZWFjaChmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgIHZhciBpbWFnZSA9ICQodGhpcyksXG4gICAgICAgICAgICAgICAgICAgIGltYWdlU291cmNlID0gJCh0aGlzKS5hdHRyKCdkYXRhLWxhenknKSxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VTcmNTZXQgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtc3Jjc2V0JyksXG4gICAgICAgICAgICAgICAgICAgIGltYWdlU2l6ZXMgID0gJCh0aGlzKS5hdHRyKCdkYXRhLXNpemVzJykgfHwgXy4kc2xpZGVyLmF0dHIoJ2RhdGEtc2l6ZXMnKSxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VUb0xvYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICAgICAgICAgICAgICAgIGltYWdlVG9Mb2FkLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAuYW5pbWF0ZSh7IG9wYWNpdHk6IDAgfSwgMTAwLCBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbWFnZVNyY1NldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3NyY3NldCcsIGltYWdlU3JjU2V0ICk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGltYWdlU2l6ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3NpemVzJywgaW1hZ2VTaXplcyApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3NyYycsIGltYWdlU291cmNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYW5pbWF0ZSh7IG9wYWNpdHk6IDEgfSwgMjAwLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ2RhdGEtbGF6eSBkYXRhLXNyY3NldCBkYXRhLXNpemVzJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLWxvYWRpbmcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2xhenlMb2FkZWQnLCBbXywgaW1hZ2UsIGltYWdlU291cmNlXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBpbWFnZVRvTG9hZC5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCAnZGF0YS1sYXp5JyApXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoICdzbGljay1sb2FkaW5nJyApXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoICdzbGljay1sYXp5bG9hZC1lcnJvcicgKTtcblxuICAgICAgICAgICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignbGF6eUxvYWRFcnJvcicsIFsgXywgaW1hZ2UsIGltYWdlU291cmNlIF0pO1xuXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGltYWdlVG9Mb2FkLnNyYyA9IGltYWdlU291cmNlO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcmFuZ2VTdGFydCA9IF8uY3VycmVudFNsaWRlICsgKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyICsgMSk7XG4gICAgICAgICAgICAgICAgcmFuZ2VFbmQgPSByYW5nZVN0YXJ0ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdyArIDI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJhbmdlU3RhcnQgPSBNYXRoLm1heCgwLCBfLmN1cnJlbnRTbGlkZSAtIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMiArIDEpKTtcbiAgICAgICAgICAgICAgICByYW5nZUVuZCA9IDIgKyAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIgKyAxKSArIF8uY3VycmVudFNsaWRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmFuZ2VTdGFydCA9IF8ub3B0aW9ucy5pbmZpbml0ZSA/IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKyBfLmN1cnJlbnRTbGlkZSA6IF8uY3VycmVudFNsaWRlO1xuICAgICAgICAgICAgcmFuZ2VFbmQgPSBNYXRoLmNlaWwocmFuZ2VTdGFydCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpO1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJhbmdlU3RhcnQgPiAwKSByYW5nZVN0YXJ0LS07XG4gICAgICAgICAgICAgICAgaWYgKHJhbmdlRW5kIDw9IF8uc2xpZGVDb3VudCkgcmFuZ2VFbmQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxvYWRSYW5nZSA9IF8uJHNsaWRlci5maW5kKCcuc2xpY2stc2xpZGUnKS5zbGljZShyYW5nZVN0YXJ0LCByYW5nZUVuZCk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5sYXp5TG9hZCA9PT0gJ2FudGljaXBhdGVkJykge1xuICAgICAgICAgICAgdmFyIHByZXZTbGlkZSA9IHJhbmdlU3RhcnQgLSAxLFxuICAgICAgICAgICAgICAgIG5leHRTbGlkZSA9IHJhbmdlRW5kLFxuICAgICAgICAgICAgICAgICRzbGlkZXMgPSBfLiRzbGlkZXIuZmluZCgnLnNsaWNrLXNsaWRlJyk7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAocHJldlNsaWRlIDwgMCkgcHJldlNsaWRlID0gXy5zbGlkZUNvdW50IC0gMTtcbiAgICAgICAgICAgICAgICBsb2FkUmFuZ2UgPSBsb2FkUmFuZ2UuYWRkKCRzbGlkZXMuZXEocHJldlNsaWRlKSk7XG4gICAgICAgICAgICAgICAgbG9hZFJhbmdlID0gbG9hZFJhbmdlLmFkZCgkc2xpZGVzLmVxKG5leHRTbGlkZSkpO1xuICAgICAgICAgICAgICAgIHByZXZTbGlkZS0tO1xuICAgICAgICAgICAgICAgIG5leHRTbGlkZSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbG9hZEltYWdlcyhsb2FkUmFuZ2UpO1xuXG4gICAgICAgIGlmIChfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgY2xvbmVSYW5nZSA9IF8uJHNsaWRlci5maW5kKCcuc2xpY2stc2xpZGUnKTtcbiAgICAgICAgICAgIGxvYWRJbWFnZXMoY2xvbmVSYW5nZSk7XG4gICAgICAgIH0gZWxzZVxuICAgICAgICBpZiAoXy5jdXJyZW50U2xpZGUgPj0gXy5zbGlkZUNvdW50IC0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgY2xvbmVSYW5nZSA9IF8uJHNsaWRlci5maW5kKCcuc2xpY2stY2xvbmVkJykuc2xpY2UoMCwgXy5vcHRpb25zLnNsaWRlc1RvU2hvdyk7XG4gICAgICAgICAgICBsb2FkSW1hZ2VzKGNsb25lUmFuZ2UpO1xuICAgICAgICB9IGVsc2UgaWYgKF8uY3VycmVudFNsaWRlID09PSAwKSB7XG4gICAgICAgICAgICBjbG9uZVJhbmdlID0gXy4kc2xpZGVyLmZpbmQoJy5zbGljay1jbG9uZWQnKS5zbGljZShfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICogLTEpO1xuICAgICAgICAgICAgbG9hZEltYWdlcyhjbG9uZVJhbmdlKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5sb2FkU2xpZGVyID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uc2V0UG9zaXRpb24oKTtcblxuICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyh7XG4gICAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgIH0pO1xuXG4gICAgICAgIF8uJHNsaWRlci5yZW1vdmVDbGFzcygnc2xpY2stbG9hZGluZycpO1xuXG4gICAgICAgIF8uaW5pdFVJKCk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5sYXp5TG9hZCA9PT0gJ3Byb2dyZXNzaXZlJykge1xuICAgICAgICAgICAgXy5wcm9ncmVzc2l2ZUxhenlMb2FkKCk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUubmV4dCA9IFNsaWNrLnByb3RvdHlwZS5zbGlja05leHQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5jaGFuZ2VTbGlkZSh7XG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ25leHQnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5vcmllbnRhdGlvbkNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLmNoZWNrUmVzcG9uc2l2ZSgpO1xuICAgICAgICBfLnNldFBvc2l0aW9uKCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnBhdXNlID0gU2xpY2sucHJvdG90eXBlLnNsaWNrUGF1c2UgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5hdXRvUGxheUNsZWFyKCk7XG4gICAgICAgIF8ucGF1c2VkID0gdHJ1ZTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucGxheSA9IFNsaWNrLnByb3RvdHlwZS5zbGlja1BsYXkgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5hdXRvUGxheSgpO1xuICAgICAgICBfLm9wdGlvbnMuYXV0b3BsYXkgPSB0cnVlO1xuICAgICAgICBfLnBhdXNlZCA9IGZhbHNlO1xuICAgICAgICBfLmZvY3Vzc2VkID0gZmFsc2U7XG4gICAgICAgIF8uaW50ZXJydXB0ZWQgPSBmYWxzZTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucG9zdFNsaWRlID0gZnVuY3Rpb24oaW5kZXgpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYoICFfLnVuc2xpY2tlZCApIHtcblxuICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2FmdGVyQ2hhbmdlJywgW18sIGluZGV4XSk7XG5cbiAgICAgICAgICAgIF8uYW5pbWF0aW5nID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAgICAgXy5zZXRQb3NpdGlvbigpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfLnN3aXBlTGVmdCA9IG51bGw7XG5cbiAgICAgICAgICAgIGlmICggXy5vcHRpb25zLmF1dG9wbGF5ICkge1xuICAgICAgICAgICAgICAgIF8uYXV0b1BsYXkoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy5pbml0QURBKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLmZvY3VzT25DaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyICRjdXJyZW50U2xpZGUgPSAkKF8uJHNsaWRlcy5nZXQoXy5jdXJyZW50U2xpZGUpKTtcbiAgICAgICAgICAgICAgICAgICAgJGN1cnJlbnRTbGlkZS5hdHRyKCd0YWJpbmRleCcsIDApLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucHJldiA9IFNsaWNrLnByb3RvdHlwZS5zbGlja1ByZXYgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5jaGFuZ2VTbGlkZSh7XG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ3ByZXZpb3VzJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucHJldmVudERlZmF1bHQgPSBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnByb2dyZXNzaXZlTGF6eUxvYWQgPSBmdW5jdGlvbiggdHJ5Q291bnQgKSB7XG5cbiAgICAgICAgdHJ5Q291bnQgPSB0cnlDb3VudCB8fCAxO1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgICRpbWdzVG9Mb2FkID0gJCggJ2ltZ1tkYXRhLWxhenldJywgXy4kc2xpZGVyICksXG4gICAgICAgICAgICBpbWFnZSxcbiAgICAgICAgICAgIGltYWdlU291cmNlLFxuICAgICAgICAgICAgaW1hZ2VTcmNTZXQsXG4gICAgICAgICAgICBpbWFnZVNpemVzLFxuICAgICAgICAgICAgaW1hZ2VUb0xvYWQ7XG5cbiAgICAgICAgaWYgKCAkaW1nc1RvTG9hZC5sZW5ndGggKSB7XG5cbiAgICAgICAgICAgIGltYWdlID0gJGltZ3NUb0xvYWQuZmlyc3QoKTtcbiAgICAgICAgICAgIGltYWdlU291cmNlID0gaW1hZ2UuYXR0cignZGF0YS1sYXp5Jyk7XG4gICAgICAgICAgICBpbWFnZVNyY1NldCA9IGltYWdlLmF0dHIoJ2RhdGEtc3Jjc2V0Jyk7XG4gICAgICAgICAgICBpbWFnZVNpemVzICA9IGltYWdlLmF0dHIoJ2RhdGEtc2l6ZXMnKSB8fCBfLiRzbGlkZXIuYXR0cignZGF0YS1zaXplcycpO1xuICAgICAgICAgICAgaW1hZ2VUb0xvYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICAgICAgICAgICAgaW1hZ2VUb0xvYWQub25sb2FkID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoaW1hZ2VTcmNTZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdzcmNzZXQnLCBpbWFnZVNyY1NldCApO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbWFnZVNpemVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdzaXplcycsIGltYWdlU2l6ZXMgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCAnc3JjJywgaW1hZ2VTb3VyY2UgKVxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignZGF0YS1sYXp5IGRhdGEtc3Jjc2V0IGRhdGEtc2l6ZXMnKVxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLWxvYWRpbmcnKTtcblxuICAgICAgICAgICAgICAgIGlmICggXy5vcHRpb25zLmFkYXB0aXZlSGVpZ2h0ID09PSB0cnVlICkge1xuICAgICAgICAgICAgICAgICAgICBfLnNldFBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2xhenlMb2FkZWQnLCBbIF8sIGltYWdlLCBpbWFnZVNvdXJjZSBdKTtcbiAgICAgICAgICAgICAgICBfLnByb2dyZXNzaXZlTGF6eUxvYWQoKTtcblxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaW1hZ2VUb0xvYWQub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgaWYgKCB0cnlDb3VudCA8IDMgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAqIHRyeSB0byBsb2FkIHRoZSBpbWFnZSAzIHRpbWVzLFxuICAgICAgICAgICAgICAgICAgICAgKiBsZWF2ZSBhIHNsaWdodCBkZWxheSBzbyB3ZSBkb24ndCBnZXRcbiAgICAgICAgICAgICAgICAgICAgICogc2VydmVycyBibG9ja2luZyB0aGUgcmVxdWVzdC5cbiAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5wcm9ncmVzc2l2ZUxhenlMb2FkKCB0cnlDb3VudCArIDEgKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgNTAwICk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQXR0ciggJ2RhdGEtbGF6eScgKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCAnc2xpY2stbG9hZGluZycgKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCAnc2xpY2stbGF6eWxvYWQtZXJyb3InICk7XG5cbiAgICAgICAgICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2xhenlMb2FkRXJyb3InLCBbIF8sIGltYWdlLCBpbWFnZVNvdXJjZSBdKTtcblxuICAgICAgICAgICAgICAgICAgICBfLnByb2dyZXNzaXZlTGF6eUxvYWQoKTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaW1hZ2VUb0xvYWQuc3JjID0gaW1hZ2VTb3VyY2U7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2FsbEltYWdlc0xvYWRlZCcsIFsgXyBdKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnJlZnJlc2ggPSBmdW5jdGlvbiggaW5pdGlhbGl6aW5nICkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcywgY3VycmVudFNsaWRlLCBsYXN0VmlzaWJsZUluZGV4O1xuXG4gICAgICAgIGxhc3RWaXNpYmxlSW5kZXggPSBfLnNsaWRlQ291bnQgLSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93O1xuXG4gICAgICAgIC8vIGluIG5vbi1pbmZpbml0ZSBzbGlkZXJzLCB3ZSBkb24ndCB3YW50IHRvIGdvIHBhc3QgdGhlXG4gICAgICAgIC8vIGxhc3QgdmlzaWJsZSBpbmRleC5cbiAgICAgICAgaWYoICFfLm9wdGlvbnMuaW5maW5pdGUgJiYgKCBfLmN1cnJlbnRTbGlkZSA+IGxhc3RWaXNpYmxlSW5kZXggKSkge1xuICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSBsYXN0VmlzaWJsZUluZGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgbGVzcyBzbGlkZXMgdGhhbiB0byBzaG93LCBnbyB0byBzdGFydC5cbiAgICAgICAgaWYgKCBfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyApIHtcbiAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gMDtcblxuICAgICAgICB9XG5cbiAgICAgICAgY3VycmVudFNsaWRlID0gXy5jdXJyZW50U2xpZGU7XG5cbiAgICAgICAgXy5kZXN0cm95KHRydWUpO1xuXG4gICAgICAgICQuZXh0ZW5kKF8sIF8uaW5pdGlhbHMsIHsgY3VycmVudFNsaWRlOiBjdXJyZW50U2xpZGUgfSk7XG5cbiAgICAgICAgXy5pbml0KCk7XG5cbiAgICAgICAgaWYoICFpbml0aWFsaXppbmcgKSB7XG5cbiAgICAgICAgICAgIF8uY2hhbmdlU2xpZGUoe1xuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ2luZGV4JyxcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGN1cnJlbnRTbGlkZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIGZhbHNlKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnJlZ2lzdGVyQnJlYWtwb2ludHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsIGJyZWFrcG9pbnQsIGN1cnJlbnRCcmVha3BvaW50LCBsLFxuICAgICAgICAgICAgcmVzcG9uc2l2ZVNldHRpbmdzID0gXy5vcHRpb25zLnJlc3BvbnNpdmUgfHwgbnVsbDtcblxuICAgICAgICBpZiAoICQudHlwZShyZXNwb25zaXZlU2V0dGluZ3MpID09PSAnYXJyYXknICYmIHJlc3BvbnNpdmVTZXR0aW5ncy5sZW5ndGggKSB7XG5cbiAgICAgICAgICAgIF8ucmVzcG9uZFRvID0gXy5vcHRpb25zLnJlc3BvbmRUbyB8fCAnd2luZG93JztcblxuICAgICAgICAgICAgZm9yICggYnJlYWtwb2ludCBpbiByZXNwb25zaXZlU2V0dGluZ3MgKSB7XG5cbiAgICAgICAgICAgICAgICBsID0gXy5icmVha3BvaW50cy5sZW5ndGgtMTtcblxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zaXZlU2V0dGluZ3MuaGFzT3duUHJvcGVydHkoYnJlYWtwb2ludCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEJyZWFrcG9pbnQgPSByZXNwb25zaXZlU2V0dGluZ3NbYnJlYWtwb2ludF0uYnJlYWtwb2ludDtcblxuICAgICAgICAgICAgICAgICAgICAvLyBsb29wIHRocm91Z2ggdGhlIGJyZWFrcG9pbnRzIGFuZCBjdXQgb3V0IGFueSBleGlzdGluZ1xuICAgICAgICAgICAgICAgICAgICAvLyBvbmVzIHdpdGggdGhlIHNhbWUgYnJlYWtwb2ludCBudW1iZXIsIHdlIGRvbid0IHdhbnQgZHVwZXMuXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlKCBsID49IDAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiggXy5icmVha3BvaW50c1tsXSAmJiBfLmJyZWFrcG9pbnRzW2xdID09PSBjdXJyZW50QnJlYWtwb2ludCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmJyZWFrcG9pbnRzLnNwbGljZShsLDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbC0tO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgXy5icmVha3BvaW50cy5wdXNoKGN1cnJlbnRCcmVha3BvaW50KTtcbiAgICAgICAgICAgICAgICAgICAgXy5icmVha3BvaW50U2V0dGluZ3NbY3VycmVudEJyZWFrcG9pbnRdID0gcmVzcG9uc2l2ZVNldHRpbmdzW2JyZWFrcG9pbnRdLnNldHRpbmdzO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF8uYnJlYWtwb2ludHMuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICggXy5vcHRpb25zLm1vYmlsZUZpcnN0ICkgPyBhLWIgOiBiLWE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnJlaW5pdCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLiRzbGlkZXMgPVxuICAgICAgICAgICAgXy4kc2xpZGVUcmFja1xuICAgICAgICAgICAgICAgIC5jaGlsZHJlbihfLm9wdGlvbnMuc2xpZGUpXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1zbGlkZScpO1xuXG4gICAgICAgIF8uc2xpZGVDb3VudCA9IF8uJHNsaWRlcy5sZW5ndGg7XG5cbiAgICAgICAgaWYgKF8uY3VycmVudFNsaWRlID49IF8uc2xpZGVDb3VudCAmJiBfLmN1cnJlbnRTbGlkZSAhPT0gMCkge1xuICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSBfLmN1cnJlbnRTbGlkZSAtIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgXy5yZWdpc3RlckJyZWFrcG9pbnRzKCk7XG5cbiAgICAgICAgXy5zZXRQcm9wcygpO1xuICAgICAgICBfLnNldHVwSW5maW5pdGUoKTtcbiAgICAgICAgXy5idWlsZEFycm93cygpO1xuICAgICAgICBfLnVwZGF0ZUFycm93cygpO1xuICAgICAgICBfLmluaXRBcnJvd0V2ZW50cygpO1xuICAgICAgICBfLmJ1aWxkRG90cygpO1xuICAgICAgICBfLnVwZGF0ZURvdHMoKTtcbiAgICAgICAgXy5pbml0RG90RXZlbnRzKCk7XG4gICAgICAgIF8uY2xlYW5VcFNsaWRlRXZlbnRzKCk7XG4gICAgICAgIF8uaW5pdFNsaWRlRXZlbnRzKCk7XG5cbiAgICAgICAgXy5jaGVja1Jlc3BvbnNpdmUoZmFsc2UsIHRydWUpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZm9jdXNPblNlbGVjdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgJChfLiRzbGlkZVRyYWNrKS5jaGlsZHJlbigpLm9uKCdjbGljay5zbGljaycsIF8uc2VsZWN0SGFuZGxlcik7XG4gICAgICAgIH1cblxuICAgICAgICBfLnNldFNsaWRlQ2xhc3Nlcyh0eXBlb2YgXy5jdXJyZW50U2xpZGUgPT09ICdudW1iZXInID8gXy5jdXJyZW50U2xpZGUgOiAwKTtcblxuICAgICAgICBfLnNldFBvc2l0aW9uKCk7XG4gICAgICAgIF8uZm9jdXNIYW5kbGVyKCk7XG5cbiAgICAgICAgXy5wYXVzZWQgPSAhXy5vcHRpb25zLmF1dG9wbGF5O1xuICAgICAgICBfLmF1dG9QbGF5KCk7XG5cbiAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ3JlSW5pdCcsIFtfXSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgIT09IF8ud2luZG93V2lkdGgpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChfLndpbmRvd0RlbGF5KTtcbiAgICAgICAgICAgIF8ud2luZG93RGVsYXkgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBfLndpbmRvd1dpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XG4gICAgICAgICAgICAgICAgXy5jaGVja1Jlc3BvbnNpdmUoKTtcbiAgICAgICAgICAgICAgICBpZiggIV8udW5zbGlja2VkICkgeyBfLnNldFBvc2l0aW9uKCk7IH1cbiAgICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucmVtb3ZlU2xpZGUgPSBTbGljay5wcm90b3R5cGUuc2xpY2tSZW1vdmUgPSBmdW5jdGlvbihpbmRleCwgcmVtb3ZlQmVmb3JlLCByZW1vdmVBbGwpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHR5cGVvZihpbmRleCkgPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgcmVtb3ZlQmVmb3JlID0gaW5kZXg7XG4gICAgICAgICAgICBpbmRleCA9IHJlbW92ZUJlZm9yZSA9PT0gdHJ1ZSA/IDAgOiBfLnNsaWRlQ291bnQgLSAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaW5kZXggPSByZW1vdmVCZWZvcmUgPT09IHRydWUgPyAtLWluZGV4IDogaW5kZXg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDwgMSB8fCBpbmRleCA8IDAgfHwgaW5kZXggPiBfLnNsaWRlQ291bnQgLSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBfLnVubG9hZCgpO1xuXG4gICAgICAgIGlmIChyZW1vdmVBbGwgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oKS5yZW1vdmUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKS5lcShpbmRleCkucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBfLiRzbGlkZXMgPSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSk7XG5cbiAgICAgICAgXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmRldGFjaCgpO1xuXG4gICAgICAgIF8uJHNsaWRlVHJhY2suYXBwZW5kKF8uJHNsaWRlcyk7XG5cbiAgICAgICAgXy4kc2xpZGVzQ2FjaGUgPSBfLiRzbGlkZXM7XG5cbiAgICAgICAgXy5yZWluaXQoKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0Q1NTID0gZnVuY3Rpb24ocG9zaXRpb24pIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBwb3NpdGlvblByb3BzID0ge30sXG4gICAgICAgICAgICB4LCB5O1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMucnRsID09PSB0cnVlKSB7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IC1wb3NpdGlvbjtcbiAgICAgICAgfVxuICAgICAgICB4ID0gXy5wb3NpdGlvblByb3AgPT0gJ2xlZnQnID8gTWF0aC5jZWlsKHBvc2l0aW9uKSArICdweCcgOiAnMHB4JztcbiAgICAgICAgeSA9IF8ucG9zaXRpb25Qcm9wID09ICd0b3AnID8gTWF0aC5jZWlsKHBvc2l0aW9uKSArICdweCcgOiAnMHB4JztcblxuICAgICAgICBwb3NpdGlvblByb3BzW18ucG9zaXRpb25Qcm9wXSA9IHBvc2l0aW9uO1xuXG4gICAgICAgIGlmIChfLnRyYW5zZm9ybXNFbmFibGVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3MocG9zaXRpb25Qcm9wcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwb3NpdGlvblByb3BzID0ge307XG4gICAgICAgICAgICBpZiAoXy5jc3NUcmFuc2l0aW9ucyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvblByb3BzW18uYW5pbVR5cGVdID0gJ3RyYW5zbGF0ZSgnICsgeCArICcsICcgKyB5ICsgJyknO1xuICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKHBvc2l0aW9uUHJvcHMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvblByb3BzW18uYW5pbVR5cGVdID0gJ3RyYW5zbGF0ZTNkKCcgKyB4ICsgJywgJyArIHkgKyAnLCAwcHgpJztcbiAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyhwb3NpdGlvblByb3BzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXREaW1lbnNpb25zID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLiRsaXN0LmNzcyh7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICgnMHB4ICcgKyBfLm9wdGlvbnMuY2VudGVyUGFkZGluZylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uJGxpc3QuaGVpZ2h0KF8uJHNsaWRlcy5maXJzdCgpLm91dGVySGVpZ2h0KHRydWUpICogXy5vcHRpb25zLnNsaWRlc1RvU2hvdyk7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLiRsaXN0LmNzcyh7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IChfLm9wdGlvbnMuY2VudGVyUGFkZGluZyArICcgMHB4JylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIF8ubGlzdFdpZHRoID0gXy4kbGlzdC53aWR0aCgpO1xuICAgICAgICBfLmxpc3RIZWlnaHQgPSBfLiRsaXN0LmhlaWdodCgpO1xuXG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UgJiYgXy5vcHRpb25zLnZhcmlhYmxlV2lkdGggPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfLnNsaWRlV2lkdGggPSBNYXRoLmNlaWwoXy5saXN0V2lkdGggLyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KTtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2sud2lkdGgoTWF0aC5jZWlsKChfLnNsaWRlV2lkdGggKiBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS5sZW5ndGgpKSk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChfLm9wdGlvbnMudmFyaWFibGVXaWR0aCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay53aWR0aCg1MDAwICogXy5zbGlkZUNvdW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uc2xpZGVXaWR0aCA9IE1hdGguY2VpbChfLmxpc3RXaWR0aCk7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmhlaWdodChNYXRoLmNlaWwoKF8uJHNsaWRlcy5maXJzdCgpLm91dGVySGVpZ2h0KHRydWUpICogXy4kc2xpZGVUcmFjay5jaGlsZHJlbignLnNsaWNrLXNsaWRlJykubGVuZ3RoKSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG9mZnNldCA9IF8uJHNsaWRlcy5maXJzdCgpLm91dGVyV2lkdGgodHJ1ZSkgLSBfLiRzbGlkZXMuZmlyc3QoKS53aWR0aCgpO1xuICAgICAgICBpZiAoXy5vcHRpb25zLnZhcmlhYmxlV2lkdGggPT09IGZhbHNlKSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS53aWR0aChfLnNsaWRlV2lkdGggLSBvZmZzZXQpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRGYWRlID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgdGFyZ2V0TGVmdDtcblxuICAgICAgICBfLiRzbGlkZXMuZWFjaChmdW5jdGlvbihpbmRleCwgZWxlbWVudCkge1xuICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IChfLnNsaWRlV2lkdGggKiBpbmRleCkgKiAtMTtcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMucnRsID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgJChlbGVtZW50KS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IHRhcmdldExlZnQsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4IC0gMixcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiB0YXJnZXRMZWZ0LFxuICAgICAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgICAgIHpJbmRleDogXy5vcHRpb25zLnpJbmRleCAtIDIsXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgXy4kc2xpZGVzLmVxKF8uY3VycmVudFNsaWRlKS5jc3Moe1xuICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4IC0gMSxcbiAgICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNldEhlaWdodCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA9PT0gMSAmJiBfLm9wdGlvbnMuYWRhcHRpdmVIZWlnaHQgPT09IHRydWUgJiYgXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdmFyIHRhcmdldEhlaWdodCA9IF8uJHNsaWRlcy5lcShfLmN1cnJlbnRTbGlkZSkub3V0ZXJIZWlnaHQodHJ1ZSk7XG4gICAgICAgICAgICBfLiRsaXN0LmNzcygnaGVpZ2h0JywgdGFyZ2V0SGVpZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRPcHRpb24gPVxuICAgIFNsaWNrLnByb3RvdHlwZS5zbGlja1NldE9wdGlvbiA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBhY2NlcHRzIGFyZ3VtZW50cyBpbiBmb3JtYXQgb2Y6XG4gICAgICAgICAqXG4gICAgICAgICAqICAtIGZvciBjaGFuZ2luZyBhIHNpbmdsZSBvcHRpb24ncyB2YWx1ZTpcbiAgICAgICAgICogICAgIC5zbGljayhcInNldE9wdGlvblwiLCBvcHRpb24sIHZhbHVlLCByZWZyZXNoIClcbiAgICAgICAgICpcbiAgICAgICAgICogIC0gZm9yIGNoYW5naW5nIGEgc2V0IG9mIHJlc3BvbnNpdmUgb3B0aW9uczpcbiAgICAgICAgICogICAgIC5zbGljayhcInNldE9wdGlvblwiLCAncmVzcG9uc2l2ZScsIFt7fSwgLi4uXSwgcmVmcmVzaCApXG4gICAgICAgICAqXG4gICAgICAgICAqICAtIGZvciB1cGRhdGluZyBtdWx0aXBsZSB2YWx1ZXMgYXQgb25jZSAobm90IHJlc3BvbnNpdmUpXG4gICAgICAgICAqICAgICAuc2xpY2soXCJzZXRPcHRpb25cIiwgeyAnb3B0aW9uJzogdmFsdWUsIC4uLiB9LCByZWZyZXNoIClcbiAgICAgICAgICovXG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLCBsLCBpdGVtLCBvcHRpb24sIHZhbHVlLCByZWZyZXNoID0gZmFsc2UsIHR5cGU7XG5cbiAgICAgICAgaWYoICQudHlwZSggYXJndW1lbnRzWzBdICkgPT09ICdvYmplY3QnICkge1xuXG4gICAgICAgICAgICBvcHRpb24gPSAgYXJndW1lbnRzWzBdO1xuICAgICAgICAgICAgcmVmcmVzaCA9IGFyZ3VtZW50c1sxXTtcbiAgICAgICAgICAgIHR5cGUgPSAnbXVsdGlwbGUnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoICQudHlwZSggYXJndW1lbnRzWzBdICkgPT09ICdzdHJpbmcnICkge1xuXG4gICAgICAgICAgICBvcHRpb24gPSAgYXJndW1lbnRzWzBdO1xuICAgICAgICAgICAgdmFsdWUgPSBhcmd1bWVudHNbMV07XG4gICAgICAgICAgICByZWZyZXNoID0gYXJndW1lbnRzWzJdO1xuXG4gICAgICAgICAgICBpZiAoIGFyZ3VtZW50c1swXSA9PT0gJ3Jlc3BvbnNpdmUnICYmICQudHlwZSggYXJndW1lbnRzWzFdICkgPT09ICdhcnJheScgKSB7XG5cbiAgICAgICAgICAgICAgICB0eXBlID0gJ3Jlc3BvbnNpdmUnO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCB0eXBlb2YgYXJndW1lbnRzWzFdICE9PSAndW5kZWZpbmVkJyApIHtcblxuICAgICAgICAgICAgICAgIHR5cGUgPSAnc2luZ2xlJztcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIHR5cGUgPT09ICdzaW5nbGUnICkge1xuXG4gICAgICAgICAgICBfLm9wdGlvbnNbb3B0aW9uXSA9IHZhbHVlO1xuXG5cbiAgICAgICAgfSBlbHNlIGlmICggdHlwZSA9PT0gJ211bHRpcGxlJyApIHtcblxuICAgICAgICAgICAgJC5lYWNoKCBvcHRpb24gLCBmdW5jdGlvbiggb3B0LCB2YWwgKSB7XG5cbiAgICAgICAgICAgICAgICBfLm9wdGlvbnNbb3B0XSA9IHZhbDtcblxuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICB9IGVsc2UgaWYgKCB0eXBlID09PSAncmVzcG9uc2l2ZScgKSB7XG5cbiAgICAgICAgICAgIGZvciAoIGl0ZW0gaW4gdmFsdWUgKSB7XG5cbiAgICAgICAgICAgICAgICBpZiggJC50eXBlKCBfLm9wdGlvbnMucmVzcG9uc2l2ZSApICE9PSAnYXJyYXknICkge1xuXG4gICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucy5yZXNwb25zaXZlID0gWyB2YWx1ZVtpdGVtXSBdO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICBsID0gXy5vcHRpb25zLnJlc3BvbnNpdmUubGVuZ3RoLTE7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gbG9vcCB0aHJvdWdoIHRoZSByZXNwb25zaXZlIG9iamVjdCBhbmQgc3BsaWNlIG91dCBkdXBsaWNhdGVzLlxuICAgICAgICAgICAgICAgICAgICB3aGlsZSggbCA+PSAwICkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiggXy5vcHRpb25zLnJlc3BvbnNpdmVbbF0uYnJlYWtwb2ludCA9PT0gdmFsdWVbaXRlbV0uYnJlYWtwb2ludCApIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucy5yZXNwb25zaXZlLnNwbGljZShsLDEpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGwtLTtcblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zLnJlc3BvbnNpdmUucHVzaCggdmFsdWVbaXRlbV0gKTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIHJlZnJlc2ggKSB7XG5cbiAgICAgICAgICAgIF8udW5sb2FkKCk7XG4gICAgICAgICAgICBfLnJlaW5pdCgpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0UG9zaXRpb24gPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5zZXREaW1lbnNpb25zKCk7XG5cbiAgICAgICAgXy5zZXRIZWlnaHQoKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfLnNldENTUyhfLmdldExlZnQoXy5jdXJyZW50U2xpZGUpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uc2V0RmFkZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ3NldFBvc2l0aW9uJywgW19dKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0UHJvcHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBib2R5U3R5bGUgPSBkb2N1bWVudC5ib2R5LnN0eWxlO1xuXG4gICAgICAgIF8ucG9zaXRpb25Qcm9wID0gXy5vcHRpb25zLnZlcnRpY2FsID09PSB0cnVlID8gJ3RvcCcgOiAnbGVmdCc7XG5cbiAgICAgICAgaWYgKF8ucG9zaXRpb25Qcm9wID09PSAndG9wJykge1xuICAgICAgICAgICAgXy4kc2xpZGVyLmFkZENsYXNzKCdzbGljay12ZXJ0aWNhbCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy4kc2xpZGVyLnJlbW92ZUNsYXNzKCdzbGljay12ZXJ0aWNhbCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJvZHlTdHlsZS5XZWJraXRUcmFuc2l0aW9uICE9PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICAgIGJvZHlTdHlsZS5Nb3pUcmFuc2l0aW9uICE9PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICAgIGJvZHlTdHlsZS5tc1RyYW5zaXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy51c2VDU1MgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLmNzc1RyYW5zaXRpb25zID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggXy5vcHRpb25zLmZhZGUgKSB7XG4gICAgICAgICAgICBpZiAoIHR5cGVvZiBfLm9wdGlvbnMuekluZGV4ID09PSAnbnVtYmVyJyApIHtcbiAgICAgICAgICAgICAgICBpZiggXy5vcHRpb25zLnpJbmRleCA8IDMgKSB7XG4gICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucy56SW5kZXggPSAzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgXy5vcHRpb25zLnpJbmRleCA9IF8uZGVmYXVsdHMuekluZGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJvZHlTdHlsZS5PVHJhbnNmb3JtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIF8uYW5pbVR5cGUgPSAnT1RyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zZm9ybVR5cGUgPSAnLW8tdHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNpdGlvblR5cGUgPSAnT1RyYW5zaXRpb24nO1xuICAgICAgICAgICAgaWYgKGJvZHlTdHlsZS5wZXJzcGVjdGl2ZVByb3BlcnR5ID09PSB1bmRlZmluZWQgJiYgYm9keVN0eWxlLndlYmtpdFBlcnNwZWN0aXZlID09PSB1bmRlZmluZWQpIF8uYW5pbVR5cGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm9keVN0eWxlLk1velRyYW5zZm9ybSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBfLmFuaW1UeXBlID0gJ01velRyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zZm9ybVR5cGUgPSAnLW1vei10cmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2l0aW9uVHlwZSA9ICdNb3pUcmFuc2l0aW9uJztcbiAgICAgICAgICAgIGlmIChib2R5U3R5bGUucGVyc3BlY3RpdmVQcm9wZXJ0eSA9PT0gdW5kZWZpbmVkICYmIGJvZHlTdHlsZS5Nb3pQZXJzcGVjdGl2ZSA9PT0gdW5kZWZpbmVkKSBfLmFuaW1UeXBlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvZHlTdHlsZS53ZWJraXRUcmFuc2Zvcm0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgXy5hbmltVHlwZSA9ICd3ZWJraXRUcmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2Zvcm1UeXBlID0gJy13ZWJraXQtdHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNpdGlvblR5cGUgPSAnd2Via2l0VHJhbnNpdGlvbic7XG4gICAgICAgICAgICBpZiAoYm9keVN0eWxlLnBlcnNwZWN0aXZlUHJvcGVydHkgPT09IHVuZGVmaW5lZCAmJiBib2R5U3R5bGUud2Via2l0UGVyc3BlY3RpdmUgPT09IHVuZGVmaW5lZCkgXy5hbmltVHlwZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChib2R5U3R5bGUubXNUcmFuc2Zvcm0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgXy5hbmltVHlwZSA9ICdtc1RyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zZm9ybVR5cGUgPSAnLW1zLXRyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zaXRpb25UeXBlID0gJ21zVHJhbnNpdGlvbic7XG4gICAgICAgICAgICBpZiAoYm9keVN0eWxlLm1zVHJhbnNmb3JtID09PSB1bmRlZmluZWQpIF8uYW5pbVR5cGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm9keVN0eWxlLnRyYW5zZm9ybSAhPT0gdW5kZWZpbmVkICYmIF8uYW5pbVR5cGUgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfLmFuaW1UeXBlID0gJ3RyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zZm9ybVR5cGUgPSAndHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNpdGlvblR5cGUgPSAndHJhbnNpdGlvbic7XG4gICAgICAgIH1cbiAgICAgICAgXy50cmFuc2Zvcm1zRW5hYmxlZCA9IF8ub3B0aW9ucy51c2VUcmFuc2Zvcm0gJiYgKF8uYW5pbVR5cGUgIT09IG51bGwgJiYgXy5hbmltVHlwZSAhPT0gZmFsc2UpO1xuICAgIH07XG5cblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRTbGlkZUNsYXNzZXMgPSBmdW5jdGlvbihpbmRleCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGNlbnRlck9mZnNldCwgYWxsU2xpZGVzLCBpbmRleE9mZnNldCwgcmVtYWluZGVyO1xuXG4gICAgICAgIGFsbFNsaWRlcyA9IF8uJHNsaWRlclxuICAgICAgICAgICAgLmZpbmQoJy5zbGljay1zbGlkZScpXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLWFjdGl2ZSBzbGljay1jZW50ZXIgc2xpY2stY3VycmVudCcpXG4gICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuXG4gICAgICAgIF8uJHNsaWRlc1xuICAgICAgICAgICAgLmVxKGluZGV4KVxuICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1jdXJyZW50Jyk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG5cbiAgICAgICAgICAgIHZhciBldmVuQ29lZiA9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgJSAyID09PSAwID8gMSA6IDA7XG5cbiAgICAgICAgICAgIGNlbnRlck9mZnNldCA9IE1hdGguZmxvb3IoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIpO1xuXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPj0gY2VudGVyT2Zmc2V0ICYmIGluZGV4IDw9IChfLnNsaWRlQ291bnQgLSAxKSAtIGNlbnRlck9mZnNldCkge1xuICAgICAgICAgICAgICAgICAgICBfLiRzbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZShpbmRleCAtIGNlbnRlck9mZnNldCArIGV2ZW5Db2VmLCBpbmRleCArIGNlbnRlck9mZnNldCArIDEpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaW5kZXhPZmZzZXQgPSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICsgaW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIGFsbFNsaWRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKGluZGV4T2Zmc2V0IC0gY2VudGVyT2Zmc2V0ICsgMSArIGV2ZW5Db2VmLCBpbmRleE9mZnNldCArIGNlbnRlck9mZnNldCArIDIpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuXG4gICAgICAgICAgICAgICAgICAgIGFsbFNsaWRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgLmVxKGFsbFNsaWRlcy5sZW5ndGggLSAxIC0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stY2VudGVyJyk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID09PSBfLnNsaWRlQ291bnQgLSAxKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgYWxsU2xpZGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAuZXEoXy5vcHRpb25zLnNsaWRlc1RvU2hvdylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stY2VudGVyJyk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXy4kc2xpZGVzXG4gICAgICAgICAgICAgICAgLmVxKGluZGV4KVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stY2VudGVyJyk7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPD0gKF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpKSB7XG5cbiAgICAgICAgICAgICAgICBfLiRzbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgLnNsaWNlKGluZGV4LCBpbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYWxsU2xpZGVzLmxlbmd0aCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgICAgICBhbGxTbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIHJlbWFpbmRlciA9IF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3c7XG4gICAgICAgICAgICAgICAgaW5kZXhPZmZzZXQgPSBfLm9wdGlvbnMuaW5maW5pdGUgPT09IHRydWUgPyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICsgaW5kZXggOiBpbmRleDtcblxuICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID09IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAmJiAoXy5zbGlkZUNvdW50IC0gaW5kZXgpIDwgXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICAgICAgICAgIGFsbFNsaWRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKGluZGV4T2Zmc2V0IC0gKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLSByZW1haW5kZXIpLCBpbmRleE9mZnNldCArIHJlbWFpbmRlcilcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICBhbGxTbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZShpbmRleE9mZnNldCwgaW5kZXhPZmZzZXQgKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5sYXp5TG9hZCA9PT0gJ29uZGVtYW5kJyB8fCBfLm9wdGlvbnMubGF6eUxvYWQgPT09ICdhbnRpY2lwYXRlZCcpIHtcbiAgICAgICAgICAgIF8ubGF6eUxvYWQoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0dXBJbmZpbml0ZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGksIHNsaWRlSW5kZXgsIGluZmluaXRlQ291bnQ7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLm9wdGlvbnMuY2VudGVyTW9kZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHtcblxuICAgICAgICAgICAgc2xpZGVJbmRleCA9IG51bGw7XG5cbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5maW5pdGVDb3VudCA9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKyAxO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGluZmluaXRlQ291bnQgPSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvciAoaSA9IF8uc2xpZGVDb3VudDsgaSA+IChfLnNsaWRlQ291bnQgLVxuICAgICAgICAgICAgICAgICAgICAgICAgaW5maW5pdGVDb3VudCk7IGkgLT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZUluZGV4ID0gaSAtIDE7XG4gICAgICAgICAgICAgICAgICAgICQoXy4kc2xpZGVzW3NsaWRlSW5kZXhdKS5jbG9uZSh0cnVlKS5hdHRyKCdpZCcsICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtc2xpY2staW5kZXgnLCBzbGlkZUluZGV4IC0gXy5zbGlkZUNvdW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnByZXBlbmRUbyhfLiRzbGlkZVRyYWNrKS5hZGRDbGFzcygnc2xpY2stY2xvbmVkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBpbmZpbml0ZUNvdW50ICArIF8uc2xpZGVDb3VudDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlSW5kZXggPSBpO1xuICAgICAgICAgICAgICAgICAgICAkKF8uJHNsaWRlc1tzbGlkZUluZGV4XSkuY2xvbmUodHJ1ZSkuYXR0cignaWQnLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLXNsaWNrLWluZGV4Jywgc2xpZGVJbmRleCArIF8uc2xpZGVDb3VudClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmRUbyhfLiRzbGlkZVRyYWNrKS5hZGRDbGFzcygnc2xpY2stY2xvbmVkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suZmluZCgnLnNsaWNrLWNsb25lZCcpLmZpbmQoJ1tpZF0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoJ2lkJywgJycpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5pbnRlcnJ1cHQgPSBmdW5jdGlvbiggdG9nZ2xlICkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiggIXRvZ2dsZSApIHtcbiAgICAgICAgICAgIF8uYXV0b1BsYXkoKTtcbiAgICAgICAgfVxuICAgICAgICBfLmludGVycnVwdGVkID0gdG9nZ2xlO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZWxlY3RIYW5kbGVyID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgdmFyIHRhcmdldEVsZW1lbnQgPVxuICAgICAgICAgICAgJChldmVudC50YXJnZXQpLmlzKCcuc2xpY2stc2xpZGUnKSA/XG4gICAgICAgICAgICAgICAgJChldmVudC50YXJnZXQpIDpcbiAgICAgICAgICAgICAgICAkKGV2ZW50LnRhcmdldCkucGFyZW50cygnLnNsaWNrLXNsaWRlJyk7XG5cbiAgICAgICAgdmFyIGluZGV4ID0gcGFyc2VJbnQodGFyZ2V0RWxlbWVudC5hdHRyKCdkYXRhLXNsaWNrLWluZGV4JykpO1xuXG4gICAgICAgIGlmICghaW5kZXgpIGluZGV4ID0gMDtcblxuICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgXy5zbGlkZUhhbmRsZXIoaW5kZXgsIGZhbHNlLCB0cnVlKTtcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICB9XG5cbiAgICAgICAgXy5zbGlkZUhhbmRsZXIoaW5kZXgpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zbGlkZUhhbmRsZXIgPSBmdW5jdGlvbihpbmRleCwgc3luYywgZG9udEFuaW1hdGUpIHtcblxuICAgICAgICB2YXIgdGFyZ2V0U2xpZGUsIGFuaW1TbGlkZSwgb2xkU2xpZGUsIHNsaWRlTGVmdCwgdGFyZ2V0TGVmdCA9IG51bGwsXG4gICAgICAgICAgICBfID0gdGhpcywgbmF2VGFyZ2V0O1xuXG4gICAgICAgIHN5bmMgPSBzeW5jIHx8IGZhbHNlO1xuXG4gICAgICAgIGlmIChfLmFuaW1hdGluZyA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMud2FpdEZvckFuaW1hdGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gdHJ1ZSAmJiBfLmN1cnJlbnRTbGlkZSA9PT0gaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzeW5jID09PSBmYWxzZSkge1xuICAgICAgICAgICAgXy5hc05hdkZvcihpbmRleCk7XG4gICAgICAgIH1cblxuICAgICAgICB0YXJnZXRTbGlkZSA9IGluZGV4O1xuICAgICAgICB0YXJnZXRMZWZ0ID0gXy5nZXRMZWZ0KHRhcmdldFNsaWRlKTtcbiAgICAgICAgc2xpZGVMZWZ0ID0gXy5nZXRMZWZ0KF8uY3VycmVudFNsaWRlKTtcblxuICAgICAgICBfLmN1cnJlbnRMZWZ0ID0gXy5zd2lwZUxlZnQgPT09IG51bGwgPyBzbGlkZUxlZnQgOiBfLnN3aXBlTGVmdDtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSAmJiBfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gZmFsc2UgJiYgKGluZGV4IDwgMCB8fCBpbmRleCA+IF8uZ2V0RG90Q291bnQoKSAqIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCkpIHtcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRTbGlkZSA9IF8uY3VycmVudFNsaWRlO1xuICAgICAgICAgICAgICAgIGlmIChkb250QW5pbWF0ZSAhPT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAgICAgICAgIF8uYW5pbWF0ZVNsaWRlKHNsaWRlTGVmdCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZSh0YXJnZXRTbGlkZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF8ucG9zdFNsaWRlKHRhcmdldFNsaWRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSAmJiBfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSAmJiAoaW5kZXggPCAwIHx8IGluZGV4ID4gKF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCkpKSB7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0U2xpZGUgPSBfLmN1cnJlbnRTbGlkZTtcbiAgICAgICAgICAgICAgICBpZiAoZG9udEFuaW1hdGUgIT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgICAgICAgICBfLmFuaW1hdGVTbGlkZShzbGlkZUxlZnQsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5wb3N0U2xpZGUodGFyZ2V0U2xpZGUpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZSh0YXJnZXRTbGlkZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBfLm9wdGlvbnMuYXV0b3BsYXkgKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKF8uYXV0b1BsYXlUaW1lcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGFyZ2V0U2xpZGUgPCAwKSB7XG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgYW5pbVNsaWRlID0gXy5zbGlkZUNvdW50IC0gKF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFuaW1TbGlkZSA9IF8uc2xpZGVDb3VudCArIHRhcmdldFNsaWRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRhcmdldFNsaWRlID49IF8uc2xpZGVDb3VudCkge1xuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGFuaW1TbGlkZSA9IDA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFuaW1TbGlkZSA9IHRhcmdldFNsaWRlIC0gXy5zbGlkZUNvdW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYW5pbVNsaWRlID0gdGFyZ2V0U2xpZGU7XG4gICAgICAgIH1cblxuICAgICAgICBfLmFuaW1hdGluZyA9IHRydWU7XG5cbiAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2JlZm9yZUNoYW5nZScsIFtfLCBfLmN1cnJlbnRTbGlkZSwgYW5pbVNsaWRlXSk7XG5cbiAgICAgICAgb2xkU2xpZGUgPSBfLmN1cnJlbnRTbGlkZTtcbiAgICAgICAgXy5jdXJyZW50U2xpZGUgPSBhbmltU2xpZGU7XG5cbiAgICAgICAgXy5zZXRTbGlkZUNsYXNzZXMoXy5jdXJyZW50U2xpZGUpO1xuXG4gICAgICAgIGlmICggXy5vcHRpb25zLmFzTmF2Rm9yICkge1xuXG4gICAgICAgICAgICBuYXZUYXJnZXQgPSBfLmdldE5hdlRhcmdldCgpO1xuICAgICAgICAgICAgbmF2VGFyZ2V0ID0gbmF2VGFyZ2V0LnNsaWNrKCdnZXRTbGljaycpO1xuXG4gICAgICAgICAgICBpZiAoIG5hdlRhcmdldC5zbGlkZUNvdW50IDw9IG5hdlRhcmdldC5vcHRpb25zLnNsaWRlc1RvU2hvdyApIHtcbiAgICAgICAgICAgICAgICBuYXZUYXJnZXQuc2V0U2xpZGVDbGFzc2VzKF8uY3VycmVudFNsaWRlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgXy51cGRhdGVEb3RzKCk7XG4gICAgICAgIF8udXBkYXRlQXJyb3dzKCk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBpZiAoZG9udEFuaW1hdGUgIT09IHRydWUpIHtcblxuICAgICAgICAgICAgICAgIF8uZmFkZVNsaWRlT3V0KG9sZFNsaWRlKTtcblxuICAgICAgICAgICAgICAgIF8uZmFkZVNsaWRlKGFuaW1TbGlkZSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIF8ucG9zdFNsaWRlKGFuaW1TbGlkZSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgXy5wb3N0U2xpZGUoYW5pbVNsaWRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF8uYW5pbWF0ZUhlaWdodCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRvbnRBbmltYXRlICE9PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIF8uYW5pbWF0ZVNsaWRlKHRhcmdldExlZnQsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIF8ucG9zdFNsaWRlKGFuaW1TbGlkZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8ucG9zdFNsaWRlKGFuaW1TbGlkZSk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc3RhcnRMb2FkID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYXJyb3dzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgXy4kcHJldkFycm93LmhpZGUoKTtcbiAgICAgICAgICAgIF8uJG5leHRBcnJvdy5oaWRlKCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZG90cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgIF8uJGRvdHMuaGlkZSgpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBfLiRzbGlkZXIuYWRkQ2xhc3MoJ3NsaWNrLWxvYWRpbmcnKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc3dpcGVEaXJlY3Rpb24gPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgeERpc3QsIHlEaXN0LCByLCBzd2lwZUFuZ2xlLCBfID0gdGhpcztcblxuICAgICAgICB4RGlzdCA9IF8udG91Y2hPYmplY3Quc3RhcnRYIC0gXy50b3VjaE9iamVjdC5jdXJYO1xuICAgICAgICB5RGlzdCA9IF8udG91Y2hPYmplY3Quc3RhcnRZIC0gXy50b3VjaE9iamVjdC5jdXJZO1xuICAgICAgICByID0gTWF0aC5hdGFuMih5RGlzdCwgeERpc3QpO1xuXG4gICAgICAgIHN3aXBlQW5nbGUgPSBNYXRoLnJvdW5kKHIgKiAxODAgLyBNYXRoLlBJKTtcbiAgICAgICAgaWYgKHN3aXBlQW5nbGUgPCAwKSB7XG4gICAgICAgICAgICBzd2lwZUFuZ2xlID0gMzYwIC0gTWF0aC5hYnMoc3dpcGVBbmdsZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoKHN3aXBlQW5nbGUgPD0gNDUpICYmIChzd2lwZUFuZ2xlID49IDApKSB7XG4gICAgICAgICAgICByZXR1cm4gKF8ub3B0aW9ucy5ydGwgPT09IGZhbHNlID8gJ2xlZnQnIDogJ3JpZ2h0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChzd2lwZUFuZ2xlIDw9IDM2MCkgJiYgKHN3aXBlQW5nbGUgPj0gMzE1KSkge1xuICAgICAgICAgICAgcmV0dXJuIChfLm9wdGlvbnMucnRsID09PSBmYWxzZSA/ICdsZWZ0JyA6ICdyaWdodCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoc3dpcGVBbmdsZSA+PSAxMzUpICYmIChzd2lwZUFuZ2xlIDw9IDIyNSkpIHtcbiAgICAgICAgICAgIHJldHVybiAoXy5vcHRpb25zLnJ0bCA9PT0gZmFsc2UgPyAncmlnaHQnIDogJ2xlZnQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsU3dpcGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKChzd2lwZUFuZ2xlID49IDM1KSAmJiAoc3dpcGVBbmdsZSA8PSAxMzUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdkb3duJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICd1cCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJ3ZlcnRpY2FsJztcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc3dpcGVFbmQgPSBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIHNsaWRlQ291bnQsXG4gICAgICAgICAgICBkaXJlY3Rpb247XG5cbiAgICAgICAgXy5kcmFnZ2luZyA9IGZhbHNlO1xuICAgICAgICBfLnN3aXBpbmcgPSBmYWxzZTtcblxuICAgICAgICBpZiAoXy5zY3JvbGxpbmcpIHtcbiAgICAgICAgICAgIF8uc2Nyb2xsaW5nID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBfLmludGVycnVwdGVkID0gZmFsc2U7XG4gICAgICAgIF8uc2hvdWxkQ2xpY2sgPSAoIF8udG91Y2hPYmplY3Quc3dpcGVMZW5ndGggPiAxMCApID8gZmFsc2UgOiB0cnVlO1xuXG4gICAgICAgIGlmICggXy50b3VjaE9iamVjdC5jdXJYID09PSB1bmRlZmluZWQgKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIF8udG91Y2hPYmplY3QuZWRnZUhpdCA9PT0gdHJ1ZSApIHtcbiAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdlZGdlJywgW18sIF8uc3dpcGVEaXJlY3Rpb24oKSBdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aCA+PSBfLnRvdWNoT2JqZWN0Lm1pblN3aXBlICkge1xuXG4gICAgICAgICAgICBkaXJlY3Rpb24gPSBfLnN3aXBlRGlyZWN0aW9uKCk7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoIGRpcmVjdGlvbiApIHtcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ2Rvd24nOlxuXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlQ291bnQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zLnN3aXBlVG9TbGlkZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5jaGVja05hdmlnYWJsZSggXy5jdXJyZW50U2xpZGUgKyBfLmdldFNsaWRlQ291bnQoKSApIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSArIF8uZ2V0U2xpZGVDb3VudCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIF8uY3VycmVudERpcmVjdGlvbiA9IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgICAgICAgICAgY2FzZSAndXAnOlxuXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlQ291bnQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zLnN3aXBlVG9TbGlkZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5jaGVja05hdmlnYWJsZSggXy5jdXJyZW50U2xpZGUgLSBfLmdldFNsaWRlQ291bnQoKSApIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSAtIF8uZ2V0U2xpZGVDb3VudCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIF8uY3VycmVudERpcmVjdGlvbiA9IDE7XG5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuXG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoIGRpcmVjdGlvbiAhPSAndmVydGljYWwnICkge1xuXG4gICAgICAgICAgICAgICAgXy5zbGlkZUhhbmRsZXIoIHNsaWRlQ291bnQgKTtcbiAgICAgICAgICAgICAgICBfLnRvdWNoT2JqZWN0ID0ge307XG4gICAgICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ3N3aXBlJywgW18sIGRpcmVjdGlvbiBdKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGlmICggXy50b3VjaE9iamVjdC5zdGFydFggIT09IF8udG91Y2hPYmplY3QuY3VyWCApIHtcblxuICAgICAgICAgICAgICAgIF8uc2xpZGVIYW5kbGVyKCBfLmN1cnJlbnRTbGlkZSApO1xuICAgICAgICAgICAgICAgIF8udG91Y2hPYmplY3QgPSB7fTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc3dpcGVIYW5kbGVyID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKChfLm9wdGlvbnMuc3dpcGUgPT09IGZhbHNlKSB8fCAoJ29udG91Y2hlbmQnIGluIGRvY3VtZW50ICYmIF8ub3B0aW9ucy5zd2lwZSA9PT0gZmFsc2UpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSBpZiAoXy5vcHRpb25zLmRyYWdnYWJsZSA9PT0gZmFsc2UgJiYgZXZlbnQudHlwZS5pbmRleE9mKCdtb3VzZScpICE9PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgXy50b3VjaE9iamVjdC5maW5nZXJDb3VudCA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQgJiYgZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzICE9PSB1bmRlZmluZWQgP1xuICAgICAgICAgICAgZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzLmxlbmd0aCA6IDE7XG5cbiAgICAgICAgXy50b3VjaE9iamVjdC5taW5Td2lwZSA9IF8ubGlzdFdpZHRoIC8gXy5vcHRpb25zXG4gICAgICAgICAgICAudG91Y2hUaHJlc2hvbGQ7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8udG91Y2hPYmplY3QubWluU3dpcGUgPSBfLmxpc3RIZWlnaHQgLyBfLm9wdGlvbnNcbiAgICAgICAgICAgICAgICAudG91Y2hUaHJlc2hvbGQ7XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmRhdGEuYWN0aW9uKSB7XG5cbiAgICAgICAgICAgIGNhc2UgJ3N0YXJ0JzpcbiAgICAgICAgICAgICAgICBfLnN3aXBlU3RhcnQoZXZlbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdtb3ZlJzpcbiAgICAgICAgICAgICAgICBfLnN3aXBlTW92ZShldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgICAgICAgICAgXy5zd2lwZUVuZChldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zd2lwZU1vdmUgPSBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGVkZ2VXYXNIaXQgPSBmYWxzZSxcbiAgICAgICAgICAgIGN1ckxlZnQsIHN3aXBlRGlyZWN0aW9uLCBzd2lwZUxlbmd0aCwgcG9zaXRpb25PZmZzZXQsIHRvdWNoZXMsIHZlcnRpY2FsU3dpcGVMZW5ndGg7XG5cbiAgICAgICAgdG91Y2hlcyA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQgIT09IHVuZGVmaW5lZCA/IGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlcyA6IG51bGw7XG5cbiAgICAgICAgaWYgKCFfLmRyYWdnaW5nIHx8IF8uc2Nyb2xsaW5nIHx8IHRvdWNoZXMgJiYgdG91Y2hlcy5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGN1ckxlZnQgPSBfLmdldExlZnQoXy5jdXJyZW50U2xpZGUpO1xuXG4gICAgICAgIF8udG91Y2hPYmplY3QuY3VyWCA9IHRvdWNoZXMgIT09IHVuZGVmaW5lZCA/IHRvdWNoZXNbMF0ucGFnZVggOiBldmVudC5jbGllbnRYO1xuICAgICAgICBfLnRvdWNoT2JqZWN0LmN1clkgPSB0b3VjaGVzICE9PSB1bmRlZmluZWQgPyB0b3VjaGVzWzBdLnBhZ2VZIDogZXZlbnQuY2xpZW50WTtcblxuICAgICAgICBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoID0gTWF0aC5yb3VuZChNYXRoLnNxcnQoXG4gICAgICAgICAgICBNYXRoLnBvdyhfLnRvdWNoT2JqZWN0LmN1clggLSBfLnRvdWNoT2JqZWN0LnN0YXJ0WCwgMikpKTtcblxuICAgICAgICB2ZXJ0aWNhbFN3aXBlTGVuZ3RoID0gTWF0aC5yb3VuZChNYXRoLnNxcnQoXG4gICAgICAgICAgICBNYXRoLnBvdyhfLnRvdWNoT2JqZWN0LmN1clkgLSBfLnRvdWNoT2JqZWN0LnN0YXJ0WSwgMikpKTtcblxuICAgICAgICBpZiAoIV8ub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmcgJiYgIV8uc3dpcGluZyAmJiB2ZXJ0aWNhbFN3aXBlTGVuZ3RoID4gNCkge1xuICAgICAgICAgICAgXy5zY3JvbGxpbmcgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8udG91Y2hPYmplY3Quc3dpcGVMZW5ndGggPSB2ZXJ0aWNhbFN3aXBlTGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpcGVEaXJlY3Rpb24gPSBfLnN3aXBlRGlyZWN0aW9uKCk7XG5cbiAgICAgICAgaWYgKGV2ZW50Lm9yaWdpbmFsRXZlbnQgIT09IHVuZGVmaW5lZCAmJiBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoID4gNCkge1xuICAgICAgICAgICAgXy5zd2lwaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBwb3NpdGlvbk9mZnNldCA9IChfLm9wdGlvbnMucnRsID09PSBmYWxzZSA/IDEgOiAtMSkgKiAoXy50b3VjaE9iamVjdC5jdXJYID4gXy50b3VjaE9iamVjdC5zdGFydFggPyAxIDogLTEpO1xuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsU3dpcGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcG9zaXRpb25PZmZzZXQgPSBfLnRvdWNoT2JqZWN0LmN1clkgPiBfLnRvdWNoT2JqZWN0LnN0YXJ0WSA/IDEgOiAtMTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgc3dpcGVMZW5ndGggPSBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoO1xuXG4gICAgICAgIF8udG91Y2hPYmplY3QuZWRnZUhpdCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBpZiAoKF8uY3VycmVudFNsaWRlID09PSAwICYmIHN3aXBlRGlyZWN0aW9uID09PSAncmlnaHQnKSB8fCAoXy5jdXJyZW50U2xpZGUgPj0gXy5nZXREb3RDb3VudCgpICYmIHN3aXBlRGlyZWN0aW9uID09PSAnbGVmdCcpKSB7XG4gICAgICAgICAgICAgICAgc3dpcGVMZW5ndGggPSBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoICogXy5vcHRpb25zLmVkZ2VGcmljdGlvbjtcbiAgICAgICAgICAgICAgICBfLnRvdWNoT2JqZWN0LmVkZ2VIaXQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIF8uc3dpcGVMZWZ0ID0gY3VyTGVmdCArIHN3aXBlTGVuZ3RoICogcG9zaXRpb25PZmZzZXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLnN3aXBlTGVmdCA9IGN1ckxlZnQgKyAoc3dpcGVMZW5ndGggKiAoXy4kbGlzdC5oZWlnaHQoKSAvIF8ubGlzdFdpZHRoKSkgKiBwb3NpdGlvbk9mZnNldDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsU3dpcGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy5zd2lwZUxlZnQgPSBjdXJMZWZ0ICsgc3dpcGVMZW5ndGggKiBwb3NpdGlvbk9mZnNldDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gdHJ1ZSB8fCBfLm9wdGlvbnMudG91Y2hNb3ZlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8uYW5pbWF0aW5nID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLnN3aXBlTGVmdCA9IG51bGw7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBfLnNldENTUyhfLnN3aXBlTGVmdCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnN3aXBlU3RhcnQgPSBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIHRvdWNoZXM7XG5cbiAgICAgICAgXy5pbnRlcnJ1cHRlZCA9IHRydWU7XG5cbiAgICAgICAgaWYgKF8udG91Y2hPYmplY3QuZmluZ2VyQ291bnQgIT09IDEgfHwgXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIF8udG91Y2hPYmplY3QgPSB7fTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChldmVudC5vcmlnaW5hbEV2ZW50ICE9PSB1bmRlZmluZWQgJiYgZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRvdWNoZXMgPSBldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXNbMF07XG4gICAgICAgIH1cblxuICAgICAgICBfLnRvdWNoT2JqZWN0LnN0YXJ0WCA9IF8udG91Y2hPYmplY3QuY3VyWCA9IHRvdWNoZXMgIT09IHVuZGVmaW5lZCA/IHRvdWNoZXMucGFnZVggOiBldmVudC5jbGllbnRYO1xuICAgICAgICBfLnRvdWNoT2JqZWN0LnN0YXJ0WSA9IF8udG91Y2hPYmplY3QuY3VyWSA9IHRvdWNoZXMgIT09IHVuZGVmaW5lZCA/IHRvdWNoZXMucGFnZVkgOiBldmVudC5jbGllbnRZO1xuXG4gICAgICAgIF8uZHJhZ2dpbmcgPSB0cnVlO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS51bmZpbHRlclNsaWRlcyA9IFNsaWNrLnByb3RvdHlwZS5zbGlja1VuZmlsdGVyID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLiRzbGlkZXNDYWNoZSAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICBfLnVubG9hZCgpO1xuXG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZGV0YWNoKCk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlc0NhY2hlLmFwcGVuZFRvKF8uJHNsaWRlVHJhY2spO1xuXG4gICAgICAgICAgICBfLnJlaW5pdCgpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUudW5sb2FkID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgICQoJy5zbGljay1jbG9uZWQnLCBfLiRzbGlkZXIpLnJlbW92ZSgpO1xuXG4gICAgICAgIGlmIChfLiRkb3RzKSB7XG4gICAgICAgICAgICBfLiRkb3RzLnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8uJHByZXZBcnJvdyAmJiBfLmh0bWxFeHByLnRlc3QoXy5vcHRpb25zLnByZXZBcnJvdykpIHtcbiAgICAgICAgICAgIF8uJHByZXZBcnJvdy5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLiRuZXh0QXJyb3cgJiYgXy5odG1sRXhwci50ZXN0KF8ub3B0aW9ucy5uZXh0QXJyb3cpKSB7XG4gICAgICAgICAgICBfLiRuZXh0QXJyb3cucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBfLiRzbGlkZXNcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2xpY2stc2xpZGUgc2xpY2stYWN0aXZlIHNsaWNrLXZpc2libGUgc2xpY2stY3VycmVudCcpXG4gICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAndHJ1ZScpXG4gICAgICAgICAgICAuY3NzKCd3aWR0aCcsICcnKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUudW5zbGljayA9IGZ1bmN0aW9uKGZyb21CcmVha3BvaW50KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcigndW5zbGljaycsIFtfLCBmcm9tQnJlYWtwb2ludF0pO1xuICAgICAgICBfLmRlc3Ryb3koKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUudXBkYXRlQXJyb3dzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgY2VudGVyT2Zmc2V0O1xuXG4gICAgICAgIGNlbnRlck9mZnNldCA9IE1hdGguZmxvb3IoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIpO1xuXG4gICAgICAgIGlmICggXy5vcHRpb25zLmFycm93cyA9PT0gdHJ1ZSAmJlxuICAgICAgICAgICAgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAmJlxuICAgICAgICAgICAgIV8ub3B0aW9ucy5pbmZpbml0ZSApIHtcblxuICAgICAgICAgICAgXy4kcHJldkFycm93LnJlbW92ZUNsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAnZmFsc2UnKTtcbiAgICAgICAgICAgIF8uJG5leHRBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgIGlmIChfLmN1cnJlbnRTbGlkZSA9PT0gMCkge1xuXG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93LmFkZENsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAndHJ1ZScpO1xuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXy5jdXJyZW50U2xpZGUgPj0gXy5zbGlkZUNvdW50IC0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAmJiBfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gZmFsc2UpIHtcblxuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5hZGRDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ3RydWUnKTtcbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICdmYWxzZScpO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKF8uY3VycmVudFNsaWRlID49IF8uc2xpZGVDb3VudCAtIDEgJiYgXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcblxuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5hZGRDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ3RydWUnKTtcbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICdmYWxzZScpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS51cGRhdGVEb3RzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLiRkb3RzICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgIF8uJGRvdHNcbiAgICAgICAgICAgICAgICAuZmluZCgnbGknKVxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgIC5lbmQoKTtcblxuICAgICAgICAgICAgXy4kZG90c1xuICAgICAgICAgICAgICAgIC5maW5kKCdsaScpXG4gICAgICAgICAgICAgICAgLmVxKE1hdGguZmxvb3IoXy5jdXJyZW50U2xpZGUgLyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpKVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stYWN0aXZlJyk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS52aXNpYmlsaXR5ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmICggXy5vcHRpb25zLmF1dG9wbGF5ICkge1xuXG4gICAgICAgICAgICBpZiAoIGRvY3VtZW50W18uaGlkZGVuXSApIHtcblxuICAgICAgICAgICAgICAgIF8uaW50ZXJydXB0ZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgXy5pbnRlcnJ1cHRlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgICQuZm4uc2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgb3B0ID0gYXJndW1lbnRzWzBdLFxuICAgICAgICAgICAgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSksXG4gICAgICAgICAgICBsID0gXy5sZW5ndGgsXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgcmV0O1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdCA9PSAnb2JqZWN0JyB8fCB0eXBlb2Ygb3B0ID09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgICAgIF9baV0uc2xpY2sgPSBuZXcgU2xpY2soX1tpXSwgb3B0KTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICByZXQgPSBfW2ldLnNsaWNrW29wdF0uYXBwbHkoX1tpXS5zbGljaywgYXJncyk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHJldCAhPSAndW5kZWZpbmVkJykgcmV0dXJuIHJldDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gXztcbiAgICB9O1xuXG59KSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTsiXSwic291cmNlUm9vdCI6IiJ9