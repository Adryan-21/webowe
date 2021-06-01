function openmenu() {
    $(".menu2").css("width","140px");
    $(".menu2").css("height","209px");
    $(".menu2 img").css("opacity","0");
    setTimeout(() => {
        $(".menu2 img").css("display","none");
        $(".link2").css("display","block");
        setTimeout(() => {
            
        $(".link2").css("opacity","1");
        }, 250);
        
    }, 500);
}

$("body").click(function (evt) {
    if($( window ).width() <= 525){
        if(evt.target.className != "menu2" && evt.target.className != "logomenu"){
            $(".link2").css("opacity","0");
            setTimeout(() => {
                $(".link2").css("display","none");
                $(".menu2").css("width","51px");
                $(".menu2").css("height","51px");
                $(".menu2 img").css("display","block");
                setTimeout(() => {
                    $(".menu2 img").css("opacity","1");
                    
                }, 250);
            },500);
        };
    };
})

var coll = document.getElementsByClassName("collapsible");
var i
for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.lastElementChild.classList.toggle("active");                
        var content = this.nextElementSibling;

        if (content.style.maxHeight){
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        } 
    });
}