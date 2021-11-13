window.addEventListener("load",function(){
    var cat=document.getElementById("cat");
    var category_data=JSON.parse(localStorage.getItem("category"));
    if(category_data!=null)
    {
    for(var i=0;i<category_data.length;i++)
    {
        var opt=document.createElement("option");
        opt.innerHTML=category_data[i].name;
        opt.setAttribute("value",category_data[i].category_id);
        cat.append(opt);
    }

    var btn=document.getElementById("btn");
    btn.addEventListener("click",function(){
        var type=document.getElementById("type").value;
        var obj={};
        
        var type_data=JSON.parse(localStorage.getItem("type"));
        if(type_data==null)
        {
            type_data=[];
            obj.category_id=1;
            obj.type_id=1;
        }
        else
        {
            obj.type_id=+type_data[type_data.length-1].type_id;
            obj.type_id+=1;
        }
        
        obj.category_id=cat.value;
        
        obj.name=type;

        type_data.push(obj);
        localStorage.setItem("type",JSON.stringify(type_data));
        alert("Type added sucessfully");

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
    } 
    else
    {
        alert("Add Category First");
    }
});    