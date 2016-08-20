/**
 * Created by deepak on 08/19/16.
 */
// Module to render nested comments 
// This is a completely reusable component with dependencies only on CSS classes, which can be easily changed.
// This can be recursively used to generate a Disqus like system.

var React = require('react');
var ReactDOM = require('react-dom');

var ChildComments = React.createClass({
    render: function(){
        return (
            <div className="col-xs-8 col-md-offset-2">
                <h5><span>SomeRandomGuy</span> says:</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos possimus porro earum dolor sint fuga laborum velit laudantium distinctio quos sunt veritatis unde inventore, autem ad tenetur voluptatibus mollitia vel!"</p>
            </div>
        )
    }
});

module.exports = ChildComments;