const day = document.getElementById('day');

const getCurrentDay = () => {

    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tueday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thusday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    let currentTime = new Date();
    let dy = weekday[currentTime.getDay()];
    let day = document.getElementById('day');
    
    day.innerText = dy;
};

getCurrentDay();


const today_date = document.getElementById('today_date');
var months = [
    "Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec",
];

var now = new Date();
var date = now.getDate();
var month = months[now.getMonth()];

today_date.innerText = `${date} ${month}`;