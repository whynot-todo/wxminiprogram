// pages/list/list.js
const datas = require('../../datas/list-data')
console.log(datas)
Page({

  /**
   * 页面的初始数据
   */
  data: {
    datas:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({datas:datas.list_data})
  },
  toDetail:function (event) {
    console.log(event)
    const id = event.currentTarget.dataset.id
    // 跳转到相应的页面并携带一个id
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + id
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})