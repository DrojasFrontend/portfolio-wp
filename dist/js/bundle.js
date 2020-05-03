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



console.log("##bundle##");

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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scroll(function () {
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).scrollTop() > 100) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".header").addClass("is-active");
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".hamburger ").addClass("is-active");
  } else {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".header").removeClass("is-active");
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".hamburger").removeClass("is-active");
  }
});
var ease = {
  exponentialIn: function exponentialIn(t) {
    return t == 0.0 ? t : Math.pow(2.0, 10.0 * (t - 1.0));
  },
  exponentialOut: function exponentialOut(t) {
    return t == 1.0 ? t : 1.0 - Math.pow(2.0, -10.0 * t);
  },
  exponentialInOut: function exponentialInOut(t) {
    return t == 0.0 || t == 1.0 ? t : t < 0.5 ? +0.5 * Math.pow(2.0, 20.0 * t - 10.0) : -0.5 * Math.pow(2.0, 10.0 - t * 20.0) + 1.0;
  },
  sineOut: function sineOut(t) {
    var HALF_PI = 1.5707963267948966;
    return Math.sin(t * HALF_PI);
  },
  circularInOut: function circularInOut(t) {
    return t < 0.5 ? 0.5 * (1.0 - Math.sqrt(1.0 - 4.0 * t * t)) : 0.5 * (Math.sqrt((3.0 - 2.0 * t) * (2.0 * t - 1.0)) + 1.0);
  },
  cubicIn: function cubicIn(t) {
    return t * t * t;
  },
  cubicOut: function cubicOut(t) {
    var f = t - 1.0;
    return f * f * f + 1.0;
  },
  cubicInOut: function cubicInOut(t) {
    return t < 0.5 ? 4.0 * t * t * t : 0.5 * Math.pow(2.0 * t - 2.0, 3.0) + 1.0;
  },
  quadraticOut: function quadraticOut(t) {
    return -t * (t - 2.0);
  },
  quarticOut: function quarticOut(t) {
    return Math.pow(t - 1.0, 3.0) * (1.0 - t) + 1.0;
  }
};

var ShapeOverlays = /*#__PURE__*/function () {
  function ShapeOverlays(elm) {
    _classCallCheck(this, ShapeOverlays);

    this.elm = elm;
    this.path = elm.querySelectorAll("path");
    this.numPoints = 10;
    this.duration = 900;
    this.delayPointsArray = [];
    this.delayPointsMax = 300;
    this.delayPerPath = 250;
    this.timeStart = Date.now();
    this.isOpened = false;
    this.isAnimating = false;
  }

  _createClass(ShapeOverlays, [{
    key: "toggle",
    value: function toggle() {
      this.isAnimating = true;

      for (var i = 0; i < this.numPoints; i++) {
        this.delayPointsArray[i] = Math.random() * this.delayPointsMax;
      }

      if (this.isOpened === false) {
        this.open();
      } else {
        this.close();
      }
    }
  }, {
    key: "open",
    value: function open() {
      this.isOpened = true;
      this.elm.classList.add("is-opened");
      this.timeStart = Date.now();
      this.renderLoop();
    }
  }, {
    key: "close",
    value: function close() {
      this.isOpened = false;
      this.elm.classList.remove("is-opened");
      this.timeStart = Date.now();
      this.renderLoop();
    }
  }, {
    key: "updatePath",
    value: function updatePath(time) {
      var points = [];

      for (var i = 0; i < this.numPoints; i++) {
        points[i] = (1 - ease.cubicInOut(Math.min(Math.max(time - this.delayPointsArray[i], 0) / this.duration, 1))) * 100;
      }

      var str = "";
      str += this.isOpened ? "M 0 0 V ".concat(points[0]) : "M 0 ".concat(points[0]);

      for (var i = 0; i < this.numPoints - 1; i++) {
        var p = (i + 1) / (this.numPoints - 1) * 100;
        var cp = p - 1 / (this.numPoints - 1) * 100 / 2;
        str += "C ".concat(cp, " ").concat(points[i], " ").concat(cp, " ").concat(points[i + 1], " ").concat(p, " ").concat(points[i + 1], " ");
      }

      str += this.isOpened ? "V 100 H 0" : "V 0 H 0";
      return str;
    }
  }, {
    key: "render",
    value: function render() {
      if (this.isOpened) {
        for (var i = 0; i < this.path.length; i++) {
          this.path[i].setAttribute("d", this.updatePath(Date.now() - (this.timeStart + this.delayPerPath * i)));
        }
      } else {
        for (var i = 0; i < this.path.length; i++) {
          this.path[i].setAttribute("d", this.updatePath(Date.now() - (this.timeStart + this.delayPerPath * (this.path.length - i - 1))));
        }
      }
    }
  }, {
    key: "renderLoop",
    value: function renderLoop() {
      var _this = this;

      this.render();

      if (Date.now() - this.timeStart < this.duration + this.delayPerPath * (this.path.length - 1) + this.delayPointsMax) {
        requestAnimationFrame(function () {
          _this.renderLoop();
        });
      } else {
        this.isAnimating = false;
      }
    }
  }]);

  return ShapeOverlays;
}();

(function () {
  var elmBody = document.querySelector("body");
  var elmHamburger = document.querySelector(".hamburger");
  var gNavItems = document.querySelectorAll(".global-menu__item");
  var elmOverlay = document.querySelector(".shape-overlays");
  var elmHeader = document.querySelector(".header");
  var overlay = new ShapeOverlays(elmOverlay);
  elmHamburger.addEventListener("click", function () {
    if (overlay.isAnimating) {
      return false;
    }

    overlay.toggle();

    if (overlay.isOpened === true) {
      elmBody.classList.add("is-opened-navi");
      elmHamburger.classList.add("is-opened-navi");
      elmHeader.classList.add("is-opened-navi");

      for (var i = 0; i < gNavItems.length; i++) {
        gNavItems[i].classList.add("is-opened");
      }
    } else {
      elmBody.classList.remove("is-opened-navi");
      elmHamburger.classList.remove("is-opened-navi");
      elmHeader.classList.remove("is-opened-navi");

      for (var i = 0; i < gNavItems.length; i++) {
        gNavItems[i].classList.remove("is-opened");
      }
    }
  });
})();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9iYW5uZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3NsaWNrLWNhcm91c2VsLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3NsaWNrLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImpRdWVyeVwiIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCIkIiwid2luZG93Iiwic2Nyb2xsIiwid1Njcm9sbCIsInNjcm9sbFRvcCIsImNzcyIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJlYXNlIiwiZXhwb25lbnRpYWxJbiIsInQiLCJNYXRoIiwicG93IiwiZXhwb25lbnRpYWxPdXQiLCJleHBvbmVudGlhbEluT3V0Iiwic2luZU91dCIsIkhBTEZfUEkiLCJzaW4iLCJjaXJjdWxhckluT3V0Iiwic3FydCIsImN1YmljSW4iLCJjdWJpY091dCIsImYiLCJjdWJpY0luT3V0IiwicXVhZHJhdGljT3V0IiwicXVhcnRpY091dCIsIlNoYXBlT3ZlcmxheXMiLCJlbG0iLCJwYXRoIiwicXVlcnlTZWxlY3RvckFsbCIsIm51bVBvaW50cyIsImR1cmF0aW9uIiwiZGVsYXlQb2ludHNBcnJheSIsImRlbGF5UG9pbnRzTWF4IiwiZGVsYXlQZXJQYXRoIiwidGltZVN0YXJ0IiwiRGF0ZSIsIm5vdyIsImlzT3BlbmVkIiwiaXNBbmltYXRpbmciLCJpIiwicmFuZG9tIiwib3BlbiIsImNsb3NlIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVuZGVyTG9vcCIsInJlbW92ZSIsInRpbWUiLCJwb2ludHMiLCJtaW4iLCJtYXgiLCJzdHIiLCJwIiwiY3AiLCJsZW5ndGgiLCJzZXRBdHRyaWJ1dGUiLCJ1cGRhdGVQYXRoIiwicmVuZGVyIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZWxtQm9keSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImVsbUhhbWJ1cmdlciIsImdOYXZJdGVtcyIsImVsbU92ZXJsYXkiLCJlbG1IZWFkZXIiLCJvdmVybGF5IiwiYWRkRXZlbnRMaXN0ZW5lciIsInRvZ2dsZSIsInNsaWNrIiwiZmFkZSIsImFycm93cyIsImRvdHMiLCJpbmZpbml0ZSIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwic3BlZWQiLCJhdXRvcGxheSIsImF1dG9wbGF5U3BlZWQiLCJ1c2VUcmFuc2Zvcm0iLCJmYWN0b3J5IiwiZGVmaW5lIiwiU2xpY2siLCJpbnN0YW5jZVVpZCIsImVsZW1lbnQiLCJzZXR0aW5ncyIsIl8iLCJkYXRhU2V0dGluZ3MiLCJkZWZhdWx0cyIsImFjY2Vzc2liaWxpdHkiLCJhZGFwdGl2ZUhlaWdodCIsImFwcGVuZEFycm93cyIsImFwcGVuZERvdHMiLCJhc05hdkZvciIsInByZXZBcnJvdyIsIm5leHRBcnJvdyIsImNlbnRlck1vZGUiLCJjZW50ZXJQYWRkaW5nIiwiY3NzRWFzZSIsImN1c3RvbVBhZ2luZyIsInNsaWRlciIsInRleHQiLCJkb3RzQ2xhc3MiLCJkcmFnZ2FibGUiLCJlYXNpbmciLCJlZGdlRnJpY3Rpb24iLCJmb2N1c09uU2VsZWN0IiwiZm9jdXNPbkNoYW5nZSIsImluaXRpYWxTbGlkZSIsImxhenlMb2FkIiwibW9iaWxlRmlyc3QiLCJwYXVzZU9uSG92ZXIiLCJwYXVzZU9uRm9jdXMiLCJwYXVzZU9uRG90c0hvdmVyIiwicmVzcG9uZFRvIiwicmVzcG9uc2l2ZSIsInJvd3MiLCJydGwiLCJzbGlkZSIsInNsaWRlc1BlclJvdyIsInN3aXBlIiwic3dpcGVUb1NsaWRlIiwidG91Y2hNb3ZlIiwidG91Y2hUaHJlc2hvbGQiLCJ1c2VDU1MiLCJ2YXJpYWJsZVdpZHRoIiwidmVydGljYWwiLCJ2ZXJ0aWNhbFN3aXBpbmciLCJ3YWl0Rm9yQW5pbWF0ZSIsInpJbmRleCIsImluaXRpYWxzIiwiYW5pbWF0aW5nIiwiZHJhZ2dpbmciLCJhdXRvUGxheVRpbWVyIiwiY3VycmVudERpcmVjdGlvbiIsImN1cnJlbnRMZWZ0IiwiY3VycmVudFNsaWRlIiwiZGlyZWN0aW9uIiwiJGRvdHMiLCJsaXN0V2lkdGgiLCJsaXN0SGVpZ2h0IiwibG9hZEluZGV4IiwiJG5leHRBcnJvdyIsIiRwcmV2QXJyb3ciLCJzY3JvbGxpbmciLCJzbGlkZUNvdW50Iiwic2xpZGVXaWR0aCIsIiRzbGlkZVRyYWNrIiwiJHNsaWRlcyIsInNsaWRpbmciLCJzbGlkZU9mZnNldCIsInN3aXBlTGVmdCIsInN3aXBpbmciLCIkbGlzdCIsInRvdWNoT2JqZWN0IiwidHJhbnNmb3Jtc0VuYWJsZWQiLCJ1bnNsaWNrZWQiLCJleHRlbmQiLCJhY3RpdmVCcmVha3BvaW50IiwiYW5pbVR5cGUiLCJhbmltUHJvcCIsImJyZWFrcG9pbnRzIiwiYnJlYWtwb2ludFNldHRpbmdzIiwiY3NzVHJhbnNpdGlvbnMiLCJmb2N1c3NlZCIsImludGVycnVwdGVkIiwiaGlkZGVuIiwicGF1c2VkIiwicG9zaXRpb25Qcm9wIiwicm93Q291bnQiLCJzaG91bGRDbGljayIsIiRzbGlkZXIiLCIkc2xpZGVzQ2FjaGUiLCJ0cmFuc2Zvcm1UeXBlIiwidHJhbnNpdGlvblR5cGUiLCJ2aXNpYmlsaXR5Q2hhbmdlIiwid2luZG93V2lkdGgiLCJ3aW5kb3dUaW1lciIsImRhdGEiLCJvcHRpb25zIiwib3JpZ2luYWxTZXR0aW5ncyIsIm1vekhpZGRlbiIsIndlYmtpdEhpZGRlbiIsImF1dG9QbGF5IiwicHJveHkiLCJhdXRvUGxheUNsZWFyIiwiYXV0b1BsYXlJdGVyYXRvciIsImNoYW5nZVNsaWRlIiwiY2xpY2tIYW5kbGVyIiwic2VsZWN0SGFuZGxlciIsInNldFBvc2l0aW9uIiwic3dpcGVIYW5kbGVyIiwiZHJhZ0hhbmRsZXIiLCJrZXlIYW5kbGVyIiwiaHRtbEV4cHIiLCJyZWdpc3RlckJyZWFrcG9pbnRzIiwiaW5pdCIsInByb3RvdHlwZSIsImFjdGl2YXRlQURBIiwiZmluZCIsImF0dHIiLCJhZGRTbGlkZSIsInNsaWNrQWRkIiwibWFya3VwIiwiaW5kZXgiLCJhZGRCZWZvcmUiLCJ1bmxvYWQiLCJhcHBlbmRUbyIsImluc2VydEJlZm9yZSIsImVxIiwiaW5zZXJ0QWZ0ZXIiLCJwcmVwZW5kVG8iLCJjaGlsZHJlbiIsImRldGFjaCIsImFwcGVuZCIsImVhY2giLCJyZWluaXQiLCJhbmltYXRlSGVpZ2h0IiwidGFyZ2V0SGVpZ2h0Iiwib3V0ZXJIZWlnaHQiLCJhbmltYXRlIiwiaGVpZ2h0IiwiYW5pbWF0ZVNsaWRlIiwidGFyZ2V0TGVmdCIsImNhbGxiYWNrIiwiYW5pbVByb3BzIiwibGVmdCIsInRvcCIsImFuaW1TdGFydCIsInN0ZXAiLCJjZWlsIiwiY29tcGxldGUiLCJjYWxsIiwiYXBwbHlUcmFuc2l0aW9uIiwic2V0VGltZW91dCIsImRpc2FibGVUcmFuc2l0aW9uIiwiZ2V0TmF2VGFyZ2V0Iiwibm90IiwidGFyZ2V0Iiwic2xpZGVIYW5kbGVyIiwidHJhbnNpdGlvbiIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInNsaWRlVG8iLCJidWlsZEFycm93cyIsInJlbW92ZUF0dHIiLCJ0ZXN0IiwiYnVpbGREb3RzIiwiZG90IiwiZ2V0RG90Q291bnQiLCJmaXJzdCIsImJ1aWxkT3V0Iiwid3JhcEFsbCIsInBhcmVudCIsIndyYXAiLCJzZXR1cEluZmluaXRlIiwidXBkYXRlRG90cyIsInNldFNsaWRlQ2xhc3NlcyIsImJ1aWxkUm93cyIsImEiLCJiIiwiYyIsIm5ld1NsaWRlcyIsIm51bU9mU2xpZGVzIiwib3JpZ2luYWxTbGlkZXMiLCJzbGlkZXNQZXJTZWN0aW9uIiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJyb3ciLCJnZXQiLCJhcHBlbmRDaGlsZCIsImVtcHR5IiwiY2hlY2tSZXNwb25zaXZlIiwiaW5pdGlhbCIsImZvcmNlVXBkYXRlIiwiYnJlYWtwb2ludCIsInRhcmdldEJyZWFrcG9pbnQiLCJyZXNwb25kVG9XaWR0aCIsInRyaWdnZXJCcmVha3BvaW50Iiwic2xpZGVyV2lkdGgiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJoYXNPd25Qcm9wZXJ0eSIsInVuc2xpY2siLCJyZWZyZXNoIiwidHJpZ2dlciIsImV2ZW50IiwiZG9udEFuaW1hdGUiLCIkdGFyZ2V0IiwiY3VycmVudFRhcmdldCIsImluZGV4T2Zmc2V0IiwidW5ldmVuT2Zmc2V0IiwiaXMiLCJwcmV2ZW50RGVmYXVsdCIsImNsb3Nlc3QiLCJtZXNzYWdlIiwiY2hlY2tOYXZpZ2FibGUiLCJuYXZpZ2FibGVzIiwicHJldk5hdmlnYWJsZSIsImdldE5hdmlnYWJsZUluZGV4ZXMiLCJuIiwiY2xlYW5VcEV2ZW50cyIsIm9mZiIsImludGVycnVwdCIsInZpc2liaWxpdHkiLCJjbGVhblVwU2xpZGVFdmVudHMiLCJvcmllbnRhdGlvbkNoYW5nZSIsInJlc2l6ZSIsImNsZWFuVXBSb3dzIiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwic3RvcFByb3BhZ2F0aW9uIiwiZGVzdHJveSIsImZhZGVTbGlkZSIsInNsaWRlSW5kZXgiLCJvcGFjaXR5IiwiZmFkZVNsaWRlT3V0IiwiZmlsdGVyU2xpZGVzIiwic2xpY2tGaWx0ZXIiLCJmaWx0ZXIiLCJmb2N1c0hhbmRsZXIiLCJvbiIsIiRzZiIsImdldEN1cnJlbnQiLCJzbGlja0N1cnJlbnRTbGlkZSIsImJyZWFrUG9pbnQiLCJjb3VudGVyIiwicGFnZXJRdHkiLCJnZXRMZWZ0IiwidmVydGljYWxIZWlnaHQiLCJ2ZXJ0aWNhbE9mZnNldCIsInRhcmdldFNsaWRlIiwiY29lZiIsImZsb29yIiwib2Zmc2V0TGVmdCIsIm91dGVyV2lkdGgiLCJnZXRPcHRpb24iLCJzbGlja0dldE9wdGlvbiIsIm9wdGlvbiIsImluZGV4ZXMiLCJwdXNoIiwiZ2V0U2xpY2siLCJnZXRTbGlkZUNvdW50Iiwic2xpZGVzVHJhdmVyc2VkIiwic3dpcGVkU2xpZGUiLCJjZW50ZXJPZmZzZXQiLCJhYnMiLCJnb1RvIiwic2xpY2tHb1RvIiwicGFyc2VJbnQiLCJjcmVhdGlvbiIsImhhc0NsYXNzIiwic2V0UHJvcHMiLCJzdGFydExvYWQiLCJsb2FkU2xpZGVyIiwiaW5pdGlhbGl6ZUV2ZW50cyIsInVwZGF0ZUFycm93cyIsImluaXRBREEiLCJudW1Eb3RHcm91cHMiLCJ0YWJDb250cm9sSW5kZXhlcyIsInZhbCIsInNsaWRlQ29udHJvbEluZGV4IiwiaW5kZXhPZiIsImFyaWFCdXR0b25Db250cm9sIiwibWFwcGVkU2xpZGVJbmRleCIsImVuZCIsImluaXRBcnJvd0V2ZW50cyIsImluaXREb3RFdmVudHMiLCJpbml0U2xpZGVFdmVudHMiLCJhY3Rpb24iLCJpbml0VUkiLCJzaG93IiwidGFnTmFtZSIsIm1hdGNoIiwia2V5Q29kZSIsImxvYWRSYW5nZSIsImNsb25lUmFuZ2UiLCJyYW5nZVN0YXJ0IiwicmFuZ2VFbmQiLCJsb2FkSW1hZ2VzIiwiaW1hZ2VzU2NvcGUiLCJpbWFnZSIsImltYWdlU291cmNlIiwiaW1hZ2VTcmNTZXQiLCJpbWFnZVNpemVzIiwiaW1hZ2VUb0xvYWQiLCJvbmxvYWQiLCJvbmVycm9yIiwic3JjIiwic2xpY2UiLCJwcmV2U2xpZGUiLCJuZXh0U2xpZGUiLCJwcm9ncmVzc2l2ZUxhenlMb2FkIiwibmV4dCIsInNsaWNrTmV4dCIsInBhdXNlIiwic2xpY2tQYXVzZSIsInBsYXkiLCJzbGlja1BsYXkiLCJwb3N0U2xpZGUiLCIkY3VycmVudFNsaWRlIiwiZm9jdXMiLCJwcmV2Iiwic2xpY2tQcmV2IiwidHJ5Q291bnQiLCIkaW1nc1RvTG9hZCIsImluaXRpYWxpemluZyIsImxhc3RWaXNpYmxlSW5kZXgiLCJjdXJyZW50QnJlYWtwb2ludCIsImwiLCJyZXNwb25zaXZlU2V0dGluZ3MiLCJ0eXBlIiwic3BsaWNlIiwic29ydCIsImNsZWFyVGltZW91dCIsIndpbmRvd0RlbGF5IiwicmVtb3ZlU2xpZGUiLCJzbGlja1JlbW92ZSIsInJlbW92ZUJlZm9yZSIsInJlbW92ZUFsbCIsInNldENTUyIsInBvc2l0aW9uIiwicG9zaXRpb25Qcm9wcyIsIngiLCJ5Iiwic2V0RGltZW5zaW9ucyIsInBhZGRpbmciLCJvZmZzZXQiLCJzZXRGYWRlIiwicmlnaHQiLCJzZXRIZWlnaHQiLCJzZXRPcHRpb24iLCJzbGlja1NldE9wdGlvbiIsIml0ZW0iLCJ2YWx1ZSIsImFyZ3VtZW50cyIsIm9wdCIsImJvZHlTdHlsZSIsImJvZHkiLCJzdHlsZSIsIldlYmtpdFRyYW5zaXRpb24iLCJ1bmRlZmluZWQiLCJNb3pUcmFuc2l0aW9uIiwibXNUcmFuc2l0aW9uIiwiT1RyYW5zZm9ybSIsInBlcnNwZWN0aXZlUHJvcGVydHkiLCJ3ZWJraXRQZXJzcGVjdGl2ZSIsIk1velRyYW5zZm9ybSIsIk1velBlcnNwZWN0aXZlIiwid2Via2l0VHJhbnNmb3JtIiwibXNUcmFuc2Zvcm0iLCJ0cmFuc2Zvcm0iLCJhbGxTbGlkZXMiLCJyZW1haW5kZXIiLCJldmVuQ29lZiIsImluZmluaXRlQ291bnQiLCJjbG9uZSIsInRhcmdldEVsZW1lbnQiLCJwYXJlbnRzIiwic3luYyIsImFuaW1TbGlkZSIsIm9sZFNsaWRlIiwic2xpZGVMZWZ0IiwibmF2VGFyZ2V0IiwiaGlkZSIsInN3aXBlRGlyZWN0aW9uIiwieERpc3QiLCJ5RGlzdCIsInIiLCJzd2lwZUFuZ2xlIiwic3RhcnRYIiwiY3VyWCIsInN0YXJ0WSIsImN1clkiLCJhdGFuMiIsInJvdW5kIiwiUEkiLCJzd2lwZUVuZCIsInN3aXBlTGVuZ3RoIiwiZWRnZUhpdCIsIm1pblN3aXBlIiwiZmluZ2VyQ291bnQiLCJvcmlnaW5hbEV2ZW50IiwidG91Y2hlcyIsInN3aXBlU3RhcnQiLCJzd2lwZU1vdmUiLCJlZGdlV2FzSGl0IiwiY3VyTGVmdCIsInBvc2l0aW9uT2Zmc2V0IiwidmVydGljYWxTd2lwZUxlbmd0aCIsInBhZ2VYIiwiY2xpZW50WCIsInBhZ2VZIiwiY2xpZW50WSIsInVuZmlsdGVyU2xpZGVzIiwic2xpY2tVbmZpbHRlciIsImZyb21CcmVh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QUFELENBQUs4QixLQUEzQixFQUFrQzRhLElBQWxDLENBQU47QUFDSixVQUFJLE9BQU9FLEdBQVAsSUFBYyxXQUFsQixFQUErQixPQUFPQSxHQUFQO0FBQ2xDOztBQUNELFdBQU83WixDQUFQO0FBQ0gsR0FmRDtBQWlCSCxDQWo3RkMsQ0FBRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCRCx3QiIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIvLyBidW5kbGUuanNcclxuaW1wb3J0IFwiLi9jb21wb25lbnRzL2Jhbm5lclwiO1xyXG5pbXBvcnQgXCIuL2NvbXBvbmVudHMvaGVhZGVyXCI7XHJcbmltcG9ydCBcIi4vY29tcG9uZW50cy9zbGljay1jYXJvdXNlbFwiO1xyXG5cclxuY29uc29sZS5sb2coXCIjI2J1bmRsZSMjXCIpO1xyXG4iLCIvLyBCYW5uZXIuanNcclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuXHJcbiQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcbiAgY29uc3Qgd1Njcm9sbCA9ICQodGhpcykuc2Nyb2xsVG9wKCk7XHJcbiAgJCgnLmJhbm5lcl9fY29udGVudCcpLmNzcyh7XHJcbiAgICAndHJhbnNmb3JtJyA6ICd0cmFuc2xhdGUzZCgwcHgsICcrIHdTY3JvbGwgLzMwICsnJSwgMHB4KSdcclxuICB9KTtcclxufSkiLCJpbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XHJcblxyXG4kKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcclxuXHRpZiAoJCh0aGlzKS5zY3JvbGxUb3AoKSA+IDEwMCkge1xyXG5cdFx0JChcIi5oZWFkZXJcIikuYWRkQ2xhc3MoXCJpcy1hY3RpdmVcIik7XHJcblx0XHQkKFwiLmhhbWJ1cmdlciBcIikuYWRkQ2xhc3MoXCJpcy1hY3RpdmVcIik7XHJcblx0fSBlbHNlIHtcclxuXHRcdCQoXCIuaGVhZGVyXCIpLnJlbW92ZUNsYXNzKFwiaXMtYWN0aXZlXCIpO1xyXG5cdFx0JChcIi5oYW1idXJnZXJcIikucmVtb3ZlQ2xhc3MoXCJpcy1hY3RpdmVcIik7XHJcblx0fVxyXG59KTtcclxuXHJcbmNvbnN0IGVhc2UgPSB7XHJcblx0ZXhwb25lbnRpYWxJbjogKHQpID0+IHtcclxuXHRcdHJldHVybiB0ID09IDAuMCA/IHQgOiBNYXRoLnBvdygyLjAsIDEwLjAgKiAodCAtIDEuMCkpO1xyXG5cdH0sXHJcblx0ZXhwb25lbnRpYWxPdXQ6ICh0KSA9PiB7XHJcblx0XHRyZXR1cm4gdCA9PSAxLjAgPyB0IDogMS4wIC0gTWF0aC5wb3coMi4wLCAtMTAuMCAqIHQpO1xyXG5cdH0sXHJcblx0ZXhwb25lbnRpYWxJbk91dDogKHQpID0+IHtcclxuXHRcdHJldHVybiB0ID09IDAuMCB8fCB0ID09IDEuMFxyXG5cdFx0XHQ/IHRcclxuXHRcdFx0OiB0IDwgMC41XHJcblx0XHRcdD8gKzAuNSAqIE1hdGgucG93KDIuMCwgMjAuMCAqIHQgLSAxMC4wKVxyXG5cdFx0XHQ6IC0wLjUgKiBNYXRoLnBvdygyLjAsIDEwLjAgLSB0ICogMjAuMCkgKyAxLjA7XHJcblx0fSxcclxuXHRzaW5lT3V0OiAodCkgPT4ge1xyXG5cdFx0Y29uc3QgSEFMRl9QSSA9IDEuNTcwNzk2MzI2Nzk0ODk2NjtcclxuXHRcdHJldHVybiBNYXRoLnNpbih0ICogSEFMRl9QSSk7XHJcblx0fSxcclxuXHRjaXJjdWxhckluT3V0OiAodCkgPT4ge1xyXG5cdFx0cmV0dXJuIHQgPCAwLjVcclxuXHRcdFx0PyAwLjUgKiAoMS4wIC0gTWF0aC5zcXJ0KDEuMCAtIDQuMCAqIHQgKiB0KSlcclxuXHRcdFx0OiAwLjUgKiAoTWF0aC5zcXJ0KCgzLjAgLSAyLjAgKiB0KSAqICgyLjAgKiB0IC0gMS4wKSkgKyAxLjApO1xyXG5cdH0sXHJcblx0Y3ViaWNJbjogKHQpID0+IHtcclxuXHRcdHJldHVybiB0ICogdCAqIHQ7XHJcblx0fSxcclxuXHRjdWJpY091dDogKHQpID0+IHtcclxuXHRcdGNvbnN0IGYgPSB0IC0gMS4wO1xyXG5cdFx0cmV0dXJuIGYgKiBmICogZiArIDEuMDtcclxuXHR9LFxyXG5cdGN1YmljSW5PdXQ6ICh0KSA9PiB7XHJcblx0XHRyZXR1cm4gdCA8IDAuNSA/IDQuMCAqIHQgKiB0ICogdCA6IDAuNSAqIE1hdGgucG93KDIuMCAqIHQgLSAyLjAsIDMuMCkgKyAxLjA7XHJcblx0fSxcclxuXHRxdWFkcmF0aWNPdXQ6ICh0KSA9PiB7XHJcblx0XHRyZXR1cm4gLXQgKiAodCAtIDIuMCk7XHJcblx0fSxcclxuXHRxdWFydGljT3V0OiAodCkgPT4ge1xyXG5cdFx0cmV0dXJuIE1hdGgucG93KHQgLSAxLjAsIDMuMCkgKiAoMS4wIC0gdCkgKyAxLjA7XHJcblx0fSxcclxufTtcclxuXHJcbmNsYXNzIFNoYXBlT3ZlcmxheXMge1xyXG5cdGNvbnN0cnVjdG9yKGVsbSkge1xyXG5cdFx0dGhpcy5lbG0gPSBlbG07XHJcblx0XHR0aGlzLnBhdGggPSBlbG0ucXVlcnlTZWxlY3RvckFsbChcInBhdGhcIik7XHJcblx0XHR0aGlzLm51bVBvaW50cyA9IDEwO1xyXG5cdFx0dGhpcy5kdXJhdGlvbiA9IDkwMDtcclxuXHRcdHRoaXMuZGVsYXlQb2ludHNBcnJheSA9IFtdO1xyXG5cdFx0dGhpcy5kZWxheVBvaW50c01heCA9IDMwMDtcclxuXHRcdHRoaXMuZGVsYXlQZXJQYXRoID0gMjUwO1xyXG5cdFx0dGhpcy50aW1lU3RhcnQgPSBEYXRlLm5vdygpO1xyXG5cdFx0dGhpcy5pc09wZW5lZCA9IGZhbHNlO1xyXG5cdFx0dGhpcy5pc0FuaW1hdGluZyA9IGZhbHNlO1xyXG5cdH1cclxuXHR0b2dnbGUoKSB7XHJcblx0XHR0aGlzLmlzQW5pbWF0aW5nID0gdHJ1ZTtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5udW1Qb2ludHM7IGkrKykge1xyXG5cdFx0XHR0aGlzLmRlbGF5UG9pbnRzQXJyYXlbaV0gPSBNYXRoLnJhbmRvbSgpICogdGhpcy5kZWxheVBvaW50c01heDtcclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLmlzT3BlbmVkID09PSBmYWxzZSkge1xyXG5cdFx0XHR0aGlzLm9wZW4oKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuY2xvc2UoKTtcclxuXHRcdH1cclxuXHR9XHJcblx0b3BlbigpIHtcclxuXHRcdHRoaXMuaXNPcGVuZWQgPSB0cnVlO1xyXG5cdFx0dGhpcy5lbG0uY2xhc3NMaXN0LmFkZChcImlzLW9wZW5lZFwiKTtcclxuXHRcdHRoaXMudGltZVN0YXJ0ID0gRGF0ZS5ub3coKTtcclxuXHRcdHRoaXMucmVuZGVyTG9vcCgpO1xyXG5cdH1cclxuXHRjbG9zZSgpIHtcclxuXHRcdHRoaXMuaXNPcGVuZWQgPSBmYWxzZTtcclxuXHRcdHRoaXMuZWxtLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1vcGVuZWRcIik7XHJcblx0XHR0aGlzLnRpbWVTdGFydCA9IERhdGUubm93KCk7XHJcblx0XHR0aGlzLnJlbmRlckxvb3AoKTtcclxuXHR9XHJcblx0dXBkYXRlUGF0aCh0aW1lKSB7XHJcblx0XHRjb25zdCBwb2ludHMgPSBbXTtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5udW1Qb2ludHM7IGkrKykge1xyXG5cdFx0XHRwb2ludHNbaV0gPVxyXG5cdFx0XHRcdCgxIC1cclxuXHRcdFx0XHRcdGVhc2UuY3ViaWNJbk91dChcclxuXHRcdFx0XHRcdFx0TWF0aC5taW4oXHJcblx0XHRcdFx0XHRcdFx0TWF0aC5tYXgodGltZSAtIHRoaXMuZGVsYXlQb2ludHNBcnJheVtpXSwgMCkgLyB0aGlzLmR1cmF0aW9uLFxyXG5cdFx0XHRcdFx0XHRcdDFcclxuXHRcdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0KSkgKlxyXG5cdFx0XHRcdDEwMDtcclxuXHRcdH1cclxuXHJcblx0XHRsZXQgc3RyID0gXCJcIjtcclxuXHRcdHN0ciArPSB0aGlzLmlzT3BlbmVkID8gYE0gMCAwIFYgJHtwb2ludHNbMF19YCA6IGBNIDAgJHtwb2ludHNbMF19YDtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5udW1Qb2ludHMgLSAxOyBpKyspIHtcclxuXHRcdFx0Y29uc3QgcCA9ICgoaSArIDEpIC8gKHRoaXMubnVtUG9pbnRzIC0gMSkpICogMTAwO1xyXG5cdFx0XHRjb25zdCBjcCA9IHAgLSAoKDEgLyAodGhpcy5udW1Qb2ludHMgLSAxKSkgKiAxMDApIC8gMjtcclxuXHRcdFx0c3RyICs9IGBDICR7Y3B9ICR7cG9pbnRzW2ldfSAke2NwfSAke3BvaW50c1tpICsgMV19ICR7cH0gJHtcclxuXHRcdFx0XHRwb2ludHNbaSArIDFdXHJcblx0XHRcdH0gYDtcclxuXHRcdH1cclxuXHRcdHN0ciArPSB0aGlzLmlzT3BlbmVkID8gYFYgMTAwIEggMGAgOiBgViAwIEggMGA7XHJcblx0XHRyZXR1cm4gc3RyO1xyXG5cdH1cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRpZiAodGhpcy5pc09wZW5lZCkge1xyXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucGF0aC5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdHRoaXMucGF0aFtpXS5zZXRBdHRyaWJ1dGUoXHJcblx0XHRcdFx0XHRcImRcIixcclxuXHRcdFx0XHRcdHRoaXMudXBkYXRlUGF0aChEYXRlLm5vdygpIC0gKHRoaXMudGltZVN0YXJ0ICsgdGhpcy5kZWxheVBlclBhdGggKiBpKSlcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucGF0aC5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdHRoaXMucGF0aFtpXS5zZXRBdHRyaWJ1dGUoXHJcblx0XHRcdFx0XHRcImRcIixcclxuXHRcdFx0XHRcdHRoaXMudXBkYXRlUGF0aChcclxuXHRcdFx0XHRcdFx0RGF0ZS5ub3coKSAtXHJcblx0XHRcdFx0XHRcdFx0KHRoaXMudGltZVN0YXJ0ICsgdGhpcy5kZWxheVBlclBhdGggKiAodGhpcy5wYXRoLmxlbmd0aCAtIGkgLSAxKSlcclxuXHRcdFx0XHRcdClcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdHJlbmRlckxvb3AoKSB7XHJcblx0XHR0aGlzLnJlbmRlcigpO1xyXG5cdFx0aWYgKFxyXG5cdFx0XHREYXRlLm5vdygpIC0gdGhpcy50aW1lU3RhcnQgPFxyXG5cdFx0XHR0aGlzLmR1cmF0aW9uICtcclxuXHRcdFx0XHR0aGlzLmRlbGF5UGVyUGF0aCAqICh0aGlzLnBhdGgubGVuZ3RoIC0gMSkgK1xyXG5cdFx0XHRcdHRoaXMuZGVsYXlQb2ludHNNYXhcclxuXHRcdCkge1xyXG5cdFx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMucmVuZGVyTG9vcCgpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuaXNBbmltYXRpbmcgPSBmYWxzZTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcblx0Y29uc3QgZWxtQm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xyXG5cdGNvbnN0IGVsbUhhbWJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGFtYnVyZ2VyXCIpO1xyXG5cdGNvbnN0IGdOYXZJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ2xvYmFsLW1lbnVfX2l0ZW1cIik7XHJcblx0Y29uc3QgZWxtT3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hhcGUtb3ZlcmxheXNcIik7XHJcblx0Y29uc3QgZWxtSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJcIik7XHJcblx0Y29uc3Qgb3ZlcmxheSA9IG5ldyBTaGFwZU92ZXJsYXlzKGVsbU92ZXJsYXkpO1xyXG5cclxuXHRlbG1IYW1idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuXHRcdGlmIChvdmVybGF5LmlzQW5pbWF0aW5nKSB7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHRcdG92ZXJsYXkudG9nZ2xlKCk7XHJcblx0XHRpZiAob3ZlcmxheS5pc09wZW5lZCA9PT0gdHJ1ZSkge1xyXG5cdFx0XHRlbG1Cb2R5LmNsYXNzTGlzdC5hZGQoXCJpcy1vcGVuZWQtbmF2aVwiKTtcclxuXHRcdFx0ZWxtSGFtYnVyZ2VyLmNsYXNzTGlzdC5hZGQoXCJpcy1vcGVuZWQtbmF2aVwiKTtcclxuXHRcdFx0ZWxtSGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJpcy1vcGVuZWQtbmF2aVwiKTtcclxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBnTmF2SXRlbXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRnTmF2SXRlbXNbaV0uY2xhc3NMaXN0LmFkZChcImlzLW9wZW5lZFwiKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0ZWxtQm9keS5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtb3BlbmVkLW5hdmlcIik7XHJcblx0XHRcdGVsbUhhbWJ1cmdlci5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtb3BlbmVkLW5hdmlcIik7XHJcblx0XHRcdGVsbUhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtb3BlbmVkLW5hdmlcIik7XHJcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZ05hdkl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0Z05hdkl0ZW1zW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1vcGVuZWRcIik7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9KTtcclxufSkoKTtcclxuIiwiLy8gc2xpZGVyLmpzXHJcbmltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcclxuaW1wb3J0IFwiLi9zbGlja1wiO1xyXG5cclxuJChcIi50ZXN0aW1vbmlhbC1zbGlja1wiKS5zbGljayh7XHJcbiAgZmFkZTogZmFsc2UsXHJcbiAgYXJyb3dzOiBmYWxzZSxcclxuICBkb3RzOiB0cnVlLFxyXG4gIGluZmluaXRlOiB0cnVlLFxyXG4gIHNsaWRlc1RvU2hvdzogMSxcclxuICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICBzcGVlZDogMzAwMCxcclxuICBhdXRvcGxheTogdHJ1ZSxcclxuICBhdXRvcGxheVNwZWVkOiAzMDAwLFxyXG4gIHVzZVRyYW5zZm9ybTogdHJ1ZVxyXG59KTtcclxuIiwiLypcbiAgICAgXyBfICAgICAgXyAgICAgICBfXG4gX19ffCAoXykgX19ffCB8IF9fICAoXylfX19cbi8gX198IHwgfC8gX198IHwvIC8gIHwgLyBfX3xcblxcX18gXFwgfCB8IChfX3wgICA8IF8gfCBcXF9fIFxcXG58X19fL198X3xcXF9fX3xffFxcXyhfKS8gfF9fXy9cbiAgICAgICAgICAgICAgICAgICB8X18vXG5cbiBWZXJzaW9uOiAxLjguMVxuICBBdXRob3I6IEtlbiBXaGVlbGVyXG4gV2Vic2l0ZTogaHR0cDovL2tlbndoZWVsZXIuZ2l0aHViLmlvXG4gICAgRG9jczogaHR0cDovL2tlbndoZWVsZXIuZ2l0aHViLmlvL3NsaWNrXG4gICAgUmVwbzogaHR0cDovL2dpdGh1Yi5jb20va2Vud2hlZWxlci9zbGlja1xuICBJc3N1ZXM6IGh0dHA6Ly9naXRodWIuY29tL2tlbndoZWVsZXIvc2xpY2svaXNzdWVzXG5cbiAqL1xuLyogZ2xvYmFsIHdpbmRvdywgZG9jdW1lbnQsIGRlZmluZSwgalF1ZXJ5LCBzZXRJbnRlcnZhbCwgY2xlYXJJbnRlcnZhbCAqL1xuOyhmdW5jdGlvbihmYWN0b3J5KSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgZGVmaW5lKFsnanF1ZXJ5J10sIGZhY3RvcnkpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKCdqcXVlcnknKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZmFjdG9yeShqUXVlcnkpO1xuICAgIH1cblxufShmdW5jdGlvbigkKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIHZhciBTbGljayA9IHdpbmRvdy5TbGljayB8fCB7fTtcblxuICAgIFNsaWNrID0gKGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBpbnN0YW5jZVVpZCA9IDA7XG5cbiAgICAgICAgZnVuY3Rpb24gU2xpY2soZWxlbWVudCwgc2V0dGluZ3MpIHtcblxuICAgICAgICAgICAgdmFyIF8gPSB0aGlzLCBkYXRhU2V0dGluZ3M7XG5cbiAgICAgICAgICAgIF8uZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICAgICAgYWNjZXNzaWJpbGl0eTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhZGFwdGl2ZUhlaWdodDogZmFsc2UsXG4gICAgICAgICAgICAgICAgYXBwZW5kQXJyb3dzOiAkKGVsZW1lbnQpLFxuICAgICAgICAgICAgICAgIGFwcGVuZERvdHM6ICQoZWxlbWVudCksXG4gICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFzTmF2Rm9yOiBudWxsLFxuICAgICAgICAgICAgICAgIHByZXZBcnJvdzogJzxidXR0b24gY2xhc3M9XCJzbGljay1wcmV2XCIgYXJpYS1sYWJlbD1cIlByZXZpb3VzXCIgdHlwZT1cImJ1dHRvblwiPlByZXZpb3VzPC9idXR0b24+JyxcbiAgICAgICAgICAgICAgICBuZXh0QXJyb3c6ICc8YnV0dG9uIGNsYXNzPVwic2xpY2stbmV4dFwiIGFyaWEtbGFiZWw9XCJOZXh0XCIgdHlwZT1cImJ1dHRvblwiPk5leHQ8L2J1dHRvbj4nLFxuICAgICAgICAgICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBhdXRvcGxheVNwZWVkOiAzMDAwLFxuICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6ICc1MHB4JyxcbiAgICAgICAgICAgICAgICBjc3NFYXNlOiAnZWFzZScsXG4gICAgICAgICAgICAgICAgY3VzdG9tUGFnaW5nOiBmdW5jdGlvbihzbGlkZXIsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICQoJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIC8+JykudGV4dChpICsgMSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkb3RzQ2xhc3M6ICdzbGljay1kb3RzJyxcbiAgICAgICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgZWFzaW5nOiAnbGluZWFyJyxcbiAgICAgICAgICAgICAgICBlZGdlRnJpY3Rpb246IDAuMzUsXG4gICAgICAgICAgICAgICAgZmFkZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgZm9jdXNPblNlbGVjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgZm9jdXNPbkNoYW5nZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgaW5pdGlhbFNsaWRlOiAwLFxuICAgICAgICAgICAgICAgIGxhenlMb2FkOiAnb25kZW1hbmQnLFxuICAgICAgICAgICAgICAgIG1vYmlsZUZpcnN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXG4gICAgICAgICAgICAgICAgcGF1c2VPbkZvY3VzOiB0cnVlLFxuICAgICAgICAgICAgICAgIHBhdXNlT25Eb3RzSG92ZXI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHJlc3BvbmRUbzogJ3dpbmRvdycsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogbnVsbCxcbiAgICAgICAgICAgICAgICByb3dzOiAxLFxuICAgICAgICAgICAgICAgIHJ0bDogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2xpZGU6ICcnLFxuICAgICAgICAgICAgICAgIHNsaWRlc1BlclJvdzogMSxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgc3BlZWQ6IDUwMCxcbiAgICAgICAgICAgICAgICBzd2lwZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzd2lwZVRvU2xpZGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHRvdWNoTW92ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0b3VjaFRocmVzaG9sZDogNSxcbiAgICAgICAgICAgICAgICB1c2VDU1M6IHRydWUsXG4gICAgICAgICAgICAgICAgdXNlVHJhbnNmb3JtOiB0cnVlLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlV2lkdGg6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHZlcnRpY2FsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbFN3aXBpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHdhaXRGb3JBbmltYXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgIHpJbmRleDogMTAwMFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgXy5pbml0aWFscyA9IHtcbiAgICAgICAgICAgICAgICBhbmltYXRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRyYWdnaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBhdXRvUGxheVRpbWVyOiBudWxsLFxuICAgICAgICAgICAgICAgIGN1cnJlbnREaXJlY3Rpb246IDAsXG4gICAgICAgICAgICAgICAgY3VycmVudExlZnQ6IG51bGwsXG4gICAgICAgICAgICAgICAgY3VycmVudFNsaWRlOiAwLFxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogMSxcbiAgICAgICAgICAgICAgICAkZG90czogbnVsbCxcbiAgICAgICAgICAgICAgICBsaXN0V2lkdGg6IG51bGwsXG4gICAgICAgICAgICAgICAgbGlzdEhlaWdodDogbnVsbCxcbiAgICAgICAgICAgICAgICBsb2FkSW5kZXg6IDAsXG4gICAgICAgICAgICAgICAgJG5leHRBcnJvdzogbnVsbCxcbiAgICAgICAgICAgICAgICAkcHJldkFycm93OiBudWxsLFxuICAgICAgICAgICAgICAgIHNjcm9sbGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2xpZGVDb3VudDogbnVsbCxcbiAgICAgICAgICAgICAgICBzbGlkZVdpZHRoOiBudWxsLFxuICAgICAgICAgICAgICAgICRzbGlkZVRyYWNrOiBudWxsLFxuICAgICAgICAgICAgICAgICRzbGlkZXM6IG51bGwsXG4gICAgICAgICAgICAgICAgc2xpZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2xpZGVPZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgc3dpcGVMZWZ0OiBudWxsLFxuICAgICAgICAgICAgICAgIHN3aXBpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICRsaXN0OiBudWxsLFxuICAgICAgICAgICAgICAgIHRvdWNoT2JqZWN0OiB7fSxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1zRW5hYmxlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgdW5zbGlja2VkOiBmYWxzZVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgJC5leHRlbmQoXywgXy5pbml0aWFscyk7XG5cbiAgICAgICAgICAgIF8uYWN0aXZlQnJlYWtwb2ludCA9IG51bGw7XG4gICAgICAgICAgICBfLmFuaW1UeXBlID0gbnVsbDtcbiAgICAgICAgICAgIF8uYW5pbVByb3AgPSBudWxsO1xuICAgICAgICAgICAgXy5icmVha3BvaW50cyA9IFtdO1xuICAgICAgICAgICAgXy5icmVha3BvaW50U2V0dGluZ3MgPSBbXTtcbiAgICAgICAgICAgIF8uY3NzVHJhbnNpdGlvbnMgPSBmYWxzZTtcbiAgICAgICAgICAgIF8uZm9jdXNzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIF8uaW50ZXJydXB0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIF8uaGlkZGVuID0gJ2hpZGRlbic7XG4gICAgICAgICAgICBfLnBhdXNlZCA9IHRydWU7XG4gICAgICAgICAgICBfLnBvc2l0aW9uUHJvcCA9IG51bGw7XG4gICAgICAgICAgICBfLnJlc3BvbmRUbyA9IG51bGw7XG4gICAgICAgICAgICBfLnJvd0NvdW50ID0gMTtcbiAgICAgICAgICAgIF8uc2hvdWxkQ2xpY2sgPSB0cnVlO1xuICAgICAgICAgICAgXy4kc2xpZGVyID0gJChlbGVtZW50KTtcbiAgICAgICAgICAgIF8uJHNsaWRlc0NhY2hlID0gbnVsbDtcbiAgICAgICAgICAgIF8udHJhbnNmb3JtVHlwZSA9IG51bGw7XG4gICAgICAgICAgICBfLnRyYW5zaXRpb25UeXBlID0gbnVsbDtcbiAgICAgICAgICAgIF8udmlzaWJpbGl0eUNoYW5nZSA9ICd2aXNpYmlsaXR5Y2hhbmdlJztcbiAgICAgICAgICAgIF8ud2luZG93V2lkdGggPSAwO1xuICAgICAgICAgICAgXy53aW5kb3dUaW1lciA9IG51bGw7XG5cbiAgICAgICAgICAgIGRhdGFTZXR0aW5ncyA9ICQoZWxlbWVudCkuZGF0YSgnc2xpY2snKSB8fCB7fTtcblxuICAgICAgICAgICAgXy5vcHRpb25zID0gJC5leHRlbmQoe30sIF8uZGVmYXVsdHMsIHNldHRpbmdzLCBkYXRhU2V0dGluZ3MpO1xuXG4gICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IF8ub3B0aW9ucy5pbml0aWFsU2xpZGU7XG5cbiAgICAgICAgICAgIF8ub3JpZ2luYWxTZXR0aW5ncyA9IF8ub3B0aW9ucztcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBkb2N1bWVudC5tb3pIaWRkZW4gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgXy5oaWRkZW4gPSAnbW96SGlkZGVuJztcbiAgICAgICAgICAgICAgICBfLnZpc2liaWxpdHlDaGFuZ2UgPSAnbW96dmlzaWJpbGl0eWNoYW5nZSc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBkb2N1bWVudC53ZWJraXRIaWRkZW4gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgXy5oaWRkZW4gPSAnd2Via2l0SGlkZGVuJztcbiAgICAgICAgICAgICAgICBfLnZpc2liaWxpdHlDaGFuZ2UgPSAnd2Via2l0dmlzaWJpbGl0eWNoYW5nZSc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF8uYXV0b1BsYXkgPSAkLnByb3h5KF8uYXV0b1BsYXksIF8pO1xuICAgICAgICAgICAgXy5hdXRvUGxheUNsZWFyID0gJC5wcm94eShfLmF1dG9QbGF5Q2xlYXIsIF8pO1xuICAgICAgICAgICAgXy5hdXRvUGxheUl0ZXJhdG9yID0gJC5wcm94eShfLmF1dG9QbGF5SXRlcmF0b3IsIF8pO1xuICAgICAgICAgICAgXy5jaGFuZ2VTbGlkZSA9ICQucHJveHkoXy5jaGFuZ2VTbGlkZSwgXyk7XG4gICAgICAgICAgICBfLmNsaWNrSGFuZGxlciA9ICQucHJveHkoXy5jbGlja0hhbmRsZXIsIF8pO1xuICAgICAgICAgICAgXy5zZWxlY3RIYW5kbGVyID0gJC5wcm94eShfLnNlbGVjdEhhbmRsZXIsIF8pO1xuICAgICAgICAgICAgXy5zZXRQb3NpdGlvbiA9ICQucHJveHkoXy5zZXRQb3NpdGlvbiwgXyk7XG4gICAgICAgICAgICBfLnN3aXBlSGFuZGxlciA9ICQucHJveHkoXy5zd2lwZUhhbmRsZXIsIF8pO1xuICAgICAgICAgICAgXy5kcmFnSGFuZGxlciA9ICQucHJveHkoXy5kcmFnSGFuZGxlciwgXyk7XG4gICAgICAgICAgICBfLmtleUhhbmRsZXIgPSAkLnByb3h5KF8ua2V5SGFuZGxlciwgXyk7XG5cbiAgICAgICAgICAgIF8uaW5zdGFuY2VVaWQgPSBpbnN0YW5jZVVpZCsrO1xuXG4gICAgICAgICAgICAvLyBBIHNpbXBsZSB3YXkgdG8gY2hlY2sgZm9yIEhUTUwgc3RyaW5nc1xuICAgICAgICAgICAgLy8gU3RyaWN0IEhUTUwgcmVjb2duaXRpb24gKG11c3Qgc3RhcnQgd2l0aCA8KVxuICAgICAgICAgICAgLy8gRXh0cmFjdGVkIGZyb20galF1ZXJ5IHYxLjExIHNvdXJjZVxuICAgICAgICAgICAgXy5odG1sRXhwciA9IC9eKD86XFxzKig8W1xcd1xcV10rPilbXj5dKikkLztcblxuXG4gICAgICAgICAgICBfLnJlZ2lzdGVyQnJlYWtwb2ludHMoKTtcbiAgICAgICAgICAgIF8uaW5pdCh0cnVlKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFNsaWNrO1xuXG4gICAgfSgpKTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hY3RpdmF0ZUFEQSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy4kc2xpZGVUcmFjay5maW5kKCcuc2xpY2stYWN0aXZlJykuYXR0cih7XG4gICAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAnZmFsc2UnXG4gICAgICAgIH0pLmZpbmQoJ2EsIGlucHV0LCBidXR0b24sIHNlbGVjdCcpLmF0dHIoe1xuICAgICAgICAgICAgJ3RhYmluZGV4JzogJzAnXG4gICAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hZGRTbGlkZSA9IFNsaWNrLnByb3RvdHlwZS5zbGlja0FkZCA9IGZ1bmN0aW9uKG1hcmt1cCwgaW5kZXgsIGFkZEJlZm9yZSkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAodHlwZW9mKGluZGV4KSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICBhZGRCZWZvcmUgPSBpbmRleDtcbiAgICAgICAgICAgIGluZGV4ID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA8IDAgfHwgKGluZGV4ID49IF8uc2xpZGVDb3VudCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8udW5sb2FkKCk7XG5cbiAgICAgICAgaWYgKHR5cGVvZihpbmRleCkgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IDAgJiYgXy4kc2xpZGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICQobWFya3VwKS5hcHBlbmRUbyhfLiRzbGlkZVRyYWNrKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYWRkQmVmb3JlKSB7XG4gICAgICAgICAgICAgICAgJChtYXJrdXApLmluc2VydEJlZm9yZShfLiRzbGlkZXMuZXEoaW5kZXgpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChtYXJrdXApLmluc2VydEFmdGVyKF8uJHNsaWRlcy5lcShpbmRleCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGFkZEJlZm9yZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICQobWFya3VwKS5wcmVwZW5kVG8oXy4kc2xpZGVUcmFjayk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQobWFya3VwKS5hcHBlbmRUbyhfLiRzbGlkZVRyYWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIF8uJHNsaWRlcyA9IF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKTtcblxuICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZGV0YWNoKCk7XG5cbiAgICAgICAgXy4kc2xpZGVUcmFjay5hcHBlbmQoXy4kc2xpZGVzKTtcblxuICAgICAgICBfLiRzbGlkZXMuZWFjaChmdW5jdGlvbihpbmRleCwgZWxlbWVudCkge1xuICAgICAgICAgICAgJChlbGVtZW50KS5hdHRyKCdkYXRhLXNsaWNrLWluZGV4JywgaW5kZXgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBfLiRzbGlkZXNDYWNoZSA9IF8uJHNsaWRlcztcblxuICAgICAgICBfLnJlaW5pdCgpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hbmltYXRlSGVpZ2h0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBfID0gdGhpcztcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPT09IDEgJiYgXy5vcHRpb25zLmFkYXB0aXZlSGVpZ2h0ID09PSB0cnVlICYmIF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXRIZWlnaHQgPSBfLiRzbGlkZXMuZXEoXy5jdXJyZW50U2xpZGUpLm91dGVySGVpZ2h0KHRydWUpO1xuICAgICAgICAgICAgXy4kbGlzdC5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHRhcmdldEhlaWdodFxuICAgICAgICAgICAgfSwgXy5vcHRpb25zLnNwZWVkKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYW5pbWF0ZVNsaWRlID0gZnVuY3Rpb24odGFyZ2V0TGVmdCwgY2FsbGJhY2spIHtcblxuICAgICAgICB2YXIgYW5pbVByb3BzID0ge30sXG4gICAgICAgICAgICBfID0gdGhpcztcblxuICAgICAgICBfLmFuaW1hdGVIZWlnaHQoKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0YXJnZXRMZWZ0ID0gLXRhcmdldExlZnQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF8udHJhbnNmb3Jtc0VuYWJsZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IHRhcmdldExlZnRcbiAgICAgICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQsIF8ub3B0aW9ucy5lYXNpbmcsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiB0YXJnZXRMZWZ0XG4gICAgICAgICAgICAgICAgfSwgXy5vcHRpb25zLnNwZWVkLCBfLm9wdGlvbnMuZWFzaW5nLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgaWYgKF8uY3NzVHJhbnNpdGlvbnMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5ydGwgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50TGVmdCA9IC0oXy5jdXJyZW50TGVmdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICQoe1xuICAgICAgICAgICAgICAgICAgICBhbmltU3RhcnQ6IF8uY3VycmVudExlZnRcbiAgICAgICAgICAgICAgICB9KS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbVN0YXJ0OiB0YXJnZXRMZWZ0XG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogXy5vcHRpb25zLnNwZWVkLFxuICAgICAgICAgICAgICAgICAgICBlYXNpbmc6IF8ub3B0aW9ucy5lYXNpbmcsXG4gICAgICAgICAgICAgICAgICAgIHN0ZXA6IGZ1bmN0aW9uKG5vdykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm93ID0gTWF0aC5jZWlsKG5vdyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1Qcm9wc1tfLmFuaW1UeXBlXSA9ICd0cmFuc2xhdGUoJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdyArICdweCwgMHB4KSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3MoYW5pbVByb3BzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbVByb3BzW18uYW5pbVR5cGVdID0gJ3RyYW5zbGF0ZSgwcHgsJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdyArICdweCknO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKGFuaW1Qcm9wcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgXy5hcHBseVRyYW5zaXRpb24oKTtcbiAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gTWF0aC5jZWlsKHRhcmdldExlZnQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbVByb3BzW18uYW5pbVR5cGVdID0gJ3RyYW5zbGF0ZTNkKCcgKyB0YXJnZXRMZWZ0ICsgJ3B4LCAwcHgsIDBweCknO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1Qcm9wc1tfLmFuaW1UeXBlXSA9ICd0cmFuc2xhdGUzZCgwcHgsJyArIHRhcmdldExlZnQgKyAncHgsIDBweCknO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyhhbmltUHJvcHMpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIF8uZGlzYWJsZVRyYW5zaXRpb24oKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCgpO1xuICAgICAgICAgICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZ2V0TmF2VGFyZ2V0ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgYXNOYXZGb3IgPSBfLm9wdGlvbnMuYXNOYXZGb3I7XG5cbiAgICAgICAgaWYgKCBhc05hdkZvciAmJiBhc05hdkZvciAhPT0gbnVsbCApIHtcbiAgICAgICAgICAgIGFzTmF2Rm9yID0gJChhc05hdkZvcikubm90KF8uJHNsaWRlcik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXNOYXZGb3I7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmFzTmF2Rm9yID0gZnVuY3Rpb24oaW5kZXgpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBhc05hdkZvciA9IF8uZ2V0TmF2VGFyZ2V0KCk7XG5cbiAgICAgICAgaWYgKCBhc05hdkZvciAhPT0gbnVsbCAmJiB0eXBlb2YgYXNOYXZGb3IgPT09ICdvYmplY3QnICkge1xuICAgICAgICAgICAgYXNOYXZGb3IuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gJCh0aGlzKS5zbGljaygnZ2V0U2xpY2snKTtcbiAgICAgICAgICAgICAgICBpZighdGFyZ2V0LnVuc2xpY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQuc2xpZGVIYW5kbGVyKGluZGV4LCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hcHBseVRyYW5zaXRpb24gPSBmdW5jdGlvbihzbGlkZSkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIHRyYW5zaXRpb24gPSB7fTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uW18udHJhbnNpdGlvblR5cGVdID0gXy50cmFuc2Zvcm1UeXBlICsgJyAnICsgXy5vcHRpb25zLnNwZWVkICsgJ21zICcgKyBfLm9wdGlvbnMuY3NzRWFzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb25bXy50cmFuc2l0aW9uVHlwZV0gPSAnb3BhY2l0eSAnICsgXy5vcHRpb25zLnNwZWVkICsgJ21zICcgKyBfLm9wdGlvbnMuY3NzRWFzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKHRyYW5zaXRpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKHNsaWRlKS5jc3ModHJhbnNpdGlvbik7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYXV0b1BsYXkgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5hdXRvUGxheUNsZWFyKCk7XG5cbiAgICAgICAgaWYgKCBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICkge1xuICAgICAgICAgICAgXy5hdXRvUGxheVRpbWVyID0gc2V0SW50ZXJ2YWwoIF8uYXV0b1BsYXlJdGVyYXRvciwgXy5vcHRpb25zLmF1dG9wbGF5U3BlZWQgKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hdXRvUGxheUNsZWFyID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLmF1dG9QbGF5VGltZXIpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoXy5hdXRvUGxheVRpbWVyKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hdXRvUGxheUl0ZXJhdG9yID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgc2xpZGVUbyA9IF8uY3VycmVudFNsaWRlICsgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuXG4gICAgICAgIGlmICggIV8ucGF1c2VkICYmICFfLmludGVycnVwdGVkICYmICFfLmZvY3Vzc2VkICkge1xuXG4gICAgICAgICAgICBpZiAoIF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gZmFsc2UgKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoIF8uZGlyZWN0aW9uID09PSAxICYmICggXy5jdXJyZW50U2xpZGUgKyAxICkgPT09ICggXy5zbGlkZUNvdW50IC0gMSApKSB7XG4gICAgICAgICAgICAgICAgICAgIF8uZGlyZWN0aW9uID0gMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBlbHNlIGlmICggXy5kaXJlY3Rpb24gPT09IDAgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgc2xpZGVUbyA9IF8uY3VycmVudFNsaWRlIC0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICggXy5jdXJyZW50U2xpZGUgLSAxID09PSAwICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5kaXJlY3Rpb24gPSAxO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXy5zbGlkZUhhbmRsZXIoIHNsaWRlVG8gKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmJ1aWxkQXJyb3dzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYXJyb3dzID09PSB0cnVlICkge1xuXG4gICAgICAgICAgICBfLiRwcmV2QXJyb3cgPSAkKF8ub3B0aW9ucy5wcmV2QXJyb3cpLmFkZENsYXNzKCdzbGljay1hcnJvdycpO1xuICAgICAgICAgICAgXy4kbmV4dEFycm93ID0gJChfLm9wdGlvbnMubmV4dEFycm93KS5hZGRDbGFzcygnc2xpY2stYXJyb3cnKTtcblxuICAgICAgICAgICAgaWYoIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKSB7XG5cbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cucmVtb3ZlQ2xhc3MoJ3NsaWNrLWhpZGRlbicpLnJlbW92ZUF0dHIoJ2FyaWEtaGlkZGVuIHRhYmluZGV4Jyk7XG4gICAgICAgICAgICAgICAgXy4kbmV4dEFycm93LnJlbW92ZUNsYXNzKCdzbGljay1oaWRkZW4nKS5yZW1vdmVBdHRyKCdhcmlhLWhpZGRlbiB0YWJpbmRleCcpO1xuXG4gICAgICAgICAgICAgICAgaWYgKF8uaHRtbEV4cHIudGVzdChfLm9wdGlvbnMucHJldkFycm93KSkge1xuICAgICAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cucHJlcGVuZFRvKF8ub3B0aW9ucy5hcHBlbmRBcnJvd3MpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChfLmh0bWxFeHByLnRlc3QoXy5vcHRpb25zLm5leHRBcnJvdykpIHtcbiAgICAgICAgICAgICAgICAgICAgXy4kbmV4dEFycm93LmFwcGVuZFRvKF8ub3B0aW9ucy5hcHBlbmRBcnJvd3MpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgIT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgXy4kcHJldkFycm93XG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ3RydWUnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cuYWRkKCBfLiRuZXh0QXJyb3cgKVxuXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2staGlkZGVuJylcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoe1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2FyaWEtZGlzYWJsZWQnOiAndHJ1ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAndGFiaW5kZXgnOiAnLTEnXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5idWlsZERvdHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBpLCBkb3Q7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5kb3RzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgXy4kc2xpZGVyLmFkZENsYXNzKCdzbGljay1kb3R0ZWQnKTtcblxuICAgICAgICAgICAgZG90ID0gJCgnPHVsIC8+JykuYWRkQ2xhc3MoXy5vcHRpb25zLmRvdHNDbGFzcyk7XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPD0gXy5nZXREb3RDb3VudCgpOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBkb3QuYXBwZW5kKCQoJzxsaSAvPicpLmFwcGVuZChfLm9wdGlvbnMuY3VzdG9tUGFnaW5nLmNhbGwodGhpcywgXywgaSkpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXy4kZG90cyA9IGRvdC5hcHBlbmRUbyhfLm9wdGlvbnMuYXBwZW5kRG90cyk7XG5cbiAgICAgICAgICAgIF8uJGRvdHMuZmluZCgnbGknKS5maXJzdCgpLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmJ1aWxkT3V0ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uJHNsaWRlcyA9XG4gICAgICAgICAgICBfLiRzbGlkZXJcbiAgICAgICAgICAgICAgICAuY2hpbGRyZW4oIF8ub3B0aW9ucy5zbGlkZSArICc6bm90KC5zbGljay1jbG9uZWQpJylcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLXNsaWRlJyk7XG5cbiAgICAgICAgXy5zbGlkZUNvdW50ID0gXy4kc2xpZGVzLmxlbmd0aDtcblxuICAgICAgICBfLiRzbGlkZXMuZWFjaChmdW5jdGlvbihpbmRleCwgZWxlbWVudCkge1xuICAgICAgICAgICAgJChlbGVtZW50KVxuICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLXNsaWNrLWluZGV4JywgaW5kZXgpXG4gICAgICAgICAgICAgICAgLmRhdGEoJ29yaWdpbmFsU3R5bGluZycsICQoZWxlbWVudCkuYXR0cignc3R5bGUnKSB8fCAnJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIF8uJHNsaWRlci5hZGRDbGFzcygnc2xpY2stc2xpZGVyJyk7XG5cbiAgICAgICAgXy4kc2xpZGVUcmFjayA9IChfLnNsaWRlQ291bnQgPT09IDApID9cbiAgICAgICAgICAgICQoJzxkaXYgY2xhc3M9XCJzbGljay10cmFja1wiLz4nKS5hcHBlbmRUbyhfLiRzbGlkZXIpIDpcbiAgICAgICAgICAgIF8uJHNsaWRlcy53cmFwQWxsKCc8ZGl2IGNsYXNzPVwic2xpY2stdHJhY2tcIi8+JykucGFyZW50KCk7XG5cbiAgICAgICAgXy4kbGlzdCA9IF8uJHNsaWRlVHJhY2sud3JhcChcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwic2xpY2stbGlzdFwiLz4nKS5wYXJlbnQoKTtcbiAgICAgICAgXy4kc2xpZGVUcmFjay5jc3MoJ29wYWNpdHknLCAwKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUgfHwgXy5vcHRpb25zLnN3aXBlVG9TbGlkZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsID0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgICQoJ2ltZ1tkYXRhLWxhenldJywgXy4kc2xpZGVyKS5ub3QoJ1tzcmNdJykuYWRkQ2xhc3MoJ3NsaWNrLWxvYWRpbmcnKTtcblxuICAgICAgICBfLnNldHVwSW5maW5pdGUoKTtcblxuICAgICAgICBfLmJ1aWxkQXJyb3dzKCk7XG5cbiAgICAgICAgXy5idWlsZERvdHMoKTtcblxuICAgICAgICBfLnVwZGF0ZURvdHMoKTtcblxuXG4gICAgICAgIF8uc2V0U2xpZGVDbGFzc2VzKHR5cGVvZiBfLmN1cnJlbnRTbGlkZSA9PT0gJ251bWJlcicgPyBfLmN1cnJlbnRTbGlkZSA6IDApO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZHJhZ2dhYmxlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLiRsaXN0LmFkZENsYXNzKCdkcmFnZ2FibGUnKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5idWlsZFJvd3MgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsIGEsIGIsIGMsIG5ld1NsaWRlcywgbnVtT2ZTbGlkZXMsIG9yaWdpbmFsU2xpZGVzLHNsaWRlc1BlclNlY3Rpb247XG5cbiAgICAgICAgbmV3U2xpZGVzID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgICBvcmlnaW5hbFNsaWRlcyA9IF8uJHNsaWRlci5jaGlsZHJlbigpO1xuXG4gICAgICAgIGlmKF8ub3B0aW9ucy5yb3dzID4gMCkge1xuXG4gICAgICAgICAgICBzbGlkZXNQZXJTZWN0aW9uID0gXy5vcHRpb25zLnNsaWRlc1BlclJvdyAqIF8ub3B0aW9ucy5yb3dzO1xuICAgICAgICAgICAgbnVtT2ZTbGlkZXMgPSBNYXRoLmNlaWwoXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxTbGlkZXMubGVuZ3RoIC8gc2xpZGVzUGVyU2VjdGlvblxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgZm9yKGEgPSAwOyBhIDwgbnVtT2ZTbGlkZXM7IGErKyl7XG4gICAgICAgICAgICAgICAgdmFyIHNsaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZm9yKGIgPSAwOyBiIDwgXy5vcHRpb25zLnJvd3M7IGIrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIGZvcihjID0gMDsgYyA8IF8ub3B0aW9ucy5zbGlkZXNQZXJSb3c7IGMrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IChhICogc2xpZGVzUGVyU2VjdGlvbiArICgoYiAqIF8ub3B0aW9ucy5zbGlkZXNQZXJSb3cpICsgYykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9yaWdpbmFsU2xpZGVzLmdldCh0YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKG9yaWdpbmFsU2xpZGVzLmdldCh0YXJnZXQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzbGlkZS5hcHBlbmRDaGlsZChyb3cpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBuZXdTbGlkZXMuYXBwZW5kQ2hpbGQoc2xpZGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfLiRzbGlkZXIuZW1wdHkoKS5hcHBlbmQobmV3U2xpZGVzKTtcbiAgICAgICAgICAgIF8uJHNsaWRlci5jaGlsZHJlbigpLmNoaWxkcmVuKCkuY2hpbGRyZW4oKVxuICAgICAgICAgICAgICAgIC5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAnd2lkdGgnOigxMDAgLyBfLm9wdGlvbnMuc2xpZGVzUGVyUm93KSArICclJyxcbiAgICAgICAgICAgICAgICAgICAgJ2Rpc3BsYXknOiAnaW5saW5lLWJsb2NrJ1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuY2hlY2tSZXNwb25zaXZlID0gZnVuY3Rpb24oaW5pdGlhbCwgZm9yY2VVcGRhdGUpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBicmVha3BvaW50LCB0YXJnZXRCcmVha3BvaW50LCByZXNwb25kVG9XaWR0aCwgdHJpZ2dlckJyZWFrcG9pbnQgPSBmYWxzZTtcbiAgICAgICAgdmFyIHNsaWRlcldpZHRoID0gXy4kc2xpZGVyLndpZHRoKCk7XG4gICAgICAgIHZhciB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIHx8ICQod2luZG93KS53aWR0aCgpO1xuXG4gICAgICAgIGlmIChfLnJlc3BvbmRUbyA9PT0gJ3dpbmRvdycpIHtcbiAgICAgICAgICAgIHJlc3BvbmRUb1dpZHRoID0gd2luZG93V2lkdGg7XG4gICAgICAgIH0gZWxzZSBpZiAoXy5yZXNwb25kVG8gPT09ICdzbGlkZXInKSB7XG4gICAgICAgICAgICByZXNwb25kVG9XaWR0aCA9IHNsaWRlcldpZHRoO1xuICAgICAgICB9IGVsc2UgaWYgKF8ucmVzcG9uZFRvID09PSAnbWluJykge1xuICAgICAgICAgICAgcmVzcG9uZFRvV2lkdGggPSBNYXRoLm1pbih3aW5kb3dXaWR0aCwgc2xpZGVyV2lkdGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBfLm9wdGlvbnMucmVzcG9uc2l2ZSAmJlxuICAgICAgICAgICAgXy5vcHRpb25zLnJlc3BvbnNpdmUubGVuZ3RoICYmXG4gICAgICAgICAgICBfLm9wdGlvbnMucmVzcG9uc2l2ZSAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICB0YXJnZXRCcmVha3BvaW50ID0gbnVsbDtcblxuICAgICAgICAgICAgZm9yIChicmVha3BvaW50IGluIF8uYnJlYWtwb2ludHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoXy5icmVha3BvaW50cy5oYXNPd25Qcm9wZXJ0eShicmVha3BvaW50KSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoXy5vcmlnaW5hbFNldHRpbmdzLm1vYmlsZUZpcnN0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbmRUb1dpZHRoIDwgXy5icmVha3BvaW50c1ticmVha3BvaW50XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEJyZWFrcG9pbnQgPSBfLmJyZWFrcG9pbnRzW2JyZWFrcG9pbnRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbmRUb1dpZHRoID4gXy5icmVha3BvaW50c1ticmVha3BvaW50XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEJyZWFrcG9pbnQgPSBfLmJyZWFrcG9pbnRzW2JyZWFrcG9pbnRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGFyZ2V0QnJlYWtwb2ludCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmIChfLmFjdGl2ZUJyZWFrcG9pbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldEJyZWFrcG9pbnQgIT09IF8uYWN0aXZlQnJlYWtwb2ludCB8fCBmb3JjZVVwZGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5hY3RpdmVCcmVha3BvaW50ID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRCcmVha3BvaW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF8uYnJlYWtwb2ludFNldHRpbmdzW3RhcmdldEJyZWFrcG9pbnRdID09PSAndW5zbGljaycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLnVuc2xpY2sodGFyZ2V0QnJlYWtwb2ludCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBfLm9yaWdpbmFsU2V0dGluZ3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uYnJlYWtwb2ludFNldHRpbmdzW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0QnJlYWtwb2ludF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbml0aWFsID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gXy5vcHRpb25zLmluaXRpYWxTbGlkZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5yZWZyZXNoKGluaXRpYWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlckJyZWFrcG9pbnQgPSB0YXJnZXRCcmVha3BvaW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgXy5hY3RpdmVCcmVha3BvaW50ID0gdGFyZ2V0QnJlYWtwb2ludDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF8uYnJlYWtwb2ludFNldHRpbmdzW3RhcmdldEJyZWFrcG9pbnRdID09PSAndW5zbGljaycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8udW5zbGljayh0YXJnZXRCcmVha3BvaW50KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBfLm9yaWdpbmFsU2V0dGluZ3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5icmVha3BvaW50U2V0dGluZ3NbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEJyZWFrcG9pbnRdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbml0aWFsID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSBfLm9wdGlvbnMuaW5pdGlhbFNsaWRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXy5yZWZyZXNoKGluaXRpYWwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXJCcmVha3BvaW50ID0gdGFyZ2V0QnJlYWtwb2ludDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChfLmFjdGl2ZUJyZWFrcG9pbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgXy5hY3RpdmVCcmVha3BvaW50ID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zID0gXy5vcmlnaW5hbFNldHRpbmdzO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5pdGlhbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSBfLm9wdGlvbnMuaW5pdGlhbFNsaWRlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF8ucmVmcmVzaChpbml0aWFsKTtcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlckJyZWFrcG9pbnQgPSB0YXJnZXRCcmVha3BvaW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gb25seSB0cmlnZ2VyIGJyZWFrcG9pbnRzIGR1cmluZyBhbiBhY3R1YWwgYnJlYWsuIG5vdCBvbiBpbml0aWFsaXplLlxuICAgICAgICAgICAgaWYoICFpbml0aWFsICYmIHRyaWdnZXJCcmVha3BvaW50ICE9PSBmYWxzZSApIHtcbiAgICAgICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignYnJlYWtwb2ludCcsIFtfLCB0cmlnZ2VyQnJlYWtwb2ludF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmNoYW5nZVNsaWRlID0gZnVuY3Rpb24oZXZlbnQsIGRvbnRBbmltYXRlKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgJHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCksXG4gICAgICAgICAgICBpbmRleE9mZnNldCwgc2xpZGVPZmZzZXQsIHVuZXZlbk9mZnNldDtcblxuICAgICAgICAvLyBJZiB0YXJnZXQgaXMgYSBsaW5rLCBwcmV2ZW50IGRlZmF1bHQgYWN0aW9uLlxuICAgICAgICBpZigkdGFyZ2V0LmlzKCdhJykpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB0YXJnZXQgaXMgbm90IHRoZSA8bGk+IGVsZW1lbnQgKGllOiBhIGNoaWxkKSwgZmluZCB0aGUgPGxpPi5cbiAgICAgICAgaWYoISR0YXJnZXQuaXMoJ2xpJykpIHtcbiAgICAgICAgICAgICR0YXJnZXQgPSAkdGFyZ2V0LmNsb3Nlc3QoJ2xpJyk7XG4gICAgICAgIH1cblxuICAgICAgICB1bmV2ZW5PZmZzZXQgPSAoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICE9PSAwKTtcbiAgICAgICAgaW5kZXhPZmZzZXQgPSB1bmV2ZW5PZmZzZXQgPyAwIDogKF8uc2xpZGVDb3VudCAtIF8uY3VycmVudFNsaWRlKSAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcblxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmRhdGEubWVzc2FnZSkge1xuXG4gICAgICAgICAgICBjYXNlICdwcmV2aW91cyc6XG4gICAgICAgICAgICAgICAgc2xpZGVPZmZzZXQgPSBpbmRleE9mZnNldCA9PT0gMCA/IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA6IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLSBpbmRleE9mZnNldDtcbiAgICAgICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgICAgICAgICBfLnNsaWRlSGFuZGxlcihfLmN1cnJlbnRTbGlkZSAtIHNsaWRlT2Zmc2V0LCBmYWxzZSwgZG9udEFuaW1hdGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnbmV4dCc6XG4gICAgICAgICAgICAgICAgc2xpZGVPZmZzZXQgPSBpbmRleE9mZnNldCA9PT0gMCA/IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA6IGluZGV4T2Zmc2V0O1xuICAgICAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAgICAgICAgIF8uc2xpZGVIYW5kbGVyKF8uY3VycmVudFNsaWRlICsgc2xpZGVPZmZzZXQsIGZhbHNlLCBkb250QW5pbWF0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdpbmRleCc6XG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gZXZlbnQuZGF0YS5pbmRleCA9PT0gMCA/IDAgOlxuICAgICAgICAgICAgICAgICAgICBldmVudC5kYXRhLmluZGV4IHx8ICR0YXJnZXQuaW5kZXgoKSAqIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcblxuICAgICAgICAgICAgICAgIF8uc2xpZGVIYW5kbGVyKF8uY2hlY2tOYXZpZ2FibGUoaW5kZXgpLCBmYWxzZSwgZG9udEFuaW1hdGUpO1xuICAgICAgICAgICAgICAgICR0YXJnZXQuY2hpbGRyZW4oKS50cmlnZ2VyKCdmb2N1cycpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5jaGVja05hdmlnYWJsZSA9IGZ1bmN0aW9uKGluZGV4KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgbmF2aWdhYmxlcywgcHJldk5hdmlnYWJsZTtcblxuICAgICAgICBuYXZpZ2FibGVzID0gXy5nZXROYXZpZ2FibGVJbmRleGVzKCk7XG4gICAgICAgIHByZXZOYXZpZ2FibGUgPSAwO1xuICAgICAgICBpZiAoaW5kZXggPiBuYXZpZ2FibGVzW25hdmlnYWJsZXMubGVuZ3RoIC0gMV0pIHtcbiAgICAgICAgICAgIGluZGV4ID0gbmF2aWdhYmxlc1tuYXZpZ2FibGVzLmxlbmd0aCAtIDFdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yICh2YXIgbiBpbiBuYXZpZ2FibGVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4IDwgbmF2aWdhYmxlc1tuXSkge1xuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IHByZXZOYXZpZ2FibGU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwcmV2TmF2aWdhYmxlID0gbmF2aWdhYmxlc1tuXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmNsZWFuVXBFdmVudHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5kb3RzICYmIF8uJGRvdHMgIT09IG51bGwpIHtcblxuICAgICAgICAgICAgJCgnbGknLCBfLiRkb3RzKVxuICAgICAgICAgICAgICAgIC5vZmYoJ2NsaWNrLnNsaWNrJywgXy5jaGFuZ2VTbGlkZSlcbiAgICAgICAgICAgICAgICAub2ZmKCdtb3VzZWVudGVyLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgdHJ1ZSkpXG4gICAgICAgICAgICAgICAgLm9mZignbW91c2VsZWF2ZS5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIGZhbHNlKSk7XG5cbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uJGRvdHMub2ZmKCdrZXlkb3duLnNsaWNrJywgXy5rZXlIYW5kbGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIF8uJHNsaWRlci5vZmYoJ2ZvY3VzLnNsaWNrIGJsdXIuc2xpY2snKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmFycm93cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICBfLiRwcmV2QXJyb3cgJiYgXy4kcHJldkFycm93Lm9mZignY2xpY2suc2xpY2snLCBfLmNoYW5nZVNsaWRlKTtcbiAgICAgICAgICAgIF8uJG5leHRBcnJvdyAmJiBfLiRuZXh0QXJyb3cub2ZmKCdjbGljay5zbGljaycsIF8uY2hhbmdlU2xpZGUpO1xuXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cgJiYgXy4kcHJldkFycm93Lm9mZigna2V5ZG93bi5zbGljaycsIF8ua2V5SGFuZGxlcik7XG4gICAgICAgICAgICAgICAgXy4kbmV4dEFycm93ICYmIF8uJG5leHRBcnJvdy5vZmYoJ2tleWRvd24uc2xpY2snLCBfLmtleUhhbmRsZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgXy4kbGlzdC5vZmYoJ3RvdWNoc3RhcnQuc2xpY2sgbW91c2Vkb3duLnNsaWNrJywgXy5zd2lwZUhhbmRsZXIpO1xuICAgICAgICBfLiRsaXN0Lm9mZigndG91Y2htb3ZlLnNsaWNrIG1vdXNlbW92ZS5zbGljaycsIF8uc3dpcGVIYW5kbGVyKTtcbiAgICAgICAgXy4kbGlzdC5vZmYoJ3RvdWNoZW5kLnNsaWNrIG1vdXNldXAuc2xpY2snLCBfLnN3aXBlSGFuZGxlcik7XG4gICAgICAgIF8uJGxpc3Qub2ZmKCd0b3VjaGNhbmNlbC5zbGljayBtb3VzZWxlYXZlLnNsaWNrJywgXy5zd2lwZUhhbmRsZXIpO1xuXG4gICAgICAgIF8uJGxpc3Qub2ZmKCdjbGljay5zbGljaycsIF8uY2xpY2tIYW5kbGVyKTtcblxuICAgICAgICAkKGRvY3VtZW50KS5vZmYoXy52aXNpYmlsaXR5Q2hhbmdlLCBfLnZpc2liaWxpdHkpO1xuXG4gICAgICAgIF8uY2xlYW5VcFNsaWRlRXZlbnRzKCk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLiRsaXN0Lm9mZigna2V5ZG93bi5zbGljaycsIF8ua2V5SGFuZGxlcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZvY3VzT25TZWxlY3QgPT09IHRydWUpIHtcbiAgICAgICAgICAgICQoXy4kc2xpZGVUcmFjaykuY2hpbGRyZW4oKS5vZmYoJ2NsaWNrLnNsaWNrJywgXy5zZWxlY3RIYW5kbGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgICQod2luZG93KS5vZmYoJ29yaWVudGF0aW9uY2hhbmdlLnNsaWNrLnNsaWNrLScgKyBfLmluc3RhbmNlVWlkLCBfLm9yaWVudGF0aW9uQ2hhbmdlKTtcblxuICAgICAgICAkKHdpbmRvdykub2ZmKCdyZXNpemUuc2xpY2suc2xpY2stJyArIF8uaW5zdGFuY2VVaWQsIF8ucmVzaXplKTtcblxuICAgICAgICAkKCdbZHJhZ2dhYmxlIT10cnVlXScsIF8uJHNsaWRlVHJhY2spLm9mZignZHJhZ3N0YXJ0JywgXy5wcmV2ZW50RGVmYXVsdCk7XG5cbiAgICAgICAgJCh3aW5kb3cpLm9mZignbG9hZC5zbGljay5zbGljay0nICsgXy5pbnN0YW5jZVVpZCwgXy5zZXRQb3NpdGlvbik7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmNsZWFuVXBTbGlkZUV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLiRsaXN0Lm9mZignbW91c2VlbnRlci5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIHRydWUpKTtcbiAgICAgICAgXy4kbGlzdC5vZmYoJ21vdXNlbGVhdmUuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCBmYWxzZSkpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5jbGVhblVwUm93cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcywgb3JpZ2luYWxTbGlkZXM7XG5cbiAgICAgICAgaWYoXy5vcHRpb25zLnJvd3MgPiAwKSB7XG4gICAgICAgICAgICBvcmlnaW5hbFNsaWRlcyA9IF8uJHNsaWRlcy5jaGlsZHJlbigpLmNoaWxkcmVuKCk7XG4gICAgICAgICAgICBvcmlnaW5hbFNsaWRlcy5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgICAgICAgXy4kc2xpZGVyLmVtcHR5KCkuYXBwZW5kKG9yaWdpbmFsU2xpZGVzKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5jbGlja0hhbmRsZXIgPSBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5zaG91bGRDbGljayA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbihyZWZyZXNoKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uYXV0b1BsYXlDbGVhcigpO1xuXG4gICAgICAgIF8udG91Y2hPYmplY3QgPSB7fTtcblxuICAgICAgICBfLmNsZWFuVXBFdmVudHMoKTtcblxuICAgICAgICAkKCcuc2xpY2stY2xvbmVkJywgXy4kc2xpZGVyKS5kZXRhY2goKTtcblxuICAgICAgICBpZiAoXy4kZG90cykge1xuICAgICAgICAgICAgXy4kZG90cy5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggXy4kcHJldkFycm93ICYmIF8uJHByZXZBcnJvdy5sZW5ndGggKSB7XG5cbiAgICAgICAgICAgIF8uJHByZXZBcnJvd1xuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2xpY2stZGlzYWJsZWQgc2xpY2stYXJyb3cgc2xpY2staGlkZGVuJylcbiAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignYXJpYS1oaWRkZW4gYXJpYS1kaXNhYmxlZCB0YWJpbmRleCcpXG4gICAgICAgICAgICAgICAgLmNzcygnZGlzcGxheScsJycpO1xuXG4gICAgICAgICAgICBpZiAoIF8uaHRtbEV4cHIudGVzdCggXy5vcHRpb25zLnByZXZBcnJvdyApKSB7XG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93LnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBfLiRuZXh0QXJyb3cgJiYgXy4kbmV4dEFycm93Lmxlbmd0aCApIHtcblxuICAgICAgICAgICAgXy4kbmV4dEFycm93XG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1kaXNhYmxlZCBzbGljay1hcnJvdyBzbGljay1oaWRkZW4nKVxuICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdhcmlhLWhpZGRlbiBhcmlhLWRpc2FibGVkIHRhYmluZGV4JylcbiAgICAgICAgICAgICAgICAuY3NzKCdkaXNwbGF5JywnJyk7XG5cbiAgICAgICAgICAgIGlmICggXy5odG1sRXhwci50ZXN0KCBfLm9wdGlvbnMubmV4dEFycm93ICkpIHtcbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIGlmIChfLiRzbGlkZXMpIHtcblxuICAgICAgICAgICAgXy4kc2xpZGVzXG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1zbGlkZSBzbGljay1hY3RpdmUgc2xpY2stY2VudGVyIHNsaWNrLXZpc2libGUgc2xpY2stY3VycmVudCcpXG4gICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ2FyaWEtaGlkZGVuJylcbiAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignZGF0YS1zbGljay1pbmRleCcpXG4gICAgICAgICAgICAgICAgLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKCdzdHlsZScsICQodGhpcykuZGF0YSgnb3JpZ2luYWxTdHlsaW5nJykpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZGV0YWNoKCk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suZGV0YWNoKCk7XG5cbiAgICAgICAgICAgIF8uJGxpc3QuZGV0YWNoKCk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlci5hcHBlbmQoXy4kc2xpZGVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8uY2xlYW5VcFJvd3MoKTtcblxuICAgICAgICBfLiRzbGlkZXIucmVtb3ZlQ2xhc3MoJ3NsaWNrLXNsaWRlcicpO1xuICAgICAgICBfLiRzbGlkZXIucmVtb3ZlQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJyk7XG4gICAgICAgIF8uJHNsaWRlci5yZW1vdmVDbGFzcygnc2xpY2stZG90dGVkJyk7XG5cbiAgICAgICAgXy51bnNsaWNrZWQgPSB0cnVlO1xuXG4gICAgICAgIGlmKCFyZWZyZXNoKSB7XG4gICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignZGVzdHJveScsIFtfXSk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZGlzYWJsZVRyYW5zaXRpb24gPSBmdW5jdGlvbihzbGlkZSkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIHRyYW5zaXRpb24gPSB7fTtcblxuICAgICAgICB0cmFuc2l0aW9uW18udHJhbnNpdGlvblR5cGVdID0gJyc7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3ModHJhbnNpdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGUpLmNzcyh0cmFuc2l0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5mYWRlU2xpZGUgPSBmdW5jdGlvbihzbGlkZUluZGV4LCBjYWxsYmFjaykge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5jc3NUcmFuc2l0aW9ucyA9PT0gZmFsc2UpIHtcblxuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKHNsaWRlSW5kZXgpLmNzcyh7XG4gICAgICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKHNsaWRlSW5kZXgpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgICAgIH0sIF8ub3B0aW9ucy5zcGVlZCwgXy5vcHRpb25zLmVhc2luZywgY2FsbGJhY2spO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIF8uYXBwbHlUcmFuc2l0aW9uKHNsaWRlSW5kZXgpO1xuXG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGVJbmRleCkuY3NzKHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgICAgIHpJbmRleDogXy5vcHRpb25zLnpJbmRleFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgXy5kaXNhYmxlVHJhbnNpdGlvbihzbGlkZUluZGV4KTtcblxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKCk7XG4gICAgICAgICAgICAgICAgfSwgXy5vcHRpb25zLnNwZWVkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmZhZGVTbGlkZU91dCA9IGZ1bmN0aW9uKHNsaWRlSW5kZXgpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8uY3NzVHJhbnNpdGlvbnMgPT09IGZhbHNlKSB7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShzbGlkZUluZGV4KS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgICAgICAgIHpJbmRleDogXy5vcHRpb25zLnpJbmRleCAtIDJcbiAgICAgICAgICAgIH0sIF8ub3B0aW9ucy5zcGVlZCwgXy5vcHRpb25zLmVhc2luZyk7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgXy5hcHBseVRyYW5zaXRpb24oc2xpZGVJbmRleCk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShzbGlkZUluZGV4KS5jc3Moe1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4IC0gMlxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5maWx0ZXJTbGlkZXMgPSBTbGljay5wcm90b3R5cGUuc2xpY2tGaWx0ZXIgPSBmdW5jdGlvbihmaWx0ZXIpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKGZpbHRlciAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICBfLiRzbGlkZXNDYWNoZSA9IF8uJHNsaWRlcztcblxuICAgICAgICAgICAgXy51bmxvYWQoKTtcblxuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmRldGFjaCgpO1xuXG4gICAgICAgICAgICBfLiRzbGlkZXNDYWNoZS5maWx0ZXIoZmlsdGVyKS5hcHBlbmRUbyhfLiRzbGlkZVRyYWNrKTtcblxuICAgICAgICAgICAgXy5yZWluaXQoKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmZvY3VzSGFuZGxlciA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLiRzbGlkZXJcbiAgICAgICAgICAgIC5vZmYoJ2ZvY3VzLnNsaWNrIGJsdXIuc2xpY2snKVxuICAgICAgICAgICAgLm9uKCdmb2N1cy5zbGljayBibHVyLnNsaWNrJywgJyonLCBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHZhciAkc2YgPSAkKHRoaXMpO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgaWYoIF8ub3B0aW9ucy5wYXVzZU9uRm9jdXMgKSB7XG4gICAgICAgICAgICAgICAgICAgIF8uZm9jdXNzZWQgPSAkc2YuaXMoJzpmb2N1cycpO1xuICAgICAgICAgICAgICAgICAgICBfLmF1dG9QbGF5KCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9LCAwKTtcblxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdldEN1cnJlbnQgPSBTbGljay5wcm90b3R5cGUuc2xpY2tDdXJyZW50U2xpZGUgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG4gICAgICAgIHJldHVybiBfLmN1cnJlbnRTbGlkZTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZ2V0RG90Q291bnQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgdmFyIGJyZWFrUG9pbnQgPSAwO1xuICAgICAgICB2YXIgY291bnRlciA9IDA7XG4gICAgICAgIHZhciBwYWdlclF0eSA9IDA7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAgICAgICsrcGFnZXJRdHk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHdoaWxlIChicmVha1BvaW50IDwgXy5zbGlkZUNvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgICsrcGFnZXJRdHk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrUG9pbnQgPSBjb3VudGVyICsgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuICAgICAgICAgICAgICAgICAgICBjb3VudGVyICs9IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDogXy5vcHRpb25zLnNsaWRlc1RvU2hvdztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHBhZ2VyUXR5ID0gXy5zbGlkZUNvdW50O1xuICAgICAgICB9IGVsc2UgaWYoIV8ub3B0aW9ucy5hc05hdkZvcikge1xuICAgICAgICAgICAgcGFnZXJRdHkgPSAxICsgTWF0aC5jZWlsKChfLnNsaWRlQ291bnQgLSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSAvIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCk7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIHdoaWxlIChicmVha1BvaW50IDwgXy5zbGlkZUNvdW50KSB7XG4gICAgICAgICAgICAgICAgKytwYWdlclF0eTtcbiAgICAgICAgICAgICAgICBicmVha1BvaW50ID0gY291bnRlciArIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcbiAgICAgICAgICAgICAgICBjb3VudGVyICs9IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDogXy5vcHRpb25zLnNsaWRlc1RvU2hvdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYWdlclF0eSAtIDE7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdldExlZnQgPSBmdW5jdGlvbihzbGlkZUluZGV4KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgdGFyZ2V0TGVmdCxcbiAgICAgICAgICAgIHZlcnRpY2FsSGVpZ2h0LFxuICAgICAgICAgICAgdmVydGljYWxPZmZzZXQgPSAwLFxuICAgICAgICAgICAgdGFyZ2V0U2xpZGUsXG4gICAgICAgICAgICBjb2VmO1xuXG4gICAgICAgIF8uc2xpZGVPZmZzZXQgPSAwO1xuICAgICAgICB2ZXJ0aWNhbEhlaWdodCA9IF8uJHNsaWRlcy5maXJzdCgpLm91dGVySGVpZ2h0KHRydWUpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAgICAgXy5zbGlkZU9mZnNldCA9IChfLnNsaWRlV2lkdGggKiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSAqIC0xO1xuICAgICAgICAgICAgICAgIGNvZWYgPSAtMVxuXG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA9PT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29lZiA9IC0xLjU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29lZiA9IC0yXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmVydGljYWxPZmZzZXQgPSAodmVydGljYWxIZWlnaHQgKiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSAqIGNvZWY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNsaWRlSW5kZXggKyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgPiBfLnNsaWRlQ291bnQgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2xpZGVJbmRleCA+IF8uc2xpZGVDb3VudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5zbGlkZU9mZnNldCA9ICgoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAtIChzbGlkZUluZGV4IC0gXy5zbGlkZUNvdW50KSkgKiBfLnNsaWRlV2lkdGgpICogLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9ICgoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAtIChzbGlkZUluZGV4IC0gXy5zbGlkZUNvdW50KSkgKiB2ZXJ0aWNhbEhlaWdodCkgKiAtMTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgPSAoKF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCkgKiBfLnNsaWRlV2lkdGgpICogLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9ICgoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKSAqIHZlcnRpY2FsSGVpZ2h0KSAqIC0xO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHNsaWRlSW5kZXggKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID4gXy5zbGlkZUNvdW50KSB7XG4gICAgICAgICAgICAgICAgXy5zbGlkZU9mZnNldCA9ICgoc2xpZGVJbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIC0gXy5zbGlkZUNvdW50KSAqIF8uc2xpZGVXaWR0aDtcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9ICgoc2xpZGVJbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIC0gXy5zbGlkZUNvdW50KSAqIHZlcnRpY2FsSGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gMDtcbiAgICAgICAgICAgIHZlcnRpY2FsT2Zmc2V0ID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgXy5zbGlkZU9mZnNldCA9ICgoXy5zbGlkZVdpZHRoICogTWF0aC5mbG9vcihfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSkgLyAyKSAtICgoXy5zbGlkZVdpZHRoICogXy5zbGlkZUNvdW50KSAvIDIpO1xuICAgICAgICB9IGVsc2UgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlICYmIF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy5zbGlkZU9mZnNldCArPSBfLnNsaWRlV2lkdGggKiBNYXRoLmZsb29yKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyKSAtIF8uc2xpZGVXaWR0aDtcbiAgICAgICAgfSBlbHNlIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy5zbGlkZU9mZnNldCA9IDA7XG4gICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ICs9IF8uc2xpZGVXaWR0aCAqIE1hdGguZmxvb3IoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRhcmdldExlZnQgPSAoKHNsaWRlSW5kZXggKiBfLnNsaWRlV2lkdGgpICogLTEpICsgXy5zbGlkZU9mZnNldDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhcmdldExlZnQgPSAoKHNsaWRlSW5kZXggKiB2ZXJ0aWNhbEhlaWdodCkgKiAtMSkgKyB2ZXJ0aWNhbE9mZnNldDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmFyaWFibGVXaWR0aCA9PT0gdHJ1ZSkge1xuXG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgfHwgXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFNsaWRlID0gXy4kc2xpZGVUcmFjay5jaGlsZHJlbignLnNsaWNrLXNsaWRlJykuZXEoc2xpZGVJbmRleCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRhcmdldFNsaWRlID0gXy4kc2xpZGVUcmFjay5jaGlsZHJlbignLnNsaWNrLXNsaWRlJykuZXEoc2xpZGVJbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGlmICh0YXJnZXRTbGlkZVswXSkge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gKF8uJHNsaWRlVHJhY2sud2lkdGgoKSAtIHRhcmdldFNsaWRlWzBdLm9mZnNldExlZnQgLSB0YXJnZXRTbGlkZS53aWR0aCgpKSAqIC0xO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldExlZnQgPSAgMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRhcmdldExlZnQgPSB0YXJnZXRTbGlkZVswXSA/IHRhcmdldFNsaWRlWzBdLm9mZnNldExlZnQgKiAtMSA6IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyB8fCBfLm9wdGlvbnMuaW5maW5pdGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFNsaWRlID0gXy4kc2xpZGVUcmFjay5jaGlsZHJlbignLnNsaWNrLXNsaWRlJykuZXEoc2xpZGVJbmRleCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0U2xpZGUgPSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS5lcShzbGlkZUluZGV4ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdyArIDEpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMucnRsID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXRTbGlkZVswXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IChfLiRzbGlkZVRyYWNrLndpZHRoKCkgLSB0YXJnZXRTbGlkZVswXS5vZmZzZXRMZWZ0IC0gdGFyZ2V0U2xpZGUud2lkdGgoKSkgKiAtMTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldExlZnQgPSAgMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldExlZnQgPSB0YXJnZXRTbGlkZVswXSA/IHRhcmdldFNsaWRlWzBdLm9mZnNldExlZnQgKiAtMSA6IDA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCArPSAoXy4kbGlzdC53aWR0aCgpIC0gdGFyZ2V0U2xpZGUub3V0ZXJXaWR0aCgpKSAvIDI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFyZ2V0TGVmdDtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZ2V0T3B0aW9uID0gU2xpY2sucHJvdG90eXBlLnNsaWNrR2V0T3B0aW9uID0gZnVuY3Rpb24ob3B0aW9uKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIHJldHVybiBfLm9wdGlvbnNbb3B0aW9uXTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZ2V0TmF2aWdhYmxlSW5kZXhlcyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGJyZWFrUG9pbnQgPSAwLFxuICAgICAgICAgICAgY291bnRlciA9IDAsXG4gICAgICAgICAgICBpbmRleGVzID0gW10sXG4gICAgICAgICAgICBtYXg7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIG1heCA9IF8uc2xpZGVDb3VudDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJyZWFrUG9pbnQgPSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgKiAtMTtcbiAgICAgICAgICAgIGNvdW50ZXIgPSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgKiAtMTtcbiAgICAgICAgICAgIG1heCA9IF8uc2xpZGVDb3VudCAqIDI7XG4gICAgICAgIH1cblxuICAgICAgICB3aGlsZSAoYnJlYWtQb2ludCA8IG1heCkge1xuICAgICAgICAgICAgaW5kZXhlcy5wdXNoKGJyZWFrUG9pbnQpO1xuICAgICAgICAgICAgYnJlYWtQb2ludCA9IGNvdW50ZXIgKyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG4gICAgICAgICAgICBjb3VudGVyICs9IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDogXy5vcHRpb25zLnNsaWRlc1RvU2hvdztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbmRleGVzO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXRTbGljayA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXRTbGlkZUNvdW50ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgc2xpZGVzVHJhdmVyc2VkLCBzd2lwZWRTbGlkZSwgY2VudGVyT2Zmc2V0O1xuXG4gICAgICAgIGNlbnRlck9mZnNldCA9IF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlID8gXy5zbGlkZVdpZHRoICogTWF0aC5mbG9vcihfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMikgOiAwO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuc3dpcGVUb1NsaWRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmZpbmQoJy5zbGljay1zbGlkZScpLmVhY2goZnVuY3Rpb24oaW5kZXgsIHNsaWRlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNsaWRlLm9mZnNldExlZnQgLSBjZW50ZXJPZmZzZXQgKyAoJChzbGlkZSkub3V0ZXJXaWR0aCgpIC8gMikgPiAoXy5zd2lwZUxlZnQgKiAtMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgc3dpcGVkU2xpZGUgPSBzbGlkZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBzbGlkZXNUcmF2ZXJzZWQgPSBNYXRoLmFicygkKHN3aXBlZFNsaWRlKS5hdHRyKCdkYXRhLXNsaWNrLWluZGV4JykgLSBfLmN1cnJlbnRTbGlkZSkgfHwgMTtcblxuICAgICAgICAgICAgcmV0dXJuIHNsaWRlc1RyYXZlcnNlZDtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nb1RvID0gU2xpY2sucHJvdG90eXBlLnNsaWNrR29UbyA9IGZ1bmN0aW9uKHNsaWRlLCBkb250QW5pbWF0ZSkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLmNoYW5nZVNsaWRlKHtcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnaW5kZXgnLFxuICAgICAgICAgICAgICAgIGluZGV4OiBwYXJzZUludChzbGlkZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgZG9udEFuaW1hdGUpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oY3JlYXRpb24pIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKCEkKF8uJHNsaWRlcikuaGFzQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJykpIHtcblxuICAgICAgICAgICAgJChfLiRzbGlkZXIpLmFkZENsYXNzKCdzbGljay1pbml0aWFsaXplZCcpO1xuXG4gICAgICAgICAgICBfLmJ1aWxkUm93cygpO1xuICAgICAgICAgICAgXy5idWlsZE91dCgpO1xuICAgICAgICAgICAgXy5zZXRQcm9wcygpO1xuICAgICAgICAgICAgXy5zdGFydExvYWQoKTtcbiAgICAgICAgICAgIF8ubG9hZFNsaWRlcigpO1xuICAgICAgICAgICAgXy5pbml0aWFsaXplRXZlbnRzKCk7XG4gICAgICAgICAgICBfLnVwZGF0ZUFycm93cygpO1xuICAgICAgICAgICAgXy51cGRhdGVEb3RzKCk7XG4gICAgICAgICAgICBfLmNoZWNrUmVzcG9uc2l2ZSh0cnVlKTtcbiAgICAgICAgICAgIF8uZm9jdXNIYW5kbGVyKCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjcmVhdGlvbikge1xuICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2luaXQnLCBbX10pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLmluaXRBREEoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggXy5vcHRpb25zLmF1dG9wbGF5ICkge1xuXG4gICAgICAgICAgICBfLnBhdXNlZCA9IGZhbHNlO1xuICAgICAgICAgICAgXy5hdXRvUGxheSgpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuaW5pdEFEQSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICAgICAgbnVtRG90R3JvdXBzID0gTWF0aC5jZWlsKF8uc2xpZGVDb3VudCAvIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpLFxuICAgICAgICAgICAgICAgIHRhYkNvbnRyb2xJbmRleGVzID0gXy5nZXROYXZpZ2FibGVJbmRleGVzKCkuZmlsdGVyKGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHZhbCA+PSAwKSAmJiAodmFsIDwgXy5zbGlkZUNvdW50KTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICBfLiRzbGlkZXMuYWRkKF8uJHNsaWRlVHJhY2suZmluZCgnLnNsaWNrLWNsb25lZCcpKS5hdHRyKHtcbiAgICAgICAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJyxcbiAgICAgICAgICAgICd0YWJpbmRleCc6ICctMSdcbiAgICAgICAgfSkuZmluZCgnYSwgaW5wdXQsIGJ1dHRvbiwgc2VsZWN0JykuYXR0cih7XG4gICAgICAgICAgICAndGFiaW5kZXgnOiAnLTEnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChfLiRkb3RzICE9PSBudWxsKSB7XG4gICAgICAgICAgICBfLiRzbGlkZXMubm90KF8uJHNsaWRlVHJhY2suZmluZCgnLnNsaWNrLWNsb25lZCcpKS5lYWNoKGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2xpZGVDb250cm9sSW5kZXggPSB0YWJDb250cm9sSW5kZXhlcy5pbmRleE9mKGkpO1xuXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKHtcbiAgICAgICAgICAgICAgICAgICAgJ3JvbGUnOiAndGFicGFuZWwnLFxuICAgICAgICAgICAgICAgICAgICAnaWQnOiAnc2xpY2stc2xpZGUnICsgXy5pbnN0YW5jZVVpZCArIGksXG4gICAgICAgICAgICAgICAgICAgICd0YWJpbmRleCc6IC0xXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoc2xpZGVDb250cm9sSW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgdmFyIGFyaWFCdXR0b25Db250cm9sID0gJ3NsaWNrLXNsaWRlLWNvbnRyb2wnICsgXy5pbnN0YW5jZVVpZCArIHNsaWRlQ29udHJvbEluZGV4XG4gICAgICAgICAgICAgICAgICAgaWYgKCQoJyMnICsgYXJpYUJ1dHRvbkNvbnRyb2wpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAnYXJpYS1kZXNjcmliZWRieSc6IGFyaWFCdXR0b25Db250cm9sXG4gICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIF8uJGRvdHMuYXR0cigncm9sZScsICd0YWJsaXN0JykuZmluZCgnbGknKS5lYWNoKGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgICAgICAgICB2YXIgbWFwcGVkU2xpZGVJbmRleCA9IHRhYkNvbnRyb2xJbmRleGVzW2ldO1xuXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKHtcbiAgICAgICAgICAgICAgICAgICAgJ3JvbGUnOiAncHJlc2VudGF0aW9uJ1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCdidXR0b24nKS5maXJzdCgpLmF0dHIoe1xuICAgICAgICAgICAgICAgICAgICAncm9sZSc6ICd0YWInLFxuICAgICAgICAgICAgICAgICAgICAnaWQnOiAnc2xpY2stc2xpZGUtY29udHJvbCcgKyBfLmluc3RhbmNlVWlkICsgaSxcbiAgICAgICAgICAgICAgICAgICAgJ2FyaWEtY29udHJvbHMnOiAnc2xpY2stc2xpZGUnICsgXy5pbnN0YW5jZVVpZCArIG1hcHBlZFNsaWRlSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICdhcmlhLWxhYmVsJzogKGkgKyAxKSArICcgb2YgJyArIG51bURvdEdyb3VwcyxcbiAgICAgICAgICAgICAgICAgICAgJ2FyaWEtc2VsZWN0ZWQnOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAndGFiaW5kZXgnOiAnLTEnXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0pLmVxKF8uY3VycmVudFNsaWRlKS5maW5kKCdidXR0b24nKS5hdHRyKHtcbiAgICAgICAgICAgICAgICAnYXJpYS1zZWxlY3RlZCc6ICd0cnVlJyxcbiAgICAgICAgICAgICAgICAndGFiaW5kZXgnOiAnMCdcbiAgICAgICAgICAgIH0pLmVuZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaT1fLmN1cnJlbnRTbGlkZSwgbWF4PWkrXy5vcHRpb25zLnNsaWRlc1RvU2hvdzsgaSA8IG1heDsgaSsrKSB7XG4gICAgICAgICAgaWYgKF8ub3B0aW9ucy5mb2N1c09uQ2hhbmdlKSB7XG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoaSkuYXR0cih7J3RhYmluZGV4JzogJzAnfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShpKS5yZW1vdmVBdHRyKCd0YWJpbmRleCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIF8uYWN0aXZhdGVBREEoKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuaW5pdEFycm93RXZlbnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYXJyb3dzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIF8uJHByZXZBcnJvd1xuICAgICAgICAgICAgICAgLm9mZignY2xpY2suc2xpY2snKVxuICAgICAgICAgICAgICAgLm9uKCdjbGljay5zbGljaycsIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ3ByZXZpb3VzJ1xuICAgICAgICAgICAgICAgfSwgXy5jaGFuZ2VTbGlkZSk7XG4gICAgICAgICAgICBfLiRuZXh0QXJyb3dcbiAgICAgICAgICAgICAgIC5vZmYoJ2NsaWNrLnNsaWNrJylcbiAgICAgICAgICAgICAgIC5vbignY2xpY2suc2xpY2snLCB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICduZXh0J1xuICAgICAgICAgICAgICAgfSwgXy5jaGFuZ2VTbGlkZSk7XG5cbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5vbigna2V5ZG93bi5zbGljaycsIF8ua2V5SGFuZGxlcik7XG4gICAgICAgICAgICAgICAgXy4kbmV4dEFycm93Lm9uKCdrZXlkb3duLnNsaWNrJywgXy5rZXlIYW5kbGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5pbml0RG90RXZlbnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZG90cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAkKCdsaScsIF8uJGRvdHMpLm9uKCdjbGljay5zbGljaycsIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnaW5kZXgnXG4gICAgICAgICAgICB9LCBfLmNoYW5nZVNsaWRlKTtcblxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy4kZG90cy5vbigna2V5ZG93bi5zbGljaycsIF8ua2V5SGFuZGxlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmRvdHMgPT09IHRydWUgJiYgXy5vcHRpb25zLnBhdXNlT25Eb3RzSG92ZXIgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICAkKCdsaScsIF8uJGRvdHMpXG4gICAgICAgICAgICAgICAgLm9uKCdtb3VzZWVudGVyLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgdHJ1ZSkpXG4gICAgICAgICAgICAgICAgLm9uKCdtb3VzZWxlYXZlLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgZmFsc2UpKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmluaXRTbGlkZUV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5wYXVzZU9uSG92ZXIgKSB7XG5cbiAgICAgICAgICAgIF8uJGxpc3Qub24oJ21vdXNlZW50ZXIuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCB0cnVlKSk7XG4gICAgICAgICAgICBfLiRsaXN0Lm9uKCdtb3VzZWxlYXZlLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgZmFsc2UpKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmluaXRpYWxpemVFdmVudHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5pbml0QXJyb3dFdmVudHMoKTtcblxuICAgICAgICBfLmluaXREb3RFdmVudHMoKTtcbiAgICAgICAgXy5pbml0U2xpZGVFdmVudHMoKTtcblxuICAgICAgICBfLiRsaXN0Lm9uKCd0b3VjaHN0YXJ0LnNsaWNrIG1vdXNlZG93bi5zbGljaycsIHtcbiAgICAgICAgICAgIGFjdGlvbjogJ3N0YXJ0J1xuICAgICAgICB9LCBfLnN3aXBlSGFuZGxlcik7XG4gICAgICAgIF8uJGxpc3Qub24oJ3RvdWNobW92ZS5zbGljayBtb3VzZW1vdmUuc2xpY2snLCB7XG4gICAgICAgICAgICBhY3Rpb246ICdtb3ZlJ1xuICAgICAgICB9LCBfLnN3aXBlSGFuZGxlcik7XG4gICAgICAgIF8uJGxpc3Qub24oJ3RvdWNoZW5kLnNsaWNrIG1vdXNldXAuc2xpY2snLCB7XG4gICAgICAgICAgICBhY3Rpb246ICdlbmQnXG4gICAgICAgIH0sIF8uc3dpcGVIYW5kbGVyKTtcbiAgICAgICAgXy4kbGlzdC5vbigndG91Y2hjYW5jZWwuc2xpY2sgbW91c2VsZWF2ZS5zbGljaycsIHtcbiAgICAgICAgICAgIGFjdGlvbjogJ2VuZCdcbiAgICAgICAgfSwgXy5zd2lwZUhhbmRsZXIpO1xuXG4gICAgICAgIF8uJGxpc3Qub24oJ2NsaWNrLnNsaWNrJywgXy5jbGlja0hhbmRsZXIpO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKF8udmlzaWJpbGl0eUNoYW5nZSwgJC5wcm94eShfLnZpc2liaWxpdHksIF8pKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uJGxpc3Qub24oJ2tleWRvd24uc2xpY2snLCBfLmtleUhhbmRsZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mb2N1c09uU2VsZWN0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAkKF8uJHNsaWRlVHJhY2spLmNoaWxkcmVuKCkub24oJ2NsaWNrLnNsaWNrJywgXy5zZWxlY3RIYW5kbGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgICQod2luZG93KS5vbignb3JpZW50YXRpb25jaGFuZ2Uuc2xpY2suc2xpY2stJyArIF8uaW5zdGFuY2VVaWQsICQucHJveHkoXy5vcmllbnRhdGlvbkNoYW5nZSwgXykpO1xuXG4gICAgICAgICQod2luZG93KS5vbigncmVzaXplLnNsaWNrLnNsaWNrLScgKyBfLmluc3RhbmNlVWlkLCAkLnByb3h5KF8ucmVzaXplLCBfKSk7XG5cbiAgICAgICAgJCgnW2RyYWdnYWJsZSE9dHJ1ZV0nLCBfLiRzbGlkZVRyYWNrKS5vbignZHJhZ3N0YXJ0JywgXy5wcmV2ZW50RGVmYXVsdCk7XG5cbiAgICAgICAgJCh3aW5kb3cpLm9uKCdsb2FkLnNsaWNrLnNsaWNrLScgKyBfLmluc3RhbmNlVWlkLCBfLnNldFBvc2l0aW9uKTtcbiAgICAgICAgJChfLnNldFBvc2l0aW9uKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuaW5pdFVJID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYXJyb3dzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgXy4kcHJldkFycm93LnNob3coKTtcbiAgICAgICAgICAgIF8uJG5leHRBcnJvdy5zaG93KCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZG90cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgIF8uJGRvdHMuc2hvdygpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUua2V5SGFuZGxlciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuICAgICAgICAgLy9Eb250IHNsaWRlIGlmIHRoZSBjdXJzb3IgaXMgaW5zaWRlIHRoZSBmb3JtIGZpZWxkcyBhbmQgYXJyb3cga2V5cyBhcmUgcHJlc3NlZFxuICAgICAgICBpZighZXZlbnQudGFyZ2V0LnRhZ05hbWUubWF0Y2goJ1RFWFRBUkVBfElOUFVUfFNFTEVDVCcpKSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzcgJiYgXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLmNoYW5nZVNsaWRlKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSA/ICduZXh0JyA6ICAncHJldmlvdXMnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzkgJiYgXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLmNoYW5nZVNsaWRlKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSA/ICdwcmV2aW91cycgOiAnbmV4dCdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmxhenlMb2FkID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgbG9hZFJhbmdlLCBjbG9uZVJhbmdlLCByYW5nZVN0YXJ0LCByYW5nZUVuZDtcblxuICAgICAgICBmdW5jdGlvbiBsb2FkSW1hZ2VzKGltYWdlc1Njb3BlKSB7XG5cbiAgICAgICAgICAgICQoJ2ltZ1tkYXRhLWxhenldJywgaW1hZ2VzU2NvcGUpLmVhY2goZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgaW1hZ2UgPSAkKHRoaXMpLFxuICAgICAgICAgICAgICAgICAgICBpbWFnZVNvdXJjZSA9ICQodGhpcykuYXR0cignZGF0YS1sYXp5JyksXG4gICAgICAgICAgICAgICAgICAgIGltYWdlU3JjU2V0ID0gJCh0aGlzKS5hdHRyKCdkYXRhLXNyY3NldCcpLFxuICAgICAgICAgICAgICAgICAgICBpbWFnZVNpemVzICA9ICQodGhpcykuYXR0cignZGF0YS1zaXplcycpIHx8IF8uJHNsaWRlci5hdHRyKCdkYXRhLXNpemVzJyksXG4gICAgICAgICAgICAgICAgICAgIGltYWdlVG9Mb2FkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICAgICAgICAgICAgICBpbWFnZVRvTG9hZC5vbmxvYWQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFuaW1hdGUoeyBvcGFjaXR5OiAwIH0sIDEwMCwgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW1hZ2VTcmNTZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdzcmNzZXQnLCBpbWFnZVNyY1NldCApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbWFnZVNpemVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdzaXplcycsIGltYWdlU2l6ZXMgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdzcmMnLCBpbWFnZVNvdXJjZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFuaW1hdGUoeyBvcGFjaXR5OiAxIH0sIDIwMCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdkYXRhLWxhenkgZGF0YS1zcmNzZXQgZGF0YS1zaXplcycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1sb2FkaW5nJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdsYXp5TG9hZGVkJywgW18sIGltYWdlLCBpbWFnZVNvdXJjZV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgaW1hZ2VUb0xvYWQub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQXR0ciggJ2RhdGEtbGF6eScgKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCAnc2xpY2stbG9hZGluZycgKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCAnc2xpY2stbGF6eWxvYWQtZXJyb3InICk7XG5cbiAgICAgICAgICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2xhenlMb2FkRXJyb3InLCBbIF8sIGltYWdlLCBpbWFnZVNvdXJjZSBdKTtcblxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBpbWFnZVRvTG9hZC5zcmMgPSBpbWFnZVNvdXJjZTtcblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHJhbmdlU3RhcnQgPSBfLmN1cnJlbnRTbGlkZSArIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMiArIDEpO1xuICAgICAgICAgICAgICAgIHJhbmdlRW5kID0gcmFuZ2VTdGFydCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKyAyO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByYW5nZVN0YXJ0ID0gTWF0aC5tYXgoMCwgXy5jdXJyZW50U2xpZGUgLSAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIgKyAxKSk7XG4gICAgICAgICAgICAgICAgcmFuZ2VFbmQgPSAyICsgKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyICsgMSkgKyBfLmN1cnJlbnRTbGlkZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJhbmdlU3RhcnQgPSBfLm9wdGlvbnMuaW5maW5pdGUgPyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICsgXy5jdXJyZW50U2xpZGUgOiBfLmN1cnJlbnRTbGlkZTtcbiAgICAgICAgICAgIHJhbmdlRW5kID0gTWF0aC5jZWlsKHJhbmdlU3RhcnQgKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KTtcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGlmIChyYW5nZVN0YXJ0ID4gMCkgcmFuZ2VTdGFydC0tO1xuICAgICAgICAgICAgICAgIGlmIChyYW5nZUVuZCA8PSBfLnNsaWRlQ291bnQpIHJhbmdlRW5kKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsb2FkUmFuZ2UgPSBfLiRzbGlkZXIuZmluZCgnLnNsaWNrLXNsaWRlJykuc2xpY2UocmFuZ2VTdGFydCwgcmFuZ2VFbmQpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMubGF6eUxvYWQgPT09ICdhbnRpY2lwYXRlZCcpIHtcbiAgICAgICAgICAgIHZhciBwcmV2U2xpZGUgPSByYW5nZVN0YXJ0IC0gMSxcbiAgICAgICAgICAgICAgICBuZXh0U2xpZGUgPSByYW5nZUVuZCxcbiAgICAgICAgICAgICAgICAkc2xpZGVzID0gXy4kc2xpZGVyLmZpbmQoJy5zbGljay1zbGlkZScpO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByZXZTbGlkZSA8IDApIHByZXZTbGlkZSA9IF8uc2xpZGVDb3VudCAtIDE7XG4gICAgICAgICAgICAgICAgbG9hZFJhbmdlID0gbG9hZFJhbmdlLmFkZCgkc2xpZGVzLmVxKHByZXZTbGlkZSkpO1xuICAgICAgICAgICAgICAgIGxvYWRSYW5nZSA9IGxvYWRSYW5nZS5hZGQoJHNsaWRlcy5lcShuZXh0U2xpZGUpKTtcbiAgICAgICAgICAgICAgICBwcmV2U2xpZGUtLTtcbiAgICAgICAgICAgICAgICBuZXh0U2xpZGUrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxvYWRJbWFnZXMobG9hZFJhbmdlKTtcblxuICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIGNsb25lUmFuZ2UgPSBfLiRzbGlkZXIuZmluZCgnLnNsaWNrLXNsaWRlJyk7XG4gICAgICAgICAgICBsb2FkSW1hZ2VzKGNsb25lUmFuZ2UpO1xuICAgICAgICB9IGVsc2VcbiAgICAgICAgaWYgKF8uY3VycmVudFNsaWRlID49IF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIGNsb25lUmFuZ2UgPSBfLiRzbGlkZXIuZmluZCgnLnNsaWNrLWNsb25lZCcpLnNsaWNlKDAsIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpO1xuICAgICAgICAgICAgbG9hZEltYWdlcyhjbG9uZVJhbmdlKTtcbiAgICAgICAgfSBlbHNlIGlmIChfLmN1cnJlbnRTbGlkZSA9PT0gMCkge1xuICAgICAgICAgICAgY2xvbmVSYW5nZSA9IF8uJHNsaWRlci5maW5kKCcuc2xpY2stY2xvbmVkJykuc2xpY2UoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAqIC0xKTtcbiAgICAgICAgICAgIGxvYWRJbWFnZXMoY2xvbmVSYW5nZSk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUubG9hZFNsaWRlciA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLnNldFBvc2l0aW9uKCk7XG5cbiAgICAgICAgXy4kc2xpZGVUcmFjay5jc3Moe1xuICAgICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICB9KTtcblxuICAgICAgICBfLiRzbGlkZXIucmVtb3ZlQ2xhc3MoJ3NsaWNrLWxvYWRpbmcnKTtcblxuICAgICAgICBfLmluaXRVSSgpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMubGF6eUxvYWQgPT09ICdwcm9ncmVzc2l2ZScpIHtcbiAgICAgICAgICAgIF8ucHJvZ3Jlc3NpdmVMYXp5TG9hZCgpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLm5leHQgPSBTbGljay5wcm90b3R5cGUuc2xpY2tOZXh0ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uY2hhbmdlU2xpZGUoe1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICduZXh0J1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUub3JpZW50YXRpb25DaGFuZ2UgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5jaGVja1Jlc3BvbnNpdmUoKTtcbiAgICAgICAgXy5zZXRQb3NpdGlvbigpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5wYXVzZSA9IFNsaWNrLnByb3RvdHlwZS5zbGlja1BhdXNlID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uYXV0b1BsYXlDbGVhcigpO1xuICAgICAgICBfLnBhdXNlZCA9IHRydWU7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnBsYXkgPSBTbGljay5wcm90b3R5cGUuc2xpY2tQbGF5ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uYXV0b1BsYXkoKTtcbiAgICAgICAgXy5vcHRpb25zLmF1dG9wbGF5ID0gdHJ1ZTtcbiAgICAgICAgXy5wYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgXy5mb2N1c3NlZCA9IGZhbHNlO1xuICAgICAgICBfLmludGVycnVwdGVkID0gZmFsc2U7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnBvc3RTbGlkZSA9IGZ1bmN0aW9uKGluZGV4KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmKCAhXy51bnNsaWNrZWQgKSB7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdhZnRlckNoYW5nZScsIFtfLCBpbmRleF0pO1xuXG4gICAgICAgICAgICBfLmFuaW1hdGluZyA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgICAgIF8uc2V0UG9zaXRpb24oKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXy5zd2lwZUxlZnQgPSBudWxsO1xuXG4gICAgICAgICAgICBpZiAoIF8ub3B0aW9ucy5hdXRvcGxheSApIHtcbiAgICAgICAgICAgICAgICBfLmF1dG9QbGF5KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uaW5pdEFEQSgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5mb2N1c09uQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciAkY3VycmVudFNsaWRlID0gJChfLiRzbGlkZXMuZ2V0KF8uY3VycmVudFNsaWRlKSk7XG4gICAgICAgICAgICAgICAgICAgICRjdXJyZW50U2xpZGUuYXR0cigndGFiaW5kZXgnLCAwKS5mb2N1cygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnByZXYgPSBTbGljay5wcm90b3R5cGUuc2xpY2tQcmV2ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uY2hhbmdlU2xpZGUoe1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdwcmV2aW91cydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnByZXZlbnREZWZhdWx0ID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5wcm9ncmVzc2l2ZUxhenlMb2FkID0gZnVuY3Rpb24oIHRyeUNvdW50ICkge1xuXG4gICAgICAgIHRyeUNvdW50ID0gdHJ5Q291bnQgfHwgMTtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICAkaW1nc1RvTG9hZCA9ICQoICdpbWdbZGF0YS1sYXp5XScsIF8uJHNsaWRlciApLFxuICAgICAgICAgICAgaW1hZ2UsXG4gICAgICAgICAgICBpbWFnZVNvdXJjZSxcbiAgICAgICAgICAgIGltYWdlU3JjU2V0LFxuICAgICAgICAgICAgaW1hZ2VTaXplcyxcbiAgICAgICAgICAgIGltYWdlVG9Mb2FkO1xuXG4gICAgICAgIGlmICggJGltZ3NUb0xvYWQubGVuZ3RoICkge1xuXG4gICAgICAgICAgICBpbWFnZSA9ICRpbWdzVG9Mb2FkLmZpcnN0KCk7XG4gICAgICAgICAgICBpbWFnZVNvdXJjZSA9IGltYWdlLmF0dHIoJ2RhdGEtbGF6eScpO1xuICAgICAgICAgICAgaW1hZ2VTcmNTZXQgPSBpbWFnZS5hdHRyKCdkYXRhLXNyY3NldCcpO1xuICAgICAgICAgICAgaW1hZ2VTaXplcyAgPSBpbWFnZS5hdHRyKCdkYXRhLXNpemVzJykgfHwgXy4kc2xpZGVyLmF0dHIoJ2RhdGEtc2l6ZXMnKTtcbiAgICAgICAgICAgIGltYWdlVG9Mb2FkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICAgICAgICAgIGltYWdlVG9Mb2FkLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgaWYgKGltYWdlU3JjU2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignc3Jjc2V0JywgaW1hZ2VTcmNTZXQgKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoaW1hZ2VTaXplcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignc2l6ZXMnLCBpbWFnZVNpemVzICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAuYXR0ciggJ3NyYycsIGltYWdlU291cmNlIClcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ2RhdGEtbGF6eSBkYXRhLXNyY3NldCBkYXRhLXNpemVzJylcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1sb2FkaW5nJyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIF8ub3B0aW9ucy5hZGFwdGl2ZUhlaWdodCA9PT0gdHJ1ZSApIHtcbiAgICAgICAgICAgICAgICAgICAgXy5zZXRQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdsYXp5TG9hZGVkJywgWyBfLCBpbWFnZSwgaW1hZ2VTb3VyY2UgXSk7XG4gICAgICAgICAgICAgICAgXy5wcm9ncmVzc2l2ZUxhenlMb2FkKCk7XG5cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGltYWdlVG9Mb2FkLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgIGlmICggdHJ5Q291bnQgPCAzICkge1xuXG4gICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgKiB0cnkgdG8gbG9hZCB0aGUgaW1hZ2UgMyB0aW1lcyxcbiAgICAgICAgICAgICAgICAgICAgICogbGVhdmUgYSBzbGlnaHQgZGVsYXkgc28gd2UgZG9uJ3QgZ2V0XG4gICAgICAgICAgICAgICAgICAgICAqIHNlcnZlcnMgYmxvY2tpbmcgdGhlIHJlcXVlc3QuXG4gICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8ucHJvZ3Jlc3NpdmVMYXp5TG9hZCggdHJ5Q291bnQgKyAxICk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDUwMCApO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoICdkYXRhLWxhenknIClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyggJ3NsaWNrLWxvYWRpbmcnIClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcyggJ3NsaWNrLWxhenlsb2FkLWVycm9yJyApO1xuXG4gICAgICAgICAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdsYXp5TG9hZEVycm9yJywgWyBfLCBpbWFnZSwgaW1hZ2VTb3VyY2UgXSk7XG5cbiAgICAgICAgICAgICAgICAgICAgXy5wcm9ncmVzc2l2ZUxhenlMb2FkKCk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGltYWdlVG9Mb2FkLnNyYyA9IGltYWdlU291cmNlO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdhbGxJbWFnZXNMb2FkZWQnLCBbIF8gXSk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5yZWZyZXNoID0gZnVuY3Rpb24oIGluaXRpYWxpemluZyApIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsIGN1cnJlbnRTbGlkZSwgbGFzdFZpc2libGVJbmRleDtcblxuICAgICAgICBsYXN0VmlzaWJsZUluZGV4ID0gXy5zbGlkZUNvdW50IC0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdztcblxuICAgICAgICAvLyBpbiBub24taW5maW5pdGUgc2xpZGVycywgd2UgZG9uJ3Qgd2FudCB0byBnbyBwYXN0IHRoZVxuICAgICAgICAvLyBsYXN0IHZpc2libGUgaW5kZXguXG4gICAgICAgIGlmKCAhXy5vcHRpb25zLmluZmluaXRlICYmICggXy5jdXJyZW50U2xpZGUgPiBsYXN0VmlzaWJsZUluZGV4ICkpIHtcbiAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gbGFzdFZpc2libGVJbmRleDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIGxlc3Mgc2xpZGVzIHRoYW4gdG8gc2hvdywgZ28gdG8gc3RhcnQuXG4gICAgICAgIGlmICggXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKSB7XG4gICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IDA7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGN1cnJlbnRTbGlkZSA9IF8uY3VycmVudFNsaWRlO1xuXG4gICAgICAgIF8uZGVzdHJveSh0cnVlKTtcblxuICAgICAgICAkLmV4dGVuZChfLCBfLmluaXRpYWxzLCB7IGN1cnJlbnRTbGlkZTogY3VycmVudFNsaWRlIH0pO1xuXG4gICAgICAgIF8uaW5pdCgpO1xuXG4gICAgICAgIGlmKCAhaW5pdGlhbGl6aW5nICkge1xuXG4gICAgICAgICAgICBfLmNoYW5nZVNsaWRlKHtcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdpbmRleCcsXG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiBjdXJyZW50U2xpZGVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBmYWxzZSk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5yZWdpc3RlckJyZWFrcG9pbnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLCBicmVha3BvaW50LCBjdXJyZW50QnJlYWtwb2ludCwgbCxcbiAgICAgICAgICAgIHJlc3BvbnNpdmVTZXR0aW5ncyA9IF8ub3B0aW9ucy5yZXNwb25zaXZlIHx8IG51bGw7XG5cbiAgICAgICAgaWYgKCAkLnR5cGUocmVzcG9uc2l2ZVNldHRpbmdzKSA9PT0gJ2FycmF5JyAmJiByZXNwb25zaXZlU2V0dGluZ3MubGVuZ3RoICkge1xuXG4gICAgICAgICAgICBfLnJlc3BvbmRUbyA9IF8ub3B0aW9ucy5yZXNwb25kVG8gfHwgJ3dpbmRvdyc7XG5cbiAgICAgICAgICAgIGZvciAoIGJyZWFrcG9pbnQgaW4gcmVzcG9uc2l2ZVNldHRpbmdzICkge1xuXG4gICAgICAgICAgICAgICAgbCA9IF8uYnJlYWtwb2ludHMubGVuZ3RoLTE7XG5cbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2l2ZVNldHRpbmdzLmhhc093blByb3BlcnR5KGJyZWFrcG9pbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRCcmVha3BvaW50ID0gcmVzcG9uc2l2ZVNldHRpbmdzW2JyZWFrcG9pbnRdLmJyZWFrcG9pbnQ7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gbG9vcCB0aHJvdWdoIHRoZSBicmVha3BvaW50cyBhbmQgY3V0IG91dCBhbnkgZXhpc3RpbmdcbiAgICAgICAgICAgICAgICAgICAgLy8gb25lcyB3aXRoIHRoZSBzYW1lIGJyZWFrcG9pbnQgbnVtYmVyLCB3ZSBkb24ndCB3YW50IGR1cGVzLlxuICAgICAgICAgICAgICAgICAgICB3aGlsZSggbCA+PSAwICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIF8uYnJlYWtwb2ludHNbbF0gJiYgXy5icmVha3BvaW50c1tsXSA9PT0gY3VycmVudEJyZWFrcG9pbnQgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5icmVha3BvaW50cy5zcGxpY2UobCwxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGwtLTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIF8uYnJlYWtwb2ludHMucHVzaChjdXJyZW50QnJlYWtwb2ludCk7XG4gICAgICAgICAgICAgICAgICAgIF8uYnJlYWtwb2ludFNldHRpbmdzW2N1cnJlbnRCcmVha3BvaW50XSA9IHJlc3BvbnNpdmVTZXR0aW5nc1ticmVha3BvaW50XS5zZXR0aW5ncztcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfLmJyZWFrcG9pbnRzLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgICAgICAgICAgIHJldHVybiAoIF8ub3B0aW9ucy5tb2JpbGVGaXJzdCApID8gYS1iIDogYi1hO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5yZWluaXQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy4kc2xpZGVzID1cbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2tcbiAgICAgICAgICAgICAgICAuY2hpbGRyZW4oXy5vcHRpb25zLnNsaWRlKVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stc2xpZGUnKTtcblxuICAgICAgICBfLnNsaWRlQ291bnQgPSBfLiRzbGlkZXMubGVuZ3RoO1xuXG4gICAgICAgIGlmIChfLmN1cnJlbnRTbGlkZSA+PSBfLnNsaWRlQ291bnQgJiYgXy5jdXJyZW50U2xpZGUgIT09IDApIHtcbiAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gXy5jdXJyZW50U2xpZGUgLSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIF8ucmVnaXN0ZXJCcmVha3BvaW50cygpO1xuXG4gICAgICAgIF8uc2V0UHJvcHMoKTtcbiAgICAgICAgXy5zZXR1cEluZmluaXRlKCk7XG4gICAgICAgIF8uYnVpbGRBcnJvd3MoKTtcbiAgICAgICAgXy51cGRhdGVBcnJvd3MoKTtcbiAgICAgICAgXy5pbml0QXJyb3dFdmVudHMoKTtcbiAgICAgICAgXy5idWlsZERvdHMoKTtcbiAgICAgICAgXy51cGRhdGVEb3RzKCk7XG4gICAgICAgIF8uaW5pdERvdEV2ZW50cygpO1xuICAgICAgICBfLmNsZWFuVXBTbGlkZUV2ZW50cygpO1xuICAgICAgICBfLmluaXRTbGlkZUV2ZW50cygpO1xuXG4gICAgICAgIF8uY2hlY2tSZXNwb25zaXZlKGZhbHNlLCB0cnVlKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZvY3VzT25TZWxlY3QgPT09IHRydWUpIHtcbiAgICAgICAgICAgICQoXy4kc2xpZGVUcmFjaykuY2hpbGRyZW4oKS5vbignY2xpY2suc2xpY2snLCBfLnNlbGVjdEhhbmRsZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgXy5zZXRTbGlkZUNsYXNzZXModHlwZW9mIF8uY3VycmVudFNsaWRlID09PSAnbnVtYmVyJyA/IF8uY3VycmVudFNsaWRlIDogMCk7XG5cbiAgICAgICAgXy5zZXRQb3NpdGlvbigpO1xuICAgICAgICBfLmZvY3VzSGFuZGxlcigpO1xuXG4gICAgICAgIF8ucGF1c2VkID0gIV8ub3B0aW9ucy5hdXRvcGxheTtcbiAgICAgICAgXy5hdXRvUGxheSgpO1xuXG4gICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdyZUluaXQnLCBbX10pO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5yZXNpemUgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpICE9PSBfLndpbmRvd1dpZHRoKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoXy53aW5kb3dEZWxheSk7XG4gICAgICAgICAgICBfLndpbmRvd0RlbGF5ID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgXy53aW5kb3dXaWR0aCA9ICQod2luZG93KS53aWR0aCgpO1xuICAgICAgICAgICAgICAgIF8uY2hlY2tSZXNwb25zaXZlKCk7XG4gICAgICAgICAgICAgICAgaWYoICFfLnVuc2xpY2tlZCApIHsgXy5zZXRQb3NpdGlvbigpOyB9XG4gICAgICAgICAgICB9LCA1MCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnJlbW92ZVNsaWRlID0gU2xpY2sucHJvdG90eXBlLnNsaWNrUmVtb3ZlID0gZnVuY3Rpb24oaW5kZXgsIHJlbW92ZUJlZm9yZSwgcmVtb3ZlQWxsKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmICh0eXBlb2YoaW5kZXgpID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgIHJlbW92ZUJlZm9yZSA9IGluZGV4O1xuICAgICAgICAgICAgaW5kZXggPSByZW1vdmVCZWZvcmUgPT09IHRydWUgPyAwIDogXy5zbGlkZUNvdW50IC0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluZGV4ID0gcmVtb3ZlQmVmb3JlID09PSB0cnVlID8gLS1pbmRleCA6IGluZGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8IDEgfHwgaW5kZXggPCAwIHx8IGluZGV4ID4gXy5zbGlkZUNvdW50IC0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgXy51bmxvYWQoKTtcblxuICAgICAgICBpZiAocmVtb3ZlQWxsID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCkucmVtb3ZlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZXEoaW5kZXgpLnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgXy4kc2xpZGVzID0gXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpO1xuXG4gICAgICAgIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKS5kZXRhY2goKTtcblxuICAgICAgICBfLiRzbGlkZVRyYWNrLmFwcGVuZChfLiRzbGlkZXMpO1xuXG4gICAgICAgIF8uJHNsaWRlc0NhY2hlID0gXy4kc2xpZGVzO1xuXG4gICAgICAgIF8ucmVpbml0KCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNldENTUyA9IGZ1bmN0aW9uKHBvc2l0aW9uKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgcG9zaXRpb25Qcm9wcyA9IHt9LFxuICAgICAgICAgICAgeCwgeTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcG9zaXRpb24gPSAtcG9zaXRpb247XG4gICAgICAgIH1cbiAgICAgICAgeCA9IF8ucG9zaXRpb25Qcm9wID09ICdsZWZ0JyA/IE1hdGguY2VpbChwb3NpdGlvbikgKyAncHgnIDogJzBweCc7XG4gICAgICAgIHkgPSBfLnBvc2l0aW9uUHJvcCA9PSAndG9wJyA/IE1hdGguY2VpbChwb3NpdGlvbikgKyAncHgnIDogJzBweCc7XG5cbiAgICAgICAgcG9zaXRpb25Qcm9wc1tfLnBvc2l0aW9uUHJvcF0gPSBwb3NpdGlvbjtcblxuICAgICAgICBpZiAoXy50cmFuc2Zvcm1zRW5hYmxlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKHBvc2l0aW9uUHJvcHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcG9zaXRpb25Qcm9wcyA9IHt9O1xuICAgICAgICAgICAgaWYgKF8uY3NzVHJhbnNpdGlvbnMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb25Qcm9wc1tfLmFuaW1UeXBlXSA9ICd0cmFuc2xhdGUoJyArIHggKyAnLCAnICsgeSArICcpJztcbiAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyhwb3NpdGlvblByb3BzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb25Qcm9wc1tfLmFuaW1UeXBlXSA9ICd0cmFuc2xhdGUzZCgnICsgeCArICcsICcgKyB5ICsgJywgMHB4KSc7XG4gICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3MocG9zaXRpb25Qcm9wcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0RGltZW5zaW9ucyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy4kbGlzdC5jc3Moe1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAoJzBweCAnICsgXy5vcHRpb25zLmNlbnRlclBhZGRpbmcpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLiRsaXN0LmhlaWdodChfLiRzbGlkZXMuZmlyc3QoKS5vdXRlckhlaWdodCh0cnVlKSAqIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpO1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy4kbGlzdC5jc3Moe1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAoXy5vcHRpb25zLmNlbnRlclBhZGRpbmcgKyAnIDBweCcpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBfLmxpc3RXaWR0aCA9IF8uJGxpc3Qud2lkdGgoKTtcbiAgICAgICAgXy5saXN0SGVpZ2h0ID0gXy4kbGlzdC5oZWlnaHQoKTtcblxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlICYmIF8ub3B0aW9ucy52YXJpYWJsZVdpZHRoID09PSBmYWxzZSkge1xuICAgICAgICAgICAgXy5zbGlkZVdpZHRoID0gTWF0aC5jZWlsKF8ubGlzdFdpZHRoIC8gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyk7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLndpZHRoKE1hdGguY2VpbCgoXy5zbGlkZVdpZHRoICogXy4kc2xpZGVUcmFjay5jaGlsZHJlbignLnNsaWNrLXNsaWRlJykubGVuZ3RoKSkpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoXy5vcHRpb25zLnZhcmlhYmxlV2lkdGggPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2sud2lkdGgoNTAwMCAqIF8uc2xpZGVDb3VudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLnNsaWRlV2lkdGggPSBNYXRoLmNlaWwoXy5saXN0V2lkdGgpO1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5oZWlnaHQoTWF0aC5jZWlsKChfLiRzbGlkZXMuZmlyc3QoKS5vdXRlckhlaWdodCh0cnVlKSAqIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oJy5zbGljay1zbGlkZScpLmxlbmd0aCkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBvZmZzZXQgPSBfLiRzbGlkZXMuZmlyc3QoKS5vdXRlcldpZHRoKHRydWUpIC0gXy4kc2xpZGVzLmZpcnN0KCkud2lkdGgoKTtcbiAgICAgICAgaWYgKF8ub3B0aW9ucy52YXJpYWJsZVdpZHRoID09PSBmYWxzZSkgXy4kc2xpZGVUcmFjay5jaGlsZHJlbignLnNsaWNrLXNsaWRlJykud2lkdGgoXy5zbGlkZVdpZHRoIC0gb2Zmc2V0KTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0RmFkZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIHRhcmdldExlZnQ7XG5cbiAgICAgICAgXy4kc2xpZGVzLmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRhcmdldExlZnQgPSAoXy5zbGlkZVdpZHRoICogaW5kZXgpICogLTE7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICQoZWxlbWVudCkuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiB0YXJnZXRMZWZ0LFxuICAgICAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgICAgIHpJbmRleDogXy5vcHRpb25zLnpJbmRleCAtIDIsXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChlbGVtZW50KS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogdGFyZ2V0TGVmdCxcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IF8ub3B0aW9ucy56SW5kZXggLSAyLFxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIF8uJHNsaWRlcy5lcShfLmN1cnJlbnRTbGlkZSkuY3NzKHtcbiAgICAgICAgICAgIHpJbmRleDogXy5vcHRpb25zLnpJbmRleCAtIDEsXG4gICAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRIZWlnaHQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPT09IDEgJiYgXy5vcHRpb25zLmFkYXB0aXZlSGVpZ2h0ID09PSB0cnVlICYmIF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXRIZWlnaHQgPSBfLiRzbGlkZXMuZXEoXy5jdXJyZW50U2xpZGUpLm91dGVySGVpZ2h0KHRydWUpO1xuICAgICAgICAgICAgXy4kbGlzdC5jc3MoJ2hlaWdodCcsIHRhcmdldEhlaWdodCk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0T3B0aW9uID1cbiAgICBTbGljay5wcm90b3R5cGUuc2xpY2tTZXRPcHRpb24gPSBmdW5jdGlvbigpIHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogYWNjZXB0cyBhcmd1bWVudHMgaW4gZm9ybWF0IG9mOlxuICAgICAgICAgKlxuICAgICAgICAgKiAgLSBmb3IgY2hhbmdpbmcgYSBzaW5nbGUgb3B0aW9uJ3MgdmFsdWU6XG4gICAgICAgICAqICAgICAuc2xpY2soXCJzZXRPcHRpb25cIiwgb3B0aW9uLCB2YWx1ZSwgcmVmcmVzaCApXG4gICAgICAgICAqXG4gICAgICAgICAqICAtIGZvciBjaGFuZ2luZyBhIHNldCBvZiByZXNwb25zaXZlIG9wdGlvbnM6XG4gICAgICAgICAqICAgICAuc2xpY2soXCJzZXRPcHRpb25cIiwgJ3Jlc3BvbnNpdmUnLCBbe30sIC4uLl0sIHJlZnJlc2ggKVxuICAgICAgICAgKlxuICAgICAgICAgKiAgLSBmb3IgdXBkYXRpbmcgbXVsdGlwbGUgdmFsdWVzIGF0IG9uY2UgKG5vdCByZXNwb25zaXZlKVxuICAgICAgICAgKiAgICAgLnNsaWNrKFwic2V0T3B0aW9uXCIsIHsgJ29wdGlvbic6IHZhbHVlLCAuLi4gfSwgcmVmcmVzaCApXG4gICAgICAgICAqL1xuXG4gICAgICAgIHZhciBfID0gdGhpcywgbCwgaXRlbSwgb3B0aW9uLCB2YWx1ZSwgcmVmcmVzaCA9IGZhbHNlLCB0eXBlO1xuXG4gICAgICAgIGlmKCAkLnR5cGUoIGFyZ3VtZW50c1swXSApID09PSAnb2JqZWN0JyApIHtcblxuICAgICAgICAgICAgb3B0aW9uID0gIGFyZ3VtZW50c1swXTtcbiAgICAgICAgICAgIHJlZnJlc2ggPSBhcmd1bWVudHNbMV07XG4gICAgICAgICAgICB0eXBlID0gJ211bHRpcGxlJztcblxuICAgICAgICB9IGVsc2UgaWYgKCAkLnR5cGUoIGFyZ3VtZW50c1swXSApID09PSAnc3RyaW5nJyApIHtcblxuICAgICAgICAgICAgb3B0aW9uID0gIGFyZ3VtZW50c1swXTtcbiAgICAgICAgICAgIHZhbHVlID0gYXJndW1lbnRzWzFdO1xuICAgICAgICAgICAgcmVmcmVzaCA9IGFyZ3VtZW50c1syXTtcblxuICAgICAgICAgICAgaWYgKCBhcmd1bWVudHNbMF0gPT09ICdyZXNwb25zaXZlJyAmJiAkLnR5cGUoIGFyZ3VtZW50c1sxXSApID09PSAnYXJyYXknICkge1xuXG4gICAgICAgICAgICAgICAgdHlwZSA9ICdyZXNwb25zaXZlJztcblxuICAgICAgICAgICAgfSBlbHNlIGlmICggdHlwZW9mIGFyZ3VtZW50c1sxXSAhPT0gJ3VuZGVmaW5lZCcgKSB7XG5cbiAgICAgICAgICAgICAgICB0eXBlID0gJ3NpbmdsZSc7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCB0eXBlID09PSAnc2luZ2xlJyApIHtcblxuICAgICAgICAgICAgXy5vcHRpb25zW29wdGlvbl0gPSB2YWx1ZTtcblxuXG4gICAgICAgIH0gZWxzZSBpZiAoIHR5cGUgPT09ICdtdWx0aXBsZScgKSB7XG5cbiAgICAgICAgICAgICQuZWFjaCggb3B0aW9uICwgZnVuY3Rpb24oIG9wdCwgdmFsICkge1xuXG4gICAgICAgICAgICAgICAgXy5vcHRpb25zW29wdF0gPSB2YWw7XG5cbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgfSBlbHNlIGlmICggdHlwZSA9PT0gJ3Jlc3BvbnNpdmUnICkge1xuXG4gICAgICAgICAgICBmb3IgKCBpdGVtIGluIHZhbHVlICkge1xuXG4gICAgICAgICAgICAgICAgaWYoICQudHlwZSggXy5vcHRpb25zLnJlc3BvbnNpdmUgKSAhPT0gJ2FycmF5JyApIHtcblxuICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMucmVzcG9uc2l2ZSA9IFsgdmFsdWVbaXRlbV0gXTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgbCA9IF8ub3B0aW9ucy5yZXNwb25zaXZlLmxlbmd0aC0xO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGxvb3AgdGhyb3VnaCB0aGUgcmVzcG9uc2l2ZSBvYmplY3QgYW5kIHNwbGljZSBvdXQgZHVwbGljYXRlcy5cbiAgICAgICAgICAgICAgICAgICAgd2hpbGUoIGwgPj0gMCApIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIF8ub3B0aW9ucy5yZXNwb25zaXZlW2xdLmJyZWFrcG9pbnQgPT09IHZhbHVlW2l0ZW1dLmJyZWFrcG9pbnQgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMucmVzcG9uc2l2ZS5zcGxpY2UobCwxKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBsLS07XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucy5yZXNwb25zaXZlLnB1c2goIHZhbHVlW2l0ZW1dICk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCByZWZyZXNoICkge1xuXG4gICAgICAgICAgICBfLnVubG9hZCgpO1xuICAgICAgICAgICAgXy5yZWluaXQoKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNldFBvc2l0aW9uID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uc2V0RGltZW5zaW9ucygpO1xuXG4gICAgICAgIF8uc2V0SGVpZ2h0KCk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgXy5zZXRDU1MoXy5nZXRMZWZ0KF8uY3VycmVudFNsaWRlKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLnNldEZhZGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdzZXRQb3NpdGlvbicsIFtfXSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNldFByb3BzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgYm9keVN0eWxlID0gZG9jdW1lbnQuYm9keS5zdHlsZTtcblxuICAgICAgICBfLnBvc2l0aW9uUHJvcCA9IF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gdHJ1ZSA/ICd0b3AnIDogJ2xlZnQnO1xuXG4gICAgICAgIGlmIChfLnBvc2l0aW9uUHJvcCA9PT0gJ3RvcCcpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlci5hZGRDbGFzcygnc2xpY2stdmVydGljYWwnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uJHNsaWRlci5yZW1vdmVDbGFzcygnc2xpY2stdmVydGljYWwnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChib2R5U3R5bGUuV2Via2l0VHJhbnNpdGlvbiAhPT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgICBib2R5U3R5bGUuTW96VHJhbnNpdGlvbiAhPT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgICBib2R5U3R5bGUubXNUcmFuc2l0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMudXNlQ1NTID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy5jc3NUcmFuc2l0aW9ucyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5mYWRlICkge1xuICAgICAgICAgICAgaWYgKCB0eXBlb2YgXy5vcHRpb25zLnpJbmRleCA9PT0gJ251bWJlcicgKSB7XG4gICAgICAgICAgICAgICAgaWYoIF8ub3B0aW9ucy56SW5kZXggPCAzICkge1xuICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMuekluZGV4ID0gMztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF8ub3B0aW9ucy56SW5kZXggPSBfLmRlZmF1bHRzLnpJbmRleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChib2R5U3R5bGUuT1RyYW5zZm9ybSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBfLmFuaW1UeXBlID0gJ09UcmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2Zvcm1UeXBlID0gJy1vLXRyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zaXRpb25UeXBlID0gJ09UcmFuc2l0aW9uJztcbiAgICAgICAgICAgIGlmIChib2R5U3R5bGUucGVyc3BlY3RpdmVQcm9wZXJ0eSA9PT0gdW5kZWZpbmVkICYmIGJvZHlTdHlsZS53ZWJraXRQZXJzcGVjdGl2ZSA9PT0gdW5kZWZpbmVkKSBfLmFuaW1UeXBlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvZHlTdHlsZS5Nb3pUcmFuc2Zvcm0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgXy5hbmltVHlwZSA9ICdNb3pUcmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2Zvcm1UeXBlID0gJy1tb3otdHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNpdGlvblR5cGUgPSAnTW96VHJhbnNpdGlvbic7XG4gICAgICAgICAgICBpZiAoYm9keVN0eWxlLnBlcnNwZWN0aXZlUHJvcGVydHkgPT09IHVuZGVmaW5lZCAmJiBib2R5U3R5bGUuTW96UGVyc3BlY3RpdmUgPT09IHVuZGVmaW5lZCkgXy5hbmltVHlwZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChib2R5U3R5bGUud2Via2l0VHJhbnNmb3JtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIF8uYW5pbVR5cGUgPSAnd2Via2l0VHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNmb3JtVHlwZSA9ICctd2Via2l0LXRyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zaXRpb25UeXBlID0gJ3dlYmtpdFRyYW5zaXRpb24nO1xuICAgICAgICAgICAgaWYgKGJvZHlTdHlsZS5wZXJzcGVjdGl2ZVByb3BlcnR5ID09PSB1bmRlZmluZWQgJiYgYm9keVN0eWxlLndlYmtpdFBlcnNwZWN0aXZlID09PSB1bmRlZmluZWQpIF8uYW5pbVR5cGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm9keVN0eWxlLm1zVHJhbnNmb3JtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIF8uYW5pbVR5cGUgPSAnbXNUcmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2Zvcm1UeXBlID0gJy1tcy10cmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2l0aW9uVHlwZSA9ICdtc1RyYW5zaXRpb24nO1xuICAgICAgICAgICAgaWYgKGJvZHlTdHlsZS5tc1RyYW5zZm9ybSA9PT0gdW5kZWZpbmVkKSBfLmFuaW1UeXBlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvZHlTdHlsZS50cmFuc2Zvcm0gIT09IHVuZGVmaW5lZCAmJiBfLmFuaW1UeXBlICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgXy5hbmltVHlwZSA9ICd0cmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2Zvcm1UeXBlID0gJ3RyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zaXRpb25UeXBlID0gJ3RyYW5zaXRpb24nO1xuICAgICAgICB9XG4gICAgICAgIF8udHJhbnNmb3Jtc0VuYWJsZWQgPSBfLm9wdGlvbnMudXNlVHJhbnNmb3JtICYmIChfLmFuaW1UeXBlICE9PSBudWxsICYmIF8uYW5pbVR5cGUgIT09IGZhbHNlKTtcbiAgICB9O1xuXG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0U2xpZGVDbGFzc2VzID0gZnVuY3Rpb24oaW5kZXgpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBjZW50ZXJPZmZzZXQsIGFsbFNsaWRlcywgaW5kZXhPZmZzZXQsIHJlbWFpbmRlcjtcblxuICAgICAgICBhbGxTbGlkZXMgPSBfLiRzbGlkZXJcbiAgICAgICAgICAgIC5maW5kKCcuc2xpY2stc2xpZGUnKVxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1hY3RpdmUgc2xpY2stY2VudGVyIHNsaWNrLWN1cnJlbnQnKVxuICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcblxuICAgICAgICBfLiRzbGlkZXNcbiAgICAgICAgICAgIC5lcShpbmRleClcbiAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stY3VycmVudCcpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuXG4gICAgICAgICAgICB2YXIgZXZlbkNvZWYgPSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICUgMiA9PT0gMCA/IDEgOiAwO1xuXG4gICAgICAgICAgICBjZW50ZXJPZmZzZXQgPSBNYXRoLmZsb29yKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyKTtcblxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gdHJ1ZSkge1xuXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID49IGNlbnRlck9mZnNldCAmJiBpbmRleCA8PSAoXy5zbGlkZUNvdW50IC0gMSkgLSBjZW50ZXJPZmZzZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgXy4kc2xpZGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoaW5kZXggLSBjZW50ZXJPZmZzZXQgKyBldmVuQ29lZiwgaW5kZXggKyBjZW50ZXJPZmZzZXQgKyAxKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgIGluZGV4T2Zmc2V0ID0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyArIGluZGV4O1xuICAgICAgICAgICAgICAgICAgICBhbGxTbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZShpbmRleE9mZnNldCAtIGNlbnRlck9mZnNldCArIDEgKyBldmVuQ29lZiwgaW5kZXhPZmZzZXQgKyBjZW50ZXJPZmZzZXQgKyAyKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcblxuICAgICAgICAgICAgICAgICAgICBhbGxTbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5lcShhbGxTbGlkZXMubGVuZ3RoIC0gMSAtIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWNlbnRlcicpO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpbmRleCA9PT0gXy5zbGlkZUNvdW50IC0gMSkge1xuXG4gICAgICAgICAgICAgICAgICAgIGFsbFNsaWRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgLmVxKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWNlbnRlcicpO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF8uJHNsaWRlc1xuICAgICAgICAgICAgICAgIC5lcShpbmRleClcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWNlbnRlcicpO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDw9IChfLnNsaWRlQ291bnQgLSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSkge1xuXG4gICAgICAgICAgICAgICAgXy4kc2xpZGVzXG4gICAgICAgICAgICAgICAgICAgIC5zbGljZShpbmRleCwgaW5kZXggKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KVxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFsbFNsaWRlcy5sZW5ndGggPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICAgICAgYWxsU2xpZGVzXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICByZW1haW5kZXIgPSBfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93O1xuICAgICAgICAgICAgICAgIGluZGV4T2Zmc2V0ID0gXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlID8gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyArIGluZGV4IDogaW5kZXg7XG5cbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA9PSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgJiYgKF8uc2xpZGVDb3VudCAtIGluZGV4KSA8IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgICAgICAgICBhbGxTbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZShpbmRleE9mZnNldCAtIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC0gcmVtYWluZGVyKSwgaW5kZXhPZmZzZXQgKyByZW1haW5kZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgYWxsU2xpZGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoaW5kZXhPZmZzZXQsIGluZGV4T2Zmc2V0ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMubGF6eUxvYWQgPT09ICdvbmRlbWFuZCcgfHwgXy5vcHRpb25zLmxhenlMb2FkID09PSAnYW50aWNpcGF0ZWQnKSB7XG4gICAgICAgICAgICBfLmxhenlMb2FkKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNldHVwSW5maW5pdGUgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBpLCBzbGlkZUluZGV4LCBpbmZpbml0ZUNvdW50O1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy5vcHRpb25zLmNlbnRlck1vZGUgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IHRydWUgJiYgXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XG5cbiAgICAgICAgICAgIHNsaWRlSW5kZXggPSBudWxsO1xuXG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZmluaXRlQ291bnQgPSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICsgMTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZUNvdW50ID0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBfLnNsaWRlQ291bnQ7IGkgPiAoXy5zbGlkZUNvdW50IC1cbiAgICAgICAgICAgICAgICAgICAgICAgIGluZmluaXRlQ291bnQpOyBpIC09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVJbmRleCA9IGkgLSAxO1xuICAgICAgICAgICAgICAgICAgICAkKF8uJHNsaWRlc1tzbGlkZUluZGV4XSkuY2xvbmUodHJ1ZSkuYXR0cignaWQnLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLXNsaWNrLWluZGV4Jywgc2xpZGVJbmRleCAtIF8uc2xpZGVDb3VudClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5wcmVwZW5kVG8oXy4kc2xpZGVUcmFjaykuYWRkQ2xhc3MoJ3NsaWNrLWNsb25lZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgaW5maW5pdGVDb3VudCAgKyBfLnNsaWRlQ291bnQ7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZUluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICAgICAgJChfLiRzbGlkZXNbc2xpZGVJbmRleF0pLmNsb25lKHRydWUpLmF0dHIoJ2lkJywgJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1zbGljay1pbmRleCcsIHNsaWRlSW5kZXggKyBfLnNsaWRlQ291bnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kVG8oXy4kc2xpZGVUcmFjaykuYWRkQ2xhc3MoJ3NsaWNrLWNsb25lZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmZpbmQoJy5zbGljay1jbG9uZWQnKS5maW5kKCdbaWRdJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKCdpZCcsICcnKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuaW50ZXJydXB0ID0gZnVuY3Rpb24oIHRvZ2dsZSApIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYoICF0b2dnbGUgKSB7XG4gICAgICAgICAgICBfLmF1dG9QbGF5KCk7XG4gICAgICAgIH1cbiAgICAgICAgXy5pbnRlcnJ1cHRlZCA9IHRvZ2dsZTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2VsZWN0SGFuZGxlciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIHZhciB0YXJnZXRFbGVtZW50ID1cbiAgICAgICAgICAgICQoZXZlbnQudGFyZ2V0KS5pcygnLnNsaWNrLXNsaWRlJykgP1xuICAgICAgICAgICAgICAgICQoZXZlbnQudGFyZ2V0KSA6XG4gICAgICAgICAgICAgICAgJChldmVudC50YXJnZXQpLnBhcmVudHMoJy5zbGljay1zbGlkZScpO1xuXG4gICAgICAgIHZhciBpbmRleCA9IHBhcnNlSW50KHRhcmdldEVsZW1lbnQuYXR0cignZGF0YS1zbGljay1pbmRleCcpKTtcblxuICAgICAgICBpZiAoIWluZGV4KSBpbmRleCA9IDA7XG5cbiAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgIF8uc2xpZGVIYW5kbGVyKGluZGV4LCBmYWxzZSwgdHJ1ZSk7XG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgfVxuXG4gICAgICAgIF8uc2xpZGVIYW5kbGVyKGluZGV4KTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2xpZGVIYW5kbGVyID0gZnVuY3Rpb24oaW5kZXgsIHN5bmMsIGRvbnRBbmltYXRlKSB7XG5cbiAgICAgICAgdmFyIHRhcmdldFNsaWRlLCBhbmltU2xpZGUsIG9sZFNsaWRlLCBzbGlkZUxlZnQsIHRhcmdldExlZnQgPSBudWxsLFxuICAgICAgICAgICAgXyA9IHRoaXMsIG5hdlRhcmdldDtcblxuICAgICAgICBzeW5jID0gc3luYyB8fCBmYWxzZTtcblxuICAgICAgICBpZiAoXy5hbmltYXRpbmcgPT09IHRydWUgJiYgXy5vcHRpb25zLndhaXRGb3JBbmltYXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IHRydWUgJiYgXy5jdXJyZW50U2xpZGUgPT09IGluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3luYyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIF8uYXNOYXZGb3IoaW5kZXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGFyZ2V0U2xpZGUgPSBpbmRleDtcbiAgICAgICAgdGFyZ2V0TGVmdCA9IF8uZ2V0TGVmdCh0YXJnZXRTbGlkZSk7XG4gICAgICAgIHNsaWRlTGVmdCA9IF8uZ2V0TGVmdChfLmN1cnJlbnRTbGlkZSk7XG5cbiAgICAgICAgXy5jdXJyZW50TGVmdCA9IF8uc3dpcGVMZWZ0ID09PSBudWxsID8gc2xpZGVMZWZ0IDogXy5zd2lwZUxlZnQ7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gZmFsc2UgJiYgXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IGZhbHNlICYmIChpbmRleCA8IDAgfHwgaW5kZXggPiBfLmdldERvdENvdW50KCkgKiBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpKSB7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0U2xpZGUgPSBfLmN1cnJlbnRTbGlkZTtcbiAgICAgICAgICAgICAgICBpZiAoZG9udEFuaW1hdGUgIT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgICAgICAgICBfLmFuaW1hdGVTbGlkZShzbGlkZUxlZnQsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5wb3N0U2xpZGUodGFyZ2V0U2xpZGUpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZSh0YXJnZXRTbGlkZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2UgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gZmFsc2UgJiYgXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUgJiYgKGluZGV4IDwgMCB8fCBpbmRleCA+IChfLnNsaWRlQ291bnQgLSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpKSkge1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFNsaWRlID0gXy5jdXJyZW50U2xpZGU7XG4gICAgICAgICAgICAgICAgaWYgKGRvbnRBbmltYXRlICE9PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgICAgICAgICAgXy5hbmltYXRlU2xpZGUoc2xpZGVMZWZ0LCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8ucG9zdFNsaWRlKHRhcmdldFNsaWRlKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgXy5wb3N0U2xpZGUodGFyZ2V0U2xpZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggXy5vcHRpb25zLmF1dG9wbGF5ICkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChfLmF1dG9QbGF5VGltZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRhcmdldFNsaWRlIDwgMCkge1xuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGFuaW1TbGlkZSA9IF8uc2xpZGVDb3VudCAtIChfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbmltU2xpZGUgPSBfLnNsaWRlQ291bnQgKyB0YXJnZXRTbGlkZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0YXJnZXRTbGlkZSA+PSBfLnNsaWRlQ291bnQpIHtcbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgIT09IDApIHtcbiAgICAgICAgICAgICAgICBhbmltU2xpZGUgPSAwO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbmltU2xpZGUgPSB0YXJnZXRTbGlkZSAtIF8uc2xpZGVDb3VudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFuaW1TbGlkZSA9IHRhcmdldFNsaWRlO1xuICAgICAgICB9XG5cbiAgICAgICAgXy5hbmltYXRpbmcgPSB0cnVlO1xuXG4gICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdiZWZvcmVDaGFuZ2UnLCBbXywgXy5jdXJyZW50U2xpZGUsIGFuaW1TbGlkZV0pO1xuXG4gICAgICAgIG9sZFNsaWRlID0gXy5jdXJyZW50U2xpZGU7XG4gICAgICAgIF8uY3VycmVudFNsaWRlID0gYW5pbVNsaWRlO1xuXG4gICAgICAgIF8uc2V0U2xpZGVDbGFzc2VzKF8uY3VycmVudFNsaWRlKTtcblxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5hc05hdkZvciApIHtcblxuICAgICAgICAgICAgbmF2VGFyZ2V0ID0gXy5nZXROYXZUYXJnZXQoKTtcbiAgICAgICAgICAgIG5hdlRhcmdldCA9IG5hdlRhcmdldC5zbGljaygnZ2V0U2xpY2snKTtcblxuICAgICAgICAgICAgaWYgKCBuYXZUYXJnZXQuc2xpZGVDb3VudCA8PSBuYXZUYXJnZXQub3B0aW9ucy5zbGlkZXNUb1Nob3cgKSB7XG4gICAgICAgICAgICAgICAgbmF2VGFyZ2V0LnNldFNsaWRlQ2xhc3NlcyhfLmN1cnJlbnRTbGlkZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIF8udXBkYXRlRG90cygpO1xuICAgICAgICBfLnVwZGF0ZUFycm93cygpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKGRvbnRBbmltYXRlICE9PSB0cnVlKSB7XG5cbiAgICAgICAgICAgICAgICBfLmZhZGVTbGlkZU91dChvbGRTbGlkZSk7XG5cbiAgICAgICAgICAgICAgICBfLmZhZGVTbGlkZShhbmltU2xpZGUsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZShhbmltU2xpZGUpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF8ucG9zdFNsaWRlKGFuaW1TbGlkZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfLmFuaW1hdGVIZWlnaHQoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkb250QW5pbWF0ZSAhPT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICBfLmFuaW1hdGVTbGlkZSh0YXJnZXRMZWZ0LCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZShhbmltU2xpZGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLnBvc3RTbGlkZShhbmltU2xpZGUpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnN0YXJ0TG9hZCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmFycm93cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgIF8uJHByZXZBcnJvdy5oaWRlKCk7XG4gICAgICAgICAgICBfLiRuZXh0QXJyb3cuaGlkZSgpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmRvdHMgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICBfLiRkb3RzLmhpZGUoKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgXy4kc2xpZGVyLmFkZENsYXNzKCdzbGljay1sb2FkaW5nJyk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnN3aXBlRGlyZWN0aW9uID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIHhEaXN0LCB5RGlzdCwgciwgc3dpcGVBbmdsZSwgXyA9IHRoaXM7XG5cbiAgICAgICAgeERpc3QgPSBfLnRvdWNoT2JqZWN0LnN0YXJ0WCAtIF8udG91Y2hPYmplY3QuY3VyWDtcbiAgICAgICAgeURpc3QgPSBfLnRvdWNoT2JqZWN0LnN0YXJ0WSAtIF8udG91Y2hPYmplY3QuY3VyWTtcbiAgICAgICAgciA9IE1hdGguYXRhbjIoeURpc3QsIHhEaXN0KTtcblxuICAgICAgICBzd2lwZUFuZ2xlID0gTWF0aC5yb3VuZChyICogMTgwIC8gTWF0aC5QSSk7XG4gICAgICAgIGlmIChzd2lwZUFuZ2xlIDwgMCkge1xuICAgICAgICAgICAgc3dpcGVBbmdsZSA9IDM2MCAtIE1hdGguYWJzKHN3aXBlQW5nbGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKChzd2lwZUFuZ2xlIDw9IDQ1KSAmJiAoc3dpcGVBbmdsZSA+PSAwKSkge1xuICAgICAgICAgICAgcmV0dXJuIChfLm9wdGlvbnMucnRsID09PSBmYWxzZSA/ICdsZWZ0JyA6ICdyaWdodCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoc3dpcGVBbmdsZSA8PSAzNjApICYmIChzd2lwZUFuZ2xlID49IDMxNSkpIHtcbiAgICAgICAgICAgIHJldHVybiAoXy5vcHRpb25zLnJ0bCA9PT0gZmFsc2UgPyAnbGVmdCcgOiAncmlnaHQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKHN3aXBlQW5nbGUgPj0gMTM1KSAmJiAoc3dpcGVBbmdsZSA8PSAyMjUpKSB7XG4gICAgICAgICAgICByZXR1cm4gKF8ub3B0aW9ucy5ydGwgPT09IGZhbHNlID8gJ3JpZ2h0JyA6ICdsZWZ0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGlmICgoc3dpcGVBbmdsZSA+PSAzNSkgJiYgKHN3aXBlQW5nbGUgPD0gMTM1KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnZG93bic7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAndXAnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICd2ZXJ0aWNhbCc7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnN3aXBlRW5kID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBzbGlkZUNvdW50LFxuICAgICAgICAgICAgZGlyZWN0aW9uO1xuXG4gICAgICAgIF8uZHJhZ2dpbmcgPSBmYWxzZTtcbiAgICAgICAgXy5zd2lwaW5nID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKF8uc2Nyb2xsaW5nKSB7XG4gICAgICAgICAgICBfLnNjcm9sbGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgXy5pbnRlcnJ1cHRlZCA9IGZhbHNlO1xuICAgICAgICBfLnNob3VsZENsaWNrID0gKCBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoID4gMTAgKSA/IGZhbHNlIDogdHJ1ZTtcblxuICAgICAgICBpZiAoIF8udG91Y2hPYmplY3QuY3VyWCA9PT0gdW5kZWZpbmVkICkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBfLnRvdWNoT2JqZWN0LmVkZ2VIaXQgPT09IHRydWUgKSB7XG4gICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignZWRnZScsIFtfLCBfLnN3aXBlRGlyZWN0aW9uKCkgXSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIF8udG91Y2hPYmplY3Quc3dpcGVMZW5ndGggPj0gXy50b3VjaE9iamVjdC5taW5Td2lwZSApIHtcblxuICAgICAgICAgICAgZGlyZWN0aW9uID0gXy5zd2lwZURpcmVjdGlvbigpO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCBkaXJlY3Rpb24gKSB7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgICAgICAgICBjYXNlICdkb3duJzpcblxuICAgICAgICAgICAgICAgICAgICBzbGlkZUNvdW50ID1cbiAgICAgICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucy5zd2lwZVRvU2xpZGUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uY2hlY2tOYXZpZ2FibGUoIF8uY3VycmVudFNsaWRlICsgXy5nZXRTbGlkZUNvdW50KCkgKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgKyBfLmdldFNsaWRlQ291bnQoKTtcblxuICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnREaXJlY3Rpb24gPSAwO1xuXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ3VwJzpcblxuICAgICAgICAgICAgICAgICAgICBzbGlkZUNvdW50ID1cbiAgICAgICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucy5zd2lwZVRvU2xpZGUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uY2hlY2tOYXZpZ2FibGUoIF8uY3VycmVudFNsaWRlIC0gXy5nZXRTbGlkZUNvdW50KCkgKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgLSBfLmdldFNsaWRlQ291bnQoKTtcblxuICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnREaXJlY3Rpb24gPSAxO1xuXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcblxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKCBkaXJlY3Rpb24gIT0gJ3ZlcnRpY2FsJyApIHtcblxuICAgICAgICAgICAgICAgIF8uc2xpZGVIYW5kbGVyKCBzbGlkZUNvdW50ICk7XG4gICAgICAgICAgICAgICAgXy50b3VjaE9iamVjdCA9IHt9O1xuICAgICAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdzd2lwZScsIFtfLCBkaXJlY3Rpb24gXSk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBpZiAoIF8udG91Y2hPYmplY3Quc3RhcnRYICE9PSBfLnRvdWNoT2JqZWN0LmN1clggKSB7XG5cbiAgICAgICAgICAgICAgICBfLnNsaWRlSGFuZGxlciggXy5jdXJyZW50U2xpZGUgKTtcbiAgICAgICAgICAgICAgICBfLnRvdWNoT2JqZWN0ID0ge307XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnN3aXBlSGFuZGxlciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmICgoXy5vcHRpb25zLnN3aXBlID09PSBmYWxzZSkgfHwgKCdvbnRvdWNoZW5kJyBpbiBkb2N1bWVudCAmJiBfLm9wdGlvbnMuc3dpcGUgPT09IGZhbHNlKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2UgaWYgKF8ub3B0aW9ucy5kcmFnZ2FibGUgPT09IGZhbHNlICYmIGV2ZW50LnR5cGUuaW5kZXhPZignbW91c2UnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIF8udG91Y2hPYmplY3QuZmluZ2VyQ291bnQgPSBldmVudC5vcmlnaW5hbEV2ZW50ICYmIGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlcyAhPT0gdW5kZWZpbmVkID9cbiAgICAgICAgICAgIGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlcy5sZW5ndGggOiAxO1xuXG4gICAgICAgIF8udG91Y2hPYmplY3QubWluU3dpcGUgPSBfLmxpc3RXaWR0aCAvIF8ub3B0aW9uc1xuICAgICAgICAgICAgLnRvdWNoVGhyZXNob2xkO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWxTd2lwaW5nID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLnRvdWNoT2JqZWN0Lm1pblN3aXBlID0gXy5saXN0SGVpZ2h0IC8gXy5vcHRpb25zXG4gICAgICAgICAgICAgICAgLnRvdWNoVGhyZXNob2xkO1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpdGNoIChldmVudC5kYXRhLmFjdGlvbikge1xuXG4gICAgICAgICAgICBjYXNlICdzdGFydCc6XG4gICAgICAgICAgICAgICAgXy5zd2lwZVN0YXJ0KGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnbW92ZSc6XG4gICAgICAgICAgICAgICAgXy5zd2lwZU1vdmUoZXZlbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdlbmQnOlxuICAgICAgICAgICAgICAgIF8uc3dpcGVFbmQoZXZlbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc3dpcGVNb3ZlID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBlZGdlV2FzSGl0ID0gZmFsc2UsXG4gICAgICAgICAgICBjdXJMZWZ0LCBzd2lwZURpcmVjdGlvbiwgc3dpcGVMZW5ndGgsIHBvc2l0aW9uT2Zmc2V0LCB0b3VjaGVzLCB2ZXJ0aWNhbFN3aXBlTGVuZ3RoO1xuXG4gICAgICAgIHRvdWNoZXMgPSBldmVudC5vcmlnaW5hbEV2ZW50ICE9PSB1bmRlZmluZWQgPyBldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXMgOiBudWxsO1xuXG4gICAgICAgIGlmICghXy5kcmFnZ2luZyB8fCBfLnNjcm9sbGluZyB8fCB0b3VjaGVzICYmIHRvdWNoZXMubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBjdXJMZWZ0ID0gXy5nZXRMZWZ0KF8uY3VycmVudFNsaWRlKTtcblxuICAgICAgICBfLnRvdWNoT2JqZWN0LmN1clggPSB0b3VjaGVzICE9PSB1bmRlZmluZWQgPyB0b3VjaGVzWzBdLnBhZ2VYIDogZXZlbnQuY2xpZW50WDtcbiAgICAgICAgXy50b3VjaE9iamVjdC5jdXJZID0gdG91Y2hlcyAhPT0gdW5kZWZpbmVkID8gdG91Y2hlc1swXS5wYWdlWSA6IGV2ZW50LmNsaWVudFk7XG5cbiAgICAgICAgXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aCA9IE1hdGgucm91bmQoTWF0aC5zcXJ0KFxuICAgICAgICAgICAgTWF0aC5wb3coXy50b3VjaE9iamVjdC5jdXJYIC0gXy50b3VjaE9iamVjdC5zdGFydFgsIDIpKSk7XG5cbiAgICAgICAgdmVydGljYWxTd2lwZUxlbmd0aCA9IE1hdGgucm91bmQoTWF0aC5zcXJ0KFxuICAgICAgICAgICAgTWF0aC5wb3coXy50b3VjaE9iamVjdC5jdXJZIC0gXy50b3VjaE9iamVjdC5zdGFydFksIDIpKSk7XG5cbiAgICAgICAgaWYgKCFfLm9wdGlvbnMudmVydGljYWxTd2lwaW5nICYmICFfLnN3aXBpbmcgJiYgdmVydGljYWxTd2lwZUxlbmd0aCA+IDQpIHtcbiAgICAgICAgICAgIF8uc2Nyb2xsaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWxTd2lwaW5nID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoID0gdmVydGljYWxTd2lwZUxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXBlRGlyZWN0aW9uID0gXy5zd2lwZURpcmVjdGlvbigpO1xuXG4gICAgICAgIGlmIChldmVudC5vcmlnaW5hbEV2ZW50ICE9PSB1bmRlZmluZWQgJiYgXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aCA+IDQpIHtcbiAgICAgICAgICAgIF8uc3dpcGluZyA9IHRydWU7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcG9zaXRpb25PZmZzZXQgPSAoXy5vcHRpb25zLnJ0bCA9PT0gZmFsc2UgPyAxIDogLTEpICogKF8udG91Y2hPYmplY3QuY3VyWCA+IF8udG91Y2hPYmplY3Quc3RhcnRYID8gMSA6IC0xKTtcbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uT2Zmc2V0ID0gXy50b3VjaE9iamVjdC5jdXJZID4gXy50b3VjaE9iamVjdC5zdGFydFkgPyAxIDogLTE7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHN3aXBlTGVuZ3RoID0gXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aDtcblxuICAgICAgICBfLnRvdWNoT2JqZWN0LmVkZ2VIaXQgPSBmYWxzZTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgaWYgKChfLmN1cnJlbnRTbGlkZSA9PT0gMCAmJiBzd2lwZURpcmVjdGlvbiA9PT0gJ3JpZ2h0JykgfHwgKF8uY3VycmVudFNsaWRlID49IF8uZ2V0RG90Q291bnQoKSAmJiBzd2lwZURpcmVjdGlvbiA9PT0gJ2xlZnQnKSkge1xuICAgICAgICAgICAgICAgIHN3aXBlTGVuZ3RoID0gXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aCAqIF8ub3B0aW9ucy5lZGdlRnJpY3Rpb247XG4gICAgICAgICAgICAgICAgXy50b3VjaE9iamVjdC5lZGdlSGl0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfLnN3aXBlTGVmdCA9IGN1ckxlZnQgKyBzd2lwZUxlbmd0aCAqIHBvc2l0aW9uT2Zmc2V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy5zd2lwZUxlZnQgPSBjdXJMZWZ0ICsgKHN3aXBlTGVuZ3RoICogKF8uJGxpc3QuaGVpZ2h0KCkgLyBfLmxpc3RXaWR0aCkpICogcG9zaXRpb25PZmZzZXQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uc3dpcGVMZWZ0ID0gY3VyTGVmdCArIHN3aXBlTGVuZ3RoICogcG9zaXRpb25PZmZzZXQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IHRydWUgfHwgXy5vcHRpb25zLnRvdWNoTW92ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLmFuaW1hdGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy5zd2lwZUxlZnQgPSBudWxsO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgXy5zZXRDU1MoXy5zd2lwZUxlZnQpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zd2lwZVN0YXJ0ID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICB0b3VjaGVzO1xuXG4gICAgICAgIF8uaW50ZXJydXB0ZWQgPSB0cnVlO1xuXG4gICAgICAgIGlmIChfLnRvdWNoT2JqZWN0LmZpbmdlckNvdW50ICE9PSAxIHx8IF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICBfLnRvdWNoT2JqZWN0ID0ge307XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXZlbnQub3JpZ2luYWxFdmVudCAhPT0gdW5kZWZpbmVkICYmIGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0b3VjaGVzID0gZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgXy50b3VjaE9iamVjdC5zdGFydFggPSBfLnRvdWNoT2JqZWN0LmN1clggPSB0b3VjaGVzICE9PSB1bmRlZmluZWQgPyB0b3VjaGVzLnBhZ2VYIDogZXZlbnQuY2xpZW50WDtcbiAgICAgICAgXy50b3VjaE9iamVjdC5zdGFydFkgPSBfLnRvdWNoT2JqZWN0LmN1clkgPSB0b3VjaGVzICE9PSB1bmRlZmluZWQgPyB0b3VjaGVzLnBhZ2VZIDogZXZlbnQuY2xpZW50WTtcblxuICAgICAgICBfLmRyYWdnaW5nID0gdHJ1ZTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUudW5maWx0ZXJTbGlkZXMgPSBTbGljay5wcm90b3R5cGUuc2xpY2tVbmZpbHRlciA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy4kc2xpZGVzQ2FjaGUgIT09IG51bGwpIHtcblxuICAgICAgICAgICAgXy51bmxvYWQoKTtcblxuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmRldGFjaCgpO1xuXG4gICAgICAgICAgICBfLiRzbGlkZXNDYWNoZS5hcHBlbmRUbyhfLiRzbGlkZVRyYWNrKTtcblxuICAgICAgICAgICAgXy5yZWluaXQoKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnVubG9hZCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICAkKCcuc2xpY2stY2xvbmVkJywgXy4kc2xpZGVyKS5yZW1vdmUoKTtcblxuICAgICAgICBpZiAoXy4kZG90cykge1xuICAgICAgICAgICAgXy4kZG90cy5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLiRwcmV2QXJyb3cgJiYgXy5odG1sRXhwci50ZXN0KF8ub3B0aW9ucy5wcmV2QXJyb3cpKSB7XG4gICAgICAgICAgICBfLiRwcmV2QXJyb3cucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy4kbmV4dEFycm93ICYmIF8uaHRtbEV4cHIudGVzdChfLm9wdGlvbnMubmV4dEFycm93KSkge1xuICAgICAgICAgICAgXy4kbmV4dEFycm93LnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgXy4kc2xpZGVzXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLXNsaWRlIHNsaWNrLWFjdGl2ZSBzbGljay12aXNpYmxlIHNsaWNrLWN1cnJlbnQnKVxuICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKVxuICAgICAgICAgICAgLmNzcygnd2lkdGgnLCAnJyk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnVuc2xpY2sgPSBmdW5jdGlvbihmcm9tQnJlYWtwb2ludCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcbiAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ3Vuc2xpY2snLCBbXywgZnJvbUJyZWFrcG9pbnRdKTtcbiAgICAgICAgXy5kZXN0cm95KCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnVwZGF0ZUFycm93cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGNlbnRlck9mZnNldDtcblxuICAgICAgICBjZW50ZXJPZmZzZXQgPSBNYXRoLmZsb29yKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyKTtcblxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5hcnJvd3MgPT09IHRydWUgJiZcbiAgICAgICAgICAgIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgJiZcbiAgICAgICAgICAgICFfLm9wdGlvbnMuaW5maW5pdGUgKSB7XG5cbiAgICAgICAgICAgIF8uJHByZXZBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ2ZhbHNlJyk7XG4gICAgICAgICAgICBfLiRuZXh0QXJyb3cucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICdmYWxzZScpO1xuXG4gICAgICAgICAgICBpZiAoXy5jdXJyZW50U2xpZGUgPT09IDApIHtcblxuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5hZGRDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ3RydWUnKTtcbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICdmYWxzZScpO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKF8uY3VycmVudFNsaWRlID49IF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgJiYgXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IGZhbHNlKSB7XG5cbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cuYWRkQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICd0cnVlJyk7XG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93LnJlbW92ZUNsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmIChfLmN1cnJlbnRTbGlkZSA+PSBfLnNsaWRlQ291bnQgLSAxICYmIF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG5cbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cuYWRkQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICd0cnVlJyk7XG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93LnJlbW92ZUNsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUudXBkYXRlRG90cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy4kZG90cyAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICBfLiRkb3RzXG4gICAgICAgICAgICAgICAgLmZpbmQoJ2xpJylcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAuZW5kKCk7XG5cbiAgICAgICAgICAgIF8uJGRvdHNcbiAgICAgICAgICAgICAgICAuZmluZCgnbGknKVxuICAgICAgICAgICAgICAgIC5lcShNYXRoLmZsb29yKF8uY3VycmVudFNsaWRlIC8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKSlcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUudmlzaWJpbGl0eSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5hdXRvcGxheSApIHtcblxuICAgICAgICAgICAgaWYgKCBkb2N1bWVudFtfLmhpZGRlbl0gKSB7XG5cbiAgICAgICAgICAgICAgICBfLmludGVycnVwdGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIF8uaW50ZXJydXB0ZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICAkLmZuLnNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIG9wdCA9IGFyZ3VtZW50c1swXSxcbiAgICAgICAgICAgIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpLFxuICAgICAgICAgICAgbCA9IF8ubGVuZ3RoLFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIHJldDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHQgPT0gJ29iamVjdCcgfHwgdHlwZW9mIG9wdCA9PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgICAgICBfW2ldLnNsaWNrID0gbmV3IFNsaWNrKF9baV0sIG9wdCk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcmV0ID0gX1tpXS5zbGlja1tvcHRdLmFwcGx5KF9baV0uc2xpY2ssIGFyZ3MpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiByZXQgIT0gJ3VuZGVmaW5lZCcpIHJldHVybiByZXQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF87XG4gICAgfTtcblxufSkpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7Il0sInNvdXJjZVJvb3QiOiIifQ==