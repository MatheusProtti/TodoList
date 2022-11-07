import React from "react";
import "./style.css"
import trash from "../../images/trash.png"
import pencil from "../../images/pencil.png"

function List({ taskList, removeItemList, handleEdit, newTask }) {
    
    return(
        <div className="contentItem">  
            <div className={newTask.done ? "done task" : "task"}>


                <li>{taskList}</li>
                    
                <div className="actives">
                    <button className="trash" onClick={removeItemList}><img src={trash} alt="lixo"/></button>
                    <button className="pencil" onClick={handleEdit}><img src={pencil} alt="lapis"/></button>
                </div>
            </div>
        </div>
    )
}

export default List;