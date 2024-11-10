// Show the welcome message from right to left
const welcomeMessage = document.getElementById("welcome-message");
let messageText = welcomeMessage.textContent;
let index = 0;
welcomeMessage.textContent = "";

// Display the text with animation
function typeMessage() {
    if (index < messageText.length) {
        welcomeMessage.textContent += messageText[index];
        index++;
        setTimeout(typeMessage, 100); // Speed of typing
    }
}

typeMessage();

// Simulating visitor count (this can be dynamically generated from server-side logic)
let visitorCount = 0;
const visitorCountElement = document.getElementById("visitor-count");

setInterval(() => {
    visitorCount++;
    visitorCountElement.textContent = visitorCount;
}, 5000); // Increase count every 5 seconds (for demo purposes)
