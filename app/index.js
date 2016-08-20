/**
 * Created by deepak on 08/19/16.
 */
// Module to render the overall App structure. 
// Notice the use of reusable components and data source being used..

var React = require('react');
var ReactDOM = require('react-dom');
var axios = require('axios'); // Helper method to use REST based API's
var Page = require('./components/Page'); // reusable
var Comment = require('./components/Comment'); // reusable
var ChildComments = require('./components/ChildComments'); // reusable

// DOM testing is pretty messy business unless something like selenium/rspec/jasmine being used. This is Sentry being used to automate DOM testing. 
var sentryKey = '39e290a006c44d6aa249c8040a9f4bee';
var sentryApp = '93304';
var sentryURL = 'https://' + sentryKey + '@app.getsentry.com/' + sentryApp;

Raven.config(sentryURL).install(); // Sentry Install.

var App = React.createClass({

    getInitialState: function() {
        return {
            posts: []
        }
    },

    componentDidMount: function() {
        var th = this;
        // using axios to get the data and pass around in JS Promise way! Possibilities are many - like using this as a Service js file or Something.
        this.serverRequest =
            axios.get(this.props.source)
                .then(function(result) {
                    th.setState({
                        posts: result.data
                    });
                })
    },

    componentWillUnmount: function() {
        this.serverRequest.abort();
    },
    // Notice the use of reusable components like Page and Comment
    render: function() {
        return (
            <div className="col-xs-12">
                {this.state.posts.map(function(posts) {
                    return (
                        <Page>
                            <div key={posts.id} className="col-md-12">
                                <h2>{posts.title}</h2>
                                <img src={posts.image} alt=""/>
                                <h4><span>{posts.author}</span> <span className="label label-default">- posted on {posts.createdOn}</span></h4>
                                <p>{posts.body}</p>
                                <Comment commentData={posts.comments}></Comment>
                            </div>
                            <hr/>
                        </Page>

                    );
                })}
            </div>
        )
    }
});
// providing the local data file as source, can be any http based url for consumption.
ReactDOM.render(<App source="data.json" />, document.querySelector("#app"));