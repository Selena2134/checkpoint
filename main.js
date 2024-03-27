let axios = window.axios;

let temperature = document.getElementById('temperature');
let wind = document.getElementById('wind');
let humidity = document.getElementById('humidity');
let name = document.getElementById('name');
let error = document.getElementById('error');
let searchContainer = document.getElementById('search-container');

let location = document.getElementById('location');
let search = document.getElementById('search');

let rain = document.getElementById('rain');
let clear = document.getElementById('clear');
let cloud = document.getElementById('cloud');
let snow = document.getElementById('snow');

search.onclick = async () => {
    try {
        let place = location.value;
        const {data} = await    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=8d1c8bf5baa3f53b4fdd39f067c5b3f6`);
    
        temperature.innerText = parseInt(data.main.temp - 273.15);
        wind.innerText = data.wind.speed;
        humidity.innerText = data.main.humidity;
        name.innerText = data.name;

        let weather = data.weather[0].main;

        if(weather == "Rain") {
            rain.classList.remove("hidden")
            clear.classList.add("hidden")
            cloud.classList.add("hidden")
            snow.classList.add("hidden")
        }
        else if(weather == "Clouds") {
            rain.classList.add("hidden")
            clear.classList.add("hidden")
            cloud.classList.remove("hidden")
            snow.classList.add("hidden")
        }
        else if(weather == "Snow") {
            rain.classList.add("hidden")
            clear.classList.add("hidden")
            cloud.classList.add("hidden")
            snow.classList.remove("hidden")
        }
        else {
            rain.classList.add("hidden")
            clear.classList.remove("hidden")
            cloud.classList.add("hidden")
            snow.classList.add("hidden")
        }

        error.innerText = "";
        searchContainer.classList.remove("border-red-500");
    }
    catch(e) {
        error.innerText = "Invalid location";
        searchContainer.classList.add("border-red-500")
    }
};



setImage("test");