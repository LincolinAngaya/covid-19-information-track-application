//declare variables
const countries = document.querySelector('datalist');
const search = document.querySelector('#srch');
const date = document.querySelector('#date');
const nameCountry = document.querySelector('#name-country');
const confirmed = document.querySelector('.confirmed');
const deaths = document.querySelector('.deaths');
const recovered = document.querySelector('.recovered');
const countryList = document.querySelector('#countries');


//add fectch section
document.addEventListener("DOMContentLoaded", () => {
    fetchCountry();
});

//fetch data function
function fetchCountry() {
    fetch('https://api.covid19api.com/summary')
        .then(response => response.json())
        .then(country => renderCountry(country))
}


function renderCountry(country) {

    Countries.Country.country.forEach(country => {
        let list = document.createElement('li');
        list.innerText = country.Countries.Country;
        countryList.appendChild(list);

        //render spefic country details

        list.addEventListener('click', () => {
            countryName.textContent = country.Country;
            countryCode.textContent = country.CountryCode;
            date.textContent = country.Date;
            confirmed.textContent = country.NewConfirmed;
            deaths.textContent = country.TotalDeaths;
            recovered.textContent = country.TotalRecovered;
        })
    })
}