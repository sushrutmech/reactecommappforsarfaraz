
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
// interface ExpandMoreProps extends IconButtonProps {
//   expand: boolean;
// }

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function DishesCard(props) {
  const [expanded, setExpanded] = React.useState(false);
  //const [cardData, setCardData] = React.useState({});
  let cardData ={};
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  if (props.cardData) {
    //setCardData(props.cardData)
    cardData = props.cardData
    // console.log("card from1", cardData ,typeof(cardData) );
  }
 
  const imgPath = "../../static/images/dish3.jpg"
  const imgLink = String(imgPath)
  const imgUrl = cardData.imgaeUrl
  // console.log("card proops", props.cardData, typeof (props.cardData));

  return (<>
   
 
 
   
    <Card sx={{ maxWidth: 345 }}>

      <CardHeader
      />
      <CardMedia
        component="img"
        height="194"
        image={require("../../static/images/dish3.jpg")} 
        alt={cardData.catergory}
      />
      {/* <img className="card-img-top" src={cardData.imgaeUrl} alt="image not found" /> */}
      <CardContent>
        <Typography variant="h5" color="green">
          {cardData.catergory}
        </Typography>
      </CardContent>
    </Card>
    </>
  );
}

// export default carosel;