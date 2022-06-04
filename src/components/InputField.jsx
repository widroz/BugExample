import React from 'react'

export default function InputField({ inputValue, setInputValue, title }) {

     
        return (
            <div className="input-div">
                <div className="input-label">{title}</div>
                <input type="number" value={inputValue} onChange={e => setInputValue(e.target.value)} />
            </div>
        )
    }
    