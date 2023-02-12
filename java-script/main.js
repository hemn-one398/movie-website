class Movie {
  constructor(name, image, genre, isFavourite) {
    this.name = name;
    this.image = image;
    this.genre = genre;
    this.isFavourite = isFavourite;
  }
}

let recommendedMovies = [
  new Movie("Aladin", "assets/images/aladin.jpg", "Adventure", true),
  new Movie("Moonfall", "assets/images/Moonfall.jpg", "Adventure", true),
  new Movie("onward", "assets/images/onward.jpg", "Adventure", false),
  new Movie("moonlight", "assets/images/moonlight.jpg", "Adventure", true),
];

let topMovie = new Movie(
  "The BFG",
  "assets/images/the bfg.jpg",
  "Adventure",
  false
);
const filledIcon = "assets/icons/favorite-filled.svg";
const unfilledIcon = "assets/icons/favorite.svg";

let moviesSection = document.getElementById("movies");
moviesSection.innerHTML = `<article class="top-movie">
            <figure>
              <img src="${topMovie.image}" alt="" />
            </figure>
            <span class="title">${topMovie.name}</span>
            <span class="genre">${topMovie.genre}</span>
          </article>`;

function add(name, image, genre, isFavourite) {
  moviesSection.innerHTML += `<article class="sugestted-movies"> <img class="fav-icon" alt="" src="${
    isFavourite ? filledIcon : unfilledIcon
  }" />  <figure>   <img src="${image}" alt="" /> </figure> <span class="title">${name}</span>   <span class="genre">${genre}</span> </article>`;
}

function generateRecommendedMovies() {
  for (const movie of recommendedMovies) {
    add(movie.name, movie.image, movie.genre, movie.isFavourite);
  }
}
generateRecommendedMovies();
