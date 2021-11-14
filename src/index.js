import './sass/main.scss';
import countryCard from './templates/country-card.hbs';
import countryList from './templates/country-list.hbs';
import fetchCountries from './js/fetchCountries.js';
import * as _ from 'lodash';
import { error } from '@pnotify/core';
import"@pnotify/core/dist/PNotify.css";
import"@pnotify/core/dist/BrightTheme.css";



const input = document.querySelector('.input');
const box = document.querySelector('.box');
const container = document.querySelector('.container');

input.addEventListener('input', _.debounce(onSearch, 500))





function onSearch(evt) {
    evt.preventDefault()
    const searchQuery = evt.target.value;
    fetchCountries(searchQuery).then(renderCoutry)
}
function onError() {
    error({  
        text: 'Need to make the request more specific',
        delay: 1500,
    })


}
function renderCoutry (country) {

    if (country.length === 1) {
        
        box.innerHTML = countryCard(country[0]);
        container.innerHTML = '';
    }
    if (country.length > 1 && country.length <= 10) {
       container.innerHTML = countryList(country);
       box.innerHTML = '';
    }
    if (country.length > 10) {
        onError();
        container.innerHTML = '';
        box.innerHTML = '';
    }

}