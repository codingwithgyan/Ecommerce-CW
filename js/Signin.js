window.addEventListener("load",function(){
  
    var btn=document.getElementById("button");
    btn.addEventListener("click",function(){
        signin();
    });
});

var validUsers = JSON.parse(localStorage.getItem("user"));

function signin() {
  // console.log("function")
  var email = document.querySelector("#username").value;
  var pass = document.querySelector("#pass").value;

  if (email == "admin@gmail.com" && pass == "12345") {
    window.location.href = "../pages/Admin.html";
  } 
  else 
  {
    var currentUser={};
    for (var i = 0; i < validUsers.length; i++) 
    {
      if (validUsers[i].email == email && validUsers[i].password == pass) 
      {
         currentUser.email=validUsers[i].email;
         var notalert = true;
      }
    }
    if (notalert) 
    {
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
      alert("login succesfull");
      window.location.href="../index.html";
    } 
    else 
    {
      alert("enter valid credentials");
    }
  }
}
