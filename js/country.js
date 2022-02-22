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
        div.innerHTML = `
        <h3>${country.name.common}</h3>
        <p>${country.capital}</p>
        <button onclick="loadCountryes('${country.name.common}')" >Details</button>`
        container.appendChild(div);
    });
}
const loadCountryes = name =>{
    const url = `https://restcountries.com/v3.1/name/${name}`
  fetch(url)
  .then(res => res.json())
  .then(data => uiCountry(data[0]))
}

const uiCountry = dataAdd =>{
    const addCountry = document.getElementById('add-country');
    addCountry.innerHTML = `
   <h2> ${dataAdd.name.common}</h2>
    <img src="${dataAdd.flags.png}">
    `
}