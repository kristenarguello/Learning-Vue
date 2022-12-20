const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      //fullName: ''
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
      this.lastName = '';
    }
  },
  watch: {
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      }
    } //useful if you want to alter something but not always, 
    //only when a specific requiremente is achieved.

    // name(value) {
    //   if (value === '')
    //     this.fullName = '';
    //   else
    //     this.fullName = value + ' ' + this.lastName;
    // },
    // lastName() {
    //   if (value === '')
    //     this.fullName = '';
    //   else
    //     this.fullName = this.name + ' ' + value;
    // }

    //http requests = useful
    //timer = useful -- timeOut
    //both used when certain things change
    //update some data property in reaction to some other property changes

  },
  computed: {
    fullName() {
      console.log('Running again...');
      if (this.name === '' || this.lastName === '')
        return '';
      return this.name + ' ' + this.lastName;
    }
  }//useful when you need to use two different data to
  //build a third one
});
app.mount('#events');
