const charts = document.querySelectorAll(".chart");

charts.forEach(function (charts) {
    var ctx = chart.getContext("2d");
    var myChart= new charts(ctx, {
        type: "bar",
        data: {
            label:["red","blue","yellow","green","purple","orange"],
            datasets: [ 
                {
                    label: "# of votes",
                    data:[12,19,3,5,2,3],
              backgroundcolor: [
                "rgba(255,99,132,0.2)",
                "rgba(54,162,135,0.2)",
                "rgba(255,206,86,0.2)",
                "rgba(74,192,192,0.2)",
                "rgba(153,102,255,0.2)",
                "rgba(255,159,64,0.2)",
              ],
              borderColor: [
                "rgba(255,99,132,1)",
                "rgba(54,162,135,1)",
                "rgba(255,206,86,1)",
                "rgba(74,192,192,1)",
                "rgba(153,102,255,1)",
                "rgba(255,159,64,1)",
              ],
              borderWidth: 1,
                },
            ],
        },
        options: {
            scales: {
                Y: {
                    beginAtZero: true,
                },
            },
        },
    });
});
$(document).ready(function () {
    $(".data-table").each((_, table) {
        $(table).DataTable();
    });
});