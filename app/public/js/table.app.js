var app = new Vue({
  el: '#commentPage',
  data: {
    comments: [{
      id: "",
      commentText: ""
    }],
    newComment: {
      commentText: ""
    }
  },

  methods: {
    fetchComment() {
      fetch('api/comments/')
      .then(response => response.json())
      .then(json => {
        this.comments=json;
        console.log(this.comments);
      });
    },
    createComment( evt ){
      //make a line for getting the // ID
      fetch('api/comments/create.php',{
      method:'POST',
      body: JSON.stringify(this.newComment),
      headers: {
        "CONTENT_TYPE": "application/json; charset=utf-8"
      }}
    )
    .then( response => response.json())
    .then( json => {
      console.log("Returned from post:", json);
      this.comments.push(json[0]);
      this.newComment = this.newCommentData();
    });
    console.log("Creating (POSTING)...!");
    console.log(this.newComment);
  },
  newCommentData() {
    return {
      commentText: ""
    };
  }
},
created() {
  this.fetchComment();
}
}
);
