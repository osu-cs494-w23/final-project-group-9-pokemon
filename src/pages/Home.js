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
    // I'm just testing things here, feel free to overwrite this page and its elements - Conner

    // const [ pokemon, loading, error ] = usePokemonSearch("1")
    // const [ movelist, mLoading, mError ] = useMoveSearch()
    // const [ movedata, smLoading, smError ] = useSpecificMoveSearch("1")
    //const [ abilitylist, aLoading, aError ] = useAbilitySearch()
    //const [ abilityData, saLoading, saError] = useSpecificAbilitySearch("2")

    // console.log("Pokemon Data: ", pokemon)
    // console.log("Movelist Data: ", movelist)
    // console.log("Specific Move Data: ", movedata)
    //console.log("Abilitylist Data: ", abilitylist)
    //console.log("Specific Ability Data: ", abilityData)

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
                    <li className="home_style"><NavLink to="/movedex" className="home_style">MoveDex</NavLink></li>
                </ul>
            </div>
        </>
    )
}

export default Home