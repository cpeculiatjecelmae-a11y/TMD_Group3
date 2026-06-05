function handleLogin() {
    const btn = document.getElementById('login-btn');
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    if (user.trim() !== "" && pass.trim() !== "") {
        // Change button state
        btn.innerText = "Authenticating...";
        btn.style.opacity = "0.7";
        btn.disabled = true;

        // Simulate a short network delay
        setTimeout(() => {
            document.getElementById('login-screen').style.display = 'none';
            document.getElementById('dashboard').classList.remove('dashboard-hidden');
            window.scrollTo(0, 0);
        }, 800);
        
    } else {
        alert("Please enter both username and password.");
    }
}

function handleLogout() {
    if(confirm("Are you sure you want to logout?")) {
        location.reload();
    }
}

// Allow "Enter" key to trigger login
document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        handleLogin();
    }
});