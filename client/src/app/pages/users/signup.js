import React from 'react';
import Component from '../../config/component';
import SignUpForm from './_sign_up_form';
import SignUpController from '../../controllers/signup';

class Page extends Component {
    render(){
        return (
            <div>
                Registration
                <SignUpForm controller={SignUpController} />
            </div>
        )
    }
}

export default Page;