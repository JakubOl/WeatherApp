async function getWeather(cityName, unit) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=${unit}`
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.log("error");
  }
}

export default getWeather;
