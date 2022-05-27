// const url =  `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={api_key}`

const api_key =  `a1f505bce11e694387ef4823885909d2`


async function getData(lat,lon){
    let city = document.getElementById("city").value;

    // const url =  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&q=${city}&appid=${api_key}`

    
            let res = await fetch(url)
            let arr = await res.json()

            // console.log(data.main.temp);
            console.log(arr)

           

            append(arr)
    
    


}


function append(arr){
    
        let container = document.querySelector("#container");
        container.innerHTML = "";

        let div = document.createElement("div");

        let h3 = document.createElement("h3")

        h3.innerText = arr.name;

        let temp = document.createElement("p");
        temp.innerText = `Current temp: ${arr.main.temp-273}`;

        let min_temp = document.createElement("p");
        min_temp.innerText = `Min temp: ${arr.main.temp_min-273}`;

        let max_temp = document.createElement("p");
        max_temp.innerText =`Max temp: ${arr.main.temp_max-273}`;

        let wind = document.createElement("p");
        wind.innerText = `Wind Speed: ${arr.wind.speed}`

        let sr = document.createElement("p");
        sr.innerText = `Sunrise : ${arr.sys.sunrise}` 

        let ss = document.createElement("p");
        ss.innerText = `Sunrise : ${arr.sys.sunset}` 




        div.append(h3,temp,min_temp,max_temp,wind,sr,ss);

        container.append(div);


        let iframe = document.getElementById("gmap_canvas")
        iframe.src=`https://maps.google.com/maps?q=${arr.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`

}

//Based on current location

function getLocationWeather(){
    

    navigator.geolocation.getCurrentPosition(success);

    function success(position){
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        getData(latitude,longitude);

        console.log(latitude);
        console.log(longitude);
    }
      
}

getLocationWeather();