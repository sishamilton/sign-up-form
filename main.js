const togglePWVis = (pwElementId) => {
  return () => {
    let pwElement = document.getElementById(pwElementId);
    if (pwElement.type === 'password') {
      pwElement.type = 'text';
    } else {
      pwElement.type = 'password';
    }
  }
}

document.getElementById("show_pw")
  .addEventListener('click', togglePWVis("password"));
document.getElementById("show_confirm")
  .addEventListener('click', togglePWVis("confirm_password"));