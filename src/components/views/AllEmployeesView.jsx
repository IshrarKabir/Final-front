// import { Link } from "react-router-dom";
// function AllEmployeesView(props) {
//     return (
//     <>
//     <h4>ALL EMPLOYEES</h4>
//     <Link to={'/'}><button>Back to Home</button></Link>
//     </>
//     );
//     }
// export default AllEmployeesView;


import { Link } from "react-router-dom";
import './styles/all-tasks.css';

let ulStyle = {
  border: "3px solid #0d0",
  width: "70%",
  margin: "0 auto",
  overflow: "auto",
};

let liStyle = {
  padding: "8px 16px",
  borderBottom: "3px solid #0d0",
  backgroundColor: "#e5f0e1",
};

let liStyleLastChild = {
  ...liStyle,
  borderBottom: "none",
};


function AllEmployeesView({employees}) {
  if (!employees.length) {
    return (
      <div>There are no employees.</div>
    );
  }
  return (
    <>
    <div id="bgview" style={{display: "flex", flexDirection: "column", padding: "8px", minWidth: "500px"}} >
      <Link to={`/`}><button style={{margin: "8px"}}>Back to Home</button></Link>
      <Link to={`/employees/new`}><button style={{margin: "8px"}}>Add Employee</button></Link>
      <div style={ulStyle}>
        {employees.map((employee, idx) => {
          let styleBool = idx === employees.length - 1 ? liStyleLastChild : liStyle;
          return (
            <div key={employee.id} style={styleBool}>
              <h4>Employee #{idx+1}: <Link to={`/employees/${employee.id}`}>{employee.firstname} {employee.lastname}</Link></h4>
              <h5>Depertment: {employee.department} </h5>
              {/* <button onClick={() => deleteEmployee(employee.id)}>Delete</button>  */}
              <button onClick={() => onDelete(employee.id)} style={{ color: "red", marginLeft: "10px" }}>X</button>
            </div>
          );
        })}
      </div>
    </div>
    </>
  );

}

export default AllEmployeesView;