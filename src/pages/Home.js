import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

import usePokemonSearch from '../hooks/usePokemonSearch'

// structure of pokemon.json
// {"dexNum": , "name": "", "typeOne": "", "typeTwo": "", "photoUrl": "https://img.pokemondb.net/sprites/black-white/normal/.png"}

function Home() {
    const [ pokemon, loading, error ] = usePokemonSearch("1")

    console.log("Pokemon Data: ", pokemon)

    return (
        <>
            <h1>Pokemon Database</h1>
        </>
    )
}

export default Home