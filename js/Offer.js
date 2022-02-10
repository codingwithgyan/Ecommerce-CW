var products_data=JSON.parse(localStorage.getItem("products"));
if(products_data==null || products_data.length==0)
{
    alert("No product available");
    window.location.href="../index.html";
}
window.addEventListener("load",function(){

    var slider1 = [
        { img_url: "https://media6.ppl-media.com/tr:w-1280,c-at_max,f-gif/mediafiles/ecomm/misc/1636484585_web.gif" },
        { img_url: "https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1635945374_app-copy-2.png" },
        { img_url: "https://media6.ppl-media.com/tr:w-1280,c-at_max,f-gif/mediafiles/ecomm/misc/1635961661_web-banner.gif" },
        { img_url: "https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1636129130_tfs_web-1298x418.jpg" },
        { img_url: "https://media6.ppl-media.com/tr:w-1280,c-at_max,f-gif/mediafiles/ecomm/misc/1636112826_nyb_web_1298_418_diwalimakeuplook.gif" },
        { img_url: "https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1635142197_moisturiser-banner-web.jpg" },
        
    ];
    
    
    slider1.map(function (item) {
        var slider1=document.getElementById("slider1")
        var div = document.createElement("div");
        div.setAttribute("class","slides")
        var img = document.createElement("img");
        img.setAttribute("src", item.img_url);
        slider1.append(div)
        div.append(img)
    
    });
    
    var slideIndex = 0;
    
    
    function showSlides() {
     
      var slides = document.getElementsByClassName("slides");
      for (i = 0; i < slider1.length; i++) {
        slides[i].style.display = "none";
        }
        slides[slideIndex].style.display = "block";
      slideIndex++;
      if (slideIndex > slider1.length-1) {slideIndex = 0}
      
      setTimeout(showSlides, 2000); // Change image every 2 seconds
        
    }
    showSlides();
    
    
    
    
    var box2 = [
        {
            img_url: "https://media6.ppl-media.com/tr:w-1280,ar-51715-16654,c-at_max/mediafiles/ecomm/misc/1635259449_web-hero-banner-1298-x-418.jpg",
            offUpTo:"fifty"
        },
        
        { img_url:"https://media6.ppl-media.com/tr:w-1280,ar-51715-16654,c-at_max,f-gif/mediafiles/ecomm/misc/1635916266_web-banner-1.gif"},
        { img_url:"https://media6.ppl-media.com/tr:w-1280,ar-51715-16654,c-at_max/mediafiles/ecomm/misc/1636111323_nybae-lipconfession-web-header-banner-1298-418-3.jpg"},
        { img_url:"https://media6.ppl-media.com/tr:w-1280,ar-51715-16654,c-at_max/mediafiles/ecomm/misc/1635782845_ag-web-banner-1298x418.jpg"},
        { img_url:"https://media6.ppl-media.com/tr:w-1280,ar-51715-16654,c-at_max/mediafiles/ecomm/misc/1636111786_sq-web-banner-1298x418-35.jpg"},
        { img_url:"https://media6.ppl-media.com/tr:w-1280,ar-51715-16654,c-at_max,f-gif/mediafiles/ecomm/misc/1636111320_pu-web-hero-banner-1298-x-418-11.gif"},
        { img_url: "https://media6.ppl-media.com/tr:w-1280,ar-51715-16654,c-at_max/mediafiles/ecomm/misc/1635782848_dd-web-brand-banner-1280-x-400-copy.jpg" },
        { img_url: "https://media6.ppl-media.com/tr:w-1280,ar-51715-16654,c-at_max/mediafiles/ecomm/misc/1634886222_everything-new-on-purplle-1.jpg" },
        { img_url: "https://media6.ppl-media.com/tr:w-1280,ar-51715-16654,c-at_max,f-gif/mediafiles/ecomm/misc/1634790183_the-ultimate-buying-guidethe-ultimate-buying-guide-web-1.gif" },
        
    
        // { img_url: "" },
        // { img_url: "" },
        // { img_url: "" },
        // { img_url: "" },
        
    ]
    //<a><img src="item.img_url"></a>
    
    box2.map(function (item) {
        var box2 = document.getElementById("box2");
        var div = document.createElement("div");
        div.setAttribute("id", "div1");
        var img = document.createElement("img");
        img.setAttribute("src", item.img_url);
        if (item.offUpTo == "fifty") {
            div.addEventListener("click", uptoOff);
            div.style.cursor="pointer"
        }
        
        
        box2.append(div)
        div.append(img)
    
    })
    
    function uptoOff() {
        return window.location.href="../pages/UpToOff.html"
    }
    
    var box3 = [
        { img_url: "https://media6.ppl-media.com/tr:w-640,ar-321-350,c-at_max,f-gif/mediafiles/ecomm/misc/1635516427_web-banner-1_01-1.gif" },
        { img_url: "https://media6.ppl-media.com/tr:w-640,ar-319-350,c-at_max/mediafiles/ecomm/misc/1635516427_web-banner-1_02-1.jpg" },
        
        { img_url: "https://media6.ppl-media.com/tr:w-640,ar-32-35,c-at_max/mediafiles/ecomm/misc/1635763118_web-banner-2_01.jpg" },
        { img_url: "https://media6.ppl-media.com/tr:w-640,ar-32-35,c-at_max/mediafiles/ecomm/misc/1635763116_web-banner-2_02.jpg" },
    
        { img_url: "https://media6.ppl-media.com/tr:w-640,ar-32-35,c-at_max/mediafiles/ecomm/misc/1635752818_web-banner-1_01.png" },
        { img_url: "https://media6.ppl-media.com/tr:w-640,ar-32-35,c-at_max/mediafiles/ecomm/misc/1635752817_web-banner-1_02.png" },
        
    ]
    
    box3.map(function (item) {
        var box3 = document.getElementById("box3");
        var img = document.createElement("img");
        img.setAttribute("src", item.img_url);
        box3.append(img)
    })
    
    var featured = [
        {
            img_url: "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ofo-top_right/static/img/product/254413/vaseline-calming-lavender-body-lotion-400-ml-56_7_display_1631079415_20e1f7e9.jpg",
            name: "Vaseline Calming Lavender Body Lotion (400 ml)",
            price: "327",
            off: "425",
            dis:"23% off",
        },
        {
            img_url: "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ofo-top_right/static/img/product/212192/dove-gentle-exfoliating-nourishing-body-wash-190-ml-pack-of-2-1_1_display_1609392835_7afd0bb5.jpg",
            name: "Dove Gentle Exfoliating Nourishing Body Wash...",
            price: "115",
            
        },
        {
            img_url: "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ofo-top_right/static/img/product/176863/nutrinom-instaglow-exfoliating-face-wash-100-ml_4_display_1616657677_14045104.jpg",
            name: "Nutrinorm Instaglow Exfoliating Face Wash...",
            price: "193",
            off: "275",
            dis:"30% off",
        },
        {
            img_url: "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ofo-top_right/static/img/product/230723/dove-eventone-deodorant-for-women-150-ml_9_display_1632901876_524bdc3c.jpg",
            name: "Dove Eventone Deodorant For Women,150 ml",
            price: "169",
            off: "220",
            dis:"23% off",
        },
        {
            img_url: "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ofo-top_right/static/img/product/242322/simple-kind-to-skin-refreshing-facial-wash-150-ml-1-14_2_display_1630143793_60701d83.jpg",
            name: "Simple Kind to Skin Refreshing Facial Wash...",
            price: "300",
            off: "375",
            dis:"20% off",
        },
        
    ];
    
    products_data.map(function (item,index) {
        if(index<5)
        {
        var featured2 = document.getElementById("featured2");
        var div1 = document.createElement("div");
        div1.setAttribute("id","featuredDiv")
        var div2 = document.createElement("div");
        var div3 = document.createElement("div");
        div3.setAttribute("id","featuredPrice");
        var h2 = document.createElement("h3");
        var price=item.price;
        var offer=item.offer;
        price=price-(offer/100)*price;
        h2.innerHTML ="	&#8377;"+price;
        var h3 = document.createElement("h3");
        h3.setAttribute("id","offPrice");
        h3.textContent = item.price;
        var h5 = document.createElement("h5");
        h5.textContent = item.offer+"%";
        var img = document.createElement("img");
        img.setAttribute("src", item.image_url_1);
        var h1 = document.createElement("h3");
        h1.textContent = item.name.substring(0,25)+"...";
        h1.setAttribute("class","name")
        box4.append(featured2)
        featured2.append(div1, );
        div1.append(img,div2,div3)
        div2.append(h1)
        div3.append(h2,h3,h5);
    }  
    
    })
    
    var box5 = [
        { img_url: "https://media6.ppl-media.com/tr:w-512,ar-2-3,c-at_max/mediafiles/ecomm/misc/1636113061_bogo-lipsticks-1.jpg" },
        { img_url: "https://media6.ppl-media.com/tr:w-512,ar-2-3,c-at_max/mediafiles/ecomm/misc/1636113061_buy-2-at-mrp-get-1-free-on-face-care-1-1.jpg" },
        { img_url: "https://media6.ppl-media.com/tr:w-512,ar-2-3,c-at_max/mediafiles/ecomm/misc/1636113062_ag-1.jpg" },
        { img_url: "https://media6.ppl-media.com/tr:w-512,ar-2-3,c-at_max/mediafiles/ecomm/misc/1636113062_dd-under-eye-serums.jpg" },
        
        
    ]
    box5.map(function (item) {
        var box5 = document.getElementById("box5");
        var div=document.createElement("div");
        var img = document.createElement("img");
        img.style.height="100%";
        img.style.width="100%";
        img.setAttribute("src", item.img_url);
        div.append(img);
        box5.append(div);
       
        
    })
    
    var slider2 = [
        { img_url: "https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1635963224_prebuzz-header-web-thick-strip.jpg" },
        { img_url: "https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1635954514_winterwebstrip.jpg" },
        { img_url: "https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1635407738_strip-web-1.jpg" },
        { img_url: "https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1636098158_nybae-web-thick-strip-banner-1280x272-2.jpg" },
        { img_url: "https://media6.ppl-media.com/tr:w-1280,c-at_max,f-gif/mediafiles/ecomm/misc/1635780732_free-shipping-1280x272.gif" },
        { img_url: "https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1635322552_web-1.jpg" }
        
    ]
    slider2.map(function (item) {
        var slider2 = document.getElementById("slider2");
        var div = document.createElement("div");
        div.setAttribute("class","slides2")
        var img = document.createElement("img");
        img.setAttribute("src", item.img_url);
        slider2.append(div)
        div.append(img)
    })
    
    var slide2 = 0;
    
    function showSlider2() {
        var slides2 = document.getElementsByClassName("slides2")
        for (var i = 0; i < slider2.length; i++){
            slides2[i].style.display="none"
        }
        slides2[slide2].style.display="block"
        slide2++;
        if (slide2 > slider2.length - 1) { slide2 = 0 }
        setTimeout(showSlider2, 2000);
    
    }
    showSlider2();
    
    
    var shopByCategory = [
        { img_url: "https://media6.ppl-media.com/tr:w-320,ar-2-3,c-at_max/mediafiles/ecomm/misc/1625470191_make-up.png" },
        { img_url: "https://media6.ppl-media.com/tr:w-320,ar-2-3,c-at_max/mediafiles/ecomm/misc/1625470192_skincare.png" },
        { img_url: "https://media6.ppl-media.com/tr:w-320,ar-2-3,c-at_max/mediafiles/ecomm/misc/1625470190_haircare.png" },
        { img_url: "https://media6.ppl-media.com/tr:w-320,ar-2-3,c-at_max/mediafiles/ecomm/misc/1625470192_personal-care.png" },
    ]
    
    shopByCategory.map(function (item) {
        var shopByCategory = document.getElementById("shopByCategory2")
        
        var div=document.createElement("div");
        var img = document.createElement("img")
        img.setAttribute("src", item.img_url);
        img.style.height="100%";
        img.style.width="100%";
        div.append(img);
        shopByCategory.append(div);
        
    })
    
    var slider3 = [
        { img_url: "https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1636134767_maybelline_home-page-web.jpg" },
        { img_url: "https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1636134893_1280-x-400-websitehomepage.jpg" },
        { img_url: "https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1636135009_nivea_web_homepage.jpg" },
        
    ]
    
    slider3.map(function (item) {
        var slider2 = document.getElementById("slider3");
        var div = document.createElement("div");
        div.setAttribute("class","slides3")
        var img = document.createElement("img");
        img.setAttribute("src", item.img_url);
        slider2.append(div)
        div.append(img)
    })
    
    var slidesNo3 = 0;
    function showSlider3() {
        var slides3 = document.getElementsByClassName("slides3");
        for (var i = 0; i < slider3.length; i++){
            slides3[i].style.display="none"
        }
        slides3[slidesNo3].style.display = "block"
        slidesNo3++;
        if (slidesNo3 > slider3.length-1) { slidesNo3 = 0 };
        setTimeout(showSlider3, 2000);
    }
    showSlider3();
    
    var populerPiks = [
        { img_url: "https://media6.ppl-media.com/tr:w-512,ar-613-810,c-at_max/mediafiles/ecomm/misc/1626784213_gv.jpg" },
        { img_url: "https://media6.ppl-media.com/tr:w-512,ar-613-810,c-at_max/mediafiles/ecomm/misc/1626869427_nybae.jpg" },
        { img_url: "https://media6.ppl-media.com/tr:w-512,ar-613-810,c-at_max/mediafiles/ecomm/misc/1626784201_ag.jpg" },
        { img_url: "https://media6.ppl-media.com/tr:w-512,ar-613-810,c-at_max/mediafiles/ecomm/misc/1629458478_sq-widget.jpg" },
        { img_url: "https://media6.ppl-media.com/tr:w-512,ar-613-810,c-at_max/mediafiles/ecomm/misc/1626784201_ag.jpg" },
        
    ]
    
    populerPiks.map(function (item) {
        var populerPiks=document.getElementById("populerPiks2")
        
        var img = document.createElement("img");
        img.setAttribute("src", item.img_url);
       
        populerPiks.append(img)
       
    })
    
    var box7 = [
        { img_url: "https://media6.ppl-media.com/tr:w-320,ar-2-3,c-at_max/mediafiles/ecomm/misc/1636134119_tfs-600x900-3.jpeg" },
        { img_url: "https://media6.ppl-media.com/tr:w-320,ar-2-3,c-at_max/mediafiles/ecomm/misc/1636134120_innisfree-600x900-1.jpeg" },
        { img_url: "https://media6.ppl-media.com/tr:w-320,ar-2-3,c-at_max/mediafiles/ecomm/misc/1636134120_clinique-600x900.jpeg" },
        { img_url: "https://media6.ppl-media.com/tr:w-320,ar-2-3,c-at_max/mediafiles/ecomm/misc/1636134122_bobbi-brown-600x900-2.jpeg" },
        { img_url: "https://media6.ppl-media.com/tr:w-320,ar-2-3,c-at_max/mediafiles/ecomm/misc/1636134121_belif-600x900.jpeg" },
        { img_url: "https://media6.ppl-media.com/tr:w-320,ar-2-3,c-at_max/mediafiles/ecomm/misc/1635824402_tribe_story_900-2.jpg" },
        { img_url: "https://media6.ppl-media.com/tr:w-320,ar-2-3,c-at_max/mediafiles/ecomm/misc/1635068792_rovectin-600x900.jpeg" },
        { img_url: "https://media6.ppl-media.com/tr:w-320,ar-2-3,c-at_max/mediafiles/ecomm/misc/1636094464_thank-you-farmer-600x900.jpeg" },
        { img_url: "https://media6.ppl-media.com/tr:w-320,ar-2-3,c-at_max/mediafiles/ecomm/misc/1635782040_authentic-fragrances-600x900-1.jpeg" },
        
    ]
    
    box7.map(function (item) {
        var box8 = document.getElementById("box8");
        var img = document.createElement("img");
        img.setAttribute("src", item.img_url);
        box8.append(img)
    
    })
    
    var slider4 = [
        { img_url: "https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1635455249_free-gift-web.jpg" },
        { img_url: "https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1635455249_price-cut-web.jpg" },
        { img_url: "https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1635455248_birthday-web.jpg" },
        { img_url: "https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1635455246_beauty-advisor-web.jpg" },
        { img_url: "https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1635455244_cashback-web.jpg" },
    ]
    
    slider4.map(function (item) {
        var slider2 = document.getElementById("slider4");
        var div = document.createElement("div");
        div.setAttribute("class","slides4")
        var img = document.createElement("img");
        img.setAttribute("src", item.img_url);
        slider2.append(div)
        div.append(img)
    })
    
    var slidesNo4 = 0;
    function showSlider4() {
        var slides4 = document.getElementsByClassName("slides4");
        for (var i = 0; i < slider4.length; i++){
            slides4[i].style.display="none"
        }
        slides4[slidesNo4].style.display = "block"
        slidesNo4++;
        if (slidesNo4 > slider4.length-1) { slidesNo4 = 0 };
        setTimeout(showSlider4, 2000);
    }
    showSlider4();
    
    
    var box10 = [
        { img_url: "https://media6.ppl-media.com/tr:w-512,ar-2-3,c-at_max/mediafiles/ecomm/misc/1636113061_bogo-lipsticks-1.jpg" },
        { img_url: "https://media6.ppl-media.com/tr:w-512,ar-2-3,c-at_max/mediafiles/ecomm/misc/1636113061_buy-2-at-mrp-get-1-free-on-face-care-1-1.jpg" },
        { img_url: "https://media6.ppl-media.com/tr:w-512,ar-2-3,c-at_max/mediafiles/ecomm/misc/1636113062_ag-1.jpg" },
        { img_url: "https://media6.ppl-media.com/tr:w-512,ar-2-3,c-at_max/mediafiles/ecomm/misc/1636113062_dd-under-eye-serums.jpg" },
        
        
    ]
    box10.map(function (item) {
        var box5 = document.getElementById("box10");
        var div=document.createElement("div");
        var img = document.createElement("img")
        img.setAttribute("src", item.img_url);
        img.style.height="100%";
        img.style.width="100%";
        div.append(img);
        box5.append(div)
       
        
    })
    
    var bestSeller = [
        {
            img_url: "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ofo-top_right/static/img/product/254413/vaseline-calming-lavender-body-lotion-400-ml-56_7_display_1631079415_20e1f7e9.jpg",
            name: "Vaseline Calming Lavender Body Lotion (400 ml)",
            price: "327",
            off: "425",
            dis:"23% off",
        },
        {
            img_url: "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/238831/ny-bae-kohl-black-the-big-apple-of-my-eye-17_5_display_1630922093_0c0d0607.jpg",
            name: "Dove Gentle Exfoliating Nourishing Body Wash...",
            price: "115",
            
        },
        {
            img_url: "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/244992/good-vibes-glow-toner-green-tea-120-ml_8_display_1620455736_42afab3d.jpg",
            name: "Nutrinorm Instaglow Exfoliating Face Wash...",
            price: "193",
            off: "275",
            dis:"30% off",
        },
        {
            img_url: "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/215463/good-vibes-brightening-body-lotion-liquorice-200-ml-2_9_display_1626238405_2c8fbb5e.jpg",
            name: "Dove Eventone Deodorant For Women,150 ml",
            price: "169",
            off: "220",
            dis:"23% off",
        },
        {
            img_url: "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/249634/blue-heaven-walk-free-mascara-water-proof-long-lash-black-pack-12-ml-pack-of-2-12_1_display_1623834980_fce1b96a.jpg",
            name: "Simple Kind to Skin Refreshing Facial Wash...",
            price: "300",
            off: "375",
            dis:"20% off",
        },
        
    ];
    
    products_data.map(function (item,index) {
        if(index>=3 && index<=7)
        {
        var bestSeller2 = document.getElementById("bestSeller2");
        var div1 = document.createElement("div");
        div1.setAttribute("id","featuredDiv")
        var div2 = document.createElement("div");
        var div3 = document.createElement("div");
        div3.setAttribute("id","featuredPrice");
        var h2 = document.createElement("h3");
        var price=item.price;
        var offer=item.offer;
        price=price-(offer/100)*price;
        h2.innerHTML ="	&#8377;"+price;
        var h3 = document.createElement("h3");
        h3.setAttribute("id","offPrice");
        h3.textContent = item.price;
        var h5 = document.createElement("h5");
        h5.textContent = item.offer+"%";
        var img = document.createElement("img");
        img.setAttribute("src", item.image_url_1);
        var h1 = document.createElement("h3");
        h1.textContent = item.name.substring(0,25)+"...";
        h1.setAttribute("class","name")
        box4.append(featured2)
        bestSeller2.append(div1);
        div1.append(img,div2,div3)
        div2.append(h1)
        div3.append(h2,h3,h5);
        }
    });
    
    //slider 5
    
    var slider5 = [
        { img_url: "https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1636136151_sb_web.jpg" },
        { img_url: "https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1636136239_biotiquearoma_webh.jpg" },
    ]
    
    slider5.map(function (item) {
        var slider5 = document.getElementById("slider5");
        var div = document.createElement("div");
        div.setAttribute("class","slides5")
        var img = document.createElement("img");
        img.setAttribute("src", item.img_url);
        slider5.append(div);
        div.append(img)
    })
    
    
    var slidesNo5 = 0;
    function showSlider5() {
        var slides5 = document.getElementsByClassName("slides5");
        for (var i = 0; i < slider5.length; i++){
            slides5[i].style.display="none"
        }
        slides5[slidesNo5].style.display = "block"
        slidesNo5++;
        if (slidesNo5 > slider5.length-1) { slidesNo5 = 0 };
        setTimeout(showSlider5, 2000);
    }
    showSlider5();
    
    //Gifting Store
    
    var giftionStore = [
        { img_url: "https://media6.ppl-media.com/tr:w-512,ar-2-3,c-at_max/mediafiles/ecomm/misc/1625471389_under-499-opt.png" },
        { img_url: "https://media6.ppl-media.com/tr:w-512,ar-2-3,c-at_max/mediafiles/ecomm/misc/1625921590_widgets.jpg" },
        { img_url: "https://media6.ppl-media.com/tr:w-512,ar-2-3,c-at_max/mediafiles/ecomm/misc/1625471387_under-499-opt-copy-2.png" },
        { img_url: "https://media6.ppl-media.com/tr:w-512,ar-2-3,c-at_max/mediafiles/ecomm/misc/1625471388_under-499-opt-copy.png" },
    ]
    
    giftionStore.map(function (item) {
        var giftingStore = document.getElementById("giftingStore2");
        var div=document.createElement("div");
        var img = document.createElement("img");
        img.setAttribute("src", item.img_url);
        img.style.height="100%";
        img.style.width="100%";
        div.append(img);
        giftingStore.append(div);
    })
    
    var slider6 = [
        { img_url: "https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1636116963_web_homepage.jpg" },
        { img_url: "https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1636117636_faces_home-page-web-8.jpg" },
        { img_url: "https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1636117819_minimalist_web-16.jpg" },
        
    ]
    slider6.map(function (item) {
        var slider6 = document.getElementById("slider6");
        var div = document.createElement("div");
        div.setAttribute("class","slides6")
        var img = document.createElement("img");
        img.setAttribute("src", item.img_url);
        slider6.append(div);
        div.append(img)
    })
    
    
    var slidesNo6 = 0;
    function showSlider6() {
        var slides6 = document.getElementsByClassName("slides6");
        for (var i = 0; i < slider6.length; i++){
            slides6[i].style.display="none"
        }
        slides6[slidesNo6].style.display = "block"
        slidesNo6++;
        if (slidesNo6 > slider6.length-1) { slidesNo6 = 0 };
        setTimeout(showSlider6, 2000);
    }
    showSlider6();
    
    var slider7 = [
        { img_url: "https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1636118001_daily-life-forever_web-1298x418.jpg" },
        { img_url: "https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1636118295_tnw_homepage_web-4.jpg" },
        { img_url: "https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1636118592_carmesi_web-2.jpg" },
        { img_url: "https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1636119019_cetaphil_home-page-web.jpg" },
        { img_url: "https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1636119893_vaseline_web.jpg" },
        { img_url: "https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1636120728_kama_web.jpg" },
        { img_url: "https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1636121235_clinique_web.jpg" },
        { img_url: "https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1635985967_glutaweis_home-page-web.jpg" },
    ]
    
    //nav bar js //nav bar js //nav bar js //nav bar js //nav bar js
    
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
    
});