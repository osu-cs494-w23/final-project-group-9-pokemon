import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Home from './pages/Home'
import {Pokemon, SinglePokemon} from './pages/Pokemon'

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
            <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
    )
}

export default App