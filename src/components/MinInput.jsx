import React from 'react'

export default function MinInput({min, setMin}) {

 

    return (
        <div>
           <input type="number" value={min} onChange={e => setMin(e.target.value)} />
        </div>
    )
}
