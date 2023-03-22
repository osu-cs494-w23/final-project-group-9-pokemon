import { useEffect, useState } from 'react'

// Pulls the full list of abilities from the Pokemon API
// Each Ability contains a name field and a url field
// We can feed these names into the cards for the AbilityDex Route
//
// I'd recommend ignoring the url field for now, since I'm making a hook for calling those
// We can just call the ability's array value + 1
// Ex: Drizzle is ability #2, and its entry in the array is 1
// So you could just call useSpecificAbilitySearch(entry+1) instead

function useAbilitySearch() {
    const [ abilityList, setAbilityList ] = useState([])
    const [ loading, setLoading ] = useState(false)
    const [ error, setError ] = useState(false)

    useEffect(() => {
        let ignore = false
        const controller = new AbortController()
        async function fetchAbilityList() {
            setLoading(true)
            let responseBody = {}
            try {
                const res = await fetch(
                    `https://pokeapi.co/api/v2/ability?limit=360`,
                    { signal: controller.signal }
                )
                console.log("Ability Endpoint Response: ", res)
                if (res.status !== 200) {
                    console.log("== ability status: ", res.status)
                    setError(true)
                } else {
                    setError(false)
                    responseBody = await res.json()
                }
            } catch (e) {
                if (e instanceof DOMException) {
                    console.log("Ability HTTP Request Cancelled")
                } else {
                    setError(true)
                    console.error("Ability Error: ", e)
                    throw e
                }
            }

            if (!ignore) {
                setAbilityList(responseBody || [])
                console.log("Ability Response: ", responseBody)
                setLoading(false)
            }
        }
        fetchAbilityList()
        return () => {
            ignore = true
            controller.abort()
        }
    }, [])

    return [ abilityList, loading, error ]
}

export default useAbilitySearch