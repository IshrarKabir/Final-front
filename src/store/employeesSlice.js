//REDUCER
const initialState = [];

export function employeesReducer(state = initialState, action) {
    switch (action.type) {
      case 'employees/employeesLoaded':
        return action.payload;
      case "employees/employeeAdded":
        return [...state, action.payload];
        case 'employees/employeesDeleted':
          console.log(state.filter(employee => employee.id!==action.payload))
          return state.filter(employee => employee.id!==action.payload);
      default:
        return state;
    }
};

//API calls go here
import axios from "axios";
//PATH (should be where your server is running)
const PATH = "http://localhost:5001/api/employees";

//Thunk 
export const fetchEmployees = () => async (dispatch) => {
  try {
    let res = await axios.get(`${PATH}`);
    dispatch({type: 'employees/employeesLoaded', payload: res.data});
  } catch(err) {
    console.error(err);
  }
};

//DELETE EMPLOYEE
export const deleteEmployee = employeeId => async dispatch => {
  try {
    // await axios.delete(`/api/employees/${employeeId}`); 
    await axios.delete(`${PATH}/${employeeId}`);
    dispatch({type: 'employees/employeesDeleted', payload: employeeId});
    // dispatch(employeeDeleted(employeeId)); 
  } catch (err) {
    console.error (err);
  }
};

//Add employee

export const addEmployee = (employeeData) => async (dispatch) => {
  try {
    const res = await axios.post(`${PATH}`, employeeData);
    dispatch({ type: 'employees/employeeAdded', payload: res.data });
  } catch (err) {
    console.error(err);
  }
};


/* EDIT EMPLOYEE */
export const editEmployee = employee => async dispatch => {
  try {
    let res = await axios.put(`${PATH}/${employee.id}`, employee);
    //res.data is the updated course
    dispatch({type: 'employees/employeeUpdated', payload: res.data});
  } catch(err) {
    console.error(err);
  }
};