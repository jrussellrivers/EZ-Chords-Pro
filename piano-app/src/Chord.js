import React from 'react';
import chords from './chords'
import Keys from './Keys'

const Chord = (props)=>{
    console.log(props.chord)
    let note = props.chord[0]
    let variation = props.chord[1]
    let newChordList = []
    
    console.log(chords[note][variation])
    chords[note][variation].map(new_chord =>{
        let max = 25
        let highest = 0 

        new_chord.chords.forEach(element => {
            if (element < max && element > highest){
                highest = element
            }
        });

        newChordList.push(highest)
    })    

    let sortedChords = newChordList.sort()


    return(
        <div>
            <Keys chordsList={sortedChords}/>
        </div>
    )
}

export default Chord
