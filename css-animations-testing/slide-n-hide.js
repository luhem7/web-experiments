var elementOffset, elementWidth, elementHeight;

$(document).ready(function() {
    $("#hiderButton1").click(function(){
        var string = "";
        elementOffset = $("#sliderContainer1").offset();
        elementWidth = $("#sliderContainer1").width();
        elementHeight = $("#sliderContainer1").height();
        string = "height "+elementHeight+" width "+elementWidth+
        " offset "+elementOffset.top+","+elementOffset.left + "\n";

        alert(string);
        $("#sliderContainer1").addClass("hideNSlide");
    });
});
