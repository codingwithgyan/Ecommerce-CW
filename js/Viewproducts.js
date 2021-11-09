window.addEventListener("load",function(){
    AOSfunction();
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

 displayItem();


 //Adding animations and event listners

    var card=document.getElementsByClassName("card");
    for(var i=0;i<card.length;i++)
    {
        card[i].addEventListener("mouseover",function(){
                  
            
        });

        card[i].addEventListener("mouseout",function(){
           
           
        });
    }

});
function addCartButton()
{

}
function displayItem()
{
    
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
                    div2.style.overflow="hidden";
                    div2.setAttribute("class","card");

                    ///////////////////////////////////////////////

                    var div2_1=document.createElement("div");
                    div2_1.setAttribute("id","icons");
                    div2_1.setAttribute("data-aos","fade-left");
                    div2_1.setAttribute("data-aos-offset","0");
                    div2_1.setAttribute("data-aos-delay","0");
                    div2_1.setAttribute("data-aos-duration","500");
                    div2_1.setAttribute("data-aos-easing","ease-in-out");
                    div2_1.setAttribute("data-aos-mirror","true");
                    div2_1.setAttribute("data-aos-once","false");
                    div2_1.setAttribute("data-aos-anchor-placement","top-center");


                    var div2_1_1=document.createElement("div");
                    var i1=document.createElement("i");
                    i1.setAttribute("class","fas fa-shopping-cart");
                    var i2=document.createElement("i");
                    i2.setAttribute("class","far fa-heart");
                    var div2_1_2=document.createElement("div");
                    div2_1_1.append(i1);
                    div2_1_2.append(i2);
                    div2_1.append(div2_1_1,div2_1_2);
                    //this.append(div2_1);
                    div2.append(div2_1);
           

                    ///////////////////////////////////////////////

                    var img=document.createElement("img");
                    img.style.position="absolute";
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

}
function AOSfunction()
{
    AOS.init();
    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
        
      
        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 400, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
      
      });
}