import React from 'react'

export default function SelectorInput({selector, setSelector}) {

 
    return (
        <div>
            <input type="number" value={selector} onChange={e => setSelector(e.target.value)} />
        </div>
    )
}
