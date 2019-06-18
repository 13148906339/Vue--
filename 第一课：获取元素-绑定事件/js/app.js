//实例化vue对象

new Vue({
    el: '#vue-app',
    data: {
        name: '小小怪下士！',
        job: '你好Web！',
        time: '早上好',
        website: 'https://cn.vuejs.org/v2/guide/installation.html',
        websiteTag: '<a href="https://cn.vuejs.org/v2/guide/installation.html" style="text-decoration: none; color: red;">web开发</a>',
    },
    methods: {
        greet: function (time) {
            return 'Hi ' + this.time + ' ' + time + '!';
        }
    }

});

/*
    el：element 获取标签元素,一定是html中的根元素也就是父级元素
    data：存储数据，以键值对形式
    this：全局拿方法、属性、键值对
    methods：用于存储各种方法
    data-binding：给元素属性绑定动态值
 */
