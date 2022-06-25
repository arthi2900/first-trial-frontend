import { useParams, useHistory } from "react-router-dom";
import TextField from '@mui/material/TextField';
import { useState,useEffect } from 'react';
import { APIuser} from './API';
import {userValidationSchema} from './Adduser';
import {useFormik} from "formik";
export function Edituser() {
  const [ userlist,setuserlist]= useState(null);
    const { id } = useParams();
  //console.log(id, studentlist);
 // const student = studentlist[id];
 // console.log(student);
 useEffect(()=>{
  fetch(`${APIuser}/User/${id}`,
  {
    method:"GET",
  })
  //.then(data=>console.log(data))
  .then(data=>data.json())
  .then ((mvs)=>setuserlist(mvs));
},[])
return(
  <div>
{userlist ?< Useredit  userlist={userlist}/>:<h1>loading</h1>}
</div>
)
 }
function Useredit({userlist}){
  const formik=useFormik({
    initialValues:{
      name:userlist.name,
      logo:userlist.logo,
      about:userlist.about,
    },
    validationSchema:userValidationSchema, 
     onSubmit:(editst)=>{
      edituser(editst)
      //console.log("onSubmit",newteacher);
  },
  });
  const history = useHistory();
  const edituser =(editst)=>{
    fetch(`${APIuser}/User/${userlist.id}`,{
method:"PUT",
body:JSON.stringify(editst),
headers:{
  "content-Type":"application/json"
}})
.then(()=> history.goForward());

console.log("edit",editst);
  };
 
  return(
  <div className="add-movie-form">
  <form onSubmit={formik.handleSubmit}>
    <TextField fullWidth label="Name" id="name" name="name" 
    type="text" onChange={formik.handleChange}  value={formik.values.name}
        />{formik.touched.name && formik.errors.name ?formik.errors.name :" "}
    <TextField fullWidth label="Logo"  id="logo" name="logo" type="text"
     onChange={formik.handleChange} 
     value={formik.values.logo}
         />{formik.touched.logo && formik.errors.logo?formik.errors.logo :" "}
    <TextField fullWidth label="about" id="about" name="about" type="text"
onChange={formik.handleChange} 
value={formik.values.about}
    />{formik.touched.about && formik.errors.about ?formik.errors.about :" "}
    
     <button >save</button>
  </form>
</div>
  )
}
/*const copystudentlist = [...studentlist];
    copystudentlist[id] = updatestudent;
    setstudentlist(copystudentlist);
   */