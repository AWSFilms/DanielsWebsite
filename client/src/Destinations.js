import React, { Component } from 'react';
import { Card, Button, CardColumns, CardGroup, Row, Col } from 'react-bootstrap';
import screen from './pictures/city.jpeg';
function Destinations() {
    return (
        <><div className="hello">
            <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 4 }).map((_) => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={screen} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
        <h1>wwsadde</h1>
        <div className="12">

            </div></>
    );
}

export default Destinations;
