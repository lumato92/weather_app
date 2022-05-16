const API_KEY= "032d722ccabf2ab54d2ff584d7f74e09";

let btnLocation = document.getElementById("btn-location");
let btnWeather = document.getElementById("btn-weather")

let URL_API = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=032d722ccabf2ab54d2ff584d7f74e09`

let nombre = "lucas"

async function getLocation() {
    
    let city = document.getElementById("city").value
    let URL_API = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=032d722ccabf2ab54d2ff584d7f74e09`
    const response = await fetch(URL_API);
    const data = await response.json();
    
    document.getElementById("lat-value").innerText = data[0].lat;
    document.getElementById("lon-value").innerText = data[0].lon;


    // return data;
    // lon = data[0].lon;
}

 async function getWeather(){
    let lat = document.getElementById("lat-value").textContent;
    let lon = document.getElementById("lon-value").textContent;

    let URL_API = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=032d722ccabf2ab54d2ff584d7f74e09`
    const response = await fetch(URL_API);
    const data = await response.json();
    
    console.log(data.weather[0].description);


}

function test() {
    // let nombre = "lucas;"
    console.log(`sos rancio ${nombre}`)
    console.log(document.getElementById("city").value)
    
}

btnLocation.addEventListener("click",getLocation)
btnWeather.addEventListener("click",getWeather)

