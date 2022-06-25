import { useHistory} from 'react-router-dom';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import { useState } from 'react';
import { CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';
export function Poster({ name,image,logo,imagename,pid}) {
  const[ userlist,setuserlist]= useState([]);
   const history = useHistory();
  return (
    <div >
       <Card sx={{ maxWidth: 280,margin:'2%'}}>
         <Card>
          <CardHeader
            avatar={<Avatar sx={{ bgcolor: red[500] }} alt={name} src={logo} 
            onClick={() => history.push(`User`) }/>}
            title={name} /> </Card>
           <div>
        <Card>
          <CardMedia
            component="img"
            height="390"
            image={image}
            alt={name}
            onClick={() => history.push(`Poster/${pid}`)} />
            
            <Typography variant="h5" component="div">
            {imagename}
          </Typography>
          <hr/>
            <Like/>
            <Comment/>
                        </Card>
      </div>
                
        </Card>
            </div>
  );
}
 function Like(){
  const [like, setLike] = useState(0);
  const incrementLike = () => setLike(like + 1);
  return (
    <div>
     
      <IconButton className="Like-dislike" aria-label="like" color="primary"
        onClick={incrementLike}>
        <Badge badgeContent={like} color="primary">
          👍
        </Badge>
      </IconButton>
     
      </div>
  );
}
const commentdetails=[
  {
   "cid": "1",
   "name": "aaaa",
   "logo": "https://loveshayariimages.in/wp-content/uploads/2021/10/1080p-A-Latter-Whatsapp-Dp-Images.jpg",
   "comment": "super"
  },
  {
   "cid": "2",
   "name": "bbbbb",
   "logo": "https://live.staticflickr.com/2920/13965560605_d0a417348e_b.jpg",
   "comment": "super"
  }
 ]

function Commentsdata(){
  const [commentlist,setcommentlist]=useState(commentdetails);
  const [name,setname]=useState("");
  const [logo,setlogo]=useState("");
  const [comment,setcomment]=useState("");
  return(
      <div>
        <div>     
          <input type="text" onChange={(event)=>setcomment(event.target.value)}/> 
          <br/>
          <button onClick={()=>{
            const newcomment={
              comment:comment
            };
            setcommentlist([...commentlist,newcomment])
          }}>add comments</button></div>
          <div>
     {commentlist.map((c1)=>(
             <Comment key={c1.index}
             name={c1.name}
             logo={c1.logo} 
             comment={c1.comment}/>
     ))
     }
      </div>
      </div>
  )
    }

function Comment({name,comment,logo}){
return(
  <div>
           <Card sx={{ maxwidth: '45%', maxheight: '65%', margin: '5%', }}>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: red[500] }} alt={name}
         src={logo}  />} title={name} />
      <CardActionArea>
                <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {comment}
          </Typography>
                      </CardContent> </CardActionArea></Card>
                          
      </div>
  )
}
