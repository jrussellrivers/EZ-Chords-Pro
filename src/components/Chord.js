import React from 'react';
import FirstChord from './FirstChord'
import OtherChords from './OtherChords'
import audioPlayer from "../AudioPlayer";

const Chord = (props)=>{

    const handleClick = (array) => {
        for (let i=0;i<array.length;i++){
            audioPlayer.playNote(array[i]);
        }
    };

    if (props.idx === 0){
        return <FirstChord chord={props.chord} startMelody={props.startMelody} handleClick={handleClick}/>
    } else {
        return <OtherChords chord={props.chord} medValue={props.medValue} handleClick={handleClick}/>
    }
}

export default Chord
