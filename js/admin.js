window.addEventListener("load",function(){
    displayData();
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