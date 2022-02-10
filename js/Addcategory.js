window.addEventListener("load",function(){
    var btn=document.getElementById("btn");
    btn.addEventListener("click",function(){
        //Adding category to local storage
        var data=JSON.parse(localStorage.getItem("category"));
        var category=document.querySelector("input").value;
        var obj={};
        if(data==null)
        {
            data=[];
            obj.category_id=1;
            
        }
        else
        {
            obj.category_id=+data[data.length-1].category_id;
            obj.category_id+=1;
        }
 
        obj.name=category;
        data.push(obj);
        localStorage.setItem("category",JSON.stringify(data));
        alert("Category added sucessfully");
        
    });

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