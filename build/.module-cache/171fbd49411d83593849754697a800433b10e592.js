var Login = React.createClass({displayName: "Login",
    render: function() {
        return (
            React.createElement(ReactBootstrap.Grid, null, 
                React.createElement(ReactBootstrap.Row, {className: "row"}, 
                    React.createElement("div", {className: "col-md-12"}, React.createElement("h1", null, "THE MEAN EXCHANGE"))
                ), 
                React.createElement("div", {className: "row"}, 
                    React.createElement("div", {className: "col-md-12"}, React.createElement("h1", null, "General Info"))
                ), 
                React.createElement("div", {className: "row"}, 
                    React.createElement("div", {id: "hm", className: "col-md-6"}, React.createElement("h1", null, "HM / R")), 
                    React.createElement("div", {id: "devs", className: "col-md-6"}, React.createElement("h1", null, "Developers"))
                ), 
                React.createElement("div", {className: "row"}, 
                    React.createElement("div", {className: "col-md-12"}, React.createElement("h1", null, "Footer"))
                )
            )
        );
    }
});
React.render(
    React.createElement(Login, null),
    document.getElementById('app')
);