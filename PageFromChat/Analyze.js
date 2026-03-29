function handleClick(element) {
    // 添加点击时的动态效果
    element.style.transform = "scale(1.1)";

    // 等待0.2秒后恢复原始大小
    setTimeout(function() {
        element.style.transform = "scale(1)";
    }, 200);
}
document.addEventListener('DOMContentLoaded', function () {
    const circles = document.querySelectorAll('.circle');

    circles.forEach(function (circle) {
        circle.addEventListener('mouseenter', function () {
            circle.style.transform = 'scale(1.1)';
            circle.style.transition = 'transform 0.3s ease';
            circle.querySelector('i').style.color = '#007bff';
        });

        circle.addEventListener('mouseleave', function () {
            circle.style.transform = 'scale(1)';
            circle.style.transition = 'transform 0.3s ease';
            circle.querySelector('i').style.color = '#333'; // Change to the default color
        });

        circle.addEventListener('click', function () {
            // Optional: Add click behavior here
        });
    });
});

// 获取页面元素
const content = document.getElementById('content');
const navbar = document.querySelector('.bottom-navbar');

// 记录上一次滚动的位置
let lastScrollTop = 0;

// 监听滚动事件
window.addEventListener('scroll', function() {
    const scrollTop = window.scrollY;

    // 判断滚动方向
    if (scrollTop > lastScrollTop) {
        // 向下滚动，隐藏底部导航栏
        navbar.style.transform = 'translateY(100%)';
    } else {
        // 向上滚动，显示底部导航栏
        navbar.style.transform = 'translateY(0)';
    }

    // 更新上一次滚动的位置
    lastScrollTop = scrollTop;
});


