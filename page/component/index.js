Page({
  data: {
    list: [
      {
        id: 'view',
        name: '吃吃吃',
        open: false,
      }, {
        id: 'content',
        name: '喝喝喝',
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
  }
})
