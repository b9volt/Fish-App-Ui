(function(){
  angular.module('FishBiApp')
  .controller('ChartsController', ChartsController);

  ChartsController.$inject = ['dataService'];


  function ChartsController(dataService){
    var self = this;

    //local functions used as the basis for the charts


    var calculateBarChartData = function() {
      console.log('Hello from ');

    }; //end calculateBarChartData

    var calculateLineChartData = function() {


    }; //end calculateLineChartData






    /**
     * We want the charts positioned above the list of trips.  This presents an issue on the first
     * load: load order is from top to bottom, so the charts load and then we load TripsController, which gets the data from the
     * database . . . so the charts load before the data is here.  To fix this, I tried to put the 'get data from TripsController'
     * and the chart-drawing callbacks in a setTimeout 4000.
     */

    var getDataAndDrawCharts = function() {
      //refresh data from the data service


      //after Google packages load (called in 'google.charts.load . . . '), draw the charts
      google.charts.setOnLoadCallback(drawHappinesPieChart(calculateLineChartData()));
      google.charts.setOnLoadCallback(drawBarChart);
      google.charts.setOnLoadCallback(drawLineChart);

    }; //end getDataAndDrawCharts

    if (dataService.tripData.length === 0) {
        setTimeout(getDataAndDrawCharts,4000);
    } else {
      getDataAndDrawCharts();
    }

    //load Google packages
    google.charts.load('current', {'packages':['corechart']});




    function drawHappinesPieChart() {
      var calculatePieChartData = function() {

        var numHappyCustomers = 0;
        var tripData = dataService.tripData;

        console.log('Hello from calculatePieChartData, tripData is ',tripData);

        if (tripData === []) {
          return [];
        }

        tripData.forEach(function(element) {
          if (element.clientsHappy) {
            numHappyCustomers++;
          }
        });

        return [['Happy',numHappyCustomers],['Unhappy',tripData.length - numHappyCustomers]];
      }; //end calculatePieChartData

      // Create the data table for Customer Happy.
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Customer Sentiment');
      data.addColumn('number', 'Number');
      data.addRows(calculatePieChartData());

      // Set options for the pie chart.
      var options = {title:'Customer Happiness',
                     width:600,
                     height:500};

      // Instantiate and draw the chart
      var chart = new google.visualization.PieChart(document.getElementById('Customer_chart_div'));
      chart.draw(data, options);
    } //end drawHappinesPieChart




    function drawBarChart() {
        // Some raw data (not necessarily accurate)
        var data = google.visualization.arrayToDataTable([
         ['Month', 'Location A', 'Location B', 'Location C', 'Location D', 'Location E', 'Average'],
         ['Jan',  165,      938,         522,             998,           450,      614.6],
         ['Feb',  135,      1120,        599,             1268,          288,      682],
         ['Mar',  157,      1167,        587,             807,           397,      623],
         ['Apr',  139,      1110,        615,             968,           215,      609.4],
         ['May',  136,      691,         629,             1026,          366,      569.6],
         ['Jun',  139,      1110,        615,             968,           215,      609.4],
         ['Jul',  136,      691,         629,             1026,          366,      569.6],
         ['Aug',  139,      1110,        615,             968,           215,      609.4],
         ['Sep',  136,      691,         629,             1026,          366,      569.6],
         ['Oct',  139,      1110,        615,             968,           215,      609.4],
         ['Nov',  136,      691,         629,             1026,          366,      569.6],
         ['Dec',  136,      691,         629,             1026,          366,      569.6]
      ]);

      var options = {
        title : 'Fishing Locations',
        vAxis: {title: 'Fish Caught'},
        hAxis: {title: 'Month'},
        seriesType: 'bars',
        series: {5: {type: 'line'}}
      };

      var chart = new google.visualization.ComboChart(document.getElementById('location_chart_div'));
      chart.draw(data, options);
    }//end drawBarChart

    function drawLineChart() {
      var data = google.visualization.arrayToDataTable([
        ['Month', 'Fish', 'Expenses'],
        ['Jan',  620,      400],
        ['Feb',  520,      460],
        ['Mar',  770,       1120],
        ['Apr',  860,      540],
        ['May',  1010,      400],
        ['Jun',  1170,      460],
        ['Jul',  840,       1120],
        ['Aug',  720,      540],
        ['Sep',  1000,      400],
        ['Oct',  1170,      460],
        ['Nov',  920,       1120],
        ['Dec',  730,      540]
      ]);

      var options = {
        title: 'Fish Caught',
        hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
        vAxis: {minValue: 0}
      };

      var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    }//end drawLineChart
  } //End of ChartsController
})();
