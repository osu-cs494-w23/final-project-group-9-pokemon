import { useEffect, useState } from "react";
import { Link, Outlet, useParams, useSearchParams } from "react-router-dom";

import useAbilitySearch from "../hooks/useAbilitySearch";

function Abilities () {
    const [ abilitylist, loading, error ] = useAbilitySearch()
    console.log(abilitylist.results)

    if (abilitylist.results) {
        console.log(abilitylist.responseBody)
        console.log("abilitylist is called")
        const localAbilityList = abilitylist.results.map(item => (
            <div key={item.id}>
                <Link to={`/abilities/${item.name}`}>{item.name}</Link>
            </div>
        ))
        return (
            <div>
                {localAbilityList}
            </div>
        )
    } else {
        return <h1>Loading...</h1>
    }
}
export default Abilities