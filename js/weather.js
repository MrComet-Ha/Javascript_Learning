const APIKEY = "64525566df173c8295f7ee24d23d6c84";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric`
    fetch(url).then(
        response =>response.json()).then(
            data =>{
                const weatherContainer = document.querySelector("#weather span:first-child");
                const cityContainer = document.querySelector("#weather span:last-child");
                cityContainer.innerText = data.name;
                weatherContainer.innerText = data.weather[0].main;
            }
    );
}

function onGeoError(){
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
