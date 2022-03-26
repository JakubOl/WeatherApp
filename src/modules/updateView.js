import generateHtml from "./weatherHtml";
import getWeather from "./getWeather";

const search = document.querySelector(".search");
const searchBox = document.querySelector(".search_box");

const getCity = () => {
  const city = document.querySelector(".search").value;
  if (!city) return "Kraków";
  return city;
};

const updateView = () => {
  getWeather(getCity())
    .then((data) => {
      document.querySelector(".hero").innerHTML = generateHtml(data);
    })
    .catch((err) => {
      search.value = "Invalid city name.";
      searchBox.style.border = "2px solid red";
      setTimeout(function () {
        search.value = "";
        search.style.border = "none";
        searchBox.style.border = "2px solid black";
      }, 2000);
    });
};

export default updateView;
