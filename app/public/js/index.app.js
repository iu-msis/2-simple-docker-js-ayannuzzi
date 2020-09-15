let $btn = document.querySelector("#fetch-button");

let $avatar = document.querySelector("#avatar");
let $fullname = document.querySelector("#full-name");
let $email = document.querySelector("#email");
let $city = document.querySelector("#countryoforigin");

let url = "https://randomuser.me/api";

$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    console.log(data);
  }
});

// initial fetch and update UI
getUserAndUpdate();

// ====== Utility Functions ======
function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

// ====== Fetch functions ======
function handleErrors(response) {
  if (!response.ok) {
    throw Error("Custom Error: 404");
  }
  return response;
}

function updateProfile(data) {
  let info = data.results[0];

  $avatar.src = info.picture.medium;
  $fullname.innerText = `${capitalize(info.name.first)} ${capitalize(
    info.name.last
  )}`;
  $email.innerText = info.email;
  countryoforigin.innerText = info.location.countryoforigin;
}

function printError(err) {
  console.log(err);
}

// here's where the action happens
function getUserAndUpdate() {
  fetch(url)
    .then(handleErrors)
    .then(response => response.json())
    .then(updateProfile)
    .catch(printError);
}

// ====== Button Click Listener ======
$btn.addEventListener("click", () => {
  getUserAndUpdate();
});
new Vue({
  el: '#vue-app',
  data: {
    fullName: '',
    email: '',
    countryoforigin: '',
    birthdate: '',
    age: '',
    imageSource: ''
  },
  methods: {
    fetchData: function() {


      fetch(url)
        .then(handleErrors)
        .then(response => response.json())
        .then(data => {
          let info = data.results[0];
          this.fullName = `${capitalize(info.name.first)} ${capitalize(info.name.last)}`;
          this.email = info.email;
          this.countryoforigin = info.location.countryoforigin;
          this.imageSource = info.picture.medium;
        });
    }
  },
  created: function() {
    this.fetchData();
  }
});
