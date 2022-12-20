Vue.createApp({
    data() {
        return {
            boxA: false,
            boxB: false,
            boxC: false
        }
    },
    methods: {
        boxSelected(box) {
            if (box === 'a')
                this.boxA = !this.boxA;
            else if (box === 'b')
                this.boxB = !this.boxB;
            else 
                this.boxC = !this.boxC;
        }
    },
    computed: {
        boxAStyle() {
            return {active: this.boxA};
        }
    }

}).mount('#styling');