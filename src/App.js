import './App.css';
import Navbar from "./Components/Navbar";
import Contacts from "./Components/Contacts";

function App({store}) {
  return (
    <div className="App">
      <Navbar store={store.NavElements}></Navbar>
      <Contacts></Contacts>
    </div>
  );
}

export default App;