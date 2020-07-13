interface Human {
    name:string;
    age?: 0;
    eat(): void
}

interface Boy extends Human {
    sex: string
}

class Work implements Boy { //类可以继承接口 只能作为public类型 class implements interface
    constructor() {
        this.name = ''
        this.sex = 'male'
    }
    // private name: string // 接口只能定义共有属性
    name: string
    sex: string
    eat() {console.log('eat what')}
}

class Auto {
    state= 1
    private age=20
    protected say() {}
}
// 接口可以继承类 包括private public protected类型的属性及方法 interface extends class
interface TestInterface extends Auto {
    name: string
}

// class S implements TestInterface {
//     state = 1
//     name = 'bss'
// }