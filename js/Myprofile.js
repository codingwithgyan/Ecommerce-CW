window.addEventListener("load",function(){
    var currentUser= localStorage.getItem("currentUser");
    
            if(currentUser==null || currentUser=="")
            {
                alert("please login first");
                window.location.href="../pages/Signin.html";
            }
            currentUser=JSON.parse(currentUser);


var username = document.getElementById("username");
username.textContent = currentUser.currentuser;

document.getElementById("myprofile").addEventListener("click", function () {


  var personalInfo = document.createElement("div");
  personalInfo.setAttribute("id", "personalInfo");

  var tital = document.createElement("h2");
  tital.textContent = "Personal Information";
  tital.setAttribute("id","tital")

  var namelable = document.createElement("lable");
  namelable.textContent = "First Name :";

  var username = document.createElement("input");
  username.defaultValue = currentUser.currentuser;

  var lastnamelable = document.createElement("lable");
  lastnamelable.textContent = "Last Name :";

  var lastname = document.createElement("input");

  var br = document.createElement("br");

  var mobilelable = document.createElement("lable");
  mobilelable.textContent = "Mobile No :";

  var mobile = document.createElement("input");

  var emaillable = document.createElement("lable");
  emaillable.textContent = "Email Id :";

  var Email = document.createElement("input");
  Email.defaultValue = currentUser.email;

  var br2 = document.createElement("br");

  var button = document.createElement("button");
  button.textContent="Update Information"
  personalInfo.append(
    tital,
    namelable,
    username,
    lastnamelable,
    lastname,
    br,
    mobilelable,
    mobile,
    emaillable,
    Email,
    br2,
    button
  );

  var userdata = document.getElementById("userdata");

  userdata.innerHTML = personalInfo.innerHTML;
});

document.getElementById("myorders").addEventListener("click",function(){
      ///direct to the cart page
});

document.getElementById("wishlist").addEventListener("click",function(){
      //direct to the wishlist page
});

document.getElementById("payment").addEventListener("click",function(){

    var paymentInfo = document.createElement("div");
  paymentInfo.setAttribute("id", "personalInfo");

  var tital = document.createElement("h2");
  tital.textContent = "Save Debit Card Details";
  tital.setAttribute("id","tital")

  var namelable = document.createElement("lable");
  namelable.textContent = "Name On Card :";

  var username = document.createElement("input");

  var lastnamelable = document.createElement("lable");
  lastnamelable.textContent = "Card No :";

  var lastname = document.createElement("input");

  var br = document.createElement("br");

  var mobilelable = document.createElement("lable");
  mobilelable.textContent = "Expiry Date :";

  var mobile = document.createElement("input");

  var emaillable = document.createElement("lable");
  emaillable.textContent = "Cvv :";

  var Email = document.createElement("input");
  
  var br2 = document.createElement("br");

  var button = document.createElement("button");
  button.textContent="Save Information"
  paymentInfo.append(
    tital,
    namelable,
    username,
    lastnamelable,
    lastname,
    br,
    mobilelable,
    mobile,
    emaillable,
    Email,
    br2,
    button
  );

  var userdata = document.getElementById("userdata");

  userdata.innerHTML = paymentInfo.innerHTML;
});

document.getElementById("review").addEventListener("click",function(){
       var reviewinfo=document.createElement("div");

       var tital = document.createElement("h2");
        tital.textContent = "Always happy to hear from you.";
        tital.setAttribute("id","tital")
       var lable=document.createElement("lable");
       lable.textContent="Email Id :"

       var emailinput=document.createElement("input");
       emailinput.setAttribute("placeholder","Enter your email id")

       var br=document.createElement("br");
       
       var textbox=document.createElement("textarea");
       textbox.setAttribute("id","textbox")
       textbox.setAttribute("placeholder","Enter your review here")
       textbox.setAttribute("rows",5)
       textbox.setAttribute("cols",100)
        
       var br2=document.createElement("br")
       var button=document.createElement("button")
       button.textContent="Submit"

       reviewinfo.append(tital,lable,emailinput,emailinput,br,textbox,br,button)

       userdata.innerHTML=reviewinfo.innerHTML;


});

});