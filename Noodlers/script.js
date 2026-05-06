// Simple login simulation
function handleLogin() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    if (user.trim() !== "" && pass.trim() !== "") {
        // Hide login, show site
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('dashboard').classList.remove('dashboard-hidden');
        
        // Optional: Scroll to top
        window.scrollTo(0, 0);
    } else {
        alert("Please enter both username and password.");
    }
}

// Simple logout simulation
function handleLogout() {
    location.reload();
}

// Allow "Enter" key to trigger login
document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        handleLogin();
    }
});