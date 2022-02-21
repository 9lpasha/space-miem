import './Contacts.css';
import Input from "./Input";

function Contacts({store}) {

    let inputsInfo = [{
        width: 400,
        height: 32,
        name: 'Ваше ФИО:'
    },{
        width: 400,
        height: 32,
        name: 'Ваш E-Mail:'
    },{
        width: 400,
        height: 200,
        name: 'Ваше сообщение:'
    }]

    let inputs = inputsInfo.map((el, i) => <Input height={el.height} width={el.width} key={i} name={el.name}></Input>)

    return (
        <div className="Contacts">
            <p className="ContactsText1">КОНТАКТЫ</p>
            <p className="ContactsText2">Связь с нами</p>
            <div className="ContactsTextAndForm">
                <div className="ContactsText">
                    <p className="ContactsText3">Наши контакты:</p>
                    <p className="ContactsText4">Адрес:  <br/>
                        123458, Москва, ул. Таллинская, д.34 <br/><br/>
                        Почта: <br/>
                        dabrameshin@hse.ru <br/><br/>
                        Контактный телефон: <br/>
                        +7(495)772-95-90 *15130</p>
                </div>
                <div className="ContactsForm">
                    <p className="ContactsFormText">Связаться с нами:</p>
                    {inputs}
                </div>
            </div>
        </div>
    );
}

export default Contacts;