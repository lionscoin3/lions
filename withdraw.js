document.addEventListener("DOMContentLoaded", () => {
    const connectButton = document.getElementById('connectButton');
    const statusDiv = document.getElementById('status');

    // Check if TON Keeper is installed
    if (window.ton && window.ton.connect) {
        connectButton.addEventListener('click', async () => {
            try {
                // Connect to TON Keeper
                const account = await window.ton.connect();
                console.log('Connected to TON Keeper:', account);

                // Update the status div to show user information
                statusDiv.innerHTML = `Connected: ${account.address}`;

                // You can now interact with the TON blockchain using the account
                // For example: send transactions, query the blockchain, etc.
            } catch (error) {
                console.error('Error connecting to TON Keeper:', error);
                statusDiv.innerHTML = 'Failed to connect to TON Keeper.';
            }
        });
    } else {
        statusDiv.innerHTML = 'TON Keeper is not installed. Please install it to connect.';
        connectButton.disabled = true; // Disable the button if TON Keeper is not installed
    }
});
