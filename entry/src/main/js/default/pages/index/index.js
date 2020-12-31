export default {
    data: {
        array: [
            {
                name: "标题1",
                url: "https://v-cdn.zjol.com.cn/280443.mp4"
            },
            {
                name: "标题2",
                url: "https://v-cdn.zjol.com.cn/280443.mp4"
            },
        ],
    }
,
    Click: function (e) {
        for (var i = 0; i < 5; i++) {
            this.array.push({
                name: "标题" + i,
                url: "https://v-cdn.zjol.com.cn/280443.mp4"
            });
        }
    },
}
