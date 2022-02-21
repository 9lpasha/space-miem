import './Button.css';
import suc from '../images/successContact.png'
import {logDOM} from "@testing-library/react";

function Button({name}) {

    let refs
    let postRequest = () => {
        refs = document.querySelectorAll('textarea')
        console.log(refs)
        let data = {
            name: refs[0].value,
            email: refs[1].value,
            text: refs[2].value
        }
        console.log(data, refs)
        /*new Promise((resolve, reject)=>{
            let req = new XMLHttpRequest()
            req.open('POST', 'https://space.miem.hse.ru/feedback');
            req.setRequestHeader("Content-Type", "application/json");
            req.addEventListener('load', ()=>{resolve(req.response)})
            req.addEventListener('error', ()=>{reject()})
            req.send(data)
        }).then(text => {console.log(text)})*/
        document.querySelector('.App').classList.add('blur')
        let successContact = document.createElement('img')
        successContact.src = suc
        successContact.classList.add('successContact')
        document.body.appendChild(successContact)
        successContact.onclick = () => {
            console.log('delete')
            document.querySelector('.App').classList.remove('blur')
            document.body.removeChild(successContact)
        }
    }

    return (
        <div onClick={postRequest} className="Button">{name}</div>
    );
}

export default Button;