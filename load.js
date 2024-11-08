// loading.js
setTimeout(() => {
    window.location.href = 'home.html'; // Redirect to the main page after 5 seconds
}, 5000); // 5 seconds delay

// Extract the 'ref' parameter from the URL
const urlParams = new URLSearchParams(window.location.search);
const referrerID = urlParams.get('ref');

if (referrerID) {
    // Store the referrer ID in local storage
    localStorage.setItem('referrerID', referrerID);

    // Optional: Check if the prize was already awarded to avoid duplicates
    const prizeAwarded = localStorage.getItem('prizeAwarded');
    if (!prizeAwarded) {
        alert("You've earned a referral reward!"); // Trigger the prize award
        localStorage.setItem('prizeAwarded', 'true');
    }
}
