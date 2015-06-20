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
                    <Col md={12}>
                        <Alert bsStyle="success">
                            <h1>General Info</h1>
                            <p>Welcome, job seeker / employee seeker. Please login to begin your quest.</p>
                        </Alert>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <div id="hm" className="login-panel text-center">
                            <h1>PROFESSIONAL</h1>
                            <p>Are you ready to hire? Ready to apply? Log in and get started now.</p>
                            <p>We help connect employers and applicants on the cutting edge of web technology. As developers ourselves in the new era of always changing frameworks and languages, we give both developers and employers the knowledge and connections they need to get to where they want to be.</p>
                            <div>
                                <Button bsSize='large' bsStyle='primary' className='linkedin-bg'><i className="fa fa-linkedin"></i> Login</Button>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div id="devs" className="login-panel text-center">
                            <h1>HIP AND SILLY</h1>
                            <p>In a world of buzzwords where frameworks come into an out of fashion faster than Moore's law, it can be hard to find the job or the applicants you need. Whether you're the job hunter or the job huntee, we've got the goods for you. We aim to connect awesome employees to employers and also to bring more applicants up to speed to make the pool of applicants even better. So buckle up, log in and let's get this started.</p>
                            <div>
                                <Button bsSize='large' bsStyle='primary' classNam="github-bg"><i className="fa fa-github"></i> Login</Button>
                            </div>
                        </div>
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
