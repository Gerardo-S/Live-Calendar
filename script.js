// Display current day at the top of the calendar 
var todaysDate$ = $("#currentDay");
var momentDateformat = moment().format('dddd, MMMM Do');
todaysDate$.text(momentDateformat);
var currentTime = moment().format(' h:mm a');
console.log(currentTime);
var calendarhour = ["10:00 pm", "10:00 am", "11:00 am", "12:00 pm", "1:00 pm", "2:00 pm", "3:00 pm", "4:00 pm", "5:00 pm"];
console.log(calendarhour);
var savedInputs = [];
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

// Color change to current hour-------------
console.log(calendarhour[0]);

if (currentTime = $("#hour-9")) {

    alert("this works");

    // for hours 9-5pm if it matches current time change color to red
    // hours 9-5 can be found using hour class
    var currentDiv = $("#hour-9");
    currentDiv.css("background-color", "red");
    console.log(currentDiv);



};

