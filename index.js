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
// readByDirector("S. S. Rajamouli")

// find a movie by id and update it's rating
async function updateMovie(movieId, dataToUpdate){
    try{
        const movieUpdated = await Movie.findByIdAndUpdate(movieId, dataToUpdate, {new:true})
        console.log(movieUpdated)
    }
    catch(error){
        console.log("Error in updating movie Rating: ", error)
    }
}
// updateMovie("6a7c5724a2e3e0340395c029", {rating: 9})
// updateMovie("6a7c5724a2e3e0340395c02b", {rating: 6})

// find the movie by Id and update its releaseYear

async function updateMovieByReleaseYear(movieId, dataToUpdate){
    try{
        const updateReleaseYear = await Movie.findByIdAndUpdate(movieId, dataToUpdate, {new: true})
        console.log(updateReleaseYear)
    }
    catch(error){
        console.log("error in updating movie release year: ", error)
    }
}
// updateMovieByReleaseYear("6a7c5724a2e3e0340395c02b", {releaseYear: 2010})

// find one data and update it's value

async function updateMovieDetails(movieTitle, dataToUpdate){
    try{
        const updatedMovie = await Movie.findOneAndUpdate({title: movieTitle}, dataToUpdate, {new:true})
        console.log(updatedMovie)
    }
    catch(error){
        console.log("error in changing data: ", error)
    }

}
updateMovieDetails("PK", {releaseYear: 2011})