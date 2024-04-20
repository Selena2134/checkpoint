function getWeather() {
    const place = document.getElementById('location').value;

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=8d1c8bf5baa3f53b4fdd39f067c5b3f6`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const locationName = data.name;
            const temperatureKelvin = data.main.temp;
            const temperatureCelsius = temperatureKelvin - 273.15;
            const description = data.weather[0].description;

            document.getElementById('location-name').innerText = locationName;
            document.getElementById('temperature').innerText = `Temperature: ${temperatureCelsius.toFixed(2)}°C`;
            document.getElementById('description').innerText = `Description: ${description}`;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}
