import './Nav.css';
import NavElement from "./NavElement";

function Nav({store}) {

    let navEls = store.map((el, i) => <NavElement key={i} name={store[i]}></NavElement>)

    return (
        <div className="Nav">
            <div className="NavEls">
                {navEls}
            </div>
            <div className="NavHorLine"></div>
        </div>
    );
}

export default Nav;