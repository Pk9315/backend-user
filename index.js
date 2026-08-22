const {initializeDatabase} = require("./db/db.connect")
const Movie = require("./models/movie.models")
initializeDatabase();


const newMovie =  {
    title: "karan arjun",
    releaseYear: 1995,
    genre: ["Drama"],
    director: "Aditya Kumar Chopra",
    actors: ["Salman khan", "Kajol"],
    language: "Hindi",
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
createdMovie(newMovie)