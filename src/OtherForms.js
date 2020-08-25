import React from 'react';
import AddOtherForm from './AddOtherForm'

const OtherForms = ({register, formNumber}) =>{
    let numberOfForms = []
    for (let i=0;i<formNumber-1;i++){
        numberOfForms.push(<AddOtherForm key={i} idx={i} register={register}/>)
    }
    return(
        numberOfForms
    )
}

export default OtherForms