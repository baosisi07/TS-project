// TS基本数据类型
// 除了js的类型外 新增类型有：
// void any never 元组 枚举 及 高级类型
let message:string = "Hello World" 
console.log(message)
// null 和 undefined是其他类型的子类型
// 需关闭 --strictNullChecks后赋值
// message = null;
// message = undefined;

let num:number|string; // 联合类型
num = 12;
console.log(num)
num = "123456";
console.log(num)

// 数组类型
let arr: number[] = [1,2]
let arr1: Array<number> = [3,4]

// 元组
let x:[number, string];
x = [1,'ss']

// 枚举
enum Color {Red = 2, Green, Blue} //可赋值开始值 后续值递增
let c:Color = Color.Green;
console.log(c)

// void 方法返回值类型 表示没有返回值 即返回undefined
let fn: () => {}

// any
let y // 默认为any类型 相当于js

// never永远没有返回值

// 例如：抛错或死循环


