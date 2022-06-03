import React from 'react'

export default function MaxInput({max, setMax}) {

 

    return (
        <div className="input-div">
          <div className="input-label">Max:</div>
          <input type="number" value={max} onChange={e => setMax(e.target.value)} />
        </div>
    )
}
