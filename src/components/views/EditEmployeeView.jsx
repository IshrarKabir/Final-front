// import React from 'react';
import { Link } from "react-router-dom";

function EditEmployeeView({ employee, handleSubmit }) {
  if (!employee) {
    return <p>Loading employee data...</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstname">First name: </label>
        <input
          type="text"
          id="name"
          name="firstname"
          defaultValue={employee.firstname}
          required
        />
      </div>

      <div>
        <label htmlFor="lastname">Last name: </label>
        <input
          type="text"
          id="name"
          name="lasttname"
          defaultValue={employee.lastname}
          required
        />
      </div>


      <div>
        <label htmlFor="department">Department: </label>
        <input
          type="text"
          id="department"
          name="department"
          defaultValue={employee.department}
          required
        />
      </div>

      <button type="submit">Save Changes</button>
      <Link to="../employees">
    <button type="button">Back to Employees</button>
    </Link>
    </form>
  );
}

export default EditEmployeeView;