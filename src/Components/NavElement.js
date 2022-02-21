import './NavElement.css';
import {observer} from "../index";

function NavElement({name, refLine, updateCurrentMenu, iter}) {

    let changeMenu = () => {
        updateCurrentMenu(iter)
        observer()
    }

    return (
        <div onClick={changeMenu} className="NavElement">
            {name}
        </div>
    );
}

export default NavElement;