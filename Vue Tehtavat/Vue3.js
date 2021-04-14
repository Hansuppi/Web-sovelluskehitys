new Vue ({
    el: "#counter",
    data: {
        count: 0
    },
    methods: {
        plus: function () {
            this.count += 1;
        },
        minus: function () {
            this.count -= 1;
        },
        reset: function () {
            this.count = 0;
        }
    }
});