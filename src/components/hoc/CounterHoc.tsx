import React, { useState } from 'react'

export const CounterHoc = () => {
    const [count, setcount] = useState(0)
    return (
        <div>
            <h3>{count}</h3>
            <button onClick={() => setcount(count + 1)}>Update</button>
        </div>
    )
}
