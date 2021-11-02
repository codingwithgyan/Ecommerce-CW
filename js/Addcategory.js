window.addEventListener("load",function(){
    var btn=document.getElementById("btn");
    btn.addEventListener("click",function(){
        var data=JSON.parse(localStorage.getItem("category"));
        var obj={};
        if(data==null)
        {
            data=[];
            obj.category_id=1;
        }
      
        obj.category_id=+data[data.length-1].category_id;
        obj.category_id+=1;
        var category=document.querySelector("input").value;
        obj.name=category;
        data.push(obj);
        localStorage.setItem("category",JSON.stringify(data));
        alert("Category added sucessfully");
        
    });
});