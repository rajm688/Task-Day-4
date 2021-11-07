var xhr = new XMLHttpRequest();
xhr.onload = function(){
    if (xhr.status>=200 && xhr.status <300){
        var obj = JSON.parse(this.response);
        for(let i =0;i<obj.length;i++){
            console.log(`countryName: ${obj[i].name} Flag: ${obj[i].flag}`);
        }
    }
}
xhr.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
xhr.send();