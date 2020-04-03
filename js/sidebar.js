
$('#SideBar_Home_Page').on('click', function(event) {
document.getElementById('Home_Page').style.display = "block";
document.getElementById('Reposition_Page').style.display = "none";
document.getElementById('Quick_Start_Page').style.display = "none";
document.getElementById('Freeze_Page').style.display = "none";
document.getElementById('Resets_Page').style.display = "none";
});

$('#SideBar_Reposition_Page').on('click', function(event) {
document.getElementById('Home_Page').style.display = "none";
document.getElementById('Reposition_Page').style.display = "block";
document.getElementById('Quick_Start_Page').style.display = "none";
document.getElementById('Freeze_Page').style.display = "none";
document.getElementById('Resets_Page').style.display = "none";
});

$('#SideBar_Quick_Start_Page').on('click', function(event) {
document.getElementById('Home_Page').style.display = "none";
document.getElementById('Reposition_Page').style.display = "none";
document.getElementById('Quick_Start_Page').style.display = "block";
document.getElementById('Freeze_Page').style.display = "none";
document.getElementById('Resets_Page').style.display = "none";
});

$('#SideBar_Freeze_Page').on('click', function(event) {
document.getElementById('Home_Page').style.display = "none";
document.getElementById('Reposition_Page').style.display = "none";
document.getElementById('Quick_Start_Page').style.display = "none";
document.getElementById('Freeze_Page').style.display = "block";
document.getElementById('Resets_Page').style.display = "none";
});

$('#SideBar_Resets_Page').on('click', function(event) {
document.getElementById('Home_Page').style.display = "none";
document.getElementById('Reposition_Page').style.display = "none";
document.getElementById('Quick_Start_Page').style.display = "none";
document.getElementById('Freeze_Page').style.display = "none";
document.getElementById('Resets_Page').style.display = "block";
});