import './App.css';
import { Link, Switch, Route} from "react-router-dom";
import { useState} from 'react';
import { Login } from './Userlogin';
import { Data} from './Data';
import { Viewposter } from './Viewposter';
import { Editposter } from './Editposter';
import {Addposter } from './Addposter';
import { Signup} from './Adduser';
import { Viewuser } from './Viewuser';
//import {Ourpost } from './Viewuser';
import { Userdata } from './Userdata';
import { Edituser } from './Edituser';
import { Editposterbyuser } from './Editposterbyuser';
import { APIuser } from './API';
import { APIposter } from './API';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
//import { teacherdatalist } from './teacherdatalist';
//import { studentdetails } from './studentdetails';
function App() {
  const [ posterlist,setposterlist]= useState([]);
  const [ userlist,setuserlist]= useState([]);
  return (
    <div className="App">
         <ul>
  <Box sx={{ width:900}}>
      <Button className="menu"><Link to="/Poster">Home  </Link></Button>
     <Button className="menu"> <Link to="/User/Signup">signup </Link></Button>
     <Button className="menu"><Link to="/Poster/addposter">Add Poster  </Link></Button>
     <Button className="menu"> <Link to="/User/:id">Profile </Link></Button>
     <Button className="menu"> <Link to="/login">Login </Link></Button>
                                                 </Box>
                                             </ul>
      <Switch>
       

        <Route path=" /User/editposter/:id"><Editposterbyuser/></Route>
        <Route path="/User/edit/:id"><Edituser /></Route>
    <Route path="/User/Signup"><Signup/></Route>
    <Route path="/User/:id"><Viewuser /></Route>
    <Route path="/User"><Userdata/></Route>
    <Route path="/Poster/edit/:pid"><Editposter /></Route>
  <Route path="/Poster/addposter"><Addposter/></Route>
  <Route path="/Poster/:pid">< Viewposter /></Route>
        <Route path="/Poster"><Data/></Route>
       
               <Route path="/Login"><Login/></Route>
      </Switch>
                               
          </div>
         
  );}

 export default App;

