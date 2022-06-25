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
const API_URL = "https://api.covid19api.com/summary";
async function covid(country) {
    countries.innerHTML = `<option value="World">World</option>`;
    resetValue(confirmed);
    resetValue(deaths);
    resetValue(recovered);

    const res = await fetch(API_URL);
    const data = await res.json();
    console.log(country)


}

//fetch data function
function fetchCountry() {

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