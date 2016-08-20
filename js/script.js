
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview
    var streetName = $('#street').val();
    var cityName = $('#city').val();
    var addr = streetName + ', ' + cityName;
    // YOUR CODE GOES HERE!
    $greeting.text('Welcome to' + addr + "!" );
    var imgSrc='http://maps.googleapis.com/maps/api/streetview?size=600x300&location=' + addr ;
    $body.append('<img class="bgimg" src="' + imgSrc + '">'); 
    $body.append('SCRIPT WORKED'); 
    return false;
};

$('#form-container').submit(loadData);
