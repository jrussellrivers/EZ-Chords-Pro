import React from 'react';

const Progression = ({chordList}) => {
    console.log(chordList)
    let progString = 'Chord Progression : '
    for (let i=0;i<chordList.length;i++){
        if (i === chordList.length - 1){
            progString += chordList[i][0] + chordList[i][1]
        } else {
            progString += chordList[i][0] + chordList[i][1] + ' -> '
        }
    }
    console.log(progString)
    return(
    <div className='progString'>{progString}</div>
    )
}

export default Progression