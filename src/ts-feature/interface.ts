// 接口用于声明一组抽象方法 接口不会被编译
interface Person {
    name: string,
    age?: number, // 可选属性
    sex: string,
    sayHi: () => string
}


let person1:Person = {
    name: 'bss',
    sex: 'female',
    sayHi:() => {return '123'}
}

interface Arr {
    [index:number]: string // 可以将索引和值设为不同类型
    // [index:string]: number
}

// 接口继承
interface Person1 {
    note: string
}
interface Musician extends Person {

}
// 继承多个用逗号分隔

interface programmer extends Person, Person1 {

}

// 函数类型接口

// 1.变量定义函数类型
let add: (x:number,y:number) => number

// 2.接口定义
interface Add {
    (x:number,y:number):number
}

// 3.类型别名定义
type Add1 = (x:number,y:number) => number

let addd:Add = (a,b) => a+b

// 混合类型接口

interface Lib { //首先是函数
    (): void,
    version: string,
    say(): void
}

let lib: Lib= (()=>{}) as Lib
lib.version = '1.0'
lib.say = () => {}