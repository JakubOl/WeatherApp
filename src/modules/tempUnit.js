let unit = "metric";
let unitIcon = "°C";

const changeUnit = () => {
  unit = unit === "metric" ? "standard" : "metric";
  unitIcon = unitIcon === "°C" ? "°F" : "°C";
  document.querySelector(".far").classList.toggle("hidden");
  document.querySelector(".cel").classList.toggle("hidden");
};

export { changeUnit, unit, unitIcon };
