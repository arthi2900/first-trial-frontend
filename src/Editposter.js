import { useParams, useHistory } from "react-router-dom";
import TextField from '@mui/material/TextField';
import { useState,useEffect } from 'react';
import { APIposter} from './API';
import {posterValidationSchema} from './Addposter';
import {useFormik} from "formik";

export function Editposter() {
  const [ posterlist,setposterlist]= useState(null);
    const { pid } = useParams();
  //console.log(id, studentlist);
 // const student = studentlist[id];
 // console.log(student);
 useEffect(()=>{
  fetch(`${APIposter}/Poster/${pid}`,
  {
    method:"GET",
  })
  //.then(data=>console.log(data))
  .then(data=>data.json())
  .then ((mvs)=>setposterlist(mvs));
},[])
return(
  <div>
{posterlist ?< Posteredit  posterlist={posterlist}/>:<h1>loading</h1>}
</div>
)
 }
function Posteredit({posterlist}){
  const formik=useFormik({
    initialValues:{
      name:posterlist.name,image:posterlist.image,
      logo:posterlist.logo,
      imagename:posterlist.imagename,
    },
    validationSchema:posterValidationSchema, 
     onSubmit:(editst)=>{
      editposter(editst)
      //console.log("onSubmit",newteacher);
  },
  });
  const history = useHistory();
  const editposter =(editst)=>{
    fetch(`${APIposter}/Poster/${posterlist.pid}`,{
method:"PUT",
body:JSON.stringify(editst),
headers:{
  "content-Type":"application/json"
}})
.then(()=> history.push('/Poster'));

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
    <TextField fullWidth label="Post" id="image" name="image" type="text"
onChange={formik.handleChange} 
value={formik.values.image}
    />{formik.touched.image && formik.errors.image ?formik.errors.image :" "}
    <TextField fullWidth label="about name" id="imagename" name="imagename" type="text"
onChange={formik.handleChange} 
value={formik.values.imagename}
    />{formik.touched.imagename && formik.errors.imagename ?formik.errors.imagename:" "}
     <button >save</button>
  </form>
</div>
  )
}
/*const copystudentlist = [...studentlist];
    copystudentlist[id] = updatestudent;
    setstudentlist(copystudentlist);
   */