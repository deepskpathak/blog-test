/**
 * Created by deepak on 08/19/16.
 */
// Module to render the overall page structure. 
// This is a completely reusable component with dependencies only on CSS classes, which can be easily changed.

// imports
var React = require('react');
var ReactDOM = require('react-dom');

// the page structure
var Page = React.createClass({
    render: function(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-6 col-md-offset-2">
                        {this.props.children}
                    </div>
                </div>

            </div>
        )
    }
});

module.exports = Page;