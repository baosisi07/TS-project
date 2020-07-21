class Plant {
    constructor(name: string) {
        this.name = name
    }
    public name:string // public为默认修饰符
    private fn() {}
    protected category() {}
}

class PlantChild extends Plant {
    constructor(name:string,color: string) {
        super(name)
        this.color = color
        // this.fn() // 私有方法也不可被子类调用
        this.category() // 受保护方法可被子类调用
    }
    color:string
    output(){}
}

let plant = new Plant('flower')
// console.log(plant.fn()) 私有方法不可被实例访问
// console.log(plant.category()) 受保护方法不可被实例访问

let plantC = new PlantChild('flower','red');

// 修饰符也可加在构造函数上
// private 不可被继承和实例化
// protected 不可被实例化 但可被继承

// 抽象类 

abstract class Flower {
    constructor() {

    }
    grow() {
        console.log('growing')
    }
    abstract sleep(): void
}
// let flower = new Flower() 只能被继承 不可实例化

class FlowerChild1 extends Flower {
    sleep() {
        console.log('我是小花一号')
    }
}

class FlowerChild2 extends Flower {
    sleep() {
        console.log('我是小花二号')
    }
}
// 多态实现
let flower1 = new FlowerChild1()
let flower2 = new FlowerChild2()
const flowers:Flower[] = [flower1,flower2]
flowers.forEach(i => i.sleep())


// 类的链式调用
class Test {
    fn1() {
        return this
    }
    fn2() {
        return this
    }
}

class TestChild extends Test {
    next() {
        return this
    }
}

new TestChild().fn1().next().fn2()