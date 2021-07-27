import "./App.css";
import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";

function App() {
  return (
    <>
        <Header sTitle="My Todos List" bSearchBar={false}/>
        <Todos/>
        <Footer/>
    </>
  );
}

export default App;
