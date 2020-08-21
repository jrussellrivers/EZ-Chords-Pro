import React, {useState} from 'react';
import Chord from './Chord'
import Melody from './Melody'
import './App.css'

function App() {
  const [chordList, addChords] = useState([])
  const [newChord, addNewChord] = useState([])
  const [startMelody, changeMelody] = useState('')

  const onSubmit = evt =>{
    evt.preventDefault()
    addChords([newChord])
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="note_chooser1">Choose a Note:</label>
          <select name="note_chooser1" onChange={(evt)=>addNewChord([evt.target.value, evt.target.parentElement.nextElementSibling.lastChild.value])}>
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
          <label htmlFor="var_chooser1">Choose a Variation:</label>
          <select name="var_chooser1" onChange={(evt)=>addNewChord([evt.target.parentElement.parentElement.firstChild.lastChild.value, evt.target.value])}>
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
        <div>
          <label htmlFor="melody_chooser">Choose Starting Melody:</label>
          <select name='melody_chooser' onChange={(evt)=>changeMelody([evt.target.value])}>
            <option value="">-- Select Melody Note --</option>
            <Melody newChord={newChord}/>
          </select>
        </div>
        <button>Submit</button>
      </form>

      {chordList.map((chord, idx)=> <Chord key={idx} chord={chord} startMelody={startMelody}/>)}
    </div>
  );
}

export default App;
