/*
   _____       __   __             _  __ 
  ╱ ____|     |  ╲/   |           | |/ / 
 | |  __  ___ |  ╲ /  | __  _ _ __| ' /  
 | | |_ |/ _ ╲| |╲ /| |/ _`  | '__|  <   
 | |__| |  __/| |   | (  _|  | |  | . ╲  
  ╲_____|╲___ |_|   |_|╲__,_ |_|  |_|╲_╲ 
 可爱飞行猪❤: golang83@outlook.com  💯💯💯
 Author Name: GeMarK.VK.Chow奥迪哥  🚗🔞🈲
 Creaet Time: 2019/08/28 - 10:56:01
 ProgramFile: xWindow.js
 Description: Web 窗口对象封装
*/
// example: 
/* 
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
*/

class xWindow{
    constructor(properties){
        this.winObjProp = properties;
        this.winObj     = null;
        this.titleBar   = null;
        this.iconImg    = null;
        this.closeBtn   = null;
        this.titleTxt   = null;
        this.content    = null;
    }
    create(pDOM){
        this.winObj = $(document.createElement('div'));
        this.winObj.get(0).selfRef = this;
        this.winObj.addClass("win-basic");
        this.winObj.draggable({
            cursor: "move",                 // 鼠标的光标样式
            handle: ".win-basic-titlebar",  // 拖动应用在标题栏，其他地方无效
        });
        this.winObj.resizable();
        this.winObj.css({
            minWidth: this.getWinProp("winMinWidth"),
            minHeight: this.getWinProp("winMinHeight"),
            width: this.getWinProp("winWidth"),
            height: this.getWinProp("winHeight"),
        });
        this.winObj.append(this.__createTitleBar());
        this.winObj.append(this.__createContentArea());
        this.winObj.on("resize", function(e){
            let parent = $(e.target);
            let titleBar = parent.find('.win-basic-titlebar');
            let contentArea = parent.find('.win-basic-content-area');
            let h = (100 - (titleBar.height()/(parent.height()/100))) + "%";
            contentArea.height(h);
        })
        this.winObj.on("drag", function(e){
            let parent = $(e.target).parent().get(0);
            let elm = $(e.target).get(0);
            if(elm.className != "win-basic-titlebar"){
                return;
            }
        });
        pDOM.append(this.winObj);
    }
    __createTitleBar(){
        let tbHeight = this.getWinProp("titleBarHeight");
        this.titleBar = $(document.createElement('div'));
        this.titleBar.addClass("win-basic-titlebar");
        this.titleBar.css("height", tbHeight ? tbHeight : "18px");
        this.titleBar.append(this.__createIcon());
        this.titleBar.append(this.__createTitle());
        this.titleBar.append(this.__createCloseButton());
        return this.titleBar;
    }
    __createIcon(){
        this.iconImg = $(document.createElement('div'));
        this.iconImg.addClass("win-basic-icon");
        let iconPath = this.getWinProp("iconPath");
        if(!iconPath){
            throw new Error("iconPath undefined.");
        }
        this.iconImg.css({
            backgroundImage: "url(" + iconPath + ")",
        })
        return this.iconImg;
    }
    __createTitle(){
        this.titleTxt = $(document.createElement('a'));
        this.titleTxt.addClass("win-basic-title-text");
        let txt = this.getWinProp("titleText");
        if(!txt){
            throw new Error("titleText undefined.");
        }
        this.titleTxt.html("<span>"+txt+"</span>");
        return this.titleTxt;
    }
    __createCloseButton(){
        this.closeBtn = $(document.createElement('input'));
        this.closeBtn.addClass("win-basic-close-button");
        this.closeBtn.attr("type", "button");
        let btnImg = this.getWinProp("closeButtonImage");
        if(!btnImg){
            throw new Error("close button image not defined.");
        }
        this.closeBtn.css({
            backgroundImage: "url(" + btnImg + ")",
        });
        this.closeBtn.click(function(e){
            let win = $(e.target).parent().parent();
            if(win.get(0).selfRef.getWinProp("dontClose")){
                win.hide();
            }else{
                win.remove();
            }
        });
        return this.closeBtn;
    }
    __createContentArea(){
        this.content = $(document.createElement('div'));
        this.content.addClass("win-basic-content-area");
        let ch = (100 - (this.titleBar.height()/(this.winObj.height()/100))) + "%";
        this.content.css({
            width: "98%",
            height: ch,
            backgroundColor: "rgb(156, 219, 105)",
        });
        return this.content;
    }
    getWinProp(key){
        if( this.winObjProp[key] === undefined || this.winObjProp[key] === null){
            return null;
        }else{
            return this.winObjProp[key];
        }
    }
}

/* 
    WindowsManager 窗口对象管理器
    实现了事件监听
    对象的管理（CRUD）
*/
class WindowsManager{
    // create

    // remove

    // update

    // insert
}