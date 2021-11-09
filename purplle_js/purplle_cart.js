var cartitems=JSON.parse(localStorage.getItem("cartItems"))
console.log(cartitems)
var totalCost=0;
displaycart(cartitems)
  
function displaycart(cartitems){
    cartitems.map(function(item){
        var main=document.createElement("div")
        main.setAttribute("id","main")
       var cart= document.querySelector(".cart");
       var hr=document.createElement("hr")
       cart.append(main,hr)
       var imgDiv=document.createElement("div");
       imgDiv.setAttribute("id","imgDiv")
       var img=document.createElement("img");
       img.setAttribute("src",item.img_url)
       imgDiv.append(img)
       main.append(imgDiv)
       
       var details=document.createElement("div");
       details.setAttribute("id","details");
       main.append(details)
       var h1=document.createElement("h3");
       h1.setAttribute("id","productName");
       h1.textContent=item.name;

       var p=document.createElement("p");
       p.setAttribute("id","price")
       p.textContent =	(item.price);
       

       details.append(h1,p)

    //    for the total cost
    
        totalCost=(+totalCost)+(+item.price);
        
    }) 


    var total=document.querySelector(".total")
    var cost=document.createElement("h1")
       cost.textContent=" Cart Total-"+ "  "+totalCost;
       total.append(cost)

        var promocode=document.createElement("input")
        promocode.setAttribute("placeholder","Enter Promocode")
        var br=document.createElement("br")
        total.append(promocode)

       var button=document.createElement("button");
       button.textContent="Apply promo"
       total.append(button)
    
       button.addEventListener("click",function(){
        applyPromo(totalCost)
       })
       function applyPromo(totalCost){
           if(promocode.value=="get30%off"){
            console.log(promocode.value)
              totalCost=totalCost*0.7
              console.log(totalCost)
              cost.textContent="Cart Total-"+"  "+ totalCost;
            alert("promo code applied")
           }
              
            
            localStorage.setItem("totalPayable",JSON.stringify(totalCost))

       }
       
       localStorage.setItem("totalPayable",JSON.stringify(totalCost))
       var paybutton=document.createElement("button")
       paybutton.textContent="CheckOut"
       paybutton.setAttribute("id","paybutton")
       total.append(paybutton)
     paybutton.addEventListener("click",function(){
         window.location.href="#"
        //  give the location of payment page
     })
      

}
