import React from "react";

function Counters({title, emoji, setFruitValue, fruitValue}) {
    return (
        <article className="counter">
            <h2>{title}</h2>
            <p>{emoji}</p>
            <button
                type="button"
                onClick={() => setFruitValue(fruitValue - 1)}
                disabled={fruitValue === 0}
            >-
            </button>
            <p>{fruitValue}</p>
            <button
                type="button"
                onClick={() => setFruitValue(fruitValue + 1)}
            >+
            </button>
        </article>
    )
}

export default Counters;