const Comment = require("./Comment");

class Post {
    constructor (title, body, author, like){
        this.title = title,
        this.body = body,
        this.author = author,
        this.like = 0,
        this.comments = []
        this.createdAt = new Date()
    }
    addComment (username, content){
        this.comments.push(new Comment(username, content));
    }
    likePost(like){
        this.like += like
    }
}

module.exports = Post