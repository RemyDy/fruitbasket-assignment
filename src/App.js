import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import Counters from "./Componenten/Counters"
import Buttons from "./Componenten/Buttons";
import InputFields from "./Componenten/Inputfields";

import './App.css';

function App() {
    const [strawberryValue, setStrawberryValue] = useState(0);
    const [bananaValue, setBananaValue] = useState(0);
    const [appleValue, setAppleValue] = useState(0);
    const [kiwiValue, setKiwiValue] = useState(0);
    const {register, handleSubmit} = useForm();

    function resetFruitValue() {
        setStrawberryValue(0);
        setBananaValue(0);
        setAppleValue(0);
        setKiwiValue(0);
    }

    const onSubmit = (data, e) => console.log(data, e)
    const onError = (errors, e) => console.log(errors, e)

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <section className="fruitmand">
                <Counters
                    title="Aardbeien"
                    fruitValue={strawberryValue}
                    setFruitValue={setStrawberryValue}
                />
                <Counters
                    title="Bananen"
                    fruitValue={bananaValue}
                    setFruitValue={setBananaValue}
                />
                <Counters
                    title="Appels"
                    fruitValue={appleValue}
                    setFruitValue={setAppleValue}
                />
                <Counters
                    title="Kiwis"
                    fruitValue={kiwiValue}
                    setFruitValue={setKiwiValue}
                />
                <Buttons
                    className="reset-fruit-values"
                    name="Reset"
                    type="button"
                    onClick={() => resetFruitValue()}
                />
            </section>
            <br/>

            <div>
                <form onSubmit={handleSubmit(onSubmit, onError)}>
                    <fieldset>
                        <InputFields
                            label="first-name-field"
                            title="Voornaam"
                            type="text"
                        />
                        <InputFields
                            label="last-name-field"
                            title="Achternaam"
                            type="text"
                        />
                        <InputFields
                            {...register(name="age")}
                            label="age-field"
                            title="Leeftijd"
                            type="number"
                        />
                        <InputFields
                            label="postcode-field"
                            title="Postcode"
                            type="text"
                        />
                        <p>Bezorgfrequentie</p>
                        <label htmlFor="delivery-dropdown">
                            <select id="delivery-dropdown" name="delivery" {...register("delivery")}>
                                <option>Iedere week</option>
                                <option>Om de Week</option>
                                <option>Iedere maand</option>
                            </select>
                        </label>
                        <br/>
                        <InputFields
                            label="day-or-night"
                            title="Overdag"
                            type="radio"
                            value="day"
                        />
                        <InputFields
                            label="day-or-night"
                            title="s-Avonds"
                            type="radio"
                            value="night"
                        />
                        <label htmlFor="comment-field">Opmerking</label>
                        <textarea
                            id="comment-field"
                            rows="4"
                            cols="40"
                            placeholder="Opmerking"
                        />
                        <InputFields
                            label="terms-field"
                            title="Ik ga akkoord met de voorwaarden"
                            type="checkbox"
                        />
                        <Buttons
                            className="send-form"
                            type="submit"
                            name="Verzend"
                        />
                    </fieldset>
                </form>
            </div>
        </>
    );
}

export default App;
