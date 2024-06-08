const inputUsername = document.querySelector("idk1");
const inputPassword = document.querySelector("idk12");
const btnLogin = document.querySelector("idk3");

btnLogin.addEventListener("click" , (e) =>{
e.preventDefault();
if (inputUsername.value === "" || inputPassword.value === "") {
    alert("Vui lòng không để trống")
} else {
    const user = JSON.parse(localStorage.getItem(inputUsername.value));
    if (
        user.username === inputUsername.value &&
        user.password === inputPassword.value
    ) {
        alert("Đăng nhập thành công");
        window.location.href="trangchu.html";
    } else{
        alert("Đăng nhập thất bại");
    }
}
})
