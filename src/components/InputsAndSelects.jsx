import React from 'react';
import { useState } from 'react';
import { changeInputs, changeSelects } from './changeFunctions';

const InputsAndSelects = ({rates}) => {
    const [selectRates, setSelectRates] = useState({
        firstSelect: 1,
        secondSelect: 1
    })
    const [inputs, setInputs] = useState({
        firstValue:'',
        secondValue: ''
    })
    return (
        <div className='form_wrap'>
            <form className='Form'>
                <label>Type a number, and select the value:</label>
                <input 
                    onChange={(e) => changeInputs(e, inputs.firstValue, inputs, selectRates, setInputs)}
                    value={inputs.firstValue}
                    placeholder='Type a number' 
                    type="number" />
                <select 
                    onChange={(e) => {changeSelects(e,1,inputs,selectRates,setSelectRates,setInputs,rates)}} 
                    defaultValue={selectRates.firstSelect}>
                    <option>UAH</option>
                    <option>EUR</option>
                    <option>USD</option>
                    <option>PLN</option>
                </select>
            </form>
            <form className='Form'>
                <label>Type a number, and select the value:</label>
                <input 
                    onChange={(e) => changeInputs(e, inputs.secondValue, inputs, selectRates, setInputs)} 
                    value={inputs.secondValue} 
                    placeholder='Type a number' 
                    type="number"/>
                <select 
                    defaultValue={selectRates.secondSelect}
                    onChange={(e) => {changeSelects(e, 2,inputs,selectRates,setSelectRates,setInputs,rates)}}>
                    <option>UAH</option>
                    <option>EUR</option>
                    <option>USD</option>
                    <option>PLN</option>
                </select>
            </form>
        </div>
    );
};

export default InputsAndSelects;