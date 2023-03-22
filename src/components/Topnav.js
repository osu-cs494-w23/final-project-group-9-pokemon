import { useState, useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import './Topnav.css'

import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';

function Topnav() {
    const [ navOpen, setNavOpen ] = useState(false)

    const ref = useRef();
    useEffect(() => {
        const handler = (event) => {
            if (navOpen && ref.current && !ref.current.contains(event.target)) {
                setNavOpen(false)
            }
        }
        document.addEventListener('mousedown', handler)
        return () => {
            document.removeEventListener('mousedown', handler)
        }
    }, [navOpen])

    return (
        <>
            <nav ref={ref} className="navbar">
                <button className="toggle" onClick={() => setNavOpen((prev) => !prev)}>
                    {navOpen ? (<MdClose style={{ width: '32px', height: '32px' }} />) : (<FiMenu style={{ width: '32px', height: '32px' }} />) }
                </button>
                <h1>Pokemon Database</h1>
                <ul className={`menu-nav${navOpen ? ' show-menu' : ''}`}>
                    <li>
                        <NavLink to="/pokedex" onClick={() => setNavOpen(false)}>PokeDex</NavLink>
                    </li>
                    <li>
                        <NavLink to="/abilitydex" onClick={() => setNavOpen(false)}>AbilityDex</NavLink>
                    </li>
                    <li>
                        <NavLink to="/movedex" onClick={() => setNavOpen(false)}>MoveDex</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Topnav