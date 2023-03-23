import React, { useState, useEffect } from 'react'
import { Link, Outlet, useParams, useSearchParams } from 'react-router-dom'

import useMoveSearch from '../hooks/useMoveSearch'
import usePokemonSearch from '../hooks/usePokemonSearch'
import useSpecificMoveSearch from '../hooks/useSpecificMoveSearch'
import Topnav from "../components/Topnav";

// structure of pokemon.json
// {"dexNum": , "name": "", "typeOne": "", "typeTwo": "", "photoUrl": "https://img.pokemondb.net/sprites/black-white/normal/.png"}

function Moves () {
    // I'm just testing things here, feel free to overwrite this page and its elements - Conner

    // const [ pokemon, loading, error ] = usePokemonSearch("1")
    // //const [ movelist, mLoading, mError ] = useMoveSearch()
    // const [ movedata, smLoading, smError ] = useSpecificMoveSearch("1")

    // console.log("Pokemon Data: ", pokemon)
    // //console.log("Movelist Data: ", movelist)
    // console.log("Specific Move Data: ", movedata)
    // console.log(usePokemonSearch(pokemonName.species));
    const [movelist, loading, error] = useMoveSearch();
    console.log(movelist.results);
    if (movelist.results){
            console.log(movelist.responseBody)
            console.log("im here")
            // const localMoveList  = movelist.results.map(item => (
            // <div key={item.id}>
            //     <Link to={`/moves/${item.name}`}>{item.name}</Link>
            // </div>
            // ));
            const localMoveList = movelist.results.map(item => {
            const lastNumber = item.url.match(/\d+\/?$/)[0].replace('/', '');
            return (
            <div key={item.id}>
                <Link to={`/moves/${lastNumber}`}>{item.name}</Link>
            </div>
            );
        });
            return (
            <div>
                <Topnav />
                {localMoveList}
            </div>
            ); 
    } else {
        return <h1>Loading...</h1>
}
}
 

export default  Moves;