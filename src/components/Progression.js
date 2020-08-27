import React from 'react';
import {soundValues, melodyValues} from '../music_data/soundValues'
import chords from '../music_data/chords'
import audioPlayer from "../AudioPlayer";

const Progression = ({chordList, startMelody, medValue, delayNumber}) => {
    
    function chordDelay(i, array) { 
        setTimeout(function() { 
            for (let j=0;j<array.length;j++){
                audioPlayer.playNote(array[j]);
            }
        }, (delayNumber * 1000) * i); 
    } 

    const handleClick = (array) => {
        for (let i=0;i<array.length;i++){
            chordDelay(i, array[i])
        }
    };

    let allChords = []
    for (let i=0;i<chordList.length;i++){
        let note = chordList[i][0]
        let variation = chordList[i][1]
        
        if (i === 0){
            let newChordList = []
            let maxValue = melodyValues[startMelody]

            chords[note][variation].forEach(new_chord =>{
                let highest = 0 

                new_chord.chords.forEach(element => {
                    if (element <= maxValue && element > highest){
                        highest = element
                    }
                });

                newChordList.push(highest)
            })    

            let sortedChords = newChordList.sort((a,b)=>a[0]-b[0])
            allChords.push(sortedChords)
        } else {
            let newChordList = []
            chords[note][variation].forEach(new_chord =>{
                // 50 is an arbitrary number, it just has to be the number of 'keys'. 50 just leaves room for if I expand
                let shortestRange = 50
                let newElement = 0

                new_chord.chords.forEach(element => {
                    if (Math.abs(element - medValue) <= shortestRange){
                        shortestRange = Math.abs(element - medValue)
                        newElement = element
                    }
                });

                newChordList.push(newElement)
            })    

            let sortedChords = newChordList.sort((a,b)=>a[0]-b[0])
            allChords.push(sortedChords)
        }
    }

    let allRanChords = []
    for (let i=0;i<allChords.length;i++){
        let ranNotes = []
        for (let j=0;j<allChords[i].length;j++){
            ranNotes.push(soundValues[allChords[i][j]])
        }
        allRanChords.push(ranNotes)
    }
    
    let progString = 'Chord Progression : '
    for (let i=0;i<chordList.length;i++){
        if (i === chordList.length - 1){
            progString += chordList[i][0] + chordList[i][1]
        } else {
            progString += chordList[i][0] + chordList[i][1] + ' -> '
        }
    }
    return(
        <div className='progDiv'><span className='progString'>{progString}</span><img className='soundImage' src="volume.png" alt="play" onClick={()=>handleClick(allRanChords)}/></div>
    )
}

export default Progression