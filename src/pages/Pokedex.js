import React, { useState, useEffect } from 'react'
import { Outlet, useParams, useSearchParams } from 'react-router-dom'
import Topnav from '../components/Topnav'

import '../styles/Home.css'
import '../styles/Pokedex.css'
import { NavLink } from 'react-router-dom'

import pokemonJson from '../data/pokemon.json'
import { Pokemon } from './Pokemon'

const pokemonData = pokemonJson

function PokemonCard(props) {
    return (
            <div className='pokemonCard'>
                <div className='imgcontainer'>
                    <img className='pokemonImg' src={props.image}/>
                </div>
                <p className='dexNumber'>#{props.dexNumber}</p>
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
            <div className='pokemonList'>
            {Object.keys(pokemonData).map(key => (
                <NavLink key={key} to={`/pokemon${key}`}>
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