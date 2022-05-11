import React from 'react';
import { Card, Container } from 'react-bootstrap';

const WorkerCard = (props) => {
    return (
        <div>
            <Container>
                <br />
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{props.data.name}</Card.Title>
                        <h4>{props.data.age}</h4>
                        <h4>{props.data.occupation}</h4>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>

            </Container>

        </div>
    );
}

export default WorkerCard;
