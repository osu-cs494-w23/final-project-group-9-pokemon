import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Home from './pages/Home'
import {Pokemon, SinglePokemon} from './pages/Pokemon'
import Moves from './pages/Moves'
import Move from './pages/Move'

function App() {
    return (
        <Routes>
            <Route
                path="/home"
                element={<Home />}
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
            <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
    )
}

export default App