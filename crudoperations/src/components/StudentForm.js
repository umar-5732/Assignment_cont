import React, { useState, useEffect } from 'react';

const StudentForm = ({ addStudent, updateStudent, currentStudent }) => {
  const [student, setStudent] = useState({
    id: null,
    name: '',
    age: '',
    gender: '',
  });

  useEffect(() => {
    if (currentStudent !== null) {
      setStudent(currentStudent);
    } else {
      setStudent({ id: null, name: '', age: '', gender: '' });
    }
  }, [currentStudent]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (student.name === '' || student.age === '' || student.gender === '') {
      alert('Please fill all fields');
      return;
    }
    if (currentStudent === null) {
      addStudent(student);
    } else {
      updateStudent(student);
    }
    setStudent({ id: null, name: '', age: '', gender: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={student.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Age:</label>
        <input
          type="text"
          name="age"
          value={student.age}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Gender:</label>
        <input
          type="text"
          name="gender"
          value={student.gender}
          onChange={handleChange}
        />
      </div>
      <button type="submit">{currentStudent ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default StudentForm;
