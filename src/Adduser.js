import { useHistory } from "react-router-dom";
import TextField from '@mui/material/TextField';
import { APIuser } from './API';
import {useFormik} from "formik";
import Button from '@mui/material/Button';
import *as yup from "yup";
export const userValidationSchema=yup.object({
 name: yup.string().required("why not fill this name???"),
password: yup.string().required("why not fill this password?"),

})
export function Signup() {
  //const [ teacherlist,setteacherlist]= useState([]);
   const formik=useFormik({
    initialValues:{
     name:" ",password:"",
    },
    validationSchema:userValidationSchema, 
     onSubmit:(addte)=>{
      newuser(addte)
      //console.log("onSubmit",newteacher);
  },
      }) 
       const history = useHistory();
      const newuser =(addte)=>{
        console.log("onSubmit",addte);
        fetch(`${APIuser}/User/`,{
          method:"POST",
          body:JSON.stringify(addte),
          headers:{
            "content-Type":"application/json",
            "Access-Control-Allow-Origin": "*"
          }
        })
         .then(()=> history.push('/Login'));

    
       };
  return <div className="add-teacher-form">
    <form onSubmit={formik.handleSubmit}>
     {/*<TextField fullWidth label="name" id="fullWidth" type="text"
      placeholder="Name"
    onChange={(event) => settname(event.target.value)} />*/}
    <TextField fullWidth label="name" id="name"name="name" 
    type="text" onBlur={formik.handleChange}
     onChange={formik.handleChange} 
    value={formik.values.name}
        />{formik.touched.name && formik.errors.name ?formik.errors.name :" "}
    <TextField fullWidth label="password" id="password" 
    name="password" type="password" 
      onChange={formik.handleChange} 
      onBlur={formik.handleChange} value={formik.values.password}/>
      {formik.touched.password && formik.errors.password ?formik.errors.password :" "}
   
    <Button fullwidth type="submit" >signup</Button>
    </form>
  </div>;
}

//1.METHOD POST
//2.BODY JSON() data
//3.headers-json data
/*fetch(`${API}/teacher/`,{
  method:"POST",
  body:JSON.stringify(data),
  headers:{
    "content-Type":"application/json"
  }
})*/