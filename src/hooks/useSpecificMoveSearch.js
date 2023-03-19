import { useEffect, useState } from 'react'

// Queries the Pokemon API for data on a specific numbered move
// This will be used to inflate the cards that contain move names when a user clicks them
// Alternatively, we could make individual pages for each move, whatever ends up being easier
// Depends on how you feel about Parameterized Routes I suppose
//
// Fields to (potentially) ignore
// Contest marked fields only pertain to a few games in the series (Gen 3, 4, and 6)
// Effect_entries contains both a detailed effect and short effect, we probably only need one of those

function useSpecificMoveSearch(query) {
    const [ movedata, setMovedata ] = useState([])
    const [ loading, setLoading ] = useState(false)
    const [ error, setError ] = useState(false)

    useEffect(() => {
        let ignore = false
        const controller = new AbortController()
        async function fetchMoveData() {
            setLoading(true)
            let responseBody = {}
            try {
                const res = await fetch(
                    `https://pokeapi.co/api/v2/move/${query}`,
                    { signal: controller.signal }
                )
                console.log("S.Moves Endpoint Response: ", res)
                if(res.status !== 200) {
                    console.log("== s.moves status: ", res.status)
                    setError(true)
                } else {
                    setError(false)
                    responseBody = await res.json()
                }
            } catch (e) {
                if (e instanceof DOMException) {
                    console.log("S.Moves HTTP Request Cancelled")
                } else {
                    setError(true)
                    console.error("Error: ", e)
                    throw e
                }
            }

            if (!ignore) {
                setMovedata(responseBody || [])
                console.log("S.Moves Response: ", responseBody)
                setLoading(false)
            }
        }
        if(query) {
            fetchMoveData()
        }
        return () => {
            ignore = true
            controller.abort()
        }
    }, [query])

    return [ movedata, loading, error ]
}

export default useSpecificMoveSearch