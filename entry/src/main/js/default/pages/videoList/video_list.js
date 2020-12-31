import device from '@system.device';

export default {
    props: {
        arrayObject: []
    },
    data() {
        return {
            videoIndex: -1,
            array: this.arrayObject,
            deviceArray: [
                "测试设备1",
                "测试设备2",
                "测试设备3",
                "测试设备4",
            ],
            startX: 0,
            endX: 0
        }
    },
    onScrollend: function () {
        var _windowHeight = 0;
        try {
            if (this.videoIndex != -1) {
                this.$element(this.videoIndex).pause();
            }
            //运行代码
        } catch (err) {
            console.log('success get device info brand:' + err);
            //处理错误

        }
        device.getInfo({
            success: function (data) {
                console.log('success get device info brand:' + data.windowHeight);
                _windowHeight = data.windowHeight / 2 - 350;
            },
            fail: function (data, code) {
                console.log('fail get device info code:' + code + ', data: ' + data);
            },
        });
        var scrolly = this.$element('listView').currentOffset().y + _windowHeight;
        this.videoIndex = parseInt(scrolly / 400);

        this.$element(this.videoIndex).start();
    },
    Touchstart: function (e) {
        var temp = e.touches;
        this.startX = temp[0].globalX;
        console.error("当前手指触摸点。" + this.startX);
    },
    Touchend: function (e) {
        var temp = e.changedTouches;

        this.endX = temp[0].globalX;
        if (this.endX - this.startX < 100) {
            return;
        }
        if (this.endX > this.startX) {
            console.error("当前是右滑事件");
            this.$element("dialogView").show()
        } else {
            console.error("当前是左滑事件");
        }
    },
    showChoose: function (e) {
        //        this.onStartContinuation();
    },
//    tryContinueAbility: async function() {
//        // 应用进行迁移
//        let result = await FeatureAbility.callAbility("");
//        console.info("result:" + JSON.stringify(result));
//    },
//    onStartContinuation: function onStartContinuation() {
//        // 判断当前的状态是不是适合迁移
//        console.info("trigger onStartContinuation");
//        return true;
//    },
//    onCompleteContinuation: function onCompleteContinuation(code) {
//        // 迁移操作完成，code返回结果
//        console.info("trigger onCompleteContinuation: code = " + code);
//    },
//    onSaveData: function onSaveData(saveData) {
//        // 数据保存到savedData中进行迁移。
//        var data = this.continueAbilityData;
//        Object.assign(saveData, data)
//    }
}
