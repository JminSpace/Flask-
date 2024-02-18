var usernameInput = document.getElementById('username');
var passwordInput = document.getElementById('password');
var loginButton = document.getElementById('loginButton');
var message = document.getElementById('message');

loginButton.addEventListener('click', function() {
  var username = usernameInput.value;
  var password = passwordInput.value;

  if (username === 'admin' && password === 'password') {
    message.textContent = '로그인 성공!';
    message.style.color = 'green';
  } else {
    message.textContent = '아이디 또는 비밀번호가 올바르지 않습니다.';
    message.style.color = 'red';
  }
});
