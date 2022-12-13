console.log("Linked");
function searchApi(cityName) {
  console.log("searching api");
  console.log(cityName);
  //perform a fetch for that data with the city Name
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
