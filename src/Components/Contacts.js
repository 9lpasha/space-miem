import './Contacts.css';
import Input from "./Input";
import Button from "./Button";

function Contacts() {
    let inputsInfo = [{
        width: 400,
        height: 27,
        name: 'Ваше ФИО:',
        class: 'smallInp'
    },{
        width: 400,
        height: 27,
        name: 'Ваш E-Mail:',
        class: 'smallInp'
    },{
        width: 400,
        height: 160,
        name: 'Ваше сообщение:',
        class: 'bigInp'
    }]

    let inputs = inputsInfo.map((el, i) => <Input classN={el.class} key={i} name={el.name}></Input>)

    return (
        <div className="Contacts">
            <p className="ContactsText1">КОНТАКТЫ</p>
            <p className="ContactsText2">Связь с нами</p>
            <div className="ContactsTextAndForm">
                <div className="ContactsText">
                    <p className="ContactsText3">Наши контакты:</p>
                    <p className="ContactsText4">Адрес:<br/>123458, Москва, ул. Таллинская, д.34<br/>
                        <p className='nth'>
                            Почта:<br/>dabrameshin@hse.ru
                        </p>
                        <p style={{display: 'inline-block'}}>
                            Контактный телефон:<br/>+7(495)772-95-90 *15130
                        </p>
                    </p>
                </div>
                <div className="ContactsForm">
                    <p className="ContactsFormText">Связаться с нами:</p>
                    {inputs}
                    <Button name="ОТПРАВИТЬ"></Button>
                </div>
            </div>
        </div>
    );
}

export default Contacts;