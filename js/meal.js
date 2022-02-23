
function searchFood(){
    const searchInput = document.getElementById('search-input');
    const inputvalue = searchInput.value;
    searchInput.value = '';
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputvalue}`)
    .then(res => res.json())
    .then(data => getFoods(data.meals))
}
const getFoods = foodnames => {
   for(const names of foodnames){
       console.log(names)
   }
}