import { useHistory } from "react-router-dom";
import { useState} from 'react';
import { APIuser} from './API';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useFormik} from "formik";
import * as yup from "yup";
export const loginValidationSchema=yup.object({
  name: yup.string().required("why not fill this name???"),
password:yup.string().required("why not fill this password")
  
 })
export function Login() {
    const formik=useFormik({
    initialValues:{
      name:" ",password:"",
    },
    validationSchema:loginValidationSchema, 
     onSubmit:(addst)=>{
      newuser(addst)
      //console.log("onSubmit",newteacher);
  },
  });
  const history = useHistory();
  const newuser =(addst)=>{
    console.log("onSubmit",addst);
  fetch(`${APIuser}/User`,{
    method:"POST",
    body:JSON.stringify(addst),
    headers:{
      "content-Type":"application/json",
      "Access-Control-Allow-Origin": "*"
    },
    }).then(()=> history.push('/User/:id'));}

    return (<div className="login-form">
    <form onSubmit={formik.handleSubmit}>
    <TextField fullWidth label="name" id="name" name="name" type="text"
      placeholder="Name"
      onChange={formik.handleChange} 
    value={formik.values.name}
        />{formik.touched.name && formik.errors.name ?formik.errors.name :" "}
    
    <TextField fullWidth label="password" id="password" name="password" type="password"
      placeholder="password"
      onChange={formik.handleChange} 
    value={formik.values.password}
        />{formik.touched.password && formik.errors.password ?formik.errors.password :" "}
    
        <Button type="submit">Login</Button>
    </form>
  </div>

  );
}


