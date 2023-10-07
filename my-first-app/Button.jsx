import React from 'react'

export const Button = ({ classes, handleEvent }) => {
    return (
        <button onClick={handleEvent} className={`btn ${classes}`}>
            Button
        </button>
    )
}
 