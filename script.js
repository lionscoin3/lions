// Initialize balance from localStorage or set to 2150
let balance = parseInt(localStorage.getItem('balance')) || 2150;

// Display balance
document.addEventListener("DOMContentLoaded", () => {
    const balanceElement = document.querySelector(".balance p");
    balanceElement.innerText = balance; // Initial display from localStorage

    // Update balance from localStorage
    balance = parseInt(localStorage.getItem('balance')) || 2150; // Get updated balance
    balanceElement.innerText = balance; // Update displayed balance

    // Select all task boxes
    const taskBoxes = document.querySelectorAll(".task-box");

    taskBoxes.forEach((taskBox, index) => {
        const actionType = taskBox.querySelector(".follow-btn").innerText.toLowerCase(); // e.g., "follow", "subscribe", "join"
        const storageKey = `task${index + 1}_${actionType}`;
        const taskUrl = taskBox.getAttribute("data-url"); // Get the URL from data-url attribute
        const button = taskBox.querySelector(".follow-btn"); // Get the button inside the box

        // Check status from localStorage
        const isCompleted = localStorage.getItem(storageKey) === 'true';
        if (isCompleted) {
            button.innerText = capitalize(actionType) + "ed";
            button.classList.add("completed");
            button.style.backgroundColor = "#666";
        }

        // Make the entire task box clickable
        taskBox.addEventListener("click", (e) => {
            // If the button has already been marked as completed, just redirect
            if (!button.classList.contains("completed")) {
                // Update button text and style
                button.innerText = capitalize(actionType) + "ed";
                button.classList.add("completed");
                button.style.backgroundColor = "#666";

                // Add 500 coins to the balance
                balance += 500;
                balanceElement.innerText = balance;

                // Store updated balance in localStorage
                localStorage.setItem('balance', balance);

                // Store task completion status in localStorage
                localStorage.setItem(storageKey, 'true');
            }

            // Open the task URL in a new tab
            window.open(taskUrl, '_blank'); // Redirect to the link
        });

        // Prevent the button click from triggering the box click event
        button.addEventListener("click", (e) => {
            e.stopPropagation(); // Prevent the task box click event from being triggered
        });
    });
});

// Notification handling
document.addEventListener("DOMContentLoaded", () => {
    // Get the notification and close button
    const notification = document.getElementById("notification");
    const closeBtn = document.getElementById("closeBtn");

    // Function to show the notification (only the first time)
    function showNotification() {
        // Check if the message has already been shown
        const isNotificationShown = localStorage.getItem("notificationShown");

        // If it hasn't been shown before, display the notification
        if (!isNotificationShown) {
            notification.classList.add("show");

            // After showing the notification, set the flag in localStorage
            localStorage.setItem("notificationShown", "true");
        }
    }

    // Close the notification when the cross button is clicked
    closeBtn.addEventListener("click", () => {
        notification.classList.remove("show");
    });

    // Show the notification when the page loads (but only the first time)
    showNotification();
});

// Helper function to capitalize the first letter
function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}
