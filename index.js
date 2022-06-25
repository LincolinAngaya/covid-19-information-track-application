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

    if (res.status === 4 || res.status === 200) {
        date.textContent = new Date(data.Date).toDateString();


        if (country === '' || country === 'World') {
            const { TotalConfirmed, TotalDeaths, TotalRecovered, NewConfirmed, NewDeaths, NewRecovered } = data.Global;
            total(TotalConfirmed, TotalDeaths, TotalRecovered);
            newUpdate(NewConfirmed, NewDeaths, NewRecovered);

            nameCountry.textContent = 'The World';
            dataChart = [TotalConfirmed, TotalDeaths, TotalRecovered];
        };
        //render spefic country details
        data.Countries.forEach(item => {
            const option = document.createElement('option');
            option.value = item.Country;
            option.textContent = item.Country;
            countries.appendChild(option);

            if (country === item.Country) {
                total(item.TotalConfirmed, item.TotalDeaths, item.TotalRecovered);
                newUpdate(item.NewConfirmed, item.NewDeaths, item.NewRecovered);

                nameCountry.textContent = item.Country;
                // dataChart = [item.TotalConfirmed, item.TotalDeaths, item.TotalRecovered];
            }
        });
    } else {
        flex.innerHTML = `<h2>Loading.....</h2>`;
    }
}
const speed = 100;

function counting(target, element) {
    const inc = target / speed;
    const count = +element.textContent;
    if (count < target) {
        element.textContent = Math.ceil(count + inc);
        setTimeout(() => {
            counting(target, element)
        }, 1)

    } else {
        element.textContent = target;
    }
};

function total(Confirmed, Deaths, Recovered) {
    counting(Confirmed, confirmed.children[1]);
    // Total Deaths
    counting(Deaths, deaths.children[1]);
    // Total Recovered
    counting(Recovered, recovered.children[1]);
};

function newUpdate(Confirmed, Deaths, Recovered) {
    // New Confirmed
    counting(Confirmed, confirmed.children[2]);
    // New Deaths
    counting(Deaths, deaths.children[2]);
    // New Recovered
    counting(Recovered, recovered.children[2]);
};

function resetValue(element) {
    element.children[1].textContent = 0;
    element.children[2].textContent = 0;
};