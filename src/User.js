import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import { Route, Link, Switch, useHistory } from "react-router-dom";
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';


export function User({ name, logo, about, deleteuser, edituser, id }) {
  const history = useHistory();
  return (
    <div>
    <Card sx={{ maxWidth: 755, margin: '10%' }}>
        <h5>Profile</h5>
        <div className="headeruser" sx={{ margin: '30%' }}>
          <CardHeader
            avatar={<Avatar sx={{ bgcolor: red[500], margin: '10%', gap: '10%' }}
              alt={name} src={logo}
              onClick={() => history.push(`/User/${id}`)} />} title={name}
            subheader={about} />
          <CardActions disableSpacing sx={{ leftMargin: '20%' }}>
            {deleteuser}
                        {edituser}
          </CardActions></div>
        <hr />
        <div>
                </div>
      </Card>
    </div>
  );
}
