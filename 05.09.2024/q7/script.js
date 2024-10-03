$(document).ready(function () {
    const apiKey = 'af36ee408b581f8c037229d3bbc2fd48';

    $('#fetch-weather').click(function () {
        const city = $('#city-input').val();
        if (!city) {
            alert('Please enter a city name');
            return;
        }

        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        $.ajax({
            url: apiUrl,
            method: 'GET',
            dataType: 'json',
            success: function (data) {
                const weatherHtml = `
                    <h2>Weather in ${data.name}</h2>
                    <p>Temperature: ${data.main.temp}°C</p>
                    <p>Feels like: ${data.main.feels_like}°C</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                    <p>Wind Speed: ${data.wind.speed} m/s</p>
                    <p>Weather: ${data.weather[0].description}</p>
                `;
                $('#weather-data').html(weatherHtml);
            },
            error: function (xhr, status, error) {
                $('#weather-data').html('<p>Error fetching weather data. Please try again.</p>');
                console.error('Error:', error);
            }
        });
    });
});