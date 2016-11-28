//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    hidden:true,
    menuList: [{
      name: '今日上新',
      APIList: [{
        zhName: '蒲烧鸡胸',
        enName: 'login',
        url: '../login/login'
      },
      {
        zhName: '牧羊人派',
        enName: 'login',
        url: '../login/login'
      },
      {
        zhName: '鱼香鸡肉卷',
        enName: 'login',
        url: '../login/login'
      }],
      opened: true
    }, {
      name: '呼声最高',
      opened: false,
      APIList: [{
        zhName: '美食1',
        enName: 'setNavigationBarTitle',
        url: '../set-navigation-bar-title/set-navigation-bar-title'
      }, {
        zhName: '美食2',
        enName: 'navigationBarLoading',
        url: '../navigation-bar-loading/navigation-bar-loading'
      }, {
        zhName: '美食3',
        enName: 'navigateTo, navigateBack, redirectTo',
        url: '../navigator/navigator'
      }, {
        zhName: '美食4',
        enName: 'pullDownRefresh',
        url: '../pull-down-refresh/pull-down-refresh'
      }, {
        zhName: '美食5',
        enName: 'createAnimation',
        url: '../animation/animation'
      }, {
        zhName: '美食6',
        enName: 'createContext',
        url: '../canvas/canvas'
      }]
    }]
  },
  onPullDownRefresh: function () {
    console.log('onPullDownRefresh', new Date())
    var that = this;
    that.setData({hidden : false});
       setTimeout(function(){
         that.setData(
           {hidden : true}
           );
       }, 3000);
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        // userInfo:userInfo
      })
    })
  },
  tapMenuItem: function (e) {
    var menuItem = this.data.menuList[parseInt(e.currentTarget.id)] 
    if (menuItem.url) {
      wx.navigateTo({ url: menuItem.url })
    } else {
      var changeData = {}
      var opened = menuItem.opened

      changeData['menuList[' + e.currentTarget.id + '].opened'] = !opened
      this.setData(changeData)
    }
  }
})
