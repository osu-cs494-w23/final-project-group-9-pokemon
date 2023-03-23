import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Home from './pages/Home'
import {Pokemon, SinglePokemon} from './pages/Pokemon'
import Pokedex from './pages/Pokedex'
import Moves from './pages/Moves'
import Move from './pages/Move'
import Abilities from './pages/Abilities'
import Ability from './pages/Ability'

function App() {
    return (
        <Routes>
            <Route
                path="/home"
                element={<Home />}
            />
            <Route
                path="/pokedex"
                element={<Pokedex />}
            />
            <Route
                path="/pokemon"
                element={<Pokemon />}
            >
                <Route path=":pokemonName" element={<SinglePokemon />} />
            </Route>
            <Route
                path="/moves"
                element={<Moves />}
            />
            <Route 
                path="/moves/:moveName" 
                element={<Move />} 
            />
                        <Route
                path='/abilities'
                element={<Abilities />}
            />
            <Route
                path='/abilities/:abilityName'
                element={<Ability />}
            />
            <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
    )
}

export default App