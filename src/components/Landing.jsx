import React from 'react'
import MyImg1 from '../assets/images/pic1.png'
import MyImg2 from '../assets/images/pic2.png'
import { Link } from 'react-router-dom'



function Landing() {
  return (
    <div style={{height:'70vh'}} className='d-flex  align-items-center justify-content-center' >
        <div className='d-flex flex-column align-items-center justify-content-center' style={{height:'100vh',width:'40%'}} >
        <h1 style={{color:'#ff7e67' ,fontFamily: '"Major Mono Display", monospace' }}>STUDENTS CORNER</h1>
        <h5 className='mt-5 ms-5'>A student management web app designed for teachers allows them to efficiently add, delete, and update student details.</h5>
        <Link to="/Add">
        <button className="mt-5 btn btn-danger">START</button>
      </Link>

            

            

        </div>
        <div style={{width:'60%'}} className=' d-flex align-items-center justify-content-center '>
            <div  style={{height:'50vh',marginTop:'10px'}} className='w-50'>
                 <img  style={{width:'100%',height:'100%'}} src={MyImg2} alt="" />

            </div>
            <div style={{height:'40vh',marginTop:'80px'}} className='w-50'>
                    <img style={{width:'97%',height:'100%'}} src={MyImg1} alt="" />



            </div>

        </div>
      
    </div>
  )
}

export default Landing
