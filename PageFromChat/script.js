// 聊天图标点击事件
document.getElementById('chat-icon').addEventListener('click', () => {
    // 在这里添加聊天功能的代码
    alert('聊天功能尚未实现');
});

// 搜索按钮点击事件
document.getElementById('search-button').addEventListener('click', () => {
    const searchInput = document.getElementById('search-input').value;
    // 在这里添加搜索功能的代码，使用searchInput作为搜索关键词
    alert('搜索功能尚未实现，搜索关键词：' + searchInput);
});

// 定位图标点击事件
document.getElementById('location-icon').addEventListener('click', () => {
    // 在这里添加定位功能的代码
    // 例如：获取用户地理位置信息，然后处理或显示在页面上
    alert('定位功能尚未实现');
});

// 聊天图标点击事件
document.getElementById('chat-icon').addEventListener('click', () => {
    // 在这里添加聊天功能的代码
    // 例如：打开聊天窗口或导航到聊天页面
    alert('聊天功能尚未实现');
});

// 搜索按钮点击事件
document.getElementById('search-button').addEventListener('click', () => {
    const searchInput = document.getElementById('search-input').value;
    // 在这里添加搜索功能的代码，使用searchInput作为搜索关键词
    alert('搜索功能尚未实现，搜索关键词：' + searchInput);
});

document.addEventListener('DOMContentLoaded', function () {
    const swiperContainer = document.querySelector('.swiper');
    const swiperItems = document.querySelectorAll('.swiper-item');
    const numItems = swiperItems.length;
    const itemWidth = swiperItems[0].offsetWidth;
    let currentIndex = 0;
    let translateX = 0;

    // 自动播放间隔时间（毫秒）
    const autoPlayInterval = 3000;

    // 自动播放函数
    function autoPlay() {
        currentIndex++;
        if (currentIndex >= numItems) {
            currentIndex = 0;
        }
        translateX = -currentIndex * itemWidth;
        updateSliderPosition();
    }

    // 设置自动播放定时器
    let autoPlayTimer = setInterval(autoPlay, autoPlayInterval);

    // 暂停自动播放函数
    function pauseAutoPlay() {
        clearInterval(autoPlayTimer);
    }

    // 恢复自动播放函数
    function resumeAutoPlay() {
        autoPlayTimer = setInterval(autoPlay, autoPlayInterval);
    }

    // 鼠标进入轮播图容器时暂停自动播放
    swiperContainer.addEventListener('mouseenter', pauseAutoPlay);

    // 鼠标离开轮播图容器时恢复自动播放
    swiperContainer.addEventListener('mouseleave', resumeAutoPlay);

    // 更新轮播图的位置
    function updateSliderPosition() {
        swiperContainer.style.transform = `translateX(${translateX}px)`;
    }

    // 初始化轮播图
    updateSliderPosition();
});

