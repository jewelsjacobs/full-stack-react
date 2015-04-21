var Footer = React.createClass({
    render: function() {
        return (
            <Col md={12}><h1>Footer</h1></Col>
        );
    }
});

var Login = React.createClass({
    render: function() {
        return (
            <Grid>
                <Row>
                    <Col md={12}><h1>THE MEAN EXCHANGE</h1></Col>
                </Row>
                <Row>
                    <Col md={12} className="alert alert-dismissable alert-success">
                        <h1>General Info</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} id="hm" className="text-center">
                        <h1>Looking to hire web developers?</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        </p>
                        <p>
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <Button bsSize='large' bsStyle='primary'>Login</Button>
                    </Col>
                    <Col md={6} id="devs" className="text-center">
                        <h1>Want to be qualified for the perfect job?</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        </p>
                        <p>
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <Button bsSize='large' bsStyle='primary'>Login</Button>
                    </Col>
                </Row>
                <Row>
                    <Footer />
                </Row>
            </Grid>
        );
    }
});

React.render(
    <Login />,
    document.getElementById('app')
);
