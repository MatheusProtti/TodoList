import React from "react";

function Button({ type }) {
    return(
        <div>
            <button type={type}>Add new task</button>
        </div>
    )
}

export default Button;