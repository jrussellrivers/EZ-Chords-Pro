import React, {useState} from 'react';
import { useForm } from "react-hook-form";
import Chord from './Chord'
import FirstForm from './FirstForm'
import OtherForms from './OtherForms'
import './App.css'

function App() {
  const { register, handleSubmit, errors } = useForm();

  const [chordList, addChords] = useState([])
  const [formNumber, addFormNumber] = useState(1)
  const [newChord, addNewChord] = useState([])
  const [startMelody, changeMelody] = useState('')
  const [medValue, changeMed] = useState(0)

  const onSubmit = (data) => {
    const values = Object.values(data)
    let newChords = []
    let index = 0
    for (let i=0;i<(values.length-1)/2 ;i++){
      newChords.push([values[index],values[index + 1]])
      if (i===0){
        index += 3
      } else { 
        index += 2
      }
    }
    addChords(newChords)
  };

  const increment = () => {
    addFormNumber(formNumber + 1)
}
  const decrement = () => {
    if (formNumber > 1){
      addFormNumber(formNumber - 1)
    }
  }

  return (
    <div>
      <div>Number of Chords: {formNumber}</div>
      <button onClick={increment}>Add Chord</button>
      <button onClick={decrement}>Remove Chord</button>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FirstForm changeMelody={changeMelody} addNewChord={addNewChord} register={register} newChord={newChord}/>
        <OtherForms formNumber={formNumber} register={register}/>
        <input type="submit" />
      </form>

      {chordList.map((chord, idx)=> <Chord key={idx} idx={idx} chord={chord} startMelody={startMelody} medValue={medValue} changeMed={changeMed}/>)}
    </div>
  );
}

export default App;
