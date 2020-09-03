import React from 'react';

const MelodyOption = ({chord}) =>{
    return(
        <option value={chord.name}>{chord.name}</option>
    )
}

export default MelodyOption