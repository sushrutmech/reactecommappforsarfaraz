

import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import DishesCard from './dishesCard';
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export default function Carosel(props) {
  //console.log("++++",props.collapsalData);
  const caroselData = props.collapsalData
  return (
    <div className='carouselContainer'>
      <Carousel responsive={responsive}>
        {caroselData.map(function (selectedCardData, idx) {
                return (
                  <DishesCard key={idx} cardData={selectedCardData}/>
                )
            })}      
      </Carousel>
    </div>
  );
}

// export default carosel;