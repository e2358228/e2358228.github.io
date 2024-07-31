// 電気のグラフ
const ctx = document.getElementById('elc');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['2月', '3月', '4月', '5月', '6月', '7月'],
        datasets: [
            {
                label: '2024年電気使用量(kWh)',
                data: [43, 73, 78, 65, 72, 99],
                backgroundColor: 'rgba(255, 255, 0, 0.5)', 
                borderColor: 'rgb(0, 0, 0)',
                borderWidth: 1,
                yAxisID: "y1",
            },
            {
                label: '電気代',
                type: 'line',
                fill: false,
                data: [1283, 2179, 2329, 1940, 2149, 2951],
                borderColor: 'rgb(54, 162, 235)',
                borderWidth: 1,
                yAxisID: "y2",
            }
        ]
    },
    options: {
        scales: {
            y1: {
                type: 'linear',
                position: 'left',
                title: {
                    display: true,
                    text: '電気使用量(m^2)'
                },
                min: 0,
                max: 150,
                ticks: {
                    stepSize: 10
                }
            },
            y2: {
                type: 'linear',
                position: 'right',
                title: {
                    display: true,
                    text: '電気代'
                },
                min: 0,
                max: 3000,
                ticks: {
                    stepSize: 500
                },
                grid: {
                    drawOnChartArea: false 
                }
            }
        }
    }
});



//   ガスのグラフ
const ctx2 = document.getElementById('gas');

new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['2月', '3月', '4月', '5月', '6月', '7月'],
        datasets: [
            {
                label: '2024年ガス使用量(m^2)',
                data: [0, 4, 11, 11, 7, 6],
                backgroundColor: 'rgba(0, 0, 255, 0.5)', 
                borderColor: 'rgb(10, 20, 200)',
                borderWidth: 1,
                yAxisID: "y1",
            },
            {
                label: 'ガス代',
                type: 'line',
                fill: false,
                data: [0, 1366, 2599, 2614, 1983, 1832],
                borderColor: 'rgba(255, 0, 106, 0.5)',
                borderWidth: 1,
                yAxisID: "y2",
            }
        ]
    },
    options: {
        scales: {
            y1: {
                type: 'linear',
                position: 'left',
                title: {
                    display: true,
                    text: 'ガス使用量(m^2)'
                },
                min: 0,
                max: 15,
                ticks: {
                    stepSize: 5
                }
            },
            y2: {
                type: 'linear',
                position: 'right',
                title: {
                    display: true,
                    text: 'ガス代'
                },
                min: 0,
                max: 3000,
                ticks: {
                    stepSize: 500
                },
                grid: {
                    drawOnChartArea: false 
                }
            }
        }
    }
});


