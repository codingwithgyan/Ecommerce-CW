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


}