import React, { useState } from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
const Header = () => {
    const [isActive, setActive] = useState(false)
    const toggleClass = () => {
        setActive(true)
    }
    return (
        <header>
            <div id="brand"><a href="/">M</a></div>
            <nav>
                <ul>
                    <li><a href="#">Sample</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Layouts</a></li>
                    <li><a href="#">Our Shop</a></li>
                    <li><a href="#">Buy Theme</a></li>
                    <li><SearchIcon /></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
