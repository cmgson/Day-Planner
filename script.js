
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

$saveBtn = $('.saveBtn');
$textInput = $('textarea');
var rightNow = moment().format('LL');
//place current date in jumbotron
$rightNow.html(rightNow);

function print () {
    $textInput.each(function(){
        $dataValue = $(this).attr('data-value');
        parseInt($dataValue);
    
        $moment = moment().format('H');
        parseInt($moment);
        
        
        if ($moment > $dataValue) {
            $(this).addClass('future');
        }  
        console.log($textInput.attr('class'));  
    })


};
print();


// console.log(moment().format('LTS'));
// console.log(moment().format('LL'));

