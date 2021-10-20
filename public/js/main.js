const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp_status = document.getElementById('temp_status');
const temp_val = document.getElementById('temp_val');

const getInfo = async(event)=>{
    event.preventDefault();
    
    let cityVal = cityName.value; 

    if(cityVal === ""){
        city_name.innerText = 'please write the city name before search';
        alert("please write the city name before search");

    }
    else{
        try{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=6b2df089c02456bd5cde4790c310303b`;
        
        const response = await fetch(url);
        const data = await response.json();
        //console.log(data);

        const arrData = [data];
        
        city_name.innerText = `${arrData[0].name} , ${arrData[0].sys.country}`;
        temp_val.innerText = arrData[0].main.temp;
        //temp_status.innerText = arrData[0].weather[0].main;

        const tempStatus = arrData[0].weather[0].main;

        if (tempStatus == "Clear") {
            temp_status.innerHTML = "<i class='fas fa-sun ' style='color: yellow'></i>";
        }
        else if (tempStatus == "Clouds") {
            temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #f1f2f6'></i>";
        }
        else if (tempStatus == "Rainy") {
            temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color: #a4b0be'></i>";
        }
        else {
            temp_status.innerHTML = "<i class='fas fa-sun' style='color: yellow'></i>";
        }

        }
        catch{
            city_name.innerText = 'please enter correct city name';
            alert('Please Write Correct City Name');
        }
    }
}

submitBtn.addEventListener('click', getInfo);