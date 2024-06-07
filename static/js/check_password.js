// 检查密码函数
function checkPassword() {
    const password = document.getElementById('password').value;
    const correctPassword = 'dafuzhuu'; // 替换为实际密码

    if (password === correctPassword) {
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('protected-content').style.display = 'block';
    } else {
        document.getElementById('error-message').innerText = 'Incorrect password. Please try again.';
    }
}

// 监听回车键
document.getElementById('password').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        checkPassword();
    }
});
