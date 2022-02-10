window.addEventListener("load",function(){
    var btn=document.querySelector("button");
btn.addEventListener("click",signup);
 var userData=JSON.parse(localStorage.getItem("user"))||[]
function signup(){
  console.log("here")
    var emailid=document.getElementById("email").value
    var pass=document.getElementById("pass").value
    var username=document.getElementById("username").value
    var mobile=document.getElementById("mobile").value
    var gender=document.getElementById("gender").value

    var userCredentials={
        email:emailid,
        password:pass,
        username:username,
        mobile:mobile,
        Gender:gender,
        cart:[],wishlist:[],order:[]
    }
  /*if any of the input feild is kept empty by the user then the 
  code below will restrict addition of data to local storage*/
    if(emailid==false ||pass==false||username==false || mobile==false){

     alert("Please fill all the details")
    }
    else{
      userData.push(userCredentials);
        localStorage.setItem("user",JSON.stringify(userData));
        alert("signup sussesfull");
        window.location.href="../pages/Signin.html"
    }
        
}
});