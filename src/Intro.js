import React from 'react'

const Intro = () =>{
    return(
        <div className='introDiv'>
            <div className='introInfo'>
                <p>This app was developed as a tool for aspiring pianists. When someone inputs a chord progression into the form below, a keyboard renders for each chord to show how to play it. The first chord input in the form takes a starting melody note from that chord and then the other chords inversions are calculated to provide you with a solution that minimizes hand movement from one chord to another. I hope this tool can be of use to musicians of all skill levels!</p>
                <ol className='introOrdered' type="i">
                    <li>Choose the number of chords you want in your progression by pressing the "Add Chord" and "Remove Chord" buttons.</li>
                    <li>Input the note, variation, and starting melody for the first chord.</li>
                    <li>Input the notes and variations for the remaining chords.</li>
                    <li>Press Submit!</li>
                    <li>The section marked "Chord Progression" lists the entire progression.
                        <ul>
                            <li>Press the play button to hear the entire chord progression.</li>
                            <li>The time between chords is set to 1 second as default.</li>
                            <li>To change the amount of time between chords, press the "Increase Time" or "Reduce Time" buttons to increase/decrease the time, respectively.</li>
                        </ul>
                    </li>
                    <li>Each chord in the progression has a keyboard with the proper fingering shown.
                        <ul>
                        <li>The chord name is displayed as well as each note in the order that they are fingered</li>
                        <li>Clicking the play button here will play the single chord one time</li>
                        </ul>
                    </li>
                    <li>To load a new chord progression, simply follow these same steps and press submit. Happy learning!</li>
                </ol>
            </div>
        </div>
    )
}

export default Intro