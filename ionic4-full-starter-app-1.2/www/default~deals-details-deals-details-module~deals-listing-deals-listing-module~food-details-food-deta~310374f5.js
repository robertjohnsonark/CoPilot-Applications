(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~deals-details-deals-details-module~deals-listing-deals-listing-module~food-details-food-deta~310374f5"],{

/***/ "./node_modules/angular-pipes/fesm5/angular-pipes.js":
/*!***********************************************************!*\
  !*** ./node_modules/angular-pipes/fesm5/angular-pipes.js ***!
  \***********************************************************/
/*! exports provided: NgAggregatePipesModule, NgArrayPipesModule, NgBooleanPipesModule, NgMathPipesModule, NgObjectPipesModule, NgStringPipesModule, NgPipesModule, GroupByPipe, MaxPipe, MeanPipe, MinPipe, SumPipe, EmptyPipe, HeadPipe, InitialPipe, LastPipe, JoinPipe, TailPipe, UniqPipe, WithoutPipe, MapPipe, WherePipe, FirstOrDefaultPipe, RangePipe, PluckPipe, ReversePipe, OrderByPipe, CountPipe, SomePipe, EveryPipe, ShufflePipe, TakePipe, DropPipe, DeepPipe, ChunkPipe, FlattenPipe, IntersectionPipe, UnionPipe, TakeWhilePipe, TakeUntilPipe, IsEqualPipe, IsGreaterOrEqualPipe, IsGreaterPipe, IsLessOrEqualPipe, IsIdenticalPipe, IsLessPipe, IsNotEqualPipe, IsNotIdenticalPipe, IsArrayPipe, IsDefinedPipe, IsFunctionPipe, IsNilPipe, IsNullPipe, IsNumberPipe, IsObjectPipe, IsStringPipe, IsUndefinedPipe, BytesPipe, CeilPipe, FloorPipe, RoundPipe, DegreesPipe, RadiansPipe, RandomPipe, SqrtPipe, PowPipe, AbsPipe, OrdinalPipe, KeysPipe, ToArrayPipe, DefaultsPipe, LeftPadPipe, MatchPipe, PadPipe, ReplacePipe, RightPadPipe, SplitPipe, TestPipe, TrimPipe, NewlinesPipe, CapitalizePipe, UpperFirstPipe, TemplatePipe, EncodeURIPipe, EncodeURIComponentPipe, DecodeURIPipe, DecodeURIComponentPipe, TruncatePipe, RepeatPipe, SlugifyPipe, StripTagsPipe, LatinizePipe, WrapPipe, WithPipe, ReverseStrPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgAggregatePipesModule", function() { return NgAggregatePipesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgArrayPipesModule", function() { return NgArrayPipesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgBooleanPipesModule", function() { return NgBooleanPipesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgMathPipesModule", function() { return NgMathPipesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgObjectPipesModule", function() { return NgObjectPipesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgStringPipesModule", function() { return NgStringPipesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgPipesModule", function() { return NgPipesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupByPipe", function() { return GroupByPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaxPipe", function() { return MaxPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeanPipe", function() { return MeanPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinPipe", function() { return MinPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SumPipe", function() { return SumPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyPipe", function() { return EmptyPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadPipe", function() { return HeadPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitialPipe", function() { return InitialPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LastPipe", function() { return LastPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinPipe", function() { return JoinPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TailPipe", function() { return TailPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqPipe", function() { return UniqPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithoutPipe", function() { return WithoutPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPipe", function() { return MapPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WherePipe", function() { return WherePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstOrDefaultPipe", function() { return FirstOrDefaultPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangePipe", function() { return RangePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PluckPipe", function() { return PluckPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReversePipe", function() { return ReversePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderByPipe", function() { return OrderByPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountPipe", function() { return CountPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SomePipe", function() { return SomePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EveryPipe", function() { return EveryPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShufflePipe", function() { return ShufflePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TakePipe", function() { return TakePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropPipe", function() { return DropPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeepPipe", function() { return DeepPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChunkPipe", function() { return ChunkPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlattenPipe", function() { return FlattenPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntersectionPipe", function() { return IntersectionPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnionPipe", function() { return UnionPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TakeWhilePipe", function() { return TakeWhilePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TakeUntilPipe", function() { return TakeUntilPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsEqualPipe", function() { return IsEqualPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsGreaterOrEqualPipe", function() { return IsGreaterOrEqualPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsGreaterPipe", function() { return IsGreaterPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsLessOrEqualPipe", function() { return IsLessOrEqualPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsIdenticalPipe", function() { return IsIdenticalPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsLessPipe", function() { return IsLessPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsNotEqualPipe", function() { return IsNotEqualPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsNotIdenticalPipe", function() { return IsNotIdenticalPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsArrayPipe", function() { return IsArrayPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsDefinedPipe", function() { return IsDefinedPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsFunctionPipe", function() { return IsFunctionPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsNilPipe", function() { return IsNilPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsNullPipe", function() { return IsNullPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsNumberPipe", function() { return IsNumberPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsObjectPipe", function() { return IsObjectPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsStringPipe", function() { return IsStringPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsUndefinedPipe", function() { return IsUndefinedPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BytesPipe", function() { return BytesPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CeilPipe", function() { return CeilPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloorPipe", function() { return FloorPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoundPipe", function() { return RoundPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DegreesPipe", function() { return DegreesPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadiansPipe", function() { return RadiansPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RandomPipe", function() { return RandomPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SqrtPipe", function() { return SqrtPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PowPipe", function() { return PowPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbsPipe", function() { return AbsPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdinalPipe", function() { return OrdinalPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeysPipe", function() { return KeysPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToArrayPipe", function() { return ToArrayPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultsPipe", function() { return DefaultsPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftPadPipe", function() { return LeftPadPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchPipe", function() { return MatchPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PadPipe", function() { return PadPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplacePipe", function() { return ReplacePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightPadPipe", function() { return RightPadPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplitPipe", function() { return SplitPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPipe", function() { return TestPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrimPipe", function() { return TrimPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewlinesPipe", function() { return NewlinesPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapitalizePipe", function() { return CapitalizePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpperFirstPipe", function() { return UpperFirstPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplatePipe", function() { return TemplatePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncodeURIPipe", function() { return EncodeURIPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncodeURIComponentPipe", function() { return EncodeURIComponentPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DecodeURIPipe", function() { return DecodeURIPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DecodeURIComponentPipe", function() { return DecodeURIComponentPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruncatePipe", function() { return TruncatePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepeatPipe", function() { return RepeatPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlugifyPipe", function() { return SlugifyPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripTagsPipe", function() { return StripTagsPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LatinizePipe", function() { return LatinizePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrapPipe", function() { return WrapPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithPipe", function() { return WithPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReverseStrPipe", function() { return ReverseStrPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @param {?} value
 * @return {?}
 */
function isUndefined(value) {
    return typeof value === 'undefined';
}
/**
 * @param {?} value
 * @return {?}
 */
function isNull(value) {
    return value === null;
}
/**
 * @param {?} value
 * @return {?}
 */
function isNumber(value) {
    return typeof value === 'number';
}
/**
 * @param {?} value
 * @return {?}
 */
function isNumberFinite(value) {
    return isNumber(value) && isFinite(value);
}
// Not strict positive
/**
 * @param {?} value
 * @return {?}
 */
function isPositive(value) {
    return value >= 0;
}
/**
 * @param {?} value
 * @return {?}
 */
function isInteger(value) {
    // No rest, is an integer
    return (value % 1) === 0;
}
/**
 * @param {?} value
 * @return {?}
 */
function isNil(value) {
    return value === null || typeof (value) === 'undefined';
}
/**
 * @param {?} value
 * @return {?}
 */
function isString(value) {
    return typeof value === 'string';
}
/**
 * @param {?} value
 * @return {?}
 */
function isObject(value) {
    return value !== null && typeof value === 'object';
}
/**
 * @param {?} value
 * @return {?}
 */
function isArray(value) {
    return Array.isArray(value);
}
/**
 * @param {?} value
 * @return {?}
 */
function isFunction(value) {
    return typeof value === 'function';
}
/**
 * @param {?} value
 * @param {?} decimal
 * @return {?}
 */
function toDecimal(value, decimal) {
    return Math.round(value * Math.pow(10, decimal)) / Math.pow(10, decimal);
}
/**
 * @param {?} value
 * @return {?}
 */
function upperFirst(value) {
    return value.slice(0, 1).toUpperCase() + value.slice(1);
}
/**
 * @param {?} method
 * @return {?}
 */
function createRound(method) {
    // <any>Math to suppress error
    /** @type {?} */
    var func = ((/** @type {?} */ (Math)))[method];
    return function (value, precision) {
        if (precision === void 0) { precision = 0; }
        if (typeof value === 'string') {
            throw new TypeError('Rounding method needs a number');
        }
        if (typeof precision !== 'number' || isNaN(precision)) {
            precision = 0;
        }
        if (precision) {
            /** @type {?} */
            var pair = (value + "e").split('e');
            /** @type {?} */
            var val = func(pair[0] + "e" + (+pair[1] + precision));
            pair = (val + "e").split('e');
            return +(pair[0] + 'e' + (+pair[1] - precision));
        }
        return func(value);
    };
}
/**
 * @param {?} str
 * @param {?=} len
 * @param {?=} ch
 * @return {?}
 */
function leftPad(str, len, ch) {
    if (len === void 0) { len = 0; }
    if (ch === void 0) { ch = ' '; }
    str = String(str);
    ch = toString(ch);
    /** @type {?} */
    var i = -1;
    /** @type {?} */
    var length = len - str.length;
    while (++i < length && (str.length + ch.length) <= len) {
        str = ch + str;
    }
    return str;
}
/**
 * @param {?} str
 * @param {?=} len
 * @param {?=} ch
 * @return {?}
 */
function rightPad(str, len, ch) {
    if (len === void 0) { len = 0; }
    if (ch === void 0) { ch = ' '; }
    str = String(str);
    ch = toString(ch);
    /** @type {?} */
    var i = -1;
    /** @type {?} */
    var length = len - str.length;
    while (++i < length && (str.length + ch.length) <= len) {
        str += ch;
    }
    return str;
}
/**
 * @param {?} value
 * @return {?}
 */
function toString(value) {
    return "" + value;
}
/**
 * @param {?} str
 * @param {?=} len
 * @param {?=} ch
 * @return {?}
 */
function pad(str, len, ch) {
    if (len === void 0) { len = 0; }
    if (ch === void 0) { ch = ' '; }
    str = String(str);
    ch = toString(ch);
    /** @type {?} */
    var i = -1;
    /** @type {?} */
    var length = len - str.length;
    /** @type {?} */
    var left = true;
    while (++i < length) {
        /** @type {?} */
        var l = (str.length + ch.length <= len) ? (str.length + ch.length) : (str.length + 1);
        if (left) {
            str = leftPad(str, l, ch);
        }
        else {
            str = rightPad(str, l, ch);
        }
        left = !left;
    }
    return str;
}
/**
 * @param {?} input
 * @param {?=} index
 * @return {?}
 */
function flatten(input, index) {
    if (index === void 0) { index = 0; }
    if (index >= input.length) {
        return input;
    }
    if (isArray(input[index])) {
        return flatten(input.slice(0, index).concat(input[index], input.slice(index + 1)), index);
    }
    return flatten(input, index + 1);
}
/**
 * @param {?} value
 * @param {?} key
 * @return {?}
 */
function getProperty(value, key) {
    var e_1, _a;
    if (isNil(value) || !isObject(value)) {
        return undefined;
    }
    /** @type {?} */
    var keys = key.split('.');
    /** @type {?} */
    var result = value[(/** @type {?} */ (keys.shift()))];
    try {
        for (var keys_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
            var key_1 = keys_1_1.value;
            if (isNil(result) || !isObject(result)) {
                return undefined;
            }
            result = result[key_1];
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return result;
}
/**
 * @param {?} input
 * @param {?=} initial
 * @return {?}
 */
function sum(input, initial) {
    if (initial === void 0) { initial = 0; }
    return input.reduce(function (previous, current) { return previous + current; }, initial);
}
// http://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array-in-javascript
/**
 * @param {?} input
 * @return {?}
 */
function shuffle(input) {
    if (!isArray(input)) {
        return input;
    }
    /** @type {?} */
    var copy = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(input);
    for (var i = copy.length; i; --i) {
        /** @type {?} */
        var j = Math.floor(Math.random() * i);
        /** @type {?} */
        var x = copy[i - 1];
        copy[i - 1] = copy[j];
        copy[j] = x;
    }
    return copy;
}
/**
 * @param {?} collection
 * @param {?} value
 * @return {?}
 */
function deepIndexOf(collection, value) {
    /** @type {?} */
    var index = -1;
    /** @type {?} */
    var length = collection.length;
    while (++index < length) {
        if (deepEqual(value, collection[index])) {
            return index;
        }
    }
    return -1;
}
/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function deepEqual(a, b) {
    if (a === b) {
        return true;
    }
    if (!(typeof a === 'object' && typeof b === 'object')) {
        return a === b;
    }
    /** @type {?} */
    var keysA = Object.keys(a);
    /** @type {?} */
    var keysB = Object.keys(b);
    if (keysA.length !== keysB.length) {
        return false;
    }
    // Test for A's keys different from B.
    /** @type {?} */
    var hasOwn = Object.prototype.hasOwnProperty;
    for (var i = 0; i < keysA.length; i++) {
        /** @type {?} */
        var key = keysA[i];
        if (!hasOwn.call(b, keysA[i]) || !deepEqual(a[key], b[key])) {
            return false;
        }
    }
    return true;
}
/**
 * @param {?} object
 * @return {?}
 */
function isDeepObject(object) {
    return object.__isDeepObject__;
}
/**
 * @param {?} object
 * @return {?}
 */
function wrapDeep(object) {
    return new DeepWrapper(object);
}
/**
 * @param {?} object
 * @return {?}
 */
function unwrapDeep(object) {
    if (isDeepObject(object)) {
        return object.data;
    }
    return object;
}
var DeepWrapper = /** @class */ (function () {
    function DeepWrapper(data) {
        this.data = data;
        this.__isDeepObject__ = true;
    }
    return DeepWrapper;
}());
/**
 * @param {?} input
 * @return {?}
 */
function count(input) {
    if (!isArray(input) && !isObject(input) && !isString(input)) {
        return input;
    }
    if (isObject(input)) {
        return Object.keys(input).map(function (value) { return input[value]; }).length;
    }
    return input.length;
}
/**
 * @param {?} input
 * @return {?}
 */
function empty(input) {
    if (!isArray(input)) {
        return input;
    }
    return input.length === 0;
}
/**
 * @param {?} input
 * @param {?} predicate
 * @return {?}
 */
function every(input, predicate) {
    if (!isArray(input) || !predicate) {
        return input;
    }
    /** @type {?} */
    var result = true;
    /** @type {?} */
    var i = -1;
    while (++i < input.length && result) {
        result = predicate(input[i], i, input);
    }
    return result;
}
/**
 * @param {?} input
 * @param {?} predicate
 * @return {?}
 */
function takeUntil(input, predicate) {
    /** @type {?} */
    var i = -1;
    /** @type {?} */
    var result = [];
    while (++i < input.length && !predicate(input[i], i, input)) {
        result[i] = input[i];
    }
    return result;
}
/**
 * @param {?} input
 * @param {?} predicate
 * @return {?}
 */
function takeWhile(input, predicate) {
    return takeUntil(input, function (item, index, collection) { return !predicate(item, index, collection); });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var GroupByPipe = /** @class */ (function () {
    function GroupByPipe() {
    }
    /**
     * @param {?} input
     * @param {?} prop
     * @return {?}
     */
    GroupByPipe.prototype.transform = /**
     * @param {?} input
     * @param {?} prop
     * @return {?}
     */
    function (input, prop) {
        var e_1, _a;
        if (!isArray(input)) {
            return input;
        }
        /** @type {?} */
        var arr = {};
        try {
            for (var input_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(input), input_1_1 = input_1.next(); !input_1_1.done; input_1_1 = input_1.next()) {
                var value = input_1_1.value;
                /** @type {?} */
                var field = getProperty(value, prop);
                if (isUndefined(arr[field])) {
                    arr[field] = [];
                }
                arr[field].push(value);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (input_1_1 && !input_1_1.done && (_a = input_1.return)) _a.call(input_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return Object.keys(arr).map(function (key) { return ({ key: key, 'value': arr[key] }); });
    };
    GroupByPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'groupBy'
                },] }
    ];
    return GroupByPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var MaxPipe = /** @class */ (function () {
    function MaxPipe() {
    }
    /**
     * @param {?} input
     * @return {?}
     */
    MaxPipe.prototype.transform = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        if (!isArray(input)) {
            return input;
        }
        if (input.length === 0) {
            return undefined;
        }
        /** @type {?} */
        var max = input[0];
        input.forEach(function (value) {
            if (max < value) {
                max = value;
            }
        });
        return max;
    };
    MaxPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'max'
                },] }
    ];
    return MaxPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var MeanPipe = /** @class */ (function () {
    function MeanPipe() {
    }
    /**
     * @param {?} input
     * @return {?}
     */
    MeanPipe.prototype.transform = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        if (!isArray(input)) {
            return input;
        }
        /** @type {?} */
        var count$$1 = input.length;
        if (count$$1 === 0) {
            return undefined;
        }
        return sum(input) / count$$1;
    };
    MeanPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'mean'
                },] }
    ];
    return MeanPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var MinPipe = /** @class */ (function () {
    function MinPipe() {
    }
    /**
     * @param {?} input
     * @return {?}
     */
    MinPipe.prototype.transform = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        if (!isArray(input)) {
            return input;
        }
        if (input.length === 0) {
            return undefined;
        }
        /** @type {?} */
        var min = input[0];
        input.forEach(function (value) {
            if (min > value) {
                min = value;
            }
        });
        return min;
    };
    MinPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'min'
                },] }
    ];
    return MinPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SumPipe = /** @class */ (function () {
    function SumPipe() {
    }
    /**
     * @param {?} input
     * @return {?}
     */
    SumPipe.prototype.transform = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        return !isArray(input) ? input : sum(input);
    };
    SumPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'sum' },] }
    ];
    return SumPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgAggregatePipesModule = /** @class */ (function () {
    function NgAggregatePipesModule() {
    }
    NgAggregatePipesModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    declarations: [
                        GroupByPipe,
                        MaxPipe,
                        MeanPipe,
                        MinPipe,
                        SumPipe
                    ],
                    exports: [
                        GroupByPipe,
                        MaxPipe,
                        MeanPipe,
                        MinPipe,
                        SumPipe
                    ]
                },] }
    ];
    return NgAggregatePipesModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var EmptyPipe = /** @class */ (function () {
    function EmptyPipe() {
    }
    /**
     * @param {?} input
     * @return {?}
     */
    EmptyPipe.prototype.transform = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        return empty(input);
    };
    EmptyPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'empty'
                },] }
    ];
    return EmptyPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var HeadPipe = /** @class */ (function () {
    function HeadPipe() {
    }
    /**
     * @param {?} input
     * @return {?}
     */
    HeadPipe.prototype.transform = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        if (!isArray(input)) {
            return input;
        }
        // Will return undefined if length is 0
        return input[0];
    };
    HeadPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'head'
                },] }
    ];
    return HeadPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var InitialPipe = /** @class */ (function () {
    function InitialPipe() {
    }
    /**
     * @param {?} input
     * @return {?}
     */
    InitialPipe.prototype.transform = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        if (!isArray(input)) {
            return input;
        }
        return input.slice(0, input.length - 1);
    };
    InitialPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'initial'
                },] }
    ];
    return InitialPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var LastPipe = /** @class */ (function () {
    function LastPipe() {
    }
    /**
     * @param {?} input
     * @return {?}
     */
    LastPipe.prototype.transform = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        if (!isArray(input)) {
            return input;
        }
        // Returns undefined if empty
        return input[input.length - 1];
    };
    LastPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'last'
                },] }
    ];
    return LastPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var JoinPipe = /** @class */ (function () {
    function JoinPipe() {
    }
    /**
     * @param {?} input
     * @param {?=} character
     * @return {?}
     */
    JoinPipe.prototype.transform = /**
     * @param {?} input
     * @param {?=} character
     * @return {?}
     */
    function (input, character) {
        if (character === void 0) { character = ''; }
        if (!isArray(input)) {
            return input;
        }
        return input.join(character);
    };
    JoinPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'join'
                },] }
    ];
    return JoinPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var TailPipe = /** @class */ (function () {
    function TailPipe() {
    }
    /**
     * @param {?} input
     * @return {?}
     */
    TailPipe.prototype.transform = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        if (!isArray(input)) {
            return input;
        }
        return input.slice(1, input.length);
    };
    TailPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'tail'
                },] }
    ];
    return TailPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var UniqPipe = /** @class */ (function () {
    function UniqPipe() {
    }
    /**
     * @param {?} input
     * @return {?}
     */
    UniqPipe.prototype.transform = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        if (!isArray(input) && !isDeepObject(input)) {
            return input;
        }
        if (isDeepObject(input)) {
            /** @type {?} */
            var unwrappedInput_1 = unwrapDeep(input);
            if (!isArray(unwrappedInput_1)) {
                return unwrappedInput_1;
            }
            return unwrappedInput_1.filter(function (value, index) {
                return deepIndexOf(unwrappedInput_1, value) === index;
            });
        }
        return input.filter(function (value, index) { return input.indexOf(value) === index; });
    };
    UniqPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'uniq'
                },] }
    ];
    return UniqPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var WithoutPipe = /** @class */ (function () {
    function WithoutPipe() {
    }
    /**
     * @param {?} input
     * @param {...?} args
     * @return {?}
     */
    WithoutPipe.prototype.transform = /**
     * @param {?} input
     * @param {...?} args
     * @return {?}
     */
    function (input) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!isArray(input) && !isDeepObject(input)) {
            return input;
        }
        if (isDeepObject(input)) {
            /** @type {?} */
            var unwrappedInput = unwrapDeep(input);
            if (!isArray(unwrappedInput)) {
                return unwrappedInput;
            }
            return unwrappedInput.filter(function (value) {
                return deepIndexOf(args, value) === -1;
            });
        }
        return input.filter(function (value) { return args.indexOf(value) === -1; });
    };
    WithoutPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'without'
                },] }
    ];
    return WithoutPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var MapPipe = /** @class */ (function () {
    function MapPipe() {
    }
    /**
     * @param {?} input
     * @param {?} fn
     * @return {?}
     */
    MapPipe.prototype.transform = /**
     * @param {?} input
     * @param {?} fn
     * @return {?}
     */
    function (input, fn) {
        if (!isArray(input) || !fn) {
            return input;
        }
        return input.map(fn);
    };
    MapPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'map'
                },] }
    ];
    return MapPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var WherePipe = /** @class */ (function () {
    function WherePipe() {
    }
    /**
    * Support a function or a value or the shorthand ['key', value] like the lodash shorthand.
    */
    /**
     * Support a function or a value or the shorthand ['key', value] like the lodash shorthand.
     * @param {?} input
     * @param {?} fn
     * @return {?}
     */
    WherePipe.prototype.transform = /**
     * Support a function or a value or the shorthand ['key', value] like the lodash shorthand.
     * @param {?} input
     * @param {?} fn
     * @return {?}
     */
    function (input, fn) {
        if (!isArray(input)) {
            return input;
        }
        if (isFunction(fn)) {
            return input.filter(fn);
        }
        else if (isArray(fn)) {
            var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(fn, 2), key_1 = _a[0], value_1 = _a[1];
            return input.filter(function (item) { return getProperty(item, key_1) === value_1; });
        }
        else if (fn) {
            return input.filter(function (item) { return item === fn; });
        }
        else {
            return input;
        }
    };
    WherePipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'where'
                },] }
    ];
    return WherePipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var FirstOrDefaultPipe = /** @class */ (function () {
    function FirstOrDefaultPipe() {
    }
    /**
     * @param {?} input
     * @param {?} predicate
     * @param {?=} defaultValue
     * @return {?}
     */
    FirstOrDefaultPipe.find = /**
     * @param {?} input
     * @param {?} predicate
     * @param {?=} defaultValue
     * @return {?}
     */
    function (input, predicate, defaultValue) {
        /** @type {?} */
        var found = false;
        /** @type {?} */
        var result;
        /** @type {?} */
        var i = -1;
        while (!found && ++i < input.length) {
            found = predicate(input[i], i, input);
        }
        if (found) {
            result = input[i];
        }
        if (typeof result === 'undefined' && typeof defaultValue !== 'undefined') {
            result = defaultValue;
        }
        return result;
    };
    /**
     * @param {?} input
     * @param {?} predicate
     * @param {?=} defaultValue
     * @return {?}
     */
    FirstOrDefaultPipe.prototype.transform = /**
     * @param {?} input
     * @param {?} predicate
     * @param {?=} defaultValue
     * @return {?}
     */
    function (input, predicate, defaultValue) {
        if (!isArray(input)) {
            return input;
        }
        if (isFunction(predicate)) {
            return FirstOrDefaultPipe.find(input, (/** @type {?} */ (predicate)), defaultValue);
        }
        else if (isArray(predicate)) {
            var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])((/** @type {?} */ (predicate)), 2), key_1 = _a[0], value_1 = _a[1];
            return FirstOrDefaultPipe.find(input, function (item) { return getProperty(item, key_1) === value_1; }, defaultValue);
        }
        else if (predicate) {
            return FirstOrDefaultPipe.find(input, function (item) { return item === (/** @type {?} */ (predicate)); }, defaultValue);
        }
        else {
            return input;
        }
    };
    FirstOrDefaultPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'firstOrDefault'
                },] }
    ];
    return FirstOrDefaultPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var RangePipe = /** @class */ (function () {
    function RangePipe() {
    }
    /**
     * @param {?} _input
     * @param {?=} size
     * @param {?=} start
     * @param {?=} step
     * @return {?}
     */
    RangePipe.prototype.transform = /**
     * @param {?} _input
     * @param {?=} size
     * @param {?=} start
     * @param {?=} step
     * @return {?}
     */
    function (_input, size, start, step) {
        if (size === void 0) { size = 0; }
        if (start === void 0) { start = 1; }
        if (step === void 0) { step = 1; }
        /** @type {?} */
        var range = [];
        for (var length_1 = 0; length_1 < size; ++length_1) {
            range.push(start);
            start += step;
        }
        return range;
    };
    RangePipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'range'
                },] }
    ];
    return RangePipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var PluckPipe = /** @class */ (function () {
    function PluckPipe() {
    }
    /**
     * @param {?} input
     * @param {?} key
     * @return {?}
     */
    PluckPipe.prototype.transform = /**
     * @param {?} input
     * @param {?} key
     * @return {?}
     */
    function (input, key) {
        if (!isArray(input) || !key) {
            return input;
        }
        return input.map(function (value) {
            return getProperty(value, key);
        });
    };
    PluckPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'pluck'
                },] }
    ];
    return PluckPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ReversePipe = /** @class */ (function () {
    function ReversePipe() {
    }
    /**
     * @param {?} input
     * @return {?}
     */
    ReversePipe.prototype.transform = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        if (!isArray(input)) {
            return input;
        }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(input).reverse();
    };
    ReversePipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'reverse'
                },] }
    ];
    return ReversePipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var OrderByPipe = /** @class */ (function () {
    function OrderByPipe() {
    }
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    OrderByPipe._orderBy = /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function (a, b) {
        if (a instanceof Date && b instanceof Date) {
            return (a < b) ? -1 : (a > b) ? 1 : 0;
        }
        /** @type {?} */
        var floatA = parseFloat(a);
        /** @type {?} */
        var floatB = parseFloat(b);
        if (typeof a === 'string' && typeof b === 'string' && (isNaN(floatA) || isNaN(floatB))) {
            /** @type {?} */
            var lowerA = a.toLowerCase();
            /** @type {?} */
            var lowerB = b.toLowerCase();
            return (lowerA < lowerB) ? -1 : (lowerA > lowerB) ? 1 : 0;
        }
        return (floatA < floatB) ? -1 : (floatA > floatB) ? 1 : 0;
    };
    /**
     * @param {?} input
     * @param {?=} config
     * @return {?}
     */
    OrderByPipe.prototype.transform = /**
     * @param {?} input
     * @param {?=} config
     * @return {?}
     */
    function (input, config) {
        if (config === void 0) { config = '+'; }
        if (!isArray(input)) {
            return input;
        }
        /** @type {?} */
        var configIsArray = isArray(config);
        // If config === 'param' OR ['param'] 
        if (!configIsArray || (configIsArray && config.length === 1)) {
            /** @type {?} */
            var propertyToCheck = configIsArray ? config[0] : config;
            /** @type {?} */
            var first = propertyToCheck.substr(0, 1);
            /** @type {?} */
            var desc_1 = (first === '-');
            // Basic array (if only + or - is present)
            if (!propertyToCheck || propertyToCheck === '-' || propertyToCheck === '+') {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(input).sort(function (a, b) {
                    /** @type {?} */
                    var comparator = OrderByPipe._orderBy(a, b);
                    return desc_1 ? -comparator : comparator;
                });
            }
            else {
                // If contains + or -, substring the property
                /** @type {?} */
                var property_1 = (first === '+' || desc_1) ? propertyToCheck.substr(1) : propertyToCheck;
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(input).sort(function (a, b) {
                    /** @type {?} */
                    var comparator = OrderByPipe._orderBy(a[property_1], b[property_1]);
                    return desc_1 ? -comparator : comparator;
                });
            }
        }
        else { // Config is an array of property
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(input).sort(function (a, b) {
                for (var i = 0; i < config.length; ++i) {
                    /** @type {?} */
                    var first = config[i].substr(0, 1);
                    /** @type {?} */
                    var desc = (first === '-');
                    /** @type {?} */
                    var property = (first === '+' || desc) ? config[i].substr(1) : config[i];
                    /** @type {?} */
                    var comparator = OrderByPipe._orderBy(a[property], b[property]);
                    /** @type {?} */
                    var comparison = desc ? -comparator : comparator;
                    if (comparison !== 0) {
                        return comparison;
                    }
                }
                return 0;
            });
        }
    };
    OrderByPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'orderBy'
                },] }
    ];
    return OrderByPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CountPipe = /** @class */ (function () {
    function CountPipe() {
    }
    /**
     * @param {?} input
     * @return {?}
     */
    CountPipe.prototype.transform = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        return count(input);
    };
    CountPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'count'
                },] }
    ];
    return CountPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SomePipe = /** @class */ (function () {
    function SomePipe() {
    }
    /**
     * @param {?} input
     * @param {?} predicate
     * @return {?}
     */
    SomePipe.prototype.transform = /**
     * @param {?} input
     * @param {?} predicate
     * @return {?}
     */
    function (input, predicate) {
        if (!isArray(input) || !predicate) {
            return input;
        }
        /** @type {?} */
        var result = false;
        /** @type {?} */
        var i = -1;
        while (++i < input.length && !result) {
            result = predicate(input[i], i, input);
        }
        return result;
    };
    SomePipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'some'
                },] }
    ];
    return SomePipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var EveryPipe = /** @class */ (function () {
    function EveryPipe() {
    }
    /**
     * @param {?} input
     * @param {?} predicate
     * @return {?}
     */
    EveryPipe.prototype.transform = /**
     * @param {?} input
     * @param {?} predicate
     * @return {?}
     */
    function (input, predicate) {
        return every(input, predicate);
    };
    EveryPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'every'
                },] }
    ];
    return EveryPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ShufflePipe = /** @class */ (function () {
    function ShufflePipe() {
    }
    /**
     * @param {?} input
     * @return {?}
     */
    ShufflePipe.prototype.transform = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        return shuffle(input);
    };
    ShufflePipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'shuffle'
                },] }
    ];
    return ShufflePipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var TakePipe = /** @class */ (function () {
    function TakePipe() {
    }
    /**
     * @param {?} input
     * @param {?=} quantity
     * @return {?}
     */
    TakePipe.prototype.transform = /**
     * @param {?} input
     * @param {?=} quantity
     * @return {?}
     */
    function (input, quantity) {
        if (!isArray(input)) {
            return input;
        }
        return input.slice(0, quantity || 1);
    };
    TakePipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'take'
                },] }
    ];
    return TakePipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var DropPipe = /** @class */ (function () {
    function DropPipe() {
    }
    /**
     * @param {?} input
     * @param {?=} quantity
     * @return {?}
     */
    DropPipe.prototype.transform = /**
     * @param {?} input
     * @param {?=} quantity
     * @return {?}
     */
    function (input, quantity) {
        if (!isArray(input)) {
            return input;
        }
        return input.slice(quantity || 1, input.lenth);
    };
    DropPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'drop'
                },] }
    ];
    return DropPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var DeepPipe = /** @class */ (function () {
    function DeepPipe() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    DeepPipe.prototype.transform = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (isDeepObject(value)) {
            return value;
        }
        return wrapDeep(value);
    };
    DeepPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'deep'
                },] }
    ];
    return DeepPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ChunkPipe = /** @class */ (function () {
    function ChunkPipe() {
    }
    /**
     * @param {?} input
     * @param {?=} size
     * @return {?}
     */
    ChunkPipe.prototype.transform = /**
     * @param {?} input
     * @param {?=} size
     * @return {?}
     */
    function (input, size) {
        if (size === void 0) { size = 1; }
        if (!isArray(input)) {
            return input;
        }
        return [].concat.apply([], input.map(function (_elem, i) {
            return i % size ? [] : [input.slice(i, i + size)];
        }));
    };
    ChunkPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'chunk'
                },] }
    ];
    return ChunkPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var FlattenPipe = /** @class */ (function () {
    function FlattenPipe() {
    }
    /**
     * @param {?} input
     * @return {?}
     */
    FlattenPipe.prototype.transform = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        /** @type {?} */
        var isDeep = isDeepObject(input);
        if (!isArray(input) && !isDeep) {
            return input;
        }
        if (isDeep) {
            /** @type {?} */
            var unwrapped = unwrapDeep(input);
            if (!isArray(unwrapped)) {
                return unwrapped;
            }
            return flatten(unwrapped, 0);
        }
        return [].concat.apply([], input);
    };
    FlattenPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'flatten' },] }
    ];
    return FlattenPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var IntersectionPipe = /** @class */ (function () {
    function IntersectionPipe() {
    }
    /**
     * @param {?=} a
     * @param {?=} b
     * @return {?}
     */
    IntersectionPipe.prototype.transform = /**
     * @param {?=} a
     * @param {?=} b
     * @return {?}
     */
    function (a, b) {
        if ((!isArray(a) && !isDeepObject(a)) || !isArray(b)) {
            return [];
        }
        if (isDeepObject(a)) {
            /** @type {?} */
            var unwrapped = unwrapDeep(a);
            if (!isArray(unwrapped)) {
                return [];
            }
            return unwrapped.reduce(function (intersection, value) { return intersection.concat((deepIndexOf(b, value) !== -1 && deepIndexOf(intersection, value) === -1) ? value : []); }, []);
        }
        return a.reduce(function (intersection, value) { return intersection.concat((b.indexOf(value) !== -1 && intersection.indexOf(value) === -1) ? value : []); }, []);
    };
    IntersectionPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'intersection'
                },] }
    ];
    return IntersectionPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var UnionPipe = /** @class */ (function () {
    function UnionPipe() {
    }
    /**
     * @param {?=} a
     * @param {?=} b
     * @return {?}
     */
    UnionPipe.prototype.transform = /**
     * @param {?=} a
     * @param {?=} b
     * @return {?}
     */
    function (a, b) {
        if ((!isArray(a) && !isDeepObject(a)) || !isArray(b)) {
            return [];
        }
        if (isDeepObject(a)) {
            /** @type {?} */
            var unwrapped = unwrapDeep(a);
            if (!isArray(unwrapped)) {
                return [];
            }
            return []
                .concat(unwrapped)
                .concat(b)
                .filter(function (value, index, input) { return deepIndexOf(input, value) === index; });
        }
        return [].concat(a).concat(b).filter(function (value, index, input) { return input.indexOf(value) === index; });
    };
    UnionPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'union'
                },] }
    ];
    return UnionPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var TakeWhilePipe = /** @class */ (function () {
    function TakeWhilePipe() {
    }
    /**
     * @param {?} input
     * @param {?=} predicate
     * @return {?}
     */
    TakeWhilePipe.prototype.transform = /**
     * @param {?} input
     * @param {?=} predicate
     * @return {?}
     */
    function (input, predicate) {
        if (!isArray(input) || isNil(predicate)) {
            return input;
        }
        return takeWhile(input, predicate);
    };
    TakeWhilePipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'takeWhile'
                },] }
    ];
    return TakeWhilePipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var TakeUntilPipe = /** @class */ (function () {
    function TakeUntilPipe() {
    }
    /**
     * @param {?} input
     * @param {?=} predicate
     * @return {?}
     */
    TakeUntilPipe.prototype.transform = /**
     * @param {?} input
     * @param {?=} predicate
     * @return {?}
     */
    function (input, predicate) {
        if (!isArray(input) || isNil(predicate)) {
            return input;
        }
        return takeUntil(input, predicate);
    };
    TakeUntilPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'takeUntil'
                },] }
    ];
    return TakeUntilPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgArrayPipesModule = /** @class */ (function () {
    function NgArrayPipesModule() {
    }
    NgArrayPipesModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    declarations: [
                        EmptyPipe,
                        HeadPipe,
                        InitialPipe,
                        LastPipe,
                        JoinPipe,
                        TailPipe,
                        UniqPipe,
                        WithoutPipe,
                        MapPipe,
                        WherePipe,
                        RangePipe,
                        PluckPipe,
                        ReversePipe,
                        OrderByPipe,
                        CountPipe,
                        SomePipe,
                        EveryPipe,
                        ShufflePipe,
                        TakePipe,
                        DropPipe,
                        DeepPipe,
                        ChunkPipe,
                        FlattenPipe,
                        FirstOrDefaultPipe,
                        IntersectionPipe,
                        UnionPipe,
                        TakeWhilePipe,
                        TakeUntilPipe
                    ],
                    exports: [
                        EmptyPipe,
                        HeadPipe,
                        InitialPipe,
                        LastPipe,
                        JoinPipe,
                        TailPipe,
                        UniqPipe,
                        WithoutPipe,
                        MapPipe,
                        WherePipe,
                        RangePipe,
                        PluckPipe,
                        ReversePipe,
                        OrderByPipe,
                        CountPipe,
                        SomePipe,
                        EveryPipe,
                        ShufflePipe,
                        TakePipe,
                        DropPipe,
                        DeepPipe,
                        ChunkPipe,
                        FlattenPipe,
                        FirstOrDefaultPipe,
                        IntersectionPipe,
                        UnionPipe,
                        TakeWhilePipe,
                        TakeUntilPipe
                    ]
                },] }
    ];
    return NgArrayPipesModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var IsGreaterPipe = /** @class */ (function () {
    function IsGreaterPipe() {
    }
    /**
     * @param {?} first
     * @param {?} second
     * @return {?}
     */
    IsGreaterPipe.prototype.transform = /**
     * @param {?} first
     * @param {?} second
     * @return {?}
     */
    function (first, second) {
        return first > second;
    };
    IsGreaterPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'greater'
                },] }
    ];
    return IsGreaterPipe;
}());
var IsGreaterOrEqualPipe = /** @class */ (function () {
    function IsGreaterOrEqualPipe() {
    }
    /**
     * @param {?} first
     * @param {?} second
     * @return {?}
     */
    IsGreaterOrEqualPipe.prototype.transform = /**
     * @param {?} first
     * @param {?} second
     * @return {?}
     */
    function (first, second) {
        return first >= second;
    };
    IsGreaterOrEqualPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'greaterOrEqual'
                },] }
    ];
    return IsGreaterOrEqualPipe;
}());
var IsLessPipe = /** @class */ (function () {
    function IsLessPipe() {
    }
    /**
     * @param {?} first
     * @param {?} second
     * @return {?}
     */
    IsLessPipe.prototype.transform = /**
     * @param {?} first
     * @param {?} second
     * @return {?}
     */
    function (first, second) {
        return first < second;
    };
    IsLessPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'less'
                },] }
    ];
    return IsLessPipe;
}());
var IsLessOrEqualPipe = /** @class */ (function () {
    function IsLessOrEqualPipe() {
    }
    /**
     * @param {?} first
     * @param {?} second
     * @return {?}
     */
    IsLessOrEqualPipe.prototype.transform = /**
     * @param {?} first
     * @param {?} second
     * @return {?}
     */
    function (first, second) {
        return first <= second;
    };
    IsLessOrEqualPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'lessOrEqual'
                },] }
    ];
    return IsLessOrEqualPipe;
}());
var IsEqualPipe = /** @class */ (function () {
    function IsEqualPipe() {
    }
    /**
     * @param {?} first
     * @param {?} second
     * @return {?}
     */
    IsEqualPipe.prototype.transform = /**
     * @param {?} first
     * @param {?} second
     * @return {?}
     */
    function (first, second) {
        return first == second;
    };
    IsEqualPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'equal'
                },] }
    ];
    return IsEqualPipe;
}());
var IsNotEqualPipe = /** @class */ (function () {
    function IsNotEqualPipe() {
    }
    /**
     * @param {?} first
     * @param {?} second
     * @return {?}
     */
    IsNotEqualPipe.prototype.transform = /**
     * @param {?} first
     * @param {?} second
     * @return {?}
     */
    function (first, second) {
        return first != second;
    };
    IsNotEqualPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'notEqual'
                },] }
    ];
    return IsNotEqualPipe;
}());
var IsIdenticalPipe = /** @class */ (function () {
    function IsIdenticalPipe() {
    }
    /**
     * @param {?} first
     * @param {?} second
     * @return {?}
     */
    IsIdenticalPipe.prototype.transform = /**
     * @param {?} first
     * @param {?} second
     * @return {?}
     */
    function (first, second) {
        return first === second;
    };
    IsIdenticalPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'identical'
                },] }
    ];
    return IsIdenticalPipe;
}());
var IsNotIdenticalPipe = /** @class */ (function () {
    function IsNotIdenticalPipe() {
    }
    /**
     * @param {?} first
     * @param {?} second
     * @return {?}
     */
    IsNotIdenticalPipe.prototype.transform = /**
     * @param {?} first
     * @param {?} second
     * @return {?}
     */
    function (first, second) {
        return first !== second;
    };
    IsNotIdenticalPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'notIdentical'
                },] }
    ];
    return IsNotIdenticalPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var IsNullPipe = /** @class */ (function () {
    function IsNullPipe() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    IsNullPipe.prototype.transform = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return isNull(value);
    };
    IsNullPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'isNull'
                },] }
    ];
    return IsNullPipe;
}());
var IsUndefinedPipe = /** @class */ (function () {
    function IsUndefinedPipe() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    IsUndefinedPipe.prototype.transform = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return isUndefined(value);
    };
    IsUndefinedPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'isUndefined'
                },] }
    ];
    return IsUndefinedPipe;
}());
var IsNilPipe = /** @class */ (function () {
    function IsNilPipe() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    IsNilPipe.prototype.transform = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return isNil(value);
    };
    IsNilPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'isNil'
                },] }
    ];
    return IsNilPipe;
}());
var IsFunctionPipe = /** @class */ (function () {
    function IsFunctionPipe() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    IsFunctionPipe.prototype.transform = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return isFunction(value);
    };
    IsFunctionPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'isFunction'
                },] }
    ];
    return IsFunctionPipe;
}());
var IsNumberPipe = /** @class */ (function () {
    function IsNumberPipe() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    IsNumberPipe.prototype.transform = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return isNumber(value);
    };
    IsNumberPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'isNumber'
                },] }
    ];
    return IsNumberPipe;
}());
var IsStringPipe = /** @class */ (function () {
    function IsStringPipe() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    IsStringPipe.prototype.transform = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return isString(value);
    };
    IsStringPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'isString'
                },] }
    ];
    return IsStringPipe;
}());
var IsArrayPipe = /** @class */ (function () {
    function IsArrayPipe() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    IsArrayPipe.prototype.transform = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return isArray(value);
    };
    IsArrayPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'isArray'
                },] }
    ];
    return IsArrayPipe;
}());
var IsObjectPipe = /** @class */ (function () {
    function IsObjectPipe() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    IsObjectPipe.prototype.transform = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return isObject(value);
    };
    IsObjectPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'isObject'
                },] }
    ];
    return IsObjectPipe;
}());
var IsDefinedPipe = /** @class */ (function () {
    function IsDefinedPipe() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    IsDefinedPipe.prototype.transform = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return !isUndefined(value);
    };
    IsDefinedPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'isDefined'
                },] }
    ];
    return IsDefinedPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgBooleanPipesModule = /** @class */ (function () {
    function NgBooleanPipesModule() {
    }
    NgBooleanPipesModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    declarations: [
                        IsGreaterPipe,
                        IsGreaterOrEqualPipe,
                        IsLessPipe,
                        IsLessOrEqualPipe,
                        IsEqualPipe,
                        IsNotEqualPipe,
                        IsIdenticalPipe,
                        IsNotIdenticalPipe,
                        IsNilPipe,
                        IsNullPipe,
                        IsUndefinedPipe,
                        IsFunctionPipe,
                        IsNumberPipe,
                        IsStringPipe,
                        IsArrayPipe,
                        IsObjectPipe,
                        IsDefinedPipe
                    ],
                    exports: [
                        IsGreaterPipe,
                        IsGreaterOrEqualPipe,
                        IsLessPipe,
                        IsLessOrEqualPipe,
                        IsEqualPipe,
                        IsNotEqualPipe,
                        IsIdenticalPipe,
                        IsNotIdenticalPipe,
                        IsNilPipe,
                        IsNullPipe,
                        IsUndefinedPipe,
                        IsFunctionPipe,
                        IsNumberPipe,
                        IsStringPipe,
                        IsArrayPipe,
                        IsObjectPipe,
                        IsDefinedPipe
                    ]
                },] }
    ];
    return NgBooleanPipesModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var BytesPipe = /** @class */ (function () {
    function BytesPipe() {
    }
    /**
     * @param {?} input
     * @param {?=} decimal
     * @param {?=} from
     * @param {?=} to
     * @return {?}
     */
    BytesPipe.prototype.transform = /**
     * @param {?} input
     * @param {?=} decimal
     * @param {?=} from
     * @param {?=} to
     * @return {?}
     */
    function (input, decimal, from, to) {
        if (decimal === void 0) { decimal = 0; }
        if (from === void 0) { from = 'B'; }
        if (!(isNumberFinite(input) &&
            isNumberFinite(decimal) &&
            isInteger(decimal) &&
            isPositive(decimal))) {
            return input;
        }
        /** @type {?} */
        var bytes = input;
        /** @type {?} */
        var unit = from;
        while (unit !== 'B') {
            bytes *= 1024;
            unit = (/** @type {?} */ (BytesPipe.formats[unit].prev));
        }
        if (to) {
            /** @type {?} */
            var format = BytesPipe.formats[to];
            /** @type {?} */
            var result = toDecimal(BytesPipe.calculateResult(format, bytes), decimal);
            return BytesPipe.formatResult(result, to);
        }
        for (var key in BytesPipe.formats) {
            /** @type {?} */
            var format = BytesPipe.formats[key];
            if (bytes < format.max) {
                /** @type {?} */
                var result = toDecimal(BytesPipe.calculateResult(format, bytes), decimal);
                return BytesPipe.formatResult(result, key);
            }
        }
    };
    /**
     * @param {?} result
     * @param {?} unit
     * @return {?}
     */
    BytesPipe.formatResult = /**
     * @param {?} result
     * @param {?} unit
     * @return {?}
     */
    function (result, unit) {
        return result + " " + unit;
    };
    /**
     * @param {?} format
     * @param {?} bytes
     * @return {?}
     */
    BytesPipe.calculateResult = /**
     * @param {?} format
     * @param {?} bytes
     * @return {?}
     */
    function (format, bytes) {
        /** @type {?} */
        var prev = format.prev ? BytesPipe.formats[format.prev] : undefined;
        return prev ? bytes / prev.max : bytes;
    };
    BytesPipe.formats = {
        'B': { max: 1024 },
        'kB': { max: Math.pow(1024, 2), prev: 'B' },
        'KB': { max: Math.pow(1024, 2), prev: 'B' },
        // Backward compatible
        'MB': { max: Math.pow(1024, 3), prev: 'kB' },
        'GB': { max: Math.pow(1024, 4), prev: 'MB' },
        'TB': { max: Number.MAX_SAFE_INTEGER, prev: 'GB' }
    };
    BytesPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'bytes'
                },] }
    ];
    return BytesPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CeilPipe = /** @class */ (function () {
    function CeilPipe() {
    }
    /**
     * @param {?} value
     * @param {?=} precision
     * @return {?}
     */
    CeilPipe.prototype.transform = /**
     * @param {?} value
     * @param {?=} precision
     * @return {?}
     */
    function (value, precision) {
        if (precision === void 0) { precision = 0; }
        if (isString(precision)) {
            precision = parseInt(precision);
        }
        return createRound('ceil')(value, precision);
    };
    CeilPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'ceil'
                },] }
    ];
    return CeilPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var FloorPipe = /** @class */ (function () {
    function FloorPipe() {
    }
    /**
     * @param {?} value
     * @param {?=} precision
     * @return {?}
     */
    FloorPipe.prototype.transform = /**
     * @param {?} value
     * @param {?=} precision
     * @return {?}
     */
    function (value, precision) {
        if (precision === void 0) { precision = 0; }
        if (isString(precision)) {
            precision = parseInt(precision);
        }
        return createRound('floor')(value, precision);
    };
    FloorPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'floor'
                },] }
    ];
    return FloorPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var RoundPipe = /** @class */ (function () {
    function RoundPipe() {
    }
    /**
     * @param {?} value
     * @param {?=} precision
     * @return {?}
     */
    RoundPipe.prototype.transform = /**
     * @param {?} value
     * @param {?=} precision
     * @return {?}
     */
    function (value, precision) {
        if (precision === void 0) { precision = 0; }
        if (isString(precision)) {
            precision = parseInt(precision);
        }
        return createRound('round')(value, precision);
    };
    RoundPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'round'
                },] }
    ];
    return RoundPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var DegreesPipe = /** @class */ (function () {
    function DegreesPipe() {
    }
    /**
     * @param {?} input
     * @return {?}
     */
    DegreesPipe.prototype.transform = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        if (!isNumberFinite(input)) {
            return 'NaN';
        }
        return (input * 180) / Math.PI;
    };
    DegreesPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'degrees'
                },] }
    ];
    return DegreesPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var RadiansPipe = /** @class */ (function () {
    function RadiansPipe() {
    }
    /**
     * @param {?} input
     * @return {?}
     */
    RadiansPipe.prototype.transform = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        if (!isNumberFinite(input)) {
            return 'NaN';
        }
        return (input * Math.PI) / 180;
    };
    RadiansPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'radians'
                },] }
    ];
    return RadiansPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var RandomPipe = /** @class */ (function () {
    function RandomPipe() {
    }
    /**
     * @param {?} input
     * @param {?=} min
     * @param {?=} max
     * @return {?}
     */
    RandomPipe.prototype.transform = /**
     * @param {?} input
     * @param {?=} min
     * @param {?=} max
     * @return {?}
     */
    function (input, min, max) {
        if (min === void 0) { min = 0; }
        if (max === void 0) { max = 1; }
        if (!isNumberFinite(min) || !isNumberFinite(max)) {
            return input;
        }
        if (min > max) {
            max = min;
            min = 0;
        }
        return Math.random() * (max - min) + min;
    };
    RandomPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'random'
                },] }
    ];
    return RandomPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SqrtPipe = /** @class */ (function () {
    function SqrtPipe() {
    }
    /**
     * @param {?} input
     * @return {?}
     */
    SqrtPipe.prototype.transform = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        if (!isNumberFinite(input)) {
            return 'NaN';
        }
        return Math.sqrt(input);
    };
    SqrtPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'sqrt'
                },] }
    ];
    return SqrtPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var PowPipe = /** @class */ (function () {
    function PowPipe() {
    }
    /**
     * @param {?} input
     * @param {?=} power
     * @return {?}
     */
    PowPipe.prototype.transform = /**
     * @param {?} input
     * @param {?=} power
     * @return {?}
     */
    function (input, power) {
        if (power === void 0) { power = 2; }
        if (!isNumberFinite(input)) {
            return 'NaN';
        }
        return Math.pow(input, power);
    };
    PowPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'pow'
                },] }
    ];
    return PowPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var AbsPipe = /** @class */ (function () {
    function AbsPipe() {
    }
    /**
     * @param {?} input
     * @return {?}
     */
    AbsPipe.prototype.transform = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        if (!isNumberFinite(input)) {
            return 'NaN';
        }
        return Math.abs(input);
    };
    AbsPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'abs'
                },] }
    ];
    return AbsPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var OrdinalPipe = /** @class */ (function () {
    function OrdinalPipe() {
    }
    /**
     * @param {?} input
     * @return {?}
     */
    OrdinalPipe.prototype.transform = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        if (!isNumberFinite(input)) {
            return 'NaN';
        }
        /** @type {?} */
        var cardinal = input.toString().charAt(input.toString().length - 1);
        switch (cardinal) {
            case '1':
                return input + 'st';
            case '2':
                return input + 'nd';
            case '3':
                return input + 'rd';
            default:
                return input + 'th';
        }
    };
    OrdinalPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'ordinal'
                },] }
    ];
    return OrdinalPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgMathPipesModule = /** @class */ (function () {
    function NgMathPipesModule() {
    }
    NgMathPipesModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    declarations: [
                        BytesPipe,
                        CeilPipe,
                        FloorPipe,
                        RoundPipe,
                        DegreesPipe,
                        RadiansPipe,
                        RandomPipe,
                        SqrtPipe,
                        PowPipe,
                        AbsPipe,
                        OrdinalPipe
                    ],
                    exports: [
                        BytesPipe,
                        CeilPipe,
                        FloorPipe,
                        RoundPipe,
                        DegreesPipe,
                        RadiansPipe,
                        RandomPipe,
                        SqrtPipe,
                        PowPipe,
                        AbsPipe,
                        OrdinalPipe
                    ]
                },] }
    ];
    return NgMathPipesModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var KeysPipe = /** @class */ (function () {
    function KeysPipe() {
    }
    /**
     * @param {?} input
     * @return {?}
     */
    KeysPipe.prototype.transform = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        if (!isObject(input)) {
            return input;
        }
        return Object.keys(input);
    };
    KeysPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'keys' },] }
    ];
    return KeysPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ToArrayPipe = /** @class */ (function () {
    function ToArrayPipe() {
    }
    /**
     * @param {?} input
     * @return {?}
     */
    ToArrayPipe.prototype.transform = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        if (!isObject(input)) {
            return input;
        }
        return Object.keys(input).map(function (value) { return input[value]; });
    };
    ToArrayPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'toArray' },] }
    ];
    return ToArrayPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var DefaultsPipe = /** @class */ (function () {
    function DefaultsPipe() {
    }
    /**
     * @param {?} input
     * @param {?} defaults
     * @return {?}
     */
    DefaultsPipe.prototype.transform = /**
     * @param {?} input
     * @param {?} defaults
     * @return {?}
     */
    function (input, defaults) {
        if (!isObject(defaults)) {
            return input;
        }
        if (isNil(input)) {
            return defaults;
        }
        if (isArray(input)) {
            return input.map(function (item) {
                if (isObject(item)) {
                    return Object.assign({}, defaults, item);
                }
                if (isNil(item)) {
                    return defaults;
                }
                return item;
            });
        }
        if (isObject(input)) {
            return Object.assign({}, defaults, input);
        }
        return input;
    };
    DefaultsPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'defaults' },] }
    ];
    return DefaultsPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgObjectPipesModule = /** @class */ (function () {
    function NgObjectPipesModule() {
    }
    NgObjectPipesModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    declarations: [
                        KeysPipe,
                        ToArrayPipe,
                        DefaultsPipe
                    ],
                    exports: [
                        KeysPipe,
                        ToArrayPipe,
                        DefaultsPipe
                    ]
                },] }
    ];
    return NgObjectPipesModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var LeftPadPipe = /** @class */ (function () {
    function LeftPadPipe() {
    }
    /**
     * @param {?} input
     * @param {?=} length
     * @param {?=} character
     * @return {?}
     */
    LeftPadPipe.prototype.transform = /**
     * @param {?} input
     * @param {?=} length
     * @param {?=} character
     * @return {?}
     */
    function (input, length, character) {
        if (length === void 0) { length = 0; }
        if (character === void 0) { character = ' '; }
        if (!isString(input)) {
            return input;
        }
        return leftPad(input, length, character);
    };
    LeftPadPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'leftpad'
                },] }
    ];
    return LeftPadPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var MatchPipe = /** @class */ (function () {
    function MatchPipe() {
    }
    /**
     * @param {?} input
     * @param {?} pattern
     * @param {?} flag
     * @return {?}
     */
    MatchPipe.prototype.transform = /**
     * @param {?} input
     * @param {?} pattern
     * @param {?} flag
     * @return {?}
     */
    function (input, pattern, flag) {
        if (!isString(input)) {
            return input;
        }
        /** @type {?} */
        var regexp = pattern instanceof RegExp ? pattern : new RegExp(pattern, flag);
        return input.match(regexp);
    };
    MatchPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'match'
                },] }
    ];
    return MatchPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var PadPipe = /** @class */ (function () {
    function PadPipe() {
    }
    /**
     * @param {?} input
     * @param {?=} length
     * @param {?=} character
     * @return {?}
     */
    PadPipe.prototype.transform = /**
     * @param {?} input
     * @param {?=} length
     * @param {?=} character
     * @return {?}
     */
    function (input, length, character) {
        if (length === void 0) { length = 0; }
        if (character === void 0) { character = ' '; }
        if (!isString(input)) {
            return input;
        }
        return pad(input, length, character);
    };
    PadPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'pad'
                },] }
    ];
    return PadPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ReplacePipe = /** @class */ (function () {
    function ReplacePipe() {
    }
    /**
     * @param {?} input
     * @param {?} pattern
     * @param {?} replacement
     * @return {?}
     */
    ReplacePipe.prototype.transform = /**
     * @param {?} input
     * @param {?} pattern
     * @param {?} replacement
     * @return {?}
     */
    function (input, pattern, replacement) {
        if (!isString(input) || isUndefined(pattern) || isUndefined(replacement)) {
            return input;
        }
        return input.replace(pattern, replacement);
    };
    ReplacePipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'replace'
                },] }
    ];
    return ReplacePipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var RightPadPipe = /** @class */ (function () {
    function RightPadPipe() {
    }
    /**
     * @param {?} input
     * @param {?=} length
     * @param {?=} character
     * @return {?}
     */
    RightPadPipe.prototype.transform = /**
     * @param {?} input
     * @param {?=} length
     * @param {?=} character
     * @return {?}
     */
    function (input, length, character) {
        if (length === void 0) { length = 0; }
        if (character === void 0) { character = ' '; }
        if (!isString(input)) {
            return input;
        }
        return rightPad(input, length, character);
    };
    RightPadPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'rightpad'
                },] }
    ];
    return RightPadPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SplitPipe = /** @class */ (function () {
    function SplitPipe() {
    }
    /**
     * @param {?} input
     * @param {?=} separator
     * @param {?=} limit
     * @return {?}
     */
    SplitPipe.prototype.transform = /**
     * @param {?} input
     * @param {?=} separator
     * @param {?=} limit
     * @return {?}
     */
    function (input, separator, limit) {
        if (separator === void 0) { separator = ' '; }
        if (!isString(input)) {
            return input;
        }
        return input.split(separator, limit);
    };
    SplitPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'split'
                },] }
    ];
    return SplitPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var TestPipe = /** @class */ (function () {
    function TestPipe() {
    }
    /**
     * @param {?} input
     * @param {?} pattern
     * @param {?} flag
     * @return {?}
     */
    TestPipe.prototype.transform = /**
     * @param {?} input
     * @param {?} pattern
     * @param {?} flag
     * @return {?}
     */
    function (input, pattern, flag) {
        if (!isString(input) || !pattern) {
            return input;
        }
        /** @type {?} */
        var regexp = pattern instanceof RegExp ? pattern : new RegExp(pattern, flag);
        return regexp.test(input);
    };
    TestPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'test'
                },] }
    ];
    return TestPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var TrimPipe = /** @class */ (function () {
    function TrimPipe() {
    }
    /**
     * @param {?} input
     * @return {?}
     */
    TrimPipe.prototype.transform = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        if (!isString(input)) {
            return input;
        }
        return input.trim();
    };
    TrimPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'trim'
                },] }
    ];
    return TrimPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NewlinesPipe = /** @class */ (function () {
    function NewlinesPipe() {
    }
    /**
     * @param {?} input
     * @return {?}
     */
    NewlinesPipe.prototype.transform = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        if (!isString(input)) {
            return input;
        }
        return input.replace(/(?:\r\n|\r|\n)/g, '<br />');
    };
    NewlinesPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'newlines'
                },] }
    ];
    return NewlinesPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CapitalizePipe = /** @class */ (function () {
    function CapitalizePipe() {
    }
    /**
     * @param {?} input
     * @param {?=} all
     * @return {?}
     */
    CapitalizePipe.prototype.transform = /**
     * @param {?} input
     * @param {?=} all
     * @return {?}
     */
    function (input, all) {
        if (all === void 0) { all = false; }
        if (!isString(input)) {
            return input;
        }
        if (!all) {
            return upperFirst(input.toLowerCase());
        }
        else {
            return input.toLowerCase()
                .split(' ')
                .map(function (value) { return upperFirst(value); })
                .join(' ');
        }
    };
    CapitalizePipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'capitalize'
                },] }
    ];
    return CapitalizePipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var UpperFirstPipe = /** @class */ (function () {
    function UpperFirstPipe() {
    }
    /**
     * @param {?} input
     * @return {?}
     */
    UpperFirstPipe.prototype.transform = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        if (!isString(input)) {
            return input;
        }
        return upperFirst(input);
    };
    UpperFirstPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'upperfirst'
                },] }
    ];
    return UpperFirstPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var TemplatePipe = /** @class */ (function () {
    function TemplatePipe() {
    }
    /**
     * @param {?} input
     * @param {...?} args
     * @return {?}
     */
    TemplatePipe.prototype.transform = /**
     * @param {?} input
     * @param {...?} args
     * @return {?}
     */
    function (input) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!isString(input) || args.length === 0) {
            return input;
        }
        /** @type {?} */
        var template = input;
        for (var i = 0; i < args.length; ++i) {
            template = template.replace("$" + (i + 1), args[i]);
        }
        return template;
    };
    TemplatePipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'template'
                },] }
    ];
    return TemplatePipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var EncodeURIPipe = /** @class */ (function () {
    function EncodeURIPipe() {
    }
    /**
     * @param {?} input
     * @return {?}
     */
    EncodeURIPipe.prototype.transform = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        if (!isString(input)) {
            return input;
        }
        return encodeURI(input);
    };
    EncodeURIPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'encodeURI'
                },] }
    ];
    return EncodeURIPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var EncodeURIComponentPipe = /** @class */ (function () {
    function EncodeURIComponentPipe() {
    }
    /**
     * @param {?} input
     * @return {?}
     */
    EncodeURIComponentPipe.prototype.transform = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        if (!isString(input)) {
            return input;
        }
        return encodeURIComponent(input);
    };
    EncodeURIComponentPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'encodeURIComponent'
                },] }
    ];
    return EncodeURIComponentPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var DecodeURIPipe = /** @class */ (function () {
    function DecodeURIPipe() {
    }
    /**
     * @param {?} input
     * @return {?}
     */
    DecodeURIPipe.prototype.transform = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        if (!isString(input)) {
            return input;
        }
        return decodeURI(input);
    };
    DecodeURIPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'decodeURI'
                },] }
    ];
    return DecodeURIPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var DecodeURIComponentPipe = /** @class */ (function () {
    function DecodeURIComponentPipe() {
    }
    /**
     * @param {?} input
     * @return {?}
     */
    DecodeURIComponentPipe.prototype.transform = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        if (!isString(input)) {
            return input;
        }
        return decodeURIComponent(input);
    };
    DecodeURIComponentPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'decodeURIComponent'
                },] }
    ];
    return DecodeURIComponentPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var TruncatePipe = /** @class */ (function () {
    function TruncatePipe() {
    }
    /**
     * @param {?} input
     * @param {?=} length
     * @param {?=} suffix
     * @param {?=} preserve
     * @return {?}
     */
    TruncatePipe.prototype.transform = /**
     * @param {?} input
     * @param {?=} length
     * @param {?=} suffix
     * @param {?=} preserve
     * @return {?}
     */
    function (input, length, suffix, preserve) {
        if (!isString(input)) {
            return input;
        }
        length = isUndefined(length) ? input.length : length;
        if (input.length <= length) {
            return input;
        }
        preserve = preserve || false;
        suffix = suffix || '';
        /** @type {?} */
        var index = length;
        if (preserve) {
            if (input.indexOf(' ', length) === -1) {
                index = input.length;
            }
            else {
                index = input.indexOf(' ', length);
            }
        }
        return input.substring(0, index) + suffix;
    };
    TruncatePipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'truncate'
                },] }
    ];
    return TruncatePipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var RepeatPipe = /** @class */ (function () {
    function RepeatPipe() {
    }
    /**
     * @param {?} input
     * @param {?=} times
     * @param {?=} characters
     * @return {?}
     */
    RepeatPipe.prototype.transform = /**
     * @param {?} input
     * @param {?=} times
     * @param {?=} characters
     * @return {?}
     */
    function (input, times, characters) {
        if (times === void 0) { times = 1; }
        if (characters === void 0) { characters = ''; }
        if (!isString(input)) {
            return input;
        }
        if (times <= 0) {
            times = 1;
        }
        /** @type {?} */
        var repeated = [input];
        for (var i = 1; i < times; ++i) {
            repeated.push(input);
        }
        return repeated.join(characters);
    };
    RepeatPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'repeat'
                },] }
    ];
    return RepeatPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SlugifyPipe = /** @class */ (function () {
    function SlugifyPipe() {
    }
    /**
     * @param {?} input
     * @return {?}
     */
    SlugifyPipe.prototype.transform = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        if (!isString(input)) {
            return input;
        }
        return (input
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9\s-]/g, ' ')
            .replace(/[\s-]+/g, '-'));
    };
    SlugifyPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'slugify' },] }
    ];
    return SlugifyPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var StripTagsPipe = /** @class */ (function () {
    function StripTagsPipe() {
    }
    /**
     * @param {?} input
     * @return {?}
     */
    StripTagsPipe.prototype.transform = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        if (!isString(input) || isUndefined(input))
            return input;
        return input.replace(/<\S[^><]*>/g, '');
    };
    StripTagsPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'stripTags'
                },] }
    ];
    return StripTagsPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var LatinizePipe = /** @class */ (function () {
    function LatinizePipe() {
    }
    /**
     * @param {?} input
     * @return {?}
     */
    LatinizePipe.prototype.transform = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        if (!isString(input) || isUndefined(input)) {
            return input;
        }
        /** @type {?} */
        var replacementList = [
            { base: ' ', chars: "\u00A0" },
            { base: '0', chars: "\u07C0" },
            { base: 'A', chars: "\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F" },
            { base: 'AA', chars: "\uA732" },
            { base: 'AE', chars: "\u00C6\u01FC\u01E2" },
            { base: 'AO', chars: "\uA734" },
            { base: 'AU', chars: "\uA736" },
            { base: 'AV', chars: "\uA738\uA73A" },
            { base: 'AY', chars: "\uA73C" },
            { base: 'B', chars: "\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0181" },
            { base: 'C', chars: "\u24b8\uff23\uA73E\u1E08\u0106\u0043\u0108\u010A\u010C\u00C7\u0187\u023B" },
            { base: 'D', chars: "\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018A\u0189\u1D05\uA779" },
            { base: 'Dh', chars: "\u00D0" },
            { base: 'DZ', chars: "\u01F1\u01C4" },
            { base: 'Dz', chars: "\u01F2\u01C5" },
            { base: 'E', chars: "\u025B\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E\u1D07" },
            { base: 'F', chars: "\uA77C\u24BB\uFF26\u1E1E\u0191\uA77B" },
            { base: 'G', chars: "\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E\u0262" },
            { base: 'H', chars: "\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D" },
            { base: 'I', chars: "\u24BE\uFF29\xCC\xCD\xCE\u0128\u012A\u012C\u0130\xCF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197" },
            { base: 'J', chars: "\u24BF\uFF2A\u0134\u0248\u0237" },
            { base: 'K', chars: "\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2" },
            { base: 'L', chars: "\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780" },
            { base: 'LJ', chars: "\u01C7" },
            { base: 'Lj', chars: "\u01C8" },
            { base: 'M', chars: "\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C\u03FB" },
            { base: 'N', chars: "\uA7A4\u0220\u24C3\uFF2E\u01F8\u0143\xD1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u019D\uA790\u1D0E" },
            { base: 'NJ', chars: "\u01CA" },
            { base: 'Nj', chars: "\u01CB" },
            { base: 'O', chars: "\u24C4\uFF2F\xD2\xD3\xD4\u1ED2\u1ED0\u1ED6\u1ED4\xD5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\xD6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\xD8\u01FE\u0186\u019F\uA74A\uA74C" },
            { base: 'OE', chars: "\u0152" },
            { base: 'OI', chars: "\u01A2" },
            { base: 'OO', chars: "\uA74E" },
            { base: 'OU', chars: "\u0222" },
            { base: 'P', chars: "\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754" },
            { base: 'Q', chars: "\u24C6\uFF31\uA756\uA758\u024A" },
            { base: 'R', chars: "\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782" },
            { base: 'S', chars: "\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784" },
            { base: 'T', chars: "\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786" },
            { base: 'Th', chars: "\u00DE" },
            { base: 'TZ', chars: "\uA728" },
            { base: 'U', chars: "\u24CA\uFF35\xD9\xDA\xDB\u0168\u1E78\u016A\u1E7A\u016C\xDC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244" },
            { base: 'V', chars: "\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245" },
            { base: 'VY', chars: "\uA760" },
            { base: 'W', chars: "\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72" },
            { base: 'X', chars: "\u24CD\uFF38\u1E8A\u1E8C" },
            { base: 'Y', chars: "\u24CE\uFF39\u1EF2\xDD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE" },
            { base: 'Z', chars: "\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762" },
            { base: 'a', chars: "\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250\u0251" },
            { base: 'aa', chars: "\uA733" },
            { base: 'ae', chars: "\u00E6\u01FD\u01E3" },
            { base: 'ao', chars: "\uA735" },
            { base: 'au', chars: "\uA737" },
            { base: 'av', chars: "\uA739\uA73B" },
            { base: 'ay', chars: "\uA73D" },
            { base: 'b', chars: "\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253\u0182" },
            { base: 'c', chars: "\uFF43\u24D2\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184" },
            { base: 'd', chars: "\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\u018B\u13E7\u0501\uA7AA" },
            { base: 'dh', chars: "\u00F0" },
            { base: 'dz', chars: "\u01F3\u01C6" },
            { base: 'e', chars: "\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u01DD", }, { base: 'f', chars: "\u24D5\uFF46\u1E1F\u0192" },
            { base: 'ff', chars: "\uFB00" },
            { base: 'fi', chars: "\uFB01" },
            { base: 'fl', chars: "\uFB02" },
            { base: 'ffi', chars: "\uFB03" },
            { base: 'ffl', chars: "\uFB04" },
            { base: 'g', chars: "\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\uA77F\u1D79" },
            { base: 'h', chars: "\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265" },
            { base: 'hv', chars: "\u0195" },
            { base: 'i', chars: "\u24D8\uFF49\xEC\xED\xEE\u0129\u012B\u012D\xEF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131" },
            { base: 'j', chars: "\u24D9\uFF4A\u0135\u01F0\u0249" },
            { base: 'k', chars: "\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3" },
            { base: 'l', chars: "\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747\u026D" },
            { base: 'lj', chars: "\u01C9" },
            { base: 'm', chars: "\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F" },
            { base: 'n', chars: "\u24DD\uFF4E\u01F9\u0144\xF1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5\u043B\u0509" },
            { base: 'nj', chars: "\u01CC" },
            { base: 'o', chars: "\u24DE\uFF4F\xF2\xF3\xF4\u1ED3\u1ED1\u1ED7\u1ED5\xF5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\xF6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\xF8\u01FF\uA74B\uA74D\u0275\u0254\u1D11" },
            { base: 'oe', chars: "\u0153" },
            { base: 'oi', chars: "\u01A3" },
            { base: 'oo', chars: "\uA74F" },
            { base: 'ou', chars: "\u0223" },
            { base: 'p', chars: "\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755\u03C1" },
            { base: 'q', chars: "\u24E0\uFF51\u024B\uA757\uA759" },
            { base: 'r', chars: "\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783" },
            { base: 's', chars: "\u24E2\uFF53\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B\u0282" },
            { base: 'ss', chars: "\xDF" },
            { base: 't', chars: "\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787" },
            { base: 'th', chars: "\u00FE" },
            { base: 'tz', chars: "\uA729" },
            { base: 'u', chars: "\u24E4\uFF55\xF9\xFA\xFB\u0169\u1E79\u016B\u1E7B\u016D\xFC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289" },
            { base: 'v', chars: "\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C" },
            { base: 'vy', chars: "\uA761" },
            { base: 'w', chars: "\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73" },
            { base: 'x', chars: "\u24E7\uFF58\u1E8B\u1E8D" },
            { base: 'y', chars: "\u24E8\uFF59\u1EF3\xFD\u0177\u1EF9\u0233\u1E8F\xFF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF" },
            { base: 'z', chars: "\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763" }
        ];
        /** @type {?} */
        var diacriticsMap = {};
        for (var i = 0; i < replacementList.length; i += 1) {
            /** @type {?} */
            var chars = replacementList[i].chars;
            for (var j = 0; j < chars.length; j += 1) {
                diacriticsMap[chars[j]] = replacementList[i].base;
            }
        }
        return input.replace(/[^\u0000-\u007e]/g, function (c) { return diacriticsMap[c] || c; });
    };
    LatinizePipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'latinize' },] }
    ];
    return LatinizePipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var WrapPipe = /** @class */ (function () {
    function WrapPipe() {
    }
    /**
     * @param {?} input
     * @param {?} wrap
     * @param {?=} ends
     * @return {?}
     */
    WrapPipe.prototype.transform = /**
     * @param {?} input
     * @param {?} wrap
     * @param {?=} ends
     * @return {?}
     */
    function (input, wrap, ends) {
        return (isString(input) && !isUndefined(wrap)) ? [wrap, input, ends || wrap].join('') : input;
    };
    WrapPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'wrap'
                },] }
    ];
    return WrapPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var WithPipe = /** @class */ (function () {
    function WithPipe() {
    }
    /**
     * @param {?} input
     * @param {?=} start
     * @param {?=} ends
     * @param {?=} csensitive
     * @return {?}
     */
    WithPipe.prototype.transform = /**
     * @param {?} input
     * @param {?=} start
     * @param {?=} ends
     * @param {?=} csensitive
     * @return {?}
     */
    function (input, start, ends, csensitive) {
        if (start === void 0) { start = null; }
        if (ends === void 0) { ends = null; }
        if (csensitive === void 0) { csensitive = false; }
        if (!isString(input) || (isNull(start) && isNull(ends)) || (start == '') || (ends == '')) {
            return input;
        }
        input = (csensitive) ? input : input.toLowerCase();
        if (!isNull(start) && !isNull(ends)) {
            /** @type {?} */
            var a = !input.indexOf((csensitive) ? start : start.toLowerCase());
            /** @type {?} */
            var b = input.indexOf((csensitive) ? ends : ends.toLowerCase(), (input.length - ends.length)) !== -1;
            if (a == true && b == true) {
                return true;
            }
            else {
                return false;
            }
        }
        if (!isNull(start)) {
            return !input.indexOf((csensitive) ? start : start.toLowerCase());
        }
        if (!isNull(ends)) {
            /** @type {?} */
            var position = input.length - ends.length;
            return input.indexOf((csensitive) ? ends : ends.toLowerCase(), position) !== -1;
        }
    };
    WithPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{ name: 'with' },] }
    ];
    return WithPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ReverseStrPipe = /** @class */ (function () {
    function ReverseStrPipe() {
    }
    /**
     * @param {?} input
     * @return {?}
     */
    ReverseStrPipe.prototype.transform = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        if (!isString(input)) {
            return input;
        }
        return Array.from(input).reverse().join('');
    };
    ReverseStrPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'reverseStr'
                },] }
    ];
    return ReverseStrPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgStringPipesModule = /** @class */ (function () {
    function NgStringPipesModule() {
    }
    NgStringPipesModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    declarations: [
                        LeftPadPipe,
                        MatchPipe,
                        PadPipe,
                        ReplacePipe,
                        RightPadPipe,
                        SplitPipe,
                        TestPipe,
                        TrimPipe,
                        NewlinesPipe,
                        CapitalizePipe,
                        UpperFirstPipe,
                        TemplatePipe,
                        EncodeURIPipe,
                        EncodeURIComponentPipe,
                        DecodeURIPipe,
                        DecodeURIComponentPipe,
                        TruncatePipe,
                        RepeatPipe,
                        SlugifyPipe,
                        StripTagsPipe,
                        LatinizePipe,
                        WrapPipe,
                        WithPipe,
                        ReverseStrPipe
                    ],
                    exports: [
                        LeftPadPipe,
                        MatchPipe,
                        PadPipe,
                        ReplacePipe,
                        RightPadPipe,
                        SplitPipe,
                        TestPipe,
                        TrimPipe,
                        NewlinesPipe,
                        CapitalizePipe,
                        UpperFirstPipe,
                        TemplatePipe,
                        EncodeURIPipe,
                        EncodeURIComponentPipe,
                        DecodeURIPipe,
                        DecodeURIComponentPipe,
                        TruncatePipe,
                        RepeatPipe,
                        SlugifyPipe,
                        StripTagsPipe,
                        LatinizePipe,
                        WrapPipe,
                        WithPipe,
                        ReverseStrPipe
                    ]
                },] }
    ];
    return NgStringPipesModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgPipesModule = /** @class */ (function () {
    function NgPipesModule() {
    }
    NgPipesModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    exports: [
                        NgArrayPipesModule,
                        NgMathPipesModule,
                        NgBooleanPipesModule,
                        NgStringPipesModule,
                        NgObjectPipesModule,
                        NgAggregatePipesModule
                    ]
                },] }
    ];
    return NgPipesModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1waXBlcy5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vYW5ndWxhci1waXBlcy91dGlscy91dGlscy50cyIsIm5nOi8vYW5ndWxhci1waXBlcy9hZ2dyZWdhdGUvZ3JvdXAtYnkucGlwZS50cyIsIm5nOi8vYW5ndWxhci1waXBlcy9hZ2dyZWdhdGUvbWF4LnBpcGUudHMiLCJuZzovL2FuZ3VsYXItcGlwZXMvYWdncmVnYXRlL21lYW4ucGlwZS50cyIsIm5nOi8vYW5ndWxhci1waXBlcy9hZ2dyZWdhdGUvbWluLnBpcGUudHMiLCJuZzovL2FuZ3VsYXItcGlwZXMvYWdncmVnYXRlL3N1bS5waXBlLnRzIiwibmc6Ly9hbmd1bGFyLXBpcGVzL2FnZ3JlZ2F0ZS9hZ2dyZWdhdGUubW9kdWxlLnRzIiwibmc6Ly9hbmd1bGFyLXBpcGVzL2FycmF5L2VtcHR5LnBpcGUudHMiLCJuZzovL2FuZ3VsYXItcGlwZXMvYXJyYXkvaGVhZC5waXBlLnRzIiwibmc6Ly9hbmd1bGFyLXBpcGVzL2FycmF5L2luaXRpYWwucGlwZS50cyIsIm5nOi8vYW5ndWxhci1waXBlcy9hcnJheS9sYXN0LnBpcGUudHMiLCJuZzovL2FuZ3VsYXItcGlwZXMvYXJyYXkvam9pbi5waXBlLnRzIiwibmc6Ly9hbmd1bGFyLXBpcGVzL2FycmF5L3RhaWwucGlwZS50cyIsIm5nOi8vYW5ndWxhci1waXBlcy9hcnJheS91bmlxLnBpcGUudHMiLCJuZzovL2FuZ3VsYXItcGlwZXMvYXJyYXkvd2l0aG91dC5waXBlLnRzIiwibmc6Ly9hbmd1bGFyLXBpcGVzL2FycmF5L21hcC5waXBlLnRzIiwibmc6Ly9hbmd1bGFyLXBpcGVzL2FycmF5L3doZXJlLnBpcGUudHMiLCJuZzovL2FuZ3VsYXItcGlwZXMvYXJyYXkvZmlyc3Qtb3ItZGVmYXVsdC5waXBlLnRzIiwibmc6Ly9hbmd1bGFyLXBpcGVzL2FycmF5L3JhbmdlLnBpcGUudHMiLCJuZzovL2FuZ3VsYXItcGlwZXMvYXJyYXkvcGx1Y2sucGlwZS50cyIsIm5nOi8vYW5ndWxhci1waXBlcy9hcnJheS9yZXZlcnNlLnBpcGUudHMiLCJuZzovL2FuZ3VsYXItcGlwZXMvYXJyYXkvb3JkZXItYnkucGlwZS50cyIsIm5nOi8vYW5ndWxhci1waXBlcy9hcnJheS9jb3VudC5waXBlLnRzIiwibmc6Ly9hbmd1bGFyLXBpcGVzL2FycmF5L3NvbWUucGlwZS50cyIsIm5nOi8vYW5ndWxhci1waXBlcy9hcnJheS9ldmVyeS5waXBlLnRzIiwibmc6Ly9hbmd1bGFyLXBpcGVzL2FycmF5L3NodWZmbGUucGlwZS50cyIsIm5nOi8vYW5ndWxhci1waXBlcy9hcnJheS90YWtlLnBpcGUudHMiLCJuZzovL2FuZ3VsYXItcGlwZXMvYXJyYXkvZHJvcC5waXBlLnRzIiwibmc6Ly9hbmd1bGFyLXBpcGVzL2FycmF5L2RlZXAucGlwZS50cyIsIm5nOi8vYW5ndWxhci1waXBlcy9hcnJheS9jaHVuay5waXBlLnRzIiwibmc6Ly9hbmd1bGFyLXBpcGVzL2FycmF5L2ZsYXR0ZW4ucGlwZS50cyIsIm5nOi8vYW5ndWxhci1waXBlcy9hcnJheS9pbnRlcnNlY3Rpb24ucGlwZS50cyIsIm5nOi8vYW5ndWxhci1waXBlcy9hcnJheS91bmlvbi5waXBlLnRzIiwibmc6Ly9hbmd1bGFyLXBpcGVzL2FycmF5L3Rha2Utd2hpbGUucGlwZS50cyIsIm5nOi8vYW5ndWxhci1waXBlcy9hcnJheS90YWtlLXVudGlsLnBpcGUudHMiLCJuZzovL2FuZ3VsYXItcGlwZXMvYXJyYXkvYXJyYXkubW9kdWxlLnRzIiwibmc6Ly9hbmd1bGFyLXBpcGVzL2Jvb2xlYW4vY29uZGl0aW9ucy5waXBlLnRzIiwibmc6Ly9hbmd1bGFyLXBpcGVzL2Jvb2xlYW4vdHlwZXMucGlwZS50cyIsIm5nOi8vYW5ndWxhci1waXBlcy9ib29sZWFuL2Jvb2xlYW4ubW9kdWxlLnRzIiwibmc6Ly9hbmd1bGFyLXBpcGVzL21hdGgvYnl0ZXMucGlwZS50cyIsIm5nOi8vYW5ndWxhci1waXBlcy9tYXRoL2NlaWwucGlwZS50cyIsIm5nOi8vYW5ndWxhci1waXBlcy9tYXRoL2Zsb29yLnBpcGUudHMiLCJuZzovL2FuZ3VsYXItcGlwZXMvbWF0aC9yb3VuZC5waXBlLnRzIiwibmc6Ly9hbmd1bGFyLXBpcGVzL21hdGgvZGVncmVlcy5waXBlLnRzIiwibmc6Ly9hbmd1bGFyLXBpcGVzL21hdGgvcmFkaWFucy5waXBlLnRzIiwibmc6Ly9hbmd1bGFyLXBpcGVzL21hdGgvcmFuZG9tLnBpcGUudHMiLCJuZzovL2FuZ3VsYXItcGlwZXMvbWF0aC9zcXJ0LnBpcGUudHMiLCJuZzovL2FuZ3VsYXItcGlwZXMvbWF0aC9wb3cucGlwZS50cyIsIm5nOi8vYW5ndWxhci1waXBlcy9tYXRoL2Ficy5waXBlLnRzIiwibmc6Ly9hbmd1bGFyLXBpcGVzL21hdGgvb3JkaW5hbC5waXBlLnRzIiwibmc6Ly9hbmd1bGFyLXBpcGVzL21hdGgvbWF0aC5tb2R1bGUudHMiLCJuZzovL2FuZ3VsYXItcGlwZXMvb2JqZWN0L2tleXMucGlwZS50cyIsIm5nOi8vYW5ndWxhci1waXBlcy9vYmplY3QvdG8tYXJyYXkucGlwZS50cyIsIm5nOi8vYW5ndWxhci1waXBlcy9vYmplY3QvZGVmYXVsdHMucGlwZS50cyIsIm5nOi8vYW5ndWxhci1waXBlcy9vYmplY3Qvb2JqZWN0Lm1vZHVsZS50cyIsIm5nOi8vYW5ndWxhci1waXBlcy9zdHJpbmcvbGVmdC1wYWQucGlwZS50cyIsIm5nOi8vYW5ndWxhci1waXBlcy9zdHJpbmcvbWF0Y2gucGlwZS50cyIsIm5nOi8vYW5ndWxhci1waXBlcy9zdHJpbmcvcGFkLnBpcGUudHMiLCJuZzovL2FuZ3VsYXItcGlwZXMvc3RyaW5nL3JlcGxhY2UucGlwZS50cyIsIm5nOi8vYW5ndWxhci1waXBlcy9zdHJpbmcvcmlnaHQtcGFkLnBpcGUudHMiLCJuZzovL2FuZ3VsYXItcGlwZXMvc3RyaW5nL3NwbGl0LnBpcGUudHMiLCJuZzovL2FuZ3VsYXItcGlwZXMvc3RyaW5nL3Rlc3QucGlwZS50cyIsIm5nOi8vYW5ndWxhci1waXBlcy9zdHJpbmcvdHJpbS5waXBlLnRzIiwibmc6Ly9hbmd1bGFyLXBpcGVzL3N0cmluZy9uZXdsaW5lcy5waXBlLnRzIiwibmc6Ly9hbmd1bGFyLXBpcGVzL3N0cmluZy9jYXBpdGFsaXplLnBpcGUudHMiLCJuZzovL2FuZ3VsYXItcGlwZXMvc3RyaW5nL3VwcGVyZmlyc3QucGlwZS50cyIsIm5nOi8vYW5ndWxhci1waXBlcy9zdHJpbmcvdGVtcGxhdGUucGlwZS50cyIsIm5nOi8vYW5ndWxhci1waXBlcy9zdHJpbmcvZW5jb2RlLXVyaS5waXBlLnRzIiwibmc6Ly9hbmd1bGFyLXBpcGVzL3N0cmluZy9lbmNvZGUtdXJpLWNvbXBvbmVudC5waXBlLnRzIiwibmc6Ly9hbmd1bGFyLXBpcGVzL3N0cmluZy9kZWNvZGUtdXJpLnBpcGUudHMiLCJuZzovL2FuZ3VsYXItcGlwZXMvc3RyaW5nL2RlY29kZS11cmktY29tcG9uZW50LnBpcGUudHMiLCJuZzovL2FuZ3VsYXItcGlwZXMvc3RyaW5nL3RydW5jYXRlLnBpcGUudHMiLCJuZzovL2FuZ3VsYXItcGlwZXMvc3RyaW5nL3JlcGVhdC5waXBlLnRzIiwibmc6Ly9hbmd1bGFyLXBpcGVzL3N0cmluZy9zbHVnaWZ5LnBpcGUudHMiLCJuZzovL2FuZ3VsYXItcGlwZXMvc3RyaW5nL3N0cmlwLXRhZ3MucGlwZS50cyIsIm5nOi8vYW5ndWxhci1waXBlcy9zdHJpbmcvbGF0aW5pemUucGlwZS50cyIsIm5nOi8vYW5ndWxhci1waXBlcy9zdHJpbmcvd3JhcC5waXBlLnRzIiwibmc6Ly9hbmd1bGFyLXBpcGVzL3N0cmluZy93aXRoLnBpcGUudHMiLCJuZzovL2FuZ3VsYXItcGlwZXMvc3RyaW5nL3JldmVyc2Utc3RyLnBpcGUudHMiLCJuZzovL2FuZ3VsYXItcGlwZXMvc3RyaW5nL3N0cmluZy5tb2R1bGUudHMiLCJuZzovL2FuZ3VsYXItcGlwZXMvcGlwZXMubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB0eXBlIENvbGxlY3Rpb25QcmVkaWNhdGUgPSAoaXRlbT86IGFueSwgaW5kZXg/OiBudW1iZXIsIGNvbGxlY3Rpb24/OiBhbnlbXSkgPT4gYm9vbGVhbjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1VuZGVmaW5lZCAodmFsdWU6IGFueSk6IHZhbHVlIGlzIHVuZGVmaW5lZCB7XHJcbiAgXHJcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc051bGwgKHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyBudWxsIHtcclxuICBcclxuICByZXR1cm4gdmFsdWUgPT09IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc051bWJlciAodmFsdWU6IGFueSk6IHZhbHVlIGlzIG51bWJlciB7XHJcbiAgXHJcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcic7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc051bWJlckZpbml0ZSAodmFsdWU6IGFueSk6IHZhbHVlIGlzIG51bWJlciB7XHJcbiAgXHJcbiAgcmV0dXJuIGlzTnVtYmVyKHZhbHVlKSAmJiBpc0Zpbml0ZSh2YWx1ZSk7XHJcbn1cclxuXHJcbi8vIE5vdCBzdHJpY3QgcG9zaXRpdmVcclxuZXhwb3J0IGZ1bmN0aW9uIGlzUG9zaXRpdmUgKHZhbHVlOiBudW1iZXIpOiBib29sZWFuIHtcclxuICBcclxuICByZXR1cm4gdmFsdWUgPj0gMDtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0ludGVnZXIgKHZhbHVlOiBudW1iZXIpOiBib29sZWFuIHtcclxuICBcclxuICAvLyBObyByZXN0LCBpcyBhbiBpbnRlZ2VyXHJcbiAgcmV0dXJuICh2YWx1ZSAlIDEpID09PSAwO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNOaWwgKHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyAobnVsbHx1bmRlZmluZWQpIHtcclxuICByZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgdHlwZW9mICh2YWx1ZSkgPT09ICd1bmRlZmluZWQnO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNTdHJpbmcgKHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyBzdHJpbmcge1xyXG4gIFxyXG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3QgKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcclxuICBcclxuICByZXR1cm4gdmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzQXJyYXkgKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcclxuICBcclxuICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0Z1bmN0aW9uICh2YWx1ZTogYW55KTogYm9vbGVhbiB7XHJcbiAgXHJcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRvRGVjaW1hbCAodmFsdWU6IG51bWJlciwgZGVjaW1hbDogbnVtYmVyKTogbnVtYmVyIHtcclxuICBcclxuICByZXR1cm4gTWF0aC5yb3VuZCh2YWx1ZSAqIE1hdGgucG93KDEwLCBkZWNpbWFsKSkgLyBNYXRoLnBvdygxMCwgZGVjaW1hbCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cHBlckZpcnN0ICh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICBcclxuICByZXR1cm4gdmFsdWUuc2xpY2UoMCwgMSkudG9VcHBlckNhc2UoKSArIHZhbHVlLnNsaWNlKDEpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUm91bmQgKG1ldGhvZDogc3RyaW5nKTogRnVuY3Rpb24ge1xyXG4gIFxyXG4gIC8vIDxhbnk+TWF0aCB0byBzdXBwcmVzcyBlcnJvclxyXG4gIGNvbnN0IGZ1bmM6IGFueSA9ICg8YW55Pk1hdGgpW21ldGhvZF07XHJcbiAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZTogbnVtYmVyLCBwcmVjaXNpb246IG51bWJlciA9IDApIHtcclxuICAgIFxyXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUm91bmRpbmcgbWV0aG9kIG5lZWRzIGEgbnVtYmVyJyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmICh0eXBlb2YgcHJlY2lzaW9uICE9PSAnbnVtYmVyJyB8fCBpc05hTihwcmVjaXNpb24pKSB7XHJcbiAgICAgIHByZWNpc2lvbiA9IDA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmIChwcmVjaXNpb24pIHtcclxuICAgICAgXHJcbiAgICAgIGxldCBwYWlyID0gYCR7dmFsdWV9ZWAuc3BsaXQoJ2UnKTtcclxuICAgICAgY29uc3QgdmFsID0gZnVuYyggYCR7cGFpclswXX1lYCArICgrcGFpclsxXSArIHByZWNpc2lvbikpO1xyXG4gICAgICBcclxuICAgICAgcGFpciA9IGAke3ZhbH1lYC5zcGxpdCgnZScpO1xyXG4gICAgICByZXR1cm4gKyhwYWlyWzBdICsgJ2UnICsgKCtwYWlyWzFdIC0gcHJlY2lzaW9uKSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiBmdW5jKHZhbHVlKTtcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGVmdFBhZCAoc3RyOiBzdHJpbmcsIGxlbjogbnVtYmVyID0gMCwgY2g6IGFueSA9ICcgJykge1xyXG4gIFxyXG4gIHN0ciA9IFN0cmluZyhzdHIpO1xyXG4gIGNoID0gdG9TdHJpbmcoY2gpO1xyXG4gIGxldCBpID0gLTE7XHJcbiAgY29uc3QgbGVuZ3RoID0gbGVuIC0gc3RyLmxlbmd0aDtcclxuICBcclxuICB3aGlsZSAoKytpIDwgbGVuZ3RoICYmIChzdHIubGVuZ3RoICsgY2gubGVuZ3RoKSA8PSBsZW4pIHtcclxuICAgIHN0ciA9IGNoICsgc3RyO1xyXG4gIH1cclxuICBcclxuICByZXR1cm4gc3RyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmlnaHRQYWQgKHN0cjogc3RyaW5nLCBsZW46IG51bWJlciA9IDAsIGNoOiBhbnkgPSAnICcpIHtcclxuICBcclxuICBzdHIgPSBTdHJpbmcoc3RyKTtcclxuICBjaCA9IHRvU3RyaW5nKGNoKTtcclxuICBcclxuICBsZXQgaSA9IC0xO1xyXG4gIGNvbnN0IGxlbmd0aCA9IGxlbiAtIHN0ci5sZW5ndGg7XHJcbiAgXHJcbiAgd2hpbGUgKCsraSA8IGxlbmd0aCAmJiAoc3RyLmxlbmd0aCArIGNoLmxlbmd0aCkgPD0gbGVuKSB7XHJcbiAgICBzdHIgKz0gY2g7XHJcbiAgfVxyXG4gIFxyXG4gIHJldHVybiBzdHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0b1N0cmluZyAodmFsdWU6IG51bWJlcnxzdHJpbmcpIHtcclxuICBcclxuICByZXR1cm4gYCR7dmFsdWV9YDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhZCAoc3RyOiBzdHJpbmcsIGxlbjogbnVtYmVyID0gMCwgY2g6IGFueSA9ICcgJyk6IHN0cmluZ3tcclxuICBcclxuICBzdHIgPSBTdHJpbmcoc3RyKTtcclxuICBjaCA9IHRvU3RyaW5nKGNoKTtcclxuICBsZXQgaSA9IC0xO1xyXG4gIGNvbnN0IGxlbmd0aCA9IGxlbiAtIHN0ci5sZW5ndGg7XHJcbiAgXHJcbiAgXHJcbiAgbGV0IGxlZnQgPSB0cnVlO1xyXG4gIHdoaWxlICgrK2kgPCBsZW5ndGgpIHtcclxuICAgIFxyXG4gICAgY29uc3QgbCA9IChzdHIubGVuZ3RoICsgY2gubGVuZ3RoIDw9IGxlbikgPyAoc3RyLmxlbmd0aCArIGNoLmxlbmd0aCkgOiAoc3RyLmxlbmd0aCArIDEpO1xyXG4gICAgXHJcbiAgICBpZiAobGVmdCkge1xyXG4gICAgICBzdHIgPSBsZWZ0UGFkKHN0ciwgbCwgY2gpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHN0ciA9IHJpZ2h0UGFkKHN0ciwgbCwgY2gpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBsZWZ0ID0gIWxlZnQ7XHJcbiAgfVxyXG4gIFxyXG4gIHJldHVybiBzdHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmbGF0dGVuIChpbnB1dDogYW55W10sIGluZGV4OiBudW1iZXIgPSAwKTogYW55W10ge1xyXG4gIFxyXG4gIGlmIChpbmRleCA+PSBpbnB1dC5sZW5ndGgpIHtcclxuICAgIHJldHVybiBpbnB1dDtcclxuICB9XHJcbiAgXHJcbiAgaWYgKGlzQXJyYXkoaW5wdXRbaW5kZXhdKSkge1xyXG4gICAgcmV0dXJuIGZsYXR0ZW4oXHJcbiAgICBpbnB1dC5zbGljZSgwLCBpbmRleCkuY29uY2F0KGlucHV0W2luZGV4XSwgaW5wdXQuc2xpY2UoaW5kZXggKyAxKSksXHJcbiAgICBpbmRleFxyXG4gICAgKTtcclxuICB9XHJcbiAgXHJcbiAgcmV0dXJuIGZsYXR0ZW4oaW5wdXQsIGluZGV4ICsgMSk7XHJcbiAgXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvcGVydHkgKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IGFueX0sIGtleTogc3RyaW5nKTogYW55IHtcclxuICBcclxuICBpZiAoaXNOaWwodmFsdWUpIHx8ICFpc09iamVjdCh2YWx1ZSkpIHtcclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgfVxyXG4gIFxyXG4gIGNvbnN0IGtleXM6IHN0cmluZ1tdID0ga2V5LnNwbGl0KCcuJyk7XHJcbiAgbGV0IHJlc3VsdDogYW55ID0gdmFsdWVba2V5cy5zaGlmdCgpIV07XHJcbiAgXHJcbiAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xyXG4gICAgaWYgKGlzTmlsKHJlc3VsdCkgfHwgIWlzT2JqZWN0KHJlc3VsdCkpIHtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmVzdWx0ID0gcmVzdWx0W2tleV07XHJcbiAgfVxyXG4gIFxyXG4gIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdW0gKGlucHV0OiBBcnJheTxudW1iZXI+LCBpbml0aWFsID0gMCk6IG51bWJlciB7XHJcbiAgXHJcbiAgcmV0dXJuIGlucHV0LnJlZHVjZSgocHJldmlvdXM6IG51bWJlciwgY3VycmVudDogbnVtYmVyKSA9PiBwcmV2aW91cyArIGN1cnJlbnQsIGluaXRpYWwpO1xyXG59XHJcblxyXG4vLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzYyNzQzMzkvaG93LWNhbi1pLXNodWZmbGUtYW4tYXJyYXktaW4tamF2YXNjcmlwdFxyXG5leHBvcnQgZnVuY3Rpb24gc2h1ZmZsZSAoaW5wdXQ6IGFueSk6IGFueSB7XHJcbiAgXHJcbiAgaWYgKCFpc0FycmF5KGlucHV0KSkge1xyXG4gICAgcmV0dXJuIGlucHV0O1xyXG4gIH1cclxuICBcclxuICBjb25zdCBjb3B5ID0gWy4uLmlucHV0XTtcclxuICBcclxuICBmb3IgKGxldCBpID0gY29weS5sZW5ndGg7IGk7IC0taSkge1xyXG4gICAgY29uc3QgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGkpO1xyXG4gICAgY29uc3QgeCA9IGNvcHlbaSAtIDFdO1xyXG4gICAgY29weVtpIC0gMV0gPSBjb3B5W2pdO1xyXG4gICAgY29weVtqXSA9IHg7XHJcbiAgfVxyXG4gIFxyXG4gIHJldHVybiBjb3B5O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVlcEluZGV4T2YgKGNvbGxlY3Rpb246IGFueVtdLCB2YWx1ZTogYW55KSB7XHJcbiAgXHJcbiAgbGV0IGluZGV4ID0gLTE7XHJcbiAgY29uc3QgbGVuZ3RoID0gY29sbGVjdGlvbi5sZW5ndGg7XHJcbiAgXHJcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcclxuICAgIGlmIChkZWVwRXF1YWwodmFsdWUsIGNvbGxlY3Rpb25baW5kZXhdKSkge1xyXG4gICAgICByZXR1cm4gaW5kZXg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIHJldHVybiAtMTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWVwRXF1YWwgKGE6IGFueSwgYjogYW55KSB7XHJcbiAgXHJcbiAgaWYgKGEgPT09IGIpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICBcclxuICBpZiAoISh0eXBlb2YgYSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIGIgPT09ICdvYmplY3QnKSkge1xyXG4gICAgcmV0dXJuIGEgPT09IGI7XHJcbiAgfVxyXG4gIFxyXG4gIGNvbnN0IGtleXNBID0gT2JqZWN0LmtleXMoYSk7XHJcbiAgY29uc3Qga2V5c0IgPSBPYmplY3Qua2V5cyhiKTtcclxuICBcclxuICBpZiAoa2V5c0EubGVuZ3RoICE9PSBrZXlzQi5sZW5ndGgpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgXHJcbiAgLy8gVGVzdCBmb3IgQSdzIGtleXMgZGlmZmVyZW50IGZyb20gQi5cclxuICB2YXIgaGFzT3duID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXNBLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCBrZXkgPSBrZXlzQVtpXTtcclxuICAgIGlmICghaGFzT3duLmNhbGwoYiwga2V5c0FbaV0pIHx8ICFkZWVwRXF1YWwoYVtrZXldLCBiW2tleV0pKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0RlZXBPYmplY3QgKG9iamVjdDogYW55KSB7XHJcbiAgXHJcbiAgcmV0dXJuIG9iamVjdC5fX2lzRGVlcE9iamVjdF9fO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gd3JhcERlZXAgKG9iamVjdDogYW55KSB7XHJcbiAgXHJcbiAgcmV0dXJuIG5ldyBEZWVwV3JhcHBlcihvYmplY3QpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdW53cmFwRGVlcCAob2JqZWN0OiBhbnkpIHtcclxuICBcclxuICBpZiAoaXNEZWVwT2JqZWN0KG9iamVjdCkpIHtcclxuICAgIHJldHVybiBvYmplY3QuZGF0YTtcclxuICB9XHJcbiAgXHJcbiAgcmV0dXJuIG9iamVjdDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERlZXBXcmFwcGVyIHtcclxuICBcclxuICBwdWJsaWMgX19pc0RlZXBPYmplY3RfXzogYm9vbGVhbiA9IHRydWU7XHJcbiAgXHJcbiAgY29uc3RydWN0b3IgKHB1YmxpYyBkYXRhOiBhbnkpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb3VudCAoaW5wdXQ6IGFueSk6IGFueSB7XHJcbiAgXHJcbiAgaWYgKCFpc0FycmF5KGlucHV0KSAmJiAhaXNPYmplY3QoaW5wdXQpICYmICFpc1N0cmluZyhpbnB1dCkpIHtcclxuICAgIHJldHVybiBpbnB1dDtcclxuICB9XHJcbiAgXHJcbiAgaWYgKGlzT2JqZWN0KGlucHV0KSkge1xyXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGlucHV0KS5tYXAoKHZhbHVlKSA9PiBpbnB1dFt2YWx1ZV0pLmxlbmd0aDtcclxuICB9XHJcbiAgXHJcbiAgcmV0dXJuIGlucHV0Lmxlbmd0aDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGVtcHR5IChpbnB1dDogYW55KTogYW55IHtcclxuICBcclxuICBpZiAoIWlzQXJyYXkoaW5wdXQpKSB7XHJcbiAgICByZXR1cm4gaW5wdXQ7XHJcbiAgfVxyXG4gIFxyXG4gIHJldHVybiBpbnB1dC5sZW5ndGggPT09IDA7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBldmVyeSAoaW5wdXQ6IGFueSwgcHJlZGljYXRlOiBDb2xsZWN0aW9uUHJlZGljYXRlKSB7XHJcbiAgXHJcbiAgaWYgKCFpc0FycmF5KGlucHV0KSB8fCAhcHJlZGljYXRlKSB7XHJcbiAgICByZXR1cm4gaW5wdXQ7XHJcbiAgfVxyXG4gIFxyXG4gIGxldCByZXN1bHQgPSB0cnVlO1xyXG4gIGxldCBpID0gLTE7XHJcbiAgXHJcbiAgd2hpbGUgKCsraSA8IGlucHV0Lmxlbmd0aCAmJiByZXN1bHQpIHtcclxuICAgIHJlc3VsdCA9IHByZWRpY2F0ZShpbnB1dFtpXSwgaSwgaW5wdXQpO1xyXG4gIH1cclxuICBcclxuICBcclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdGFrZVVudGlsIChpbnB1dDogYW55W10sIHByZWRpY2F0ZTogQ29sbGVjdGlvblByZWRpY2F0ZSkge1xyXG5cclxuICBsZXQgaSA9IC0xO1xyXG4gIGNvbnN0IHJlc3VsdDogYW55ID0gW107XHJcbiAgd2hpbGUgKCsraSA8IGlucHV0Lmxlbmd0aCAmJiAhcHJlZGljYXRlKGlucHV0W2ldLCBpLCBpbnB1dCkpIHtcclxuICAgIHJlc3VsdFtpXSA9IGlucHV0W2ldO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRha2VXaGlsZSAoaW5wdXQ6IGFueVtdLCBwcmVkaWNhdGU6IENvbGxlY3Rpb25QcmVkaWNhdGUpIHtcclxuICByZXR1cm4gdGFrZVVudGlsKGlucHV0LCAoaXRlbTogYW55LCBpbmRleDogbnVtYmVyLCBjb2xsZWN0aW9uOiBhbnlbXSkgPT4gIXByZWRpY2F0ZShpdGVtLCBpbmRleCwgY29sbGVjdGlvbikpO1xyXG59XHJcbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgZ2V0UHJvcGVydHksIGlzQXJyYXksIGlzVW5kZWZpbmVkIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdncm91cEJ5J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgR3JvdXBCeVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgdHJhbnNmb3JtKGlucHV0OiBhbnksIHByb3A6IHN0cmluZyk6IEFycmF5PGFueT4ge1xyXG5cclxuICAgIGlmICghaXNBcnJheShpbnB1dCkpIHtcclxuICAgICAgcmV0dXJuIGlucHV0O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFycjogeyBba2V5OiBzdHJpbmddOiBBcnJheTxhbnk+IH0gPSB7fTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IHZhbHVlIG9mIGlucHV0KSB7XHJcbiAgICAgIGNvbnN0IGZpZWxkOiBhbnkgPSBnZXRQcm9wZXJ0eSh2YWx1ZSwgcHJvcCk7XHJcblxyXG4gICAgICBpZiAoaXNVbmRlZmluZWQoYXJyW2ZpZWxkXSkpIHtcclxuICAgICAgICBhcnJbZmllbGRdID0gW107XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGFycltmaWVsZF0ucHVzaCh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGFycikubWFwKGtleSA9PiAoeyBrZXksICd2YWx1ZSc6IGFycltrZXldIH0pKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcclxuXHJcbkBQaXBlKHsgXHJcbiAgbmFtZTogJ21heCcgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXhQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgXHJcbiAgdHJhbnNmb3JtIChpbnB1dDogYW55KTogYW55IHtcclxuICAgIFxyXG4gICAgaWYgKCFpc0FycmF5KGlucHV0KSkge1xyXG4gICAgICByZXR1cm4gaW5wdXQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmIChpbnB1dC5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgbGV0IG1heCA9IGlucHV0WzBdO1xyXG4gICAgXHJcbiAgICBpbnB1dC5mb3JFYWNoKCh2YWx1ZTogYW55KSA9PiB7XHJcbiAgICAgIFxyXG4gICAgICBpZiAobWF4IDwgdmFsdWUpIHtcclxuICAgICAgICBtYXggPSB2YWx1ZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIHJldHVybiBtYXg7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgaXNBcnJheSwgc3VtIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdtZWFuJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTWVhblBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICBcclxuICB0cmFuc2Zvcm0gKGlucHV0OiBhbnkpOiBhbnkge1xyXG4gICAgXHJcbiAgICBpZiAoIWlzQXJyYXkoaW5wdXQpKSB7XHJcbiAgICAgIHJldHVybiBpbnB1dDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgY291bnQgPSBpbnB1dC5sZW5ndGg7XHJcbiAgICBcclxuICAgIGlmIChjb3VudCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gc3VtKGlucHV0KSAvIGNvdW50O1xyXG4gIH1cclxufSIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGlzQXJyYXkgfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcblxyXG5AUGlwZSh7IFxyXG4gIG5hbWU6ICdtaW4nIFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWluUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIFxyXG4gIHRyYW5zZm9ybSAoaW5wdXQ6IGFueSk6IGFueSB7XHJcbiAgICBcclxuICAgIGlmICghaXNBcnJheShpbnB1dCkpIHtcclxuICAgICAgcmV0dXJuIGlucHV0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAoaW5wdXQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGxldCBtaW4gPSBpbnB1dFswXTtcclxuICAgIFxyXG4gICAgaW5wdXQuZm9yRWFjaCgodmFsdWU6IGFueSkgPT4ge1xyXG4gICAgICBcclxuICAgICAgaWYgKG1pbiA+IHZhbHVlKSB7XHJcbiAgICAgICAgbWluID0gdmFsdWU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICByZXR1cm4gbWluO1xyXG4gIH1cclxufSIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgaXNBcnJheSwgc3VtIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAnc3VtJyB9KVxyXG5leHBvcnQgY2xhc3MgU3VtUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIHRyYW5zZm9ybShpbnB1dDogYW55KTogYW55IHtcclxuICAgIHJldHVybiAhaXNBcnJheShpbnB1dCkgPyBpbnB1dCA6IHN1bShpbnB1dCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBHcm91cEJ5UGlwZSB9IGZyb20gJy4vZ3JvdXAtYnkucGlwZSc7XHJcbmltcG9ydCB7IE1heFBpcGUgfSBmcm9tICcuL21heC5waXBlJztcclxuaW1wb3J0IHsgTWVhblBpcGUgfSBmcm9tICcuL21lYW4ucGlwZSc7XHJcbmltcG9ydCB7IE1pblBpcGUgfSBmcm9tICcuL21pbi5waXBlJztcclxuaW1wb3J0IHsgU3VtUGlwZSB9IGZyb20gJy4vc3VtLnBpcGUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIEdyb3VwQnlQaXBlLFxyXG4gICAgTWF4UGlwZSxcclxuICAgIE1lYW5QaXBlLFxyXG4gICAgTWluUGlwZSxcclxuICAgIFN1bVBpcGVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIEdyb3VwQnlQaXBlLFxyXG4gICAgTWF4UGlwZSxcclxuICAgIE1lYW5QaXBlLFxyXG4gICAgTWluUGlwZSxcclxuICAgIFN1bVBpcGVcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ0FnZ3JlZ2F0ZVBpcGVzTW9kdWxlIHt9XHJcblxyXG5cclxuIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgZW1wdHkgfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ2VtcHR5J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRW1wdHlQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgXHJcbiAgdHJhbnNmb3JtIChpbnB1dDogYW55KTogYW55IHtcclxuICAgIFxyXG4gICAgcmV0dXJuIGVtcHR5KGlucHV0KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnaGVhZCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEhlYWRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgXHJcbiAgdHJhbnNmb3JtIChpbnB1dDogYW55KTogYW55IHtcclxuICAgIFxyXG4gICAgaWYgKCFpc0FycmF5KGlucHV0KSkge1xyXG4gICAgICByZXR1cm4gaW5wdXQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIFdpbGwgcmV0dXJuIHVuZGVmaW5lZCBpZiBsZW5ndGggaXMgMFxyXG4gICAgcmV0dXJuIGlucHV0WzBdO1xyXG4gIH1cclxufSIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGlzQXJyYXkgfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ2luaXRpYWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbml0aWFsUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIFxyXG4gIHRyYW5zZm9ybSAoaW5wdXQ6IGFueSk6IGFueSB7XHJcbiAgICBcclxuICAgIGlmICghaXNBcnJheShpbnB1dCkpIHtcclxuICAgICAgcmV0dXJuIGlucHV0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gaW5wdXQuc2xpY2UoMCwgaW5wdXQubGVuZ3RoIC0gMSk7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnbGFzdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIExhc3RQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgXHJcbiAgdHJhbnNmb3JtIChpbnB1dDogYW55KTogYW55IHtcclxuICAgIFxyXG4gICAgaWYgKCFpc0FycmF5KGlucHV0KSkge1xyXG4gICAgICByZXR1cm4gaW5wdXQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIFJldHVybnMgdW5kZWZpbmVkIGlmIGVtcHR5XHJcbiAgICByZXR1cm4gaW5wdXRbaW5wdXQubGVuZ3RoIC0gMV07XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnam9pbidcclxufSlcclxuZXhwb3J0IGNsYXNzIEpvaW5QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgXHJcbiAgdHJhbnNmb3JtIChpbnB1dDogYW55LCBjaGFyYWN0ZXI6IHN0cmluZyA9ICcnKTogYW55IHtcclxuICAgIFxyXG4gICAgaWYgKCFpc0FycmF5KGlucHV0KSkge1xyXG4gICAgICByZXR1cm4gaW5wdXQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiBpbnB1dC5qb2luKGNoYXJhY3Rlcik7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAndGFpbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFRhaWxQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgXHJcbiAgdHJhbnNmb3JtIChpbnB1dDogYW55KTogYW55IHtcclxuICAgIFxyXG4gICAgaWYgKCFpc0FycmF5KGlucHV0KSkge1xyXG4gICAgICByZXR1cm4gaW5wdXQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiBpbnB1dC5zbGljZSgxLCBpbnB1dC5sZW5ndGgpO1xyXG4gIH1cclxufSIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGlzQXJyYXksIGlzRGVlcE9iamVjdCwgdW53cmFwRGVlcCwgZGVlcEluZGV4T2YgfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ3VuaXEnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVbmlxUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIFxyXG4gIHRyYW5zZm9ybSAoaW5wdXQ6IGFueSk6IGFueSB7XHJcbiAgICBcclxuICAgIGlmICghaXNBcnJheShpbnB1dCkgJiYgIWlzRGVlcE9iamVjdChpbnB1dCkpIHtcclxuICAgICAgcmV0dXJuIGlucHV0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAoaXNEZWVwT2JqZWN0KGlucHV0KSkge1xyXG4gICAgICBjb25zdCB1bndyYXBwZWRJbnB1dCA9IHVud3JhcERlZXAoaW5wdXQpO1xyXG4gICAgICBpZiAoIWlzQXJyYXkodW53cmFwcGVkSW5wdXQpKSB7XHJcbiAgICAgICAgcmV0dXJuIHVud3JhcHBlZElucHV0O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICByZXR1cm4gdW53cmFwcGVkSW5wdXQuZmlsdGVyKCh2YWx1ZTogYW55LCBpbmRleDogbnVtYmVyKSA9PiBcclxuICAgICAgICBkZWVwSW5kZXhPZih1bndyYXBwZWRJbnB1dCwgdmFsdWUpID09PSBpbmRleFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gaW5wdXQuZmlsdGVyKCh2YWx1ZTogYW55LCBpbmRleDogbnVtYmVyKSA9PiBpbnB1dC5pbmRleE9mKHZhbHVlKSA9PT0gaW5kZXgpO1xyXG4gIH1cclxufSIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGlzQXJyYXksIGlzRGVlcE9iamVjdCwgdW53cmFwRGVlcCwgZGVlcEluZGV4T2YgfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ3dpdGhvdXQnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBXaXRob3V0UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIFxyXG4gIHRyYW5zZm9ybSAoaW5wdXQ6IGFueSwgLi4uYXJnczogYW55W10pOiBhbnkge1xyXG4gICAgXHJcbiAgICBpZiAoIWlzQXJyYXkoaW5wdXQpICYmICFpc0RlZXBPYmplY3QoaW5wdXQpKSB7XHJcbiAgICAgIHJldHVybiBpbnB1dDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKGlzRGVlcE9iamVjdChpbnB1dCkpIHtcclxuICAgICAgY29uc3QgdW53cmFwcGVkSW5wdXQgPSB1bndyYXBEZWVwKGlucHV0KTtcclxuICAgICAgaWYgKCFpc0FycmF5KHVud3JhcHBlZElucHV0KSkge1xyXG4gICAgICAgIHJldHVybiB1bndyYXBwZWRJbnB1dDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgcmV0dXJuIHVud3JhcHBlZElucHV0LmZpbHRlcigodmFsdWU6IGFueSkgPT4gXHJcbiAgICAgICAgZGVlcEluZGV4T2YoYXJncywgdmFsdWUpID09PSAtMVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIHJldHVybiBpbnB1dC5maWx0ZXIoKHZhbHVlOiBhbnkpID0+IGFyZ3MuaW5kZXhPZih2YWx1ZSkgPT09IC0xKTtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBpc0FycmF5IH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdtYXAnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXBQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgXHJcbiAgdHJhbnNmb3JtIChpbnB1dDogYW55LCBmbjogRnVuY3Rpb24pOiBhbnkge1xyXG4gICAgXHJcbiAgICBpZiAoIWlzQXJyYXkoaW5wdXQpIHx8ICFmbikge1xyXG4gICAgICByZXR1cm4gaW5wdXQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiBpbnB1dC5tYXAoZm4pO1xyXG4gIH1cclxufSIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGlzQXJyYXksIGlzRnVuY3Rpb24sIGdldFByb3BlcnR5IH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICd3aGVyZSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFdoZXJlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIFxyXG4gIC8qKiBcclxuICAqIFN1cHBvcnQgYSBmdW5jdGlvbiBvciBhIHZhbHVlIG9yIHRoZSBzaG9ydGhhbmQgWydrZXknLCB2YWx1ZV0gbGlrZSB0aGUgbG9kYXNoIHNob3J0aGFuZC5cclxuICAqL1xyXG4gIHRyYW5zZm9ybSAoaW5wdXQ6IGFueSwgZm46IGFueSk6IGFueSB7XHJcbiAgICBcclxuICAgIGlmICghaXNBcnJheShpbnB1dCkpIHtcclxuICAgICAgcmV0dXJuIGlucHV0XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmIChpc0Z1bmN0aW9uKGZuKSkge1xyXG4gICAgICByZXR1cm4gaW5wdXQuZmlsdGVyKGZuKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGlzQXJyYXkoZm4pKSB7XHJcbiAgICAgIGNvbnN0IFtrZXksIHZhbHVlXSA9IGZuO1xyXG4gICAgICByZXR1cm4gaW5wdXQuZmlsdGVyKChpdGVtOiBhbnkpID0+IGdldFByb3BlcnR5KGl0ZW0sIGtleSkgPT09IHZhbHVlKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGZuKSB7XHJcbiAgICAgIHJldHVybiBpbnB1dC5maWx0ZXIoKGl0ZW06IGFueSkgPT4gaXRlbSA9PT0gZm4pO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHJldHVybiBpbnB1dDtcclxuICAgIH1cclxuICAgIFxyXG4gIH1cclxufSIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGlzQXJyYXksIGlzRnVuY3Rpb24sIGdldFByb3BlcnR5LCBDb2xsZWN0aW9uUHJlZGljYXRlIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xyXG5cclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnZmlyc3RPckRlZmF1bHQnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGaXJzdE9yRGVmYXVsdFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICBcclxuICBwcml2YXRlIHN0YXRpYyBmaW5kIChcclxuICAgIGlucHV0OiBhbnlbXSwgXHJcbiAgICBwcmVkaWNhdGU6IENvbGxlY3Rpb25QcmVkaWNhdGUsXHJcbiAgICBkZWZhdWx0VmFsdWU/OiBhbnlcclxuICApOiBhbnkge1xyXG4gICAgXHJcbiAgICBsZXQgZm91bmQgPSBmYWxzZTtcclxuICAgIGxldCByZXN1bHQ6IGFueTtcclxuICAgIGxldCBpID0gLTE7XHJcbiAgICBcclxuICAgIHdoaWxlICghZm91bmQgJiYgKytpIDwgaW5wdXQubGVuZ3RoKSB7XHJcbiAgICAgIGZvdW5kID0gcHJlZGljYXRlKGlucHV0W2ldLCBpLCBpbnB1dCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmIChmb3VuZCkge1xyXG4gICAgICByZXN1bHQgPSBpbnB1dFtpXTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKHR5cGVvZiByZXN1bHQgPT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBkZWZhdWx0VmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIHJlc3VsdCA9IGRlZmF1bHRWYWx1ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcbiAgXHJcbiAgdHJhbnNmb3JtIChcclxuICAgIGlucHV0OiBhbnksXHJcbiAgICBwcmVkaWNhdGU6IENvbGxlY3Rpb25QcmVkaWNhdGV8c3RyaW5nW118YW55LFxyXG4gICAgZGVmYXVsdFZhbHVlPzogYW55XHJcbiAgKTogYW55IHtcclxuICAgIFxyXG4gICAgaWYgKCFpc0FycmF5KGlucHV0KSkge1xyXG4gICAgICByZXR1cm4gaW5wdXRcclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKGlzRnVuY3Rpb24ocHJlZGljYXRlKSkge1xyXG4gICAgICByZXR1cm4gRmlyc3RPckRlZmF1bHRQaXBlLmZpbmQoaW5wdXQsIDxDb2xsZWN0aW9uUHJlZGljYXRlPnByZWRpY2F0ZSwgZGVmYXVsdFZhbHVlKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGlzQXJyYXkocHJlZGljYXRlKSkge1xyXG4gICAgICBjb25zdCBba2V5LCB2YWx1ZV0gPSA8c3RyaW5nW10+IHByZWRpY2F0ZTtcclxuICAgICAgcmV0dXJuIEZpcnN0T3JEZWZhdWx0UGlwZS5maW5kKGlucHV0LCAoaXRlbTogYW55KSA9PiBnZXRQcm9wZXJ0eShpdGVtLCBrZXkpID09PSB2YWx1ZSwgZGVmYXVsdFZhbHVlKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHByZWRpY2F0ZSkge1xyXG4gICAgICByZXR1cm4gRmlyc3RPckRlZmF1bHRQaXBlLmZpbmQoaW5wdXQsIChpdGVtKSA9PiBpdGVtID09PSA8YW55PnByZWRpY2F0ZSwgZGVmYXVsdFZhbHVlKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICByZXR1cm4gaW5wdXQ7XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAncmFuZ2UnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSYW5nZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICBcclxuICB0cmFuc2Zvcm0gKF9pbnB1dDogYW55LCBzaXplOiBudW1iZXIgPSAwLCBzdGFydDogbnVtYmVyID0gMSwgc3RlcDogbnVtYmVyID0gMSk6IGFueSB7XHJcbiAgICBcclxuICAgIGNvbnN0IHJhbmdlOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgZm9yIChsZXQgbGVuZ3RoID0gMDsgbGVuZ3RoIDwgc2l6ZTsgKytsZW5ndGgpIHtcclxuICAgICAgcmFuZ2UucHVzaChzdGFydCk7XHJcbiAgICAgIHN0YXJ0ICs9IHN0ZXA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiByYW5nZTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgaXNBcnJheSwgZ2V0UHJvcGVydHkgfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ3BsdWNrJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUGx1Y2tQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgXHJcbiAgdHJhbnNmb3JtIChpbnB1dDogYW55LCBrZXk6IHN0cmluZyk6IGFueSB7XHJcbiAgICBcclxuICAgIGlmICghaXNBcnJheShpbnB1dCkgfHwgIWtleSkge1xyXG4gICAgICByZXR1cm4gaW5wdXQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiBpbnB1dC5tYXAoKHZhbHVlOiBhbnkpID0+IHtcclxuICAgICAgcmV0dXJuIGdldFByb3BlcnR5KHZhbHVlLCBrZXkpOyBcclxuICAgIH0pO1xyXG4gIH1cclxufSIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAncmV2ZXJzZSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFJldmVyc2VQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgXHJcbiAgdHJhbnNmb3JtIChpbnB1dDogYW55KTogYW55IHtcclxuICAgIFxyXG4gICAgaWYgKCFpc0FycmF5KGlucHV0KSkge1xyXG4gICAgICByZXR1cm4gaW5wdXQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiBbLi4uaW5wdXRdLnJldmVyc2UoKTtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGlzQXJyYXkgfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ29yZGVyQnknXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBPcmRlckJ5UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIFxyXG4gIHByaXZhdGUgc3RhdGljIF9vcmRlckJ5IChhOiBhbnksIGI6IGFueSk6IG51bWJlciB7XHJcbiAgICBcclxuICAgIGlmIChhIGluc3RhbmNlb2YgRGF0ZSAmJiBiIGluc3RhbmNlb2YgRGF0ZSkge1xyXG4gICAgICByZXR1cm4gKGEgPCBiKSA/IC0xIDogKGEgPiBiKSA/IDEgOiAwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBmbG9hdEEgPSBwYXJzZUZsb2F0KGEpO1xyXG4gICAgY29uc3QgZmxvYXRCID0gcGFyc2VGbG9hdChiKTtcclxuICAgIFxyXG4gICAgaWYgKHR5cGVvZiBhID09PSAnc3RyaW5nJyAmJiB0eXBlb2YgYiA9PT0gJ3N0cmluZycgJiYgKGlzTmFOKGZsb2F0QSkgfHwgaXNOYU4oZmxvYXRCKSkpIHtcclxuICAgICAgY29uc3QgbG93ZXJBID0gYS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICBjb25zdCBsb3dlckIgPSBiLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgIHJldHVybiAobG93ZXJBIDwgbG93ZXJCKSA/IC0xIDogKGxvd2VyQSA+IGxvd2VyQikgPyAxIDogMDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIChmbG9hdEEgPCBmbG9hdEIpID8gLTEgOiAoZmxvYXRBID4gZmxvYXRCKSA/IDEgOiAwOyBcclxuICB9XHJcbiAgXHJcbiAgdHJhbnNmb3JtIChpbnB1dDogYW55LCBjb25maWc6IGFueSA9ICcrJyk6IGFueSB7XHJcbiAgICBcclxuICAgIGlmICghaXNBcnJheShpbnB1dCkpIHtcclxuICAgICAgcmV0dXJuIGlucHV0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBjb25maWdJc0FycmF5ID0gaXNBcnJheShjb25maWcpO1xyXG4gICAgXHJcbiAgICAvLyBJZiBjb25maWcgPT09ICdwYXJhbScgT1IgWydwYXJhbSddIFxyXG4gICAgaWYgKCFjb25maWdJc0FycmF5IHx8IChjb25maWdJc0FycmF5ICYmIGNvbmZpZy5sZW5ndGggPT09IDEpKSB7XHJcbiAgICAgIFxyXG4gICAgICBjb25zdCBwcm9wZXJ0eVRvQ2hlY2s6IHN0cmluZyA9IGNvbmZpZ0lzQXJyYXkgPyBjb25maWdbMF0gOiBjb25maWc7XHJcbiAgICAgIGNvbnN0IGZpcnN0ID0gcHJvcGVydHlUb0NoZWNrLnN1YnN0cigwLCAxKTtcclxuICAgICAgY29uc3QgZGVzYyA9IChmaXJzdCA9PT0gJy0nKTsgLy8gRmlyc3QgY2hhcmFjdGVyIGlzICctJ1xyXG4gICAgICBcclxuICAgICAgLy8gQmFzaWMgYXJyYXkgKGlmIG9ubHkgKyBvciAtIGlzIHByZXNlbnQpXHJcbiAgICAgIGlmICghcHJvcGVydHlUb0NoZWNrIHx8IHByb3BlcnR5VG9DaGVjayA9PT0gJy0nIHx8IHByb3BlcnR5VG9DaGVjayA9PT0gJysnKSB7XHJcbiAgICAgICAgcmV0dXJuIFsuLi5pbnB1dF0uc29ydCgoYTogYW55LCBiOiBhbnkpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGNvbXBhcmF0b3IgPSBPcmRlckJ5UGlwZS5fb3JkZXJCeShhLCBiKTtcclxuICAgICAgICAgIHJldHVybiBkZXNjID8gLWNvbXBhcmF0b3IgOiBjb21wYXJhdG9yOyBcclxuICAgICAgICB9KTtcclxuICAgICAgfSAgICAgICAgICAgIFxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAvLyBJZiBjb250YWlucyArIG9yIC0sIHN1YnN0cmluZyB0aGUgcHJvcGVydHlcclxuICAgICAgICBjb25zdCBwcm9wZXJ0eSA9IChmaXJzdCA9PT0gJysnIHx8IGRlc2MpID8gcHJvcGVydHlUb0NoZWNrLnN1YnN0cigxKSA6IHByb3BlcnR5VG9DaGVjaztcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gWy4uLmlucHV0XS5zb3J0KChhOiBhbnksIGI6IGFueSkgPT4ge1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBjb25zdCBjb21wYXJhdG9yID0gT3JkZXJCeVBpcGUuX29yZGVyQnkoYVtwcm9wZXJ0eV0sIGJbcHJvcGVydHldKTtcclxuICAgICAgICAgIHJldHVybiBkZXNjID8gLWNvbXBhcmF0b3IgOiBjb21wYXJhdG9yOyBcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSB7IC8vIENvbmZpZyBpcyBhbiBhcnJheSBvZiBwcm9wZXJ0eVxyXG4gICAgICBcclxuICAgICAgcmV0dXJuIFsuLi5pbnB1dF0uc29ydCgoYTogYW55LCBiOiBhbnkpID0+IHtcclxuICAgICAgICBcclxuICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgY29uZmlnLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICBjb25zdCBmaXJzdCA9IGNvbmZpZ1tpXS5zdWJzdHIoMCwgMSk7XHJcbiAgICAgICAgICBjb25zdCBkZXNjID0gKGZpcnN0ID09PSAnLScpO1xyXG4gICAgICAgICAgY29uc3QgcHJvcGVydHkgPSAoZmlyc3QgPT09ICcrJyB8fCBkZXNjKSA/IGNvbmZpZ1tpXS5zdWJzdHIoMSkgOiBjb25maWdbaV07XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGNvbnN0IGNvbXBhcmF0b3IgPSBPcmRlckJ5UGlwZS5fb3JkZXJCeShhW3Byb3BlcnR5XSwgYltwcm9wZXJ0eV0pO1xyXG4gICAgICAgICAgY29uc3QgY29tcGFyaXNvbiA9IGRlc2MgPyAtY29tcGFyYXRvciA6IGNvbXBhcmF0b3I7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGlmIChjb21wYXJpc29uICE9PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb21wYXJpc29uO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gIH1cclxufSIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGNvdW50IH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xyXG5cclxuXHJcbkBQaXBlKHsgXHJcbiAgbmFtZTogJ2NvdW50JyBcclxufSlcclxuZXhwb3J0IGNsYXNzIENvdW50UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIFxyXG4gIHRyYW5zZm9ybSAoaW5wdXQ6IGFueSk6IGFueSB7XHJcbiAgICBcclxuICAgIHJldHVybiBjb3VudChpbnB1dCk7XHJcbiAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBpc0FycmF5IH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xyXG5cclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnc29tZSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFNvbWVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgXHJcbiAgdHJhbnNmb3JtIChpbnB1dDogYW55LCBwcmVkaWNhdGU6IEZ1bmN0aW9uKTogYW55IHtcclxuICAgIFxyXG4gICAgaWYgKCFpc0FycmF5KGlucHV0KSB8fCAhcHJlZGljYXRlKSB7XHJcbiAgICAgIHJldHVybiBpbnB1dDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xyXG4gICAgbGV0IGkgPSAtMTtcclxuICAgIFxyXG4gICAgd2hpbGUgKCsraSA8IGlucHV0Lmxlbmd0aCAmJiAhcmVzdWx0KSB7XHJcbiAgICAgIHJlc3VsdCA9IHByZWRpY2F0ZShpbnB1dFtpXSwgaSwgaW5wdXQpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxufSIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGV2ZXJ5LCBDb2xsZWN0aW9uUHJlZGljYXRlIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdldmVyeSdcclxufSlcclxuZXhwb3J0IGNsYXNzIEV2ZXJ5UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIFxyXG4gIHRyYW5zZm9ybSAoaW5wdXQ6IGFueSwgcHJlZGljYXRlOiBDb2xsZWN0aW9uUHJlZGljYXRlKTogYW55IHtcclxuICAgIFxyXG4gICAgcmV0dXJuIGV2ZXJ5KGlucHV0LCBwcmVkaWNhdGUpO1xyXG4gIH1cclxufSIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHNodWZmbGUgfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ3NodWZmbGUnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaHVmZmxlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIFxyXG4gIHRyYW5zZm9ybSAoaW5wdXQ6IGFueSk6IGFueSB7XHJcbiAgICBcclxuICAgIHJldHVybiBzaHVmZmxlKGlucHV0KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAndGFrZSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFRha2VQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgXHJcbiAgdHJhbnNmb3JtIChpbnB1dDogYW55LCBxdWFudGl0eT86IG51bWJlcik6IGFueSB7XHJcbiAgICBcclxuICAgIGlmICghaXNBcnJheShpbnB1dCkpIHtcclxuICAgICAgcmV0dXJuIGlucHV0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gaW5wdXQuc2xpY2UoMCwgcXVhbnRpdHkgfHwgMSk7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnZHJvcCdcclxufSlcclxuZXhwb3J0IGNsYXNzIERyb3BQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgXHJcbiAgdHJhbnNmb3JtIChpbnB1dDogYW55LCBxdWFudGl0eT86IG51bWJlcik6IGFueSB7XHJcbiAgICBcclxuICAgIGlmICghaXNBcnJheShpbnB1dCkpIHtcclxuICAgICAgcmV0dXJuIGlucHV0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gaW5wdXQuc2xpY2UocXVhbnRpdHkgfHwgMSwgaW5wdXQubGVudGgpO1xyXG4gIH1cclxufSIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgd3JhcERlZXAsIGlzRGVlcE9iamVjdCB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnZGVlcCdcclxufSlcclxuZXhwb3J0IGNsYXNzIERlZXBQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgXHJcbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnkpIDogYW55IHtcclxuICAgIFxyXG4gICAgaWYgKGlzRGVlcE9iamVjdCh2YWx1ZSkpIHtcclxuICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gd3JhcERlZXAodmFsdWUpO1xyXG4gIH1cclxufSIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGlzQXJyYXkgfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ2NodW5rJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2h1bmtQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgXHJcbiAgdHJhbnNmb3JtKGlucHV0OiBhbnksIHNpemU6IG51bWJlciA9IDEpOiBhbnkge1xyXG4gICAgXHJcbiAgICBpZiAoIWlzQXJyYXkoaW5wdXQpKSB7XHJcbiAgICAgIHJldHVybiBpbnB1dDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIFtdLmNvbmNhdC5hcHBseShbXSwgaW5wdXQubWFwKChfZWxlbTogYW55LCBpOiBudW1iZXIpID0+IHtcclxuICAgICAgcmV0dXJuIGkgJSBzaXplID8gW10gOiBbaW5wdXQuc2xpY2UoaSwgaSArIHNpemUpXTtcclxuICAgIH0pKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgaXNBcnJheSwgaXNEZWVwT2JqZWN0LCB1bndyYXBEZWVwLCBmbGF0dGVuIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAnZmxhdHRlbicgfSlcclxuZXhwb3J0IGNsYXNzIEZsYXR0ZW5QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgXHJcbiAgdHJhbnNmb3JtIChpbnB1dDogYW55KTogYW55IHtcclxuICAgIFxyXG4gICAgY29uc3QgaXNEZWVwID0gaXNEZWVwT2JqZWN0KGlucHV0KTtcclxuICAgIGlmICghaXNBcnJheShpbnB1dCkgJiYgIWlzRGVlcCkge1xyXG4gICAgICByZXR1cm4gaW5wdXQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmIChpc0RlZXApIHtcclxuICAgICAgY29uc3QgdW53cmFwcGVkID0gdW53cmFwRGVlcChpbnB1dCk7XHJcbiAgICAgIGlmICghaXNBcnJheSh1bndyYXBwZWQpKSB7XHJcbiAgICAgICAgcmV0dXJuIHVud3JhcHBlZDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgcmV0dXJuIGZsYXR0ZW4odW53cmFwcGVkLCAwKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIFtdLmNvbmNhdC5hcHBseShbXSwgaW5wdXQpO1xyXG4gIH1cclxufSIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGlzQXJyYXksIGlzRGVlcE9iamVjdCwgdW53cmFwRGVlcCwgZGVlcEluZGV4T2YgfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ2ludGVyc2VjdGlvbidcclxufSlcclxuZXhwb3J0IGNsYXNzIEludGVyc2VjdGlvblBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICBcclxuICB0cmFuc2Zvcm0gKGE/OiBhbnksIGI/OiBhbnkpOiBhbnkge1xyXG4gICAgXHJcbiAgICBpZiAoKCFpc0FycmF5KGEpICYmICFpc0RlZXBPYmplY3QoYSkpIHx8ICFpc0FycmF5KGIpKSB7XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKGlzRGVlcE9iamVjdChhKSkge1xyXG4gICAgICBjb25zdCB1bndyYXBwZWQgPSB1bndyYXBEZWVwKGEpO1xyXG4gICAgICBpZiAoIWlzQXJyYXkodW53cmFwcGVkKSkge1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgcmV0dXJuIHVud3JhcHBlZC5yZWR1Y2UoKGludGVyc2VjdGlvbjogYW55W10sIHZhbHVlOiBhbnkpID0+IGludGVyc2VjdGlvbi5jb25jYXQoXHJcbiAgICAgICAgKGRlZXBJbmRleE9mKGIsIHZhbHVlKSAhPT0gLTEgJiYgZGVlcEluZGV4T2YoaW50ZXJzZWN0aW9uLCB2YWx1ZSkgPT09IC0xKSA/IHZhbHVlIDogW11cclxuICAgICAgKSwgW10pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBhLnJlZHVjZSgoaW50ZXJzZWN0aW9uOiBhbnlbXSwgdmFsdWU6IGFueSkgPT4gaW50ZXJzZWN0aW9uLmNvbmNhdChcclxuICAgICAgKGIuaW5kZXhPZih2YWx1ZSkgIT09IC0xICYmIGludGVyc2VjdGlvbi5pbmRleE9mKHZhbHVlKSA9PT0gLTEpID8gdmFsdWUgOiBbXVxyXG4gICAgKSwgW10pXHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgaXNBcnJheSwgaXNEZWVwT2JqZWN0LCB1bndyYXBEZWVwLCBkZWVwSW5kZXhPZiB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAndW5pb24nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVbmlvblBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICBcclxuICB0cmFuc2Zvcm0gKGE/OiBhbnksIGI/OiBhbnkpOiBhbnkge1xyXG4gICAgXHJcbiAgICBpZiAoKCFpc0FycmF5KGEpICYmICFpc0RlZXBPYmplY3QoYSkpIHx8ICFpc0FycmF5KGIpKSB7XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKGlzRGVlcE9iamVjdChhKSkge1xyXG4gICAgICBjb25zdCB1bndyYXBwZWQgPSB1bndyYXBEZWVwKGEpO1xyXG4gICAgICBpZiAoIWlzQXJyYXkodW53cmFwcGVkKSkge1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgcmV0dXJuIFtdXHJcbiAgICAgICAgLmNvbmNhdCh1bndyYXBwZWQpXHJcbiAgICAgICAgLmNvbmNhdChiKVxyXG4gICAgICAgIC5maWx0ZXIoKHZhbHVlOiBhbnksIGluZGV4OiBudW1iZXIsIGlucHV0OiBhbnlbXSkgPT4gZGVlcEluZGV4T2YoaW5wdXQsIHZhbHVlKSA9PT0gaW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBbXS5jb25jYXQoYSkuY29uY2F0KGIpLmZpbHRlcigodmFsdWU6IGFueSwgaW5kZXg6IG51bWJlciwgaW5wdXQ6IGFueVtdKSA9PiBpbnB1dC5pbmRleE9mKHZhbHVlKSA9PT0gaW5kZXgpO1xyXG4gIH1cclxufSIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGlzQXJyYXksIHRha2VXaGlsZSwgQ29sbGVjdGlvblByZWRpY2F0ZSwgaXNOaWwgfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ3Rha2VXaGlsZSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFRha2VXaGlsZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICBcclxuICB0cmFuc2Zvcm0gKGlucHV0OiBhbnksIHByZWRpY2F0ZT86IENvbGxlY3Rpb25QcmVkaWNhdGUpOiBhbnkge1xyXG4gICAgXHJcbiAgICBpZiAoIWlzQXJyYXkoaW5wdXQpIHx8IGlzTmlsKHByZWRpY2F0ZSkpIHtcclxuICAgICAgcmV0dXJuIGlucHV0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gdGFrZVdoaWxlKGlucHV0LCBwcmVkaWNhdGUpO1xyXG4gIH1cclxufSIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGlzQXJyYXksIHRha2VVbnRpbCwgQ29sbGVjdGlvblByZWRpY2F0ZSwgaXNOaWwgfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ3Rha2VVbnRpbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFRha2VVbnRpbFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICBcclxuICB0cmFuc2Zvcm0gKGlucHV0OiBhbnksIHByZWRpY2F0ZT86IENvbGxlY3Rpb25QcmVkaWNhdGUpOiBhbnkge1xyXG4gICAgXHJcbiAgICBpZiAoIWlzQXJyYXkoaW5wdXQpIHx8IGlzTmlsKHByZWRpY2F0ZSkpIHtcclxuICAgICAgcmV0dXJuIGlucHV0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gdGFrZVVudGlsKGlucHV0LCBwcmVkaWNhdGUpO1xyXG4gIH1cclxufSIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBFbXB0eVBpcGUgfSBmcm9tICcuL2VtcHR5LnBpcGUnO1xyXG5pbXBvcnQgeyBIZWFkUGlwZSB9IGZyb20gJy4vaGVhZC5waXBlJztcclxuaW1wb3J0IHsgSW5pdGlhbFBpcGUgfSBmcm9tICcuL2luaXRpYWwucGlwZSc7XHJcbmltcG9ydCB7IExhc3RQaXBlIH0gZnJvbSAnLi9sYXN0LnBpcGUnO1xyXG5pbXBvcnQgeyBKb2luUGlwZSB9IGZyb20gJy4vam9pbi5waXBlJztcclxuaW1wb3J0IHsgVGFpbFBpcGUgfSBmcm9tICcuL3RhaWwucGlwZSc7XHJcbmltcG9ydCB7IFVuaXFQaXBlIH0gZnJvbSAnLi91bmlxLnBpcGUnO1xyXG5pbXBvcnQgeyBXaXRob3V0UGlwZSB9IGZyb20gJy4vd2l0aG91dC5waXBlJztcclxuaW1wb3J0IHsgTWFwUGlwZSB9IGZyb20gJy4vbWFwLnBpcGUnO1xyXG5pbXBvcnQgeyBXaGVyZVBpcGUgfSBmcm9tICcuL3doZXJlLnBpcGUnO1xyXG5pbXBvcnQgeyBGaXJzdE9yRGVmYXVsdFBpcGUgfSBmcm9tICcuL2ZpcnN0LW9yLWRlZmF1bHQucGlwZSc7XHJcbmltcG9ydCB7IFJhbmdlUGlwZSB9IGZyb20gJy4vcmFuZ2UucGlwZSc7XHJcbmltcG9ydCB7IFBsdWNrUGlwZSB9IGZyb20gJy4vcGx1Y2sucGlwZSc7XHJcbmltcG9ydCB7IFJldmVyc2VQaXBlIH0gZnJvbSAnLi9yZXZlcnNlLnBpcGUnO1xyXG5pbXBvcnQgeyBPcmRlckJ5UGlwZSB9IGZyb20gJy4vb3JkZXItYnkucGlwZSc7XHJcbmltcG9ydCB7IENvdW50UGlwZSB9IGZyb20gJy4vY291bnQucGlwZSc7XHJcbmltcG9ydCB7IFNvbWVQaXBlIH0gZnJvbSAnLi9zb21lLnBpcGUnO1xyXG5pbXBvcnQgeyBFdmVyeVBpcGUgfSBmcm9tICcuL2V2ZXJ5LnBpcGUnO1xyXG5pbXBvcnQgeyBTaHVmZmxlUGlwZSB9IGZyb20gJy4vc2h1ZmZsZS5waXBlJztcclxuaW1wb3J0IHsgVGFrZVBpcGUgfSBmcm9tICcuL3Rha2UucGlwZSc7XHJcbmltcG9ydCB7IERyb3BQaXBlIH0gZnJvbSAnLi9kcm9wLnBpcGUnO1xyXG5pbXBvcnQgeyBEZWVwUGlwZSB9IGZyb20gJy4vZGVlcC5waXBlJztcclxuaW1wb3J0IHsgQ2h1bmtQaXBlIH0gZnJvbSAnLi9jaHVuay5waXBlJztcclxuaW1wb3J0IHsgRmxhdHRlblBpcGUgfSBmcm9tICcuL2ZsYXR0ZW4ucGlwZSc7XHJcbmltcG9ydCB7IEludGVyc2VjdGlvblBpcGUgfSBmcm9tICcuL2ludGVyc2VjdGlvbi5waXBlJztcclxuaW1wb3J0IHsgVW5pb25QaXBlIH0gZnJvbSAnLi91bmlvbi5waXBlJztcclxuaW1wb3J0IHsgVGFrZVdoaWxlUGlwZSB9IGZyb20gJy4vdGFrZS13aGlsZS5waXBlJztcclxuaW1wb3J0IHsgVGFrZVVudGlsUGlwZSB9IGZyb20gJy4vdGFrZS11bnRpbC5waXBlJztcclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgRW1wdHlQaXBlLFxyXG4gICAgSGVhZFBpcGUsXHJcbiAgICBJbml0aWFsUGlwZSxcclxuICAgIExhc3RQaXBlLFxyXG4gICAgSm9pblBpcGUsXHJcbiAgICBUYWlsUGlwZSxcclxuICAgIFVuaXFQaXBlLFxyXG4gICAgV2l0aG91dFBpcGUsXHJcbiAgICBNYXBQaXBlLFxyXG4gICAgV2hlcmVQaXBlLFxyXG4gICAgUmFuZ2VQaXBlLFxyXG4gICAgUGx1Y2tQaXBlLFxyXG4gICAgUmV2ZXJzZVBpcGUsXHJcbiAgICBPcmRlckJ5UGlwZSxcclxuICAgIENvdW50UGlwZSxcclxuICAgIFNvbWVQaXBlLFxyXG4gICAgRXZlcnlQaXBlLFxyXG4gICAgU2h1ZmZsZVBpcGUsXHJcbiAgICBUYWtlUGlwZSxcclxuICAgIERyb3BQaXBlLFxyXG4gICAgRGVlcFBpcGUsXHJcbiAgICBDaHVua1BpcGUsXHJcbiAgICBGbGF0dGVuUGlwZSxcclxuICAgIEZpcnN0T3JEZWZhdWx0UGlwZSxcclxuICAgIEludGVyc2VjdGlvblBpcGUsXHJcbiAgICBVbmlvblBpcGUsXHJcbiAgICBUYWtlV2hpbGVQaXBlLFxyXG4gICAgVGFrZVVudGlsUGlwZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgRW1wdHlQaXBlLFxyXG4gICAgSGVhZFBpcGUsXHJcbiAgICBJbml0aWFsUGlwZSxcclxuICAgIExhc3RQaXBlLFxyXG4gICAgSm9pblBpcGUsXHJcbiAgICBUYWlsUGlwZSxcclxuICAgIFVuaXFQaXBlLFxyXG4gICAgV2l0aG91dFBpcGUsXHJcbiAgICBNYXBQaXBlLFxyXG4gICAgV2hlcmVQaXBlLFxyXG4gICAgUmFuZ2VQaXBlLFxyXG4gICAgUGx1Y2tQaXBlLFxyXG4gICAgUmV2ZXJzZVBpcGUsXHJcbiAgICBPcmRlckJ5UGlwZSxcclxuICAgIENvdW50UGlwZSxcclxuICAgIFNvbWVQaXBlLFxyXG4gICAgRXZlcnlQaXBlLFxyXG4gICAgU2h1ZmZsZVBpcGUsXHJcbiAgICBUYWtlUGlwZSxcclxuICAgIERyb3BQaXBlLFxyXG4gICAgRGVlcFBpcGUsXHJcbiAgICBDaHVua1BpcGUsXHJcbiAgICBGbGF0dGVuUGlwZSxcclxuICAgIEZpcnN0T3JEZWZhdWx0UGlwZSxcclxuICAgIEludGVyc2VjdGlvblBpcGUsXHJcbiAgICBVbmlvblBpcGUsXHJcbiAgICBUYWtlV2hpbGVQaXBlLFxyXG4gICAgVGFrZVVudGlsUGlwZVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5nQXJyYXlQaXBlc01vZHVsZSB7fVxyXG4iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnZ3JlYXRlcidcclxufSlcclxuZXhwb3J0IGNsYXNzIElzR3JlYXRlclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICBcclxuICB0cmFuc2Zvcm0gKGZpcnN0OiBhbnksIHNlY29uZDogYW55KTogYm9vbGVhbiB7XHJcbiAgICBcclxuICAgIHJldHVybiBmaXJzdCA+IHNlY29uZDtcclxuICB9XHJcbn1cclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnZ3JlYXRlck9yRXF1YWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJc0dyZWF0ZXJPckVxdWFsUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIFxyXG4gIHRyYW5zZm9ybSAoZmlyc3Q6IGFueSwgc2Vjb25kOiBhbnkpOiBib29sZWFuIHtcclxuICAgIFxyXG4gICAgcmV0dXJuIGZpcnN0ID49IHNlY29uZDtcclxuICB9XHJcbn1cclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnbGVzcydcclxufSlcclxuZXhwb3J0IGNsYXNzIElzTGVzc1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICBcclxuICB0cmFuc2Zvcm0gKGZpcnN0OiBhbnksIHNlY29uZDogYW55KTogYm9vbGVhbiB7XHJcbiAgICBcclxuICAgIHJldHVybiBmaXJzdCA8IHNlY29uZDtcclxuICB9XHJcbn1cclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnbGVzc09yRXF1YWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJc0xlc3NPckVxdWFsUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIFxyXG4gIHRyYW5zZm9ybSAoZmlyc3Q6IGFueSwgc2Vjb25kOiBhbnkpOiBib29sZWFuIHtcclxuICAgIFxyXG4gICAgcmV0dXJuIGZpcnN0IDw9IHNlY29uZDtcclxuICB9XHJcbn1cclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnZXF1YWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJc0VxdWFsUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIFxyXG4gIHRyYW5zZm9ybSAoZmlyc3Q6IGFueSwgc2Vjb25kOiBhbnkpOiBib29sZWFuIHtcclxuICAgIFxyXG4gICAgcmV0dXJuIGZpcnN0ID09IHNlY29uZDtcclxuICB9XHJcbn1cclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnbm90RXF1YWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJc05vdEVxdWFsUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIFxyXG4gIHRyYW5zZm9ybSAoZmlyc3Q6IGFueSwgc2Vjb25kOiBhbnkpOiBib29sZWFuIHtcclxuICAgIFxyXG4gICAgcmV0dXJuIGZpcnN0ICE9IHNlY29uZDtcclxuICB9XHJcbn1cclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnaWRlbnRpY2FsJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSXNJZGVudGljYWxQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgXHJcbiAgdHJhbnNmb3JtIChmaXJzdDogYW55LCBzZWNvbmQ6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgXHJcbiAgICByZXR1cm4gZmlyc3QgPT09IHNlY29uZDtcclxuICB9XHJcbn1cclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnbm90SWRlbnRpY2FsJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSXNOb3RJZGVudGljYWxQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgXHJcbiAgdHJhbnNmb3JtIChmaXJzdDogYW55LCBzZWNvbmQ6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgXHJcbiAgICByZXR1cm4gZmlyc3QgIT09IHNlY29uZDtcclxuICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgaXNOdWxsLFxyXG4gIGlzTmlsLFxyXG4gIGlzVW5kZWZpbmVkLCBcclxuICBpc0Z1bmN0aW9uLFxyXG4gIGlzQXJyYXksXHJcbiAgaXNTdHJpbmcsXHJcbiAgaXNPYmplY3QsXHJcbiAgaXNOdW1iZXIgXHJcbn0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdpc051bGwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJc051bGxQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgXHJcbiAgdHJhbnNmb3JtICh2YWx1ZTogYW55KTogYm9vbGVhbiB7XHJcbiAgICBcclxuICAgIHJldHVybiBpc051bGwodmFsdWUpO1xyXG4gIH1cclxufVxyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdpc1VuZGVmaW5lZCdcclxufSlcclxuZXhwb3J0IGNsYXNzIElzVW5kZWZpbmVkUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIFxyXG4gIHRyYW5zZm9ybSAodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgXHJcbiAgICByZXR1cm4gaXNVbmRlZmluZWQodmFsdWUpO1xyXG4gIH1cclxufVxyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdpc05pbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIElzTmlsUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIFxyXG4gIHRyYW5zZm9ybSAodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgXHJcbiAgICByZXR1cm4gaXNOaWwodmFsdWUpO1xyXG4gIH1cclxufVxyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdpc0Z1bmN0aW9uJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSXNGdW5jdGlvblBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICBcclxuICB0cmFuc2Zvcm0gKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcclxuICAgIFxyXG4gICAgcmV0dXJuIGlzRnVuY3Rpb24odmFsdWUpO1xyXG4gIH1cclxufVxyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdpc051bWJlcidcclxufSlcclxuZXhwb3J0IGNsYXNzIElzTnVtYmVyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIFxyXG4gIHRyYW5zZm9ybSAodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgXHJcbiAgICByZXR1cm4gaXNOdW1iZXIodmFsdWUpO1xyXG4gIH1cclxufVxyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdpc1N0cmluZydcclxufSlcclxuZXhwb3J0IGNsYXNzIElzU3RyaW5nUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIFxyXG4gIHRyYW5zZm9ybSAodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgXHJcbiAgICByZXR1cm4gaXNTdHJpbmcodmFsdWUpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnaXNBcnJheSdcclxufSlcclxuZXhwb3J0IGNsYXNzIElzQXJyYXlQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgXHJcbiAgdHJhbnNmb3JtICh2YWx1ZTogYW55KTogYm9vbGVhbiB7XHJcbiAgICBcclxuICAgIHJldHVybiBpc0FycmF5KHZhbHVlKTtcclxuICB9XHJcbn1cclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnaXNPYmplY3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJc09iamVjdFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICBcclxuICB0cmFuc2Zvcm0gKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcclxuICAgIFxyXG4gICAgcmV0dXJuIGlzT2JqZWN0KHZhbHVlKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ2lzRGVmaW5lZCdcclxufSlcclxuZXhwb3J0IGNsYXNzIElzRGVmaW5lZFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICBcclxuICB0cmFuc2Zvcm0gKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcclxuICAgIFxyXG4gICAgcmV0dXJuICFpc1VuZGVmaW5lZCh2YWx1ZSk7XHJcbiAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtcclxuICAgIElzR3JlYXRlclBpcGUsXHJcbiAgICBJc0dyZWF0ZXJPckVxdWFsUGlwZSxcclxuICAgIElzTGVzc1BpcGUsXHJcbiAgICBJc0xlc3NPckVxdWFsUGlwZSxcclxuICAgIElzRXF1YWxQaXBlLFxyXG4gICAgSXNOb3RFcXVhbFBpcGUsXHJcbiAgICBJc0lkZW50aWNhbFBpcGUsXHJcbiAgICBJc05vdElkZW50aWNhbFBpcGUsXHJcbn0gZnJvbSAnLi9jb25kaXRpb25zLnBpcGUnO1xyXG5cclxuaW1wb3J0IHtcclxuICAgIElzTnVsbFBpcGUsXHJcbiAgICBJc05pbFBpcGUsXHJcbiAgICBJc1VuZGVmaW5lZFBpcGUsXHJcbiAgICBJc0Z1bmN0aW9uUGlwZSxcclxuICAgIElzTnVtYmVyUGlwZSxcclxuICAgIElzU3RyaW5nUGlwZSxcclxuICAgIElzQXJyYXlQaXBlLFxyXG4gICAgSXNPYmplY3RQaXBlLFxyXG4gICAgSXNEZWZpbmVkUGlwZVxyXG59IGZyb20gJy4vdHlwZXMucGlwZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgSXNHcmVhdGVyUGlwZSxcclxuICAgICAgICBJc0dyZWF0ZXJPckVxdWFsUGlwZSxcclxuICAgICAgICBJc0xlc3NQaXBlLFxyXG4gICAgICAgIElzTGVzc09yRXF1YWxQaXBlLFxyXG4gICAgICAgIElzRXF1YWxQaXBlLFxyXG4gICAgICAgIElzTm90RXF1YWxQaXBlLFxyXG4gICAgICAgIElzSWRlbnRpY2FsUGlwZSxcclxuICAgICAgICBJc05vdElkZW50aWNhbFBpcGUsXHJcbiAgICAgICAgSXNOaWxQaXBlLFxyXG4gICAgICAgIElzTnVsbFBpcGUsXHJcbiAgICAgICAgSXNVbmRlZmluZWRQaXBlLFxyXG4gICAgICAgIElzRnVuY3Rpb25QaXBlLFxyXG4gICAgICAgIElzTnVtYmVyUGlwZSxcclxuICAgICAgICBJc1N0cmluZ1BpcGUsXHJcbiAgICAgICAgSXNBcnJheVBpcGUsXHJcbiAgICAgICAgSXNPYmplY3RQaXBlLFxyXG4gICAgICAgIElzRGVmaW5lZFBpcGVcclxuICAgIF0sXHJcbiAgICBleHBvcnRzOiBbXHJcbiAgICAgICAgSXNHcmVhdGVyUGlwZSxcclxuICAgICAgICBJc0dyZWF0ZXJPckVxdWFsUGlwZSxcclxuICAgICAgICBJc0xlc3NQaXBlLFxyXG4gICAgICAgIElzTGVzc09yRXF1YWxQaXBlLFxyXG4gICAgICAgIElzRXF1YWxQaXBlLFxyXG4gICAgICAgIElzTm90RXF1YWxQaXBlLFxyXG4gICAgICAgIElzSWRlbnRpY2FsUGlwZSxcclxuICAgICAgICBJc05vdElkZW50aWNhbFBpcGUsXHJcbiAgICAgICAgSXNOaWxQaXBlLFxyXG4gICAgICAgIElzTnVsbFBpcGUsXHJcbiAgICAgICAgSXNVbmRlZmluZWRQaXBlLFxyXG4gICAgICAgIElzRnVuY3Rpb25QaXBlLFxyXG4gICAgICAgIElzTnVtYmVyUGlwZSxcclxuICAgICAgICBJc1N0cmluZ1BpcGUsXHJcbiAgICAgICAgSXNBcnJheVBpcGUsXHJcbiAgICAgICAgSXNPYmplY3RQaXBlLFxyXG4gICAgICAgIElzRGVmaW5lZFBpcGVcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5nQm9vbGVhblBpcGVzTW9kdWxlIHt9XHJcblxyXG4iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGlzTnVtYmVyRmluaXRlLCBpc1Bvc2l0aXZlLCBpc0ludGVnZXIsIHRvRGVjaW1hbCB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcclxuXHJcbmV4cG9ydCB0eXBlIEJ5dGVVbml0ID0gJ0InIHwgJ2tCJyB8ICdLQicgfCAnTUInIHwgJ0dCJyB8ICdUQic7XHJcblxyXG5cclxuQFBpcGUoe1xyXG4gICAgbmFtZTogJ2J5dGVzJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQnl0ZXNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG4gICAgc3RhdGljIGZvcm1hdHM6IHsgW2tleTogc3RyaW5nXTogeyBtYXg6IG51bWJlciwgcHJldj86IEJ5dGVVbml0IH0gfSA9IHtcclxuICAgICAgICAnQic6IHttYXg6IDEwMjR9LFxyXG4gICAgICAgICdrQic6IHttYXg6IE1hdGgucG93KDEwMjQsIDIpLCBwcmV2OiAnQid9LFxyXG4gICAgICAgICdLQic6IHttYXg6IE1hdGgucG93KDEwMjQsIDIpLCBwcmV2OiAnQid9LCAvLyBCYWNrd2FyZCBjb21wYXRpYmxlXHJcbiAgICAgICAgJ01CJzoge21heDogTWF0aC5wb3coMTAyNCwgMyksIHByZXY6ICdrQid9LFxyXG4gICAgICAgICdHQic6IHttYXg6IE1hdGgucG93KDEwMjQsIDQpLCBwcmV2OiAnTUInfSxcclxuICAgICAgICAnVEInOiB7bWF4OiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiwgcHJldjogJ0dCJ31cclxuICAgIH07XHJcblxyXG5cclxuICAgIHRyYW5zZm9ybShpbnB1dDogYW55LCBkZWNpbWFsOiBudW1iZXIgPSAwLCBmcm9tOiBCeXRlVW5pdCA9ICdCJywgdG8/OiBCeXRlVW5pdCk6IGFueSB7XHJcblxyXG4gICAgICAgIGlmICghKGlzTnVtYmVyRmluaXRlKGlucHV0KSAmJlxyXG4gICAgICAgICAgICAgICAgaXNOdW1iZXJGaW5pdGUoZGVjaW1hbCkgJiZcclxuICAgICAgICAgICAgICAgIGlzSW50ZWdlcihkZWNpbWFsKSAmJlxyXG4gICAgICAgICAgICAgICAgaXNQb3NpdGl2ZShkZWNpbWFsKSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlucHV0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGJ5dGVzID0gaW5wdXQ7XHJcbiAgICAgICAgbGV0IHVuaXQgPSBmcm9tO1xyXG4gICAgICAgIHdoaWxlICh1bml0ICE9PSAnQicpIHtcclxuICAgICAgICAgICAgYnl0ZXMgKj0gMTAyNDtcclxuICAgICAgICAgICAgdW5pdCA9IEJ5dGVzUGlwZS5mb3JtYXRzW3VuaXRdLnByZXYhO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRvKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdCA9IEJ5dGVzUGlwZS5mb3JtYXRzW3RvXTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRvRGVjaW1hbChCeXRlc1BpcGUuY2FsY3VsYXRlUmVzdWx0KGZvcm1hdCwgYnl0ZXMpLCBkZWNpbWFsKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBCeXRlc1BpcGUuZm9ybWF0UmVzdWx0KHJlc3VsdCwgdG8pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gQnl0ZXNQaXBlLmZvcm1hdHMpIHtcclxuICAgICAgICAgICAgY29uc3QgZm9ybWF0ID0gQnl0ZXNQaXBlLmZvcm1hdHNba2V5XTtcclxuICAgICAgICAgICAgaWYgKGJ5dGVzIDwgZm9ybWF0Lm1heCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRvRGVjaW1hbChCeXRlc1BpcGUuY2FsY3VsYXRlUmVzdWx0KGZvcm1hdCwgYnl0ZXMpLCBkZWNpbWFsKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gQnl0ZXNQaXBlLmZvcm1hdFJlc3VsdChyZXN1bHQsIGtleSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGZvcm1hdFJlc3VsdChyZXN1bHQ6IG51bWJlciwgdW5pdDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gYCR7cmVzdWx0fSAke3VuaXR9YDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY2FsY3VsYXRlUmVzdWx0KGZvcm1hdDogeyBtYXg6IG51bWJlciwgcHJldj86IEJ5dGVVbml0IH0sIGJ5dGVzOiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCBwcmV2ID0gZm9ybWF0LnByZXYgPyBCeXRlc1BpcGUuZm9ybWF0c1tmb3JtYXQucHJldl0gOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgcmV0dXJuIHByZXYgPyBieXRlcyAvIHByZXYubWF4IDogYnl0ZXM7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBjcmVhdGVSb3VuZCwgaXNTdHJpbmcgfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ2NlaWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDZWlsUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIFxyXG4gIHRyYW5zZm9ybSAodmFsdWU6IGFueSwgcHJlY2lzaW9uOiBhbnkgPSAwKTogYW55IHtcclxuICAgIFxyXG4gICAgaWYgKGlzU3RyaW5nKHByZWNpc2lvbikpIHtcclxuICAgICAgcHJlY2lzaW9uID0gcGFyc2VJbnQocHJlY2lzaW9uKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIGNyZWF0ZVJvdW5kKCdjZWlsJykodmFsdWUsIHByZWNpc2lvbik7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgY3JlYXRlUm91bmQsIGlzU3RyaW5nIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdmbG9vcidcclxufSlcclxuZXhwb3J0IGNsYXNzIEZsb29yUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIFxyXG4gIHRyYW5zZm9ybSAodmFsdWU6IGFueSwgcHJlY2lzaW9uOiBhbnkgPSAwKTogYW55IHtcclxuICAgIFxyXG4gICAgaWYgKGlzU3RyaW5nKHByZWNpc2lvbikpIHtcclxuICAgICAgcHJlY2lzaW9uID0gcGFyc2VJbnQocHJlY2lzaW9uKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIGNyZWF0ZVJvdW5kKCdmbG9vcicpKHZhbHVlLCBwcmVjaXNpb24pO1xyXG4gIH1cclxufSIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGNyZWF0ZVJvdW5kLCBpc1N0cmluZyB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAncm91bmQnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSb3VuZFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICBcclxuICB0cmFuc2Zvcm0gKHZhbHVlOiBhbnksIHByZWNpc2lvbjogYW55ID0gMCk6IGFueSB7XHJcbiAgICBcclxuICAgIGlmIChpc1N0cmluZyhwcmVjaXNpb24pKSB7XHJcbiAgICAgIHByZWNpc2lvbiA9IHBhcnNlSW50KHByZWNpc2lvbik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiBjcmVhdGVSb3VuZCgncm91bmQnKSh2YWx1ZSwgcHJlY2lzaW9uKTtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGlzTnVtYmVyRmluaXRlIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdkZWdyZWVzJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRGVncmVlc1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3Jte1xyXG4gIFxyXG4gIFxyXG4gIHRyYW5zZm9ybSAoaW5wdXQ6IGFueSk6IGFueSB7XHJcbiAgICBcclxuICAgIGlmICghaXNOdW1iZXJGaW5pdGUoaW5wdXQpKSB7XHJcbiAgICAgIHJldHVybiAnTmFOJztcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIChpbnB1dCAqIDE4MCkgLyBNYXRoLlBJO1xyXG4gICAgXHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBpc051bWJlckZpbml0ZSB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAncmFkaWFucydcclxufSlcclxuZXhwb3J0IGNsYXNzIFJhZGlhbnNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgXHJcbiAgdHJhbnNmb3JtIChpbnB1dDogYW55KTogYW55IHtcclxuICAgIFxyXG4gICAgaWYgKCFpc051bWJlckZpbml0ZShpbnB1dCkpIHtcclxuICAgICAgcmV0dXJuICdOYU4nO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gKGlucHV0ICogTWF0aC5QSSkgLyAxODA7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBpc051bWJlckZpbml0ZSB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAncmFuZG9tJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUmFuZG9tUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIFxyXG4gIHRyYW5zZm9ybSAoaW5wdXQ6IGFueSwgbWluOiBudW1iZXIgPSAwLCBtYXg6IG51bWJlciA9IDEpOiBhbnkge1xyXG4gICAgXHJcbiAgICBpZiAoIWlzTnVtYmVyRmluaXRlKG1pbikgfHwgIWlzTnVtYmVyRmluaXRlKG1heCkpIHtcclxuICAgICAgcmV0dXJuIGlucHV0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAobWluID4gbWF4KSB7XHJcbiAgICAgIG1heCA9IG1pbjtcclxuICAgICAgbWluID0gMDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBpc051bWJlckZpbml0ZSB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnc3FydCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFNxcnRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgXHJcbiAgdHJhbnNmb3JtIChpbnB1dDogYW55KTogYW55IHtcclxuICAgIFxyXG4gICAgaWYgKCFpc051bWJlckZpbml0ZShpbnB1dCkpIHtcclxuICAgICAgcmV0dXJuICdOYU4nO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gTWF0aC5zcXJ0KGlucHV0KTtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBpc051bWJlckZpbml0ZSB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAncG93J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUG93UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIFxyXG4gIHRyYW5zZm9ybSAoaW5wdXQ6IGFueSwgcG93ZXI6IG51bWJlciA9IDIpOiBhbnkge1xyXG4gICAgXHJcbiAgICBpZiAoIWlzTnVtYmVyRmluaXRlKGlucHV0KSkge1xyXG4gICAgICByZXR1cm4gJ05hTic7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiBNYXRoLnBvdyhpbnB1dCwgcG93ZXIpO1xyXG4gIH1cclxufSIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGlzTnVtYmVyRmluaXRlIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdhYnMnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBYnNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgXHJcbiAgdHJhbnNmb3JtIChpbnB1dDogYW55KTogYW55IHtcclxuICAgIFxyXG4gICAgaWYgKCFpc051bWJlckZpbml0ZShpbnB1dCkpIHtcclxuICAgICAgcmV0dXJuICdOYU4nO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gTWF0aC5hYnMoaW5wdXQpO1xyXG4gIH1cclxufSIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGlzTnVtYmVyRmluaXRlIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdvcmRpbmFsJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgT3JkaW5hbFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICBcclxuICAgIHRyYW5zZm9ybSAoaW5wdXQ6IGFueSk6IGFueSB7XHJcblxyXG4gICAgICAgIGlmICghaXNOdW1iZXJGaW5pdGUoaW5wdXQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnTmFOJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGNhcmRpbmFsID0gaW5wdXQudG9TdHJpbmcoKS5jaGFyQXQoaW5wdXQudG9TdHJpbmcoKS5sZW5ndGggLSAxKTtcclxuXHJcbiAgICAgICAgc3dpdGNoKGNhcmRpbmFsKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJzEnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGlucHV0ICsgJ3N0JztcclxuICAgICAgICAgICAgY2FzZSAnMic6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5wdXQgKyAnbmQnO1xyXG4gICAgICAgICAgICBjYXNlICczJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBpbnB1dCArICdyZCc7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGlucHV0ICsgJ3RoJztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQnl0ZXNQaXBlIH0gZnJvbSAnLi9ieXRlcy5waXBlJztcclxuaW1wb3J0IHsgQ2VpbFBpcGUgfSBmcm9tICcuL2NlaWwucGlwZSc7XHJcbmltcG9ydCB7IEZsb29yUGlwZSB9IGZyb20gJy4vZmxvb3IucGlwZSc7XHJcbmltcG9ydCB7IFJvdW5kUGlwZSB9IGZyb20gJy4vcm91bmQucGlwZSc7XHJcbmltcG9ydCB7IERlZ3JlZXNQaXBlIH0gZnJvbSAnLi9kZWdyZWVzLnBpcGUnO1xyXG5pbXBvcnQgeyBSYWRpYW5zUGlwZSB9IGZyb20gJy4vcmFkaWFucy5waXBlJztcclxuaW1wb3J0IHsgUmFuZG9tUGlwZSB9IGZyb20gJy4vcmFuZG9tLnBpcGUnO1xyXG5pbXBvcnQgeyBTcXJ0UGlwZSB9IGZyb20gJy4vc3FydC5waXBlJztcclxuaW1wb3J0IHsgUG93UGlwZSB9IGZyb20gJy4vcG93LnBpcGUnO1xyXG5pbXBvcnQgeyBBYnNQaXBlIH0gZnJvbSAnLi9hYnMucGlwZSc7XHJcbmltcG9ydCB7IE9yZGluYWxQaXBlIH0gZnJvbSAnLi9vcmRpbmFsLnBpcGUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIEJ5dGVzUGlwZSxcclxuICAgIENlaWxQaXBlLFxyXG4gICAgRmxvb3JQaXBlLFxyXG4gICAgUm91bmRQaXBlLFxyXG4gICAgRGVncmVlc1BpcGUsXHJcbiAgICBSYWRpYW5zUGlwZSxcclxuICAgIFJhbmRvbVBpcGUsXHJcbiAgICBTcXJ0UGlwZSxcclxuICAgIFBvd1BpcGUsXHJcbiAgICBBYnNQaXBlLFxyXG4gICAgT3JkaW5hbFBpcGVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIEJ5dGVzUGlwZSxcclxuICAgIENlaWxQaXBlLFxyXG4gICAgRmxvb3JQaXBlLFxyXG4gICAgUm91bmRQaXBlLFxyXG4gICAgRGVncmVlc1BpcGUsXHJcbiAgICBSYWRpYW5zUGlwZSxcclxuICAgIFJhbmRvbVBpcGUsXHJcbiAgICBTcXJ0UGlwZSxcclxuICAgIFBvd1BpcGUsXHJcbiAgICBBYnNQaXBlLFxyXG4gICAgT3JkaW5hbFBpcGVcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ01hdGhQaXBlc01vZHVsZSB7fVxyXG4iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBpc09iamVjdCB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcclxuXHJcblxyXG5AUGlwZSh7IG5hbWU6ICdrZXlzJyB9KVxyXG5leHBvcnQgY2xhc3MgS2V5c1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICBcclxuICB0cmFuc2Zvcm0gKGlucHV0OiBhbnkpOiBhbnkge1xyXG4gICAgXHJcbiAgICBpZiAoIWlzT2JqZWN0KGlucHV0KSkge1xyXG4gICAgICByZXR1cm4gaW5wdXQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiBPYmplY3Qua2V5cyhpbnB1dCk7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgaXNPYmplY3QgfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcblxyXG5cclxuQFBpcGUoeyBuYW1lOiAndG9BcnJheScgfSlcclxuZXhwb3J0IGNsYXNzIFRvQXJyYXlQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgXHJcbiAgdHJhbnNmb3JtIChpbnB1dDogYW55KTogYW55IHtcclxuICAgIFxyXG4gICAgaWYgKCFpc09iamVjdChpbnB1dCkpIHtcclxuICAgICAgcmV0dXJuIGlucHV0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoaW5wdXQpLm1hcCgodmFsdWUpID0+IGlucHV0W3ZhbHVlXSk7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgaXNPYmplY3QsIGlzQXJyYXksIGlzTmlsIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAnZGVmYXVsdHMnIH0pXHJcbmV4cG9ydCBjbGFzcyBEZWZhdWx0c1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICBcclxuICB0cmFuc2Zvcm0gKGlucHV0OiBhbnksIGRlZmF1bHRzOiBhbnkpOiBhbnkge1xyXG4gICAgXHJcbiAgICBpZiAoIWlzT2JqZWN0KGRlZmF1bHRzKSkge1xyXG4gICAgICByZXR1cm4gaW5wdXQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmIChpc05pbChpbnB1dCkpIHtcclxuICAgICAgcmV0dXJuIGRlZmF1bHRzO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAoaXNBcnJheShpbnB1dCkpIHtcclxuICAgICAgcmV0dXJuIGlucHV0Lm1hcCgoaXRlbTogYW55KSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGlzT2JqZWN0KGl0ZW0pKSB7XHJcbiAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdHMsIGl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZiAoaXNOaWwoaXRlbSkpIHtcclxuICAgICAgICAgIHJldHVybiBkZWZhdWx0cztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAoaXNPYmplY3QoaW5wdXQpKSB7XHJcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0cywgaW5wdXQpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gaW5wdXQ7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgS2V5c1BpcGUgfSBmcm9tICcuL2tleXMucGlwZSc7XHJcbmltcG9ydCB7IFRvQXJyYXlQaXBlIH0gZnJvbSAnLi90by1hcnJheS5waXBlJztcclxuaW1wb3J0IHsgRGVmYXVsdHNQaXBlIH0gZnJvbSAnLi9kZWZhdWx0cy5waXBlJztcclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgS2V5c1BpcGUsXHJcbiAgICBUb0FycmF5UGlwZSxcclxuICAgIERlZmF1bHRzUGlwZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgS2V5c1BpcGUsXHJcbiAgICBUb0FycmF5UGlwZSxcclxuICAgIERlZmF1bHRzUGlwZVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5nT2JqZWN0UGlwZXNNb2R1bGUge31cclxuIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgbGVmdFBhZCwgaXNTdHJpbmcgfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcblxyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdsZWZ0cGFkJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTGVmdFBhZFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICBcclxuICB0cmFuc2Zvcm0gKGlucHV0OiBhbnksIGxlbmd0aDogbnVtYmVyID0gMCwgY2hhcmFjdGVyOiBzdHJpbmcgPSAnICcpOiBhbnkge1xyXG4gICAgXHJcbiAgICBpZiAoIWlzU3RyaW5nKGlucHV0KSkge1xyXG4gICAgICByZXR1cm4gaW5wdXQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiBsZWZ0UGFkKGlucHV0LCBsZW5ndGgsIGNoYXJhY3Rlcik7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgaXNTdHJpbmcgfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ21hdGNoJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTWF0Y2hQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgXHJcbiAgdHJhbnNmb3JtIChpbnB1dDogYW55LCBwYXR0ZXJuOiBhbnksIGZsYWc6IGFueSk6IGFueSB7XHJcbiAgICBcclxuICAgIGlmICghaXNTdHJpbmcoaW5wdXQpKSB7XHJcbiAgICAgIHJldHVybiBpbnB1dDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgcmVnZXhwID0gcGF0dGVybiBpbnN0YW5jZW9mIFJlZ0V4cCA/IHBhdHRlcm4gOiBuZXcgUmVnRXhwKHBhdHRlcm4sIGZsYWcpO1xyXG4gICAgcmV0dXJuIGlucHV0Lm1hdGNoKHJlZ2V4cCk7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgcGFkLCBpc1N0cmluZyB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcclxuXHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ3BhZCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBhZFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICBcclxuICB0cmFuc2Zvcm0gKGlucHV0OiBhbnksIGxlbmd0aDogbnVtYmVyID0gMCwgY2hhcmFjdGVyOiBzdHJpbmcgPSAnICcpOiBhbnkge1xyXG4gICAgXHJcbiAgICBpZiAoIWlzU3RyaW5nKGlucHV0KSkge1xyXG4gICAgICByZXR1cm4gaW5wdXQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiBwYWQoaW5wdXQsIGxlbmd0aCwgY2hhcmFjdGVyKTtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBpc1N0cmluZywgaXNVbmRlZmluZWQgfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ3JlcGxhY2UnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZXBsYWNlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIFxyXG4gIHRyYW5zZm9ybSAoaW5wdXQ6IGFueSwgcGF0dGVybjogYW55LCByZXBsYWNlbWVudDogYW55KTogYW55IHtcclxuICAgIFxyXG4gICAgaWYgKCFpc1N0cmluZyhpbnB1dCkgfHwgaXNVbmRlZmluZWQocGF0dGVybikgfHwgaXNVbmRlZmluZWQocmVwbGFjZW1lbnQpKSB7XHJcbiAgICAgIHJldHVybiBpbnB1dDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIGlucHV0LnJlcGxhY2UocGF0dGVybiwgcmVwbGFjZW1lbnQpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyByaWdodFBhZCwgaXNTdHJpbmcgfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcblxyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdyaWdodHBhZCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFJpZ2h0UGFkUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIFxyXG4gIHRyYW5zZm9ybSAoaW5wdXQ6IGFueSwgbGVuZ3RoOiBudW1iZXIgPSAwLCBjaGFyYWN0ZXI6IHN0cmluZyA9ICcgJyk6IGFueSB7XHJcbiAgICBcclxuICAgIGlmICghaXNTdHJpbmcoaW5wdXQpKSB7XHJcbiAgICAgIHJldHVybiBpbnB1dDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIHJpZ2h0UGFkKGlucHV0LCBsZW5ndGgsIGNoYXJhY3Rlcik7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgaXNTdHJpbmcgfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcblxyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdzcGxpdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFNwbGl0UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIFxyXG4gIHRyYW5zZm9ybSAoaW5wdXQ6IGFueSwgc2VwYXJhdG9yOiBzdHJpbmcgPSAnICcsIGxpbWl0PzogbnVtYmVyKTogYW55IHtcclxuICAgIFxyXG4gICAgaWYgKCFpc1N0cmluZyhpbnB1dCkpIHtcclxuICAgICAgcmV0dXJuIGlucHV0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gaW5wdXQuc3BsaXQoc2VwYXJhdG9yLCBsaW1pdCk7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgaXNTdHJpbmcgfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcblxyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICd0ZXN0J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVGVzdFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICBcclxuICB0cmFuc2Zvcm0gKGlucHV0OiBhbnksIHBhdHRlcm46IGFueSwgZmxhZzogYW55KTogYW55IHtcclxuICAgIFxyXG4gICAgaWYgKCFpc1N0cmluZyhpbnB1dCkgfHwgIXBhdHRlcm4pIHtcclxuICAgICAgcmV0dXJuIGlucHV0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCByZWdleHAgPSBwYXR0ZXJuIGluc3RhbmNlb2YgUmVnRXhwID8gcGF0dGVybiA6IG5ldyBSZWdFeHAocGF0dGVybiwgZmxhZyk7XHJcbiAgICBcclxuICAgIHJldHVybiByZWdleHAudGVzdChpbnB1dCk7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgaXNTdHJpbmcgfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ3RyaW0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUcmltUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIFxyXG4gIHRyYW5zZm9ybSAoaW5wdXQ6IGFueSk6IGFueSB7XHJcbiAgICBcclxuICAgIGlmICghaXNTdHJpbmcoaW5wdXQpKSB7XHJcbiAgICAgIHJldHVybiBpbnB1dDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIGlucHV0LnRyaW0oKTtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnbmV3bGluZXMnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZXdsaW5lc1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICBcclxuICB0cmFuc2Zvcm0gKGlucHV0OiBhbnkpOiBhbnkge1xyXG4gICAgXHJcbiAgICBpZiAoIWlzU3RyaW5nKGlucHV0KSkge1xyXG4gICAgICByZXR1cm4gaW5wdXQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiBpbnB1dC5yZXBsYWNlKC8oPzpcXHJcXG58XFxyfFxcbikvZywgJzxiciAvPicpO1xyXG4gIH1cclxufSIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgaXNTdHJpbmcsIHVwcGVyRmlyc3QgfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ2NhcGl0YWxpemUnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDYXBpdGFsaXplUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIHRyYW5zZm9ybShpbnB1dDogYW55LCBhbGw6IGJvb2xlYW4gPSBmYWxzZSkgOiBhbnkge1xyXG4gICAgXHJcbiAgICBpZiAoIWlzU3RyaW5nKGlucHV0KSkge1xyXG4gICAgICByZXR1cm4gaW5wdXQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmICghYWxsKSB7XHJcbiAgICAgIHJldHVybiB1cHBlckZpcnN0KGlucHV0LnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHJldHVybiBpbnB1dC50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgLnNwbGl0KCcgJylcclxuICAgICAgICAubWFwKCh2YWx1ZTogc3RyaW5nKSA9PiB1cHBlckZpcnN0KHZhbHVlKSlcclxuICAgICAgICAuam9pbignICcpO1xyXG4gICAgfVxyXG4gIH1cclxufSIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgaXNTdHJpbmcsIHVwcGVyRmlyc3QgfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ3VwcGVyZmlyc3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVcHBlckZpcnN0UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIFxyXG4gIHRyYW5zZm9ybShpbnB1dDogYW55KTogYW55IHtcclxuICAgIFxyXG4gICAgaWYgKCFpc1N0cmluZyhpbnB1dCkpIHtcclxuICAgICAgcmV0dXJuIGlucHV0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gdXBwZXJGaXJzdChpbnB1dCk7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgaXNTdHJpbmcgfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ3RlbXBsYXRlJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgXHJcbiAgdHJhbnNmb3JtIChpbnB1dDogYW55LCAuLi5hcmdzOiBhbnlbXSk6IGFueSB7XHJcbiAgICBcclxuICAgIGlmICghaXNTdHJpbmcoaW5wdXQpIHx8IGFyZ3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiBpbnB1dDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgbGV0IHRlbXBsYXRlID0gaW5wdXQ7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyArK2kpIHtcclxuICAgICAgdGVtcGxhdGUgPSB0ZW1wbGF0ZS5yZXBsYWNlKCBgJCR7aSArIDF9YCwgYXJnc1tpXSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiB0ZW1wbGF0ZTsgICBcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdlbmNvZGVVUkknXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFbmNvZGVVUklQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgXHJcbiAgdHJhbnNmb3JtIChpbnB1dDogYW55KSB7XHJcbiAgICBcclxuICAgIGlmICghaXNTdHJpbmcoaW5wdXQpKSB7XHJcbiAgICAgIHJldHVybiBpbnB1dDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIGVuY29kZVVSSShpbnB1dCk7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnZW5jb2RlVVJJQ29tcG9uZW50J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRW5jb2RlVVJJQ29tcG9uZW50UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIFxyXG4gIHRyYW5zZm9ybSAoaW5wdXQ6IGFueSkge1xyXG4gICAgXHJcbiAgICBpZiAoIWlzU3RyaW5nKGlucHV0KSkge1xyXG4gICAgICByZXR1cm4gaW5wdXQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoaW5wdXQpO1xyXG4gIH1cclxufSIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgaXNTdHJpbmcgfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ2RlY29kZVVSSSdcclxufSlcclxuZXhwb3J0IGNsYXNzIERlY29kZVVSSVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICBcclxuICB0cmFuc2Zvcm0gKGlucHV0OiBhbnkpIHtcclxuICAgIFxyXG4gICAgaWYgKCFpc1N0cmluZyhpbnB1dCkpIHtcclxuICAgICAgcmV0dXJuIGlucHV0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gZGVjb2RlVVJJKGlucHV0KTtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdkZWNvZGVVUklDb21wb25lbnQnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEZWNvZGVVUklDb21wb25lbnRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgXHJcbiAgdHJhbnNmb3JtIChpbnB1dDogYW55KSB7XHJcbiAgICBcclxuICAgIGlmICghaXNTdHJpbmcoaW5wdXQpKSB7XHJcbiAgICAgIHJldHVybiBpbnB1dDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChpbnB1dCk7XHJcbiAgfVxyXG59IiwiLy8gSW5zcGlyZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vYThtL2FuZ3VsYXItZmlsdGVyL2Jsb2IvbWFzdGVyL3NyYy9fZmlsdGVyL3N0cmluZy90cnVuY2F0ZS5qc1xyXG5cclxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgaXNTdHJpbmcsIGlzVW5kZWZpbmVkIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICd0cnVuY2F0ZSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFRydW5jYXRlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIFxyXG4gIHRyYW5zZm9ybSAoaW5wdXQ6IGFueSwgbGVuZ3RoPzogbnVtYmVyLCBzdWZmaXg/OiBzdHJpbmcsIHByZXNlcnZlPzogYm9vbGVhbik6IGFueSB7XHJcbiAgICBcclxuICAgIFxyXG4gICAgaWYgKCFpc1N0cmluZyhpbnB1dCkpIHtcclxuICAgICAgcmV0dXJuIGlucHV0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBsZW5ndGggPSBpc1VuZGVmaW5lZChsZW5ndGgpID8gaW5wdXQubGVuZ3RoIDogbGVuZ3RoO1xyXG4gICAgXHJcbiAgICBpZiAoaW5wdXQubGVuZ3RoIDw9IGxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gaW5wdXQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHByZXNlcnZlID0gcHJlc2VydmUgfHwgZmFsc2U7XHJcbiAgICBzdWZmaXggPSBzdWZmaXggfHwgJyc7XHJcbiAgICBsZXQgaW5kZXggPSBsZW5ndGg7XHJcbiAgICBcclxuICAgIGlmIChwcmVzZXJ2ZSkge1xyXG4gICAgICBpZiAoaW5wdXQuaW5kZXhPZignICcsIGxlbmd0aCkgPT09IC0xKSB7XHJcbiAgICAgICAgaW5kZXggPSBpbnB1dC5sZW5ndGg7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgaW5kZXggID0gaW5wdXQuaW5kZXhPZignICcsIGxlbmd0aCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIGlucHV0LnN1YnN0cmluZygwLCBpbmRleCkgKyBzdWZmaXg7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAncmVwZWF0J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVwZWF0UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIFxyXG4gIHRyYW5zZm9ybSAoaW5wdXQ6IGFueSwgdGltZXM6IG51bWJlciA9IDEsIGNoYXJhY3RlcnM6IHN0cmluZyA9ICcnKTogYW55IHtcclxuICAgIFxyXG4gICAgaWYgKCFpc1N0cmluZyhpbnB1dCkpIHtcclxuICAgICAgcmV0dXJuIGlucHV0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAodGltZXMgPD0gMCkge1xyXG4gICAgICB0aW1lcyA9IDE7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IHJlcGVhdGVkID0gW2lucHV0XTtcclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGltZXM7ICsraSkge1xyXG4gICAgICByZXBlYXRlZC5wdXNoKGlucHV0KVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gcmVwZWF0ZWQuam9pbihjaGFyYWN0ZXJzKTtcclxuICB9XHJcbn0iLCJpbXBvcnQge1BpcGUsIFBpcGVUcmFuc2Zvcm19IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge2lzU3RyaW5nfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdzbHVnaWZ5JyB9KVxyXG5leHBvcnQgY2xhc3MgU2x1Z2lmeVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgdHJhbnNmb3JtKGlucHV0OiBhbnkpOiBhbnkge1xyXG5cclxuICAgIGlmICghaXNTdHJpbmcoaW5wdXQpKSB7XHJcbiAgICAgIHJldHVybiBpbnB1dDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgaW5wdXRcclxuICAgICAgLnRvTG93ZXJDYXNlKClcclxuICAgICAgLnRyaW0oKVxyXG4gICAgICAucmVwbGFjZSgvW15hLXowLTlcXHMtXS9nLCAnICcpXHJcbiAgICAgIC5yZXBsYWNlKC9bXFxzLV0rL2csICctJylcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsIi8vIGlkZWEgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vYThtL2FuZ3VsYXItZmlsdGVyXHJcblxyXG5pbXBvcnQge1BpcGUsIFBpcGVUcmFuc2Zvcm19IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge2lzU3RyaW5nLCBpc1VuZGVmaW5lZH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdzdHJpcFRhZ3MnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdHJpcFRhZ3NQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgXHJcbiAgdHJhbnNmb3JtKGlucHV0OiBzdHJpbmcpOiBhbnkge1xyXG4gICAgXHJcbiAgICBpZiAoIWlzU3RyaW5nKGlucHV0KSB8fCBpc1VuZGVmaW5lZChpbnB1dCkpXHJcbiAgICByZXR1cm4gaW5wdXQ7XHJcbiAgICBcclxuICAgIHJldHVybiBpbnB1dC5yZXBsYWNlKC88XFxTW14+PF0qPi9nLCAnJyk7XHJcbiAgfVxyXG59IiwiLy8gaWRlYSBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9hOG0vYW5ndWxhci1maWx0ZXJcclxuXHJcbmltcG9ydCB7UGlwZSwgUGlwZVRyYW5zZm9ybX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7aXNTdHJpbmcsIGlzVW5kZWZpbmVkfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcblxyXG5AUGlwZSh7bmFtZTogJ2xhdGluaXplJ30pXHJcbmV4cG9ydCBjbGFzcyBMYXRpbml6ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgdHJhbnNmb3JtKGlucHV0OiBzdHJpbmcpOiBhbnkge1xyXG5cclxuICAgIGlmICghaXNTdHJpbmcoaW5wdXQpIHx8IGlzVW5kZWZpbmVkKGlucHV0KSkge1xyXG4gICAgICByZXR1cm4gaW5wdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHJlcGxhY2VtZW50TGlzdCA9IFtcclxuICAgICAge2Jhc2U6ICcgJywgY2hhcnM6IFwiXFx1MDBBMFwifSxcclxuICAgICAge2Jhc2U6ICcwJywgY2hhcnM6IFwiXFx1MDdDMFwifSxcclxuICAgICAge2Jhc2U6ICdBJywgY2hhcnM6IFwiXFx1MjRCNlxcdUZGMjFcXHUwMEMwXFx1MDBDMVxcdTAwQzJcXHUxRUE2XFx1MUVBNFxcdTFFQUFcXHUxRUE4XFx1MDBDM1xcdTAxMDBcXHUwMTAyXFx1MUVCMFxcdTFFQUVcXHUxRUI0XFx1MUVCMlxcdTAyMjZcXHUwMUUwXFx1MDBDNFxcdTAxREVcXHUxRUEyXFx1MDBDNVxcdTAxRkFcXHUwMUNEXFx1MDIwMFxcdTAyMDJcXHUxRUEwXFx1MUVBQ1xcdTFFQjZcXHUxRTAwXFx1MDEwNFxcdTAyM0FcXHUyQzZGXCJ9LFxyXG4gICAgICB7YmFzZTogJ0FBJywgY2hhcnM6IFwiXFx1QTczMlwifSxcclxuICAgICAge2Jhc2U6ICdBRScsIGNoYXJzOiBcIlxcdTAwQzZcXHUwMUZDXFx1MDFFMlwifSxcclxuICAgICAge2Jhc2U6ICdBTycsIGNoYXJzOiBcIlxcdUE3MzRcIn0sXHJcbiAgICAgIHtiYXNlOiAnQVUnLCBjaGFyczogXCJcXHVBNzM2XCJ9LFxyXG4gICAgICB7YmFzZTogJ0FWJywgY2hhcnM6IFwiXFx1QTczOFxcdUE3M0FcIn0sXHJcbiAgICAgIHtiYXNlOiAnQVknLCBjaGFyczogXCJcXHVBNzNDXCJ9LFxyXG4gICAgICB7YmFzZTogJ0InLCBjaGFyczogXCJcXHUyNEI3XFx1RkYyMlxcdTFFMDJcXHUxRTA0XFx1MUUwNlxcdTAyNDNcXHUwMTgxXCJ9LFxyXG4gICAgICB7YmFzZTogJ0MnLCBjaGFyczogXCJcXHUyNGI4XFx1ZmYyM1xcdUE3M0VcXHUxRTA4XFx1MDEwNlxcdTAwNDNcXHUwMTA4XFx1MDEwQVxcdTAxMENcXHUwMEM3XFx1MDE4N1xcdTAyM0JcIn0sXHJcbiAgICAgIHtiYXNlOiAnRCcsIGNoYXJzOiBcIlxcdTI0QjlcXHVGRjI0XFx1MUUwQVxcdTAxMEVcXHUxRTBDXFx1MUUxMFxcdTFFMTJcXHUxRTBFXFx1MDExMFxcdTAxOEFcXHUwMTg5XFx1MUQwNVxcdUE3NzlcIn0sXHJcbiAgICAgIHtiYXNlOiAnRGgnLCBjaGFyczogXCJcXHUwMEQwXCJ9LFxyXG4gICAgICB7YmFzZTogJ0RaJywgY2hhcnM6IFwiXFx1MDFGMVxcdTAxQzRcIn0sXHJcbiAgICAgIHtiYXNlOiAnRHonLCBjaGFyczogXCJcXHUwMUYyXFx1MDFDNVwifSxcclxuICAgICAge2Jhc2U6ICdFJywgY2hhcnM6IFwiXFx1MDI1QlxcdTI0QkFcXHVGRjI1XFx1MDBDOFxcdTAwQzlcXHUwMENBXFx1MUVDMFxcdTFFQkVcXHUxRUM0XFx1MUVDMlxcdTFFQkNcXHUwMTEyXFx1MUUxNFxcdTFFMTZcXHUwMTE0XFx1MDExNlxcdTAwQ0JcXHUxRUJBXFx1MDExQVxcdTAyMDRcXHUwMjA2XFx1MUVCOFxcdTFFQzZcXHUwMjI4XFx1MUUxQ1xcdTAxMThcXHUxRTE4XFx1MUUxQVxcdTAxOTBcXHUwMThFXFx1MUQwN1wifSxcclxuICAgICAge2Jhc2U6ICdGJywgY2hhcnM6IFwiXFx1QTc3Q1xcdTI0QkJcXHVGRjI2XFx1MUUxRVxcdTAxOTFcXHVBNzdCXCJ9LFxyXG4gICAgICB7YmFzZTogJ0cnLCBjaGFyczogXCJcXHUyNEJDXFx1RkYyN1xcdTAxRjRcXHUwMTFDXFx1MUUyMFxcdTAxMUVcXHUwMTIwXFx1MDFFNlxcdTAxMjJcXHUwMUU0XFx1MDE5M1xcdUE3QTBcXHVBNzdEXFx1QTc3RVxcdTAyNjJcIn0sXHJcbiAgICAgIHtiYXNlOiAnSCcsIGNoYXJzOiBcIlxcdTI0QkRcXHVGRjI4XFx1MDEyNFxcdTFFMjJcXHUxRTI2XFx1MDIxRVxcdTFFMjRcXHUxRTI4XFx1MUUyQVxcdTAxMjZcXHUyQzY3XFx1MkM3NVxcdUE3OERcIn0sXHJcbiAgICAgIHtiYXNlOiAnSScsIGNoYXJzOiBcIlxcdTI0QkVcXHVGRjI5XFx4Q0NcXHhDRFxceENFXFx1MDEyOFxcdTAxMkFcXHUwMTJDXFx1MDEzMFxceENGXFx1MUUyRVxcdTFFQzhcXHUwMUNGXFx1MDIwOFxcdTAyMEFcXHUxRUNBXFx1MDEyRVxcdTFFMkNcXHUwMTk3XCJ9LFxyXG4gICAgICB7YmFzZTogJ0onLCBjaGFyczogXCJcXHUyNEJGXFx1RkYyQVxcdTAxMzRcXHUwMjQ4XFx1MDIzN1wifSxcclxuICAgICAge2Jhc2U6ICdLJywgY2hhcnM6IFwiXFx1MjRDMFxcdUZGMkJcXHUxRTMwXFx1MDFFOFxcdTFFMzJcXHUwMTM2XFx1MUUzNFxcdTAxOThcXHUyQzY5XFx1QTc0MFxcdUE3NDJcXHVBNzQ0XFx1QTdBMlwifSxcclxuICAgICAge2Jhc2U6ICdMJywgY2hhcnM6IFwiXFx1MjRDMVxcdUZGMkNcXHUwMTNGXFx1MDEzOVxcdTAxM0RcXHUxRTM2XFx1MUUzOFxcdTAxM0JcXHUxRTNDXFx1MUUzQVxcdTAxNDFcXHUwMjNEXFx1MkM2MlxcdTJDNjBcXHVBNzQ4XFx1QTc0NlxcdUE3ODBcIn0sXHJcbiAgICAgIHtiYXNlOiAnTEonLCBjaGFyczogXCJcXHUwMUM3XCJ9LFxyXG4gICAgICB7YmFzZTogJ0xqJywgY2hhcnM6IFwiXFx1MDFDOFwifSxcclxuICAgICAge2Jhc2U6ICdNJywgY2hhcnM6IFwiXFx1MjRDMlxcdUZGMkRcXHUxRTNFXFx1MUU0MFxcdTFFNDJcXHUyQzZFXFx1MDE5Q1xcdTAzRkJcIn0sXHJcbiAgICAgIHtiYXNlOiAnTicsIGNoYXJzOiBcIlxcdUE3QTRcXHUwMjIwXFx1MjRDM1xcdUZGMkVcXHUwMUY4XFx1MDE0M1xceEQxXFx1MUU0NFxcdTAxNDdcXHUxRTQ2XFx1MDE0NVxcdTFFNEFcXHUxRTQ4XFx1MDE5RFxcdUE3OTBcXHUxRDBFXCJ9LCBcclxuICAgICAge2Jhc2U6ICdOSicsIGNoYXJzOiBcIlxcdTAxQ0FcIn0sIFxyXG4gICAgICB7YmFzZTogJ05qJywgY2hhcnM6IFwiXFx1MDFDQlwifSxcclxuICAgICAge2Jhc2U6ICdPJywgY2hhcnM6IFwiXFx1MjRDNFxcdUZGMkZcXHhEMlxceEQzXFx4RDRcXHUxRUQyXFx1MUVEMFxcdTFFRDZcXHUxRUQ0XFx4RDVcXHUxRTRDXFx1MDIyQ1xcdTFFNEVcXHUwMTRDXFx1MUU1MFxcdTFFNTJcXHUwMTRFXFx1MDIyRVxcdTAyMzBcXHhENlxcdTAyMkFcXHUxRUNFXFx1MDE1MFxcdTAxRDFcXHUwMjBDXFx1MDIwRVxcdTAxQTBcXHUxRURDXFx1MUVEQVxcdTFFRTBcXHUxRURFXFx1MUVFMlxcdTFFQ0NcXHUxRUQ4XFx1MDFFQVxcdTAxRUNcXHhEOFxcdTAxRkVcXHUwMTg2XFx1MDE5RlxcdUE3NEFcXHVBNzRDXCJ9LFxyXG4gICAgICB7YmFzZTogJ09FJywgY2hhcnM6IFwiXFx1MDE1MlwifSxcclxuICAgICAge2Jhc2U6ICdPSScsIGNoYXJzOiBcIlxcdTAxQTJcIn0sXHJcbiAgICAgIHtiYXNlOiAnT08nLCBjaGFyczogXCJcXHVBNzRFXCJ9LFxyXG4gICAgICB7YmFzZTogJ09VJywgY2hhcnM6IFwiXFx1MDIyMlwifSxcclxuICAgICAge2Jhc2U6ICdQJywgY2hhcnM6IFwiXFx1MjRDNVxcdUZGMzBcXHUxRTU0XFx1MUU1NlxcdTAxQTRcXHUyQzYzXFx1QTc1MFxcdUE3NTJcXHVBNzU0XCJ9LFxyXG4gICAgICB7YmFzZTogJ1EnLCBjaGFyczogXCJcXHUyNEM2XFx1RkYzMVxcdUE3NTZcXHVBNzU4XFx1MDI0QVwifSxcclxuICAgICAge2Jhc2U6ICdSJyxjaGFyczogXCJcXHUyNEM3XFx1RkYzMlxcdTAxNTRcXHUxRTU4XFx1MDE1OFxcdTAyMTBcXHUwMjEyXFx1MUU1QVxcdTFFNUNcXHUwMTU2XFx1MUU1RVxcdTAyNENcXHUyQzY0XFx1QTc1QVxcdUE3QTZcXHVBNzgyXCJ9LFxyXG4gICAgICB7YmFzZTogJ1MnLGNoYXJzOiBcIlxcdTI0QzhcXHVGRjMzXFx1MUU5RVxcdTAxNUFcXHUxRTY0XFx1MDE1Q1xcdTFFNjBcXHUwMTYwXFx1MUU2NlxcdTFFNjJcXHUxRTY4XFx1MDIxOFxcdTAxNUVcXHUyQzdFXFx1QTdBOFxcdUE3ODRcIn0sXHJcbiAgICAgIHtiYXNlOiAnVCcsY2hhcnM6IFwiXFx1MjRDOVxcdUZGMzRcXHUxRTZBXFx1MDE2NFxcdTFFNkNcXHUwMjFBXFx1MDE2MlxcdTFFNzBcXHUxRTZFXFx1MDE2NlxcdTAxQUNcXHUwMUFFXFx1MDIzRVxcdUE3ODZcIn0sXHJcbiAgICAgIHtiYXNlOiAnVGgnLCBjaGFyczogXCJcXHUwMERFXCJ9LFxyXG4gICAgICB7YmFzZTogJ1RaJywgY2hhcnM6IFwiXFx1QTcyOFwifSxcclxuICAgICAge2Jhc2U6ICdVJywgY2hhcnM6IFwiXFx1MjRDQVxcdUZGMzVcXHhEOVxceERBXFx4REJcXHUwMTY4XFx1MUU3OFxcdTAxNkFcXHUxRTdBXFx1MDE2Q1xceERDXFx1MDFEQlxcdTAxRDdcXHUwMUQ1XFx1MDFEOVxcdTFFRTZcXHUwMTZFXFx1MDE3MFxcdTAxRDNcXHUwMjE0XFx1MDIxNlxcdTAxQUZcXHUxRUVBXFx1MUVFOFxcdTFFRUVcXHUxRUVDXFx1MUVGMFxcdTFFRTRcXHUxRTcyXFx1MDE3MlxcdTFFNzZcXHUxRTc0XFx1MDI0NFwifSxcclxuICAgICAge2Jhc2U6ICdWJywgY2hhcnM6IFwiXFx1MjRDQlxcdUZGMzZcXHUxRTdDXFx1MUU3RVxcdTAxQjJcXHVBNzVFXFx1MDI0NVwifSxcclxuICAgICAge2Jhc2U6ICdWWScsIGNoYXJzOiBcIlxcdUE3NjBcIn0sXHJcbiAgICAgIHtiYXNlOiAnVycsIGNoYXJzOiBcIlxcdTI0Q0NcXHVGRjM3XFx1MUU4MFxcdTFFODJcXHUwMTc0XFx1MUU4NlxcdTFFODRcXHUxRTg4XFx1MkM3MlwifSxcclxuICAgICAge2Jhc2U6ICdYJywgY2hhcnM6IFwiXFx1MjRDRFxcdUZGMzhcXHUxRThBXFx1MUU4Q1wifSxcclxuICAgICAge2Jhc2U6ICdZJywgY2hhcnM6IFwiXFx1MjRDRVxcdUZGMzlcXHUxRUYyXFx4RERcXHUwMTc2XFx1MUVGOFxcdTAyMzJcXHUxRThFXFx1MDE3OFxcdTFFRjZcXHUxRUY0XFx1MDFCM1xcdTAyNEVcXHUxRUZFXCJ9LFxyXG4gICAgICB7YmFzZTogJ1onLCBjaGFyczogXCJcXHUyNENGXFx1RkYzQVxcdTAxNzlcXHUxRTkwXFx1MDE3QlxcdTAxN0RcXHUxRTkyXFx1MUU5NFxcdTAxQjVcXHUwMjI0XFx1MkM3RlxcdTJDNkJcXHVBNzYyXCJ9LFxyXG4gICAgICB7YmFzZTogJ2EnLCBjaGFyczogXCJcXHUyNEQwXFx1RkY0MVxcdTFFOUFcXHUwMEUwXFx1MDBFMVxcdTAwRTJcXHUxRUE3XFx1MUVBNVxcdTFFQUJcXHUxRUE5XFx1MDBFM1xcdTAxMDFcXHUwMTAzXFx1MUVCMVxcdTFFQUZcXHUxRUI1XFx1MUVCM1xcdTAyMjdcXHUwMUUxXFx1MDBFNFxcdTAxREZcXHUxRUEzXFx1MDBFNVxcdTAxRkJcXHUwMUNFXFx1MDIwMVxcdTAyMDNcXHUxRUExXFx1MUVBRFxcdTFFQjdcXHUxRTAxXFx1MDEwNVxcdTJDNjVcXHUwMjUwXFx1MDI1MVwifSxcclxuICAgICAge2Jhc2U6ICdhYScsIGNoYXJzOiBcIlxcdUE3MzNcIn0sXHJcbiAgICAgIHtiYXNlOiAnYWUnLGNoYXJzOiBcIlxcdTAwRTZcXHUwMUZEXFx1MDFFM1wifSxcclxuICAgICAge2Jhc2U6ICdhbycsY2hhcnM6IFwiXFx1QTczNVwifSxcclxuICAgICAge2Jhc2U6ICdhdScsY2hhcnM6IFwiXFx1QTczN1wifSxcclxuICAgICAge2Jhc2U6ICdhdicsY2hhcnM6IFwiXFx1QTczOVxcdUE3M0JcIn0sXHJcbiAgICAgIHtiYXNlOiAnYXknLGNoYXJzOiBcIlxcdUE3M0RcIn0sXHJcbiAgICAgIHtiYXNlOiAnYicsY2hhcnM6IFwiXFx1MjREMVxcdUZGNDJcXHUxRTAzXFx1MUUwNVxcdTFFMDdcXHUwMTgwXFx1MDE4M1xcdTAyNTNcXHUwMTgyXCJ9LFxyXG4gICAgICB7YmFzZTogJ2MnLGNoYXJzOiBcIlxcdUZGNDNcXHUyNEQyXFx1MDEwN1xcdTAxMDlcXHUwMTBCXFx1MDEwRFxcdTAwRTdcXHUxRTA5XFx1MDE4OFxcdTAyM0NcXHVBNzNGXFx1MjE4NFwifSxcclxuICAgICAge2Jhc2U6ICdkJyxjaGFyczogXCJcXHUyNEQzXFx1RkY0NFxcdTFFMEJcXHUwMTBGXFx1MUUwRFxcdTFFMTFcXHUxRTEzXFx1MUUwRlxcdTAxMTFcXHUwMThDXFx1MDI1NlxcdTAyNTdcXHUwMThCXFx1MTNFN1xcdTA1MDFcXHVBN0FBXCJ9LFxyXG4gICAgICB7YmFzZTogJ2RoJyxjaGFyczogXCJcXHUwMEYwXCJ9LFxyXG4gICAgICB7YmFzZTogJ2R6JyxjaGFyczogXCJcXHUwMUYzXFx1MDFDNlwifSxcclxuICAgICAge2Jhc2U6ICdlJyxjaGFyczogXCJcXHUyNEQ0XFx1RkY0NVxcdTAwRThcXHUwMEU5XFx1MDBFQVxcdTFFQzFcXHUxRUJGXFx1MUVDNVxcdTFFQzNcXHUxRUJEXFx1MDExM1xcdTFFMTVcXHUxRTE3XFx1MDExNVxcdTAxMTdcXHUwMEVCXFx1MUVCQlxcdTAxMUJcXHUwMjA1XFx1MDIwN1xcdTFFQjlcXHUxRUM3XFx1MDIyOVxcdTFFMURcXHUwMTE5XFx1MUUxOVxcdTFFMUJcXHUwMjQ3XFx1MDFERFwiLCAgICAgICAgICAgIH0sIHtiYXNlOiAnZicsY2hhcnM6IFwiXFx1MjRENVxcdUZGNDZcXHUxRTFGXFx1MDE5MlwifSxcclxuICAgICAge2Jhc2U6ICdmZicsY2hhcnM6IFwiXFx1RkIwMFwifSxcclxuICAgICAge2Jhc2U6ICdmaScsY2hhcnM6IFwiXFx1RkIwMVwifSxcclxuICAgICAge2Jhc2U6ICdmbCcsY2hhcnM6IFwiXFx1RkIwMlwifSxcclxuICAgICAge2Jhc2U6ICdmZmknLGNoYXJzOiBcIlxcdUZCMDNcIn0sXHJcbiAgICAgIHtiYXNlOiAnZmZsJyxjaGFyczogXCJcXHVGQjA0XCJ9LFxyXG4gICAgICB7YmFzZTogJ2cnLGNoYXJzOiBcIlxcdTI0RDZcXHVGRjQ3XFx1MDFGNVxcdTAxMURcXHUxRTIxXFx1MDExRlxcdTAxMjFcXHUwMUU3XFx1MDEyM1xcdTAxRTVcXHUwMjYwXFx1QTdBMVxcdUE3N0ZcXHUxRDc5XCJ9LFxyXG4gICAgICB7YmFzZTogJ2gnLCBjaGFyczogXCJcXHUyNEQ3XFx1RkY0OFxcdTAxMjVcXHUxRTIzXFx1MUUyN1xcdTAyMUZcXHUxRTI1XFx1MUUyOVxcdTFFMkJcXHUxRTk2XFx1MDEyN1xcdTJDNjhcXHUyQzc2XFx1MDI2NVwifSxcclxuICAgICAge2Jhc2U6ICdodicsY2hhcnM6IFwiXFx1MDE5NVwifSxcclxuICAgICAge2Jhc2U6ICdpJywgY2hhcnM6IFwiXFx1MjREOFxcdUZGNDlcXHhFQ1xceEVEXFx4RUVcXHUwMTI5XFx1MDEyQlxcdTAxMkRcXHhFRlxcdTFFMkZcXHUxRUM5XFx1MDFEMFxcdTAyMDlcXHUwMjBCXFx1MUVDQlxcdTAxMkZcXHUxRTJEXFx1MDI2OFxcdTAxMzFcIn0sXHJcbiAgICAgIHtiYXNlOiAnaicsY2hhcnM6IFwiXFx1MjREOVxcdUZGNEFcXHUwMTM1XFx1MDFGMFxcdTAyNDlcIn0sXHJcbiAgICAgIHtiYXNlOiAnaycsIGNoYXJzOiBcIlxcdTI0REFcXHVGRjRCXFx1MUUzMVxcdTAxRTlcXHUxRTMzXFx1MDEzN1xcdTFFMzVcXHUwMTk5XFx1MkM2QVxcdUE3NDFcXHVBNzQzXFx1QTc0NVxcdUE3QTNcIn0sXHJcbiAgICAgIHtiYXNlOiAnbCcsIGNoYXJzOiBcIlxcdTI0REJcXHVGRjRDXFx1MDE0MFxcdTAxM0FcXHUwMTNFXFx1MUUzN1xcdTFFMzlcXHUwMTNDXFx1MUUzRFxcdTFFM0JcXHUwMTdGXFx1MDE0MlxcdTAxOUFcXHUwMjZCXFx1MkM2MVxcdUE3NDlcXHVBNzgxXFx1QTc0N1xcdTAyNkRcIn0sXHJcbiAgICAgIHtiYXNlOiAnbGonLCBjaGFyczogXCJcXHUwMUM5XCJ9LFxyXG4gICAgICB7YmFzZTogJ20nLCBjaGFyczogXCJcXHUyNERDXFx1RkY0RFxcdTFFM0ZcXHUxRTQxXFx1MUU0M1xcdTAyNzFcXHUwMjZGXCJ9LFxyXG4gICAgICB7YmFzZTogJ24nLCBjaGFyczogXCJcXHUyNEREXFx1RkY0RVxcdTAxRjlcXHUwMTQ0XFx4RjFcXHUxRTQ1XFx1MDE0OFxcdTFFNDdcXHUwMTQ2XFx1MUU0QlxcdTFFNDlcXHUwMTlFXFx1MDI3MlxcdTAxNDlcXHVBNzkxXFx1QTdBNVxcdTA0M0JcXHUwNTA5XCJ9LFxyXG4gICAgICB7YmFzZTogJ25qJywgY2hhcnM6IFwiXFx1MDFDQ1wifSxcclxuICAgICAge2Jhc2U6ICdvJywgY2hhcnM6IFwiXFx1MjRERVxcdUZGNEZcXHhGMlxceEYzXFx4RjRcXHUxRUQzXFx1MUVEMVxcdTFFRDdcXHUxRUQ1XFx4RjVcXHUxRTREXFx1MDIyRFxcdTFFNEZcXHUwMTREXFx1MUU1MVxcdTFFNTNcXHUwMTRGXFx1MDIyRlxcdTAyMzFcXHhGNlxcdTAyMkJcXHUxRUNGXFx1MDE1MVxcdTAxRDJcXHUwMjBEXFx1MDIwRlxcdTAxQTFcXHUxRUREXFx1MUVEQlxcdTFFRTFcXHUxRURGXFx1MUVFM1xcdTFFQ0RcXHUxRUQ5XFx1MDFFQlxcdTAxRURcXHhGOFxcdTAxRkZcXHVBNzRCXFx1QTc0RFxcdTAyNzVcXHUwMjU0XFx1MUQxMVwifSxcclxuICAgICAge2Jhc2U6ICdvZScsIGNoYXJzOiBcIlxcdTAxNTNcIn0sXHJcbiAgICAgIHtiYXNlOiAnb2knLCBjaGFyczogXCJcXHUwMUEzXCJ9LFxyXG4gICAgICB7YmFzZTogJ29vJywgY2hhcnM6IFwiXFx1QTc0RlwifSxcclxuICAgICAge2Jhc2U6ICdvdScsIGNoYXJzOiBcIlxcdTAyMjNcIn0sXHJcbiAgICAgIHtiYXNlOiAncCcsIGNoYXJzOiBcIlxcdTI0REZcXHVGRjUwXFx1MUU1NVxcdTFFNTdcXHUwMUE1XFx1MUQ3RFxcdUE3NTFcXHVBNzUzXFx1QTc1NVxcdTAzQzFcIn0sXHJcbiAgICAgIHtiYXNlOiAncScsIGNoYXJzOiBcIlxcdTI0RTBcXHVGRjUxXFx1MDI0QlxcdUE3NTdcXHVBNzU5XCJ9LFxyXG4gICAgICB7YmFzZTogJ3InLCBjaGFyczogXCJcXHUyNEUxXFx1RkY1MlxcdTAxNTVcXHUxRTU5XFx1MDE1OVxcdTAyMTFcXHUwMjEzXFx1MUU1QlxcdTFFNURcXHUwMTU3XFx1MUU1RlxcdTAyNERcXHUwMjdEXFx1QTc1QlxcdUE3QTdcXHVBNzgzXCJ9LFxyXG4gICAgICB7YmFzZTogJ3MnLCBjaGFyczogXCJcXHUyNEUyXFx1RkY1M1xcdTAxNUJcXHUxRTY1XFx1MDE1RFxcdTFFNjFcXHUwMTYxXFx1MUU2N1xcdTFFNjNcXHUxRTY5XFx1MDIxOVxcdTAxNUZcXHUwMjNGXFx1QTdBOVxcdUE3ODVcXHUxRTlCXFx1MDI4MlwifSxcclxuICAgICAge2Jhc2U6ICdzcycsIGNoYXJzOiBcIlxceERGXCJ9LFxyXG4gICAgICB7YmFzZTogJ3QnLCBjaGFyczogXCJcXHUyNEUzXFx1RkY1NFxcdTFFNkJcXHUxRTk3XFx1MDE2NVxcdTFFNkRcXHUwMjFCXFx1MDE2M1xcdTFFNzFcXHUxRTZGXFx1MDE2N1xcdTAxQURcXHUwMjg4XFx1MkM2NlxcdUE3ODdcIn0sXHJcbiAgICAgIHtiYXNlOiAndGgnLCBjaGFyczogXCJcXHUwMEZFXCJ9LFxyXG4gICAgICB7YmFzZTogJ3R6JywgY2hhcnM6IFwiXFx1QTcyOVwifSxcclxuICAgICAge2Jhc2U6ICd1JywgY2hhcnM6IFwiXFx1MjRFNFxcdUZGNTVcXHhGOVxceEZBXFx4RkJcXHUwMTY5XFx1MUU3OVxcdTAxNkJcXHUxRTdCXFx1MDE2RFxceEZDXFx1MDFEQ1xcdTAxRDhcXHUwMUQ2XFx1MDFEQVxcdTFFRTdcXHUwMTZGXFx1MDE3MVxcdTAxRDRcXHUwMjE1XFx1MDIxN1xcdTAxQjBcXHUxRUVCXFx1MUVFOVxcdTFFRUZcXHUxRUVEXFx1MUVGMVxcdTFFRTVcXHUxRTczXFx1MDE3M1xcdTFFNzdcXHUxRTc1XFx1MDI4OVwifSxcclxuICAgICAge2Jhc2U6ICd2JywgY2hhcnM6IFwiXFx1MjRFNVxcdUZGNTZcXHUxRTdEXFx1MUU3RlxcdTAyOEJcXHVBNzVGXFx1MDI4Q1wifSxcclxuICAgICAge2Jhc2U6ICd2eScsIGNoYXJzOiBcIlxcdUE3NjFcIn0sXHJcbiAgICAgIHtiYXNlOiAndycsIGNoYXJzOiBcIlxcdTI0RTZcXHVGRjU3XFx1MUU4MVxcdTFFODNcXHUwMTc1XFx1MUU4N1xcdTFFODVcXHUxRTk4XFx1MUU4OVxcdTJDNzNcIn0sXHJcbiAgICAgIHtiYXNlOiAneCcsIGNoYXJzOiBcIlxcdTI0RTdcXHVGRjU4XFx1MUU4QlxcdTFFOERcIn0sXHJcbiAgICAgIHtiYXNlOiAneScsIGNoYXJzOiBcIlxcdTI0RThcXHVGRjU5XFx1MUVGM1xceEZEXFx1MDE3N1xcdTFFRjlcXHUwMjMzXFx1MUU4RlxceEZGXFx1MUVGN1xcdTFFOTlcXHUxRUY1XFx1MDFCNFxcdTAyNEZcXHUxRUZGXCJ9LFxyXG4gICAgICB7YmFzZTogJ3onLCBjaGFyczogXCJcXHUyNEU5XFx1RkY1QVxcdTAxN0FcXHUxRTkxXFx1MDE3Q1xcdTAxN0VcXHUxRTkzXFx1MUU5NVxcdTAxQjZcXHUwMjI1XFx1MDI0MFxcdTJDNkNcXHVBNzYzXCJ9XHJcbiAgICBdO1xyXG5cclxuICAgIGxldCBkaWFjcml0aWNzTWFwOiBhbnkgPSB7fTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVwbGFjZW1lbnRMaXN0Lmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgIGxldCBjaGFycyA9IHJlcGxhY2VtZW50TGlzdFtpXS5jaGFycztcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjaGFycy5sZW5ndGg7IGogKz0gMSkge1xyXG4gICAgICAgIGRpYWNyaXRpY3NNYXBbY2hhcnNbal1dID0gcmVwbGFjZW1lbnRMaXN0W2ldLmJhc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaW5wdXQucmVwbGFjZSgvW15cXHUwMDAwLVxcdTAwN2VdL2csIChjKSA9PiBkaWFjcml0aWNzTWFwW2NdIHx8IGMpO1xyXG4gIH1cclxufSIsIi8vIGlkZWEgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vYThtL2FuZ3VsYXItZmlsdGVyXHJcblxyXG5pbXBvcnQge1BpcGUsIFBpcGVUcmFuc2Zvcm19IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge2lzU3RyaW5nLCBpc1VuZGVmaW5lZH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICd3cmFwJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgV3JhcFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICBcclxuICB0cmFuc2Zvcm0oaW5wdXQ6IHN0cmluZywgd3JhcDogc3RyaW5nLCBlbmRzPzogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiAoaXNTdHJpbmcoaW5wdXQpICYmICFpc1VuZGVmaW5lZCh3cmFwKSkgPyBbd3JhcCwgaW5wdXQsIGVuZHMgfHwgd3JhcF0uam9pbignJykgOiBpbnB1dDtcclxuICB9XHJcbn0iLCJpbXBvcnQge1BpcGUsIFBpcGVUcmFuc2Zvcm19IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge2lzU3RyaW5nLCBpc051bGx9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcclxuXHJcbkBQaXBlKHtuYW1lOiAnd2l0aCd9KVxyXG5leHBvcnQgY2xhc3MgV2l0aFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICBcclxuICB0cmFuc2Zvcm0oaW5wdXQ6IHN0cmluZywgc3RhcnQ6IHN0cmluZ3xudWxsID0gbnVsbCwgZW5kczogc3RyaW5nfG51bGwgPSBudWxsLCBjc2Vuc2l0aXZlOiBib29sZWFuID0gZmFsc2UpOiBhbnkge1xyXG4gICAgXHJcbiAgICBpZiAoIWlzU3RyaW5nKGlucHV0KSB8fCAoaXNOdWxsKHN0YXJ0KSAmJiBpc051bGwoZW5kcykpIHx8IChzdGFydCA9PSAnJykgfHwgKGVuZHMgPT0gJycpKSB7XHJcbiAgICAgIHJldHVybiBpbnB1dDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaW5wdXQgPSAoY3NlbnNpdGl2ZSkgPyBpbnB1dCA6IGlucHV0LnRvTG93ZXJDYXNlKCk7XHJcbiAgICBcclxuICAgIGlmICghaXNOdWxsKHN0YXJ0KSAmJiAhaXNOdWxsKGVuZHMpKSB7XHJcbiAgICAgIGxldCBhOiBib29sZWFuID0gIWlucHV0LmluZGV4T2YoKGNzZW5zaXRpdmUpID8gc3RhcnQgOiBzdGFydC50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgbGV0IGI6IGJvb2xlYW4gPSBpbnB1dC5pbmRleE9mKChjc2Vuc2l0aXZlKSA/IGVuZHMgOiBlbmRzLnRvTG93ZXJDYXNlKCksIChpbnB1dC5sZW5ndGggLSBlbmRzLmxlbmd0aCkpICE9PSAtMTtcclxuICAgICAgXHJcbiAgICAgIGlmIChhID09IHRydWUgJiYgYiA9PSB0cnVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKCFpc051bGwoc3RhcnQpKSB7XHJcbiAgICAgIHJldHVybiAhaW5wdXQuaW5kZXhPZigoY3NlbnNpdGl2ZSkgPyBzdGFydCA6IHN0YXJ0LnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAoIWlzTnVsbChlbmRzKSkge1xyXG4gICAgICBsZXQgcG9zaXRpb246IGFueSA9IGlucHV0Lmxlbmd0aCAtIGVuZHMubGVuZ3RoO1xyXG4gICAgICBcclxuICAgICAgcmV0dXJuIGlucHV0LmluZGV4T2YoKGNzZW5zaXRpdmUpID8gZW5kcyA6IGVuZHMudG9Mb3dlckNhc2UoKSwgcG9zaXRpb24pICE9PSAtMTtcclxuICAgIH1cclxuICB9XHJcbn0iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdyZXZlcnNlU3RyJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUmV2ZXJzZVN0clBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICBcclxuICB0cmFuc2Zvcm0oaW5wdXQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBcclxuICAgIGlmICghaXNTdHJpbmcoaW5wdXQpKSB7XHJcbiAgICAgIHJldHVybiBpbnB1dDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIEFycmF5LmZyb20oaW5wdXQpLnJldmVyc2UoKS5qb2luKCcnKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQge0xlZnRQYWRQaXBlfSBmcm9tICcuL2xlZnQtcGFkLnBpcGUnO1xyXG5pbXBvcnQge01hdGNoUGlwZX0gZnJvbSAnLi9tYXRjaC5waXBlJztcclxuaW1wb3J0IHtQYWRQaXBlfSBmcm9tICcuL3BhZC5waXBlJztcclxuaW1wb3J0IHtSZXBsYWNlUGlwZX0gZnJvbSAnLi9yZXBsYWNlLnBpcGUnO1xyXG5pbXBvcnQge1JpZ2h0UGFkUGlwZX0gZnJvbSAnLi9yaWdodC1wYWQucGlwZSc7XHJcbmltcG9ydCB7U3BsaXRQaXBlfSBmcm9tICcuL3NwbGl0LnBpcGUnO1xyXG5pbXBvcnQge1Rlc3RQaXBlfSBmcm9tICcuL3Rlc3QucGlwZSc7XHJcbmltcG9ydCB7VHJpbVBpcGV9IGZyb20gJy4vdHJpbS5waXBlJztcclxuaW1wb3J0IHtOZXdsaW5lc1BpcGV9IGZyb20gJy4vbmV3bGluZXMucGlwZSc7XHJcbmltcG9ydCB7Q2FwaXRhbGl6ZVBpcGV9IGZyb20gJy4vY2FwaXRhbGl6ZS5waXBlJztcclxuaW1wb3J0IHtVcHBlckZpcnN0UGlwZX0gZnJvbSAnLi91cHBlcmZpcnN0LnBpcGUnO1xyXG5pbXBvcnQge1RlbXBsYXRlUGlwZX0gZnJvbSAnLi90ZW1wbGF0ZS5waXBlJztcclxuaW1wb3J0IHtFbmNvZGVVUklQaXBlfSBmcm9tICcuL2VuY29kZS11cmkucGlwZSc7XHJcbmltcG9ydCB7RW5jb2RlVVJJQ29tcG9uZW50UGlwZX0gZnJvbSAnLi9lbmNvZGUtdXJpLWNvbXBvbmVudC5waXBlJztcclxuaW1wb3J0IHtEZWNvZGVVUklQaXBlfSBmcm9tICcuL2RlY29kZS11cmkucGlwZSc7XHJcbmltcG9ydCB7RGVjb2RlVVJJQ29tcG9uZW50UGlwZX0gZnJvbSAnLi9kZWNvZGUtdXJpLWNvbXBvbmVudC5waXBlJztcclxuaW1wb3J0IHtUcnVuY2F0ZVBpcGV9IGZyb20gJy4vdHJ1bmNhdGUucGlwZSc7XHJcbmltcG9ydCB7UmVwZWF0UGlwZX0gZnJvbSAnLi9yZXBlYXQucGlwZSc7XHJcbmltcG9ydCB7U2x1Z2lmeVBpcGV9IGZyb20gJy4vc2x1Z2lmeS5waXBlJztcclxuaW1wb3J0IHtTdHJpcFRhZ3NQaXBlfSBmcm9tIFwiLi9zdHJpcC10YWdzLnBpcGVcIjtcclxuaW1wb3J0IHtMYXRpbml6ZVBpcGV9IGZyb20gXCIuL2xhdGluaXplLnBpcGVcIjtcclxuaW1wb3J0IHtXcmFwUGlwZX0gZnJvbSBcIi4vd3JhcC5waXBlXCI7XHJcbmltcG9ydCB7V2l0aFBpcGV9IGZyb20gXCIuL3dpdGgucGlwZVwiO1xyXG5pbXBvcnQge1JldmVyc2VTdHJQaXBlfSBmcm9tIFwiLi9yZXZlcnNlLXN0ci5waXBlXCI7XHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIExlZnRQYWRQaXBlLFxyXG4gICAgTWF0Y2hQaXBlLFxyXG4gICAgUGFkUGlwZSxcclxuICAgIFJlcGxhY2VQaXBlLFxyXG4gICAgUmlnaHRQYWRQaXBlLFxyXG4gICAgU3BsaXRQaXBlLFxyXG4gICAgVGVzdFBpcGUsXHJcbiAgICBUcmltUGlwZSxcclxuICAgIE5ld2xpbmVzUGlwZSxcclxuICAgIENhcGl0YWxpemVQaXBlLFxyXG4gICAgVXBwZXJGaXJzdFBpcGUsXHJcbiAgICBUZW1wbGF0ZVBpcGUsXHJcbiAgICBFbmNvZGVVUklQaXBlLFxyXG4gICAgRW5jb2RlVVJJQ29tcG9uZW50UGlwZSxcclxuICAgIERlY29kZVVSSVBpcGUsXHJcbiAgICBEZWNvZGVVUklDb21wb25lbnRQaXBlLFxyXG4gICAgVHJ1bmNhdGVQaXBlLFxyXG4gICAgUmVwZWF0UGlwZSxcclxuICAgIFNsdWdpZnlQaXBlLFxyXG4gICAgU3RyaXBUYWdzUGlwZSxcclxuICAgIExhdGluaXplUGlwZSxcclxuICAgIFdyYXBQaXBlLFxyXG4gICAgV2l0aFBpcGUsXHJcbiAgICBSZXZlcnNlU3RyUGlwZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgTGVmdFBhZFBpcGUsXHJcbiAgICBNYXRjaFBpcGUsXHJcbiAgICBQYWRQaXBlLFxyXG4gICAgUmVwbGFjZVBpcGUsXHJcbiAgICBSaWdodFBhZFBpcGUsXHJcbiAgICBTcGxpdFBpcGUsXHJcbiAgICBUZXN0UGlwZSxcclxuICAgIFRyaW1QaXBlLFxyXG4gICAgTmV3bGluZXNQaXBlLFxyXG4gICAgQ2FwaXRhbGl6ZVBpcGUsXHJcbiAgICBVcHBlckZpcnN0UGlwZSxcclxuICAgIFRlbXBsYXRlUGlwZSxcclxuICAgIEVuY29kZVVSSVBpcGUsXHJcbiAgICBFbmNvZGVVUklDb21wb25lbnRQaXBlLFxyXG4gICAgRGVjb2RlVVJJUGlwZSxcclxuICAgIERlY29kZVVSSUNvbXBvbmVudFBpcGUsXHJcbiAgICBUcnVuY2F0ZVBpcGUsXHJcbiAgICBSZXBlYXRQaXBlLFxyXG4gICAgU2x1Z2lmeVBpcGUsXHJcbiAgICBTdHJpcFRhZ3NQaXBlLFxyXG4gICAgTGF0aW5pemVQaXBlLFxyXG4gICAgV3JhcFBpcGUsXHJcbiAgICBXaXRoUGlwZSxcclxuICAgIFJldmVyc2VTdHJQaXBlXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdTdHJpbmdQaXBlc01vZHVsZSB7XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE5nQWdncmVnYXRlUGlwZXNNb2R1bGUgfSBmcm9tICcuL2FnZ3JlZ2F0ZS9hZ2dyZWdhdGUubW9kdWxlJztcclxuaW1wb3J0IHsgTmdBcnJheVBpcGVzTW9kdWxlIH0gZnJvbSAnLi9hcnJheS9hcnJheS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBOZ0Jvb2xlYW5QaXBlc01vZHVsZSB9IGZyb20gJy4vYm9vbGVhbi9ib29sZWFuLm1vZHVsZSc7XHJcbmltcG9ydCB7IE5nTWF0aFBpcGVzTW9kdWxlIH0gZnJvbSAnLi9tYXRoL21hdGgubW9kdWxlJztcclxuaW1wb3J0IHsgTmdPYmplY3RQaXBlc01vZHVsZSB9IGZyb20gJy4vb2JqZWN0L29iamVjdC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBOZ1N0cmluZ1BpcGVzTW9kdWxlIH0gZnJvbSAnLi9zdHJpbmcvc3RyaW5nLm1vZHVsZSc7XHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBleHBvcnRzOiBbXHJcbiAgICBOZ0FycmF5UGlwZXNNb2R1bGUsXHJcbiAgICBOZ01hdGhQaXBlc01vZHVsZSxcclxuICAgIE5nQm9vbGVhblBpcGVzTW9kdWxlLFxyXG4gICAgTmdTdHJpbmdQaXBlc01vZHVsZSxcclxuICAgIE5nT2JqZWN0UGlwZXNNb2R1bGUsXHJcbiAgICBOZ0FnZ3JlZ2F0ZVBpcGVzTW9kdWxlXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdQaXBlc01vZHVsZSB7fVxyXG4iXSwibmFtZXMiOlsidHNsaWJfMS5fX3ZhbHVlcyIsImNvdW50IiwidHNsaWJfMS5fX3NwcmVhZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFQSxTQUFnQixXQUFXLENBQUUsS0FBVTtJQUVyQyxPQUFPLE9BQU8sS0FBSyxLQUFLLFdBQVcsQ0FBQztDQUNyQzs7Ozs7QUFFRCxTQUFnQixNQUFNLENBQUUsS0FBVTtJQUVoQyxPQUFPLEtBQUssS0FBSyxJQUFJLENBQUM7Q0FDdkI7Ozs7O0FBRUQsU0FBZ0IsUUFBUSxDQUFFLEtBQVU7SUFFbEMsT0FBTyxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUM7Q0FDbEM7Ozs7O0FBRUQsU0FBZ0IsY0FBYyxDQUFFLEtBQVU7SUFFeEMsT0FBTyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0NBQzNDOzs7Ozs7QUFHRCxTQUFnQixVQUFVLENBQUUsS0FBYTtJQUV2QyxPQUFPLEtBQUssSUFBSSxDQUFDLENBQUM7Q0FDbkI7Ozs7O0FBR0QsU0FBZ0IsU0FBUyxDQUFFLEtBQWE7O0lBR3RDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztDQUMxQjs7Ozs7QUFFRCxTQUFnQixLQUFLLENBQUUsS0FBVTtJQUMvQixPQUFPLEtBQUssS0FBSyxJQUFJLElBQUksUUFBUSxLQUFLLENBQUMsS0FBSyxXQUFXLENBQUM7Q0FDekQ7Ozs7O0FBRUQsU0FBZ0IsUUFBUSxDQUFFLEtBQVU7SUFFbEMsT0FBTyxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUM7Q0FDbEM7Ozs7O0FBRUQsU0FBZ0IsUUFBUSxDQUFFLEtBQVU7SUFFbEMsT0FBTyxLQUFLLEtBQUssSUFBSSxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsQ0FBQztDQUNwRDs7Ozs7QUFFRCxTQUFnQixPQUFPLENBQUUsS0FBVTtJQUVqQyxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7Q0FDN0I7Ozs7O0FBRUQsU0FBZ0IsVUFBVSxDQUFFLEtBQVU7SUFFcEMsT0FBTyxPQUFPLEtBQUssS0FBSyxVQUFVLENBQUM7Q0FDcEM7Ozs7OztBQUVELFNBQWdCLFNBQVMsQ0FBRSxLQUFhLEVBQUUsT0FBZTtJQUV2RCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7Q0FDMUU7Ozs7O0FBRUQsU0FBZ0IsVUFBVSxDQUFFLEtBQWE7SUFFdkMsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0NBQ3pEOzs7OztBQUVELFNBQWdCLFdBQVcsQ0FBRSxNQUFjOzs7UUFHbkMsSUFBSSxHQUFRLG9CQUFNLElBQUksSUFBRSxNQUFNLENBQUM7SUFDckMsT0FBTyxVQUFVLEtBQWEsRUFBRSxTQUFxQjtRQUFyQiwwQkFBQSxFQUFBLGFBQXFCO1FBRW5ELElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQzdCLE1BQU0sSUFBSSxTQUFTLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztTQUN2RDtRQUVELElBQUksT0FBTyxTQUFTLEtBQUssUUFBUSxJQUFJLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUNyRCxTQUFTLEdBQUcsQ0FBQyxDQUFDO1NBQ2Y7UUFFRCxJQUFJLFNBQVMsRUFBRTs7Z0JBRVQsSUFBSSxHQUFHLENBQUcsS0FBSyxNQUFHLEVBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzs7Z0JBQzNCLEdBQUcsR0FBRyxJQUFJLENBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUM7WUFFekQsSUFBSSxHQUFHLENBQUcsR0FBRyxNQUFHLEVBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzVCLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUM7U0FDbEQ7UUFFRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNwQixDQUFDO0NBQ0g7Ozs7Ozs7QUFFRCxTQUFnQixPQUFPLENBQUUsR0FBVyxFQUFFLEdBQWUsRUFBRSxFQUFhO0lBQTlCLG9CQUFBLEVBQUEsT0FBZTtJQUFFLG1CQUFBLEVBQUEsUUFBYTtJQUVsRSxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2xCLEVBQUUsR0FBRyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7O1FBQ2QsQ0FBQyxHQUFHLENBQUMsQ0FBQzs7UUFDSixNQUFNLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNO0lBRS9CLE9BQU8sRUFBRSxDQUFDLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsTUFBTSxLQUFLLEdBQUcsRUFBRTtRQUN0RCxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQztLQUNoQjtJQUVELE9BQU8sR0FBRyxDQUFDO0NBQ1o7Ozs7Ozs7QUFFRCxTQUFnQixRQUFRLENBQUUsR0FBVyxFQUFFLEdBQWUsRUFBRSxFQUFhO0lBQTlCLG9CQUFBLEVBQUEsT0FBZTtJQUFFLG1CQUFBLEVBQUEsUUFBYTtJQUVuRSxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2xCLEVBQUUsR0FBRyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7O1FBRWQsQ0FBQyxHQUFHLENBQUMsQ0FBQzs7UUFDSixNQUFNLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNO0lBRS9CLE9BQU8sRUFBRSxDQUFDLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsTUFBTSxLQUFLLEdBQUcsRUFBRTtRQUN0RCxHQUFHLElBQUksRUFBRSxDQUFDO0tBQ1g7SUFFRCxPQUFPLEdBQUcsQ0FBQztDQUNaOzs7OztBQUVELFNBQWdCLFFBQVEsQ0FBRSxLQUFvQjtJQUU1QyxPQUFPLEtBQUcsS0FBTyxDQUFDO0NBQ25COzs7Ozs7O0FBRUQsU0FBZ0IsR0FBRyxDQUFFLEdBQVcsRUFBRSxHQUFlLEVBQUUsRUFBYTtJQUE5QixvQkFBQSxFQUFBLE9BQWU7SUFBRSxtQkFBQSxFQUFBLFFBQWE7SUFFOUQsR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNsQixFQUFFLEdBQUcsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDOztRQUNkLENBQUMsR0FBRyxDQUFDLENBQUM7O1FBQ0osTUFBTSxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTTs7UUFHM0IsSUFBSSxHQUFHLElBQUk7SUFDZixPQUFPLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRTs7WUFFYixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxNQUFNLElBQUksR0FBRyxLQUFLLEdBQUcsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLE1BQU0sS0FBSyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUV2RixJQUFJLElBQUksRUFBRTtZQUNSLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztTQUMzQjthQUNJO1lBQ0gsR0FBRyxHQUFHLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQzVCO1FBRUQsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDO0tBQ2Q7SUFFRCxPQUFPLEdBQUcsQ0FBQztDQUNaOzs7Ozs7QUFFRCxTQUFnQixPQUFPLENBQUUsS0FBWSxFQUFFLEtBQWlCO0lBQWpCLHNCQUFBLEVBQUEsU0FBaUI7SUFFdEQsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTtRQUN6QixPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7UUFDekIsT0FBTyxPQUFPLENBQ2QsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUNsRSxLQUFLLENBQ0osQ0FBQztLQUNIO0lBRUQsT0FBTyxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztDQUVsQzs7Ozs7O0FBR0QsU0FBZ0IsV0FBVyxDQUFFLEtBQTRCLEVBQUUsR0FBVzs7SUFFcEUsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDcEMsT0FBTyxTQUFTLENBQUM7S0FDbEI7O1FBRUssSUFBSSxHQUFhLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDOztRQUNqQyxNQUFNLEdBQVEsS0FBSyxvQkFBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQUU7O1FBRXRDLEtBQWtCLElBQUEsU0FBQUEsU0FBQSxJQUFJLENBQUEsMEJBQUEsNENBQUU7WUFBbkIsSUFBTSxLQUFHLGlCQUFBO1lBQ1osSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ3RDLE9BQU8sU0FBUyxDQUFDO2FBQ2xCO1lBRUQsTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFHLENBQUMsQ0FBQztTQUN0Qjs7Ozs7Ozs7O0lBRUQsT0FBTyxNQUFNLENBQUM7Q0FDZjs7Ozs7O0FBRUQsU0FBZ0IsR0FBRyxDQUFFLEtBQW9CLEVBQUUsT0FBVztJQUFYLHdCQUFBLEVBQUEsV0FBVztJQUVwRCxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQyxRQUFnQixFQUFFLE9BQWUsSUFBSyxPQUFBLFFBQVEsR0FBRyxPQUFPLEdBQUEsRUFBRSxPQUFPLENBQUMsQ0FBQztDQUN6Rjs7Ozs7O0FBR0QsU0FBZ0IsT0FBTyxDQUFFLEtBQVU7SUFFakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUNuQixPQUFPLEtBQUssQ0FBQztLQUNkOztRQUVLLElBQUksWUFBTyxLQUFLLENBQUM7SUFFdkIsS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRTs7WUFDMUIsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQzs7WUFDakMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDYjtJQUVELE9BQU8sSUFBSSxDQUFDO0NBQ2I7Ozs7OztBQUVELFNBQWdCLFdBQVcsQ0FBRSxVQUFpQixFQUFFLEtBQVU7O1FBRXBELEtBQUssR0FBRyxDQUFDLENBQUM7O1FBQ1IsTUFBTSxHQUFHLFVBQVUsQ0FBQyxNQUFNO0lBRWhDLE9BQU8sRUFBRSxLQUFLLEdBQUcsTUFBTSxFQUFFO1FBQ3ZCLElBQUksU0FBUyxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUN2QyxPQUFPLEtBQUssQ0FBQztTQUNkO0tBQ0Y7SUFFRCxPQUFPLENBQUMsQ0FBQyxDQUFDO0NBQ1g7Ozs7OztBQUdELFNBQWdCLFNBQVMsQ0FBRSxDQUFNLEVBQUUsQ0FBTTtJQUV2QyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDWCxPQUFPLElBQUksQ0FBQztLQUNiO0lBRUQsSUFBSSxFQUFFLE9BQU8sQ0FBQyxLQUFLLFFBQVEsSUFBSSxPQUFPLENBQUMsS0FBSyxRQUFRLENBQUMsRUFBRTtRQUNyRCxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDaEI7O1FBRUssS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDOztRQUN0QixLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFFNUIsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLEtBQUssQ0FBQyxNQUFNLEVBQUU7UUFDakMsT0FBTyxLQUFLLENBQUM7S0FDZDs7O1FBR0csTUFBTSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYztJQUM1QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs7WUFDL0IsR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtZQUMzRCxPQUFPLEtBQUssQ0FBQztTQUNkO0tBQ0Y7SUFFRCxPQUFPLElBQUksQ0FBQztDQUNiOzs7OztBQUVELFNBQWdCLFlBQVksQ0FBRSxNQUFXO0lBRXZDLE9BQU8sTUFBTSxDQUFDLGdCQUFnQixDQUFDO0NBQ2hDOzs7OztBQUVELFNBQWdCLFFBQVEsQ0FBRSxNQUFXO0lBRW5DLE9BQU8sSUFBSSxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7Q0FDaEM7Ozs7O0FBRUQsU0FBZ0IsVUFBVSxDQUFFLE1BQVc7SUFFckMsSUFBSSxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDeEIsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDO0tBQ3BCO0lBRUQsT0FBTyxNQUFNLENBQUM7Q0FDZjtBQUVEO0lBSUUscUJBQW9CLElBQVM7UUFBVCxTQUFJLEdBQUosSUFBSSxDQUFLO1FBRnRCLHFCQUFnQixHQUFZLElBQUksQ0FBQztLQUVQO0lBQ25DLGtCQUFDO0NBQUEsSUFBQTs7Ozs7QUFFRCxTQUFnQixLQUFLLENBQUUsS0FBVTtJQUUvQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQzNELE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFFRCxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUNuQixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFBLENBQUMsQ0FBQyxNQUFNLENBQUM7S0FDL0Q7SUFFRCxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUM7Q0FDckI7Ozs7O0FBRUQsU0FBZ0IsS0FBSyxDQUFFLEtBQVU7SUFFL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUNuQixPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQsT0FBTyxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztDQUMzQjs7Ozs7O0FBRUQsU0FBZ0IsS0FBSyxDQUFFLEtBQVUsRUFBRSxTQUE4QjtJQUUvRCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1FBQ2pDLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7O1FBRUcsTUFBTSxHQUFHLElBQUk7O1FBQ2IsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUVWLE9BQU8sRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sSUFBSSxNQUFNLEVBQUU7UUFDbkMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQ3hDO0lBR0QsT0FBTyxNQUFNLENBQUM7Q0FDZjs7Ozs7O0FBRUQsU0FBZ0IsU0FBUyxDQUFFLEtBQVksRUFBRSxTQUE4Qjs7UUFFakUsQ0FBQyxHQUFHLENBQUMsQ0FBQzs7UUFDSixNQUFNLEdBQVEsRUFBRTtJQUN0QixPQUFPLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRTtRQUMzRCxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3RCO0lBRUQsT0FBTyxNQUFNLENBQUM7Q0FDZjs7Ozs7O0FBRUQsU0FBZ0IsU0FBUyxDQUFFLEtBQVksRUFBRSxTQUE4QjtJQUNyRSxPQUFPLFNBQVMsQ0FBQyxLQUFLLEVBQUUsVUFBQyxJQUFTLEVBQUUsS0FBYSxFQUFFLFVBQWlCLElBQUssT0FBQSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLFVBQVUsQ0FBQyxHQUFBLENBQUMsQ0FBQztDQUMvRzs7Ozs7OztJQ2pWRDtLQXlCQzs7Ozs7O0lBcEJDLCtCQUFTOzs7OztJQUFULFVBQVUsS0FBVSxFQUFFLElBQVk7O1FBRWhDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDbkIsT0FBTyxLQUFLLENBQUM7U0FDZDs7WUFFSyxHQUFHLEdBQWtDLEVBQUU7O1lBRTdDLEtBQW9CLElBQUEsVUFBQUEsU0FBQSxLQUFLLENBQUEsNEJBQUEsK0NBQUU7Z0JBQXRCLElBQU0sS0FBSyxrQkFBQTs7b0JBQ1IsS0FBSyxHQUFRLFdBQVcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDO2dCQUUzQyxJQUFJLFdBQVcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtvQkFDM0IsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQztpQkFDakI7Z0JBRUQsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN4Qjs7Ozs7Ozs7O1FBRUQsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxRQUFDLEVBQUUsR0FBRyxLQUFBLEVBQUUsT0FBTyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFDLENBQUMsQ0FBQztLQUNsRTs7Z0JBeEJGLElBQUksU0FBQztvQkFDSixJQUFJLEVBQUUsU0FBUztpQkFDaEI7O0lBdUJELGtCQUFDO0NBekJEOzs7Ozs7QUNIQTtJQUdBO0tBMEJDOzs7OztJQXJCQywyQkFBUzs7OztJQUFULFVBQVcsS0FBVTtRQUVuQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ25CLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFFRCxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3RCLE9BQU8sU0FBUyxDQUFDO1NBQ2xCOztZQUVHLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBRWxCLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFVO1lBRXZCLElBQUksR0FBRyxHQUFHLEtBQUssRUFBRTtnQkFDZixHQUFHLEdBQUcsS0FBSyxDQUFDO2FBQ2I7U0FDRixDQUFDLENBQUM7UUFFSCxPQUFPLEdBQUcsQ0FBQztLQUNaOztnQkF6QkYsSUFBSSxTQUFDO29CQUNKLElBQUksRUFBRSxLQUFLO2lCQUNaOztJQXdCRCxjQUFDO0NBMUJEOzs7Ozs7QUNIQTtJQUdBO0tBbUJDOzs7OztJQWRDLDRCQUFTOzs7O0lBQVQsVUFBVyxLQUFVO1FBRW5CLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDbkIsT0FBTyxLQUFLLENBQUM7U0FDZDs7WUFFS0MsUUFBSyxHQUFHLEtBQUssQ0FBQyxNQUFNO1FBRTFCLElBQUlBLFFBQUssS0FBSyxDQUFDLEVBQUU7WUFDZixPQUFPLFNBQVMsQ0FBQztTQUNsQjtRQUVELE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHQSxRQUFLLENBQUM7S0FDM0I7O2dCQWxCRixJQUFJLFNBQUM7b0JBQ0osSUFBSSxFQUFFLE1BQU07aUJBQ2I7O0lBaUJELGVBQUM7Q0FuQkQ7Ozs7OztBQ0hBO0lBR0E7S0EwQkM7Ozs7O0lBckJDLDJCQUFTOzs7O0lBQVQsVUFBVyxLQUFVO1FBRW5CLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDbkIsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDdEIsT0FBTyxTQUFTLENBQUM7U0FDbEI7O1lBRUcsR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFFbEIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQVU7WUFFdkIsSUFBSSxHQUFHLEdBQUcsS0FBSyxFQUFFO2dCQUNmLEdBQUcsR0FBRyxLQUFLLENBQUM7YUFDYjtTQUNGLENBQUMsQ0FBQztRQUVILE9BQU8sR0FBRyxDQUFDO0tBQ1o7O2dCQXpCRixJQUFJLFNBQUM7b0JBQ0osSUFBSSxFQUFFLEtBQUs7aUJBQ1o7O0lBd0JELGNBQUM7Q0ExQkQ7Ozs7OztBQ0hBO0lBR0E7S0FLQzs7Ozs7SUFIQywyQkFBUzs7OztJQUFULFVBQVUsS0FBVTtRQUNsQixPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDN0M7O2dCQUpGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUU7O0lBS3JCLGNBQUM7Q0FMRDs7Ozs7O0FDSEE7SUFRQTtLQWdCc0M7O2dCQWhCckMsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixXQUFXO3dCQUNYLE9BQU87d0JBQ1AsUUFBUTt3QkFDUixPQUFPO3dCQUNQLE9BQU87cUJBQ1I7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLFdBQVc7d0JBQ1gsT0FBTzt3QkFDUCxRQUFRO3dCQUNSLE9BQU87d0JBQ1AsT0FBTztxQkFDUjtpQkFDRjs7SUFDb0MsNkJBQUM7Q0FoQnRDOzs7Ozs7QUNSQTtJQUdBO0tBU0M7Ozs7O0lBSkMsNkJBQVM7Ozs7SUFBVCxVQUFXLEtBQVU7UUFFbkIsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDckI7O2dCQVJGLElBQUksU0FBQztvQkFDSixJQUFJLEVBQUUsT0FBTztpQkFDZDs7SUFPRCxnQkFBQztDQVREOzs7Ozs7QUNIQTtJQUdBO0tBY0M7Ozs7O0lBVEMsNEJBQVM7Ozs7SUFBVCxVQUFXLEtBQVU7UUFFbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNuQixPQUFPLEtBQUssQ0FBQztTQUNkOztRQUdELE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ2pCOztnQkFiRixJQUFJLFNBQUM7b0JBQ0osSUFBSSxFQUFFLE1BQU07aUJBQ2I7O0lBWUQsZUFBQztDQWREOzs7Ozs7QUNIQTtJQUdBO0tBYUM7Ozs7O0lBUkMsK0JBQVM7Ozs7SUFBVCxVQUFXLEtBQVU7UUFFbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNuQixPQUFPLEtBQUssQ0FBQztTQUNkO1FBRUQsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0tBQ3pDOztnQkFaRixJQUFJLFNBQUM7b0JBQ0osSUFBSSxFQUFFLFNBQVM7aUJBQ2hCOztJQVdELGtCQUFDO0NBYkQ7Ozs7OztBQ0hBO0lBR0E7S0FjQzs7Ozs7SUFUQyw0QkFBUzs7OztJQUFULFVBQVcsS0FBVTtRQUVuQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ25CLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7O1FBR0QsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztLQUNoQzs7Z0JBYkYsSUFBSSxTQUFDO29CQUNKLElBQUksRUFBRSxNQUFNO2lCQUNiOztJQVlELGVBQUM7Q0FkRDs7Ozs7O0FDSEE7SUFHQTtLQWFDOzs7Ozs7SUFSQyw0QkFBUzs7Ozs7SUFBVCxVQUFXLEtBQVUsRUFBRSxTQUFzQjtRQUF0QiwwQkFBQSxFQUFBLGNBQXNCO1FBRTNDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDbkIsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUM5Qjs7Z0JBWkYsSUFBSSxTQUFDO29CQUNKLElBQUksRUFBRSxNQUFNO2lCQUNiOztJQVdELGVBQUM7Q0FiRDs7Ozs7O0FDSEE7SUFHQTtLQWFDOzs7OztJQVJDLDRCQUFTOzs7O0lBQVQsVUFBVyxLQUFVO1FBRW5CLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDbkIsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ3JDOztnQkFaRixJQUFJLFNBQUM7b0JBQ0osSUFBSSxFQUFFLE1BQU07aUJBQ2I7O0lBV0QsZUFBQztDQWJEOzs7Ozs7QUNIQTtJQUdBO0tBd0JDOzs7OztJQW5CQyw0QkFBUzs7OztJQUFULFVBQVcsS0FBVTtRQUVuQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzNDLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFFRCxJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsRUFBRTs7Z0JBQ2pCLGdCQUFjLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQztZQUN4QyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFjLENBQUMsRUFBRTtnQkFDNUIsT0FBTyxnQkFBYyxDQUFDO2FBQ3ZCO1lBRUQsT0FBTyxnQkFBYyxDQUFDLE1BQU0sQ0FBQyxVQUFDLEtBQVUsRUFBRSxLQUFhO2dCQUNyRCxPQUFBLFdBQVcsQ0FBQyxnQkFBYyxFQUFFLEtBQUssQ0FBQyxLQUFLLEtBQUs7YUFBQSxDQUM3QyxDQUFDO1NBQ0g7UUFFRCxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQyxLQUFVLEVBQUUsS0FBYSxJQUFLLE9BQUEsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxLQUFLLEdBQUEsQ0FBQyxDQUFDO0tBQ3BGOztnQkF2QkYsSUFBSSxTQUFDO29CQUNKLElBQUksRUFBRSxNQUFNO2lCQUNiOztJQXNCRCxlQUFDO0NBeEJEOzs7Ozs7QUNIQTtJQUdBO0tBeUJDOzs7Ozs7SUFwQkMsK0JBQVM7Ozs7O0lBQVQsVUFBVyxLQUFVO1FBQUUsY0FBYzthQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7WUFBZCw2QkFBYzs7UUFFbkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMzQyxPQUFPLEtBQUssQ0FBQztTQUNkO1FBRUQsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLEVBQUU7O2dCQUNqQixjQUFjLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQztZQUN4QyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxFQUFFO2dCQUM1QixPQUFPLGNBQWMsQ0FBQzthQUN2QjtZQUVELE9BQU8sY0FBYyxDQUFDLE1BQU0sQ0FBQyxVQUFDLEtBQVU7Z0JBQ3RDLE9BQUEsV0FBVyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7YUFBQSxDQUNoQyxDQUFDO1NBQ0g7UUFHRCxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQyxLQUFVLElBQUssT0FBQSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFBLENBQUMsQ0FBQztLQUNqRTs7Z0JBeEJGLElBQUksU0FBQztvQkFDSixJQUFJLEVBQUUsU0FBUztpQkFDaEI7O0lBdUJELGtCQUFDO0NBekJEOzs7Ozs7QUNIQTtJQUdBO0tBYUM7Ozs7OztJQVJDLDJCQUFTOzs7OztJQUFULFVBQVcsS0FBVSxFQUFFLEVBQVk7UUFFakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRTtZQUMxQixPQUFPLEtBQUssQ0FBQztTQUNkO1FBRUQsT0FBTyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ3RCOztnQkFaRixJQUFJLFNBQUM7b0JBQ0osSUFBSSxFQUFFLEtBQUs7aUJBQ1o7O0lBV0QsY0FBQztDQWJEOzs7Ozs7O0lDQUE7S0E2QkM7Ozs7Ozs7Ozs7SUFyQkMsNkJBQVM7Ozs7OztJQUFULFVBQVcsS0FBVSxFQUFFLEVBQU87UUFFNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNuQixPQUFPLEtBQUssQ0FBQTtTQUNiO1FBRUQsSUFBSSxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDbEIsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3pCO2FBQ0ksSUFBSSxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDZCxJQUFBLGtCQUFpQixFQUFoQixhQUFHLEVBQUUsZUFBVztZQUN2QixPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQyxJQUFTLElBQUssT0FBQSxXQUFXLENBQUMsSUFBSSxFQUFFLEtBQUcsQ0FBQyxLQUFLLE9BQUssR0FBQSxDQUFDLENBQUM7U0FDdEU7YUFDSSxJQUFJLEVBQUUsRUFBRTtZQUNYLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFDLElBQVMsSUFBSyxPQUFBLElBQUksS0FBSyxFQUFFLEdBQUEsQ0FBQyxDQUFDO1NBQ2pEO2FBQ0k7WUFDSCxPQUFPLEtBQUssQ0FBQztTQUNkO0tBRUY7O2dCQTVCRixJQUFJLFNBQUM7b0JBQ0osSUFBSSxFQUFFLE9BQU87aUJBQ2Q7O0lBMkJELGdCQUFDO0NBN0JEOzs7Ozs7O0lDQ0E7S0FzREM7Ozs7Ozs7SUFqRGdCLHVCQUFJOzs7Ozs7SUFBbkIsVUFDRSxLQUFZLEVBQ1osU0FBOEIsRUFDOUIsWUFBa0I7O1lBR2QsS0FBSyxHQUFHLEtBQUs7O1lBQ2IsTUFBVzs7WUFDWCxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRVYsT0FBTyxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQ25DLEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUN2QztRQUVELElBQUksS0FBSyxFQUFFO1lBQ1QsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNuQjtRQUVELElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxJQUFJLE9BQU8sWUFBWSxLQUFLLFdBQVcsRUFBRTtZQUN4RSxNQUFNLEdBQUcsWUFBWSxDQUFDO1NBQ3ZCO1FBRUQsT0FBTyxNQUFNLENBQUM7S0FDZjs7Ozs7OztJQUVELHNDQUFTOzs7Ozs7SUFBVCxVQUNFLEtBQVUsRUFDVixTQUEyQyxFQUMzQyxZQUFrQjtRQUdsQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ25CLE9BQU8sS0FBSyxDQUFBO1NBQ2I7UUFFRCxJQUFJLFVBQVUsQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUN6QixPQUFPLGtCQUFrQixDQUFDLElBQUksQ0FBQyxLQUFLLHFCQUF1QixTQUFTLElBQUUsWUFBWSxDQUFDLENBQUM7U0FDckY7YUFDSSxJQUFJLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUNyQixJQUFBLDhDQUFtQyxFQUFsQyxhQUFHLEVBQUUsZUFBNkI7WUFDekMsT0FBTyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFVBQUMsSUFBUyxJQUFLLE9BQUEsV0FBVyxDQUFDLElBQUksRUFBRSxLQUFHLENBQUMsS0FBSyxPQUFLLEdBQUEsRUFBRSxZQUFZLENBQUMsQ0FBQztTQUN0RzthQUNJLElBQUksU0FBUyxFQUFFO1lBQ2xCLE9BQU8sa0JBQWtCLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxVQUFDLElBQUksSUFBSyxPQUFBLElBQUksd0JBQVUsU0FBUyxFQUFBLEdBQUEsRUFBRSxZQUFZLENBQUMsQ0FBQztTQUN4RjthQUNJO1lBQ0gsT0FBTyxLQUFLLENBQUM7U0FDZDtLQUNGOztnQkFyREYsSUFBSSxTQUFDO29CQUNKLElBQUksRUFBRSxnQkFBZ0I7aUJBQ3ZCOztJQW9ERCx5QkFBQztDQXRERDs7Ozs7O0FDSkE7SUFFQTtLQWVDOzs7Ozs7OztJQVZDLDZCQUFTOzs7Ozs7O0lBQVQsVUFBVyxNQUFXLEVBQUUsSUFBZ0IsRUFBRSxLQUFpQixFQUFFLElBQWdCO1FBQXJELHFCQUFBLEVBQUEsUUFBZ0I7UUFBRSxzQkFBQSxFQUFBLFNBQWlCO1FBQUUscUJBQUEsRUFBQSxRQUFnQjs7WUFFckUsS0FBSyxHQUFhLEVBQUU7UUFDMUIsS0FBSyxJQUFJLFFBQU0sR0FBRyxDQUFDLEVBQUUsUUFBTSxHQUFHLElBQUksRUFBRSxFQUFFLFFBQU0sRUFBRTtZQUM1QyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2xCLEtBQUssSUFBSSxJQUFJLENBQUM7U0FDZjtRQUVELE9BQU8sS0FBSyxDQUFDO0tBQ2Q7O2dCQWRGLElBQUksU0FBQztvQkFDSixJQUFJLEVBQUUsT0FBTztpQkFDZDs7SUFhRCxnQkFBQztDQWZEOzs7Ozs7QUNGQTtJQUdBO0tBZUM7Ozs7OztJQVZDLDZCQUFTOzs7OztJQUFULFVBQVcsS0FBVSxFQUFFLEdBQVc7UUFFaEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUMzQixPQUFPLEtBQUssQ0FBQztTQUNkO1FBRUQsT0FBTyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQUMsS0FBVTtZQUMxQixPQUFPLFdBQVcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDaEMsQ0FBQyxDQUFDO0tBQ0o7O2dCQWRGLElBQUksU0FBQztvQkFDSixJQUFJLEVBQUUsT0FBTztpQkFDZDs7SUFhRCxnQkFBQztDQWZEOzs7Ozs7O0lDQUE7S0FhQzs7Ozs7SUFSQywrQkFBUzs7OztJQUFULFVBQVcsS0FBVTtRQUVuQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ25CLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFFRCxPQUFPQyxTQUFJLEtBQUssRUFBRSxPQUFPLEVBQUUsQ0FBQztLQUM3Qjs7Z0JBWkYsSUFBSSxTQUFDO29CQUNKLElBQUksRUFBRSxTQUFTO2lCQUNoQjs7SUFXRCxrQkFBQztDQWJEOzs7Ozs7O0lDQUE7S0ErRUM7Ozs7OztJQTFFZ0Isb0JBQVE7Ozs7O0lBQXZCLFVBQXlCLENBQU0sRUFBRSxDQUFNO1FBRXJDLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxFQUFFO1lBQzFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3ZDOztZQUVLLE1BQU0sR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDOztZQUN0QixNQUFNLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUU1QixJQUFJLE9BQU8sQ0FBQyxLQUFLLFFBQVEsSUFBSSxPQUFPLENBQUMsS0FBSyxRQUFRLEtBQUssS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFOztnQkFDaEYsTUFBTSxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUU7O2dCQUN4QixNQUFNLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRTtZQUM5QixPQUFPLENBQUMsTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUMzRDtRQUVELE9BQU8sQ0FBQyxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQzNEOzs7Ozs7SUFFRCwrQkFBUzs7Ozs7SUFBVCxVQUFXLEtBQVUsRUFBRSxNQUFpQjtRQUFqQix1QkFBQSxFQUFBLFlBQWlCO1FBRXRDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDbkIsT0FBTyxLQUFLLENBQUM7U0FDZDs7WUFFSyxhQUFhLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQzs7UUFHckMsSUFBSSxDQUFDLGFBQWEsS0FBSyxhQUFhLElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsRUFBRTs7Z0JBRXRELGVBQWUsR0FBVyxhQUFhLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU07O2dCQUM1RCxLQUFLLEdBQUcsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDOztnQkFDcEMsTUFBSSxJQUFJLEtBQUssS0FBSyxHQUFHLENBQUM7O1lBRzVCLElBQUksQ0FBQyxlQUFlLElBQUksZUFBZSxLQUFLLEdBQUcsSUFBSSxlQUFlLEtBQUssR0FBRyxFQUFFO2dCQUMxRSxPQUFPQSxTQUFJLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBQyxDQUFNLEVBQUUsQ0FBTTs7d0JBQzlCLFVBQVUsR0FBRyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQzdDLE9BQU8sTUFBSSxHQUFHLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztpQkFDeEMsQ0FBQyxDQUFDO2FBQ0o7aUJBQ0k7OztvQkFFRyxVQUFRLEdBQUcsQ0FBQyxLQUFLLEtBQUssR0FBRyxJQUFJLE1BQUksSUFBSSxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLGVBQWU7Z0JBRXRGLE9BQU9BLFNBQUksS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFDLENBQU0sRUFBRSxDQUFNOzt3QkFFOUIsVUFBVSxHQUFHLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFVBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxVQUFRLENBQUMsQ0FBQztvQkFDakUsT0FBTyxNQUFJLEdBQUcsQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO2lCQUN4QyxDQUFDLENBQUM7YUFFSjtTQUNGO2FBQ0k7WUFFSCxPQUFPQSxTQUFJLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBQyxDQUFNLEVBQUUsQ0FBTTtnQkFFcEMsS0FBSyxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUU7O3dCQUN4QyxLQUFLLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDOzt3QkFDOUIsSUFBSSxJQUFJLEtBQUssS0FBSyxHQUFHLENBQUM7O3dCQUN0QixRQUFRLEdBQUcsQ0FBQyxLQUFLLEtBQUssR0FBRyxJQUFJLElBQUksSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7O3dCQUVwRSxVQUFVLEdBQUcsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDOzt3QkFDM0QsVUFBVSxHQUFHLElBQUksR0FBRyxDQUFDLFVBQVUsR0FBRyxVQUFVO29CQUVsRCxJQUFJLFVBQVUsS0FBSyxDQUFDLEVBQUU7d0JBQ3BCLE9BQU8sVUFBVSxDQUFDO3FCQUNuQjtpQkFDRjtnQkFFRCxPQUFPLENBQUMsQ0FBQzthQUNWLENBQUMsQ0FBQztTQUVKO0tBQ0Y7O2dCQTlFRixJQUFJLFNBQUM7b0JBQ0osSUFBSSxFQUFFLFNBQVM7aUJBQ2hCOztJQTZFRCxrQkFBQztDQS9FRDs7Ozs7O0FDSEE7SUFJQTtLQVNDOzs7OztJQUpDLDZCQUFTOzs7O0lBQVQsVUFBVyxLQUFVO1FBRW5CLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3JCOztnQkFSRixJQUFJLFNBQUM7b0JBQ0osSUFBSSxFQUFFLE9BQU87aUJBQ2Q7O0lBT0QsZ0JBQUM7Q0FURDs7Ozs7O0FDSkE7SUFJQTtLQW9CQzs7Ozs7O0lBZkMsNEJBQVM7Ozs7O0lBQVQsVUFBVyxLQUFVLEVBQUUsU0FBbUI7UUFFeEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNqQyxPQUFPLEtBQUssQ0FBQztTQUNkOztZQUVHLE1BQU0sR0FBRyxLQUFLOztZQUNkLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFVixPQUFPLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDcEMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3hDO1FBRUQsT0FBTyxNQUFNLENBQUM7S0FDZjs7Z0JBbkJGLElBQUksU0FBQztvQkFDSixJQUFJLEVBQUUsTUFBTTtpQkFDYjs7SUFrQkQsZUFBQztDQXBCRDs7Ozs7O0FDSkE7SUFHQTtLQVNDOzs7Ozs7SUFKQyw2QkFBUzs7Ozs7SUFBVCxVQUFXLEtBQVUsRUFBRSxTQUE4QjtRQUVuRCxPQUFPLEtBQUssQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7S0FDaEM7O2dCQVJGLElBQUksU0FBQztvQkFDSixJQUFJLEVBQUUsT0FBTztpQkFDZDs7SUFPRCxnQkFBQztDQVREOzs7Ozs7QUNIQTtJQUdBO0tBU0M7Ozs7O0lBSkMsK0JBQVM7Ozs7SUFBVCxVQUFXLEtBQVU7UUFFbkIsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDdkI7O2dCQVJGLElBQUksU0FBQztvQkFDSixJQUFJLEVBQUUsU0FBUztpQkFDaEI7O0lBT0Qsa0JBQUM7Q0FURDs7Ozs7O0FDSEE7SUFHQTtLQWFDOzs7Ozs7SUFSQyw0QkFBUzs7Ozs7SUFBVCxVQUFXLEtBQVUsRUFBRSxRQUFpQjtRQUV0QyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ25CLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFFRCxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFFBQVEsSUFBSSxDQUFDLENBQUMsQ0FBQztLQUN0Qzs7Z0JBWkYsSUFBSSxTQUFDO29CQUNKLElBQUksRUFBRSxNQUFNO2lCQUNiOztJQVdELGVBQUM7Q0FiRDs7Ozs7O0FDSEE7SUFHQTtLQWFDOzs7Ozs7SUFSQyw0QkFBUzs7Ozs7SUFBVCxVQUFXLEtBQVUsRUFBRSxRQUFpQjtRQUV0QyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ25CLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFFRCxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxJQUFJLENBQUMsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDaEQ7O2dCQVpGLElBQUksU0FBQztvQkFDSixJQUFJLEVBQUUsTUFBTTtpQkFDYjs7SUFXRCxlQUFDO0NBYkQ7Ozs7OztBQ0hBO0lBR0E7S0FhQzs7Ozs7SUFSQyw0QkFBUzs7OztJQUFULFVBQVUsS0FBVTtRQUVsQixJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN2QixPQUFPLEtBQUssQ0FBQztTQUNkO1FBRUQsT0FBTyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDeEI7O2dCQVpGLElBQUksU0FBQztvQkFDSixJQUFJLEVBQUUsTUFBTTtpQkFDYjs7SUFXRCxlQUFDO0NBYkQ7Ozs7OztBQ0hBO0lBR0E7S0FlQzs7Ozs7O0lBVkMsNkJBQVM7Ozs7O0lBQVQsVUFBVSxLQUFVLEVBQUUsSUFBZ0I7UUFBaEIscUJBQUEsRUFBQSxRQUFnQjtRQUVwQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ25CLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFFRCxPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQUMsS0FBVSxFQUFFLENBQVM7WUFDekQsT0FBTyxDQUFDLEdBQUcsSUFBSSxHQUFHLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ25ELENBQUMsQ0FBQyxDQUFDO0tBQ0w7O2dCQWRGLElBQUksU0FBQztvQkFDSixJQUFJLEVBQUUsT0FBTztpQkFDZDs7SUFhRCxnQkFBQztDQWZEOzs7Ozs7QUNIQTtJQUdBO0tBcUJDOzs7OztJQWxCQywrQkFBUzs7OztJQUFULFVBQVcsS0FBVTs7WUFFYixNQUFNLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQztRQUNsQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQzlCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFFRCxJQUFJLE1BQU0sRUFBRTs7Z0JBQ0osU0FBUyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUM7WUFDbkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRTtnQkFDdkIsT0FBTyxTQUFTLENBQUM7YUFDbEI7WUFFRCxPQUFPLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDOUI7UUFFRCxPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztLQUNuQzs7Z0JBcEJGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUU7O0lBcUJ6QixrQkFBQztDQXJCRDs7Ozs7O0FDSEE7SUFHQTtLQTBCQzs7Ozs7O0lBckJDLG9DQUFTOzs7OztJQUFULFVBQVcsQ0FBTyxFQUFFLENBQU87UUFFekIsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3BELE9BQU8sRUFBRSxDQUFDO1NBQ1g7UUFFRCxJQUFJLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRTs7Z0JBQ2IsU0FBUyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRTtnQkFDdkIsT0FBTyxFQUFFLENBQUM7YUFDWDtZQUVELE9BQU8sU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFDLFlBQW1CLEVBQUUsS0FBVSxJQUFLLE9BQUEsWUFBWSxDQUFDLE1BQU0sQ0FDOUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FDdkYsR0FBQSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQ1I7UUFFRCxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBQyxZQUFtQixFQUFFLEtBQVUsSUFBSyxPQUFBLFlBQVksQ0FBQyxNQUFNLENBQ3RFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEtBQUssR0FBRyxFQUFFLENBQzdFLEdBQUEsRUFBRSxFQUFFLENBQUMsQ0FBQTtLQUNQOztnQkF6QkYsSUFBSSxTQUFDO29CQUNKLElBQUksRUFBRSxjQUFjO2lCQUNyQjs7SUF3QkQsdUJBQUM7Q0ExQkQ7Ozs7OztBQ0hBO0lBR0E7S0F5QkM7Ozs7OztJQXBCQyw2QkFBUzs7Ozs7SUFBVCxVQUFXLENBQU8sRUFBRSxDQUFPO1FBRXpCLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNwRCxPQUFPLEVBQUUsQ0FBQztTQUNYO1FBRUQsSUFBSSxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUU7O2dCQUNiLFNBQVMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUU7Z0JBQ3ZCLE9BQU8sRUFBRSxDQUFDO2FBQ1g7WUFFRCxPQUFPLEVBQUU7aUJBQ04sTUFBTSxDQUFDLFNBQVMsQ0FBQztpQkFDakIsTUFBTSxDQUFDLENBQUMsQ0FBQztpQkFDVCxNQUFNLENBQUMsVUFBQyxLQUFVLEVBQUUsS0FBYSxFQUFFLEtBQVksSUFBSyxPQUFBLFdBQVcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssS0FBSyxHQUFBLENBQUMsQ0FBQztTQUM3RjtRQUVELE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQUMsS0FBVSxFQUFFLEtBQWEsRUFBRSxLQUFZLElBQUssT0FBQSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssR0FBQSxDQUFDLENBQUM7S0FDbkg7O2dCQXhCRixJQUFJLFNBQUM7b0JBQ0osSUFBSSxFQUFFLE9BQU87aUJBQ2Q7O0lBdUJELGdCQUFDO0NBekJEOzs7Ozs7QUNIQTtJQUdBO0tBYUM7Ozs7OztJQVJDLGlDQUFTOzs7OztJQUFULFVBQVcsS0FBVSxFQUFFLFNBQStCO1FBRXBELElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3ZDLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFFRCxPQUFPLFNBQVMsQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7S0FDcEM7O2dCQVpGLElBQUksU0FBQztvQkFDSixJQUFJLEVBQUUsV0FBVztpQkFDbEI7O0lBV0Qsb0JBQUM7Q0FiRDs7Ozs7O0FDSEE7SUFHQTtLQWFDOzs7Ozs7SUFSQyxpQ0FBUzs7Ozs7SUFBVCxVQUFXLEtBQVUsRUFBRSxTQUErQjtRQUVwRCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUN2QyxPQUFPLEtBQUssQ0FBQztTQUNkO1FBRUQsT0FBTyxTQUFTLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0tBQ3BDOztnQkFaRixJQUFJLFNBQUM7b0JBQ0osSUFBSSxFQUFFLFdBQVc7aUJBQ2xCOztJQVdELG9CQUFDO0NBYkQ7Ozs7OztBQ0hBO0lBZ0NBO0tBOERrQzs7Z0JBOURqQyxRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLFNBQVM7d0JBQ1QsUUFBUTt3QkFDUixXQUFXO3dCQUNYLFFBQVE7d0JBQ1IsUUFBUTt3QkFDUixRQUFRO3dCQUNSLFFBQVE7d0JBQ1IsV0FBVzt3QkFDWCxPQUFPO3dCQUNQLFNBQVM7d0JBQ1QsU0FBUzt3QkFDVCxTQUFTO3dCQUNULFdBQVc7d0JBQ1gsV0FBVzt3QkFDWCxTQUFTO3dCQUNULFFBQVE7d0JBQ1IsU0FBUzt3QkFDVCxXQUFXO3dCQUNYLFFBQVE7d0JBQ1IsUUFBUTt3QkFDUixRQUFRO3dCQUNSLFNBQVM7d0JBQ1QsV0FBVzt3QkFDWCxrQkFBa0I7d0JBQ2xCLGdCQUFnQjt3QkFDaEIsU0FBUzt3QkFDVCxhQUFhO3dCQUNiLGFBQWE7cUJBQ2Q7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLFNBQVM7d0JBQ1QsUUFBUTt3QkFDUixXQUFXO3dCQUNYLFFBQVE7d0JBQ1IsUUFBUTt3QkFDUixRQUFRO3dCQUNSLFFBQVE7d0JBQ1IsV0FBVzt3QkFDWCxPQUFPO3dCQUNQLFNBQVM7d0JBQ1QsU0FBUzt3QkFDVCxTQUFTO3dCQUNULFdBQVc7d0JBQ1gsV0FBVzt3QkFDWCxTQUFTO3dCQUNULFFBQVE7d0JBQ1IsU0FBUzt3QkFDVCxXQUFXO3dCQUNYLFFBQVE7d0JBQ1IsUUFBUTt3QkFDUixRQUFRO3dCQUNSLFNBQVM7d0JBQ1QsV0FBVzt3QkFDWCxrQkFBa0I7d0JBQ2xCLGdCQUFnQjt3QkFDaEIsU0FBUzt3QkFDVCxhQUFhO3dCQUNiLGFBQWE7cUJBQ2Q7aUJBQ0Y7O0lBQ2dDLHlCQUFDO0NBOURsQzs7Ozs7O0FDaENBO0lBR0E7S0FTQzs7Ozs7O0lBSkMsaUNBQVM7Ozs7O0lBQVQsVUFBVyxLQUFVLEVBQUUsTUFBVztRQUVoQyxPQUFPLEtBQUssR0FBRyxNQUFNLENBQUM7S0FDdkI7O2dCQVJGLElBQUksU0FBQztvQkFDSixJQUFJLEVBQUUsU0FBUztpQkFDaEI7O0lBT0Qsb0JBQUM7Q0FURCxJQVNDOztJQUVEO0tBU0M7Ozs7OztJQUpDLHdDQUFTOzs7OztJQUFULFVBQVcsS0FBVSxFQUFFLE1BQVc7UUFFaEMsT0FBTyxLQUFLLElBQUksTUFBTSxDQUFDO0tBQ3hCOztnQkFSRixJQUFJLFNBQUM7b0JBQ0osSUFBSSxFQUFFLGdCQUFnQjtpQkFDdkI7O0lBT0QsMkJBQUM7Q0FURCxJQVNDOztJQUVEO0tBU0M7Ozs7OztJQUpDLDhCQUFTOzs7OztJQUFULFVBQVcsS0FBVSxFQUFFLE1BQVc7UUFFaEMsT0FBTyxLQUFLLEdBQUcsTUFBTSxDQUFDO0tBQ3ZCOztnQkFSRixJQUFJLFNBQUM7b0JBQ0osSUFBSSxFQUFFLE1BQU07aUJBQ2I7O0lBT0QsaUJBQUM7Q0FURCxJQVNDOztJQUVEO0tBU0M7Ozs7OztJQUpDLHFDQUFTOzs7OztJQUFULFVBQVcsS0FBVSxFQUFFLE1BQVc7UUFFaEMsT0FBTyxLQUFLLElBQUksTUFBTSxDQUFDO0tBQ3hCOztnQkFSRixJQUFJLFNBQUM7b0JBQ0osSUFBSSxFQUFFLGFBQWE7aUJBQ3BCOztJQU9ELHdCQUFDO0NBVEQsSUFTQzs7SUFFRDtLQVNDOzs7Ozs7SUFKQywrQkFBUzs7Ozs7SUFBVCxVQUFXLEtBQVUsRUFBRSxNQUFXO1FBRWhDLE9BQU8sS0FBSyxJQUFJLE1BQU0sQ0FBQztLQUN4Qjs7Z0JBUkYsSUFBSSxTQUFDO29CQUNKLElBQUksRUFBRSxPQUFPO2lCQUNkOztJQU9ELGtCQUFDO0NBVEQsSUFTQzs7SUFFRDtLQVNDOzs7Ozs7SUFKQyxrQ0FBUzs7Ozs7SUFBVCxVQUFXLEtBQVUsRUFBRSxNQUFXO1FBRWhDLE9BQU8sS0FBSyxJQUFJLE1BQU0sQ0FBQztLQUN4Qjs7Z0JBUkYsSUFBSSxTQUFDO29CQUNKLElBQUksRUFBRSxVQUFVO2lCQUNqQjs7SUFPRCxxQkFBQztDQVRELElBU0M7O0lBRUQ7S0FTQzs7Ozs7O0lBSkMsbUNBQVM7Ozs7O0lBQVQsVUFBVyxLQUFVLEVBQUUsTUFBVztRQUVoQyxPQUFPLEtBQUssS0FBSyxNQUFNLENBQUM7S0FDekI7O2dCQVJGLElBQUksU0FBQztvQkFDSixJQUFJLEVBQUUsV0FBVztpQkFDbEI7O0lBT0Qsc0JBQUM7Q0FURCxJQVNDOztJQUVEO0tBU0M7Ozs7OztJQUpDLHNDQUFTOzs7OztJQUFULFVBQVcsS0FBVSxFQUFFLE1BQVc7UUFFaEMsT0FBTyxLQUFLLEtBQUssTUFBTSxDQUFDO0tBQ3pCOztnQkFSRixJQUFJLFNBQUM7b0JBQ0osSUFBSSxFQUFFLGNBQWM7aUJBQ3JCOztJQU9ELHlCQUFDO0NBVEQ7Ozs7OztBQ2hGQTtJQVlBO0tBU0M7Ozs7O0lBSkMsOEJBQVM7Ozs7SUFBVCxVQUFXLEtBQVU7UUFFbkIsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDdEI7O2dCQVJGLElBQUksU0FBQztvQkFDSixJQUFJLEVBQUUsUUFBUTtpQkFDZjs7SUFPRCxpQkFBQztDQVRELElBU0M7O0lBRUQ7S0FTQzs7Ozs7SUFKQyxtQ0FBUzs7OztJQUFULFVBQVcsS0FBVTtRQUVuQixPQUFPLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUMzQjs7Z0JBUkYsSUFBSSxTQUFDO29CQUNKLElBQUksRUFBRSxhQUFhO2lCQUNwQjs7SUFPRCxzQkFBQztDQVRELElBU0M7O0lBRUQ7S0FTQzs7Ozs7SUFKQyw2QkFBUzs7OztJQUFULFVBQVcsS0FBVTtRQUVuQixPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNyQjs7Z0JBUkYsSUFBSSxTQUFDO29CQUNKLElBQUksRUFBRSxPQUFPO2lCQUNkOztJQU9ELGdCQUFDO0NBVEQsSUFTQzs7SUFFRDtLQVNDOzs7OztJQUpDLGtDQUFTOzs7O0lBQVQsVUFBVyxLQUFVO1FBRW5CLE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQzFCOztnQkFSRixJQUFJLFNBQUM7b0JBQ0osSUFBSSxFQUFFLFlBQVk7aUJBQ25COztJQU9ELHFCQUFDO0NBVEQsSUFTQzs7SUFFRDtLQVNDOzs7OztJQUpDLGdDQUFTOzs7O0lBQVQsVUFBVyxLQUFVO1FBRW5CLE9BQU8sUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3hCOztnQkFSRixJQUFJLFNBQUM7b0JBQ0osSUFBSSxFQUFFLFVBQVU7aUJBQ2pCOztJQU9ELG1CQUFDO0NBVEQsSUFTQzs7SUFFRDtLQVNDOzs7OztJQUpDLGdDQUFTOzs7O0lBQVQsVUFBVyxLQUFVO1FBRW5CLE9BQU8sUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3hCOztnQkFSRixJQUFJLFNBQUM7b0JBQ0osSUFBSSxFQUFFLFVBQVU7aUJBQ2pCOztJQU9ELG1CQUFDO0NBVEQsSUFTQzs7SUFHRDtLQVNDOzs7OztJQUpDLCtCQUFTOzs7O0lBQVQsVUFBVyxLQUFVO1FBRW5CLE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3ZCOztnQkFSRixJQUFJLFNBQUM7b0JBQ0osSUFBSSxFQUFFLFNBQVM7aUJBQ2hCOztJQU9ELGtCQUFDO0NBVEQsSUFTQzs7SUFFRDtLQVNDOzs7OztJQUpDLGdDQUFTOzs7O0lBQVQsVUFBVyxLQUFVO1FBRW5CLE9BQU8sUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3hCOztnQkFSRixJQUFJLFNBQUM7b0JBQ0osSUFBSSxFQUFFLFVBQVU7aUJBQ2pCOztJQU9ELG1CQUFDO0NBVEQsSUFTQzs7SUFHRDtLQVNDOzs7OztJQUpDLGlDQUFTOzs7O0lBQVQsVUFBVyxLQUFVO1FBRW5CLE9BQU8sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDNUI7O2dCQVJGLElBQUksU0FBQztvQkFDSixJQUFJLEVBQUUsV0FBVztpQkFDbEI7O0lBT0Qsb0JBQUM7Q0FURDs7Ozs7O0FDdEdBO0lBeUJBO0tBd0NvQzs7Z0JBeENuQyxRQUFRLFNBQUM7b0JBQ04sWUFBWSxFQUFFO3dCQUNWLGFBQWE7d0JBQ2Isb0JBQW9CO3dCQUNwQixVQUFVO3dCQUNWLGlCQUFpQjt3QkFDakIsV0FBVzt3QkFDWCxjQUFjO3dCQUNkLGVBQWU7d0JBQ2Ysa0JBQWtCO3dCQUNsQixTQUFTO3dCQUNULFVBQVU7d0JBQ1YsZUFBZTt3QkFDZixjQUFjO3dCQUNkLFlBQVk7d0JBQ1osWUFBWTt3QkFDWixXQUFXO3dCQUNYLFlBQVk7d0JBQ1osYUFBYTtxQkFDaEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLGFBQWE7d0JBQ2Isb0JBQW9CO3dCQUNwQixVQUFVO3dCQUNWLGlCQUFpQjt3QkFDakIsV0FBVzt3QkFDWCxjQUFjO3dCQUNkLGVBQWU7d0JBQ2Ysa0JBQWtCO3dCQUNsQixTQUFTO3dCQUNULFVBQVU7d0JBQ1YsZUFBZTt3QkFDZixjQUFjO3dCQUNkLFlBQVk7d0JBQ1osWUFBWTt3QkFDWixXQUFXO3dCQUNYLFlBQVk7d0JBQ1osYUFBYTtxQkFDaEI7aUJBQ0o7O0lBQ2tDLDJCQUFDO0NBeENwQzs7Ozs7O0FDekJBO0lBTUE7S0EwREM7Ozs7Ozs7O0lBM0NHLDZCQUFTOzs7Ozs7O0lBQVQsVUFBVSxLQUFVLEVBQUUsT0FBbUIsRUFBRSxJQUFvQixFQUFFLEVBQWE7UUFBeEQsd0JBQUEsRUFBQSxXQUFtQjtRQUFFLHFCQUFBLEVBQUEsVUFBb0I7UUFFM0QsSUFBSSxFQUFFLGNBQWMsQ0FBQyxLQUFLLENBQUM7WUFDbkIsY0FBYyxDQUFDLE9BQU8sQ0FBQztZQUN2QixTQUFTLENBQUMsT0FBTyxDQUFDO1lBQ2xCLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFO1lBQzFCLE9BQU8sS0FBSyxDQUFDO1NBQ2hCOztZQUVHLEtBQUssR0FBRyxLQUFLOztZQUNiLElBQUksR0FBRyxJQUFJO1FBQ2YsT0FBTyxJQUFJLEtBQUssR0FBRyxFQUFFO1lBQ2pCLEtBQUssSUFBSSxJQUFJLENBQUM7WUFDZCxJQUFJLHNCQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFDLENBQUM7U0FDeEM7UUFFRCxJQUFJLEVBQUUsRUFBRTs7Z0JBQ0UsTUFBTSxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDOztnQkFFOUIsTUFBTSxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLENBQUM7WUFFM0UsT0FBTyxTQUFTLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztTQUM3QztRQUVELEtBQUssSUFBTSxHQUFHLElBQUksU0FBUyxDQUFDLE9BQU8sRUFBRTs7Z0JBQzNCLE1BQU0sR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztZQUNyQyxJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsR0FBRyxFQUFFOztvQkFFZCxNQUFNLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxFQUFFLE9BQU8sQ0FBQztnQkFFM0UsT0FBTyxTQUFTLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQzthQUM5QztTQUNKO0tBQ0o7Ozs7OztJQUVNLHNCQUFZOzs7OztJQUFuQixVQUFvQixNQUFjLEVBQUUsSUFBWTtRQUM1QyxPQUFVLE1BQU0sU0FBSSxJQUFNLENBQUM7S0FDOUI7Ozs7OztJQUVNLHlCQUFlOzs7OztJQUF0QixVQUF1QixNQUF3QyxFQUFFLEtBQWE7O1lBQ3BFLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLFNBQVM7UUFDckUsT0FBTyxJQUFJLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO0tBQzFDO0lBcERNLGlCQUFPLEdBQXdEO1FBQ2xFLEdBQUcsRUFBRSxFQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUM7UUFDaEIsSUFBSSxFQUFFLEVBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUM7UUFDekMsSUFBSSxFQUFFLEVBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUM7O1FBQ3pDLElBQUksRUFBRSxFQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFDO1FBQzFDLElBQUksRUFBRSxFQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFDO1FBQzFDLElBQUksRUFBRSxFQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBQztLQUNuRCxDQUFDOztnQkFaTCxJQUFJLFNBQUM7b0JBQ0YsSUFBSSxFQUFFLE9BQU87aUJBQ2hCOztJQXdERCxnQkFBQztDQTFERDs7Ozs7O0FDTkE7SUFHQTtLQWFDOzs7Ozs7SUFSQyw0QkFBUzs7Ozs7SUFBVCxVQUFXLEtBQVUsRUFBRSxTQUFrQjtRQUFsQiwwQkFBQSxFQUFBLGFBQWtCO1FBRXZDLElBQUksUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3ZCLFNBQVMsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDakM7UUFFRCxPQUFPLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7S0FDOUM7O2dCQVpGLElBQUksU0FBQztvQkFDSixJQUFJLEVBQUUsTUFBTTtpQkFDYjs7SUFXRCxlQUFDO0NBYkQ7Ozs7OztBQ0hBO0lBR0E7S0FhQzs7Ozs7O0lBUkMsNkJBQVM7Ozs7O0lBQVQsVUFBVyxLQUFVLEVBQUUsU0FBa0I7UUFBbEIsMEJBQUEsRUFBQSxhQUFrQjtRQUV2QyxJQUFJLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUN2QixTQUFTLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ2pDO1FBRUQsT0FBTyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0tBQy9DOztnQkFaRixJQUFJLFNBQUM7b0JBQ0osSUFBSSxFQUFFLE9BQU87aUJBQ2Q7O0lBV0QsZ0JBQUM7Q0FiRDs7Ozs7O0FDSEE7SUFHQTtLQWFDOzs7Ozs7SUFSQyw2QkFBUzs7Ozs7SUFBVCxVQUFXLEtBQVUsRUFBRSxTQUFrQjtRQUFsQiwwQkFBQSxFQUFBLGFBQWtCO1FBRXZDLElBQUksUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3ZCLFNBQVMsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDakM7UUFFRCxPQUFPLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7S0FDL0M7O2dCQVpGLElBQUksU0FBQztvQkFDSixJQUFJLEVBQUUsT0FBTztpQkFDZDs7SUFXRCxnQkFBQztDQWJEOzs7Ozs7QUNIQTtJQUdBO0tBZUM7Ozs7O0lBVEMsK0JBQVM7Ozs7SUFBVCxVQUFXLEtBQVU7UUFFbkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMxQixPQUFPLEtBQUssQ0FBQztTQUNkO1FBRUQsT0FBTyxDQUFDLEtBQUssR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQztLQUVoQzs7Z0JBZEYsSUFBSSxTQUFDO29CQUNKLElBQUksRUFBRSxTQUFTO2lCQUNoQjs7SUFhRCxrQkFBQztDQWZEOzs7Ozs7QUNIQTtJQUdBO0tBYUM7Ozs7O0lBUkMsK0JBQVM7Ozs7SUFBVCxVQUFXLEtBQVU7UUFFbkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMxQixPQUFPLEtBQUssQ0FBQztTQUNkO1FBRUQsT0FBTyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsRUFBRSxJQUFJLEdBQUcsQ0FBQztLQUNoQzs7Z0JBWkYsSUFBSSxTQUFDO29CQUNKLElBQUksRUFBRSxTQUFTO2lCQUNoQjs7SUFXRCxrQkFBQztDQWJEOzs7Ozs7QUNIQTtJQUdBO0tBa0JDOzs7Ozs7O0lBYkMsOEJBQVM7Ozs7OztJQUFULFVBQVcsS0FBVSxFQUFFLEdBQWUsRUFBRSxHQUFlO1FBQWhDLG9CQUFBLEVBQUEsT0FBZTtRQUFFLG9CQUFBLEVBQUEsT0FBZTtRQUVyRCxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2hELE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFFRCxJQUFJLEdBQUcsR0FBRyxHQUFHLEVBQUU7WUFDYixHQUFHLEdBQUcsR0FBRyxDQUFDO1lBQ1YsR0FBRyxHQUFHLENBQUMsQ0FBQztTQUNUO1FBRUQsT0FBTyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztLQUMxQzs7Z0JBakJGLElBQUksU0FBQztvQkFDSixJQUFJLEVBQUUsUUFBUTtpQkFDZjs7SUFnQkQsaUJBQUM7Q0FsQkQ7Ozs7OztBQ0hBO0lBR0E7S0FhQzs7Ozs7SUFSQyw0QkFBUzs7OztJQUFULFVBQVcsS0FBVTtRQUVuQixJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzFCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFFRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDekI7O2dCQVpGLElBQUksU0FBQztvQkFDSixJQUFJLEVBQUUsTUFBTTtpQkFDYjs7SUFXRCxlQUFDO0NBYkQ7Ozs7OztBQ0hBO0lBR0E7S0FhQzs7Ozs7O0lBUkMsMkJBQVM7Ozs7O0lBQVQsVUFBVyxLQUFVLEVBQUUsS0FBaUI7UUFBakIsc0JBQUEsRUFBQSxTQUFpQjtRQUV0QyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzFCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFFRCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQy9COztnQkFaRixJQUFJLFNBQUM7b0JBQ0osSUFBSSxFQUFFLEtBQUs7aUJBQ1o7O0lBV0QsY0FBQztDQWJEOzs7Ozs7QUNIQTtJQUdBO0tBYUM7Ozs7O0lBUkMsMkJBQVM7Ozs7SUFBVCxVQUFXLEtBQVU7UUFFbkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMxQixPQUFPLEtBQUssQ0FBQztTQUNkO1FBRUQsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3hCOztnQkFaRixJQUFJLFNBQUM7b0JBQ0osSUFBSSxFQUFFLEtBQUs7aUJBQ1o7O0lBV0QsY0FBQztDQWJEOzs7Ozs7QUNIQTtJQUdBO0tBeUJDOzs7OztJQXBCRywrQkFBUzs7OztJQUFULFVBQVcsS0FBVTtRQUVqQixJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3hCLE9BQU8sS0FBSyxDQUFDO1NBQ2hCOztZQUVLLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBRXJFLFFBQU8sUUFBUTtZQUNYLEtBQUssR0FBRztnQkFDSixPQUFPLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDeEIsS0FBSyxHQUFHO2dCQUNKLE9BQU8sS0FBSyxHQUFHLElBQUksQ0FBQztZQUN4QixLQUFLLEdBQUc7Z0JBQ0osT0FBTyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ3hCO2dCQUNJLE9BQU8sS0FBSyxHQUFHLElBQUksQ0FBQztTQUMzQjtLQUVKOztnQkF4QkosSUFBSSxTQUFDO29CQUNKLElBQUksRUFBRSxTQUFTO2lCQUNoQjs7SUF1QkQsa0JBQUM7Q0F6QkQ7Ozs7OztBQ0hBO0lBY0E7S0E0QmlDOztnQkE1QmhDLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osU0FBUzt3QkFDVCxRQUFRO3dCQUNSLFNBQVM7d0JBQ1QsU0FBUzt3QkFDVCxXQUFXO3dCQUNYLFdBQVc7d0JBQ1gsVUFBVTt3QkFDVixRQUFRO3dCQUNSLE9BQU87d0JBQ1AsT0FBTzt3QkFDUCxXQUFXO3FCQUNaO29CQUNELE9BQU8sRUFBRTt3QkFDUCxTQUFTO3dCQUNULFFBQVE7d0JBQ1IsU0FBUzt3QkFDVCxTQUFTO3dCQUNULFdBQVc7d0JBQ1gsV0FBVzt3QkFDWCxVQUFVO3dCQUNWLFFBQVE7d0JBQ1IsT0FBTzt3QkFDUCxPQUFPO3dCQUNQLFdBQVc7cUJBQ1o7aUJBQ0Y7O0lBQytCLHdCQUFDO0NBNUJqQzs7Ozs7O0FDZEE7SUFJQTtLQVdDOzs7OztJQVJDLDRCQUFTOzs7O0lBQVQsVUFBVyxLQUFVO1FBRW5CLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDcEIsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUMzQjs7Z0JBVkYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTs7SUFXdEIsZUFBQztDQVhEOzs7Ozs7QUNKQTtJQUlBO0tBV0M7Ozs7O0lBUkMsK0JBQVM7Ozs7SUFBVCxVQUFXLEtBQVU7UUFFbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNwQixPQUFPLEtBQUssQ0FBQztTQUNkO1FBRUQsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEtBQUssSUFBSyxPQUFBLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBQSxDQUFDLENBQUM7S0FDeEQ7O2dCQVZGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUU7O0lBV3pCLGtCQUFDO0NBWEQ7Ozs7OztBQ0pBO0lBR0E7S0FrQ0M7Ozs7OztJQS9CQyxnQ0FBUzs7Ozs7SUFBVCxVQUFXLEtBQVUsRUFBRSxRQUFhO1FBRWxDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDdkIsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2hCLE9BQU8sUUFBUSxDQUFDO1NBQ2pCO1FBRUQsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDbEIsT0FBTyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBUztnQkFFekIsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQ2xCLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO2lCQUMxQztnQkFFRCxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFDZixPQUFPLFFBQVEsQ0FBQztpQkFDakI7Z0JBRUQsT0FBTyxJQUFJLENBQUM7YUFDYixDQUFDLENBQUM7U0FDSjtRQUVELElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ25CLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzNDO1FBRUQsT0FBTyxLQUFLLENBQUM7S0FDZDs7Z0JBakNGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7O0lBa0MxQixtQkFBQztDQWxDRDs7Ozs7O0FDSEE7SUFNQTtLQVltQzs7Z0JBWmxDLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osUUFBUTt3QkFDUixXQUFXO3dCQUNYLFlBQVk7cUJBQ2I7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLFFBQVE7d0JBQ1IsV0FBVzt3QkFDWCxZQUFZO3FCQUNiO2lCQUNGOztJQUNpQywwQkFBQztDQVpuQzs7Ozs7O0FDTkE7SUFJQTtLQWFDOzs7Ozs7O0lBUkMsK0JBQVM7Ozs7OztJQUFULFVBQVcsS0FBVSxFQUFFLE1BQWtCLEVBQUUsU0FBdUI7UUFBM0MsdUJBQUEsRUFBQSxVQUFrQjtRQUFFLDBCQUFBLEVBQUEsZUFBdUI7UUFFaEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNwQixPQUFPLEtBQUssQ0FBQztTQUNkO1FBRUQsT0FBTyxPQUFPLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztLQUMxQzs7Z0JBWkYsSUFBSSxTQUFDO29CQUNKLElBQUksRUFBRSxTQUFTO2lCQUNoQjs7SUFXRCxrQkFBQztDQWJEOzs7Ozs7QUNKQTtJQUdBO0tBY0M7Ozs7Ozs7SUFUQyw2QkFBUzs7Ozs7O0lBQVQsVUFBVyxLQUFVLEVBQUUsT0FBWSxFQUFFLElBQVM7UUFFNUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNwQixPQUFPLEtBQUssQ0FBQztTQUNkOztZQUVLLE1BQU0sR0FBRyxPQUFPLFlBQVksTUFBTSxHQUFHLE9BQU8sR0FBRyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDO1FBQzlFLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUM1Qjs7Z0JBYkYsSUFBSSxTQUFDO29CQUNKLElBQUksRUFBRSxPQUFPO2lCQUNkOztJQVlELGdCQUFDO0NBZEQ7Ozs7OztBQ0hBO0lBSUE7S0FhQzs7Ozs7OztJQVJDLDJCQUFTOzs7Ozs7SUFBVCxVQUFXLEtBQVUsRUFBRSxNQUFrQixFQUFFLFNBQXVCO1FBQTNDLHVCQUFBLEVBQUEsVUFBa0I7UUFBRSwwQkFBQSxFQUFBLGVBQXVCO1FBRWhFLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDcEIsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELE9BQU8sR0FBRyxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7S0FDdEM7O2dCQVpGLElBQUksU0FBQztvQkFDSixJQUFJLEVBQUUsS0FBSztpQkFDWjs7SUFXRCxjQUFDO0NBYkQ7Ozs7OztBQ0pBO0lBR0E7S0FhQzs7Ozs7OztJQVJDLCtCQUFTOzs7Ozs7SUFBVCxVQUFXLEtBQVUsRUFBRSxPQUFZLEVBQUUsV0FBZ0I7UUFFbkQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksV0FBVyxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ3hFLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFFRCxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0tBQzVDOztnQkFaRixJQUFJLFNBQUM7b0JBQ0osSUFBSSxFQUFFLFNBQVM7aUJBQ2hCOztJQVdELGtCQUFDO0NBYkQ7Ozs7OztBQ0hBO0lBSUE7S0FhQzs7Ozs7OztJQVJDLGdDQUFTOzs7Ozs7SUFBVCxVQUFXLEtBQVUsRUFBRSxNQUFrQixFQUFFLFNBQXVCO1FBQTNDLHVCQUFBLEVBQUEsVUFBa0I7UUFBRSwwQkFBQSxFQUFBLGVBQXVCO1FBRWhFLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDcEIsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELE9BQU8sUUFBUSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7S0FDM0M7O2dCQVpGLElBQUksU0FBQztvQkFDSixJQUFJLEVBQUUsVUFBVTtpQkFDakI7O0lBV0QsbUJBQUM7Q0FiRDs7Ozs7O0FDSkE7SUFJQTtLQWFDOzs7Ozs7O0lBUkMsNkJBQVM7Ozs7OztJQUFULFVBQVcsS0FBVSxFQUFFLFNBQXVCLEVBQUUsS0FBYztRQUF2QywwQkFBQSxFQUFBLGVBQXVCO1FBRTVDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDcEIsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDdEM7O2dCQVpGLElBQUksU0FBQztvQkFDSixJQUFJLEVBQUUsT0FBTztpQkFDZDs7SUFXRCxnQkFBQztDQWJEOzs7Ozs7QUNKQTtJQUlBO0tBZUM7Ozs7Ozs7SUFWQyw0QkFBUzs7Ozs7O0lBQVQsVUFBVyxLQUFVLEVBQUUsT0FBWSxFQUFFLElBQVM7UUFFNUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQyxPQUFPLEtBQUssQ0FBQztTQUNkOztZQUVLLE1BQU0sR0FBRyxPQUFPLFlBQVksTUFBTSxHQUFHLE9BQU8sR0FBRyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDO1FBRTlFLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUMzQjs7Z0JBZEYsSUFBSSxTQUFDO29CQUNKLElBQUksRUFBRSxNQUFNO2lCQUNiOztJQWFELGVBQUM7Q0FmRDs7Ozs7O0FDSkE7SUFHQTtLQWFDOzs7OztJQVJDLDRCQUFTOzs7O0lBQVQsVUFBVyxLQUFVO1FBRW5CLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDcEIsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELE9BQU8sS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0tBQ3JCOztnQkFaRixJQUFJLFNBQUM7b0JBQ0osSUFBSSxFQUFFLE1BQU07aUJBQ2I7O0lBV0QsZUFBQztDQWJEOzs7Ozs7QUNIQTtJQUdBO0tBYUM7Ozs7O0lBUkMsZ0NBQVM7Ozs7SUFBVCxVQUFXLEtBQVU7UUFFbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNwQixPQUFPLEtBQUssQ0FBQztTQUNkO1FBRUQsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFLFFBQVEsQ0FBQyxDQUFDO0tBQ25EOztnQkFaRixJQUFJLFNBQUM7b0JBQ0osSUFBSSxFQUFFLFVBQVU7aUJBQ2pCOztJQVdELG1CQUFDO0NBYkQ7Ozs7OztBQ0hBO0lBR0E7S0FvQkM7Ozs7OztJQWhCQyxrQ0FBUzs7Ozs7SUFBVCxVQUFVLEtBQVUsRUFBRSxHQUFvQjtRQUFwQixvQkFBQSxFQUFBLFdBQW9CO1FBRXhDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDcEIsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDUixPQUFPLFVBQVUsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztTQUN4QzthQUNJO1lBQ0gsT0FBTyxLQUFLLENBQUMsV0FBVyxFQUFFO2lCQUN2QixLQUFLLENBQUMsR0FBRyxDQUFDO2lCQUNWLEdBQUcsQ0FBQyxVQUFDLEtBQWEsSUFBSyxPQUFBLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBQSxDQUFDO2lCQUN6QyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDZDtLQUNGOztnQkFuQkYsSUFBSSxTQUFDO29CQUNKLElBQUksRUFBRSxZQUFZO2lCQUNuQjs7SUFrQkQscUJBQUM7Q0FwQkQ7Ozs7OztBQ0hBO0lBR0E7S0FhQzs7Ozs7SUFSQyxrQ0FBUzs7OztJQUFULFVBQVUsS0FBVTtRQUVsQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3BCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFFRCxPQUFPLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUMxQjs7Z0JBWkYsSUFBSSxTQUFDO29CQUNKLElBQUksRUFBRSxZQUFZO2lCQUNuQjs7SUFXRCxxQkFBQztDQWJEOzs7Ozs7QUNIQTtJQUdBO0tBa0JDOzs7Ozs7SUFiQyxnQ0FBUzs7Ozs7SUFBVCxVQUFXLEtBQVU7UUFBRSxjQUFjO2FBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztZQUFkLDZCQUFjOztRQUVuQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3pDLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7O1lBRUcsUUFBUSxHQUFHLEtBQUs7UUFDcEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUU7WUFDcEMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUUsT0FBSSxDQUFDLEdBQUcsQ0FBQyxDQUFFLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDcEQ7UUFFRCxPQUFPLFFBQVEsQ0FBQztLQUNqQjs7Z0JBakJGLElBQUksU0FBQztvQkFDSixJQUFJLEVBQUUsVUFBVTtpQkFDakI7O0lBZ0JELG1CQUFDO0NBbEJEOzs7Ozs7QUNIQTtJQUdBO0tBYUM7Ozs7O0lBUkMsaUNBQVM7Ozs7SUFBVCxVQUFXLEtBQVU7UUFFbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNwQixPQUFPLEtBQUssQ0FBQztTQUNkO1FBRUQsT0FBTyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDekI7O2dCQVpGLElBQUksU0FBQztvQkFDSixJQUFJLEVBQUUsV0FBVztpQkFDbEI7O0lBV0Qsb0JBQUM7Q0FiRDs7Ozs7O0FDSEE7SUFHQTtLQWFDOzs7OztJQVJDLDBDQUFTOzs7O0lBQVQsVUFBVyxLQUFVO1FBRW5CLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDcEIsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELE9BQU8sa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDbEM7O2dCQVpGLElBQUksU0FBQztvQkFDSixJQUFJLEVBQUUsb0JBQW9CO2lCQUMzQjs7SUFXRCw2QkFBQztDQWJEOzs7Ozs7QUNIQTtJQUdBO0tBYUM7Ozs7O0lBUkMsaUNBQVM7Ozs7SUFBVCxVQUFXLEtBQVU7UUFFbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNwQixPQUFPLEtBQUssQ0FBQztTQUNkO1FBRUQsT0FBTyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDekI7O2dCQVpGLElBQUksU0FBQztvQkFDSixJQUFJLEVBQUUsV0FBVztpQkFDbEI7O0lBV0Qsb0JBQUM7Q0FiRDs7Ozs7O0FDSEE7SUFHQTtLQWFDOzs7OztJQVJDLDBDQUFTOzs7O0lBQVQsVUFBVyxLQUFVO1FBRW5CLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDcEIsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELE9BQU8sa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDbEM7O2dCQVpGLElBQUksU0FBQztvQkFDSixJQUFJLEVBQUUsb0JBQW9CO2lCQUMzQjs7SUFXRCw2QkFBQztDQWJEOzs7Ozs7O0lDRUE7S0FpQ0M7Ozs7Ozs7O0lBNUJDLGdDQUFTOzs7Ozs7O0lBQVQsVUFBVyxLQUFVLEVBQUUsTUFBZSxFQUFFLE1BQWUsRUFBRSxRQUFrQjtRQUd6RSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3BCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFFRCxNQUFNLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBRXJELElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxNQUFNLEVBQUU7WUFDMUIsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELFFBQVEsR0FBRyxRQUFRLElBQUksS0FBSyxDQUFDO1FBQzdCLE1BQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDOztZQUNsQixLQUFLLEdBQUcsTUFBTTtRQUVsQixJQUFJLFFBQVEsRUFBRTtZQUNaLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7Z0JBQ3JDLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO2FBQ3RCO2lCQUNJO2dCQUNILEtBQUssR0FBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQzthQUNyQztTQUNGO1FBRUQsT0FBTyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxNQUFNLENBQUM7S0FDM0M7O2dCQWhDRixJQUFJLFNBQUM7b0JBQ0osSUFBSSxFQUFFLFVBQVU7aUJBQ2pCOztJQStCRCxtQkFBQztDQWpDRDs7Ozs7O0FDTEE7SUFHQTtLQXNCQzs7Ozs7OztJQWpCQyw4QkFBUzs7Ozs7O0lBQVQsVUFBVyxLQUFVLEVBQUUsS0FBaUIsRUFBRSxVQUF1QjtRQUExQyxzQkFBQSxFQUFBLFNBQWlCO1FBQUUsMkJBQUEsRUFBQSxlQUF1QjtRQUUvRCxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3BCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFFRCxJQUFJLEtBQUssSUFBSSxDQUFDLEVBQUU7WUFDZCxLQUFLLEdBQUcsQ0FBQyxDQUFDO1NBQ1g7O1lBRUssUUFBUSxHQUFHLENBQUMsS0FBSyxDQUFDO1FBQ3hCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUUsRUFBRSxDQUFDLEVBQUU7WUFDOUIsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtTQUNyQjtRQUVELE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztLQUNsQzs7Z0JBckJGLElBQUksU0FBQztvQkFDSixJQUFJLEVBQUUsUUFBUTtpQkFDZjs7SUFvQkQsaUJBQUM7Q0F0QkQ7Ozs7OztBQ0hBO0lBR0E7S0FpQkM7Ozs7O0lBZEMsK0JBQVM7Ozs7SUFBVCxVQUFVLEtBQVU7UUFFbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNwQixPQUFPLEtBQUssQ0FBQztTQUNkO1FBRUQsUUFDRSxLQUFLO2FBQ0osV0FBVyxFQUFFO2FBQ2IsSUFBSSxFQUFFO2FBQ04sT0FBTyxDQUFDLGVBQWUsRUFBRSxHQUFHLENBQUM7YUFDN0IsT0FBTyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsRUFDeEI7S0FDSDs7Z0JBaEJGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUU7O0lBaUJ6QixrQkFBQztDQWpCRDs7Ozs7OztJQ0VBO0tBWUM7Ozs7O0lBUEMsaUNBQVM7Ozs7SUFBVCxVQUFVLEtBQWE7UUFFckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQzFDLE9BQU8sS0FBSyxDQUFDO1FBRWIsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQztLQUN6Qzs7Z0JBWEYsSUFBSSxTQUFDO29CQUNKLElBQUksRUFBRSxXQUFXO2lCQUNsQjs7SUFVRCxvQkFBQztDQVpEOzs7Ozs7O0lDQUE7S0F1SEM7Ozs7O0lBcEhDLGdDQUFTOzs7O0lBQVQsVUFBVSxLQUFhO1FBRXJCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzFDLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7O1lBRUcsZUFBZSxHQUFHO1lBQ3BCLEVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFDO1lBQzVCLEVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFDO1lBQzVCLEVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsd01BQXdNLEVBQUM7WUFDNU4sRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUM7WUFDN0IsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxvQkFBb0IsRUFBQztZQUN6QyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBQztZQUM3QixFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBQztZQUM3QixFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBQztZQUNuQyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBQztZQUM3QixFQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLDRDQUE0QyxFQUFDO1lBQ2hFLEVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsMEVBQTBFLEVBQUM7WUFDOUYsRUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxnRkFBZ0YsRUFBQztZQUNwRyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBQztZQUM3QixFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBQztZQUNuQyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBQztZQUNuQyxFQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLDRMQUE0TCxFQUFDO1lBQ2hOLEVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsc0NBQXNDLEVBQUM7WUFDMUQsRUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSw0RkFBNEYsRUFBQztZQUNoSCxFQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLGdGQUFnRixFQUFDO1lBQ3BHLEVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsNEdBQTRHLEVBQUM7WUFDaEksRUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxnQ0FBZ0MsRUFBQztZQUNwRCxFQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLGdGQUFnRixFQUFDO1lBQ3BHLEVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsd0dBQXdHLEVBQUM7WUFDNUgsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUM7WUFDN0IsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUM7WUFDN0IsRUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxrREFBa0QsRUFBQztZQUN0RSxFQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLGdHQUFnRyxFQUFDO1lBQ3BILEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFDO1lBQzdCLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFDO1lBQzdCLEVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsa1BBQWtQLEVBQUM7WUFDdFEsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUM7WUFDN0IsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUM7WUFDN0IsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUM7WUFDN0IsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUM7WUFDN0IsRUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSx3REFBd0QsRUFBQztZQUM1RSxFQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLGdDQUFnQyxFQUFDO1lBQ3BELEVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBQyxLQUFLLEVBQUUsa0dBQWtHLEVBQUM7WUFDckgsRUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFDLEtBQUssRUFBRSxrR0FBa0csRUFBQztZQUNySCxFQUFDLElBQUksRUFBRSxHQUFHLEVBQUMsS0FBSyxFQUFFLHNGQUFzRixFQUFDO1lBQ3pHLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFDO1lBQzdCLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFDO1lBQzdCLEVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsZ01BQWdNLEVBQUM7WUFDcE4sRUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSw0Q0FBNEMsRUFBQztZQUNoRSxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBQztZQUM3QixFQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLHdEQUF3RCxFQUFDO1lBQzVFLEVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsMEJBQTBCLEVBQUM7WUFDOUMsRUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxvRkFBb0YsRUFBQztZQUN4RyxFQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLGdGQUFnRixFQUFDO1lBQ3BHLEVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsb05BQW9OLEVBQUM7WUFDeE8sRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUM7WUFDN0IsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFDLEtBQUssRUFBRSxvQkFBb0IsRUFBQztZQUN4QyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUMsS0FBSyxFQUFFLFFBQVEsRUFBQztZQUM1QixFQUFDLElBQUksRUFBRSxJQUFJLEVBQUMsS0FBSyxFQUFFLFFBQVEsRUFBQztZQUM1QixFQUFDLElBQUksRUFBRSxJQUFJLEVBQUMsS0FBSyxFQUFFLGNBQWMsRUFBQztZQUNsQyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUMsS0FBSyxFQUFFLFFBQVEsRUFBQztZQUM1QixFQUFDLElBQUksRUFBRSxHQUFHLEVBQUMsS0FBSyxFQUFFLHdEQUF3RCxFQUFDO1lBQzNFLEVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBQyxLQUFLLEVBQUUsMEVBQTBFLEVBQUM7WUFDN0YsRUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFDLEtBQUssRUFBRSxrR0FBa0csRUFBQztZQUNySCxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUMsS0FBSyxFQUFFLFFBQVEsRUFBQztZQUM1QixFQUFDLElBQUksRUFBRSxJQUFJLEVBQUMsS0FBSyxFQUFFLGNBQWMsRUFBQztZQUNsQyxFQUFDLElBQUksRUFBRSxHQUFHLEVBQUMsS0FBSyxFQUFFLGdMQUFnTCxHQUFjLEVBQUUsRUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFDLEtBQUssRUFBRSwwQkFBMEIsRUFBQztZQUMvUCxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUMsS0FBSyxFQUFFLFFBQVEsRUFBQztZQUM1QixFQUFDLElBQUksRUFBRSxJQUFJLEVBQUMsS0FBSyxFQUFFLFFBQVEsRUFBQztZQUM1QixFQUFDLElBQUksRUFBRSxJQUFJLEVBQUMsS0FBSyxFQUFFLFFBQVEsRUFBQztZQUM1QixFQUFDLElBQUksRUFBRSxLQUFLLEVBQUMsS0FBSyxFQUFFLFFBQVEsRUFBQztZQUM3QixFQUFDLElBQUksRUFBRSxLQUFLLEVBQUMsS0FBSyxFQUFFLFFBQVEsRUFBQztZQUM3QixFQUFDLElBQUksRUFBRSxHQUFHLEVBQUMsS0FBSyxFQUFFLHNGQUFzRixFQUFDO1lBQ3pHLEVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsc0ZBQXNGLEVBQUM7WUFDMUcsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFDLEtBQUssRUFBRSxRQUFRLEVBQUM7WUFDNUIsRUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSw0R0FBNEcsRUFBQztZQUNoSSxFQUFDLElBQUksRUFBRSxHQUFHLEVBQUMsS0FBSyxFQUFFLGdDQUFnQyxFQUFDO1lBQ25ELEVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsZ0ZBQWdGLEVBQUM7WUFDcEcsRUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxvSEFBb0gsRUFBQztZQUN4SSxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBQztZQUM3QixFQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLDRDQUE0QyxFQUFDO1lBQ2hFLEVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsNEdBQTRHLEVBQUM7WUFDaEksRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUM7WUFDN0IsRUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSx3UEFBd1AsRUFBQztZQUM1USxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBQztZQUM3QixFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBQztZQUM3QixFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBQztZQUM3QixFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBQztZQUM3QixFQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLDhEQUE4RCxFQUFDO1lBQ2xGLEVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsZ0NBQWdDLEVBQUM7WUFDcEQsRUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxrR0FBa0csRUFBQztZQUN0SCxFQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLHdHQUF3RyxFQUFDO1lBQzVILEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFDO1lBQzNCLEVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsNEZBQTRGLEVBQUM7WUFDaEgsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUM7WUFDN0IsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUM7WUFDN0IsRUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxnTUFBZ00sRUFBQztZQUNwTixFQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLDRDQUE0QyxFQUFDO1lBQ2hFLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFDO1lBQzdCLEVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsOERBQThELEVBQUM7WUFDbEYsRUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSwwQkFBMEIsRUFBQztZQUM5QyxFQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLHdGQUF3RixFQUFDO1lBQzVHLEVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsZ0ZBQWdGLEVBQUM7U0FDckc7O1lBRUcsYUFBYSxHQUFRLEVBQUU7UUFDM0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGVBQWUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTs7Z0JBQzlDLEtBQUssR0FBRyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSztZQUNwQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUN4QyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQzthQUNuRDtTQUNGO1FBRUQsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLG1CQUFtQixFQUFFLFVBQUMsQ0FBQyxJQUFLLE9BQUEsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBQSxDQUFDLENBQUM7S0FDekU7O2dCQXRIRixJQUFJLFNBQUMsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFDOztJQXVIeEIsbUJBQUM7Q0F2SEQ7Ozs7Ozs7SUNBQTtLQVFDOzs7Ozs7O0lBSEMsNEJBQVM7Ozs7OztJQUFULFVBQVUsS0FBYSxFQUFFLElBQVksRUFBRSxJQUFhO1FBQ2xELE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDO0tBQy9GOztnQkFQRixJQUFJLFNBQUM7b0JBQ0osSUFBSSxFQUFFLE1BQU07aUJBQ2I7O0lBTUQsZUFBQztDQVJEOzs7Ozs7QUNMQTtJQUdBO0tBZ0NDOzs7Ozs7OztJQTdCQyw0QkFBUzs7Ozs7OztJQUFULFVBQVUsS0FBYSxFQUFFLEtBQXlCLEVBQUUsSUFBd0IsRUFBRSxVQUEyQjtRQUFoRixzQkFBQSxFQUFBLFlBQXlCO1FBQUUscUJBQUEsRUFBQSxXQUF3QjtRQUFFLDJCQUFBLEVBQUEsa0JBQTJCO1FBRXZHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEtBQUssSUFBSSxFQUFFLENBQUMsS0FBSyxJQUFJLElBQUksRUFBRSxDQUFDLEVBQUU7WUFDeEYsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELEtBQUssR0FBRyxDQUFDLFVBQVUsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRW5ELElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUU7O2dCQUMvQixDQUFDLEdBQVksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsVUFBVSxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7O2dCQUN2RSxDQUFDLEdBQVksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFVBQVUsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxHQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztZQUU3RyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRTtnQkFDMUIsT0FBTyxJQUFJLENBQUE7YUFDWjtpQkFBTTtnQkFDTCxPQUFPLEtBQUssQ0FBQzthQUNkO1NBQ0Y7UUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2xCLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsVUFBVSxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztTQUNuRTtRQUVELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUU7O2dCQUNiLFFBQVEsR0FBUSxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNO1lBRTlDLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFVBQVUsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ2pGO0tBQ0Y7O2dCQS9CRixJQUFJLFNBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDOztJQWdDcEIsZUFBQztDQWhDRDs7Ozs7O0FDSEE7SUFHQTtLQWFDOzs7OztJQVJDLGtDQUFTOzs7O0lBQVQsVUFBVSxLQUFhO1FBRXJCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDcEIsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDN0M7O2dCQVpGLElBQUksU0FBQztvQkFDSixJQUFJLEVBQUUsWUFBWTtpQkFDbkI7O0lBV0QscUJBQUM7Q0FiRDs7Ozs7O0FDSEE7SUE0QkE7S0F1REM7O2dCQXZEQSxRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLFdBQVc7d0JBQ1gsU0FBUzt3QkFDVCxPQUFPO3dCQUNQLFdBQVc7d0JBQ1gsWUFBWTt3QkFDWixTQUFTO3dCQUNULFFBQVE7d0JBQ1IsUUFBUTt3QkFDUixZQUFZO3dCQUNaLGNBQWM7d0JBQ2QsY0FBYzt3QkFDZCxZQUFZO3dCQUNaLGFBQWE7d0JBQ2Isc0JBQXNCO3dCQUN0QixhQUFhO3dCQUNiLHNCQUFzQjt3QkFDdEIsWUFBWTt3QkFDWixVQUFVO3dCQUNWLFdBQVc7d0JBQ1gsYUFBYTt3QkFDYixZQUFZO3dCQUNaLFFBQVE7d0JBQ1IsUUFBUTt3QkFDUixjQUFjO3FCQUNmO29CQUNELE9BQU8sRUFBRTt3QkFDUCxXQUFXO3dCQUNYLFNBQVM7d0JBQ1QsT0FBTzt3QkFDUCxXQUFXO3dCQUNYLFlBQVk7d0JBQ1osU0FBUzt3QkFDVCxRQUFRO3dCQUNSLFFBQVE7d0JBQ1IsWUFBWTt3QkFDWixjQUFjO3dCQUNkLGNBQWM7d0JBQ2QsWUFBWTt3QkFDWixhQUFhO3dCQUNiLHNCQUFzQjt3QkFDdEIsYUFBYTt3QkFDYixzQkFBc0I7d0JBQ3RCLFlBQVk7d0JBQ1osVUFBVTt3QkFDVixXQUFXO3dCQUNYLGFBQWE7d0JBQ2IsWUFBWTt3QkFDWixRQUFRO3dCQUNSLFFBQVE7d0JBQ1IsY0FBYztxQkFDZjtpQkFDRjs7SUFFRCwwQkFBQztDQXZERDs7Ozs7O0FDNUJBO0lBVUE7S0FVNkI7O2dCQVY1QixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLGtCQUFrQjt3QkFDbEIsaUJBQWlCO3dCQUNqQixvQkFBb0I7d0JBQ3BCLG1CQUFtQjt3QkFDbkIsbUJBQW1CO3dCQUNuQixzQkFBc0I7cUJBQ3ZCO2lCQUNGOztJQUMyQixvQkFBQztDQVY3Qjs7Ozs7Ozs7Ozs7Ozs7In0=

/***/ }),

/***/ "./node_modules/dayjs/plugin/relativeTime.js":
/*!***************************************************!*\
  !*** ./node_modules/dayjs/plugin/relativeTime.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,r){ true?module.exports=r():undefined}(this,function(){"use strict";return function(e,r,t){var n=r.prototype;t.en.relativeTime={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};var o=function(e,r,n,o){for(var d,i,a=n.$locale().relativeTime,u=[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],f=u.length,s=0;s<f;s+=1){var l=u[s];l.d&&(d=o?t(e).diff(n,l.d,!0):n.diff(e,l.d,!0));var m=Math.ceil(Math.abs(d));if(m<=l.r||!l.r){i=a[l.l].replace("%d",m);break}}return r?i:(d>0?a.future:a.past).replace("%s",i)};n.to=function(e,r){return o(e,r,this,!0)},n.from=function(e,r){return o(e,r,this)},n.toNow=function(e){return this.to(t(),e)},n.fromNow=function(e){return this.from(t(),e)}}});


/***/ }),

/***/ "./src/app/pipes/pipes.module.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.module.ts ***!
  \***************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var angular_pipes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-pipes */ "./node_modules/angular-pipes/fesm5/angular-pipes.js");
/* harmony import */ var _time_difference_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./time-difference.pipe */ "./src/app/pipes/time-difference.pipe.ts");
/* harmony import */ var _time_ago_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./time-ago.pipe */ "./src/app/pipes/time-ago.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"].forRoot(),
                angular_pipes__WEBPACK_IMPORTED_MODULE_3__["NgMathPipesModule"]
            ],
            declarations: [
                _time_difference_pipe__WEBPACK_IMPORTED_MODULE_4__["TimeDifferencePipe"],
                _time_ago_pipe__WEBPACK_IMPORTED_MODULE_5__["TimeAgoPipe"]
            ],
            exports: [
                angular_pipes__WEBPACK_IMPORTED_MODULE_3__["FloorPipe"],
                _time_difference_pipe__WEBPACK_IMPORTED_MODULE_4__["TimeDifferencePipe"],
                _time_ago_pipe__WEBPACK_IMPORTED_MODULE_5__["TimeAgoPipe"]
            ],
            entryComponents: [],
        })
    ], PipesModule);
    return PipesModule;
}());



/***/ }),

/***/ "./src/app/pipes/time-ago.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/pipes/time-ago.pipe.ts ***!
  \****************************************/
/*! exports provided: TimeAgoPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeAgoPipe", function() { return TimeAgoPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs/plugin/relativeTime */ "./node_modules/dayjs/plugin/relativeTime.js");
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// When fixed, uncomment this
// import * as dayjs from 'dayjs';


// TODO:  dayjs is throiwing this ERROR:
//        error TS2339: Property 'to' does not exist on type 'Dayjs'.
// Luckily there is a PR which solves it (https://github.com/iamkun/dayjs/issues/297#issuecomment-442748858)
// When fixed, remove this line:
var dayjs = dayjs__WEBPACK_IMPORTED_MODULE_1__;
var TimeAgoPipe = /** @class */ (function () {
    function TimeAgoPipe() {
    }
    TimeAgoPipe.prototype.transform = function (value) {
        dayjs.extend(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_2___default.a);
        var timeAgo = '';
        if (value) {
            var withoutSuffix = (dayjs(value).diff(dayjs(), 'day') < 0) ? false : true;
            timeAgo = dayjs().to(dayjs(value), withoutSuffix);
        }
        return timeAgo;
    };
    TimeAgoPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'appTimeAgo' })
    ], TimeAgoPipe);
    return TimeAgoPipe;
}());



/***/ }),

/***/ "./src/app/pipes/time-difference.pipe.ts":
/*!***********************************************!*\
  !*** ./src/app/pipes/time-difference.pipe.ts ***!
  \***********************************************/
/*! exports provided: TimeDifferencePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeDifferencePipe", function() { return TimeDifferencePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// When fixed, uncomment this
// import * as dayjs from 'dayjs';

// TODO:  dayjs is throiwing this ERROR:
//        error TS2339: Property 'to' does not exist on type 'Dayjs'.
// Luckily there is a PR which solves it (https://github.com/iamkun/dayjs/issues/297#issuecomment-442748858)
// When fixed, remove this line:
var dayjs = dayjs__WEBPACK_IMPORTED_MODULE_1__;
var TimeDifferencePipe = /** @class */ (function () {
    function TimeDifferencePipe() {
    }
    TimeDifferencePipe.prototype.transform = function (value) {
        return dayjs(value).diff(dayjs(), 'day');
    };
    TimeDifferencePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'appTimeDifference' })
    ], TimeDifferencePipe);
    return TimeDifferencePipe;
}());



/***/ }),

/***/ "./src/app/utils/shell-provider.ts":
/*!*****************************************!*\
  !*** ./src/app/utils/shell-provider.ts ***!
  \*****************************************/
/*! exports provided: ShellProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShellProvider", function() { return ShellProvider; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");



var ShellProvider = /** @class */ (function () {
    function ShellProvider(shellModel, dataObservable) {
        var _this = this;
        // We wait on purpose 2 secs on local environment when fetching from json to simulate the backend roundtrip.
        // However, in production you should set this delay to 0 in the environment.ts file.
        this.networkDelay = (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"] && _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].shell && _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].shell.networkDelay) ? _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].shell.networkDelay : 0;
        // To debug shell styles, change configuration in the environment.ts file
        this.debugMode = (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"] && _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].shell && _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].shell.debug) ? _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].shell.debug : false;
        // tslint:disable-next-line:max-line-length
        var shellClassName = (shellModel && shellModel.constructor && shellModel.constructor.name) ? shellModel.constructor.name : 'No Class Name';
        // tslint:disable-next-line:no-console
        console.time('[' + shellClassName + '] ShellProvider roundtrip');
        // Set the shell model as the initial value
        this._subject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](shellModel);
        var delayObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(this.networkDelay)
        // finalize(() => console.log('delayObservable COMPLETED'))
        );
        dataObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])() // Prevent the need to unsubscribe because .first() completes the observable
        // finalize(() => console.log('dataObservable COMPLETED'))
        );
        // Put both delay and data Observables in a forkJoin so they execute in parallel so that
        // the delay caused (on purpose) by the delayObservable doesn't get added to the time the dataObservable takes to complete
        var forkedObservables = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["forkJoin"])(delayObservable, dataObservable)
            .pipe(
        // finalize(() => console.log('forkedObservables COMPLETED'))
        )
            .subscribe(function (_a) {
            var delayValue = _a[0], dataValue = _a[1];
            if (!_this.debugMode) {
                _this._subject.next(dataValue);
                // tslint:disable-next-line:no-console
                console.timeEnd('[' + shellClassName + '] ShellProvider roundtrip');
            }
        });
        this._observable = this._subject.asObservable();
    }
    Object.defineProperty(ShellProvider.prototype, "observable", {
        get: function () {
            return this._observable;
        },
        enumerable: true,
        configurable: true
    });
    return ShellProvider;
}());



/***/ })

}]);
//# sourceMappingURL=default~deals-details-deals-details-module~deals-listing-deals-listing-module~food-details-food-deta~310374f5.js.map