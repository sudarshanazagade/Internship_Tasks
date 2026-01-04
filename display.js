let user = JSON.parse(localStorage.getItem("userData"));

if (!user) {
    window.location.href = "login.html";
}

// Prefill user data
document.getElementById("name").value = user.name;
document.getElementById("age").value = user.age;
document.getElementById("phone").value = user.phone;
document.getElementById("email").value = user.email;
document.getElementById("address").value = user.address;
document.getElementById("pincode").value = user.pincode;

// Update profile data
function updateProfile() {
    user.name = document.getElementById("name").value;
    user.age = document.getElementById("age").value;
    user.phone = document.getElementById("phone").value;
    user.email = document.getElementById("email").value;
    user.address = document.getElementById("address").value;
    user.pincode = document.getElementById("pincode").value;

    localStorage.setItem("userData", JSON.stringify(user));
    alert("Profile updated successfully");
}

// Password popup open/close
function openPasswordPopup() {
    document.getElementById("passwordPopup").style.display = "block";
}

function closePasswordPopup() {
    document.getElementById("passwordPopup").style.display = "none";
}

// Change password logic
function changePassword() {
    let newPass = document.getElementById("newPass").value;
    let rePass = document.getElementById("rePass").value;
    let checked = document.getElementById("confirmCheck").checked;

    if (newPass === "" || rePass === "") {
        alert("Password fields cannot be empty");
        return;
    }

    if (newPass !== rePass) {
        alert("Passwords do not match");
        return;
    }

    if (!checked) {
        alert("Please confirm checkbox");
        return;
    }

    user.password = newPass;
    localStorage.setItem("userData", JSON.stringify(user));

    alert("Password changed successfully");
    closePasswordPopup();
}

// Logout (IMPORTANT FIX)
function logout() {
    // Do NOT clear userData
    localStorage.removeItem("loginPrefill");
    window.location.href = "login.html";
}
