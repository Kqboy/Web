
document.addEventListener("DOMContentLoaded", function () {
    // Mock data for blood pressure report
    var bloodPressureReportData = {
        systolicPressure: 120,
        diastolicPressure: 80,
        heartRate: 75
    };

    // Update blood pressure report parameters
    document.getElementById('systolic-pressure').textContent = bloodPressureReportData.systolicPressure + ' mmHg';
    document.getElementById('diastolic-pressure').textContent = bloodPressureReportData.diastolicPressure + ' mmHg';
    document.getElementById('heart-rate').textContent = bloodPressureReportData.heartRate + ' bpm';

    // Chart.js code for blood pressure chart
    var bloodPressureChartCanvas = document.getElementById('blood-pressure-chart');
    var bloodPressureChart = new Chart(bloodPressureChartCanvas, {
        type: 'line',
        data: {
            labels: ['1', '2', '3', '4', '5', '6', '7'],
            datasets: [{
                label: 'Systolic Pressure',
                data: [120, 118, 122, 124, 119, 123, 121],
                fill: false,
                borderColor: 'rgba(255, 255, 255, 1)',
                borderWidth: 2,
                pointRadius: 0,
                tension: 0.4
            }, {
                label: 'Diastolic Pressure',
                data: [80, 82, 78, 79, 81, 77, 80],
                fill: false,
                borderColor: 'rgba(255, 165, 0, 1)',
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