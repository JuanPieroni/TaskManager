import React from 'react'

export const Header = ({ children }) => {
    return (
        <header style={{ display: 'flex', flexDirection: 'column', border: "2px solid white"}}>
            <h2>HEADER</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt, officia?
            </p>
            {children}
        </header>
    )
}
