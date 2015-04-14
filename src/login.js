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
                    <Col md={12}><h1>General Info</h1></Col>
                </Row>
                <Row>
                    <Col md={6} id="hm"><h1>HM / R</h1></Col>
                    <Col md={6} id="devs"><h1>Developers</h1></Col>
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