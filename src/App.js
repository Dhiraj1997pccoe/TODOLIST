import "./App.css";
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";



function App() {

    const onDelete = (todo) => {
        console.log("I am ondelete of ", todo);
        // let index = aTodosList.indexOf(todo);
        // aTodosList.splice(index, 1);
    }

    let aTodosList = [
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
    ];

    return (
        <>
            <Header sTitle="My Todos List" bSearchBar={false} />
            <Todos aTodos={aTodosList} onDelete={onDelete} />
            <Footer />
        </>
    );
}

export default App;
