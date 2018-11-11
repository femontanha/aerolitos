import React from 'react';
import './contact.scss';

export default () => (
    <section className="contact">
        <form className="form" action="https://formspree.io/contato@aerolitos.com.br" method="POST">
            <label htmlFor="name" className="form__input">
                <input id="name" type="name" name="name" required placeholder="Nome" />
            </label>
            <label htmlFor="email" className="form__input">
                <input id="email" type="email" name="_replyto" required placeholder="E-mail" />
            </label>
            <label htmlFor="message" className="form__message">
                <textarea id="message" name="message" required placeholder="Escreva sua mensagem"></textarea>
            </label>
            <button className="form__btn" type="submit">Enviar</button>
        </form>
    </section>
);
