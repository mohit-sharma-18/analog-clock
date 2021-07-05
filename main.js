
const hourHand = document.querySelector('.hourHand');
const minuteHand = document.querySelector('.minuteHand');
const secondHand = document.querySelector('.secondHand');

function myTime(e) {
    const now = new Date();
    const timeHour = now.getHours();
    const timeMinute = now.getMinutes();
    const timeSecond = now.getSeconds();
    const hourDegrees = ((timeHour / 12) * 360) + 270;
    const minuteDegrees = ((timeMinute / 60) * 360) + 270;
    const secondDegrees = ((timeSecond / 60) * 360) + 270;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
}

setInterval(myTime, 1000);