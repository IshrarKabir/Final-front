import AllEmployeesView from "../views/AllEmployeesView";
function AllEmployeesContainer(){
    let employees = [{id:12345, name: "Armin", department: "Sociology"}, {id:23451, name: "Hange", department: "Chemistry"}, {id:34512, name: "Levi", department: "Physics"} ];
    return (
        <AllEmployeesView employees = {employees}/>
    );
}

export default AllEmployeesContainer;