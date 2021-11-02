window.addEventListener("load",function(){
    displayData();
        //Adding event to logo button
        var home=document.getElementById("home").addEventListener("click",function(){ window.location.href="admin.html"; });
    
        //Adding Event to Header button
        var add_category=document.getElementById("add_category").addEventListener("click",function(){ window.location.href="Addcategory.html"; });
        var add_type=document.getElementById("add_type").addEventListener("click",function(){ window.location.href="Addtype.html"; });
        var add_subtype=document.getElementById("add_subtype").addEventListener("click",function(){ window.location.href="Addsubtype.html"; });
        var add_category=document.getElementById("add_category").addEventListener("click",function(){ window.location.href="Addcategory.html"; });
        var add_brand=document.getElementById("add_brand").addEventListener("click",function(){ window.location.href="Addbrand.html"; });
        var add_product=document.getElementById("add_product").addEventListener("click",function(){ window.location.href="Addproduct.html"; });
    
});

function displayData()
{
    var brand=JSON.parse(localStorage.getItem("brand"));
    var category=JSON.parse(localStorage.getItem("category"));
    var type=JSON.parse(localStorage.getItem("type"));
    var subtype=JSON.parse(localStorage.getItem("subtype"));
    var products=JSON.parse(localStorage.getItem("products"));
    var add=document.getElementById("add");
    if(brand!=null && category!=null && type!=null && subtype!=null && products!=null)
    {
     var limit=Math.max(brand.length,category.length,type.length,subtype.length,products.length);
    
    for(var i=0;i<limit;i++)
    {
        var tr=document.createElement("tr");
        //Showing Categories
        if(category[i]!=undefined && category[i].name!="")
        {
            var td1=document.createElement("td");
            td1.innerHTML=category[i].name;
            tr.append(td1);
        }

        //Showing type
        if(type[i]!=undefined && type[i].name!="")
        {
            var td2=document.createElement("td");
            td2.innerHTML=type[i].name;
            tr.append(td2);
        }

        //Showing Subtype
        if(subtype[i]!=undefined && subtype[i].name!="")
        {
            var td3=document.createElement("td");
            td3.innerHTML=subtype[i].name;
            tr.append(td3);
        }
        //Showing Brand 
        if(brand[i]!=undefined && brand[i].name!="")
        {
            var td4=document.createElement("td");
            td4.innerHTML=brand[i].name;
            tr.append(td4);
        }

         //Showing Products
         if(products[i]!=undefined && products[i].name!="")
         {
             var td5=document.createElement("td");
             td5.innerHTML=products[i].name;
             tr.append(td5);
         }

         //Showing Price of the product
         if(products[i]!=undefined && products[i].name!="")
         {
             var td6=document.createElement("td");
             td6.innerHTML="&#8377;"+products[i].price;
             tr.append(td6);
         }

        add.append(tr);
    }

}

}