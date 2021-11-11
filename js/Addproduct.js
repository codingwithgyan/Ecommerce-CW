window.addEventListener("load",function(){
    var cat=document.getElementById("category");
   
    var category_data=JSON.parse(localStorage.getItem("category"));

    var type=document.getElementById("type");
    var type_data=JSON.parse(localStorage.getItem("type"));

    var subtype=document.getElementById("subtype");
    var subtype_data=JSON.parse(localStorage.getItem("subtype"));

    var brand=document.getElementById("brand");
    var brand_data=JSON.parse(localStorage.getItem("brand"));

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

//Adding subtype data to options
for(var i=0;i<subtype_data.length;i++)
{
    
    if(subtype_data[i].category_id=="1")
    {
        var opt=document.createElement("option");
        opt.innerHTML=subtype_data[i].name;
        opt.setAttribute("value",subtype_data[i].subtype_id);
        subtype.append(opt);
    }
}

//Adding brand data to options
for(var i=0;i<brand_data.length;i++)
{
        var opt=document.createElement("option");
        opt.innerHTML=brand_data[i].name;
        opt.setAttribute("value",brand_data[i].name);
        brand.append(opt);
    
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

        subtype.innerHTML="";
        for(var i=0;i<subtype_data.length;i++)
        {
            if(subtype_data[i].type_id==type.value)
            {
                var opt=document.createElement("option");
                opt.innerHTML=subtype_data[i].name;
                opt.setAttribute("value",subtype_data[i].subtype_id);
                subtype.append(opt);
            }
        }
        
    });

    type.addEventListener("change",function(){
        subtype.innerHTML="";
        for(var i=0;i<subtype_data.length;i++)
        {
            if(subtype_data[i].type_id==type.value)
            {
                var opt=document.createElement("option");
                opt.innerHTML=subtype_data[i].name;
                opt.setAttribute("value",subtype_data[i].subtype_id);
                subtype.append(opt);
            }
        }
    });


    var btn=document.getElementById("btn");
    btn.addEventListener("click",function(){
        var cat=document.getElementById("category");
        var type=document.getElementById("type");
        var subtype=document.getElementById("subtype");
        var brand=document.getElementById("brand");
        var name=document.getElementById("name");
        var offer=document.getElementById("offer");
        var price=document.getElementById("price");
        var image_url_1=document.getElementById("image_url_1");
        var image_url_2=document.getElementById("image_url_2");
        var image_url_3=document.getElementById("image_url_3");
        var description=document.getElementById("description");

        var obj={};
        
        var products_data=JSON.parse(localStorage.getItem("products"));
        if(products_data==null)
        {
            products_data=[];
        }
        else
        {
            obj.subtype_id=+subtype_data[subtype_data.length-1].subtype_id;
            obj.subtype_id+=1;
        }

        //Storing in a object
        for(var i=0;i<category_data.length;i++)
        {
            if(cat.value==category_data[i].category_id)
            {
                obj.category=category_data[i].name;
                break;
            }
        }

        for(var i=0;i<type_data.length;i++)
        {
            if(type.value==type_data[i].type_id)
            {
                obj.type=type_data[i].name;
                break;
            }
        }
        
        for(var i=0;i<subtype_data.length;i++)
        {
            if(subtype.value==subtype_data[i].subtype_id)
            {
                obj.subtype=subtype_data[i].name;
                break;
            }
        }

        obj.brand=brand.value;       
        obj.name=name.value;
        obj.offer=offer.value;
        obj.price=price.value;
        obj.image_url_1=image_url_1.value;
        obj.image_url_2=image_url_2.value;
        obj.image_url_3=image_url_3.value;
        obj.description=description.value;
        products_data.push(obj);
        localStorage.setItem("products",JSON.stringify(products_data));
        alert("Product added sucessfully");

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