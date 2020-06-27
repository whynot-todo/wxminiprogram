// pages/detail/detail.js
const datas = require('../../datas/list-data')
const backgroundAudioManager = wx.getBackgroundAudioManager()
const appData = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        detailObj: {},
        index: 0,
        isPlay: false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            detailObj: datas.list_data[options.id],
            index: options.id
        })
        // 从全局中读取音乐是否播放
        if (appData.globalData.isMusicPlay && appData.globalData.playPageIndex === this.data.index) {
            this.setData({isPlay:true})
        }
        // 监听音乐是否播放
        backgroundAudioManager.onPlay(() => {
            appData.globalData.isMusicPlay = true
            appData.globalData.playPageIndex = this.data.index
            this.setData({ isPlay: true })
            console.log('music is play')
        })
        // 监听音乐关闭
        backgroundAudioManager.onPause(() => {
            console.log('music is pause')
            this.setData({isPlay:false})
        })
    },
    musicControl: function () {
        let isPlay = !this.data.isPlay
        const {
            title,
            coverImgUrl
        } = this.data.detailObj.music

        if (isPlay) {
            backgroundAudioManager.title = title
            backgroundAudioManager.coverImgUrl = coverImgUrl
            backgroundAudioManager.src = "http://m10.music.126.net/20200627124552/fc49c1a479497b00f343ecaed189d31f/ymusic/28a2/6955/ef9d/f5fd28ee442c30bf59e42d1a97fd1d29.mp3"
            backgroundAudioManager.play()
        } else {
            backgroundAudioManager.pause()
            // 修改全局存储
        }
        this.setData({
            isPlay
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