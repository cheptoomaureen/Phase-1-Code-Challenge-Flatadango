// Your code here
document.addEventListener("DOMContentLoaded",()=>{
    console.log("Content Loaded ");
    showMovies()
})
function showMovies(){
    fetch("https://my-json-server.typicode.com/cheptoo-maureen/flatdango-code-challenge/films")
  .then(response => response.json())
  .then(data => {
    let films = data;
    let filmsList = document.getElementById("films");
    let poster = document.getElementById("poster");
    poster.src = "https://www.gstatic.com/tv/thumb/v22vodart/2157/p2157_v_v8_ab.jpg";

    let menuTitle = document.getElementsByClassName('film item');
    menuTitle[0].remove()
    menuTitle[0].remove();
    menuTitle.textContent = "Movie Titles"



    let title = document.getElementById("title");
    let runtime = document.getElementById("runtime");
    let filmInfo = document.getElementById("film-info");
    let showtime = document.getElementById("showtime");
    let ticketNum = document.getElementById("ticket-num");
    let button = document.getElementById('buy-ticket')
    
    button.addEventListener('click', function () {
        let target = document.querySelector('#ticket-num');
        let value = parseInt(target.textContent);
          if (value > 0) {
          value--;
          target.textContent = value;
        }  if (value === 0) {
          
          button.textContent = "Sold-Out";
        }  if (value === 0){
            button.addEventListener('click', function () {
            
                
            })
            
        }
      });
      
      title.textContent = `${films[0].title}`;
      runtime.textContent = `${films[0].runtime}` + " minutes";
      filmInfo.textContent = `${films[0].description}`;
      showtime.textContent = `${films[0].showtime}`;
      ticketNum.textContent = `${films[0].capacity - films[0].tickets_sold}`;
      
    
    
        for (let i = 0; i < films.length; i++) {
        let film = films[i];
        let filmTitle = film.title;
        let filmPoster = film.poster;
        let filmItem = document.createElement("li");
        let filmRuntime = film.runtime;
        let filmShowtime = film.showtime;
        let filmDescription = film.description;
        let theaterCapacity = film.capacity;
        let ticketsSold = film.tickets_sold;
        let availableTickets = theaterCapacity - ticketsSold;
        
        
    filmItem.innerHTML = filmTitle;
    filmsList.appendChild(filmItem);
    filmItem.addEventListener("click", function(){
    poster.src = filmPoster;
    button.textContent = " Buy-Ticket "
    button.disabled = false
    
    
    title.textContent = filmTitle;
      runtime.textContent = filmRuntime + " minutes";
      filmInfo.textContent = filmDescription;
      showtime.textContent = filmShowtime;
      ticketNum.textContent = availableTickets;
      
        });
    }
  });
}
