import chords from './chords'

let melodyValues = {
    'C':25,
    'C#':26,
    'Db':26,
    'D':27,
    'D#':28,
    'Eb':28,
    'E':29,
    'F':18,
    'F#':19,
    'Gb':19,
    'G':20,
    'G#':21,
    'Ab':21,
    'A':22,
    'A#':23,
    'Bb':23,
    'B':24
}

const calculateMed = (chord) =>{
    let note = chord[0]
    let variation = chord[1]
    let newChordList = []
    
    
    let maxValue = melodyValues[chord[2]]

    chords[note][variation].forEach(new_chord =>{
        let highest = 0 

        new_chord.chords.forEach(element => {
            if (element <= maxValue && element > highest){
                highest = element
            }
        });

        newChordList.push([highest, new_chord.name])
    })    
    let sortedChords = newChordList.sort((a,b)=>a[0]-b[0])

    let sortedSum = 0
    for (let i=0;i<sortedChords.length;i++){
        sortedSum += sortedChords[i][0]
    }

    let sortedAverage = sortedSum / (sortedChords.length)
    return(sortedAverage)
}

export default calculateMed