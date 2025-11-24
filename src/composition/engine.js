// eg. 汽车组合引擎
var Engine = /** @class */ (function () {
    function Engine(horsepower) {
        this.horsepower = horsepower;
    }
    Engine.prototype.start = function () {
        console.log("\u5F15\u64CE\u542F\u52A8\uFF0C\u9A6C\u529B\u4E3A".concat(this.horsepower, "hp"));
    };
    return Engine;
}());
var Car = /** @class */ (function () {
    function Car(engineHorsepower) {
        this.engine = new Engine(engineHorsepower);
    }
    Car.prototype.startCar = function () {
        this.engine.start();
        console.log('汽车启动');
    };
    return Car;
}());
// 使用
var myCar = new Car(300);
myCar.startCar(); // 引擎启动，马力为300hp 汽车启动
// 无法直接访问engine实例，它的生命周期完全由car控制
