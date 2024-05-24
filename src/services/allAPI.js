import commonAPI from "./commomAPI"
import SERVER_URL from "./server-url"


// add all students
export const addStudentsAPI=async(student)=>{
    return await commonAPI("POST",`${SERVER_URL}/allStudents`,student)
}
//get all student list/View student list
export const getAllStudentAPI=async()=>{
    return await commonAPI("GET",`${SERVER_URL}/allStudents`,"")
}

//update student
export const UpdateStudentAPI=async(id, details)=>{
    return await commonAPI("PUT",`${SERVER_URL}/allStudents/${id}`,details)
}

//delete student
export const removeStudentAPI =async(id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/allStudents/${id}`,{})


}
