<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Animated Login Form</title>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

body {
    height: 100vh;
    background: linear-gradient(135deg, #667eea, #764ba2);
    display: flex;
    align-items: center;
    justify-content: center;
}

.login-box {
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(12px);
    padding: 40px;
    width: 350px;
    border-radius: 15px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.3);
    animation: fadeIn 1s ease;
}

.login-box h2 {
    text-align: center;
    color: #fff;
    margin-bottom: 30px;
}

.input-box {
    position: relative;
    margin-bottom: 25px;
}

.input-box input {
    width: 100%;
    padding: 10px;
    background: transparent;
    border: none;
    border-bottom: 2px solid #fff;
    outline: none;
    color: #fff;
    font-size: 16px;
}

.input-box label {
    position: absolute;
    top: 50%;
    left: 0;
    color: #fff;
    font-size: 14px;
    pointer-events: none;
    transform: translateY(-50%);
    transition: 0.3s;
}

.input-box input:focus ~ label,
.input-box input:valid ~ label {
    top: -5px;
    font-size: 12px;
    color: #ffd86b;
}

button {
    width: 100%;
    padding: 12px;
    background: linear-gradient(135deg, #ffd86b, #fc6262);
    border: none;
    border-radius: 25px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.3s, box-shadow 0.3s;
}

button:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.3);
}

.extra {
    text-align: center;
    margin-top: 15px;
    color: #fff;
    font-size: 14px;
}

.extra a {
    color: #ffd86b;
    text-decoration: none;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
</head>

<body>

<div class="login-box">
    <h2>Login</h2>
    <form>
        <div class="input-box">
            <input type="text" required>
            <label>Username</label>
        </div>

        <div class="input-box">
            <input type="password" required>
            <label>Password</label>
        </div>

        <button type="submit">Sign In</button>

        <div class="extra">
            <p>Don't have an account? <a href="#">Sign up</a></p>
        </div>
    </form>
</div>

</body>
</html>
