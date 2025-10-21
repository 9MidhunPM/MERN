import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Row, Col, Alert, Spinner } from 'react-bootstrap';

function EmployeeDashboard() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setEmployees(response.data);
        setError(null);
      } catch (error) {
        setError('Error fetching employee data. Please try again later.');
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="danger" className="mt-3">
        {error}
      </Alert>
    );
  }

  return (
    <div>
      <h2 className="mb-4 text-center">Employee Dashboard</h2>
      <Row>
        {employees.map(employee => (
          <Col key={employee.id} xs={12} md={6} lg={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>{employee.name}</Card.Title>
                <Card.Text>
                  <strong>ID:</strong> {employee.id}<br />
                  <strong>Email:</strong> {employee.email}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default EmployeeDashboard;
