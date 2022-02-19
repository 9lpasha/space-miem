import './Input.css';

function Input({width, height,name}) {
    return (
        <input style={{width: width, height: height}} placeholder={`${name}`} className="Input" type="text"/>
    );
}

export default Input;