var app = new Vue({
  el: '#vue-app',
  data: {
    user:'user.results[0].name',
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
