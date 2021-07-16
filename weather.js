//Complete the Weather API Backend part using openweathermap api
const apiKey="8acb4731d7a197e41dc4d959f6714342";
var date = new Date();
var day = date.getDay();
var weekDay = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let getTemp = ()=>{
    let location=document.getElementById("input").value;
    const url=`http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;
    axios.get(url).then(res=>{
        document.querySelector('.city').innerHTML = res.data.name+","+res.data.sys.country;
        document.querySelector('.temp').innerHTML= res.data.main.temp+"  °c";
        document.querySelector('.weather').innerHTML= res.data.weather[0].main;
        document.querySelector('.high-low').innerHTML= res.data.main.temp_max+" °c / "+res.data.main.temp_min+" °c";
    });
    document.querySelector('.date').innerHTML = weekDay[day+1]+" "+date.getDate()+" "+month[date.getMonth()]+" "+date.getFullYear();
}