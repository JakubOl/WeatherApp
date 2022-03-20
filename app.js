const API_KEY = "70eab0b5acf2d924ec9f9b006ddbb17b";
const search = document.querySelector(".search");
const city = document.querySelector(".city_name");
const cityDesc = document.querySelector(".city_desc");
const cityDate = document.querySelector(".city_date");
const cityTime = document.querySelector(".city_time");
const cityTempCel = document.querySelector(".city_temp_cel");
const cityTempFar = document.querySelector(".city_temp_far");
const cityImg = document.querySelector(".city_img");
const moreSunrise = document.querySelector(".sunrise");
const moreSunset = document.querySelector(".sunset");
const moreHumidity = document.querySelector(".humidity");
const moreWind = document.querySelector(".wind");
const moreFeels = document.querySelector(".feels");
const morePressure = document.querySelector(".pressure");

async function getWeather(cityName) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
    );
    const data = await response.json();
    return data;
  } catch (err) {
    // console.log("error");
  }
}

const getDate = (delay) => {
  const today = new Date().getTime() + delay;
  let year = new Intl.DateTimeFormat("en", { year: "numeric" })
    .format(today)
    .padStart(2, 0);
  let month = new Intl.DateTimeFormat("en", { month: "long" })
    .format(today)
    .padStart(2, 0);
  let day = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(today);
  const date = `${year} ${month} ${day}`;
  return date;
};
const getTime = (seconds = new Date()) => {
  const hour = new Intl.DateTimeFormat("en", { hour: "2-digit" })
    .format(seconds)
    .slice(0, 2)
    .padStart(2, 0);
  const min = new Intl.DateTimeFormat("en", { minute: "2-digit" })
    .format(seconds)
    .slice(0, 2)
    .padStart(2, 0);
  const sec = new Intl.DateTimeFormat("en", { second: "2-digit" })
    .format(seconds)
    .slice(0, 2)
    .padStart(2, 0);
  return `${hour}:${min}:${sec}`;
};

const updateInfo = (data) => {
  city.textContent = data.name;
  cityDesc.textContent =
    data.weather[0].description[0].toUpperCase() +
    data.weather[0].description.slice(1);
  cityDate.textContent = getDate(data.timezone);
  cityTime.textContent = getTime();
  cityImg.src =
    "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
  cityTempCel.textContent = (data.main.temp - 273.15).toFixed(1) + "°C";
  cityTempFar.textContent = data.main.temp.toFixed(1) + "°F";
  console.log(
    getTime(data.sys.sunrise),
    getTime(data.sys.sunset),
    data.sys.sunset,
    data.sys.sunrise
  );
  moreSunrise.textContent = getTime(data.sys.sunrise);
  moreSunset.textContent = getTime(data.sys.sunset);
  moreHumidity.textContent = data.main.humidity + " %";
  moreWind.textContent = data.wind.speed + " km/h";
  moreFeels.textContent = (data.main.feels_like - 273.15).toFixed(1) + " °C";
  morePressure.textContent = data.main.pressure + " hPa";
};

const getCity = () => {
  const city = document.querySelector(".search").value;
  if (!city) return "Kraków";
  return city;
};

const updateView = () => {
  getWeather(getCity())
    .then((data) => {
      console.log(data);
      updateInfo(data);
    })
    .catch((err) => {
      search.value = "Wrong name !";
      search.style.border = "2px solid red";
      search.style.borderRadius = "10px";
      setTimeout(function () {
        search.value = "";
        search.style.border = "none";
      }, 4000);
    });
};

document.querySelector(".search_box").addEventListener("submit", function (e) {
  e.preventDefault();
  updateView();
});
updateView();
