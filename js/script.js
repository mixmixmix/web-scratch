
$('#completness-graph').highcharts({
    chart: {
        type: 'spline'
    },
    title: {
        text: ''
    },
    xAxis: {
        type: 'datetime',
        labels: {
            overflow: 'justify'
        }
    },
    yAxis: {
        title: {
            text: 'Completness'
        },
        minorGridLineWidth: 0,
        gridLineWidth: 0,
        alternateGridColor: null,
        plotBands: [{ //RED
            from: 0,
            to: 50,
            color: 'rgba(255, 0, 0, 0.6)'
        }, { //YELLOW
            from: 50,
            to: 80,
            color: 'rgba(255, 255, 224, 0.6)'
            }
        , { // GREEN
            from: 80,
            to: 100,
            color: 'rgba(144, 238, 144,0.6)'
        }]
    },
    tooltip: {
        valueSuffix: ' m/s'
    },
    plotOptions: {
        spline: {
            lineWidth: 4,
            states: {
                hover: {
                    enabled: true,
                    lineWidth: 5
                }
            },
            pointInterval: 1, // one hour
            pointStart:0,
            events: {
                mouseOver: function () {
                    $('#greeting').text('MIND over matter!' );
                    this.chart.series[this.index].update({
                        color: 'blue'
                    });
                },
                mouseOut: function () {
                    this.chart.series[this.index].update({
                        color: "grey"
                    });
                }
            }
        }
    },
    series: [{
        name: 'Clinicken 1',
        color: "grey",
        data: [0.2, 0.8, 87, 0.8, 1, 1.3, 1.5, 2.9, 1.9, 2.6, 1.6, 3, 4, 3.6, 4.5, 4.2, 4.5, 4.5, 4, 3.1, 2.7, 4, 2.7, 2.3, 2.3, 4.1, 7.7, 7.1, 5.6, 6.1, 5.8, 8.6, 7.2, 9, 10.9, 11.5, 11.6, 11.1, 12, 12.3, 10.7, 9.4, 9.8, 9.6, 9.8, 9.5, 8.5, 7.4, 7.6]

    }, {
        name: 'Clinik 3',
        color: "grey",
        data: [0, 0, 0.6, 0.9, 0.8, 0.2, 0, 0, 0, 0.1, 0.6, 0.7, 0.8, 0.6, 0.2, 0, 0.1, 0.3, 0.3, 0, 0.1, 0, 0, 0, 0.2, 0.1, 0, 0.3, 0, 0.1, 0.2, 0.1, 0.3, 0.3, 0, 3.1, 3.1, 2.5, 1.5, 1.9, 2.1, 1, 2.3, 1.9, 1.2, 0.7, 1.3, 0.4, 0.3]
    }],
    navigation: {
        menuItemStyle: {
            fontSize: '10px'
        }
    }
});


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
    $body.append('SCRIPT WORKED mix'); 
    return false;
};

$('#form-container').submit(loadData);
