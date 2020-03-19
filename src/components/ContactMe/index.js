import React from 'react';
import FontAwesome from 'react-fontawesome';

import './form-styles.css';

const ContactMe = () => (
    <main id="contact-me-page">
      <p class="text-justified">Si te gustaría ponerte en contacto conmigo, sentite libre de escribirme un mensaje a través del formulario que se encuentra abajo. También podés hacer click en cualquiera de los siguientes ícones para ponerte en contacto vía redes sociales o correo electrónico:&emsp;
        <a href="https://www.twitter.com/andreaslorozco" class="aside-link"><FontAwesome name='twitter'/> </a>
        <a href="https://github.com/andreaslorozco" class="aside-link"><FontAwesome name='github'/> </a>
        <a href="mailto:me@andreaslorozco.com" class="aside-link"><FontAwesome name='envelope'/>  </a>
      </p>
    
      <div class="form-content">
        <form action="https://formspree.io/me@andreaslorozco.com" method="POST">
          <div>
            <label for="name">
              Name
              <input class="u-full-width" type="text" id="name" name="name" placeholder="Your name..."/>
            </label>
          </div>
          <div>
            <label for="email">
              E-mail
              <input class="u-full-width" type="email" id="email" name="email" placeholder="Your email..." required/>
            </label>
          </div>
          <div>
            <label for="message">
              Message
              <textarea class="u-full-width" id="message" name="message" placeholder="Write something..." style={{height: "200px"}}></textarea>
            </label>
          </div>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    </main>
);

export default ContactMe;