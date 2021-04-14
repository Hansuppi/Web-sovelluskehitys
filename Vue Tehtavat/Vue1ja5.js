
new Vue ({
    el: "#hello-world-app",
    data: {
        message: "Hello world!"
    },
    computed: {
        countChars: function() {
            return this.message.replace(/\s+/g,'').length
        }
    }
});
