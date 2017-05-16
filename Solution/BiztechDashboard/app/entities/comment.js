"use strict";
var Comment = (function () {
    function Comment(CommentID, AppID, Comment, UserName, DatePosted, Subject) {
        this.CommentID = CommentID;
        this.AppID = AppID;
        this.Comment = Comment;
        this.UserName = UserName;
        this.DatePosted = DatePosted;
        this.Subject = Subject;
    }
    return Comment;
}());
exports.Comment = Comment;
