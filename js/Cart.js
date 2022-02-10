window.addEventListener("load",function(){
    var currentUser= localStorage.getItem("currentUser");
    
    if(currentUser==null || currentUser=="")
    {
        alert("please login first");
        window.location.href="../pages/Signin.html";
    }
    currentUser =JSON.parse(currentUser);
var user_data=JSON.parse(localStorage.getItem("user"));

for(var i=0;i<user_data.length;i++)
{
    if(currentUser.email==user_data[i].email)
    {
        displaycart(user_data[i].cart);
       
        break;
    }
    
}

var b2=document.getElementsByClassName("b2");
    b2[0].style.cursor="pointer";
    b2[0].addEventListener("click",function(){
        window.location.href="../index.html";
    });

});
var totalCost=0;
var savings=0;  
function displaycart(cartitems){
    if(cartitems!=null && cartitems.length!=0)
    {
        cartitems.map(function(item){
            var main=document.createElement("div")
            main.setAttribute("id","main")
           var cart= document.querySelector(".cart");
           cart.append(main)
           var imgDiv=document.createElement("div");
           imgDiv.setAttribute("id","imgDiv")
           var img=document.createElement("img");
           img.setAttribute("src",item.image_url_1);
           imgDiv.append(img)
           main.append(imgDiv)
           
           var details=document.createElement("div");
           details.setAttribute("id","details");
           main.append(details)
           var h3=document.createElement("h3");
           h3.setAttribute("id","productName");
           h3.textContent=item.name;
    
           var p=document.createElement("p");
           p.setAttribute("id","price")
           p.textContent =	(item.price);
    
           var qty=document.createElement("select");
        
          var op1=document.createElement("option")
          var op1content=document.createTextNode("1")
          op1.appendChild(op1content);
          op1.setAttribute("value",1)
          var op2=document.createElement("option")
          var op2content=document.createTextNode("2")
          op2.appendChild(op2content);
          op2.setAttribute("value",2)
    
          qty.append(op1,op2)
           
          
           var lable=document.createElement("label")
           lable.textContent="Quantity"
           lable.setAttribute("id","lable")
           details.append(h3,p,lable,qty)
        //    for the total cost
            totalCost=(+totalCost)+(+item.price);
            var price=+item.price;
            var offer=+item.offer;
            savings+=((offer/100)*price);
             

        });
        
        addFeautres();
    }
    else
    {
        alert("Please add items to cart");
        window.location.href="../index.html";
    }
    
       
}

function addFeautres()
{
    //to check the pincode delivery availablity    
   var checkpin=document.getElementById("checkpin");
   checkpin.addEventListener("click",function(){
      var pincode=document.getElementById("pincode").value
      if(pincode.length==0){
          var msg=document.getElementById("pinmsg")
          msg.textContent="Enter Pin Please"
          msg.style.color="red"  
      }

      else{
       var msg=document.getElementById("pinmsg")
       msg.textContent="This pincode is serviceable for COD and prepaid"
       msg.style.color="green"
      }
   });

   ///below code is for billing and calculating total 
   
      
       var savingsOnMRP=document.querySelector("#savingOnMRP")
       savingsOnMRP.textContent=savings

       var total=document.querySelector(".total")
       var TotalMRP=document.querySelector("#TotalMRP")
       TotalMRP.innerHTML= totalCost

       var subtotal=document.querySelector("#subtotal");
       subtotal.textContent=(totalCost-savings)
   
       var shoppingcharges=document.querySelector("#shoppingcharges");
       shoppingcharges.textContent= 49;
   
       var ordertotal=document.querySelector("#Ordertotal");
      
       ordertotal.textContent=(+subtotal.textContent)+(+shoppingcharges.textContent);
   
       var yousave=document.querySelector("#yousave");
       yousave.textContent=savings;

       localStorage.setItem("cartTotal",JSON.stringify(ordertotal.textContent));

       var checkpromo=document.getElementById("checkpromo");
       
   checkpromo.addEventListener("click",function(){
       var promocode=document.getElementById("promocode").value
       
       if(promocode=="DISCOUNT30"){
            savings= 0.15*totalCost;
           
            savingsOnMRP.textContent=savings
            subtotal.textContent=(totalCost-savings)
            yousave.textContent=savings;
            ordertotal.textContent=(+subtotal.textContent)+(+shoppingcharges.textContent);
            localStorage.setItem("cartTotal",JSON.stringify(ordertotal.textContent));
       }
       else if(promocode=="WELCOME"){
           savings=0.05*totalCost;
       
           savingsOnMRP.textContent=savings
           subtotal.textContent=(totalCost-savings)
           yousave.textContent=savings;
           ordertotal.textContent=(+subtotal.textContent)+(+shoppingcharges.textContent);
           localStorage.setItem("cartTotal",JSON.stringify(ordertotal.textContent));
       }
   });
   
   var placeorder=document.querySelector("#placeorderbutton");
   placeorder.addEventListener("click",function(){
       window.location.href="../pages/Payment.html"
   });
}
 