console.log("hello world!");

let worldComment = document.createElement("h2");
worldComment.setAttribute("id", "hello");
worldComment.textContent = "Awesome Movies"

let contentContainer = document.getElementById("contentContainer");
contentContainer.appendChild(worldComment)

// Movies - create an array of movies

favMovies = [
    {
        name: "Star Wars",
        releaseDate: 1979,
        url: "https://www.imdb.com/title/tt0076759/"
    },
    {
        name: "Lord of the Rings",
        releaseDate: 2001,
        url: "https://www.imdb.com/title/tt0120737/"
    },
    {
        name: "Back to the Future",
        releaseDate: 1985,
        url: "https://www.imdb.com/title/tt0088763/"
    }
]


// Iterate through list of movie to ADD to DOM

favMovies.forEach(function(movie) {

    const movieContainer = document.createElement("div");
    let movieTitle = document.createElement ("h4");
    movieTitle.textContent = movie.name
    let movieDate = document.createElement ("p");
    movieDate.textContent = movie.releaseDate
    let movieUrl = document.createElement ("a");
    movieUrl.setAttribute("href", movie.url)
    movieUrl.setAttribute("target", "_blank")
    movieUrl.textContent = "Movie URL"


    contentContainer.appendChild(movieContainer)

    movieContainer.appendChild(movieTitle);
    movieContainer.appendChild(movieDate);
    movieContainer.appendChild(movieUrl);
})
