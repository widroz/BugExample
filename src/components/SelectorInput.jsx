import React from 'react'

export default function SelectorInput({selector, setSelector}) {

 
    return (
        <div className="input-div">
            <div className="input-label">Selector:</div>
            <input type="number" value={selector} onChange={e => setSelector(e.target.value)} />
        </div>
    )
}
