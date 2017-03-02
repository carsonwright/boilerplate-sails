import React from 'react';
import Component from '../../config/component';
import style from './_logo.scss';

class Logo extends Component {
    render(){
        return (
            <div className={style.logo}>
                Your Logo
            </div>
        )
    }
}

export default Logo;