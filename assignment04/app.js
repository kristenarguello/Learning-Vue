Vue.createApp({
    data() {
        return {
            styleClass: '',
            toggle: true,
            color: ''
        }
    },
    methods: {
        toggleStyle() {
            this.toggle = !this.toggle;
        }
    },
    computed: {
        whichOne() {
            return this.toggle? 'visible' : 'hidden';
        }
    }
    
}).mount('#assignment');