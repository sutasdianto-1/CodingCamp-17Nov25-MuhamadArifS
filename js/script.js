// Show modal when page loads
window.onload = function () {
    document.getElementById("nameModal").classList.remove("hidden");

    // Detect ENTER key inside the input
    document.getElementById("usernameInput").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            submitName();
        }
    });
};

// Handle submit name
function submitName() {
    let userName = document.getElementById("usernameInput").value.trim();

    if (userName === "") {
        userName = "Guest";
    }

    // Update hero welcome text
    document.getElementById("welcome-speech").innerText =
        "Welcome to Diplomasi Kopi, " + userName + "!";

    // Hide modal
    document.getElementById("nameModal").classList.add("hidden");
}