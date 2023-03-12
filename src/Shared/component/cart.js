
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function Cart(props) {
  
  let orderArray = [];
  const [order, setOrder] = useState(0);

  // useEffect(() => {
  //   console.log("use effect run cart comp");
  //   orderUpdateFunc();
  // }, [props?.orderDataProps]);

  // console.log("order detail", props.orderDataProps);
 console.log("orderr array" , orderArray);
  if (props?.orderDataProps != undefined) {
    console.log("push value" ,props?.orderDataProps );
    orderArray.push(props?.orderDataProps)
    
 console.log("orderr array after push" , orderArray);
    console.log("length in if", orderArray.length);
    //setOrder(orderArray)
  }

  // setOrder(props.orderDataProps)
  console.log("order length", orderArray.length);


  console.log("order detail func */**", props);
  function orderUpdateFunc(props = {}) {
    if (props?.orderDataProps != undefined) {
      //orderArray.push(props.orderDataProps)
      //setOrder(orderArray.push(props.orderDataProps))

    }
    console.log("order length from fuction", orderArray.length);
    


  }

  //orderUpdateFunc();
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Order Cart
        </Typography>
        <Typography variant="h5" component="div">
          order no.{props.carItemNo.length -1} 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

// export default carosel;