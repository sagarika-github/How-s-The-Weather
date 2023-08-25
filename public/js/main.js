const submitBtn=document.getElementById('submitBtn');
const cityName=document.getElementById('cityName');
const city_name=document.getElementById('city_name');
const temp=document.getElementById('temp');
const temp_status=document.getElementById('temp_status');

const getInfo=async(event)=>{
    event.preventDefault();
    let cityVal = cityName.value;

    if(cityVal== ""){
        city_name.innerText="Enter City Name Before You Search";
    }
    else{
        try{
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=d7f7be9d8c96267161c233d76c80a0e4`;
            const response=await fetch(url);
            const data=await response.json();
            const arrData=[data];

            city_name.innerText=`${arrData[0].name}, ${arrData[0].sys.country}`;
            temp.innerText=`${arrData[0].main.temp}°C`;
            temp_status.innerText=arrData[0].weather[0].main;

            const weatherMode=arrData[0].weather[0].main;

            if(weatherMode=="Clear"){
                temp_status.innerHTML="<i class='fas fa-sun' style='color:#eccc68'></i>"
            }
            else if(weatherMode=="Clouds"){
                temp_status.innerHTML="<i class='fas fa-cloud' style='color:#f1f2f6'></i>"
            }
            else if(weatherMode=="Rain"){
                temp_status.innerHTML="<i class='fas fa-cloud-rain' style='color:#f1f2f6'></i>"
            }
            // else if(weatherMode=="Haze"){
            //     temp_status.innerHTML="<i class='fa-solid fa-corn' style='color:#f1f2f6'></i>"
            // }
        }catch{
            city_name.innerText="Please Enter Correct City Name";
        }
        
    }

}

submitBtn.addEventListener('click',getInfo);