const filmUrl = "http://localhost:3000/films";
const filmBar = document.getElementById("films");
const filmPoster = document.getElementById("poster");
const filmTitle = document.getElementById("title");
const filmRuntime = document.getElementById("runtime");
const filmInfo = document.getElementById("film-info");
const filmShowtime = document.getElementById("showtime");
const filmRemainingTickets = document.getElementById("ticket-num");

let filmList = [];

fetch(`${filmUrl}/1`)
    .then(res => res.json())
    .then(displayFirstFilm);

function displayFirstFilm(film) {
    displayFilmInfo(film);
}

fetch(filmUrl)
    .then(res => res.json())
    .then(json => {
        filmList = json;
        renderFilms();
    });

function renderFilms() {
    filmBar.innerHTML = "";
    filmList.forEach(displayFilms);
}

function displayFilms(film) {
    const filmCard = createFilmCard(film);
    filmBar.appendChild(filmCard);
    filmCard.addEventListener("click", () => displayFilmInfo(film));
}

function createFilmCard(film) {
    const filmCard = document.createElement("li");
    filmCard.classList.add("film");
    filmCard.textContent = film.title;
    return filmCard;
}

function displayFilmInfo(film) {
    filmPoster.src = film.poster;
    filmPoster.alt = film.title;
    filmTitle.textContent = film.title;
    filmRuntime.textContent = `${film.runtime} minutes`;
    filmInfo.textContent = film.description;
    filmShowtime.textContent = film.showtime;
    filmRemainingTickets.textContent = film.capacity - film.tickets_sold;
}

document.getElementById("buy-ticket").addEventListener("click", buyTicket);
function buyTicket() {
    const remainingTickets = parseInt(filmRemainingTickets.textContent);
    if (remainingTickets > 0) {
        filmRemainingTickets.textContent = remainingTickets - 1;
    }
}
   
