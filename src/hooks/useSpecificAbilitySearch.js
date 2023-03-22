import { useEffect, useState } from 'react'

// Queries the Pokemon API for data on a specific numbered ability
// This will be used to inflate the cards that contain the ability names when a user clicks them
// Alternatively, we could make individual pages for each ability, whatever ends up being easier
// Depends on how you feel about Parameterized Routes I suppose

function useSpecificAbilitySearch(query) {
    const [ abilitydata, setAbilitydata ] = useState([])
    const [ loading, setLoading ] = useState(false)
    const [ error, setError ] = useState(false)

    useEffect(() => {
        let ignore = false
        const controller = new AbortController()
        async function fetchAbilityData() {
            setLoading(true)
            let responseBody = {}
            try {
                const res = await fetch(
                    `https://pokeapi.co/api/v2/ability/${query}`,
                    { signal: controller.signal }
                )
                console.log("S.Ability Endpoint Response: ", res)
                if(res.status !== 200) {
                    console.log("== s.abilities status: ", res.status)
                    setError(true)
                } else {
                    setError(false)
                    responseBody = await res.json()
                }
            } catch (e) {
                if (e instanceof DOMException) {
                    console.log("S.Ability HTTP Request Cancelled")
                } else {
                    setError(true)
                    console.error("Error: ", e)
                    throw e
                }
            }

            if (!ignore) {
                setAbilitydata(responseBody || [])
                console.log("S.Ability Response: ", responseBody)
                setLoading(false)
            }
        }
        if(query) {
            fetchAbilityData()
        }
        return () => {
            ignore = true
            controller.abort()
        }
    }, [query])

    return [ abilitydata, loading, error ]
}

export default useSpecificAbilitySearch