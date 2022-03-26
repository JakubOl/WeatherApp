import search from "../assets/outline_search_black_24dp.png";
import github from "../assets/GitHub-Mark-32px.png";

const loadImages = () => {
  document.querySelector(".search_icon").src = search;
  document.querySelector(".github_icon").src = github;
};

export default loadImages;
