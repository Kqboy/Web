document.addEventListener("DOMContentLoaded", function () {
    // Mock data for height report
    var heightReportData = {
        currentHeight: 175,
        targetHeight: 180
    };

    // Update height report parameters
    document.getElementById('current-height').textContent = heightReportData.currentHeight + ' cm';
    document.getElementById('target-height').textContent = heightReportData.targetHeight + ' cm';

    // Chart.js code for height chart
    var heightChartCanvas = document.getElementById('height-chart');
    var heightChart = new Chart(heightChartCanvas, {
        type: 'line',
        data: {
            labels: ['1', '2', '3', '4', '5', '6', '7'],
            datasets: [{
                label: 'Height',
                data: [175, 174, 176, 177, 175, 178, 176],
                fill: false,
                borderColor: 'rgba(255, 0, 0, 1)',
                borderWidth: 2,
                pointRadius: 0,
                tension: 0.4
            }]
        },
        options: {
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom',
                    ticks: {
                        font: {
                            weight: 'bold',
                            color: 'white'
                        }
                    }
                },
                y: {
                    ticks: {
                        font: {
                            weight: 'bold',
                            color: 'white'
                        }
                    }
                }
            },
            elements: {
                point: {
                    radius: 0
                }
            }
        }
    });
});