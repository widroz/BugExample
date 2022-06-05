import React from 'react'

export default function InputField({ inputValue, setInputValue, title }) {

     
        return (
<form className="form-floating my-1">
  <input type="number" className="form-control" id="floatingInputValue" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
  <label htmlFor="floatingInputValue">{title}</label>
</form>
        )
    }
    