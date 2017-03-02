import React from 'react';
import Component from '../../config/component';

class SignInForm extends Component {
    constructor(props){
        super(props, [
            "signup", "setEmail", "setPassword", "setPasswordConfirmation" // Required Methods
        ])
        this.state.email = "";
        this.state.password = "";
        this.state.passwordConfirmation = "";
    }
    render(){
        return (
            <div>
                {!this.state.errors || (
                    <div>
                        {this.state.errors.join(" ")}
                    </div>
                )}
                <form onSubmit={this.signup}>
                    <input type="text" 
                        onChange={this.setEmail} 
                        value={this.state.email} 
                        ref="email" 
                        placeholder="Email"
                    />
                    <br />
                    <br />
                    <input 
                        type="password" 
                        onChange={this.setPassword} 
                        value={this.state.password} 
                        ref="password" 
                        placeholder="Password"
                    />
                    <br />
                    <br />
                    <input 
                        type="password" 
                        onChange={this.setPasswordConfirmation} 
                        value={this.state.passwordConfirmation} 
                        ref="passwordConfirmation" 
                        placeholder="Password Confirmation"
                    />
                    <br />
                    <br />
                    <input type="submit" value="Sign Up" />
                </form>
            </div>
        );
    }
}

export default SignInForm;