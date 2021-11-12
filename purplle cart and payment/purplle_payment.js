var paymentmode=document.querySelector("#changeMode")
var carttotal=JSON.parse(localStorage.getItem("cartTotal"))
console.log(carttotal)

paymentmode.addEventListener("click",function(){
    console.log(paymentmode.value)
    var paymentdata=document.querySelector("#paymentdata")
    var button=document.getElementById("paybutton");

     if(paymentmode.value=="card"){
          button.textContent="Pay"
          form=document.createElement("form");
         var carddiv=document.createElement("div");
         var cardlable=document.createElement("label")
         cardlable.textContent="CARD NUMBER."
         var cardNo =document.createElement("input");
         cardNo.setAttribute("placeholder","card Number")
         cardNo.setAttribute("type","number")
         cardNo.setAttribute("id","cardNo")

         var br=document.createElement("br");
         var br1=document.createElement("br");
         
         var expirylable=document.createElement("label")
         expirylable.textContent="EXPIRY DATE"
         var expiryday=document.createElement("input")
         expiryday.setAttribute("placeholder","month")
         expiryday.setAttribute("class","expiry")
         expiryday.setAttribute("type","number")
         expiryday.setAttribute("id","expiryday")
         var br2=document.createElement("br");
         var br3=document.createElement("br");
         var br4=document.createElement("br");

         var expirymonth=document.createElement("input")
         expirymonth.setAttribute("placeholder","year")
         expirymonth.setAttribute("class","expiry")
         expirymonth.setAttribute("type","number")
         expirymonth.setAttribute("id","expirymonth")
         var br5=document.createElement("br");
         
         var cvvlable=document.createElement("label")
         cvvlable.textContent="CVV"

         var cvv=document.createElement("input")
         cvv.setAttribute("placeholder","cvv")
         cvv.setAttribute("class","cvv")
         cvv.setAttribute("type","number")
         cvv.setAttribute("id","cvv")
      
         form.append(br,cardlable,br1,cardNo,br2,expirylable,br3,expiryday,expiryday,expirymonth,br4,cvvlable,br5,cvv)
      
         carddiv.append(form)
         
        paymentdata.innerHTML=carddiv.innerHTML;
    
        button.addEventListener("click",function(){
           var cardno=document.getElementById("cardNo").value
           var expiryday1=document.getElementById("expiryday").value
           var expirymonth=document.getElementById("expirymonth").value
           var cvvvalue=document.getElementById("cvv").value
         console.log(cvvvalue)
         if(cardno.length==0||expiryday1.length==0||expirymonth.length==0||cvvvalue.length==0){
            alert("Please fill all details");
         }else if(cardno.length!==16){alert("invalid card number")}
          else if(expiryday>31){alert("invalid date")}
          else if(cvvvalue.length!==3){alert("invalid cvv")}
         else{ alert("payment successful");}
      })

        
     }
     else if(paymentmode.value=="internet banking"){
        button.textContent="Proceed"
        var IBdiv=document.createElement("div");
        var msg=document.createElement("span")
        msg.textContent="Select the bank and and we will land you on bank website."
        msg.setAttribute("id","IBmsg")

        var bank=document.createElement("select");
    
        var op1=document.createElement("option")
        var op1content=document.createTextNode("--Select Bank--")
        op1.appendChild(op1content);
        op1.setAttribute("value","Select Bank")

        var op2=document.createElement("option")
        var op2content=document.createTextNode("Bank Of India")
        op2.appendChild(op2content);
        op2.setAttribute("value","Bank Of India")

        var op3=document.createElement("option")
        var op3content=document.createTextNode("Bank Of Baroda")
        op3.appendChild(op3content);
        op3.setAttribute("value","Bank Of Baroda")

        var op4=document.createElement("option")
        var op4content=document.createTextNode("Union Bank")
        op4.appendChild(op4content);
        op4.setAttribute("value","Union Bank")
  
        bank.append(op1,op2,op3,op4)
        var br=document.createElement("br")
        IBdiv.append(msg,br,bank)
        paymentdata.innerHTML=IBdiv.innerHTML;

           window.location.href="#"
           
     }
     else if(paymentmode.value=="cash on delivery"){
        paymentdata.innerHTML="this order is Eligible for COD"
        
        button.textContent="Proceed"
     }
})

var totalpayable=document.getElementById("finalPayAmount");
totalpayable.textContent=carttotal;

       
