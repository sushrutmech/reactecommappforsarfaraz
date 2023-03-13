import React, { useState } from 'react';

import NoteContext from './noteContex';

const NoteState = (props) => {
    const [stateCart, setStateCart ]= useState()
    const s1 = {
        'name ': 'sushrut'
    }

    function updateState(){

    }
    console.log("state change" , props.orderDetail);
    return (
        <NoteContext.Provider value={{s1, updateState}}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState;