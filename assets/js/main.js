// PreLoader
window.onload = function(){document.querySelector(".preloader").style.display = "none";}

// Go To Bottom of Page
$(".godown").on("click",function(){ 
        window.scrollTo(0, 0);
        // window.scrollTo(0, document.body.scrollHeight);
})

$(window).scroll(function() {
    if($(window).scrollTop() > 100 ){$(".godown").addClass("active");}
    else{$(".godown").removeClass("active");}
});

