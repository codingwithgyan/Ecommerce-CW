window.addEventListener("load",function(){
    var index=+localStorage.getItem("currentProduct");
    var products_data=JSON.parse(localStorage.getItem("products"));
    
    var pro_name=document.getElementById("pro_name");
    var pro_price=document.getElementById("pro_price");
    var pro_desc=document.getElementById("pro_desc");
    pro_name.innerHTML=products_data[index].name;
    var price=+products_data[index].price;
    var offer=+products_data[index].offer;
    var save=(offer/100)*price;
    price=price-save;
    pro_price.innerHTML="&#8377;"+price+"&nbsp;&nbsp;<s>MRP."+products_data[index].price+" </s>"+"&nbsp;&nbsp;<span> save &#8377;"+save+"("+offer+"%)</span>";
    pro_desc.innerHTML=products_data[index].description;

    var pro_img1=document.getElementById("pro_img1");
    var pro_img2=document.getElementById("pro_img2");
    var pro_img3=document.getElementById("pro_img3");
    var pro_img4=document.getElementById("pro_img4");

    pro_img1.setAttribute("src",products_data[index].image_url_1);
    pro_img2.setAttribute("src",products_data[index].image_url_2);
    pro_img3.setAttribute("src",products_data[index].image_url_3);
    pro_img4.setAttribute("src",products_data[index].image_url_1);


    pro_img1.addEventListener("click",function(){
        var img=this.getAttribute("src");
        pro_img4.setAttribute("src",img);
    });
    pro_img2.addEventListener("click",function(){
        var img=this.getAttribute("src");
        pro_img4.setAttribute("src",img);
    });
    pro_img3.addEventListener("click",function(){
        var img=this.getAttribute("src");
        pro_img4.setAttribute("src",img);
    });

    var cart_btn=document.getElementById("cart_btn");
    var wish_btn=document.getElementById("wish_btn");
    var user_data=JSON.parse(localStorage.getItem("user"));
    cart_btn.addEventListener("click",function(){
        var currentUser_data= localStorage.getItem("currentUser");
    
            if(currentUser_data==null || currentUser_data=="")
            {
                alert("please login first");
                window.location.href="../pages/Signin.html";
            }
            currentUser_data=JSON.parse(currentUser_data);

        var obj=products_data[index];
        for(var j=0;j<user_data.length;j++)
        {
            if(user_data[j].email==currentUser_data.email)
            {
                if(user_data[j].cart==null)
                {
                    user_data[j].cart=[];
                   
                }
               
                    user_data[j].cart.push(obj);
                    localStorage.setItem("user",JSON.stringify(user_data));
                    alert("Added to cart");
            }
        }
         
     });

     wish_btn.addEventListener("click",function(){
        var currentUser_data= localStorage.getItem("currentUser");
    
            if(currentUser_data==null || currentUser_data=="")
            {
                alert("please login first");
                window.location.href="../pages/Signin.html";
            }
            currentUser_data=JSON.parse(currentUser_data);
        var obj=products_data[index];
        for(var j=0;j<user_data.length;j++)
        {
            if(user_data[j].email==currentUser_data.email)
            {
                if(user_data[j].wishlist==null)
                {
                    user_data[j].wishlist=[];
                   
                }
               
                    user_data[j].wishlist.push(obj);
                    localStorage.setItem("user",JSON.stringify(user_data));
                    alert("Added to wishlist");
            }
        }
         
     });
});