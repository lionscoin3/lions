// Extract the 'ref' parameter from the URL
const urlParams = new URLSearchParams(window.location.search);
const referrerID = urlParams.get('start'); // Change 'ref' to 'start' to match your referral link

if (referrerID) {
    // Check if the referrer ID is already recorded
    const storedReferrerID = localStorage.getItem('referrerID');

    if (storedReferrerID !== referrerID) {
        // Store the new referrer ID and award points
        localStorage.setItem('referrerID', referrerID);

        // Prevent multiple rewards by setting a flag
        if (!localStorage.getItem('rewardGiven')) {
            alert("You've earned a referral reward!");
            localStorage.setItem('rewardGiven', 'true');

            // Optional: You could add code here to update points on your server or localStorage
        }
    }
}

// Redirect to the main page (home.html) after a 5-second delay
setTimeout(() => {
    window.location.href = 'home.html';
}, 5000); // 5 seconds delay
