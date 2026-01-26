function showRegister() {
    document.getElementById("loginBox").classList.remove("active");
    document.getElementById("registerBox").classList.add("active");
}

function showLogin() {
    document.getElementById("registerBox").classList.remove("active");
    document.getElementById("loginBox").classList.add("active");
}

// ===== REGISTER =====
function register() {
    let user = document.getElementById("registerUser").value.trim();
    let pass = document.getElementById("registerPass").value.trim();
    let repass = document.getElementById("registerRePass").value.trim();

    if (!user || !pass || !repass) {
        alert("Vui lòng nhập đầy đủ thông tin");
        return;
    }

    if (pass !== repass) {
        alert("Mật khẩu không khớp");
        return;
    }

    let accounts = JSON.parse(localStorage.getItem("accounts")) || [];

    if (accounts.find(a => a.username === user)) {
        alert("Tài khoản đã tồn tại");
        return;
    }

    accounts.push({ username: user, password: pass });
    localStorage.setItem("accounts", JSON.stringify(accounts));

    alert("Đăng ký thành công!");
    showLogin();
}

// ===== LOGIN =====
function login() {
    let user = document.getElementById("loginUser").value.trim();
    let pass = document.getElementById("loginPass").value.trim();

    let accounts = JSON.parse(localStorage.getItem("accounts")) || [];

    let found = accounts.find(a => a.username === user && a.password === pass);

    if (found) {
        localStorage.setItem("login", "true");
        localStorage.setItem("user", user);
        alert("Đăng nhập thành công!");
        window.location.href = "index.html";
    } else {
        alert("Sai tài khoản hoặc mật khẩu");
    }
}