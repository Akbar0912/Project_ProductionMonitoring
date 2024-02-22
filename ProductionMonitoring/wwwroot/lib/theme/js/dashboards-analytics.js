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
            name: 'Actual',
            data: [44, 55, 41, 67, 22, 43, 54, 67, 45, 34, 23, 23]
        }, {
            name: 'Plan',
            data: [13, 23, 44, 55, 41, 67, 22, 43, 54, 67, 45, 34]
        }],
        chart: {
            type: 'bar',
            width: '100%',
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
            position: 'bottom'
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
        series: [{
            name: 'Actual',
            data: [44, 55, 41, 67, 22, 43, 54, 67, 45, 34, 23, 23, 13, 23, 44, 55, 41, 67, 22, 43, 54, 67, 45, 34, 45,32,56,65,24,12,67]
        }, {
            name: 'Plan',
            data: [13, 23, 44, 55, 41, 67, 22, 43, 54, 67, 45, 34, 13, 23, 44, 55, 41, 67, 22, 43, 54, 67, 45, 34, 45, 32, 56, 65, 24, 12, 67]
        }],
        chart: {
            type: 'bar',
            width: '100%',
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
            categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9','10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27' , '28', '29', '30', '31'],
        },
        legend: {
            position: 'bottom'
        },
        fill: {
            opacity: 1
        }
    };

    var chart = new ApexCharts(document.querySelector("#daily"), options);

    chart.render();
})();