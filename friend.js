// Step 1: Automatically generate and store a unique user ID in localStorage if it doesn't already exist
(function generateUserID() {
    if (!localStorage.getItem('userID')) {
        const uniqueID = 'user_' + Math.floor(Math.random() * 1000000); // Generate unique ID
        localStorage.setItem('userID', uniqueID);
    }
})();

// Step 2: Function to invite a friend and generate the referral link
function inviteFriend() {
    // Retrieve the user's unique ID from localStorage
    const referralID = localStorage.getItem("userID");

    // Generate the Telegram bot referral link with the user ID
    const botLink = `https://shorturl.at/5YyIh?start=${referralID}`;

    // Open the Telegram share dialog with the referral bot link
    const telegramLink = `https://t.me/share/url?url=${encodeURIComponent(botLink)}`;
    window.open(telegramLink, '_blank');
}

// Step 3: Function to update the UI based on the number of invited friends
function updateUI() {
    const friendCountElement = document.getElementById("friendCount");
    const friendListElement = document.getElementById("friendList");

    // Retrieve the list of friends invited (simulated with localStorage for now)
    const friendsInvited = JSON.parse(localStorage.getItem("friendsInvited") || "[]");

    // Update the friend count text
    friendCountElement.innerText = `${friendsInvited.length} friend${friendsInvited.length !== 1 ? 's' : ''}`;

    // Clear and update friend list
    friendListElement.innerHTML = '';
    friendsInvited.forEach(friend => {
        const friendItem = document.createElement("div");
        friendItem.classList.add("friend-item");

        const friendName = document.createElement("p");
        friendName.classList.add("user-name");
        friendName.innerText = friend;

        const lionsReward = document.createElement("p");
        lionsReward.classList.add("lions-count");
        lionsReward.innerText = "+359 LIONS";

        friendItem.appendChild(friendName);
        friendItem.appendChild(lionsReward);
        friendListElement.appendChild(friendItem);
    });
}

// Step 4: Function to add a new friend to the list (called from the referral logic on the loading page)
function addFriend(referrerID) {
    let friendsInvited = JSON.parse(localStorage.getItem("friendsInvited") || "[]");

    // Ensure the friend is not already added
    if (!friendsInvited.includes(referrerID)) {
        friendsInvited.push(referrerID);
        localStorage.setItem("friendsInvited", JSON.stringify(friendsInvited));
        updateUI(); // Update the UI to reflect the new friend
    }
}

// Initialize the UI on page load
document.addEventListener("DOMContentLoaded", () => {
    updateUI();
    document.getElementById("inviteButton").addEventListener("click", inviteFriend);
});
