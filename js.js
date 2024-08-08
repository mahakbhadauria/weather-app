let city = document.getElementById('city');
let type = document.getElementById('type');
let temp = document.getElementById('temp');
let img = document.getElementById('imgs');
let input = document.getElementById('hi');

// Corrected API key declaration with a closing quotation mark
let APIkey = 'f5edb1d60dd669adf0d7a73edbb9feb1';

const data = async function (search) {
  let getdata = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${APIkey}&units=metric`);
  console.log(getdata);
  let jsonData = await getdata.json();
  console.log(jsonData);
  console.log(jsonData.name);

  city.innerHTML = jsonData.name;
  temp.innerHTML = Math.floor(jsonData.main.temp) + "°C";
  type.innerHTML = jsonData.weather[0].main;

  if (type.innerHTML === "clouds") {
    img.src = "cloud.png";
  } else if (type.innerHTML === "clear") {
    img.src = "sun.png";
  } else {
    console.log("Unknown weather type:", type.innerHTML);
  }
};

function mufunc() {
  search = input.value;
  data(search);
}
