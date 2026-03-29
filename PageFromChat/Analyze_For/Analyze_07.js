document.addEventListener("DOMContentLoaded", function () {
    // Mock data for the CT report
    var ctReportData = {
        heartRate: 75,
        temperature: 98.6,
        pressure: "120/80"
    };

    // Update CT report parameters
    document.getElementById('heart-rate').textContent = ctReportData.heartRate + ' BPM';
    document.getElementById('temperature').textContent = ctReportData.temperature + '°F';
    document.getElementById('pressure').textContent = ctReportData.pressure + ' mmHg';

    // Chart.js code for ECG chart
    var ecgChartCanvas = document.getElementById('ecg-chart');
    var ecgChart = new Chart(ecgChartCanvas, {
        type: 'line',
        data: {
            labels: ['1', '2', '3', '4', '5', '6', '7'],
            datasets: [{
                label: 'ECG',
                data: [0, 1, 3, 2, 4, 3, 5],
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