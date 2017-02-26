import React from 'react';
import Component from '../../config/component';

class Page extends Component {
    render(){
        return (
            <div>
                Home Page
                <a href="/sessions">Sign In</a>
                <a href="/signup">Sign Up</a>
            </div>
        )
    }
}

export default Page;