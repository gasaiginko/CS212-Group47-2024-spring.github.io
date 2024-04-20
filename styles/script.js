
function fetchWeather(apiCall, printMode){
    return fetch(apiCall)
    .then(resp => {
        //console.log(resp)
        return resp.json()
    })
    .then(data => {
        //console.log(data)
        switch (printMode){
        case 'current': {
            const weatherInfo = data.main
            let Temperature = "Temperature: " + weatherInfo.temp + " °C" + "   Feels Like: " + weatherInfo.feels_like + " °C";
            let pressure = 'Pressure: ' + weatherInfo.pressure + " hPa"
            let hum = 'Humidity: ' + weatherInfo.humidity + " %" 
            let weather = 'Weather: ' + data.weather[0].description
            let timeInfo = 'Update Time: ' + new Date(data.dt * 1000).toString()

            let srcIcon = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`

            icon = document.getElementById("weatherIcon")
            icon.src = srcIcon;
            icon.style.display = "block";
            icon.style.position = "relative";
            icon.style.top = "-130px";
            icon.style.left = "500px"

            document.getElementById("weatherCurrent").innerHTML = Temperature + "<br>" + pressure + "<br>" + hum + "<br>" + weather + "<br>" + timeInfo;
            
            }
        case 'future': {
            const weatherInfoList = data.list;
            const weatherGroup = document.querySelector("#futureWeather")
            for (let data_i of weatherInfoList){
                const weatherInfo = data_i.main 
                let Temperature = "Temperature: " + weatherInfo.temp + " °C" + "   Feels Like: " + weatherInfo.feels_like + " °C";
                let pressure = 'Pressure: ' + weatherInfo.pressure + " hPa"
                let hum = 'Humidity: ' + weatherInfo.humidity + " %" 
                let weather = 'Weather: ' + data_i.weather[0].description
                let timeInfo = 'Update Time: ' + new Date(data_i.dt * 1000).toString()
    
                let srcIcon = `http://openweathermap.org/img/wn/${data_i.weather[0].icon}.png`
                let forcastTime = "Forcast Time: " + data_i.dt_txt;

                weatherGroup.insertAdjacentHTML("beforeend",`<p>${forcastTime + "<br>" + Temperature + "<br>" + pressure + "<br>" + hum + "<br>" + weather + "<br>" + timeInfo }</p>`)

                weatherGroup.insertAdjacentHTML("beforeend",`<img src="${srcIcon}" style="position: relative; top: -130px; left: 500px;">`)
                }
            }
        }
        return data;
    })
    .catch(error =>{
        console.log(`Error! ${error}`)
        //setInterval(loadingAnime, 500)
        return false;
    })
}

function fetchCurrentWeather(){
    apiCall = 'https://api.openweathermap.org/data/2.5/weather?lat=35.20&lon=-111.65&appid=b7cc951e41b2d3d1d4594076636daa8a&units=metric'

    weatherInfo = fetchWeather(apiCall, 'current');
    
}

function fetchForcastWeather(){
    apiCall = 'https://api.openweathermap.org/data/2.5/forecast?lat=35.20&lon=-111.65&appid=b7cc951e41b2d3d1d4594076636daa8a&units=metric'
    fetchWeather(apiCall, 'future')
}

function* loadingAnimeGenerator(){
    text = "Fetching Weather Informatiion "
    dot_sign = '· '
    while (true){
        let text_ = text;
        for (let i = 0; i<=3; i++){
            text_ += dot_sign;
            document.getElementById("weatherText").innerText = text_
            yield 1;
        }
    }
}

const lAG = loadingAnimeGenerator()
function loadingAnime(){
    lAG.next()
}

function clickFW(){
    buttonStatus = document.getElementById("futureWeather").style.display;
    if (buttonStatus == "none"){
        document.getElementById("futureWeather").style.display = "block"
    }
    else{
        document.getElementById("futureWeather").style.display = "none"
    }
}

fetchCurrentWeather();
fetchForcastWeather();
//setInterval(loadingAnime, 500)

setInterval(fetchForcastWeather,1200000)
setInterval(fetchCurrentWeather,120000)

