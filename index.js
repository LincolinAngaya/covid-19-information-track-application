//declare variables
const countryList = document.querySelector('#countries');
const countryName = document.getElementById('country');
const countryCode = document.getElementById('code');
const date = document.getElementById('date');
const confirmed = document.getElementById('confirmed');
const deaths = document.getElementById('deaths');
const recovered = document.getElementById('recovered');
let countLikes = document.getElementById('like-count')
let likeButton = document.getElementById('like-button')
    //add fectch section
document.addEventListener("DOMContentLoaded", () => {
    fetchCountry();
});

//fetch data function
function fetchCountry() {
    fetch('https://api.covid19api.com/summary')
        .then(response => response.json())
        .then((movies) => renderCountry(county))
}
renderCountry(county) {
        county.forEach(county => {
                    let list = document.createElement('li');
                    list.innerText = county.country;
                    countryList.appendChild(list);


                    //render spefic country details

                    list.addEventListener('click', () => {


                        countryName.textContent = county.Country;
                        countryCode.textContent = county.CountryCode;
                        date.textContent = county.Date;
                        confirmed.textContent = county.NewConfirmed;
                        deaths.textContent = county.TotalDeaths;
                        recovered.textContent = recovered.TotalRecovered;
                    })

                }


            }
            //like section

        let integer = 0;

        likeButton.addEventListener('click', () => {
                integer += 1
                countLikes.innerHTML = `${integer} likes`;
            })
            //add comment
        document.addEventListener('DOMContentLoaded', () => {
            let form = document.querySelector('#comment_form')
            form.addEventListener('submit', (event) => {
                event.preventDefault()
                handlePost(event.target['comment_input'].value)
                form.reset()
            })

        })

        function handlePost(post) {

            let postt = document.createElement('comment_review')
            let btn = document.createElement('buton')
            btn.addEventListener('click', (event) =>
                event.target.parentNode.remove()

            )

            postt.textContent = `   ${post}`

            document.querySelector('#comments_list').appendChild(postt)

        }