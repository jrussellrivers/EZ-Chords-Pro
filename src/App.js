import React, {useState} from 'react';
import { useForm } from "react-hook-form";
import Chord from './components/Chord'
import FirstForm from './components/FirstForm'
import OtherForms from './components/OtherForms'
import calculateMed from './calculateMed'
import Progression from './components/Progression'
import Intro from './components/Intro'
import './App.css'

function App() {
  const { register, handleSubmit, errors } = useForm();

  const [chordList, addChords] = useState([])
  const [formNumber, addFormNumber] = useState(1)
  const [newChord, addNewChord] = useState([])
  const [startMelody, changeMelody] = useState('')
  const [medValue, changeMed] = useState(0)
  const [delayNumber, addDelayNumber] = useState(1)

  const onSubmit = (data) => {
    const values = Object.values(data)
    let newChords = []
    let firstChord = []
    let index = 0
    for (let i=0;i<(values.length-1)/2 ;i++){
      newChords.push([values[index],values[index + 1]])
      if (i===0){
        changeMelody(values[index + 2])
        firstChord.push(values[index],values[index + 1],values[index + 2])
        index += 3
      } else { 
        index += 2
      }
    }
    addDelayNumber(1)
    changeMed(calculateMed(firstChord))
    addChords(newChords)
  };

  const incrementForm = () => {
    addFormNumber(formNumber + 1)
  }
  const decrementForm = () => {
    if (formNumber > 1){
      addFormNumber(formNumber - 1)
    }
  }

  const incrementDelay = () => {
    addDelayNumber(delayNumber + 1)
}
  const decrementDelay = () => {
    if (delayNumber > 1){
      addDelayNumber(delayNumber - 1)
    }
  }

  console.log('app')
  return (
    <div className='theApp'>
      <h1>Welcome to EZ Chords Pro</h1>
      <div className='topDiv'>
        <Intro />
        <div>
          <div>Number of Chords: {formNumber}</div>
          <button onClick={incrementForm}>Add Chord</button>
          <button onClick={decrementForm}>Remove Chord</button>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FirstForm changeMelody={changeMelody} addNewChord={addNewChord} register={register} newChord={newChord}/>
              <OtherForms formNumber={formNumber} register={register}/>
              <input type="submit" />
            </form>
          </div>
        </div>
      </div>
      <hr/>
      {chordList.length > 0 ? <Progression chordList={chordList} startMelody={startMelody} medValue={medValue} delayNumber={delayNumber}/>  : null}
      {chordList.length > 0 ? (delayNumber ===1 ? <div className='delayDiv'><div>Time Between Chords: 1 second</div><button onClick={incrementDelay}>Increase Time</button><button onClick={decrementDelay}>Reduce Time</button></div> : <div className='delayDiv'><div>Time Between Chords: {delayNumber} seconds</div><button onClick={incrementDelay}>Increase Time</button><button onClick={decrementDelay}>Reduce Time</button></div>) : null}
      {chordList.length > 0 ? chordList.map((chord, idx)=> <Chord key={idx} idx={idx} chord={chord} startMelody={startMelody} medValue={medValue} changeMed={changeMed}/>) : null}
    </div>
  );
}

export default App;
