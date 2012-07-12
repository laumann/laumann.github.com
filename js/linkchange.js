/* Default setting is shown */

hide = true;

$(function() {
    //$("a").addClass("invisible");
    
    $("#showhide").click(function() {
	if (hide) {
	    $("a").addClass("invisible");
	    $("#showhide").html("Show Links");
	} else {
	    $("a").removeClass("invisible");
	    $("#showhide").html("Hide Links");
	}
	hide = !hide;
    });
});