import './NavElement.css';

function NavElement({name}) {
    return (
        <div className="NavElement">
            {name}
        </div>
    );
}

export default NavElement;