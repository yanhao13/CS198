// CLUE #0: See more info in the homework spec.
apiKey = "4fbe5fb500d71df4a01ce3762a6d27f2"; /* YOUR API KEY HERE */

geocodingUrl = "http://api.openweathermap.org/geo/1.0/direct?q="; // This is beginning of the API call we use to convert city names to coordinates!
weatherUrl = "https://api.openweathermap.org/data/2.5/weather?"; //This is beginning of the API call we use to convert coordinates to weather!
submitButton = document.getElementById("submit");

// DOM Targetting: Select the input element with the id "cityName" (CLUE #1)
cityName = document.getElementById("cityName"); /* YOUR CODE HERE */
mainWeather = document.getElementById("mainWeather");
weatherDescription = document.getElementById("weatherDescription");

// This adds an event listener to check when the submit button is clicked,
// then if the cityName's value is not blank, we call setWeatherDescription with cityName.value as the argument.
submitButton.addEventListener("click", function () {
  if (cityName.value != "") {
    setWeatherDescription(cityName.value);
  }
});

// This function takes in a city name (that the user inputs), and gets the latitude and longitude
// of that city. This is important because our second API call, the one that actually gets the weather,
// requires a latitude and longitude coordinate pair.
async function getLatLon(city) {

  // Let's create the API url. (CLUE #2)
  let url = `${geocodingUrl}${city}&appid=${apiKey}`; /* YOUR CODE HERE */

  // Send a GET request to the url that you wrote above! (CLUE #3)
  let response = await fetch(url); /* YOUR CODE HERE */
  let data = await response.json(); //This line parses the response into JSON format so we can use it!

  // Let's return a JavaScript object here! (CLUE #4)
  return {
    "lat": data[0].lat, /* YOUR CODE HERE */
    "lon": data[0].lon /* YOUR CODE HERE */
  }
}

//This function makes a GET request to retrieve weather data at a specific latitude and longitude.
// (CLUE #5)
async function getWeather(lat, lon) {
  let url = `${weatherUrl}lat=${lat}&lon=${lon}&appid=${apiKey}`; /* Format the appropriate API url to retrieve weather data */
  let response = await fetch(url); /* Fetch data from the url you just wrote (what keyword do we need?) */ 
  let data = await response.json(); /* Parse the response as JSON here */

  // Return the main weather and weather description from the data variable! (CLUE #5.5)
  return {
    "main": data.weather[0].main, /* YOUR CODE HERE */
    "description": data.weather[0].description /* YOUR CODE HERE */
  }
}

// This function gets the weather using the functions you wrote above and displays it in the HTML.
async function setWeatherDescription(city) {
  // This line calls getLatLon on the city name provided to find the latitude and longitude of that city.
  let coordinateData = await getLatLon(city);

  // Extract the lat and lon from coordinateData. (CLUE #6)
  const lat = coordinateData.lat; /* YOUR CODE HERE */
  const lon = coordinateData.lon; /* YOUR CODE HERE */


  let weatherData = await getWeather(lat, lon);
  
  // Same thing here, but we want to set mainWeather and weatherDescription's innerHTML to the relevant values in weatherData.
  // (CLUE #7)
  mainWeather.innerHTML = weatherData.main; /* YOUR CODE HERE */
  weatherDescription.innerHTML = weatherData.description; /* Set weatherDescription's innerHTML here */
}
