function validate() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("psw").value;
  
  if (password.length < 6 || password.length > 15) {
    alert("Please enter a password of 6 - 15 character");
    return false;
  }

  let atPos = email.indexOf("@");
  let dotPos = email.lastIndexOf(".");
  console.log(email, atPos, dotPos);
  if (
    dotPos <= 0 ||
    atPos <= 0 ||
    dotPos - atPos < 4 ||
    dotPos === email.length - 1
  ) {
    alert("Please enter a valid email");
    return false;
  }
}
