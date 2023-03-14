
import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import NoteState from '../servicesData/contex/notes/NotesState';
import Grid from '@mui/material/Grid';



let orderDetailCollector = [];
export default function CollapsalCard(props) {
  //console.log("data of dishesh card ++" , props.orderDetailFuncProps , props);
 
  function orderItem(orderDetail) {
   // console.log("order collector array", orderDetailCollector.push(orderDetail), "length", orderDetailCollector.length);
    orderDetailCollector.push(orderDetail)
    props.orderDetailFuncProps(orderDetail);
    props.orderCollectorArray(orderDetailCollector);
  }

  return (<>
    <Grid container spacing={0}>
      <Grid item lg={12} sm={12} md={12} xs={12} >
        <Card sx={{ maxWidth: 345 }}>

          <CardHeader
          />
          <CardMedia
            component="img"
            height="194"
            image={require("../../static/images/dish3.jpg")}
            alt="Paella dish"
          />
          {/* <img className="card-img-top" src={cardData.imgaeUrl} alt="image not found" /> */}
          <CardContent>
            <Typography variant="h6" color="blue">
              {props.cardDataProps.name}
            </Typography>
            <Typography variant="body2" color="black">
              {props.cardDataProps.desciption}
            </Typography>
            <Typography variant="h6" color="green">
              Price: {props.cardDataProps.rate}
            </Typography>
            <Button variant="contained" onClick={() => orderItem(props.cardDataProps)}>Add new</Button>
          </CardContent>
          {/* <NoteState orderDetail={props.cardDataProps}>

</NoteState> */}
        </Card>

      </Grid>
    </Grid>


  </>
  );
}

// export default carosel;