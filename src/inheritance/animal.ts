class Animal {
    constructor(protected name: string) {}

    move (distance: number) {
        console.log(`${this.name} 移动了 ${distance} 米`);
    }

    makeSound () {
        console.log(`${this.name} 发出声音`);
    }
}

class Dog extends Animal {
    constructor(name: string, private breed: string) {
        super(name); // 调用父类构造函数
    }

    // 重写 父类 makeSound 方法
    makeSound() {
        console.log(`${this.name} 说: 汪汪汪`);
    }

    // 新增方法
    fetch(item: string) {
        console.log(`${this.name} 捡回了 ${item}`);
    }
}

class Cat extends Animal {
    // 重写 父类 makeSound 方法
    makeSound() {
        console.log(`${this.name} 说: 喵喵喵`);
    }

    // 新增方法
    scratch() {
        console.log(`${this.name} 抓挠家具`);
    }
}

// 使用
const dog = new Dog('Buddy', 'Golden Retriever');
dog.move(10);      // 继承自Animal
dog.makeSound();   // 重写的方法
dog.fetch('ball');       // Dog独有方法

const cat = new Cat('Whiskers');
cat.move(5);
cat.makeSound();
cat.scratch();