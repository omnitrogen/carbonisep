import React from "react";
import { useSelector } from "react-redux";
import { Container, Card, Row, Col } from "react-bootstrap";

import { Navigation } from "components/App/Navigation";

function Profile() {
    const user = useSelector((state) => state.authentication.user);

    return (
        <div>
            <Navigation />
            <Container className="my-5">
                <Row className=" justify-content-md-center">
                    <Col md="auto">
                        <Card border="primary" style={{ width: "18rem" }}>
                            <Card.Header>{user.username}</Card.Header>
                            <Card.Body>
                                <Card.Title>
                                    {user.firstName} {user.lastName}
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export { Profile };
