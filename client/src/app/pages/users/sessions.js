import React from 'react';
import Component from '../../config/component';
import SignInForm from './_sign_in_form';
import SignInController from '../../controllers/signin';

class Page extends Component {
    render(){
        return (
            <div>
                Sessions
                <SignInForm controller={SignInController} />
            </div>
        );
    }
}

export default Page;