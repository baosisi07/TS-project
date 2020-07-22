import React, {Component} from 'react'
import ClassHello from './classDemo'

interface Loading {
    loading: Boolean
}
function HOCLoading<P>(WrapperComponent:React.ComponentType<P>) {
    return class extends Component<P & Loading> {
        
        render() {
        let { loading, ...props } = this.props;
        return loading ? <p>loading</p> : <WrapperComponent {...props as P} />
        }
    }
}

export default HOCLoading(ClassHello)