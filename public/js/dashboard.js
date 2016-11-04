(function(){
  angular.module('FishBiApp')
  .service('chartService', chartService);

  function chartService(){
    this.foo = "hello World";
    google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawHappinesPieChart);
      google.charts.setOnLoadCallback(drawVisualization);
      google.charts.setOnLoadCallback(drawChart);

      function drawHappinesPieChart() {

        // Create the data table for Customer Happy.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
          ['Jan', 3],
          ['Feb', 2],
          ['Mar', 3],
          ['Apr', 4],
          ['May', 5],
          ['Jun', 4],
          ['Jul', 3],
          ['Aug', 2],
          ['Sep', 3],
          ['Oct', 5],
          ['Nov', 4],
          ['Dec', 2]
        ]);

        // Set options for Sarah's pie chart.
        var options = {title:'Customer Happy',
                       width:600,
                       height:500};

        // Instantiate and draw the chart for Sarah's pizza.
        var chart = new google.visualization.PieChart(document.getElementById('Customer_chart_div'));
        chart.draw(data, options);
      }

      // Callback that draws the pie chart for Anthony's pizza.
      function drawVisualization() {
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
  }

      function drawChart() {
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
      }
  } //End of Chart Service
})();
