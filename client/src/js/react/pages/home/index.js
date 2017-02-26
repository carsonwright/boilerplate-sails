import React from 'react';

class Page extends React.Component {
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