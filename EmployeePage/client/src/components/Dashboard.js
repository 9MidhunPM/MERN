import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Table, Spinner, Alert } from 'react-bootstrap';
import axios from 'axios';

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [viewMode, setViewMode] = useState('cards'); // 'cards', 'table', 'list'

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get('/api/all-employees');
      setUsers(response.data);
    } catch (err) {
      const errorMessage = err.response?.data?.error || err.message || 'Failed to fetch users. Please try again later.';
      setError(errorMessage);
      console.error('Error fetching users:', err);
    } finally {
      setLoading(false);
    }
  };

  const renderCardView = () => (
    <Row>
      {users.map((user) => (
        <Col key={user.id} md={4} lg={3} className="mb-4">
          <Card className="employee-card h-100">
            <Card.Body>
              <Card.Title className="text-primary">
                ID: {user.id}
                {user.type === 'local' && <span className="badge bg-success ms-2">Local</span>}
                {user.type === 'external' && <span className="badge bg-info ms-2">External</span>}
              </Card.Title>
              <Card.Text>
                <strong>Name:</strong> {user.name}<br />
                <strong>Email:</strong> {user.email}
                {user.designation && <><br /><strong>Designation:</strong> {user.designation}</>}
                {user.location && <><br /><strong>Location:</strong> {user.location}</>}
                {user.salary && <><br /><strong>Salary:</strong> ${user.salary.toLocaleString()}</>}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );

  const renderTableView = () => (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Type</th>
          <th>Designation</th>
          <th>Location</th>
          <th>Salary</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              <span className={`badge ${user.type === 'local' ? 'bg-success' : 'bg-info'}`}>
                {user.type === 'local' ? 'Local' : 'External'}
              </span>
            </td>
            <td>{user.designation || '-'}</td>
            <td>{user.location || '-'}</td>
            <td>{user.salary ? `$${user.salary.toLocaleString()}` : '-'}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );

  const renderListView = () => (
    <div className="list-group">
      {users.map((user) => (
        <div key={user.id} className="list-group-item">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">
              ID: {user.id}
              <span className={`badge ${user.type === 'local' ? 'bg-success' : 'bg-info'} ms-2`}>
                {user.type === 'local' ? 'Local' : 'External'}
              </span>
            </h5>
          </div>
          <p className="mb-1"><strong>Name:</strong> {user.name}</p>
          <p className="mb-1"><strong>Email:</strong> {user.email}</p>
          {user.designation && <p className="mb-1"><strong>Designation:</strong> {user.designation}</p>}
          {user.location && <p className="mb-1"><strong>Location:</strong> {user.location}</p>}
          {user.salary && <small><strong>Salary:</strong> ${user.salary.toLocaleString()}</small>}
        </div>
      ))}
    </div>
  );

  if (loading) {
    return (
      <Container className="mt-5">
        <div className="text-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <p className="mt-2">Loading users...</p>
        </div>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="mt-5">
        <Alert variant="danger">
          {error}
          <button 
            className="btn btn-outline-danger btn-sm ms-2" 
            onClick={fetchUsers}
          >
            Retry
          </button>
        </Alert>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <Row className="mb-4">
        <Col>
          <h1 className="text-center mb-4">Employee Dashboard</h1>
          <div className="d-flex justify-content-center mb-3">
            <div className="btn-group" role="group">
              <button
                type="button"
                className={`btn ${viewMode === 'cards' ? 'btn-primary' : 'btn-outline-primary'}`}
                onClick={() => setViewMode('cards')}
              >
                Cards
              </button>
              <button
                type="button"
                className={`btn ${viewMode === 'table' ? 'btn-primary' : 'btn-outline-primary'}`}
                onClick={() => setViewMode('table')}
              >
                Table
              </button>
              <button
                type="button"
                className={`btn ${viewMode === 'list' ? 'btn-primary' : 'btn-outline-primary'}`}
                onClick={() => setViewMode('list')}
              >
                List
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={fetchUsers}
                disabled={loading}
              >
                {loading ? 'Refreshing...' : 'Refresh'}
              </button>
            </div>
          </div>
        </Col>
      </Row>

      {viewMode === 'cards' && renderCardView()}
      {viewMode === 'table' && renderTableView()}
      {viewMode === 'list' && renderListView()}
    </Container>
  );
};

export default Dashboard;
