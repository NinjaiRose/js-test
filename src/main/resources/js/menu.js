document.addEventListener('DOMContentLoaded', function(){ 
    bulkOff();
    waitForElement('.js-detailview', function (err) {
	if (!err) {
		console.log('The element is available!');
                changeCSS();
	} else {
		console.log('The element is NOT available after 5 seconds');
	}
});
}, false);


function bulkOff(){
    var box = document.getElementById("sendBulkNotificationCB");
    if(box){
        box.checked = false;
    }
}

function changeCSS() {
    var name = "ghx-board-name";
    var x = document.getElementById(name);

        if(document.getElementById(name) !== null && x.innerHTML === "Tow Epics"){

            console.log('Triggered CSS Change!');
            $("span.ghx-extra-field.ghx-fa").css("margin-left", "30px");

            $(".ghx-issue .ghx-extra-fields").css("margin-top", "5px");
            $(".ghx-issue .ghx-extra-fields").css("display", "flex");

            $(".ghx-issue .ghx-flags").css("left", "20px");
            $(".ghx-issue .ghx-flags").css("top", "5px");

            $(".ghx-issue .ghx-highlighted-fields").css("margin-top", "5px");

            $(".ghx-issue .ghx-type").css("left", "5px");
            $(".ghx-issue .ghx-type").css("top", "5px");

            $(".ghx-issue-content").css("font-size", "12px");
            $(".ghx-issue-content").css("margin-top", "3px");
            $(".ghx-issue-content").css("padding", "5px");
            $(".ghx-issue-content").css("display", "flex");
            $(".ghx-issue-content").css("margin-bottom", "-30px");

            $(".ghx-issue-fields .ghx-key ").css("margin-left", "30px");
            
            return true;
        }
};

function waitForElement(selector, callback) {
	var count = 0;
	var interval = window.setInterval(function() {
		count++;
		if (count > 10) {
			callback(new Error('timeout'));
                        window.clearInterval(interval);
		} else if (document.querySelectorAll(selector).length > 0) {
			window.clearInterval(interval);
			callback();
		}
	}, 500);
}


