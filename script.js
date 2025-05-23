function checkValidNumber(temperature) { // Check if the inserted value is a number or not
    return !isNaN(temperature) && temperature.trim() !== ""
}

function convertTemperature(temperature) {
    let tempStart = document.getElementById("temp-start").value
    let tempEnd = document.getElementById("temp-end").value
    if(tempStart === "celsius" && tempEnd === "celsius") {
        document.getElementById("result").textContent = `${temperature}°C`
    }
    else if(tempStart === "kelvin" && tempEnd === "kelvin") {
        document.getElementById("result").textContent = `${temperature}K`
    }
    else if(tempStart === "fahrenheit" && tempEnd === "fahrenheit") {
        document.getElementById("result").textContent = `${temperature}°F`
    }
    else if(tempStart === "celsius" && tempEnd === "kelvin") {
        temperature = temperature + 273.15
        document.getElementById("result").textContent = `${temperature}K`
    }
    else if(tempStart === "kelvin" && tempEnd === "celsius") {
        temperature = temperature - 273.15
        document.getElementById("result").textContent = `${temperature}°C`
    }
    else if(tempStart === "celsius" && tempEnd === "fahrenheit") {
        temperature = (temperature * 9/5) + 32
        document.getElementById("result").textContent = `${temperature}°F`
    }
    else if(tempStart === "fahrenheit" && tempEnd === "celsius") {
        temperature = (temperature - 32) * 5/9
        document.getElementById("result").textContent = `${temperature}°C`
    }
    else if(tempStart === "fahrenheit" && tempEnd === "kelvin") {
        temperature = (temperature - 32) * 5/9 + 273.15
        document.getElementById("result").textContent = `${temperature}K`
    }
    else if(tempStart === "kelvin" && tempEnd === "fahrenheit") {
        temperature = (temperature - 273.15) * 9/5 + 32
        document.getElementById("result").textContent = `${temperature}°F`
    }
}

function main(){
    document.getElementById("convert").onclick = function() {
        let temperature = document.getElementById("temperature").value
        let check = checkValidNumber(temperature)
        check ? convertTemperature(Number(temperature)) : document.getElementById("result").textContent = `Not a valid temperature :/`
    }
}

main()