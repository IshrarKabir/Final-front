import React from 'react';

function EditEmployeeView({ employee, handleSubmit }) {
  if (!employee) {
    return <p>Loading employee data...</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          defaultValue={employee.name}
          required
        />
      </div>

      <div>
        <label htmlFor="position">Position:</label>
        <input
          type="text"
          id="position"
          name="position"
          defaultValue={employee.position}
          required
        />
      </div>

      <div>
        <label htmlFor="department">Department:</label>
        <input
          type="text"
          id="department"
          name="department"
          defaultValue={employee.department}
          required
        />
      </div>

      <div>
        <label htmlFor="active">Active:</label>
        <select id="active" name="active" defaultValue={employee.active ? 'true' : 'false'}>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
      </div>

      <button type="submit">Save Changes</button>
    </form>
  );
}

export default EditEmployeeView;