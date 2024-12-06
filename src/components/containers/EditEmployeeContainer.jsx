import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { fetchEmployees, editEmployee } from '../../store/employeesSlice';
import { useEffect } from 'react';

import EditEmployeeView from '../views/EditEmployeeView';

function EditEmployeesContainer() {
  let { employeeId } = useParams(); //get id from URL
  employeeId = parseInt(employeeId); //convert to integer

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  //get employee from state based on URL parameter
  const employee = useSelector(state =>
    state.employees.find(emp => emp.id === employeeId)
  );
  
  //get employees for dropdown
  const employees = useSelector((state) => state.employees);

  const handleSubmit = (e) => {
    // Prevent server submission
    e.preventDefault();

    // Get data from form
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    // Create the Employees object and dispatch the `addEmployees` thunk
    const updates = {
        ...employee,
        firstname: formJson.firstname,
        lastname: formJson.lastname,
        department: formJson.department,
      };
  
      dispatch(editEmployee(updates));
  
      alert("Employee updated!");
    }
  
    return <EditEmployeeView employee={employee} handleSubmit={handleSubmit} />;
  }
  
  export default EditEmployeesContainer;

  