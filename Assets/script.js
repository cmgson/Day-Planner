$rightNow = $("#currentDay");
$allTimeBlocks = $(".time-block");
$saveBtn = $(".saveBtn");
$textInput = $("textarea");
$moment = moment().format("H");
var rightNow = moment().format("LL");
//place current date in jumbotron
$rightNow.html(rightNow);
//colorCode checks for the data value of each row and then assigns the class with background colors to match times
function colorCode() {
  $textInput.each(function () {
    $dataValue = parseInt($(this).attr("data-value"));
    if ($dataValue > $moment) {
      $(this).addClass("future");
    } else if ($dataValue < $moment) {
      $(this).addClass("past");
    } else {
      $(this).addClass("present");
    }
  });
};
//reload gets local storage, checks if it has a value, and loads it to the page
function reload() {
  $textInput.each(function () {
    console.log(this);
    $timeofEvent = $(this).attr("data-value");
    $event = localStorage.getItem($timeofEvent);
    if ($event !== null) {
      $(this).val($event);
    }
  });
};

reload();
//the click event is attached to the buttons and sets storage of the associated textarea
$saveBtn.on("click", function () {
  $timeofEvent = $(this).parent().attr("id");
  $textSave = $(this).parent().prev().find("textarea").val();
  localStorage.setItem($timeofEvent, $textSave);
});

colorCode();
