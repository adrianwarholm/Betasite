var bool = false;
var scroll_start = 0;
var startchange = $('#navbar');
var offset = startchange.offset();

$(document).ready(function(){
   $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top+10) {
          $('#navbar').css('background-color', 'white');
     } else if(!bool && $(scroll_start < offset.top+10)){
          $('#navbar').css('background-color', 'transparent');
       }
   });
});

function getStyle(el, styleProp) {
    var value, defaultView = (el.ownerDocument || document).defaultView;
    // W3C standard way:
    if (defaultView && defaultView.getComputedStyle) {
        // sanitize property name to css notation
        // (hyphen separated words eg. font-Size)
        styleProp = styleProp.replace(/([A-Z])/g, "-$1").toLowerCase();
        return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
    } else if (el.currentStyle) { // IE
        // sanitize property name to camelCase
        styleProp = styleProp.replace(/\-(\w)/g, function(str, letter) {
            return letter.toUpperCase();
        });
        value = el.currentStyle[styleProp];
        // convert other units to pixels on IE
        if (/^\d+(em|pt|%|ex)?$/i.test(value)) {
            return (function(value) {
                var oldLeft = el.style.left, oldRsLeft = el.runtimeStyle.left;
                el.runtimeStyle.left = el.currentStyle.left;
                el.style.left = value || 0;
                value = el.style.pixelLeft + "px";
                el.style.left = oldLeft;
                el.runtimeStyle.left = oldRsLeft;
                return value;
            })(value);
        }
        return value;
    }
}

$(".button").click(function(){
    $(".nav-item").css("background-color", "transparent");
    $(".button").css("background-color", "transparent");
});

$(".navbar-toggle").click(function(){
     bool = !bool;
     console.log(getStyle(document.getElementById("navbar"), "background-color"));
     if(bool || scroll_start > offset.top+10){
          $("#navbar").css("background-color", "white");
          //$("#navbar").toggleClass("navbar-clicked navbar-unclicked");
     } else if(!bool && $(scroll_start < offset.top+10)){
          $("#navbar").css("background-color", "transparent");
     }
});
