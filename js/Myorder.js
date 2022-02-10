window.addEventListener("load",function(){
   

    var home=document.getElementsByClassName("b2");
    home[0].addEventListener("click",function(){
       window.location.href="../index.html";
    });
    displayItem();
   

    // Adding functionality to cart button
    
       var products_data=JSON.parse(localStorage.getItem("products"));
       var user_data=JSON.parse(localStorage.getItem("user"));
       var currentUser_data=JSON.parse(localStorage.getItem("currentUser"));   
   
       var cart_btn=document.getElementsByClassName("cart_btn");
       var wish_btn=document.getElementsByClassName("wish_btn");

   
   });
   
   function displayItem()
   {
       var user_data=JSON.parse(localStorage.getItem("user"));
       var currentUser_data= localStorage.getItem("currentUser");
    
       if(currentUser_data==null || currentUser_data=="")
       {
           alert("please login first");
           window.location.href="../pages/Signin.html";
       }
       currentUser_data=JSON.parse(currentUser_data);
       
       var show=document.getElementById("show");
       show.innerHTML="";
       if(user_data!=null)
       {
           for(var i=0;i<user_data.length;i++)
           {
               if(user_data[i].email==currentUser_data.email)
               {
                  
                   if(user_data[i].order!=null && user_data[i].order.length!=0)
                   {
                       var h3=document.createElement("h3");
                       h3.innerHTML="My Orders";
                       var div1=document.createElement("div");
                       div1.setAttribute("class","content");
   
                       for(var j=0;j<user_data[i].order.length;j++)
                       {
                           var div2=document.createElement("div");
                           div2.style.overflow="hidden";
                           div2.setAttribute("class","card");
   
                           ///////////////////////////////////////////////
   
                           var div2_1=document.createElement("div");
                           div2_1.setAttribute("id","icons");
                           div2_1.style.display="none";
   
                           var div2_1_1=document.createElement("div");
                           div2_1_1.setAttribute("class","cart_btn");
                           div2_1_1.setAttribute("value",j);
                           var i1=document.createElement("i");
                           i1.setAttribute("class","fas fa-shopping-cart");
                           var i2=document.createElement("i");
                           i2.setAttribute("class","far fa-trash-alt");
                           var div2_1_2=document.createElement("div");
                           div2_1_2.setAttribute("class","wish_btn");
                           div2_1_2.setAttribute("value",j);
                           div2_1_1.append(i1);
                           div2_1_2.append(i2);
                           div2_1.append(div2_1_1,div2_1_2);
                       
                           div2.append(div2_1);
               
   
                           ///////////////////////////////////////////////
   
                           var img=document.createElement("img");
                           img.style.position="absolute";
                           img.setAttribute("src",user_data[i].order[j].image_url_1);
   
                           var div2_2=document.createElement("div");
                           div2_2.setAttribute("id","details");
                           var p1=document.createElement("p");
                           p1.innerHTML=user_data[i].order[j].name.substring(0,20)+" ...";
                           var p2=document.createElement("p");
                           p2.innerHTML="&#8377; "+user_data[i].order[j].price;
                           div2_2.append(p1,p2);
                           div2.append(img,div2_2);
                           div1.append(div2);
                       }
                       show.append(h3,div1);
                   }
                   else
                   {
                       alert("You have not ordered anything");
                       window.location.href="../index.html";
                   }
                   break;
               }
           }
       }
       else
       {
           alert("No user exist with this email");
           window.location.href="../index.html";
       }
      
   
   }
   