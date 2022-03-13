const date = document.querySelector("#date");
const clock = document.querySelector("#clock");

const monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function getDateInfo() {
    const dateInfo = new Date();
    
    const year = dateInfo.getFullYear();
    const month = monthList[dateInfo.getMonth()];
    const day = dateInfo.getDate();
    date.innerText = `${month} ${day}, ${year}`;

    const hours = String(dateInfo.getHours()).padStart(2, "0");
    const minutes = String(dateInfo.getMinutes()).padStart(2, "0");
    const seconds = String(dateInfo.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getDateInfo();
setInterval(getDateInfo, 1000);