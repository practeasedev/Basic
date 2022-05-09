const filteredBy = document.getElementById("filtered_by");
const minLength = document.getElementById("min-length");
const maxLength = document.getElementById("max-length");
const loader = document.getElementById("loader");
let selectedFilter = "";
let country = "";

const loadUsers = (query) =>{
	loader.style.display= "block"
	fetch(`https://randomuser.me/api/?results=9&inc=name,location,email,phone,picture,login&${query}`)
	.then(response=> response.json())
	.then(response =>{
		populateData(response);
	})
}

const populateData = (response) =>{
	let usersList = "";
	response.results.map(({name,location,email,phone,picture,login})=>{
		const {title, first,last} = name;
		const {city, state, country} = location;
		const {password} = login;
		usersList +=
			`<li class="user__card">
				<img class="user__image" src=${picture.medium}>
				<div class="user__details">
					<div class="user__primary_details">
						<div class="user__name">${first} ${last}</div>
						<div class="user__location">${city}, ${state}, ${country}</div>
					</div>
					<div class="user__contact_details">
						<div class="user__email_id">Email:${email}</div>
						<div class="user__phone_no">Phone No.:${phone}</div>
						<div class="user__phone_no">Password :${password}</div>
					</div>
				</div>
			</li>`
	})
	loader.style.display= "none"
	document.getElementById("search_results__container").innerHTML = usersList;
}

const setFilterBy = (e) =>{
	const {dataset} = e.target;
	filteredBy.innerHTML = e.target.innerHTML;
	if(selectedFilter) document.getElementById(`${selectedFilter}`).classList.add("display_none");
	document.getElementById(`${dataset['options']}`).classList.remove("display_none");
	document.getElementById(`${dataset['options']}`).classList.add(`${dataset['options']}`);
	selectedFilter = dataset['options'];
}

const setNat = (e) =>{
	country = e.target.dataset.country;
	if(country){
		document.getElementById("selected_country").innerHTML = e.target.innerHTML;
		generateUsers();
	}
}

const validate = (type) =>{
	document.getElementById("error_message").style.display = "block";
	switch(type){
		case "Password":
			const min = parseInt(minLength.value);
			const max = parseInt(maxLength.value);
			if(!(min>0 && max<25 && min<max)){
				document.getElementById("error_message").innerHTML = "*Error:- Min-length&gt;Max-length OR Min-length&lt;0 OR Max-length&gt;25";
				return false;
			}
			break;
		case "Country":
			if(!country){
				document.getElementById("error_message").innerHTML = "*Note: You must select a country.";
				return false;
			}
			break;
	}
	document.getElementById("error_message").style.display = "none";
	return true;
}

const generateUsers = () =>{
	let query = ""
	switch(filteredBy.innerText){
		case "Gender":
			const isMale = document.getElementById("male").checked;
			query = `gender=${isMale?"male":"female"}`;
			break;
		case "Password":
			const max = maxLength.value;
			const min = minLength.value;
			if(!validate("Password")) return;
			query = `password=lower,${min}-${max}`;
			break;
		case "Country":
			if(!validate("Country")) return;
			query = `nat=${country}`;
			break;
		default: query="";
	}
	loadUsers(query);
}

loadUsers("");