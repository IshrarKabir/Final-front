// import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "../../store/employeesSlice";
import NewEmployeeView from "../views/NewEmployeeView";

const NewEmployeeContainer = () => {
    const dispatch = useDispatch();
  
    const handleSubmit = (e) => {

      e.preventDefault();
  
      const form = e.target;
      const formData = new FormData(form);
      const formJson = Object.fromEntries(formData.entries());
  
 
      const newEmployee = {
        firstname: formJson.firstname,
        lastname: formJson.lastname,
        department: formJson.department,
      };
  
      dispatch(addEmployee(newEmployee));
  

      form.reset();
    };
  
    return <NewEmployeeView handleSubmit={handleSubmit} />;
  };
  
  export default NewEmployeeContainer;