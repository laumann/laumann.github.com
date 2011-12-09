/* Default setting is _hidden_ */

hide = false;

$(function() {
    $("a").addClass("invisible");
    
    $("#showhide").click(function() {
	if (hide) {
	    $("a").addClass("invisible");
	    $("#showhide").html("Show Links");
	}
	else {
	    $("a").removeClass("invisible");
	    $("#showhide").html("Hide Links");
	}
	hide = !hide;
    });
});