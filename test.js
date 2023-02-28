// const myObj={
//     name:'Arif',
//     age:56,
//     status:'unmarried'
// }
// myObj.job='bekar';
// myObj['relation']='girlfriend ache'

// console.log(myObj);

/* set language option */
/*  const setlanguageOption=countries=>{
  const languageValueSet=[];
  countries.forEach(country=>{
    const languageObj= country.languages;
    const langValue= languageObj && Object.values(languageObj)[0];
    if(languageValueSet.includes(langValue)===false && langValue !== undefined){
      languageValueSet.push(langValue)
    }
  })

  languageValueSet.forEach(langValue=>{
    const languageSelect=document.getElementById('language-select');
    const option=document.createElement('li');
    const link=document.createElement('a');
    link.innerText=langValue;
    link.addEventListener('click',function(){
      countries.forEach(country=>{
        const languageObj= country?.languages;
        const key=getKeyByValue(languageObj,langValue)
        if(key!==undefined){

          loadByLanguage(key) //loadByLanguage(key) jabe ekhane theke 47no. line e
        }
      })
    })
    option.appendChild(link);
    languageSelect.appendChild(option);
  })
  document.getElementById('language-btn').removeAttribute('onclick')
} */ 