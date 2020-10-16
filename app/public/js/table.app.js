var app = new Vue({
  el: '#certificationPage',
  data: {
    comment: [{
      id: "",
      commentText: "",
    }],
    newComment: [{
      id: "",
      commentText: "",
    }],
  },

  methods: {
    fetchComment() {
      fetch('api/comments/')
      .then(response => response.json())
      .then(json => {
        this.comment=json;
        console.log(this.comment);
      });
    },
    createComment(){
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
      this.comment.push(json[0]);
      this.newComment = this.newCommentData();
    });
    console.log("Creating (POSTING)...!");
    console.log(this.newComment);
  },
  newCommentData() {
    return {
      id: "",
      commentText: "",
    }
  }
},
created() {
  this.fetchComment();
}
}
);
