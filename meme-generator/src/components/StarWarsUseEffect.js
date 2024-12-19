// Learning about the useEffect hook, it's a React Hook that lets you syncrhonize a component with an external system.
// Its usual setup is useEffect(setup, dependencies?)

import React from "react"

export default function StarWarsUseEffect() {
    const [starWarsData, setStarWarsData] = React.useState({})
    const [count, setCount] = React.useState(1)

    React.useEffect(function() {
        fetch(`https://swapi.py4e.com/api/people/${count}`)
            .then(res => res.json())
            .then(data => setStarWarsData(data))
    }, [count])

    return (
        <div>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Get Next Character</button>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}