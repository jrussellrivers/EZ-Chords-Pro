import React from 'react';
import chords from './chords'
import Keys from './Keys'

let melodyValues = {
    'C':25,
    'C#':26,
    'Db':26,
    'D':27,
    'D#':28,
    'Eb':28,
    'E':29,
    'F':18,
    'F#':19,
    'Gb':19,
    'G':20,
    'G#':21,
    'Ab':21,
    'A':22,
    'A#':23,
    'Bb':23,
    'B':24
}

const Chord = (props)=>{
    console.log(props.chord)
    let note = props.chord[0]
    let variation = props.chord[1]
    let newChordList = []
    
    let maxValue = melodyValues[props.startMelody]

    console.log(chords[note][variation])
    chords[note][variation].forEach(new_chord =>{
        let highest = 0 

        new_chord.chords.forEach(element => {
            if (element <= maxValue && element > highest){
                highest = element
            }
        });

        newChordList.push(highest)
    })    

    let sortedChords = newChordList.sort()


    return(
            <Keys chordsList={sortedChords}/>
    )
}

export default Chord
