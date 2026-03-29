document.addEventListener("DOMContentLoaded", function () {
    // Mock data for mood report
    var moodReportData = {
        happinessLevel: 80,
        sadnessLevel: 20,
        stressLevel: 30
    };

    // Update mood report parameters
    document.getElementById('happiness-level').textContent = moodReportData.happinessLevel + '%';
    document.getElementById('sadness-level').textContent = moodReportData.sadnessLevel + '%';
    document.getElementById('stress-level').textContent = moodReportData.stressLevel + '%';

    // Chart.js code for mood chart
    var moodChartCanvas = document.getElementById('mood-chart');
    var moodChart = new Chart(moodChartCanvas, {
        type: 'bar',
        data: {
            labels: ['Happiness', 'Sadness', 'Stress'],
            datasets: [{
                label: 'Mood Level',
                data: [moodReportData.happinessLevel, moodReportData.sadnessLevel, moodReportData.stressLevel],
                backgroundColor: [
                    'rgba(46, 204, 113, 0.8)', // Green for Happiness
                    'rgba(231, 76, 60, 0.8)', // Red for Sadness
                    'rgba(241, 196, 15, 0.8)' // Yellow for Stress
                ],
                borderColor: [
                    'rgba(46, 204, 113, 1)',
                    'rgba(231, 76, 60, 1)',
                    'rgba(241, 196, 15, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
});