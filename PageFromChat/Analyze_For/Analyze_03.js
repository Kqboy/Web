document.addEventListener("DOMContentLoaded", function () {
    // Mock data for weight report
    var weightReportData = {
        initialWeight: 70.0,
        finalWeight: 75.0,
        weightChange: 5.0
    };

    // Update weight report parameters
    document.getElementById('initial-weight').textContent = weightReportData.initialWeight + ' kg';
    document.getElementById('final-weight').textContent = weightReportData.finalWeight + ' kg';
    document.getElementById('weight-change').textContent = (weightReportData.weightChange > 0 ? '+' : '') + weightReportData.weightChange + ' kg';

    // Chart.js code for weight chart
    var weightChartCanvas = document.getElementById('weight-chart');
    var weightChart = new Chart(weightChartCanvas, {
        type: 'line',
        data: {
            labels: ['1', '2', '3', '4', '5', '6', '7'],
            datasets: [{
                label: 'Weight Change',
                data: [70.0, 71.2, 72.5, 74.0, 73.8, 75.0, 74.5],
                fill: false,
                borderColor: 'rgba(255, 255, 255, 1)',
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