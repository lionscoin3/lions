// Initialize balance from localStorage or set to 2150
let balance = parseInt(localStorage.getItem('balance')) || 2150;

// Display balance
document.addEventListener("DOMContentLoaded", () => {
    const balanceElement = document.querySelector(".balance p");
    balanceElement.innerText = balance; // Initial display from localStorage

    // Update balance from localStorage
    balance = parseInt(localStorage.getItem('balance')) || 2150; // Get updated balance
    balanceElement.innerText = balance; // Update displayed balance

    // Select all follow buttons
    const followButtons = document.querySelectorAll(".follow-btn");

    followButtons.forEach((button, index) => {
        const actionType = button.innerText.toLowerCase(); // e.g., "follow", "subscribe", "join"
        const storageKey = `task${index + 1}_${actionType}`;
        const taskBox = button.closest(".task-box"); // Get the task box
        const taskUrl = taskBox.getAttribute("data-url"); // Get the URL from data-url attribute

        // Check status from localStorage
        const isCompleted = localStorage.getItem(storageKey) === 'true';
        if (isCompleted) {
            button.innerText = capitalize(actionType) + "ed";
            button.classList.add("completed");
            button.style.backgroundColor = "#666";
        }

        button.addEventListener("click", () => {
            if (!button.classList.contains("completed")) {
                // Update button text and style
                button.innerText = capitalize(actionType) + "ed";
                button.classList.add("completed");
                button.style.backgroundColor = "#666";

                // Store status in localStorage
                localStorage.setItem(storageKey, 'true');
                
                // Add 500 coins to the balance
                balance += 500;
                balanceElement.innerText = balance;

                // Store updated balance in localStorage
                localStorage.setItem('balance', balance);

                // Open the task URL in a new tab
                window.open(taskUrl, '_blank');
            }
        });
    });
});

// Helper function to capitalize the first letter
function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}
