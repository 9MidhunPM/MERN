# Sample Data Configuration

This document explains how to modify the sample data in the Employee Dashboard.

## 📁 Files to Modify Sample Data

### 1. **Custom Sample Data** (`server/sampleData.js`)
This file contains your custom employee data. You can:
- Add new employees
- Modify existing employee information
- Change names, emails, addresses, etc.

```javascript
const sampleEmployees = [
  {
    id: 1,
    name: "Your Name Here",
    email: "your.email@company.com",
    username: "yourusername",
    address: {
      street: "Your Street",
      suite: "Your Suite",
      city: "Your City",
      zipcode: "Your Zip",
      geo: {
        lat: "Your Latitude",
        lng: "Your Longitude"
      }
    }
  }
  // Add more employees here...
];
```

### 2. **Data Source Configuration** (`server/config.js`)
Choose between custom data or external API:

```javascript
module.exports = {
  // Set to 'custom' to use local sample data
  // Set to 'external' to use jsonplaceholder API
  dataSource: 'custom', // Options: 'custom' or 'external'
  
  externalApiUrl: 'https://jsonplaceholder.typicode.com/users'
};
```

## 🔧 How to Change Sample Data

### Option 1: Use Custom Data (Recommended)
1. Edit `server/sampleData.js`
2. Set `dataSource: 'custom'` in `server/config.js`
3. Restart the server

### Option 2: Use External API
1. Set `dataSource: 'external'` in `server/config.js`
2. Restart the server

### Option 3: Use Different External API
1. Set `dataSource: 'external'` in `server/config.js`
2. Change `externalApiUrl` to your preferred API
3. Restart the server

## 📝 Adding New Sample Employees

To add new employees to the sample data:

1. Open `server/sampleData.js`
2. Add a new employee object to the `sampleEmployees` array:

```javascript
{
  id: 6, // Make sure ID is unique
  name: "New Employee Name",
  email: "new.employee@company.com",
  username: "newemployee",
  address: {
    street: "123 New Street",
    suite: "Suite 300",
    city: "New City",
    zipcode: "12345",
    geo: {
      lat: "40.0000",
      lng: "-74.0000"
    }
  }
}
```

## 🚀 Restart Required

After making changes to sample data:
1. Stop the server (Ctrl+C)
2. Restart with `npm run dev` or `npm run start-backend`

## 📊 Current Configuration

- **Data Source**: Custom (local sample data)
- **Sample Employees**: 5 employees in `server/sampleData.js`
- **External API**: jsonplaceholder.typicode.com/users (when using external)

## 🔍 Testing Changes

To test your changes:
1. Visit `http://localhost:5000/api/users` to see sample data
2. Visit `http://localhost:5000/api/all-employees` to see combined data
3. Check the dashboard at `http://localhost:3000`
