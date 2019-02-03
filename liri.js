//search for movies, bands, and songs
//provide input for user to search
//show the user output from the api results

//Movies
    //api key
    //user input
    //function for ajax call
    //results
//var env = require("dotenv").config();

//var movieData = ""

var axios = require("axios");
const command = process.argv[2];
const value = process.argv[3];
//const spotify = require('node-spotify-api');

if (command === "movie-this") {
    getMyMovie(value);
} else if (command ==="concert-this"){
getMyBands(value);
}

//const spotify = new spotify({
    //id:
    //secret:
//});

// spotify.search({ type: 'track', query: 'All the Small Things', limits: 10 }, function(err, data) {
//     if (err) {
//         return console.log('Error occured: ' + err)
//     }
// })

//const questions = [
    //{type: 'input', name: 'name', message: 'What is your name?'}
//];

function getMyBands(artist) {
    const url = '' + artist + ''
}


function getMyMovie(movieName) {
    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

    axios.get(queryUrl).then(
        function(response) {
            console.log(response);
            console.log("________________________");
          console.log("Release Year: " + response.data.Year);
         
          console.log("Actors: " + response.data.Actors);
          
        }
      );
}

