import React from 'react'

export default function MinInput({ min, setMin }) {



    return (
        <div className="input-div">
            <div className="input-label">Min:</div>
            <input type="number" value={min} onChange={e => setMin(e.target.value)} />
        </div>
    )
}
