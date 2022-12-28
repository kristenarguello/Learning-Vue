const app = Vue.createApp({
    data() {
        return {
            courseGoal: 'Finish the course and learn Vue!',
            courseGoalB: '<h2>Master Vue and build amazing apps!</h2>',
            vueLink: 'https://vuejs.org/'
        };
    },
    methods: {
        outputGoal() {
            const random = Math.random();
            if (random < 0.5) {
                return this.courseGoal;
            } else {
                return this.courseGoalB;
            }
        }
    }
});
app.mount('#user-goal');

