window.addEventListener("load",function(){
    var cat=document.getElementById("cat");
   
    var category_data=JSON.parse(localStorage.getItem("category"));

    var type=document.getElementById("type");
    var type_data=JSON.parse(localStorage.getItem("type"));

    if(category_data!=null && type_data!=null)
    {
       
        //Adding category data to options
    for(var i=0;i<category_data.length;i++)
    {
        var opt=document.createElement("option");
        opt.innerHTML=category_data[i].name;
        opt.setAttribute("value",category_data[i].category_id);
        cat.append(opt);
    }
//Adding type data to options
    for(var i=0;i<type_data.length;i++)
    {
        
        if(type_data[i].category_id=="1")
        {
            var opt=document.createElement("option");
            opt.innerHTML=type_data[i].name;
            opt.setAttribute("value",type_data[i].type_id);
            type.append(opt);
        }
    }

    cat.addEventListener("change",function(){
        type.innerHTML="";
        for(var i=0;i<type_data.length;i++)
        {
            if(type_data[i].category_id==cat.value)
            {
                var opt=document.createElement("option");
                opt.innerHTML=type_data[i].name;
                opt.setAttribute("value",type_data[i].type_id);
                type.append(opt);
            }
        }
    });


    var btn=document.getElementById("btn");
    btn.addEventListener("click",function(){
        var subtype=document.getElementById("subtype").value;
        var obj={};
        
        var subtype_data=JSON.parse(localStorage.getItem("subtype"));
        if(subtype_data==null)
        {
            subtype_data=[];
            obj.category_id=1;
            obj.type_id=1;
            obj.subtype_id=1;
        }
        else
        {
            obj.subtype_id=+subtype_data[subtype_data.length-1].subtype_id;
            obj.subtype_id+=1;
        }
        
        obj.category_id=cat.value;
        obj.type_id=type.value;

       
        obj.name=subtype;

        subtype_data.push(obj);
        localStorage.setItem("subtype",JSON.stringify(subtype_data));
        alert("SubType added sucessfully");

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
});    