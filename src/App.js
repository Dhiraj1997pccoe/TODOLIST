import "./App.css";
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import React, { useState } from "react";


function App() {

    const onDelete = (todo) => {
        console.log("I am ondelete of ", todo);
        setTodos(aTodosList.filter((item) => {
            return item !== todo;
        }));
    }

    //const [state, setstate] = useState(initialState)

    const [aTodosList, setTodos] = useState([
        {
            key: "A",
            desc: "Test A"
        }, {
            key: "B",
            desc: "Test B"
        }, {
            key: "C",
            desc: "Test C"
        }
    ]);

    return (
        <>
            <Header sTitle="My Todos List" bSearchBar={false} />
            <Todos aTodos={aTodosList} onDelete={onDelete} />
            <Footer />
        </>
    );
}

export default App;
