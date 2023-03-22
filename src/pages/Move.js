import React, { useState, useEffect } from 'react'
import { Outlet, useParams, useSearchParams } from 'react-router-dom'

import useMoveSearch from '../hooks/useMoveSearch'
import usePokemonSearch from '../hooks/usePokemonSearch'
import useSpecificMoveSearch from '../hooks/useSpecificMoveSearch'

function Move() {
    // I'm just testing things here, feel free to overwrite this page and its elements - Conner

    // const [ pokemon, loading, error ] = usePokemonSearch("1")
    // //const [ movelist, mLoading, mError ] = useMoveSearch()
    // const [ movedata, smLoading, smError ] = useSpecificMoveSearch("1")

    // console.log("Pokemon Data: ", pokemon)
    // //console.log("Movelist Data: ", movelist)
    // console.log("Specific Move Data: ", movedata)
    const { moveName } = useParams();
    // console.log(pokemonName);
    // console.log(usePokemonSearch(pokemonName.species));
    const [movedata, loading, error] = useSpecificMoveSearch(moveName);
    console.log(movedata);
    if (movedata.accuracy){
    //     const length = pokemon.species.flavor_text_entries.length
    //     const typeLength = pokemon.battle.types.length
    //     const types = []
    //     types.push(pokemon.battle.types[0].type.name)
    //     if (typeLength === 2){
    //         types.push(pokemon.battle.types[1].type.name)
    //     }
        return (
        <>
            <div>
                <h1>{moveName}</h1>
                <h2>{movedata.accuracy}</h2>
            </div>
                
        </>
        )
    } else {
        return <h1>Loading...</h1>
    }
}

export default Move;