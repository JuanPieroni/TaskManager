import React from 'react'

export const Card = ({ cartHeader, cardText, children, background = "transparent" }) => {
    const cardStyle = {
        maxWidth: 400,
        boxShadow: ' 0 0.5rem 1rem rgba(224, 221, 221, 0.15)',
        padding: '1rem',
        borderRadius: '5px',
        textAlign: "left",
        margin: "1rem",
        background: background,
    }
    const cardHeaderStyle = {
        maxWidth: 400,
        padding: "1rem",
        borderRadius: '5px',
        color: '#61dafb',
        fontSize: "2.5rem",
       
    }

    const cardBodyStyle = {
        window: '100%',
        margin: '1rem 0',
        display: 'flex',
        flexDirection: 'column',
    }

    return (
        <>
            <div style={cardStyle}>
                {cartHeader && <div style={cardHeaderStyle}>{cartHeader}</div>}
                <div style={cardBodyStyle}>
                    <p>{cardText}</p>
                    {children}
                </div>
            </div>
        </>
    )
}