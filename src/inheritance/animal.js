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
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function (distance) {
        console.log("".concat(this.name, " \u79FB\u52A8\u4E86 ").concat(distance, " \u7C73"));
    };
    Animal.prototype.makeSound = function () {
        console.log("".concat(this.name, " \u53D1\u51FA\u58F0\u97F3"));
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, breed) {
        var _this = _super.call(this, name) || this; // 调用父类构造函数
        _this.breed = breed;
        return _this;
    }
    // 重写 父类 makeSound 方法
    Dog.prototype.makeSound = function () {
        console.log("".concat(this.name, " \u8BF4: \u6C6A\u6C6A\u6C6A"));
    };
    // 新增方法
    Dog.prototype.fetch = function (item) {
        console.log("".concat(this.name, " \u6361\u56DE\u4E86 ").concat(item));
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // 重写 父类 makeSound 方法
    Cat.prototype.makeSound = function () {
        console.log("".concat(this.name, " \u8BF4: \u55B5\u55B5\u55B5"));
    };
    // 新增方法
    Cat.prototype.scratch = function () {
        console.log("".concat(this.name, " \u6293\u6320\u5BB6\u5177"));
    };
    return Cat;
}(Animal));
// 使用
var dog = new Dog('Buddy', 'Golden Retriever');
dog.move(10); // 继承自Animal
dog.makeSound(); // 重写的方法
dog.fetch('ball'); // Dog独有方法
var cat = new Cat('Whiskers');
cat.move(5);
cat.makeSound();
cat.scratch();
