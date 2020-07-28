import React, { Component } from "react"
import {connect} from 'react-redux'
import {Dispatch, bindActionCreators} from 'redux'
import { Table } from 'antd'
import FormRequest from './formRequest'
import {EmployeeResponse,employeeRequest} from '../../interface/employee'
import {employeeColumns} from './column'
import { getEmployee} from '../../reducers/employee'
interface Props {
    employeeList: EmployeeResponse,
    setEmployee(param: employeeRequest, callback: () => void): void
}
class EmployeeForm extends Component<Props> {

    getTotal = () => {
        let total = 0;
        if (typeof this.props.employeeList !== 'undefined') {
            total = this.props.employeeList.length
        } else {
            total = 0
        }
        return <p>总共{total}</p>
    }
    render() {
        const {setEmployee,employeeList} = this.props
        return (
            <>
                <FormRequest onDataChange={setEmployee} />
                {this.getTotal()}
                <Table columns={employeeColumns} dataSource={employeeList} className="table" />
            </>
        )
    }
}
const mapStateToProps = (state:any) => ({
    employeeList: state.employeeList
})
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    setEmployee: getEmployee
},dispatch)
export default connect(mapStateToProps,mapDispatchToProps)(EmployeeForm)