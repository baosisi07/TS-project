import React from 'react'

interface A {
    name: string
}
const Hello = (props: A) => <h1>Hello {props.name}!</h1>

export default Hello