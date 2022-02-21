import './App.css';
import Navbar from "./Components/Navbar";
import Contacts from "./Components/Contacts";

function App({store}) {
  return (
    <div className="App">
      <Navbar store={store.NavElements} oneLine={store.LineUnderOnePoint} currentMenu={store.currentMenu} updateLine={store.updateLine} updateCurrentMenu={store.updateCurrentMenu}></Navbar>
      <Contacts></Contacts>
    </div>
  );
}

export default App;