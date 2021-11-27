import React, {useState} from 'react';
import {useForm} from "react-hook-form";

import './App.css';

function App() {

    const [fruitValue, setFruitValue] = useState(0);
    // const [strawberryValue, setStrawberryValue] = useState(0);
    // const [bananaValue, setBananaValue] = useState(0);
    // const [appleValue, setAppleValue] = useState(0);
    // const [kiwiValue, setKiwiValue] = useState(0);
    const {register, handleSubmit} = useForm();

    function resetFruitValue() {
        return setFruitValue(0);
    }

    function onFormSubmit(data) {
        console.log("data")
    }

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <div className="fruitmand">
                <article className="aardbeien">
                    <h2>Aardbeien</h2>
                    <button
                        name="Aardbeien"
                        type="button"
                        onClick={() => setFruitValue(fruitValue - 1)}
                        disabled={fruitValue === 0}>-
                    </button>
                    <p>{fruitValue}</p>
                    <button
                        type="button"
                        onClick={() => setFruitValue(fruitValue + 1)}>+
                    </button>
                </article>
                <article className="Bananen">
                    <h2>Bananen</h2>
                    <button
                        type="button"
                        onClick={() => setFruitValue(fruitValue - 1)}
                        disabled={fruitValue === 0}>-
                    </button>
                    <p>{fruitValue}</p>
                    <button
                        type="button"
                        onClick={() => setFruitValue(fruitValue + 1)}>+
                    </button>
                </article>
                <article className="Appels">
                    <h2>Appels</h2>
                    <button
                        type="button"
                        onClick={() => setFruitValue(fruitValue - 1)}
                        disabled={fruitValue === 0}>-
                    </button>
                    <p>{fruitValue}</p>
                    <button
                        type="button"
                        onClick={() => setFruitValue(fruitValue + 1)}>+
                    </button>
                </article>
                <article className="Kiwi's">
                    <h2>Kiwi's</h2>
                    <button
                        type="button"
                        onClick={() => setFruitValue(fruitValue - 1)}
                        disabled={fruitValue === 0}>-
                    </button>
                    <p>{fruitValue}</p>
                    <button
                        type="button"
                        onClick={() => setFruitValue(fruitValue + 1)}>+
                    </button>
                </article>
                <button className="reset-fruit-values"
                        name="Reset"
                        type="button"
                        onClick={() => resetFruitValue()}>Reset
                </button>
            </div>
            <p></p>

            <div>
                <form onSubmit={handleSubmit(onFormSubmit)}>
                    <fieldset>
                        <label htmlFor="first-name-field">Voornaam:
                            <input type="text"
                                   id="first-name-field"
                                   {...register("first-name")}
                            />
                            <p></p>
                        </label>
                        <label htmlFor="last-name-field">Achternaam:
                            <input type="text"
                                   id="last-name-field"
                                   {...register("last-name")}
                            />
                            <p></p>
                        </label>
                        <label htmlFor="age-field">Leeftijd:
                            <input type="number"
                                   id="age-field"
                                   {...register("age")}
                            />
                            <p></p>
                        </label>
                        <label htmlFor="postcode-field">Postcode:
                            <input type="text"
                                   id="postcode-field"
                                   {...register("postcode")}
                            />
                        </label>

                        <p>Bezorgfrequentie</p>
                        <label htmlFor="delivery-dropdown">
                            <select id="delivery-dropdown" name="delivery" {...register("delivery")}>
                                <option>Iedere week</option>
                                <option>Om de Week</option>
                                <option>Iedere maand</option>
                            </select>
                        </label>
                        <p></p>
                        <label htmlFor="overdag-checkbox">
                            <input
                                type="radio"
                                id="day-checkbox"
                                value="day"
                                {...register("day-or-night")}
                            />
                            Overdag
                        </label>
                        <label htmlFor="avond-checkbox">
                            <input
                                type="radio"
                                id="avond-checkbox"
                                value="night"
                                {...register("day-or-night")}
                            />
                            's-Avonds
                        </label>
                        <p></p>
                        <label htmlFor="comment-field"></label>
                        <textarea
                            id="comment-field"
                            rows="4"
                            cols="40"
                            placeholder="Opmerking"
                            {...register("comment")}
                        />

                        <p></p>
                        <label htmlFor="terms-field">
                            <input
                                type="checkbox"
                                id="terms-field"
                                {...register("terms")}
                            />
                            Ik ga akkoord met de voorwaarden
                        </label>
                        <p></p>
                        <button type="submit">Verzend</button>
                    </fieldset>
                </form>
            </div>
        </>
    );
}

export default App;
