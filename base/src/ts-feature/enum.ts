// 数字枚举 会进行反向映射
enum Animal {
    dog,
    cat
}
// 字符串枚举
enum Message {
    success= "成功",
    fail= "失败"
}

// Animal.dog = 2; 枚举值是只读的 不可修改

// 枚举成员类型

enum Example {
    // 常量方式 编译时计算值
    a,
    b = Example.a,
    c = 1 + 3,
    // computed 运行时计算
    d = Math.random(),
    e = '1234'.length
}

// 常量枚举 用const 声明的枚举 会在编译阶段移除 减少代码量
const enum Year {
    pre,
    now,
    next
}
// 只用到枚举值的时候使用常量枚举
let year = [Year.pre,Year.now,Year.next]

// 枚举类型
// 枚举和枚举成员都可以作为类型使用

enum A {
    a,
    b
}
enum B {
    a = '111',
    b = '222'
}

let a1: A = 2
let a2: A.a = 1
let a3: A.b = 3
let a4: A.a = 4
// a2 === a3 不同成员类型不可比较
a2 === a4

// let b:B = '111' 字符串枚举只能取值为其成员类型
let b1:B = B.a
let b2:B.b = B.b