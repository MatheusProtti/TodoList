import React from "react";
import Button from "../button/Button";
import "./style.css"

function Input( { placeholder, onChange, type, value }) {

    return(
        <div className="blocoDoInput">
            <div className="blocoDoInputEBotao">
                <input 
                    type={type} 
                    name="input" 
                    onChange={onChange} 
                    placeholder={placeholder} 
                    value={value}>    
                </input>
                <Button type="submit"/>
            </div>
        </div>
    )
}

export default Input;