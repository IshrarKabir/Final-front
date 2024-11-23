import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEmployees } from '../../store/employeesSlice';
import SingleEmployeeView from '../views/SingleEmployeeView';

function SingleEmployeeContainer() {
  const { employeeId } = useParams();
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);


  const employee = useSelector((state) =>
    state.employees.find((emp) => emp.id === parseInt(employeeId, 10))
  );
  const employeeTasks = tasks.filter(t=> t.id == employeeId)

 
  return <SingleEmployeeView employee={employee} tasks={employeeTasks}/>;
}

export default SingleEmployeeContainer;
