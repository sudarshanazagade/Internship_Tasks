document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let user = {
        name: document.getElementById("name").value,
        age: document.getElementById("age").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        address: document.getElementById("address").value,
        pincode: document.getElementById("pincode").value,
        password: document.getElementById("password").value
    };
    localStorage.setItem("userData", JSON.stringify(user));
    localStorage.setItem(
        "loginPrefill",
        JSON.stringify({ email: user.email, phone: user.phone })
    );

    document.getElementById("msg").innerText =
        "Registration successful! Redirecting to login...";

    setTimeout(() => {
        window.location.href = "login.html";
    }, 1500);
});
