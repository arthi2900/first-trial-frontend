import { useHistory } from "react-router-dom";
import { useState} from 'react';
import { APIposter} from './API';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useFormik} from "formik";
import * as yup from "yup";
export const posterValidationSchema=yup.object({
  name: yup.string().required("why not fill this name???"),
  logo: yup.string().required("why not fill this logo"),
  image:yup.string().required("why not fill this image"),
 imagename:yup.string().required("why not fill this about name")
  
 })
export function Addposter() {
    const formik=useFormik({
    initialValues:{
      name:" ",logo:" ",image:" ",imagename:"",
    },
    validationSchema:posterValidationSchema, 
     onSubmit:(addst)=>{
      newposter(addst)
      //console.log("onSubmit",newteacher);
  },
  });
  const history = useHistory();
  const newposter =(addst)=>{
    console.log("onSubmit",addst);
  fetch(`${APIposter}/Poster/`,{
    method:"POST",
    body:JSON.stringify(addst),
    headers:{
      "content-Type":"application/json"
    },
    }).then(()=> history.push('/Poster'));}

    return (<div className="add-movie-form">
    <form onSubmit={formik.handleSubmit}>
    <TextField fullWidth label="name" id="name" name="name" type="text"
      placeholder="Name"
      onChange={formik.handleChange} 
    value={formik.values.name}
        />{formik.touched.name && formik.errors.name ?formik.errors.name :" "}
    <TextField fullWidth label="Image"  id="image" name="image" type="text"
     onChange={formik.handleChange} 
     value={formik.values.image}
         />{formik.touched.image && formik.errors.image ?formik.errors.image :" "}

    <TextField fullWidth label="Logo" id="logo" name="logo" type="text"
onChange={formik.handleChange} 
value={formik.values.logo}
    />{formik.touched.logo && formik.errors.logo ?formik.errors.logo :" "}

    <TextField fullWidth label="description" id="imagename" name="imagename" type="text"
onChange={formik.handleChange} 
value={formik.values.imagename}
    />{formik.touched.imagename && formik.errors.imagename ?formik.errors.imagename :" "}
        <Button type="submit">add</Button>
    </form>
  </div>

  );
}


