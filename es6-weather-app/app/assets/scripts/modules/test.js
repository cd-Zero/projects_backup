

document.querySelector('#generate').addEventListener('click', function(){

  var ourRequest = new XMLHttpRequest();

    var city    = document.querySelector('#city-input').value;
    var country = document.querySelector('#country-input').value;
  ourRequest.open('GET',`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=c144deeef83c9fc568b52b95903fb474`,true)

  ourRequest.onload = function(){

  var weatherData = JSON.parse(ourRequest.responseText);
    console.log(weatherData);



      var fTemp  = weatherData.main.temp*9/5 - 459.67;



      document.querySelector('#display-weather-des').innerHTML = weatherData.weather["0"].description;
      document.querySelector('#display-city').innerHTML        = weatherData.name;
      document.querySelector('#display-country').innerHTML     = weatherData.sys.country;
      document.querySelector('#display-temp').innerHTML        = fTemp
      document.querySelector('#display-icon').innerHTML        = weatherData.weather["0"].icon;


  }

  ourRequest.send();

})



// clear button code
  document.querySelector("#clear").addEventListener('click',function(){
  document.querySelector('.x h1').innerHTML = "";
})
