const app = Vue.createApp({
    data() {
        return {
            name: 'Kristen',
            age: 18,
            image: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Toronto_Montage_2020.jpg'
        };
    },
    methods: {
        rando() {
            return Math.random();
        },
        ageFive() {
            return this.age + 5;
        }
    }
});
app.mount('#teste');