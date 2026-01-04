// Auto-fill login field
let prefill = JSON.parse(localStorage.getItem("loginPrefill"));
if (prefill) {
    document.getElementById("loginId").value = prefill.email || prefill.phone;
}

document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let loginId = document.getElementById("loginId").value;
    let password = document.getElementById("loginPassword").value;
    let error = document.getElementById("error");

    let user = JSON.parse(localStorage.getItem("userData"));

    if (!user) {
        error.innerText = "No user registered.";
        return;
    }

    if (
        (loginId === user.email || loginId === user.phone) &&
        password === user.password
    ) {
        window.location.href = "display.html";
    } else {
        error.innerText = "Invalid email/phone or password.";
    }
});
