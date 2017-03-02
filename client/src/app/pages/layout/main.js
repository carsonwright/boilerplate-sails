import React from 'react';
import Component from '../../config/component';
import MenuBar from './_menubar';
import MenuBarController from '../../controllers/menubar';

class Main extends Component {
    render(){
        return (
            <div>
                <MenuBar {...this.props} controller={MenuBarController} />
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Main;