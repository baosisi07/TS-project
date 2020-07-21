// 类型保护

export interface Aa {
    eat(): {};
    fly(): {}
}

export interface Bb {
    eat(): {};
    say(): {}
}

function protA(arg:Aa | Bb) {
    arg.eat() // 可直接访问公共属性
    if((<Aa>arg).fly()) { // 访问其他方法需要加类型断言
        (<Aa>arg).fly()
    } else {
        (<Bb>arg).say()
    }
}

// 类型保护函数
function isAa(arg: Aa | Bb): arg is Aa { // arg is Aa 是类型谓词
        return (<Aa>arg).fly !== undefined
    }

export function protB(arg: Aa | Bb) {
    arg.eat()
    if (isAa(arg)) {
        arg.fly()
    } else {
        arg.say()
    }
}

