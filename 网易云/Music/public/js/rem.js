function remSize() {
    let deviceWidth = document.documentElement.clientWidth || window.innerWidth

    if (deviceWidth >= 750) {
        deviceWidth = 750
    }
    if (deviceWidth <= 320) {
        deviceWidth = 320
    }
    // 1rem = 100px
    document.documentElement.style.fontSize = (deviceWidth / 7.5) + 'px'
    // 设置字体大小
    document.querySelector('body').style.fontSize = 0.3 + 'rem'
}

remSize()

// 窗口大小发生变化时再次调用
window.onresize = function () {
    remSize()
}

