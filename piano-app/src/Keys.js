import React, {useState} from 'react';
import Key from './Key'

// [1,5,8]

const Keys = ({chordsList})=>{
    console.log({chordsList})
    console.log({chordsList}.chordsList)
    let chordIndexList = []
    let counter = 1
    for (let i=1; i<18;i++){
        let newIndexList = []



        if (i == 1 || i == 4 || i == 8 || i == 11 || i == 15){
            let status = false
            for (let i=0;i<{chordsList}.chordsList.length;i++){
                if ({chordsList}.chordsList[i] == counter){
                    status = true
                }
            }
            
            newIndexList.push(counter, status)
            counter += 1
        } else {
            let status1 = false
            let status2 = false

            for (let i=0;i<{chordsList}.chordsList.length;i++){
                if ({chordsList}.chordsList[i] == counter){
                    status1 = true
                } 
                if ({chordsList}.chordsList[i] == counter + 1){
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

// 18 keys
{/* <li><div id="1" className={"anchor"}></div></li>
<li><div id="3" className={"anchor"}></div><span id="2"></span></li>
<li><div id="5" className={"anchor"}></div><span id="4"></span></li>
<li><div id="6" className={"anchor"}></div></li>
<li><div id="8" className={"anchor"}></div><span id="7"></span></li>
<li><div id="10" className={"anchor"}></div><span id="9"></span></li>
<li><div id="12" className={"anchor"}></div><span id="11"></span></li>
<li><div id="13" className={"anchor"}></div></li>
<li><div id="15" className={"anchor"}></div><span id="14"></span></li>
<li><div id="17" className={"anchor"}></div><span id="16"></span></li>
<li><div id="18" className={"anchor"}></div></li>
<li><div id="20" className={"anchor"}></div><span id="19"></span></li>
<li><div id="22" className={"anchor"}></div><span id="21"></span></li>
<li><div id="24" className={"anchor"}></div><span id="23"></span></li>
<li><div id="25" className={"anchor"}></div></li>
<li><div id="27" className={"anchor"}></div><span id="26"></span></li>
<li><div id="29" className={"anchor"}></div><span id="28"></span></li> */}