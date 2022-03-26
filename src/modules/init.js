import { changeUnit } from "./tempUnit";
import updateView from "./updateView";

const unitButton = document.querySelector(".unit");
const searchBox = document.querySelector(".search_box");

const init = () => {
  unitButton.addEventListener("click", () => {
    changeUnit();
    updateView();
  });

  searchBox.addEventListener("submit", function (e) {
    e.preventDefault();
    updateView();
  });
};
export default init;
