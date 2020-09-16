
var app = new Vue({
  el: '#vue-app',
  data: {
    message: 'Hello Vue!',
    oneUser: {
    firstName: '',
    lastName: '',
    email: '',
    birthDate: '',
    countryoforigin: '',
    imageSource: ''
  },
  userList: [],
  user: {},
},
  created() {
      fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(json =>
          {this.userList = json;
          console.log(json)}
      );
}
})
