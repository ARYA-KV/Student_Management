import React, { useEffect, useState } from 'react'
import {  UpdateStudentAPI, getAllStudentAPI, removeStudentAPI } from '../services/allAPI'
import {Table,Modal,Button,Form} from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';








function View() {
  const [deleteResponse, setDeleteResponse] = useState("");
  //modal
  const [show, setShow] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);


  const handleClose = () => setShow(false);
  const handleShow = (student) => {
    setSelectedStudent(student);
    setShow(true);
  };
  //to store all video create state with array to store
  const [allStudents,setAllStudents]=useState([])
  console.log(allStudents);
  useEffect(()=>{
    getAllStudents()

  },[])
  const getAllStudents=async()=>{
    try {
      const result=await getAllStudentAPI()
      console.log(result);
      if (result.status>=200 && result.status<300) {
        setAllStudents(result.data)
        
      }
      
    } catch (error) {
      console.log(error);
      
    }
  }
  //update student :API call
  const updateStudent = async () => {
    try {
      const updateResult = await UpdateStudentAPI(selectedStudent.id, selectedStudent);
      console.log(updateResult);
      if (updateResult.status >= 200 && updateResult.status < 300) {
        // Update the local state with the updated student list
        setAllStudents((prevStudents) =>
          prevStudents.map((student) =>
            student.id === selectedStudent.id ? selectedStudent : student
          )
        );
        toast.success(" Updated Succesfully")
        handleClose();
      }
    } catch (error) {
      console.log(error);
    }
  };
  //delete
 

  const handleDelete=async(id)=>{
    try {
    const deleteResult= await removeStudentAPI(id)
     getAllStudentAPI()
     console.log(deleteResult);
     setDeleteResponse(deleteResult.data);
     getAllStudents()
     
     

      
    } catch (error) {
      console.log(error);
      
    }

  }
 
   
  
  return (
    <>
    <h1 className='mt-5' style={{textAlign:'center',color:'	#191970'}}>ALL STUDENTS</h1>
    {
      allStudents.length>0?
      allStudents?.map((student,index)=>(
        <div key={index} className='mt-5 mb-5 w-100 d-flex align-items-center justify-content-center'>
      
     <Table style={{width:'900px'}}  striped bordered hover  variant="light" >
      <thead >
        <tr >
          <th style={{color:'orange'}}>Register Number</th>
          <th style={{color:'orange'}}>Full Name</th>
          <th style={{color:'orange'}}>Age</th>
          <th style={{color:'orange'}}>Division</th>
         

        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{student.registerNumber}</td>
          <td>{student.name}</td>
          <td>{student.age}</td>
   


          <td>{student.division}</td>
         
        </tr>
        
       
       
      </tbody>
       
      <i  onClick={() => handleShow(student)} class="fa-solid fa-pen-to-square mt-2" style={{color:' #48f019',marginLeft:'10px',marginRight:'20px',fontSize:'22px'}}></i> 
     
      <i onClick={()=>handleDelete(student?.id)} class="fa-solid fa-trash" style={{color:'#e62719',fontSize:'20px' }}></i>
    </Table>
      
    </div>

      ))
      :
      <div className="fw-bolder text-danger">Nothing to display</div>
    }
    {/* modal */}
     <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title style={{marginLeft:'110px',color:'#F88379'}}>EDIT STUDENT DETAILS</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div  className='w-100 bg-dark d-flex flex-column justify-content-center align-items-center' style={{height:'300px'}}>
       <div className=' sub-container  mt-2'>
        
          <Form.Control
            
             style={{ width: '400px', height: '50px', border: '1px solid' }}
            type='text'
            placeholder='Register id'
            value={selectedStudent?.registerNumber }
            onChange={(e) => setSelectedStudent({ ...selectedStudent, registerNumber: e.target.value })}


          />
          <Form.Control
           
             style={{ width: '400px', height: '50px', border: '1px solid' }}
            className='mt-3'
            type='text'
            placeholder='Name'
            value={selectedStudent?.name }
            onChange={(e) => setSelectedStudent({ ...selectedStudent,name : e.target.value })}


          />
          <Form.Control
            
            style={{ width: '400px', height: '50px', border: '1px solid' }}
            className='mt-3'
            type='text'
            placeholder='Age'
            value={selectedStudent?.age }
            onChange={(e) => setSelectedStudent({ ...selectedStudent,age : e.target.value })}




          />
          <Form.Control
          
             style={{ width: '400px', height: '50px', border: '1px solid' }}
            className='mt-3'
            type='text'
            placeholder='Division'
            value={selectedStudent?.division }
            onChange={(e) => setSelectedStudent({ ...selectedStudent,division : e.target.value })}




          />
        </div>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={updateStudent} variant="danger">UPDATE</Button>
        </Modal.Footer>
      </Modal>
  
    
      <ToastContainer position='top-center' theme='colored' autoClose={3000} />

    
    </>
  )
}


export default View
