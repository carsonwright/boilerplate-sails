import React from 'react';
import Component from '../../config/component';

class SignInForm extends Component {
    constructor(props){
        super(props, [
            "signin", "setEmail" // Required Methods
        ])
        this.state.email = "";
    }
    render(){
        return (
            <div>
                <form onSubmit={this.signin}>
                    <input type="text" onChange={this.setEmail} value={this.state.email} ref="email" />
                </form>
            </div>
        );
    }
}

export default SignInForm;