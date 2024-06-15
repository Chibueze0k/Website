// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');

    // Simulated user data (for demo purposes)
    const userData = {
        name: '',
        accountNumber: '1234567890',
        balance: 500000
    };

    // Banks dropdown data (for demo purposes, replace with actual data)
    const banksInNigeria = [
        'Access Bank',
        'Zenith Bank',
        'First Bank of Nigeria',
        'Guaranty Trust Bank (GTBank)',
        'United Bank for Africa (UBA)',
        // Add more banks as needed
    ];

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Simulated password (for demo purposes)
        const password = 'asdfghjkl';

        // Retrieve password value
        const enteredPassword = document.getElementById('password').value;

        // Check if password is correct
        if (enteredPassword === password) {
            // Password is correct, show user interface
            errorMessage.textContent = ''; // Clear any previous error messages

            // Retrieve user's name
            const userName = prompt('Please enter your name (to be displayed as account name):');
            if (userName) {
                userData.name = userName;
            }

            // Show user interface with details and actions
            showUserInterface();
        } else {
            // Password is incorrect, show error message
            errorMessage.textContent = 'Incorrect password. Please try again.';
        }

        // Clear input field
        document.getElementById('password').value = '';
    });

    function showUserInterface() {
        const loginContainer = document.querySelector('.login-container');
        loginContainer.style.display = 'none'; // Hide login container

        // Create elements for user interface
        const userInterface = document.createElement('div');
        userInterface.classList.add('user-interface');
        userInterface.innerHTML = `
            <h2>Welcome, ${userData.name}!</h2>
            <p>Account Number: ${userData.accountNumber}</p>
            <p>Balance: N${userData.balance}</p>
            <button id="add-balance-btn">Add Balance</button>
            <button id="transfer-history-btn">Transfer History</button>
            <button id="transfer-btn">Transfer</button>
        `;
        document.body.appendChild(userInterface);

        // Event listeners for actions
        const addBalanceBtn = document.getElementById('add-balance-btn');
        addBalanceBtn.addEventListener('click', function() {
            const amount = parseFloat(prompt('Enter amount to add:'));
            if (!isNaN(amount) && amount > 0) {
                userData.balance += amount;
                alert(`N${amount} added to your account. New balance: N${userData.balance}`);
            } else {
                alert('Invalid amount. Please enter a valid number.');
            }
        });

        const transferHistoryBtn = document.getElementById('transfer-history-btn');
        transferHistoryBtn.addEventListener('click', function() {
            alert('Display transfer history (not implemented in this demo).');
        });

        const transferBtn = document.getElementById('transfer-btn');
        transferBtn.addEventListener('click', function() {
            showTransferForm();
        });
    }

    function showTransferForm() {
        const transferForm = document.createElement('div');
        transferForm.classList.add('transfer-form');
        transferForm.innerHTML = `
            <h3>Transfer Details</h3>
            <label for="bank-name">Bank Name:</label>
            <select id="bank-name">
                ${banksInNigeria.map(bank => `<option value="${bank}">${bank}</option>`).join('')}
            </select><br><br>
            <label for="account-number">Account Number:</label>
            <input type="text" id="account-number"><br><br>
            <label for="account-name">Account Name:</label>
            <input type="text" id="account-name"><br><br>
            <label for="amount">Amount:</label>
            <input type="number" id="amount"><br><br>
            <button id="submit-transfer-btn">Transfer</button>
        `;
        document.body.appendChild(transferForm);

        const submitTransferBtn = document.getElementById('submit-transfer-btn');
        submitTransferBtn.addEventListener('click', function() {
            const bankName = document.getElementById('bank-name').value;
            const accountNumber = document.getElementById('account-number').value;
            const accountName = document.getElementById('account-name').value;
            const amount = parseFloat(document.getElementById('amount').value);

            // Simulated validation (replace with actual logic)
            if (bankName && accountNumber && accountName && !isNaN(amount) && amount > 0) {
                alert(`Transfer of N${amount} to ${accountName} (${bankName}, Account: ${accountNumber}) initiated.`);
                // Simulated deduction from balance (replace with actual logic)
                userData.balance -= amount;
                // Simulated transfer history update (not implemented in this demo)
                document.body.removeChild(transferForm); // Remove transfer form after transfer
            } else {
                alert('Please fill in all fields with valid information.');
            }
        });
    }
}
