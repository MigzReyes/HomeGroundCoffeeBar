console.log("signup.js loaded");

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM ready");

    const form = document.getElementById("signupForm");
    if (!form) {
        console.log("Form not found!");
        return;
    }

    form.addEventListener("submit", async function(event) {
        event.preventDefault();
        console.log("Form submit detected");

        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        console.log("Ready to fetch signup API");
    });
});