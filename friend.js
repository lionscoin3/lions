// Function to invite a friend and generate the referral link
function inviteFriend() {
    // Retrieve the user's unique ID (make sure this is stored in localStorage beforehand)
    const referralID = localStorage.getItem("userID") || "default_user_id"; // Fallback if ID isn't available

    // Generate the Telegram bot referral link with the user ID
    const botLink = `https://t.me/lions_coins3_bot?start=${referralID}`;

    // Open the Telegram share dialog with the referral bot link
    const telegramLink = `https://t.me/share/url?url=${encodeURIComponent(botLink)}`;
    window.open(telegramLink, '_blank');
}

// Function to update the UI based on the number of invited friends
function updateUI() {
    const friendCountElement = document.getElementById("friendCount");
    const friendListElement = document.getElementById("friendList");

    // Simulated list of invited friends (you can replace this with actual data if available)
    const friendsInvited = ["Friend 1", "Friend 2"];

    // Update the friend count text
    friendCountElement.innerText = `${friendsInvited.length} friend${friendsInvited.length > 1 ? 's' : ''}`;

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
