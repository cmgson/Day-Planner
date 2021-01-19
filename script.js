
$rightNow = $('#currentDay');
$allTimeBlocks = $('.time-block');
$nine = $('#9');
$ten = $('#10');
$eleven = $('#11');
$noon = $('#12');
$one = $('#1');
$two = $('#2');
$three = $('#3');
$four = $('#4');
$five = $('#5');
$textid5 = $('#five')
$saveBtn = $('.saveBtn');
$textInput = $('textarea');
$moment = moment().format('H');
var rightNow = moment().format('LL');
//place current date in jumbotron
$rightNow.html(rightNow);
console.log($moment);
function print () {
    $textInput.each(function(){
        $dataValue = parseInt($(this).attr('data-value'));
    
       
        if ($dataValue > $moment) {
            $(this).addClass('future');
        } else if ($dataValue < $moment) {
            $(this).addClass('past');
                } else {
                    $(this).addClass('present');
                };

        console.log($textInput.attr('class'));  
    });
};

print();


// console.log(moment().format('LTS'));
// console.log(moment().format('LL'));

