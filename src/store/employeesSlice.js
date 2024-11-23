//REDUCER
const initialState = [];

export function employeesReducer(state = initialState, action) {
    switch (action.type) {
      case 'employees/employeesLoaded':
        return action.payload;
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
export const deleteEmployee = (employeeId) => async (dispatch) => {
  try {
    await axios.delete(`/api/employees/${employeeId}`); 
    dispatch(employeeDeleted(employeeId)); 
  } catch (err) {
    console.error("Error deleting employee:", err);
  }
};