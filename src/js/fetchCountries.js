import { error } from "@pnotify/core";

export default function fetchCountries(searchQuery) {
    return fetch(`https://restcountries.com/v2/name/${searchQuery}`)
    .then(response => {return response.json();}).catch(error => console.log(error))};