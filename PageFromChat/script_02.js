document.addEventListener("DOMContentLoaded", function() {
    const navListItems = document.querySelectorAll(".nav-list li");

    navListItems.forEach(function(item) {
        item.addEventListener("click", function() {
            // 移除所有已选中的项
            navListItems.forEach(function(navItem) {
                navItem.classList.remove("selected");
            });

            // 添加选中样式到当前点击的项
            item.classList.add("selected");

            // 添加下划线样式
            const link = item.querySelector("a");
            link.style.textDecoration = "underline";
        });
    });

    // 一开始就选中"社区空间"
    const initialSelectedItem = document.querySelector(".nav-list li:nth-child(2)");
    initialSelectedItem.classList.add("selected");

    // 添加下划线样式
    const initialSelectedLink = initialSelectedItem.querySelector("a");
    initialSelectedLink.style.textDecoration = "underline";
});
