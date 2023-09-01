let hours = document.getElementById("hours");
let minutes = document.getElementById("min");
let seconds = document.getElementById("sec");



setInterval(()=>{
    let currentDates = new Date();

    hours.innerHTML   = (currentDates.getHours()<10?"0" : "") + currentDates.getHours();
    minutes.innerHTML = (currentDates.getMinutes()<10?"0" : "") + currentDates.getMinutes();
    seconds.innerHTML = (currentDates.getSeconds()<10?"0" : "") + currentDates.getSeconds();
},1000);

