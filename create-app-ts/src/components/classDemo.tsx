import React, { Component } from "react"
 import {Button} from 'antd'
// props类型接口
interface A {
    name:string,
    type?: string
}

// state类型接口
interface B {
    count: number
}
class classHello extends Component<A,B> {
    state: B = {
        count: 0
    }
    static defaultProps = {
        type: 'ts'
    }
    render() {
        return (
            <>
                <p>共点击 {this.state.count} 次</p>
                <Button onClick={()=>{this.setState({count: this.state.count+1})}}>hello {this.props.name}</Button>
            </>
        )
    }
}

export default classHello