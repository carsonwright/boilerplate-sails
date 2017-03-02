import React from 'react';
import Component from '../../config/component';
import Logo from './_logo';
import {Dropdown} from '../helpers';

class MenuBar extends Component {
    constructor(props){
        super(props, ['logout'])
    }
    render(){
        return (
            <div>
                <Logo {...this.props} />
                <nav>
                    {!this.props.me || (
                        <Dropdown button={this.props.me.email}>
                            <a href="/" onClick={this.logout} position='right'>Logout</a>
                        </Dropdown>
                    )}
                </nav>
            </div>
        )
    }
}

export default MenuBar;