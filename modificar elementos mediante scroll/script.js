$(function() {  
    var header = $("header");
    var altoSeccion1 = $("#seccion1").outerHeight();
    var altoSeccion2 = $("#seccion2").outerHeight() + altoSeccion1;

    $(window).scroll(function(event) {
        height = $(event.target).scrollTop();
        if (height > 200 && height < altoSeccion1) {
            header.addClass("plata").removeClass("verde");
        } else if (height > altoSeccion1 && height < altoSeccion2) {
            header.addClass("verde").removeClass("plata zapallo");
        } else if (height > altoSeccion2) {
            header.addClass("zapallo").removeClass("verde");
        } else {
            header.removeClass("plata");
        }
    });
});
    