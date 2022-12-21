Vue.createApp({
    data() {
        return {
            tasks: [],
            newTask: '',
            show: true
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.newTask);
            this.newTask = '';
        },
        showOrHide() {
            this.show = !this.show;
        }
    },
    computed: {
        buttonCaption() {
            if (this.show)
                return 'Hide';
            else
                return 'Show';
        }
    }
}).mount('#assignment');