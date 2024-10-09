new Vue({
    el: '#app',
    data: {
        currentTime: new Date().toLocaleTimeString()
    },
    created() {
        setInterval(() => {
            this.currentTime = new Date().toLocaleTimeString();
        }, 1000);
    }
});

