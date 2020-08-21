import React from 'react';
import chords from './chords'
import MelodyOption from './MelodyOption'

const Melody = ({changeMelody, newChord}) =>{

    if (newChord.length < 2){
        return <></>
    } else if (newChord[0] === "" || newChord[1] === ""){
        return <></>
    } else {
        let note = newChord[0]
        let variation = newChord[1]

        let chordList = chords[note][variation]

        return(
            <>
                {chordList.map((chord, idx)=> <MelodyOption key={idx} chord={chord}/>)}
            </>
        )
    }
}

export default Melody