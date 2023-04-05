console.log("Linked");
const apiKey = "9cd06e16b3d3e32493947fc089bc851e";
function searchApi(cityName) {
  console.log("inside function", cityName);
  let url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${apiKey}`;
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      let lat = data[0].lat;
      let lon = data[0].lon;
      getWeather(lat, lon);
      console.log(lat, lon);
    });
  console.log("searching api");
  console.log(cityName);
  //perform a fetch for that data with the city Name
}
function getWeather(lat, lon) {
  let url = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}

function handleFormSubmit(event) {
  event.preventDefault();
  console.log("submitted");
  //hanlde the logic to get the city we're searching for
  var cityInput = document.getElementById("city");
  console.log(cityInput.value);
  //search for a city
  if (cityInput.value == "") {
    alert("you must enter a city name");
    return;
  }
  searchApi(cityInput.value);
}

//
document
  .getElementById("city-form")
  .addEventListener("submit", handleFormSubmit);
