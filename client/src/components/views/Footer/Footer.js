import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className="footer" style={{
            height: '80px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'1rem'
        }}>
           <p> © Copyright 2020 by GO Lee </p>
        </div>
    )
}

export default Footer
