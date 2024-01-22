import React from 'react'
import CalculatorWrapper from './CalculatorWrapper'
import Screen from './Screen'
import "./calculatorIndex.css"
import ButtonBox from './ButtonBox';
import Button from './Button';
import CalcProvider from './context/CalcContext';

const btnValues = [
    ["C", "+-", "%", "/"],
    [7, 8, 9, "x"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
];

const CalculatorApp = () => {
  return (
    <CalcProvider>
        <div className='CalculatorApp'>
        <CalculatorWrapper>
            <Screen/>
            <ButtonBox>
                {btnValues.flat().map((btn, i) => (
                <Button
                    value={btn}
                    Key={i}
                />
                ))}
            </ButtonBox>
        </CalculatorWrapper>
    </div>
    </CalcProvider>
  )
}

export default CalculatorApp