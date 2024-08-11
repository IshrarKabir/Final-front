import AllEmployeesView from "../views/AllEmployeesView";
function AllEmployeesContainer(){
    let employees = [{id:12345, name: "Armin", department: "Sociology"}, {id:23451, name: "Hange", department: "Chemistry"}, {id:34512, name: "Levi", department: "Physics"} ];
    return (
        <AllEmployeesView employees = {employees}/>
    );
}

export default AllEmployeesContainer;


// import AllEmployeesView from "../views/AllEmployeesView";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchEmployees } from "../../store/employeesSlice";

// function AllEmployeesContainer() {
//     const employees = useSelector((state) => state.employees);
//     const dispatch = useDispatch();

//     useEffect(() => {
//         dispatch(fetchEmployees());
//       }, [dispatch]);
    
//     return (
//        <AllEmployeesView employees={employees} />
//     );

// }

// export default AllEmployeesContainer;