import React from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

function Devices() {
  return (
    <Container>
        <h1>Devices </h1>
        <hr/>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>IP</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>D122</td>
          <td>192.168.0.101</td>
          <td>Active</td>
        </tr>
        <tr>
          <td>2</td>
          <td>D123</td>
          <td>192.168.0.102</td>
          <td>Disabled</td>
        </tr>
        <tr>
          <td>3</td>
          <td>D124</td>
          <td>192.168.0.103</td>
          <td>Inactive</td>
        </tr>
      </tbody>
    </Table>
         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>DNO:1020</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Container>
  )
}

export default Devices