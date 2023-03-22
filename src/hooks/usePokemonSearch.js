import { useEffect, useState } from 'react'

function usePokemonSearch(query) {
    const [ pokemon, setPokemon ] = useState({ battle: [], species: [] })
    const [ loading, setLoading ] = useState(false)
    const [ error, setError ] = useState(false)

    useEffect(() => {
        let ignore = false
        const controller = new AbortController()
        async function fetchPokemonData() {
            setLoading(true)
            let resB_Body = {}
            let resS_Body = {}
            try {
                const resB = await fetch(
                    `https://pokeapi.co/api/v2/pokemon/${query}`,
                    { signal: controller.signal }
                )
                console.log("Battle Data Res: ", resB)

                const resS = await fetch(
                    `https://pokeapi.co/api/v2/pokemon-species/${query}`,
                    { signal: controller.signal }
                )
                console.log("Species Data Res: ", resS)

                if (resB.status !== 200 || resS.status !== 200) {
                    console.log("==status B: ", resB)
                    console.log("==status S: ", resS)
                    setError(true)
                } else {
                    setError(false)
                    resB_Body = await resB.json()
                    resS_Body = await resS.json()
                    console.log(resB_Body)
                    console.log(resS_Body)
                }
            } catch (e) {
                if (e instanceof DOMException) {
                    console.log("HTTP Request Cancelled")
                } else {
                    setError(true)
                    console.error("Error: ", e)
                    throw e
                }
            }

            if (!ignore) {
                setPokemon({ battle: resB_Body, species: resS_Body } || { battle: [], species: [] })
                //console.log("Response: ", pokemon)
                setLoading(false)
            }
        }
        if(query) {
            fetchPokemonData()
        }
        return () => {
            ignore = true
            controller.abort()
        }
    }, [ query ])

    return [ pokemon, loading, error ]
}

export default usePokemonSearch