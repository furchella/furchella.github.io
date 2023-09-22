// Set the target date for the countdown (provided timestamp: 1692388800)
const targetDate = 1696015800000; // Convert UNIX timestamp to milliseconds

// Update the countdown every second
const countdownInterval = setInterval(function() {
const now = new Date().getTime();
const distance = targetDate - now;

// Calculate days, hours, minutes, and seconds
const days = Math.floor(distance / (1000 * 60 * 60 * 24));
const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((distance % (1000 * 60)) / 1000);

// Display the countdown
const countdownElement = document.getElementById("countdown");
countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

// If the countdown is over, display a message
if (distance < 0) {
    clearInterval(countdownInterval);
    countdownElement.innerHTML = "Countdown is over!";
}
}, 1000);