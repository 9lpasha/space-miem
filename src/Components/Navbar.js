import './Navbar.css';
import Logo from "./Logo";
import Nav from "./Nav";

function Navbar({store}) {
    return (
        <div className="Navbar">
            <Logo></Logo>
            <Nav store={store}></Nav>
        </div>
    );
}

export default Navbar;