// 获取返回顶部按钮
var backToTopBtn = document.getElementById("backToTopBtn");

// 监听滚动事件
window.onscroll = function() {
    // 当页面滚动超过 300 像素时，显示按钮
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};

// 添加点击事件监听
backToTopBtn.onclick = function() {
    // 平滑滚动到顶部
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};
