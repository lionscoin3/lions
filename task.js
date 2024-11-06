document.addEventListener("DOMContentLoaded", () => {
    const taskItems = document.querySelectorAll(".task-item");

    taskItems.forEach((taskItem) => {
        const claimButton = taskItem.querySelector(".claim-button");
        const taskId = taskItem.getAttribute("data-task-id");

        // Define points for each task
        const taskPoints = taskId === "task1" ? 5000 : 500; // Set 5000 points for task1

        // Check if this task has already been claimed
        const isClaimed = localStorage.getItem(`claimed_${taskId}`) === "true";
        if (isClaimed) {
            taskItem.style.display = "none";
            return;
        }

        claimButton.style.display = "none";

        // Task item click listener
        taskItem.addEventListener("click", () => {
            const url = taskItem.getAttribute("data-url");
            window.open(url, "_blank");
            claimButton.style.display = "block";
        });

        // Claim button click handler
        claimButton.addEventListener("click", (event) => {
            event.stopPropagation(); // Prevent task item click

            taskItem.style.display = "none";
            localStorage.setItem(`claimed_${taskId}`, "true");

            // Add points to balance for task completion
            addPointsToBalance(taskPoints);
        });
    });

    // Function to update balance
    function addPointsToBalance(points) {
        let balance = parseInt(localStorage.getItem("balance")) || 100;
        balance += points;
        localStorage.setItem("balance", balance);

        // Update balance on the index page
        const balanceElement = window.opener ? window.opener.document.querySelector(".balance p") : null;
        if (balanceElement) balanceElement.innerText = balance;
    }
});
