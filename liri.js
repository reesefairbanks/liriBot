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

const axios = require("axios");
const command = process.argv[2];
const value = process.argv[3];
const Spotify = require('node-spotify-api');

switch(command) {
    case "concert-this":
        getMyBands(value);
        break;
    
    case "spotify-this-song":
        getMySpotify(value);
        break;
    case "movie-this":
        getMyMovie(value);
    default:
}


//Spotify function 
const spotify = new Spotify({
  id: "39684ab0cd8c40b8ab9bc29093da0138",
  secret: "8b5acaf4176447e4ba7ecc3457bedb29"
});
 
function getMySpotify(item) {
    spotify.search({ type: 'track', query: item, limit: 10 }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
       
      console.log(data); 
      });
}


//Get bands function
function getMyBands(artist) {
    const url = "https://rest.bandsintown.com/artists/" + artist + "/events?";
    
    axios.get(url, {
        params: {
          ID: "codingbootcamp"
        }
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}


//OMDB get movie function
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

