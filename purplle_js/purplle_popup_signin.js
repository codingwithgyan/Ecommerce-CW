document.querySelector("#button").addEventListener("click", signin);

var validUsers = JSON.parse(localStorage.getItem("user"));

function signin() {
  // console.log("function")
  var username = document.querySelector("#username").value;
  var pass = document.querySelector("#pass").value;

  if (username == "admin" && pass == "admin") {
    window.location.href = "admin.html";
  } else {
    for (var i = 0; i < validUsers.length; i++) {
      if (
        validUsers[i].username == username &&
        validUsers[i].password == pass
      ) {
        currentUser = {
          currentuser: validUsers[i].username,
          email: validUsers[i].email,
        };
        var notalert = true;
      }
    }
    if (notalert) {
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
      alert("login succesfull");

      //direct to the location of home page
    } else {
      alert("enter valid credentials");
    }
  }
}
// console.log(loggedIn)



  //the wcript below will disable popup box if clicked any were in the window
  var modal = document.getElementById("id01");

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };