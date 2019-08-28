# js-xWindow

# 依赖
`js-xWindow`依赖于：
    1. jQuery 3.x
    2. jQueryUI 1.12.x

# 使用方法
`Example:`
```javascript
<script>
    var win = new xWindow({
        iconPath: Mock.Random.dataImage("32x32", "SB"),        // 设置窗口图标的路径
        titleText:"我是一个窗口对象",                           // 设置窗口的标题 
        closeButtonImage: Mock.Random.dataImage("24x24", "X"), // 设置窗口关闭按钮的背景图片
        winMinWidth: 200,                                      // 窗口的最小绘制宽度
        winMinHeight: 200,                                     // 窗口的最小绘制高度
        winWidth: 320,                                         // 窗口绘制的宽度
        winHeight: 480,                                        // 窗口绘制的高度
        titleBarHeight: 40,                                    // 设置标题栏的高度，否则默认18像素的高度
        dontClose: false,                                      // true: 隐藏窗口, false: 销毁窗口 
    });
</script>
```