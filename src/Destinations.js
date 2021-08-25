import React, { Component } from 'react';
import germany from "/Users/danielvass/danielwebsite/src/pictures/germany.jpeg";
import { Card, Button, CardColumns, CardGroup, Row, Col } from 'react-bootstrap';
import screen from '/Users/danielvass/danielwebsite/src/pictures/ss.png';

function Destinations() {
    return (
        <div className="hello">
            <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={screen}/>
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
    );
}

export default Destinations;
