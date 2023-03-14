
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import NoteContext from '../servicesData/contex/notes/noteContex';
import collapsalData from '../servicesData/CollapsalData';
import ReactWhatsapp from 'react-whatsapp';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

let orderArray = [];
export default function Cart(props) {

  const [order, setOrder] = useState([]);
  const [quantity, setQuantity] = useState([]);
  const [quantity1, setQuantity1] = useState([]);



  useEffect(() => {
    //console.log("use effect run cart comp");
    orderUpdateFunc(props.orderCollectorArray, uniqueProducts);
  }, [props?.orderDataProps,]);



  // console.log("order detail", props.orderDataProps);

  //console.log("orderr array" , orderArray);
  if (props?.orderDataProps != undefined) {
    //console.log("push value" ,props?.orderDataProps );
    orderArray.push(props?.orderDataProps)
  }


  const filteredArray1 = [];
  function orderUpdateFunc(orederCollector, uniqueOrder) {
    uniqueOrder.map(function (dishData, idx) {
      const filteredArray = orederCollector.filter(obj => obj.name === dishData.name);
      filteredArray1.push(filteredArray)
      // setOrder(filteredArray)
     // console.log("no of dishes", filteredArray1);
      setOrder(filteredArray1)
    })
    const qunatity = order.map((items) => {
    
    })
  }
 // console.log("calling array out side /*", filteredArray1, order);

  let disheshTotal = [];
  const dishesData = props.collapsalData.map(function (dishData, idx) {
    //console.log(dishData);
    dishData.dishes.map(function (dishIndi, idx) {
      // console.log("indi dish data" , dishIndi.name);
      disheshTotal.push(dishIndi.name)
    })
  })

 // console.log("order collector array form cart", props.orderCollectorArray);
  const cartOrderArray = props.orderCollectorArray;
  const uniqueProducts = cartOrderArray.filter((product, index, array) =>
    index === array.findIndex(obj => obj.id === product.id && obj.name === product.name && obj.price === product.price)
  );
  let noOfDish = [];
  const findfucnn = props.orderCollectorArray.find(dish => dish.name == uniqueProducts.name)
  noOfDish.push(findfucnn)
  //console.log("686899", uniqueProducts, "lens9898", noOfDish);

  function addQunatityFucn(itme, addOrSub){
    console.log("addqunatity fun" , itme, addOrSub);
    console.log("unique data array" ,uniqueProducts );
    const existingItem = uniqueProducts.find(orderItem=> orderItem === itme )
    console.log(existingItem)
    if (addOrSub=="add") {
      if(existingItem===itme) {
        itme.quantity++
        setQuantity1(uniqueProducts)
       console.log("in if von" ,uniqueProducts);
      }
    }

    if (addOrSub == 'sub') {
      if(existingItem===itme) {
        itme.quantity--
        setQuantity1(uniqueProducts)
       console.log("in if sub section" ,uniqueProducts);
      }

    }
    

  }



  function orderItemAdd(dishData, äddOrsub) {
    // console.log("örder add", dishData);
    // console.log("örder state", order);
    // console.log("2nd argument", äddOrsub);
    order.map((items) => {
      // console.log("map inside add", items);
      // console.log("map checker", items[0].name);

      if (äddOrsub == 'add') {
        // console.log("push data");
        if (items[0].name == dishData.name) {
          // console.log("if call", items);
          items.push(dishData)
          setQuantity(items);
          // console.log("after push", items);
        }
      }
      if (äddOrsub == 'sub') {
        // console.log("pop data");
        if (items[0].name == dishData.name) {
          // console.log("if call sub", items);
          items.pop(dishData)
          setQuantity(items);
          // console.log("after pop", items);
        }
      }

    })

  }

  function orderItemSubtract(dishData) {
    console.log("örder subtrrct", dishData);
    console.log("örder add", dishData);
    console.log("örder state", order);
    order.map((items) => {
      console.log("map inside sub", items);
      console.log("map checker sub", items[0].name);
    })
  }

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Order Cart
        </Typography>
        <ReactWhatsapp number="8793110381" message="Hello World!!!" />
        <Typography variant="h5" component="div">
          order no. {order.length}
        </Typography>
        {uniqueProducts.map(function (dishData, idx) {
          return (
            <>
              <div key={idx} >
                
                {dishData.name}: *
                {dishData.quantity}= {dishData.rate}
              </div>
              <div>

                <Button size="small" onClick={() => { addQunatityFucn(dishData, 'add' )}} >Add+</Button>
                {dishData.quantity}
                <Button size="small" onClick={() =>  { addQunatityFucn(dishData, 'sub' )}} >Subtract-</Button>

              </div>
            </>
          )

        })}

      </CardContent>
      <CardActions>
        <Button size="small"  variant="contained">Order Now</Button>
      </CardActions>
    </Card>
  );
}

// export default carosel;