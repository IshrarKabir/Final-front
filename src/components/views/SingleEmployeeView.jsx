import React from 'react';
import { Link } from 'react-router-dom';

function SingleEmployeeView({ employee, tasks }) {
  if (!employee) {
    return <p>Loading employee data.....</p>;
  }

  return (
    <div>
      <h2>{employee.firstname} {employee.lastname}</h2>
      <p>Department: {employee.department}</p>

      <h3>Assigned Tasks:</h3>
      {tasks.length > 0 ? (
        <ul>
          {tasks.map((task) => (
            <li key={todo.id}>
              <Link to={`/tasks/${todo.id}`}>{todo.content}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No tasks assigned.</p>
      )}
      <h3><Link to={`/employees/${employee.id}/edit`}>Edit Employee Information</Link> </h3>
    </div>
    
  );
}

export default SingleEmployeeView;
