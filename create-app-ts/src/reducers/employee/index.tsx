
import { get } from '../../utils/request'
import { EMPLOYEEREQUEST } from '../../constants/urls'
import { GET_EMPLOYEE} from '../../actions/employee/index'
import { employeeRequest, EmployeeResponse } from '../../interface/employee'
import {Dispatch} from 'redux'

type State = Readonly<{
    employeeList: EmployeeResponse
}>

type Action = {
    type: string,
    payload: any
}
const initialState:State = {
    employeeList: undefined
}

export function getEmployee(param: employeeRequest, callback:() => void) {
    return (dispatch:Dispatch) => {
        get(EMPLOYEEREQUEST, param).then(res => {
            dispatch({
                type: GET_EMPLOYEE,
                payload: res.data
            })
        })
    }
}

export default function (state = initialState, action:Action) {
    switch (action.type) {
        case GET_EMPLOYEE:
            return {
                ...state,
                employeeList: action.payload
            }
        default:
            return state
    }

}