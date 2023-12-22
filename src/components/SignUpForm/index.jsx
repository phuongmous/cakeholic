import { Component } from 'react';
import { signUp } from '../../utilities/users-service';

export default class SignUpForm extends Component {
    state = {
        fullName: '',
        email: '',
        password: '',
        confirm: '',
        error: ''
    };

    // Event handler for input changes
    _handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value,
          error: ''
        });
    };

    // Event handler for form submission
    _handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // Prepare form data for sign-up
            const formData = {
                fullName: this.state.fullName,
                email: this.state.email,
                password: this.state.password
            };
            // Call the signUp utility function to register the user
            const user = await signUp(formData);
            // Set the user in the parent component's state
            this.props.setUser(user);
        } catch (err) {
            console.error(err);
            this.setState({error: 'Sign up failed - try again'});
        }
    }

    render() {
        // Disable the submit button if password and confirm password do not match
        const disable = this.state.password !== this.state.confirm;
        return (
          <div className="sm:mx-[10rem] md:mx-[13rem] lg:mx-[20rem]">
              <div>
                <form autoComplete="off" onSubmit={this._handleSubmit} className="flex flex-col">
                  
                  <div className="mb-4 flex flex-col sm:flex-row sm:justify-between items-center">
                    <label className="mb-2">Full Name</label>
                    <input 
                    className="sm:basis-2/4 md:basis-3/4 form-input border border-black rounded text-base" 
                    type="text" 
                    name="fullName" 
                    value={this.state.fullName} 
                    onChange={this._handleChange} 
                    required />
                  </div>

                  <div className="mb-4 flex flex-col sm:flex-row sm:justify-between items-center">
                      <label className="mb-2">Email</label>
                      <input 
                      className="sm:basis-2/4 md:basis-3/4 form-input border border-black rounded" 
                      type="email" 
                      name="email" 
                      value={this.state.email} 
                      onChange={this._handleChange} 
                      required 
                      />
                  </div>

                  <div className="mb-4 flex flex-col sm:flex-row sm:justify-between items-center">
                      <label className="mb-2">Password</label>
                      <input 
                      className="basis-2/4 md:basis-3/4 form-input border border-black rounded" 
                      type="password" 
                      name="password" 
                      value={this.state.password} 
                      onChange={this._handleChange} required 
                      />
                  </div>

                  <div className="mb-4 flex flex-col sm:flex-row sm:justify-between items-center">
                      <label className="mb-2">Confirm</label>
                      <input 
                      className="basis-2/4 md:basis-3/4 form-input border border-black rounded" 
                      type="password" 
                      name="confirm" 
                      value={this.state.confirm} 
                      onChange={this._handleChange} 
                      required 
                      />
                  </div>

                  <button 
                  type="submit" 
                  disabled={disable} 
                  className="bg-dark bg-opacity-20 text-black  py-1 px-5 mt-6 mx-[5.6rem] rounded transition-transform transform hover:scale-110"
                  >SIGN UP</button>

                </form>
                <p className="error-message">&nbsp;{this.state.error}</p>
              </div>
            </div>
        );
    }
}

