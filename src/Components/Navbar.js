import './Navbar.css';
import Logo from "./Logo";
import Nav from "./Nav";

function Navbar({store, oneLine, currentMenu, updateLine, updateCurrentMenu}) {
    return (
        <div className="Navbar">
            <Logo></Logo>
            <Nav store={store} oneLine={oneLine} currentMenu={currentMenu} updateLine={updateLine} updateCurrentMenu={updateCurrentMenu}></Nav>
        </div>
    );
}

export default Navbar;