// GLOBAL VARIABLES ======================================================
var intervalId;
var answersRight = 0;
var answersWrong = 0;



// FUNCTIONS =============================================================

var countDown = {
	time: 300
	,

	start: function() {
		intervalId = setInterval(countDown.count, 1000);
	},

	count: function() {
		countDown.time--;

		if (countDown.time > 0) {
		var converted = countDown.timeConverter(countDown.time);
		$("#countdowntimer").html("Time Left: " + converted);	
		}
		else {
			timeIsUp();
		}
		
	},

	timeConverter: function(t) {

		var minutes = Math.floor(t / 60);
		var seconds = t - (minutes * 60);

		if (seconds < 10) {
			seconds = "0" + seconds;
		}


		return seconds;
	}
	
};

function timeIsUp () {
	clearInterval(intervalId);
	$("#countdowntimer").html("<h1>Time's Up!</h1>");
	$("button").remove();
	$("#countdowntimer").append("<h4>Answers Right: " + answersRight + "<br>Answers Wrong: " + answersWrong + "</h4>");
}

function radioValue () {
	var radioButton = $(this).attr("value");
	console.log(radioButton)
	if (radioButton == "true") {
		answersRight++;

	}
	else {
		answersWrong++;
		
	}
}

// MAIN PROCESS ==========================================================
countDown.start();
$(".btn").on("click", function() {
	event.preventDefault();
	countDown.time = 0;
})




