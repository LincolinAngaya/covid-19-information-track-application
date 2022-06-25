//declare variables
const countryList = document.querySelector('#countries');
``
const countryName = document.getElementById('country');
const countryCode = document.getElementById('code');
const date = document.getElementById('date');
const confirmed = document.getElementById('confirmed');
const deaths = document.getElementById('deaths');
const recovered = document.getElementById('recovered');


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