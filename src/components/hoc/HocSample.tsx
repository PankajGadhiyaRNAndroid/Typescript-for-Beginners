import React from 'react'

type HocSampleProps = {
    component: React.ReactNode
}
export const HocSample = ({ component }: HocSampleProps) => {
    return (
        <h2 style={{ backgroundColor: 'red' }}>{component}</h2>
    )
}
