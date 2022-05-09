const dropdown = document.querySelector('.dropdown');
const dropdownToggler = document.querySelector('.dropdown__toggler');

dropdownToggler.addEventListener('click',() => {
    dropdown.style.display = dropdown.style.display === 'block'? 'none' : 'block';
})