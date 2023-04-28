import React from 'react';

const Student = ({ student, editStudent, deleteStudent }) => {
  return (
    <li>
      <div>
        <span>
          <strong>Name:</strong> {student.name}
        </span>
        <span>
          <strong>Age:</strong> {student.age}
        </span>
        <span>
          <strong>Gender:</strong> {student.gender}
        </span>
      </div>
      <div>
        <button onClick={() => editStudent(student.id)}>Edit</button>
        <button onClick={() => deleteStudent(student.id)}>Delete</button>
      </div>
    </li>
  );
};

export default Student;
