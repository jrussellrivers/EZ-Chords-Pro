import React, {useState} from 'react';
import chords from './chords'

function App() {

  const [chordList, addChords] = useState([])

  const onSubmit = evt =>{
    evt.preventDefault()

  }

  return (
    <div></div>
  );
}

export default App;
