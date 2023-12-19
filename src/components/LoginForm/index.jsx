import { useState } from 'react';
import * as usersService from '../../utilities/users-service';
import { Link, useNavigate } from 'react-router-dom';
export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
      navigate(-1, { replace: true });
    } catch (err) {
      console.error(err); // for debugging!
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Email</label>
          <input type="text" name="email" value={credentials.email} onChange={handleChange} required />
          <br></br>
          <label>Password</label>
          <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
          <br></br>
          <button type="submit" className="bg-black text-yellow py-2 px-4 rounded hover:bg-yellow hover:text-black">LOG IN</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}