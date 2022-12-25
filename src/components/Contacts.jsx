
const Contacts = () => {
  return (
    <div className="contacts">
      <div className="contacts__wrap _container">
        <div className="contacts__title">Contact</div>
        <div className="contacts__subtitle">You can contact with us. Just send form</div>
      </div>

      <div className="contacts__form contacts-form">
          <div className="contacts-form__inputs">
            <input type="text" placeholder="Your name..."/>
            <textarea type="text" placeholder="Your message..."/>
            <button>SEND MESSAGE</button>
          </div>

          <div className="contacts-form__info contacts-form-info">
            <div className="contacts-form-info__title">Our contacts</div>

            <div className="contacts-form-info__mails">
              <span>doom@mail.ru</span>
              <span>doom-slayer@mail.ru</span>
              <span>doom-support@mail.ru</span>
            </div>

            <div className="contacts-form-info__telephones">
              <span>+89999099999</span>
              <span>+8123123124354</span>
              <span>+123154364987</span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Contacts