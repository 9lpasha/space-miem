import './Navbar.css';
import Logo from "./Logo";
import Nav from "./Nav";
import burger from "../images/burger.svg"

function Navbar({store, oneLine, currentMenu, updateLine, updateCurrentMenu}) {
    return (
        <div className="Navbar">
            <img src={burger} className="burger"></img>
            <Logo></Logo>
            <Nav store={store} oneLine={oneLine} currentMenu={currentMenu} updateLine={updateLine} updateCurrentMenu={updateCurrentMenu}></Nav>
        </div>
    );
}

export default Navbar;