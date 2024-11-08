// Your unique referral ID or username
const referralID = "YOUR_USER_ID"; // Replace with actual user ID or unique referral code

// Function to invite a friend and generate the referral link
function inviteFriend() {
    // Generate the referral link
    const referralLink = `https://lionscoin3.github.io/lions/?ref=${referralID}`;

    
    // Open the Telegram share dialog with the referral link
    const telegramLink = `https://t.me/share/url?url=${encodeURIComponent(referralLink)}`;
    window.open(telegramLink, '_blank');
}

// Function to update the UI based on the number of invited friends
function updateUI() {
    const friendCountElement = document.getElementById("friendCount");
    const friendListElement = document.getElementById("friendList");

    // Simulate tracking invited friends (You can replace this with actual data)
    const friendsInvited = ["Friend 1", "Friend 2"]; // Example list

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
