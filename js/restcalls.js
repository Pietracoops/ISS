
// =======================================
//			GLOBALS
// =======================================
var buttonPressed 
var path
var value
//http://192.168.3.3:8989/ios/RealTimeDataAccess/cdb/L99_XZ_SIMREADY_L1
//'https://jsonplaceholder.typicode.com/posts/1'

// =======================================
//			MAPPINGS
// =======================================
// Button Label   /=/    CDB Label
var QS_E_START_ENGINE1 = "/L99_XZ_SIMREADY_L1"//EXTERNAL POWER: START AC GPU
var QS_E_START_ENGINE2 = "/L99_XZ_SIMREADY_L1"//EXTERNAL POWER: START AC GPU

var QS_G_START_GYRO1 = "/L99_XZ_SIMREADY_L1"//EXTERNAL POWER: START AC GPU
var QS_G_START_GYRO2 = "/L99_XZ_SIMREADY_L1"//EXTERNAL POWER: START AC GPU

var QS_A_START_APU = "/L99_XZ_SIMREADY_L1"//EXTERNAL POWER: START AC GPU

var QS_EP_START_DC_EPU = "/L99_XZ_SIMREADY_L1"//EXTERNAL POWER: START DC EPU
var QS_EP_START_AC_EPU = "/L99_XZ_SIMREADY_L1"//EXTERNAL POWER: START AC EPU
var QS_EP_START_AC_GPU = "/L99_XZ_SIMREADY_L1"//EXTERNAL POWER: START AC GPU








// =======================================
//			BUTTON FUNCTIONS
// =======================================

function alertFunc() {
  var button = document.getElementById("Start_DC_EPU");
  button.style.background = 'rgb(87, 180, 91)';
}



//*******************************************************************
//						QUICK SETUP PAGE
//*******************************************************************


//ENGINES
$('#Engine_1').on('click', function(event) {
  event.preventDefault(); // To prevent following the link (optional)
  buttonPressed = "Start Engine 1"
  path = QS_E_START_ENGINE1
  RestCall(path,'1');
});
$('#Engine_2').on('click', function(event) {
  event.preventDefault(); // To prevent following the link (optional)
  buttonPressed = "Start Engine 2"
  path = QS_E_START_ENGINE2
  RestCall(path,'1');
});


//GYROS
$('#Align_Gyro_1').on('click', function(event) {
  event.preventDefault(); // To prevent following the link (optional)
  buttonPressed = "Align Gyro 1"
  path = QS_G_START_GYRO1
  RestCall(path,'1');
});
$('#Align_Gyro_2').on('click', function(event) {
  event.preventDefault(); // To prevent following the link (optional)
  buttonPressed = "Align Gyro 2"
  path = QS_G_START_GYRO2
  RestCall(path,'1');
});


//APU
$('#Quick_Start_APU').on('click', function(event) {
  event.preventDefault(); // To prevent following the link (optional)
  buttonPressed = "Quick Start APU"
  path = QS_A_START_APU
  RestCall(path,'1');
});


//EXTERNAL POWER
$('#Start_DC_EPU').on('click', function(event) {
  event.preventDefault(); // To prevent following the link (optional)
  buttonPressed = "Start DC EPU"
  path = QS_EP_START_DC_EPU
  //var data = {};
  //data.cdbname = QS_EP_START_DC_EPU;
  //data.value  = "1";
  //var json = JSON.stringify(data);
  RestCall(path,'1');
});

$('#Start_AC_EPU').on('click', function(event) {
  event.preventDefault(); // To prevent following the link (optional)
  buttonPressed = "Start AC EPU"
  path = QS_EP_START_AC_EPU
  RestCall(path,'1');
  
});

$('#Start_AC_GPU').on('click', function(event) {
  event.preventDefault(); // To prevent following the link (optional)
  buttonPressed = "AC GPU"
  path = QS_EP_START_AC_GPU
  RestCall(path,'1');

});



// =======================================
//				REST CALLS
// =======================================

function RestCall(Call_Type, CDB_Label, Value) {
var request = new XMLHttpRequest();						// Create a new request object
//request.onload = printRepoCount;						// This only occurs on success, we'll use onreadystatechange instead
request.onreadystatechange = printRequestStatus;		// Every status change call this function
//0: request not initialized
//1: server connection established
//2: request received
//3: processing request
//4: request finished and response is ready


//Call_type 0 = get, 1 = put

if (Call_Type == 0) {
    request.open('get', 'http://192.168.3.3:8989/ios/RealTimeDataAccess/cdb' + CDB_Label, true)
} else if (Call_Type == 1) {
    request.open('put', 'http://192.168.3.3:8989/ios/RealTimeDataAccess/cdb' + CDB_Label, true)
    request.setRequestHeader('content-type', 'application/json')
}



// Send it
request.send(Value)
  
}


function printRequestStatus() {


if (this.readyState == 1) {
	
	Toastify({text: "Request Sent... Please Wait. Ready state: " + this.readyState, duration: 3500, close: true, gravity: "top", position: 'right', backgroundColor: "rgb(87, 180, 91)"}).showToast();
	
} else if (this.readyState == 4) {
	if (this.status == 200) {
		Toastify({text: "Success! Request status: " + this.status  + " - Button Pressed: " + buttonPressed, duration: 3500, close: true, gravity: "top", position: 'right', backgroundColor: "rgb(87, 180, 91)"}).showToast();   
		var responseObj = JSON.parse(this.responseText);
		//Toastify({text: responseObj.name + " has " + responseObj.public_repos + " public repositories!", duration: 2500, close: true, gravity: "top", position: 'right', backgroundColor: "rgb(87, 180, 91)"}).showToast();
		//Toastify({text: responseObj.body, duration: 2500, close: true, gravity: "top", position: 'right', backgroundColor: "rgb(87, 180, 91)"}).showToast(); 
	}
	else if (this.status == 0)
	{
	    Toastify({text: "Failed! Request status: " + this.status + " | Status Error: Unable to connect to RTDA. Please load RTDA process.", duration: 5000, close: true, gravity: "top", position: 'right', backgroundColor: "rgb(245, 79, 67)"}).showToast();   
	}
	else{
		Toastify({text: "Failed! Request status: " + this.status + " | Status Error: " + this.statusText, duration: 2500, close: true, gravity: "top", position: 'right', backgroundColor: "rgb(245, 79, 67)"}).showToast();   
	}
		
}
// 100-level (Informational) — Server acknowledges a request
// 200-level (Success) — Server completed the request as expected
// 300-level (Redirection) — Client needs to perform further actions to complete the request
// 400-level (Client error) — Client sent an invalid request
// 500-level (Server error) — Server failed to fulfill a valid request due to an error with server
}
