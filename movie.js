const apiKey = '7fe5eba7a7cc4f71b684d82c657bf9a3';
const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');
const movieList = document.getElementById('movieList');

searchButton.addEventListener('click', () => {
    const query = searchInput.value;
    if (query) {
        searchMovies(query);
    }
});

async function searchMovies(query) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;
    const response = await fetch(url);
    const data = await response.json();
    displayMovies(data.results);
}

function displayMovies(movies) {
    movieList.innerHTML = '';
    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');

        const moviePoster = movie.poster_path ? `https://image.tmdb.org/t/p/w200${movie.poster_path}` : 'placeholder.jpg';
        movieElement.innerHTML = `
            <img src="${moviePoster}" alt="${movie.title}">
            <div class="movie-details">
                <h2>${movie.title}</h2>
                <p>${movie.overview}</p>
                <p><strong>Release Date:</strong> ${movie.release_date}</p>
            </div>
        `;

        movieList.appendChild(movieElement);
    });
}
