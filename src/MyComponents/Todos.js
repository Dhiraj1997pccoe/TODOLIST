import React from "react";
import { Todo } from "./TodoItem";

export const Todos = (props) => {
    return (
        <div>
            <h3 className="text-center" >Todos List</h3>
            {props.aTodos.map((todo) => {
                return <Todo key={todo.key} todo={todo} onDelete={props.onDelete}/>;
            })}
        </div>
    );
};
