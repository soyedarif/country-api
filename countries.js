const loadAllCountries = () => {
  fetch(`https://restcountries.com/v3.1/all`)
    .then(res => res.json())
    .then(data =>{
      setRegionOption(data);
      setlanguageOption(data);
      setCapitalOption(data);
    });
      
}
/* get key by value in obj */
const getKeyByValue=(obj,value)=>{
  for(const key in obj){
    if(obj[key]===value && value !==undefined){
      return key;
    }
  }
}
/* set capital options*/
const setCapitalOption=data=>{
  console.log(data);
}
loadAllCountries()
/* set language option */
const setlanguageOption = countries => {
  const languageMap = {};

  countries.forEach(country => {
    const languageObj = country.languages;
    const langValue = languageObj && Object.values(languageObj)[0];
    if (langValue && !(langValue in languageMap)) { //
      const key = getKeyByValue(languageObj, langValue);
      languageMap[langValue] = key;
    }
  });
  const languageSelect = document.getElementById('language-select');
  for (const langValue in languageMap) {
    const option = document.createElement('li');
    const link = document.createElement('a');
    link.innerText = langValue;
    link.addEventListener('click', function () {
      const key = languageMap[langValue];
      loadByLanguage(key);
    });
    option.appendChild(link);
    languageSelect.appendChild(option);
  }
  document.getElementById('language-btn').removeAttribute('onclick');
}; 

/* load by language */
const loadByLanguage=lang=>{
  fetch(`https://restcountries.com/v3.1/lang/${lang}`)
  .then(res=>res.json())
  .then(data=>displayCountries(data))
}
/* set region option */
const setRegionOption=region=>{
  const regionSet = [];
  region.forEach(country => {
    if (regionSet.includes(country.region) === false) {
      regionSet.push(country.region);
    }
  });
  regionSet.forEach(region=>{
    const regionSelect = document.getElementById("region-select");
        const option = document.createElement("li");
        const link = document.createElement("a");
        link.innerText=region
        option.appendChild(link);
        regionSelect.appendChild(option);
        link.addEventListener('click',function(){
          loadByRegion(region);
        })
  });
  document.getElementById('region-btn').removeAttribute('onclick')
}

/* load by region */
const loadByRegion = region => {
  const url = `https://restcountries.com/v3.1/region/${region}`;
  fetch(url)
    .then(res => res.json())
    .then(data => displayCountries(data));
};
/* display countries */
const displayCountries = countries => {
    document.getElementById("countries-container").innerHTML = "";
  countries.forEach(country => {
    const { flags, name, capital, cca2 } = country;
    const countriesContainer = document.getElementById("countries-container");
    const div = document.createElement("div");
    div.classList.add("card", "card-compact", "w-96", "bg-base-100", "shadow-xl", "bg-gradient-to-b", "from-slate-400");
    div.innerHTML = `
        <figure class="mt-2"><img src="${flags.png}" alt="Shoes" /></figure>
                <div class="card-body">
                  <h2 class="card-title">${name.common}</h2>
                  <p>Capital: ${capital ? capital[0] : "No Capital"}</p>
                  <div class="card-actions justify-end">
                  <label onclick="loadCode('${cca2}')" for="country-modal" class="btn">Show More</label>

                  </div>
                </div>
        `;
    countriesContainer.appendChild(div);
  });
};
/* modal section */
const loadCode = code => {
  fetch(`https://restcountries.com/v2/alpha/${code}`)
    .then(res => res.json())
    .then(data => displayModal(data));
};
const displayModal = country => {
  document.getElementById("modal-detail").innerHTML = "";
  const { flags, name, capital, region, population, currencies } = country;
  const modalDetail = document.getElementById("modal-detail");
  const div = document.createElement("div");
  div.innerHTML = `
    <figure class="mt-2"><img src="${flags.png}" alt="Shoes" /></figure>
         <h2 class="card-title">${name}</h2>
         <p>Capital: ${capital ? capital : "No Capital"}</p>
         <p>Region: ${region}</p>
         <p>Currency: ${currencies[0].code}</p>
         <p>Population: ${population}</p>
                
                
    `;
  modalDetail.appendChild(div);
};


/* const regionSet = new Set();
      data.forEach((country) => {
        regionSet.add(country.region);
      }); */
