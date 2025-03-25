// App.js
import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) {
      setError('Please fill in all fields');
      return;
    }
    if (!email.includes('@')) {
      setError('Please enter a valid email');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Simple Form</h1>
      {submitted ? (
        <p>Thank you, {name}! We'll email you at {email}.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name: </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </div>
          <br />
          <div>
            <label>Email: </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <br />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default App;