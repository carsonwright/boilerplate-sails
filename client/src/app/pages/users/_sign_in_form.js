import React from 'react';
import Component from '../../config/component';

class SignInForm extends Component {
    constructor(props){
        super(props, [
            "signin", "setEmail", "setPassword" // Required Methods
        ])
        this.state.email = "";
        this.state.password = "";
    }
    render(){
        return (
            <div>
                <form onSubmit={this.signin}>
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
                    <input type="submit" value="Login" />
                </form>
            </div>
        );
    }
}

export default SignInForm;