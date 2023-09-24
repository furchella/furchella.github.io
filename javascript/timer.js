// Set the target date for the countdown (provided timestamp: 1692388800)
const targetDate = 1696015800000; // Convert UNIX timestamp to milliseconds

// Update the countdown every second
const countdownInterval = setInterval(function() {
const now = new Date().getTime();
const distance = targetDate - now;

const _second = 1000;
const _minute = _second * 60;
const _hour = _minute * 60;
const _day = _hour *24;

// Calculate days, hours, minutes, and seconds
const days = Math.floor(distance / _day);
const hours = Math.floor((distance % _day) / _hour);
const minutes = Math.floor((distance % _hour) / _minute);
const seconds = Math.floor((distance % _minute) / _second);
// const milliseconds = distance % _second;

// Display the countdown
const countdownElement = document.getElementById("countdown");
countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

// If the countdown is over, display a message
if (distance < 0) {
    clearInterval(countdownInterval);
    countdownElement.innerHTML = "Welcome to Furchella!";
}
}, 1000);