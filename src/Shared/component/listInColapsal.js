import React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

export default function ListInColapsal(props) {
    const [open, setOpen] = React.useState(true);
    let listData = [];
    let dishesData = [];

    listData.push(props.collapsalData)
    //props.collapsalData
    const handleClick = () => {
        setOpen(!open);
    };
    //console.log("form list component++" , props.selectedCategory );
    // console.log("form list component++", props.collapsalData.dishes);

    return (
        <>

            {listData.map(function (collapsalData, idx) {
                return (
                    <List
                        key={idx}
                        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                        subheader={
                            <ListSubheader component="div" id="nested-list-subheader">
                                Dishes
                            </ListSubheader>
                        }
                    >
                        <ListItemButton onClick={handleClick}>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary={collapsalData.catergory} />
                            {open ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            {props.collapsalData.dishes.map(function (dishesData, idx) {
                                return (
                                    <List key={idx} component="div" disablePadding>
                                        <ListItemButton sx={{ pl: 4 }}>
                                            <ListItemIcon>
                                                <StarBorder />
                                            </ListItemIcon>
                                            <ListItemText  primary={dishesData.name} />
                                            <ListItemText primary={dishesData.rate} />
                                        </ListItemButton>
                                    </List>

                                )
                            })}

                        </Collapse>
                    </List>

                )
            })}

        </>
    );
}

// export default carosel;