window.addEventListener("load",function(){
    var container=document.getElementById("cat");
    var category=document.getElementById("category");
    var view=document.getElementById("view");
    //      Adding category data

    var category_data=JSON.parse(localStorage.getItem("category"));
    var type_data=JSON.parse(localStorage.getItem("type"));
    var subtype_data=JSON.parse(localStorage.getItem("subtype"));
    if(category_data!=null && type_data!=null && subtype_data!=null)
    {
        for(var i=0;i<category_data.length;i++)
        {
            var div1=document.createElement("div");
            div1.innerHTML=category_data[i].name.toUpperCase();
            div1.setAttribute("class","cat_div");
            div1.setAttribute("value",category_data[i].category_id);
            category.append(div1);

        }
    }

    var category_div=document.getElementsByClassName("cat_div");
    var type_1=document.getElementById("type_1");  
    var type_2=document.getElementById("type_2");
    var type_3=document.getElementById("type_3");
    var type_4=document.getElementById("type_4");

    for(var i=0;i<category_div.length;i++)
    {
       
        category_div[i].addEventListener("mouseover",function(){
            type_1.innerHTML="";
            type_2.innerHTML="";
            type_3.innerHTML="";
            type_4.innerHTML="";
            var index=1;
            for(var j=0;j<type_data.length;j++)
            {
                if(type_data[j].category_id==this.getAttribute("value"))
                {
                    if(index<=2)
                    {
                        var h5=document.createElement("h5");
                        h5.innerHTML=type_data[j].name;
                        type_1.append(h5);
                        for(var k=0;k<subtype_data.length;k++)
                        {
                            if(subtype_data[k].type_id==type_data[j].type_id)
                            {
                                var p=document.createElement("p");
                                p.innerHTML=subtype_data[k].name;
                                type_1.append(p);
                            }
                           
                        }
                        index++;
                    }
                    else if(index<=4)
                    {
                        var h5=document.createElement("h5");
                        h5.innerHTML=type_data[j].name;
                        type_2.append(h5);
                        for(var k=0;k<subtype_data.length;k++)
                        {
                            if(subtype_data[k].type_id==type_data[j].type_id)
                            {
                                var p=document.createElement("p");
                                p.innerHTML=subtype_data[k].name;
                                type_2.append(p);
                            }
                           
                        }
                        index++;
                    }
                    else if(index<=6)
                    {
                        var h5=document.createElement("h5");
                        h5.innerHTML=type_data[j].name;
                        type_3.append(h5);
                        for(var k=0;k<subtype_data.length;k++)
                        {
                            if(subtype_data[k].type_id==type_data[j].type_id)
                            {
                                var p=document.createElement("p");
                                p.innerHTML=subtype_data[k].name;
                                type_3.append(p);
                            }
                           
                        }
                        index++;
                    }
                    else
                    {
                        var h5=document.createElement("h5");
                        h5.innerHTML=type_data[j].name;
                        type_4.append(h5);
                        for(var k=0;k<subtype_data.length;k++)
                        {
                            if(subtype_data[k].type_id==type_data[j].type_id)
                            {
                                var p=document.createElement("p");
                                p.innerHTML=subtype_data[k].name;
                                type_4.append(p);
                            }
                           
                        }
                    }
                   
                   
                   
                    
                   

                }
               
            }
            
            
        });
        
    }


    container.addEventListener("mouseover",function(){
        category.style.display="flex";
        view.style.display="flex";

    });
    container.addEventListener("mouseout",function(){
        category.style.display="none";
        view.style.display="none";
    });


    category.addEventListener("mouseover",function(){
        category.style.display="flex";
        view.style.display="flex";
    });
    category.addEventListener("mouseout",function(){
        category.style.display="none";
        view.style.display="none";
    });


    view.addEventListener("mouseover",function(){
        category.style.display="flex";
        view.style.display="flex";
    });
    view.addEventListener("mouseout",function(){
        category.style.display="none";
        view.style.display="none";
    });



});
