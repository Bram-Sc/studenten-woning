import React from 'react';
import './App.css';

function Layout() {
    return (
        <div className="navbar">
            <ul>
                <li><a className="title" href="#home">Studenten woninginen</a></li>
                <li><a href="#item">Item 1</a></li>
                <li><a href="#item">Item 2</a></li>
            </ul>
        </div>
    );
}

export default Layout;