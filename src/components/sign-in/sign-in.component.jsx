import React from 'react';
import './sign-in.styles.scss';

class SignIn extends React.Component{
    constructor(props) {
        super(props);

        this.state={
            email:'',
            password:''
        }
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have account</h2>
                <span>sign in with your email and password</span>


                <form>
                    <input type='email' name='email' value={this.state.email} required/>
                    <label>Email</label>
                    <input type='password' name='password' value={this.state.password} required/>
                    <label>Password</label>

                    <input type='submit' value='Submit form'/>
                </form>
            </div>
        );
    }
}

export default SignIn;