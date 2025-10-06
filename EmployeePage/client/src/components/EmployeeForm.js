import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const EmployeeForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    location: '',
    salary: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setError('');

    try {
      const response = await axios.post('/api/employees', formData);
      setMessage('Employee added successfully! Redirecting to dashboard...');
      setFormData({
        name: '',
        designation: '',
        location: '',
        salary: ''
      });
      
      // Redirect to dashboard after 2 seconds
      setTimeout(() => {
        navigate('/dashboard');
      }, 2000);
    } catch (err) {
      const errorMessage = err.response?.data?.error || err.message || 'Failed to add employee. Please try again.';
      setError(errorMessage);
      console.error('Error adding employee:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card>
            <Card.Header>
              <h2 className="text-center mb-0">Employee Form</h2>
            </Card.Header>
            <Card.Body>
              {message && (
                <Alert variant="success" dismissible onClose={() => setMessage('')}>
                  {message}
                </Alert>
              )}
              
              {error && (
                <Alert variant="danger" dismissible onClose={() => setError('')}>
                  {error}
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Name *</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter employee name"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Designation *</Form.Label>
                  <Form.Control
                    type="text"
                    name="designation"
                    value={formData.designation}
                    onChange={handleChange}
                    placeholder="Enter designation"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Location *</Form.Label>
                  <Form.Control
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Enter location"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Salary *</Form.Label>
                  <Form.Control
                    type="number"
                    name="salary"
                    value={formData.salary}
                    onChange={handleChange}
                    placeholder="Enter salary"
                    min="0"
                    step="0.01"
                    required
                  />
                </Form.Group>

                <div className="d-grid">
                  <Button 
                    variant="primary" 
                    type="submit" 
                    disabled={loading}
                    size="lg"
                  >
                    {loading ? 'Adding Employee...' : 'Add Employee'}
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default EmployeeForm;
