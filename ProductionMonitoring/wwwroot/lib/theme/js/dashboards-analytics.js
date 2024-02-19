/**
 * Dashboard Analytics
 */

'use strict';

(function () {
  let cardColor, headingColor, axisColor, shadeColor, borderColor;

  cardColor = config.colors.white;
  headingColor = config.colors.headingColor;
  axisColor = config.colors.axisColor;
  borderColor = config.colors.borderColor;

  
    // Total Year - Radial bar Chart
    // ----------------------------------------------------------------------

    const chartTotalYear = document.querySelector('#totalYear'),
        orderYearConfig = {
            chart: {
                height: 200,
                width: 230,
                type: 'donut'
            },
            labels: ['Plan', 'Actual', 'Remain'],
            series: [1200, 800, 400],
            colors: [config.colors.success, config.colors.warning, config.colors.danger],
            stroke: {
                width: 5,
                colors: cardColor
            },
            dataLabels: {
                enabled: false,
                formatter: function (val, opt) {
                    return parseInt(val) + '%';
                }
            },
            legend: {
                show: false
            },
            responsive: [{
                breakpoint: 576,
                options: {
                    chart: {
                        height: 190,
                        width: 190
                    }
                },
            },
                {
                    breakpoint: 768,
                    options: {
                        chart: {
                            height: 190,
                            width: 190
                        }
                    },
                },
                {
                    breakpoint: 992,
                    options: {
                        chart: {
                            height: 190,
                            width: 190
                        }
                    },
                },
                {
                    breakpoint: 1200,
                    options: {
                        chart: {
                            height: 170,
                            width: 130
                        }
                    },
                },
                {
                    breakpoint: 1400,
                    options: {
                        chart: {
                            height: 190,
                            width: 150
                        }
                    },
                },
                {
                    breakpoint: 1900,
                    options: {
                        chart: {
                            height: 190,
                            width: 150
                        }
                    },
                }],
            grid: {
                padding: {
                    top: 0,
                    bottom: 0,
                    right: 15
                }
            },
            plotOptions: {
                pie: {
                    donut: {
                        size: '75%',
                        labels: {
                            show: true,
                            value: {
                                fontSize: '1.5rem',
                                fontFamily: 'Public Sans',
                                color: headingColor,
                                offsetY: -15,
                                formatter: function (val) {
                                    return parseInt(val);
                                }
                            },
                            name: {
                                offsetY: 20,
                                fontFamily: 'Public Sans'
                            },
                            total: {
                                show: true,
                                fontSize: '0.8125rem',
                                color: axisColor,
                                label: 'Product',
                                formatter: function (w) {
                                    return '38%';
                                }
                            }
                        }
                    }
                }
            }
        };
    if (typeof chartTotalYear !== undefined && chartTotalYear !== null) {
        const yearChart = new ApexCharts(chartTotalYear, orderYearConfig);
        yearChart.render();
    }


    // Total Month - Radial bar Chart
    // ----------------------------------------------------------------------

    const chartTotalMonth = document.querySelector('#totalMonth'),
        orderMonthConfig = {
            chart: {
                height: 200,
                width: 230,
                type: 'donut'
            },
            labels: ['Plan', 'Actual'],
            series: [1200, 800],
            colors: [config.colors.success, config.colors.warning],
            stroke: {
                width: 5,
                colors: cardColor
            },
            dataLabels: {
                enabled: false,
                formatter: function (val, opt) {
                    return parseInt(val) + '%';
                }
            },
            legend: {
                show: false
            },
            responsive: [{
                breakpoint: 576,
                options: {
                    chart: {
                        height: 190,
                        width: 190
                    }
                },
            },
            {
                breakpoint: 768,
                options: {
                    chart: {
                        height: 190,
                        width: 190
                    }
                },
            },
            {
                breakpoint: 992,
                options: {
                    chart: {
                        height: 180,
                        width: 160
                    }
                },
            },
            {
                breakpoint: 1200,
                options: {
                    chart: {
                        height: 180,
                        width: 150
                    }
                },
            },
            {
                breakpoint: 1400,
                options: {
                    chart: {
                        height: 190,
                        width: 150
                    }
                },
            },
            {
                breakpoint: 1900,
                options: {
                    chart: {
                        height: 190,
                        width: 150
                    }
                },
            }],
            grid: {
                padding: {
                    top: 0,
                    bottom: 0,
                    right: 15
                }
            },
            plotOptions: {
                pie: {
                    donut: {
                        size: '75%',
                        labels: {
                            show: true,
                            value: {
                                fontSize: '1.5rem',
                                fontFamily: 'Public Sans',
                                color: headingColor,
                                offsetY: -15,
                                formatter: function (val) {
                                    return parseInt(val);
                                }
                            },
                            name: {
                                offsetY: 20,
                                fontFamily: 'Public Sans'
                            },
                            total: {
                                show: true,
                                fontSize: '0.8125rem',
                                color: axisColor,
                                label: 'Product',
                                formatter: function (w) {
                                    return '38%';
                                }
                            }
                        }
                    }
                }
            }
        };
    if (typeof chartTotalMonth !== undefined && chartTotalMonth !== null) {
        const monthChart = new ApexCharts(chartTotalMonth, orderMonthConfig);
        monthChart.render();
    }


    // Total Daily - Radial bar Chart
    // ----------------------------------------------------------------------

    const chartTotalDaily = document.querySelector('#totalDaily'),
        orderDailyConfig = {
            chart: {
                height: 200,
                width: 230,
                type: 'donut'
            },
            labels: ['Plan', 'Actual'],
            series: [1200, 800],
            colors: [config.colors.success, config.colors.warning],
            stroke: {
                width: 5,
                colors: cardColor
            },
            dataLabels: {
                enabled: false,
                formatter: function (val, opt) {
                    return parseInt(val) + '%';
                }
            },
            legend: {
                show: false
            },
            responsive: [{
                breakpoint: 576,
                options: {
                    chart: {
                        height: 190,
                        width: 190
                    }
                },
            },
            {
                breakpoint: 768,
                options: {
                    chart: {
                        height: 190,
                        width: 190
                    }
                },
            },
            {
                breakpoint: 992,
                options: {
                    chart: {
                        height: 180,
                        width: 160
                    }
                },
            },
            {
                breakpoint: 1200,
                options: {
                    chart: {
                        height: 180,
                        width: 150
                    }
                },
            },
            {
                breakpoint: 1400,
                options: {
                    chart: {
                        height: 190,
                        width: 150
                    }
                },
            },
            {
                breakpoint: 1900,
                options: {
                    chart: {
                        height: 200,
                        width: 150
                    }
                },
            }],
            grid: {
                padding: {
                    top: 0,
                    bottom: 0,
                    right: 15
                }
            },
            plotOptions: {
                pie: {
                    donut: {
                        size: '75%',
                        labels: {
                            show: true,
                            value: {
                                fontSize: '1.5rem',
                                fontFamily: 'Public Sans',
                                color: headingColor,
                                offsetY: -15,
                                formatter: function (val) {
                                    return parseInt(val);
                                }
                            },
                            name: {
                                offsetY: 20,
                                fontFamily: 'Public Sans'
                            },
                            total: {
                                show: true,
                                fontSize: '0.8125rem',
                                color: axisColor,
                                label: 'Product',
                                formatter: function (w) {
                                    return '38%';
                                }
                            }
                        }
                    }
                }
            }
        };
    if (typeof chartDailyMonth !== undefined && chartTotalDaily !== null) {
        const dailyChart = new ApexCharts(chartTotalDaily, orderDailyConfig);
        dailyChart.render();
    }


    // Year Statistics Chart
    // -------------------------------------------------------------------

    var options = {
        series: [{
            name: 'PRODUCT A',
            data: [44, 55, 41, 67, 22, 43, 54, 67, 45, 34, 23, 23],
            color: '#FF5733'
        }, {
            name: 'PRODUCT B',
            data: [13, 23, 44, 55, 41, 67, 22, 43, 54, 67, 45, 34],
            color: '#33FF57'
        }, {
            name: 'PRODUCT C',
            data: [11, 17, 15, 15, 44, 55, 41, 67, 22, 43, 54, 67],
            color: '#3357FF'
        }, {
            name: 'PRODUCT D',
            data: [44, 55, 41, 67, 22, 43, 54, 67, 45, 34, 23, 23],
            color: '#DE703C'
        },
        {
            name: 'PRODUCT E',
            data: [11, 44, 55, 41, 67, 22, 43, 54, 67, 45, 34, 23],
            color: '#33FFF0'
        },
        {
            name: 'PRODUCT F',
            data: [11, 17, 15, 15, 21, 14, 44, 55, 41, 67, 22, 43],
            color: '#F033FF'
        },
        {
            name: 'PRODUCT G',
            data: [11, 44, 55, 41, 67, 22, 43, 17, 15, 15, 21, 14],
            color: '#588DA8'
        },
        {
            name: 'PRODUCT H',
            data: [44, 55, 41, 67, 22, 43, 11, 17, 15, 15, 21, 14],
            color: '#F0FF33'
        }, {
            name: 'PRODUCT I',
            data: [11, 17, 15, 44, 55, 41, 67, 22, 43, 15, 21, 14],
            color: '#5F4E9E'
        }, {
            name: 'PRODUCT J',
            data: [11, 17, 15, 15, 44, 55, 41, 67, 22, 43, 21, 14],
            color: '#7D5A5A'
        }, {
            name: 'PRODUCT K',
            data: [11, 17, 15, 15, 21, 44, 55, 41, 67, 22, 43, 14],
            color: '#52734D'
        }, {
            name: 'PRODUCT L',
            data: [11, 17, 15, 15, 21, 14, 34, 32, 65, 76, 12, 34],
            color: '#FFD369'
        }, {
            name: 'PRODUCT M',
            data: [11, 44, 55, 41, 67, 22, 43, 17, 15, 15, 21, 14],
            color: '#120078'
        }, {
            name: 'PRODUCT N',
            data: [11, 17, 15, 44, 55, 41, 67, 22, 43, 15, 21, 14],
            color: '#92C7CF'
        }, {
            name: 'PRODUCT O',
            data: [11, 17, 15, 15, 44, 55, 41, 67, 22, 43, 21, 14],
            color: '#BF9742'
        }, {
            name: 'PLAN',
            data: [81, 100, 200, 500, 300, 250, 600, 200, 300, 150, 110, 210],
            color: '#C7C8CC'
        }],
        chart: {
            type: 'bar',
            width: '100%',
            height: 400,
            stacked: true,
            toolbar: {
                show: true
            },
            zoom: {
                enabled: true
            }
        },
        responsive: [{
            breakpoint: 991,
            options: {
                plotOptions: {
                    bar: {
                        borderRadius: 10,
                        columnWidth: '100%',
                    }
                }
            }
        },
        {
            breakpoint: 768,
            options: {
                legend: {
                    position: 'bottom',
                    offsetX: -10,
                    offsetY: 0
                }
            }
            }],
        plotOptions: {
            bar: {
                horizontal: false,
                borderRadius: 10,
                dataLabels: {
                    total: {
                        enabled: true,
                        style: {
                            fontSize: '13px',
                            fontWeight: 900
                        }
                    }
                }
            },
        }, dataLabels: {
            enabled: false // Menonaktifkan label data untuk semua seri
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
            ],
        },
        legend: {
            position: 'right',
            offsetY: 40
        },
        fill: {
            opacity: 1
        }
    };

    var chart = new ApexCharts(document.querySelector("#chart"), options);

    chart.render();


  // Order Statistics Chart
    // --------------------------------------------------------------------

    const chartOrderStatistics = document.querySelector('#orderStatisticsChart'),
        orderChartConfig = {
            chart: {
                width: '100%',
                type: 'donut'
            },
            labels: ['Plan', 'Actual', 'Remain'],
            series: [85, 50, 15],
            colors: [config.colors.primary, config.colors.success, config.colors.danger],
            stroke: {
                width: 5,
                colors: cardColor
            },
            dataLabels: {
                enabled: false,
                formatter: function (val, opt) {
                    return parseInt(val) + '%';
                }
            },
            legend: {
                show: false
            },
            grid: {
                padding: {
                    top: 0,
                    bottom: 0,
                    right: 15
                }
            },
            plotOptions: {
                pie: {
                    donut: {
                        size: '75%',
                        labels: {
                            show: true,
                            value: {
                                fontSize: '1.5rem',
                                fontFamily: 'Public Sans',
                                color: headingColor,
                                offsetY: -15,
                                formatter: function (val) {
                                    return parseInt(val) + '%';
                                }
                            },
                            name: {
                                offsetY: 20,
                                fontFamily: 'Public Sans'
                            },
                            total: {
                                show: true,
                                fontSize: '0.8125rem',
                                color: axisColor,
                                label: 'Product',
                                formatter: function (w) {
                                    return '38%';
                                }
                            }
                        }
                    }
                }
            }
        };
    if (typeof chartOrderStatistics !== undefined && chartOrderStatistics !== null) {
        const statisticsChart = new ApexCharts(chartOrderStatistics, orderChartConfig);
        statisticsChart.render();
    }

    // Daily Chart
    // -----------------------------------------------------------------------
    var options = {
        series: [
            {
                name: 'Actual',
                data: [
                    {
                        x: '1',
                        y: 1292,
                        goals: [
                            {
                                name: 'Plan',
                                value: 1400,
                                strokeHeight: 5,
                                strokeColor: '#775DD0'
                            }
                        ]
                    },
                    {
                        x: '2',
                        y: 4432,
                        goals: [
                            {
                                name: 'Plan',
                                value: 5400,
                                strokeHeight: 5,
                                strokeColor: '#775DD0'
                            }
                        ]
                    },
                    {
                        x: '3',
                        y: 5423,
                        goals: [
                            {
                                name: 'Plan',
                                value: 5200,
                                strokeHeight: 5,
                                strokeColor: '#775DD0'
                            }
                        ]
                    },
                    {
                        x: '4',
                        y: 6653,
                        goals: [
                            {
                                name: 'Plan',
                                value: 6500,
                                strokeHeight: 5,
                                strokeColor: '#775DD0'
                            }
                        ]
                    },
                    {
                        x: '5',
                        y: 8133,
                        goals: [
                            {
                                name: 'Plan',
                                value: 6600,
                                strokeHeight: 5,
                                strokeColor: '#775DD0'
                            }
                        ]
                    },
                    {
                        x: '6',
                        y: 7132,
                        goals: [
                            {
                                name: 'Plan',
                                value: 7500,
                                strokeHeight: 5,
                                strokeColor: '#775DD0'
                            }
                        ]
                    },
                    {
                        x: '7',
                        y: 7332,
                        goals: [
                            {
                                name: 'Plan',
                                value: 8700,
                                strokeHeight: 5,
                                strokeColor: '#775DD0'
                            }
                        ]
                    },
                    {
                        x: '8',
                        y: 6553,
                        goals: [
                            {
                                name: 'Plan',
                                value: 7300,
                                strokeHeight: 5,
                                strokeColor: '#775DD0'
                            }
                        ]
                    },
                    {
                        x: '9',
                        y: 6553,
                        goals: [
                            {
                                name: 'Plan',
                                value: 7300,
                                strokeHeight: 5,
                                strokeColor: '#775DD0'
                            }
                        ]
                    },
                    {
                        x: '10',
                        y: 6553,
                        goals: [
                            {
                                name: 'Plan',
                                value: 7300,
                                strokeHeight: 5,
                                strokeColor: '#775DD0'
                            }
                        ]
                    },
                    {
                        x: '11',
                        y: 6553,
                        goals: [
                            {
                                name: 'Plan',
                                value: 7300,
                                strokeHeight: 5,
                                strokeColor: '#775DD0'
                            }
                        ]
                    },
                    {
                        x: '12',
                        y: 6553,
                        goals: [
                            {
                                name: 'Plan',
                                value: 7300,
                                strokeHeight: 5,
                                strokeColor: '#775DD0'
                            }
                        ]
                    },
                    {
                        x: '13',
                        y: 6553,
                        goals: [
                            {
                                name: 'Plan',
                                value: 7300,
                                strokeHeight: 5,
                                strokeColor: '#775DD0'
                            }
                        ]
                    },
                    {
                        x: '14',
                        y: 4432,
                        goals: [
                            {
                                name: 'Plan',
                                value: 4300,
                                strokeHeight: 5,
                                strokeColor: '#775DD0'
                            }
                        ]
                    },
                    {
                        x: '15',
                        y: 4432,
                        goals: [
                            {
                                name: 'Plan',
                                value: 9300,
                                strokeHeight: 5,
                                strokeColor: '#775DD0'
                            }
                        ]
                    },
                    {
                        x: '16',
                        y: 4432,
                        goals: [
                            {
                                name: 'Plan',
                                value: 7300,
                                strokeHeight: 5,
                                strokeColor: '#775DD0'
                            }
                        ]
                    },
                    {
                        x: '17',
                        y: 4432,
                        goals: [
                            {
                                name: 'Plan',
                                value: 1300,
                                strokeHeight: 5,
                                strokeColor: '#775DD0'
                            }
                        ]
                    },
                    {
                        x: '18',
                        y: 4432,
                        goals: [
                            {
                                name: 'Plan',
                                value: 9300,
                                strokeHeight: 5,
                                strokeColor: '#775DD0'
                            }
                        ]
                    },
                    {
                        x: '19',
                        y: 4432,
                        goals: [
                            {
                                name: 'Plan',
                                value: 2300,
                                strokeHeight: 5,
                                strokeColor: '#775DD0'
                            }
                        ]
                    },
                    {
                        x: '20',
                        y: 4432,
                        goals: [
                            {
                                name: 'Plan',
                                value: 4300,
                                strokeHeight: 5,
                                strokeColor: '#775DD0'
                            }
                        ]
                    },
                    {
                        x: '21',
                        y: 4432,
                        goals: [
                            {
                                name: 'Plan',
                                value: 6300,
                                strokeHeight: 5,
                                strokeColor: '#775DD0'
                            }
                        ]
                    }, {
                        x: '22',
                        y: 4432,
                        goals: [
                            {
                                name: 'Plan',
                                value: 4300,
                                strokeHeight: 5,
                                strokeColor: '#775DD0'
                            }
                        ]
                    }, {
                        x: '23',
                        y: 4432,
                        goals: [
                            {
                                name: 'Plan',
                                value: 5300,
                                strokeHeight: 5,
                                strokeColor: '#775DD0'
                            }
                        ]
                    },
                    {
                        x: '24',
                        y: 4432,
                        goals: [
                            {
                                name: 'Plan',
                                value: 300,
                                strokeHeight: 5,
                                strokeColor: '#775DD0'
                            }
                        ]
                    },
                    {
                        x: '25',
                        y: 4432,
                        goals: [
                            {
                                name: 'Plan',
                                value: 100,
                                strokeHeight: 5,
                                strokeColor: '#775DD0'
                            }
                        ]
                    },
                    {
                        x: '26',
                        y: 4432,
                        goals: [
                            {
                                name: 'Plan',
                                value: 700,
                                strokeHeight: 5,
                                strokeColor: '#775DD0'
                            }
                        ]
                    },
                    {
                        x: '27',
                        y: 4432,
                        goals: [
                            {
                                name: 'Plan',
                                value: 200,
                                strokeHeight: 5,
                                strokeColor: '#775DD0'
                            }
                        ]
                    },
                    {
                        x: '28',
                        y: 4432,
                        goals: [
                            {
                                name: 'Plan',
                                value: 900,
                                strokeHeight: 5,
                                strokeColor: '#775DD0'
                            }
                        ]
                    },
                    {
                        x: '29',
                        y: 4432,
                        goals: [
                            {
                                name: 'Plan',
                                value: 600,
                                strokeHeight: 5,
                                strokeColor: '#775DD0'
                            }
                        ]
                    },
                    {
                        x: '30',
                        y: 2432,
                        goals: [
                            {
                                name: 'Plan',
                                value: 200,
                                strokeHeight: 5,
                                strokeColor: '#775DD0'
                            }
                        ]
                    },
                    {
                        x: '31',
                        y: 4032,
                        goals: [
                            {
                                name: 'Plan',
                                value: 300,
                                strokeHeight: 5,
                                strokeColor: '#775DD0'
                            }
                        ]
                    },
                ]
            }
        ],
        chart: {
            width: '100%',
            height: '100%',
            type: 'bar'
        },
        plotOptions: {
            bar: {
                columnWidth: '70%'
            }
        },
        colors: ['#00E396'],
        dataLabels: {
            enabled: false
        },
        legend: {
            show: true,
            showForSingleSeries: true,
            customLegendItems: ['Actual', 'Plan'],
            markers: {
                fillColors: ['#00E396', '#775DD0']
            }
        }
    };

    var chart = new ApexCharts(document.querySelector("#daily"), options);
    chart.render();
})();
