
const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth();
const currentDate = new Date().getDate();

console.log(currentMonth);
setInterval(() => {
    getRemainingMonth();
    getRemainingDays();
    getRemainingMinutes();
    getRemainingSeconds();
    getRemainingHours();
}, 1000);
function getRemainingMonth() {
    let monthRemaining = document.getElementById("months");
    monthRemaining.innerText = 12 - (currentMonth + 1);
}

function getRemainingDays() {
    let result = 365;
    let febMonth = 28;
    if (new Date().getFullYear() % 4 == 0) {
        febMonth = 29;
    }
    for (let i = 1; i <= (currentMonth); i++) {
        debugger
        if (i % 2 == 0) {

            if (i == 2) {
                result -= febMonth;
            } else {
                result -= 30;
            }
        } else {
            result -= 31;
        }
    }
    result -= new Date().getUTCDate();
    let daysRemaining = document.getElementById("days");
    daysRemaining.innerText = result;
}

function getRemainingHours() {
    let hoursRemaining = document.getElementById("hours");
    hoursRemaining.innerText = 23 - new Date().getHours();

}

function getRemainingMinutes() {
    let minutesRemaining = document.getElementById("minutes");
    minutesRemaining.innerText = (60 - new Date().getMinutes() - 1);
}
function getRemainingSeconds() {
    let minutesRemaining = document.getElementById("seconds");
    minutesRemaining.innerText = (60 - new Date().getSeconds());
}