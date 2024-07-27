const API = "96469988da58e6bf7b65b58aa69be6a3"
const info = document.getElementById('info');

function show_data(data){
    console.log(data)
    info.innerHTML = "";
    let city = data.name;
    let feels_like = data.main.feels_like;
    let humidity = data.main.humidity;
    let max_temp = data.main.temp_max;
    let min_temp = data.main.temp_min;
    let description = data.weather[0].description;
    let main = data.weather[0].main;
    let wind_speed = data.wind.speed;
    let wind_deg = data.wind.deg;
    let c_div = document.createElement('div');
    c_div.innerHTML =   `City = ${city}.<br>`;
    let fl_div = document.createElement("div");
    fl_div.innerHTML = `Temperature feels like ${Number(feels_like) - 273.15} °C.<br>`;  
    let h_div = document.createElement('div');
    h_div.innerHTML = `Humidity =  ${Number(humidity)} %.<br>`;
    let mt_div = document.createElement('div');
    mt_div.innerHTML = `Maximum temperature =  ${Number(max_temp) - 273.15} °C.<br>`;
    let mit_div = document.createElement("div");
    mit_div.innerHTML = `Minimum temperature =  ${Number(min_temp) - 273.15} °C.<br>`;
    let d_div = document.createElement("div");
    d_div.innerHTML =   `Description = ${description}.<br>`;
    let m_div = document.createElement('div');
    m_div.innerHTML = `Main info = ${main}.<br>`;
    let ws_div = document.createElement('div');
    ws_div.innerHTML =  `Wind Speed = ${wind_speed}.<br>`
    let wd_div = document.createElement('div');
    wd_div.innerHTML = `Wind Degree = ${wind_deg}.<br>`
    info.appendChild(c_div);
    info.appendChild(fl_div);
    info.appendChild(h_div);
    info.appendChild(mt_div);
    info.appendChild(mit_div);
    info.appendChild(d_div);
    info.appendChild(m_div);
    info.appendChild(ws_div);
    info.appendChild(wd_div);
}

function get_weather(){
    let input = document.getElementById("city");
    let city = input.value;
    city = city.trim();
    city = city.toLowerCase();
    if(city!=""){
    input.value = "";
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}`
    fetch(url)
    .then(response=>{
        if(response.status==200){
            return response.json()
        }else{
            info.innerHTML = "Error ! ";
        }
    })
    .then(data=>show_data(data))
    }
}