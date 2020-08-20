import React from 'react';

const Key = ({chordIdx}) =>{
    if (typeof {chordIdx}.chordIdx[0] == "number"){
        if ({chordIdx}.chordIdx[1] === false){
            return <li><div className={"anchor"}></div></li>
        } else{
            return <li><div className={"anchor played"}></div></li>
        }
    } else {
        let note1= {chordIdx}.chordIdx[0]
        let note2= {chordIdx}.chordIdx[1]

        if (note1[1] === true && note2[1] === true){
            return <li><div className={"anchor played"}></div><span className={'played'}></span></li>
        } else if (note1[1] === true && note2[1] === false){
            return <li><div className={"anchor"}></div><span className={'played'}></span></li>
        } else if (note1[1] === false && note2[1] === true){
            return <li><div className={"anchor played"}></div><span></span></li>
        } else {
            return <li><div className={"anchor"}></div><span></span></li>
        }
    }
}

export default Key