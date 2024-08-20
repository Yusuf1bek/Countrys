const countrys = [
    {
        id: 1,
        name: "Wallis and Futuna",
        capital: "Mata-Utu",
        population: 11750,
        flag: "https://flagcdn.com/wf.svg",
        isLiked:false,
        isBasket:false,
    },
    {
        id: 2,
        name: "Iceland",
        capital: "Reykjavik",
        population: 366425,
        flag: "https://flagcdn.com/is.svg",
        isLiked:false,
        isBasket:false,
    },
    {
        id: 3,
        name: "Luxembourg",
        capital: "Luxembourg",
        population: 632275,
        flag: "https://flagcdn.com/lu.svg",
        isLiked:false,
        isBasket:false,
    },
    {
        id: 4,
        name: "Mali",
        capital: "Bamako",
        population: 20250834,
        flag: "https://flagcdn.com/ml.svg",
        isLiked:false,
        isBasket:false,
    },
    {
        id: 5,
        name: "Comoros",
        capital: "Moroni",
        population: 869595,
        flag: "https://flagcdn.com/km.svg",
        isLiked:false,
        isBasket:false,
    },
    {
        id: 6,
        name: "Australia",
        capital: "Canberra",
        population: 25687041,
        flag: "https://flagcdn.com/au.svg",
        isLiked:false,
        isBasket:false,
    },
    {
        id: 7,
        name: "Estonia",
        capital: "Tallinn",
        population: 1331057,
        flag: "https://flagcdn.com/ee.svg",
        isLiked:false,
        isBasket:false,
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
        flag: "https://flagcdn.com/by.svg",
        isLiked:false,
        isBasket:false,
    },
    {
        id: 10,
        name: "Guyana",
        capital: "Georgetown",
        population: 786559,
        flag: "https://flagcdn.com/gy.svg",
        isLiked:false,
        isBasket:false,
    }
]
let elMainList = document.querySelector(".country-list");
let elSearchInput = document.querySelector(".hero-input")
let elCountrySelect = document.querySelector(".country-select")
let elModalWrapper = document.querySelector(".modal-wrappper")
let elModalInner = document.querySelector(".modal-inner")
let elModalContent = document.querySelector(".modal-content")
let elLikeCount = document.querySelector(".like-count")
let elSaveCount = document.querySelector(".save-count")

// render country
function renderCountries(arr) {
    elMainList.innerHTML = null;
    arr.map(item => {
        let cardItem = document.createElement("li");
        cardItem.className = " w-[300px] p-5 bg-slate-300 rounded-lg";
        cardItem.innerHTML = `
            <img src=${item.flag} alt="Flag" width="100%" height="200"/>
            <h2> ${item.name}</h2>
            <p>Capital: ${item.capital}</p>
            <p>Population: ${item.population}</p>
            <h2>${item.id} </h2>
                <div class="hero-btn">
                <ul class="hero-list flex gap-[10px] w-[160px]">
                    <li class="hero-list">
                        <button onclick="likeBtnClick(${item.id})" class="${item.isLiked ? "active:fill-red-500":"fill-white"}hero-btn-link bg-slate-500 w-[30px] h-[30px] px-1 rounded fill-red-100">
                        <?xml version="1.0" encoding="utf-8"?>
                            <svg class="hover:fill-red-500 transition-all ml-[-4px]" width="30px" height="30px" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                             <path fill-rule="" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                               </svg>
                        </button>
                    </li>
                       <li class="hero-list">
                        <button onclick="saveBtnClick(${item.id})" class="hero-btn-link bg-slate-500 w-[30px] h-[30px]  rounded">
                                    <?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
                                        <svg class="hover:fill-green-500 transition-all" width="32px" height="32px" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M18.5 18.8637V8.07579C18.5 5.99472 17.0378 4.20351 15.0077 3.7977C13.022 3.40077 10.978 3.40077 8.99225 3.7977C6.96219 4.20351 5.5 5.99472 5.5 8.07579V18.8637C5.5 20.1258 6.8627 20.9113 7.94601 20.2737L10.9053 18.5317C11.5814 18.1337 12.4186 18.1337 13.0947 18.5317L16.054 20.2737C17.1373 20.9113 18.5 20.1258 18.5 18.8637Z"stroke="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                        </button>
                    </li>
                       <li class="hero-list">
                        <button onclick="handleMoreBtnClick(${item.id})" class="hero-btn-link bg-slate-500 w-[50px] h-[30px] rounded">
                            <p class="hover:text-black transition-all text-slate-50">More</p>
                        </button>
                    </li>
                </ul>
            </div>
        `;
        elMainList.appendChild(cardItem);
    });
    elLikeCount.textContent = arr.filter(item => item.isLiked == true).length
    elSaveCount.textContent = arr.filter(item => item.isBasket == true).length
}
renderCountries(countrys)
// render country

// Modal
function handleMoreBtnClick(id){
    elModalWrapper.classList.remove("scale-0")
    const findObj = countrys.find(item => item.id == id)
    elModalContent.innerHTML = `
    <div class="px-7 py-3 rounded-lg">
    <img src=${findObj.flag} alt="Flag" width="300" height="300"/>
    </div>
    <div class="text-center font-medium"> 
        <h2>ID-${findObj.id} </h2>
        <h2>Country: ${findObj.name}</h2>
        <p>Capital: ${findObj.capital}</p>
        <p>Population: ${findObj.population}</p>
    </div>
    `
}
elModalWrapper.addEventListener("click", function(e){
    if(e.target.id == "wrapper"){
        elModalWrapper.classList.add("scale-0")
    }
})
// Modal

// Like btn click
function likeBtnClick(id){
    const findObj = countrys.find(item => item.id == id)
    findObj.isLiked = !findObj.isLiked
    renderCountries(countrys) 
}
function saveBtnClick(id){
    const findObj = countrys.find(item => item.id == id)
    findObj.isBasket = !findObj.isBasket
    renderCountries(countrys) 
}
function handleLikeCountBtn(){
    const filtered = countrys.filter(item => item.isLiked == true)
    renderCountries(filtered)
}
function handleSaveCountBtn(){
    const filtered = countrys.filter(item => item.isBasket == true)
    renderCountries(filtered)
}
// Like btn click

// searching country
renderCountries(countrys);
elSearchInput.addEventListener("keyup", function(evt) {
    const searachValue = evt.target.value.toLowerCase();
    const filteredUsers = countrys.filter(item => item.name.toLowerCase().includes(searachValue));
    renderCountries(filteredUsers);
}); 
// searching country

// dark mode
const darkModeToggle = document.getElementById('darkModeToggle');
const bodyElement = document.body;

darkModeToggle.addEventListener('click', () => {
    bodyElement.classList.toggle('dark_bg');
});
// dark mode

// select capital
countrys.forEach(item =>{
    let elOption = document.createElement("option")
    elOption.value = item.capital
    elOption.textContent = item.capital
    elCountrySelect.appendChild(elOption)
})
elCountrySelect.addEventListener("change", (e) => {
    if(e.target.value == "All"){
        renderCountries(countrys)
    }
    else{
        const filteredCapital = countrys.filter(item => item.capital == e.target.value)
        renderCountries(filteredCapital)
    }
})
// select capital