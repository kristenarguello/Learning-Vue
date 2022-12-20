Vue.createApp({
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        add(n) {
            this.counter += n;
        }
    },
    computed: {
        finalResult() {
            if (this.counter < 37)
                return 'Not there yet!';
            else if (this.counter > 37)
                return 'Too much!';
            else
                return this.counter; 
        }
    },
    watch: {
        counter() {
            const that = this;
            setTimeout(function() {
                that.counter = 0;
            }, 5000);
        }
    }

}).mount("#assignment");