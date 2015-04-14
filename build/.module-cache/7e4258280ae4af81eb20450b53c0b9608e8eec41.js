var Login = React.createClass({displayName: "Login",
    render: function() {
        return (
            React.createElement("div", {className: "commentBox"}, 
                "Hello, world! I am a CommentBox."
            )
        );
    }
});
React.render(
    React.createElement(Login, null),
    document.getElementById('app')
);