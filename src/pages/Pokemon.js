import React, { useState, useEffect } from 'react'
import { Outlet, useParams, useSearchParams } from 'react-router-dom'
import Topnav from '../components/Topnav'

import useMoveSearch from '../hooks/useMoveSearch'
import usePokemonSearch from '../hooks/usePokemonSearch'
import useSpecificMoveSearch from '../hooks/useSpecificMoveSearch'

import '../styles/Pokemon.css'

// structure of pokemon.json
// {"dexNum": , "name": "", "typeOne": "", "typeTwo": "", "photoUrl": "https://img.pokemondb.net/sprites/black-white/normal/.png"}
function SinglePokemon(){
    const { pokemonName } = useParams();
    // console.log(pokemonName);
    // console.log(usePokemonSearch(pokemonName.species));
    const [pokemon, loading, error] = usePokemonSearch(pokemonName);
    console.log("== pokemon.battle: ",pokemon.battle);
    console.log("== pokemon.species: ",pokemon.species);
    console.log("== pokemon.sprites: ",pokemon.sprites);

    // console.log("== src link (battle): ", pokemon.battle.sprites.back_default);
    // console.log("== src link (sprites): ", pokemon.sprites.sprites.back_default);

    if (pokemon.battle.types){
        const length = pokemon.species.flavor_text_entries.length
        const typeLength = pokemon.battle.types.length
        const types = []
        types.push(pokemon.battle.types[0].type.name)
        if (typeLength === 2){
            types.push(pokemon.battle.types[1].type.name)
        }
        return (
        <>
            <Topnav />
            <div className='poke-profile'>
                <img className='img-pokemon' src={pokemon.battle.sprites.back_default}/>
                <h1>#{pokemon.battle.id}</h1>
                <h1>{pokemon.battle.name}</h1>
                <h2></h2>
                <h3>Most Recent Dex Entry:</h3>
                <h4>{pokemon.species.flavor_text_entries[length -1].flavor_text}</h4>
            </div>
            <div className='flex-container-pokemon'>
                <div>
                    <div className='data-box'>
                        <h2>Battle Data:</h2><br></br>
                        <h3>HP: {pokemon.battle.stats[0].base_stat}</h3>
                        <h3>Attack: {pokemon.battle.stats[1].base_stat}</h3>
                        <h3>Defence: {pokemon.battle.stats[2].base_stat}</h3>
                        <h3>Special Attack: {pokemon.battle.stats[3].base_stat}</h3>
                        <h3>Special Defence: {pokemon.battle.stats[4].base_stat}</h3>
                        <h3>Speed: {pokemon.battle.stats[5].base_stat}</h3>
                    </div>
                    <div className='data-box'>
                        <h2>Ability Data:</h2><br></br>
                        {pokemon.battle.abilities.map((ability, index) => (
                            <h3 key={index}>{ability.ability.name}</h3>
                        ))}
                    </div>
                </div>
                <div>
                    <div className='move-set-box'>
                        <h2>Move Set: </h2><br></br>
                        {pokemon.battle.moves.map((moves, index) => (
                            <h3 key={index}>{moves.move.name}</h3>
                        ))}
                    </div>
                </div>
                
            </div>
            
        </>
        )
    } else {
        return <h1>Loading...</h1>
    }
    

}
function Pokemon() {
    // I'm just testing things here, feel free to overwrite this page and its elements - Conner

    // const [ pokemon, loading, error ] = usePokemonSearch("1")
    // //const [ movelist, mLoading, mError ] = useMoveSearch()
    // const [ movedata, smLoading, smError ] = useSpecificMoveSearch("1")

    // console.log("Pokemon Data: ", pokemon)
    // //console.log("Movelist Data: ", movelist)
    // console.log("Specific Move Data: ", movedata)

    return (
        <>
            {/* <h1>SearchBar</h1> */}
            <Outlet />
        </>
    )
}

export { Pokemon, SinglePokemon };