Page({
    data: {
      list: [
        {
          id: 'view',
          name: '情感',
          open: false,
        }, {
          id: 'content',
          name: '生活',
          open: false,
        }
      ]
    },
    kindToggle: function (e) {
      var id = e.currentTarget.id, list = this.data.list;
      for (var i = 0, len = list.length; i < len; ++i) {
        if (list[i].id == id) {
          list[i].open = !list[i].open
        } else {
          list[i].open = false
        }
      }
      this.setData({
        list: list
      });
    },
    changeName: function (e) {
      wx.showModal({
        title: "显示模态弹窗",
        content: "杂烩小生活，精彩大生活",
        cancelText: "关闭弹窗",
        showCancel:false
      })
    }
  })
