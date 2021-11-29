import React from "react";

function InputFields({label, title, type}) {
    return (
        <article className="input-text-fields">
            <label htmlFor={label}>{title}:
                <input type={type}
                       id={label}
                />
            </label>
            <br/>
        </article>
    )
}

export default InputFields;