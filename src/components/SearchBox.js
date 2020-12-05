import React from 'react';
import { Container, Row, Form, Button } from 'react-bootstrap';

const Searchbox = ({ handleSearch }) => {
    return (
        <Container>
            <Form>
                <Form.Row>
                    <Form.Group controlID="search">
                        <Form.Control type="search" placeholder="Search for an employee" />
                    </Form.Group>
                    <Button variant="primary" type="submit">Search</Button>
                </Form.Row>
            </Form>
        </Container>
    )
}

export default Searchbox;