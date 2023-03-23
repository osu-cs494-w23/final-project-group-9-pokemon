import React, { useState, useEffect } from 'react'
import { Outlet, useParams, useSearchParams } from 'react-router-dom'
import Topnav from '../components/Topnav'

import '../styles/Home.css'
import '../styles/Pokedex.css'
import { NavLink } from 'react-router-dom'

import pokemonJson from '../data/pokemon.json'
import { Pokemon } from './Pokemon'

const pokemonData = pokemonJson
var searchQuery



function PokemonCard(props) {
    return (
            <div className='pokemonCard'>
                <p className='dexNumber'>#{props.dexNumber}</p>
                <div className='imgcontainer'>
                    <img className='pokemonImg' src={props.image}/>
                </div>
                <p className='pokemonName'>{props.pokemonName}</p>
                <div className='typeContainer'>
                    <div className='type'>
                        <p className='typeLabel'>{props.typeOne}</p>
                    </div>
                    {props.typeTwo &&
                    <div className='typeContainer'>
                        <p className='typeLabel'>{props.typeTwo}</p>
                    </div>
                    }
                </div>
            </div>
    )
}

function Pokedex() {
    const [ searchVal, setSearchVal ] = useState("")
    const [ filteredData, setFilter ] = useState([])

    const handleChange = (event) => {
        setSearchVal(event.target.value)
        console.log("Input: ", searchVal)
    }

    useEffect(() => {
        //const newPokeData = pokemonData.filter(value => value.name.toLowerCase().includes(searchVal.toLowerCase()))
        const newPokeData = searchVal ? pokemonData.filter(item => item.name.includes(searchVal)) : pokemonData
        setFilter(newPokeData)
        console.log("New List: ", filteredData)
    }, [searchVal])

    return (
        <>
            <Topnav/>

            <input placeholder="Search for a Pokemon..." type="text" onChange={handleChange}/>
            <div className='pokemonList'>
            
            {Object.keys(filteredData).map(key => ( 
                <NavLink className='pokemonLink' key={key} to={`/pokemon/${filteredData[key].dexNum}`}>
                    <PokemonCard
                    pokemonName={filteredData[key].name}
                    dexNumber={filteredData[key].dexNum}
                    typeOne={filteredData[key].typeOne}
                    typeTwo={filteredData[key].typeTwo}
                    image={filteredData[key].photoUrl}
                />
                </NavLink>
            ))}
            </div>
        </>
    )
}

export default Pokedex;