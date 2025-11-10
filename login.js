
//login
let form = document.getElementById("login-form");
form.addEventListener("submit",function(ev){
    ev.preventDefault();

const uemail = document.getElementById("login-email").value;
const upassword = document.getElementById("login-password").value;

const userlogin = {
    isLoggedIn: true,
    email: uemail,
    password:upassword,
    username: uemail.split("@")[0],
}
 localStorage.setItem("userl", JSON.stringify(userlogin));

 window.location.href("index.html");

});

//pour telech les info de usr

const infouser=JSON.parse(localStorage.getItem("userl"));
if(infouser && infouser.isLoggedIn === true)
{

}
