import React from 'react'

const AddOtherForm = ({register, idx}) =>{
    let noteString = 'note' + idx
    let varString = 'var' + idx

    return(
        <fieldset>
            <div>
                <label htmlFor={noteString}>Choose a Note:</label>
                <select name={noteString} ref={register({ required: true})}>
                    <option value="">-- Select a Note --</option>
                    <option value="C">C</option>
                    <option value="C#">C#</option>
                    <option value="Db">Db</option>
                    <option value="D">D</option>
                    <option value="D#">D#</option>
                    <option value="Eb">Eb</option>
                    <option value="E">E</option>
                    <option value="F">F</option>
                    <option value="F#">F#</option>
                    <option value="Gb">Gb</option>
                    <option value="G">G</option>
                    <option value="G#">G#</option>
                    <option value="Ab">Ab</option>
                    <option value="A">A</option>
                    <option value="A#">A#</option>
                    <option value="Bb">Bb</option>
                    <option value="B">B</option>
                </select>
            </div>
            <div>
                <label htmlFor={varString}>Choose a Variation:</label>
                <select name={varString} ref={register({ required: true})}>
                    <option value="">-- Select a Variation --</option>
                    <option value="maj">maj</option>
                    <option value="m">m</option>
                    <option value="7">7</option>
                    <option value="m7">m7</option>
                    <option value="maj7">maj7</option>
                    <option value="mM7">mM7</option>
                    <option value="6">6</option>
                    <option value="m6">m6</option>
                    <option value="6/9">6/9</option>
                    <option value="5">5</option>
                    <option value="9">9</option>
                    <option value="m9">m9</option>
                    <option value="maj9">maj9</option>
                    <option value="11">11</option>
                    <option value="m11">m11</option>
                    <option value="13">13</option>
                    <option value="m13">m13</option>
                    <option value="maj13">maj13</option>
                    <option value="add">add</option>
                    <option value="7-5">7-5</option>
                    <option value="7+5">7+5</option>
                    <option value="sus">sus</option>
                    <option value="dim">dim</option>
                    <option value="dim7">dim7</option>
                    <option value="m7b5">m7b5</option>
                    <option value="aug">aug</option>
                    <option value="aug7">aug7</option>
                </select>
            </div>
        </fieldset>
    )
}

export default AddOtherForm