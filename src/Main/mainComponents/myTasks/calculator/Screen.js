import {useContext} from 'react'
import "./calculatorIndex.css"
import {CalcContext} from "./context/CalcContext"
import { Textfit } from 'react-textfit';
// make sure to install react text fit
// npm i react-textfit --force
// the --force incase it refused to insall becose of other dependancies


const Screen = () => {

  const { calc } = useContext(CalcContext)

  return (
    <Textfit className='screen' max={70} mode='single'>{calc.num ? calc.num : calc.res}</Textfit>
  )
}

export default Screen