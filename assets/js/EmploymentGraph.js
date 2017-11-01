




google.charts.load("current", {packages:["timeline"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var container = document.getElementById('employmentGraph');
    var chart = new google.visualization.Timeline(container);
    var dataTable = new google.visualization.DataTable();
    dataTable.addColumn({ type: 'string', id: 'Term' });
    dataTable.addColumn({ type: 'string', id: 'Name' });
    dataTable.addColumn({ type: 'date', id: 'Start' });
    dataTable.addColumn({ type: 'date', id: 'End' });
    dataTable.addRows([
        [ 'School', 'York Tech', new Date(2013, 7, 1), new Date(2014, 6, 30) ],
        [ 'School', 'USC Columbia', new Date(2014, 7, 1), new Date(2017, 6, 1) ],
        [ 'Industry', 'Sagitec Solutions',  new Date(2017, 2, 1),  new Date() ],
        [ 'Industry', 'DAK Americas',  new Date(2016, 5, 1),  new Date(2016,8,30) ],
        [ 'Industry', 'Savanna River Remediation',  new Date(2015, 5, 1),  new Date(2015,8,30) ],
        //[ 'Industry', 'UCI',  new Date(2011, 5, 1),  new Date(2012,8,30) ],
        [ 'Academic', 'Teaching Assistant',  new Date(2015, 6, 1),  new Date(2017,1,1) ],
        //[ 'Robotics', 'Research Assistant (AFRL)',  new Date(2014, 10, 1),  new Date(2016,12,30) ],
        //[ 'Chemistry', 'Research Assistant (Neurotransmitter)',  new Date(2015, 7, 1),  new Date(2016,8,30) ],
        [ 'Research', 'Research Assistant',  new Date(2014, 10, 1),  new Date(2016,12,30) ],
        [ 'Contract Work', 'Private Tutor',  new Date(2016, 1, 1),  new Date(2017,6,1) ],
        [ 'Contract Work', 'Leapforce',  new Date(2013, 5, 1),  new Date(2015,10,30) ],
        [ 'Entrepreneurial', 'Style Connect',  new Date(2016, 6, 1),  new Date(2017,8,1) ],
        [ 'Entrepreneurial', 'BluechipAI',  new Date(2017, 8, 1),  new Date() ]


    ]);

    var options = {
        timeline: { showRowLabels: true },
        'height':400
    };


    chart.draw(dataTable, options);
}
$(window).on('resizeEnd', function() {
    drawChart(data);
});
$(window).resize(function() {
    if(this.resizeTO) clearTimeout(this.resizeTO);
    this.resizeTO = setTimeout(function() {
        $(this).trigger('resizeEnd');
    }, 500);
});