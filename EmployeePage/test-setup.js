const axios = require('axios');

async function testSetup() {
  console.log('Testing Employee Dashboard Setup...\n');
  
  try {
    // Test backend server
    console.log('1. Testing backend server...');
    const healthResponse = await axios.get('http://localhost:5000/api/health');
    console.log('✅ Backend server is running:', healthResponse.data);
    
    // Test users API
    console.log('\n2. Testing users API...');
    const usersResponse = await axios.get('http://localhost:5000/api/users');
    console.log('✅ Users API is working. Found', usersResponse.data.length, 'users');
    
    // Test employee form API
    console.log('\n3. Testing employee form API...');
    const testEmployee = {
      name: 'Test Employee',
      designation: 'Developer',
      location: 'Test City',
      salary: '50000'
    };
    
    const employeeResponse = await axios.post('http://localhost:5000/api/employees', testEmployee);
    console.log('✅ Employee form API is working:', employeeResponse.data.message);
    
    console.log('\n🎉 All tests passed! The application is working correctly.');
    console.log('\nYou can now:');
    console.log('- Visit http://localhost:3000 for the frontend');
    console.log('- Visit http://localhost:5000/api/users for the API');
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
    console.log('\nTroubleshooting:');
    console.log('1. Make sure both servers are running (npm run dev)');
    console.log('2. Check if ports 3000 and 5000 are available');
    console.log('3. Verify all dependencies are installed');
  }
}

// Run the test
testSetup();

