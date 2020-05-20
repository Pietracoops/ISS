
// =======================================
//			GLOBALS
// =======================================
var buttonPressed 
var path
var RTDAPath = "http://192.168.3.3:8989/ios/RealTimeDataAccess"

var value
var user_profile = {
object : [
    {
      Uri: "H04_REPOS_POSLON_CMD_F8",
      Value:
	    {
            Value: 45.4657, 
            Index: null
        }
    },
    {
      Uri: "H04_REPOS_POSLAT_CMD_F8",
      Value:
	    {
            Value: 45.4657, 
            Index: null
        }
    },
]
}
// =======================================
//			MAPPINGS
// =======================================
// Button Label   /=/    CDB Label


// ~~~~~~~~~~~~ QUICK STARTS ~~~~~~~~~~~~~~~~
var QS_E_START_ENGINE1 = "J04_SIMENG1QUICKSTARTMODE"
var QS_E_START_ENGINE2 = "J04_SIMENG2QUICKSTARTMODE"
var QS_E_START_BOTH_ENGINES = "H71_ENGQSTRT_L1" 
//might be this TCMFSTRT or this TCM0FSTR
//H71_ENGQSTRT_L1 - All Engine quickstart backdrive
//
var QS_G_START_GYRO1 = "L99_XZ_SIMREADY_L1"
var QS_G_START_GYRO2 = "L99_XZ_SIMREADY_L1"
var QS_G_START_BOTH_GYROS = "J04_SIMIRSQUICKALIGN"
var QS_A_START_APU = "H99_ACSET_APUQKST_L1"
//I99_PANEL_APUQUICKSTART_L1 - APU QUICK START PANEL INPUT
var QS_EP_START_DC_EPU = "H04_REPOS_HDG_CMD_F8"
var QS_EP_START_AC_EPU = "G24_PMC_ACEPU_CTRL_ON_L1"
var QS_EP_START_AC_GPU = "L99_XZ_SIMREADY_L1"

// ~~~~~~~~~~~~ REHOST ADAPTER ~~~~~~~~~~~~~~
var Reload_Mapping = "DEX_RESET_LABELMAPPER_I4" //Unload Mapper

// ~~~~~~~~~~~~~~  FREEZES ~~~~~~~~~~~~~~~~~~
var F_FREEZE_TOTAL = "L99_XZ_SIMREADY_L1"
var F_FREEZE_FLIGHT = "L99_XZ_SIMREADY_L1"
var F_FREEZE_ALTITUDE = "L99_XZ_SIMREADY_L1"
var F_FREEZE_POSITION = "L99_XZ_SIMREADY_L1"
var F_FREEZE_MOTION = "L99_XZ_SIMREADY_L1"
var F_FREEZE_FUEL = "L99_XZ_SIMREADY_L1"

// ~~~~~~~~~~~~~~  RESETS ~~~~~~~~~~~~~~~~~~~
var R_RESET_TOTAL = "L99_XZ_SIMREADY_L1"
var R_RESET_CONSUMABLES = "L99_XZ_SIMREADY_L1"
var R_RESET_REFUEL = "L99_XZ_SIMREADY_L1"
var R_RESET_OIL_SYSTEM = "L99_XZ_SIMREADY_L1"
var R_RESET_TEMPERATURE = "L99_XZ_SIMREADY_L1"
var R_RESET_EXPENDABLES = "L99_XZ_SIMREADY_L1"
var R_RESET_BATTERY = "L99_XZ_SIMREADY_L1"
var R_RESET_ICING = "L99_XZ_SIMREADY_L1"
var R_RESET_FLOATATION_GEAR = "L99_XZ_SIMREADY_L1"
var R_RESET_CMC = "L99_XZ_SIMREADY_L1"
var R_RESET_MTC = "L99_XZ_SIMREADY_L1"
var R_RESET_DAMAGE = "L99_XZ_SIMREADY_L1"
var R_RESET_PFCS = "L99_XZ_SIMREADY_L1"
var R_RESET_CB_TRIP = "L99_XZ_SIMREADY_L1"
var R_RESET_WEATHER = "L99_XZ_SIMREADY_L1"
var R_RESET_MASTER = "L99_XZ_SIMREADY_L1"

// =======================================
//			BUTTON FUNCTIONS
// =======================================

function alertFunc() {
  var button = document.getElementById("Start_DC_EPU");
  button.style.background = 'rgb(87, 180, 91)';
}

//*******************************************************************
//						REPOSITION PAGE
//*******************************************************************



//*******************************************************************
//						QUICK SETUP PAGE
//*******************************************************************


//ENGINES
$('#Engine_1').on('click', function(event) {
  event.preventDefault(); // To prevent following the link (optional)
  buttonPressed = "Start Engine 1"
  path = QS_E_START_ENGINE1
  value = {Value: 30.0, Index: ""}
  RestCall(1,path,value);
});
$('#Engine_2').on('click', function(event) {
  event.preventDefault(); // To prevent following the link (optional)
  buttonPressed = "Start Engine 2"
  path = QS_E_START_ENGINE2
  value = {Value: 30.0, Index: ""}
  RestCall(1,path,value);
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
  value = {Value: 30.0, Index: ""}
  RestCall(1,path,value);
});


//EXTERNAL POWER
$('#Start_DC_EPU').on('click', function(event) {
  event.preventDefault(); // To prevent following the link (optional)
  buttonPressed = "Start DC EPU"
  path = QS_EP_START_DC_EPU
  value = {Value: 30.0, Index: ""}
  RestCall(1,path,value);
});

$('#Start_AC_EPU').on('click', function(event) {
  event.preventDefault(); // To prevent following the link (optional)
  buttonPressed = "Start AC EPU"
  path = QS_EP_START_AC_EPU
  value = {Value: 30.0, Index: ""}
  RestCall(1,path,value);
});

$('#Start_AC_GPU').on('click', function(event) {
  event.preventDefault(); // To prevent following the link (optional)
  buttonPressed = "AC GPU"
  path = QS_EP_START_AC_GPU
  value = {Value: 30.0, Index: ""}
  RestCall(1,path,value);
});

//Rehost Adapter
$('#Rehost_Adapter_1').on('click', function(event) {
  event.preventDefault(); // To prevent following the link (optional)
  buttonPressed = "Reload MAPPINGS"
  path = QS_EP_START_AC_GPU
  value = {Value: 30.0, Index: ""}
  RestCall(1,path,value);
});


//*******************************************************************
//						FREEZES PAGE
//*******************************************************************

$('#Total_Freeze').on('click', function(event) {
  event.preventDefault(); // To prevent following the link (optional)
  buttonPressed = "Total_Freeze"
  path = F_FREEZE_TOTAL
  value = {Value: 30.0, Index: ""}
  RestCall(1,path,value);
});

$('#Flight_Freeze').on('click', function(event) {
  event.preventDefault(); // To prevent following the link (optional)
  buttonPressed = "Flight_Freeze"
  path = F_FREEZE_FLIGHT
  value = {Value: 30.0, Index: ""}
  RestCall(1,path,value);
});

$('#Altitude_Freeze').on('click', function(event) {
  event.preventDefault(); // To prevent following the link (optional)
  buttonPressed = "Altitude_Freeze"
  path = F_FREEZE_ALTITUDE
  value = {Value: 30.0, Index: ""}
  RestCall(1,path,value);
});

$('#Position_Freeze').on('click', function(event) {
  event.preventDefault(); // To prevent following the link (optional)
  buttonPressed = "Position_Freeze"
  path = F_FREEZE_POSITION
  value = {Value: 30.0, Index: ""}
  RestCall(1,path,value);
});

$('#Motion_Freeze').on('click', function(event) {
  event.preventDefault(); // To prevent following the link (optional)
  buttonPressed = "RMotion_Freeze"
  path = F_FREEZE_MOTION
  value = {Value: 30.0, Index: ""}
  RestCall(1,path,value);
});

$('#Fuel_Freeze').on('click', function(event) {
  event.preventDefault(); // To prevent following the link (optional)
  buttonPressed = "Fuel_Freeze"
  path = F_FREEZE_FUEL
  value = {Value: 30.0, Index: ""}
  RestCall(1,path,value);
});

//*******************************************************************
//						RESETS PAGE
//*******************************************************************


$('#Reset_Total').on('click', function(event) {
  event.preventDefault(); // To prevent following the link (optional)
  buttonPressed = "Reset_Total"
  path = R_RESET_TOTAL
  value = {Value: 30.0, Index: ""}
  RestCall(1,path,value);
});

$('#Reset_Consumables').on('click', function(event) {
  event.preventDefault(); // To prevent following the link (optional)
  buttonPressed = "Reset_Consumables"
  path = R_RESET_CONSUMABLES
  value = {Value: 30.0, Index: ""}
  RestCall(1,path,value);
});

$('#Reset_Refuel').on('click', function(event) {
  event.preventDefault(); // To prevent following the link (optional)
  buttonPressed = "Reset_Refuel"
  path = R_RESET_REFUEL
  value = {Value: 30.0, Index: ""}
  RestCall(1,path,value);
});

$('#Reset_Oil_System').on('click', function(event) {
  event.preventDefault(); // To prevent following the link (optional)
  buttonPressed = "Reset_Oil_System"
  path = R_RESET_OIL_SYSTEM
  value = {Value: 30.0, Index: ""}
  RestCall(1,path,value);
});

$('#Reset_Temperature').on('click', function(event) {
  event.preventDefault(); // To prevent following the link (optional)
  buttonPressed = "Reset_Temperature"
  path = R_RESET_TEMPERATURE
  value = {Value: 30.0, Index: ""}
  RestCall(1,path,value);
});

$('#Reset_Expendables').on('click', function(event) {
  event.preventDefault(); // To prevent following the link (optional)
  buttonPressed = "Reset_Expendables"
  path = R_RESET_EXPENDABLES
  value = {Value: 30.0, Index: ""}
  RestCall(1,path,value);
});

$('#Reset_Battery').on('click', function(event) {
  event.preventDefault(); // To prevent following the link (optional)
  buttonPressed = "Reset_Battery"
  path = R_RESET_BATTERY
  value = {Value: 30.0, Index: ""}
  RestCall(1,path,value);
});

$('#Reset_Icing').on('click', function(event) {
  event.preventDefault(); // To prevent following the link (optional)
  buttonPressed = "Reset_Icing"
  path = R_RESET_ICING
  value = {Value: 30.0, Index: ""}
  RestCall(1,path,value);
});

$('#Reset_Flotation_Gear').on('click', function(event) {
  event.preventDefault(); // To prevent following the link (optional)
  buttonPressed = "Reset_Flotation_Gear"
  path = R_RESET_FLOATATION_GEAR
  value = {Value: 30.0, Index: ""}
  RestCall(1,path,value);
});

$('#Reset_CMC').on('click', function(event) {
  event.preventDefault(); // To prevent following the link (optional)
  buttonPressed = "Reset_CMC"
  path = R_RESET_CMC
  value = {Value: 30.0, Index: ""}
  RestCall(1,path,value);
});

$('#Reset_MTC').on('click', function(event) {
  event.preventDefault(); // To prevent following the link (optional)
  buttonPressed = "Reset_MTC"
  path = R_RESET_MTC
  value = {Value: 30.0, Index: ""}
  RestCall(1,path,value);
});

$('#Reset_Damage').on('click', function(event) {
  event.preventDefault(); // To prevent following the link (optional)
  buttonPressed = "Reset_Damage"
  path = R_RESET_DAMAGE
  value = {Value: 30.0, Index: ""}
  RestCall(1,path,value);
});

$('#Reset_PFCS').on('click', function(event) {
  event.preventDefault(); // To prevent following the link (optional)
  buttonPressed = "Reset_PFCS"
  path = R_RESET_PFCS
  value = {Value: 30.0, Index: ""}
  RestCall(1,path,value);
});

$('#Reset_CB_Trip').on('click', function(event) {
  event.preventDefault(); // To prevent following the link (optional)
  buttonPressed = "Reset_CB_Trip"
  path = R_RESET_CB_TRIP
  value = {Value: 30.0, Index: ""}
  RestCall(1,path,value);
});

$('#Reset_Weather').on('click', function(event) {
  event.preventDefault(); // To prevent following the link (optional)
  buttonPressed = "Reset_Weather"
  path = R_RESET_WEATHER
  value = {Value: 30.0, Index: ""}
  RestCall(1,path,value);
});

$('#Reset_Master').on('click', function(event) {
  event.preventDefault(); // To prevent following the link (optional)
  buttonPressed = "Reset_Master"
  path = R_RESET_MASTER
  value = {Value: 30.0, Index: ""}
  RestCall(1,path,value);
});

// =======================================
//				REST CALLS
// =======================================

function RestCall(PUT, CDB_Label, Value) {
var request = new XMLHttpRequest();						// Create a new request object
//request.onload = printRepoCount;						// This only occurs on success, we'll use onreadystatechange instead
request.onreadystatechange = printRequestStatus;		// Every status change call this function
//0: request not initialized
//1: server connection established
//2: request received
//3: processing request
//4: request finished and response is ready

//PUT 0 = False, 1 = True

if (PUT == 0) {
    request.open('get', RTDAPath + '/cdb' + CDB_Label, true)
	request.send()
} else if (PUT == 1) {
    request.open('put', RTDAPath + '/' + CDB_Label, true)
    request.setRequestHeader('content-type', 'application/json')
	//json = JSON.stringify(user_profile.object)
	json = JSON.stringify(value)
    console.log(json)
    request.send(json)
}

}


function printRequestStatus() {

if (this.readyState == 1) {
	
	Toastify({text: "Request Sent... Please Wait. Ready state: " + this.readyState, duration: 3500, close: true, gravity: "top", position: 'right', backgroundColor: "rgb(87, 180, 91)"}).showToast();
	
} else if (this.readyState == 4) {
	if (this.status == 200) {
		Toastify({text: "Success! Request status: " + this.status  + " - Button Pressed: " + buttonPressed, duration: 3500, close: true, gravity: "top", position: 'right', backgroundColor: "rgb(87, 180, 91)"}).showToast();   
		var responseObj = JSON.parse(this.responseText);
		console.log(responseObj);
	}
	else if (this.status == 0)
	{
	    Toastify({text: "Failed! Request status: " + this.status + " | Status Error: Unable to connect to RTDA. Please load RTDA process.", duration: 5000, close: true, gravity: "top", position: 'right', backgroundColor: "rgb(245, 79, 67)"}).showToast();   
	}
	else{
		Toastify({text: "Failed! Request status: " + this.status + " | Status Error: " + this.statusText, duration: 2500, close: true, gravity: "top", position: 'right', backgroundColor: "rgb(245, 79, 67)"}).showToast();   
	}
		
}
// MESSAGES
// 100-level (Informational) — Server acknowledges a request
// 200-level (Success) — Server completed the request as expected
// 300-level (Redirection) — Client needs to perform further actions to complete the request
// 400-level (Client error) — Client sent an invalid request
// 500-level (Server error) — Server failed to fulfill a valid request due to an error with server
}
