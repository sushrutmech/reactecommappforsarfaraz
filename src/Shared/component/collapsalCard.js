
import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function CollapsalCard(props) {
    //console.log("data of dishesh card ++" , props.orderDetailFuncProps , props);

    function orderItem(orderDetail){
         console.log("click order" , orderDetail);
         props.orderDetailFuncProps(orderDetail);
    }

  return (
    <Card sx={{ maxWidth: 245 }}>

      <CardHeader
      />
      <CardMedia
        component="img"
        height="194"
        image={require ( "../../static/images/dish3.jpg")} 
        alt="Paella dish"
      />
      {/* <img className="card-img-top" src={cardData.imgaeUrl} alt="image not found" /> */}
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.cardDataProps.name}
        </Typography>
        <Button variant="contained" onClick={()=>orderItem(props.cardDataProps)}>Contained</Button>
      </CardContent>
    </Card>
  );
}

// export default carosel;