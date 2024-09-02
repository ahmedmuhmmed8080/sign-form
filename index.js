const userName = document.getElementById("userName");
const logIn = document.getElementById("logIn");

logIn.onclick = function (event) {
    event.preventDefault();  // Prevent form submission.
    let hiUser = userName.value;  // Get the updated value of the input
    alert(`Hello ${hiUser}`);
};
