
//login



let form = document.getElementById("login-form");
form.addEventListener("submit",function(e){
    e.preventDefault();

const uemail = document.getElementById("login-email").value;
const upassword = document.getElementById("login-password").value;

const emailm="abiratkhadija@gmail.com";
const passwordm="khadija";

if(uemail===emailm && upassword===passwordm ){
const userlogin = {
    isLoggedIn: true,
    email: uemail,
    password:upassword,
    username: uemail.split("@")[0],
}
 localStorage.setItem("userl", JSON.stringify(userlogin));
 window.location.href="index.html";

}
else{
    alert("email ou la mot de passe est incorect");
}

});

