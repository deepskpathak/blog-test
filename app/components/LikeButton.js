/**
 * Created by deepak on 08/19/16.
 */
// Module to render the toggle like Button structure.
// This is a completely reusable component with dependencies only on CSS classes, which can be easily changed.

var React = require('react');
var ReactDOM = require('react-dom');

var LikeButton = React.createClass({
    getInitialState: function(){
        return {
            text: 'Like'
        };
    },
    handleClick: function(){
        // This button click handler can have any kind of logic to handle the event. Showing counts, toggling states, call to action etc.
        if (this.state.text === 'Like'){
            this.setState({text: 'Unlike'});
        } else {
            this.setState({text: 'Like'});
        }
    },
    render: function() {
        return <button className="btn btn-sm btn-info" onClick={this.handleClick}>{this.state.text}</button>;
    }
});

module.exports = LikeButton;
