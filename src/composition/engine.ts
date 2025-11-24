// eg. 汽车组合引擎
class Engine {
    constructor(public horsepower: number) {}

    start() {
        console.log(`引擎启动，马力为${this.horsepower}hp`);
    }
}

class Car {
    // 在构造函数中创建引擎，引擎生命周期由Car管理
    private engine: Engine;

    constructor(engineHorsepower: number) {
        this.engine = new Engine(engineHorsepower);
    }

    startCar() {
        this.engine.start();
        console.log('汽车启动');
    }

    // 当汽车被销毁时，引擎也随之销毁
}

// 使用
const myCar = new Car(300);
myCar.startCar(); // 引擎启动，马力为300hp 汽车启动
// 无法直接访问engine实例，它的生命周期完全由car控制