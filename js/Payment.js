window.addEventListener("load",function(){
    var currentUser_data= localStorage.getItem("currentUser");
    
    if(currentUser_data==null || currentUser_data=="")
    {
        alert("please login first");
        window.location.href="../pages/Signin.html";
    }
    currentUser_data=JSON.parse(currentUser_data);

    var paymentmode=document.querySelector("#changeMode")
var carttotal=JSON.parse(localStorage.getItem("cartTotal"))
fn();
paymentmode.addEventListener("change",function(){
  fn();
  
})

var totalpayable=document.getElementById("finalPayAmount");
totalpayable.textContent=carttotal;
});

function fn()
{
    
    var paymentmode=document.querySelector("#changeMode")
    var carttotal=JSON.parse(localStorage.getItem("cartTotal"))
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
           var expirymonth=document.getElementById("expiryday").value
           var expiryyear=document.getElementById("expirymonth").value
           var cvvvalue=document.getElementById("cvv").value
         var status=false;
         if(cardno.length==0||expirymonth.length==0||expiryyear.length==0||cvvvalue.length==0)
         {
            alert("Please fill all details");
         }
         if(cardno.length!=12){
             alert("invalid card number");
             status=true;
            }
         if(expirymonth<1 || expirymonth>12){
             alert("invalid date");
             status=true;   
            }
         if(expiryyear<2000 || expiryyear>2050){
             alert("Either your card has expired or not valid");
             status=true;
            }
         if(cvvvalue.length!==3){
             alert("invalid cvv");
             status=true;
            }
         if(status==false)
         { 
            
            var user_data=JSON.parse(localStorage.getItem("user"));
            var currentUser= localStorage.getItem("currentUser");
    
            if(currentUser==null || currentUser=="")
            {
                alert("please login first");
                window.location.href="../pages/Signin.html";
            }
            currentUser=JSON.parse(currentUser);

            if(user_data!=null)
            {
                for(var i=0;i<user_data.length;i++)
                {
                    if(user_data[i].email==currentUser.email)
                    {
                        if(user_data[i].cart!=null && user_data[i].cart.length!=0)
                        {
                            for(var j=0;j<user_data[i].cart.length;j++)
                            {
                                user_data[i].order.push(user_data[i].cart[j]);
                                
                            }
                            user_data[i].cart=[];
                            localStorage.setItem("user",JSON.stringify(user_data));
                            localStorage.setItem("cartTotal","0");
                            alert("Order Complete");
                            window.location.href="../pages/Myorder.html";
                            break;
                        }
                        else
                        {
                            // ----------------order complete here-------------------
                            alert("Please add item to cart");
                            window.location.href="../index.html";
                        }
                       
                    }
                }
               
            }
            else
            {
                alert("Login First");
                window.location.href="../index.html";
            }
            
         }
      });

        
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
}
