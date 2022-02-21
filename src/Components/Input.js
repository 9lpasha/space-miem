import './Input.css';

function Input({classN,name}) {
    return (
        <textarea placeholder={`${name}`} className={`Input ${classN}`} type="text"/>
    );
}

export default Input;