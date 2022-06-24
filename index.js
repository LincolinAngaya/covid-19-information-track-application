//declare variables
const countryList = document.querySelector('#countries');
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
        .then((county) => renderCountry(county))
}

renderCountry(county) {
    county.forEach(county => {
        let list = document.createElement('li');
        list.innerText = county.Country;
        countryList.appendChild(list);

        //render spefic country details

        list.addEventListener('click', () => {


            countryName.textContent = county.Country;
            countryCode.textContent = county.CountryCode;
            date.textContent = county.Date;
            confirmed.textContent = county.NewConfirmed;
            deaths.textContent = county.TotalDeaths;
            recovered.textContent = county.TotalRecovered;
        })
    })

}