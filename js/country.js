const loadCountry = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => uiInterphase(data))
}
loadCountry();
const uiInterphase = (addData) =>{
    const container = document.getElementById('container');
    addData.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('styles')
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        h3.innerText = country.name.common;
        p.innerText = country.capital;
        div.appendChild(h3);
        div.appendChild(p);
        container.appendChild(div);
    });
}