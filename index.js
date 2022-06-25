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