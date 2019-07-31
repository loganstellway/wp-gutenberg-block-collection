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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@mapbox/point-geometry/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@mapbox/point-geometry/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = Point;

/**
 * A standalone point geometry with useful accessor, comparison, and
 * modification methods.
 *
 * @class Point
 * @param {Number} x the x-coordinate. this could be longitude or screen
 * pixels, or any other sort of unit.
 * @param {Number} y the y-coordinate. this could be latitude or screen
 * pixels, or any other sort of unit.
 * @example
 * var point = new Point(-77, 38);
 */
function Point(x, y) {
    this.x = x;
    this.y = y;
}

Point.prototype = {

    /**
     * Clone this point, returning a new point that can be modified
     * without affecting the old one.
     * @return {Point} the clone
     */
    clone: function() { return new Point(this.x, this.y); },

    /**
     * Add this point's x & y coordinates to another point,
     * yielding a new point.
     * @param {Point} p the other point
     * @return {Point} output point
     */
    add:     function(p) { return this.clone()._add(p); },

    /**
     * Subtract this point's x & y coordinates to from point,
     * yielding a new point.
     * @param {Point} p the other point
     * @return {Point} output point
     */
    sub:     function(p) { return this.clone()._sub(p); },

    /**
     * Multiply this point's x & y coordinates by point,
     * yielding a new point.
     * @param {Point} p the other point
     * @return {Point} output point
     */
    multByPoint:    function(p) { return this.clone()._multByPoint(p); },

    /**
     * Divide this point's x & y coordinates by point,
     * yielding a new point.
     * @param {Point} p the other point
     * @return {Point} output point
     */
    divByPoint:     function(p) { return this.clone()._divByPoint(p); },

    /**
     * Multiply this point's x & y coordinates by a factor,
     * yielding a new point.
     * @param {Point} k factor
     * @return {Point} output point
     */
    mult:    function(k) { return this.clone()._mult(k); },

    /**
     * Divide this point's x & y coordinates by a factor,
     * yielding a new point.
     * @param {Point} k factor
     * @return {Point} output point
     */
    div:     function(k) { return this.clone()._div(k); },

    /**
     * Rotate this point around the 0, 0 origin by an angle a,
     * given in radians
     * @param {Number} a angle to rotate around, in radians
     * @return {Point} output point
     */
    rotate:  function(a) { return this.clone()._rotate(a); },

    /**
     * Rotate this point around p point by an angle a,
     * given in radians
     * @param {Number} a angle to rotate around, in radians
     * @param {Point} p Point to rotate around
     * @return {Point} output point
     */
    rotateAround:  function(a,p) { return this.clone()._rotateAround(a,p); },

    /**
     * Multiply this point by a 4x1 transformation matrix
     * @param {Array<Number>} m transformation matrix
     * @return {Point} output point
     */
    matMult: function(m) { return this.clone()._matMult(m); },

    /**
     * Calculate this point but as a unit vector from 0, 0, meaning
     * that the distance from the resulting point to the 0, 0
     * coordinate will be equal to 1 and the angle from the resulting
     * point to the 0, 0 coordinate will be the same as before.
     * @return {Point} unit vector point
     */
    unit:    function() { return this.clone()._unit(); },

    /**
     * Compute a perpendicular point, where the new y coordinate
     * is the old x coordinate and the new x coordinate is the old y
     * coordinate multiplied by -1
     * @return {Point} perpendicular point
     */
    perp:    function() { return this.clone()._perp(); },

    /**
     * Return a version of this point with the x & y coordinates
     * rounded to integers.
     * @return {Point} rounded point
     */
    round:   function() { return this.clone()._round(); },

    /**
     * Return the magitude of this point: this is the Euclidean
     * distance from the 0, 0 coordinate to this point's x and y
     * coordinates.
     * @return {Number} magnitude
     */
    mag: function() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    },

    /**
     * Judge whether this point is equal to another point, returning
     * true or false.
     * @param {Point} other the other point
     * @return {boolean} whether the points are equal
     */
    equals: function(other) {
        return this.x === other.x &&
               this.y === other.y;
    },

    /**
     * Calculate the distance from this point to another point
     * @param {Point} p the other point
     * @return {Number} distance
     */
    dist: function(p) {
        return Math.sqrt(this.distSqr(p));
    },

    /**
     * Calculate the distance from this point to another point,
     * without the square root step. Useful if you're comparing
     * relative distances.
     * @param {Point} p the other point
     * @return {Number} distance
     */
    distSqr: function(p) {
        var dx = p.x - this.x,
            dy = p.y - this.y;
        return dx * dx + dy * dy;
    },

    /**
     * Get the angle from the 0, 0 coordinate to this point, in radians
     * coordinates.
     * @return {Number} angle
     */
    angle: function() {
        return Math.atan2(this.y, this.x);
    },

    /**
     * Get the angle from this point to another point, in radians
     * @param {Point} b the other point
     * @return {Number} angle
     */
    angleTo: function(b) {
        return Math.atan2(this.y - b.y, this.x - b.x);
    },

    /**
     * Get the angle between this point and another point, in radians
     * @param {Point} b the other point
     * @return {Number} angle
     */
    angleWith: function(b) {
        return this.angleWithSep(b.x, b.y);
    },

    /*
     * Find the angle of the two vectors, solving the formula for
     * the cross product a x b = |a||b|sin(θ) for θ.
     * @param {Number} x the x-coordinate
     * @param {Number} y the y-coordinate
     * @return {Number} the angle in radians
     */
    angleWithSep: function(x, y) {
        return Math.atan2(
            this.x * y - this.y * x,
            this.x * x + this.y * y);
    },

    _matMult: function(m) {
        var x = m[0] * this.x + m[1] * this.y,
            y = m[2] * this.x + m[3] * this.y;
        this.x = x;
        this.y = y;
        return this;
    },

    _add: function(p) {
        this.x += p.x;
        this.y += p.y;
        return this;
    },

    _sub: function(p) {
        this.x -= p.x;
        this.y -= p.y;
        return this;
    },

    _mult: function(k) {
        this.x *= k;
        this.y *= k;
        return this;
    },

    _div: function(k) {
        this.x /= k;
        this.y /= k;
        return this;
    },

    _multByPoint: function(p) {
        this.x *= p.x;
        this.y *= p.y;
        return this;
    },

    _divByPoint: function(p) {
        this.x /= p.x;
        this.y /= p.y;
        return this;
    },

    _unit: function() {
        this._div(this.mag());
        return this;
    },

    _perp: function() {
        var y = this.y;
        this.y = this.x;
        this.x = -y;
        return this;
    },

    _rotate: function(angle) {
        var cos = Math.cos(angle),
            sin = Math.sin(angle),
            x = cos * this.x - sin * this.y,
            y = sin * this.x + cos * this.y;
        this.x = x;
        this.y = y;
        return this;
    },

    _rotateAround: function(angle, p) {
        var cos = Math.cos(angle),
            sin = Math.sin(angle),
            x = p.x + cos * (this.x - p.x) - sin * (this.y - p.y),
            y = p.y + sin * (this.x - p.x) + cos * (this.y - p.y);
        this.x = x;
        this.y = y;
        return this;
    },

    _round: function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this;
    }
};

/**
 * Construct a point from an array if necessary, otherwise if the input
 * is already a Point, or an unknown type, return it unchanged
 * @param {Array<Number>|Point|*} a any kind of input value
 * @return {Point} constructed point, or passed-through value.
 * @example
 * // this
 * var point = Point.convert([0, 1]);
 * // is equivalent to
 * var point = new Point(0, 1);
 */
Point.convert = function (a) {
    if (a instanceof Point) {
        return a;
    }
    if (Array.isArray(a)) {
        return new Point(a[0], a[1]);
    }
    return a;
};


/***/ }),

/***/ "./node_modules/eventemitter3/index.js":
/*!*********************************************!*\
  !*** ./node_modules/eventemitter3/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty;

//
// We store our EE objects in a plain object whose properties are event names.
// If `Object.create(null)` is not supported we prefix the event names with a
// `~` to make sure that the built-in object properties are not overridden or
// used as an attack vector.
// We also assume that `Object.create(null)` is available when the event name
// is an ES6 Symbol.
//
var prefix = typeof Object.create !== 'function' ? '~' : false;

/**
 * Representation of a single EventEmitter function.
 *
 * @param {Function} fn Event handler to be called.
 * @param {Mixed} context Context for function execution.
 * @param {Boolean} [once=false] Only emit once
 * @api private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Minimal EventEmitter interface that is molded against the Node.js
 * EventEmitter interface.
 *
 * @constructor
 * @api public
 */
function EventEmitter() { /* Nothing to set */ }

/**
 * Hold the assigned EventEmitters by name.
 *
 * @type {Object}
 * @private
 */
EventEmitter.prototype._events = undefined;

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @api public
 */
EventEmitter.prototype.eventNames = function eventNames() {
  var events = this._events
    , names = []
    , name;

  if (!events) return names;

  for (name in events) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};

/**
 * Return a list of assigned event listeners.
 *
 * @param {String} event The events that should be listed.
 * @param {Boolean} exists We only need to know if there are listeners.
 * @returns {Array|Boolean}
 * @api public
 */
EventEmitter.prototype.listeners = function listeners(event, exists) {
  var evt = prefix ? prefix + event : event
    , available = this._events && this._events[evt];

  if (exists) return !!available;
  if (!available) return [];
  if (available.fn) return [available.fn];

  for (var i = 0, l = available.length, ee = new Array(l); i < l; i++) {
    ee[i] = available[i].fn;
  }

  return ee;
};

/**
 * Emit an event to all registered event listeners.
 *
 * @param {String} event The name of the event.
 * @returns {Boolean} Indication if we've emitted an event.
 * @api public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;

  if (!this._events || !this._events[evt]) return false;

  var listeners = this._events[evt]
    , len = arguments.length
    , args
    , i;

  if ('function' === typeof listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Register a new EventListener for the given event.
 *
 * @param {String} event Name of the event.
 * @param {Function} fn Callback function.
 * @param {Mixed} [context=this] The context of the function.
 * @api public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  var listener = new EE(fn, context || this)
    , evt = prefix ? prefix + event : event;

  if (!this._events) this._events = prefix ? {} : Object.create(null);
  if (!this._events[evt]) this._events[evt] = listener;
  else {
    if (!this._events[evt].fn) this._events[evt].push(listener);
    else this._events[evt] = [
      this._events[evt], listener
    ];
  }

  return this;
};

/**
 * Add an EventListener that's only called once.
 *
 * @param {String} event Name of the event.
 * @param {Function} fn Callback function.
 * @param {Mixed} [context=this] The context of the function.
 * @api public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  var listener = new EE(fn, context || this, true)
    , evt = prefix ? prefix + event : event;

  if (!this._events) this._events = prefix ? {} : Object.create(null);
  if (!this._events[evt]) this._events[evt] = listener;
  else {
    if (!this._events[evt].fn) this._events[evt].push(listener);
    else this._events[evt] = [
      this._events[evt], listener
    ];
  }

  return this;
};

/**
 * Remove event listeners.
 *
 * @param {String} event The event we want to remove.
 * @param {Function} fn The listener that we need to find.
 * @param {Mixed} context Only remove listeners matching this context.
 * @param {Boolean} once Only remove once listeners.
 * @api public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;

  if (!this._events || !this._events[evt]) return this;

  var listeners = this._events[evt]
    , events = [];

  if (fn) {
    if (listeners.fn) {
      if (
           listeners.fn !== fn
        || (once && !listeners.once)
        || (context && listeners.context !== context)
      ) {
        events.push(listeners);
      }
    } else {
      for (var i = 0, length = listeners.length; i < length; i++) {
        if (
             listeners[i].fn !== fn
          || (once && !listeners[i].once)
          || (context && listeners[i].context !== context)
        ) {
          events.push(listeners[i]);
        }
      }
    }
  }

  //
  // Reset the array, or remove it completely if we have no more listeners.
  //
  if (events.length) {
    this._events[evt] = events.length === 1 ? events[0] : events;
  } else {
    delete this._events[evt];
  }

  return this;
};

/**
 * Remove all listeners or only the listeners for the specified event.
 *
 * @param {String} event The event want to remove all listeners for.
 * @api public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  if (!this._events) return this;

  if (event) delete this._events[prefix ? prefix + event : event];
  else this._events = prefix ? {} : Object.create(null);

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// This function doesn't apply anymore.
//
EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
  return this;
};

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Expose the module.
//
if (true) {
  module.exports = EventEmitter;
}


/***/ }),

/***/ "./node_modules/google-map-react/lib/google_heatmap.js":
/*!*************************************************************!*\
  !*** ./node_modules/google-map-react/lib/google_heatmap.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var generateHeatmap = exports.generateHeatmap = function generateHeatmap(instance, _ref) {
  var positions = _ref.positions;
  return new instance.visualization.HeatmapLayer({
    data: positions.reduce(function (acc, _ref2) {
      var lat = _ref2.lat,
          lng = _ref2.lng,
          _ref2$weight = _ref2.weight,
          weight = _ref2$weight === undefined ? 1 : _ref2$weight;

      acc.push({
        location: new instance.LatLng(lat, lng),
        weight: weight
      });
      return acc;
    }, [])
  });
};

var optionsHeatmap = exports.optionsHeatmap = function optionsHeatmap(instance, _ref3) {
  var _ref3$options = _ref3.options,
      options = _ref3$options === undefined ? {} : _ref3$options;
  return Object.keys(options).map(function (option) {
    return instance.set(option, options[option]);
  });
};

/***/ }),

/***/ "./node_modules/google-map-react/lib/google_map.js":
/*!*********************************************************!*\
  !*** ./node_modules/google-map-react/lib/google_map.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(/*! react-dom */ "react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _google_map_map = __webpack_require__(/*! ./google_map_map */ "./node_modules/google-map-react/lib/google_map_map.js");

var _google_map_map2 = _interopRequireDefault(_google_map_map);

var _marker_dispatcher = __webpack_require__(/*! ./marker_dispatcher */ "./node_modules/google-map-react/lib/marker_dispatcher.js");

var _marker_dispatcher2 = _interopRequireDefault(_marker_dispatcher);

var _google_map_markers = __webpack_require__(/*! ./google_map_markers */ "./node_modules/google-map-react/lib/google_map_markers.js");

var _google_map_markers2 = _interopRequireDefault(_google_map_markers);

var _google_map_markers_prerender = __webpack_require__(/*! ./google_map_markers_prerender */ "./node_modules/google-map-react/lib/google_map_markers_prerender.js");

var _google_map_markers_prerender2 = _interopRequireDefault(_google_map_markers_prerender);

var _google_heatmap = __webpack_require__(/*! ./google_heatmap */ "./node_modules/google-map-react/lib/google_heatmap.js");

var _google_map_loader = __webpack_require__(/*! ./loaders/google_map_loader */ "./node_modules/google-map-react/lib/loaders/google_map_loader.js");

var _google_map_loader2 = _interopRequireDefault(_google_map_loader);

var _geo = __webpack_require__(/*! ./utils/geo */ "./node_modules/google-map-react/lib/utils/geo.js");

var _geo2 = _interopRequireDefault(_geo);

var _raf = __webpack_require__(/*! ./utils/raf */ "./node_modules/google-map-react/lib/utils/raf.js");

var _raf2 = _interopRequireDefault(_raf);

var _pick = __webpack_require__(/*! ./utils/pick */ "./node_modules/google-map-react/lib/utils/pick.js");

var _pick2 = _interopRequireDefault(_pick);

var _omit = __webpack_require__(/*! ./utils/omit */ "./node_modules/google-map-react/lib/utils/omit.js");

var _omit2 = _interopRequireDefault(_omit);

var _log = __webpack_require__(/*! ./utils/math/log2 */ "./node_modules/google-map-react/lib/utils/math/log2.js");

var _log2 = _interopRequireDefault(_log);

var _isEmpty = __webpack_require__(/*! ./utils/isEmpty */ "./node_modules/google-map-react/lib/utils/isEmpty.js");

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _isNumber = __webpack_require__(/*! ./utils/isNumber */ "./node_modules/google-map-react/lib/utils/isNumber.js");

var _isNumber2 = _interopRequireDefault(_isNumber);

var _detect = __webpack_require__(/*! ./utils/detect */ "./node_modules/google-map-react/lib/utils/detect.js");

var _detect2 = _interopRequireDefault(_detect);

var _shallowEqual = __webpack_require__(/*! ./utils/shallowEqual */ "./node_modules/google-map-react/lib/utils/shallowEqual.js");

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _isPlainObject = __webpack_require__(/*! ./utils/isPlainObject */ "./node_modules/google-map-react/lib/utils/isPlainObject.js");

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _isArraysEqualEps = __webpack_require__(/*! ./utils/isArraysEqualEps */ "./node_modules/google-map-react/lib/utils/isArraysEqualEps.js");

var _isArraysEqualEps2 = _interopRequireDefault(_isArraysEqualEps);

var _detectElementResize = __webpack_require__(/*! ./utils/detectElementResize */ "./node_modules/google-map-react/lib/utils/detectElementResize.js");

var _detectElementResize2 = _interopRequireDefault(_detectElementResize);

var _passiveEvents = __webpack_require__(/*! ./utils/passiveEvents */ "./node_modules/google-map-react/lib/utils/passiveEvents.js");

var _passiveEvents2 = _interopRequireDefault(_passiveEvents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable import/no-extraneous-dependencies, react/forbid-prop-types, react/no-find-dom-node, no-console */


// helpers


// loaders


// utils


// consts
var kEPS = 0.00001;
var K_GOOGLE_TILE_SIZE = 256;
// real minZoom calculated here _getMinZoom
var K_IDLE_TIMEOUT = 100;
var K_IDLE_CLICK_TIMEOUT = 300;
var DEFAULT_MIN_ZOOM = 3;
// Starting with version 3.32, the maps API calls `draw()` each frame during
// a zoom animation.
var DRAW_CALLED_DURING_ANIMATION_VERSION = 32;
var IS_REACT_16 = _reactDom2.default.createPortal !== undefined;

var createPortal = IS_REACT_16 ? _reactDom2.default.createPortal : _reactDom2.default.unstable_renderSubtreeIntoContainer;

function defaultOptions_() /* maps */{
  return {
    overviewMapControl: false,
    streetViewControl: false,
    rotateControl: true,
    mapTypeControl: false,
    // disable poi
    styles: [{
      featureType: 'poi',
      elementType: 'labels',
      stylers: [{ visibility: 'off' }]
    }],
    minZoom: DEFAULT_MIN_ZOOM // dynamically recalculted if possible during init
  };
}

var latLng2Obj = function latLng2Obj(latLng) {
  return (0, _isPlainObject2.default)(latLng) ? latLng : { lat: latLng[0], lng: latLng[1] };
};

var _checkMinZoom = function _checkMinZoom(zoom, minZoom) {
  if (true) {
    if (zoom < minZoom) {
      console.warn('GoogleMap: ' + // eslint-disable-line
      'minZoom option is less than recommended ' + 'minZoom option for your map sizes.\n' + 'overrided to value ' + minZoom);
    }
  }

  if (minZoom < zoom) {
    return zoom;
  }
  return minZoom;
};

var isFullScreen = function isFullScreen() {
  return document.fullscreen || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement;
};

var GoogleMap = function (_Component) {
  _inherits(GoogleMap, _Component);

  // eslint-disable-line

  function GoogleMap(props) {
    _classCallCheck(this, GoogleMap);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this._getMinZoom = function () {
      if (_this.geoService_.getWidth() > 0 || _this.geoService_.getHeight() > 0) {
        var tilesPerWidth = Math.ceil(_this.geoService_.getWidth() / K_GOOGLE_TILE_SIZE) + 2;
        var tilesPerHeight = Math.ceil(_this.geoService_.getHeight() / K_GOOGLE_TILE_SIZE) + 2;
        var maxTilesPerDim = Math.max(tilesPerWidth, tilesPerHeight);
        return Math.ceil((0, _log2.default)(maxTilesPerDim));
      }
      return DEFAULT_MIN_ZOOM;
    };

    _this._computeMinZoom = function (minZoom) {
      if (!(0, _isEmpty2.default)(minZoom)) {
        return minZoom;
      }
      return _this._getMinZoom();
    };

    _this._mapDomResizeCallback = function () {
      _this.resetSizeOnIdle_ = true;
      if (_this.maps_) {
        var originalCenter = _this.props.center || _this.props.defaultCenter;
        var currentCenter = _this.map_.getCenter();
        _this.maps_.event.trigger(_this.map_, 'resize');
        _this.map_.setCenter(_this.props.resetBoundsOnResize ? originalCenter : currentCenter);
      }
    };

    _this._setLayers = function (layerTypes) {
      layerTypes.forEach(function (layerType) {
        _this.layers_[layerType] = new _this.maps_[layerType]();
        _this.layers_[layerType].setMap(_this.map_);
      });
    };

    _this._renderPortal = function () {
      return _react2.default.createElement(_google_map_markers2.default, {
        experimental: _this.props.experimental,
        onChildClick: _this._onChildClick,
        onChildMouseDown: _this._onChildMouseDown,
        onChildMouseEnter: _this._onChildMouseEnter,
        onChildMouseLeave: _this._onChildMouseLeave,
        geoService: _this.geoService_,
        insideMapPanes: true,
        distanceToMouse: _this.props.distanceToMouse,
        getHoverDistance: _this._getHoverDistance,
        dispatcher: _this.markersDispatcher_
      });
    };

    _this._initMap = function () {
      // only initialize the map once
      if (_this.initialized_) {
        return;
      }
      _this.initialized_ = true;

      var propsCenter = latLng2Obj(_this.props.center || _this.props.defaultCenter);
      _this.geoService_.setView(propsCenter, _this.props.zoom || _this.props.defaultZoom, 0);

      _this._onBoundsChanged(); // now we can calculate map bounds center etc...

      var bootstrapURLKeys = _extends({}, _this.props.apiKey && { key: _this.props.apiKey }, _this.props.bootstrapURLKeys);

      _this.props.googleMapLoader(bootstrapURLKeys, _this.props.heatmapLibrary).then(function (maps) {
        if (!_this.mounted_) {
          return;
        }

        var centerLatLng = _this.geoService_.getCenter();

        var propsOptions = {
          zoom: _this.props.zoom || _this.props.defaultZoom,
          center: new maps.LatLng(centerLatLng.lat, centerLatLng.lng)
        };

        // Start Heatmap
        if (_this.props.heatmap.positions) {
          Object.assign(_this, {
            heatmap: (0, _google_heatmap.generateHeatmap)(maps, _this.props.heatmap)
          });
          (0, _google_heatmap.optionsHeatmap)(_this.heatmap, _this.props.heatmap);
        }
        // End Heatmap

        // prevent to exapose full api
        // next props must be exposed (console.log(Object.keys(pick(maps, isPlainObject))))
        // "Animation", "ControlPosition", "MapTypeControlStyle", "MapTypeId",
        // "NavigationControlStyle", "ScaleControlStyle", "StrokePosition",
        // "SymbolPath", "ZoomControlStyle",
        // "event", "DirectionsStatus", "DirectionsTravelMode", "DirectionsUnitSystem",
        // "DistanceMatrixStatus",
        // "DistanceMatrixElementStatus", "ElevationStatus", "GeocoderLocationType",
        // "GeocoderStatus", "KmlLayerStatus",
        // "MaxZoomStatus", "StreetViewStatus", "TransitMode", "TransitRoutePreference",
        // "TravelMode", "UnitSystem"
        var mapPlainObjects = (0, _pick2.default)(maps, _isPlainObject2.default);
        var options = typeof _this.props.options === 'function' ? _this.props.options(mapPlainObjects) : _this.props.options;
        var defaultOptions = defaultOptions_(mapPlainObjects);

        var draggableOptions = !(0, _isEmpty2.default)(_this.props.draggable) && {
          draggable: _this.props.draggable
        };

        var minZoom = _this._computeMinZoom(options.minZoom);
        _this.minZoom_ = minZoom;

        var preMapOptions = _extends({}, defaultOptions, {
          minZoom: minZoom
        }, options, propsOptions);

        _this.defaultDraggableOption_ = !(0, _isEmpty2.default)(preMapOptions.draggable) ? preMapOptions.draggable : _this.defaultDraggableOption_;

        var mapOptions = _extends({}, preMapOptions, draggableOptions);

        mapOptions.minZoom = _checkMinZoom(mapOptions.minZoom, minZoom);

        var map = new maps.Map(_reactDom2.default.findDOMNode(_this.googleMapDom_), mapOptions);

        _this.map_ = map;
        _this.maps_ = maps;

        _this._setLayers(_this.props.layerTypes);

        // Parse `google.maps.version` to capture the major version number.
        var versionMatch = maps.version.match(/^3\.(\d+)\./);
        // The major version is the first (and only) captured group.
        var mapsVersion = versionMatch && Number(versionMatch[1]);

        // render in overlay
        var this_ = _this;
        var overlay = Object.assign(new maps.OverlayView(), {
          onAdd: function onAdd() {
            var K_MAX_WIDTH = typeof screen !== 'undefined' ? screen.width + 'px' : '2000px';
            var K_MAX_HEIGHT = typeof screen !== 'undefined' ? screen.height + 'px' : '2000px';

            var div = document.createElement('div');
            div.style.backgroundColor = 'transparent';
            div.style.position = 'absolute';
            div.style.left = '0px';
            div.style.top = '0px';
            div.style.width = K_MAX_WIDTH; // prevents some chrome draw defects
            div.style.height = K_MAX_HEIGHT;

            if (this_.props.overlayViewDivStyle) {
              var overlayViewDivStyle = this_.props.overlayViewDivStyle;

              if ((typeof overlayViewDivStyle === 'undefined' ? 'undefined' : _typeof(overlayViewDivStyle)) === 'object') {
                Object.keys(overlayViewDivStyle).forEach(function (property) {
                  div.style[property] = overlayViewDivStyle[property];
                });
              }
            }

            var panes = this.getPanes();
            panes.overlayMouseTarget.appendChild(div);
            this_.geoService_.setMapCanvasProjection(maps, overlay.getProjection());

            if (!IS_REACT_16) {
              createPortal(this_, this_._renderPortal(), div,
              // remove prerendered markers
              function () {
                return this_.setState({ overlay: div });
              });
            } else {
              this_.setState({ overlay: div });
            }
          },
          onRemove: function onRemove() {
            var renderedOverlay = this_.state.overlay;
            if (renderedOverlay && !IS_REACT_16) {
              _reactDom2.default.unmountComponentAtNode(renderedOverlay);
            }
            this_.setState({ overlay: null });
          },
          draw: function draw() {
            this_.updateCounter_++;
            this_._onBoundsChanged(map, maps, !this_.props.debounced);

            if (!this_.googleApiLoadedCalled_) {
              this_._onGoogleApiLoaded({ map: map, maps: maps });
              this_.googleApiLoadedCalled_ = true;
            }

            if (this_.mouse_) {
              var latLng = this_.geoService_.fromContainerPixelToLatLng(this_.mouse_);
              this_.mouse_.lat = latLng.lat;
              this_.mouse_.lng = latLng.lng;
            }

            this_._onChildMouseMove();

            if (this_.markersDispatcher_) {
              this_.markersDispatcher_.emit('kON_CHANGE');
              if (this_.fireMouseEventOnIdle_) {
                this_.markersDispatcher_.emit('kON_MOUSE_POSITION_CHANGE');
              }
            }
          }
        });

        _this.overlay_ = overlay;

        overlay.setMap(map);
        if (_this.props.heatmap.positions) {
          _this.heatmap.setMap(map);
        }

        if (_this.props.onTilesLoaded) {
          maps.event.addListener(map, 'tilesloaded', function () {
            this_._onTilesLoaded();
          });
        }

        maps.event.addListener(map, 'zoom_changed', function () {
          // recalc position at zoom start
          if (this_.geoService_.getZoom() !== map.getZoom()) {
            if (!this_.zoomAnimationInProgress_) {
              this_.zoomAnimationInProgress_ = true;
              this_._onZoomAnimationStart();
            }

            // If draw() is not called each frame during a zoom animation,
            // simulate it.
            if (mapsVersion < DRAW_CALLED_DURING_ANIMATION_VERSION) {
              var TIMEOUT_ZOOM = 300;

              if (new Date().getTime() - _this.zoomControlClickTime_ < TIMEOUT_ZOOM) {
                // there is strange Google Map Api behavior in chrome when zoom animation of map
                // is started only on second raf call, if was click on zoom control
                // or +- keys pressed, so i wait for two rafs before change state

                // this does not fully prevent animation jump
                // but reduce it's occurence probability
                (0, _raf2.default)(function () {
                  return (0, _raf2.default)(function () {
                    this_.updateCounter_++;
                    this_._onBoundsChanged(map, maps);
                  });
                });
              } else {
                this_.updateCounter_++;
                this_._onBoundsChanged(map, maps);
              }
            }
          }
        });

        maps.event.addListener(map, 'idle', function () {
          if (_this.resetSizeOnIdle_) {
            _this._setViewSize();
            var currMinZoom = _this._computeMinZoom(_this.props.options.minZoom);

            if (currMinZoom !== _this.minZoom_) {
              _this.minZoom_ = currMinZoom;
              map.setOptions({ minZoom: currMinZoom });
            }

            _this.resetSizeOnIdle_ = false;
          }

          if (this_.zoomAnimationInProgress_) {
            this_.zoomAnimationInProgress_ = false;
            this_._onZoomAnimationEnd();
          }

          this_.updateCounter_++;
          this_._onBoundsChanged(map, maps);

          this_.dragTime_ = 0;

          if (this_.markersDispatcher_) {
            this_.markersDispatcher_.emit('kON_CHANGE');
          }
        });

        maps.event.addListener(map, 'mouseover', function () {
          // has advantage over div MouseLeave
          this_.mouseInMap_ = true;
        });

        // an alternative way to know the mouse is back within the map
        // This would not fire when clicking/interacting with google maps
        // own on-map countrols+markers. This handles an edge case for touch devices
        // + 'draggable:false' custom option. See #332 for more details.
        maps.event.addListener(map, 'click', function () {
          this_.mouseInMap_ = true;
        });

        maps.event.addListener(map, 'mouseout', function () {
          // has advantage over div MouseLeave
          this_.mouseInMap_ = false;
          this_.mouse_ = null;
          this_.markersDispatcher_.emit('kON_MOUSE_POSITION_CHANGE');
        });

        maps.event.addListener(map, 'drag', function () {
          this_.dragTime_ = new Date().getTime();
          this_._onDrag(map);
        });
        // user choosing satellite vs roads, etc
        maps.event.addListener(map, 'maptypeid_changed', function () {
          this_._onMapTypeIdChange(map.getMapTypeId());
        });
      }).catch(function (e) {
        // notify callback of load failure
        _this._onGoogleApiLoaded({ map: null, maps: null });
        console.error(e); // eslint-disable-line no-console
        throw e;
      });
    };

    _this._onGoogleApiLoaded = function () {
      if (_this.props.onGoogleApiLoaded) {
        var _this$props;

        if ( true && _this.props.yesIWantToUseGoogleMapApiInternals !== true) {
          console.warn('GoogleMap: ' + // eslint-disable-line
          'Usage of internal api objects is dangerous ' + 'and can cause a lot of issues.\n' + 'To hide this warning add yesIWantToUseGoogleMapApiInternals={true} ' + 'to <GoogleMap instance');
        }

        (_this$props = _this.props).onGoogleApiLoaded.apply(_this$props, arguments);
      }
    };

    _this._getHoverDistance = function () {
      return _this.props.hoverDistance;
    };

    _this._onDrag = function () {
      var _this$props2;

      return _this.props.onDrag && (_this$props2 = _this.props).onDrag.apply(_this$props2, arguments);
    };

    _this._onMapTypeIdChange = function () {
      var _this$props3;

      return _this.props.onMapTypeIdChange && (_this$props3 = _this.props).onMapTypeIdChange.apply(_this$props3, arguments);
    };

    _this._onZoomAnimationStart = function () {
      var _this$props4;

      return _this.props.onZoomAnimationStart && (_this$props4 = _this.props).onZoomAnimationStart.apply(_this$props4, arguments);
    };

    _this._onZoomAnimationEnd = function () {
      var _this$props5;

      return _this.props.onZoomAnimationEnd && (_this$props5 = _this.props).onZoomAnimationEnd.apply(_this$props5, arguments);
    };

    _this._onTilesLoaded = function () {
      return _this.props.onTilesLoaded && _this.props.onTilesLoaded();
    };

    _this._onChildClick = function () {
      if (_this.props.onChildClick) {
        var _this$props6;

        return (_this$props6 = _this.props).onChildClick.apply(_this$props6, arguments);
      }
      return undefined;
    };

    _this._onChildMouseDown = function (hoverKey, childProps) {
      _this.childMouseDownArgs_ = [hoverKey, childProps];
      if (_this.props.onChildMouseDown) {
        _this.props.onChildMouseDown(hoverKey, childProps, _extends({}, _this.mouse_));
      }
    };

    _this._onChildMouseUp = function () {
      if (_this.childMouseDownArgs_) {
        if (_this.props.onChildMouseUp) {
          var _this$props7;

          (_this$props7 = _this.props).onChildMouseUp.apply(_this$props7, _this.childMouseDownArgs_.concat([_extends({}, _this.mouse_)]));
        }
        _this.childMouseDownArgs_ = null;
        _this.childMouseUpTime_ = new Date().getTime();
      }
    };

    _this._onChildMouseMove = function () {
      if (_this.childMouseDownArgs_) {
        if (_this.props.onChildMouseMove) {
          var _this$props8;

          (_this$props8 = _this.props).onChildMouseMove.apply(_this$props8, _this.childMouseDownArgs_.concat([_extends({}, _this.mouse_)]));
        }
      }
    };

    _this._onChildMouseEnter = function () {
      if (_this.props.onChildMouseEnter) {
        var _this$props9;

        return (_this$props9 = _this.props).onChildMouseEnter.apply(_this$props9, arguments);
      }
      return undefined;
    };

    _this._onChildMouseLeave = function () {
      if (_this.props.onChildMouseLeave) {
        var _this$props10;

        return (_this$props10 = _this.props).onChildMouseLeave.apply(_this$props10, arguments);
      }
      return undefined;
    };

    _this._setViewSize = function () {
      if (!_this.mounted_) return;
      if (isFullScreen()) {
        _this.geoService_.setViewSize(window.innerWidth, window.innerHeight);
      } else {
        var mapDom = _reactDom2.default.findDOMNode(_this.googleMapDom_);
        _this.geoService_.setViewSize(mapDom.clientWidth, mapDom.clientHeight);
      }
      _this._onBoundsChanged();
    };

    _this._onWindowResize = function () {
      _this.resetSizeOnIdle_ = true;
    };

    _this._onMapMouseMove = function (e) {
      if (!_this.mouseInMap_) return;

      var currTime = new Date().getTime();
      var K_RECALC_CLIENT_RECT_MS = 50;

      if (currTime - _this.mouseMoveTime_ > K_RECALC_CLIENT_RECT_MS) {
        _this.boundingRect_ = e.currentTarget.getBoundingClientRect();
      }
      _this.mouseMoveTime_ = currTime;

      var mousePosX = e.clientX - _this.boundingRect_.left;
      var mousePosY = e.clientY - _this.boundingRect_.top;

      if (!_this.mouse_) {
        _this.mouse_ = { x: 0, y: 0, lat: 0, lng: 0 };
      }

      _this.mouse_.x = mousePosX;
      _this.mouse_.y = mousePosY;

      var latLng = _this.geoService_.fromContainerPixelToLatLng(_this.mouse_);
      _this.mouse_.lat = latLng.lat;
      _this.mouse_.lng = latLng.lng;

      _this._onChildMouseMove();

      if (currTime - _this.dragTime_ < K_IDLE_TIMEOUT) {
        _this.fireMouseEventOnIdle_ = true;
      } else {
        _this.markersDispatcher_.emit('kON_MOUSE_POSITION_CHANGE');
        _this.fireMouseEventOnIdle_ = false;
      }
    };

    _this._onClick = function () {
      var _this$props11;

      return _this.props.onClick && !_this.childMouseDownArgs_ && new Date().getTime() - _this.childMouseUpTime_ > K_IDLE_CLICK_TIMEOUT && _this.dragTime_ === 0 && (_this$props11 = _this.props).onClick.apply(_this$props11, arguments);
    };

    _this._onMapClick = function (event) {
      if (_this.markersDispatcher_) {
        // support touch events and recalculate mouse position on click
        _this._onMapMouseMove(event);
        var currTime = new Date().getTime();
        if (currTime - _this.dragTime_ > K_IDLE_TIMEOUT) {
          if (_this.mouse_) {
            _this._onClick(_extends({}, _this.mouse_, {
              event: event
            }));
          }

          _this.markersDispatcher_.emit('kON_CLICK', event);
        }
      }
    };

    _this._onMapMouseDownNative = function (event) {
      if (!_this.mouseInMap_) return;

      _this._onMapMouseDown(event);
    };

    _this._onMapMouseDown = function (event) {
      if (_this.markersDispatcher_) {
        var currTime = new Date().getTime();
        if (currTime - _this.dragTime_ > K_IDLE_TIMEOUT) {
          // Hovered marker detected at mouse move could be deleted at mouse down time
          // so it will be good to force hovered marker recalculation
          _this._onMapMouseMove(event);
          _this.markersDispatcher_.emit('kON_MDOWN', event);
        }
      }
    };

    _this._onMapMouseDownCapture = function () {
      if ((0, _detect2.default)().isChrome) {
        // to fix strange zoom in chrome
        _this.zoomControlClickTime_ = new Date().getTime();
      }
    };

    _this._onKeyDownCapture = function () {
      if ((0, _detect2.default)().isChrome) {
        _this.zoomControlClickTime_ = new Date().getTime();
      }
    };

    _this._isCenterDefined = function (center) {
      return center && ((0, _isPlainObject2.default)(center) && (0, _isNumber2.default)(center.lat) && (0, _isNumber2.default)(center.lng) || center.length === 2 && (0, _isNumber2.default)(center[0]) && (0, _isNumber2.default)(center[1]));
    };

    _this._onBoundsChanged = function (map, maps, callExtBoundsChange) {
      if (map) {
        var gmC = map.getCenter();
        _this.geoService_.setView([gmC.lat(), gmC.lng()], map.getZoom(), 0);
      }

      if ((_this.props.onChange || _this.props.onBoundsChange) && _this.geoService_.canProject()) {
        var zoom = _this.geoService_.getZoom();
        var bounds = _this.geoService_.getBounds();
        var centerLatLng = _this.geoService_.getCenter();

        if (!(0, _isArraysEqualEps2.default)(bounds, _this.prevBounds_, kEPS)) {
          if (callExtBoundsChange !== false) {
            var marginBounds = _this.geoService_.getBounds(_this.props.margin);
            if (_this.props.onBoundsChange) {
              _this.props.onBoundsChange(_this.centerIsObject_ ? _extends({}, centerLatLng) : [centerLatLng.lat, centerLatLng.lng], zoom, bounds, marginBounds);
            }

            if (_this.props.onChange) {
              _this.props.onChange({
                center: _extends({}, centerLatLng),
                zoom: zoom,
                bounds: {
                  nw: {
                    lat: bounds[0],
                    lng: bounds[1]
                  },
                  se: {
                    lat: bounds[2],
                    lng: bounds[3]
                  },
                  sw: {
                    lat: bounds[4],
                    lng: bounds[5]
                  },
                  ne: {
                    lat: bounds[6],
                    lng: bounds[7]
                  }
                },
                marginBounds: {
                  nw: {
                    lat: marginBounds[0],
                    lng: marginBounds[1]
                  },
                  se: {
                    lat: marginBounds[2],
                    lng: marginBounds[3]
                  },
                  sw: {
                    lat: marginBounds[4],
                    lng: marginBounds[5]
                  },
                  ne: {
                    lat: marginBounds[6],
                    lng: marginBounds[7]
                  }
                },

                size: _this.geoService_.hasSize() ? {
                  width: _this.geoService_.getWidth(),
                  height: _this.geoService_.getHeight()
                } : {
                  width: 0,
                  height: 0
                }
              });
            }

            _this.prevBounds_ = bounds;
          }
        }
      }
    };

    _this._registerChild = function (ref) {
      _this.googleMapDom_ = ref;
    };

    _this.mounted_ = false;
    _this.initialized_ = false;
    _this.googleApiLoadedCalled_ = false;

    _this.map_ = null;
    _this.maps_ = null;
    _this.prevBounds_ = null;
    _this.heatmap = null;

    _this.layers_ = {};

    _this.mouse_ = null;
    _this.mouseMoveTime_ = 0;
    _this.boundingRect_ = null;
    _this.mouseInMap_ = true;

    _this.dragTime_ = 0;
    _this.fireMouseEventOnIdle_ = false;
    _this.updateCounter_ = 0;

    _this.markersDispatcher_ = new _marker_dispatcher2.default(_this);
    _this.geoService_ = new _geo2.default(K_GOOGLE_TILE_SIZE);
    _this.centerIsObject_ = (0, _isPlainObject2.default)(_this.props.center);

    _this.minZoom_ = DEFAULT_MIN_ZOOM;
    _this.defaultDraggableOption_ = true;

    _this.zoomControlClickTime_ = 0;

    _this.childMouseDownArgs_ = null;
    _this.childMouseUpTime_ = 0;

    _this.googleMapDom_ = null;

    if (true) {
      if (_this.props.apiKey) {
        console.warn('GoogleMap: ' + // eslint-disable-line no-console
        'apiKey is deprecated, use ' + 'bootstrapURLKeys={{key: YOUR_API_KEY}} instead.');
      }

      if (_this.props.onBoundsChange) {
        console.warn('GoogleMap: ' + // eslint-disable-line no-console
        'onBoundsChange is deprecated, use ' + 'onChange({center, zoom, bounds, ...other}) instead.');
      }

      if ((0, _isEmpty2.default)(_this.props.center) && (0, _isEmpty2.default)(_this.props.defaultCenter)) {
        console.warn('GoogleMap: center or defaultCenter property must be defined' // eslint-disable-line no-console
        );
      }

      if ((0, _isEmpty2.default)(_this.props.zoom) && (0, _isEmpty2.default)(_this.props.defaultZoom)) {
        console.warn('GoogleMap: zoom or defaultZoom property must be defined' // eslint-disable-line no-console
        );
      }
    }

    if (_this._isCenterDefined(_this.props.center || _this.props.defaultCenter)) {
      var propsCenter = latLng2Obj(_this.props.center || _this.props.defaultCenter);
      _this.geoService_.setView(propsCenter, _this.props.zoom || _this.props.defaultZoom, 0);
    }

    _this.zoomAnimationInProgress_ = false;

    _this.state = {
      overlay: null
    };
    return _this;
  }

  GoogleMap.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    this.mounted_ = true;
    (0, _passiveEvents2.default)(window, 'resize', this._onWindowResize, false);
    (0, _passiveEvents2.default)(window, 'keydown', this._onKeyDownCapture, true);
    var mapDom = _reactDom2.default.findDOMNode(this.googleMapDom_);
    // gmap can't prevent map drag if mousedown event already occured
    // the only workaround I find is prevent mousedown native browser event

    if (mapDom) {
      (0, _passiveEvents2.default)(mapDom, 'mousedown', this._onMapMouseDownNative, true);
    }

    (0, _passiveEvents2.default)(window, 'mouseup', this._onChildMouseUp, false);
    var bootstrapURLKeys = _extends({}, this.props.apiKey && { key: this.props.apiKey }, this.props.bootstrapURLKeys);

    this.props.googleMapLoader(bootstrapURLKeys, this.props.heatmapLibrary); // we can start load immediatly

    setTimeout(function () {
      // to detect size
      _this2._setViewSize();
      if (_this2._isCenterDefined(_this2.props.center || _this2.props.defaultCenter)) {
        _this2._initMap();
      }
    }, 0, this);
    if (this.props.resetBoundsOnResize) {
      var that = this;
      _detectElementResize2.default.addResizeListener(mapDom, that._mapDomResizeCallback);
    }
  };

  GoogleMap.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _this3 = this;

    if (true) {
      if (!(0, _shallowEqual2.default)(this.props.defaultCenter, nextProps.defaultCenter)) {
        console.warn("GoogleMap: defaultCenter prop changed. You can't change default props.");
      }

      if (!(0, _shallowEqual2.default)(this.props.defaultZoom, nextProps.defaultZoom)) {
        console.warn("GoogleMap: defaultZoom prop changed. You can't change default props.");
      }
    }

    if (!this._isCenterDefined(this.props.center) && this._isCenterDefined(nextProps.center)) {
      setTimeout(function () {
        return _this3._initMap();
      }, 0);
    }

    if (this.map_) {
      var centerLatLng = this.geoService_.getCenter();
      if (this._isCenterDefined(nextProps.center)) {
        var nextPropsCenter = latLng2Obj(nextProps.center);
        var currCenter = this._isCenterDefined(this.props.center) ? latLng2Obj(this.props.center) : null;

        if (!currCenter || Math.abs(nextPropsCenter.lat - currCenter.lat) + Math.abs(nextPropsCenter.lng - currCenter.lng) > kEPS) {
          if (Math.abs(nextPropsCenter.lat - centerLatLng.lat) + Math.abs(nextPropsCenter.lng - centerLatLng.lng) > kEPS) {
            this.map_.panTo({
              lat: nextPropsCenter.lat,
              lng: nextPropsCenter.lng
            });
          }
        }
      }

      if (!(0, _isEmpty2.default)(nextProps.zoom)) {
        // if zoom chaged by user
        if (Math.abs(nextProps.zoom - this.props.zoom) > 0) {
          this.map_.setZoom(nextProps.zoom);
        }
      }

      if (!(0, _isEmpty2.default)(this.props.draggable) && (0, _isEmpty2.default)(nextProps.draggable)) {
        // reset to default
        this.map_.setOptions({ draggable: this.defaultDraggableOption_ });
      } else if (!(0, _shallowEqual2.default)(this.props.draggable, nextProps.draggable)) {
        // also prevent this on window 'mousedown' event to prevent map move
        this.map_.setOptions({ draggable: nextProps.draggable });
      }

      // use shallowEqual to try avoid calling map._setOptions if only the ref changes
      if (!(0, _isEmpty2.default)(nextProps.options) && !(0, _shallowEqual2.default)(this.props.options, nextProps.options)) {
        var mapPlainObjects = (0, _pick2.default)(this.maps_, _isPlainObject2.default);
        var options = typeof nextProps.options === 'function' ? nextProps.options(mapPlainObjects) : nextProps.options;
        // remove zoom, center and draggable options as these are managed by google-maps-react
        options = (0, _omit2.default)(options, ['zoom', 'center', 'draggable']);

        if ('minZoom' in options) {
          var minZoom = this._computeMinZoom(options.minZoom);
          options.minZoom = _checkMinZoom(options.minZoom, minZoom);
        }

        this.map_.setOptions(options);
      }

      if (!(0, _shallowEqual2.default)(nextProps.layerTypes, this.props.layerTypes)) {
        Object.keys(this.layers_).forEach(function (layerKey) {
          _this3.layers_[layerKey].setMap(null);
          delete _this3.layers_[layerKey];
        });
        this._setLayers(nextProps.layerTypes);
      }

      if (this.heatmap && !(0, _shallowEqual2.default)(nextProps.heatmap.positions, this.props.heatmap.positions)) {
        this.heatmap.setData(nextProps.heatmap.positions.map(function (p) {
          return {
            location: new _this3.maps_.LatLng(p.lat, p.lng),
            weight: p.weight
          };
        }));
      }
    }
  };

  GoogleMap.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    // draggable does not affect inner components
    return !(0, _shallowEqual2.default)((0, _omit2.default)(this.props, ['draggable']), (0, _omit2.default)(nextProps, ['draggable'])) || !(0, _shallowEqual2.default)(this.state, nextState);
  };

  GoogleMap.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    this.markersDispatcher_.emit('kON_CHANGE');

    if (!(0, _shallowEqual2.default)(this.props.hoverDistance, prevProps.hoverDistance)) {
      this.markersDispatcher_.emit('kON_MOUSE_POSITION_CHANGE');
    }
  };

  GoogleMap.prototype.componentWillUnmount = function componentWillUnmount() {
    this.mounted_ = false;
    var mapDom = _reactDom2.default.findDOMNode(this.googleMapDom_);
    if (mapDom) {
      mapDom.removeEventListener('mousedown', this._onMapMouseDownNative, true);
    }
    window.removeEventListener('resize', this._onWindowResize);
    window.removeEventListener('keydown', this._onKeyDownCapture);
    window.removeEventListener('mouseup', this._onChildMouseUp, false);
    if (this.props.resetBoundsOnResize) {
      _detectElementResize2.default.removeResizeListener(mapDom, this._mapDomResizeCallback);
    }

    if (this.overlay_) {
      // this triggers overlay_.onRemove(), which will unmount the <GoogleMapMarkers/>
      this.overlay_.setMap(null);
    }

    if (this.maps_ && this.map_) {
      // fix google, as otherwise listeners works even without map
      this.map_.setOptions({ scrollwheel: false });
      this.maps_.event.clearInstanceListeners(this.map_);
    }

    this.map_ = null;
    this.maps_ = null;
    this.markersDispatcher_.dispose();

    this.resetSizeOnIdle_ = false;

    delete this.map_;
    delete this.markersDispatcher_;
  };
  // calc minZoom if map size available
  // it's better to not set minZoom less than this calculation gives
  // otherwise there is no homeomorphism between screen coordinates and map
  // (one map coordinate can have different screen coordinates)


  // this method works only if this.props.onChildMouseDown was called


  // this method works only if this.props.onChildMouseDown was called


  // K_IDLE_CLICK_TIMEOUT - looks like 300 is enough


  // gmap can't prevent map drag if mousedown event already occured
  // the only workaround I find is prevent mousedown native browser event


  GoogleMap.prototype.render = function render() {
    var overlay = this.state.overlay;
    var mapMarkerPrerender = !overlay ? _react2.default.createElement(_google_map_markers_prerender2.default, {
      experimental: this.props.experimental,
      onChildClick: this._onChildClick,
      onChildMouseDown: this._onChildMouseDown,
      onChildMouseEnter: this._onChildMouseEnter,
      onChildMouseLeave: this._onChildMouseLeave,
      geoService: this.geoService_,
      insideMapPanes: false,
      distanceToMouse: this.props.distanceToMouse,
      getHoverDistance: this._getHoverDistance,
      dispatcher: this.markersDispatcher_
    }) : null;

    return _react2.default.createElement(
      'div',
      {
        style: this.props.style,
        onMouseMove: this._onMapMouseMove,
        onMouseDownCapture: this._onMapMouseDownCapture,
        onClick: this._onMapClick
      },
      _react2.default.createElement(_google_map_map2.default, { registerChild: this._registerChild }),
      IS_REACT_16 && overlay && createPortal(this._renderPortal(), overlay),
      mapMarkerPrerender
    );
  };

  return GoogleMap;
}(_react.Component);

GoogleMap.propTypes = {
  apiKey: _propTypes2.default.string,
  bootstrapURLKeys: _propTypes2.default.any,

  defaultCenter: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.shape({
    lat: _propTypes2.default.number,
    lng: _propTypes2.default.number
  })]),
  center: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.shape({
    lat: _propTypes2.default.number,
    lng: _propTypes2.default.number
  })]),
  defaultZoom: _propTypes2.default.number,
  zoom: _propTypes2.default.number,
  onBoundsChange: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onClick: _propTypes2.default.func,
  onChildClick: _propTypes2.default.func,
  onChildMouseDown: _propTypes2.default.func,
  onChildMouseUp: _propTypes2.default.func,
  onChildMouseMove: _propTypes2.default.func,
  onChildMouseEnter: _propTypes2.default.func,
  onChildMouseLeave: _propTypes2.default.func,
  onZoomAnimationStart: _propTypes2.default.func,
  onZoomAnimationEnd: _propTypes2.default.func,
  onDrag: _propTypes2.default.func,
  onMapTypeIdChange: _propTypes2.default.func,
  onTilesLoaded: _propTypes2.default.func,
  options: _propTypes2.default.any,
  distanceToMouse: _propTypes2.default.func,
  hoverDistance: _propTypes2.default.number,
  debounced: _propTypes2.default.bool,
  margin: _propTypes2.default.array,
  googleMapLoader: _propTypes2.default.any,
  onGoogleApiLoaded: _propTypes2.default.func,
  yesIWantToUseGoogleMapApiInternals: _propTypes2.default.bool,
  draggable: _propTypes2.default.bool,
  style: _propTypes2.default.any,
  resetBoundsOnResize: _propTypes2.default.bool,
  layerTypes: _propTypes2.default.arrayOf(_propTypes2.default.string) // ['TransitLayer', 'TrafficLayer']
};
GoogleMap.defaultProps = {
  distanceToMouse: function distanceToMouse(pt, mousePos /* , markerProps */) {
    return Math.sqrt((pt.x - mousePos.x) * (pt.x - mousePos.x) + (pt.y - mousePos.y) * (pt.y - mousePos.y));
  },

  hoverDistance: 30,
  debounced: true,
  options: defaultOptions_,
  googleMapLoader: _google_map_loader2.default,
  yesIWantToUseGoogleMapApiInternals: false,
  style: {
    width: '100%',
    height: '100%',
    margin: 0,
    padding: 0,
    position: 'relative'
  },
  layerTypes: [],
  heatmap: {},
  heatmapLibrary: false
};
GoogleMap.googleMapLoader = _google_map_loader2.default;
exports.default = GoogleMap;

/***/ }),

/***/ "./node_modules/google-map-react/lib/google_map_map.js":
/*!*************************************************************!*\
  !*** ./node_modules/google-map-react/lib/google_map_map.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = {
  width: '100%',
  height: '100%',
  left: 0,
  top: 0,
  margin: 0,
  padding: 0,
  position: 'absolute'
};

var GoogleMapMap = function (_Component) {
  _inherits(GoogleMapMap, _Component);

  function GoogleMapMap() {
    _classCallCheck(this, GoogleMapMap);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  GoogleMapMap.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
    return false; // disable react on this div
  };

  GoogleMapMap.prototype.render = function render() {
    var registerChild = this.props.registerChild;

    return _react2.default.createElement('div', { ref: registerChild, style: style });
  };

  return GoogleMapMap;
}(_react.Component);

exports.default = GoogleMapMap;

/***/ }),

/***/ "./node_modules/google-map-react/lib/google_map_markers.js":
/*!*****************************************************************!*\
  !*** ./node_modules/google-map-react/lib/google_map_markers.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _omit = __webpack_require__(/*! ./utils/omit */ "./node_modules/google-map-react/lib/utils/omit.js");

var _omit2 = _interopRequireDefault(_omit);

var _shallowEqual = __webpack_require__(/*! ./utils/shallowEqual */ "./node_modules/google-map-react/lib/utils/shallowEqual.js");

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// utils


var mainStyle = {
  width: '100%',
  height: '100%',
  left: 0,
  top: 0,
  margin: 0,
  padding: 0,
  position: 'absolute'
};

var style = {
  width: 0,
  height: 0,
  left: 0,
  top: 0,
  backgroundColor: 'transparent',
  position: 'absolute'
};

var GoogleMapMarkers = function (_Component) {
  _inherits(GoogleMapMarkers, _Component);

  /* eslint-disable react/forbid-prop-types */
  function GoogleMapMarkers(props) {
    _classCallCheck(this, GoogleMapMarkers);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this._getState = function () {
      return {
        children: _this.props.dispatcher.getChildren(),
        updateCounter: _this.props.dispatcher.getUpdateCounter()
      };
    };

    _this._onChangeHandler = function () {
      if (!_this.dimensionsCache_) {
        return;
      }

      var prevChildCount = (_this.state.children || []).length;
      var state = _this._getState();

      _this.setState(state, function () {
        return (state.children || []).length !== prevChildCount && _this._onMouseChangeHandler();
      });
    };

    _this._onChildClick = function () {
      if (_this.props.onChildClick) {
        if (_this.hoverChildProps_) {
          var hoverKey = _this.hoverKey_;
          var childProps = _this.hoverChildProps_;
          // click works only on hovered item
          _this.props.onChildClick(hoverKey, childProps);
        }
      }
    };

    _this._onChildMouseDown = function () {
      if (_this.props.onChildMouseDown) {
        if (_this.hoverChildProps_) {
          var hoverKey = _this.hoverKey_;
          var childProps = _this.hoverChildProps_;
          // works only on hovered item
          _this.props.onChildMouseDown(hoverKey, childProps);
        }
      }
    };

    _this._onChildMouseEnter = function (hoverKey, childProps) {
      if (!_this.dimensionsCache_) {
        return;
      }

      if (_this.props.onChildMouseEnter) {
        _this.props.onChildMouseEnter(hoverKey, childProps);
      }

      _this.hoverChildProps_ = childProps;
      _this.hoverKey_ = hoverKey;
      _this.setState({ hoverKey: hoverKey });
    };

    _this._onChildMouseLeave = function () {
      if (!_this.dimensionsCache_) {
        return;
      }

      var hoverKey = _this.hoverKey_;
      var childProps = _this.hoverChildProps_;

      if (hoverKey !== undefined && hoverKey !== null) {
        if (_this.props.onChildMouseLeave) {
          _this.props.onChildMouseLeave(hoverKey, childProps);
        }

        _this.hoverKey_ = null;
        _this.hoverChildProps_ = null;
        _this.setState({ hoverKey: null });
      }
    };

    _this._onMouseAllow = function (value) {
      if (!value) {
        _this._onChildMouseLeave();
      }

      _this.allowMouse_ = value;
    };

    _this._onMouseChangeHandler = function () {
      if (_this.allowMouse_) {
        _this._onMouseChangeHandlerRaf();
      }
    };

    _this._onMouseChangeHandlerRaf = function () {
      if (!_this.dimensionsCache_) {
        return;
      }

      var mp = _this.props.dispatcher.getMousePosition();

      if (mp) {
        var distances = [];
        var hoverDistance = _this.props.getHoverDistance();

        _react2.default.Children.forEach(_this.state.children, function (child, childIndex) {
          if (!child) return;
          // layers
          if (child.props.latLng === undefined && child.props.lat === undefined && child.props.lng === undefined) {
            return;
          }

          var childKey = child.key !== undefined && child.key !== null ? child.key : childIndex;
          var dist = _this.props.distanceToMouse(_this.dimensionsCache_[childKey], mp, child.props);
          if (dist < hoverDistance) {
            distances.push({
              key: childKey,
              dist: dist,
              props: child.props
            });
          }
        });

        if (distances.length) {
          distances.sort(function (a, b) {
            return a.dist - b.dist;
          });
          var hoverKey = distances[0].key;
          var childProps = distances[0].props;

          if (_this.hoverKey_ !== hoverKey) {
            _this._onChildMouseLeave();

            _this._onChildMouseEnter(hoverKey, childProps);
          }
        } else {
          _this._onChildMouseLeave();
        }
      } else {
        _this._onChildMouseLeave();
      }
    };

    _this._getDimensions = function (key) {
      var childKey = key;
      return _this.dimensionsCache_[childKey];
    };

    _this.props.dispatcher.on('kON_CHANGE', _this._onChangeHandler);
    _this.props.dispatcher.on('kON_MOUSE_POSITION_CHANGE', _this._onMouseChangeHandler);
    _this.props.dispatcher.on('kON_CLICK', _this._onChildClick);
    _this.props.dispatcher.on('kON_MDOWN', _this._onChildMouseDown);

    _this.dimensionsCache_ = {};
    _this.hoverKey_ = null;
    _this.hoverChildProps_ = null;
    _this.allowMouse_ = true;

    _this.state = _extends({}, _this._getState(), { hoverKey: null });
    return _this;
  }
  /* eslint-enable react/forbid-prop-types */

  GoogleMapMarkers.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    if (this.props.experimental === true) {
      return !(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)((0, _omit2.default)(this.state, ['hoverKey']), (0, _omit2.default)(nextState, ['hoverKey']));
    }

    return !(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)(this.state, nextState);
  };

  GoogleMapMarkers.prototype.componentWillUnmount = function componentWillUnmount() {
    this.props.dispatcher.removeListener('kON_CHANGE', this._onChangeHandler);
    this.props.dispatcher.removeListener('kON_MOUSE_POSITION_CHANGE', this._onMouseChangeHandler);
    this.props.dispatcher.removeListener('kON_CLICK', this._onChildClick);
    this.props.dispatcher.removeListener('kON_MDOWN', this._onChildMouseDown);

    this.dimensionsCache_ = null;
  };

  GoogleMapMarkers.prototype.render = function render() {
    var _this2 = this;

    var mainElementStyle = this.props.style || mainStyle;
    this.dimensionsCache_ = {};

    var markers = _react2.default.Children.map(this.state.children, function (child, childIndex) {
      if (!child) return undefined;
      if (child.props.latLng === undefined && child.props.lat === undefined && child.props.lng === undefined) {
        return _react2.default.cloneElement(child, {
          $geoService: _this2.props.geoService,
          $onMouseAllow: _this2._onMouseAllow,
          $prerender: _this2.props.prerender
        });
      }

      var latLng = child.props.latLng !== undefined ? child.props.latLng : { lat: child.props.lat, lng: child.props.lng };

      var pt = _this2.props.insideMapPanes ? _this2.props.geoService.fromLatLngToDivPixel(latLng) : _this2.props.geoService.fromLatLngToCenterPixel(latLng);

      var stylePtPos = {
        left: pt.x,
        top: pt.y
      };

      // If the component has a southeast corner defined (either as a LatLng, or a separate
      // lat and lng pair), set the width and height based on the distance between the northwest
      // and the southeast corner to lock the overlay to the correct geographic bounds.
      if (child.props.seLatLng !== undefined || child.props.seLat !== undefined && child.props.seLng !== undefined) {
        var seLatLng = child.props.seLatLng !== undefined ? child.props.seLatLng : { lat: child.props.seLat, lng: child.props.seLng };

        var sePt = _this2.props.insideMapPanes ? _this2.props.geoService.fromLatLngToDivPixel(seLatLng) : _this2.props.geoService.fromLatLngToCenterPixel(seLatLng);

        stylePtPos.width = sePt.x - pt.x;
        stylePtPos.height = sePt.y - pt.y;
      }

      var containerPt = _this2.props.geoService.fromLatLngToContainerPixel(latLng);

      // to prevent rerender on child element i need to pass
      // const params $getDimensions and $dimensionKey instead of dimension object
      var childKey = child.key !== undefined && child.key !== null ? child.key : childIndex;

      _this2.dimensionsCache_[childKey] = _extends({
        x: containerPt.x,
        y: containerPt.y
      }, latLng);

      return _react2.default.createElement(
        'div',
        {
          key: childKey,
          style: _extends({}, style, stylePtPos),
          className: child.props.$markerHolderClassName
        },
        _react2.default.cloneElement(child, {
          $hover: childKey === _this2.state.hoverKey,
          $getDimensions: _this2._getDimensions,
          $dimensionKey: childKey,
          $geoService: _this2.props.geoService,
          $onMouseAllow: _this2._onMouseAllow,
          $prerender: _this2.props.prerender
        })
      );
    });

    return _react2.default.createElement(
      'div',
      { style: mainElementStyle },
      markers
    );
  };

  return GoogleMapMarkers;
}(_react.Component);

GoogleMapMarkers.propTypes = {
  geoService: _propTypes2.default.any,
  style: _propTypes2.default.any,
  distanceToMouse: _propTypes2.default.func,
  dispatcher: _propTypes2.default.any,
  onChildClick: _propTypes2.default.func,
  onChildMouseDown: _propTypes2.default.func,
  onChildMouseLeave: _propTypes2.default.func,
  onChildMouseEnter: _propTypes2.default.func,
  getHoverDistance: _propTypes2.default.func,
  insideMapPanes: _propTypes2.default.bool,
  prerender: _propTypes2.default.bool
};
GoogleMapMarkers.defaultProps = {
  insideMapPanes: false,
  prerender: false
};
exports.default = GoogleMapMarkers;

/***/ }),

/***/ "./node_modules/google-map-react/lib/google_map_markers_prerender.js":
/*!***************************************************************************!*\
  !*** ./node_modules/google-map-react/lib/google_map_markers_prerender.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (props) {
  return _react2.default.createElement(
    'div',
    { style: style },
    _react2.default.createElement(_google_map_markers2.default, _extends({}, props, { prerender: true }))
  );
};

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _google_map_markers = __webpack_require__(/*! ./google_map_markers */ "./node_modules/google-map-react/lib/google_map_markers.js");

var _google_map_markers2 = _interopRequireDefault(_google_map_markers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
  width: '50%',
  height: '50%',
  left: '50%',
  top: '50%',
  // backgroundColor: 'red',
  margin: 0,
  padding: 0,
  position: 'absolute'
  // opacity: 0.3
};

/***/ }),

/***/ "./node_modules/google-map-react/lib/index.js":
/*!****************************************************!*\
  !*** ./node_modules/google-map-react/lib/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _google_map = __webpack_require__(/*! ./google_map */ "./node_modules/google-map-react/lib/google_map.js");

var _google_map2 = _interopRequireDefault(_google_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _google_map2.default;

/***/ }),

/***/ "./node_modules/google-map-react/lib/loaders/google_map_loader.js":
/*!************************************************************************!*\
  !*** ./node_modules/google-map-react/lib/loaders/google_map_loader.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var BASE_URL = 'https://maps';
var DEFAULT_URL = BASE_URL + '.googleapis.com';
var API_PATH = '/maps/api/js?callback=_$_google_map_initialize_$_';

var getUrl = function getUrl(region) {
  if (region && region.toLowerCase() === 'cn') {
    return BASE_URL + '.google.cn';
  }
  return DEFAULT_URL;
};

var $script_ = null;

var loadPromise_ = void 0;

var resolveCustomPromise_ = void 0;

var _customPromise = new Promise(function (resolve) {
  resolveCustomPromise_ = resolve;
});

// TODO add libraries language and other map options

exports.default = function (bootstrapURLKeys, heatmapLibrary) {
  if (!$script_) {
    $script_ = __webpack_require__(/*! scriptjs */ "./node_modules/scriptjs/dist/script.js"); // eslint-disable-line
  }

  // call from outside google-map-react
  // will be as soon as loadPromise_ resolved
  if (!bootstrapURLKeys) {
    return _customPromise;
  }

  if (loadPromise_) {
    return loadPromise_;
  }

  loadPromise_ = new Promise(function (resolve, reject) {
    if (typeof window === 'undefined') {
      reject(new Error('google map cannot be loaded outside browser env'));
      return;
    }

    if (window.google && window.google.maps) {
      resolve(window.google.maps);
      return;
    }

    if (typeof window._$_google_map_initialize_$_ !== 'undefined') {
      reject(new Error('google map initialization error'));
    }

    window._$_google_map_initialize_$_ = function () {
      delete window._$_google_map_initialize_$_;
      resolve(window.google.maps);
    };

    if (true) {
      if (Object.keys(bootstrapURLKeys).indexOf('callback') > -1) {
        var message = '"callback" key in bootstrapURLKeys is not allowed,\n                          use onGoogleApiLoaded property instead';
        // eslint-disable-next-line no-console
        console.error(message);
        throw new Error(message);
      }
    }

    var params = Object.keys(bootstrapURLKeys).reduce(function (r, key) {
      return r + '&' + key + '=' + bootstrapURLKeys[key];
    }, '');

    var baseUrl = getUrl(bootstrapURLKeys.region);
    var libraries = heatmapLibrary ? '&libraries=visualization' : '';

    $script_('' + baseUrl + API_PATH + params + libraries, function () {
      return typeof window.google === 'undefined' && reject(new Error('google map initialization error (not loaded)'));
    });
  });

  resolveCustomPromise_(loadPromise_);

  return loadPromise_;
};

/***/ }),

/***/ "./node_modules/google-map-react/lib/marker_dispatcher.js":
/*!****************************************************************!*\
  !*** ./node_modules/google-map-react/lib/marker_dispatcher.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _eventemitter = __webpack_require__(/*! eventemitter3 */ "./node_modules/eventemitter3/index.js");

var _eventemitter2 = _interopRequireDefault(_eventemitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MarkerDispatcher = function (_EventEmitter) {
  _inherits(MarkerDispatcher, _EventEmitter);

  function MarkerDispatcher(gmapInstance) {
    _classCallCheck(this, MarkerDispatcher);

    var _this = _possibleConstructorReturn(this, _EventEmitter.call(this));

    _this.gmapInstance = gmapInstance;
    return _this;
  }

  MarkerDispatcher.prototype.getChildren = function getChildren() {
    return this.gmapInstance.props.children;
  };

  MarkerDispatcher.prototype.getMousePosition = function getMousePosition() {
    return this.gmapInstance.mouse_;
  };

  MarkerDispatcher.prototype.getUpdateCounter = function getUpdateCounter() {
    return this.gmapInstance.updateCounter_;
  };

  MarkerDispatcher.prototype.dispose = function dispose() {
    this.gmapInstance = null;
    this.removeAllListeners();
  };

  return MarkerDispatcher;
}(_eventemitter2.default);

exports.default = MarkerDispatcher;

/***/ }),

/***/ "./node_modules/google-map-react/lib/utils/detect.js":
/*!***********************************************************!*\
  !*** ./node_modules/google-map-react/lib/utils/detect.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = detectBrowser;
// http://stackoverflow.com/questions/5899783/detect-safari-chrome-ie-firefox-opera-with-user-agent
var detectBrowserResult_ = null;

function detectBrowser() {
  if (detectBrowserResult_) {
    return detectBrowserResult_;
  }

  if (typeof navigator !== 'undefined') {
    var isExplorer = navigator.userAgent.indexOf('MSIE') > -1;
    var isFirefox = navigator.userAgent.indexOf('Firefox') > -1;
    var isOpera = navigator.userAgent.toLowerCase().indexOf('op') > -1;

    var isChrome = navigator.userAgent.indexOf('Chrome') > -1;
    var isSafari = navigator.userAgent.indexOf('Safari') > -1;

    if (isChrome && isSafari) {
      isSafari = false;
    }

    if (isChrome && isOpera) {
      isChrome = false;
    }

    detectBrowserResult_ = {
      isExplorer: isExplorer,
      isFirefox: isFirefox,
      isOpera: isOpera,
      isChrome: isChrome,
      isSafari: isSafari
    };
    return detectBrowserResult_;
  }

  detectBrowserResult_ = {
    isChrome: true,
    isExplorer: false,
    isFirefox: false,
    isOpera: false,
    isSafari: false
  };

  return detectBrowserResult_;
}

/***/ }),

/***/ "./node_modules/google-map-react/lib/utils/detectElementResize.js":
/*!************************************************************************!*\
  !*** ./node_modules/google-map-react/lib/utils/detectElementResize.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _passiveEvents = __webpack_require__(/*! ./passiveEvents */ "./node_modules/google-map-react/lib/utils/passiveEvents.js");

var _passiveEvents2 = _interopRequireDefault(_passiveEvents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Reliable `window` and `document` detection
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

// Check `document` and `window` in case of server-side rendering
/* eslint-disable */
/**
* Detect Element Resize.
* Forked in order to guard against unsafe 'window' and 'document' references.
*
* https://github.com/sdecima/javascript-detect-element-resize
* Sebastian Decima
*
* version: 0.5.3
**/

var _window;
if (canUseDOM) {
  _window = window;
} else if (typeof self !== 'undefined') {
  _window = self;
} else {
  _window = undefined;
}

var attachEvent = typeof document !== 'undefined' && document.attachEvent;
var stylesCreated = false;

if (canUseDOM && !attachEvent) {
  var requestFrame = function () {
    var raf = _window.requestAnimationFrame || _window.mozRequestAnimationFrame || _window.webkitRequestAnimationFrame || function (fn) {
      return _window.setTimeout(fn, 20);
    };
    return function (fn) {
      return raf(fn);
    };
  }();

  var cancelFrame = function () {
    var cancel = _window.cancelAnimationFrame || _window.mozCancelAnimationFrame || _window.webkitCancelAnimationFrame || _window.clearTimeout;
    return function (id) {
      return cancel(id);
    };
  }();

  var resetTriggers = function resetTriggers(element) {
    var triggers = element.__resizeTriggers__,
        expand = triggers.firstElementChild,
        contract = triggers.lastElementChild,
        expandChild = expand.firstElementChild;
    contract.scrollLeft = contract.scrollWidth;
    contract.scrollTop = contract.scrollHeight;
    expandChild.style.width = expand.offsetWidth + 1 + 'px';
    expandChild.style.height = expand.offsetHeight + 1 + 'px';
    expand.scrollLeft = expand.scrollWidth;
    expand.scrollTop = expand.scrollHeight;
  };

  var checkTriggers = function checkTriggers(element) {
    return element.offsetWidth != element.__resizeLast__.width || element.offsetHeight != element.__resizeLast__.height;
  };

  var scrollListener = function scrollListener(e) {
    var element = this;
    resetTriggers(this);
    if (this.__resizeRAF__) cancelFrame(this.__resizeRAF__);
    this.__resizeRAF__ = requestFrame(function () {
      if (checkTriggers(element)) {
        element.__resizeLast__.width = element.offsetWidth;
        element.__resizeLast__.height = element.offsetHeight;
        element.__resizeListeners__.forEach(function (fn) {
          fn.call(element, e);
        });
      }
    });
  };

  /* Detect CSS Animations support to detect element display/re-attach */
  var animation = false,
      animationstring = 'animation',
      keyframeprefix = '',
      animationstartevent = 'animationstart',
      domPrefixes = 'Webkit Moz O ms'.split(' '),
      startEvents = 'webkitAnimationStart animationstart oAnimationStart MSAnimationStart'.split(' '),
      pfx = '';

  if (canUseDOM) {
    var elm = document.createElement('fakeelement');
    if (elm.style.animationName !== undefined) {
      animation = true;
    }

    if (animation === false) {
      for (var i = 0; i < domPrefixes.length; i++) {
        if (elm.style[domPrefixes[i] + 'AnimationName'] !== undefined) {
          pfx = domPrefixes[i];
          animationstring = pfx + 'Animation';
          keyframeprefix = '-' + pfx.toLowerCase() + '-';
          animationstartevent = startEvents[i];
          animation = true;
          break;
        }
      }
    }
  }

  var animationName = 'resizeanim';
  var animationKeyframes = '@' + keyframeprefix + 'keyframes ' + animationName + ' { from { opacity: 0; } to { opacity: 0; } } ';
  var animationStyle = keyframeprefix + 'animation: 1ms ' + animationName + '; ';
}

var createStyles = function createStyles() {
  if (!stylesCreated) {
    //opacity:0 works around a chrome bug https://code.google.com/p/chromium/issues/detail?id=286360
    var css = (animationKeyframes ? animationKeyframes : '') + '.resize-triggers { ' + (animationStyle ? animationStyle : '') + 'visibility: hidden; opacity: 0; } ' + '.resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',
        head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style');

    style.type = 'text/css';
    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }

    head.appendChild(style);
    stylesCreated = true;
  }
};

var addResizeListener = function addResizeListener(element, fn) {
  if (element.parentNode === undefined) {
    var tempParentDiv = document.createElement('div');
    element.parentNode = tempParentDiv;
  }
  element = element.parentNode;
  if (attachEvent) element.attachEvent('onresize', fn);else {
    if (!element.__resizeTriggers__) {
      if (getComputedStyle(element).position == 'static') element.style.position = 'relative';
      createStyles();
      element.__resizeLast__ = {};
      element.__resizeListeners__ = [];
      (element.__resizeTriggers__ = document.createElement('div')).className = 'resize-triggers';
      element.__resizeTriggers__.innerHTML = '<div class="expand-trigger"><div></div></div>' + '<div class="contract-trigger"></div>';
      element.appendChild(element.__resizeTriggers__);
      resetTriggers(element);

      (0, _passiveEvents2.default)(element, 'scroll', scrollListener, true);

      /* Listen for a css animation to detect element display/re-attach */
      animationstartevent && element.__resizeTriggers__.addEventListener(animationstartevent, function (e) {
        if (e.animationName == animationName) resetTriggers(element);
      });
    }
    element.__resizeListeners__.push(fn);
  }
};

var removeResizeListener = function removeResizeListener(element, fn) {
  element = element.parentNode;
  if (attachEvent) element.detachEvent('onresize', fn);else {
    element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);
    if (!element.__resizeListeners__.length) {
      element.removeEventListener('scroll', scrollListener);
      element.__resizeTriggers__ = !element.removeChild(element.__resizeTriggers__);
    }
  }
};

module.exports = {
  addResizeListener: addResizeListener,
  removeResizeListener: removeResizeListener
};

/***/ }),

/***/ "./node_modules/google-map-react/lib/utils/geo.js":
/*!********************************************************!*\
  !*** ./node_modules/google-map-react/lib/utils/geo.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _pointGeometry = __webpack_require__(/*! @mapbox/point-geometry */ "./node_modules/@mapbox/point-geometry/index.js");

var _pointGeometry2 = _interopRequireDefault(_pointGeometry);

var _lat_lng = __webpack_require__(/*! ./lib_geo/lat_lng */ "./node_modules/google-map-react/lib/utils/lib_geo/lat_lng.js");

var _lat_lng2 = _interopRequireDefault(_lat_lng);

var _transform = __webpack_require__(/*! ./lib_geo/transform */ "./node_modules/google-map-react/lib/utils/lib_geo/transform.js");

var _transform2 = _interopRequireDefault(_transform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Geo = function () {
  function Geo(tileSize) {
    _classCallCheck(this, Geo);

    // left_top view пользует гугл
    // super();
    this.hasSize_ = false;
    this.hasView_ = false;
    this.transform_ = new _transform2.default(tileSize || 512);
  }

  Geo.prototype.setView = function setView(center, zoom, bearing) {
    this.transform_.center = _lat_lng2.default.convert(center);
    this.transform_.zoom = +zoom;
    this.transform_.bearing = +bearing;
    this.hasView_ = true;
  };

  Geo.prototype.setViewSize = function setViewSize(width, height) {
    this.transform_.width = width;
    this.transform_.height = height;
    this.hasSize_ = true;
  };

  Geo.prototype.setMapCanvasProjection = function setMapCanvasProjection(maps, mapCanvasProjection) {
    this.maps_ = maps;
    this.mapCanvasProjection_ = mapCanvasProjection;
  };

  Geo.prototype.canProject = function canProject() {
    return this.hasSize_ && this.hasView_;
  };

  Geo.prototype.hasSize = function hasSize() {
    return this.hasSize_;
  };

  /** Returns the pixel position relative to the map center. */


  Geo.prototype.fromLatLngToCenterPixel = function fromLatLngToCenterPixel(ptLatLng) {
    return this.transform_.locationPoint(_lat_lng2.default.convert(ptLatLng));
  };

  /**
   * Returns the pixel position relative to the map panes,
   * or relative to the map center if there are no panes.
   */


  Geo.prototype.fromLatLngToDivPixel = function fromLatLngToDivPixel(ptLatLng) {
    if (this.mapCanvasProjection_) {
      var latLng = new this.maps_.LatLng(ptLatLng.lat, ptLatLng.lng);
      return this.mapCanvasProjection_.fromLatLngToDivPixel(latLng);
    }
    return this.fromLatLngToCenterPixel(ptLatLng);
  };

  /** Returns the pixel position relative to the map top-left. */


  Geo.prototype.fromLatLngToContainerPixel = function fromLatLngToContainerPixel(ptLatLng) {
    if (this.mapCanvasProjection_) {
      var latLng = new this.maps_.LatLng(ptLatLng.lat, ptLatLng.lng);
      return this.mapCanvasProjection_.fromLatLngToContainerPixel(latLng);
    }

    var pt = this.fromLatLngToCenterPixel(ptLatLng);
    pt.x -= this.transform_.worldSize * Math.round(pt.x / this.transform_.worldSize);

    pt.x += this.transform_.width / 2;
    pt.y += this.transform_.height / 2;

    return pt;
  };

  /** Returns the LatLng for the given offset from the map top-left. */


  Geo.prototype.fromContainerPixelToLatLng = function fromContainerPixelToLatLng(ptXY) {
    if (this.mapCanvasProjection_) {
      var latLng = this.mapCanvasProjection_.fromContainerPixelToLatLng(ptXY);
      return { lat: latLng.lat(), lng: latLng.lng() };
    }

    var ptxy = _extends({}, ptXY);
    ptxy.x -= this.transform_.width / 2;
    ptxy.y -= this.transform_.height / 2;
    var ptRes = this.transform_.pointLocation(_pointGeometry2.default.convert(ptxy));

    ptRes.lng -= 360 * Math.round(ptRes.lng / 360); // convert 2 google format
    return ptRes;
  };

  Geo.prototype.getWidth = function getWidth() {
    return this.transform_.width;
  };

  Geo.prototype.getHeight = function getHeight() {
    return this.transform_.height;
  };

  Geo.prototype.getZoom = function getZoom() {
    return this.transform_.zoom;
  };

  Geo.prototype.getCenter = function getCenter() {
    var ptRes = this.transform_.pointLocation({ x: 0, y: 0 });

    return ptRes;
  };

  Geo.prototype.getBounds = function getBounds(margins, roundFactor) {
    var bndT = margins && margins[0] || 0;
    var bndR = margins && margins[1] || 0;
    var bndB = margins && margins[2] || 0;
    var bndL = margins && margins[3] || 0;

    if (this.getWidth() - bndR - bndL > 0 && this.getHeight() - bndT - bndB > 0) {
      var topLeftCorner = this.transform_.pointLocation(_pointGeometry2.default.convert({
        x: bndL - this.getWidth() / 2,
        y: bndT - this.getHeight() / 2
      }));
      var bottomRightCorner = this.transform_.pointLocation(_pointGeometry2.default.convert({
        x: this.getWidth() / 2 - bndR,
        y: this.getHeight() / 2 - bndB
      }));

      var res = [topLeftCorner.lat, topLeftCorner.lng, // NW
      bottomRightCorner.lat, bottomRightCorner.lng, // SE
      bottomRightCorner.lat, topLeftCorner.lng, // SW
      topLeftCorner.lat, bottomRightCorner.lng];

      if (roundFactor) {
        res = res.map(function (r) {
          return Math.round(r * roundFactor) / roundFactor;
        });
      }
      return res;
    }

    return [0, 0, 0, 0];
  };

  return Geo;
}();

exports.default = Geo;

/***/ }),

/***/ "./node_modules/google-map-react/lib/utils/isArraysEqualEps.js":
/*!*********************************************************************!*\
  !*** ./node_modules/google-map-react/lib/utils/isArraysEqualEps.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = isArraysEqualEps;
function isArraysEqualEps(arrayA, arrayB, eps) {
  if (arrayA && arrayB) {
    for (var i = 0; i !== arrayA.length; ++i) {
      if (Math.abs(arrayA[i] - arrayB[i]) > eps) {
        return false;
      }
    }
    return true;
  }
  return false;
}

/***/ }),

/***/ "./node_modules/google-map-react/lib/utils/isEmpty.js":
/*!************************************************************!*\
  !*** ./node_modules/google-map-react/lib/utils/isEmpty.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isEmpty = function isEmpty(val) {
  // check for empty object {}, array []
  if (val !== null && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object') {
    if (Object.keys(val).length === 0) {
      return true;
    }
  } else if (val === null || val === undefined || val === '') {
    // check for undefined, null and ""
    return true;
  }
  return false;
};

exports.default = isEmpty;

/***/ }),

/***/ "./node_modules/google-map-react/lib/utils/isNumber.js":
/*!*************************************************************!*\
  !*** ./node_modules/google-map-react/lib/utils/isNumber.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = isNumber;
function isObjectLike(value) {
  return !!value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object';
}

var objectToString = Object.prototype.toString;

function isNumber(value) {
  var numberTag = '[object Number]';
  return typeof value === 'number' || isObjectLike(value) && objectToString.call(value) === numberTag;
}

/***/ }),

/***/ "./node_modules/google-map-react/lib/utils/isPlainObject.js":
/*!******************************************************************!*\
  !*** ./node_modules/google-map-react/lib/utils/isPlainObject.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = isPlainObject;
// source taken from https://github.com/rackt/redux/blob/master/src/utils/isPlainObject.js
var fnToString = function fnToString(fn) {
  return Function.prototype.toString.call(fn);
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (!obj || (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') {
    return false;
  }

  var proto = typeof obj.constructor === 'function' ? Object.getPrototypeOf(obj) : Object.prototype;

  if (proto === null) {
    return true;
  }

  var constructor = proto.constructor;

  return typeof constructor === 'function' && constructor instanceof constructor && fnToString(constructor) === fnToString(Object);
}

/***/ }),

/***/ "./node_modules/google-map-react/lib/utils/lib_geo/lat_lng.js":
/*!********************************************************************!*\
  !*** ./node_modules/google-map-react/lib/utils/lib_geo/lat_lng.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _wrap2 = __webpack_require__(/*! ./wrap */ "./node_modules/google-map-react/lib/utils/lib_geo/wrap.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LatLng = function () {
  function LatLng(lat, lng) {
    _classCallCheck(this, LatLng);

    if (isNaN(lat) || isNaN(lng)) {
      throw new Error('Invalid LatLng object: (' + lat + ', ' + lng + ')');
    }
    this.lat = +lat;
    this.lng = +lng;
  }

  LatLng.prototype.wrap = function wrap() {
    return new LatLng(this.lat, (0, _wrap2.wrap)(this.lng, -180, 180));
  };

  return LatLng;
}();

LatLng.convert = function (a) {
  if (a instanceof LatLng) {
    return a;
  }

  if (Array.isArray(a)) {
    return new LatLng(a[0], a[1]);
  }

  if ('lng' in a && 'lat' in a) {
    return new LatLng(a.lat, a.lng);
  }

  return a;
};

exports.default = LatLng;

/***/ }),

/***/ "./node_modules/google-map-react/lib/utils/lib_geo/transform.js":
/*!**********************************************************************!*\
  !*** ./node_modules/google-map-react/lib/utils/lib_geo/transform.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* eslint-disable class-methods-use-this */


var _pointGeometry = __webpack_require__(/*! @mapbox/point-geometry */ "./node_modules/@mapbox/point-geometry/index.js");

var _pointGeometry2 = _interopRequireDefault(_pointGeometry);

var _lat_lng = __webpack_require__(/*! ./lat_lng */ "./node_modules/google-map-react/lib/utils/lib_geo/lat_lng.js");

var _lat_lng2 = _interopRequireDefault(_lat_lng);

var _wrap = __webpack_require__(/*! ./wrap */ "./node_modules/google-map-react/lib/utils/lib_geo/wrap.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// A single transform, generally used for a single tile to be scaled, rotated, and zoomed.
var Transform = function () {
  function Transform(tileSize, minZoom, maxZoom) {
    _classCallCheck(this, Transform);

    this.tileSize = tileSize || 512; // constant

    this._minZoom = minZoom || 0;
    this._maxZoom = maxZoom || 52;

    this.latRange = [-85.05113, 85.05113];

    this.width = 0;
    this.height = 0;
    this.zoom = 0;
    this.center = new _lat_lng2.default(0, 0);
    this.angle = 0;
  }

  Transform.prototype.zoomScale = function zoomScale(zoom) {
    return Math.pow(2, zoom);
  };

  Transform.prototype.scaleZoom = function scaleZoom(scale) {
    return Math.log(scale) / Math.LN2;
  };

  Transform.prototype.project = function project(latlng, worldSize) {
    return new _pointGeometry2.default(this.lngX(latlng.lng, worldSize), this.latY(latlng.lat, worldSize));
  };

  Transform.prototype.unproject = function unproject(point, worldSize) {
    return new _lat_lng2.default(this.yLat(point.y, worldSize), this.xLng(point.x, worldSize));
  };

  // lat/lon <-> absolute pixel coords convertion
  Transform.prototype.lngX = function lngX(lon, worldSize) {
    return (180 + lon) * (worldSize || this.worldSize) / 360;
  };

  // latitude to absolute y coord


  Transform.prototype.latY = function latY(lat, worldSize) {
    var y = 180 / Math.PI * Math.log(Math.tan(Math.PI / 4 + lat * Math.PI / 360));
    return (180 - y) * (worldSize || this.worldSize) / 360;
  };

  Transform.prototype.xLng = function xLng(x, worldSize) {
    return x * 360 / (worldSize || this.worldSize) - 180;
  };

  Transform.prototype.yLat = function yLat(y, worldSize) {
    var y2 = 180 - y * 360 / (worldSize || this.worldSize);
    return 360 / Math.PI * Math.atan(Math.exp(y2 * Math.PI / 180)) - 90;
  };

  Transform.prototype.locationPoint = function locationPoint(latlng) {
    var p = this.project(latlng);
    return this.centerPoint._sub(this.point._sub(p)._rotate(this.angle));
  };

  Transform.prototype.pointLocation = function pointLocation(p) {
    var p2 = this.centerPoint._sub(p)._rotate(-this.angle);
    return this.unproject(this.point.sub(p2));
  };

  _createClass(Transform, [{
    key: 'minZoom',
    get: function get() {
      return this._minZoom;
    },
    set: function set(zoom) {
      this._minZoom = zoom;
      this.zoom = Math.max(this.zoom, zoom);
    }
  }, {
    key: 'maxZoom',
    get: function get() {
      return this._maxZoom;
    },
    set: function set(zoom) {
      this._maxZoom = zoom;
      this.zoom = Math.min(this.zoom, zoom);
    }
  }, {
    key: 'worldSize',
    get: function get() {
      return this.tileSize * this.scale;
    }
  }, {
    key: 'centerPoint',
    get: function get() {
      return new _pointGeometry2.default(0, 0); // this.size._div(2);
    }
  }, {
    key: 'size',
    get: function get() {
      return new _pointGeometry2.default(this.width, this.height);
    }
  }, {
    key: 'bearing',
    get: function get() {
      return -this.angle / Math.PI * 180;
    },
    set: function set(bearing) {
      this.angle = -(0, _wrap.wrap)(bearing, -180, 180) * Math.PI / 180;
    }
  }, {
    key: 'zoom',
    get: function get() {
      return this._zoom;
    },
    set: function set(zoom) {
      var zoomV = Math.min(Math.max(zoom, this.minZoom), this.maxZoom);
      this._zoom = zoomV;
      this.scale = this.zoomScale(zoomV);
      this.tileZoom = Math.floor(zoomV);
      this.zoomFraction = zoomV - this.tileZoom;
    }
  }, {
    key: 'x',
    get: function get() {
      return this.lngX(this.center.lng);
    }
  }, {
    key: 'y',
    get: function get() {
      return this.latY(this.center.lat);
    }
  }, {
    key: 'point',
    get: function get() {
      return new _pointGeometry2.default(this.x, this.y);
    }
  }]);

  return Transform;
}();

exports.default = Transform;

/***/ }),

/***/ "./node_modules/google-map-react/lib/utils/lib_geo/wrap.js":
/*!*****************************************************************!*\
  !*** ./node_modules/google-map-react/lib/utils/lib_geo/wrap.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.wrap = wrap;
/* eslint-disable import/prefer-default-export */

function wrap(n, min, max) {
  var d = max - min;
  return n === max ? n : ((n - min) % d + d) % d + min;
}

/***/ }),

/***/ "./node_modules/google-map-react/lib/utils/math/log2.js":
/*!**************************************************************!*\
  !*** ./node_modules/google-map-react/lib/utils/math/log2.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var log2 = Math.log2 ? Math.log2 : function (x) {
  return Math.log(x) / Math.LN2;
};

exports.default = log2;

/***/ }),

/***/ "./node_modules/google-map-react/lib/utils/omit.js":
/*!*********************************************************!*\
  !*** ./node_modules/google-map-react/lib/utils/omit.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// https://github.com/acdlite/recompose/blob/master/src/packages/recompose/utils/omit.js
var omit = function omit(obj, keys) {
  var rest = _objectWithoutProperties(obj, []);

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (key in rest) {
      delete rest[key];
    }
  }
  return rest;
};

exports.default = omit;

/***/ }),

/***/ "./node_modules/google-map-react/lib/utils/passiveEvents.js":
/*!******************************************************************!*\
  !*** ./node_modules/google-map-react/lib/utils/passiveEvents.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = addPassiveEventListener;
// feature detection for passive support
// see: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Safely_detecting_option_support
function hasPassiveSupport() {
  var passiveSupported = false;

  try {
    var options = Object.defineProperty({}, 'passive', {
      get: function get() {
        passiveSupported = true;
      }
    });

    window.addEventListener('test', options, options);
    window.removeEventListener('test', options, options);
  } catch (err) {
    passiveSupported = false;
  }

  return passiveSupported;
}

function addPassiveEventListener(element, eventName, func, capture) {
  element.addEventListener(eventName, func, hasPassiveSupport() ? {
    capture: capture,
    passive: true
  } : capture);
}

/***/ }),

/***/ "./node_modules/google-map-react/lib/utils/pick.js":
/*!*********************************************************!*\
  !*** ./node_modules/google-map-react/lib/utils/pick.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = pick;
// source taken from https://github.com/rackt/redux/blob/master/src/utils/pick.js

function pick(obj, fn) {
  return Object.keys(obj).reduce(function (result, key) {
    if (fn(obj[key])) {
      result[key] = obj[key]; // eslint-disable-line
    }
    return result;
  }, {});
}

/***/ }),

/***/ "./node_modules/google-map-react/lib/utils/raf.js":
/*!********************************************************!*\
  !*** ./node_modules/google-map-react/lib/utils/raf.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = raf;
function raf(callback) {
  if (window.requestAnimationFrame) {
    return window.requestAnimationFrame(callback);
  }

  var nativeRaf = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;

  return nativeRaf ? nativeRaf(callback) : window.setTimeout(callback, 1e3 / 60);
}

/***/ }),

/***/ "./node_modules/google-map-react/lib/utils/shallowEqual.js":
/*!*****************************************************************!*\
  !*** ./node_modules/google-map-react/lib/utils/shallowEqual.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule shallowEqual
 * @typechecks
 * 
 */

var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  // SameValue algorithm
  if (x === y) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    // Added the nonzero y check to make Flow happy, but it is redundant
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  }
  // Step 6.a: NaN == NaN
  // eslint-disable-next-line no-self-compare
  return x !== x && y !== y;
}

/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */
function shallowEqual(objA, objB) {
  if (is(objA, objB)) {
    return true;
  }

  if ((typeof objA === 'undefined' ? 'undefined' : _typeof(objA)) !== 'object' || objA === null || (typeof objB === 'undefined' ? 'undefined' : _typeof(objB)) !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

module.exports = shallowEqual;
/* src: https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/shallowEqual.js */

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/scriptjs/dist/script.js":
/*!**********************************************!*\
  !*** ./node_modules/scriptjs/dist/script.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  * $script.js JS loader & dependency manager
  * https://github.com/ded/script.js
  * (c) Dustin Diaz 2014 | License MIT
  */

(function (name, definition) {
  if ( true && module.exports) module.exports = definition()
  else if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  else {}
})('$script', function () {
  var doc = document
    , head = doc.getElementsByTagName('head')[0]
    , s = 'string'
    , f = false
    , push = 'push'
    , readyState = 'readyState'
    , onreadystatechange = 'onreadystatechange'
    , list = {}
    , ids = {}
    , delay = {}
    , scripts = {}
    , scriptpath
    , urlArgs

  function every(ar, fn) {
    for (var i = 0, j = ar.length; i < j; ++i) if (!fn(ar[i])) return f
    return 1
  }
  function each(ar, fn) {
    every(ar, function (el) {
      fn(el)
      return 1
    })
  }

  function $script(paths, idOrDone, optDone) {
    paths = paths[push] ? paths : [paths]
    var idOrDoneIsDone = idOrDone && idOrDone.call
      , done = idOrDoneIsDone ? idOrDone : optDone
      , id = idOrDoneIsDone ? paths.join('') : idOrDone
      , queue = paths.length
    function loopFn(item) {
      return item.call ? item() : list[item]
    }
    function callback() {
      if (!--queue) {
        list[id] = 1
        done && done()
        for (var dset in delay) {
          every(dset.split('|'), loopFn) && !each(delay[dset], loopFn) && (delay[dset] = [])
        }
      }
    }
    setTimeout(function () {
      each(paths, function loading(path, force) {
        if (path === null) return callback()
        
        if (!force && !/^https?:\/\//.test(path) && scriptpath) {
          path = (path.indexOf('.js') === -1) ? scriptpath + path + '.js' : scriptpath + path;
        }
        
        if (scripts[path]) {
          if (id) ids[id] = 1
          return (scripts[path] == 2) ? callback() : setTimeout(function () { loading(path, true) }, 0)
        }

        scripts[path] = 1
        if (id) ids[id] = 1
        create(path, callback)
      })
    }, 0)
    return $script
  }

  function create(path, fn) {
    var el = doc.createElement('script'), loaded
    el.onload = el.onerror = el[onreadystatechange] = function () {
      if ((el[readyState] && !(/^c|loade/.test(el[readyState]))) || loaded) return;
      el.onload = el[onreadystatechange] = null
      loaded = 1
      scripts[path] = 2
      fn()
    }
    el.async = 1
    el.src = urlArgs ? path + (path.indexOf('?') === -1 ? '?' : '&') + urlArgs : path;
    head.insertBefore(el, head.lastChild)
  }

  $script.get = create

  $script.order = function (scripts, id, done) {
    (function callback(s) {
      s = scripts.shift()
      !scripts.length ? $script(s, id, done) : $script(s, callback)
    }())
  }

  $script.path = function (p) {
    scriptpath = p
  }
  $script.urlArgs = function (str) {
    urlArgs = str;
  }
  $script.ready = function (deps, ready, req) {
    deps = deps[push] ? deps : [deps]
    var missing = [];
    !each(deps, function (dep) {
      list[dep] || missing[push](dep);
    }) && every(deps, function (dep) {return list[dep]}) ?
      ready() : !function (key) {
      delay[key] = delay[key] || []
      delay[key][push](ready)
      req && req(missing)
    }(deps.join('|'))
    return $script
  }

  $script.done = function (idOrDone) {
    $script([null], idOrDone)
  }

  return $script
});


/***/ }),

/***/ "./src/blocks/aspect-ratio/utils.ts":
/*!******************************************!*\
  !*** ./src/blocks/aspect-ratio/utils.ts ***!
  \******************************************/
/*! exports provided: getRatio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRatio", function() { return getRatio; });
/**
 * Get ratio
 */
var getRatio = function (x, y) { return (y / x) * 100; };


/***/ }),

/***/ "./src/blocks/google-map/utils.tsx":
/*!*****************************************!*\
  !*** ./src/blocks/google-map/utils.tsx ***!
  \*****************************************/
/*! exports provided: getCenter, MapIcon, Marker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCenter", function() { return getCenter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapIcon", function() { return MapIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Marker", function() { return Marker; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External Dependencies
 */

/**
 * Get center
 */
var getCenter = function (_a) {
    var lat = _a.lat, lng = _a.lng;
    return ({
        lat: lat,
        lng: lng
    });
};
/**
 * Map icon
 */
var MapIcon = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 576 512" },
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { fill: "#000", d: "M288 0c-69.59 0-126 56.41-126 126 0 56.26 82.35 158.8 113.9 196.02 6.39 7.54 17.82 7.54 24.2 0C331.65 284.8 414 182.26 414 126 414 56.41 357.59 0 288 0zm0 168c-23.2 0-42-18.8-42-42s18.8-42 42-42 42 18.8 42 42-18.8 42-42 42zM20.12 215.95A32.006 32.006 0 0 0 0 245.66v250.32c0 11.32 11.43 19.06 21.94 14.86L160 448V214.92c-8.84-15.98-16.07-31.54-21.25-46.42L20.12 215.95zM288 359.67c-14.07 0-27.38-6.18-36.51-16.96-19.66-23.2-40.57-49.62-59.49-76.72v182l192 64V266c-18.92 27.09-39.82 53.52-59.49 76.72-9.13 10.77-22.44 16.95-36.51 16.95zm266.06-198.51L416 224v288l139.88-55.95A31.996 31.996 0 0 0 576 426.34V176.02c0-11.32-11.43-19.06-21.94-14.86z" })));
/**
 * Map marker
 */
var Marker = function (_a) {
    var lat = _a.lat, lng = _a.lng, description = _a.description;
    return lat &&
        lng && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "loganstellway-google-map--marker" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { fill: "#EA4335", d: "M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" })),
        description && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "description" }, description)));
};


/***/ }),

/***/ "./src/client.js":
/*!***********************!*\
  !*** ./src/client.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! google-map-react */ "./node_modules/google-map-react/lib/index.js");
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(google_map_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blocks_aspect_ratio_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/aspect-ratio/utils */ "./src/blocks/aspect-ratio/utils.ts");
/* harmony import */ var _blocks_google_map_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/google-map/utils */ "./src/blocks/google-map/utils.tsx");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */




(function () {
  // Google Map
  [].forEach.call(document.querySelectorAll("script.wp-block-loganstellway-google-map"), function (map) {
    var attributes = JSON.parse(map.innerHTML);
    var apiKey = attributes.apiKey,
        x = attributes.x,
        y = attributes.y,
        lat = attributes.lat,
        lng = attributes.lng,
        zoom = attributes.zoom,
        markers = attributes.markers,
        minHeight = attributes.minHeight,
        mapOptions = attributes.mapOptions;

    if (apiKey && x && y && lat && lng && zoom && markers && typeof markers.length != "undefined") {
      var content = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        style: {
          paddingTop: "".concat(Object(_blocks_aspect_ratio_utils__WEBPACK_IMPORTED_MODULE_2__["getRatio"])(x, y), "%"),
          minHeight: minHeight
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        className: "loganstellway-aspect-ratio-content"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(google_map_react__WEBPACK_IMPORTED_MODULE_1___default.a, {
        center: Object(_blocks_google_map_utils__WEBPACK_IMPORTED_MODULE_3__["getCenter"])(attributes),
        zoom: zoom,
        options: mapOptions,
        bootstrapURLKeys: {
          key: apiKey
        }
      }, markers.map(function (marker, index) {
        var lat = marker.lat,
            lng = marker.lng,
            description = marker.description;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_blocks_google_map_utils__WEBPACK_IMPORTED_MODULE_3__["Marker"], {
          key: index,
          lat: lat,
          lng: lng,
          description: description
        });
      }))));
      var el = document.createElement("div");
      el.className = "".concat(map.className, " loganstellway-aspect-ratio-container");
      map.parentNode.replaceChild(el, map);
      ReactDOM.render(content, el);
    }
  });
})();

/***/ }),

/***/ 6:
/*!*****************************!*\
  !*** multi ./src/client.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/client.js */"./src/client.js");


/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "react":
/*!*********************************!*\
  !*** external {"this":"React"} ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ }),

/***/ "react-dom":
/*!************************************!*\
  !*** external {"this":"ReactDOM"} ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["ReactDOM"]; }());

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXBib3gvcG9pbnQtZ2VvbWV0cnkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2V2ZW50ZW1pdHRlcjMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dvb2dsZS1tYXAtcmVhY3QvbGliL2dvb2dsZV9oZWF0bWFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nb29nbGUtbWFwLXJlYWN0L2xpYi9nb29nbGVfbWFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nb29nbGUtbWFwLXJlYWN0L2xpYi9nb29nbGVfbWFwX21hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ29vZ2xlLW1hcC1yZWFjdC9saWIvZ29vZ2xlX21hcF9tYXJrZXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nb29nbGUtbWFwLXJlYWN0L2xpYi9nb29nbGVfbWFwX21hcmtlcnNfcHJlcmVuZGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nb29nbGUtbWFwLXJlYWN0L2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ29vZ2xlLW1hcC1yZWFjdC9saWIvbG9hZGVycy9nb29nbGVfbWFwX2xvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ29vZ2xlLW1hcC1yZWFjdC9saWIvbWFya2VyX2Rpc3BhdGNoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dvb2dsZS1tYXAtcmVhY3QvbGliL3V0aWxzL2RldGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ29vZ2xlLW1hcC1yZWFjdC9saWIvdXRpbHMvZGV0ZWN0RWxlbWVudFJlc2l6ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ29vZ2xlLW1hcC1yZWFjdC9saWIvdXRpbHMvZ2VvLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nb29nbGUtbWFwLXJlYWN0L2xpYi91dGlscy9pc0FycmF5c0VxdWFsRXBzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nb29nbGUtbWFwLXJlYWN0L2xpYi91dGlscy9pc0VtcHR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nb29nbGUtbWFwLXJlYWN0L2xpYi91dGlscy9pc051bWJlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ29vZ2xlLW1hcC1yZWFjdC9saWIvdXRpbHMvaXNQbGFpbk9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ29vZ2xlLW1hcC1yZWFjdC9saWIvdXRpbHMvbGliX2dlby9sYXRfbG5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nb29nbGUtbWFwLXJlYWN0L2xpYi91dGlscy9saWJfZ2VvL3RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ29vZ2xlLW1hcC1yZWFjdC9saWIvdXRpbHMvbGliX2dlby93cmFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nb29nbGUtbWFwLXJlYWN0L2xpYi91dGlscy9tYXRoL2xvZzIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dvb2dsZS1tYXAtcmVhY3QvbGliL3V0aWxzL29taXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dvb2dsZS1tYXAtcmVhY3QvbGliL3V0aWxzL3Bhc3NpdmVFdmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dvb2dsZS1tYXAtcmVhY3QvbGliL3V0aWxzL3BpY2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dvb2dsZS1tYXAtcmVhY3QvbGliL3V0aWxzL3JhZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ29vZ2xlLW1hcC1yZWFjdC9saWIvdXRpbHMvc2hhbGxvd0VxdWFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vYmplY3QtYXNzaWduL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2NoZWNrUHJvcFR5cGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtaXMvY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2NyaXB0anMvZGlzdC9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9hc3BlY3QtcmF0aW8vdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9nb29nbGUtbWFwL3V0aWxzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50LmpzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJ0aGlzXCI6W1wid3BcIixcImVsZW1lbnRcIl19Iiwid2VicGFjazovLy9leHRlcm5hbCB7XCJ0aGlzXCI6XCJSZWFjdFwifSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1widGhpc1wiOlwiUmVhY3RET01cIn0iXSwibmFtZXMiOlsiZm9yRWFjaCIsImNhbGwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtYXAiLCJhdHRyaWJ1dGVzIiwiSlNPTiIsInBhcnNlIiwiaW5uZXJIVE1MIiwiYXBpS2V5IiwieCIsInkiLCJsYXQiLCJsbmciLCJ6b29tIiwibWFya2VycyIsIm1pbkhlaWdodCIsIm1hcE9wdGlvbnMiLCJsZW5ndGgiLCJjb250ZW50IiwicGFkZGluZ1RvcCIsImdldFJhdGlvIiwiZ2V0Q2VudGVyIiwia2V5IiwibWFya2VyIiwiaW5kZXgiLCJkZXNjcmlwdGlvbiIsImVsIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInBhcmVudE5vZGUiLCJyZXBsYWNlQ2hpbGQiLCJSZWFjdERPTSIsInJlbmRlciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLE1BQU07QUFDdEI7QUFDQSx1QkFBdUIsa0NBQWtDLEVBQUU7O0FBRTNEO0FBQ0E7QUFDQTtBQUNB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QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFVBQVUsS0FBcUM7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsc0JBQXNCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVSxJQUFxQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQiwyQkFBMkI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNLEtBQXFDLDRGQUE0RixTQUFNO0FBQzdJO0FBQ0E7O0FBRUEsbUJBQW1CLGdDQUFnQztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsZ0NBQWdDO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7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RFA7QUFFRSxhQUFHLEVBQUViLEdBRlA7QUFHRSxhQUFHLEVBQUVDLEdBSFA7QUFJRSxxQkFBVyxFQUFFYTtBQUpmLFVBREY7QUFRRCxPQVhBLENBTkgsQ0FERixDQVBGLENBREY7QUFnQ0EsVUFBTUMsRUFBRSxHQUFHekIsUUFBUSxDQUFDMEIsYUFBVCxDQUF1QixLQUF2QixDQUFYO0FBQ0FELFFBQUUsQ0FBQ0UsU0FBSCxhQUFrQnpCLEdBQUcsQ0FBQ3lCLFNBQXRCO0FBQ0F6QixTQUFHLENBQUMwQixVQUFKLENBQWVDLFlBQWYsQ0FBNEJKLEVBQTVCLEVBQWdDdkIsR0FBaEM7QUFDQTRCLGNBQVEsQ0FBQ0MsTUFBVCxDQUFnQmQsT0FBaEIsRUFBeUJRLEVBQXpCO0FBQ0Q7QUFDRixHQS9ESDtBQWlFRCxDQW5FRCxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQSxhQUFhLHdDQUF3QyxFQUFFLEk7Ozs7Ozs7Ozs7O0FDQXZELGFBQWEsZ0NBQWdDLEVBQUUsSTs7Ozs7Ozs7Ozs7QUNBL0MsYUFBYSxtQ0FBbUMsRUFBRSxJIiwiZmlsZSI6ImNsaWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2KTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBQb2ludDtcblxuLyoqXG4gKiBBIHN0YW5kYWxvbmUgcG9pbnQgZ2VvbWV0cnkgd2l0aCB1c2VmdWwgYWNjZXNzb3IsIGNvbXBhcmlzb24sIGFuZFxuICogbW9kaWZpY2F0aW9uIG1ldGhvZHMuXG4gKlxuICogQGNsYXNzIFBvaW50XG4gKiBAcGFyYW0ge051bWJlcn0geCB0aGUgeC1jb29yZGluYXRlLiB0aGlzIGNvdWxkIGJlIGxvbmdpdHVkZSBvciBzY3JlZW5cbiAqIHBpeGVscywgb3IgYW55IG90aGVyIHNvcnQgb2YgdW5pdC5cbiAqIEBwYXJhbSB7TnVtYmVyfSB5IHRoZSB5LWNvb3JkaW5hdGUuIHRoaXMgY291bGQgYmUgbGF0aXR1ZGUgb3Igc2NyZWVuXG4gKiBwaXhlbHMsIG9yIGFueSBvdGhlciBzb3J0IG9mIHVuaXQuXG4gKiBAZXhhbXBsZVxuICogdmFyIHBvaW50ID0gbmV3IFBvaW50KC03NywgMzgpO1xuICovXG5mdW5jdGlvbiBQb2ludCh4LCB5KSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xufVxuXG5Qb2ludC5wcm90b3R5cGUgPSB7XG5cbiAgICAvKipcbiAgICAgKiBDbG9uZSB0aGlzIHBvaW50LCByZXR1cm5pbmcgYSBuZXcgcG9pbnQgdGhhdCBjYW4gYmUgbW9kaWZpZWRcbiAgICAgKiB3aXRob3V0IGFmZmVjdGluZyB0aGUgb2xkIG9uZS5cbiAgICAgKiBAcmV0dXJuIHtQb2ludH0gdGhlIGNsb25lXG4gICAgICovXG4gICAgY2xvbmU6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbmV3IFBvaW50KHRoaXMueCwgdGhpcy55KTsgfSxcblxuICAgIC8qKlxuICAgICAqIEFkZCB0aGlzIHBvaW50J3MgeCAmIHkgY29vcmRpbmF0ZXMgdG8gYW5vdGhlciBwb2ludCxcbiAgICAgKiB5aWVsZGluZyBhIG5ldyBwb2ludC5cbiAgICAgKiBAcGFyYW0ge1BvaW50fSBwIHRoZSBvdGhlciBwb2ludFxuICAgICAqIEByZXR1cm4ge1BvaW50fSBvdXRwdXQgcG9pbnRcbiAgICAgKi9cbiAgICBhZGQ6ICAgICBmdW5jdGlvbihwKSB7IHJldHVybiB0aGlzLmNsb25lKCkuX2FkZChwKTsgfSxcblxuICAgIC8qKlxuICAgICAqIFN1YnRyYWN0IHRoaXMgcG9pbnQncyB4ICYgeSBjb29yZGluYXRlcyB0byBmcm9tIHBvaW50LFxuICAgICAqIHlpZWxkaW5nIGEgbmV3IHBvaW50LlxuICAgICAqIEBwYXJhbSB7UG9pbnR9IHAgdGhlIG90aGVyIHBvaW50XG4gICAgICogQHJldHVybiB7UG9pbnR9IG91dHB1dCBwb2ludFxuICAgICAqL1xuICAgIHN1YjogICAgIGZ1bmN0aW9uKHApIHsgcmV0dXJuIHRoaXMuY2xvbmUoKS5fc3ViKHApOyB9LFxuXG4gICAgLyoqXG4gICAgICogTXVsdGlwbHkgdGhpcyBwb2ludCdzIHggJiB5IGNvb3JkaW5hdGVzIGJ5IHBvaW50LFxuICAgICAqIHlpZWxkaW5nIGEgbmV3IHBvaW50LlxuICAgICAqIEBwYXJhbSB7UG9pbnR9IHAgdGhlIG90aGVyIHBvaW50XG4gICAgICogQHJldHVybiB7UG9pbnR9IG91dHB1dCBwb2ludFxuICAgICAqL1xuICAgIG11bHRCeVBvaW50OiAgICBmdW5jdGlvbihwKSB7IHJldHVybiB0aGlzLmNsb25lKCkuX211bHRCeVBvaW50KHApOyB9LFxuXG4gICAgLyoqXG4gICAgICogRGl2aWRlIHRoaXMgcG9pbnQncyB4ICYgeSBjb29yZGluYXRlcyBieSBwb2ludCxcbiAgICAgKiB5aWVsZGluZyBhIG5ldyBwb2ludC5cbiAgICAgKiBAcGFyYW0ge1BvaW50fSBwIHRoZSBvdGhlciBwb2ludFxuICAgICAqIEByZXR1cm4ge1BvaW50fSBvdXRwdXQgcG9pbnRcbiAgICAgKi9cbiAgICBkaXZCeVBvaW50OiAgICAgZnVuY3Rpb24ocCkgeyByZXR1cm4gdGhpcy5jbG9uZSgpLl9kaXZCeVBvaW50KHApOyB9LFxuXG4gICAgLyoqXG4gICAgICogTXVsdGlwbHkgdGhpcyBwb2ludCdzIHggJiB5IGNvb3JkaW5hdGVzIGJ5IGEgZmFjdG9yLFxuICAgICAqIHlpZWxkaW5nIGEgbmV3IHBvaW50LlxuICAgICAqIEBwYXJhbSB7UG9pbnR9IGsgZmFjdG9yXG4gICAgICogQHJldHVybiB7UG9pbnR9IG91dHB1dCBwb2ludFxuICAgICAqL1xuICAgIG11bHQ6ICAgIGZ1bmN0aW9uKGspIHsgcmV0dXJuIHRoaXMuY2xvbmUoKS5fbXVsdChrKTsgfSxcblxuICAgIC8qKlxuICAgICAqIERpdmlkZSB0aGlzIHBvaW50J3MgeCAmIHkgY29vcmRpbmF0ZXMgYnkgYSBmYWN0b3IsXG4gICAgICogeWllbGRpbmcgYSBuZXcgcG9pbnQuXG4gICAgICogQHBhcmFtIHtQb2ludH0gayBmYWN0b3JcbiAgICAgKiBAcmV0dXJuIHtQb2ludH0gb3V0cHV0IHBvaW50XG4gICAgICovXG4gICAgZGl2OiAgICAgZnVuY3Rpb24oaykgeyByZXR1cm4gdGhpcy5jbG9uZSgpLl9kaXYoayk7IH0sXG5cbiAgICAvKipcbiAgICAgKiBSb3RhdGUgdGhpcyBwb2ludCBhcm91bmQgdGhlIDAsIDAgb3JpZ2luIGJ5IGFuIGFuZ2xlIGEsXG4gICAgICogZ2l2ZW4gaW4gcmFkaWFuc1xuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBhIGFuZ2xlIHRvIHJvdGF0ZSBhcm91bmQsIGluIHJhZGlhbnNcbiAgICAgKiBAcmV0dXJuIHtQb2ludH0gb3V0cHV0IHBvaW50XG4gICAgICovXG4gICAgcm90YXRlOiAgZnVuY3Rpb24oYSkgeyByZXR1cm4gdGhpcy5jbG9uZSgpLl9yb3RhdGUoYSk7IH0sXG5cbiAgICAvKipcbiAgICAgKiBSb3RhdGUgdGhpcyBwb2ludCBhcm91bmQgcCBwb2ludCBieSBhbiBhbmdsZSBhLFxuICAgICAqIGdpdmVuIGluIHJhZGlhbnNcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gYSBhbmdsZSB0byByb3RhdGUgYXJvdW5kLCBpbiByYWRpYW5zXG4gICAgICogQHBhcmFtIHtQb2ludH0gcCBQb2ludCB0byByb3RhdGUgYXJvdW5kXG4gICAgICogQHJldHVybiB7UG9pbnR9IG91dHB1dCBwb2ludFxuICAgICAqL1xuICAgIHJvdGF0ZUFyb3VuZDogIGZ1bmN0aW9uKGEscCkgeyByZXR1cm4gdGhpcy5jbG9uZSgpLl9yb3RhdGVBcm91bmQoYSxwKTsgfSxcblxuICAgIC8qKlxuICAgICAqIE11bHRpcGx5IHRoaXMgcG9pbnQgYnkgYSA0eDEgdHJhbnNmb3JtYXRpb24gbWF0cml4XG4gICAgICogQHBhcmFtIHtBcnJheTxOdW1iZXI+fSBtIHRyYW5zZm9ybWF0aW9uIG1hdHJpeFxuICAgICAqIEByZXR1cm4ge1BvaW50fSBvdXRwdXQgcG9pbnRcbiAgICAgKi9cbiAgICBtYXRNdWx0OiBmdW5jdGlvbihtKSB7IHJldHVybiB0aGlzLmNsb25lKCkuX21hdE11bHQobSk7IH0sXG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGUgdGhpcyBwb2ludCBidXQgYXMgYSB1bml0IHZlY3RvciBmcm9tIDAsIDAsIG1lYW5pbmdcbiAgICAgKiB0aGF0IHRoZSBkaXN0YW5jZSBmcm9tIHRoZSByZXN1bHRpbmcgcG9pbnQgdG8gdGhlIDAsIDBcbiAgICAgKiBjb29yZGluYXRlIHdpbGwgYmUgZXF1YWwgdG8gMSBhbmQgdGhlIGFuZ2xlIGZyb20gdGhlIHJlc3VsdGluZ1xuICAgICAqIHBvaW50IHRvIHRoZSAwLCAwIGNvb3JkaW5hdGUgd2lsbCBiZSB0aGUgc2FtZSBhcyBiZWZvcmUuXG4gICAgICogQHJldHVybiB7UG9pbnR9IHVuaXQgdmVjdG9yIHBvaW50XG4gICAgICovXG4gICAgdW5pdDogICAgZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLmNsb25lKCkuX3VuaXQoKTsgfSxcblxuICAgIC8qKlxuICAgICAqIENvbXB1dGUgYSBwZXJwZW5kaWN1bGFyIHBvaW50LCB3aGVyZSB0aGUgbmV3IHkgY29vcmRpbmF0ZVxuICAgICAqIGlzIHRoZSBvbGQgeCBjb29yZGluYXRlIGFuZCB0aGUgbmV3IHggY29vcmRpbmF0ZSBpcyB0aGUgb2xkIHlcbiAgICAgKiBjb29yZGluYXRlIG11bHRpcGxpZWQgYnkgLTFcbiAgICAgKiBAcmV0dXJuIHtQb2ludH0gcGVycGVuZGljdWxhciBwb2ludFxuICAgICAqL1xuICAgIHBlcnA6ICAgIGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5jbG9uZSgpLl9wZXJwKCk7IH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gYSB2ZXJzaW9uIG9mIHRoaXMgcG9pbnQgd2l0aCB0aGUgeCAmIHkgY29vcmRpbmF0ZXNcbiAgICAgKiByb3VuZGVkIHRvIGludGVnZXJzLlxuICAgICAqIEByZXR1cm4ge1BvaW50fSByb3VuZGVkIHBvaW50XG4gICAgICovXG4gICAgcm91bmQ6ICAgZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLmNsb25lKCkuX3JvdW5kKCk7IH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdGhlIG1hZ2l0dWRlIG9mIHRoaXMgcG9pbnQ6IHRoaXMgaXMgdGhlIEV1Y2xpZGVhblxuICAgICAqIGRpc3RhbmNlIGZyb20gdGhlIDAsIDAgY29vcmRpbmF0ZSB0byB0aGlzIHBvaW50J3MgeCBhbmQgeVxuICAgICAqIGNvb3JkaW5hdGVzLlxuICAgICAqIEByZXR1cm4ge051bWJlcn0gbWFnbml0dWRlXG4gICAgICovXG4gICAgbWFnOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnkpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBKdWRnZSB3aGV0aGVyIHRoaXMgcG9pbnQgaXMgZXF1YWwgdG8gYW5vdGhlciBwb2ludCwgcmV0dXJuaW5nXG4gICAgICogdHJ1ZSBvciBmYWxzZS5cbiAgICAgKiBAcGFyYW0ge1BvaW50fSBvdGhlciB0aGUgb3RoZXIgcG9pbnRcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSB3aGV0aGVyIHRoZSBwb2ludHMgYXJlIGVxdWFsXG4gICAgICovXG4gICAgZXF1YWxzOiBmdW5jdGlvbihvdGhlcikge1xuICAgICAgICByZXR1cm4gdGhpcy54ID09PSBvdGhlci54ICYmXG4gICAgICAgICAgICAgICB0aGlzLnkgPT09IG90aGVyLnk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZSB0aGUgZGlzdGFuY2UgZnJvbSB0aGlzIHBvaW50IHRvIGFub3RoZXIgcG9pbnRcbiAgICAgKiBAcGFyYW0ge1BvaW50fSBwIHRoZSBvdGhlciBwb2ludFxuICAgICAqIEByZXR1cm4ge051bWJlcn0gZGlzdGFuY2VcbiAgICAgKi9cbiAgICBkaXN0OiBmdW5jdGlvbihwKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy5kaXN0U3FyKHApKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlIHRoZSBkaXN0YW5jZSBmcm9tIHRoaXMgcG9pbnQgdG8gYW5vdGhlciBwb2ludCxcbiAgICAgKiB3aXRob3V0IHRoZSBzcXVhcmUgcm9vdCBzdGVwLiBVc2VmdWwgaWYgeW91J3JlIGNvbXBhcmluZ1xuICAgICAqIHJlbGF0aXZlIGRpc3RhbmNlcy5cbiAgICAgKiBAcGFyYW0ge1BvaW50fSBwIHRoZSBvdGhlciBwb2ludFxuICAgICAqIEByZXR1cm4ge051bWJlcn0gZGlzdGFuY2VcbiAgICAgKi9cbiAgICBkaXN0U3FyOiBmdW5jdGlvbihwKSB7XG4gICAgICAgIHZhciBkeCA9IHAueCAtIHRoaXMueCxcbiAgICAgICAgICAgIGR5ID0gcC55IC0gdGhpcy55O1xuICAgICAgICByZXR1cm4gZHggKiBkeCArIGR5ICogZHk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgYW5nbGUgZnJvbSB0aGUgMCwgMCBjb29yZGluYXRlIHRvIHRoaXMgcG9pbnQsIGluIHJhZGlhbnNcbiAgICAgKiBjb29yZGluYXRlcy5cbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IGFuZ2xlXG4gICAgICovXG4gICAgYW5nbGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5hdGFuMih0aGlzLnksIHRoaXMueCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgYW5nbGUgZnJvbSB0aGlzIHBvaW50IHRvIGFub3RoZXIgcG9pbnQsIGluIHJhZGlhbnNcbiAgICAgKiBAcGFyYW0ge1BvaW50fSBiIHRoZSBvdGhlciBwb2ludFxuICAgICAqIEByZXR1cm4ge051bWJlcn0gYW5nbGVcbiAgICAgKi9cbiAgICBhbmdsZVRvOiBmdW5jdGlvbihiKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmF0YW4yKHRoaXMueSAtIGIueSwgdGhpcy54IC0gYi54KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBhbmdsZSBiZXR3ZWVuIHRoaXMgcG9pbnQgYW5kIGFub3RoZXIgcG9pbnQsIGluIHJhZGlhbnNcbiAgICAgKiBAcGFyYW0ge1BvaW50fSBiIHRoZSBvdGhlciBwb2ludFxuICAgICAqIEByZXR1cm4ge051bWJlcn0gYW5nbGVcbiAgICAgKi9cbiAgICBhbmdsZVdpdGg6IGZ1bmN0aW9uKGIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYW5nbGVXaXRoU2VwKGIueCwgYi55KTtcbiAgICB9LFxuXG4gICAgLypcbiAgICAgKiBGaW5kIHRoZSBhbmdsZSBvZiB0aGUgdHdvIHZlY3RvcnMsIHNvbHZpbmcgdGhlIGZvcm11bGEgZm9yXG4gICAgICogdGhlIGNyb3NzIHByb2R1Y3QgYSB4IGIgPSB8YXx8YnxzaW4ozrgpIGZvciDOuC5cbiAgICAgKiBAcGFyYW0ge051bWJlcn0geCB0aGUgeC1jb29yZGluYXRlXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHkgdGhlIHktY29vcmRpbmF0ZVxuICAgICAqIEByZXR1cm4ge051bWJlcn0gdGhlIGFuZ2xlIGluIHJhZGlhbnNcbiAgICAgKi9cbiAgICBhbmdsZVdpdGhTZXA6IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYXRhbjIoXG4gICAgICAgICAgICB0aGlzLnggKiB5IC0gdGhpcy55ICogeCxcbiAgICAgICAgICAgIHRoaXMueCAqIHggKyB0aGlzLnkgKiB5KTtcbiAgICB9LFxuXG4gICAgX21hdE11bHQ6IGZ1bmN0aW9uKG0pIHtcbiAgICAgICAgdmFyIHggPSBtWzBdICogdGhpcy54ICsgbVsxXSAqIHRoaXMueSxcbiAgICAgICAgICAgIHkgPSBtWzJdICogdGhpcy54ICsgbVszXSAqIHRoaXMueTtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIF9hZGQ6IGZ1bmN0aW9uKHApIHtcbiAgICAgICAgdGhpcy54ICs9IHAueDtcbiAgICAgICAgdGhpcy55ICs9IHAueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIF9zdWI6IGZ1bmN0aW9uKHApIHtcbiAgICAgICAgdGhpcy54IC09IHAueDtcbiAgICAgICAgdGhpcy55IC09IHAueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIF9tdWx0OiBmdW5jdGlvbihrKSB7XG4gICAgICAgIHRoaXMueCAqPSBrO1xuICAgICAgICB0aGlzLnkgKj0gaztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIF9kaXY6IGZ1bmN0aW9uKGspIHtcbiAgICAgICAgdGhpcy54IC89IGs7XG4gICAgICAgIHRoaXMueSAvPSBrO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgX211bHRCeVBvaW50OiBmdW5jdGlvbihwKSB7XG4gICAgICAgIHRoaXMueCAqPSBwLng7XG4gICAgICAgIHRoaXMueSAqPSBwLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBfZGl2QnlQb2ludDogZnVuY3Rpb24ocCkge1xuICAgICAgICB0aGlzLnggLz0gcC54O1xuICAgICAgICB0aGlzLnkgLz0gcC55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgX3VuaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLl9kaXYodGhpcy5tYWcoKSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBfcGVycDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB5ID0gdGhpcy55O1xuICAgICAgICB0aGlzLnkgPSB0aGlzLng7XG4gICAgICAgIHRoaXMueCA9IC15O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgX3JvdGF0ZTogZnVuY3Rpb24oYW5nbGUpIHtcbiAgICAgICAgdmFyIGNvcyA9IE1hdGguY29zKGFuZ2xlKSxcbiAgICAgICAgICAgIHNpbiA9IE1hdGguc2luKGFuZ2xlKSxcbiAgICAgICAgICAgIHggPSBjb3MgKiB0aGlzLnggLSBzaW4gKiB0aGlzLnksXG4gICAgICAgICAgICB5ID0gc2luICogdGhpcy54ICsgY29zICogdGhpcy55O1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgX3JvdGF0ZUFyb3VuZDogZnVuY3Rpb24oYW5nbGUsIHApIHtcbiAgICAgICAgdmFyIGNvcyA9IE1hdGguY29zKGFuZ2xlKSxcbiAgICAgICAgICAgIHNpbiA9IE1hdGguc2luKGFuZ2xlKSxcbiAgICAgICAgICAgIHggPSBwLnggKyBjb3MgKiAodGhpcy54IC0gcC54KSAtIHNpbiAqICh0aGlzLnkgLSBwLnkpLFxuICAgICAgICAgICAgeSA9IHAueSArIHNpbiAqICh0aGlzLnggLSBwLngpICsgY29zICogKHRoaXMueSAtIHAueSk7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBfcm91bmQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnggPSBNYXRoLnJvdW5kKHRoaXMueCk7XG4gICAgICAgIHRoaXMueSA9IE1hdGgucm91bmQodGhpcy55KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufTtcblxuLyoqXG4gKiBDb25zdHJ1Y3QgYSBwb2ludCBmcm9tIGFuIGFycmF5IGlmIG5lY2Vzc2FyeSwgb3RoZXJ3aXNlIGlmIHRoZSBpbnB1dFxuICogaXMgYWxyZWFkeSBhIFBvaW50LCBvciBhbiB1bmtub3duIHR5cGUsIHJldHVybiBpdCB1bmNoYW5nZWRcbiAqIEBwYXJhbSB7QXJyYXk8TnVtYmVyPnxQb2ludHwqfSBhIGFueSBraW5kIG9mIGlucHV0IHZhbHVlXG4gKiBAcmV0dXJuIHtQb2ludH0gY29uc3RydWN0ZWQgcG9pbnQsIG9yIHBhc3NlZC10aHJvdWdoIHZhbHVlLlxuICogQGV4YW1wbGVcbiAqIC8vIHRoaXNcbiAqIHZhciBwb2ludCA9IFBvaW50LmNvbnZlcnQoWzAsIDFdKTtcbiAqIC8vIGlzIGVxdWl2YWxlbnQgdG9cbiAqIHZhciBwb2ludCA9IG5ldyBQb2ludCgwLCAxKTtcbiAqL1xuUG9pbnQuY29udmVydCA9IGZ1bmN0aW9uIChhKSB7XG4gICAgaWYgKGEgaW5zdGFuY2VvZiBQb2ludCkge1xuICAgICAgICByZXR1cm4gYTtcbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYSkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQb2ludChhWzBdLCBhWzFdKTtcbiAgICB9XG4gICAgcmV0dXJuIGE7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaGFzID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuLy9cbi8vIFdlIHN0b3JlIG91ciBFRSBvYmplY3RzIGluIGEgcGxhaW4gb2JqZWN0IHdob3NlIHByb3BlcnRpZXMgYXJlIGV2ZW50IG5hbWVzLlxuLy8gSWYgYE9iamVjdC5jcmVhdGUobnVsbClgIGlzIG5vdCBzdXBwb3J0ZWQgd2UgcHJlZml4IHRoZSBldmVudCBuYW1lcyB3aXRoIGFcbi8vIGB+YCB0byBtYWtlIHN1cmUgdGhhdCB0aGUgYnVpbHQtaW4gb2JqZWN0IHByb3BlcnRpZXMgYXJlIG5vdCBvdmVycmlkZGVuIG9yXG4vLyB1c2VkIGFzIGFuIGF0dGFjayB2ZWN0b3IuXG4vLyBXZSBhbHNvIGFzc3VtZSB0aGF0IGBPYmplY3QuY3JlYXRlKG51bGwpYCBpcyBhdmFpbGFibGUgd2hlbiB0aGUgZXZlbnQgbmFtZVxuLy8gaXMgYW4gRVM2IFN5bWJvbC5cbi8vXG52YXIgcHJlZml4ID0gdHlwZW9mIE9iamVjdC5jcmVhdGUgIT09ICdmdW5jdGlvbicgPyAnficgOiBmYWxzZTtcblxuLyoqXG4gKiBSZXByZXNlbnRhdGlvbiBvZiBhIHNpbmdsZSBFdmVudEVtaXR0ZXIgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gRXZlbnQgaGFuZGxlciB0byBiZSBjYWxsZWQuXG4gKiBAcGFyYW0ge01peGVkfSBjb250ZXh0IENvbnRleHQgZm9yIGZ1bmN0aW9uIGV4ZWN1dGlvbi5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29uY2U9ZmFsc2VdIE9ubHkgZW1pdCBvbmNlXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gRUUoZm4sIGNvbnRleHQsIG9uY2UpIHtcbiAgdGhpcy5mbiA9IGZuO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICB0aGlzLm9uY2UgPSBvbmNlIHx8IGZhbHNlO1xufVxuXG4vKipcbiAqIE1pbmltYWwgRXZlbnRFbWl0dGVyIGludGVyZmFjZSB0aGF0IGlzIG1vbGRlZCBhZ2FpbnN0IHRoZSBOb2RlLmpzXG4gKiBFdmVudEVtaXR0ZXIgaW50ZXJmYWNlLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQGFwaSBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gRXZlbnRFbWl0dGVyKCkgeyAvKiBOb3RoaW5nIHRvIHNldCAqLyB9XG5cbi8qKlxuICogSG9sZCB0aGUgYXNzaWduZWQgRXZlbnRFbWl0dGVycyBieSBuYW1lLlxuICpcbiAqIEB0eXBlIHtPYmplY3R9XG4gKiBAcHJpdmF0ZVxuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHMgPSB1bmRlZmluZWQ7XG5cbi8qKlxuICogUmV0dXJuIGFuIGFycmF5IGxpc3RpbmcgdGhlIGV2ZW50cyBmb3Igd2hpY2ggdGhlIGVtaXR0ZXIgaGFzIHJlZ2lzdGVyZWRcbiAqIGxpc3RlbmVycy5cbiAqXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmV2ZW50TmFtZXMgPSBmdW5jdGlvbiBldmVudE5hbWVzKCkge1xuICB2YXIgZXZlbnRzID0gdGhpcy5fZXZlbnRzXG4gICAgLCBuYW1lcyA9IFtdXG4gICAgLCBuYW1lO1xuXG4gIGlmICghZXZlbnRzKSByZXR1cm4gbmFtZXM7XG5cbiAgZm9yIChuYW1lIGluIGV2ZW50cykge1xuICAgIGlmIChoYXMuY2FsbChldmVudHMsIG5hbWUpKSBuYW1lcy5wdXNoKHByZWZpeCA/IG5hbWUuc2xpY2UoMSkgOiBuYW1lKTtcbiAgfVxuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgcmV0dXJuIG5hbWVzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGV2ZW50cykpO1xuICB9XG5cbiAgcmV0dXJuIG5hbWVzO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gYSBsaXN0IG9mIGFzc2lnbmVkIGV2ZW50IGxpc3RlbmVycy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnQgVGhlIGV2ZW50cyB0aGF0IHNob3VsZCBiZSBsaXN0ZWQuXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGV4aXN0cyBXZSBvbmx5IG5lZWQgdG8ga25vdyBpZiB0aGVyZSBhcmUgbGlzdGVuZXJzLlxuICogQHJldHVybnMge0FycmF5fEJvb2xlYW59XG4gKiBAYXBpIHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uIGxpc3RlbmVycyhldmVudCwgZXhpc3RzKSB7XG4gIHZhciBldnQgPSBwcmVmaXggPyBwcmVmaXggKyBldmVudCA6IGV2ZW50XG4gICAgLCBhdmFpbGFibGUgPSB0aGlzLl9ldmVudHMgJiYgdGhpcy5fZXZlbnRzW2V2dF07XG5cbiAgaWYgKGV4aXN0cykgcmV0dXJuICEhYXZhaWxhYmxlO1xuICBpZiAoIWF2YWlsYWJsZSkgcmV0dXJuIFtdO1xuICBpZiAoYXZhaWxhYmxlLmZuKSByZXR1cm4gW2F2YWlsYWJsZS5mbl07XG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBhdmFpbGFibGUubGVuZ3RoLCBlZSA9IG5ldyBBcnJheShsKTsgaSA8IGw7IGkrKykge1xuICAgIGVlW2ldID0gYXZhaWxhYmxlW2ldLmZuO1xuICB9XG5cbiAgcmV0dXJuIGVlO1xufTtcblxuLyoqXG4gKiBFbWl0IGFuIGV2ZW50IHRvIGFsbCByZWdpc3RlcmVkIGV2ZW50IGxpc3RlbmVycy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnQgVGhlIG5hbWUgb2YgdGhlIGV2ZW50LlxuICogQHJldHVybnMge0Jvb2xlYW59IEluZGljYXRpb24gaWYgd2UndmUgZW1pdHRlZCBhbiBldmVudC5cbiAqIEBhcGkgcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uIGVtaXQoZXZlbnQsIGExLCBhMiwgYTMsIGE0LCBhNSkge1xuICB2YXIgZXZ0ID0gcHJlZml4ID8gcHJlZml4ICsgZXZlbnQgOiBldmVudDtcblxuICBpZiAoIXRoaXMuX2V2ZW50cyB8fCAhdGhpcy5fZXZlbnRzW2V2dF0pIHJldHVybiBmYWxzZTtcblxuICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzW2V2dF1cbiAgICAsIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAsIGFyZ3NcbiAgICAsIGk7XG5cbiAgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiBsaXN0ZW5lcnMuZm4pIHtcbiAgICBpZiAobGlzdGVuZXJzLm9uY2UpIHRoaXMucmVtb3ZlTGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVycy5mbiwgdW5kZWZpbmVkLCB0cnVlKTtcblxuICAgIHN3aXRjaCAobGVuKSB7XG4gICAgICBjYXNlIDE6IHJldHVybiBsaXN0ZW5lcnMuZm4uY2FsbChsaXN0ZW5lcnMuY29udGV4dCksIHRydWU7XG4gICAgICBjYXNlIDI6IHJldHVybiBsaXN0ZW5lcnMuZm4uY2FsbChsaXN0ZW5lcnMuY29udGV4dCwgYTEpLCB0cnVlO1xuICAgICAgY2FzZSAzOiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQsIGExLCBhMiksIHRydWU7XG4gICAgICBjYXNlIDQ6IHJldHVybiBsaXN0ZW5lcnMuZm4uY2FsbChsaXN0ZW5lcnMuY29udGV4dCwgYTEsIGEyLCBhMyksIHRydWU7XG4gICAgICBjYXNlIDU6IHJldHVybiBsaXN0ZW5lcnMuZm4uY2FsbChsaXN0ZW5lcnMuY29udGV4dCwgYTEsIGEyLCBhMywgYTQpLCB0cnVlO1xuICAgICAgY2FzZSA2OiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQsIGExLCBhMiwgYTMsIGE0LCBhNSksIHRydWU7XG4gICAgfVxuXG4gICAgZm9yIChpID0gMSwgYXJncyA9IG5ldyBBcnJheShsZW4gLTEpOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgIH1cblxuICAgIGxpc3RlbmVycy5mbi5hcHBseShsaXN0ZW5lcnMuY29udGV4dCwgYXJncyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGxlbmd0aCA9IGxpc3RlbmVycy5sZW5ndGhcbiAgICAgICwgajtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGxpc3RlbmVyc1tpXS5vbmNlKSB0aGlzLnJlbW92ZUxpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcnNbaV0uZm4sIHVuZGVmaW5lZCwgdHJ1ZSk7XG5cbiAgICAgIHN3aXRjaCAobGVuKSB7XG4gICAgICAgIGNhc2UgMTogbGlzdGVuZXJzW2ldLmZuLmNhbGwobGlzdGVuZXJzW2ldLmNvbnRleHQpOyBicmVhaztcbiAgICAgICAgY2FzZSAyOiBsaXN0ZW5lcnNbaV0uZm4uY2FsbChsaXN0ZW5lcnNbaV0uY29udGV4dCwgYTEpOyBicmVhaztcbiAgICAgICAgY2FzZSAzOiBsaXN0ZW5lcnNbaV0uZm4uY2FsbChsaXN0ZW5lcnNbaV0uY29udGV4dCwgYTEsIGEyKTsgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgaWYgKCFhcmdzKSBmb3IgKGogPSAxLCBhcmdzID0gbmV3IEFycmF5KGxlbiAtMSk7IGogPCBsZW47IGorKykge1xuICAgICAgICAgICAgYXJnc1tqIC0gMV0gPSBhcmd1bWVudHNbal07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGlzdGVuZXJzW2ldLmZuLmFwcGx5KGxpc3RlbmVyc1tpXS5jb250ZXh0LCBhcmdzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8qKlxuICogUmVnaXN0ZXIgYSBuZXcgRXZlbnRMaXN0ZW5lciBmb3IgdGhlIGdpdmVuIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudCBOYW1lIG9mIHRoZSBldmVudC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIENhbGxiYWNrIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtNaXhlZH0gW2NvbnRleHQ9dGhpc10gVGhlIGNvbnRleHQgb2YgdGhlIGZ1bmN0aW9uLlxuICogQGFwaSBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uIG9uKGV2ZW50LCBmbiwgY29udGV4dCkge1xuICB2YXIgbGlzdGVuZXIgPSBuZXcgRUUoZm4sIGNvbnRleHQgfHwgdGhpcylcbiAgICAsIGV2dCA9IHByZWZpeCA/IHByZWZpeCArIGV2ZW50IDogZXZlbnQ7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMpIHRoaXMuX2V2ZW50cyA9IHByZWZpeCA/IHt9IDogT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgaWYgKCF0aGlzLl9ldmVudHNbZXZ0XSkgdGhpcy5fZXZlbnRzW2V2dF0gPSBsaXN0ZW5lcjtcbiAgZWxzZSB7XG4gICAgaWYgKCF0aGlzLl9ldmVudHNbZXZ0XS5mbikgdGhpcy5fZXZlbnRzW2V2dF0ucHVzaChsaXN0ZW5lcik7XG4gICAgZWxzZSB0aGlzLl9ldmVudHNbZXZ0XSA9IFtcbiAgICAgIHRoaXMuX2V2ZW50c1tldnRdLCBsaXN0ZW5lclxuICAgIF07XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQWRkIGFuIEV2ZW50TGlzdGVuZXIgdGhhdCdzIG9ubHkgY2FsbGVkIG9uY2UuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50IE5hbWUgb2YgdGhlIGV2ZW50LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gQ2FsbGJhY2sgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge01peGVkfSBbY29udGV4dD10aGlzXSBUaGUgY29udGV4dCBvZiB0aGUgZnVuY3Rpb24uXG4gKiBAYXBpIHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbiBvbmNlKGV2ZW50LCBmbiwgY29udGV4dCkge1xuICB2YXIgbGlzdGVuZXIgPSBuZXcgRUUoZm4sIGNvbnRleHQgfHwgdGhpcywgdHJ1ZSlcbiAgICAsIGV2dCA9IHByZWZpeCA/IHByZWZpeCArIGV2ZW50IDogZXZlbnQ7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMpIHRoaXMuX2V2ZW50cyA9IHByZWZpeCA/IHt9IDogT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgaWYgKCF0aGlzLl9ldmVudHNbZXZ0XSkgdGhpcy5fZXZlbnRzW2V2dF0gPSBsaXN0ZW5lcjtcbiAgZWxzZSB7XG4gICAgaWYgKCF0aGlzLl9ldmVudHNbZXZ0XS5mbikgdGhpcy5fZXZlbnRzW2V2dF0ucHVzaChsaXN0ZW5lcik7XG4gICAgZWxzZSB0aGlzLl9ldmVudHNbZXZ0XSA9IFtcbiAgICAgIHRoaXMuX2V2ZW50c1tldnRdLCBsaXN0ZW5lclxuICAgIF07XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmVtb3ZlIGV2ZW50IGxpc3RlbmVycy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnQgVGhlIGV2ZW50IHdlIHdhbnQgdG8gcmVtb3ZlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGxpc3RlbmVyIHRoYXQgd2UgbmVlZCB0byBmaW5kLlxuICogQHBhcmFtIHtNaXhlZH0gY29udGV4dCBPbmx5IHJlbW92ZSBsaXN0ZW5lcnMgbWF0Y2hpbmcgdGhpcyBjb250ZXh0LlxuICogQHBhcmFtIHtCb29sZWFufSBvbmNlIE9ubHkgcmVtb3ZlIG9uY2UgbGlzdGVuZXJzLlxuICogQGFwaSBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKGV2ZW50LCBmbiwgY29udGV4dCwgb25jZSkge1xuICB2YXIgZXZ0ID0gcHJlZml4ID8gcHJlZml4ICsgZXZlbnQgOiBldmVudDtcblxuICBpZiAoIXRoaXMuX2V2ZW50cyB8fCAhdGhpcy5fZXZlbnRzW2V2dF0pIHJldHVybiB0aGlzO1xuXG4gIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHNbZXZ0XVxuICAgICwgZXZlbnRzID0gW107XG5cbiAgaWYgKGZuKSB7XG4gICAgaWYgKGxpc3RlbmVycy5mbikge1xuICAgICAgaWYgKFxuICAgICAgICAgICBsaXN0ZW5lcnMuZm4gIT09IGZuXG4gICAgICAgIHx8IChvbmNlICYmICFsaXN0ZW5lcnMub25jZSlcbiAgICAgICAgfHwgKGNvbnRleHQgJiYgbGlzdGVuZXJzLmNvbnRleHQgIT09IGNvbnRleHQpXG4gICAgICApIHtcbiAgICAgICAgZXZlbnRzLnB1c2gobGlzdGVuZXJzKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IGxpc3RlbmVycy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICAgbGlzdGVuZXJzW2ldLmZuICE9PSBmblxuICAgICAgICAgIHx8IChvbmNlICYmICFsaXN0ZW5lcnNbaV0ub25jZSlcbiAgICAgICAgICB8fCAoY29udGV4dCAmJiBsaXN0ZW5lcnNbaV0uY29udGV4dCAhPT0gY29udGV4dClcbiAgICAgICAgKSB7XG4gICAgICAgICAgZXZlbnRzLnB1c2gobGlzdGVuZXJzW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vXG4gIC8vIFJlc2V0IHRoZSBhcnJheSwgb3IgcmVtb3ZlIGl0IGNvbXBsZXRlbHkgaWYgd2UgaGF2ZSBubyBtb3JlIGxpc3RlbmVycy5cbiAgLy9cbiAgaWYgKGV2ZW50cy5sZW5ndGgpIHtcbiAgICB0aGlzLl9ldmVudHNbZXZ0XSA9IGV2ZW50cy5sZW5ndGggPT09IDEgPyBldmVudHNbMF0gOiBldmVudHM7XG4gIH0gZWxzZSB7XG4gICAgZGVsZXRlIHRoaXMuX2V2ZW50c1tldnRdO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhbGwgbGlzdGVuZXJzIG9yIG9ubHkgdGhlIGxpc3RlbmVycyBmb3IgdGhlIHNwZWNpZmllZCBldmVudC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnQgVGhlIGV2ZW50IHdhbnQgdG8gcmVtb3ZlIGFsbCBsaXN0ZW5lcnMgZm9yLlxuICogQGFwaSBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBmdW5jdGlvbiByZW1vdmVBbGxMaXN0ZW5lcnMoZXZlbnQpIHtcbiAgaWYgKCF0aGlzLl9ldmVudHMpIHJldHVybiB0aGlzO1xuXG4gIGlmIChldmVudCkgZGVsZXRlIHRoaXMuX2V2ZW50c1twcmVmaXggPyBwcmVmaXggKyBldmVudCA6IGV2ZW50XTtcbiAgZWxzZSB0aGlzLl9ldmVudHMgPSBwcmVmaXggPyB7fSA6IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vL1xuLy8gQWxpYXMgbWV0aG9kcyBuYW1lcyBiZWNhdXNlIHBlb3BsZSByb2xsIGxpa2UgdGhhdC5cbi8vXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9mZiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXI7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbjtcblxuLy9cbi8vIFRoaXMgZnVuY3Rpb24gZG9lc24ndCBhcHBseSBhbnltb3JlLlxuLy9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuc2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24gc2V0TWF4TGlzdGVuZXJzKCkge1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8vXG4vLyBFeHBvc2UgdGhlIHByZWZpeC5cbi8vXG5FdmVudEVtaXR0ZXIucHJlZml4ZWQgPSBwcmVmaXg7XG5cbi8vXG4vLyBFeHBvc2UgdGhlIG1vZHVsZS5cbi8vXG5pZiAoJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiBtb2R1bGUpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBFdmVudEVtaXR0ZXI7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBnZW5lcmF0ZUhlYXRtYXAgPSBleHBvcnRzLmdlbmVyYXRlSGVhdG1hcCA9IGZ1bmN0aW9uIGdlbmVyYXRlSGVhdG1hcChpbnN0YW5jZSwgX3JlZikge1xuICB2YXIgcG9zaXRpb25zID0gX3JlZi5wb3NpdGlvbnM7XG4gIHJldHVybiBuZXcgaW5zdGFuY2UudmlzdWFsaXphdGlvbi5IZWF0bWFwTGF5ZXIoe1xuICAgIGRhdGE6IHBvc2l0aW9ucy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgX3JlZjIpIHtcbiAgICAgIHZhciBsYXQgPSBfcmVmMi5sYXQsXG4gICAgICAgICAgbG5nID0gX3JlZjIubG5nLFxuICAgICAgICAgIF9yZWYyJHdlaWdodCA9IF9yZWYyLndlaWdodCxcbiAgICAgICAgICB3ZWlnaHQgPSBfcmVmMiR3ZWlnaHQgPT09IHVuZGVmaW5lZCA/IDEgOiBfcmVmMiR3ZWlnaHQ7XG5cbiAgICAgIGFjYy5wdXNoKHtcbiAgICAgICAgbG9jYXRpb246IG5ldyBpbnN0YW5jZS5MYXRMbmcobGF0LCBsbmcpLFxuICAgICAgICB3ZWlnaHQ6IHdlaWdodFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIFtdKVxuICB9KTtcbn07XG5cbnZhciBvcHRpb25zSGVhdG1hcCA9IGV4cG9ydHMub3B0aW9uc0hlYXRtYXAgPSBmdW5jdGlvbiBvcHRpb25zSGVhdG1hcChpbnN0YW5jZSwgX3JlZjMpIHtcbiAgdmFyIF9yZWYzJG9wdGlvbnMgPSBfcmVmMy5vcHRpb25zLFxuICAgICAgb3B0aW9ucyA9IF9yZWYzJG9wdGlvbnMgPT09IHVuZGVmaW5lZCA/IHt9IDogX3JlZjMkb3B0aW9ucztcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG9wdGlvbnMpLm1hcChmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlLnNldChvcHRpb24sIG9wdGlvbnNbb3B0aW9uXSk7XG4gIH0pO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9yZWFjdERvbSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG52YXIgX3JlYWN0RG9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0RG9tKTtcblxudmFyIF9nb29nbGVfbWFwX21hcCA9IHJlcXVpcmUoJy4vZ29vZ2xlX21hcF9tYXAnKTtcblxudmFyIF9nb29nbGVfbWFwX21hcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nb29nbGVfbWFwX21hcCk7XG5cbnZhciBfbWFya2VyX2Rpc3BhdGNoZXIgPSByZXF1aXJlKCcuL21hcmtlcl9kaXNwYXRjaGVyJyk7XG5cbnZhciBfbWFya2VyX2Rpc3BhdGNoZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWFya2VyX2Rpc3BhdGNoZXIpO1xuXG52YXIgX2dvb2dsZV9tYXBfbWFya2VycyA9IHJlcXVpcmUoJy4vZ29vZ2xlX21hcF9tYXJrZXJzJyk7XG5cbnZhciBfZ29vZ2xlX21hcF9tYXJrZXJzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dvb2dsZV9tYXBfbWFya2Vycyk7XG5cbnZhciBfZ29vZ2xlX21hcF9tYXJrZXJzX3ByZXJlbmRlciA9IHJlcXVpcmUoJy4vZ29vZ2xlX21hcF9tYXJrZXJzX3ByZXJlbmRlcicpO1xuXG52YXIgX2dvb2dsZV9tYXBfbWFya2Vyc19wcmVyZW5kZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ29vZ2xlX21hcF9tYXJrZXJzX3ByZXJlbmRlcik7XG5cbnZhciBfZ29vZ2xlX2hlYXRtYXAgPSByZXF1aXJlKCcuL2dvb2dsZV9oZWF0bWFwJyk7XG5cbnZhciBfZ29vZ2xlX21hcF9sb2FkZXIgPSByZXF1aXJlKCcuL2xvYWRlcnMvZ29vZ2xlX21hcF9sb2FkZXInKTtcblxudmFyIF9nb29nbGVfbWFwX2xvYWRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nb29nbGVfbWFwX2xvYWRlcik7XG5cbnZhciBfZ2VvID0gcmVxdWlyZSgnLi91dGlscy9nZW8nKTtcblxudmFyIF9nZW8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2VvKTtcblxudmFyIF9yYWYgPSByZXF1aXJlKCcuL3V0aWxzL3JhZicpO1xuXG52YXIgX3JhZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yYWYpO1xuXG52YXIgX3BpY2sgPSByZXF1aXJlKCcuL3V0aWxzL3BpY2snKTtcblxudmFyIF9waWNrMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BpY2spO1xuXG52YXIgX29taXQgPSByZXF1aXJlKCcuL3V0aWxzL29taXQnKTtcblxudmFyIF9vbWl0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29taXQpO1xuXG52YXIgX2xvZyA9IHJlcXVpcmUoJy4vdXRpbHMvbWF0aC9sb2cyJyk7XG5cbnZhciBfbG9nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvZyk7XG5cbnZhciBfaXNFbXB0eSA9IHJlcXVpcmUoJy4vdXRpbHMvaXNFbXB0eScpO1xuXG52YXIgX2lzRW1wdHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNFbXB0eSk7XG5cbnZhciBfaXNOdW1iZXIgPSByZXF1aXJlKCcuL3V0aWxzL2lzTnVtYmVyJyk7XG5cbnZhciBfaXNOdW1iZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNOdW1iZXIpO1xuXG52YXIgX2RldGVjdCA9IHJlcXVpcmUoJy4vdXRpbHMvZGV0ZWN0Jyk7XG5cbnZhciBfZGV0ZWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RldGVjdCk7XG5cbnZhciBfc2hhbGxvd0VxdWFsID0gcmVxdWlyZSgnLi91dGlscy9zaGFsbG93RXF1YWwnKTtcblxudmFyIF9zaGFsbG93RXF1YWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2hhbGxvd0VxdWFsKTtcblxudmFyIF9pc1BsYWluT2JqZWN0ID0gcmVxdWlyZSgnLi91dGlscy9pc1BsYWluT2JqZWN0Jyk7XG5cbnZhciBfaXNQbGFpbk9iamVjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc1BsYWluT2JqZWN0KTtcblxudmFyIF9pc0FycmF5c0VxdWFsRXBzID0gcmVxdWlyZSgnLi91dGlscy9pc0FycmF5c0VxdWFsRXBzJyk7XG5cbnZhciBfaXNBcnJheXNFcXVhbEVwczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc0FycmF5c0VxdWFsRXBzKTtcblxudmFyIF9kZXRlY3RFbGVtZW50UmVzaXplID0gcmVxdWlyZSgnLi91dGlscy9kZXRlY3RFbGVtZW50UmVzaXplJyk7XG5cbnZhciBfZGV0ZWN0RWxlbWVudFJlc2l6ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZXRlY3RFbGVtZW50UmVzaXplKTtcblxudmFyIF9wYXNzaXZlRXZlbnRzID0gcmVxdWlyZSgnLi91dGlscy9wYXNzaXZlRXZlbnRzJyk7XG5cbnZhciBfcGFzc2l2ZUV2ZW50czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXNzaXZlRXZlbnRzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfSAvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXMsIHJlYWN0L2ZvcmJpZC1wcm9wLXR5cGVzLCByZWFjdC9uby1maW5kLWRvbS1ub2RlLCBuby1jb25zb2xlICovXG5cblxuLy8gaGVscGVyc1xuXG5cbi8vIGxvYWRlcnNcblxuXG4vLyB1dGlsc1xuXG5cbi8vIGNvbnN0c1xudmFyIGtFUFMgPSAwLjAwMDAxO1xudmFyIEtfR09PR0xFX1RJTEVfU0laRSA9IDI1Njtcbi8vIHJlYWwgbWluWm9vbSBjYWxjdWxhdGVkIGhlcmUgX2dldE1pblpvb21cbnZhciBLX0lETEVfVElNRU9VVCA9IDEwMDtcbnZhciBLX0lETEVfQ0xJQ0tfVElNRU9VVCA9IDMwMDtcbnZhciBERUZBVUxUX01JTl9aT09NID0gMztcbi8vIFN0YXJ0aW5nIHdpdGggdmVyc2lvbiAzLjMyLCB0aGUgbWFwcyBBUEkgY2FsbHMgYGRyYXcoKWAgZWFjaCBmcmFtZSBkdXJpbmdcbi8vIGEgem9vbSBhbmltYXRpb24uXG52YXIgRFJBV19DQUxMRURfRFVSSU5HX0FOSU1BVElPTl9WRVJTSU9OID0gMzI7XG52YXIgSVNfUkVBQ1RfMTYgPSBfcmVhY3REb20yLmRlZmF1bHQuY3JlYXRlUG9ydGFsICE9PSB1bmRlZmluZWQ7XG5cbnZhciBjcmVhdGVQb3J0YWwgPSBJU19SRUFDVF8xNiA/IF9yZWFjdERvbTIuZGVmYXVsdC5jcmVhdGVQb3J0YWwgOiBfcmVhY3REb20yLmRlZmF1bHQudW5zdGFibGVfcmVuZGVyU3VidHJlZUludG9Db250YWluZXI7XG5cbmZ1bmN0aW9uIGRlZmF1bHRPcHRpb25zXygpIC8qIG1hcHMgKi97XG4gIHJldHVybiB7XG4gICAgb3ZlcnZpZXdNYXBDb250cm9sOiBmYWxzZSxcbiAgICBzdHJlZXRWaWV3Q29udHJvbDogZmFsc2UsXG4gICAgcm90YXRlQ29udHJvbDogdHJ1ZSxcbiAgICBtYXBUeXBlQ29udHJvbDogZmFsc2UsXG4gICAgLy8gZGlzYWJsZSBwb2lcbiAgICBzdHlsZXM6IFt7XG4gICAgICBmZWF0dXJlVHlwZTogJ3BvaScsXG4gICAgICBlbGVtZW50VHlwZTogJ2xhYmVscycsXG4gICAgICBzdHlsZXJzOiBbeyB2aXNpYmlsaXR5OiAnb2ZmJyB9XVxuICAgIH1dLFxuICAgIG1pblpvb206IERFRkFVTFRfTUlOX1pPT00gLy8gZHluYW1pY2FsbHkgcmVjYWxjdWx0ZWQgaWYgcG9zc2libGUgZHVyaW5nIGluaXRcbiAgfTtcbn1cblxudmFyIGxhdExuZzJPYmogPSBmdW5jdGlvbiBsYXRMbmcyT2JqKGxhdExuZykge1xuICByZXR1cm4gKDAsIF9pc1BsYWluT2JqZWN0Mi5kZWZhdWx0KShsYXRMbmcpID8gbGF0TG5nIDogeyBsYXQ6IGxhdExuZ1swXSwgbG5nOiBsYXRMbmdbMV0gfTtcbn07XG5cbnZhciBfY2hlY2tNaW5ab29tID0gZnVuY3Rpb24gX2NoZWNrTWluWm9vbSh6b29tLCBtaW5ab29tKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKHpvb20gPCBtaW5ab29tKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0dvb2dsZU1hcDogJyArIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgICdtaW5ab29tIG9wdGlvbiBpcyBsZXNzIHRoYW4gcmVjb21tZW5kZWQgJyArICdtaW5ab29tIG9wdGlvbiBmb3IgeW91ciBtYXAgc2l6ZXMuXFxuJyArICdvdmVycmlkZWQgdG8gdmFsdWUgJyArIG1pblpvb20pO1xuICAgIH1cbiAgfVxuXG4gIGlmIChtaW5ab29tIDwgem9vbSkge1xuICAgIHJldHVybiB6b29tO1xuICB9XG4gIHJldHVybiBtaW5ab29tO1xufTtcblxudmFyIGlzRnVsbFNjcmVlbiA9IGZ1bmN0aW9uIGlzRnVsbFNjcmVlbigpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmZ1bGxzY3JlZW4gfHwgZG9jdW1lbnQud2Via2l0SXNGdWxsU2NyZWVuIHx8IGRvY3VtZW50Lm1vekZ1bGxTY3JlZW4gfHwgZG9jdW1lbnQubXNGdWxsc2NyZWVuRWxlbWVudDtcbn07XG5cbnZhciBHb29nbGVNYXAgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoR29vZ2xlTWFwLCBfQ29tcG9uZW50KTtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbiAgZnVuY3Rpb24gR29vZ2xlTWFwKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEdvb2dsZU1hcCk7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIF90aGlzLl9nZXRNaW5ab29tID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKF90aGlzLmdlb1NlcnZpY2VfLmdldFdpZHRoKCkgPiAwIHx8IF90aGlzLmdlb1NlcnZpY2VfLmdldEhlaWdodCgpID4gMCkge1xuICAgICAgICB2YXIgdGlsZXNQZXJXaWR0aCA9IE1hdGguY2VpbChfdGhpcy5nZW9TZXJ2aWNlXy5nZXRXaWR0aCgpIC8gS19HT09HTEVfVElMRV9TSVpFKSArIDI7XG4gICAgICAgIHZhciB0aWxlc1BlckhlaWdodCA9IE1hdGguY2VpbChfdGhpcy5nZW9TZXJ2aWNlXy5nZXRIZWlnaHQoKSAvIEtfR09PR0xFX1RJTEVfU0laRSkgKyAyO1xuICAgICAgICB2YXIgbWF4VGlsZXNQZXJEaW0gPSBNYXRoLm1heCh0aWxlc1BlcldpZHRoLCB0aWxlc1BlckhlaWdodCk7XG4gICAgICAgIHJldHVybiBNYXRoLmNlaWwoKDAsIF9sb2cyLmRlZmF1bHQpKG1heFRpbGVzUGVyRGltKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gREVGQVVMVF9NSU5fWk9PTTtcbiAgICB9O1xuXG4gICAgX3RoaXMuX2NvbXB1dGVNaW5ab29tID0gZnVuY3Rpb24gKG1pblpvb20pIHtcbiAgICAgIGlmICghKDAsIF9pc0VtcHR5Mi5kZWZhdWx0KShtaW5ab29tKSkge1xuICAgICAgICByZXR1cm4gbWluWm9vbTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBfdGhpcy5fZ2V0TWluWm9vbSgpO1xuICAgIH07XG5cbiAgICBfdGhpcy5fbWFwRG9tUmVzaXplQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5yZXNldFNpemVPbklkbGVfID0gdHJ1ZTtcbiAgICAgIGlmIChfdGhpcy5tYXBzXykge1xuICAgICAgICB2YXIgb3JpZ2luYWxDZW50ZXIgPSBfdGhpcy5wcm9wcy5jZW50ZXIgfHwgX3RoaXMucHJvcHMuZGVmYXVsdENlbnRlcjtcbiAgICAgICAgdmFyIGN1cnJlbnRDZW50ZXIgPSBfdGhpcy5tYXBfLmdldENlbnRlcigpO1xuICAgICAgICBfdGhpcy5tYXBzXy5ldmVudC50cmlnZ2VyKF90aGlzLm1hcF8sICdyZXNpemUnKTtcbiAgICAgICAgX3RoaXMubWFwXy5zZXRDZW50ZXIoX3RoaXMucHJvcHMucmVzZXRCb3VuZHNPblJlc2l6ZSA/IG9yaWdpbmFsQ2VudGVyIDogY3VycmVudENlbnRlcik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLl9zZXRMYXllcnMgPSBmdW5jdGlvbiAobGF5ZXJUeXBlcykge1xuICAgICAgbGF5ZXJUeXBlcy5mb3JFYWNoKGZ1bmN0aW9uIChsYXllclR5cGUpIHtcbiAgICAgICAgX3RoaXMubGF5ZXJzX1tsYXllclR5cGVdID0gbmV3IF90aGlzLm1hcHNfW2xheWVyVHlwZV0oKTtcbiAgICAgICAgX3RoaXMubGF5ZXJzX1tsYXllclR5cGVdLnNldE1hcChfdGhpcy5tYXBfKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfdGhpcy5fcmVuZGVyUG9ydGFsID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9nb29nbGVfbWFwX21hcmtlcnMyLmRlZmF1bHQsIHtcbiAgICAgICAgZXhwZXJpbWVudGFsOiBfdGhpcy5wcm9wcy5leHBlcmltZW50YWwsXG4gICAgICAgIG9uQ2hpbGRDbGljazogX3RoaXMuX29uQ2hpbGRDbGljayxcbiAgICAgICAgb25DaGlsZE1vdXNlRG93bjogX3RoaXMuX29uQ2hpbGRNb3VzZURvd24sXG4gICAgICAgIG9uQ2hpbGRNb3VzZUVudGVyOiBfdGhpcy5fb25DaGlsZE1vdXNlRW50ZXIsXG4gICAgICAgIG9uQ2hpbGRNb3VzZUxlYXZlOiBfdGhpcy5fb25DaGlsZE1vdXNlTGVhdmUsXG4gICAgICAgIGdlb1NlcnZpY2U6IF90aGlzLmdlb1NlcnZpY2VfLFxuICAgICAgICBpbnNpZGVNYXBQYW5lczogdHJ1ZSxcbiAgICAgICAgZGlzdGFuY2VUb01vdXNlOiBfdGhpcy5wcm9wcy5kaXN0YW5jZVRvTW91c2UsXG4gICAgICAgIGdldEhvdmVyRGlzdGFuY2U6IF90aGlzLl9nZXRIb3ZlckRpc3RhbmNlLFxuICAgICAgICBkaXNwYXRjaGVyOiBfdGhpcy5tYXJrZXJzRGlzcGF0Y2hlcl9cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfdGhpcy5faW5pdE1hcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIG9ubHkgaW5pdGlhbGl6ZSB0aGUgbWFwIG9uY2VcbiAgICAgIGlmIChfdGhpcy5pbml0aWFsaXplZF8pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgX3RoaXMuaW5pdGlhbGl6ZWRfID0gdHJ1ZTtcblxuICAgICAgdmFyIHByb3BzQ2VudGVyID0gbGF0TG5nMk9iaihfdGhpcy5wcm9wcy5jZW50ZXIgfHwgX3RoaXMucHJvcHMuZGVmYXVsdENlbnRlcik7XG4gICAgICBfdGhpcy5nZW9TZXJ2aWNlXy5zZXRWaWV3KHByb3BzQ2VudGVyLCBfdGhpcy5wcm9wcy56b29tIHx8IF90aGlzLnByb3BzLmRlZmF1bHRab29tLCAwKTtcblxuICAgICAgX3RoaXMuX29uQm91bmRzQ2hhbmdlZCgpOyAvLyBub3cgd2UgY2FuIGNhbGN1bGF0ZSBtYXAgYm91bmRzIGNlbnRlciBldGMuLi5cblxuICAgICAgdmFyIGJvb3RzdHJhcFVSTEtleXMgPSBfZXh0ZW5kcyh7fSwgX3RoaXMucHJvcHMuYXBpS2V5ICYmIHsga2V5OiBfdGhpcy5wcm9wcy5hcGlLZXkgfSwgX3RoaXMucHJvcHMuYm9vdHN0cmFwVVJMS2V5cyk7XG5cbiAgICAgIF90aGlzLnByb3BzLmdvb2dsZU1hcExvYWRlcihib290c3RyYXBVUkxLZXlzLCBfdGhpcy5wcm9wcy5oZWF0bWFwTGlicmFyeSkudGhlbihmdW5jdGlvbiAobWFwcykge1xuICAgICAgICBpZiAoIV90aGlzLm1vdW50ZWRfKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNlbnRlckxhdExuZyA9IF90aGlzLmdlb1NlcnZpY2VfLmdldENlbnRlcigpO1xuXG4gICAgICAgIHZhciBwcm9wc09wdGlvbnMgPSB7XG4gICAgICAgICAgem9vbTogX3RoaXMucHJvcHMuem9vbSB8fCBfdGhpcy5wcm9wcy5kZWZhdWx0Wm9vbSxcbiAgICAgICAgICBjZW50ZXI6IG5ldyBtYXBzLkxhdExuZyhjZW50ZXJMYXRMbmcubGF0LCBjZW50ZXJMYXRMbmcubG5nKVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIFN0YXJ0IEhlYXRtYXBcbiAgICAgICAgaWYgKF90aGlzLnByb3BzLmhlYXRtYXAucG9zaXRpb25zKSB7XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbihfdGhpcywge1xuICAgICAgICAgICAgaGVhdG1hcDogKDAsIF9nb29nbGVfaGVhdG1hcC5nZW5lcmF0ZUhlYXRtYXApKG1hcHMsIF90aGlzLnByb3BzLmhlYXRtYXApXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgKDAsIF9nb29nbGVfaGVhdG1hcC5vcHRpb25zSGVhdG1hcCkoX3RoaXMuaGVhdG1hcCwgX3RoaXMucHJvcHMuaGVhdG1hcCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRW5kIEhlYXRtYXBcblxuICAgICAgICAvLyBwcmV2ZW50IHRvIGV4YXBvc2UgZnVsbCBhcGlcbiAgICAgICAgLy8gbmV4dCBwcm9wcyBtdXN0IGJlIGV4cG9zZWQgKGNvbnNvbGUubG9nKE9iamVjdC5rZXlzKHBpY2sobWFwcywgaXNQbGFpbk9iamVjdCkpKSlcbiAgICAgICAgLy8gXCJBbmltYXRpb25cIiwgXCJDb250cm9sUG9zaXRpb25cIiwgXCJNYXBUeXBlQ29udHJvbFN0eWxlXCIsIFwiTWFwVHlwZUlkXCIsXG4gICAgICAgIC8vIFwiTmF2aWdhdGlvbkNvbnRyb2xTdHlsZVwiLCBcIlNjYWxlQ29udHJvbFN0eWxlXCIsIFwiU3Ryb2tlUG9zaXRpb25cIixcbiAgICAgICAgLy8gXCJTeW1ib2xQYXRoXCIsIFwiWm9vbUNvbnRyb2xTdHlsZVwiLFxuICAgICAgICAvLyBcImV2ZW50XCIsIFwiRGlyZWN0aW9uc1N0YXR1c1wiLCBcIkRpcmVjdGlvbnNUcmF2ZWxNb2RlXCIsIFwiRGlyZWN0aW9uc1VuaXRTeXN0ZW1cIixcbiAgICAgICAgLy8gXCJEaXN0YW5jZU1hdHJpeFN0YXR1c1wiLFxuICAgICAgICAvLyBcIkRpc3RhbmNlTWF0cml4RWxlbWVudFN0YXR1c1wiLCBcIkVsZXZhdGlvblN0YXR1c1wiLCBcIkdlb2NvZGVyTG9jYXRpb25UeXBlXCIsXG4gICAgICAgIC8vIFwiR2VvY29kZXJTdGF0dXNcIiwgXCJLbWxMYXllclN0YXR1c1wiLFxuICAgICAgICAvLyBcIk1heFpvb21TdGF0dXNcIiwgXCJTdHJlZXRWaWV3U3RhdHVzXCIsIFwiVHJhbnNpdE1vZGVcIiwgXCJUcmFuc2l0Um91dGVQcmVmZXJlbmNlXCIsXG4gICAgICAgIC8vIFwiVHJhdmVsTW9kZVwiLCBcIlVuaXRTeXN0ZW1cIlxuICAgICAgICB2YXIgbWFwUGxhaW5PYmplY3RzID0gKDAsIF9waWNrMi5kZWZhdWx0KShtYXBzLCBfaXNQbGFpbk9iamVjdDIuZGVmYXVsdCk7XG4gICAgICAgIHZhciBvcHRpb25zID0gdHlwZW9mIF90aGlzLnByb3BzLm9wdGlvbnMgPT09ICdmdW5jdGlvbicgPyBfdGhpcy5wcm9wcy5vcHRpb25zKG1hcFBsYWluT2JqZWN0cykgOiBfdGhpcy5wcm9wcy5vcHRpb25zO1xuICAgICAgICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBkZWZhdWx0T3B0aW9uc18obWFwUGxhaW5PYmplY3RzKTtcblxuICAgICAgICB2YXIgZHJhZ2dhYmxlT3B0aW9ucyA9ICEoMCwgX2lzRW1wdHkyLmRlZmF1bHQpKF90aGlzLnByb3BzLmRyYWdnYWJsZSkgJiYge1xuICAgICAgICAgIGRyYWdnYWJsZTogX3RoaXMucHJvcHMuZHJhZ2dhYmxlXG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIG1pblpvb20gPSBfdGhpcy5fY29tcHV0ZU1pblpvb20ob3B0aW9ucy5taW5ab29tKTtcbiAgICAgICAgX3RoaXMubWluWm9vbV8gPSBtaW5ab29tO1xuXG4gICAgICAgIHZhciBwcmVNYXBPcHRpb25zID0gX2V4dGVuZHMoe30sIGRlZmF1bHRPcHRpb25zLCB7XG4gICAgICAgICAgbWluWm9vbTogbWluWm9vbVxuICAgICAgICB9LCBvcHRpb25zLCBwcm9wc09wdGlvbnMpO1xuXG4gICAgICAgIF90aGlzLmRlZmF1bHREcmFnZ2FibGVPcHRpb25fID0gISgwLCBfaXNFbXB0eTIuZGVmYXVsdCkocHJlTWFwT3B0aW9ucy5kcmFnZ2FibGUpID8gcHJlTWFwT3B0aW9ucy5kcmFnZ2FibGUgOiBfdGhpcy5kZWZhdWx0RHJhZ2dhYmxlT3B0aW9uXztcblxuICAgICAgICB2YXIgbWFwT3B0aW9ucyA9IF9leHRlbmRzKHt9LCBwcmVNYXBPcHRpb25zLCBkcmFnZ2FibGVPcHRpb25zKTtcblxuICAgICAgICBtYXBPcHRpb25zLm1pblpvb20gPSBfY2hlY2tNaW5ab29tKG1hcE9wdGlvbnMubWluWm9vbSwgbWluWm9vbSk7XG5cbiAgICAgICAgdmFyIG1hcCA9IG5ldyBtYXBzLk1hcChfcmVhY3REb20yLmRlZmF1bHQuZmluZERPTU5vZGUoX3RoaXMuZ29vZ2xlTWFwRG9tXyksIG1hcE9wdGlvbnMpO1xuXG4gICAgICAgIF90aGlzLm1hcF8gPSBtYXA7XG4gICAgICAgIF90aGlzLm1hcHNfID0gbWFwcztcblxuICAgICAgICBfdGhpcy5fc2V0TGF5ZXJzKF90aGlzLnByb3BzLmxheWVyVHlwZXMpO1xuXG4gICAgICAgIC8vIFBhcnNlIGBnb29nbGUubWFwcy52ZXJzaW9uYCB0byBjYXB0dXJlIHRoZSBtYWpvciB2ZXJzaW9uIG51bWJlci5cbiAgICAgICAgdmFyIHZlcnNpb25NYXRjaCA9IG1hcHMudmVyc2lvbi5tYXRjaCgvXjNcXC4oXFxkKylcXC4vKTtcbiAgICAgICAgLy8gVGhlIG1ham9yIHZlcnNpb24gaXMgdGhlIGZpcnN0IChhbmQgb25seSkgY2FwdHVyZWQgZ3JvdXAuXG4gICAgICAgIHZhciBtYXBzVmVyc2lvbiA9IHZlcnNpb25NYXRjaCAmJiBOdW1iZXIodmVyc2lvbk1hdGNoWzFdKTtcblxuICAgICAgICAvLyByZW5kZXIgaW4gb3ZlcmxheVxuICAgICAgICB2YXIgdGhpc18gPSBfdGhpcztcbiAgICAgICAgdmFyIG92ZXJsYXkgPSBPYmplY3QuYXNzaWduKG5ldyBtYXBzLk92ZXJsYXlWaWV3KCksIHtcbiAgICAgICAgICBvbkFkZDogZnVuY3Rpb24gb25BZGQoKSB7XG4gICAgICAgICAgICB2YXIgS19NQVhfV0lEVEggPSB0eXBlb2Ygc2NyZWVuICE9PSAndW5kZWZpbmVkJyA/IHNjcmVlbi53aWR0aCArICdweCcgOiAnMjAwMHB4JztcbiAgICAgICAgICAgIHZhciBLX01BWF9IRUlHSFQgPSB0eXBlb2Ygc2NyZWVuICE9PSAndW5kZWZpbmVkJyA/IHNjcmVlbi5oZWlnaHQgKyAncHgnIDogJzIwMDBweCc7XG5cbiAgICAgICAgICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGRpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xuICAgICAgICAgICAgZGl2LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgICAgIGRpdi5zdHlsZS5sZWZ0ID0gJzBweCc7XG4gICAgICAgICAgICBkaXYuc3R5bGUudG9wID0gJzBweCc7XG4gICAgICAgICAgICBkaXYuc3R5bGUud2lkdGggPSBLX01BWF9XSURUSDsgLy8gcHJldmVudHMgc29tZSBjaHJvbWUgZHJhdyBkZWZlY3RzXG4gICAgICAgICAgICBkaXYuc3R5bGUuaGVpZ2h0ID0gS19NQVhfSEVJR0hUO1xuXG4gICAgICAgICAgICBpZiAodGhpc18ucHJvcHMub3ZlcmxheVZpZXdEaXZTdHlsZSkge1xuICAgICAgICAgICAgICB2YXIgb3ZlcmxheVZpZXdEaXZTdHlsZSA9IHRoaXNfLnByb3BzLm92ZXJsYXlWaWV3RGl2U3R5bGU7XG5cbiAgICAgICAgICAgICAgaWYgKCh0eXBlb2Ygb3ZlcmxheVZpZXdEaXZTdHlsZSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2Yob3ZlcmxheVZpZXdEaXZTdHlsZSkpID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKG92ZXJsYXlWaWV3RGl2U3R5bGUpLmZvckVhY2goZnVuY3Rpb24gKHByb3BlcnR5KSB7XG4gICAgICAgICAgICAgICAgICBkaXYuc3R5bGVbcHJvcGVydHldID0gb3ZlcmxheVZpZXdEaXZTdHlsZVtwcm9wZXJ0eV07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHBhbmVzID0gdGhpcy5nZXRQYW5lcygpO1xuICAgICAgICAgICAgcGFuZXMub3ZlcmxheU1vdXNlVGFyZ2V0LmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgICAgICB0aGlzXy5nZW9TZXJ2aWNlXy5zZXRNYXBDYW52YXNQcm9qZWN0aW9uKG1hcHMsIG92ZXJsYXkuZ2V0UHJvamVjdGlvbigpKTtcblxuICAgICAgICAgICAgaWYgKCFJU19SRUFDVF8xNikge1xuICAgICAgICAgICAgICBjcmVhdGVQb3J0YWwodGhpc18sIHRoaXNfLl9yZW5kZXJQb3J0YWwoKSwgZGl2LFxuICAgICAgICAgICAgICAvLyByZW1vdmUgcHJlcmVuZGVyZWQgbWFya2Vyc1xuICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNfLnNldFN0YXRlKHsgb3ZlcmxheTogZGl2IH0pO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXNfLnNldFN0YXRlKHsgb3ZlcmxheTogZGl2IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgb25SZW1vdmU6IGZ1bmN0aW9uIG9uUmVtb3ZlKCkge1xuICAgICAgICAgICAgdmFyIHJlbmRlcmVkT3ZlcmxheSA9IHRoaXNfLnN0YXRlLm92ZXJsYXk7XG4gICAgICAgICAgICBpZiAocmVuZGVyZWRPdmVybGF5ICYmICFJU19SRUFDVF8xNikge1xuICAgICAgICAgICAgICBfcmVhY3REb20yLmRlZmF1bHQudW5tb3VudENvbXBvbmVudEF0Tm9kZShyZW5kZXJlZE92ZXJsYXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpc18uc2V0U3RhdGUoeyBvdmVybGF5OiBudWxsIH0pO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZHJhdzogZnVuY3Rpb24gZHJhdygpIHtcbiAgICAgICAgICAgIHRoaXNfLnVwZGF0ZUNvdW50ZXJfKys7XG4gICAgICAgICAgICB0aGlzXy5fb25Cb3VuZHNDaGFuZ2VkKG1hcCwgbWFwcywgIXRoaXNfLnByb3BzLmRlYm91bmNlZCk7XG5cbiAgICAgICAgICAgIGlmICghdGhpc18uZ29vZ2xlQXBpTG9hZGVkQ2FsbGVkXykge1xuICAgICAgICAgICAgICB0aGlzXy5fb25Hb29nbGVBcGlMb2FkZWQoeyBtYXA6IG1hcCwgbWFwczogbWFwcyB9KTtcbiAgICAgICAgICAgICAgdGhpc18uZ29vZ2xlQXBpTG9hZGVkQ2FsbGVkXyA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzXy5tb3VzZV8pIHtcbiAgICAgICAgICAgICAgdmFyIGxhdExuZyA9IHRoaXNfLmdlb1NlcnZpY2VfLmZyb21Db250YWluZXJQaXhlbFRvTGF0TG5nKHRoaXNfLm1vdXNlXyk7XG4gICAgICAgICAgICAgIHRoaXNfLm1vdXNlXy5sYXQgPSBsYXRMbmcubGF0O1xuICAgICAgICAgICAgICB0aGlzXy5tb3VzZV8ubG5nID0gbGF0TG5nLmxuZztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpc18uX29uQ2hpbGRNb3VzZU1vdmUoKTtcblxuICAgICAgICAgICAgaWYgKHRoaXNfLm1hcmtlcnNEaXNwYXRjaGVyXykge1xuICAgICAgICAgICAgICB0aGlzXy5tYXJrZXJzRGlzcGF0Y2hlcl8uZW1pdCgna09OX0NIQU5HRScpO1xuICAgICAgICAgICAgICBpZiAodGhpc18uZmlyZU1vdXNlRXZlbnRPbklkbGVfKSB7XG4gICAgICAgICAgICAgICAgdGhpc18ubWFya2Vyc0Rpc3BhdGNoZXJfLmVtaXQoJ2tPTl9NT1VTRV9QT1NJVElPTl9DSEFOR0UnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgX3RoaXMub3ZlcmxheV8gPSBvdmVybGF5O1xuXG4gICAgICAgIG92ZXJsYXkuc2V0TWFwKG1hcCk7XG4gICAgICAgIGlmIChfdGhpcy5wcm9wcy5oZWF0bWFwLnBvc2l0aW9ucykge1xuICAgICAgICAgIF90aGlzLmhlYXRtYXAuc2V0TWFwKG1hcCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoX3RoaXMucHJvcHMub25UaWxlc0xvYWRlZCkge1xuICAgICAgICAgIG1hcHMuZXZlbnQuYWRkTGlzdGVuZXIobWFwLCAndGlsZXNsb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzXy5fb25UaWxlc0xvYWRlZCgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgbWFwcy5ldmVudC5hZGRMaXN0ZW5lcihtYXAsICd6b29tX2NoYW5nZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gcmVjYWxjIHBvc2l0aW9uIGF0IHpvb20gc3RhcnRcbiAgICAgICAgICBpZiAodGhpc18uZ2VvU2VydmljZV8uZ2V0Wm9vbSgpICE9PSBtYXAuZ2V0Wm9vbSgpKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXNfLnpvb21BbmltYXRpb25JblByb2dyZXNzXykge1xuICAgICAgICAgICAgICB0aGlzXy56b29tQW5pbWF0aW9uSW5Qcm9ncmVzc18gPSB0cnVlO1xuICAgICAgICAgICAgICB0aGlzXy5fb25ab29tQW5pbWF0aW9uU3RhcnQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgZHJhdygpIGlzIG5vdCBjYWxsZWQgZWFjaCBmcmFtZSBkdXJpbmcgYSB6b29tIGFuaW1hdGlvbixcbiAgICAgICAgICAgIC8vIHNpbXVsYXRlIGl0LlxuICAgICAgICAgICAgaWYgKG1hcHNWZXJzaW9uIDwgRFJBV19DQUxMRURfRFVSSU5HX0FOSU1BVElPTl9WRVJTSU9OKSB7XG4gICAgICAgICAgICAgIHZhciBUSU1FT1VUX1pPT00gPSAzMDA7XG5cbiAgICAgICAgICAgICAgaWYgKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gX3RoaXMuem9vbUNvbnRyb2xDbGlja1RpbWVfIDwgVElNRU9VVF9aT09NKSB7XG4gICAgICAgICAgICAgICAgLy8gdGhlcmUgaXMgc3RyYW5nZSBHb29nbGUgTWFwIEFwaSBiZWhhdmlvciBpbiBjaHJvbWUgd2hlbiB6b29tIGFuaW1hdGlvbiBvZiBtYXBcbiAgICAgICAgICAgICAgICAvLyBpcyBzdGFydGVkIG9ubHkgb24gc2Vjb25kIHJhZiBjYWxsLCBpZiB3YXMgY2xpY2sgb24gem9vbSBjb250cm9sXG4gICAgICAgICAgICAgICAgLy8gb3IgKy0ga2V5cyBwcmVzc2VkLCBzbyBpIHdhaXQgZm9yIHR3byByYWZzIGJlZm9yZSBjaGFuZ2Ugc3RhdGVcblxuICAgICAgICAgICAgICAgIC8vIHRoaXMgZG9lcyBub3QgZnVsbHkgcHJldmVudCBhbmltYXRpb24ganVtcFxuICAgICAgICAgICAgICAgIC8vIGJ1dCByZWR1Y2UgaXQncyBvY2N1cmVuY2UgcHJvYmFiaWxpdHlcbiAgICAgICAgICAgICAgICAoMCwgX3JhZjIuZGVmYXVsdCkoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuICgwLCBfcmFmMi5kZWZhdWx0KShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXNfLnVwZGF0ZUNvdW50ZXJfKys7XG4gICAgICAgICAgICAgICAgICAgIHRoaXNfLl9vbkJvdW5kc0NoYW5nZWQobWFwLCBtYXBzKTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXNfLnVwZGF0ZUNvdW50ZXJfKys7XG4gICAgICAgICAgICAgICAgdGhpc18uX29uQm91bmRzQ2hhbmdlZChtYXAsIG1hcHMpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBtYXBzLmV2ZW50LmFkZExpc3RlbmVyKG1hcCwgJ2lkbGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKF90aGlzLnJlc2V0U2l6ZU9uSWRsZV8pIHtcbiAgICAgICAgICAgIF90aGlzLl9zZXRWaWV3U2l6ZSgpO1xuICAgICAgICAgICAgdmFyIGN1cnJNaW5ab29tID0gX3RoaXMuX2NvbXB1dGVNaW5ab29tKF90aGlzLnByb3BzLm9wdGlvbnMubWluWm9vbSk7XG5cbiAgICAgICAgICAgIGlmIChjdXJyTWluWm9vbSAhPT0gX3RoaXMubWluWm9vbV8pIHtcbiAgICAgICAgICAgICAgX3RoaXMubWluWm9vbV8gPSBjdXJyTWluWm9vbTtcbiAgICAgICAgICAgICAgbWFwLnNldE9wdGlvbnMoeyBtaW5ab29tOiBjdXJyTWluWm9vbSB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgX3RoaXMucmVzZXRTaXplT25JZGxlXyA9IGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0aGlzXy56b29tQW5pbWF0aW9uSW5Qcm9ncmVzc18pIHtcbiAgICAgICAgICAgIHRoaXNfLnpvb21BbmltYXRpb25JblByb2dyZXNzXyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpc18uX29uWm9vbUFuaW1hdGlvbkVuZCgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXNfLnVwZGF0ZUNvdW50ZXJfKys7XG4gICAgICAgICAgdGhpc18uX29uQm91bmRzQ2hhbmdlZChtYXAsIG1hcHMpO1xuXG4gICAgICAgICAgdGhpc18uZHJhZ1RpbWVfID0gMDtcblxuICAgICAgICAgIGlmICh0aGlzXy5tYXJrZXJzRGlzcGF0Y2hlcl8pIHtcbiAgICAgICAgICAgIHRoaXNfLm1hcmtlcnNEaXNwYXRjaGVyXy5lbWl0KCdrT05fQ0hBTkdFJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBtYXBzLmV2ZW50LmFkZExpc3RlbmVyKG1hcCwgJ21vdXNlb3ZlcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBoYXMgYWR2YW50YWdlIG92ZXIgZGl2IE1vdXNlTGVhdmVcbiAgICAgICAgICB0aGlzXy5tb3VzZUluTWFwXyA9IHRydWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGFuIGFsdGVybmF0aXZlIHdheSB0byBrbm93IHRoZSBtb3VzZSBpcyBiYWNrIHdpdGhpbiB0aGUgbWFwXG4gICAgICAgIC8vIFRoaXMgd291bGQgbm90IGZpcmUgd2hlbiBjbGlja2luZy9pbnRlcmFjdGluZyB3aXRoIGdvb2dsZSBtYXBzXG4gICAgICAgIC8vIG93biBvbi1tYXAgY291bnRyb2xzK21hcmtlcnMuIFRoaXMgaGFuZGxlcyBhbiBlZGdlIGNhc2UgZm9yIHRvdWNoIGRldmljZXNcbiAgICAgICAgLy8gKyAnZHJhZ2dhYmxlOmZhbHNlJyBjdXN0b20gb3B0aW9uLiBTZWUgIzMzMiBmb3IgbW9yZSBkZXRhaWxzLlxuICAgICAgICBtYXBzLmV2ZW50LmFkZExpc3RlbmVyKG1hcCwgJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHRoaXNfLm1vdXNlSW5NYXBfID0gdHJ1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWFwcy5ldmVudC5hZGRMaXN0ZW5lcihtYXAsICdtb3VzZW91dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBoYXMgYWR2YW50YWdlIG92ZXIgZGl2IE1vdXNlTGVhdmVcbiAgICAgICAgICB0aGlzXy5tb3VzZUluTWFwXyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXNfLm1vdXNlXyA9IG51bGw7XG4gICAgICAgICAgdGhpc18ubWFya2Vyc0Rpc3BhdGNoZXJfLmVtaXQoJ2tPTl9NT1VTRV9QT1NJVElPTl9DSEFOR0UnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWFwcy5ldmVudC5hZGRMaXN0ZW5lcihtYXAsICdkcmFnJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHRoaXNfLmRyYWdUaW1lXyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgIHRoaXNfLl9vbkRyYWcobWFwKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIHVzZXIgY2hvb3Npbmcgc2F0ZWxsaXRlIHZzIHJvYWRzLCBldGNcbiAgICAgICAgbWFwcy5ldmVudC5hZGRMaXN0ZW5lcihtYXAsICdtYXB0eXBlaWRfY2hhbmdlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0aGlzXy5fb25NYXBUeXBlSWRDaGFuZ2UobWFwLmdldE1hcFR5cGVJZCgpKTtcbiAgICAgICAgfSk7XG4gICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAvLyBub3RpZnkgY2FsbGJhY2sgb2YgbG9hZCBmYWlsdXJlXG4gICAgICAgIF90aGlzLl9vbkdvb2dsZUFwaUxvYWRlZCh7IG1hcDogbnVsbCwgbWFwczogbnVsbCB9KTtcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgICAgIHRocm93IGU7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3RoaXMuX29uR29vZ2xlQXBpTG9hZGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKF90aGlzLnByb3BzLm9uR29vZ2xlQXBpTG9hZGVkKSB7XG4gICAgICAgIHZhciBfdGhpcyRwcm9wcztcblxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBfdGhpcy5wcm9wcy55ZXNJV2FudFRvVXNlR29vZ2xlTWFwQXBpSW50ZXJuYWxzICE9PSB0cnVlKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKCdHb29nbGVNYXA6ICcgKyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICAgICAgJ1VzYWdlIG9mIGludGVybmFsIGFwaSBvYmplY3RzIGlzIGRhbmdlcm91cyAnICsgJ2FuZCBjYW4gY2F1c2UgYSBsb3Qgb2YgaXNzdWVzLlxcbicgKyAnVG8gaGlkZSB0aGlzIHdhcm5pbmcgYWRkIHllc0lXYW50VG9Vc2VHb29nbGVNYXBBcGlJbnRlcm5hbHM9e3RydWV9ICcgKyAndG8gPEdvb2dsZU1hcCBpbnN0YW5jZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgKF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMpLm9uR29vZ2xlQXBpTG9hZGVkLmFwcGx5KF90aGlzJHByb3BzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5fZ2V0SG92ZXJEaXN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfdGhpcy5wcm9wcy5ob3ZlckRpc3RhbmNlO1xuICAgIH07XG5cbiAgICBfdGhpcy5fb25EcmFnID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMjtcblxuICAgICAgcmV0dXJuIF90aGlzLnByb3BzLm9uRHJhZyAmJiAoX3RoaXMkcHJvcHMyID0gX3RoaXMucHJvcHMpLm9uRHJhZy5hcHBseShfdGhpcyRwcm9wczIsIGFyZ3VtZW50cyk7XG4gICAgfTtcblxuICAgIF90aGlzLl9vbk1hcFR5cGVJZENoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczM7XG5cbiAgICAgIHJldHVybiBfdGhpcy5wcm9wcy5vbk1hcFR5cGVJZENoYW5nZSAmJiAoX3RoaXMkcHJvcHMzID0gX3RoaXMucHJvcHMpLm9uTWFwVHlwZUlkQ2hhbmdlLmFwcGx5KF90aGlzJHByb3BzMywgYXJndW1lbnRzKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuX29uWm9vbUFuaW1hdGlvblN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzNDtcblxuICAgICAgcmV0dXJuIF90aGlzLnByb3BzLm9uWm9vbUFuaW1hdGlvblN0YXJ0ICYmIChfdGhpcyRwcm9wczQgPSBfdGhpcy5wcm9wcykub25ab29tQW5pbWF0aW9uU3RhcnQuYXBwbHkoX3RoaXMkcHJvcHM0LCBhcmd1bWVudHMpO1xuICAgIH07XG5cbiAgICBfdGhpcy5fb25ab29tQW5pbWF0aW9uRW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzNTtcblxuICAgICAgcmV0dXJuIF90aGlzLnByb3BzLm9uWm9vbUFuaW1hdGlvbkVuZCAmJiAoX3RoaXMkcHJvcHM1ID0gX3RoaXMucHJvcHMpLm9uWm9vbUFuaW1hdGlvbkVuZC5hcHBseShfdGhpcyRwcm9wczUsIGFyZ3VtZW50cyk7XG4gICAgfTtcblxuICAgIF90aGlzLl9vblRpbGVzTG9hZGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzLnByb3BzLm9uVGlsZXNMb2FkZWQgJiYgX3RoaXMucHJvcHMub25UaWxlc0xvYWRlZCgpO1xuICAgIH07XG5cbiAgICBfdGhpcy5fb25DaGlsZENsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKF90aGlzLnByb3BzLm9uQ2hpbGRDbGljaykge1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHM2O1xuXG4gICAgICAgIHJldHVybiAoX3RoaXMkcHJvcHM2ID0gX3RoaXMucHJvcHMpLm9uQ2hpbGRDbGljay5hcHBseShfdGhpcyRwcm9wczYsIGFyZ3VtZW50cyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH07XG5cbiAgICBfdGhpcy5fb25DaGlsZE1vdXNlRG93biA9IGZ1bmN0aW9uIChob3ZlcktleSwgY2hpbGRQcm9wcykge1xuICAgICAgX3RoaXMuY2hpbGRNb3VzZURvd25BcmdzXyA9IFtob3ZlcktleSwgY2hpbGRQcm9wc107XG4gICAgICBpZiAoX3RoaXMucHJvcHMub25DaGlsZE1vdXNlRG93bikge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkNoaWxkTW91c2VEb3duKGhvdmVyS2V5LCBjaGlsZFByb3BzLCBfZXh0ZW5kcyh7fSwgX3RoaXMubW91c2VfKSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLl9vbkNoaWxkTW91c2VVcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpcy5jaGlsZE1vdXNlRG93bkFyZ3NfKSB7XG4gICAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkNoaWxkTW91c2VVcCkge1xuICAgICAgICAgIHZhciBfdGhpcyRwcm9wczc7XG5cbiAgICAgICAgICAoX3RoaXMkcHJvcHM3ID0gX3RoaXMucHJvcHMpLm9uQ2hpbGRNb3VzZVVwLmFwcGx5KF90aGlzJHByb3BzNywgX3RoaXMuY2hpbGRNb3VzZURvd25BcmdzXy5jb25jYXQoW19leHRlbmRzKHt9LCBfdGhpcy5tb3VzZV8pXSkpO1xuICAgICAgICB9XG4gICAgICAgIF90aGlzLmNoaWxkTW91c2VEb3duQXJnc18gPSBudWxsO1xuICAgICAgICBfdGhpcy5jaGlsZE1vdXNlVXBUaW1lXyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5fb25DaGlsZE1vdXNlTW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpcy5jaGlsZE1vdXNlRG93bkFyZ3NfKSB7XG4gICAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkNoaWxkTW91c2VNb3ZlKSB7XG4gICAgICAgICAgdmFyIF90aGlzJHByb3BzODtcblxuICAgICAgICAgIChfdGhpcyRwcm9wczggPSBfdGhpcy5wcm9wcykub25DaGlsZE1vdXNlTW92ZS5hcHBseShfdGhpcyRwcm9wczgsIF90aGlzLmNoaWxkTW91c2VEb3duQXJnc18uY29uY2F0KFtfZXh0ZW5kcyh7fSwgX3RoaXMubW91c2VfKV0pKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5fb25DaGlsZE1vdXNlRW50ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoX3RoaXMucHJvcHMub25DaGlsZE1vdXNlRW50ZXIpIHtcbiAgICAgICAgdmFyIF90aGlzJHByb3BzOTtcblxuICAgICAgICByZXR1cm4gKF90aGlzJHByb3BzOSA9IF90aGlzLnByb3BzKS5vbkNoaWxkTW91c2VFbnRlci5hcHBseShfdGhpcyRwcm9wczksIGFyZ3VtZW50cyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH07XG5cbiAgICBfdGhpcy5fb25DaGlsZE1vdXNlTGVhdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoX3RoaXMucHJvcHMub25DaGlsZE1vdXNlTGVhdmUpIHtcbiAgICAgICAgdmFyIF90aGlzJHByb3BzMTA7XG5cbiAgICAgICAgcmV0dXJuIChfdGhpcyRwcm9wczEwID0gX3RoaXMucHJvcHMpLm9uQ2hpbGRNb3VzZUxlYXZlLmFwcGx5KF90aGlzJHByb3BzMTAsIGFyZ3VtZW50cyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH07XG5cbiAgICBfdGhpcy5fc2V0Vmlld1NpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIV90aGlzLm1vdW50ZWRfKSByZXR1cm47XG4gICAgICBpZiAoaXNGdWxsU2NyZWVuKCkpIHtcbiAgICAgICAgX3RoaXMuZ2VvU2VydmljZV8uc2V0Vmlld1NpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgbWFwRG9tID0gX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKF90aGlzLmdvb2dsZU1hcERvbV8pO1xuICAgICAgICBfdGhpcy5nZW9TZXJ2aWNlXy5zZXRWaWV3U2l6ZShtYXBEb20uY2xpZW50V2lkdGgsIG1hcERvbS5jbGllbnRIZWlnaHQpO1xuICAgICAgfVxuICAgICAgX3RoaXMuX29uQm91bmRzQ2hhbmdlZCgpO1xuICAgIH07XG5cbiAgICBfdGhpcy5fb25XaW5kb3dSZXNpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5yZXNldFNpemVPbklkbGVfID0gdHJ1ZTtcbiAgICB9O1xuXG4gICAgX3RoaXMuX29uTWFwTW91c2VNb3ZlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmICghX3RoaXMubW91c2VJbk1hcF8pIHJldHVybjtcblxuICAgICAgdmFyIGN1cnJUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICB2YXIgS19SRUNBTENfQ0xJRU5UX1JFQ1RfTVMgPSA1MDtcblxuICAgICAgaWYgKGN1cnJUaW1lIC0gX3RoaXMubW91c2VNb3ZlVGltZV8gPiBLX1JFQ0FMQ19DTElFTlRfUkVDVF9NUykge1xuICAgICAgICBfdGhpcy5ib3VuZGluZ1JlY3RfID0gZS5jdXJyZW50VGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgfVxuICAgICAgX3RoaXMubW91c2VNb3ZlVGltZV8gPSBjdXJyVGltZTtcblxuICAgICAgdmFyIG1vdXNlUG9zWCA9IGUuY2xpZW50WCAtIF90aGlzLmJvdW5kaW5nUmVjdF8ubGVmdDtcbiAgICAgIHZhciBtb3VzZVBvc1kgPSBlLmNsaWVudFkgLSBfdGhpcy5ib3VuZGluZ1JlY3RfLnRvcDtcblxuICAgICAgaWYgKCFfdGhpcy5tb3VzZV8pIHtcbiAgICAgICAgX3RoaXMubW91c2VfID0geyB4OiAwLCB5OiAwLCBsYXQ6IDAsIGxuZzogMCB9O1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5tb3VzZV8ueCA9IG1vdXNlUG9zWDtcbiAgICAgIF90aGlzLm1vdXNlXy55ID0gbW91c2VQb3NZO1xuXG4gICAgICB2YXIgbGF0TG5nID0gX3RoaXMuZ2VvU2VydmljZV8uZnJvbUNvbnRhaW5lclBpeGVsVG9MYXRMbmcoX3RoaXMubW91c2VfKTtcbiAgICAgIF90aGlzLm1vdXNlXy5sYXQgPSBsYXRMbmcubGF0O1xuICAgICAgX3RoaXMubW91c2VfLmxuZyA9IGxhdExuZy5sbmc7XG5cbiAgICAgIF90aGlzLl9vbkNoaWxkTW91c2VNb3ZlKCk7XG5cbiAgICAgIGlmIChjdXJyVGltZSAtIF90aGlzLmRyYWdUaW1lXyA8IEtfSURMRV9USU1FT1VUKSB7XG4gICAgICAgIF90aGlzLmZpcmVNb3VzZUV2ZW50T25JZGxlXyA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfdGhpcy5tYXJrZXJzRGlzcGF0Y2hlcl8uZW1pdCgna09OX01PVVNFX1BPU0lUSU9OX0NIQU5HRScpO1xuICAgICAgICBfdGhpcy5maXJlTW91c2VFdmVudE9uSWRsZV8gPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuX29uQ2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMxMTtcblxuICAgICAgcmV0dXJuIF90aGlzLnByb3BzLm9uQ2xpY2sgJiYgIV90aGlzLmNoaWxkTW91c2VEb3duQXJnc18gJiYgbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBfdGhpcy5jaGlsZE1vdXNlVXBUaW1lXyA+IEtfSURMRV9DTElDS19USU1FT1VUICYmIF90aGlzLmRyYWdUaW1lXyA9PT0gMCAmJiAoX3RoaXMkcHJvcHMxMSA9IF90aGlzLnByb3BzKS5vbkNsaWNrLmFwcGx5KF90aGlzJHByb3BzMTEsIGFyZ3VtZW50cyk7XG4gICAgfTtcblxuICAgIF90aGlzLl9vbk1hcENsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoX3RoaXMubWFya2Vyc0Rpc3BhdGNoZXJfKSB7XG4gICAgICAgIC8vIHN1cHBvcnQgdG91Y2ggZXZlbnRzIGFuZCByZWNhbGN1bGF0ZSBtb3VzZSBwb3NpdGlvbiBvbiBjbGlja1xuICAgICAgICBfdGhpcy5fb25NYXBNb3VzZU1vdmUoZXZlbnQpO1xuICAgICAgICB2YXIgY3VyclRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgaWYgKGN1cnJUaW1lIC0gX3RoaXMuZHJhZ1RpbWVfID4gS19JRExFX1RJTUVPVVQpIHtcbiAgICAgICAgICBpZiAoX3RoaXMubW91c2VfKSB7XG4gICAgICAgICAgICBfdGhpcy5fb25DbGljayhfZXh0ZW5kcyh7fSwgX3RoaXMubW91c2VfLCB7XG4gICAgICAgICAgICAgIGV2ZW50OiBldmVudFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIF90aGlzLm1hcmtlcnNEaXNwYXRjaGVyXy5lbWl0KCdrT05fQ0xJQ0snLCBldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuX29uTWFwTW91c2VEb3duTmF0aXZlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoIV90aGlzLm1vdXNlSW5NYXBfKSByZXR1cm47XG5cbiAgICAgIF90aGlzLl9vbk1hcE1vdXNlRG93bihldmVudCk7XG4gICAgfTtcblxuICAgIF90aGlzLl9vbk1hcE1vdXNlRG93biA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKF90aGlzLm1hcmtlcnNEaXNwYXRjaGVyXykge1xuICAgICAgICB2YXIgY3VyclRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgaWYgKGN1cnJUaW1lIC0gX3RoaXMuZHJhZ1RpbWVfID4gS19JRExFX1RJTUVPVVQpIHtcbiAgICAgICAgICAvLyBIb3ZlcmVkIG1hcmtlciBkZXRlY3RlZCBhdCBtb3VzZSBtb3ZlIGNvdWxkIGJlIGRlbGV0ZWQgYXQgbW91c2UgZG93biB0aW1lXG4gICAgICAgICAgLy8gc28gaXQgd2lsbCBiZSBnb29kIHRvIGZvcmNlIGhvdmVyZWQgbWFya2VyIHJlY2FsY3VsYXRpb25cbiAgICAgICAgICBfdGhpcy5fb25NYXBNb3VzZU1vdmUoZXZlbnQpO1xuICAgICAgICAgIF90aGlzLm1hcmtlcnNEaXNwYXRjaGVyXy5lbWl0KCdrT05fTURPV04nLCBldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuX29uTWFwTW91c2VEb3duQ2FwdHVyZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICgoMCwgX2RldGVjdDIuZGVmYXVsdCkoKS5pc0Nocm9tZSkge1xuICAgICAgICAvLyB0byBmaXggc3RyYW5nZSB6b29tIGluIGNocm9tZVxuICAgICAgICBfdGhpcy56b29tQ29udHJvbENsaWNrVGltZV8gPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuX29uS2V5RG93bkNhcHR1cmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoKDAsIF9kZXRlY3QyLmRlZmF1bHQpKCkuaXNDaHJvbWUpIHtcbiAgICAgICAgX3RoaXMuem9vbUNvbnRyb2xDbGlja1RpbWVfID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLl9pc0NlbnRlckRlZmluZWQgPSBmdW5jdGlvbiAoY2VudGVyKSB7XG4gICAgICByZXR1cm4gY2VudGVyICYmICgoMCwgX2lzUGxhaW5PYmplY3QyLmRlZmF1bHQpKGNlbnRlcikgJiYgKDAsIF9pc051bWJlcjIuZGVmYXVsdCkoY2VudGVyLmxhdCkgJiYgKDAsIF9pc051bWJlcjIuZGVmYXVsdCkoY2VudGVyLmxuZykgfHwgY2VudGVyLmxlbmd0aCA9PT0gMiAmJiAoMCwgX2lzTnVtYmVyMi5kZWZhdWx0KShjZW50ZXJbMF0pICYmICgwLCBfaXNOdW1iZXIyLmRlZmF1bHQpKGNlbnRlclsxXSkpO1xuICAgIH07XG5cbiAgICBfdGhpcy5fb25Cb3VuZHNDaGFuZ2VkID0gZnVuY3Rpb24gKG1hcCwgbWFwcywgY2FsbEV4dEJvdW5kc0NoYW5nZSkge1xuICAgICAgaWYgKG1hcCkge1xuICAgICAgICB2YXIgZ21DID0gbWFwLmdldENlbnRlcigpO1xuICAgICAgICBfdGhpcy5nZW9TZXJ2aWNlXy5zZXRWaWV3KFtnbUMubGF0KCksIGdtQy5sbmcoKV0sIG1hcC5nZXRab29tKCksIDApO1xuICAgICAgfVxuXG4gICAgICBpZiAoKF90aGlzLnByb3BzLm9uQ2hhbmdlIHx8IF90aGlzLnByb3BzLm9uQm91bmRzQ2hhbmdlKSAmJiBfdGhpcy5nZW9TZXJ2aWNlXy5jYW5Qcm9qZWN0KCkpIHtcbiAgICAgICAgdmFyIHpvb20gPSBfdGhpcy5nZW9TZXJ2aWNlXy5nZXRab29tKCk7XG4gICAgICAgIHZhciBib3VuZHMgPSBfdGhpcy5nZW9TZXJ2aWNlXy5nZXRCb3VuZHMoKTtcbiAgICAgICAgdmFyIGNlbnRlckxhdExuZyA9IF90aGlzLmdlb1NlcnZpY2VfLmdldENlbnRlcigpO1xuXG4gICAgICAgIGlmICghKDAsIF9pc0FycmF5c0VxdWFsRXBzMi5kZWZhdWx0KShib3VuZHMsIF90aGlzLnByZXZCb3VuZHNfLCBrRVBTKSkge1xuICAgICAgICAgIGlmIChjYWxsRXh0Qm91bmRzQ2hhbmdlICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgdmFyIG1hcmdpbkJvdW5kcyA9IF90aGlzLmdlb1NlcnZpY2VfLmdldEJvdW5kcyhfdGhpcy5wcm9wcy5tYXJnaW4pO1xuICAgICAgICAgICAgaWYgKF90aGlzLnByb3BzLm9uQm91bmRzQ2hhbmdlKSB7XG4gICAgICAgICAgICAgIF90aGlzLnByb3BzLm9uQm91bmRzQ2hhbmdlKF90aGlzLmNlbnRlcklzT2JqZWN0XyA/IF9leHRlbmRzKHt9LCBjZW50ZXJMYXRMbmcpIDogW2NlbnRlckxhdExuZy5sYXQsIGNlbnRlckxhdExuZy5sbmddLCB6b29tLCBib3VuZHMsIG1hcmdpbkJvdW5kcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkNoYW5nZSkge1xuICAgICAgICAgICAgICBfdGhpcy5wcm9wcy5vbkNoYW5nZSh7XG4gICAgICAgICAgICAgICAgY2VudGVyOiBfZXh0ZW5kcyh7fSwgY2VudGVyTGF0TG5nKSxcbiAgICAgICAgICAgICAgICB6b29tOiB6b29tLFxuICAgICAgICAgICAgICAgIGJvdW5kczoge1xuICAgICAgICAgICAgICAgICAgbnc6IHtcbiAgICAgICAgICAgICAgICAgICAgbGF0OiBib3VuZHNbMF0sXG4gICAgICAgICAgICAgICAgICAgIGxuZzogYm91bmRzWzFdXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgc2U6IHtcbiAgICAgICAgICAgICAgICAgICAgbGF0OiBib3VuZHNbMl0sXG4gICAgICAgICAgICAgICAgICAgIGxuZzogYm91bmRzWzNdXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgc3c6IHtcbiAgICAgICAgICAgICAgICAgICAgbGF0OiBib3VuZHNbNF0sXG4gICAgICAgICAgICAgICAgICAgIGxuZzogYm91bmRzWzVdXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgbmU6IHtcbiAgICAgICAgICAgICAgICAgICAgbGF0OiBib3VuZHNbNl0sXG4gICAgICAgICAgICAgICAgICAgIGxuZzogYm91bmRzWzddXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtYXJnaW5Cb3VuZHM6IHtcbiAgICAgICAgICAgICAgICAgIG53OiB7XG4gICAgICAgICAgICAgICAgICAgIGxhdDogbWFyZ2luQm91bmRzWzBdLFxuICAgICAgICAgICAgICAgICAgICBsbmc6IG1hcmdpbkJvdW5kc1sxXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHNlOiB7XG4gICAgICAgICAgICAgICAgICAgIGxhdDogbWFyZ2luQm91bmRzWzJdLFxuICAgICAgICAgICAgICAgICAgICBsbmc6IG1hcmdpbkJvdW5kc1szXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHN3OiB7XG4gICAgICAgICAgICAgICAgICAgIGxhdDogbWFyZ2luQm91bmRzWzRdLFxuICAgICAgICAgICAgICAgICAgICBsbmc6IG1hcmdpbkJvdW5kc1s1XVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG5lOiB7XG4gICAgICAgICAgICAgICAgICAgIGxhdDogbWFyZ2luQm91bmRzWzZdLFxuICAgICAgICAgICAgICAgICAgICBsbmc6IG1hcmdpbkJvdW5kc1s3XVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBzaXplOiBfdGhpcy5nZW9TZXJ2aWNlXy5oYXNTaXplKCkgPyB7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogX3RoaXMuZ2VvU2VydmljZV8uZ2V0V2lkdGgoKSxcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogX3RoaXMuZ2VvU2VydmljZV8uZ2V0SGVpZ2h0KClcbiAgICAgICAgICAgICAgICB9IDoge1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfdGhpcy5wcmV2Qm91bmRzXyA9IGJvdW5kcztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuX3JlZ2lzdGVyQ2hpbGQgPSBmdW5jdGlvbiAocmVmKSB7XG4gICAgICBfdGhpcy5nb29nbGVNYXBEb21fID0gcmVmO1xuICAgIH07XG5cbiAgICBfdGhpcy5tb3VudGVkXyA9IGZhbHNlO1xuICAgIF90aGlzLmluaXRpYWxpemVkXyA9IGZhbHNlO1xuICAgIF90aGlzLmdvb2dsZUFwaUxvYWRlZENhbGxlZF8gPSBmYWxzZTtcblxuICAgIF90aGlzLm1hcF8gPSBudWxsO1xuICAgIF90aGlzLm1hcHNfID0gbnVsbDtcbiAgICBfdGhpcy5wcmV2Qm91bmRzXyA9IG51bGw7XG4gICAgX3RoaXMuaGVhdG1hcCA9IG51bGw7XG5cbiAgICBfdGhpcy5sYXllcnNfID0ge307XG5cbiAgICBfdGhpcy5tb3VzZV8gPSBudWxsO1xuICAgIF90aGlzLm1vdXNlTW92ZVRpbWVfID0gMDtcbiAgICBfdGhpcy5ib3VuZGluZ1JlY3RfID0gbnVsbDtcbiAgICBfdGhpcy5tb3VzZUluTWFwXyA9IHRydWU7XG5cbiAgICBfdGhpcy5kcmFnVGltZV8gPSAwO1xuICAgIF90aGlzLmZpcmVNb3VzZUV2ZW50T25JZGxlXyA9IGZhbHNlO1xuICAgIF90aGlzLnVwZGF0ZUNvdW50ZXJfID0gMDtcblxuICAgIF90aGlzLm1hcmtlcnNEaXNwYXRjaGVyXyA9IG5ldyBfbWFya2VyX2Rpc3BhdGNoZXIyLmRlZmF1bHQoX3RoaXMpO1xuICAgIF90aGlzLmdlb1NlcnZpY2VfID0gbmV3IF9nZW8yLmRlZmF1bHQoS19HT09HTEVfVElMRV9TSVpFKTtcbiAgICBfdGhpcy5jZW50ZXJJc09iamVjdF8gPSAoMCwgX2lzUGxhaW5PYmplY3QyLmRlZmF1bHQpKF90aGlzLnByb3BzLmNlbnRlcik7XG5cbiAgICBfdGhpcy5taW5ab29tXyA9IERFRkFVTFRfTUlOX1pPT007XG4gICAgX3RoaXMuZGVmYXVsdERyYWdnYWJsZU9wdGlvbl8gPSB0cnVlO1xuXG4gICAgX3RoaXMuem9vbUNvbnRyb2xDbGlja1RpbWVfID0gMDtcblxuICAgIF90aGlzLmNoaWxkTW91c2VEb3duQXJnc18gPSBudWxsO1xuICAgIF90aGlzLmNoaWxkTW91c2VVcFRpbWVfID0gMDtcblxuICAgIF90aGlzLmdvb2dsZU1hcERvbV8gPSBudWxsO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5hcGlLZXkpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdHb29nbGVNYXA6ICcgKyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgJ2FwaUtleSBpcyBkZXByZWNhdGVkLCB1c2UgJyArICdib290c3RyYXBVUkxLZXlzPXt7a2V5OiBZT1VSX0FQSV9LRVl9fSBpbnN0ZWFkLicpO1xuICAgICAgfVxuXG4gICAgICBpZiAoX3RoaXMucHJvcHMub25Cb3VuZHNDaGFuZ2UpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdHb29nbGVNYXA6ICcgKyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgJ29uQm91bmRzQ2hhbmdlIGlzIGRlcHJlY2F0ZWQsIHVzZSAnICsgJ29uQ2hhbmdlKHtjZW50ZXIsIHpvb20sIGJvdW5kcywgLi4ub3RoZXJ9KSBpbnN0ZWFkLicpO1xuICAgICAgfVxuXG4gICAgICBpZiAoKDAsIF9pc0VtcHR5Mi5kZWZhdWx0KShfdGhpcy5wcm9wcy5jZW50ZXIpICYmICgwLCBfaXNFbXB0eTIuZGVmYXVsdCkoX3RoaXMucHJvcHMuZGVmYXVsdENlbnRlcikpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdHb29nbGVNYXA6IGNlbnRlciBvciBkZWZhdWx0Q2VudGVyIHByb3BlcnR5IG11c3QgYmUgZGVmaW5lZCcgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGlmICgoMCwgX2lzRW1wdHkyLmRlZmF1bHQpKF90aGlzLnByb3BzLnpvb20pICYmICgwLCBfaXNFbXB0eTIuZGVmYXVsdCkoX3RoaXMucHJvcHMuZGVmYXVsdFpvb20pKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignR29vZ2xlTWFwOiB6b29tIG9yIGRlZmF1bHRab29tIHByb3BlcnR5IG11c3QgYmUgZGVmaW5lZCcgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKF90aGlzLl9pc0NlbnRlckRlZmluZWQoX3RoaXMucHJvcHMuY2VudGVyIHx8IF90aGlzLnByb3BzLmRlZmF1bHRDZW50ZXIpKSB7XG4gICAgICB2YXIgcHJvcHNDZW50ZXIgPSBsYXRMbmcyT2JqKF90aGlzLnByb3BzLmNlbnRlciB8fCBfdGhpcy5wcm9wcy5kZWZhdWx0Q2VudGVyKTtcbiAgICAgIF90aGlzLmdlb1NlcnZpY2VfLnNldFZpZXcocHJvcHNDZW50ZXIsIF90aGlzLnByb3BzLnpvb20gfHwgX3RoaXMucHJvcHMuZGVmYXVsdFpvb20sIDApO1xuICAgIH1cblxuICAgIF90aGlzLnpvb21BbmltYXRpb25JblByb2dyZXNzXyA9IGZhbHNlO1xuXG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBvdmVybGF5OiBudWxsXG4gICAgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBHb29nbGVNYXAucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB0aGlzLm1vdW50ZWRfID0gdHJ1ZTtcbiAgICAoMCwgX3Bhc3NpdmVFdmVudHMyLmRlZmF1bHQpKHdpbmRvdywgJ3Jlc2l6ZScsIHRoaXMuX29uV2luZG93UmVzaXplLCBmYWxzZSk7XG4gICAgKDAsIF9wYXNzaXZlRXZlbnRzMi5kZWZhdWx0KSh3aW5kb3csICdrZXlkb3duJywgdGhpcy5fb25LZXlEb3duQ2FwdHVyZSwgdHJ1ZSk7XG4gICAgdmFyIG1hcERvbSA9IF9yZWFjdERvbTIuZGVmYXVsdC5maW5kRE9NTm9kZSh0aGlzLmdvb2dsZU1hcERvbV8pO1xuICAgIC8vIGdtYXAgY2FuJ3QgcHJldmVudCBtYXAgZHJhZyBpZiBtb3VzZWRvd24gZXZlbnQgYWxyZWFkeSBvY2N1cmVkXG4gICAgLy8gdGhlIG9ubHkgd29ya2Fyb3VuZCBJIGZpbmQgaXMgcHJldmVudCBtb3VzZWRvd24gbmF0aXZlIGJyb3dzZXIgZXZlbnRcblxuICAgIGlmIChtYXBEb20pIHtcbiAgICAgICgwLCBfcGFzc2l2ZUV2ZW50czIuZGVmYXVsdCkobWFwRG9tLCAnbW91c2Vkb3duJywgdGhpcy5fb25NYXBNb3VzZURvd25OYXRpdmUsIHRydWUpO1xuICAgIH1cblxuICAgICgwLCBfcGFzc2l2ZUV2ZW50czIuZGVmYXVsdCkod2luZG93LCAnbW91c2V1cCcsIHRoaXMuX29uQ2hpbGRNb3VzZVVwLCBmYWxzZSk7XG4gICAgdmFyIGJvb3RzdHJhcFVSTEtleXMgPSBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcy5hcGlLZXkgJiYgeyBrZXk6IHRoaXMucHJvcHMuYXBpS2V5IH0sIHRoaXMucHJvcHMuYm9vdHN0cmFwVVJMS2V5cyk7XG5cbiAgICB0aGlzLnByb3BzLmdvb2dsZU1hcExvYWRlcihib290c3RyYXBVUkxLZXlzLCB0aGlzLnByb3BzLmhlYXRtYXBMaWJyYXJ5KTsgLy8gd2UgY2FuIHN0YXJ0IGxvYWQgaW1tZWRpYXRseVxuXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAvLyB0byBkZXRlY3Qgc2l6ZVxuICAgICAgX3RoaXMyLl9zZXRWaWV3U2l6ZSgpO1xuICAgICAgaWYgKF90aGlzMi5faXNDZW50ZXJEZWZpbmVkKF90aGlzMi5wcm9wcy5jZW50ZXIgfHwgX3RoaXMyLnByb3BzLmRlZmF1bHRDZW50ZXIpKSB7XG4gICAgICAgIF90aGlzMi5faW5pdE1hcCgpO1xuICAgICAgfVxuICAgIH0sIDAsIHRoaXMpO1xuICAgIGlmICh0aGlzLnByb3BzLnJlc2V0Qm91bmRzT25SZXNpemUpIHtcbiAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgIF9kZXRlY3RFbGVtZW50UmVzaXplMi5kZWZhdWx0LmFkZFJlc2l6ZUxpc3RlbmVyKG1hcERvbSwgdGhhdC5fbWFwRG9tUmVzaXplQ2FsbGJhY2spO1xuICAgIH1cbiAgfTtcblxuICBHb29nbGVNYXAucHJvdG90eXBlLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICghKDAsIF9zaGFsbG93RXF1YWwyLmRlZmF1bHQpKHRoaXMucHJvcHMuZGVmYXVsdENlbnRlciwgbmV4dFByb3BzLmRlZmF1bHRDZW50ZXIpKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIkdvb2dsZU1hcDogZGVmYXVsdENlbnRlciBwcm9wIGNoYW5nZWQuIFlvdSBjYW4ndCBjaGFuZ2UgZGVmYXVsdCBwcm9wcy5cIik7XG4gICAgICB9XG5cbiAgICAgIGlmICghKDAsIF9zaGFsbG93RXF1YWwyLmRlZmF1bHQpKHRoaXMucHJvcHMuZGVmYXVsdFpvb20sIG5leHRQcm9wcy5kZWZhdWx0Wm9vbSkpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwiR29vZ2xlTWFwOiBkZWZhdWx0Wm9vbSBwcm9wIGNoYW5nZWQuIFlvdSBjYW4ndCBjaGFuZ2UgZGVmYXVsdCBwcm9wcy5cIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9pc0NlbnRlckRlZmluZWQodGhpcy5wcm9wcy5jZW50ZXIpICYmIHRoaXMuX2lzQ2VudGVyRGVmaW5lZChuZXh0UHJvcHMuY2VudGVyKSkge1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfdGhpczMuX2luaXRNYXAoKTtcbiAgICAgIH0sIDApO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm1hcF8pIHtcbiAgICAgIHZhciBjZW50ZXJMYXRMbmcgPSB0aGlzLmdlb1NlcnZpY2VfLmdldENlbnRlcigpO1xuICAgICAgaWYgKHRoaXMuX2lzQ2VudGVyRGVmaW5lZChuZXh0UHJvcHMuY2VudGVyKSkge1xuICAgICAgICB2YXIgbmV4dFByb3BzQ2VudGVyID0gbGF0TG5nMk9iaihuZXh0UHJvcHMuY2VudGVyKTtcbiAgICAgICAgdmFyIGN1cnJDZW50ZXIgPSB0aGlzLl9pc0NlbnRlckRlZmluZWQodGhpcy5wcm9wcy5jZW50ZXIpID8gbGF0TG5nMk9iaih0aGlzLnByb3BzLmNlbnRlcikgOiBudWxsO1xuXG4gICAgICAgIGlmICghY3VyckNlbnRlciB8fCBNYXRoLmFicyhuZXh0UHJvcHNDZW50ZXIubGF0IC0gY3VyckNlbnRlci5sYXQpICsgTWF0aC5hYnMobmV4dFByb3BzQ2VudGVyLmxuZyAtIGN1cnJDZW50ZXIubG5nKSA+IGtFUFMpIHtcbiAgICAgICAgICBpZiAoTWF0aC5hYnMobmV4dFByb3BzQ2VudGVyLmxhdCAtIGNlbnRlckxhdExuZy5sYXQpICsgTWF0aC5hYnMobmV4dFByb3BzQ2VudGVyLmxuZyAtIGNlbnRlckxhdExuZy5sbmcpID4ga0VQUykge1xuICAgICAgICAgICAgdGhpcy5tYXBfLnBhblRvKHtcbiAgICAgICAgICAgICAgbGF0OiBuZXh0UHJvcHNDZW50ZXIubGF0LFxuICAgICAgICAgICAgICBsbmc6IG5leHRQcm9wc0NlbnRlci5sbmdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoISgwLCBfaXNFbXB0eTIuZGVmYXVsdCkobmV4dFByb3BzLnpvb20pKSB7XG4gICAgICAgIC8vIGlmIHpvb20gY2hhZ2VkIGJ5IHVzZXJcbiAgICAgICAgaWYgKE1hdGguYWJzKG5leHRQcm9wcy56b29tIC0gdGhpcy5wcm9wcy56b29tKSA+IDApIHtcbiAgICAgICAgICB0aGlzLm1hcF8uc2V0Wm9vbShuZXh0UHJvcHMuem9vbSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCEoMCwgX2lzRW1wdHkyLmRlZmF1bHQpKHRoaXMucHJvcHMuZHJhZ2dhYmxlKSAmJiAoMCwgX2lzRW1wdHkyLmRlZmF1bHQpKG5leHRQcm9wcy5kcmFnZ2FibGUpKSB7XG4gICAgICAgIC8vIHJlc2V0IHRvIGRlZmF1bHRcbiAgICAgICAgdGhpcy5tYXBfLnNldE9wdGlvbnMoeyBkcmFnZ2FibGU6IHRoaXMuZGVmYXVsdERyYWdnYWJsZU9wdGlvbl8gfSk7XG4gICAgICB9IGVsc2UgaWYgKCEoMCwgX3NoYWxsb3dFcXVhbDIuZGVmYXVsdCkodGhpcy5wcm9wcy5kcmFnZ2FibGUsIG5leHRQcm9wcy5kcmFnZ2FibGUpKSB7XG4gICAgICAgIC8vIGFsc28gcHJldmVudCB0aGlzIG9uIHdpbmRvdyAnbW91c2Vkb3duJyBldmVudCB0byBwcmV2ZW50IG1hcCBtb3ZlXG4gICAgICAgIHRoaXMubWFwXy5zZXRPcHRpb25zKHsgZHJhZ2dhYmxlOiBuZXh0UHJvcHMuZHJhZ2dhYmxlIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyB1c2Ugc2hhbGxvd0VxdWFsIHRvIHRyeSBhdm9pZCBjYWxsaW5nIG1hcC5fc2V0T3B0aW9ucyBpZiBvbmx5IHRoZSByZWYgY2hhbmdlc1xuICAgICAgaWYgKCEoMCwgX2lzRW1wdHkyLmRlZmF1bHQpKG5leHRQcm9wcy5vcHRpb25zKSAmJiAhKDAsIF9zaGFsbG93RXF1YWwyLmRlZmF1bHQpKHRoaXMucHJvcHMub3B0aW9ucywgbmV4dFByb3BzLm9wdGlvbnMpKSB7XG4gICAgICAgIHZhciBtYXBQbGFpbk9iamVjdHMgPSAoMCwgX3BpY2syLmRlZmF1bHQpKHRoaXMubWFwc18sIF9pc1BsYWluT2JqZWN0Mi5kZWZhdWx0KTtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB0eXBlb2YgbmV4dFByb3BzLm9wdGlvbnMgPT09ICdmdW5jdGlvbicgPyBuZXh0UHJvcHMub3B0aW9ucyhtYXBQbGFpbk9iamVjdHMpIDogbmV4dFByb3BzLm9wdGlvbnM7XG4gICAgICAgIC8vIHJlbW92ZSB6b29tLCBjZW50ZXIgYW5kIGRyYWdnYWJsZSBvcHRpb25zIGFzIHRoZXNlIGFyZSBtYW5hZ2VkIGJ5IGdvb2dsZS1tYXBzLXJlYWN0XG4gICAgICAgIG9wdGlvbnMgPSAoMCwgX29taXQyLmRlZmF1bHQpKG9wdGlvbnMsIFsnem9vbScsICdjZW50ZXInLCAnZHJhZ2dhYmxlJ10pO1xuXG4gICAgICAgIGlmICgnbWluWm9vbScgaW4gb3B0aW9ucykge1xuICAgICAgICAgIHZhciBtaW5ab29tID0gdGhpcy5fY29tcHV0ZU1pblpvb20ob3B0aW9ucy5taW5ab29tKTtcbiAgICAgICAgICBvcHRpb25zLm1pblpvb20gPSBfY2hlY2tNaW5ab29tKG9wdGlvbnMubWluWm9vbSwgbWluWm9vbSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm1hcF8uc2V0T3B0aW9ucyhvcHRpb25zKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCEoMCwgX3NoYWxsb3dFcXVhbDIuZGVmYXVsdCkobmV4dFByb3BzLmxheWVyVHlwZXMsIHRoaXMucHJvcHMubGF5ZXJUeXBlcykpIHtcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5sYXllcnNfKS5mb3JFYWNoKGZ1bmN0aW9uIChsYXllcktleSkge1xuICAgICAgICAgIF90aGlzMy5sYXllcnNfW2xheWVyS2V5XS5zZXRNYXAobnVsbCk7XG4gICAgICAgICAgZGVsZXRlIF90aGlzMy5sYXllcnNfW2xheWVyS2V5XTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX3NldExheWVycyhuZXh0UHJvcHMubGF5ZXJUeXBlcyk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmhlYXRtYXAgJiYgISgwLCBfc2hhbGxvd0VxdWFsMi5kZWZhdWx0KShuZXh0UHJvcHMuaGVhdG1hcC5wb3NpdGlvbnMsIHRoaXMucHJvcHMuaGVhdG1hcC5wb3NpdGlvbnMpKSB7XG4gICAgICAgIHRoaXMuaGVhdG1hcC5zZXREYXRhKG5leHRQcm9wcy5oZWF0bWFwLnBvc2l0aW9ucy5tYXAoZnVuY3Rpb24gKHApIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbG9jYXRpb246IG5ldyBfdGhpczMubWFwc18uTGF0TG5nKHAubGF0LCBwLmxuZyksXG4gICAgICAgICAgICB3ZWlnaHQ6IHAud2VpZ2h0XG4gICAgICAgICAgfTtcbiAgICAgICAgfSkpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBHb29nbGVNYXAucHJvdG90eXBlLnNob3VsZENvbXBvbmVudFVwZGF0ZSA9IGZ1bmN0aW9uIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgIC8vIGRyYWdnYWJsZSBkb2VzIG5vdCBhZmZlY3QgaW5uZXIgY29tcG9uZW50c1xuICAgIHJldHVybiAhKDAsIF9zaGFsbG93RXF1YWwyLmRlZmF1bHQpKCgwLCBfb21pdDIuZGVmYXVsdCkodGhpcy5wcm9wcywgWydkcmFnZ2FibGUnXSksICgwLCBfb21pdDIuZGVmYXVsdCkobmV4dFByb3BzLCBbJ2RyYWdnYWJsZSddKSkgfHwgISgwLCBfc2hhbGxvd0VxdWFsMi5kZWZhdWx0KSh0aGlzLnN0YXRlLCBuZXh0U3RhdGUpO1xuICB9O1xuXG4gIEdvb2dsZU1hcC5wcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIHRoaXMubWFya2Vyc0Rpc3BhdGNoZXJfLmVtaXQoJ2tPTl9DSEFOR0UnKTtcblxuICAgIGlmICghKDAsIF9zaGFsbG93RXF1YWwyLmRlZmF1bHQpKHRoaXMucHJvcHMuaG92ZXJEaXN0YW5jZSwgcHJldlByb3BzLmhvdmVyRGlzdGFuY2UpKSB7XG4gICAgICB0aGlzLm1hcmtlcnNEaXNwYXRjaGVyXy5lbWl0KCdrT05fTU9VU0VfUE9TSVRJT05fQ0hBTkdFJyk7XG4gICAgfVxuICB9O1xuXG4gIEdvb2dsZU1hcC5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLm1vdW50ZWRfID0gZmFsc2U7XG4gICAgdmFyIG1hcERvbSA9IF9yZWFjdERvbTIuZGVmYXVsdC5maW5kRE9NTm9kZSh0aGlzLmdvb2dsZU1hcERvbV8pO1xuICAgIGlmIChtYXBEb20pIHtcbiAgICAgIG1hcERvbS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLl9vbk1hcE1vdXNlRG93bk5hdGl2ZSwgdHJ1ZSk7XG4gICAgfVxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9vbldpbmRvd1Jlc2l6ZSk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9vbktleURvd25DYXB0dXJlKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuX29uQ2hpbGRNb3VzZVVwLCBmYWxzZSk7XG4gICAgaWYgKHRoaXMucHJvcHMucmVzZXRCb3VuZHNPblJlc2l6ZSkge1xuICAgICAgX2RldGVjdEVsZW1lbnRSZXNpemUyLmRlZmF1bHQucmVtb3ZlUmVzaXplTGlzdGVuZXIobWFwRG9tLCB0aGlzLl9tYXBEb21SZXNpemVDYWxsYmFjayk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3ZlcmxheV8pIHtcbiAgICAgIC8vIHRoaXMgdHJpZ2dlcnMgb3ZlcmxheV8ub25SZW1vdmUoKSwgd2hpY2ggd2lsbCB1bm1vdW50IHRoZSA8R29vZ2xlTWFwTWFya2Vycy8+XG4gICAgICB0aGlzLm92ZXJsYXlfLnNldE1hcChudWxsKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5tYXBzXyAmJiB0aGlzLm1hcF8pIHtcbiAgICAgIC8vIGZpeCBnb29nbGUsIGFzIG90aGVyd2lzZSBsaXN0ZW5lcnMgd29ya3MgZXZlbiB3aXRob3V0IG1hcFxuICAgICAgdGhpcy5tYXBfLnNldE9wdGlvbnMoeyBzY3JvbGx3aGVlbDogZmFsc2UgfSk7XG4gICAgICB0aGlzLm1hcHNfLmV2ZW50LmNsZWFySW5zdGFuY2VMaXN0ZW5lcnModGhpcy5tYXBfKTtcbiAgICB9XG5cbiAgICB0aGlzLm1hcF8gPSBudWxsO1xuICAgIHRoaXMubWFwc18gPSBudWxsO1xuICAgIHRoaXMubWFya2Vyc0Rpc3BhdGNoZXJfLmRpc3Bvc2UoKTtcblxuICAgIHRoaXMucmVzZXRTaXplT25JZGxlXyA9IGZhbHNlO1xuXG4gICAgZGVsZXRlIHRoaXMubWFwXztcbiAgICBkZWxldGUgdGhpcy5tYXJrZXJzRGlzcGF0Y2hlcl87XG4gIH07XG4gIC8vIGNhbGMgbWluWm9vbSBpZiBtYXAgc2l6ZSBhdmFpbGFibGVcbiAgLy8gaXQncyBiZXR0ZXIgdG8gbm90IHNldCBtaW5ab29tIGxlc3MgdGhhbiB0aGlzIGNhbGN1bGF0aW9uIGdpdmVzXG4gIC8vIG90aGVyd2lzZSB0aGVyZSBpcyBubyBob21lb21vcnBoaXNtIGJldHdlZW4gc2NyZWVuIGNvb3JkaW5hdGVzIGFuZCBtYXBcbiAgLy8gKG9uZSBtYXAgY29vcmRpbmF0ZSBjYW4gaGF2ZSBkaWZmZXJlbnQgc2NyZWVuIGNvb3JkaW5hdGVzKVxuXG5cbiAgLy8gdGhpcyBtZXRob2Qgd29ya3Mgb25seSBpZiB0aGlzLnByb3BzLm9uQ2hpbGRNb3VzZURvd24gd2FzIGNhbGxlZFxuXG5cbiAgLy8gdGhpcyBtZXRob2Qgd29ya3Mgb25seSBpZiB0aGlzLnByb3BzLm9uQ2hpbGRNb3VzZURvd24gd2FzIGNhbGxlZFxuXG5cbiAgLy8gS19JRExFX0NMSUNLX1RJTUVPVVQgLSBsb29rcyBsaWtlIDMwMCBpcyBlbm91Z2hcblxuXG4gIC8vIGdtYXAgY2FuJ3QgcHJldmVudCBtYXAgZHJhZyBpZiBtb3VzZWRvd24gZXZlbnQgYWxyZWFkeSBvY2N1cmVkXG4gIC8vIHRoZSBvbmx5IHdvcmthcm91bmQgSSBmaW5kIGlzIHByZXZlbnQgbW91c2Vkb3duIG5hdGl2ZSBicm93c2VyIGV2ZW50XG5cblxuICBHb29nbGVNYXAucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgb3ZlcmxheSA9IHRoaXMuc3RhdGUub3ZlcmxheTtcbiAgICB2YXIgbWFwTWFya2VyUHJlcmVuZGVyID0gIW92ZXJsYXkgPyBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfZ29vZ2xlX21hcF9tYXJrZXJzX3ByZXJlbmRlcjIuZGVmYXVsdCwge1xuICAgICAgZXhwZXJpbWVudGFsOiB0aGlzLnByb3BzLmV4cGVyaW1lbnRhbCxcbiAgICAgIG9uQ2hpbGRDbGljazogdGhpcy5fb25DaGlsZENsaWNrLFxuICAgICAgb25DaGlsZE1vdXNlRG93bjogdGhpcy5fb25DaGlsZE1vdXNlRG93bixcbiAgICAgIG9uQ2hpbGRNb3VzZUVudGVyOiB0aGlzLl9vbkNoaWxkTW91c2VFbnRlcixcbiAgICAgIG9uQ2hpbGRNb3VzZUxlYXZlOiB0aGlzLl9vbkNoaWxkTW91c2VMZWF2ZSxcbiAgICAgIGdlb1NlcnZpY2U6IHRoaXMuZ2VvU2VydmljZV8sXG4gICAgICBpbnNpZGVNYXBQYW5lczogZmFsc2UsXG4gICAgICBkaXN0YW5jZVRvTW91c2U6IHRoaXMucHJvcHMuZGlzdGFuY2VUb01vdXNlLFxuICAgICAgZ2V0SG92ZXJEaXN0YW5jZTogdGhpcy5fZ2V0SG92ZXJEaXN0YW5jZSxcbiAgICAgIGRpc3BhdGNoZXI6IHRoaXMubWFya2Vyc0Rpc3BhdGNoZXJfXG4gICAgfSkgOiBudWxsO1xuXG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7XG4gICAgICAgIHN0eWxlOiB0aGlzLnByb3BzLnN0eWxlLFxuICAgICAgICBvbk1vdXNlTW92ZTogdGhpcy5fb25NYXBNb3VzZU1vdmUsXG4gICAgICAgIG9uTW91c2VEb3duQ2FwdHVyZTogdGhpcy5fb25NYXBNb3VzZURvd25DYXB0dXJlLFxuICAgICAgICBvbkNsaWNrOiB0aGlzLl9vbk1hcENsaWNrXG4gICAgICB9LFxuICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX2dvb2dsZV9tYXBfbWFwMi5kZWZhdWx0LCB7IHJlZ2lzdGVyQ2hpbGQ6IHRoaXMuX3JlZ2lzdGVyQ2hpbGQgfSksXG4gICAgICBJU19SRUFDVF8xNiAmJiBvdmVybGF5ICYmIGNyZWF0ZVBvcnRhbCh0aGlzLl9yZW5kZXJQb3J0YWwoKSwgb3ZlcmxheSksXG4gICAgICBtYXBNYXJrZXJQcmVyZW5kZXJcbiAgICApO1xuICB9O1xuXG4gIHJldHVybiBHb29nbGVNYXA7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5Hb29nbGVNYXAucHJvcFR5cGVzID0ge1xuICBhcGlLZXk6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBib290c3RyYXBVUkxLZXlzOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmFueSxcblxuICBkZWZhdWx0Q2VudGVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5hcnJheSwgX3Byb3BUeXBlczIuZGVmYXVsdC5zaGFwZSh7XG4gICAgbGF0OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgICBsbmc6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyXG4gIH0pXSksXG4gIGNlbnRlcjogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQuYXJyYXksIF9wcm9wVHlwZXMyLmRlZmF1bHQuc2hhcGUoe1xuICAgIGxhdDogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gICAgbG5nOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlclxuICB9KV0pLFxuICBkZWZhdWx0Wm9vbTogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIHpvb206IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICBvbkJvdW5kc0NoYW5nZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBvbkNoYW5nZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBvbkNsaWNrOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIG9uQ2hpbGRDbGljazogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBvbkNoaWxkTW91c2VEb3duOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIG9uQ2hpbGRNb3VzZVVwOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIG9uQ2hpbGRNb3VzZU1vdmU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgb25DaGlsZE1vdXNlRW50ZXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgb25DaGlsZE1vdXNlTGVhdmU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgb25ab29tQW5pbWF0aW9uU3RhcnQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgb25ab29tQW5pbWF0aW9uRW5kOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIG9uRHJhZzogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBvbk1hcFR5cGVJZENoYW5nZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBvblRpbGVzTG9hZGVkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIG9wdGlvbnM6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYW55LFxuICBkaXN0YW5jZVRvTW91c2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgaG92ZXJEaXN0YW5jZTogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIGRlYm91bmNlZDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBtYXJnaW46IF9wcm9wVHlwZXMyLmRlZmF1bHQuYXJyYXksXG4gIGdvb2dsZU1hcExvYWRlcjogX3Byb3BUeXBlczIuZGVmYXVsdC5hbnksXG4gIG9uR29vZ2xlQXBpTG9hZGVkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIHllc0lXYW50VG9Vc2VHb29nbGVNYXBBcGlJbnRlcm5hbHM6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgZHJhZ2dhYmxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIHN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmFueSxcbiAgcmVzZXRCb3VuZHNPblJlc2l6ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBsYXllclR5cGVzOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmFycmF5T2YoX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcpIC8vIFsnVHJhbnNpdExheWVyJywgJ1RyYWZmaWNMYXllciddXG59O1xuR29vZ2xlTWFwLmRlZmF1bHRQcm9wcyA9IHtcbiAgZGlzdGFuY2VUb01vdXNlOiBmdW5jdGlvbiBkaXN0YW5jZVRvTW91c2UocHQsIG1vdXNlUG9zIC8qICwgbWFya2VyUHJvcHMgKi8pIHtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KChwdC54IC0gbW91c2VQb3MueCkgKiAocHQueCAtIG1vdXNlUG9zLngpICsgKHB0LnkgLSBtb3VzZVBvcy55KSAqIChwdC55IC0gbW91c2VQb3MueSkpO1xuICB9LFxuXG4gIGhvdmVyRGlzdGFuY2U6IDMwLFxuICBkZWJvdW5jZWQ6IHRydWUsXG4gIG9wdGlvbnM6IGRlZmF1bHRPcHRpb25zXyxcbiAgZ29vZ2xlTWFwTG9hZGVyOiBfZ29vZ2xlX21hcF9sb2FkZXIyLmRlZmF1bHQsXG4gIHllc0lXYW50VG9Vc2VHb29nbGVNYXBBcGlJbnRlcm5hbHM6IGZhbHNlLFxuICBzdHlsZToge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgbWFyZ2luOiAwLFxuICAgIHBhZGRpbmc6IDAsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgfSxcbiAgbGF5ZXJUeXBlczogW10sXG4gIGhlYXRtYXA6IHt9LFxuICBoZWF0bWFwTGlicmFyeTogZmFsc2Vcbn07XG5Hb29nbGVNYXAuZ29vZ2xlTWFwTG9hZGVyID0gX2dvb2dsZV9tYXBfbG9hZGVyMi5kZWZhdWx0O1xuZXhwb3J0cy5kZWZhdWx0ID0gR29vZ2xlTWFwOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBzdHlsZSA9IHtcbiAgd2lkdGg6ICcxMDAlJyxcbiAgaGVpZ2h0OiAnMTAwJScsXG4gIGxlZnQ6IDAsXG4gIHRvcDogMCxcbiAgbWFyZ2luOiAwLFxuICBwYWRkaW5nOiAwLFxuICBwb3NpdGlvbjogJ2Fic29sdXRlJ1xufTtcblxudmFyIEdvb2dsZU1hcE1hcCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhHb29nbGVNYXBNYXAsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEdvb2dsZU1hcE1hcCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgR29vZ2xlTWFwTWFwKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgR29vZ2xlTWFwTWFwLnByb3RvdHlwZS5zaG91bGRDb21wb25lbnRVcGRhdGUgPSBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUoKSB7XG4gICAgcmV0dXJuIGZhbHNlOyAvLyBkaXNhYmxlIHJlYWN0IG9uIHRoaXMgZGl2XG4gIH07XG5cbiAgR29vZ2xlTWFwTWFwLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIHJlZ2lzdGVyQ2hpbGQgPSB0aGlzLnByb3BzLnJlZ2lzdGVyQ2hpbGQ7XG5cbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgcmVmOiByZWdpc3RlckNoaWxkLCBzdHlsZTogc3R5bGUgfSk7XG4gIH07XG5cbiAgcmV0dXJuIEdvb2dsZU1hcE1hcDtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEdvb2dsZU1hcE1hcDsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfb21pdCA9IHJlcXVpcmUoJy4vdXRpbHMvb21pdCcpO1xuXG52YXIgX29taXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb21pdCk7XG5cbnZhciBfc2hhbGxvd0VxdWFsID0gcmVxdWlyZSgnLi91dGlscy9zaGFsbG93RXF1YWwnKTtcblxudmFyIF9zaGFsbG93RXF1YWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2hhbGxvd0VxdWFsKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG4vLyB1dGlsc1xuXG5cbnZhciBtYWluU3R5bGUgPSB7XG4gIHdpZHRoOiAnMTAwJScsXG4gIGhlaWdodDogJzEwMCUnLFxuICBsZWZ0OiAwLFxuICB0b3A6IDAsXG4gIG1hcmdpbjogMCxcbiAgcGFkZGluZzogMCxcbiAgcG9zaXRpb246ICdhYnNvbHV0ZSdcbn07XG5cbnZhciBzdHlsZSA9IHtcbiAgd2lkdGg6IDAsXG4gIGhlaWdodDogMCxcbiAgbGVmdDogMCxcbiAgdG9wOiAwLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnXG59O1xuXG52YXIgR29vZ2xlTWFwTWFya2VycyA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhHb29nbGVNYXBNYXJrZXJzLCBfQ29tcG9uZW50KTtcblxuICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9mb3JiaWQtcHJvcC10eXBlcyAqL1xuICBmdW5jdGlvbiBHb29nbGVNYXBNYXJrZXJzKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEdvb2dsZU1hcE1hcmtlcnMpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0NvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfdGhpcy5fZ2V0U3RhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjaGlsZHJlbjogX3RoaXMucHJvcHMuZGlzcGF0Y2hlci5nZXRDaGlsZHJlbigpLFxuICAgICAgICB1cGRhdGVDb3VudGVyOiBfdGhpcy5wcm9wcy5kaXNwYXRjaGVyLmdldFVwZGF0ZUNvdW50ZXIoKVxuICAgICAgfTtcbiAgICB9O1xuXG4gICAgX3RoaXMuX29uQ2hhbmdlSGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghX3RoaXMuZGltZW5zaW9uc0NhY2hlXykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBwcmV2Q2hpbGRDb3VudCA9IChfdGhpcy5zdGF0ZS5jaGlsZHJlbiB8fCBbXSkubGVuZ3RoO1xuICAgICAgdmFyIHN0YXRlID0gX3RoaXMuX2dldFN0YXRlKCk7XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHN0YXRlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAoc3RhdGUuY2hpbGRyZW4gfHwgW10pLmxlbmd0aCAhPT0gcHJldkNoaWxkQ291bnQgJiYgX3RoaXMuX29uTW91c2VDaGFuZ2VIYW5kbGVyKCk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3RoaXMuX29uQ2hpbGRDbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkNoaWxkQ2xpY2spIHtcbiAgICAgICAgaWYgKF90aGlzLmhvdmVyQ2hpbGRQcm9wc18pIHtcbiAgICAgICAgICB2YXIgaG92ZXJLZXkgPSBfdGhpcy5ob3ZlcktleV87XG4gICAgICAgICAgdmFyIGNoaWxkUHJvcHMgPSBfdGhpcy5ob3ZlckNoaWxkUHJvcHNfO1xuICAgICAgICAgIC8vIGNsaWNrIHdvcmtzIG9ubHkgb24gaG92ZXJlZCBpdGVtXG4gICAgICAgICAgX3RoaXMucHJvcHMub25DaGlsZENsaWNrKGhvdmVyS2V5LCBjaGlsZFByb3BzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5fb25DaGlsZE1vdXNlRG93biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkNoaWxkTW91c2VEb3duKSB7XG4gICAgICAgIGlmIChfdGhpcy5ob3ZlckNoaWxkUHJvcHNfKSB7XG4gICAgICAgICAgdmFyIGhvdmVyS2V5ID0gX3RoaXMuaG92ZXJLZXlfO1xuICAgICAgICAgIHZhciBjaGlsZFByb3BzID0gX3RoaXMuaG92ZXJDaGlsZFByb3BzXztcbiAgICAgICAgICAvLyB3b3JrcyBvbmx5IG9uIGhvdmVyZWQgaXRlbVxuICAgICAgICAgIF90aGlzLnByb3BzLm9uQ2hpbGRNb3VzZURvd24oaG92ZXJLZXksIGNoaWxkUHJvcHMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLl9vbkNoaWxkTW91c2VFbnRlciA9IGZ1bmN0aW9uIChob3ZlcktleSwgY2hpbGRQcm9wcykge1xuICAgICAgaWYgKCFfdGhpcy5kaW1lbnNpb25zQ2FjaGVfKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKF90aGlzLnByb3BzLm9uQ2hpbGRNb3VzZUVudGVyKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uQ2hpbGRNb3VzZUVudGVyKGhvdmVyS2V5LCBjaGlsZFByb3BzKTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMuaG92ZXJDaGlsZFByb3BzXyA9IGNoaWxkUHJvcHM7XG4gICAgICBfdGhpcy5ob3ZlcktleV8gPSBob3ZlcktleTtcbiAgICAgIF90aGlzLnNldFN0YXRlKHsgaG92ZXJLZXk6IGhvdmVyS2V5IH0pO1xuICAgIH07XG5cbiAgICBfdGhpcy5fb25DaGlsZE1vdXNlTGVhdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIV90aGlzLmRpbWVuc2lvbnNDYWNoZV8pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgaG92ZXJLZXkgPSBfdGhpcy5ob3ZlcktleV87XG4gICAgICB2YXIgY2hpbGRQcm9wcyA9IF90aGlzLmhvdmVyQ2hpbGRQcm9wc187XG5cbiAgICAgIGlmIChob3ZlcktleSAhPT0gdW5kZWZpbmVkICYmIGhvdmVyS2V5ICE9PSBudWxsKSB7XG4gICAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkNoaWxkTW91c2VMZWF2ZSkge1xuICAgICAgICAgIF90aGlzLnByb3BzLm9uQ2hpbGRNb3VzZUxlYXZlKGhvdmVyS2V5LCBjaGlsZFByb3BzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF90aGlzLmhvdmVyS2V5XyA9IG51bGw7XG4gICAgICAgIF90aGlzLmhvdmVyQ2hpbGRQcm9wc18gPSBudWxsO1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IGhvdmVyS2V5OiBudWxsIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5fb25Nb3VzZUFsbG93ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgIF90aGlzLl9vbkNoaWxkTW91c2VMZWF2ZSgpO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5hbGxvd01vdXNlXyA9IHZhbHVlO1xuICAgIH07XG5cbiAgICBfdGhpcy5fb25Nb3VzZUNoYW5nZUhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoX3RoaXMuYWxsb3dNb3VzZV8pIHtcbiAgICAgICAgX3RoaXMuX29uTW91c2VDaGFuZ2VIYW5kbGVyUmFmKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLl9vbk1vdXNlQ2hhbmdlSGFuZGxlclJhZiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghX3RoaXMuZGltZW5zaW9uc0NhY2hlXykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBtcCA9IF90aGlzLnByb3BzLmRpc3BhdGNoZXIuZ2V0TW91c2VQb3NpdGlvbigpO1xuXG4gICAgICBpZiAobXApIHtcbiAgICAgICAgdmFyIGRpc3RhbmNlcyA9IFtdO1xuICAgICAgICB2YXIgaG92ZXJEaXN0YW5jZSA9IF90aGlzLnByb3BzLmdldEhvdmVyRGlzdGFuY2UoKTtcblxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuQ2hpbGRyZW4uZm9yRWFjaChfdGhpcy5zdGF0ZS5jaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkLCBjaGlsZEluZGV4KSB7XG4gICAgICAgICAgaWYgKCFjaGlsZCkgcmV0dXJuO1xuICAgICAgICAgIC8vIGxheWVyc1xuICAgICAgICAgIGlmIChjaGlsZC5wcm9wcy5sYXRMbmcgPT09IHVuZGVmaW5lZCAmJiBjaGlsZC5wcm9wcy5sYXQgPT09IHVuZGVmaW5lZCAmJiBjaGlsZC5wcm9wcy5sbmcgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBjaGlsZEtleSA9IGNoaWxkLmtleSAhPT0gdW5kZWZpbmVkICYmIGNoaWxkLmtleSAhPT0gbnVsbCA/IGNoaWxkLmtleSA6IGNoaWxkSW5kZXg7XG4gICAgICAgICAgdmFyIGRpc3QgPSBfdGhpcy5wcm9wcy5kaXN0YW5jZVRvTW91c2UoX3RoaXMuZGltZW5zaW9uc0NhY2hlX1tjaGlsZEtleV0sIG1wLCBjaGlsZC5wcm9wcyk7XG4gICAgICAgICAgaWYgKGRpc3QgPCBob3ZlckRpc3RhbmNlKSB7XG4gICAgICAgICAgICBkaXN0YW5jZXMucHVzaCh7XG4gICAgICAgICAgICAgIGtleTogY2hpbGRLZXksXG4gICAgICAgICAgICAgIGRpc3Q6IGRpc3QsXG4gICAgICAgICAgICAgIHByb3BzOiBjaGlsZC5wcm9wc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoZGlzdGFuY2VzLmxlbmd0aCkge1xuICAgICAgICAgIGRpc3RhbmNlcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICByZXR1cm4gYS5kaXN0IC0gYi5kaXN0O1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHZhciBob3ZlcktleSA9IGRpc3RhbmNlc1swXS5rZXk7XG4gICAgICAgICAgdmFyIGNoaWxkUHJvcHMgPSBkaXN0YW5jZXNbMF0ucHJvcHM7XG5cbiAgICAgICAgICBpZiAoX3RoaXMuaG92ZXJLZXlfICE9PSBob3ZlcktleSkge1xuICAgICAgICAgICAgX3RoaXMuX29uQ2hpbGRNb3VzZUxlYXZlKCk7XG5cbiAgICAgICAgICAgIF90aGlzLl9vbkNoaWxkTW91c2VFbnRlcihob3ZlcktleSwgY2hpbGRQcm9wcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF90aGlzLl9vbkNoaWxkTW91c2VMZWF2ZSgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfdGhpcy5fb25DaGlsZE1vdXNlTGVhdmUoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuX2dldERpbWVuc2lvbnMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB2YXIgY2hpbGRLZXkgPSBrZXk7XG4gICAgICByZXR1cm4gX3RoaXMuZGltZW5zaW9uc0NhY2hlX1tjaGlsZEtleV07XG4gICAgfTtcblxuICAgIF90aGlzLnByb3BzLmRpc3BhdGNoZXIub24oJ2tPTl9DSEFOR0UnLCBfdGhpcy5fb25DaGFuZ2VIYW5kbGVyKTtcbiAgICBfdGhpcy5wcm9wcy5kaXNwYXRjaGVyLm9uKCdrT05fTU9VU0VfUE9TSVRJT05fQ0hBTkdFJywgX3RoaXMuX29uTW91c2VDaGFuZ2VIYW5kbGVyKTtcbiAgICBfdGhpcy5wcm9wcy5kaXNwYXRjaGVyLm9uKCdrT05fQ0xJQ0snLCBfdGhpcy5fb25DaGlsZENsaWNrKTtcbiAgICBfdGhpcy5wcm9wcy5kaXNwYXRjaGVyLm9uKCdrT05fTURPV04nLCBfdGhpcy5fb25DaGlsZE1vdXNlRG93bik7XG5cbiAgICBfdGhpcy5kaW1lbnNpb25zQ2FjaGVfID0ge307XG4gICAgX3RoaXMuaG92ZXJLZXlfID0gbnVsbDtcbiAgICBfdGhpcy5ob3ZlckNoaWxkUHJvcHNfID0gbnVsbDtcbiAgICBfdGhpcy5hbGxvd01vdXNlXyA9IHRydWU7XG5cbiAgICBfdGhpcy5zdGF0ZSA9IF9leHRlbmRzKHt9LCBfdGhpcy5fZ2V0U3RhdGUoKSwgeyBob3ZlcktleTogbnVsbCB9KTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cbiAgLyogZXNsaW50LWVuYWJsZSByZWFjdC9mb3JiaWQtcHJvcC10eXBlcyAqL1xuXG4gIEdvb2dsZU1hcE1hcmtlcnMucHJvdG90eXBlLnNob3VsZENvbXBvbmVudFVwZGF0ZSA9IGZ1bmN0aW9uIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgIGlmICh0aGlzLnByb3BzLmV4cGVyaW1lbnRhbCA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuICEoMCwgX3NoYWxsb3dFcXVhbDIuZGVmYXVsdCkodGhpcy5wcm9wcywgbmV4dFByb3BzKSB8fCAhKDAsIF9zaGFsbG93RXF1YWwyLmRlZmF1bHQpKCgwLCBfb21pdDIuZGVmYXVsdCkodGhpcy5zdGF0ZSwgWydob3ZlcktleSddKSwgKDAsIF9vbWl0Mi5kZWZhdWx0KShuZXh0U3RhdGUsIFsnaG92ZXJLZXknXSkpO1xuICAgIH1cblxuICAgIHJldHVybiAhKDAsIF9zaGFsbG93RXF1YWwyLmRlZmF1bHQpKHRoaXMucHJvcHMsIG5leHRQcm9wcykgfHwgISgwLCBfc2hhbGxvd0VxdWFsMi5kZWZhdWx0KSh0aGlzLnN0YXRlLCBuZXh0U3RhdGUpO1xuICB9O1xuXG4gIEdvb2dsZU1hcE1hcmtlcnMucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaGVyLnJlbW92ZUxpc3RlbmVyKCdrT05fQ0hBTkdFJywgdGhpcy5fb25DaGFuZ2VIYW5kbGVyKTtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoZXIucmVtb3ZlTGlzdGVuZXIoJ2tPTl9NT1VTRV9QT1NJVElPTl9DSEFOR0UnLCB0aGlzLl9vbk1vdXNlQ2hhbmdlSGFuZGxlcik7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaGVyLnJlbW92ZUxpc3RlbmVyKCdrT05fQ0xJQ0snLCB0aGlzLl9vbkNoaWxkQ2xpY2spO1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2hlci5yZW1vdmVMaXN0ZW5lcigna09OX01ET1dOJywgdGhpcy5fb25DaGlsZE1vdXNlRG93bik7XG5cbiAgICB0aGlzLmRpbWVuc2lvbnNDYWNoZV8gPSBudWxsO1xuICB9O1xuXG4gIEdvb2dsZU1hcE1hcmtlcnMucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBtYWluRWxlbWVudFN0eWxlID0gdGhpcy5wcm9wcy5zdHlsZSB8fCBtYWluU3R5bGU7XG4gICAgdGhpcy5kaW1lbnNpb25zQ2FjaGVfID0ge307XG5cbiAgICB2YXIgbWFya2VycyA9IF9yZWFjdDIuZGVmYXVsdC5DaGlsZHJlbi5tYXAodGhpcy5zdGF0ZS5jaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkLCBjaGlsZEluZGV4KSB7XG4gICAgICBpZiAoIWNoaWxkKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgaWYgKGNoaWxkLnByb3BzLmxhdExuZyA9PT0gdW5kZWZpbmVkICYmIGNoaWxkLnByb3BzLmxhdCA9PT0gdW5kZWZpbmVkICYmIGNoaWxkLnByb3BzLmxuZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICAgICAgJGdlb1NlcnZpY2U6IF90aGlzMi5wcm9wcy5nZW9TZXJ2aWNlLFxuICAgICAgICAgICRvbk1vdXNlQWxsb3c6IF90aGlzMi5fb25Nb3VzZUFsbG93LFxuICAgICAgICAgICRwcmVyZW5kZXI6IF90aGlzMi5wcm9wcy5wcmVyZW5kZXJcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBsYXRMbmcgPSBjaGlsZC5wcm9wcy5sYXRMbmcgIT09IHVuZGVmaW5lZCA/IGNoaWxkLnByb3BzLmxhdExuZyA6IHsgbGF0OiBjaGlsZC5wcm9wcy5sYXQsIGxuZzogY2hpbGQucHJvcHMubG5nIH07XG5cbiAgICAgIHZhciBwdCA9IF90aGlzMi5wcm9wcy5pbnNpZGVNYXBQYW5lcyA/IF90aGlzMi5wcm9wcy5nZW9TZXJ2aWNlLmZyb21MYXRMbmdUb0RpdlBpeGVsKGxhdExuZykgOiBfdGhpczIucHJvcHMuZ2VvU2VydmljZS5mcm9tTGF0TG5nVG9DZW50ZXJQaXhlbChsYXRMbmcpO1xuXG4gICAgICB2YXIgc3R5bGVQdFBvcyA9IHtcbiAgICAgICAgbGVmdDogcHQueCxcbiAgICAgICAgdG9wOiBwdC55XG4gICAgICB9O1xuXG4gICAgICAvLyBJZiB0aGUgY29tcG9uZW50IGhhcyBhIHNvdXRoZWFzdCBjb3JuZXIgZGVmaW5lZCAoZWl0aGVyIGFzIGEgTGF0TG5nLCBvciBhIHNlcGFyYXRlXG4gICAgICAvLyBsYXQgYW5kIGxuZyBwYWlyKSwgc2V0IHRoZSB3aWR0aCBhbmQgaGVpZ2h0IGJhc2VkIG9uIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSBub3J0aHdlc3RcbiAgICAgIC8vIGFuZCB0aGUgc291dGhlYXN0IGNvcm5lciB0byBsb2NrIHRoZSBvdmVybGF5IHRvIHRoZSBjb3JyZWN0IGdlb2dyYXBoaWMgYm91bmRzLlxuICAgICAgaWYgKGNoaWxkLnByb3BzLnNlTGF0TG5nICE9PSB1bmRlZmluZWQgfHwgY2hpbGQucHJvcHMuc2VMYXQgIT09IHVuZGVmaW5lZCAmJiBjaGlsZC5wcm9wcy5zZUxuZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhciBzZUxhdExuZyA9IGNoaWxkLnByb3BzLnNlTGF0TG5nICE9PSB1bmRlZmluZWQgPyBjaGlsZC5wcm9wcy5zZUxhdExuZyA6IHsgbGF0OiBjaGlsZC5wcm9wcy5zZUxhdCwgbG5nOiBjaGlsZC5wcm9wcy5zZUxuZyB9O1xuXG4gICAgICAgIHZhciBzZVB0ID0gX3RoaXMyLnByb3BzLmluc2lkZU1hcFBhbmVzID8gX3RoaXMyLnByb3BzLmdlb1NlcnZpY2UuZnJvbUxhdExuZ1RvRGl2UGl4ZWwoc2VMYXRMbmcpIDogX3RoaXMyLnByb3BzLmdlb1NlcnZpY2UuZnJvbUxhdExuZ1RvQ2VudGVyUGl4ZWwoc2VMYXRMbmcpO1xuXG4gICAgICAgIHN0eWxlUHRQb3Mud2lkdGggPSBzZVB0LnggLSBwdC54O1xuICAgICAgICBzdHlsZVB0UG9zLmhlaWdodCA9IHNlUHQueSAtIHB0Lnk7XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250YWluZXJQdCA9IF90aGlzMi5wcm9wcy5nZW9TZXJ2aWNlLmZyb21MYXRMbmdUb0NvbnRhaW5lclBpeGVsKGxhdExuZyk7XG5cbiAgICAgIC8vIHRvIHByZXZlbnQgcmVyZW5kZXIgb24gY2hpbGQgZWxlbWVudCBpIG5lZWQgdG8gcGFzc1xuICAgICAgLy8gY29uc3QgcGFyYW1zICRnZXREaW1lbnNpb25zIGFuZCAkZGltZW5zaW9uS2V5IGluc3RlYWQgb2YgZGltZW5zaW9uIG9iamVjdFxuICAgICAgdmFyIGNoaWxkS2V5ID0gY2hpbGQua2V5ICE9PSB1bmRlZmluZWQgJiYgY2hpbGQua2V5ICE9PSBudWxsID8gY2hpbGQua2V5IDogY2hpbGRJbmRleDtcblxuICAgICAgX3RoaXMyLmRpbWVuc2lvbnNDYWNoZV9bY2hpbGRLZXldID0gX2V4dGVuZHMoe1xuICAgICAgICB4OiBjb250YWluZXJQdC54LFxuICAgICAgICB5OiBjb250YWluZXJQdC55XG4gICAgICB9LCBsYXRMbmcpO1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7XG4gICAgICAgICAga2V5OiBjaGlsZEtleSxcbiAgICAgICAgICBzdHlsZTogX2V4dGVuZHMoe30sIHN0eWxlLCBzdHlsZVB0UG9zKSxcbiAgICAgICAgICBjbGFzc05hbWU6IGNoaWxkLnByb3BzLiRtYXJrZXJIb2xkZXJDbGFzc05hbWVcbiAgICAgICAgfSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICAgICAgICRob3ZlcjogY2hpbGRLZXkgPT09IF90aGlzMi5zdGF0ZS5ob3ZlcktleSxcbiAgICAgICAgICAkZ2V0RGltZW5zaW9uczogX3RoaXMyLl9nZXREaW1lbnNpb25zLFxuICAgICAgICAgICRkaW1lbnNpb25LZXk6IGNoaWxkS2V5LFxuICAgICAgICAgICRnZW9TZXJ2aWNlOiBfdGhpczIucHJvcHMuZ2VvU2VydmljZSxcbiAgICAgICAgICAkb25Nb3VzZUFsbG93OiBfdGhpczIuX29uTW91c2VBbGxvdyxcbiAgICAgICAgICAkcHJlcmVuZGVyOiBfdGhpczIucHJvcHMucHJlcmVuZGVyXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7IHN0eWxlOiBtYWluRWxlbWVudFN0eWxlIH0sXG4gICAgICBtYXJrZXJzXG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gR29vZ2xlTWFwTWFya2Vycztcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbkdvb2dsZU1hcE1hcmtlcnMucHJvcFR5cGVzID0ge1xuICBnZW9TZXJ2aWNlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmFueSxcbiAgc3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYW55LFxuICBkaXN0YW5jZVRvTW91c2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgZGlzcGF0Y2hlcjogX3Byb3BUeXBlczIuZGVmYXVsdC5hbnksXG4gIG9uQ2hpbGRDbGljazogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBvbkNoaWxkTW91c2VEb3duOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIG9uQ2hpbGRNb3VzZUxlYXZlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIG9uQ2hpbGRNb3VzZUVudGVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIGdldEhvdmVyRGlzdGFuY2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgaW5zaWRlTWFwUGFuZXM6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgcHJlcmVuZGVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2xcbn07XG5Hb29nbGVNYXBNYXJrZXJzLmRlZmF1bHRQcm9wcyA9IHtcbiAgaW5zaWRlTWFwUGFuZXM6IGZhbHNlLFxuICBwcmVyZW5kZXI6IGZhbHNlXG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gR29vZ2xlTWFwTWFya2VyczsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChwcm9wcykge1xuICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgJ2RpdicsXG4gICAgeyBzdHlsZTogc3R5bGUgfSxcbiAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfZ29vZ2xlX21hcF9tYXJrZXJzMi5kZWZhdWx0LCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHsgcHJlcmVuZGVyOiB0cnVlIH0pKVxuICApO1xufTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2dvb2dsZV9tYXBfbWFya2VycyA9IHJlcXVpcmUoJy4vZ29vZ2xlX21hcF9tYXJrZXJzJyk7XG5cbnZhciBfZ29vZ2xlX21hcF9tYXJrZXJzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dvb2dsZV9tYXBfbWFya2Vycyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBzdHlsZSA9IHtcbiAgd2lkdGg6ICc1MCUnLFxuICBoZWlnaHQ6ICc1MCUnLFxuICBsZWZ0OiAnNTAlJyxcbiAgdG9wOiAnNTAlJyxcbiAgLy8gYmFja2dyb3VuZENvbG9yOiAncmVkJyxcbiAgbWFyZ2luOiAwLFxuICBwYWRkaW5nOiAwLFxuICBwb3NpdGlvbjogJ2Fic29sdXRlJ1xuICAvLyBvcGFjaXR5OiAwLjNcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdW5kZWZpbmVkO1xuXG52YXIgX2dvb2dsZV9tYXAgPSByZXF1aXJlKCcuL2dvb2dsZV9tYXAnKTtcblxudmFyIF9nb29nbGVfbWFwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dvb2dsZV9tYXApO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfZ29vZ2xlX21hcDIuZGVmYXVsdDsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgQkFTRV9VUkwgPSAnaHR0cHM6Ly9tYXBzJztcbnZhciBERUZBVUxUX1VSTCA9IEJBU0VfVVJMICsgJy5nb29nbGVhcGlzLmNvbSc7XG52YXIgQVBJX1BBVEggPSAnL21hcHMvYXBpL2pzP2NhbGxiYWNrPV8kX2dvb2dsZV9tYXBfaW5pdGlhbGl6ZV8kXyc7XG5cbnZhciBnZXRVcmwgPSBmdW5jdGlvbiBnZXRVcmwocmVnaW9uKSB7XG4gIGlmIChyZWdpb24gJiYgcmVnaW9uLnRvTG93ZXJDYXNlKCkgPT09ICdjbicpIHtcbiAgICByZXR1cm4gQkFTRV9VUkwgKyAnLmdvb2dsZS5jbic7XG4gIH1cbiAgcmV0dXJuIERFRkFVTFRfVVJMO1xufTtcblxudmFyICRzY3JpcHRfID0gbnVsbDtcblxudmFyIGxvYWRQcm9taXNlXyA9IHZvaWQgMDtcblxudmFyIHJlc29sdmVDdXN0b21Qcm9taXNlXyA9IHZvaWQgMDtcblxudmFyIF9jdXN0b21Qcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgcmVzb2x2ZUN1c3RvbVByb21pc2VfID0gcmVzb2x2ZTtcbn0pO1xuXG4vLyBUT0RPIGFkZCBsaWJyYXJpZXMgbGFuZ3VhZ2UgYW5kIG90aGVyIG1hcCBvcHRpb25zXG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChib290c3RyYXBVUkxLZXlzLCBoZWF0bWFwTGlicmFyeSkge1xuICBpZiAoISRzY3JpcHRfKSB7XG4gICAgJHNjcmlwdF8gPSByZXF1aXJlKCdzY3JpcHRqcycpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIH1cblxuICAvLyBjYWxsIGZyb20gb3V0c2lkZSBnb29nbGUtbWFwLXJlYWN0XG4gIC8vIHdpbGwgYmUgYXMgc29vbiBhcyBsb2FkUHJvbWlzZV8gcmVzb2x2ZWRcbiAgaWYgKCFib290c3RyYXBVUkxLZXlzKSB7XG4gICAgcmV0dXJuIF9jdXN0b21Qcm9taXNlO1xuICB9XG5cbiAgaWYgKGxvYWRQcm9taXNlXykge1xuICAgIHJldHVybiBsb2FkUHJvbWlzZV87XG4gIH1cblxuICBsb2FkUHJvbWlzZV8gPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZWplY3QobmV3IEVycm9yKCdnb29nbGUgbWFwIGNhbm5vdCBiZSBsb2FkZWQgb3V0c2lkZSBicm93c2VyIGVudicpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAod2luZG93Lmdvb2dsZSAmJiB3aW5kb3cuZ29vZ2xlLm1hcHMpIHtcbiAgICAgIHJlc29sdmUod2luZG93Lmdvb2dsZS5tYXBzKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdy5fJF9nb29nbGVfbWFwX2luaXRpYWxpemVfJF8gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZWplY3QobmV3IEVycm9yKCdnb29nbGUgbWFwIGluaXRpYWxpemF0aW9uIGVycm9yJykpO1xuICAgIH1cblxuICAgIHdpbmRvdy5fJF9nb29nbGVfbWFwX2luaXRpYWxpemVfJF8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICBkZWxldGUgd2luZG93Ll8kX2dvb2dsZV9tYXBfaW5pdGlhbGl6ZV8kXztcbiAgICAgIHJlc29sdmUod2luZG93Lmdvb2dsZS5tYXBzKTtcbiAgICB9O1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmIChPYmplY3Qua2V5cyhib290c3RyYXBVUkxLZXlzKS5pbmRleE9mKCdjYWxsYmFjaycpID4gLTEpIHtcbiAgICAgICAgdmFyIG1lc3NhZ2UgPSAnXCJjYWxsYmFja1wiIGtleSBpbiBib290c3RyYXBVUkxLZXlzIGlzIG5vdCBhbGxvd2VkLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlIG9uR29vZ2xlQXBpTG9hZGVkIHByb3BlcnR5IGluc3RlYWQnO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHBhcmFtcyA9IE9iamVjdC5rZXlzKGJvb3RzdHJhcFVSTEtleXMpLnJlZHVjZShmdW5jdGlvbiAociwga2V5KSB7XG4gICAgICByZXR1cm4gciArICcmJyArIGtleSArICc9JyArIGJvb3RzdHJhcFVSTEtleXNba2V5XTtcbiAgICB9LCAnJyk7XG5cbiAgICB2YXIgYmFzZVVybCA9IGdldFVybChib290c3RyYXBVUkxLZXlzLnJlZ2lvbik7XG4gICAgdmFyIGxpYnJhcmllcyA9IGhlYXRtYXBMaWJyYXJ5ID8gJyZsaWJyYXJpZXM9dmlzdWFsaXphdGlvbicgOiAnJztcblxuICAgICRzY3JpcHRfKCcnICsgYmFzZVVybCArIEFQSV9QQVRIICsgcGFyYW1zICsgbGlicmFyaWVzLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIHdpbmRvdy5nb29nbGUgPT09ICd1bmRlZmluZWQnICYmIHJlamVjdChuZXcgRXJyb3IoJ2dvb2dsZSBtYXAgaW5pdGlhbGl6YXRpb24gZXJyb3IgKG5vdCBsb2FkZWQpJykpO1xuICAgIH0pO1xuICB9KTtcblxuICByZXNvbHZlQ3VzdG9tUHJvbWlzZV8obG9hZFByb21pc2VfKTtcblxuICByZXR1cm4gbG9hZFByb21pc2VfO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXZlbnRlbWl0dGVyID0gcmVxdWlyZSgnZXZlbnRlbWl0dGVyMycpO1xuXG52YXIgX2V2ZW50ZW1pdHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ldmVudGVtaXR0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBNYXJrZXJEaXNwYXRjaGVyID0gZnVuY3Rpb24gKF9FdmVudEVtaXR0ZXIpIHtcbiAgX2luaGVyaXRzKE1hcmtlckRpc3BhdGNoZXIsIF9FdmVudEVtaXR0ZXIpO1xuXG4gIGZ1bmN0aW9uIE1hcmtlckRpc3BhdGNoZXIoZ21hcEluc3RhbmNlKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1hcmtlckRpc3BhdGNoZXIpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0V2ZW50RW1pdHRlci5jYWxsKHRoaXMpKTtcblxuICAgIF90aGlzLmdtYXBJbnN0YW5jZSA9IGdtYXBJbnN0YW5jZTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBNYXJrZXJEaXNwYXRjaGVyLnByb3RvdHlwZS5nZXRDaGlsZHJlbiA9IGZ1bmN0aW9uIGdldENoaWxkcmVuKCkge1xuICAgIHJldHVybiB0aGlzLmdtYXBJbnN0YW5jZS5wcm9wcy5jaGlsZHJlbjtcbiAgfTtcblxuICBNYXJrZXJEaXNwYXRjaGVyLnByb3RvdHlwZS5nZXRNb3VzZVBvc2l0aW9uID0gZnVuY3Rpb24gZ2V0TW91c2VQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nbWFwSW5zdGFuY2UubW91c2VfO1xuICB9O1xuXG4gIE1hcmtlckRpc3BhdGNoZXIucHJvdG90eXBlLmdldFVwZGF0ZUNvdW50ZXIgPSBmdW5jdGlvbiBnZXRVcGRhdGVDb3VudGVyKCkge1xuICAgIHJldHVybiB0aGlzLmdtYXBJbnN0YW5jZS51cGRhdGVDb3VudGVyXztcbiAgfTtcblxuICBNYXJrZXJEaXNwYXRjaGVyLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gZGlzcG9zZSgpIHtcbiAgICB0aGlzLmdtYXBJbnN0YW5jZSA9IG51bGw7XG4gICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcbiAgfTtcblxuICByZXR1cm4gTWFya2VyRGlzcGF0Y2hlcjtcbn0oX2V2ZW50ZW1pdHRlcjIuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IE1hcmtlckRpc3BhdGNoZXI7IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gZGV0ZWN0QnJvd3Nlcjtcbi8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNTg5OTc4My9kZXRlY3Qtc2FmYXJpLWNocm9tZS1pZS1maXJlZm94LW9wZXJhLXdpdGgtdXNlci1hZ2VudFxudmFyIGRldGVjdEJyb3dzZXJSZXN1bHRfID0gbnVsbDtcblxuZnVuY3Rpb24gZGV0ZWN0QnJvd3NlcigpIHtcbiAgaWYgKGRldGVjdEJyb3dzZXJSZXN1bHRfKSB7XG4gICAgcmV0dXJuIGRldGVjdEJyb3dzZXJSZXN1bHRfO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIGlzRXhwbG9yZXIgPSBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ01TSUUnKSA+IC0xO1xuICAgIHZhciBpc0ZpcmVmb3ggPSBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ0ZpcmVmb3gnKSA+IC0xO1xuICAgIHZhciBpc09wZXJhID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ29wJykgPiAtMTtcblxuICAgIHZhciBpc0Nocm9tZSA9IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignQ2hyb21lJykgPiAtMTtcbiAgICB2YXIgaXNTYWZhcmkgPSBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ1NhZmFyaScpID4gLTE7XG5cbiAgICBpZiAoaXNDaHJvbWUgJiYgaXNTYWZhcmkpIHtcbiAgICAgIGlzU2FmYXJpID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGlzQ2hyb21lICYmIGlzT3BlcmEpIHtcbiAgICAgIGlzQ2hyb21lID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZGV0ZWN0QnJvd3NlclJlc3VsdF8gPSB7XG4gICAgICBpc0V4cGxvcmVyOiBpc0V4cGxvcmVyLFxuICAgICAgaXNGaXJlZm94OiBpc0ZpcmVmb3gsXG4gICAgICBpc09wZXJhOiBpc09wZXJhLFxuICAgICAgaXNDaHJvbWU6IGlzQ2hyb21lLFxuICAgICAgaXNTYWZhcmk6IGlzU2FmYXJpXG4gICAgfTtcbiAgICByZXR1cm4gZGV0ZWN0QnJvd3NlclJlc3VsdF87XG4gIH1cblxuICBkZXRlY3RCcm93c2VyUmVzdWx0XyA9IHtcbiAgICBpc0Nocm9tZTogdHJ1ZSxcbiAgICBpc0V4cGxvcmVyOiBmYWxzZSxcbiAgICBpc0ZpcmVmb3g6IGZhbHNlLFxuICAgIGlzT3BlcmE6IGZhbHNlLFxuICAgIGlzU2FmYXJpOiBmYWxzZVxuICB9O1xuXG4gIHJldHVybiBkZXRlY3RCcm93c2VyUmVzdWx0Xztcbn0iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfcGFzc2l2ZUV2ZW50cyA9IHJlcXVpcmUoJy4vcGFzc2l2ZUV2ZW50cycpO1xuXG52YXIgX3Bhc3NpdmVFdmVudHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGFzc2l2ZUV2ZW50cyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8vIFJlbGlhYmxlIGB3aW5kb3dgIGFuZCBgZG9jdW1lbnRgIGRldGVjdGlvblxudmFyIGNhblVzZURPTSA9ICEhKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCAmJiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5cbi8vIENoZWNrIGBkb2N1bWVudGAgYW5kIGB3aW5kb3dgIGluIGNhc2Ugb2Ygc2VydmVyLXNpZGUgcmVuZGVyaW5nXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuLyoqXG4qIERldGVjdCBFbGVtZW50IFJlc2l6ZS5cbiogRm9ya2VkIGluIG9yZGVyIHRvIGd1YXJkIGFnYWluc3QgdW5zYWZlICd3aW5kb3cnIGFuZCAnZG9jdW1lbnQnIHJlZmVyZW5jZXMuXG4qXG4qIGh0dHBzOi8vZ2l0aHViLmNvbS9zZGVjaW1hL2phdmFzY3JpcHQtZGV0ZWN0LWVsZW1lbnQtcmVzaXplXG4qIFNlYmFzdGlhbiBEZWNpbWFcbipcbiogdmVyc2lvbjogMC41LjNcbioqL1xuXG52YXIgX3dpbmRvdztcbmlmIChjYW5Vc2VET00pIHtcbiAgX3dpbmRvdyA9IHdpbmRvdztcbn0gZWxzZSBpZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnKSB7XG4gIF93aW5kb3cgPSBzZWxmO1xufSBlbHNlIHtcbiAgX3dpbmRvdyA9IHVuZGVmaW5lZDtcbn1cblxudmFyIGF0dGFjaEV2ZW50ID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudC5hdHRhY2hFdmVudDtcbnZhciBzdHlsZXNDcmVhdGVkID0gZmFsc2U7XG5cbmlmIChjYW5Vc2VET00gJiYgIWF0dGFjaEV2ZW50KSB7XG4gIHZhciByZXF1ZXN0RnJhbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJhZiA9IF93aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IF93aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IF93aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IGZ1bmN0aW9uIChmbikge1xuICAgICAgcmV0dXJuIF93aW5kb3cuc2V0VGltZW91dChmbiwgMjApO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChmbikge1xuICAgICAgcmV0dXJuIHJhZihmbik7XG4gICAgfTtcbiAgfSgpO1xuXG4gIHZhciBjYW5jZWxGcmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY2FuY2VsID0gX3dpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSB8fCBfd2luZG93Lm1vekNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8IF93aW5kb3cud2Via2l0Q2FuY2VsQW5pbWF0aW9uRnJhbWUgfHwgX3dpbmRvdy5jbGVhclRpbWVvdXQ7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChpZCkge1xuICAgICAgcmV0dXJuIGNhbmNlbChpZCk7XG4gICAgfTtcbiAgfSgpO1xuXG4gIHZhciByZXNldFRyaWdnZXJzID0gZnVuY3Rpb24gcmVzZXRUcmlnZ2VycyhlbGVtZW50KSB7XG4gICAgdmFyIHRyaWdnZXJzID0gZWxlbWVudC5fX3Jlc2l6ZVRyaWdnZXJzX18sXG4gICAgICAgIGV4cGFuZCA9IHRyaWdnZXJzLmZpcnN0RWxlbWVudENoaWxkLFxuICAgICAgICBjb250cmFjdCA9IHRyaWdnZXJzLmxhc3RFbGVtZW50Q2hpbGQsXG4gICAgICAgIGV4cGFuZENoaWxkID0gZXhwYW5kLmZpcnN0RWxlbWVudENoaWxkO1xuICAgIGNvbnRyYWN0LnNjcm9sbExlZnQgPSBjb250cmFjdC5zY3JvbGxXaWR0aDtcbiAgICBjb250cmFjdC5zY3JvbGxUb3AgPSBjb250cmFjdC5zY3JvbGxIZWlnaHQ7XG4gICAgZXhwYW5kQ2hpbGQuc3R5bGUud2lkdGggPSBleHBhbmQub2Zmc2V0V2lkdGggKyAxICsgJ3B4JztcbiAgICBleHBhbmRDaGlsZC5zdHlsZS5oZWlnaHQgPSBleHBhbmQub2Zmc2V0SGVpZ2h0ICsgMSArICdweCc7XG4gICAgZXhwYW5kLnNjcm9sbExlZnQgPSBleHBhbmQuc2Nyb2xsV2lkdGg7XG4gICAgZXhwYW5kLnNjcm9sbFRvcCA9IGV4cGFuZC5zY3JvbGxIZWlnaHQ7XG4gIH07XG5cbiAgdmFyIGNoZWNrVHJpZ2dlcnMgPSBmdW5jdGlvbiBjaGVja1RyaWdnZXJzKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gZWxlbWVudC5vZmZzZXRXaWR0aCAhPSBlbGVtZW50Ll9fcmVzaXplTGFzdF9fLndpZHRoIHx8IGVsZW1lbnQub2Zmc2V0SGVpZ2h0ICE9IGVsZW1lbnQuX19yZXNpemVMYXN0X18uaGVpZ2h0O1xuICB9O1xuXG4gIHZhciBzY3JvbGxMaXN0ZW5lciA9IGZ1bmN0aW9uIHNjcm9sbExpc3RlbmVyKGUpIHtcbiAgICB2YXIgZWxlbWVudCA9IHRoaXM7XG4gICAgcmVzZXRUcmlnZ2Vycyh0aGlzKTtcbiAgICBpZiAodGhpcy5fX3Jlc2l6ZVJBRl9fKSBjYW5jZWxGcmFtZSh0aGlzLl9fcmVzaXplUkFGX18pO1xuICAgIHRoaXMuX19yZXNpemVSQUZfXyA9IHJlcXVlc3RGcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoY2hlY2tUcmlnZ2VycyhlbGVtZW50KSkge1xuICAgICAgICBlbGVtZW50Ll9fcmVzaXplTGFzdF9fLndpZHRoID0gZWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICAgICAgZWxlbWVudC5fX3Jlc2l6ZUxhc3RfXy5oZWlnaHQgPSBlbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICAgICAgZWxlbWVudC5fX3Jlc2l6ZUxpc3RlbmVyc19fLmZvckVhY2goZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgICAgZm4uY2FsbChlbGVtZW50LCBlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgLyogRGV0ZWN0IENTUyBBbmltYXRpb25zIHN1cHBvcnQgdG8gZGV0ZWN0IGVsZW1lbnQgZGlzcGxheS9yZS1hdHRhY2ggKi9cbiAgdmFyIGFuaW1hdGlvbiA9IGZhbHNlLFxuICAgICAgYW5pbWF0aW9uc3RyaW5nID0gJ2FuaW1hdGlvbicsXG4gICAgICBrZXlmcmFtZXByZWZpeCA9ICcnLFxuICAgICAgYW5pbWF0aW9uc3RhcnRldmVudCA9ICdhbmltYXRpb25zdGFydCcsXG4gICAgICBkb21QcmVmaXhlcyA9ICdXZWJraXQgTW96IE8gbXMnLnNwbGl0KCcgJyksXG4gICAgICBzdGFydEV2ZW50cyA9ICd3ZWJraXRBbmltYXRpb25TdGFydCBhbmltYXRpb25zdGFydCBvQW5pbWF0aW9uU3RhcnQgTVNBbmltYXRpb25TdGFydCcuc3BsaXQoJyAnKSxcbiAgICAgIHBmeCA9ICcnO1xuXG4gIGlmIChjYW5Vc2VET00pIHtcbiAgICB2YXIgZWxtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmFrZWVsZW1lbnQnKTtcbiAgICBpZiAoZWxtLnN0eWxlLmFuaW1hdGlvbk5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgYW5pbWF0aW9uID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoYW5pbWF0aW9uID09PSBmYWxzZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkb21QcmVmaXhlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZWxtLnN0eWxlW2RvbVByZWZpeGVzW2ldICsgJ0FuaW1hdGlvbk5hbWUnXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcGZ4ID0gZG9tUHJlZml4ZXNbaV07XG4gICAgICAgICAgYW5pbWF0aW9uc3RyaW5nID0gcGZ4ICsgJ0FuaW1hdGlvbic7XG4gICAgICAgICAga2V5ZnJhbWVwcmVmaXggPSAnLScgKyBwZngudG9Mb3dlckNhc2UoKSArICctJztcbiAgICAgICAgICBhbmltYXRpb25zdGFydGV2ZW50ID0gc3RhcnRFdmVudHNbaV07XG4gICAgICAgICAgYW5pbWF0aW9uID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhciBhbmltYXRpb25OYW1lID0gJ3Jlc2l6ZWFuaW0nO1xuICB2YXIgYW5pbWF0aW9uS2V5ZnJhbWVzID0gJ0AnICsga2V5ZnJhbWVwcmVmaXggKyAna2V5ZnJhbWVzICcgKyBhbmltYXRpb25OYW1lICsgJyB7IGZyb20geyBvcGFjaXR5OiAwOyB9IHRvIHsgb3BhY2l0eTogMDsgfSB9ICc7XG4gIHZhciBhbmltYXRpb25TdHlsZSA9IGtleWZyYW1lcHJlZml4ICsgJ2FuaW1hdGlvbjogMW1zICcgKyBhbmltYXRpb25OYW1lICsgJzsgJztcbn1cblxudmFyIGNyZWF0ZVN0eWxlcyA9IGZ1bmN0aW9uIGNyZWF0ZVN0eWxlcygpIHtcbiAgaWYgKCFzdHlsZXNDcmVhdGVkKSB7XG4gICAgLy9vcGFjaXR5OjAgd29ya3MgYXJvdW5kIGEgY2hyb21lIGJ1ZyBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9Mjg2MzYwXG4gICAgdmFyIGNzcyA9IChhbmltYXRpb25LZXlmcmFtZXMgPyBhbmltYXRpb25LZXlmcmFtZXMgOiAnJykgKyAnLnJlc2l6ZS10cmlnZ2VycyB7ICcgKyAoYW5pbWF0aW9uU3R5bGUgPyBhbmltYXRpb25TdHlsZSA6ICcnKSArICd2aXNpYmlsaXR5OiBoaWRkZW47IG9wYWNpdHk6IDA7IH0gJyArICcucmVzaXplLXRyaWdnZXJzLCAucmVzaXplLXRyaWdnZXJzID4gZGl2LCAuY29udHJhY3QtdHJpZ2dlcjpiZWZvcmUgeyBjb250ZW50OiBcIiBcIjsgZGlzcGxheTogYmxvY2s7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAwOyBsZWZ0OiAwOyBoZWlnaHQ6IDEwMCU7IHdpZHRoOiAxMDAlOyBvdmVyZmxvdzogaGlkZGVuOyB9IC5yZXNpemUtdHJpZ2dlcnMgPiBkaXYgeyBiYWNrZ3JvdW5kOiAjZWVlOyBvdmVyZmxvdzogYXV0bzsgfSAuY29udHJhY3QtdHJpZ2dlcjpiZWZvcmUgeyB3aWR0aDogMjAwJTsgaGVpZ2h0OiAyMDAlOyB9JyxcbiAgICAgICAgaGVhZCA9IGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXSxcbiAgICAgICAgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuXG4gICAgc3R5bGUudHlwZSA9ICd0ZXh0L2Nzcyc7XG4gICAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gICAgfVxuXG4gICAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgc3R5bGVzQ3JlYXRlZCA9IHRydWU7XG4gIH1cbn07XG5cbnZhciBhZGRSZXNpemVMaXN0ZW5lciA9IGZ1bmN0aW9uIGFkZFJlc2l6ZUxpc3RlbmVyKGVsZW1lbnQsIGZuKSB7XG4gIGlmIChlbGVtZW50LnBhcmVudE5vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgIHZhciB0ZW1wUGFyZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlbWVudC5wYXJlbnROb2RlID0gdGVtcFBhcmVudERpdjtcbiAgfVxuICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlO1xuICBpZiAoYXR0YWNoRXZlbnQpIGVsZW1lbnQuYXR0YWNoRXZlbnQoJ29ucmVzaXplJywgZm4pO2Vsc2Uge1xuICAgIGlmICghZWxlbWVudC5fX3Jlc2l6ZVRyaWdnZXJzX18pIHtcbiAgICAgIGlmIChnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLnBvc2l0aW9uID09ICdzdGF0aWMnKSBlbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICAgIGNyZWF0ZVN0eWxlcygpO1xuICAgICAgZWxlbWVudC5fX3Jlc2l6ZUxhc3RfXyA9IHt9O1xuICAgICAgZWxlbWVudC5fX3Jlc2l6ZUxpc3RlbmVyc19fID0gW107XG4gICAgICAoZWxlbWVudC5fX3Jlc2l6ZVRyaWdnZXJzX18gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSkuY2xhc3NOYW1lID0gJ3Jlc2l6ZS10cmlnZ2Vycyc7XG4gICAgICBlbGVtZW50Ll9fcmVzaXplVHJpZ2dlcnNfXy5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cImV4cGFuZC10cmlnZ2VyXCI+PGRpdj48L2Rpdj48L2Rpdj4nICsgJzxkaXYgY2xhc3M9XCJjb250cmFjdC10cmlnZ2VyXCI+PC9kaXY+JztcbiAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudC5fX3Jlc2l6ZVRyaWdnZXJzX18pO1xuICAgICAgcmVzZXRUcmlnZ2VycyhlbGVtZW50KTtcblxuICAgICAgKDAsIF9wYXNzaXZlRXZlbnRzMi5kZWZhdWx0KShlbGVtZW50LCAnc2Nyb2xsJywgc2Nyb2xsTGlzdGVuZXIsIHRydWUpO1xuXG4gICAgICAvKiBMaXN0ZW4gZm9yIGEgY3NzIGFuaW1hdGlvbiB0byBkZXRlY3QgZWxlbWVudCBkaXNwbGF5L3JlLWF0dGFjaCAqL1xuICAgICAgYW5pbWF0aW9uc3RhcnRldmVudCAmJiBlbGVtZW50Ll9fcmVzaXplVHJpZ2dlcnNfXy5hZGRFdmVudExpc3RlbmVyKGFuaW1hdGlvbnN0YXJ0ZXZlbnQsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmIChlLmFuaW1hdGlvbk5hbWUgPT0gYW5pbWF0aW9uTmFtZSkgcmVzZXRUcmlnZ2VycyhlbGVtZW50KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBlbGVtZW50Ll9fcmVzaXplTGlzdGVuZXJzX18ucHVzaChmbik7XG4gIH1cbn07XG5cbnZhciByZW1vdmVSZXNpemVMaXN0ZW5lciA9IGZ1bmN0aW9uIHJlbW92ZVJlc2l6ZUxpc3RlbmVyKGVsZW1lbnQsIGZuKSB7XG4gIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XG4gIGlmIChhdHRhY2hFdmVudCkgZWxlbWVudC5kZXRhY2hFdmVudCgnb25yZXNpemUnLCBmbik7ZWxzZSB7XG4gICAgZWxlbWVudC5fX3Jlc2l6ZUxpc3RlbmVyc19fLnNwbGljZShlbGVtZW50Ll9fcmVzaXplTGlzdGVuZXJzX18uaW5kZXhPZihmbiksIDEpO1xuICAgIGlmICghZWxlbWVudC5fX3Jlc2l6ZUxpc3RlbmVyc19fLmxlbmd0aCkge1xuICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxMaXN0ZW5lcik7XG4gICAgICBlbGVtZW50Ll9fcmVzaXplVHJpZ2dlcnNfXyA9ICFlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQuX19yZXNpemVUcmlnZ2Vyc19fKTtcbiAgICB9XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBhZGRSZXNpemVMaXN0ZW5lcjogYWRkUmVzaXplTGlzdGVuZXIsXG4gIHJlbW92ZVJlc2l6ZUxpc3RlbmVyOiByZW1vdmVSZXNpemVMaXN0ZW5lclxufTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfcG9pbnRHZW9tZXRyeSA9IHJlcXVpcmUoJ0BtYXBib3gvcG9pbnQtZ2VvbWV0cnknKTtcblxudmFyIF9wb2ludEdlb21ldHJ5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BvaW50R2VvbWV0cnkpO1xuXG52YXIgX2xhdF9sbmcgPSByZXF1aXJlKCcuL2xpYl9nZW8vbGF0X2xuZycpO1xuXG52YXIgX2xhdF9sbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGF0X2xuZyk7XG5cbnZhciBfdHJhbnNmb3JtID0gcmVxdWlyZSgnLi9saWJfZ2VvL3RyYW5zZm9ybScpO1xuXG52YXIgX3RyYW5zZm9ybTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2Zvcm0pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgR2VvID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBHZW8odGlsZVNpemUpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgR2VvKTtcblxuICAgIC8vIGxlZnRfdG9wIHZpZXcg0L/QvtC70YzQt9GD0LXRgiDQs9GD0LPQu1xuICAgIC8vIHN1cGVyKCk7XG4gICAgdGhpcy5oYXNTaXplXyA9IGZhbHNlO1xuICAgIHRoaXMuaGFzVmlld18gPSBmYWxzZTtcbiAgICB0aGlzLnRyYW5zZm9ybV8gPSBuZXcgX3RyYW5zZm9ybTIuZGVmYXVsdCh0aWxlU2l6ZSB8fCA1MTIpO1xuICB9XG5cbiAgR2VvLnByb3RvdHlwZS5zZXRWaWV3ID0gZnVuY3Rpb24gc2V0VmlldyhjZW50ZXIsIHpvb20sIGJlYXJpbmcpIHtcbiAgICB0aGlzLnRyYW5zZm9ybV8uY2VudGVyID0gX2xhdF9sbmcyLmRlZmF1bHQuY29udmVydChjZW50ZXIpO1xuICAgIHRoaXMudHJhbnNmb3JtXy56b29tID0gK3pvb207XG4gICAgdGhpcy50cmFuc2Zvcm1fLmJlYXJpbmcgPSArYmVhcmluZztcbiAgICB0aGlzLmhhc1ZpZXdfID0gdHJ1ZTtcbiAgfTtcblxuICBHZW8ucHJvdG90eXBlLnNldFZpZXdTaXplID0gZnVuY3Rpb24gc2V0Vmlld1NpemUod2lkdGgsIGhlaWdodCkge1xuICAgIHRoaXMudHJhbnNmb3JtXy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMudHJhbnNmb3JtXy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy5oYXNTaXplXyA9IHRydWU7XG4gIH07XG5cbiAgR2VvLnByb3RvdHlwZS5zZXRNYXBDYW52YXNQcm9qZWN0aW9uID0gZnVuY3Rpb24gc2V0TWFwQ2FudmFzUHJvamVjdGlvbihtYXBzLCBtYXBDYW52YXNQcm9qZWN0aW9uKSB7XG4gICAgdGhpcy5tYXBzXyA9IG1hcHM7XG4gICAgdGhpcy5tYXBDYW52YXNQcm9qZWN0aW9uXyA9IG1hcENhbnZhc1Byb2plY3Rpb247XG4gIH07XG5cbiAgR2VvLnByb3RvdHlwZS5jYW5Qcm9qZWN0ID0gZnVuY3Rpb24gY2FuUHJvamVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5oYXNTaXplXyAmJiB0aGlzLmhhc1ZpZXdfO1xuICB9O1xuXG4gIEdlby5wcm90b3R5cGUuaGFzU2l6ZSA9IGZ1bmN0aW9uIGhhc1NpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGFzU2l6ZV87XG4gIH07XG5cbiAgLyoqIFJldHVybnMgdGhlIHBpeGVsIHBvc2l0aW9uIHJlbGF0aXZlIHRvIHRoZSBtYXAgY2VudGVyLiAqL1xuXG5cbiAgR2VvLnByb3RvdHlwZS5mcm9tTGF0TG5nVG9DZW50ZXJQaXhlbCA9IGZ1bmN0aW9uIGZyb21MYXRMbmdUb0NlbnRlclBpeGVsKHB0TGF0TG5nKSB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtXy5sb2NhdGlvblBvaW50KF9sYXRfbG5nMi5kZWZhdWx0LmNvbnZlcnQocHRMYXRMbmcpKTtcbiAgfTtcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgcGl4ZWwgcG9zaXRpb24gcmVsYXRpdmUgdG8gdGhlIG1hcCBwYW5lcyxcbiAgICogb3IgcmVsYXRpdmUgdG8gdGhlIG1hcCBjZW50ZXIgaWYgdGhlcmUgYXJlIG5vIHBhbmVzLlxuICAgKi9cblxuXG4gIEdlby5wcm90b3R5cGUuZnJvbUxhdExuZ1RvRGl2UGl4ZWwgPSBmdW5jdGlvbiBmcm9tTGF0TG5nVG9EaXZQaXhlbChwdExhdExuZykge1xuICAgIGlmICh0aGlzLm1hcENhbnZhc1Byb2plY3Rpb25fKSB7XG4gICAgICB2YXIgbGF0TG5nID0gbmV3IHRoaXMubWFwc18uTGF0TG5nKHB0TGF0TG5nLmxhdCwgcHRMYXRMbmcubG5nKTtcbiAgICAgIHJldHVybiB0aGlzLm1hcENhbnZhc1Byb2plY3Rpb25fLmZyb21MYXRMbmdUb0RpdlBpeGVsKGxhdExuZyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmZyb21MYXRMbmdUb0NlbnRlclBpeGVsKHB0TGF0TG5nKTtcbiAgfTtcblxuICAvKiogUmV0dXJucyB0aGUgcGl4ZWwgcG9zaXRpb24gcmVsYXRpdmUgdG8gdGhlIG1hcCB0b3AtbGVmdC4gKi9cblxuXG4gIEdlby5wcm90b3R5cGUuZnJvbUxhdExuZ1RvQ29udGFpbmVyUGl4ZWwgPSBmdW5jdGlvbiBmcm9tTGF0TG5nVG9Db250YWluZXJQaXhlbChwdExhdExuZykge1xuICAgIGlmICh0aGlzLm1hcENhbnZhc1Byb2plY3Rpb25fKSB7XG4gICAgICB2YXIgbGF0TG5nID0gbmV3IHRoaXMubWFwc18uTGF0TG5nKHB0TGF0TG5nLmxhdCwgcHRMYXRMbmcubG5nKTtcbiAgICAgIHJldHVybiB0aGlzLm1hcENhbnZhc1Byb2plY3Rpb25fLmZyb21MYXRMbmdUb0NvbnRhaW5lclBpeGVsKGxhdExuZyk7XG4gICAgfVxuXG4gICAgdmFyIHB0ID0gdGhpcy5mcm9tTGF0TG5nVG9DZW50ZXJQaXhlbChwdExhdExuZyk7XG4gICAgcHQueCAtPSB0aGlzLnRyYW5zZm9ybV8ud29ybGRTaXplICogTWF0aC5yb3VuZChwdC54IC8gdGhpcy50cmFuc2Zvcm1fLndvcmxkU2l6ZSk7XG5cbiAgICBwdC54ICs9IHRoaXMudHJhbnNmb3JtXy53aWR0aCAvIDI7XG4gICAgcHQueSArPSB0aGlzLnRyYW5zZm9ybV8uaGVpZ2h0IC8gMjtcblxuICAgIHJldHVybiBwdDtcbiAgfTtcblxuICAvKiogUmV0dXJucyB0aGUgTGF0TG5nIGZvciB0aGUgZ2l2ZW4gb2Zmc2V0IGZyb20gdGhlIG1hcCB0b3AtbGVmdC4gKi9cblxuXG4gIEdlby5wcm90b3R5cGUuZnJvbUNvbnRhaW5lclBpeGVsVG9MYXRMbmcgPSBmdW5jdGlvbiBmcm9tQ29udGFpbmVyUGl4ZWxUb0xhdExuZyhwdFhZKSB7XG4gICAgaWYgKHRoaXMubWFwQ2FudmFzUHJvamVjdGlvbl8pIHtcbiAgICAgIHZhciBsYXRMbmcgPSB0aGlzLm1hcENhbnZhc1Byb2plY3Rpb25fLmZyb21Db250YWluZXJQaXhlbFRvTGF0TG5nKHB0WFkpO1xuICAgICAgcmV0dXJuIHsgbGF0OiBsYXRMbmcubGF0KCksIGxuZzogbGF0TG5nLmxuZygpIH07XG4gICAgfVxuXG4gICAgdmFyIHB0eHkgPSBfZXh0ZW5kcyh7fSwgcHRYWSk7XG4gICAgcHR4eS54IC09IHRoaXMudHJhbnNmb3JtXy53aWR0aCAvIDI7XG4gICAgcHR4eS55IC09IHRoaXMudHJhbnNmb3JtXy5oZWlnaHQgLyAyO1xuICAgIHZhciBwdFJlcyA9IHRoaXMudHJhbnNmb3JtXy5wb2ludExvY2F0aW9uKF9wb2ludEdlb21ldHJ5Mi5kZWZhdWx0LmNvbnZlcnQocHR4eSkpO1xuXG4gICAgcHRSZXMubG5nIC09IDM2MCAqIE1hdGgucm91bmQocHRSZXMubG5nIC8gMzYwKTsgLy8gY29udmVydCAyIGdvb2dsZSBmb3JtYXRcbiAgICByZXR1cm4gcHRSZXM7XG4gIH07XG5cbiAgR2VvLnByb3RvdHlwZS5nZXRXaWR0aCA9IGZ1bmN0aW9uIGdldFdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybV8ud2lkdGg7XG4gIH07XG5cbiAgR2VvLnByb3RvdHlwZS5nZXRIZWlnaHQgPSBmdW5jdGlvbiBnZXRIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtXy5oZWlnaHQ7XG4gIH07XG5cbiAgR2VvLnByb3RvdHlwZS5nZXRab29tID0gZnVuY3Rpb24gZ2V0Wm9vbSgpIHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm1fLnpvb207XG4gIH07XG5cbiAgR2VvLnByb3RvdHlwZS5nZXRDZW50ZXIgPSBmdW5jdGlvbiBnZXRDZW50ZXIoKSB7XG4gICAgdmFyIHB0UmVzID0gdGhpcy50cmFuc2Zvcm1fLnBvaW50TG9jYXRpb24oeyB4OiAwLCB5OiAwIH0pO1xuXG4gICAgcmV0dXJuIHB0UmVzO1xuICB9O1xuXG4gIEdlby5wcm90b3R5cGUuZ2V0Qm91bmRzID0gZnVuY3Rpb24gZ2V0Qm91bmRzKG1hcmdpbnMsIHJvdW5kRmFjdG9yKSB7XG4gICAgdmFyIGJuZFQgPSBtYXJnaW5zICYmIG1hcmdpbnNbMF0gfHwgMDtcbiAgICB2YXIgYm5kUiA9IG1hcmdpbnMgJiYgbWFyZ2luc1sxXSB8fCAwO1xuICAgIHZhciBibmRCID0gbWFyZ2lucyAmJiBtYXJnaW5zWzJdIHx8IDA7XG4gICAgdmFyIGJuZEwgPSBtYXJnaW5zICYmIG1hcmdpbnNbM10gfHwgMDtcblxuICAgIGlmICh0aGlzLmdldFdpZHRoKCkgLSBibmRSIC0gYm5kTCA+IDAgJiYgdGhpcy5nZXRIZWlnaHQoKSAtIGJuZFQgLSBibmRCID4gMCkge1xuICAgICAgdmFyIHRvcExlZnRDb3JuZXIgPSB0aGlzLnRyYW5zZm9ybV8ucG9pbnRMb2NhdGlvbihfcG9pbnRHZW9tZXRyeTIuZGVmYXVsdC5jb252ZXJ0KHtcbiAgICAgICAgeDogYm5kTCAtIHRoaXMuZ2V0V2lkdGgoKSAvIDIsXG4gICAgICAgIHk6IGJuZFQgLSB0aGlzLmdldEhlaWdodCgpIC8gMlxuICAgICAgfSkpO1xuICAgICAgdmFyIGJvdHRvbVJpZ2h0Q29ybmVyID0gdGhpcy50cmFuc2Zvcm1fLnBvaW50TG9jYXRpb24oX3BvaW50R2VvbWV0cnkyLmRlZmF1bHQuY29udmVydCh7XG4gICAgICAgIHg6IHRoaXMuZ2V0V2lkdGgoKSAvIDIgLSBibmRSLFxuICAgICAgICB5OiB0aGlzLmdldEhlaWdodCgpIC8gMiAtIGJuZEJcbiAgICAgIH0pKTtcblxuICAgICAgdmFyIHJlcyA9IFt0b3BMZWZ0Q29ybmVyLmxhdCwgdG9wTGVmdENvcm5lci5sbmcsIC8vIE5XXG4gICAgICBib3R0b21SaWdodENvcm5lci5sYXQsIGJvdHRvbVJpZ2h0Q29ybmVyLmxuZywgLy8gU0VcbiAgICAgIGJvdHRvbVJpZ2h0Q29ybmVyLmxhdCwgdG9wTGVmdENvcm5lci5sbmcsIC8vIFNXXG4gICAgICB0b3BMZWZ0Q29ybmVyLmxhdCwgYm90dG9tUmlnaHRDb3JuZXIubG5nXTtcblxuICAgICAgaWYgKHJvdW5kRmFjdG9yKSB7XG4gICAgICAgIHJlcyA9IHJlcy5tYXAoZnVuY3Rpb24gKHIpIHtcbiAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChyICogcm91bmRGYWN0b3IpIC8gcm91bmRGYWN0b3I7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG5cbiAgICByZXR1cm4gWzAsIDAsIDAsIDBdO1xuICB9O1xuXG4gIHJldHVybiBHZW87XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEdlbzsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzQXJyYXlzRXF1YWxFcHM7XG5mdW5jdGlvbiBpc0FycmF5c0VxdWFsRXBzKGFycmF5QSwgYXJyYXlCLCBlcHMpIHtcbiAgaWYgKGFycmF5QSAmJiBhcnJheUIpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSAhPT0gYXJyYXlBLmxlbmd0aDsgKytpKSB7XG4gICAgICBpZiAoTWF0aC5hYnMoYXJyYXlBW2ldIC0gYXJyYXlCW2ldKSA+IGVwcykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn0iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIGlzRW1wdHkgPSBmdW5jdGlvbiBpc0VtcHR5KHZhbCkge1xuICAvLyBjaGVjayBmb3IgZW1wdHkgb2JqZWN0IHt9LCBhcnJheSBbXVxuICBpZiAodmFsICE9PSBudWxsICYmICh0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih2YWwpKSA9PT0gJ29iamVjdCcpIHtcbiAgICBpZiAoT2JqZWN0LmtleXModmFsKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSBlbHNlIGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQgfHwgdmFsID09PSAnJykge1xuICAgIC8vIGNoZWNrIGZvciB1bmRlZmluZWQsIG51bGwgYW5kIFwiXCJcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBpc0VtcHR5OyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBpc051bWJlcjtcbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZSAmJiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih2YWx1ZSkpID09PSAnb2JqZWN0Jztcbn1cblxudmFyIG9iamVjdFRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuZnVuY3Rpb24gaXNOdW1iZXIodmFsdWUpIHtcbiAgdmFyIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nO1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyB8fCBpc09iamVjdExpa2UodmFsdWUpICYmIG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpID09PSBudW1iZXJUYWc7XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGlzUGxhaW5PYmplY3Q7XG4vLyBzb3VyY2UgdGFrZW4gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vcmFja3QvcmVkdXgvYmxvYi9tYXN0ZXIvc3JjL3V0aWxzL2lzUGxhaW5PYmplY3QuanNcbnZhciBmblRvU3RyaW5nID0gZnVuY3Rpb24gZm5Ub1N0cmluZyhmbikge1xuICByZXR1cm4gRnVuY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZm4pO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge2FueX0gb2JqIFRoZSBvYmplY3QgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBhcmd1bWVudCBhcHBlYXJzIHRvIGJlIGEgcGxhaW4gb2JqZWN0LlxuICovXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KG9iaikge1xuICBpZiAoIW9iaiB8fCAodHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2Yob2JqKSkgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHByb3RvID0gdHlwZW9mIG9iai5jb25zdHJ1Y3RvciA9PT0gJ2Z1bmN0aW9uJyA/IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopIDogT2JqZWN0LnByb3RvdHlwZTtcblxuICBpZiAocHJvdG8gPT09IG51bGwpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHZhciBjb25zdHJ1Y3RvciA9IHByb3RvLmNvbnN0cnVjdG9yO1xuXG4gIHJldHVybiB0eXBlb2YgY29uc3RydWN0b3IgPT09ICdmdW5jdGlvbicgJiYgY29uc3RydWN0b3IgaW5zdGFuY2VvZiBjb25zdHJ1Y3RvciAmJiBmblRvU3RyaW5nKGNvbnN0cnVjdG9yKSA9PT0gZm5Ub1N0cmluZyhPYmplY3QpO1xufSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF93cmFwMiA9IHJlcXVpcmUoJy4vd3JhcCcpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgTGF0TG5nID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBMYXRMbmcobGF0LCBsbmcpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTGF0TG5nKTtcblxuICAgIGlmIChpc05hTihsYXQpIHx8IGlzTmFOKGxuZykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBMYXRMbmcgb2JqZWN0OiAoJyArIGxhdCArICcsICcgKyBsbmcgKyAnKScpO1xuICAgIH1cbiAgICB0aGlzLmxhdCA9ICtsYXQ7XG4gICAgdGhpcy5sbmcgPSArbG5nO1xuICB9XG5cbiAgTGF0TG5nLnByb3RvdHlwZS53cmFwID0gZnVuY3Rpb24gd3JhcCgpIHtcbiAgICByZXR1cm4gbmV3IExhdExuZyh0aGlzLmxhdCwgKDAsIF93cmFwMi53cmFwKSh0aGlzLmxuZywgLTE4MCwgMTgwKSk7XG4gIH07XG5cbiAgcmV0dXJuIExhdExuZztcbn0oKTtcblxuTGF0TG5nLmNvbnZlcnQgPSBmdW5jdGlvbiAoYSkge1xuICBpZiAoYSBpbnN0YW5jZW9mIExhdExuZykge1xuICAgIHJldHVybiBhO1xuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoYSkpIHtcbiAgICByZXR1cm4gbmV3IExhdExuZyhhWzBdLCBhWzFdKTtcbiAgfVxuXG4gIGlmICgnbG5nJyBpbiBhICYmICdsYXQnIGluIGEpIHtcbiAgICByZXR1cm4gbmV3IExhdExuZyhhLmxhdCwgYS5sbmcpO1xuICB9XG5cbiAgcmV0dXJuIGE7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBMYXRMbmc7IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpOyAvKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXG5cblxudmFyIF9wb2ludEdlb21ldHJ5ID0gcmVxdWlyZSgnQG1hcGJveC9wb2ludC1nZW9tZXRyeScpO1xuXG52YXIgX3BvaW50R2VvbWV0cnkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9pbnRHZW9tZXRyeSk7XG5cbnZhciBfbGF0X2xuZyA9IHJlcXVpcmUoJy4vbGF0X2xuZycpO1xuXG52YXIgX2xhdF9sbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGF0X2xuZyk7XG5cbnZhciBfd3JhcCA9IHJlcXVpcmUoJy4vd3JhcCcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG4vLyBBIHNpbmdsZSB0cmFuc2Zvcm0sIGdlbmVyYWxseSB1c2VkIGZvciBhIHNpbmdsZSB0aWxlIHRvIGJlIHNjYWxlZCwgcm90YXRlZCwgYW5kIHpvb21lZC5cbnZhciBUcmFuc2Zvcm0gPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFRyYW5zZm9ybSh0aWxlU2l6ZSwgbWluWm9vbSwgbWF4Wm9vbSkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUcmFuc2Zvcm0pO1xuXG4gICAgdGhpcy50aWxlU2l6ZSA9IHRpbGVTaXplIHx8IDUxMjsgLy8gY29uc3RhbnRcblxuICAgIHRoaXMuX21pblpvb20gPSBtaW5ab29tIHx8IDA7XG4gICAgdGhpcy5fbWF4Wm9vbSA9IG1heFpvb20gfHwgNTI7XG5cbiAgICB0aGlzLmxhdFJhbmdlID0gWy04NS4wNTExMywgODUuMDUxMTNdO1xuXG4gICAgdGhpcy53aWR0aCA9IDA7XG4gICAgdGhpcy5oZWlnaHQgPSAwO1xuICAgIHRoaXMuem9vbSA9IDA7XG4gICAgdGhpcy5jZW50ZXIgPSBuZXcgX2xhdF9sbmcyLmRlZmF1bHQoMCwgMCk7XG4gICAgdGhpcy5hbmdsZSA9IDA7XG4gIH1cblxuICBUcmFuc2Zvcm0ucHJvdG90eXBlLnpvb21TY2FsZSA9IGZ1bmN0aW9uIHpvb21TY2FsZSh6b29tKSB7XG4gICAgcmV0dXJuIE1hdGgucG93KDIsIHpvb20pO1xuICB9O1xuXG4gIFRyYW5zZm9ybS5wcm90b3R5cGUuc2NhbGVab29tID0gZnVuY3Rpb24gc2NhbGVab29tKHNjYWxlKSB7XG4gICAgcmV0dXJuIE1hdGgubG9nKHNjYWxlKSAvIE1hdGguTE4yO1xuICB9O1xuXG4gIFRyYW5zZm9ybS5wcm90b3R5cGUucHJvamVjdCA9IGZ1bmN0aW9uIHByb2plY3QobGF0bG5nLCB3b3JsZFNpemUpIHtcbiAgICByZXR1cm4gbmV3IF9wb2ludEdlb21ldHJ5Mi5kZWZhdWx0KHRoaXMubG5nWChsYXRsbmcubG5nLCB3b3JsZFNpemUpLCB0aGlzLmxhdFkobGF0bG5nLmxhdCwgd29ybGRTaXplKSk7XG4gIH07XG5cbiAgVHJhbnNmb3JtLnByb3RvdHlwZS51bnByb2plY3QgPSBmdW5jdGlvbiB1bnByb2plY3QocG9pbnQsIHdvcmxkU2l6ZSkge1xuICAgIHJldHVybiBuZXcgX2xhdF9sbmcyLmRlZmF1bHQodGhpcy55TGF0KHBvaW50LnksIHdvcmxkU2l6ZSksIHRoaXMueExuZyhwb2ludC54LCB3b3JsZFNpemUpKTtcbiAgfTtcblxuICAvLyBsYXQvbG9uIDwtPiBhYnNvbHV0ZSBwaXhlbCBjb29yZHMgY29udmVydGlvblxuICBUcmFuc2Zvcm0ucHJvdG90eXBlLmxuZ1ggPSBmdW5jdGlvbiBsbmdYKGxvbiwgd29ybGRTaXplKSB7XG4gICAgcmV0dXJuICgxODAgKyBsb24pICogKHdvcmxkU2l6ZSB8fCB0aGlzLndvcmxkU2l6ZSkgLyAzNjA7XG4gIH07XG5cbiAgLy8gbGF0aXR1ZGUgdG8gYWJzb2x1dGUgeSBjb29yZFxuXG5cbiAgVHJhbnNmb3JtLnByb3RvdHlwZS5sYXRZID0gZnVuY3Rpb24gbGF0WShsYXQsIHdvcmxkU2l6ZSkge1xuICAgIHZhciB5ID0gMTgwIC8gTWF0aC5QSSAqIE1hdGgubG9nKE1hdGgudGFuKE1hdGguUEkgLyA0ICsgbGF0ICogTWF0aC5QSSAvIDM2MCkpO1xuICAgIHJldHVybiAoMTgwIC0geSkgKiAod29ybGRTaXplIHx8IHRoaXMud29ybGRTaXplKSAvIDM2MDtcbiAgfTtcblxuICBUcmFuc2Zvcm0ucHJvdG90eXBlLnhMbmcgPSBmdW5jdGlvbiB4TG5nKHgsIHdvcmxkU2l6ZSkge1xuICAgIHJldHVybiB4ICogMzYwIC8gKHdvcmxkU2l6ZSB8fCB0aGlzLndvcmxkU2l6ZSkgLSAxODA7XG4gIH07XG5cbiAgVHJhbnNmb3JtLnByb3RvdHlwZS55TGF0ID0gZnVuY3Rpb24geUxhdCh5LCB3b3JsZFNpemUpIHtcbiAgICB2YXIgeTIgPSAxODAgLSB5ICogMzYwIC8gKHdvcmxkU2l6ZSB8fCB0aGlzLndvcmxkU2l6ZSk7XG4gICAgcmV0dXJuIDM2MCAvIE1hdGguUEkgKiBNYXRoLmF0YW4oTWF0aC5leHAoeTIgKiBNYXRoLlBJIC8gMTgwKSkgLSA5MDtcbiAgfTtcblxuICBUcmFuc2Zvcm0ucHJvdG90eXBlLmxvY2F0aW9uUG9pbnQgPSBmdW5jdGlvbiBsb2NhdGlvblBvaW50KGxhdGxuZykge1xuICAgIHZhciBwID0gdGhpcy5wcm9qZWN0KGxhdGxuZyk7XG4gICAgcmV0dXJuIHRoaXMuY2VudGVyUG9pbnQuX3N1Yih0aGlzLnBvaW50Ll9zdWIocCkuX3JvdGF0ZSh0aGlzLmFuZ2xlKSk7XG4gIH07XG5cbiAgVHJhbnNmb3JtLnByb3RvdHlwZS5wb2ludExvY2F0aW9uID0gZnVuY3Rpb24gcG9pbnRMb2NhdGlvbihwKSB7XG4gICAgdmFyIHAyID0gdGhpcy5jZW50ZXJQb2ludC5fc3ViKHApLl9yb3RhdGUoLXRoaXMuYW5nbGUpO1xuICAgIHJldHVybiB0aGlzLnVucHJvamVjdCh0aGlzLnBvaW50LnN1YihwMikpO1xuICB9O1xuXG4gIF9jcmVhdGVDbGFzcyhUcmFuc2Zvcm0sIFt7XG4gICAga2V5OiAnbWluWm9vbScsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbWluWm9vbTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHpvb20pIHtcbiAgICAgIHRoaXMuX21pblpvb20gPSB6b29tO1xuICAgICAgdGhpcy56b29tID0gTWF0aC5tYXgodGhpcy56b29tLCB6b29tKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdtYXhab29tJyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9tYXhab29tO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQoem9vbSkge1xuICAgICAgdGhpcy5fbWF4Wm9vbSA9IHpvb207XG4gICAgICB0aGlzLnpvb20gPSBNYXRoLm1pbih0aGlzLnpvb20sIHpvb20pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3dvcmxkU2l6ZScsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy50aWxlU2l6ZSAqIHRoaXMuc2NhbGU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY2VudGVyUG9pbnQnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIG5ldyBfcG9pbnRHZW9tZXRyeTIuZGVmYXVsdCgwLCAwKTsgLy8gdGhpcy5zaXplLl9kaXYoMik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2l6ZScsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gbmV3IF9wb2ludEdlb21ldHJ5Mi5kZWZhdWx0KHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdiZWFyaW5nJyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiAtdGhpcy5hbmdsZSAvIE1hdGguUEkgKiAxODA7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChiZWFyaW5nKSB7XG4gICAgICB0aGlzLmFuZ2xlID0gLSgwLCBfd3JhcC53cmFwKShiZWFyaW5nLCAtMTgwLCAxODApICogTWF0aC5QSSAvIDE4MDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd6b29tJyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl96b29tO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQoem9vbSkge1xuICAgICAgdmFyIHpvb21WID0gTWF0aC5taW4oTWF0aC5tYXgoem9vbSwgdGhpcy5taW5ab29tKSwgdGhpcy5tYXhab29tKTtcbiAgICAgIHRoaXMuX3pvb20gPSB6b29tVjtcbiAgICAgIHRoaXMuc2NhbGUgPSB0aGlzLnpvb21TY2FsZSh6b29tVik7XG4gICAgICB0aGlzLnRpbGVab29tID0gTWF0aC5mbG9vcih6b29tVik7XG4gICAgICB0aGlzLnpvb21GcmFjdGlvbiA9IHpvb21WIC0gdGhpcy50aWxlWm9vbTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd4JyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmxuZ1godGhpcy5jZW50ZXIubG5nKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd5JyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmxhdFkodGhpcy5jZW50ZXIubGF0KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdwb2ludCcsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gbmV3IF9wb2ludEdlb21ldHJ5Mi5kZWZhdWx0KHRoaXMueCwgdGhpcy55KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gVHJhbnNmb3JtO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBUcmFuc2Zvcm07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLndyYXAgPSB3cmFwO1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuXG5mdW5jdGlvbiB3cmFwKG4sIG1pbiwgbWF4KSB7XG4gIHZhciBkID0gbWF4IC0gbWluO1xuICByZXR1cm4gbiA9PT0gbWF4ID8gbiA6ICgobiAtIG1pbikgJSBkICsgZCkgJSBkICsgbWluO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIGxvZzIgPSBNYXRoLmxvZzIgPyBNYXRoLmxvZzIgOiBmdW5jdGlvbiAoeCkge1xuICByZXR1cm4gTWF0aC5sb2coeCkgLyBNYXRoLkxOMjtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGxvZzI7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2FjZGxpdGUvcmVjb21wb3NlL2Jsb2IvbWFzdGVyL3NyYy9wYWNrYWdlcy9yZWNvbXBvc2UvdXRpbHMvb21pdC5qc1xudmFyIG9taXQgPSBmdW5jdGlvbiBvbWl0KG9iaiwga2V5cykge1xuICB2YXIgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIFtdKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICBpZiAoa2V5IGluIHJlc3QpIHtcbiAgICAgIGRlbGV0ZSByZXN0W2tleV07XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN0O1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gb21pdDsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBhZGRQYXNzaXZlRXZlbnRMaXN0ZW5lcjtcbi8vIGZlYXR1cmUgZGV0ZWN0aW9uIGZvciBwYXNzaXZlIHN1cHBvcnRcbi8vIHNlZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0V2ZW50VGFyZ2V0L2FkZEV2ZW50TGlzdGVuZXIjU2FmZWx5X2RldGVjdGluZ19vcHRpb25fc3VwcG9ydFxuZnVuY3Rpb24gaGFzUGFzc2l2ZVN1cHBvcnQoKSB7XG4gIHZhciBwYXNzaXZlU3VwcG9ydGVkID0gZmFsc2U7XG5cbiAgdHJ5IHtcbiAgICB2YXIgb3B0aW9ucyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ3Bhc3NpdmUnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcGFzc2l2ZVN1cHBvcnRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndGVzdCcsIG9wdGlvbnMsIG9wdGlvbnMpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0ZXN0Jywgb3B0aW9ucywgb3B0aW9ucyk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHBhc3NpdmVTdXBwb3J0ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBwYXNzaXZlU3VwcG9ydGVkO1xufVxuXG5mdW5jdGlvbiBhZGRQYXNzaXZlRXZlbnRMaXN0ZW5lcihlbGVtZW50LCBldmVudE5hbWUsIGZ1bmMsIGNhcHR1cmUpIHtcbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZnVuYywgaGFzUGFzc2l2ZVN1cHBvcnQoKSA/IHtcbiAgICBjYXB0dXJlOiBjYXB0dXJlLFxuICAgIHBhc3NpdmU6IHRydWVcbiAgfSA6IGNhcHR1cmUpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gcGljaztcbi8vIHNvdXJjZSB0YWtlbiBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9yYWNrdC9yZWR1eC9ibG9iL21hc3Rlci9zcmMvdXRpbHMvcGljay5qc1xuXG5mdW5jdGlvbiBwaWNrKG9iaiwgZm4pIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikucmVkdWNlKGZ1bmN0aW9uIChyZXN1bHQsIGtleSkge1xuICAgIGlmIChmbihvYmpba2V5XSkpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gb2JqW2tleV07IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSwge30pO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gcmFmO1xuZnVuY3Rpb24gcmFmKGNhbGxiYWNrKSB7XG4gIGlmICh3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2FsbGJhY2spO1xuICB9XG5cbiAgdmFyIG5hdGl2ZVJhZiA9IHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZTtcblxuICByZXR1cm4gbmF0aXZlUmFmID8gbmF0aXZlUmFmKGNhbGxiYWNrKSA6IHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCAxZTMgLyA2MCk7XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIHNoYWxsb3dFcXVhbFxuICogQHR5cGVjaGVja3NcbiAqIFxuICovXG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogaW5saW5lZCBPYmplY3QuaXMgcG9seWZpbGwgdG8gYXZvaWQgcmVxdWlyaW5nIGNvbnN1bWVycyBzaGlwIHRoZWlyIG93blxuICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2lzXG4gKi9cbmZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgLy8gU2FtZVZhbHVlIGFsZ29yaXRobVxuICBpZiAoeCA9PT0geSkge1xuICAgIC8vIFN0ZXBzIDEtNSwgNy0xMFxuICAgIC8vIFN0ZXBzIDYuYi02LmU6ICswICE9IC0wXG4gICAgLy8gQWRkZWQgdGhlIG5vbnplcm8geSBjaGVjayB0byBtYWtlIEZsb3cgaGFwcHksIGJ1dCBpdCBpcyByZWR1bmRhbnRcbiAgICByZXR1cm4geCAhPT0gMCB8fCB5ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geTtcbiAgfVxuICAvLyBTdGVwIDYuYTogTmFOID09IE5hTlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gIHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHk7XG59XG5cbi8qKlxuICogUGVyZm9ybXMgZXF1YWxpdHkgYnkgaXRlcmF0aW5nIHRocm91Z2gga2V5cyBvbiBhbiBvYmplY3QgYW5kIHJldHVybmluZyBmYWxzZVxuICogd2hlbiBhbnkga2V5IGhhcyB2YWx1ZXMgd2hpY2ggYXJlIG5vdCBzdHJpY3RseSBlcXVhbCBiZXR3ZWVuIHRoZSBhcmd1bWVudHMuXG4gKiBSZXR1cm5zIHRydWUgd2hlbiB0aGUgdmFsdWVzIG9mIGFsbCBrZXlzIGFyZSBzdHJpY3RseSBlcXVhbC5cbiAqL1xuZnVuY3Rpb24gc2hhbGxvd0VxdWFsKG9iakEsIG9iakIpIHtcbiAgaWYgKGlzKG9iakEsIG9iakIpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAoKHR5cGVvZiBvYmpBID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihvYmpBKSkgIT09ICdvYmplY3QnIHx8IG9iakEgPT09IG51bGwgfHwgKHR5cGVvZiBvYmpCID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihvYmpCKSkgIT09ICdvYmplY3QnIHx8IG9iakIgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIga2V5c0EgPSBPYmplY3Qua2V5cyhvYmpBKTtcbiAgdmFyIGtleXNCID0gT2JqZWN0LmtleXMob2JqQik7XG5cbiAgaWYgKGtleXNBLmxlbmd0aCAhPT0ga2V5c0IubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gVGVzdCBmb3IgQSdzIGtleXMgZGlmZmVyZW50IGZyb20gQi5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzQS5sZW5ndGg7IGkrKykge1xuICAgIGlmICghaGFzT3duUHJvcGVydHkuY2FsbChvYmpCLCBrZXlzQVtpXSkgfHwgIWlzKG9iakFba2V5c0FbaV1dLCBvYmpCW2tleXNBW2ldXSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaGFsbG93RXF1YWw7XG4vKiBzcmM6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9mYmpzL2Jsb2IvbWFzdGVyL3BhY2thZ2VzL2ZianMvc3JjL2NvcmUvc2hhbGxvd0VxdWFsLmpzICovIiwiLypcbm9iamVjdC1hc3NpZ25cbihjKSBTaW5kcmUgU29yaHVzXG5AbGljZW5zZSBNSVRcbiovXG5cbid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbCkge1xuXHRpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QodmFsKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkVXNlTmF0aXZlKCkge1xuXHR0cnkge1xuXHRcdGlmICghT2JqZWN0LmFzc2lnbikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIERldGVjdCBidWdneSBwcm9wZXJ0eSBlbnVtZXJhdGlvbiBvcmRlciBpbiBvbGRlciBWOCB2ZXJzaW9ucy5cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQxMThcblx0XHR2YXIgdGVzdDEgPSBuZXcgU3RyaW5nKCdhYmMnKTsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3LXdyYXBwZXJzXG5cdFx0dGVzdDFbNV0gPSAnZGUnO1xuXHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MSlbMF0gPT09ICc1Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDIgPSB7fTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcblx0XHRcdHRlc3QyWydfJyArIFN0cmluZy5mcm9tQ2hhckNvZGUoaSldID0gaTtcblx0XHR9XG5cdFx0dmFyIG9yZGVyMiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QyKS5tYXAoZnVuY3Rpb24gKG4pIHtcblx0XHRcdHJldHVybiB0ZXN0MltuXTtcblx0XHR9KTtcblx0XHRpZiAob3JkZXIyLmpvaW4oJycpICE9PSAnMDEyMzQ1Njc4OScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QzID0ge307XG5cdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAobGV0dGVyKSB7XG5cdFx0XHR0ZXN0M1tsZXR0ZXJdID0gbGV0dGVyO1xuXHRcdH0pO1xuXHRcdGlmIChPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCB0ZXN0MykpLmpvaW4oJycpICE9PVxuXHRcdFx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdC8vIFdlIGRvbid0IGV4cGVjdCBhbnkgb2YgdGhlIGFib3ZlIHRvIHRocm93LCBidXQgYmV0dGVyIHRvIGJlIHNhZmUuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvdWxkVXNlTmF0aXZlKCkgPyBPYmplY3QuYXNzaWduIDogZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cdHZhciBmcm9tO1xuXHR2YXIgdG8gPSB0b09iamVjdCh0YXJnZXQpO1xuXHR2YXIgc3ltYm9scztcblxuXHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuXHRcdGZyb20gPSBPYmplY3QoYXJndW1lbnRzW3NdKTtcblxuXHRcdGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG5cdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG5cdFx0XHRcdHRvW2tleV0gPSBmcm9tW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuXHRcdFx0c3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG5cdFx0XHRcdFx0dG9bc3ltYm9sc1tpXV0gPSBmcm9tW3N5bWJvbHNbaV1dO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcbiAgdmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xuICB2YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuXG4gIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgdGV4dDtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xufVxuXG4vKipcbiAqIEFzc2VydCB0aGF0IHRoZSB2YWx1ZXMgbWF0Y2ggd2l0aCB0aGUgdHlwZSBzcGVjcy5cbiAqIEVycm9yIG1lc3NhZ2VzIGFyZSBtZW1vcml6ZWQgYW5kIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0eXBlU3BlY3MgTWFwIG9mIG5hbWUgdG8gYSBSZWFjdFByb3BUeXBlXG4gKiBAcGFyYW0ge29iamVjdH0gdmFsdWVzIFJ1bnRpbWUgdmFsdWVzIHRoYXQgbmVlZCB0byBiZSB0eXBlLWNoZWNrZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhdGlvbiBlLmcuIFwicHJvcFwiLCBcImNvbnRleHRcIiwgXCJjaGlsZCBjb250ZXh0XCJcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb21wb25lbnROYW1lIE5hbWUgb2YgdGhlIGNvbXBvbmVudCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gKiBAcGFyYW0gez9GdW5jdGlvbn0gZ2V0U3RhY2sgUmV0dXJucyB0aGUgY29tcG9uZW50IHN0YWNrLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBnZXRTdGFjaykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmIChoYXModHlwZVNwZWNzLCB0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvcjtcbiAgICAgICAgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGlmICh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZhciBlcnIgPSBFcnJvcihcbiAgICAgICAgICAgICAgKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiAnICsgbG9jYXRpb24gKyAnIHR5cGUgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyAnICtcbiAgICAgICAgICAgICAgJ2l0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAnICsgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICsgJ2AuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlcnJvciA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yID0gZXg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yICYmICEoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikpIHtcbiAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAnICtcbiAgICAgICAgICAgIGxvY2F0aW9uICsgJyBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArXG4gICAgICAgICAgICAnZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgJyArIHR5cGVvZiBlcnJvciArICcuICcgK1xuICAgICAgICAgICAgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgK1xuICAgICAgICAgICAgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArXG4gICAgICAgICAgICAnc2hhcGUgYWxsIHJlcXVpcmUgYW4gYXJndW1lbnQpLidcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IubWVzc2FnZV0gPSB0cnVlO1xuXG4gICAgICAgICAgdmFyIHN0YWNrID0gZ2V0U3RhY2sgPyBnZXRTdGFjaygpIDogJyc7XG5cbiAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAnRmFpbGVkICcgKyBsb2NhdGlvbiArICcgdHlwZTogJyArIGVycm9yLm1lc3NhZ2UgKyAoc3RhY2sgIT0gbnVsbCA/IHN0YWNrIDogJycpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFJlc2V0cyB3YXJuaW5nIGNhY2hlIHdoZW4gdGVzdGluZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5jaGVja1Byb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZSA9IGZ1bmN0aW9uKCkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2hlY2tQcm9wVHlwZXM7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcbnZhciBjaGVja1Byb3BUeXBlcyA9IHJlcXVpcmUoJy4vY2hlY2tQcm9wVHlwZXMnKTtcblxudmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcbnZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBwcmludFdhcm5pbmcgPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIHRleHQ7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcbn1cblxuZnVuY3Rpb24gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbCgpIHtcbiAgcmV0dXJuIG51bGw7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXNWYWxpZEVsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpIHtcbiAgLyogZ2xvYmFsIFN5bWJvbCAqL1xuICB2YXIgSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG4gIHZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJzsgLy8gQmVmb3JlIFN5bWJvbCBzcGVjLlxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpdGVyYXRvciBtZXRob2QgZnVuY3Rpb24gY29udGFpbmVkIG9uIHRoZSBpdGVyYWJsZSBvYmplY3QuXG4gICAqXG4gICAqIEJlIHN1cmUgdG8gaW52b2tlIHRoZSBmdW5jdGlvbiB3aXRoIHRoZSBpdGVyYWJsZSBhcyBjb250ZXh0OlxuICAgKlxuICAgKiAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG15SXRlcmFibGUpO1xuICAgKiAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICogICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG15SXRlcmFibGUpO1xuICAgKiAgICAgICAuLi5cbiAgICogICAgIH1cbiAgICpcbiAgICogQHBhcmFtIHs/b2JqZWN0fSBtYXliZUl0ZXJhYmxlXG4gICAqIEByZXR1cm4gez9mdW5jdGlvbn1cbiAgICovXG4gIGZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICAgIHZhciBpdGVyYXRvckZuID0gbWF5YmVJdGVyYWJsZSAmJiAoSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXSk7XG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gaXRlcmF0b3JGbjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ29sbGVjdGlvbiBvZiBtZXRob2RzIHRoYXQgYWxsb3cgZGVjbGFyYXRpb24gYW5kIHZhbGlkYXRpb24gb2YgcHJvcHMgdGhhdCBhcmVcbiAgICogc3VwcGxpZWQgdG8gUmVhY3QgY29tcG9uZW50cy4gRXhhbXBsZSB1c2FnZTpcbiAgICpcbiAgICogICB2YXIgUHJvcHMgPSByZXF1aXJlKCdSZWFjdFByb3BUeXBlcycpO1xuICAgKiAgIHZhciBNeUFydGljbGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAqICAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIHByb3AgbmFtZWQgXCJkZXNjcmlwdGlvblwiLlxuICAgKiAgICAgICBkZXNjcmlwdGlvbjogUHJvcHMuc3RyaW5nLFxuICAgKlxuICAgKiAgICAgICAvLyBBIHJlcXVpcmVkIGVudW0gcHJvcCBuYW1lZCBcImNhdGVnb3J5XCIuXG4gICAqICAgICAgIGNhdGVnb3J5OiBQcm9wcy5vbmVPZihbJ05ld3MnLCdQaG90b3MnXSkuaXNSZXF1aXJlZCxcbiAgICpcbiAgICogICAgICAgLy8gQSBwcm9wIG5hbWVkIFwiZGlhbG9nXCIgdGhhdCByZXF1aXJlcyBhbiBpbnN0YW5jZSBvZiBEaWFsb2cuXG4gICAqICAgICAgIGRpYWxvZzogUHJvcHMuaW5zdGFuY2VPZihEaWFsb2cpLmlzUmVxdWlyZWRcbiAgICogICAgIH0sXG4gICAqICAgICByZW5kZXI6IGZ1bmN0aW9uKCkgeyAuLi4gfVxuICAgKiAgIH0pO1xuICAgKlxuICAgKiBBIG1vcmUgZm9ybWFsIHNwZWNpZmljYXRpb24gb2YgaG93IHRoZXNlIG1ldGhvZHMgYXJlIHVzZWQ6XG4gICAqXG4gICAqICAgdHlwZSA6PSBhcnJheXxib29sfGZ1bmN8b2JqZWN0fG51bWJlcnxzdHJpbmd8b25lT2YoWy4uLl0pfGluc3RhbmNlT2YoLi4uKVxuICAgKiAgIGRlY2wgOj0gUmVhY3RQcm9wVHlwZXMue3R5cGV9KC5pc1JlcXVpcmVkKT9cbiAgICpcbiAgICogRWFjaCBhbmQgZXZlcnkgZGVjbGFyYXRpb24gcHJvZHVjZXMgYSBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIHNpZ25hdHVyZS4gVGhpc1xuICAgKiBhbGxvd3MgdGhlIGNyZWF0aW9uIG9mIGN1c3RvbSB2YWxpZGF0aW9uIGZ1bmN0aW9ucy4gRm9yIGV4YW1wbGU6XG4gICAqXG4gICAqICB2YXIgTXlMaW5rID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAvLyBBbiBvcHRpb25hbCBzdHJpbmcgb3IgVVJJIHByb3AgbmFtZWQgXCJocmVmXCIuXG4gICAqICAgICAgaHJlZjogZnVuY3Rpb24ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAqICAgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgKiAgICAgICAgaWYgKHByb3BWYWx1ZSAhPSBudWxsICYmIHR5cGVvZiBwcm9wVmFsdWUgIT09ICdzdHJpbmcnICYmXG4gICAqICAgICAgICAgICAgIShwcm9wVmFsdWUgaW5zdGFuY2VvZiBVUkkpKSB7XG4gICAqICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAqICAgICAgICAgICAgJ0V4cGVjdGVkIGEgc3RyaW5nIG9yIGFuIFVSSSBmb3IgJyArIHByb3BOYW1lICsgJyBpbiAnICtcbiAgICogICAgICAgICAgICBjb21wb25lbnROYW1lXG4gICAqICAgICAgICAgICk7XG4gICAqICAgICAgICB9XG4gICAqICAgICAgfVxuICAgKiAgICB9LFxuICAgKiAgICByZW5kZXI6IGZ1bmN0aW9uKCkgey4uLn1cbiAgICogIH0pO1xuICAgKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG5cbiAgdmFyIEFOT05ZTU9VUyA9ICc8PGFub255bW91cz4+JztcblxuICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzYC5cbiAgdmFyIFJlYWN0UHJvcFR5cGVzID0ge1xuICAgIGFycmF5OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYXJyYXknKSxcbiAgICBib29sOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYm9vbGVhbicpLFxuICAgIGZ1bmM6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdmdW5jdGlvbicpLFxuICAgIG51bWJlcjogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ251bWJlcicpLFxuICAgIG9iamVjdDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ29iamVjdCcpLFxuICAgIHN0cmluZzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N0cmluZycpLFxuICAgIHN5bWJvbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N5bWJvbCcpLFxuXG4gICAgYW55OiBjcmVhdGVBbnlUeXBlQ2hlY2tlcigpLFxuICAgIGFycmF5T2Y6IGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcixcbiAgICBlbGVtZW50OiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSxcbiAgICBlbGVtZW50VHlwZTogY3JlYXRlRWxlbWVudFR5cGVUeXBlQ2hlY2tlcigpLFxuICAgIGluc3RhbmNlT2Y6IGNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIsXG4gICAgbm9kZTogY3JlYXRlTm9kZUNoZWNrZXIoKSxcbiAgICBvYmplY3RPZjogY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlcixcbiAgICBvbmVPZjogY3JlYXRlRW51bVR5cGVDaGVja2VyLFxuICAgIG9uZU9mVHlwZTogY3JlYXRlVW5pb25UeXBlQ2hlY2tlcixcbiAgICBzaGFwZTogY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcixcbiAgICBleGFjdDogY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcixcbiAgfTtcblxuICAvKipcbiAgICogaW5saW5lZCBPYmplY3QuaXMgcG9seWZpbGwgdG8gYXZvaWQgcmVxdWlyaW5nIGNvbnN1bWVycyBzaGlwIHRoZWlyIG93blxuICAgKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3QvaXNcbiAgICovXG4gIC8qZXNsaW50LWRpc2FibGUgbm8tc2VsZi1jb21wYXJlKi9cbiAgZnVuY3Rpb24gaXMoeCwgeSkge1xuICAgIC8vIFNhbWVWYWx1ZSBhbGdvcml0aG1cbiAgICBpZiAoeCA9PT0geSkge1xuICAgICAgLy8gU3RlcHMgMS01LCA3LTEwXG4gICAgICAvLyBTdGVwcyA2LmItNi5lOiArMCAhPSAtMFxuICAgICAgcmV0dXJuIHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTdGVwIDYuYTogTmFOID09IE5hTlxuICAgICAgcmV0dXJuIHggIT09IHggJiYgeSAhPT0geTtcbiAgICB9XG4gIH1cbiAgLyplc2xpbnQtZW5hYmxlIG5vLXNlbGYtY29tcGFyZSovXG5cbiAgLyoqXG4gICAqIFdlIHVzZSBhbiBFcnJvci1saWtlIG9iamVjdCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSBhcyBwZW9wbGUgbWF5IGNhbGxcbiAgICogUHJvcFR5cGVzIGRpcmVjdGx5IGFuZCBpbnNwZWN0IHRoZWlyIG91dHB1dC4gSG93ZXZlciwgd2UgZG9uJ3QgdXNlIHJlYWxcbiAgICogRXJyb3JzIGFueW1vcmUuIFdlIGRvbid0IGluc3BlY3QgdGhlaXIgc3RhY2sgYW55d2F5LCBhbmQgY3JlYXRpbmcgdGhlbVxuICAgKiBpcyBwcm9oaWJpdGl2ZWx5IGV4cGVuc2l2ZSBpZiB0aGV5IGFyZSBjcmVhdGVkIHRvbyBvZnRlbiwgc3VjaCBhcyB3aGF0XG4gICAqIGhhcHBlbnMgaW4gb25lT2ZUeXBlKCkgZm9yIGFueSB0eXBlIGJlZm9yZSB0aGUgb25lIHRoYXQgbWF0Y2hlZC5cbiAgICovXG4gIGZ1bmN0aW9uIFByb3BUeXBlRXJyb3IobWVzc2FnZSkge1xuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgdGhpcy5zdGFjayA9ICcnO1xuICB9XG4gIC8vIE1ha2UgYGluc3RhbmNlb2YgRXJyb3JgIHN0aWxsIHdvcmsgZm9yIHJldHVybmVkIGVycm9ycy5cbiAgUHJvcFR5cGVFcnJvci5wcm90b3R5cGUgPSBFcnJvci5wcm90b3R5cGU7XG5cbiAgZnVuY3Rpb24gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdmFyIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlID0ge307XG4gICAgICB2YXIgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQgPSAwO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjaGVja1R5cGUoaXNSZXF1aXJlZCwgcHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICAgIGNvbXBvbmVudE5hbWUgPSBjb21wb25lbnROYW1lIHx8IEFOT05ZTU9VUztcbiAgICAgIHByb3BGdWxsTmFtZSA9IHByb3BGdWxsTmFtZSB8fCBwcm9wTmFtZTtcblxuICAgICAgaWYgKHNlY3JldCAhPT0gUmVhY3RQcm9wVHlwZXNTZWNyZXQpIHtcbiAgICAgICAgaWYgKHRocm93T25EaXJlY3RBY2Nlc3MpIHtcbiAgICAgICAgICAvLyBOZXcgYmVoYXZpb3Igb25seSBmb3IgdXNlcnMgb2YgYHByb3AtdHlwZXNgIHBhY2thZ2VcbiAgICAgICAgICB2YXIgZXJyID0gbmV3IEVycm9yKFxuICAgICAgICAgICAgJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgJ1VzZSBgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKClgIHRvIGNhbGwgdGhlbS4gJyArXG4gICAgICAgICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcbiAgICAgICAgICApO1xuICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIC8vIE9sZCBiZWhhdmlvciBmb3IgcGVvcGxlIHVzaW5nIFJlYWN0LlByb3BUeXBlc1xuICAgICAgICAgIHZhciBjYWNoZUtleSA9IGNvbXBvbmVudE5hbWUgKyAnOicgKyBwcm9wTmFtZTtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAhbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldICYmXG4gICAgICAgICAgICAvLyBBdm9pZCBzcGFtbWluZyB0aGUgY29uc29sZSBiZWNhdXNlIHRoZXkgYXJlIG9mdGVuIG5vdCBhY3Rpb25hYmxlIGV4Y2VwdCBmb3IgbGliIGF1dGhvcnNcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50IDwgM1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgICAnWW91IGFyZSBtYW51YWxseSBjYWxsaW5nIGEgUmVhY3QuUHJvcFR5cGVzIHZhbGlkYXRpb24gJyArXG4gICAgICAgICAgICAgICdmdW5jdGlvbiBmb3IgdGhlIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgcHJvcCBvbiBgJyArIGNvbXBvbmVudE5hbWUgICsgJ2AuIFRoaXMgaXMgZGVwcmVjYXRlZCAnICtcbiAgICAgICAgICAgICAgJ2FuZCB3aWxsIHRocm93IGluIHRoZSBzdGFuZGFsb25lIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICAgICAgICAgJ1lvdSBtYXkgYmUgc2VlaW5nIHRoaXMgd2FybmluZyBkdWUgdG8gYSB0aGlyZC1wYXJ0eSBQcm9wVHlwZXMgJyArXG4gICAgICAgICAgICAgICdsaWJyYXJ5LiBTZWUgaHR0cHM6Ly9mYi5tZS9yZWFjdC13YXJuaW5nLWRvbnQtY2FsbC1wcm9wdHlwZXMgJyArICdmb3IgZGV0YWlscy4nXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldID0gdHJ1ZTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50Kys7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09IG51bGwpIHtcbiAgICAgICAgaWYgKGlzUmVxdWlyZWQpIHtcbiAgICAgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkICcgKyAoJ2luIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGBudWxsYC4nKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgaW4gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYHVuZGVmaW5lZGAuJykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGNoYWluZWRDaGVja1R5cGUgPSBjaGVja1R5cGUuYmluZChudWxsLCBmYWxzZSk7XG4gICAgY2hhaW5lZENoZWNrVHlwZS5pc1JlcXVpcmVkID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgdHJ1ZSk7XG5cbiAgICByZXR1cm4gY2hhaW5lZENoZWNrVHlwZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKGV4cGVjdGVkVHlwZSkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gZXhwZWN0ZWRUeXBlKSB7XG4gICAgICAgIC8vIGBwcm9wVmFsdWVgIGJlaW5nIGluc3RhbmNlIG9mLCBzYXksIGRhdGUvcmVnZXhwLCBwYXNzIHRoZSAnb2JqZWN0J1xuICAgICAgICAvLyBjaGVjaywgYnV0IHdlIGNhbiBvZmZlciBhIG1vcmUgcHJlY2lzZSBlcnJvciBtZXNzYWdlIGhlcmUgcmF0aGVyIHRoYW5cbiAgICAgICAgLy8gJ29mIHR5cGUgYG9iamVjdGAnLlxuICAgICAgICB2YXIgcHJlY2lzZVR5cGUgPSBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByZWNpc2VUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdgJyArIGV4cGVjdGVkVHlwZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQW55VHlwZUNoZWNrZXIoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGwpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignUHJvcGVydHkgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiBjb21wb25lbnQgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIGFycmF5T2YuJyk7XG4gICAgICB9XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gYXJyYXkuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wVmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBpLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJ1snICsgaSArICddJywgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgc2luZ2xlIFJlYWN0RWxlbWVudC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRUeXBlVHlwZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFSZWFjdElzLmlzVmFsaWRFbGVtZW50VHlwZShwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgc2luZ2xlIFJlYWN0RWxlbWVudCB0eXBlLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcihleHBlY3RlZENsYXNzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIShwcm9wc1twcm9wTmFtZV0gaW5zdGFuY2VvZiBleHBlY3RlZENsYXNzKSkge1xuICAgICAgICB2YXIgZXhwZWN0ZWRDbGFzc05hbWUgPSBleHBlY3RlZENsYXNzLm5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgICB2YXIgYWN0dWFsQ2xhc3NOYW1lID0gZ2V0Q2xhc3NOYW1lKHByb3BzW3Byb3BOYW1lXSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIGFjdHVhbENsYXNzTmFtZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnaW5zdGFuY2Ugb2YgYCcgKyBleHBlY3RlZENsYXNzTmFtZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRW51bVR5cGVDaGVja2VyKGV4cGVjdGVkVmFsdWVzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGV4cGVjdGVkVmFsdWVzKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgJ0ludmFsaWQgYXJndW1lbnRzIHN1cHBsaWVkIHRvIG9uZU9mLCBleHBlY3RlZCBhbiBhcnJheSwgZ290ICcgKyBhcmd1bWVudHMubGVuZ3RoICsgJyBhcmd1bWVudHMuICcgK1xuICAgICAgICAgICAgJ0EgY29tbW9uIG1pc3Rha2UgaXMgdG8gd3JpdGUgb25lT2YoeCwgeSwgeikgaW5zdGVhZCBvZiBvbmVPZihbeCwgeSwgel0pLidcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByaW50V2FybmluZygnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZiwgZXhwZWN0ZWQgYW4gYXJyYXkuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXhwZWN0ZWRWYWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGlzKHByb3BWYWx1ZSwgZXhwZWN0ZWRWYWx1ZXNbaV0pKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIHZhbHVlc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGV4cGVjdGVkVmFsdWVzLCBmdW5jdGlvbiByZXBsYWNlcihrZXksIHZhbHVlKSB7XG4gICAgICAgIHZhciB0eXBlID0gZ2V0UHJlY2lzZVR5cGUodmFsdWUpO1xuICAgICAgICBpZiAodHlwZSA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgICAgICByZXR1cm4gU3RyaW5nKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdmFsdWUgYCcgKyBTdHJpbmcocHJvcFZhbHVlKSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBvbmUgb2YgJyArIHZhbHVlc1N0cmluZyArICcuJykpO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBvYmplY3RPZi4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBvYmplY3QuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIga2V5IGluIHByb3BWYWx1ZSkge1xuICAgICAgICBpZiAoaGFzKHByb3BWYWx1ZSwga2V5KSkge1xuICAgICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlVW5pb25UeXBlQ2hlY2tlcihhcnJheU9mVHlwZUNoZWNrZXJzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5T2ZUeXBlQ2hlY2tlcnMpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gcHJpbnRXYXJuaW5nKCdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZSwgZXhwZWN0ZWQgYW4gaW5zdGFuY2Ugb2YgYXJyYXkuJykgOiB2b2lkIDA7XG4gICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgIGlmICh0eXBlb2YgY2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLiBFeHBlY3RlZCBhbiBhcnJheSBvZiBjaGVjayBmdW5jdGlvbnMsIGJ1dCAnICtcbiAgICAgICAgICAncmVjZWl2ZWQgJyArIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyhjaGVja2VyKSArICcgYXQgaW5kZXggJyArIGkgKyAnLidcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgICBpZiAoY2hlY2tlcihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KSA9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVOb2RlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghaXNOb2RlKHByb3BzW3Byb3BOYW1lXSkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBSZWFjdE5vZGUuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgYCcgKyBwcm9wVHlwZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBgb2JqZWN0YC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gc2hhcGVUeXBlcykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgLy8gV2UgbmVlZCB0byBjaGVjayBhbGwga2V5cyBpbiBjYXNlIHNvbWUgYXJlIHJlcXVpcmVkIGJ1dCBtaXNzaW5nIGZyb21cbiAgICAgIC8vIHByb3BzLlxuICAgICAgdmFyIGFsbEtleXMgPSBhc3NpZ24oe30sIHByb3BzW3Byb3BOYW1lXSwgc2hhcGVUeXBlcyk7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gYWxsS2V5cykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKFxuICAgICAgICAgICAgJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGtleSBgJyArIGtleSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLicgK1xuICAgICAgICAgICAgJ1xcbkJhZCBvYmplY3Q6ICcgKyBKU09OLnN0cmluZ2lmeShwcm9wc1twcm9wTmFtZV0sIG51bGwsICcgICcpICtcbiAgICAgICAgICAgICdcXG5WYWxpZCBrZXlzOiAnICsgIEpTT04uc3RyaW5naWZ5KE9iamVjdC5rZXlzKHNoYXBlVHlwZXMpLCBudWxsLCAnICAnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc05vZGUocHJvcFZhbHVlKSB7XG4gICAgc3dpdGNoICh0eXBlb2YgcHJvcFZhbHVlKSB7XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgIHJldHVybiAhcHJvcFZhbHVlO1xuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiBwcm9wVmFsdWUuZXZlcnkoaXNOb2RlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcFZhbHVlID09PSBudWxsIHx8IGlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihwcm9wVmFsdWUpO1xuICAgICAgICBpZiAoaXRlcmF0b3JGbikge1xuICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChwcm9wVmFsdWUpO1xuICAgICAgICAgIHZhciBzdGVwO1xuICAgICAgICAgIGlmIChpdGVyYXRvckZuICE9PSBwcm9wVmFsdWUuZW50cmllcykge1xuICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgICBpZiAoIWlzTm9kZShzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJdGVyYXRvciB3aWxsIHByb3ZpZGUgZW50cnkgW2ssdl0gdHVwbGVzIHJhdGhlciB0aGFuIHZhbHVlcy5cbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgdmFyIGVudHJ5ID0gc3RlcC52YWx1ZTtcbiAgICAgICAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc05vZGUoZW50cnlbMV0pKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpIHtcbiAgICAvLyBOYXRpdmUgU3ltYm9sLlxuICAgIGlmIChwcm9wVHlwZSA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIGZhbHN5IHZhbHVlIGNhbid0IGJlIGEgU3ltYm9sXG4gICAgaWYgKCFwcm9wVmFsdWUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddID09PSAnU3ltYm9sJ1xuICAgIGlmIChwcm9wVmFsdWVbJ0BAdG9TdHJpbmdUYWcnXSA9PT0gJ1N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIEZhbGxiYWNrIGZvciBub24tc3BlYyBjb21wbGlhbnQgU3ltYm9scyB3aGljaCBhcmUgcG9seWZpbGxlZC5cbiAgICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBwcm9wVmFsdWUgaW5zdGFuY2VvZiBTeW1ib2wpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIEVxdWl2YWxlbnQgb2YgYHR5cGVvZmAgYnV0IHdpdGggc3BlY2lhbCBoYW5kbGluZyBmb3IgYXJyYXkgYW5kIHJlZ2V4cC5cbiAgZnVuY3Rpb24gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKSB7XG4gICAgdmFyIHByb3BUeXBlID0gdHlwZW9mIHByb3BWYWx1ZTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ2FycmF5JztcbiAgICB9XG4gICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgLy8gT2xkIHdlYmtpdHMgKGF0IGxlYXN0IHVudGlsIEFuZHJvaWQgNC4wKSByZXR1cm4gJ2Z1bmN0aW9uJyByYXRoZXIgdGhhblxuICAgICAgLy8gJ29iamVjdCcgZm9yIHR5cGVvZiBhIFJlZ0V4cC4gV2UnbGwgbm9ybWFsaXplIHRoaXMgaGVyZSBzbyB0aGF0IC9ibGEvXG4gICAgICAvLyBwYXNzZXMgUHJvcFR5cGVzLm9iamVjdC5cbiAgICAgIHJldHVybiAnb2JqZWN0JztcbiAgICB9XG4gICAgaWYgKGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ3N5bWJvbCc7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFRoaXMgaGFuZGxlcyBtb3JlIHR5cGVzIHRoYW4gYGdldFByb3BUeXBlYC4gT25seSB1c2VkIGZvciBlcnJvciBtZXNzYWdlcy5cbiAgLy8gU2VlIGBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcmAuXG4gIGZ1bmN0aW9uIGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSkge1xuICAgIGlmICh0eXBlb2YgcHJvcFZhbHVlID09PSAndW5kZWZpbmVkJyB8fCBwcm9wVmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiAnJyArIHByb3BWYWx1ZTtcbiAgICB9XG4gICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICBpZiAocHJvcFR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICByZXR1cm4gJ2RhdGUnO1xuICAgICAgfSBlbHNlIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgcmV0dXJuICdyZWdleHAnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcHJvcFR5cGU7XG4gIH1cblxuICAvLyBSZXR1cm5zIGEgc3RyaW5nIHRoYXQgaXMgcG9zdGZpeGVkIHRvIGEgd2FybmluZyBhYm91dCBhbiBpbnZhbGlkIHR5cGUuXG4gIC8vIEZvciBleGFtcGxlLCBcInVuZGVmaW5lZFwiIG9yIFwib2YgdHlwZSBhcnJheVwiXG4gIGZ1bmN0aW9uIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyh2YWx1ZSkge1xuICAgIHZhciB0eXBlID0gZ2V0UHJlY2lzZVR5cGUodmFsdWUpO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgcmV0dXJuICdhbiAnICsgdHlwZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICBjYXNlICdyZWdleHAnOlxuICAgICAgICByZXR1cm4gJ2EgJyArIHR5cGU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICB9XG4gIH1cblxuICAvLyBSZXR1cm5zIGNsYXNzIG5hbWUgb2YgdGhlIG9iamVjdCwgaWYgYW55LlxuICBmdW5jdGlvbiBnZXRDbGFzc05hbWUocHJvcFZhbHVlKSB7XG4gICAgaWYgKCFwcm9wVmFsdWUuY29uc3RydWN0b3IgfHwgIXByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lKSB7XG4gICAgICByZXR1cm4gQU5PTllNT1VTO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWU7XG4gIH1cblxuICBSZWFjdFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcyA9IGNoZWNrUHJvcFR5cGVzO1xuICBSZWFjdFByb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZSA9IGNoZWNrUHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlO1xuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUmVhY3RJcyA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG5cbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgZGV2ZWxvcG1lbnQgYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgdmFyIHRocm93T25EaXJlY3RBY2Nlc3MgPSB0cnVlO1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMnKShSZWFjdElzLmlzRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcyk7XG59IGVsc2Uge1xuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBwcm9kdWN0aW9uIGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMnKSgpO1xufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9ICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RQcm9wVHlwZXNTZWNyZXQ7XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE2LjguNlxuICogcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cblxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBoYXNTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3I7XG5cbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgOiAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wb3J0YWwnKSA6IDB4ZWFjYTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnJhZ21lbnQnKSA6IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3RyaWN0X21vZGUnKSA6IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvZmlsZXInKSA6IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvdmlkZXInKSA6IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb250ZXh0JykgOiAweGVhY2U7XG52YXIgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYXN5bmNfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29uY3VycmVudF9tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJykgOiAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJykgOiAweGVhZDE7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubWVtbycpIDogMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmxhenknKSA6IDB4ZWFkNDtcblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fFxuICAvLyBOb3RlOiBpdHMgdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgaWYgaXQncyBhIHBvbHlmaWxsLlxuICB0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUpO1xufVxuXG4vKipcbiAqIEZvcmtlZCBmcm9tIGZianMvd2FybmluZzpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9mYmpzL2Jsb2IvZTY2YmEyMGFkNWJlNDMzZWI1NDQyM2YyYjA5N2Q4MjkzMjRkOWRlNi9wYWNrYWdlcy9mYmpzL3NyYy9fX2ZvcmtzX18vd2FybmluZy5qc1xuICpcbiAqIE9ubHkgY2hhbmdlIGlzIHdlIHVzZSBjb25zb2xlLndhcm4gaW5zdGVhZCBvZiBjb25zb2xlLmVycm9yLFxuICogYW5kIGRvIG5vdGhpbmcgd2hlbiAnY29uc29sZScgaXMgbm90IHN1cHBvcnRlZC5cbiAqIFRoaXMgcmVhbGx5IHNpbXBsaWZpZXMgdGhlIGNvZGUuXG4gKiAtLS1cbiAqIFNpbWlsYXIgdG8gaW52YXJpYW50IGJ1dCBvbmx5IGxvZ3MgYSB3YXJuaW5nIGlmIHRoZSBjb25kaXRpb24gaXMgbm90IG1ldC5cbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gbG9nIGlzc3VlcyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMgaW4gY3JpdGljYWxcbiAqIHBhdGhzLiBSZW1vdmluZyB0aGUgbG9nZ2luZyBjb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50cyB3aWxsIGtlZXAgdGhlXG4gKiBzYW1lIGxvZ2ljIGFuZCBmb2xsb3cgdGhlIHNhbWUgY29kZSBwYXRocy5cbiAqL1xuXG52YXIgbG93UHJpb3JpdHlXYXJuaW5nID0gZnVuY3Rpb24gKCkge307XG5cbntcbiAgdmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uIChmb3JtYXQpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICB9KTtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLndhcm4obWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG5cbiAgbG93UHJpb3JpdHlXYXJuaW5nID0gZnVuY3Rpb24gKGNvbmRpdGlvbiwgZm9ybWF0KSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Bsb3dQcmlvcml0eVdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQsIC4uLmFyZ3MpYCByZXF1aXJlcyBhIHdhcm5pbmcgJyArICdtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICAgIGlmICghY29uZGl0aW9uKSB7XG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiA+IDIgPyBfbGVuMiAtIDIgOiAwKSwgX2tleTIgPSAyOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTIgLSAyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIHByaW50V2FybmluZy5hcHBseSh1bmRlZmluZWQsIFtmb3JtYXRdLmNvbmNhdChhcmdzKSk7XG4gICAgfVxuICB9O1xufVxuXG52YXIgbG93UHJpb3JpdHlXYXJuaW5nJDEgPSBsb3dQcmlvcml0eVdhcm5pbmc7XG5cbmZ1bmN0aW9uIHR5cGVPZihvYmplY3QpIHtcbiAgaWYgKHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCkge1xuICAgIHZhciAkJHR5cGVvZiA9IG9iamVjdC4kJHR5cGVvZjtcbiAgICBzd2l0Y2ggKCQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgdmFyIHR5cGUgPSBvYmplY3QudHlwZTtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0FTWU5DX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgICAgICAgIHJldHVybiB0eXBlO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YXIgJCR0eXBlb2ZUeXBlID0gdHlwZSAmJiB0eXBlLiQkdHlwZW9mO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mVHlwZTtcbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuLy8gQXN5bmNNb2RlIGlzIGRlcHJlY2F0ZWQgYWxvbmcgd2l0aCBpc0FzeW5jTW9kZVxudmFyIEFzeW5jTW9kZSA9IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbnZhciBDb25jdXJyZW50TW9kZSA9IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xudmFyIENvbnRleHRDb25zdW1lciA9IFJFQUNUX0NPTlRFWFRfVFlQRTtcbnZhciBDb250ZXh0UHJvdmlkZXIgPSBSRUFDVF9QUk9WSURFUl9UWVBFO1xudmFyIEVsZW1lbnQgPSBSRUFDVF9FTEVNRU5UX1RZUEU7XG52YXIgRm9yd2FyZFJlZiA9IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG52YXIgRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xudmFyIExhenkgPSBSRUFDVF9MQVpZX1RZUEU7XG52YXIgTWVtbyA9IFJFQUNUX01FTU9fVFlQRTtcbnZhciBQb3J0YWwgPSBSRUFDVF9QT1JUQUxfVFlQRTtcbnZhciBQcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG52YXIgU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG52YXIgU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xuXG52YXIgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSBmYWxzZTtcblxuLy8gQXN5bmNNb2RlIHNob3VsZCBiZSBkZXByZWNhdGVkXG5mdW5jdGlvbiBpc0FzeW5jTW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gdHJ1ZTtcbiAgICAgIGxvd1ByaW9yaXR5V2FybmluZyQxKGZhbHNlLCAnVGhlIFJlYWN0SXMuaXNBc3luY01vZGUoKSBhbGlhcyBoYXMgYmVlbiBkZXByZWNhdGVkLCAnICsgJ2FuZCB3aWxsIGJlIHJlbW92ZWQgaW4gUmVhY3QgMTcrLiBVcGRhdGUgeW91ciBjb2RlIHRvIHVzZSAnICsgJ1JlYWN0SXMuaXNDb25jdXJyZW50TW9kZSgpIGluc3RlYWQuIEl0IGhhcyB0aGUgZXhhY3Qgc2FtZSBBUEkuJyk7XG4gICAgfVxuICB9XG4gIHJldHVybiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkgfHwgdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRDb25zdW1lcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05URVhUX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRQcm92aWRlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9WSURFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNGb3J3YXJkUmVmKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZyYWdtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0xhenkob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTEFaWV9UWVBFO1xufVxuZnVuY3Rpb24gaXNNZW1vKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX01FTU9fVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUG9ydGFsKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BPUlRBTF9UWVBFO1xufVxuZnVuY3Rpb24gaXNQcm9maWxlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdHJpY3RNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N1c3BlbnNlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG59XG5cbmV4cG9ydHMudHlwZU9mID0gdHlwZU9mO1xuZXhwb3J0cy5Bc3luY01vZGUgPSBBc3luY01vZGU7XG5leHBvcnRzLkNvbmN1cnJlbnRNb2RlID0gQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLkNvbnRleHRDb25zdW1lciA9IENvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuQ29udGV4dFByb3ZpZGVyID0gQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5FbGVtZW50ID0gRWxlbWVudDtcbmV4cG9ydHMuRm9yd2FyZFJlZiA9IEZvcndhcmRSZWY7XG5leHBvcnRzLkZyYWdtZW50ID0gRnJhZ21lbnQ7XG5leHBvcnRzLkxhenkgPSBMYXp5O1xuZXhwb3J0cy5NZW1vID0gTWVtbztcbmV4cG9ydHMuUG9ydGFsID0gUG9ydGFsO1xuZXhwb3J0cy5Qcm9maWxlciA9IFByb2ZpbGVyO1xuZXhwb3J0cy5TdHJpY3RNb2RlID0gU3RyaWN0TW9kZTtcbmV4cG9ydHMuU3VzcGVuc2UgPSBTdXNwZW5zZTtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlO1xuZXhwb3J0cy5pc0FzeW5jTW9kZSA9IGlzQXN5bmNNb2RlO1xuZXhwb3J0cy5pc0NvbmN1cnJlbnRNb2RlID0gaXNDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuaXNDb250ZXh0Q29uc3VtZXIgPSBpc0NvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuaXNDb250ZXh0UHJvdmlkZXIgPSBpc0NvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuaXNFbGVtZW50ID0gaXNFbGVtZW50O1xuZXhwb3J0cy5pc0ZvcndhcmRSZWYgPSBpc0ZvcndhcmRSZWY7XG5leHBvcnRzLmlzRnJhZ21lbnQgPSBpc0ZyYWdtZW50O1xuZXhwb3J0cy5pc0xhenkgPSBpc0xhenk7XG5leHBvcnRzLmlzTWVtbyA9IGlzTWVtbztcbmV4cG9ydHMuaXNQb3J0YWwgPSBpc1BvcnRhbDtcbmV4cG9ydHMuaXNQcm9maWxlciA9IGlzUHJvZmlsZXI7XG5leHBvcnRzLmlzU3RyaWN0TW9kZSA9IGlzU3RyaWN0TW9kZTtcbmV4cG9ydHMuaXNTdXNwZW5zZSA9IGlzU3VzcGVuc2U7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIi8qIVxuICAqICRzY3JpcHQuanMgSlMgbG9hZGVyICYgZGVwZW5kZW5jeSBtYW5hZ2VyXG4gICogaHR0cHM6Ly9naXRodWIuY29tL2RlZC9zY3JpcHQuanNcbiAgKiAoYykgRHVzdGluIERpYXogMjAxNCB8IExpY2Vuc2UgTUlUXG4gICovXG5cbihmdW5jdGlvbiAobmFtZSwgZGVmaW5pdGlvbikge1xuICBpZiAodHlwZW9mIG1vZHVsZSAhPSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykgbW9kdWxlLmV4cG9ydHMgPSBkZWZpbml0aW9uKClcbiAgZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIGRlZmluZShkZWZpbml0aW9uKVxuICBlbHNlIHRoaXNbbmFtZV0gPSBkZWZpbml0aW9uKClcbn0pKCckc2NyaXB0JywgZnVuY3Rpb24gKCkge1xuICB2YXIgZG9jID0gZG9jdW1lbnRcbiAgICAsIGhlYWQgPSBkb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXVxuICAgICwgcyA9ICdzdHJpbmcnXG4gICAgLCBmID0gZmFsc2VcbiAgICAsIHB1c2ggPSAncHVzaCdcbiAgICAsIHJlYWR5U3RhdGUgPSAncmVhZHlTdGF0ZSdcbiAgICAsIG9ucmVhZHlzdGF0ZWNoYW5nZSA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnXG4gICAgLCBsaXN0ID0ge31cbiAgICAsIGlkcyA9IHt9XG4gICAgLCBkZWxheSA9IHt9XG4gICAgLCBzY3JpcHRzID0ge31cbiAgICAsIHNjcmlwdHBhdGhcbiAgICAsIHVybEFyZ3NcblxuICBmdW5jdGlvbiBldmVyeShhciwgZm4pIHtcbiAgICBmb3IgKHZhciBpID0gMCwgaiA9IGFyLmxlbmd0aDsgaSA8IGo7ICsraSkgaWYgKCFmbihhcltpXSkpIHJldHVybiBmXG4gICAgcmV0dXJuIDFcbiAgfVxuICBmdW5jdGlvbiBlYWNoKGFyLCBmbikge1xuICAgIGV2ZXJ5KGFyLCBmdW5jdGlvbiAoZWwpIHtcbiAgICAgIGZuKGVsKVxuICAgICAgcmV0dXJuIDFcbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gJHNjcmlwdChwYXRocywgaWRPckRvbmUsIG9wdERvbmUpIHtcbiAgICBwYXRocyA9IHBhdGhzW3B1c2hdID8gcGF0aHMgOiBbcGF0aHNdXG4gICAgdmFyIGlkT3JEb25lSXNEb25lID0gaWRPckRvbmUgJiYgaWRPckRvbmUuY2FsbFxuICAgICAgLCBkb25lID0gaWRPckRvbmVJc0RvbmUgPyBpZE9yRG9uZSA6IG9wdERvbmVcbiAgICAgICwgaWQgPSBpZE9yRG9uZUlzRG9uZSA/IHBhdGhzLmpvaW4oJycpIDogaWRPckRvbmVcbiAgICAgICwgcXVldWUgPSBwYXRocy5sZW5ndGhcbiAgICBmdW5jdGlvbiBsb29wRm4oaXRlbSkge1xuICAgICAgcmV0dXJuIGl0ZW0uY2FsbCA/IGl0ZW0oKSA6IGxpc3RbaXRlbV1cbiAgICB9XG4gICAgZnVuY3Rpb24gY2FsbGJhY2soKSB7XG4gICAgICBpZiAoIS0tcXVldWUpIHtcbiAgICAgICAgbGlzdFtpZF0gPSAxXG4gICAgICAgIGRvbmUgJiYgZG9uZSgpXG4gICAgICAgIGZvciAodmFyIGRzZXQgaW4gZGVsYXkpIHtcbiAgICAgICAgICBldmVyeShkc2V0LnNwbGl0KCd8JyksIGxvb3BGbikgJiYgIWVhY2goZGVsYXlbZHNldF0sIGxvb3BGbikgJiYgKGRlbGF5W2RzZXRdID0gW10pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBlYWNoKHBhdGhzLCBmdW5jdGlvbiBsb2FkaW5nKHBhdGgsIGZvcmNlKSB7XG4gICAgICAgIGlmIChwYXRoID09PSBudWxsKSByZXR1cm4gY2FsbGJhY2soKVxuICAgICAgICBcbiAgICAgICAgaWYgKCFmb3JjZSAmJiAhL15odHRwcz86XFwvXFwvLy50ZXN0KHBhdGgpICYmIHNjcmlwdHBhdGgpIHtcbiAgICAgICAgICBwYXRoID0gKHBhdGguaW5kZXhPZignLmpzJykgPT09IC0xKSA/IHNjcmlwdHBhdGggKyBwYXRoICsgJy5qcycgOiBzY3JpcHRwYXRoICsgcGF0aDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKHNjcmlwdHNbcGF0aF0pIHtcbiAgICAgICAgICBpZiAoaWQpIGlkc1tpZF0gPSAxXG4gICAgICAgICAgcmV0dXJuIChzY3JpcHRzW3BhdGhdID09IDIpID8gY2FsbGJhY2soKSA6IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyBsb2FkaW5nKHBhdGgsIHRydWUpIH0sIDApXG4gICAgICAgIH1cblxuICAgICAgICBzY3JpcHRzW3BhdGhdID0gMVxuICAgICAgICBpZiAoaWQpIGlkc1tpZF0gPSAxXG4gICAgICAgIGNyZWF0ZShwYXRoLCBjYWxsYmFjaylcbiAgICAgIH0pXG4gICAgfSwgMClcbiAgICByZXR1cm4gJHNjcmlwdFxuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlKHBhdGgsIGZuKSB7XG4gICAgdmFyIGVsID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpLCBsb2FkZWRcbiAgICBlbC5vbmxvYWQgPSBlbC5vbmVycm9yID0gZWxbb25yZWFkeXN0YXRlY2hhbmdlXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICgoZWxbcmVhZHlTdGF0ZV0gJiYgISgvXmN8bG9hZGUvLnRlc3QoZWxbcmVhZHlTdGF0ZV0pKSkgfHwgbG9hZGVkKSByZXR1cm47XG4gICAgICBlbC5vbmxvYWQgPSBlbFtvbnJlYWR5c3RhdGVjaGFuZ2VdID0gbnVsbFxuICAgICAgbG9hZGVkID0gMVxuICAgICAgc2NyaXB0c1twYXRoXSA9IDJcbiAgICAgIGZuKClcbiAgICB9XG4gICAgZWwuYXN5bmMgPSAxXG4gICAgZWwuc3JjID0gdXJsQXJncyA/IHBhdGggKyAocGF0aC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArIHVybEFyZ3MgOiBwYXRoO1xuICAgIGhlYWQuaW5zZXJ0QmVmb3JlKGVsLCBoZWFkLmxhc3RDaGlsZClcbiAgfVxuXG4gICRzY3JpcHQuZ2V0ID0gY3JlYXRlXG5cbiAgJHNjcmlwdC5vcmRlciA9IGZ1bmN0aW9uIChzY3JpcHRzLCBpZCwgZG9uZSkge1xuICAgIChmdW5jdGlvbiBjYWxsYmFjayhzKSB7XG4gICAgICBzID0gc2NyaXB0cy5zaGlmdCgpXG4gICAgICAhc2NyaXB0cy5sZW5ndGggPyAkc2NyaXB0KHMsIGlkLCBkb25lKSA6ICRzY3JpcHQocywgY2FsbGJhY2spXG4gICAgfSgpKVxuICB9XG5cbiAgJHNjcmlwdC5wYXRoID0gZnVuY3Rpb24gKHApIHtcbiAgICBzY3JpcHRwYXRoID0gcFxuICB9XG4gICRzY3JpcHQudXJsQXJncyA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICB1cmxBcmdzID0gc3RyO1xuICB9XG4gICRzY3JpcHQucmVhZHkgPSBmdW5jdGlvbiAoZGVwcywgcmVhZHksIHJlcSkge1xuICAgIGRlcHMgPSBkZXBzW3B1c2hdID8gZGVwcyA6IFtkZXBzXVxuICAgIHZhciBtaXNzaW5nID0gW107XG4gICAgIWVhY2goZGVwcywgZnVuY3Rpb24gKGRlcCkge1xuICAgICAgbGlzdFtkZXBdIHx8IG1pc3NpbmdbcHVzaF0oZGVwKTtcbiAgICB9KSAmJiBldmVyeShkZXBzLCBmdW5jdGlvbiAoZGVwKSB7cmV0dXJuIGxpc3RbZGVwXX0pID9cbiAgICAgIHJlYWR5KCkgOiAhZnVuY3Rpb24gKGtleSkge1xuICAgICAgZGVsYXlba2V5XSA9IGRlbGF5W2tleV0gfHwgW11cbiAgICAgIGRlbGF5W2tleV1bcHVzaF0ocmVhZHkpXG4gICAgICByZXEgJiYgcmVxKG1pc3NpbmcpXG4gICAgfShkZXBzLmpvaW4oJ3wnKSlcbiAgICByZXR1cm4gJHNjcmlwdFxuICB9XG5cbiAgJHNjcmlwdC5kb25lID0gZnVuY3Rpb24gKGlkT3JEb25lKSB7XG4gICAgJHNjcmlwdChbbnVsbF0sIGlkT3JEb25lKVxuICB9XG5cbiAgcmV0dXJuICRzY3JpcHRcbn0pO1xuIiwiLyoqXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IHsgQmFja2dyb3VuZEF0dHJpYnV0ZXMsIEp1c3RpZnlDb250ZW50LCBBbGlnbkl0ZW1zIH0gZnJvbSBcIi4uL3V0aWxzXCI7XG5cbi8qKlxuICogR2V0IHJhdGlvXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRSYXRpbyA9ICh4OiBudW1iZXIsIHk6IG51bWJlcikgPT4gKHkgLyB4KSAqIDEwMDtcblxuLyoqXG4gKiBBdHRyaWJ1dGVzIGludGVyZmFjZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEFzcGVjdFJhdGlvQXR0cmlidXRlcyBleHRlbmRzIEJhY2tncm91bmRBdHRyaWJ1dGVzIHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIG1pbkhlaWdodDogbnVtYmVyO1xuICBhZGRNaW5IZWlnaHQ6IGJvb2xlYW47XG4gIG1pbkhlaWdodFVuaXQ6IHN0cmluZztcbiAganVzdGlmeUNvbnRlbnQ6IEp1c3RpZnlDb250ZW50O1xuICBhbGlnbkl0ZW1zOiBBbGlnbkl0ZW1zO1xufVxuIiwiLyoqXG4gKiBFeHRlcm5hbCBEZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29vcmRzLCBNYXBPcHRpb25zLCBNYXBUeXBlU3R5bGUgfSBmcm9tIFwiZ29vZ2xlLW1hcC1yZWFjdFwiO1xuXG4vKipcbiAqIEdldCBjZW50ZXJcbiAqL1xuZXhwb3J0IGNvbnN0IGdldENlbnRlciA9ICh7IGxhdCwgbG5nIH06IENvb3JkcykgPT4gKHtcbiAgbGF0LFxuICBsbmdcbn0pO1xuXG4vKipcbiAqIE1hcCBpY29uXG4gKi9cbmV4cG9ydCBjb25zdCBNYXBJY29uID0gKFxuICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDU3NiA1MTJcIj5cbiAgICA8cGF0aFxuICAgICAgZmlsbD1cIiMwMDBcIlxuICAgICAgZD1cIk0yODggMGMtNjkuNTkgMC0xMjYgNTYuNDEtMTI2IDEyNiAwIDU2LjI2IDgyLjM1IDE1OC44IDExMy45IDE5Ni4wMiA2LjM5IDcuNTQgMTcuODIgNy41NCAyNC4yIDBDMzMxLjY1IDI4NC44IDQxNCAxODIuMjYgNDE0IDEyNiA0MTQgNTYuNDEgMzU3LjU5IDAgMjg4IDB6bTAgMTY4Yy0yMy4yIDAtNDItMTguOC00Mi00MnMxOC44LTQyIDQyLTQyIDQyIDE4LjggNDIgNDItMTguOCA0Mi00MiA0MnpNMjAuMTIgMjE1Ljk1QTMyLjAwNiAzMi4wMDYgMCAwIDAgMCAyNDUuNjZ2MjUwLjMyYzAgMTEuMzIgMTEuNDMgMTkuMDYgMjEuOTQgMTQuODZMMTYwIDQ0OFYyMTQuOTJjLTguODQtMTUuOTgtMTYuMDctMzEuNTQtMjEuMjUtNDYuNDJMMjAuMTIgMjE1Ljk1ek0yODggMzU5LjY3Yy0xNC4wNyAwLTI3LjM4LTYuMTgtMzYuNTEtMTYuOTYtMTkuNjYtMjMuMi00MC41Ny00OS42Mi01OS40OS03Ni43MnYxODJsMTkyIDY0VjI2NmMtMTguOTIgMjcuMDktMzkuODIgNTMuNTItNTkuNDkgNzYuNzItOS4xMyAxMC43Ny0yMi40NCAxNi45NS0zNi41MSAxNi45NXptMjY2LjA2LTE5OC41MUw0MTYgMjI0djI4OGwxMzkuODgtNTUuOTVBMzEuOTk2IDMxLjk5NiAwIDAgMCA1NzYgNDI2LjM0VjE3Ni4wMmMwLTExLjMyLTExLjQzLTE5LjA2LTIxLjk0LTE0Ljg2elwiXG4gICAgLz5cbiAgPC9zdmc+XG4pO1xuXG4vKipcbiAqIE1hcmtlciBpbnRlcmZhY2VcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBNYXJrZXJJbnRlcmZhY2UgZXh0ZW5kcyBDb29yZHMge1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgYWRkcmVzcz86IHN0cmluZztcbn1cblxuLyoqXG4gKiBNYXAgbWFya2VyXG4gKi9cbmV4cG9ydCBjb25zdCBNYXJrZXIgPSAoeyBsYXQsIGxuZywgZGVzY3JpcHRpb24gfTogTWFya2VySW50ZXJmYWNlKSA9PlxuICBsYXQgJiZcbiAgbG5nICYmIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2Fuc3RlbGx3YXktZ29vZ2xlLW1hcC0tbWFya2VyXCI+XG4gICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDM4NCA1MTJcIj5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBmaWxsPVwiI0VBNDMzNVwiXG4gICAgICAgICAgZD1cIk0xNzIuMjY4IDUwMS42N0MyNi45NyAyOTEuMDMxIDAgMjY5LjQxMyAwIDE5MiAwIDg1Ljk2MSA4NS45NjEgMCAxOTIgMHMxOTIgODUuOTYxIDE5MiAxOTJjMCA3Ny40MTMtMjYuOTcgOTkuMDMxLTE3Mi4yNjggMzA5LjY3LTkuNTM1IDEzLjc3NC0yOS45MyAxMy43NzMtMzkuNDY0IDB6TTE5MiAyNzJjNDQuMTgzIDAgODAtMzUuODE3IDgwLTgwcy0zNS44MTctODAtODAtODAtODAgMzUuODE3LTgwIDgwIDM1LjgxNyA4MCA4MCA4MHpcIlxuICAgICAgICAvPlxuICAgICAgPC9zdmc+XG4gICAgICB7ZGVzY3JpcHRpb24gJiYgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntkZXNjcmlwdGlvbn08L2Rpdj59XG4gICAgPC9kaXY+XG4gICk7XG5cbi8qKlxuICogQXR0cmlidXRlcyBpbnRlcmZhY2VcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBHb29nbGVNYXBzQXR0cmlidXRlcyBleHRlbmRzIENvb3JkcyB7XG4gIGFwaUtleTogc3RyaW5nO1xuICB6b29tOiBudW1iZXI7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICBtaW5IZWlnaHQ6IG51bWJlcjtcbiAgYWRkTWluSGVpZ2h0OiBib29sZWFuO1xuICBtaW5IZWlnaHRVbml0OiBzdHJpbmc7XG4gIGFkZHJlc3M6IHN0cmluZztcbiAgbWFya2VyczogTWFya2VySW50ZXJmYWNlW107XG4gIG1hcE9wdGlvbnM6IFBhcnRpYWw8TWFwT3B0aW9ucz47XG59XG4iLCIvKipcbiAqIEV4dGVybmFsIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgR29vZ2xlTWFwUmVhY3QgZnJvbSBcImdvb2dsZS1tYXAtcmVhY3RcIjtcblxuLyoqXG4gKiBXb3JkUHJlc3MgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSBcIkB3b3JkcHJlc3MvZWxlbWVudFwiO1xuXG4vKipcbiAqIEludGVybmFsIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgeyBnZXRSYXRpbyB9IGZyb20gXCIuL2Jsb2Nrcy9hc3BlY3QtcmF0aW8vdXRpbHNcIjtcbmltcG9ydCB7IGdldENlbnRlciwgTWFya2VyIH0gZnJvbSBcIi4vYmxvY2tzL2dvb2dsZS1tYXAvdXRpbHNcIjtcblxuKCgpID0+IHtcbiAgLy8gR29vZ2xlIE1hcFxuICBbXS5mb3JFYWNoLmNhbGwoXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNjcmlwdC53cC1ibG9jay1sb2dhbnN0ZWxsd2F5LWdvb2dsZS1tYXBcIiksXG4gICAgbWFwID0+IHtcbiAgICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBKU09OLnBhcnNlKG1hcC5pbm5lckhUTUwpO1xuICAgICAgY29uc3Qge1xuICAgICAgICBhcGlLZXksXG4gICAgICAgIHgsXG4gICAgICAgIHksXG4gICAgICAgIGxhdCxcbiAgICAgICAgbG5nLFxuICAgICAgICB6b29tLFxuICAgICAgICBtYXJrZXJzLFxuICAgICAgICBtaW5IZWlnaHQsXG4gICAgICAgIG1hcE9wdGlvbnNcbiAgICAgIH0gPSBhdHRyaWJ1dGVzO1xuXG4gICAgICBpZiAoXG4gICAgICAgIGFwaUtleSAmJlxuICAgICAgICB4ICYmXG4gICAgICAgIHkgJiZcbiAgICAgICAgbGF0ICYmXG4gICAgICAgIGxuZyAmJlxuICAgICAgICB6b29tICYmXG4gICAgICAgIG1hcmtlcnMgJiZcbiAgICAgICAgdHlwZW9mIG1hcmtlcnMubGVuZ3RoICE9IFwidW5kZWZpbmVkXCJcbiAgICAgICkge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gKFxuICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiBgJHtnZXRSYXRpbyh4LCB5KX0lYCxcbiAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6IG1pbkhlaWdodFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nYW5zdGVsbHdheS1hc3BlY3QtcmF0aW8tY29udGVudFwiPlxuICAgICAgICAgICAgICA8R29vZ2xlTWFwUmVhY3RcbiAgICAgICAgICAgICAgICBjZW50ZXI9e2dldENlbnRlcihhdHRyaWJ1dGVzKX1cbiAgICAgICAgICAgICAgICB6b29tPXt6b29tfVxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e21hcE9wdGlvbnN9XG4gICAgICAgICAgICAgICAgYm9vdHN0cmFwVVJMS2V5cz17eyBrZXk6IGFwaUtleSB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge21hcmtlcnMubWFwKChtYXJrZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCB7IGxhdCwgbG5nLCBkZXNjcmlwdGlvbiB9ID0gbWFya2VyO1xuXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8TWFya2VyXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICBsYXQ9e2xhdH1cbiAgICAgICAgICAgICAgICAgICAgICBsbmc9e2xuZ31cbiAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L0dvb2dsZU1hcFJlYWN0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGVsLmNsYXNzTmFtZSA9IGAke21hcC5jbGFzc05hbWV9IGxvZ2Fuc3RlbGx3YXktYXNwZWN0LXJhdGlvLWNvbnRhaW5lcmA7XG4gICAgICAgIG1hcC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChlbCwgbWFwKTtcbiAgICAgICAgUmVhY3RET00ucmVuZGVyKGNvbnRlbnQsIGVsKTtcbiAgICAgIH1cbiAgICB9XG4gICk7XG59KSgpO1xuIiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJ3cFwiXVtcImVsZW1lbnRcIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJSZWFjdFwiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcIlJlYWN0RE9NXCJdOyB9KCkpOyJdLCJzb3VyY2VSb290IjoiIn0=