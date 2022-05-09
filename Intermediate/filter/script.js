let countriesData = countryData;
let filteredCountriesData = countryData;

const countryTable = document.querySelector(".countryData_table")
const tableBody = document.querySelector(".countryData_table__body");
const searchInput = document.getElementById("search_bar__input");
const searchVal = document.querySelector(".filter__search_string");
const emptyMsg = document.querySelector(".empty-msg")

function search(){
    let searchString = searchInput.value.trim();
    if(searchString){
        filteredCountriesData = countriesData.filter((country) => {
            return (country.country.toLowerCase()).includes(searchString.toLowerCase())
         });
         searchVal.textContent = searchString;
         console.log(filteredCountriesData);
    } else{
        filteredCountriesData = countriesData;
        searchVal.textContent = 'search for something';
    }

    emptyMsg.style.display = (filteredCountriesData.length === 0) ? "block" : "none";
    displayData();
}

function clearData(){
    tableBody.innerHTML = '';
}

function displayData(){
    clearData();
    if(filteredCountriesData.length === 0){
        countryTable.style.display = "none";
        return;
    }
    countryTable.style.display = "block";
    filteredCountriesData.forEach((country)=>{
        let tableRow = `
            <tr>
                <td>${country.country}</td>
                <td>${country.capital}</td>
                <td>${country.currency}</td>
                <td>${country.languages.toString()}</td>
            </tr>
        `
        tableBody.innerHTML += tableRow;
    })
}

displayData()


// Can try this (need to use live server)

/*let countriesData = [];
let filteredCountriesData = []
function getCountriesData(){
    fetch('data.json').then((data)=>{
        return data.json()
    }).then((data)=>{
        countriesData = data;
        filteredCountriesData = data;
        displayData();
    }).catch((err)=>{
        console.log(err)
    })
}

getCountriesData(); */