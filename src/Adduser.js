import { useHistory } from "react-router-dom";
import TextField from '@mui/material/TextField';
import { APIuser } from './API';
import {useFormik} from "formik";
import Button from '@mui/material/Button';
import *as yup from "yup";
export const userValidationSchema=yup.object({
 name: yup.string().required("why not fill this name???"),
 logo: yup.string().required("why not fill this logo?"),
about:yup.string().required("why not fill this about???")
})
export function Adduser() {
  //const [ teacherlist,setteacherlist]= useState([]);
   const formik=useFormik({
    initialValues:{
     name:" ",logo:" ",about:" ",
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
            "content-Type":"application/json"
          }
        })
         .then(()=> history.push('/User'));

    
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
    <TextField fullWidth label="logo" id="logo" 
    name="logo" type="text" 
      onChange={formik.handleChange} 
      onBlur={formik.handleChange} value={formik.values.logo}/>
      {formik.touched.logo && formik.errors.logo ?formik.errors.logo :" "}
    <TextField fullWidth label="about" id="about" name="about" type="text" 
      onChange={formik.handleChange} onBlur={formik.handleChange} />
      {formik.touched.about && formik.errors.about ?formik.errors.about :" "}

    <Button fullwidth type="submit" >add poster</Button>
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