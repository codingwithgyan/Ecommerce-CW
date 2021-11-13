window.addEventListener("load",function(){
    var btn=document.getElementById("btn");
    btn.addEventListener("click",function(){
        var data=JSON.parse(localStorage.getItem("brand"));
        var obj={};
        if(data==null)
        {
            data=[];
            obj.brand_id=1;
        }
      
        obj.brand_id=+data[data.length-1].brand_id;
        obj.brand_id+=1;

        var name=document.getElementById("name").value;
        var logo_img=document.getElementById("logo_img").value;
        var description=document.getElementById("description").value;

        obj.name=name;
        obj.logo_img=logo_img;
        obj.description=description;
        data.push(obj);
        localStorage.setItem("brand",JSON.stringify(data));
        alert("Brand added sucessfully");
        
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