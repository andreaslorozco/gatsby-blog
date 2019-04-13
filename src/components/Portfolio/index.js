import React from 'react';
import FontAwesome from 'react-fontawesome';

const Portfolio = () => (
  <main>  

    <h3 class="portfolio-item-title">dad-jokes-api</h3>
    <h4 class="portfolio-item-title">Tecnologías usadas: <i class="fab fa-node-js"></i>NodeJS, Express, MongoDB, Passport, JWT, Joi, Mocha.</h4>
    
  
    <p class="text-justified">Backend RESTful API construído con NodeJS y autenticación de usuarios con JWT. El API puede ser utilizado para guardar, recuperar, actualizar y eliminar chistes malos. Los chistes son almacenados con etiquetas que permiten la recuperación personalizada. Enlaces: <a href="https://github.com/andreaslorozco/dad-jokes-api" class="aside-link">Github <FontAwesome name='github'/> </a>, <a href="https://peaceful-ocean-61775.herokuapp.com" class="aside-link">Heroku</a>.</p>
  
    <h3 class="portfolio-item-title">image-gallery</h3>
    <h4 class="portfolio-item-title">Tecnologías usadas: NodeJS, Express, fs, socket.io, ReactJS, Bootstrap 4, Reactstrap.</h4>
    
  
    <p class="text-justified">Aplicacción fullstack que corre en local. El backend observa cambios en una carpeta cuando una imagen es agregada, envía la información (a través de socket.io) al frente para que la imagen pueda ser mostrada con React en un carrusel de Bootstrap 4. El usuario puede luego elegir subir la imagen a Cloudinary, y obtiene un enlace directo utilizando un código QR. Enlaces: <a href="https://github.com/andreaslorozco/image-gallery" class="aside-link">Github <FontAwesome name='github'/> </a>.</p>
  
    <h3 class="portfolio-item-title">Sitio Personal</h3>
    <h4 class="portfolio-item-title">Tecnloǵias usadas: HTML, CSS, CSS Grid Layout, GatsbyJS.</h4>
    
  
    <p class="text-justified">Acabo de migrar mi sitio personal de Jekyll a GatsbyJS. Utilizo CSS Grid para el diseño del sitio el cual es responsive con media queries. Estoy usando GatsbyJS como generador de sitio estático. Enlaces: <a href="https://github.com/andreaslorozco/PersonalSite" class="aside-link">Github <FontAwesome name='github'/> </a>.</p>
  
  </main>
);

export default Portfolio;