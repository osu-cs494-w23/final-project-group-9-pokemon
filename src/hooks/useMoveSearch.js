import { useEffect, useState } from 'react'

// Pulls the full list of moves from the Pokemon API
// Each Move contains a name field and a url field
// We can feed these names into the cards for the MoveDex Route
//
// I'd recommend ignoring the url field for now, since I'm making a hook for calling those
// We can just call the move's array value + 1
// Ex: Mist is move #54, and its entry in the array is 53
// So you could just call useSpecificMoveSearch(entry+1) instead

function useMoveSearch() {
    const [ movelist, setMovelist ] = useState([])
    const [ loading, setLoading ] = useState(false)
    const [ error, setError ] = useState(false)

    useEffect(() => {
        let ignore = false
        const controller = new AbortController()
        async function fetchMoveList() {
            setLoading(true)
            let responseBody = {}
            try {
                const res = await fetch(
                    `https://pokeapi.co/api/v2/move?limit=920`,
                    { signal: controller.signal }
                )
                console.log("Moves Endpoint Response: ", res)
                if (res.status !== 200) {
                    console.log("== moves status: ", res.status)
                    setError(true)
                } else {
                    setError(false)
                    responseBody = await res.json()
                }
            } catch (e) {
                if (e instanceof DOMException) {
                    console.log("Moves HTTP Request Cancelled")
                } else {
                    setError(true)
                    console.error("Moves Error: ", e)
                    throw e
                }
            }

            if (!ignore) {
                setMovelist(responseBody || [])
                console.log("Moves Response: ", responseBody)
                setLoading(false)
            }
        }
        fetchMoveList()
        return () => {
            ignore = true
            controller.abort()
        }
    }, [])

    return [ movelist, loading, error ]
}

export default useMoveSearch