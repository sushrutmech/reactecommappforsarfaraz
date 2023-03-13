import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ListInColapsal from './listInColapsal';
import DishesCard from './dishesCard';
import CollapsalCard from './collapsalCard';
import Grid from '@mui/material/Grid';

export default function Collapsal(props) {
    const accordinaData = props.collapsalData;
    //console.log("acc data", accordinaData);
    let orderDetailArray=[];

    function orderDetailFunc(dataFromchild){
        //console.log("from pCollapsal" , dataFromchild);
        props.dataFromCollapsalProps(dataFromchild)
       
    }

    function orderCollectorArrayFunc(orderCollectorArray){
        console.log("collector array" , orderCollectorArray);
        props.orderCollectorArray(orderCollectorArray)
    }
    // <li key={idx}>{d.catergory}</li>
    return (
        <div className='collapsalContainer'>

            {accordinaData.map(function (collapsalData, idx) {
                return (
                    <Accordion key={idx} >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>{collapsalData.catergory}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {/* <ListInColapsal collapsalData={collapsalData} selectedCategory={collapsalData.catergory} /> */}
                            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                                {accordinaData[idx].dishes.map(function (collapsalData, idx) {
                                    return (
                                        <Grid item xs={2} sm={4} md={4} key={idx}>
                                            <CollapsalCard key={idx} cardDataProps={collapsalData} orderCollectorArray={orderCollectorArrayFunc} orderDetailFuncProps={orderDetailFunc} />
                                        </Grid>
                                    )
                                })}
                            </Grid>

                        </AccordionDetails>
                    </Accordion>

                )
            })}
            {/* <Accordion disabled>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography>Disabled Accordion</Typography>
                </AccordionSummary>
            </Accordion> */}
        </div>
    );
}

// export default carosel;