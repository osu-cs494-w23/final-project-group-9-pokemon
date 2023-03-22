import React, { useState, useEffect } from "react";
import { Outlet, useParams, useSearchParams } from "react-router-dom";
import Topnav from "../components/Topnav";

import useSpecificAbilitySearch from "../hooks/useSpecificAbilitySearch";

function Ability() {
    const { abilityName } = useParams()

    const [ abilitydata, loading, error ] = useSpecificAbilitySearch(abilityName)
    console.log(abilitydata)


    if (abilitydata.effect_entries) {
        return (
            <>
                <div>
                    <Topnav />
                    <h1>{abilityName}</h1>
                    <h2>{abilitydata.effect_entries[1].effect}</h2>
                </div>
            </>
        )
    } else {
        return <h1>Loading...</h1>
    }
}

export default Ability