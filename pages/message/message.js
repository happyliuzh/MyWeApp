//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    hidden:true,
    menuList: [{
      name: '心脏康复项目',
      APIList: [{
        zhName: '心率监测',
        enName: 'login',
        url: '../login/login'
      },
      {
        zhName: '心脏护理',
        enName: 'login',
        url: '../login/login'
      }],
      opened: true
    }, {
      name: '骨科康复项目',
      opened: false,
      APIList: [{
        zhName: '骨科检查',
        enName: 'setNavigationBarTitle',
        url: '../set-navigation-bar-title/set-navigation-bar-title'
      },
      {
        zhName: '关节检查',
        enName: 'setNavigationBarTitle',
        url: '../set-navigation-bar-title/set-navigation-bar-title'
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
