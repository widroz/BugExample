import React from 'react'

export default function MaxInput({max, setMax}) {

 

    return (
        <div>
          <input type="number" value={max} onChange={e => setMax(e.target.value)} />
        </div>
    )
}
