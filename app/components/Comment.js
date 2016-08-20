/**
 * Created by deepak on 08/19/16.
 */
// Module to render the Comment structure. 
// This is a completely reusable component with dependencies only on CSS classes, which can be easily changed.

//imports
var React = require('react');
var ReactDOM = require('react-dom');
var ChildComments = require('../components/ChildComments'); // for rendering of childComments 


var Comment = React.createClass({
    render: function(){
        // Just a demo - can have complex states, events and JSON data parsing depending on situations
        var commentsAuthor = this.props.commentData[0].author;
        var commentsBody = this.props.commentData[0].body;
        var childComments = this.props.commentData;
        
        // Notice the ChildComments component being used here - a demo for reusable components with custom properties. 
        return (
            <div className="panel panel-info">
                <div className="panel-heading">Comments</div>
                <div className="panel-body">
                    <h4>{commentsAuthor} says:</h4>
                    <p>{commentsBody}</p>
                </div>
                <div className="panel-body">
                    <ChildComments childCommentdata={childComments}/>
                </div>
            </div>
        )
    }
});

module.exports = Comment;