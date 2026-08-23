const {initializeDatabase} = require("./db/db.connect")
const Movie = require("./models/movie.models")
initializeDatabase();


const newMovie =  {
    title: "karan arjun",
    releaseYear: 1995,
    genre: ["Drama"],
    director: "Aditya Kumar Chopra",
    actors: ["Salman khan", "Kajol"],
    language: ["Hindi"],
    country: "India",
    rating: 9.5,
    plot: "that movie was based on the rebirth of two brothers.",
    awards: "IFA Filmfare Awards",
    posterUrl: "https://example.com/poster1.jpg",
    trailerUrl: "https://example.com/trailer1.mp4",
  }

 async function createdMovie(newMovie) {
    try{
        const movie = new Movie(newMovie)
        const saveMovie = await movie.save()
        console.log("New movie data: ", saveMovie)
    }
    catch(error){
        throw error
    }
  }
// createdMovie(newMovie)

// find a movie with particular title

async function readMovieTitle(movieTitle){
    try{
        const movieRead = await Movie.findOne({title: movieTitle})
        console.log(movieRead)
    }
    catch(error){
        console.log(error)
    }
}
// readMovieTitle("Dilwale Dulhania Le Jayenge")

// get a all the movie in the database
async function readAllMovies(){
    try{
        const readAllMovie = await Movie.find()
        console.log(readAllMovie)
    }
    catch(error){
        console.log(error)
    }
}
// readAllMovies()

// get a movie by director Name
async function readByDirector(directorName){
    try{
        const readByDirectorName = await Movie.findOne({director: directorName})
        console.log(readByDirectorName)
    }
    catch(error){
        console.log(error)
    }
}
readByDirector("S. S. Rajamouli")