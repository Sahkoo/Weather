let buttonn = document.querySelector(".btn")
let buttonnInput = document.querySelector(".input__second")

buttonn.addEventListener("click", function () {
    let newInput = buttonnInput.value
    let API_KEY = "421d7ca03f0e68de82c92703af637617"
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${newInput}&appid=${API_KEY}`, {
        method: "GET"
    })

        .then(Response => {
            if (!Response.ok) {
                console.log("no")
            } return Response.json()
        })

        .then(data => {
            console.log(data)
            let temp = Math.round(data.main.temp - 273.15)
            let iconCode = data.weather[0].icon
            let iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`
            let temp2 = `${temp}°C`
            let weatheer = document.querySelector(".weatheer")
            let pTemp = document.createElement("p")
            pTemp.textContent = temp2
            let pCountry = document.createElement("p")
            pCountry.textContent = data.sys.country
            let pName = document.createElement("p")
            pName.textContent = data.name
            let imgPhotoData = document.createElement("img")
            imgPhotoData.src = iconUrl
            weatheer.appendChild(pTemp)
            weatheer.appendChild(pCountry)
            weatheer.appendChild(pName)
            weatheer.appendChild(imgPhotoData)
        })

        .catch(error => {
            console.error(error)
        })
})