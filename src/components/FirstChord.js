import React from 'react'
import chords from '../music_data/chords'
import {soundValues, melodyValues} from '../music_data/soundValues'
import Keys from './Keys'


const FirstChord = (props) =>{
    // console.log(props.chord)
    let note = props.chord[0]
    let variation = props.chord[1]
    let newChordList = []
    
    let maxValue = melodyValues[props.startMelody]

    // console.log(chords[note][variation])
    chords[note][variation].forEach(new_chord =>{
        let highest = 0 

        new_chord.chords.forEach(element => {
            if (element <= maxValue && element > highest){
                highest = element
            }
        });

        newChordList.push([highest, new_chord.name])
    })    
    let sortedChords = newChordList.sort((a,b)=>a[0]-b[0])
    
    let chordString = note + variation + ' :'
    for (let i=0;i<sortedChords.length;i++){
        if (i === sortedChords.length - 1){
            chordString += ' ' + sortedChords[i][1]
        } else{
            chordString += ' ' + sortedChords[i][1] + ' -'
        }
        
    }

    let ranNotes = []
    for (let i=0;i<sortedChords.length;i++){
        ranNotes.push(soundValues[sortedChords[i][0]])
    }

    return(
        <div className='chordDiv'>
            <Keys chordsList={sortedChords}/>
            <div className='chordSoundDiv'><span className='chordString'>{chordString}</span><img className='soundImage' src="volume.png" alt="play" onClick={()=>props.handleClick(ranNotes)}/></div>
        </div>
    )
}

export default FirstChord