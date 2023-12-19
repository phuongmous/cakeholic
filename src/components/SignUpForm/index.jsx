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

    _handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value,
          error: ''
        });
    };

    _handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const formData = {
                fullName: this.state.fullName,
                email: this.state.email,
                password: this.state.password
            };

            const user = await signUp(formData);
            this.props.setUser(user);
        } catch (err) {
            // TODO: give a more meaningful error
            console.error(err);
            this.setState({error: 'Sign up failed - try again'});
        }
    }

    render() {
        const disable = this.state.password !== this.state.confirm;
        return (
          <div className="sm:mx-[10rem] md:mx-[13rem] lg:mx-[20rem]">
              <div>
                <form autoComplete="off" onSubmit={this._handleSubmit} className="flex flex-col">
                  <div className="mb-4 flex flex-col sm:flex-row sm:justify-between items-center">
                    <label className="mb-2">Full Name</label>
                    <input className="sm:basis-2/4 md:basis-3/4 form-input border border-black rounded text-base" type="text" name="fullName" value={this.state.fullName} onChange={this._handleChange} required />
                  </div>

                  <div className="mb-4 flex flex-col sm:flex-row sm:justify-between items-center">
                    <label className="mb-2">Email</label>
                    <input className="sm:basis-2/4 md:basis-3/4 form-input border border-black rounded" type="email" name="email" value={this.state.email} onChange={this._handleChange} required />
                  </div>

                  <div className="mb-4 flex flex-col sm:flex-row sm:justify-between items-center">
                    <label className="mb-2">Password</label>
                    <input className="basis-2/4 md:basis-3/4 form-input border border-black rounded" type="password" name="password" value={this.state.password} onChange={this._handleChange} required />
                  </div>

                  <div className="mb-4 flex flex-col sm:flex-row sm:justify-between items-center">
                    <label className="mb-2">Confirm</label>
                    <input className="basis-2/4 md:basis-3/4 form-input border border-black rounded" type="password" name="confirm" value={this.state.confirm} onChange={this._handleChange} required />
                  </div>
                  <button type="submit" disabled={disable} className="w-2/5 m-auto bg-black text-yellow py-2 px-4 rounded hover:bg-yellow hover:text-black">SIGN UP</button>
                </form>
                <p className="error-message">&nbsp;{this.state.error}</p>
              </div>
            </div>
        );
    }
}

