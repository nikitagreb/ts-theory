"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Point12 = /** @class */ (function () {
    function Point12(x, y) {
        this.x = x;
        this.y = y;
    }
    Point12.prototype.a = function () {
    };
    return Point12;
}());
var D3Point12 = /** @class */ (function (_super) {
    __extends(D3Point12, _super);
    function D3Point12(x, y, z) {
        var _this = _super.call(this, x, y) || this;
        _this.z = z;
        _this.a();
        return _this;
    }
    D3Point12.prototype.a = function (name) {
    };
    return D3Point12;
}(Point12));
var point = new Point12(1, 1);
var d3point = new D3Point12(1, 1, 1);
var StaticTest = /** @class */ (function () {
    function StaticTest() {
    }
    StaticTest.test = function () {
        return 'gggg';
    };
    StaticTest.c = 'ssss';
    return StaticTest;
}());
var d12 = StaticTest.test();
var AbstractTest12 = /** @class */ (function () {
    function AbstractTest12() {
    }
    AbstractTest12.prototype.myMethod = function () {
        return 'myMethod';
    };
    return AbstractTest12;
}());
var Test12 = /** @class */ (function (_super) {
    __extends(Test12, _super);
    function Test12() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Test12;
}(AbstractTest12));
var D12 = /** @class */ (function () {
    function D12() {
    }
    D12.prototype.test = function () {
    };
    D12.prototype.test1 = function () {
        return 1;
    };
    return D12;
}());
