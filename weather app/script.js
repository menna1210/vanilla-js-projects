'use strict'
const apiKey ="e732e5f282a8d78011c162b6564ef471";
const apiUrl = `api.openweathermap.org/data/2.5/weather`
const serrchBox =document.querySelector(".search input")
const searchBtn =document.querySelector(".search button")

async function checkWeather(city){
    const response = await fetch(apiUrl +city +`&appid=${apiKey}`);
    var data = await response.json(); 
    console.log(data)
    document.querySelector(".city").innerHTML=data.name
    document.querySelector(".temp").innerHTML=data.main.temp +"°C";
    document.querySelector(".humidity").innerHTML= Math.round(data.main.humidity)+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed +"km/h";

}
searchBtn.addEventListener("click",()=>{
checkWeather(serrchBox.value)
})