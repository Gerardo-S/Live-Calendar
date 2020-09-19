// Display current day at the top of the calendar 
var todaysDate$ = $("#currentDay");
var momentDateformat = moment().format('dddd, MMMM Do');
todaysDate$.text(momentDateformat);


var savedInputs = [];

renderLastDescription();
function renderLastDescription() {

    if (savedInputs== null) {
        return;
    }
    var x= JSON.parse(localStorage.getItem("description"));
    
    
    // savedInputs.push(x);
    console.log(x);
    console.log(savedInputs);
    if(x== null){
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


// Row blocks will change color based on current time 
// Set interval in which blocks refresh and change color 
// Compare current time with hours in the past & future 
// set current color to red
// set past color to gray 
// set future colors to green
// use for loop 
