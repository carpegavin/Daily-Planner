
  //display dynamic date
let currentDay = null, date = null;

let update = function () {
date = moment(new Date())
currentDay.html(date.format('YYYY-MM-DD HH:mm'));
};

$(document).ready(function(){
currentDay = $('#currentDay')
update();
setInterval(update, 1000);
});

//-----------SET VARIABLES---------------------------------------------------

let saveBtn = $('.saveBtn');
let clearBtn = $('reset');
let userInput = $('present')


//--------SET ARRAY OF OBJECTS---------------------------------------------------------


let hour9 = { 
    "row": $('#userTask9').val(),
    "value": 9};

let hour10 = {
    "row": $('#userTask10').val(), 
    "value": 10};

let hour11 = {
    "row": $('#userTask11').val(), 
    "value": 11};

let hour12 = {
    "row": $('#userTask12').val(),
    "value": 12};

let hour13 = {
    "row": $('#userTask1').val(),
    "value": 1};

let hour14 = {
    "row": $('#userTask2').val(),
    "value": 2};

let hour15 = {
    "row": $('#userTask3').val(),
    "value": 3};

let hour16 = {
    "row": $('#userTask4').val(),
    "value": 4};

let hour17 = {
    "row": $('#userTask5').val(),
    "value": 5};

    
 
//-----------------//LOGIC-------------------------------

//for loop to retrieve from local storage

for (i=9; i<=17; i++){
    $('#userTask'+i).val(localStorage.getItem("userTask"+i))
}

//-------------9---------------------------------------

if (hour9.value === moment().hour())
    {$('#userTask9').css({"background-color":"#ff6961"})}

else if (hour9.value < moment().hour()) 
    {$('#userTask9').css({"background-color":"#d3d3d3"})}

else if (hour9.value > moment().hour())
    {$('#userTask9').css({"background-color":"#77dd77"})}

//------------10------------------------------------------------

if (hour10.value === moment().hour())
    {$('#userTask10').css({"background-color":"#ff6961"})}

else if (hour10.value < moment().hour()) 
    {$('#userTask10').css({"background-color":"#d3d3d3"})}

else if (hour10.value > moment().hour())
    {$('#userTask10').css({"background-color":"#77dd77"})}

//-------------11-----------------------------------------------

if (hour11.value === moment().hour())
    {$('#userTask11').css({"background-color":"#ff6961"})}

else if (hour11.value < moment().hour()) 
    {$('#userTask11').css({"background-color":"#d3d3d3"})}

else if (hour11.value > moment().hour())
    {$('#userTask11').css({"background-color":"#77dd77"})}

//-------------12-------------------------------------------------
if (hour12.value === moment().hour())
    {$('#userTask12').css({"background-color":"#ff6961"})}

else if (hour12.value < moment().hour()) 
    {$('#userTask12').css({"background-color":"#d3d3d3"})}

else if (hour12.value > moment().hour())
    {$('#userTask12').css({"background-color":"#77dd77"})}

//-----------------13-------------------------------------------
if (hour13.value === moment().hour())
    {$('#userTask13').css({"background-color":"#ff6961"})}

else if (hour13.value < moment().hour()) 
    {$('#userTask13').css({"background-color":"#d3d3d3"})}

else if (hour13.value > moment().hour())
    {$('#userTask13').css({"background-color":"#77dd77"})}
    
 //------------------14------------------------------------------   
if (hour14.value === moment().hour())
    {$('#userTask14').css({"background-color":"#ff6961"})}

else if (hour14.value < moment().hour()) 
    {$('#userTask14').css({"background-color":"#d3d3d3"})}

else if (hour14.value > moment().hour())
    {$('#userTask14').css({"background-color":"#77dd77"})}

//---------------------15---------------------------------------
if (hour15.value === moment().hour())
    {$('#userTask15').css({"background-color":"#ff6961"})}

else if (hour15.value < moment().hour()) 
    {$('#userTask15').css({"background-color":"#d3d3d3"})}

else if (hour15.value > moment().hour())
    {$('#userTask15').css({"background-color":"#77dd77"})}

//----------------------16------------------------------------
if (hour16.value === moment().hour())
    {$('#userTask16').css({"background-color":"#ff6961"})}

else if (hour16.value < moment().hour()) 
    {$('#userTask16').css({"background-color":"#d3d3d3"})}

else if (hour16.value > moment().hour())
    {$('#userTask16').css({"background-color":"#77dd77"})}


if (hour17.value === moment().hour())
    {$('#userTask17').css({"background-color":"#ff6961"})}

else if (hour17.value < moment().hour()) 
    {$('#userTask17').css({"background-color":"#d3d3d3"})}

else if (hour17.value > moment().hour())
    {$('#userTask17').css({"background-color":"#77dd77"})}



//------------STORE USER INPUT---------------------------------------

function saveLocally() {
    let data = $(this).prev().val()
    let key = $(this).prev().attr("id")

    localStorage.setItem(key, data)
}

saveBtn.on('click', saveLocally)



