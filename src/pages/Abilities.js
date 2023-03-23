import { useEffect, useState } from "react";
import { Link, Outlet, useParams, useSearchParams } from "react-router-dom";
import Topnav from "../components/Topnav";

import useAbilitySearch from "../hooks/useAbilitySearch";

function Abilities () {
    const [ abilitylist, loading, error ] = useAbilitySearch()
    console.log(abilitylist.results)

    if (abilitylist.results) {
        console.log(abilitylist.responseBody)
        console.log("abilitylist is called")

        const localAbilityList = abilitylist.results.map(item => {
            const lastNumber = item.url.match(/\d+\/?$/)[0].replace('/', '');
            return (
            <div key={item.id}>
                <Link to={`/abilities/${lastNumber}`}>{item.name}</Link>
            </div>
            );
        });
        return (
            <div>
                <Topnav />
                {localAbilityList}
            </div>
        )
    } else {
        return <h1>Loading...</h1>
    }
}
export default Abilities