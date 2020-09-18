var app = new Vue({
  el: '#vue-app',
  data: {
  user: {
    "results":[{
      "name":{
        "first":"",
        "last": ""
      },
      "email":"",
      "picture": {
        "medium":""
      },
      "location":{
        "country": ""
      },
      "dob": {
        "date": ""
      }
        }]
  }
},

  created() {
      fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(json =>
          {this.user = json;
          console.log(json);}
        )
        .catch((error)=>{
          console.error('Error:', error);
          fetch('./JSON/randomuser.me-sample.json')
          .then(response => response.json())
          .then(json =>{
            {this.user = json;
            console.log(json);}
          })
        });
         }
       });
