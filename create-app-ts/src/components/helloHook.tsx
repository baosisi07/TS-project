import React,{useState,useEffect} from 'react'
import {Button} from 'antd'

interface A {
    name: string
}
const HookHello = function (props: A) {
    let [count, setCount] = useState(0)
    let [text, setText] = useState<string | null>(null)
    useEffect(()=> {
        if(count > 8) {
            setText('可以歇歇了')
        }
    },[count])
    return (
        <>
            <p>点击了 {count} 次 {text}</p>
            <Button onClick={() => {setCount(count+1)}}>hello {props.name}</Button>
        </>
    )
}

export default HookHello