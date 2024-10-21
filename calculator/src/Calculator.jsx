import { useState } from "react"

const Calculator =() => {

  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

//button clicked value
const buttonClicked = (value) => {
  setInput((prev => prev + value))
}
//clean display
const clearInput = ()=>{
  setInput('');
  setResult('')
}
//calculate result
const calculate =()=>{
  try{
    //check the expression on input and save the result
    const checkResult = eval(input);
    setResult(checkResult);
  }catch {
    setResult('Error')
  }
}
  return (
    <div className='calculator'>
        <div className='display'>
          <div className="input-op">{input || ''}</div>
          <div className="input-res">{result}</div>
            {/*Resultado y pantallita de la calculadora */}
        </div>

        <button onClick={clearInput} className="button-clear">CLEAR</button>
        <div className='buttons'>
          <button onClick ={() => buttonClicked('+')} className="button-sum">+</button>
          <button onClick ={() => buttonClicked('-')} className="button-sub">-</button>
          <button onClick ={() => buttonClicked('*')} className="button-mult">*</button>
          <button onClick ={() => buttonClicked('/')} className="button-div">/</button>
          <button onClick ={() => buttonClicked('1')} className="button-1">1</button>
          <button onClick ={() => buttonClicked('2')} className="button-2">2</button>
          <button onClick ={() => buttonClicked('3')} className="button-3">3</button>
          <button onClick ={() => buttonClicked('4')} className="button-4">4</button>
          <button onClick ={() => buttonClicked('5')} className="button-5">5</button>
          <button onClick ={() => buttonClicked('6')} className="button-6">6</button>
          <button onClick ={() => buttonClicked('7')} className="button-7">7</button>
          <button onClick ={() => buttonClicked('8')} className="button-8">8</button>
          <button onClick ={() => buttonClicked('8')} className="button-9">9</button>
          <button onClick ={() => buttonClicked('0')} className="button-0">0</button>
          <button onClick ={calculate} className="button-result">=</button>
        </div>
    </div>
  )
}

export default Calculator
