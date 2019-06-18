new Vue({
    el: '#vue-app',
    data: {
        age: 19,
        X: 0,
        Y: 0,
    },
    methods: {

        add: function (add) {
            this.age += add
        },
        sub: function (sub) {
            this.age -= sub
        },
        // 鼠标移动
        updateXY: function (event) {
            // console.log(event)
            this.X = event.offsetX;
            this.Y = event.offsetY;
        },

        Stop: function (event) {
            event.stopPropagation();
        },

        alert: function () {
            alert("跳转。。。")
        }

    }
});