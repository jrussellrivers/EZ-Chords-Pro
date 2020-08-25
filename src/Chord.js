import React from 'react';
import chords from './chords'
import Keys from './Keys'
import audioPlayer from "./AudioPlayer";

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

let soundValues = {
    1:'C3',
    2:'C#3',
    3:'D3',
    4:'D#3',
    5:'E3',
    6:'F3',
    7:'F#3',
    8:'G3',
    9:'G#3',
    10:'A3',
    11:'A#3',
    12:'B3',
    13:'C4',
    14:'C#4',
    15:'D4',
    16:'D#4',
    17:'E4',
    18:'F4',
    19:'F#4',
    20:'G4',
    21:'G#4',
    22:'A4',
    23:'A#4',
    24:'B4',
    25:'C5',
    26:'C#5',
    27:'D5',
    28:'D#5',
    29:'E5',
    30:'F5',
    31:'F#5',
    32:'G5',
    33:'G#5',
    34:'A5',
    35:'A#5',
    36:'B5'
}

const Chord = (props)=>{

    const handleClick = (array) => {
        for (let i=0;i<array.length;i++){
            audioPlayer.playNote(array[i]);
        }
    };

    if (props.idx === 0){
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
                <div className='chordSoundDiv'><span className='chordString'>{chordString}</span><img className='soundImage' src="volume.png" alt="play" onClick={()=>handleClick(ranNotes)}/></div>
            </div>
        )
    } else {
        // console.log(props.chord)
        let note = props.chord[0]
        let variation = props.chord[1]
        let newChordList = []

        // console.log(chords[note][variation])
        chords[note][variation].forEach(new_chord =>{
            let shortestRange = 50
            let newElement = 0

            new_chord.chords.forEach(element => {
                if (Math.abs(element - props.medValue) <= shortestRange){
                    shortestRange = Math.abs(element - props.medValue)
                    newElement = element
                }
            });

            newChordList.push([newElement, new_chord.name])
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
        // console.log(ranNotes)

        return(
            <div className='chordDiv'>
                <Keys chordsList={sortedChords}/>
                <div className='chordSoundDiv'><span className='chordString'>{chordString}</span><img className='soundImage' src="volume.png" alt="play" onClick={()=>handleClick(ranNotes)}/></div>
            </div>
        )
    }
}

export default Chord
