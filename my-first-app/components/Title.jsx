import React from 'react'

export const Title = ({ classes, text="Components" }) => {
    
    return (
        <div>
            <h1 className={classes}>{text}</h1>
        </div>
  
   
  )
}