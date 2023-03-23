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

function SearchBar() {
    return (
        <form  
            onSubmit={e => {
            e.preventDefault()
            }}>
                <input placeholder="Search for a Pokemon..." />
                <button type="submit">Search</button>
        </form>
    )
}

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
    return (
        <>
            <Topnav/>
            <SearchBar/>
            <div className='pokemonList'>
            {Object.keys(pokemonData.filter(PokemonCard => PokemonCard.pokemonName.includes('C'))).map(key => (
            /* {Object.keys(pokemonData).map(key => ( */
                <NavLink className='pokemonLink' key={key} to={`/pokemon/${key}`}>
                    <PokemonCard
                    pokemonName={pokemonData[key].name}
                    dexNumber={pokemonData[key].dexNum}
                    typeOne={pokemonData[key].typeOne}
                    typeTwo={pokemonData[key].typeTwo}
                    image={pokemonData[key].photoUrl}
                />
                </NavLink>
            ))}
            </div>
        </>
    )
}

export default Pokedex;