document.getElementById("mobile-menu").addEventListener("click", function() {

    const navbar = document.getElementById("navbar").querySelector("ul");

    navbar.classList.toggle("active");

});
// Function to toggle the mobile menu
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show-menu');
}

// Save Profile Information to localStorage
document.getElementById('profileForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const profile = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        dob: document.getElementById('dob').value,
    };
    localStorage.setItem('profile', JSON.stringify(profile));
    alert('Profile Updated Successfully!');
});

// Load Profile Information on Page Load
function loadProfile() {
    const savedProfile = JSON.parse(localStorage.getItem('profile'));
    if (savedProfile) {
        document.getElementById('name').value = savedProfile.name;
        document.getElementById('email').value = savedProfile.email;
        document.getElementById('phone').value = savedProfile.phone;
        document.getElementById('dob').value = savedProfile.dob;
    }
}

// Add Contact to localStorage
function addContact() {
    const contact = {
        name: document.getElementById('contactName').value,
        address: document.getElementById('contactAddress').value,
        phone: document.getElementById('contactPhone').value,
        email: document.getElementById('contactEmail').value
    };
    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    contacts.push(contact);
    localStorage.setItem('contacts', JSON.stringify(contacts));
    renderContacts();
    alert('Contact Added Successfully!');
}

// Load and Render Contacts from localStorage
function renderContacts() {
    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    const tableBody = document.querySelector('#contactsTable tbody');
    tableBody.innerHTML = '';  // Clear table
    contacts.forEach((contact, index) => {
        const row = `<tr>
                        <td>${contact.name}</td>
                        <td>${contact.address}</td>
                        <td>${contact.phone}</td>
                        <td>${contact.email}</td>
                        <td><button onclick="deleteContact(${index})">Delete</button></td>
                    </tr>`;
        tableBody.innerHTML += row;
    });
}

// Delete Contact from localStorage
function deleteContact(index) {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    contacts.splice(index, 1);
    localStorage.setItem('contacts', JSON.stringify(contacts));
    renderContacts();
    alert('Contact Deleted Successfully!');
}

// Add Payment Method to localStorage
function addPayment() {
    const payment = {
        cardType: document.getElementById('cardType').value,
        cardNumber: document.getElementById('cardNumber').value,
        cardExpiration: document.getElementById('cardExpiration').value
    };
    const payments = JSON.parse(localStorage.getItem('payments')) || [];
    payments.push(payment);
    localStorage.setItem('payments', JSON.stringify(payments));
    renderPayments();
    alert('Payment Method Added Successfully!');
}

// Load and Render Payment Methods from localStorage
function renderPayments() {
    const payments = JSON.parse(localStorage.getItem('payments')) || [];
    const tableBody = document.querySelector('#paymentTable tbody');
    tableBody.innerHTML = '';  // Clear table
    payments.forEach((payment, index) => {
        const row = `<tr>
                        <td>${payment.cardType}</td>
                        <td>${payment.cardNumber}</td>
                        <td>${payment.cardExpiration}</td>
                        <td><button onclick="deletePayment(${index})">Delete</button></td>
                    </tr>`;
        tableBody.innerHTML += row;
    });
}

// Delete Payment Method from localStorage
function deletePayment(index) {
    const payments = JSON.parse(localStorage.getItem('payments'));
    payments.splice(index, 1);
    localStorage.setItem('payments', JSON.stringify(payments));
    renderPayments();
    alert('Payment Method Deleted Successfully!');
}

// Save Notification Preferences to localStorage
function savePreferences() {
    const preferences = {
        emailNotifications: document.getElementById('email-notifications').checked,
        smsNotifications: document.getElementById('sms-notifications').checked,
        pushNotifications: document.getElementById('push-notifications').checked
    };
    localStorage.setItem('preferences', JSON.stringify(preferences));
    alert('Preferences Saved Successfully!');
}

// Load Notification Preferences from localStorage
function loadPreferences() {
    const preferences = JSON.parse(localStorage.getItem('preferences'));
    if (preferences) {
        document.getElementById('email-notifications').checked = preferences.emailNotifications;
        document.getElementById('sms-notifications').checked = preferences.smsNotifications;
        document.getElementById('push-notifications').checked = preferences.pushNotifications;
    }
}

// Sign Out (Clear Data from localStorage)
function signOut() {
    localStorage.clear();
    alert('Signed Out Successfully!');
    window.location.reload();  // Reload to clear input fields
}

// Load Data on Page Load
window.onload = function() {
    loadProfile();
    renderContacts();
    renderPayments();
    loadPreferences();
}
