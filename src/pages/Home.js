import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import Topnav from '../components/Topnav'

import useMoveSearch from '../hooks/useMoveSearch'
import usePokemonSearch from '../hooks/usePokemonSearch'
import useSpecificMoveSearch from '../hooks/useSpecificMoveSearch'
import useAbilitySearch from '../hooks/useAbilitySearch'
import useSpecificAbilitySearch from '../hooks/useSpecificAbilitySearch'

// structure of pokemon.json
// {"dexNum": , "name": "", "typeOne": "", "typeTwo": "", "photoUrl": "https://img.pokemondb.net/sprites/black-white/normal/.png"}

function Home() {
    // I'm just testing things here, feel free to overwrite this page and its elements - Conner

    // const [ pokemon, loading, error ] = usePokemonSearch("1")
    // const [ movelist, mLoading, mError ] = useMoveSearch()
    // const [ movedata, smLoading, smError ] = useSpecificMoveSearch("1")
    const [ abilitylist, aLoading, aError ] = useAbilitySearch()
    const [ abilityData, saLoading, saError] = useSpecificAbilitySearch("2")

    // console.log("Pokemon Data: ", pokemon)
    // console.log("Movelist Data: ", movelist)
    // console.log("Specific Move Data: ", movedata)
    console.log("Abilitylist Data: ", abilitylist)
    console.log("Specific Ability Data: ", abilityData)

    return (
        <>
            <Topnav />
        </>
    )
}

export default Home