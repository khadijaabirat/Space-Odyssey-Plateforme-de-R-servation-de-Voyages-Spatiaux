//pour telech les info de usr
window.addEventListener("DOMContentLoaded",function(){

const infouser=JSON.parse(localStorage.getItem("userl"));
const btnl= document.querySelectorAll(".btnlogin");
if(infouser && infouser.isLoggedIn === true)
{ 
    
let nom = document.getElementById('nomhome');
let p=document.createElement("p");
p.textContent=infouser.username;
nom.appendChild(p);

btnl.forEach((btn)=>{
btn.textContent="logout";
btn.href="#";

btn.addEventListener("click",function(e){
e.preventDefault();
localStorage.removeItem("userl");
window.location.href="login.html";
});
})

}
}
);

