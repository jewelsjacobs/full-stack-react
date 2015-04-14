var Footer = React.createClass({displayName: "Footer",
    render: function() {
        return (
            React.createElement(Col, {md: 12}, React.createElement("h1", null, "Footer"))
        );
    }
});

var Login = React.createClass({displayName: "Login",
    render: function() {
        return (
            React.createElement(Grid, null, 
                React.createElement(Row, null, 
                    React.createElement(Col, {md: 12}, React.createElement("h1", null, "THE MEAN EXCHANGE"))
                ), 
                React.createElement(Row, null, 
                    React.createElement(Col, {md: 12}, React.createElement("h1", null, "General Info"))
                ), 
                React.createElement(Row, null, 
                    React.createElement(Col, {md: 6, id: "hm"}, React.createElement("h1", null, "HM / R")), 
                    React.createElement(Col, {md: 6, id: "devs"}, React.createElement("h1", null, "Developers"))
                ), 
                React.createElement(Row, null, 
                    React.createElement(Footer, null)
                )
            )
        );
    }
});

React.render(
    React.createElement(Login, null),
    document.getElementById('app')
);