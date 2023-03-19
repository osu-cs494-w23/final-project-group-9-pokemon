import React, { useState, useEffect } from 'react'
import { Outlet, useParams, useSearchParams } from 'react-router-dom'

import useMoveSearch from '../hooks/useMoveSearch'
import usePokemonSearch from '../hooks/usePokemonSearch'
import useSpecificMoveSearch from '../hooks/useSpecificMoveSearch'

// structure of pokemon.json
// {"dexNum": , "name": "", "typeOne": "", "typeTwo": "", "photoUrl": "https://img.pokemondb.net/sprites/black-white/normal/.png"}
function SinglePokemon(){
    const { pokemonName } = useParams();
    // console.log(pokemonName);
    // console.log(usePokemonSearch(pokemonName.species));
    const [pokemon, loading, error] = usePokemonSearch(pokemonName);
    console.log(pokemon.battle);
    const length = pokemon.species.flavor_text_entries.length
    const typeLength = pokemon.battle.types.length
    let types = []
    types.push(pokemon.battle.types[0].type.name)
    if (typeLength === 2){
        types.push(pokemon.battle.types[1].type.name)
    }
    return (
        <>
            <div>
                <h1>#{pokemon.battle.id}</h1>
                <h1>{pokemon.battle.name}</h1>
                <h2>{types}</h2>
                <h3>Most Recent Dex Entry:</h3>
                <h4>{pokemon.species.flavor_text_entries[length-1].flavor_text}</h4>
            </div>
            <div>
                <h2>Battle Data:</h2>
                {/* /* <h3>HP: {pokemon.battle.</h3> */}
            </div>
        </>
    )

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
            <h1>SearchBar</h1>
            <Outlet />
        </>
    )
}

export { Pokemon, SinglePokemon };