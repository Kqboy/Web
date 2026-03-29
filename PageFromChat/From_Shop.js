// JavaScript示例代码
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        // 向上滚动
        document.querySelector(".bottom-navbar").style.bottom = "0";
    } else {
        // 向下滚动
        document.querySelector(".bottom-navbar").style.bottom = "-60px"; // 隐藏导航栏
    }
    prevScrollpos = currentScrollPos;
}
