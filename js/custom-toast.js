//var bgColors = [
//    "linear-gradient(to right, #00b09b, #96c93d)",
//    "linear-gradient(to right, #ff5f6d, #ffc371)",
//  ],
//  i = 0;
//

//green: rgb(87, 180, 91)
//blue : rgb(47, 156, 244)
//red  : rgb(245, 79, 67)


// When the user clicks on <div>, open the popup
//function myFunction() {
//  var popup = document.getElementById("myPopup");
//  popup.classList.toggle("show");
//  var button = document.getElementById("Start_DC_EPU");
//  var test = setTimeout(alertFunc, 1000)  
//}
// document.getElementById("myPopup").textContent="Called from button";
// var popup = document.getElementById("myPopup");
// popup.classList.toggle("show");
//alert("Hello!");




//sample toast
//Toastify({text: "DC EPU Clicked", duration: 2500, destination: "https://github.com/apvarun/toastify-js", newWindow: true, close: true,
//  gravity: "top",
//  position: 'right',
//  backgroundColor: "rgb(201, 76, 76)"
//}).showToast();
//Toastify({
//  text: "Hi",
//  duration: 4500,
//  destination: "https://github.com/apvarun/toastify-js",
//  newWindow: true,
//  close: true,
//  gravity: "top",
//  position: 'right',
//  backgroundColor: "rgb(201, 76, 76)"
//}).showToast();
//
//setTimeout(function() {
//  Toastify({
//    text: "Simple JavaScript Toasts",
//    gravity: "top",
//    position: 'center',
//    backgroundColor: "#0f3443",
//  }).showToast();
//}, 1000);
//
//// Options for the toast
//var options = {
//  text: "Happy toasting!",
//  duration: 2500,
//  callback: function() {
//    console.log("Toast hidden");
//    Toastify.reposition();
//  },
//  close: true,
//  backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
//};
//
//// Initializing the toast
//var myToast = Toastify(options);
//
//// Toast after delay
//setTimeout(function() {
//  myToast.showToast();
//}, 4500);
//
//setTimeout(function() {
//  Toastify({
//    text: "Highly customizable",
//    gravity: "bottom",
//    position: 'left',
//    close: true,
//    backgroundColor: "linear-gradient(to right, #ff5f6d, #ffc371)",
//  }).showToast();
//}, 3000);
//
//// Displaying toast on manual action `Try`
//document.getElementById("Start_DCmm_EPU").addEventListener("click", function() {
//  Toastify({
//    text: "I am a toast",
//    duration: 3000,
//    close: i % 3 ? true : false,
//    backgroundColor: bgColors[i % 2],
//  }).showToast();
//  i++;
//});