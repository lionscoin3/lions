document.addEventListener("DOMContentLoaded", () => {
    const taskItems = document.querySelectorAll(".task-item");
    const userName = localStorage.getItem("username") || "Anonymous User";

    taskItems.forEach((taskItem) => {
        const claimButton = taskItem.querySelector(".claim-button");
        const taskId = taskItem.getAttribute("data-task-id");

        const isClaimed = localStorage.getItem(`claimed_${taskId}`) === "true";
        if (isClaimed) {
            taskItem.style.display = "none";
            return;
        }

        claimButton.style.display = "none";

        taskItem.addEventListener("click", () => {
            const url = taskItem.getAttribute("data-url");
            window.open(url, "_blank");
            claimButton.style.display = "block";
        });

        claimButton.addEventListener("click", (event) => {
            event.stopPropagation();

            taskItem.style.display = "none";
            localStorage.setItem(`claimed_${taskId}`, "true");

            addPointsToBalance(500); // 500 points as intended
        });
    });

    // Modified function for balance update
    function addPointsToBalance(points) {
        let balance = parseInt(localStorage.getItem("balance")) || 100;
        balance += points;
        localStorage.setItem("balance", balance);

        // Check if the opener (index page) is available
        if (window.opener && !window.opener.closed) {
            const balanceElement = window.opener.document.querySelector(".balance p");
            if (balanceElement) balanceElement.innerText = balance;
        }
    }
});
