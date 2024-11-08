// Redirect to the main page (home.html) after a 5-second delay
setTimeout(() => {
    window.location.href = 'home.html';
}, 5000); // 5 seconds delay

// Extract the 'ref' parameter from the URL
const urlParams = new URLSearchParams(window.location.search);
const referrerID = urlParams.get('ref');

if (referrerID) {
    // Check if the referrer ID is new to avoid duplicate storage or alerts
    const storedReferrerID = localStorage.getItem('referrerID');

    if (storedReferrerID !== referrerID) {
        // Store the new referrer ID
        localStorage.setItem('referrerID', referrerID);

        // Award prize once (using a flag to prevent multiple alerts)
        const prizeAwarded = localStorage.getItem('prizeAwarded');
        if (!prizeAwarded) {
            alert("You've earned a referral reward!"); // Display the prize alert
            localStorage.setItem('prizeAwarded', 'true'); // Flag that prize has been awarded
        }
    }
}
