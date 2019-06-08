import React from 'react'
import { Link } from 'react-router'
import logo from '../../logo.png'

const Header = () => {
        return (
            <div>
                <header style={headerStyle}>
                    <img src={logo} alt="logo" style={{ width: 50 }} />
                    <h1 style={{ marginLeft: '5px' }}>The MovieDb App</h1>
                </header>
            </div>
        )
}

const headerStyle = {
    background: '#000',
    color: '#fff',
    padding: '10px',
    display: 'flex'
}

export default Header
