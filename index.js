const {initializeDatabase} = require("./db/db.connect")
const fs = require("fs")
const Movie = require("./models/movie.models")
initializeDatabase();
const JsonData = fs.readFileSync("movie.json", "utf-8")
const moviesData = JSON.parse(JsonData)
function seedData(){
    try{
        for(const movieData of moviesData){
            const newMovie = new Movie({
                title: movieData.title,
                releaseYear: movieData.releaseYear,
                genre: movieData.genre,
                director: movieData.director,
                actors: movieData.actors,
                language: movieData.language,
                country: movieData.country,
                rating: movieData.rating,
                plot: movieData.plot,
                awards: movieData.awards,
                posterUrl: movieData.posterUrl,
                trailerUrl: movieData.trailerUrl

            })
            newMovie.save()
            console.log(newMovie)
        }
        
    }
    catch(error){
            console.log("error seeding the data", error)
        }
}
seedData()