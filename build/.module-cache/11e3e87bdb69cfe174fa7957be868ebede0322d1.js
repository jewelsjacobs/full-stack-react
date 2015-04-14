var Login = React.createClass({displayName: "Login",
    render: function() {
        return (
            React.createElement(ReactBootstrap.Grid, null, 
                React.createElement(ReactBootstrap.Row, null, 
                    React.createElement(ReactBootstrap.Col, {md: 12}, React.createElement("h1", null, "THE MEAN EXCHANGE"))
                ), 
                React.createElement(ReactBootstrap.Row, null, 
                    React.createElement(ReactBootstrap.Col, {md: 12}, React.createElement("h1", null, "General Info"))
                ), 
                React.createElement(ReactBootstrap.Row, null, 
                    React.createElement(ReactBootstrap.Col, {md: 6, id: "hm"}, React.createElement("h1", null, "HM / R")), 
                    React.createElement(ReactBootstrap.Col, {md: 6, id: "devs"}, React.createElement("h1", null, "Developers"))
                ), 
                React.createElement(ReactBootstrap.Row, null, 
                    React.createElement(ReactBootstrap.Col, {md: 12}, React.createElement("h1", null, "Footer"))
                )
            )
        );
    }
});
React.render(
    React.createElement(Login, null),
    document.getElementById('app')
);