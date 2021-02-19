import React from 'react'
import Navbar from './navbar'


export default props => (
    <header className="main-header">
        <a href="/#/" className="logo">
            <span className='logo-mini'>A</span>
            <span className="logo-lg">
                <i className="fa fa-money"></i>
                    App
            </span>
        </a>
    <Navbar />
    </header>
)