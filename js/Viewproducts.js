window.addEventListener("load",function(){

    // ----------------SLIDER SCRIPT START---------------------
    var checkbox = document.querySelector(".glide");
    var obj = {
    type: "carousel",
    hoverpause: checkbox.checked,
    autoplay: 2500,
    startAt: 0,
    perView: 1,
    };

    new Glide(".glide", obj).mount();

    checkbox.addEventListener("change", function () {
    glide.update({
        hoverpause: checkbox.checked,
    });
    });
 // ----------------SLIDER SCRIPT END---------------------

    var category_data=JSON.parse(localStorage.getItem("category"));
    var type_data=JSON.parse(localStorage.getItem("type"));
    var subtype_data=JSON.parse(localStorage.getItem("subtype"));
    var products_data=JSON.parse(localStorage.getItem("products"));
    var show=document.getElementById("show");
    if(category_data!=null && type_data!=null && subtype_data!=null)
    {
        show.innerHTML="";
        for(var i=0;i<category_data.length;i++)
        {
            var found=false;
            var h3=document.createElement("h3");
            h3.innerHTML=category_data[i].name;
            var div1=document.createElement("div");
            div1.setAttribute("class","content");

            for(var j=0;j<products_data.length;j++)
            {
                if(products_data[j].category==category_data[i].name)
                {
                    var div2=document.createElement("div");
                    var img=document.createElement("img");
                    img.setAttribute("src",products_data[j].image_url_1);
                    div2.append(img);
                    div1.append(div2);
                    found=true;
                }
            }
            if(found==false)
            {
                var h4=document.createElement("h4");
                h4.innerHTML="-------&nbsp;&nbsp;No Data Available&nbsp;&nbsp;-------";
                div1.append(h4);
            }

            show.append(h3,div1);
        }
    }

});