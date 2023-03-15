import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

import usePokemonSearch from '../hooks/usePokemonSearch'

function Home() {
    const [ pokemon, loading, error ] = usePokemonSearch("1")

    return (
        <>
            <h1>Pokemon Database</h1>
        </>
    )
}

export default Home