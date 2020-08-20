import React from 'react';
import Key from './Key'

// [1,5,8]

const Keys = ({chordsList})=>{
    console.log({chordsList})
    console.log({chordsList}.chordsList)
    let chordIndexList = []
    let counter = 1
    for (let i=1; i<18;i++){
        let newIndexList = []



        if (i === 1 || i === 4 || i === 8 || i === 11 || i === 15){
            let status = false
            for (let i=0;i<{chordsList}.chordsList.length;i++){
                if ({chordsList}.chordsList[i] === counter){
                    status = true
                }
            }
            
            newIndexList.push(counter, status)
            counter += 1
        } else {
            let status1 = false
            let status2 = false

            for (let i=0;i<{chordsList}.chordsList.length;i++){
                if ({chordsList}.chordsList[i] === counter){
                    status1 = true
                } 
                if ({chordsList}.chordsList[i] === counter + 1){
                    status2 = true
                }
            }

            newIndexList.push([counter, status1],[counter + 1, status2])
            counter += 2
        }
        chordIndexList.push(newIndexList)
    }

    console.log(chordIndexList)

    return(
        <ul id="piano">
            {chordIndexList.map((chordIdx, idx)=> <Key key={idx} chordIdx={chordIdx}/>)}
        </ul>
    )
}

export default Keys
