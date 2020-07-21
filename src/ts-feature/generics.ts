// 泛型 不用预先确定的数据类型 具体类型在使用时才能确定
// 泛型函数
function log<T>(val:T):T {
    return val
}

log<string[]>(['1'])
log(['2']) // 通过类型推断
// 类型别名定义
type Log = <T>(val:T)=>T
let myLog:Log = log

// 泛型接口
interface LogA {
    <T>(val:T):T
}

let logA:LogA = log 
// 可约束所有成员
interface LogB<T> {
    (val: T): T
}

let logB:LogB<string> = log // 需传入类型

// 泛型类

class G<T> {
    log(val:T) {
        return val
    }
}

let g = new G<number>()
g.log(1)

let g1 = new G()
g1.log('123')

// 泛型约束
interface Len {
    length: number
}
 function write<T extends Len>(val:T):T {
     console.log(val,val.length)
    return val
 }

write('123')
write([])
write({length:1})