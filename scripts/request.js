const API_KEY= "032d722ccabf2ab54d2ff584d7f74e09";
var KELVIN = 273.15

let btnSearch = document.getElementById("searchID");

let btnLocation = document.getElementById("btn-location");
// let btnWeather = document.getElementById("btn-weather");

// let URL_API = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=032d722ccabf2ab54d2ff584d7f74e09`

let nombre = "lucas"

async function getLocation() {
    
    let city = document.getElementById("city-search").value
    let URL_API = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=032d722ccabf2ab54d2ff584d7f74e09`
    const response = await fetch(URL_API);
    const data = await response.json();
    

    getWeather(data[0].lat, data[0].lon);


}

 async function getWeather(lat, lon){

    console.log("aca ok")
    let URL_API = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=032d722ccabf2ab54d2ff584d7f74e09`
    const response = await fetch(URL_API);
    const data = await response.json();
    
    console.log(data.weather[0].description);
    console.log(data);

    infoUpdate(data);
    
}



const infoUpdate = (data)=>{
    
    document.getElementById("city-name").innerText = data.name;
    document.getElementById("cur-temp").innerText = Math.round(data.main.temp - KELVIN);
    document.getElementById("max-temp").innerText = Math.round(data.main.temp_max - KELVIN);
    document.getElementById("min-temp").innerText = Math.round(data.main.temp_min - KELVIN);
    
    document.getElementById("info-descr").innerText=data.weather[0].description
   
   
    document.getElementById("stat-icon").style.backgroundImage=`url(http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png)`
    document.getElementById("stat-icon").style.backgroundRepeat="no-repeat";
    document.getElementById("stat-icon").style.backgroundSize="cover";





}

const test = ()=> { console.log("aca ok")}


btnSearch.addEventListener("click", getLocation);

