import React, { useState } from 'react';
import Student from './Student';
import StudentForm from './StudentForm';

const StudentList = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'John', age: 20, gender: 'Male' },
    { id: 2, name: 'Sarah', age: 21, gender: 'Female' },
    { id: 3, name: 'David', age: 19, gender: 'Male' },
  ]);

  const [editing, setEditing] = useState(false);
  const [currentStudent, setCurrentStudent] = useState(null);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  const editStudent = (id) => {
    setEditing(true);
    setCurrentStudent(students.find((student) => student.id === id));
  };

  const updateStudent = (updatedStudent) => {
    setEditing(false);
    setStudents(
      students.map((student) =>
        student.id === updatedStudent.id ? updatedStudent : student
      )
    );
    setCurrentStudent(null);
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <div className="student-list">
      <h1 className="title">Student Management System</h1>
      <div className="grid-container">
        <div className="form-container">
          <h2 className="subtitle">Add/Edit Student</h2>
          <StudentForm
            addStudent={addStudent}
            updateStudent={updateStudent}
            currentStudent={currentStudent}
            editing={editing}
          />
        </div>
        <div className="list-container">
          <h2 className="subtitle">Student List</h2>
          <ul>
            {students.map((student) => (
              <Student
                key={student.id}
                student={student}
                editStudent={editStudent}
                deleteStudent={deleteStudent}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StudentList;
