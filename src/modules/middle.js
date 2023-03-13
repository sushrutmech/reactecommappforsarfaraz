
import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Carosel from '../Shared/component/carosel';
import Collapsal from '../Shared/component/collapsal';
import collapsalData from '../Shared/servicesData/CollapsalData'
import Cart from '../Shared/component/cart';

var orderDArray = [];
export default function Middle(props) {
    const [order, setOrder] = useState();
    const collapselDataProps = collapsalData
    let orderDetail = {};
    const [orderCollectorArry, setorderCollectorArry] = useState([]);
    useEffect(() => {
        console.log("use effect run ++ middle component ");
        orderDArray.push(orderDetail)
        console.log("use effect array lengnt middle ", orderDArray.length);

    }, [order]);

    function dataFromCollapsal(orderDataFromCollapsal) {
        orderDetail = orderDataFromCollapsal
        setOrder(orderDetail);
        //console.log("data in middle from collapsal", orderDetail);
    }

    function orderCollectorArray(orderCollectorArray){
        console.log("middle order collector",orderCollectorArray);
        setorderCollectorArry(orderCollectorArray);
    }

    return (
        <div>
            <div>
                <div>
                    <Carosel collapsalData={collapselDataProps} />
                </div>
            </div>
            <div >
                <div>
                    <Collapsal collapsalData={collapselDataProps} dataFromCollapsalProps={dataFromCollapsal} orderCollectorArray={orderCollectorArray} />
                </div>
            </div>
            <div className='cartDiv'>
                <Cart collapsalData={collapselDataProps} orderDataProps={order} carItemNo={orderDArray} orderCollectorArray={orderCollectorArry} />
            </div>

       
        </div>
    );
}

// export default carosel;