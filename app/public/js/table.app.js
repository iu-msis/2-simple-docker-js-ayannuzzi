var app = new Vue({
  el: '#commentPage',
  data: {
      comments: [{
        id:'',
        commentText:''
      }],
      newComment: {
        commentText:''
      },
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
    createComment(){
      //make a line for getting the // ID
      console.log("Test" + this.newComment.commentText);
      fetch('api/comments/create.php',{
      method:'POST',
      body: JSON.stringify(this.newComment),
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }}
    )
    .then( response => response.json())
    .then( json => {
      console.log("Returned from post:"+ json);
      this.comments =json;
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
