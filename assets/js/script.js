
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

//-------------------------------------------------------------------


let hour9 = { 
    "row": $('#userTask9').val(),
    "value": 9};

let hour10 = {
    "row": $('#userTask10').get(0), 
    "value": 10};

let hour11 = {
    "row": $('#userTask11').get(0), 
    "value": 11};

let hour12 = {
    "row": $('#userTask12').get(0),
    "value": 12};

let hour13 = {
    "row": $('#userTask1').get(0),
    "value": 1};

let hour14 = {
    "row": $('#userTask2').get(0),
    "value": 2};

let hour15 = {
    "row": $('#userTask3').get(0),
    "value": 3};

let hour16 = {
    "row": $('#userTask4').get(0),
    "value": 4};

let hour17 = {
    "row": $('#userTask5').get(0),
    "value": 5};

    
 
//----------------------------------------------------------------------
//LOGIC 
for (i=9; i<=17; i++){
    $('#userTask'+i).val(localStorage.getItem("userTask"+i))
}
//-------------9---------------------------------------

// $('#userTask9').val(localStorage.getItem("userTask9"))

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
// localStorage.setItem('userTask9', JSON.stringify(string));
// var s = JSON.stringify(obj)
// var o = JSON.parse(s)


saveBtn.on('click', saveLocally)

// submitform(userInput);
// {
//     localStorage.setItem( '.present', JSON.stringify() );
// }
// formData = JSON.stringify($("#userTask9").serializeArray());


// $('.saveBtn').on('click', function(){
//     let post_vars = $('#userTask1').serializeArray();
//     localStorage.setItem(id_vars);
// })

