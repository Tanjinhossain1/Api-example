
const usingUrl = () =>{
    fetch('https://randomuser.me/api/?results=10')
    .then(res => res.json())
    .then(data => uiInterPhase(data))
}
usingUrl()
const uiInterPhase = (data) => {
    const container = document.getElementById('container');
    const buddys = data.results;
    for(const getBuddy of buddys){
        console.log(getBuddy.name)
       const addP = document.createElement('p');
        addP.innerText = `
        Name: ${getBuddy.name.title} ${getBuddy.name.first} ${getBuddy.name.last} ,  Email:  ${getBuddy.email}
        `;
        container.appendChild(addP)
    }
}