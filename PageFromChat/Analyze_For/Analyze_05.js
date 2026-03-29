document.addEventListener("DOMContentLoaded", function () {
    // 模拟一些测试数据，将心电图数据修改为正弦函数的结果
    var testData = Array.from({ length: 100 }, function (_, index) {
        return { time: index + 1, ecg: Math.sin(index / 10) * 5 + 10 };
    });

    // 提取测试数据中的时间和心电图数据
    var times = testData.map(function (data) {
        return data.time;
    });

    var ecgData = testData.map(function (data) {
        return data.ecg;
    });

    // 创建Chart对象并绘制心电图
    var ecgChartCanvas = document.getElementById('ecg-chart');
    var ecgChart = new Chart(ecgChartCanvas, {
        type: 'line',
        data: {
            labels: times,
            datasets: [{
                label: '心电图',
                data: ecgData,
                fill: false,
                borderColor: 'rgba(148, 0, 211, 1)', // 亮紫色
                borderWidth: 3,
                pointRadius: 0,
                tension: 0.5
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
                    min: 5,
                    max: 15,
                    ticks: {
                        stepSize: 1,
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

    // 模拟更新参数
    document.getElementById('heart-rate').textContent = '72 BPM';
    document.getElementById('blood-oxygen').textContent = '98%';
    document.getElementById('heartbeat-count').textContent = '120';
});
