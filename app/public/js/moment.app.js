var app = new Vue({
  el: '#momentApp',
  data:{
    someDate: '1993-07-20T09:44:18.674Z'
  },
  computed: {
    age() {
      return moment().diff(this.someDate, 'years');
    }
  },
  methods:{
    formatDate(d) {
      return moment(d).format("dddd, MMMM Do YYYY");
    }
  },

});
