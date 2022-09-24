// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    let header = document.getElementById("header2");

    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        $(document).ready(function(){
            $("#header2").slideDown();
        });
    } else {
        $(document).ready(function(){
            $("#header2").fadeOut("100");
        });
    }
}