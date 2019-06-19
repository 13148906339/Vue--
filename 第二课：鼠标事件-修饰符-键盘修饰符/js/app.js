// new Vue({
//     el: '#vue-app',
//     data: {
//         name:'Vue.js',
//         age: 19,
//         X: 0,
//         Y: 0,
//     },
//     methods: {
//
//         add: function (add) {
//             this.age += add
//         },
//         sub: function (sub) {
//             this.age -= sub
//         },
//         // 鼠标移动
//         updateXY: function (event) {
//             // console.log(event)
//             this.X = event.offsetX;
//             this.Y = event.offsetY;
//         },
//
//         Stop: function (event) {
//             event.stopPropagation();
//         },
//
//         alert: function () {
//             alert("跳转。。。")
//         },
//         onName:function () {
//             console.log('您正在输入')
//         },
//         onAge:function () {
//             console.log('您正在输入')
//         },
//         greet:function () {
//             alert('Hello' + this.name + '!')
//         }
//
//     }
// });