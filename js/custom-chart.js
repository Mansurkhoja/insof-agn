var ctxWeek = document.getElementById('chartByWeek').getContext('2d');
var backgroundWeek = ctxWeek.createLinearGradient(0, 0, 0, 600);
backgroundWeek.addColorStop(0, '#ff7655');
backgroundWeek.addColorStop(1, '#ff2a48');
var backgroundWeekHover = ctxWeek.createLinearGradient(0, 0, 0, 600);
backgroundWeekHover.addColorStop(0, '#ff5830');
backgroundWeekHover.addColorStop(1, '#e61230');

var dataWeek = {
    labels: ['Пн.', 'Вт.', 'Ср.', 'Чт.', 'Пт.', 'Сб.', 'Вс.'],
    datasets: [{
        label: 'Потрачено',
        data: [10, 3, 7.3, 8, 2.5, 6, 7],
        backgroundColor: [
            backgroundWeek,
            backgroundWeek,
            backgroundWeek,
            backgroundWeek,
            backgroundWeek,
            backgroundWeek,
            backgroundWeek
        ],
        hoverBackgroundColor: [
            backgroundWeekHover,
            backgroundWeekHover,
            backgroundWeekHover,
            backgroundWeekHover,
            backgroundWeekHover,
            backgroundWeekHover,
            backgroundWeekHover
        ],
    }]
};
var chartWeek = new Chart(ctxWeek, {
    type: 'bar',
    data: dataWeek,
    options: {
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                gridLines: {
                    display: false
                },
                ticks: {
                    display: false
                }
            }],
            xAxes: [{
                gridLines: {
                    display: false
                },
                ticks: {
                    fontColor: '#ff2a48',
                    fontSize: '16',
                }

            }]
        }
    }
});
var dataMonth = {
    labels: ['Интернет-магазины и сервисы', 'Мобильная связь', 'Такси', 'Аптека', 'Коммунальные услуги'],
    datasets: [{
        label: false,
        data: [1, 2, 3, 4, 5],
        backgroundColor: [
            '#9e65d1',
            '#ff7655',
            '#e26910',
            '#2caa40',
            '#ff2a48'
        ],
        hoverBackgroundColor: [
            '#8953c1',
            '#f4583d',
            '#c95c12',
            '#23d834',
            '#ed183c'
        ],
        borderWidth: 1,
        borderColor: [
            '#ffffff',
            '#ffffff',
            '#ffffff',
            '#ffffff',
            '#ffffff'
        ],
    }]
};
var chartMonth = new Chart(document.getElementById('chartByMonth'), {
    plugins: [{
        beforeDraw: function(e) {
            var width = e.chart.width,
                height = e.chart.height,
                ctxMonth = e.chart.ctx;
            var fontSize = height / 2;
            ctxMonth.font = fontSize + "% ArialTj sans-serif";
            ctxMonth.textBaseline = "middle";
            var text = "4050,07 сом",
                textX = (width - ctxMonth.measureText(text).width) / 2,
                textY = height / 2;
            ctxMonth.fillText(text, textX, textY);

        }
    }],
    type: 'doughnut',
    data: dataMonth,
    options: {
        elements: {
            center: {
                text: '50%'
            }
        },
        cutoutPercentage: 84,
        responsive: true,
        legend: {
            display: false
        }
    }
});