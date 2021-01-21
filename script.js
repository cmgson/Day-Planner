
$rightNow = $('#currentDay');
$allTimeBlocks = $('.time-block');
$saveBtn = $('.saveBtn');
$textInput = $('textarea');
$moment = moment().format('H');
var rightNow = moment().format('LL');
//place current date in jumbotron
$rightNow.html(rightNow);
// console.log($moment);
function colorCode () {
    $textInput.each(function(){
        $dataValue = parseInt($(this).attr('data-value'));

        if ($dataValue > $moment) {
            $(this).addClass('future');
        } else if ($dataValue < $moment) {
            $(this).addClass('past');
                } else {
                    $(this).addClass('present');
                };

        // console.log($textInput.attr('class'));  
    });
};
function reload () {
    $textInput.each(function() {
        $timeofEvent = $(this).parent().attr("id");
        $event = localStorage.getItem($timeofEvent);
        // console.log($textSave);
        // console.log($activities);

        if ($event !== null) {
            $(this).val($event);
        };
        console.log($event);

    });
};

reload();

$saveBtn.on('click', function(){
    $timeofEvent = $(this).parent().attr("id");
    $textSave = $(this).parent().prev().find('textarea').val();
    localStorage.setItem($timeofEvent, JSON.stringify($textSave));
    
    // console.log(localStorage);
    
    // $textSave = $(this).parent().prev().find('textarea').val($textStorage)
    
    // console.log($textSave);
    // $savedText = $(this).parent().prev().find('textarea').val($textStorage);
    // console.log($savedText);

});
console.log(localStorage);

colorCode();


// console.log(moment().format('LTS'));
// console.log(moment().format('LL'));

