const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  methods: {
    outputFullName() {
      if (this.name === '')
        return '';
      return this.name + ' ' + 'Arguello';
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
    }
  },
  computed: {
    fullName() {
      console.log('Running again...');
      if (this.name === '')
        return '';
      return this.name + ' ' + 'Arguello'; 
    }
  }
});
app.mount('#events');
