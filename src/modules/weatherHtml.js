import { getDate, getTime } from "./dateTime";
import { unitIcon } from "./tempUnit";

const generateHtml = (data) => {
  return `
    <div class="weather_info">
      <div class="city_name">${data.name}</div>
      <div class="city_desc">${
        data.weather[0].description[0].toUpperCase() +
        data.weather[0].description.slice(1)
      }</div>
      <div class="city_date">${getDate(data.dt + data.timezone)}</div>
      <div class="city_time">${getTime(data.dt + data.timezone)}</div>
      <div class="city_temp">${data.main.temp + unitIcon}</div>
      <img class="city_img" src=
        "http://openweathermap.org/img/wn/${
          data.weather[0].icon
        }@2x.png" alt="">
    </div>
    <ul class="more_info">
      <li class="weather_details">
        <div class="datails_header">SUNRISE</div>
        <div class="details_value sunrise">${getTime(data.sys.sunrise)}</div>
      </li>
      <li class="weather_details press">
        <div class="datails_header">SUNSET</div>
        <div class="details_value sunset">${getTime(data.sys.sunset)}</div>
      </li>
      <li class="weather_details">
        <div class="datails_header">HUMIDITY</div>
        <div class="details_value humidity">${data.main.humidity} %</div>
      </li>
      <li class="weather_details">
        <div class="datails_header">WIND</div>
        <div class="details_value wind">${data.wind.speed} km/h</div>
      </li>
      <li class="weather_details">
        <div class="datails_header">FEELS LIKE</div>
        <div class="details_value feels">${
          data.main.feels_like + unitIcon
        }</div>
      </li>
      <li class="weather_details">
        <div class="datails_header">PRESSURE</div>
        <div class="details_value pressure">${data.main.pressure} hPa</div>
      </li>
      <li class="weather_details">
        <div class="datails_header">MAX TEMP</div>
        <div class="details_value max_temp">${
          data.main.temp_max + unitIcon
        }</div>
      </li>
      <li class="weather_details">
        <div class="datails_header">MIN TEMP</div>
        <div class="details_value min_temp">${
          data.main.temp_min + unitIcon
        }</div>
      </li>
    </ul>
    `;
};
export default generateHtml;
