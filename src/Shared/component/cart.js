
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

let orderArray = [];
var totalOderPriceArray = [];
export default function Cart(props) {

  const [order, setOrder] = useState([]);
  const [quantity, setQuantity] = useState([]);
  const [quantity1, setQuantity1] = useState([]);
  const [totalOderPrice, setTotalOderPrice] = useState([]);

  var reciptOrder = {
    totalOrder: "",
    totalOrderPrice: ""
  }

  useEffect(() => {
    //console.log("use effect run cart comp");
    orderUpdateFunc(props.orderCollectorArray, uniqueProducts);
  }, [props?.orderDataProps,]);


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

  function whatsappOderFunc(reciptData) {
    console.log("whta recip data", reciptData);
    let mobileNumber = 7000423252
    // Appending the phone number to the URL
    let url = `https://web.whatsapp.com/send?phone=${mobileNumber}`;
    // Appending the message to the URL by encoding it
    url += `&text=${encodeURI(reciptData)}&app_absent=0`;
    // Open our newly created URL in a new tab to send the message
    window.open(url);
  }

  function reciptOrderFunc(totalOrder, totalOrderPrice) {
    reciptOrder.totalOrder = totalOrder
    reciptOrder.totalOrderPrice = totalOrderPrice
    console.log("recipt fuction", reciptOrder);
    //let reciptData = JSON.stringify()
    //whatsappOderFunc(reciptOrder);

  }

  function sendOrderWhatsappFunc(reciptOrderAtri, fromAddOrSub) {
    console.log("order nowe data", reciptOrderAtri);
    setQuantity(reciptOrderAtri);
    if (fromAddOrSub == "ordernow") {
      let mobileNumber = 7000423252
      let orederDataWhatsApp = quantity.totalOrder;
      let totalOrderPrice = quantity.totalOrderPrice
      let itemWithQuantitiy = orederDataWhatsApp.map((items)=>{
       //console.log("itmee" , items.name);
       return `dish name:- ${items.name}, dish Qunatity:-${items.quantity},  dish Rate:-${items.rate}.        .`
      })
      
      console.log("item and quntiti" , itemWithQuantitiy );
      // Appending the phone number to the URL
      let url = `https://web.whatsapp.com/send?phone=${mobileNumber}`;
      // Appending the message to the URL by encoding it
      url += `&text=${encodeURI( `${itemWithQuantitiy} ___:- Total Order Price:-${totalOrderPrice}`)}&app_absent=0`;
      console.log("data to whata app", quantity);
      // Open our newly created URL in a new tab to send the message
      window.open(url);

    }
  }

  function addQunatityFucn(itme, addOrSub) {
    //console.log("addqunatity fun" , itme, addOrSub);
    //console.log("unique data array" ,uniqueProducts );
    const existingItem = uniqueProducts.find(orderItem => orderItem === itme)
    //console.log(existingItem)

    if (addOrSub == "add") {
      if (existingItem === itme) {
        itme.quantity++
        setQuantity1(uniqueProducts)
        console.log("in if von+", uniqueProducts);
        const TotalPrice = uniqueProducts.map((itmes, idx) => {
          let pirceEach = itmes.quantity * itmes.rate
          return pirceEach

        })
        const TotalOrderPrice = TotalPrice.reduce((a, b) => a + b, 0)
        setTotalOderPrice(TotalOrderPrice)
        reciptOrderFunc(uniqueProducts, TotalOrderPrice);

        sendOrderWhatsappFunc(reciptOrder, "add")
        console.log("prie add to", TotalPrice, TotalOrderPrice, reciptOrder);
      }
    }

    if (addOrSub == 'sub') {
      if (existingItem === itme) {
        itme.quantity--
        setQuantity1(uniqueProducts)
        console.log("in if sub section", uniqueProducts);
        const TotalPrice = uniqueProducts.map((itmes, idx) => {
          let pirceEach = itmes.rate * itmes.quantity
          return pirceEach

        })
        const TotalOrderPrice = TotalPrice.reduce((a, b) => a - b, 0)
        setTotalOderPrice(TotalOrderPrice * -1)
        reciptOrderFunc(uniqueProducts, TotalOrderPrice);
        sendOrderWhatsappFunc(reciptOrder, "sub");
        console.log("prie add to", TotalPrice, TotalOrderPrice, reciptOrder);

      }

    }

  }



  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Order Cart
        </Typography>

        <Typography variant="h5" component="div">
          order no. {order.length}
        </Typography>
        {uniqueProducts.map(function (dishData, idx) {
          return (
            <>
              <div key={idx} >

                {dishData.name}: *
                {dishData.quantity}= {dishData.rate * `${dishData.quantity}`}

              </div>
              <div>

                <Button size="small" onClick={() => { addQunatityFucn(dishData, 'add') }} >Add+</Button>
                {dishData.quantity}
                <Button size="small" onClick={() => { addQunatityFucn(dishData, 'sub') }} >Subtract-</Button>

              </div>
            </>
          )

        })}

      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => { sendOrderWhatsappFunc(reciptOrder, "ordernow") }} variant="contained">Order Now</Button>
        <Typography variant="h5" component="div">
          Total {totalOderPrice} Rs.
        </Typography>
      </CardActions>
    </Card>
  );
}

// export default carosel;