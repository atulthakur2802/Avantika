function checkPin() {
    const enteredPin = document.getElementById("pinInput").value;
    if (enteredPin === "9 4 2023") { // Replace with your actual PIN
        document.getElementById("pinOverlay").style.display = "none";
    } else {
        alert("Incorrect PIN. Please try again.");
    }
}
