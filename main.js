let emailRegX =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let emailInput = document.getElementById('email');
let errorMsg = document.getElementById('errorMsg');

function emailChecker() {
  if (emailInput.value.match(emailRegX)) {
    errorMsg.style.display = 'none';
  } else {
    errorMsg.style.display = 'block';
  }
}