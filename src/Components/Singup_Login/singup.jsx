import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import './singup.css'; // Import CSS file for styling

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const errors = {};
    if (!name) {
      errors.name = 'Name is required';
    }
    if (!age) {
      errors.age = 'Age is required';
    }
    if (!email) {
      errors.email = 'Email is required';
    }
    if (!password) {
      errors.password = 'Password is required';
    }
    
    if (Object.keys(errors).length > 0) {
      // If there are errors, set the state to display them
      setErrors(errors);
    } else {
      // If no errors, proceed with form submission logic
      console.log('Form submitted:', { name, age, email, password });
    }
  };
  

  return (
    <div className="register-page fullscreen">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        {errors.name && <span className="error">{errors.name}</span>}
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        {errors.age && <span className="error">{errors.age}</span>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {errors.email && <span className="error">{errors.email}</span>}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {errors.password && <span className="error">{errors.password}</span>}
        <button type="submit">Register</button>
      </form>
      <button className="google-signup">
        <FontAwesomeIcon icon={faGoogle} />
        Sign up with Google
      </button>
    </div>
  );
};

export default RegisterPage;
