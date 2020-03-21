var buttonPressed 

//sample toast
//Toastify({text: "DC EPU Clicked", duration: 2500, destination: "https://github.com/apvarun/toastify-js", newWindow: true, close: true,
//  gravity: "top",
//  position: 'right',
//  backgroundColor: "rgb(201, 76, 76)"
//}).showToast();

//green: rgb(87, 180, 91)
//blue : rgb(47, 156, 244)
//red  : rgb(245, 79, 67)


// When the user clicks on <div>, open the popup
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
// document.getElementById("myPopup").textContent="Called from button";
// var popup = document.getElementById("myPopup");
// popup.classList.toggle("show");


$('#Start_DC_EPU').on('click', function(event) {
  event.preventDefault(); // To prevent following the link (optional)
  
Toastify({text: "DC EPU Clicked", duration: 2500, close: true, gravity: "top", position: 'right', backgroundColor: "rgb(87, 180, 91)"}).showToast();
  
  
});





$('#Start_AC_EPU').on('click', function(event) {
  event.preventDefault(); // To prevent following the link (optional)

buttonPressed = "AC EPU"

var path = "/users/funchal"
RestCall(path);

});



function RestCall(Parameter1) {
  // Create a new request object
var request = new XMLHttpRequest();
//request.onreadystatechange = yolo;

request.onload = printRepoCount;
// Initialize the request
request.open('get', 'https://api.github.com' + Parameter1 + '?client_id=2b2b09c236466d38dbdc&client_secret=ce0d71ba3764ac206efc05bff528be61486e1a17', true)
// Fire away!

// Send it
request.send()
  
}

function printRepoCount() {

	if (this.status == 200) {
		Toastify({text: "Success! Request status: " + this.status , duration: 2500, close: true, gravity: "top", position: 'right', backgroundColor: "rgb(87, 180, 91)"}).showToast();   
		var responseObj = JSON.parse(this.responseText);
		Toastify({text: responseObj.name + " has " + responseObj.public_repos + " public repositories!", duration: 2500, close: true, gravity: "top", position: 'right', backgroundColor: "rgb(87, 180, 91)"}).showToast(); 
	}
	else
	{
	    Toastify({text: "Failed! Request status: " + this.status , duration: 2500, close: true, gravity: "top", position: 'right', backgroundColor: "rgb(245, 79, 67)"}).showToast();   
	}

   // 100-level (Informational) — Server acknowledges a request
   // 200-level (Success) — Server completed the request as expected
   // 300-level (Redirection) — Client needs to perform further actions to complete the request
   // 400-level (Client error) — Client sent an invalid request
   // 500-level (Server error) — Server failed to fulfill a valid request due to an error with server
}
