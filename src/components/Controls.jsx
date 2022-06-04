import React from 'react'
import InputField from './InputField'

export default function Controls({min, max, selector, setMin, setMax, setSelector}) {
  return (
    <div className="inputs-div">
    {/*<InputField title="Min:" inputValue={min} setInputValue={setMin}></InputField>*/}
    <InputField title="Max:" inputValue={max} setInputValue={setMax}></InputField>
    <InputField title="Selector:" inputValue={selector} setInputValue={setSelector}></InputField>
    </div>
  )
}
