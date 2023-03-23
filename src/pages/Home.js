import React, { useState, useEffect } from 'react'
import Topnav from '../components/Topnav'

import useMoveSearch from '../hooks/useMoveSearch'
import usePokemonSearch from '../hooks/usePokemonSearch'
import useSpecificMoveSearch from '../hooks/useSpecificMoveSearch'
import useAbilitySearch from '../hooks/useAbilitySearch'
import useSpecificAbilitySearch from '../hooks/useSpecificAbilitySearch'

import '../styles/Home.css'
import { NavLink } from 'react-router-dom'

// structure of pokemon.json
// {"dexNum": , "name": "", "typeOne": "", "typeTwo": "", "photoUrl": "https://img.pokemondb.net/sprites/black-white/normal/.png"}

function Home() {

    let audio = new Audio("/eevee.mp3")

    const start = () => {
        audio.play()
    }

    return (
        <>
            <Topnav />
            <div className="flex-container">
                <h1>Welcome to Group 9's Pokemon Database!</h1>
                <img src={`icons/eevee_icon.png`} onClick={start}/>
                <ul className="home_style">
                    <li className="home_style"><NavLink to="/pokedex" className="home_style">PokéDex</NavLink></li>
                    <li className="home_style"><NavLink to="/abilities" className="home_style">AbilityDex</NavLink></li>
                    <li className="home_style"><NavLink to="/moves" className="home_style">MoveDex</NavLink></li>
                </ul>
            </div>
        </>
    )
}

export default Home