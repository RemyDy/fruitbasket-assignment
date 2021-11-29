import React from "react";

function Buttons ({className, name, type, onClick}) {
    return (
            <button className={className}
                    name={name}
                    type={type}
                    onClick={onClick}
            >{name}
            </button>
    )
}

export default Buttons;