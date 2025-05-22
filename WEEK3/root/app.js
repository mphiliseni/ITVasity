// <!-- Scripts -->

  const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const now = new Date();
  document.getElementById('date').innerText = `${days[now.getDay()]}, ${now.toDateString()}`;

  function showWeather(lat, lon) {
    // Current Weather
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
      .then(res => res.json())
      .then(data => {
        document.getElementById('weather-location').innerText = `${data.name}, ${data.sys.country}`;
        document.getElementById('weather-desc').innerText = `Weather: ${data.weather[0].description}`;
        document.getElementById('weather-temp').innerText = `Temperature: ${data.main.temp}°C`;
        document.getElementById('weather-icon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      });

    // 5-Day Forecast
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
      .then(res => res.json())
      .then(data => {
        const forecastEl = document.getElementById('forecast');
        forecastEl.innerHTML = '';

        const filtered = data.list.filter(item => item.dt_txt.includes("12:00:00"));

        filtered.forEach(item => {
          const date = new Date(item.dt_txt);
          const dayName = days[date.getDay()];
          const icon = item.weather[0].icon;
          const temp = Math.round(item.main.temp);
          const desc = item.weather[0].description;

          forecastEl.innerHTML += `
            <div class="col-6 col-md-2 mb-3">
              <h6>${dayName}</h6>
              <img src="https://openweathermap.org/img/wn/${icon}.png" class="forecast-icon" alt="${desc}" />
              <div>${temp}°C</div>
            </div>
          `;
        });
      });
  }

  // Get user's location
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      position => showWeather(position.coords.latitude, position.coords.longitude),
      error => {
        document.getElementById('weather-location').innerText = "Location permission denied.";
      }
    );
  } else {
    document.getElementById('weather-location').innerText = "Geolocation is not supported.";
  }
  function searchCity() {
    const city = document.getElementById('cityInput').value;
    if (!city) return;
  
    // Current Weather
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then(res => res.json())
      .then(data => {
        document.getElementById('weather-location').innerText = `${data.name}, ${data.sys.country}`;
        document.getElementById('weather-desc').innerText = `Weather: ${data.weather[0].description}`;
        document.getElementById('weather-temp').innerText = `Temperature: ${data.main.temp}°C`;
        document.getElementById('weather-icon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      });
  
    // Forecast
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`)
      .then(res => res.json())
      .then(data => {
        const forecastEl = document.getElementById('forecast');
        forecastEl.innerHTML = '';
  
        const filtered = data.list.filter(item => item.dt_txt.includes("12:00:00"));
  
        filtered.forEach(item => {
          const date = new Date(item.dt_txt);
          const dayName = days[date.getDay()];
          const icon = item.weather[0].icon;
          const temp = Math.round(item.main.temp);
          const desc = item.weather[0].description;
  
          forecastEl.innerHTML += `
            <div class="col-6 col-md-2 mb-3">
              <h6>${dayName}</h6>
              <img src="https://openweathermap.org/img/wn/${icon}.png" class="forecast-icon" alt="${desc}" />
              <div>${temp}°C</div>
            </div>
          `;
        });
      });
  }
  