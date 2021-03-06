
var manager = new SearchManager();
var timerId;

function acceptUserInput(e)
{
	//Clear any previous timer
	clearTimeout(timerId);
	//Immediately start the timer after the first keystroke
	//But also start the timer after every keystroke
	//Any additional keystroke cancels the previous timer
	var userInput = e.target.value;

	function sendUserInputToSearchManager()
	{
		manager.execute(userInput);
		console.log(userInput);
	}
	//After 3 seconds send user input to the search manager
	timerId = setTimeout(sendUserInputToSearchManager,350);
	//Wait 3 seconds to gather user input
}


document.addEventListener("DOMContentLoaded", function(event){
	 document.getElementById('searchInputBox').addEventListener('input',acceptUserInput,true);

	 var searchWidget = document.getElementById(WIDGET_CONTAINER);
	 // document.getElementById(RESULTS_CONTAINER).innerHTML=NO_SEARCH_RESULT_STRING;
	 searchWidget.addEventListener("click", checkEvent,true);		   			   
 });

