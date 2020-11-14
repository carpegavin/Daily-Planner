
//-----------DYNAMIC DATE---------------------------------------------------
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

//-----------SET CONSTS---------------------------------------------------

const saveBtn = $('.saveBtn');
const clearBtn = $('reset');
const userInput = $('present');
const hourBtn = $('.hour');

//--------SET ARRAY OF OBJECTS WITH KEYS AND VALUES------------------------

//-----------------------------------
let hour9 = { 
    "row": $('#userTask9').val(),
    "value": 9};
//-----------------------------------
let hour10 = {
    "row": $('#userTask10').val(), 
    "value": 10};
//-----------------------------------
let hour11 = {
    "row": $('#userTask11').val(), 
    "value": 11};
//-----------------------------------
let hour12 = {
    "row": $('#userTask12').val(),
    "value": 12};
//-----------------------------------
let hour13 = {
    "row": $('#userTask1').val(),
    "value": 13};
//-----------------------------------
let hour14 = {
    "row": $('#userTask2').val(),
    "value": 14};
//-----------------------------------
let hour15 = {
    "row": $('#userTask3').val(),
    "value": 15};
//-----------------------------------
let hour16 = {
    "row": $('#userTask4').val(),
    "value": 16};
//-----------------------------------
let hour17 = {
    "row": $('#userTask5').val(),
    "value": 17};
//-----------------------------------
    
 
//-----------------------------LOGIC-------------------------------------------


//--------SET FOR-LOOP TO RETRIEVE USER INPUT FROM L.STORAGE---------

for (i=9; i<=17; i++){
    $('#userTask'+i).val(localStorage.getItem("userTask"+i))
}
//---------------------------------------------------------


//----------------------9HR----------------------------------
if (hour9.value === moment().hour())
    {$('#userTask9').css({"background-color":"#ff6961"})}

else if (hour9.value < moment().hour()) 
    {$('#userTask9').css({"background-color":"#d3d3d3"})}

else if (hour9.value > moment().hour())
    {$('#userTask9').css({"background-color":"#77dd77"})}

//----------------------10HR-----------------------------------
if (hour10.value === moment().hour())
    {$('#userTask10').css({"background-color":"#ff6961"})}

else if (hour10.value < moment().hour()) 
    {$('#userTask10').css({"background-color":"#d3d3d3"})}

else if (hour10.value > moment().hour())
    {$('#userTask10').css({"background-color":"#77dd77"})}

//----------------------11HR---------------------------------
if (hour11.value === moment().hour())
    {$('#userTask11').css({"background-color":"#ff6961"})}

else if (hour11.value < moment().hour()) 
    {$('#userTask11').css({"background-color":"#d3d3d3"})}

else if (hour11.value > moment().hour())
    {$('#userTask11').css({"background-color":"#77dd77"})}

//----------------------12HR--------------------------------
if (hour12.value === moment().hour())
    {$('#userTask12').css({"background-color":"#ff6961"})}

else if (hour12.value < moment().hour()) 
    {$('#userTask12').css({"background-color":"#d3d3d3"})}

else if (hour12.value > moment().hour())
    {$('#userTask12').css({"background-color":"#77dd77"})}

//----------------------13HR---------------------------------
if (hour13.value === moment().hour())
    {$('#userTask13').css({"background-color":"#ff6961"})}

else if (hour13.value < moment().hour()) 
    {$('#userTask13').css({"background-color":"#d3d3d3"})}

else if (hour13.value > moment().hour())
    {$('#userTask13').css({"background-color":"#77dd77"})}
    
 //---------------------14HR-------------------------------- 
if (hour14.value === moment().hour())
    {$('#userTask14').css({"background-color":"#ff6961"})}

else if (hour14.value < moment().hour()) 
    {$('#userTask14').css({"background-color":"#d3d3d3"})}

else if (hour14.value > moment().hour())
    {$('#userTask14').css({"background-color":"#77dd77"})}

//----------------------15HR---------------------------------
if (hour15.value === moment().hour())
    {$('#userTask15').css({"background-color":"#ff6961"})}

else if (hour15.value < moment().hour()) 
    {$('#userTask15').css({"background-color":"#d3d3d3"})}

else if (hour15.value > moment().hour())
    {$('#userTask15').css({"background-color":"#77dd77"})}

//----------------------16HR---------------------------------
if (hour16.value === moment().hour())
    {$('#userTask16').css({"background-color":"#ff6961"})}

else if (hour16.value < moment().hour()) 
    {$('#userTask16').css({"background-color":"#d3d3d3"})}

else if (hour16.value > moment().hour())
    {$('#userTask16').css({"background-color":"#77dd77"})}

//----------------------17HR--------------------------------
if (hour17.value === moment().hour())
    {$('#userTask17').css({"background-color":"#ff6961"})}

else if (hour17.value < moment().hour()) 
    {$('#userTask17').css({"background-color":"#d3d3d3"})}

else if (hour17.value > moment().hour())
    {$('#userTask17').css({"background-color":"#77dd77"})}

//--------------------------------------------------------



//------------STORE USER INPUT-----------------------------------------------

function saveLocally() {
    let data = $(this).prev().val();
    let key = $(this).prev().attr("id");

    localStorage.setItem(key, data);
}

saveBtn.on('click', saveLocally);
//---------------------------------------------------------------


//----------------CLEAR CALENDAR INPUTS---------------------------

$(document).ready(function(){
    $('#reset').click(function(){				
        if(confirm("Are you sure you wanna clear it?")){
            /*Clear all input type="text" box*/
            $('#clear input[type="text"]').val('') 
            
            
        }					
    });
});

// function deleteItems(){
//     $('#reset').click(function(){	
//     localStorage.clear();
//     }


//-----------------CLEAR CALENDAR ATTEMPTS BELOW---------------------


// $(document).ready(function(){
//     $("#reset").click(function(){
//       $(".row").remove();
//     });
//   });


//-----------attempt 4--------------------
// $(document).ready(function(){
//     $('#reset').click(function(){				
//         if(confirm("Want to clear?")){
//             /*Clear all input type="text" box*/
//             {$('#userTask17').val('');
            
            
//         }					
    

//------------attempt 3----------------
// window.onbeforeunload = function() {
//     localStorage.removeItem(row);
//     return '';
//   };

//----------attempt 2----------------
// function removeInputs() {
//     let 
// }
// hourBtn.on('click', removeInputs)

//----------attempt 1-----------------
// function removeLocally() {
//     let data = $(this).prev().val(null);
//     let key = $(this).prev().attr("id");

//     localStorage.removeItem(key, data);

// } 
//     hourBtn.on('click', removeLocally);
