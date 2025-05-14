  new Swiper(".mySwiper", { loop: true, autoplay: { delay: 3000 } });async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const resultDiv = document.getElementById("weatherResult");

  if (!city) {
    resultDiv.innerHTML = "Введите название города.";
    return;
  }

  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=55.75&longitude=37.61&current_weather=true`
    );
    
    const data = await response.json();
    const weather = data.current_weather;

    resultDiv.innerHTML = `
      <p>Температура в ${city}: <strong>${weather.temperature}°C</strong></p>
      <p>Скорость ветра: ${weather.windspeed} км/ч</p>
    `;
  } catch (error) {
    resultDiv.innerHTML = "Не удалось получить данные о погоде.";
    console.error(error);
  }
}
