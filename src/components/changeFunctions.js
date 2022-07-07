export const changeInputs = (e, input, inputs, selectRates, setInputs) => {
    if (input === inputs.firstValue) {
        if (selectRates.firstSelect === selectRates.secondSelect) {
            setInputs({...inputs, firstValue: e.target.value, secondValue: (e.target.value*1).toFixed(2)})
        } else {
            setInputs({...inputs, firstValue: e.target.value, secondValue: (e.target.value/selectRates.firstSelect*selectRates.secondSelect).toFixed(2)})
        }
    } else if (input === inputs.secondValue) {
        if (selectRates.firstSelect === selectRates.secondSelect) {
            setInputs({...inputs, secondValue: e.target.value, firstValue: (e.target.value*1).toFixed(2)})
        } else {
            setInputs({...inputs, secondValue: e.target.value, firstValue: (e.target.value/selectRates.secondSelect*selectRates.firstSelect).toFixed(2)})
        }
    }
}

export const changeSelects = (e, select, inputs, selectRates, setSelectRates, setInputs, rates) => {
    if(select === 1) {
        setSelectRates({...selectRates, firstSelect: rates[e.target.value]});
        setInputs({...inputs, firstValue: (inputs.firstValue/selectRates.firstSelect*rates[e.target.value]).toFixed(2)})
    } else if (select === 2) {
        setSelectRates({...selectRates, secondSelect: rates[e.target.value]});
        setInputs({...inputs, secondValue: (inputs.secondValue/selectRates.secondSelect*rates[e.target.value]).toFixed(2)})
    }
}