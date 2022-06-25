import { useParams, useHistory  } from 'react-router-dom';
import{useEffect,useState} from 'react';
import { APIposter, APIuser } from './API';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import { Link} from "react-router-dom";
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import { Poster } from './Poster';
export function Viewuser() {
  const history = useHistory();
  const [user,setuser]= useState({});
    const id = useParams();
    const getuser=()=>{
    //
    fetch(`${APIuser}/User/${id}`)
    //.then(data=>console.log(data))
    .then(data=>data.json())
    .then ((mvs)=>setuser(mvs));
  }
  useEffect(()=>getuser(),[]);
const userdelete =(id)=>{
  fetch(`${APIuser}/User/${id}`,{method:"DELETE"})
  .then(()=>history.push('/login'));

  }


 return (
    <div>
      <div>
    <Card sx={{ maxWidth: 755, margin: '10%' }}>
        <h5>Profile</h5>
        <div className="headeruser" sx={{ margin: '30%' }}>
          <CardHeader
            avatar={<Avatar sx={{ bgcolor: red[500], margin: '10%', gap: '10%' }}
              alt={user.name} src={user.logo}
              onClick={() => history.push('/User')} />} title={user.name}
            subheader={user.about} />
          <CardActions disableSpacing sx={{ leftMargin: '20%' }}>
         < IconButton aria-label="add to favorites" color="error"
 onClick={() => userdelete(id)}><DeleteIcon /></IconButton>

 <IconButton aria-label="add to favorites" color="primary"
onClick={() => history.push(`/User/edit/${id}`)}>  <EditIcon /></IconButton>
                       
          </CardActions>
          </div>
        <hr />
        <div>
          <Card sx={{ maxWidth: 655, margin: '10%', textAlign: 'center' }}>
            <Link > Post</Link>
            <Ourpost/>

  </Card>

        </div>
      </Card>
    </div>
      <button onClick={() => history.goBack()}>back</button>
    </div>
  );
}
export function Ourpost() {
  const { pid } = useParams();
  const history=useHistory();
  const [ poster,setposter]= useState([]);
  const getposter=()=>{
  fetch(`${APIposter}/Poster`)
  .then((data)=>(data.json()))
  .then((mvs)=>setposter(mvs));
  
  };
  useEffect(()=>getposter(),[]);
   const posterdeleteuser=(pid)=>{
    fetch(`${APIposter}/Poster/${pid}`,{
      method:"DELETE",
    }).then(()=>history.push(`/User/${id}`));
    };

  return (
    <div>
      {poster.map((u1, index) => (
        <Card sx={{ maxWidth: 545, margin: '10%', gap: '10' }}>
        <div className="headeruser" sx={{ margin: '30%' }}>
        
          <CardHeader
            avatar={<Avatar sx={{ bgcolor: red[500], margin: '5%', gap: '10%' }}
              alt={u1.name} src={u1.logo} />} title={u1.name}
            subheader={u1.about} />
          <CardActions disableSpacing sx={{ leftMargin: '20%' }}>
          <div className='item'>
              <IconButton className="Like-dislike" aria-label="like" color="primary" onClick={() => posterdeleteuser(pid)}>
                <DeleteIcon />
              </IconButton>
             <IconButton aria-label="add to favorites" color="primary"
              onClick={() =>history.push(`/User/editposter/${pid}`)}>  <EditIcon />
                         </IconButton>
            </div>
          </CardActions>
       </div>
        <hr />
        <CardMedia
          component="img"
          height="194"
          image={u1.image}
          alt={u1.name} />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          <h3>{u1.name}</h3>
                      </Typography>
        </CardContent>
      </Card>
        ))}
         </div>
  );

}