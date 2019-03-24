import React from 'react';

import './sidebar.css';
import profileImage from './../images/profile-picture-small.jpg';

const Sidebar = () => (
    <aside>
    <p id="my-name">Andreas Leimbach</p>
    <img src={profileImage} alt="" id="my-picture" />
    <p id="my-description">Soy un Ingeniero en Sistemas que actualmente se desempeña como Front End Web Developer. Además disfruto desarrollando aplicaciones web full stack con React y NodeJS.</p>

    <div id="aside-links">
        <a href="https://www.google.com/maps/place/Costa+Rica/" class="aside-link"><i class="fas fa-globe"></i> Costa Rica</a>
        <a href="http://www.andreaslorozco.com" class="aside-link"><i class="fas fa-link"></i> Página Web</a>
        <a href="https://www.twitter.com/andreaslorozco" class="aside-link"><i class="fab fa-twitter"></i> Twitter</a>
        <a href="https://instagram.com/andreaslorozco/" class="aside-link"><i class="fab fa-instagram"></i>  Instagram</a>
        <a href="https://github.com/andreaslorozco" class="aside-link"><i class="fab fa-github"></i> Github</a>
        <a href="https://codepen.io/andreaslorozco/" class="aside-link"><i class="fab fa-codepen"></i>  Codepen</a>
    </div>
    </aside>
)

export default Sidebar;