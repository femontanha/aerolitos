import React from 'react';
import './contact.scss';

export default () => (
    <section className="contact">
        <p className="contact__text">
            Entre em contato conosco utilizando o formulário abaixo, ou <a href="http://bit.ly/WhatsappAerolitos" className="contact__text-link" target="_blank" rel="noopener noreferrer">clique aqui</a> para falar diretamente pelo Whatsapp, ou se preferir pode mandar um email direto para <a href="mailto:contato@aerolitos.com.br" className="contact__text-link"> contato@aerolitos.com.br</a>.
        </p>
        <form className="form" action="https://formspree.io/contato@aerolitos.com.br" method="POST">
            <label htmlFor="name" className="form__input">
                <input id="name" type="text" name="name" required placeholder="Nome" />
            </label>
            <label htmlFor="email" className="form__input">
                <input id="email" type="email" name="_replyto" required placeholder="E-mail" />
            </label>
            <label htmlFor="podcast-name" className="form__input">
                <input id="podcast-name" type="text" name="podcast-name" required placeholder="Nome do Podcast" />
            </label>
            <label htmlFor="podcast-theme" className="form__input">
                <input id="podcast-theme" type="text" name="podcast-theme" required placeholder="Temática do Podcast" />
            </label>
            <label htmlFor="podcast-frequency" className="form__select">
                <p className="select__title">Periodicidade</p>
                <select id="podcast-frequency" name="podcast-frequency" required>
                    <option>Semanal</option>
                    <option>Quinzenal</option>
                    <option>Mensal</option>
                    <option>Bimestral</option>
                    <option>Outros</option>
                </select>
            </label>
            <label htmlFor="podcast-brute-size" className="form__select">
                <p className="select__title">Tamanho do Material Bruto (Gravação antes do Corte)</p>
                <select id="podcast-brute-size" name="podcast-brute-size" required>
                    <option>15 min</option>
                    <option>30 min</option>
                    <option>60 min</option>
                    <option>90 min</option>
                    <option>120 min</option>
                </select>
            </label>
            <label htmlFor="podcast-track-length" className="form__select">
                <p className="select__title">Quantidade de faixas</p>
                <select id="podcast-track-length" name="podcast-track-length" required>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                </select>
            </label>
            <label htmlFor="message" className="form__message">
                <textarea id="message" name="message" required placeholder="Escreva sua mensagem"></textarea>
            </label>
            <button className="form__btn" type="submit">Enviar</button>
        </form>
    </section>
);
