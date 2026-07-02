// Password Input
const password = document.getElementById("password");

// Eye Icon
const togglePassword = document.getElementById("togglePassword");

// Strength Bar
const strengthBar = document.getElementById("strength-bar");

// Strength Text
const strengthText = document.getElementById("strength-text");

// Checklist
const lengthCheck = document.getElementById("length");
const upperCheck = document.getElementById("uppercase");
const lowerCheck = document.getElementById("lowercase");
const numberCheck = document.getElementById("number");
const specialCheck = document.getElementById("special");

// Copy Button
const copyBtn = document.getElementById("copyBtn");


// ===============================
// Show / Hide Password
// ===============================

togglePassword.addEventListener("click", function () {

    if (password.type === "password") {

        password.type = "text";

        togglePassword.innerHTML =
            '<i class="fa-solid fa-eye-slash"></i>';

    }

    else {

        password.type = "password";

        togglePassword.innerHTML =
            '<i class="fa-solid fa-eye"></i>';

    }

});


// ===============================
// Live Password Strength
// ===============================

password.addEventListener("keyup", function () {

    let value = password.value;

    let score = 0;


    // Length

    if (value.length >= 8) {

        score++;

        lengthCheck.innerHTML =
            "✅ Minimum 8 Characters";

        lengthCheck.className = "success";

    }

    else {

        lengthCheck.innerHTML =
            "❌ Minimum 8 Characters";

        lengthCheck.className = "error";

    }


    // Uppercase

    if (/[A-Z]/.test(value)) {

        score++;

        upperCheck.innerHTML =
            "✅ Uppercase Letter";

        upperCheck.className = "success";

    }

    else {

        upperCheck.innerHTML =
            "❌ Uppercase Letter";

        upperCheck.className = "error";

    }


    // Lowercase

    if (/[a-z]/.test(value)) {

        score++;

        lowerCheck.innerHTML =
            "✅ Lowercase Letter";

        lowerCheck.className = "success";

    }

    else {

        lowerCheck.innerHTML =
            "❌ Lowercase Letter";

        lowerCheck.className = "error";

    }


    // Number

    if (/[0-9]/.test(value)) {

        score++;

        numberCheck.innerHTML =
            "✅ Number";

        numberCheck.className = "success";

    }

    else {

        numberCheck.innerHTML =
            "❌ Number";

        numberCheck.className = "error";

    }


    // Special Character

    if (/[^A-Za-z0-9]/.test(value)) {

        score++;

        specialCheck.innerHTML =
            "✅ Special Character";

        specialCheck.className = "success";

    }

    else {

        specialCheck.innerHTML =
            "❌ Special Character";

        specialCheck.className = "error";

    }



    // ===========================
    // Strength Meter
    // ===========================

    if (score == 0) {

        strengthBar.style.width = "0%";

        strengthText.innerHTML = "Password Strength";

        strengthBar.style.background = "#555";

    }

    else if (score == 1) {

        strengthBar.style.width = "20%";

        strengthBar.style.background = "red";

        strengthText.innerHTML = "🔴 Weak";

    }

    else if (score == 2) {

        strengthBar.style.width = "40%";

        strengthBar.style.background = "orangered";

        strengthText.innerHTML = "🟠 Weak";

    }

    else if (score == 3) {

        strengthBar.style.width = "60%";

        strengthBar.style.background = "gold";

        strengthText.innerHTML = "🟡 Medium";

    }

    else if (score == 4) {

        strengthBar.style.width = "80%";

        strengthBar.style.background = "#66cc33";

        strengthText.innerHTML = "🟢 Strong";

    }

    else {

        strengthBar.style.width = "100%";

        strengthBar.style.background = "#00ff66";

        strengthText.innerHTML = "🟢 Very Strong";

    }

});



// ===============================
// Copy Password
// ===============================

if(copyBtn){

copyBtn.addEventListener("click", function () {

    let generatedPassword =
        document.getElementById("generatedPassword");

    generatedPassword.select();

    generatedPassword.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(generatedPassword.value);

    copyBtn.innerHTML =
        '<i class="fa-solid fa-check"></i> Copied';

    setTimeout(function(){

        copyBtn.innerHTML =
        '<i class="fa-solid fa-copy"></i> Copy';

    },2000);

});

}