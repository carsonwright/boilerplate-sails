import React from 'react';
import Component from '../../config/component';
import Layout from '../layout/main';
import Sessions from '../users/sessions';

class Page extends Component {
    render(){
        return (
            <Layout {...this.props}>
                Home Page
                {this.props.me ? (<div>Logged In Content</div>):(
                    <span>
                        <Sessions key={'sessions'} />
                        <a href="/signup">Sign Up</a>
                    </span>
                )}
            </Layout>
        )
    }
}

export default Page;