import React, { Component } from "react"
import { Form, Input, Button, Select } from 'antd'
import { employeeRequest, EmployeeResponse } from '../../interface/employee'
import { FormProps } from 'antd/lib/form'
const { Option } = Select;
interface Props extends FormProps {
    onDataChange(param: employeeRequest, callback: () => void):void
}
class EmployeeFrom extends Component<Props, employeeRequest> {
    state: employeeRequest = {
        name: '',
        departmentId: null
    }
    handleChange = (value: number) => {
        this.setState({
            departmentId: value
        })
    }
    nameChange = (e:React.FormEvent<HTMLInputElement>) => {
        this.setState({
            name: e.currentTarget.value
        })
    }
    submit = () => {
        this.queryEmployee(this.state)
    }
    componentDidMount() {
        this.queryEmployee(this.state)
    }
    queryEmployee = (param: employeeRequest) => {
        this.props.onDataChange(param,() => {console.log('finished')})

    }
    render() {
        return (
            <>
                <Form layout="inline">
                    <Form.Item>
                        <Input placeholder="姓名" style={{ width: 120 }} value={this.state.name} onChange={this.nameChange}/>
                    </Form.Item>
                    <Form.Item>
                        <Select placeholder="部门" style= {{width: 120}} onChange={this.handleChange}>
                            <Option value={1}>产品部门</Option>
                            <Option value={2}>设计部门</Option>
                            <Option value={3}>技术部门</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" onClick={this.submit}>查询</Button>
                    </Form.Item>
                </Form>
            </>
        )
    }
}

export default EmployeeFrom;