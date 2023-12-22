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
      // Navigate back to the previous page or home on successful login
      navigate(-1, { replace: true });
    } catch (err) {
      console.error(err); // for debugging!
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div>
      <div className="sm:mx-[10rem] md:mx-[13rem] lg:mx-[20rem]">
        <form autoComplete="off" onSubmit={handleSubmit} className="flex flex-col">
          <div className="mb-4 flex flex-col sm:flex-row sm:justify-between items-center">
            <label className="mb-2">Email</label>
            <input 
            className="sm:basis-2/4 md:basis-3/4 form-input border border-black rounded" 
            type="text" name="email" value={credentials.email} onChange={handleChange} required />
          </div>
          <div className="mb-4 flex flex-col sm:flex-row sm:justify-between items-center">
            <label className="mb-2">Password</label>
            <input 
            className="basis-2/4 md:basis-3/4 form-input border border-black rounded"
            type="password" name="password" value={credentials.password} onChange={handleChange} required />
          </div>
          <button 
          type="submit" 
          className="bg-dark bg-opacity-20 text-black  py-1 px-5 mt-6 mx-[5.6rem] rounded transition-transform transform hover:scale-110">
          LOG IN
          </button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}