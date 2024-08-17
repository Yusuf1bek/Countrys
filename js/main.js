const countrys = [
    {
        id: 1,
        name: "Wallis and Futuna",
        capital: "Mata-Utu",
        population: 11750,
        flag: "https://flagcdn.com/wf.svg",
    },
    {
        id: 2,
        name: "Iceland",
        capital: "Reykjavik",
        population: 366425,
        flag: "https://flagcdn.com/is.svg"
    },
    {
        id: 3,
        name: "Luxembourg",
        capital: "Luxembourg",
        population: 632275,
        flag: "https://flagcdn.com/lu.svg"
    },
    {
        id: 4,
        name: "Mali",
        capital: "Bamako",
        population: 20250834,
        flag: "https://flagcdn.com/ml.svg"
    },
    {
        id: 5,
        name: "Comoros",
        capital: "Moroni",
        population: 869595,
        flag: "https://flagcdn.com/km.svg"
    },
    {
        id: 6,
        name: "Australia",
        capital: "Canberra",
        population: 25687041,
        flag: "https://flagcdn.com/au.svg"
    },
    {
        id: 7,
        name: "Estonia",
        capital: "Tallinn",
        population: 1331057,
        flag: "https://flagcdn.com/ee.svg"
    },
    {
        id: 8,
        name: "Canada",
        capital: "Ottawa",
        population: 38005238,
        flag: "https://flagcdn.com/ca.svg"
    },
    {
        id: 9,
        name: "Belarus",
        capital: "Minsk",
        population: 9398861,
        flag: "https://flagcdn.com/by.svg"
    },
    {
        id: 10,
        name: "Guyana",
        capital: "Georgetown",
        population: 786559,
        flag: "https://flagcdn.com/gy.svg"
    }
]
let elMainList = document.querySelector(".country-list");
function renderCountries(arr) {
    elMainList.innerHTML = null;
    arr.map(item => {
        let cardItem = document.createElement("li");
        cardItem.className = " w-[300px] p-5 bg-slate-300 rounded-lg hover:w-[350px] transition-all";
        cardItem.innerHTML = `
            <img src=${item.flag} alt="Flag" width="100%" height="200"/>
            <h2> ${item.name}</h2>
            <p>Capital: ${item.capital}</p>
            <p>Population: ${item.population}</p>
            <h2>${item.id} </h2>
                <div class="hero-btn">
                <ul class="hero-list flex gap-[10px] w-[160px]">
                    <li class="hero-list">
                        <button class="hero-btn-link bg-slate-500 w-[30px] h-[30px] px-1 rounded">
                            <img src="images/like-hero.svg" alt="Hero-Img" width="32" height="32">
                        </button>
                    </li>
                       <li class="hero-list">
                        <button class="hero-btn-link bg-slate-500 w-[30px] h-[30px]  rounded">
                            <img src="images/saved.svg" alt="Hero-Img" width="32" height="32">
                        </button>
                    </li>
                       <li class="hero-list">
                        <button class="hero-btn-link bg-slate-500 w-[50px] h-[30px] rounded">
                            <p class="text-slate-50">More</p>
                        </button>
                    </li>
                </ul>
            </div>
        `;
        elMainList.appendChild(cardItem);
    });
}

renderCountries(countrys)

renderCountries(countrys);
let elSearchInput = document.querySelector(".hero-input")

elSearchInput.addEventListener("keyup", function(evt) {
    const searachValue = evt.target.value.toLowerCase();
    const filteredUsers = countrys.filter(item => item.name.toLowerCase().includes(searachValue));
    renderCountries(filteredUsers);
}); 

const darkModeToggle = document.getElementById('darkModeToggle');
const bodyElement = document.body;

darkModeToggle.addEventListener('click', () => {
    bodyElement.classList.toggle('dark_bg');
});
