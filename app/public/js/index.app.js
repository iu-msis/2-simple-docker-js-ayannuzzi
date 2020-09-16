var app = new Vue({
  el: '#vue-app',
  data: {
    user:'',
  },

  created() {
      fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(json =>
          {this.user = json;

          console.log(json);}
        );
         }
       });
