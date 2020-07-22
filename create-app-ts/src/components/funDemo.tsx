import React from 'react'
import { Button } from 'antd';
interface A {
    name: string
}
const Hello = (props: A) => (<Button>hello {props.name}</Button>)

export default Hello