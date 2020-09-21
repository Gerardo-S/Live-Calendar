// Display current day at the top of the calendar 
var todaysDate$ = $("#currentDay");
var momentDateformat = moment().format('dddd, MMMM Do');
todaysDate$.text(momentDateformat);
var currentTime = moment().format(' k:mm ');
console.log(currentTime);
var calendarHour = ["9:00" , "10:00" , "11:00" ,"12:00" , "13:00" , "14:00" , "15:00" , "16:00" , "17:00"];
console.log(calendarHour);
var savedInputs = [];
resetColor();
// ------------------------------localStorage------------------------------
renderLastDescription();
function renderLastDescription() {

    if (savedInputs == null) {
        return;
    }
    var x = JSON.parse(localStorage.getItem("description"));


    // savedInputs.push(x);

    if (x == null) {
        return;
    }
    $(".description1").text(x[0]);
    $(".description2").text(x[1]);
    $(".description3").text(x[2]);
    $(".description4").text(x[3]);
    $(".description5").text(x[4]);
    $(".description6").text(x[5]);
    $(".description7").text(x[6]);
    $(".description8").text(x[7]);
    $(".description9").text(x[8]);

};


$(document).on("click", ".saveBtn", function () {
    var description = ($(this).prev().val());
    savedInputs.push(description);
    // console.log(savedInputs);
    localStorage.setItem("description", JSON.stringify(savedInputs));


    renderLastDescription();


});

// -----------------------------------------------localStorage end-------------------


// -----------------------------------Description color change based on current time------------------------------------------------------
function resetColor (){
    for (var i = 0;i<calendarHour.length; i++ ){
    var idHour= "[id$="  + (9+ i)  + "]";
    
    if (parseInt(calendarHour[i]) == parseInt(currentTime)) {

        $(idHour).css("background-color", "#ff6961");
    
    }
    // If currentTime is greater than the time text change background color to gray
    else if (parseInt(currentTime) > parseInt(calendarHour[i])) {
    
        $(idHour).css("background-color", "#d3d3d3" );
    } 
    // else this is in the past, change the color green
    else {
    
        $(idHour).css("background-color", "#77dd77");
    
    }
    };


}

// --------------------------------Description color change ends here ---------------------------------------------------------------------------

// --------------------------------Refresh page to show color changes----------------------------------------------------
// refresh color every 15 seconds
setInterval(resetColor(), 15,000);