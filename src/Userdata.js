import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import { useEffect ,useState} from 'react';
import { useHistory } from 'react-router-dom';
import { APIuser } from './API';
import { User } from './User.js';
export function Userdata() {
  const history = useHistory();
  const [ userlist,setuserlist]= useState([]);
    const getuser=()=>{
    //
    fetch(`${APIuser}/User`)
    //.then(data=>console.log(data))
    .then(data=>data.json())
    .then ((mvs)=>setuserlist(mvs));
  }
  useEffect(()=>getuser(),[]);
//const teacherdelete =(id)=>console.log("deleting ",id);
const userdelete =(id)=>{
  fetch(`${APIuser}/User/${id}`,{method:"DELETE"})
  .then(()=>getuser());
  //.then(data=>console.log(data))
  }

  return (
    <div className="App">
      <div className="teacher-list">
        {userlist.map(({name,logo,about,id}, index) => (
          <User key={index}
            name={name}
            logo={logo}
            about={about}
            deleteuser={<IconButton aria-label="add to favorites" color="error"
              onClick={() => userdelete(id)}><DeleteIcon /></IconButton>}
            edituser={<IconButton aria-label="add to favorites" color="primary"
              onClick={() => history.push(`/User/edit/${id}`)}>  <EditIcon />
            </IconButton>}
            id={id} />))}

      </div>
    </div>
  );
}
