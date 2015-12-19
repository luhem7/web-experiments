//VERTICAL ACCORDIONS
//Simplest way using jquery to do all the heavy lifting with slideUp and slideDown
$(document).ready(function() {
    $(".accordionButton").click(function() {
        if($(this).hasClass("collapsed")) {
            $(this).next().slideDown();
            $(this).removeClass("collapsed");
        } else {
            $(this).next().slideUp();
            $(this).addClass("collapsed");
        }
    });
});

//Using JQuery only for binding events to the accordion button
$(document).ready(function() {

});
