import React, { useState } from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';


const CreateForm = (props) => {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [occupation, setOccupation] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        let newWorker = {
            name: name,
            age: age,
            occupation: occupation,
        }
        props.addWorker(newWorker);
        //clearing the input fields after submit
        setName('');
        setAge('');
        setOccupation('');


    }

    return (
        <div>
            <Container>
                <br />
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => { setName(e.target.value) }} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Age</Form.Label>
                                <Form.Control type="text" placeholder="enter age" value={age} onChange={(e) => { setAge(e.target.value) }} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Occupation</Form.Label>
                                <Form.Control type="text" placeholder="Enter occupation" value={occupation} onChange={(e) => { setOccupation(e.target.value) }} />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
}

export default CreateForm;
