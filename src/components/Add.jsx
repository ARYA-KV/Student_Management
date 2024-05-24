import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addStudentsAPI } from '../services/allAPI';

function Add() {
  const [studentDetails, setStudentDetails] = useState({
    registerNumber: '',
    name: '',
    age: '',
    division: ''
  });

  const [errors, setErrors] = useState({
    registerNumber: '',
    name: '',
    age: '',
    division: ''
  });

  const validate = () => {
    const newErrors = {};
    if (!/^LSNG1912\d+$/.test(studentDetails.registerNumber)) {
      newErrors.registerNumber = 'Register number must start with LSNG1912 followed by roll number';
    }
    if (!/^[A-Za-z]+$/.test(studentDetails.name)) {
      newErrors.name = 'Name must contain only alphabets';
    }
    if (!/^(?:[4-9]|1[0-7])$/.test(studentDetails.age)) {
      newErrors.age = 'Age must be between 4 and 17';
    }
    if (!/^(1[0-2]|[1-9])[A-Za-z]$/.test(studentDetails.division)) {
      newErrors.division = 'Division must be a number from 1 to 12 followed by an alphabet (e.g., 9A)';
    }
    return newErrors;
  };

  const handleAdd = async () => {
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({}); // Clear errors if validation passes

    const { registerNumber, name, age, division } = studentDetails;
    if (registerNumber && name && age && division) {
      console.log('API call');
      try {
        const result = await addStudentsAPI(studentDetails);
        console.log(result);
        if (result.status >= 200 && result.status < 300) {
          console.log(result.data);
          toast.success('New student added.');
          // Reset the form after successfully adding a student
          setStudentDetails({
            registerNumber: '',
            name: '',
            age: '',
            division: ''
          });
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      toast.warning('Please fill the form completely');
    }
  };

  console.log(studentDetails);
  return (
    <div
      style={{ height: '100vh', backgroundColor: '#f6f6f6' }}
      className='main-div w-100 d-flex align-items-center justify-content-center'
    >
      <div
        className='container w-50'
        style={{ backgroundColor: '#F4F5F7', height: '80vh', borderRadius: '10px' }}
      >
        <h2 className='mt-5' style={{ textAlign: 'center', color: '#D1423D', fontWeight: 'bold' }}>
          STUDENT DETAILS
        </h2>
        <div className='mt-5 sub-container d-flex flex-column justify-content-center align-items-center mt-5'>
          <Form.Control
            value={studentDetails.registerNumber}
            onChange={(e) => setStudentDetails({ ...studentDetails, registerNumber: e.target.value })}
            style={{ width: '38vw', height: '50px', border: '1px solid' }}
            type='text'
            placeholder='Register Number'
            isInvalid={!!errors.registerNumber}
          />
          {errors.registerNumber && <div style={{ color: 'red' }}>{errors.registerNumber}</div>}
          <Form.Control
            value={studentDetails.name}
            onChange={(e) => setStudentDetails({ ...studentDetails, name: e.target.value })}
            style={{ width: '38vw', height: '50px', border: '1px solid' }}
            className='mt-3'
            type='text'
            placeholder='Name'
            isInvalid={!!errors.name}
          />
          {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
          <Form.Control
            value={studentDetails.age}
            onChange={(e) => setStudentDetails({ ...studentDetails, age: e.target.value })}
            style={{ width: '38vw', height: '50px', border: '1px solid' }}
            className='mt-3'
            type='text'
            placeholder='Age'
            isInvalid={!!errors.age}
          />
          {errors.age && <div style={{ color: 'red' }}>{errors.age}</div>}
          <Form.Control
            value={studentDetails.division}
            onChange={(e) => setStudentDetails({ ...studentDetails, division: e.target.value })}
            style={{ width: '38vw', height: '50px', border: '1px solid' }}
            className='mt-3'
            type='text'
            placeholder='Class and Division'
            isInvalid={!!errors.division}
          />
          {errors.division && <div style={{ color: 'red' }}>{errors.division}</div>}

          <Button
            onClick={handleAdd}
            style={{ fontWeight: 'bold' }}
            type='button'
            className='mt-5 p-2'
            variant='warning'
          >
            ADD STUDENT
          </Button>
        </div>
      </div>
      <ToastContainer position='top-center' theme='colored' autoClose={3000} />
    </div>
  );
}

export default Add;
