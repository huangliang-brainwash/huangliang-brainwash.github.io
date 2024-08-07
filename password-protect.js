console.log("Password protection script loaded.");

(function() {
  var password = 'huangliang';
  var storedPassword = localStorage.getItem('page_password');

  if (storedPassword !== password) {
    var enteredPassword = prompt('请输入密码:');

    if (enteredPassword === password) {
      localStorage.setItem('page_password', password);
    } else {
      alert('密码错误，请重新输入。');
      window.location.href = '/'; // Redirect to home page or any other page
    }
  }
})();
