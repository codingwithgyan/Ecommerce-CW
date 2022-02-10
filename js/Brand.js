window.addEventListener("load",function(){
    var brand_data=JSON.parse(localStorage.getItem("brand"));
    if(brand_data!=null)
    {
        var lower="abcdefghijklmnopqrstuvwxyz";
        var upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var index=0;
        var show=document.getElementById("show");
        show.innerHTML="";
        for(var i=0;i<upper.length;i++)
        {
            var found=false;
            var div1=document.createElement("div");
            div1.setAttribute("class","brand");
            var h2=document.createElement("h2");
            h2.setAttribute("id",lower[i]);
            h2.innerHTML=upper[i];
            var ul=document.createElement("ul");

           for(var j=0;j<brand_data.length;j++)
           {
               if(upper[i]==brand_data[j].name[0])
               {
                    var li=document.createElement("li");
                    li.setAttribute("class","brand2");
                    var a=document.createElement("a");
                    a.style.cursor="pointer";
                    a.setAttribute("value",j);
                    a.addEventListener("click",function(){
                        var index=this.getAttribute("value");
                        localStorage.setItem("currentBrand",index);
                        window.location.href="../pages/Viewbrand.html";
                    });
                    a.innerHTML=brand_data[j].name;
                    li.append(a);
                    ul.append(li);
                    found=true;
               }
               
           }
           if(found)
           {
            div1.append(h2,ul);
            show.append(div1); 
           }
           
            
        }
        
    }
    else
    {
        alert("No brand data exist");
        window.location.href="../index.html";
    }
    
});

